/**
 * 📊 SEO Metadata Utilities
 * 
 * Google, Bing ve sosyal medya platformları için optimize edilmiş meta tag'ler
 */

import type { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'course';
  noindex?: boolean;
  canonical?: string;
}

const SITE_NAME = 'OLUK';
const SITE_URL = 'https://oluk.org';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.jpg`;

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
  canonical,
}: SEOProps): Metadata {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const canonicalURL = canonical || SITE_URL;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Yücel Balkancı', url: SITE_URL }],
    creator: 'OLUK',
    publisher: 'Siber Işık Portal',
    robots: noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    alternates: {
      canonical: canonicalURL,
      languages: {
        tr: canonicalURL,
      },
    },
    openGraph: {
      type: ogType,
      locale: 'tr_TR',
      url: canonicalURL,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@oluk_portal',
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
    category: 'education',
  };
}

// Ana sayfa SEO
export const homeMetadata = generateSEOMetadata({
  title: 'OLUK - Akışın Kanalı, Dönüşümün Yolu',
  description:
    'Yücel Balkancı dersleri ile kendinizi keşfedin. Arınma, dönüşüm ve aydınlanma yolculuğuna adım atın. Psikolojik farkındalık ve ruhsal gelişim için kapsamlı eğitim içerikleri.',
  keywords: [
    'OLUK',
    'Yücel Balkancı',
    'siberışık',
    'kişisel gelişim',
    'psikoloji',
    'arınma',
    'dönüşüm',
    'meditasyon',
    'farkındalık',
    'ruhsal gelişim',
    'chakra',
    'enerji bedeni',
    'nefes çalışmaları',
    'şifa yolculuğu',
  ],
  ogType: 'website',
});

// Dersler index sayfası SEO
export const derslerMetadata = generateSEOMetadata({
  title: 'Dersler - Dönüşüm Yolculuğu',
  description:
    '5 temel ders ile kapıdan ışığa uzanan yolculuk. Arınma, kendini tanıma, bağlantılar, aydınlanma ve akış. Her ders, ruhunuzun derinliklerine inen bir keşif.',
  keywords: [
    'online dersler',
    'kişisel gelişim eğitimi',
    'meditasyon dersleri',
    'psikolojik farkındalık',
    'ruhsal eğitim',
    'chakra aktivasyonu',
    'enerji çalışmaları',
  ],
  ogType: 'website',
  canonical: `${SITE_URL}/dersler`,
});

// Ders detay sayfaları için dinamik SEO
export function generateDersMetadata(
  slug: string,
  baslik: string,
  altBaslik: string,
  giris: string,
  seansCount: number
) {
  return generateSEOMetadata({
    title: `${baslik} - ${altBaslik}`,
    description: `${giris.substring(0, 155)}... ${seansCount} seans, Yücel Balkancı rehberliğinde.`,
    keywords: [
      baslik.toLowerCase(),
      altBaslik.toLowerCase(),
      'online ders',
      'video eğitim',
      'kişisel gelişim',
      'meditasyon',
    ],
    ogType: 'course',
    canonical: `${SITE_URL}/dersler/${slug}`,
    ogImage: `${SITE_URL}/images/ders-${slug}-og.jpg`,
  });
}

// Seans detay sayfaları için dinamik SEO
export function generateSeansMetadata(
  dersSlug: string,
  dersBaslik: string,
  seansId: number,
  seansBaslik: string,
  seansSure: string
) {
  return generateSEOMetadata({
    title: `${seansBaslik} - ${dersBaslik}`,
    description: `${dersBaslik} dersinin ${seansId}. seansı: ${seansBaslik}. Süre: ${seansSure}. Video eğitim ve pratik uygulamalarla dönüşümünüzü tamamlayın.`,
    keywords: [
      seansBaslik.toLowerCase(),
      dersBaslik.toLowerCase(),
      'seans',
      'video ders',
      'pratik çalışma',
    ],
    ogType: 'article',
    canonical: `${SITE_URL}/dersler/${dersSlug}/${seansId}`,
    ogImage: `${SITE_URL}/images/ders-${dersSlug}-seans${seansId}-og.jpg`,
  });
}

// JSON-LD Structured Data
export function generateCourseSchema(
  slug: string,
  baslik: string,
  altBaslik: string,
  giris: string,
  seanslar: Array<{ id: number; baslik: string; sure: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${baslik} - ${altBaslik}`,
    description: giris,
    provider: {
      '@type': 'Organization',
      name: 'OLUK - Siber Işık Portal',
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
    },
    instructor: {
      '@type': 'Person',
      name: 'Yücel Balkancı',
      description: 'Ruhsal gelişim uzmanı ve eğitmen',
    },
    courseCode: slug.toUpperCase(),
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: `PT${seanslar.length}H`,
    },
    numberOfCredits: seanslar.length,
    educationalLevel: 'Başlangıç - Orta',
    inLanguage: 'tr',
    isAccessibleForFree: true,
    url: `${SITE_URL}/dersler/${slug}`,
    image: `${SITE_URL}/images/ders-${slug}-og.jpg`,
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OLUK - Akışın Kanalı',
    alternateName: 'Siber Işık Portal',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description: 'Kişisel gelişim ve ruhsal dönüşüm platformu',
    sameAs: [
      'https://twitter.com/oluk_portal',
      'https://instagram.com/oluk_portal',
      'https://youtube.com/@oluk_portal',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'Turkish',
    },
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'OLUK',
    alternateName: 'OLUK Portal',
    url: SITE_URL,
    description: 'Akışın Kanalı, Dönüşümün Yolu',
    inLanguage: 'tr',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

// Breadcrumb schema
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
