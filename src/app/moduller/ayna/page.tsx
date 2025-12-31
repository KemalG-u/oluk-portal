import type { Metadata } from 'next';
import Link from 'next/link';
import { aynaData } from '@/lib/ayna-data';
import { ChevronRight, Clock, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AYNA Modülü - Kendini Tanıma | OLUK',
  description: 'OLUK\'un AYNA modülüyle kendini tanıma yolculuğuna çık. Sufi bilgeliği ve modern psikoloji sentezi. 7 bölüm, 7 ders, 10 seans.',
  openGraph: {
    title: 'AYNA Modülü - Kendini Tanıma',
    description: 'Sufi bilgeliği ve modern psikoloji sentezi ile kendini tanıma yolculuğu. 7 bölüm, 320-420 dakika.',
    images: [
      {
        url: '/og-ayna.png',
        width: 1200,
        height: 630,
        alt: 'AYNA Modülü'
      }
    ]
  }
};

export default function AynaModule() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream to-cream-light">
      {/* Header */}
      <header className="bg-deep-teal text-cream py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/moduller" className="inline-flex items-center gap-2 text-warm-gold mb-4 hover:opacity-80 transition">
            <span>←</span>
            <span>Modüllere Dön</span>
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl mb-2">{aynaData.title}</h1>
          <p className="text-cream/80 text-lg">{aynaData.subtitle}</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-deep-teal/5 to-transparent py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-7xl mb-6">{aynaData.icon}</div>
            <p className="text-xl text-deep-teal/70 leading-relaxed whitespace-pre-line font-light max-w-2xl mx-auto">
              {aynaData.introduction}
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl font-serif text-warm-gold mb-1">{aynaData.bolumler.length}</div>
              <div className="text-sm text-deep-teal/60">Bölüm</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl font-serif text-warm-gold mb-1">7</div>
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
              <p className="text-deep-teal font-semibold">{aynaData.totalDuration}</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-warm-gold">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-warm-gold" />
                <span className="text-sm text-warm-gold font-semibold">ZORLUk</span>
              </div>
              <p className="text-deep-teal font-semibold">{aynaData.difficulty}</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-warm-gold">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-warm-gold font-semibold">📋</span>
                <span className="text-sm text-warm-gold font-semibold">ÖN KOŞUL</span>
              </div>
              <p className="text-deep-teal font-semibold text-sm">{aynaData.requirements}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bölümler */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-deep-teal mb-12 text-center">7 Bölüm Yolculuğu</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aynaData.bolumler.map((bolum) => (
              <div
                key={bolum.slug}
                className="group"
              >
                <Link href={`/moduller/ayna/${bolum.slug}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="bg-gradient-to-br from-deep-teal to-deep-teal/80 p-8 text-center flex items-center justify-center min-h-[120px]">
                      <span className="text-6xl">{bolum.icon}</span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-1">
                        <span className="text-xs font-semibold text-warm-gold tracking-widest uppercase">
                          Bölüm {bolum.order}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-deep-teal mb-1 group-hover:text-warm-gold transition">
                        {bolum.title}
                      </h3>
                      <p className="text-sm text-warm-gold italic mb-4">{bolum.subtitle}</p>
                      <p className="text-text-muted text-sm mb-6 flex-1">
                        {bolum.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-deep-teal/60 pt-4 border-t">
                        <span>{bolum.dersCount} Ders</span>
                        <span>{bolum.seansCount} Seans</span>
                        <span>{bolum.duration}</span>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <button className="w-full bg-gradient-to-r from-warm-gold to-warm-gold/80 text-deep-teal font-semibold py-3 rounded-lg group-hover:shadow-lg transition flex items-center justify-center gap-2">
                        Başla
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-deep-teal to-deep-teal/90 text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-6">AYNA'ya Hazır Mısın?</h2>
          <p className="text-lg text-cream/80 mb-8 max-w-2xl mx-auto">
            Bu yolculuk, kendini tanımanın en derin biçimidir. Gözlerini kapayacaksın, kalbini açacaksın, ve kendini göreceksin.
          </p>
          <Link href={`/moduller/ayna/${aynaData.bolumler[0].slug}`}>
            <button className="bg-warm-gold text-deep-teal font-semibold px-12 py-4 rounded-full text-lg hover:shadow-2xl transition-all">
              Yolculuğa Başla
            </button>
          </Link>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="bg-deep-teal text-cream/60 py-8 px-6 text-center text-sm">
        <p className="font-serif text-warm-gold mb-2">OLUK - AYNA MODÜLü</p>
        <p>Akışın Kanalı, Dönüşümün Yolu</p>
      </footer>
    </main>
  );
}
