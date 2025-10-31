import fs from "fs";
import https from "https";
import puppeteer from "puppeteer";

const WIKI_URL = "https://blox-fruits.fandom.com/wiki/Blox_Fruits";
const DIR = "./images";

function limparNome(url) {
  const match = url.match(/\/([^\/]+\.png)/i);
  if (!match) return "image.png";
  const nome = match[1]
    .replace(/%28/g, "(")
    .replace(/%29/g, ")")
    .replace(/%27/g, "'")
    .replace(/%20/g, "_")
    .replace(/[^a-zA-Z0-9()_'-.]/g, "_");
  return nome;
}

async function baixarImagem(url) {
  return new Promise((resolve) => {
    if (!url.startsWith("https")) url = "https:" + url;
    const nome = limparNome(url);
    const caminho = `${DIR}/${nome}`;
    if (fs.existsSync(caminho)) return resolve(nome);

    https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode !== 200) {
        console.log(`❌ ${res.statusCode} → ${nome}`);
        res.resume();
        return resolve(null);
      }
      const file = fs.createWriteStream(caminho);
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log(`✅ Baixado: ${nome}`);
        resolve(nome);
      });
    }).on("error", (err) => {
      console.log(`⚠️ Erro: ${err.message}`);
      resolve(null);
    });
  });
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 300);
    });
  });
}

async function main() {
  if (!fs.existsSync(DIR)) fs.mkdirSync(DIR);

  console.log("🧭 Iniciando Puppeteer...");
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
    ],
  });

  const page = await browser.newPage();
  console.log("🌐 Acessando página...");
  await page.goto(WIKI_URL, { waitUntil: "domcontentloaded", timeout: 0 });

  console.log("⏳ Rolando até o fim para carregar todas as imagens...");
  await autoScroll(page);
  await new Promise((r) => setTimeout(r, 6000));

  console.log("📸 Extraindo imagens...");
  const imgs = await page.evaluate(() => {
    const arr = [];
    document.querySelectorAll("img").forEach((img) => {
      const src = img.getAttribute("src") || img.getAttribute("data-src");
      if (src && src.includes("roblox-blox-piece") && src.includes(".png")) {
        arr.push(src.startsWith("//") ? "https:" + src : src);
      }
    });
    return arr;
  });

  console.log(`🔍 Encontradas ${imgs.length} imagens.`);
  const baixadas = [];
  for (const url of imgs) {
    const nome = await baixarImagem(url);
    if (nome) baixadas.push(nome);
  }

  await browser.close();
  console.log(`🎉 ${baixadas.length} imagens baixadas com sucesso!`);
}

main();
