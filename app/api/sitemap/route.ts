import { getServerSideSitemap } from "next-sitemap";

const SITE_URL = process.env.SITE_URL || "";

export async function GET() {
  const now = new Date().toISOString();
  const base = SITE_URL.endsWith("/") ? SITE_URL.slice(0, -1) : SITE_URL;

  try {
    const fields = [
      { loc: `${base}`, lastmod: now, priority: 1.0 },
      { loc: `${base}/blog`, lastmod: now, priority: 0.95 },
      { loc: `${base}/contact`, lastmod: now, priority: 0.95 },
      { loc: `${base}/about`, lastmod: now, priority: 0.95 },
    
    ];

    return getServerSideSitemap(fields);
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    return getServerSideSitemap([
      { loc: `${base}`, lastmod: now, priority: 1.0 },
    ]);
  }
}
