import GetSitemapLinks from "get-sitemap-links";

import { RateLimit } from "async-sema";
import { obsidianUrlToPreloadUrl } from "./obsidianUrlToPreloadUrl";
import { generateSitemapXml } from "./generateSitemap";
const sitemapUrl = "https://yomaru.dev/sitemap.xml";

const urls = (await GetSitemapLinks(sitemapUrl)).filter(
  (url) => !url.includes("300+Finance")
);

// run a loop to get all the urls

const newUrls: string[] = [];

const limit = RateLimit(5);

for (const url of urls) {
  await limit();
  const preloadPageUrl = await obsidianUrlToPreloadUrl(url);
  if (preloadPageUrl) newUrls.push(preloadPageUrl);
}

const sitemapXml = await generateSitemapXml(newUrls);

// write this to a file
await Bun.write("./sitemap.xml", sitemapXml);
