import { getBrowser } from '@cbcruk/puppeteer'

async function auth(req, res) {
  const { id, password } = req.body

  const browser = await getBrowser()
  const page = await browser.newPage()

  await page.goto(`${process.env.API_URL}/member/login?logout`)

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
