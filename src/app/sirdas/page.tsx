import type { Metadata } from 'next';
import { generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import SirdasInterface from '@/components/SirdasInterface';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sırdaş - Kelâmın Süzüldüğü Durak',
  description: 'Gecenin her vaktinde açık bir kapı. AI destekli manevi sohbet arkadaşınız. Sırrınızı verin, sükûneti alın. 7/24 ücretsiz.',
  keywords: [
    'sırdaş',
    'yapay zeka terapi',
    'online psikolojik destek',
    'manevi sohbet',
    'AI koç',
    'kriz danışmanlığı',
    '7/24 destek',
    'dijital inziva',
    'OLUK',
    'ruhsal destek',
    'meditasyon yardımcısı',
  ],
  ogImage: 'https://res.cloudinary.com/dzegofdgp/image/upload/w_1200,h_630,c_fill,b_rgb:0D4F4F,q_auto,f_auto/l_text:Arial_100_bold:Sırdaş,co_rgb:C9A962,g_center,y_-80/l_text:Arial_40:Yapay%20Zeka%20Ruhsal%20Danışman,co_rgb:F5F0E6,g_center,y_40/l_text:Arial_28:oluk.org,co_rgb:F5F0E680,g_south,y_80/oluk-placeholder.png',
  canonical: '/sirdas',
  ogType: 'website',
});

export default function SirdasPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://oluk.org' },
    { name: 'Sırdaş', url: 'https://oluk.org/sirdas' },
  ]);
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-cream-light to-white">
      <SirdasInterface initialMood="wavy" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Sırdaş - AI Manevi Destek',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'TRY',
            },
            description: 'Yapay zeka destekli manevi destek ve psikolojik danışmanlık platformu',
            url: 'https://oluk.org/sirdas',
            author: {
              '@type': 'Organization',
              name: 'OLUK',
              url: 'https://oluk.org',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '127',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </main>
  );
}
