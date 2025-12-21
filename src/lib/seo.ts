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
  ogType?: 'website' | 'article';
  noindex?: boolean;
  canonical?: string;
}

const SITE_NAME = 'OLUK';
const SITE_URL = 'https://oluk.org';
const DEFAULT_OG_IMAGE = 'https://res.cloudinary.com/dzegofdgp/image/upload/w_1200,h_630,f_auto,q_auto/oluk/og-default';

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
  const canonicalURL = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'OLUK' }],
    creator: 'OLUK',
    publisher: 'OLUK',
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalURL,
      languages: {
        'tr': canonicalURL,
        'en': `${SITE_URL}/en`,
        'x-default': canonicalURL,
      },
    },
    openGraph: {
      type: ogType,
      locale: 'tr_TR',
      url: canonicalURL,
      title: title === SITE_NAME ? 'OLUK - Akışın Kanalı, Dönüşümün Yolu' : fullTitle,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - OLUK Dijital İnziva`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title === SITE_NAME ? 'OLUK - Dijital İnziva Platformu' : fullTitle,
      description: description.length > 160 ? description.substring(0, 157) + '...' : description,
      images: [ogImage],
      creator: '@oluk_org',
      site: '@oluk_org',
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
  title: 'OLUK - Akışın Kanalı, Dönüşümün Yolu | Dijital Manevi Dönüşüm',
  description:
    'Türk tasavvuf geleneği ile modern teknolojiyi birleştiren dijital manevi dönüşüm platformu. 10 basamaklı sistematik yolculuk, AI destekli Sırdaş ve binlerce yol arkadaşı. Ücretsiz başla.',
  keywords: [
    'meditasyon',
    'meditasyon uygulaması',
    'nefes egzersizi',
    'mindfulness türkçe',
    'ruhsal gelişim',
    'manevi gelişim',
    'tasavvuf',
    'sufi meditasyon',
    'zikir',
    'dijital inziva',
    'stres yönetimi',
    'iç huzur',
    'bilinçli farkındalık',
    'türkçe meditasyon',
    'yapay zeka terapi',
    'AI koçluk',
    'OLUK',
    'siber inziva',
    'manevi dönüşüm',
    'içsel huzur',
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
    ogType: 'article',
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
    '@id': `${SITE_URL}/#organization`,
    name: 'OLUK',
    alternateName: ['Siber İnziva', 'Dijital İnziva'],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/icon.svg`,
      width: 512,
      height: 512,
    },
    image: DEFAULT_OG_IMAGE,
    description: 'Türk tasavvuf geleneği ile modern teknolojiyi birleştiren dijital manevi dönüşüm platformu',
    foundingDate: '2019',
    slogan: 'Akışın Kanalı, Dönüşümün Yolu',
    knowsAbout: [
      'Meditasyon',
      'Mindfulness',
      'Tasavvuf',
      'Manevi Gelişim',
      'Nefes Egzersizleri',
      'Dijital Wellness',
    ],
    sameAs: [
      'https://instagram.com/olaborisun',
      // 'https://twitter.com/oluk_org',
      // 'https://youtube.com/@oluk_org',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English'],
      email: 'info@oluk.org',
    },
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'OLUK',
    alternateName: 'Dijital İnziva Platformu',
    description: 'Akışın Kanalı, Dönüşümün Yolu - Manevi dönüşüm için dijital inziva deneyimi',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: ['tr-TR', 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// WebApplication Schema for OLUK Platform
export function generateWebApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'OLUK',
    alternateName: 'Siber İnziva',
    description: 'Türk tasavvuf geleneği ile modern teknolojiyi birleştiren dijital manevi dönüşüm platformu',
    url: SITE_URL,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'TRY',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: 'OLUK',
      url: SITE_URL,
    },
    inLanguage: ['tr', 'en'],
    keywords: 'meditasyon, tasavvuf, dijital inziva, ruhsal gelişim, mindfulness, yapay zeka terapi',
    featureList: [
      'AI destekli manevi sohbet (Sırdaş)',
      'On basamaklık dönüşüm yolculuğu',
      'Türk tasavvuf geleneği',
      '7/24 ücretsiz erişim',
      'Kişiselleştirilmiş içerik',
    ],
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

// FAQPage Schema - Google'da direkt cevap gösterimi için
export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'OLUK nedir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'OLUK, Türk tasavvuf geleneği ile modern teknolojiyi birleştiren dijital manevi dönüşüm platformudur. 10 basamaklı sistematik yolculuk, AI destekli Sırdaş ve binlerce yol arkadaşı ile içsel dönüşüm yolculuğunuza eşlik eder.',
        },
      },
      {
        '@type': 'Question',
        name: 'OLUK ücretsiz mi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Evet, OLUK\'un temel özellikleri tamamen ücretsizdir. Ücretsiz başlayabilir, premium üyelik ile daha derin içeriklere erişebilirsiniz.',
        },
      },
      {
        '@type': 'Question',
        name: 'Sırdaş nedir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sırdaş, OLUK\'un AI destekli manevi rehberidir. 7/24 ulaşılabilir, kişiselleştirilmiş manevi rehberlik sunar. Gecenin her vaktinde açık bir kapı gibi, sırrınızı verir, sükûneti alırsınız.',
        },
      },
      {
        '@type': 'Question',
        name: 'OLUK\'ta kaç ders var?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'OLUK\'ta 10 basamaklı sistematik bir yolculuk var. Her basamak, manevi gelişimin farklı bir boyutunu keşfetmenizi sağlar. Temelden çatıya, taş taş üstüne sağlam bir inşâ.',
        },
      },
      {
        '@type': 'Question',
        name: 'Meditasyon deneyimim yok, başlayabilir miyim?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kesinlikle! OLUK, sıfırdan başlayanlar için tasarlanmıştır. İlk dersten itibaren adım adım rehberlik edilirsiniz. Önceden deneyim gerekmez.',
        },
      },
    ],
  };
}

// Review/Rating Schema - Kullanıcı yorumları
export function generateReviewSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'OLUK Dijital İnziva Programı',
    description: 'Dijital manevi dönüşüm platformu',
    brand: {
      '@type': 'Brand',
      name: 'OLUK',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Ayşe K.',
        },
        reviewBody: 'Dağınıktım, toplandım. Aradığım dışarıda değilmiş, yolu bulunca anladım.',
        datePublished: '2024-11-15',
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Zeynep Y.',
        },
        reviewBody: 'Yarım bırakmaktan yorulmuştum. Bu kez sürüyor. Oyun zannettim, hayatım ciddileşti.',
        datePublished: '2024-10-22',
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Fatma Ö.',
        },
        reviewBody: 'Sabahlarımın rengi değişti. Beş nefes... Meğer bütün mesele doğru solukmuş.',
        datePublished: '2024-09-08',
      },
    ],
  };
}
