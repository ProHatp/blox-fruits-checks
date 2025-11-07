function renderItems(c_data_items) {
  const saved = JSON.parse(localStorage.getItem("collection") || "[]");
  const awaken_saved = JSON.parse(localStorage.getItem("awakened_fruits") || "[]");
  const mastery_saved = JSON.parse(localStorage.getItem("fruit_mastery") || "{}");

  let total = 0, checked = 0;
  const rarities = ["common", "uncommon", "rare", "legendary", "mythical"];
  const counts = {};

  rarities.forEach((r) => {
    const grid = document.getElementById(r);
    if (!grid) return;

    let collected = 0;
    c_data_items[r].forEach((item) => {
      total++;
      const card = document.createElement("div");
      card.className = "card";

      // cor especial se tiver segundo despertar
      if (item.second_awakening) card.classList.add("second-awakening");

      // fruta coletada
      if (saved.includes(item.name) && !item.invalid) {
        card.classList.add("checked");
        collected++;
        checked++;
      }

        console.log(c_data_items.info)

      // HTML do card
      card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <span class="fruit-name">${item.name}</span>
        <div class="fruit-extra">
          ${
            item.second_awakening
              ? `<label class="awaken-label">
                  <input type="checkbox" class="awaken-checkbox" ${awaken_saved.includes(item.name) ? "checked" : ""}>
                  🌙 Segundo Despertar
                 </label>`
              : ""
          }
            ${c_data_items.info.maestria 
              ? `<label class="mastery-label">
                  ⚔️ Mestria:
                  <input type="number" min="0" max="600" class="mastery-input" value="${mastery_saved[item.name] || item.mestria_level || 0}">
                </label>` 
              : ""}
        </div>
      `;

      // clique principal: marcar fruta como coletada
      card.addEventListener("click", (e) => {
        // evita que o clique em input/checkbox acione
        if (e.target.tagName === "INPUT" || e.target.tagName === "LABEL") return;

        if (item.invalid) return;
        card.classList.toggle("checked");
        const cur = JSON.parse(localStorage.getItem("collection") || "[]");
        if (card.classList.contains("checked")) {
          if (!cur.includes(item.name)) cur.push(item.name);
        } else {
          const i = cur.indexOf(item.name);
          if (i > -1) cur.splice(i, 1);
        }
        localStorage.setItem("collection", JSON.stringify(cur));
        updateCounter(c_data_items);
      });

      // controle: segundo despertar
      const awakenBox = card.querySelector(".awaken-checkbox");
      if (awakenBox) {
        awakenBox.addEventListener("change", () => {
          let awakenList = JSON.parse(localStorage.getItem("awakened_fruits") || "[]");
          if (awakenBox.checked) {
            if (!awakenList.includes(item.name)) awakenList.push(item.name);
          } else {
            awakenList = awakenList.filter((x) => x !== item.name);
          }
          localStorage.setItem("awakened_fruits", JSON.stringify(awakenList));
        });
      }

      // controle: mestria
      if(c_data_items.info.maestria ) {
        const masteryInput = card.querySelector(".mastery-input");
        masteryInput.addEventListener("input", () => {
          let mastery = JSON.parse(localStorage.getItem("fruit_mastery") || "{}");
          mastery[item.name] = parseInt(masteryInput.value) || 0;
          localStorage.setItem("fruit_mastery", JSON.stringify(mastery));
        });
      }

      grid.appendChild(card);
    });
    counts[r] = { total: c_data_items[r].length, collected };
  });

  updateCounter(c_data_items, counts, total, checked);
}

function updateCounter(c_data_items, counts, total, checked) {
  if (!c_data_items) return;

  const saved = JSON.parse(localStorage.getItem("collection") || "[]");
  const rarities = ["common", "uncommon", "rare", "legendary", "mythical"];

  checked = 0;
  total = 0;
  counts = {};

  rarities.forEach((r) => {
    const arr = c_data_items[r] || [];
    const collected = arr.filter((x) => saved.includes(x.name)).length;
    counts[r] = { total: arr.length, collected };
    total += arr.length;
    checked += collected;
  });

  const awaken_saved = JSON.parse(localStorage.getItem("awakened_fruits") || "[]");
  const all_awakenables = rarities.flatMap(r => (c_data_items[r] || []).filter(x => x.second_awakening));
  const awaken_total = all_awakenables.length;
  const awaken_done = all_awakenables.filter(x => awaken_saved.includes(x.name)).length;

  const c = document.getElementById("counter");
  c.innerHTML = `
    <strong>${c_data_items.info.text_label}:</strong> ${checked}/${total}<br>
    🟦 Comuns: ${counts.common.collected}/${counts.common.total} · 
    🟩 Incomuns: ${counts.uncommon.collected}/${counts.uncommon.total} · 
    🟪 Raros: ${counts.rare.collected}/${counts.rare.total} · 
    🟨 Lendários: ${counts.legendary.collected}/${counts.legendary.total} · 
    🟥 Míticos: ${counts.mythical.collected}/${counts.mythical.total}
    ${all_awakenables.length ? `<br>🌙 Segundos Despertares: ${awaken_done}/${awaken_total}` : ""}
  `;
}

const listContainer = document.getElementById("titlesList");

function renderTitles(filter = "") {
  listContainer.innerHTML = ""; // limpa lista

  const saved = JSON.parse(localStorage.getItem("titles_collected") || "[]");
  const entries = Object.entries(data_titles);
  const lowerFilter = filter.toLowerCase();

  let total = entries.length;
  let collected = 0;
  let shown = 0;

  for (const [num, info] of entries) {
    // aplica o filtro (busca por número ou nome)
    if (
      filter &&
      !num.toLowerCase().includes(lowerFilter) &&
      !info.title.toLowerCase().includes(lowerFilter)
    ) continue;

    const item = document.createElement("div");
    item.className = "title-item";

    if (saved.includes(num)) {
      item.classList.add("checked");
      collected++;
    }

    item.innerHTML = `
      <div class="title-info">
        <div>
          <span class="title-number">${num}</span>
          <span class="title-name">${info.title}</span>
        </div>
        <div class="title-obtainment">${info.obtainment}</div>
      </div>
    `;

    // clique para marcar como conquistado
    item.addEventListener("click", () => {
      item.classList.toggle("checked");
      let stored = JSON.parse(localStorage.getItem("titles_collected") || "[]");
      if (item.classList.contains("checked")) {
        if (!stored.includes(num)) stored.push(num);
      } else {
        stored = stored.filter(id => id !== num);
      }
      localStorage.setItem("titles_collected", JSON.stringify(stored));
      updateCounterTitles();
    });

    listContainer.appendChild(item);
    shown++;
  }

  updateCounterTitles(total, collected, shown);
}

function updateCounterTitles(total, collected, shown) {
  const saved = JSON.parse(localStorage.getItem("titles_collected") || "[]");
  collected = saved.length;
  total = Object.keys(data_titles).length;

  const c = document.getElementById("counter");
  if (shown !== undefined && shown !== total) {
    c.innerHTML = `<strong>Títulos conquistados:</strong> ${collected}/${total} — Mostrando ${shown}`;
  } else {
    c.innerHTML = `<strong>Títulos conquistados:</strong> ${collected}/${total}`;
  }
}

function searchTitles() {
  const input = document.getElementById("searchInput");
  renderTitles(input.value);
}

function renderFish(c_data_items) {
  const saved = JSON.parse(localStorage.getItem("fish_collection") || "[]");
  let total = 0, checked = 0;
  const rarities = ["common", "uncommon", "rare", "legendary", "mythical", "unknown"];
  const counts = {};
  let idCounter = 1;

  // ====== BARRA DE PESQUISA (igual à dos títulos) ======
  const searchBox = document.createElement("div");
  searchBox.className = "search-box";
  searchBox.innerHTML = `
    <input type="text" id="searchInput" placeholder="🔍 Buscar peixe por nome ou ID...">
  `;
  document.body.insertBefore(searchBox, document.querySelector(".header_distance").nextSibling);

  // ====== RENDERIZAÇÃO DOS PEIXES ======
  rarities.forEach((r) => {
    const grid = document.getElementById(r);
    if (!grid) return;

    let collected = 0;
    c_data_items[r].forEach((item) => {
      const fishId = idCounter.toString().padStart(3, "0");
      item.id = fishId;
      idCounter++;
      total++;

      const card = document.createElement("div");
      card.className = "card";
      card.dataset.name = item.name.toLowerCase();
      card.dataset.id = fishId;

      if (saved.includes(item.name)) {
        card.classList.add("checked");
        collected++;
        checked++;
      }

      card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <span class="fish-id">#${fishId}</span>
        <span class="fish-name">${item.name}</span>
        <div class="fish-info">
          <small><strong>📍 Local:</strong> ${item.details.location}</small><br>
          <small><strong>🪱 Isca:</strong> ${item.details.bait}</small><br>
          <small><strong>⚖️ Peso:</strong> ${item.details.min} — ${item.details.max}</small>
        </div>
      `;

      card.addEventListener("click", () => {
        card.classList.toggle("checked");
        const cur = JSON.parse(localStorage.getItem("fish_collection") || "[]");
        if (card.classList.contains("checked")) {
          if (!cur.includes(item.name)) cur.push(item.name);
        } else {
          const i = cur.indexOf(item.name);
          if (i > -1) cur.splice(i, 1);
        }
        localStorage.setItem("fish_collection", JSON.stringify(cur));
        updateFishCounter(c_data_items);
      });

      grid.appendChild(card);
    });
    counts[r] = { total: c_data_items[r].length, collected };
  });

  // ====== PESQUISA AO DIGITAR (igual titles) ======
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    document.querySelectorAll(".card").forEach((card) => {
      const nameMatch = card.dataset.name.includes(query);
      const idMatch = card.dataset.id.includes(query);
      card.style.display = query === "" || nameMatch || idMatch ? "block" : "none";
    });
  });

  updateFishCounter(c_data_items, counts, total, checked);
}

function updateFishCounter(c_data_items, counts, total, checked) {
  const saved = JSON.parse(localStorage.getItem("fish_collection") || "[]");
  const rarities = ["common", "uncommon", "rare", "legendary", "mythical", "unknown"];
  checked = 0;
  total = 0;
  counts = {};

  rarities.forEach((r) => {
    const arr = c_data_items[r] || [];
    const collected = arr.filter((x) => saved.includes(x.name)).length;
    counts[r] = { total: arr.length, collected };
    total += arr.length;
    checked += collected;
  });

  const c = document.getElementById("counter");
  c.innerHTML = `
    <strong>${c_data_items.info.text_label}</strong> ${checked}/${total}<br>
    🟦 Comuns: ${counts.common.collected}/${counts.common.total} ·
    🟩 Incomuns: ${counts.uncommon.collected}/${counts.uncommon.total} ·
    🟪 Raros: ${counts.rare.collected}/${counts.rare.total} ·
    🟨 Lendários: ${counts.legendary.collected}/${counts.legendary.total} ·
    🟥 Míticos: ${counts.mythical.collected}/${counts.mythical.total} ·
    ⬛ Desconhecidos: ${counts.unknown.collected}/${counts.unknown.total}
  `;
}
