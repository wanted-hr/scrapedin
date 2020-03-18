const agents = [
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36",
    //"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
    //"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
    //"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:34.0) Gecko/20100101 Firefox/34.0",
    //"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
    //"Mozilla/5.0 (Windows NT 6.3; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0",
    //"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
    //"Mozilla/5.0 (Windows NT 6.2; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0",
    //"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
  ];

const QUOTA_GUARD_USER = "7mn60dah69jyx2"
const QUOTA_GUARD_PASS = "dx7e285lx4aqaobuaan3b1chsgxy0g"

module.exports = async (browser, cookies, url) => {
  const page = await browser.newPage()

  await page.authenticate({
    username: QUOTA_GUARD_USER,
    password: QUOTA_GUARD_PASS,
  });

  if(cookies) {
    await page.setCookie(...cookies)
  }
  await page.setUserAgent(agents[Math.floor(Math.random()*agents.length)])
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8' })
  await page.setViewport({
    width: 1920,
    height: 1080
  })

  await page.goto(url)

  return page
}
