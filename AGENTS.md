# OurDream AI Guide decisions

- Build with Astro static output and Markdown content collections.
- Deploy `dist/client` through GitHub-connected Cloudflare Pages.
- Visual direction: premium black, rose, violet, and soft pink; editorial companion-story atmosphere.
- All imagery must show clearly adult, non-explicit subjects. Mainstream swimwear and glamorous fashion imagery are allowed when generated or properly licensed and presented without implying endorsement; nudity, transparent garments, pornographic framing, and sexual acts are not.
- The site is an independent guide and must clearly distinguish itself from the official product.
- SEO/GEO content is people-first and answer-led, with original comparison dimensions, visible authorship and update dates, primary sources, crawlable internal links, matching structured data, sitemap, RSS, and IndexNow.
- Never add companion chat, login, payment, image upload, or collection of private messages.
- Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact for packaging tests.

- Multilingual scope (October 11, 2026): retain every previously published language edition, including About, Contact, Editorial Policy, Privacy and Terms, at its existing URL. The home/blog-only localization rule applies to new sites; do not retire existing translated information pages.
- Translated headings and CTA labels must fit desktop, tablet and mobile layouts. Keep one primary homepage CTA, preserve its configured destination, separate copy from portrait artwork, and check Arabic RTL and long German words.
