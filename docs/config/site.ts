import { SiteConfig, SiteExampleConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'next-sitemap-x',
  description: 'Sitemap Generator For Next.Js Application',
  url:
    process.env.NEXT_PUBLIC_APP_URL ??
    'https://next-sitemap-x.ariesclark.com/',
  links: {
    twitter: 'https://twitter.com/ariesclark',
    github: 'https://github.com/ariesclark/next-sitemap-x',
  },
}

export const siteExampleConfig: SiteExampleConfig = {
  name: 'next-sitemap-x - Examples',
  description: 'Examples where next-sitemap-x has been utilized.',
  url: 'https://next-sitemap-x.ariesclark.com/examples',
  ogImage: 'https://next-sitemap-x.ariesclark.com/examples.jpg',
  links: {
    twitter: 'https://twitter.com/ariesclark',
    github: 'https://github.com/ariesclark/next-sitemap-x',
  },
}
