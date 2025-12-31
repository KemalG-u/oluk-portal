import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { amacData } from '@/lib/amac-data';
import { ChevronRight, Clock, Zap } from 'lucide-react';

const primary = '#6B21A8';
const secondary = '#7C3AED';
const accent = '#A78BFA';

export const metadata: Metadata = {
  title: 'AMAÇ Modülü - Anlam, Yön ve Hizmet | OLUK',
  description: 'Varoluşsal boşlukla yüzleş, değer pusulanı bul, ikigai haritanı çiz ve hizmete yönel. 6 bölüm, 10 rehberli seans.',
  openGraph: {
    title: 'AMAÇ Modülü - Anlam, Yön ve Hizmet',
    description: 'Anlam arayışı, değerler, ölüm farkındalığı, ikigai ve hizmet odağında 6 bölüm, 10 seanslık rehberli program.',
  }
};

export default function AmacModule() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'AMAÇ Modülü',
    description: 'Anlam, değer, ikigai ve hizmet temelli 6 bölümlük kurs.',
    provider: {
      '@type': 'Organization',
      name: 'OLUK',
      url: 'https://oluk.org',
    },
    numberOfLessons: amacData.bolumler.length,
    timeRequired: 'PT210M',
    inLanguage: 'tr'
  } as const;

  const totalSeans = amacData.bolumler.reduce((sum, bolum) => sum + bolum.seansCount, 0);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F7F2FF] to-[#FBF9FF]">
      <Script id="amac-ld-json" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      {/* Header */}
      <header className="py-6 px-6 text-cream" style={{ backgroundColor: primary }}>
        <div className="max-w-6xl mx-auto">
          <Link href="/moduller" className="inline-flex items-center gap-2 text-white/80 mb-4 hover:opacity-80 transition">
            <span>←</span>
            <span>Modüllere Dön</span>
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl mb-2">{amacData.title}</h1>
          <p className="text-white/80 text-lg">{amacData.subtitle}</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-6" style={{ backgroundColor: `${secondary}0D` }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-7xl mb-6">{amacData.icon}</div>
            <p className="text-xl leading-relaxed whitespace-pre-line font-light max-w-3xl mx-auto" style={{ color: primary }}>
              {amacData.introduction}
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl font-serif mb-1" style={{ color: accent }}>{amacData.bolumler.length}</div>
              <div className="text-sm" style={{ color: `${primary}B3` }}>Bölüm</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl font-serif mb-1" style={{ color: accent }}>6</div>
              <div className="text-sm" style={{ color: `${primary}B3` }}>Ders</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl font-serif mb-1" style={{ color: accent }}>{totalSeans}</div>
              <div className="text-sm" style={{ color: `${primary}B3` }}>Seans</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl font-serif mb-1" style={{ color: accent }}>{amacData.totalDuration}</div>
              <div className="text-sm" style={{ color: `${primary}B3` }}>Toplam Meditasyon</div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderColor: accent }}>
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5" style={{ color: accent }} />
                <span className="text-sm font-semibold" style={{ color: accent }}>SÜRE</span>
              </div>
              <p className="font-semibold" style={{ color: primary }}>{amacData.totalDuration}</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderColor: accent }}>
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5" style={{ color: accent }} />
                <span className="text-sm font-semibold" style={{ color: accent }}>ZORLUK</span>
              </div>
              <p className="font-semibold" style={{ color: primary }}>{amacData.difficulty}</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{ borderColor: accent }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-semibold" style={{ color: accent }}>ÖNERİ</span>
              </div>
              <p className="font-semibold text-sm" style={{ color: primary }}>{amacData.requirements}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bölümler Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl mb-12 text-center" style={{ color: primary }}>6 Bölüm, Sıralı Akış</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {amacData.bolumler.map((bolum) => (
              <Link key={bolum.slug} href={`/moduller/amac/${bolum.slug}`}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 h-full cursor-pointer group" style={{ borderColor: accent }}>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl">{bolum.icon}</div>
                      <span className="text-xs font-semibold uppercase bg-opacity-10 px-3 py-1 rounded" style={{ color: accent, backgroundColor: `${accent}1A` }}>
                        Bölüm {bolum.order}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl mb-2 group-hover:translate-x-1 transition" style={{ color: primary }}>
                      {bolum.title}
                    </h3>
                    <p className="italic text-sm mb-3" style={{ color: accent }}>{bolum.subtitle}</p>
                    <p className="text-sm mb-4" style={{ color: `${primary}B3` }}>{bolum.description}</p>

                    <div className="flex gap-4 text-xs" style={{ color: `${primary}99` }}>
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
      <section className="py-16 px-6" style={{ backgroundColor: `${secondary}0D` }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-4" style={{ color: primary }}>Hazır mısın?</h2>
          <p className="mb-8" style={{ color: `${primary}B3` }}>Varoluş sorusuyla başlayıp değer, ölüm, ikigai, hizmet ve eyleme uzanan bir akış. İlk adımı at.</p>
          <Link href={`/moduller/amac/${amacData.bolumler[0].slug}`}>
            <button className="px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition inline-flex items-center gap-2" style={{ backgroundColor: accent, color: primary }}>
              {amacData.bolumler[0].title} ile Başla
              <ChevronRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
