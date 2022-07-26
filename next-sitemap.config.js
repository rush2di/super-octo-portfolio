/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://www.example.com",
  generateRobotsTxt: true, 
};

export default config;
