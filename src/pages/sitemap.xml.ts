import { locales, defaultLang } from "../../i18n.config";

const pages = ["", "dj", "producer", "sound", "bio"];
// Replace with your actual domain if Astro.site is not configured
const site = "https://jowy-portfolio.vercel.app";

export async function GET() {
  const urls = pages.flatMap((page) => {
    return locales.map((lang) => {
      const localePath = lang === defaultLang ? "" : `/${lang}`;
      const pagePath = page === "" ? "" : `/${page}`;
      // Ensure we don't end up with double slashes or empty paths for root
      const path = `${localePath}${pagePath}` || "/";
      return `${site}${path}`;
    });
  });

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
          <url>
            <loc>${url}</loc>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>
        `
        )
        .join("")}
    </urlset>
  `.trim();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
