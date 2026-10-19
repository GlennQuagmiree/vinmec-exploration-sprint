const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto(`file://${path.resolve('index.html')}`, {
    waitUntil: 'networkidle0'
  });
  
  await page.pdf({
    path: 'slides.pdf',
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' }
  });
  
  console.log('PDF created: slides.pdf');
  await browser.close();
})();
