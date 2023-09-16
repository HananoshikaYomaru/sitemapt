export function generateSitemapXml(links: string[]) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${links.map((link) => `<url><loc>${link}</loc></url>`).join("\n")}
      </urlset>`;

  return xml;
}
