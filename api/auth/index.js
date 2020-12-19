import puppeteer from 'puppeteer'
import puppeteerCore from 'puppeteer-core'
import chrome from 'chrome-aws-lambda'

const isLamda = process.env.AWS_LAMBDA_FUNCTION_VERSION

async function auth(req, res) {
  const { id, password } = req.body

  const browser = isLamda
    ? await puppeteerCore.launch({
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless
      })
    : await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('https://soccerline.kr/member/login?logout')

  await page.type('input[type="text"]', id)
  await page.type('input[type="password"]', password)
  await page.keyboard.press('Enter')

  await page.waitForNavigation()

  const rawCookies = await page.cookies()
  const cookies = rawCookies.filter((cookie) =>
    ['SESSION', 'SOCCERLINE'].some((name) => cookie.name.startsWith(name))
  )

  await browser.close()

  res.json(cookies)
}

export default auth
