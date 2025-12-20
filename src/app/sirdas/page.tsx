import type { Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/seo';
import { WarningCircle } from '@phosphor-icons/react';
import SirdasInterface from '@/components/SirdasInterface';
import SirdasFeatureBadges from '@/components/SirdasFeatureBadges';
import { SIRDAS_TITLE, SIRDAS_SUBTITLE, FEATURE_BADGES, DISCLAIMER } from '@/lib/sirdas-content';

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
    <main className="min-h-screen bg-gradient-to-br from-deep-teal via-deep-teal-dark to-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-soft-cream mb-6 leading-tight">
            {SIRDAS_TITLE}
          </h1>
          <p className="text-xl md:text-2xl text-soft-cream/80 leading-relaxed max-w-3xl mx-auto">
            {SIRDAS_SUBTITLE}
          </p>
        </div>

        {/* Feature Badges */}
        <SirdasFeatureBadges badges={FEATURE_BADGES} />
      </section>

      {/* Chat Interface */}
      <section className="relative">
        <SirdasInterface initialMood="wavy" />
      </section>

      {/* JSON-LD Schema for SEO */}
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
            featureList: [
              'Gizli ve anonim sohbet',
              'Kriz müdahale sistemi',
              '5 farklı ruh hali desteği',
              '24/7 erişilebilir AI koç',
              'Ücretsiz manevi destek'
            ],
          }),
        }}
      />

      {/* Disclaimer */}
      <section className="py-12 px-4 bg-deep-teal-dark/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <WarningCircle size={32} weight="duotone" color="#D4A84B" className="flex-shrink-0" />
            <div>
              <h3 className="text-soft-cream font-semibold mb-3">Önemli Not</h3>
              <p className="text-soft-cream/80 text-sm leading-relaxed whitespace-pre-line">
                {DISCLAIMER}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
