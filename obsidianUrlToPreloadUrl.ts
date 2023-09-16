import { fetchHTML } from "./fetchHtml";

// get the obsidian url and then transform it to the preload url
export const obsidianUrlToPreloadUrl = async (url: string) => {
  const html = await fetchHTML(url);

  const regex = /window\.preloadPage=f\("([^"]+)"\)/;
  const match = html.match(regex);

  try {
    const preloadPageUrl = match![1];
    return preloadPageUrl;
  } catch (e) {
    console.log(e.message, url);
  }
};
