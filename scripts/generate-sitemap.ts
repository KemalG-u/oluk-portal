#!/usr/bin/env node
/**
 * 🔍 OLUK.ORG - Otomatik Sitemap Generator
 * 
 * Domain Authority ve SEO puanını yükseltmek için:
 * - Tüm sayfaları otomatik keşfeder
 * - Öncelik skorları hesaplar
 * - Güncelleme sıklıklarını optimize eder
 * - XML sitemap ve JSON feed oluşturur
 */

import fs from 'fs';
import path from 'path';
import { dersler } from '../src/lib/dersler-data';

const DOMAIN = 'https://oluk.org';
const OUTPUT_DIR = path.join(process.cwd(), 'public');

interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

// SEO Öncelik Skorları (0.0 - 1.0)
const PRIORITIES = {
  homepage: 1.0,
  derslerIndex: 0.9,
  dersDetail: 0.8,
  seansDetail: 0.7,
  static: 0.6,
};

// Google için optimal güncelleme sıklıkları
const CHANGE_FREQUENCIES = {
  homepage: 'daily' as const,
  derslerIndex: 'weekly' as const,
  dersDetail: 'weekly' as const,
  seansDetail: 'monthly' as const,
  static: 'monthly' as const,
};

function generateSitemapURLs(): SitemapURL[] {
  const urls: SitemapURL[] = [];
  const today = new Date().toISOString().split('T')[0];

  // 1. Ana sayfa (en yüksek öncelik)
  urls.push({
    loc: `${DOMAIN}/`,
    lastmod: today,
    changefreq: CHANGE_FREQUENCIES.homepage,
    priority: PRIORITIES.homepage,
  });

  // 2. Dersler index sayfası
  urls.push({
    loc: `${DOMAIN}/dersler`,
    lastmod: today,
    changefreq: CHANGE_FREQUENCIES.derslerIndex,
    priority: PRIORITIES.derslerIndex,
  });

  // 3. Her ders için detay sayfaları
  Object.keys(dersler).forEach((slug) => {
    const ders = dersler[slug as keyof typeof dersler];

    // Ders ana sayfası
    urls.push({
      loc: `${DOMAIN}/dersler/${slug}`,
      lastmod: today,
      changefreq: CHANGE_FREQUENCIES.dersDetail,
      priority: PRIORITIES.dersDetail,
    });

    // Her seans detay sayfası
    ders.seanslar.forEach((seans) => {
      urls.push({
        loc: `${DOMAIN}/dersler/${slug}/${seans.id}`,
        lastmod: today,
        changefreq: CHANGE_FREQUENCIES.seansDetail,
        priority: PRIORITIES.seansDetail,
      });
    });
  });

  return urls;
}

function generateXMLSitemap(urls: SitemapURL[]): string {
  const urlEntries = urls
    .map(
      (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urlEntries}
</urlset>
`;
}

function generateRobotsTxt(): string {
  return `# oluk.org - SEO Optimized robots.txt
# Generated: ${new Date().toISOString()}

User-agent: *
Allow: /

# Hızlı indexleme için özel bot'lar
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 0

# İstatistikler
User-agent: Google-InspectionTool
Allow: /

# Disallow admin/private paths (gelecek için)
Disallow: /api/
Disallow: /admin/

# Sitemap location
Sitemap: ${DOMAIN}/sitemap.xml
Sitemap: ${DOMAIN}/sitemap-index.xml
`;
}

function generateSitemapIndex(): string {
  const today = new Date().toISOString().split('T')[0];

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${DOMAIN}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>
`;
}

// JSON feed (modern SEO için)
function generateJSONFeed(urls: SitemapURL[]) {
  return {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'OLUK - Akışın Kanalı, Dönüşümün Yolu',
    home_page_url: DOMAIN,
    feed_url: `${DOMAIN}/feed.json`,
    description: 'Yücel Balkancı dersleri ile kendinizi keşfedin',
    icon: `${DOMAIN}/images/logo.png`,
    favicon: `${DOMAIN}/favicon.ico`,
    language: 'tr',
    items: urls.slice(0, 20).map((url) => ({
      id: url.loc,
      url: url.loc,
      date_modified: url.lastmod,
      _priority: url.priority,
      _changefreq: url.changefreq,
    })),
  };
}

// Stats için
function generateSEOStats(urls: SitemapURL[]) {
  const stats = {
    total_pages: urls.length,
    last_generated: new Date().toISOString(),
    priorities: {
      high: urls.filter((u) => u.priority >= 0.8).length,
      medium: urls.filter((u) => u.priority >= 0.5 && u.priority < 0.8).length,
      low: urls.filter((u) => u.priority < 0.5).length,
    },
    change_frequency: {
      daily: urls.filter((u) => u.changefreq === 'daily').length,
      weekly: urls.filter((u) => u.changefreq === 'weekly').length,
      monthly: urls.filter((u) => u.changefreq === 'monthly').length,
    },
    estimated_crawl_budget: urls.length * 2, // Ortalama 2 request/page
  };

  return stats;
}

// Ana işlem
async function main() {
  console.log('🚀 OLUK.ORG SEO Sitemap Generator başlatılıyor...\n');

  // URL'leri oluştur
  const urls = generateSitemapURLs();
  console.log(`✅ ${urls.length} URL keşfedildi`);

  // XML Sitemap
  const xmlSitemap = generateXMLSitemap(urls);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), xmlSitemap, 'utf-8');
  console.log('✅ sitemap.xml oluşturuldu');

  // Sitemap Index
  const sitemapIndex = generateSitemapIndex();
  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-index.xml'), sitemapIndex, 'utf-8');
  console.log('✅ sitemap-index.xml oluşturuldu');

  // robots.txt
  const robotsTxt = generateRobotsTxt();
  fs.writeFileSync(path.join(OUTPUT_DIR, 'robots.txt'), robotsTxt, 'utf-8');
  console.log('✅ robots.txt güncellendi');

  // JSON Feed
  const jsonFeed = generateJSONFeed(urls);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'feed.json'), JSON.stringify(jsonFeed, null, 2), 'utf-8');
  console.log('✅ feed.json oluşturuldu');

  // İstatistikler
  const stats = generateSEOStats(urls);
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'sitemap-stats.json'),
    JSON.stringify(stats, null, 2),
    'utf-8'
  );
  console.log('✅ sitemap-stats.json oluşturuldu');

  console.log('\n📊 SEO İstatistikleri:');
  console.log(`   Toplam sayfa: ${stats.total_pages}`);
  console.log(`   Yüksek öncelikli: ${stats.priorities.high}`);
  console.log(`   Orta öncelikli: ${stats.priorities.medium}`);
  console.log(`   Düşük öncelikli: ${stats.priorities.low}`);
  console.log(`   Tahmini crawl budget: ${stats.estimated_crawl_budget} request\n`);

  console.log('🎉 Tüm SEO dosyaları başarıyla oluşturuldu!');
  console.log('\n📝 Sonraki adımlar:');
  console.log('   1. Google Search Console\'a sitemap gönderin:');
  console.log(`      ${DOMAIN}/sitemap.xml`);
  console.log('   2. Bing Webmaster Tools\'a kaydedin');
  console.log('   3. package.json\'a script ekleyin:');
  console.log('      "seo:generate": "tsx scripts/generate-sitemap.ts"');
}

main().catch(console.error);
