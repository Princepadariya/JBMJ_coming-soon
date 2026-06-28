const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Go to the ICAI Wikipedia page
  await page.goto('https://en.wikipedia.org/wiki/Institute_of_Chartered_Accountants_of_India');
  
  // Find the logo image (the infobox image)
  const imageElement = await page.$('.infobox-image img');
  
  if (imageElement) {
    // Take a screenshot of just the image element
    await imageElement.screenshot({ path: 'icai_logo.png' });
    console.log('Successfully saved icai_logo.png');
  } else {
    console.log('Image element not found');
  }

  await browser.close();
})();
