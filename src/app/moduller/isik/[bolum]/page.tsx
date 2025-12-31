// IŞIK Bölüm Index Sayfası
// /moduller/isik/[bolum] - tüm dersler ve seansları gösterir

import type { Metadata } from 'next';
import Link from 'next/link';
import { isikData } from '@/lib/isik-data';
import { ChevronLeft, ChevronRight, BookOpen, Play, Clock } from 'lucide-react';

export const dynamicParams = false; // Sadece generateStaticParams'te tanımlı routeler

export async function generateStaticParams() {
  return isikData.bolumler.map((bolum) => ({
    bolum: bolum.slug,
  }));
}

export async function generateMetadata({ params }: { params: { bolum: string } }): Promise<Metadata> {
  const bolum = isikData.bolumler.find((b) => b.slug === params.bolum);

  if (!bolum) {
    return {
      title: 'Bölüm Bulunamadı | OLUK IŞIK',
      description: 'İstenen bölüm sayfası bulunamadı.',
    };
  }

  return {
    title: `${bolum.title}: ${bolum.subtitle} | OLUK IŞIK`,
    description: `${bolum.description} - OLUK IŞIK modülü. ${bolum.dersCount} ders, ${bolum.seansCount} seans, ${bolum.duration} toplam.`,
    openGraph: {
      title: `${bolum.title}: ${bolum.subtitle}`,
      description: bolum.description,
    }
  };
}

export default function BolumPage({ params }: { params: { bolum: string } }) {
  const bolum = isikData.bolumler.find((b) => b.slug === params.bolum);

  if (!bolum) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-deep-teal mb-4">Bölüm Bulunamadı</h1>
          <Link href="/moduller/isik" className="text-warm-gold hover:underline">
            IŞIK Modülüne Dön
          </Link>
        </div>
      </div>
    );
  }

  const prevBolum = isikData.bolumler.find((b) => b.order === bolum.order - 1);
  const nextBolum = isikData.bolumler.find((b) => b.order === bolum.order + 1);

  return (
    <main className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-deep-teal/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-deep-teal/60">
          <Link href="/moduller" className="hover:text-warm-gold transition">Modüller</Link>
          <span>/</span>
          <Link href="/moduller/isik" className="hover:text-warm-gold transition">IŞIK</Link>
          <span>/</span>
          <span className="text-deep-teal font-semibold">{bolum.title}</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-b from-deep-teal to-deep-teal/90 text-cream py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/moduller/isik" className="inline-flex items-center gap-2 text-cream/60 hover:text-cream transition mb-6">
            <ChevronLeft className="w-4 h-4" />
            <span>IŞIK Modülüne Dön</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-warm-gold text-sm tracking-widest uppercase mb-2">Bölüm {bolum.order}</p>
              <h1 className="font-serif text-5xl md:text-6xl mb-3">{bolum.title}</h1>
              <p className="text-2xl text-cream/80 italic mb-4">{bolum.subtitle}</p>
              <p className="text-cream/70 text-lg">{bolum.description}</p>
            </div>
            <div className="text-6xl text-center">{bolum.icon}</div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="bg-cream/10 rounded-lg p-4 text-center">
              <div className="text-3xl font-serif text-warm-gold">{bolum.duration}</div>
              <div className="text-sm text-cream/60">Süre</div>
            </div>
            <div className="bg-cream/10 rounded-lg p-4 text-center">
              <div className="text-3xl font-serif text-warm-gold">{bolum.dersCount}</div>
              <div className="text-sm text-cream/60">Ders</div>
            </div>
            <div className="bg-cream/10 rounded-lg p-4 text-center">
              <div className="text-3xl font-serif text-warm-gold">{bolum.seansCount}</div>
              <div className="text-sm text-cream/60">Seans</div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Ders Kartı */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl text-deep-teal mb-8">Ders: {bolum.ders.title}</h2>

            <Link href={`/moduller/isik/${bolum.slug}/ders`}>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer group">
                <div className="bg-gradient-to-r from-warm-gold/10 to-warm-gold/5 p-8 flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <BookOpen className="w-6 h-6 text-warm-gold" />
                      <span className="text-sm font-semibold text-warm-gold uppercase">Dersi Oku</span>
                    </div>
                    <h3 className="font-serif text-2xl text-deep-teal mb-2 group-hover:text-warm-gold transition">
                      {bolum.ders.title}
                    </h3>
                    <p className="text-deep-teal/60 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {bolum.ders.duration} okuma süresi
                    </p>
                  </div>
                  <ChevronRight className="w-8 h-8 text-warm-gold/50 group-hover:text-warm-gold group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          </div>

          {/* Seanslar */}
          <div>
            <h2 className="font-serif text-3xl text-deep-teal mb-8">{bolum.seansCount} Seans</h2>

            <div className="space-y-4">
              {bolum.seans.map((seans, idx) => (
                <Link key={seans.id} href={`/moduller/isik/${bolum.slug}/seans-${idx + 1}`}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-warm-gold p-6 cursor-pointer group">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Play className="w-5 h-5 text-warm-gold" />
                          <span className="text-xs font-semibold text-warm-gold uppercase">Seans {idx + 1}</span>
                        </div>
                        <h3 className="font-serif text-xl text-deep-teal mb-2 group-hover:text-warm-gold transition">
                          {seans.title}
                        </h3>
                        <p className="text-deep-teal/60 text-sm flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {seans.duration} meditasyon
                        </p>
                      </div>
                      <ChevronRight className="w-6 h-6 text-warm-gold/50 group-hover:text-warm-gold group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mt-16 pt-8 border-t border-warm-gold/20">
            {prevBolum ? (
              <Link href={`/moduller/isik/${prevBolum.slug}`} className="flex-1">
                <div className="bg-cream rounded-lg p-6 hover:bg-cream/80 transition text-center">
                  <p className="text-sm text-deep-teal/60 mb-2">← Önceki Bölüm</p>
                  <h3 className="font-serif text-lg text-deep-teal">{prevBolum.title}</h3>
                </div>
              </Link>
            ) : <div className="flex-1"></div>}
            
            {nextBolum ? (
              <Link href={`/moduller/isik/${nextBolum.slug}`} className="flex-1">
                <div className="bg-cream rounded-lg p-6 hover:bg-cream/80 transition text-center">
                  <p className="text-sm text-deep-teal/60 mb-2">Sonraki Bölüm →</p>
                  <h3 className="font-serif text-lg text-deep-teal">{nextBolum.title}</h3>
                </div>
              </Link>
            ) : <div className="flex-1"></div>}
          </div>
        </div>
      </section>
    </main>
  );
}
