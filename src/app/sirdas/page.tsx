import type { Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/seo';
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
  canonical: '/sirdas',
  ogType: 'website',
});

export default function SirdasPage() {
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
    </main>
  );
}
