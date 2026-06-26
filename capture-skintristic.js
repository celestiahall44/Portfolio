const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('https://skintristic.vercel.app/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(__dirname, 'public/Skintristic.png'), fullPage: false });
  await browser.close();
  console.log('Screenshot saved to public/Skintristic.png');
})().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
