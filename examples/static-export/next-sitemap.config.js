/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next-sitemap-x').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  output: 'export', // Set static output here
}

module.exports = config
