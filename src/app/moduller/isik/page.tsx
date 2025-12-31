import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { isikData } from '@/lib/isik-data';
import { ChevronRight, Clock, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IŞIK Modülü - Enerji Farkındalığı | OLUK',
  description: 'Bedeninizdeki enerjiyi hissetmek için nefes, kalp ve ışık çalışması. Bilimsel temelli, Sufi geleneğiyle uyumlu.',
  openGraph: {
    title: 'IŞIK Modülü - Enerji Farkındalığı',
    description: 'Enerji çalışması: bedeni tanı, nefes kullan, ışığını açılım. 6 bölüm, 10 seans, 360-420 dakika.',
    images: [
      {
        url: '/og-isik.png',
        width: 1200,
        height: 630,
        alt: 'IŞIK Modülü'
      }
    ]
  }
};

export default function IsikModule() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'IŞIK Modülü',
    description: 'Enerji farkındalığı, nefes, kalp ve ışık çalışması; Sufi gelenek ve modern bilim sentezi.',
    provider: {
      '@type': 'Organization',
      name: 'OLUK',
      url: 'https://oluk.org',
    },
    numberOfLessons: 6,
    timeRequired: 'PT360M',
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-cream to-cream-light">
      <Script id="isik-ld-json" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(structuredData)}
      </Script>
      {/* Header */}
      <header className="bg-deep-teal text-cream py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/moduller" className="inline-flex items-center gap-2 text-warm-gold mb-4 hover:opacity-80 transition">
            <span>←</span>
            <span>Modüllere Dön</span>
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl mb-2">{isikData.title}</h1>
          <p className="text-cream/80 text-lg">{isikData.subtitle}</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-deep-teal/5 to-transparent py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-7xl mb-6">{isikData.icon}</div>
            <p className="text-xl text-deep-teal/70 leading-relaxed whitespace-pre-line font-light max-w-2xl mx-auto">
              {isikData.introduction}
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl font-serif text-warm-gold mb-1">{isikData.bolumler.length}</div>
              <div className="text-sm text-deep-teal/60">Bölüm</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl font-serif text-warm-gold mb-1">6</div>
              <div className="text-sm text-deep-teal/60">Ders</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl font-serif text-warm-gold mb-1">10</div>
              <div className="text-sm text-deep-teal/60">Seans</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl font-serif text-warm-gold mb-1">6-7h</div>
              <div className="text-sm text-deep-teal/60">Toplam Süre</div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-warm-gold">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-warm-gold" />
                <span className="text-sm text-warm-gold font-semibold">SÜRE</span>
              </div>
              <p className="text-deep-teal font-semibold">{isikData.totalDuration}</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-warm-gold">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-warm-gold" />
                <span className="text-sm text-warm-gold font-semibold">ZORLULUKOvI</span>
              </div>
              <p className="text-deep-teal font-semibold">{isikData.difficulty}</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-warm-gold">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm text-warm-gold font-semibold">UYARI</span>
              </div>
              <p className="text-deep-teal font-semibold text-sm">{isikData.requirements}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bölümler Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-deep-teal mb-12 text-center">6 Bölüm, Sırasıyla</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {isikData.bolumler.map((bolum) => (
              <Link key={bolum.slug} href={`/moduller/isik/${bolum.slug}`}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-warm-gold h-full cursor-pointer group">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl">{bolum.icon}</div>
                      <span className="text-xs font-semibold text-warm-gold uppercase bg-warm-gold/10 px-3 py-1 rounded">
                        Bölüm {bolum.order}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-2xl text-deep-teal mb-2 group-hover:text-warm-gold transition">
                      {bolum.title}
                    </h3>
                    <p className="text-warm-gold italic text-sm mb-3">{bolum.subtitle}</p>
                    <p className="text-deep-teal/70 text-sm mb-4">{bolum.description}</p>
                    
                    <div className="flex gap-4 text-xs text-deep-teal/60">
                      <span>📚 {bolum.dersCount} Ders</span>
                      <span>▶️ {bolum.seansCount} Seans</span>
                      <span>⏱️ {bolum.duration}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-deep-teal/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-deep-teal mb-4">Hazır mısın?</h2>
          <p className="text-deep-teal/70 mb-8">İlk bölümle başla. Kendi hızında ilerle. Bedeni dinle.</p>
          <Link href={`/moduller/isik/${isikData.bolumler[0].slug}`}>
            <button className="bg-warm-gold text-deep-teal px-8 py-4 rounded-lg font-semibold hover:bg-warm-gold/90 transition inline-flex items-center gap-2">
              {isikData.bolumler[0].title} ile Başla
              <ChevronRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
