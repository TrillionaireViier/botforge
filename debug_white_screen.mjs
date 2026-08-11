import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

  try {
    await page.goto('https://botforge-blue.vercel.app/app', { waitUntil: 'networkidle2' });
    console.log('Page loaded');
  } catch (e) {
    console.log('Navigation error:', e);
  }
  
  await browser.close();
})();
