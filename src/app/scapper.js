const puppeteer = require("puppeteer");
const axios = require("axios");
const cheerio = require("cheerio");

// URL da planilha pública do Google Sheets
// Adicione o link de uma outra planilha pública caso queira alterar os dados
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1G7j5k5l7B6LSGPVmhPr1UUnfeq3Tc057AyhKBWivm6A/edit?usp=sharing";

// Função para obter os dados da planilha
async function getSheetData() {
  const { data } = await axios.get(SHEET_URL);
  const $ = cheerio.load(data);
  const rows = $("table tbody tr");
  const sheetData = [];

  rows.each((index, row) => {
    if (index === 0) return; // Ignorar a primeira linha
    const cells = $(row).find("td");
    const rowData = {
      name: $(cells[0]).text().trim(),
      email: $(cells[1]).text().trim(),
      age: parseInt($(cells[2]).text().trim(), 10),
    };
    if (rowData.name === "" || rowData.email === "" || !rowData.age) {
      return;
    }
    sheetData.push(rowData);
  });

  return sheetData;
}

// Função para preencher o formulário
async function fillForm(userData) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Altere para a URL do website com o formulário desejado
  await page.goto("http://localhost:3000");

  // Altere para o id do campo desejado
  // Ou adicione novos campos a partir do id do campo
  await page.type("#name", userData.name);
  await page.type("#email", userData.email);
  await page.click("#idade");
  await page.keyboard.press("Backspace");
  await page.type("#idade", userData.age.toString());

  await page.click('button[type="submit"]');
  await new Promise((r) => setTimeout(r, 100));

  await browser.close();
}

(async () => {
  const sheetData = await getSheetData();

  for (const userData of sheetData) {
    console.log(`Enviando dados: ${JSON.stringify(userData)}`);
    await fillForm(userData);
  }

  console.log("Todos os dados foram enviados.");
})();
