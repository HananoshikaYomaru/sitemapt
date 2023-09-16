Bun.serve({
  async fetch(req) {
    return new Response(await Bun.file("sitemap.xml"));
  },
});

console.log("Serving sitemap.xml at http://localhost:3000");
