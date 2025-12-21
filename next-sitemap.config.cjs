/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://oluk.org',
  generateRobotsTxt: false, // Zaten var, üzerine yazmasın
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
  
  transform: async (config, path) => {
    // Ana sayfa en yüksek öncelik
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Dersler yüksek öncelik
    if (path.startsWith('/dersler')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Sırdaş orta-yüksek öncelik
    if (path === '/sirdas') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Statik sayfalar orta öncelik
    if (['/hakkinda', '/sss', '/iletisim'].includes(path)) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      }
    }
    
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
