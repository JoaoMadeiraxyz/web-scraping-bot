# web-scraping-bot

## Estrutura do Projeto
- **page.js:** Contém o formulário para preenchimento.
- **scrapper.js:** Contém o scrapper que irá recolher os dados da planilha e preencher no formulário.

### Configuração do Ambiente
1. **Instalar Dependências:**
   ```bash
   npm install
2. **Defina os Dados a Serem Preenchidos:**
   ```javascript
   // URL da planilha pública do Google Sheets
   // Adicione o link de uma outra planilha pública caso queira alterar os dados
   const SHEET_URL =
     "https://docs.google.com/spreadsheets/d/1G7j5k5l7B6LSGPVmhPr1UUnfeq3Tc057AyhKBWivm6A/edit?usp=sharing";
4. **Inicie o Servidor:**
   ```bash
   npm run dev
5. **Execute o Scrapper:** Em outro terminal execute
   ```bash
   node src/app/scrapper.js

## Alterar formulário
1. **Alterar website:**
   ```javascript
   // Altere para a URL do website com o formulário desejado
   await page.goto("http://localhost:3000");
2. **Alterar campos:**
   ```javascript
   // Altere para o id do campo desejado
   // Ou adicione novos campos a partir do id
   await page.type("#name", userData.name);
   await page.type("#email", userData.email);
   await page.click("#idade");
   await page.keyboard.press("Backspace");
   await page.type("#idade", userData.age.toString());
