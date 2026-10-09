/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://next-pizza-gilt.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.7,
    generateIndexSitemap: true,
    exclude: ['/admin/*', '/404', '/server-sitemap.xml', '/api/*'],
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: 'Googlebot-Image', allow: ['/'] },
        ],
        additionalSitemaps: ['https://next-pizza-gilt.vercel.app/sitemap.xml'],
    },
};
