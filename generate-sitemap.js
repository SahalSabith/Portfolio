import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs'

const sitemap = new SitemapStream({ hostname: 'https://sahalsabith.dev' })

const writeStream = createWriteStream('./public/sitemap.xml')

sitemap.pipe(writeStream)

sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 })
sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.8 })
sitemap.write({ url: '/projects', changefreq: 'monthly', priority: 0.8 })
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.7 })

sitemap.end()

await streamToPromise(sitemap)

console.log('✅ Sitemap created!')