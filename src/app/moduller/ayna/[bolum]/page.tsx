// AYNA Bölüm Index Sayfası
// /moduller/ayna/[bolum] - tüm dersler ve seansları gösterir

import type { Metadata } from 'next';
import Link from 'next/link';
import { aynaData } from '@/lib/ayna-data';
import { ChevronLeft, ChevronRight, BookOpen, Play, Clock } from 'lucide-react';

export const dynamicParams = false; // Sadece generateStaticParams'te tanımlı routeler

export async function generateStaticParams() {
  return aynaData.bolumler.map((bolum) => ({
    bolum: bolum.slug,
  }));
}

export async function generateMetadata({ params }: { params: { bolum: string } }): Promise<Metadata> {
  const bolum = aynaData.bolumler.find((b) => b.slug === params.bolum);

  if (!bolum) {
    return {
      title: 'Bölüm Bulunamadı | OLUK AYNA',
      description: 'İstenen bölüm sayfası bulunamadı.',
    };
  }

  return {
    title: `${bolum.title}: ${bolum.subtitle} | OLUK AYNA`,
    description: `${bolum.description} - OLUK AYNA modülü. ${bolum.dersCount} ders, ${bolum.seansCount} seans, ${bolum.duration} toplam.`,
    openGraph: {
      title: `${bolum.title}: ${bolum.subtitle}`,
      description: bolum.description,
    }
  };
}

export default function BolumPage({ params }: { params: { bolum: string } }) {
  const bolum = aynaData.bolumler.find((b) => b.slug === params.bolum);

  if (!bolum) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-deep-teal mb-4">Bölüm Bulunamadı</h1>
          <Link href="/moduller/ayna" className="text-warm-gold hover:underline">
            AYNA Modülüne Dön
          </Link>
        </div>
      </div>
    );
  }

  const prevBolum = aynaData.bolumler.find((b) => b.order === bolum.order - 1);
  const nextBolum = aynaData.bolumler.find((b) => b.order === bolum.order + 1);

  return (
    <main className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-deep-teal/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-deep-teal/60">
          <Link href="/moduller" className="hover:text-warm-gold transition">Modüller</Link>
          <span>/</span>
          <Link href="/moduller/ayna" className="hover:text-warm-gold transition">AYNA</Link>
          <span>/</span>
          <span className="text-deep-teal font-semibold">{bolum.title}</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-b from-deep-teal to-deep-teal/90 text-cream py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/moduller/ayna" className="inline-flex items-center gap-2 text-cream/60 hover:text-cream transition mb-6">
            <ChevronLeft className="w-4 h-4" />
            <span>AYNA Modülüne Dön</span>
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

            <Link href={`/moduller/ayna/${bolum.slug}/ders`}>
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
                <Link key={seans.id} href={`/moduller/ayna/${bolum.slug}/seans-${idx + 1}`}>
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
                        <p className="text-deep-teal/60 text-sm mb-3">{seans && 'description' in seans && seans.description ? (seans.description as string) : 'Dönüştürücü bir meditasyon seansı'}</p>
                        <div className="flex gap-4 text-sm text-deep-teal/50">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {seans.duration}
                          </span>
                          <span>Zorluk: {seans.difficulty}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-warm-gold/50 group-hover:text-warm-gold group-hover:translate-x-1 transition flex-shrink-0 mt-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center py-12 mt-16 border-t border-deep-teal/10">
            {prevBolum ? (
              <Link href={`/moduller/ayna/${prevBolum.slug}`} className="flex items-center gap-2 text-warm-gold hover:text-warm-gold/80 transition">
                <ChevronLeft className="w-4 h-4" />
                <span>{prevBolum.title}</span>
              </Link>
            ) : (
              <div />
            )}

            <Link href="/moduller/ayna" className="text-deep-teal/60 hover:text-deep-teal transition text-sm font-semibold">
              AYNA Modülü
            </Link>

            {nextBolum ? (
              <Link href={`/moduller/ayna/${nextBolum.slug}`} className="flex items-center gap-2 text-warm-gold hover:text-warm-gold/80 transition">
                <span>{nextBolum.title}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-teal text-cream/60 py-8 px-6 text-center text-sm mt-16">
        <p className="font-serif text-warm-gold mb-2">OLUK - AYNA MODÜLü</p>
        <p>Akışın Kanalı, Dönüşümün Yolu</p>
      </footer>
    </main>
  );
}
