/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://pachimond-attorneys.vercel.app/",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ["/studio"],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.SITE_URL || "https://pachimond-attorneys.vercel.app/"}api/sitemap`
    ],
  },
};
