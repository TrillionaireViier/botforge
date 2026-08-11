import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  
  await page.goto('https://botforge-blue.vercel.app/app/user/backtesting', { waitUntil: 'networkidle2' });
  
  // Wait for button to be visible
  await page.waitForSelector('button');
  
  const buttonText = await page.$eval('button', el => el.textContent);
  console.log('Button text initially:', buttonText);
  
  // Click the button
  await page.click('button');
  console.log('Clicked button. Waiting 3 seconds...');
  
  // Wait 3 seconds
  await new Promise(r => setTimeout(r, 3000));
  
  // Check if results appeared
  const bodyText = await page.$eval('body', el => el.textContent);
  if (bodyText.includes('Чистая Прибыль')) {
    console.log('SUCCESS: Mock results found!');
  } else {
    console.log('FAIL: Mock results NOT found!');
    if (bodyText.includes('Запуск симуляции')) {
      console.log('Still spinning...');
    }
  }
  
  await browser.close();
})();
