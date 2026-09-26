import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/zande/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const base = process.argv[2] || "http://127.0.0.1:4321";
const browser = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
try {
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktop.goto(`${base}/ja/blog/ourdream-ai-vs-candy-ai/`);
  await desktop.locator(".language-menu summary").click();
  await desktop.locator('.language-menu a[lang="ar"]').click();
  await desktop.waitForURL("**/ar/blog/ourdream-ai-vs-candy-ai/");
  if (await desktop.locator("html").getAttribute("dir") !== "rtl") throw Error("Article language switch lost Arabic RTL");
  await desktop.locator(".language-menu summary").click();
  await desktop.locator('.language-menu a[lang="en"]').click();
  await desktop.waitForURL("**/blog/ourdream-ai-vs-candy-ai/");
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, deviceScaleFactor: 1 });
  await mobile.goto(`${base}/zh-hant/`);
  await mobile.locator("[data-menu-button]").click();
  const blog = mobile.locator("[data-mobile-nav] a").filter({ hasText: "比較文章" });
  if (!(await blog.isVisible())) throw Error("Localized mobile navigation did not open");
  await blog.click();
  await mobile.waitForURL("**/zh-hant/blog/");
  console.log("Article language switching and Traditional Chinese mobile navigation passed.");
} finally { await browser.close(); }
