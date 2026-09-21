import { chromium } from "playwright";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });
const page = await ctx.newPage();
await page.goto("http://localhost:5199", { waitUntil: "networkidle", timeout: 20000 });
await page.waitForTimeout(1200);
await page.evaluate(() => {
  const el = document.getElementById('work');
  if (el) el.scrollIntoView({ block: 'start' });
});
await page.waitForTimeout(1200);
await page.screenshot({ path: "work-section.png" });
await page.locator('.work-frame').first().click();
await page.waitForTimeout(900);
await page.screenshot({ path: "work-overlay.png" });
await browser.close();
console.log("done");
