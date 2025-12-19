#!/usr/bin/env node
/**
 * 🔍 OLUK.ORG - SEO Health Monitor
 * 
 * Otomatik SEO sağlık kontrolü ve raporlama
 * - Meta tags kontrolü
 * - Sitemap doğrulama
 * - Image optimization kontrolü
 * - Performance metrics
 * - Lighthouse score tahmini
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const SITE_URL = 'https://oluk.org';
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SRC_DIR = path.join(process.cwd(), 'src');

interface SEOIssue {
  severity: 'error' | 'warning' | 'info';
  category: string;
  message: string;
  fix?: string;
}

interface SEOReport {
  timestamp: string;
  score: number;
  issues: SEOIssue[];
  stats: {
    totalPages: number;
    imagesOptimized: number;
    metaTagsComplete: number;
    structuredData: number;
  };
}

const issues: SEOIssue[] = [];

function checkSitemapExists(): void {
  const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    issues.push({
      severity: 'error',
      category: 'Sitemap',
      message: 'sitemap.xml bulunamadı',
      fix: 'npm run seo:generate komutunu çalıştırın',
    });
    return;
  }

  const content = fs.readFileSync(sitemapPath, 'utf-8');
  const urlCount = (content.match(/<url>/g) || []).length;

  if (urlCount === 0) {
    issues.push({
      severity: 'error',
      category: 'Sitemap',
      message: 'Sitemap boş',
      fix: 'npm run seo:generate komutunu çalıştırın',
    });
  } else if (urlCount < 5) {
    issues.push({
      severity: 'warning',
      category: 'Sitemap',
      message: `Sitemap'te sadece ${urlCount} URL var`,
      fix: 'Tüm sayfaların sitemap\'e eklendiğinden emin olun',
    });
  } else {
    issues.push({
      severity: 'info',
      category: 'Sitemap',
      message: `✅ ${urlCount} URL başarıyla indexlendi`,
    });
  }
}

function checkRobotsTxt(): void {
  const robotsPath = path.join(PUBLIC_DIR, 'robots.txt');
  
  if (!fs.existsSync(robotsPath)) {
    issues.push({
      severity: 'error',
      category: 'Robots.txt',
      message: 'robots.txt bulunamadı',
      fix: 'npm run seo:generate komutunu çalıştırın',
    });
    return;
  }

  const content = fs.readFileSync(robotsPath, 'utf-8');
  
  if (!content.includes('Sitemap:')) {
    issues.push({
      severity: 'error',
      category: 'Robots.txt',
      message: 'Sitemap referansı eksik',
      fix: 'robots.txt\'e Sitemap: satırı ekleyin',
    });
  }

  if (!content.includes('User-agent: *')) {
    issues.push({
      severity: 'warning',
      category: 'Robots.txt',
      message: 'User-agent directive eksik',
    });
  } else {
    issues.push({
      severity: 'info',
      category: 'Robots.txt',
      message: '✅ robots.txt doğru yapılandırılmış',
    });
  }
}

function checkMetaTags(): void {
  const layoutPath = path.join(SRC_DIR, 'app', 'layout.tsx');
  
  if (!fs.existsSync(layoutPath)) {
    issues.push({
      severity: 'error',
      category: 'Meta Tags',
      message: 'layout.tsx bulunamadı',
    });
    return;
  }

  const content = fs.readFileSync(layoutPath, 'utf-8');
  
  const requiredMetaTags = [
    { name: 'title', pattern: /title:/ },
    { name: 'description', pattern: /description:/ },
    { name: 'openGraph', pattern: /openGraph:/ },
    { name: 'twitter', pattern: /twitter:/ },
  ];

  requiredMetaTags.forEach(({ name, pattern }) => {
    if (!pattern.test(content)) {
      issues.push({
        severity: 'warning',
        category: 'Meta Tags',
        message: `${name} meta tag eksik`,
        fix: 'src/lib/seo.ts\'deki metadata fonksiyonlarını kullanın',
      });
    }
  });

  if (content.includes('homeMetadata') || content.includes('generateSEOMetadata')) {
    issues.push({
      severity: 'info',
      category: 'Meta Tags',
      message: '✅ SEO metadata fonksiyonları aktif',
    });
  }
}

function checkStructuredData(): void {
  const layoutPath = path.join(SRC_DIR, 'app', 'layout.tsx');
  const content = fs.readFileSync(layoutPath, 'utf-8');
  
  const schemaTypes = [
    { name: 'Organization', pattern: /Organization/ },
    { name: 'WebSite', pattern: /WebSite/ },
  ];

  let foundSchemas = 0;
  schemaTypes.forEach(({ name, pattern }) => {
    if (pattern.test(content)) {
      foundSchemas++;
    } else {
      issues.push({
        severity: 'warning',
        category: 'Structured Data',
        message: `${name} schema eksik`,
        fix: 'src/lib/seo.ts\'deki schema fonksiyonlarını kullanın',
      });
    }
  });

  if (foundSchemas === schemaTypes.length) {
    issues.push({
      severity: 'info',
      category: 'Structured Data',
      message: `✅ ${foundSchemas} JSON-LD schema aktif`,
    });
  }
}

function checkImageOptimization(): void {
  const constantsPath = path.join(SRC_DIR, 'constants', 'ders1-assets.ts');
  
  if (!fs.existsSync(constantsPath)) {
    issues.push({
      severity: 'warning',
      category: 'Images',
      message: 'Asset constants dosyası bulunamadı',
    });
    return;
  }

  const content = fs.readFileSync(constantsPath, 'utf-8');
  
  if (content.includes('cloudinary.com')) {
    const imageCount = (content.match(/cloudinary\.com/g) || []).length;
    issues.push({
      severity: 'info',
      category: 'Images',
      message: `✅ ${imageCount} görsel CDN üzerinde`,
    });
  } else {
    issues.push({
      severity: 'warning',
      category: 'Images',
      message: 'Görseller CDN üzerinde değil',
      fix: 'Cloudinary\'ye yükleyin ve URL\'leri güncelleyin',
    });
  }
}

function checkPerformanceConfig(): void {
  const nextConfigPath = path.join(process.cwd(), 'next.config.js');
  
  if (!fs.existsSync(nextConfigPath)) {
    issues.push({
      severity: 'warning',
      category: 'Performance',
      message: 'next.config.js bulunamadı',
    });
    return;
  }

  const content = fs.readFileSync(nextConfigPath, 'utf-8');
  
  const optimizations = [
    { name: 'Image optimization', pattern: /images:/ },
    { name: 'Compression', pattern: /compress:/ },
    { name: 'React strict mode', pattern: /reactStrictMode:/ },
  ];

  optimizations.forEach(({ name, pattern }) => {
    if (!pattern.test(content)) {
      issues.push({
        severity: 'info',
        category: 'Performance',
        message: `${name} yapılandırması kontrol edilmeli`,
      });
    }
  });
}

function calculateSEOScore(): number {
  const errorCount = issues.filter((i) => i.severity === 'error').length;
  const warningCount = issues.filter((i) => i.severity === 'warning').length;
  
  // Her error -15 puan, her warning -5 puan
  let score = 100 - (errorCount * 15) - (warningCount * 5);
  
  return Math.max(0, Math.min(100, score));
}

function generateReport(): SEOReport {
  // Sitemap'ten sayfa sayısını al
  const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  let totalPages = 0;
  if (fs.existsSync(sitemapPath)) {
    const content = fs.readFileSync(sitemapPath, 'utf-8');
    totalPages = (content.match(/<url>/g) || []).length;
  }

  // Asset sayısını al
  const constantsPath = path.join(SRC_DIR, 'constants', 'ders1-assets.ts');
  let imagesOptimized = 0;
  if (fs.existsSync(constantsPath)) {
    const content = fs.readFileSync(constantsPath, 'utf-8');
    imagesOptimized = (content.match(/cloudinary\.com/g) || []).length;
  }

  return {
    timestamp: new Date().toISOString(),
    score: calculateSEOScore(),
    issues,
    stats: {
      totalPages,
      imagesOptimized,
      metaTagsComplete: issues.filter((i) => i.category === 'Meta Tags' && i.severity === 'info').length,
      structuredData: issues.filter((i) => i.category === 'Structured Data' && i.severity === 'info').length,
    },
  };
}

function printReport(report: SEOReport): void {
  console.log('\n' + '='.repeat(60));
  console.log('🔍 OLUK.ORG SEO HEALTH REPORT');
  console.log('='.repeat(60) + '\n');

  console.log(`📅 Tarih: ${new Date(report.timestamp).toLocaleString('tr-TR')}`);
  console.log(`🎯 SEO Skoru: ${report.score}/100\n`);

  // Skorlama kategorisi
  let scoreCategory = '';
  let scoreEmoji = '';
  if (report.score >= 90) {
    scoreCategory = 'Mükemmel';
    scoreEmoji = '🏆';
  } else if (report.score >= 70) {
    scoreCategory = 'İyi';
    scoreEmoji = '✅';
  } else if (report.score >= 50) {
    scoreCategory = 'Orta';
    scoreEmoji = '⚠️';
  } else {
    scoreCategory = 'Düşük - İyileştirme Gerekli';
    scoreEmoji = '❌';
  }
  console.log(`${scoreEmoji} Durum: ${scoreCategory}\n`);

  // İstatistikler
  console.log('📊 İstatistikler:');
  console.log(`   Toplam Sayfa: ${report.stats.totalPages}`);
  console.log(`   Optimize Edilmiş Görsel: ${report.stats.imagesOptimized}`);
  console.log(`   Meta Tags: ${report.stats.metaTagsComplete} ✓`);
  console.log(`   Structured Data: ${report.stats.structuredData} ✓\n`);

  // Sorunlar
  const errors = report.issues.filter((i) => i.severity === 'error');
  const warnings = report.issues.filter((i) => i.severity === 'warning');
  const infos = report.issues.filter((i) => i.severity === 'info');

  if (errors.length > 0) {
    console.log('❌ Kritik Sorunlar:');
    errors.forEach((issue) => {
      console.log(`   • ${issue.message}`);
      if (issue.fix) console.log(`     ➜ ${issue.fix}`);
    });
    console.log('');
  }

  if (warnings.length > 0) {
    console.log('⚠️  Uyarılar:');
    warnings.forEach((issue) => {
      console.log(`   • ${issue.message}`);
      if (issue.fix) console.log(`     ➜ ${issue.fix}`);
    });
    console.log('');
  }

  if (infos.length > 0) {
    console.log('✅ Başarılı Kontroller:');
    infos.forEach((issue) => {
      console.log(`   ${issue.message}`);
    });
    console.log('');
  }

  // Öneriler
  console.log('💡 Öneriler:');
  if (report.score < 90) {
    console.log('   1. npm run seo:generate komutunu düzenli çalıştırın');
    console.log('   2. Görselleri Cloudinary CDN\'ye yükleyin');
    console.log('   3. Her sayfada meta tags\'lerin dolu olduğundan emin olun');
    console.log('   4. JSON-LD structured data ekleyin');
  }
  console.log('   5. Google Search Console\'da sitemap\'i gönderin');
  console.log(`   6. ${SITE_URL}/sitemap.xml adresini test edin\n`);

  console.log('='.repeat(60) + '\n');
}

// Ana işlem
async function main() {
  console.log('🚀 SEO Health Check başlatılıyor...\n');

  checkSitemapExists();
  checkRobotsTxt();
  checkMetaTags();
  checkStructuredData();
  checkImageOptimization();
  checkPerformanceConfig();

  const report = generateReport();
  
  // Raporu dosyaya kaydet
  const reportPath = path.join(PUBLIC_DIR, 'seo-health-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');

  printReport(report);

  // Exit code (CI/CD için)
  if (report.score < 50) {
    process.exit(1);
  }
}

main().catch(console.error);
