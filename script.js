function renderItems(c_data_items) {
  const saved = JSON.parse(
      localStorage.getItem("collection") || "[]",
  );
  let total = 0, checked = 0;
  const rarities = [
      "common",
      "uncommon",
      "rare",
      "legendary",
      "mythical",
  ];
  const counts = {};
  rarities.forEach((r) => {
      const grid = document.getElementById(r);
      if (!grid) return;
      let collected = 0;
      c_data_items[r].forEach((item) => {
        total++;
        const card = document.createElement("div");
        card.className = "card";
        if (saved.includes(item.name) && !item.invalid) {
            card.classList.add("checked");
            collected++;
            checked++;
        }

        if(item.invalid) card.classList.add("invalid");

        card.innerHTML = `<img src="${item.img}" alt="${item.name}"><span>${item.name}</span>`;
        card.addEventListener("click", () => {
            if(item.invalid) return;
            card.classList.toggle("checked");
            const cur = JSON.parse(
              localStorage.getItem("collection") || "[]",
            );
            if (card.classList.contains("checked")) {
              cur.push(item.name);
            } else {
              const i = cur.indexOf(item.name);
              if (i > -1) cur.splice(i, 1);
            }
            localStorage.setItem("collection", JSON.stringify(cur));
            updateCounter();
        });
        grid.appendChild(card);
      });
      counts[r] = { total: c_data_items[r].length, collected };
  });
  updateCounter(c_data_items, counts, total, checked);
}

function updateCounter(c_data_items, counts, total, checked) {
  if (!counts) {
      const saved = JSON.parse(
        localStorage.getItem("collection") || "[]",
      );
      checked = saved.length;
      total = Object.values(c_data_items).reduce(
        (a, v) => a + v.length,
        0,
      );
      counts = {};
      for (const [r, arr] of Object.entries(c_data_items)) {
        counts[r] = {
            total: arr.length,
            collected: arr.filter((x) => saved.includes(x.name))
              .length,
        };
      }
  }

  const c = document.getElementById("counter");
    c.innerHTML = `<strong>${c_data_items.info.text_label}:</strong> ${checked}/${total}<br>
  🟦 Comuns: ${counts.common.collected}/${counts.common.total} · 
  🟩 Incomuns: ${counts.uncommon.collected}/${counts.uncommon.total} · 
  🟪 Raros: ${counts.rare.collected}/${counts.rare.total} · 
  🟨 Lendários: ${counts.legendary.collected}/${counts.legendary.total} · 
  🟥 Míticos: ${counts.mythical.collected}/${counts.mythical.total}`;
}

const listContainer = document.getElementById("titlesList");

function renderTitles() {
  const saved = JSON.parse(localStorage.getItem("titles_collected") || "[]");
  let total = Object.keys(data_titles).length;
  let collected = 0;

  for (const [num, info] of Object.entries(data_titles)) {
    const item = document.createElement("div");
    item.className = "title-item";
    if (saved.includes(num)) {
      item.classList.add("checked");
      collected++;
    }

    item.innerHTML = `
      <div class="title-info">
        <div><span class="title-number">${num}</span><span class="title-name">${info.title}</span></div>
        <div class="title-obtainment">${info.obtainment}</div>
      </div>
    `;

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
  }

  updateCounterTitles(total, collected);
}

function updateCounterTitles(total, collected) {
  const saved = JSON.parse(localStorage.getItem("titles_collected") || "[]");
  collected = saved.length;
  total = Object.keys(data_titles).length;
  const c = document.getElementById("counter");
  c.innerHTML = `<strong>Títulos conquistados:</strong> ${collected}/${total}`;
}
