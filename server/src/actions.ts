import puppeteer from "puppeteer";

export async function scrapeData(url: string) {
  // Launch a new browser instance
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the URL
  await page.goto(url, { waitUntil: "domcontentloaded" });

  // Scrape the title and the main heading of the page
  const data = await page.evaluate(() => {
    const title = document.title;
    const heading = document.querySelector("h1")
      ? document.querySelector("h1")?.innerText
      : "No H1 found";
    return {
      title,
      heading,
    };
  });

  // Close the browser
  await browser.close();

  return data;
}
