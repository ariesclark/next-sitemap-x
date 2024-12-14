/** @type {import('next-sitemap-x').IConfig} */
const config = {
  siteUrl: 'https://example.com',
  generateRobotsTxt: true,
  trailingSlash: true, // Override next.config.js
  additionalPaths: async (config) => [
    await config.transform(
      {
        ...config,
        trailingSlash: false, // Override for custom path
      },
      '/additional-page.html',
    ),
    await config.transform(
      {
        ...config,
      },
      '/page-with-trailing-slash',
    ),
  ],
}

export default config
