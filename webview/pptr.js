const puppeteer = require('puppeteer-core')

;(async () => {
  const app = await puppeteer.launch({
    executablePath:
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    headless: false,
    devtools: false,
    pipe: true,
    defaultViewport: null,
    args: ['--app=https://footballline.vercel.app', '--window-size=414,736']
  })

  app.on('exit', () => process.exit())
})()
