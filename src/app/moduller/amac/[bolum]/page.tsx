// AMAÇ Bölüm Index Sayfası
// /moduller/amac/[bolum] - ders ve seanslar

import type { Metadata } from 'next';
import Link from 'next/link';
import { amacData } from '@/lib/amac-data';
import { ChevronLeft, ChevronRight, BookOpen, Play, Clock } from 'lucide-react';

export const dynamicParams = false;

const primary = '#6B21A8';
const accent = '#A78BFA';

export async function generateStaticParams() {
  return amacData.bolumler.map((bolum) => ({
    bolum: bolum.slug,
  }));
}

export async function generateMetadata({ params }: { params: { bolum: string } }): Promise<Metadata> {
  const bolum = amacData.bolumler.find((b) => b.slug === params.bolum);

  if (!bolum) {
    return {
      title: 'Bölüm Bulunamadı | OLUK AMAÇ',
      description: 'İstenen bölüm sayfası bulunamadı.'
    };
  }

  return {
    title: `${bolum.title}: ${bolum.subtitle} | OLUK AMAÇ`,
    description: `${bolum.description} - ${bolum.dersCount} ders, ${bolum.seansCount} seans, ${bolum.duration} toplam.`,
    openGraph: {
      title: `${bolum.title}: ${bolum.subtitle}`,
      description: bolum.description,
    }
  };
}

export default function BolumPage({ params }: { params: { bolum: string } }) {
  const bolum = amacData.bolumler.find((b) => b.slug === params.bolum);

  if (!bolum) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif" style={{ color: primary }}>Bölüm Bulunamadı</h1>
          <Link href="/moduller/amac" className="hover:underline" style={{ color: accent }}>
            AMAÇ Modülüne Dön
          </Link>
        </div>
      </div>
    );
  }

  const prevBolum = amacData.bolumler.find((b) => b.order === bolum.order - 1);
  const nextBolum = amacData.bolumler.find((b) => b.order === bolum.order + 1);

  return (
    <main className="min-h-screen bg-[#F8F4FF]">
      {/* Breadcrumb */}
      <div className="px-6 py-4" style={{ backgroundColor: `${primary}0D` }}>
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm" style={{ color: `${primary}99` }}>
          <Link href="/moduller" className="hover:text-[#6B21A8] transition">Modüller</Link>
          <span>/</span>
          <Link href="/moduller/amac" className="hover:text-[#6B21A8] transition">AMAÇ</Link>
          <span>/</span>
          <span className="font-semibold" style={{ color: primary }}>{bolum.title}</span>
        </div>
      </div>

      {/* Header */}
      <header className="text-cream py-12 px-6" style={{ background: `linear-gradient(180deg, ${primary}, ${primary}E6)` }}>
        <div className="max-w-6xl mx-auto">
          <Link href="/moduller/amac" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition mb-6">
            <ChevronLeft className="w-4 h-4" />
            <span>AMAÇ Modülüne Dön</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm tracking-widest uppercase mb-2" style={{ color: accent }}>Bölüm {bolum.order}</p>
              <h1 className="font-serif text-5xl md:text-6xl mb-3">{bolum.title}</h1>
              <p className="text-2xl italic mb-4 text-white/80">{bolum.subtitle}</p>
              <p className="text-lg text-white/80">{bolum.description}</p>
            </div>
            <div className="text-6xl text-center">{bolum.icon}</div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="rounded-lg p-4 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
              <div className="text-3xl font-serif" style={{ color: accent }}>{bolum.duration}</div>
              <div className="text-sm text-white/70">Süre</div>
            </div>
            <div className="rounded-lg p-4 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
              <div className="text-3xl font-serif" style={{ color: accent }}>{bolum.dersCount}</div>
              <div className="text-sm text-white/70">Ders</div>
            </div>
            <div className="rounded-lg p-4 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
              <div className="text-3xl font-serif" style={{ color: accent }}>{bolum.seansCount}</div>
              <div className="text-sm text-white/70">Seans</div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Ders Kartı */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl mb-8" style={{ color: primary }}>Ders: {bolum.ders.title}</h2>

            <Link href={`/moduller/amac/${bolum.slug}/ders`}>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer group border-l-4" style={{ borderColor: accent }}>
                <div className="p-8 flex items-start justify-between" style={{ background: `${accent}14` }}>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <BookOpen className="w-6 h-6" style={{ color: accent }} />
                      <span className="text-sm font-semibold uppercase" style={{ color: accent }}>Dersi Oku</span>
                    </div>
                    <h3 className="font-serif text-2xl mb-2 group-hover:text-[#6B21A8] transition" style={{ color: primary }}>
                      {bolum.ders.title}
                    </h3>
                    <p className="flex items-center gap-2" style={{ color: `${primary}99` }}>
                      <Clock className="w-4 h-4" />
                      {bolum.ders.duration} okuma süresi
                    </p>
                  </div>
                  <ChevronRight className="w-8 h-8" style={{ color: `${accent}80` }} />
                </div>
              </div>
            </Link>
          </div>

          {/* Seanslar */}
          <div>
            <h2 className="font-serif text-3xl mb-8" style={{ color: primary }}>{bolum.seansCount} Seans</h2>

            <div className="space-y-4">
              {bolum.seans.map((seans, idx) => (
                <Link key={seans.id} href={`/moduller/amac/${bolum.slug}/seans-${idx + 1}`}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 p-6 cursor-pointer group" style={{ borderColor: accent }}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Play className="w-5 h-5" style={{ color: accent }} />
                          <span className="text-xs font-semibold uppercase" style={{ color: accent }}>Seans {idx + 1}</span>
                        </div>
                        <h3 className="font-serif text-xl mb-2 group-hover:text-[#6B21A8] transition" style={{ color: primary }}>
                          {seans.title}
                        </h3>
                        <p className="text-sm flex items-center gap-2" style={{ color: `${primary}99` }}>
                          <Clock className="w-4 h-4" />
                          {seans.duration} meditasyon
                        </p>
                      </div>
                      <ChevronRight className="w-6 h-6" style={{ color: `${accent}80` }} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mt-16 pt-8 border-t" style={{ borderColor: `${accent}33` }}>
            {prevBolum ? (
              <Link href={`/moduller/amac/${prevBolum.slug}`} className="flex-1">
                <div className="bg-[#F3ECFF] rounded-lg p-6 hover:bg-[#EDE1FF] transition text-center">
                  <p className="text-sm" style={{ color: `${primary}99` }}>← Önceki Bölüm</p>
                  <h3 className="font-serif text-lg" style={{ color: primary }}>{prevBolum.title}</h3>
                </div>
              </Link>
            ) : <div className="flex-1"></div>}

            {nextBolum ? (
              <Link href={`/moduller/amac/${nextBolum.slug}`} className="flex-1">
                <div className="bg-[#F3ECFF] rounded-lg p-6 hover:bg-[#EDE1FF] transition text-center">
                  <p className="text-sm" style={{ color: `${primary}99` }}>Sonraki Bölüm →</p>
                  <h3 className="font-serif text-lg" style={{ color: primary }}>{nextBolum.title}</h3>
                </div>
              </Link>
            ) : <div className="flex-1"></div>}
          </div>
        </div>
      </section>
    </main>
  );
}
