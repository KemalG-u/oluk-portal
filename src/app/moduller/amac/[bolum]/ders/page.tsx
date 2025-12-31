// AMAÇ Bölüm Ders Sayfası

import type { Metadata } from 'next';
import Link from 'next/link';
import { amacData } from '@/lib/amac-data';
import { ChevronLeft, ChevronRight, BookOpen, Clock } from 'lucide-react';

export const dynamicParams = false;

const primary = '#6B21A8';
const accent = '#A78BFA';

export async function generateStaticParams() {
  return amacData.bolumler.map((bolum) => ({ bolum: bolum.slug }));
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
    title: `${bolum.title}: ${bolum.subtitle} - Ders | OLUK AMAÇ`,
    description: `${bolum.description} - ${bolum.order}. bölüm, ${bolum.dersCount} ders, ${bolum.seansCount} seans.`,
    openGraph: {
      title: `${bolum.title}: ${bolum.subtitle}`,
      description: bolum.description,
    }
  };
}

export default function BolumDersPage({ params }: { params: { bolum: string } }) {
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
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm" style={{ color: `${primary}99` }}>
          <Link href="/moduller" className="hover:text-[#6B21A8] transition">Modüller</Link>
          <span>/</span>
          <Link href="/moduller/amac" className="hover:text-[#6B21A8] transition">AMAÇ</Link>
          <span>/</span>
          <span className="font-semibold" style={{ color: primary }}>{bolum.title}</span>
        </div>
      </div>

      {/* Header */}
      <header className="text-cream py-12 px-6" style={{ background: `linear-gradient(180deg, ${primary}, ${primary}E6)` }}>
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/moduller/amac" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition mb-6">
            <ChevronLeft className="w-4 h-4" />
            <span>AMAÇ Modülüne Dön</span>
          </Link>
          <div className="text-5xl mb-4">{bolum.icon}</div>
          <p className="text-sm tracking-widest uppercase mb-2" style={{ color: accent }}>Bölüm {bolum.order}</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-2">{bolum.title}</h1>
          <p className="text-xl italic mb-6 text-white/80">{bolum.subtitle}</p>
          <p className="text-cream/80 max-w-2xl mx-auto">{bolum.description}</p>
        </div>
      </header>

      {/* Ders İçeriği */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5" style={{ color: accent }} />
              <h2 className="font-serif text-3xl" style={{ color: primary }}>{bolum.ders.title}</h2>
            </div>
            <div className="flex items-center gap-4 text-sm mb-8" style={{ color: `${primary}99` }}>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{bolum.ders.duration}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border" style={{ borderColor: `${accent}33` }}>
            <div className="prose prose-lg max-w-none">
              {bolum.ders.content.split('\n\n').map((para, idx) => (
                <p key={idx} className="leading-relaxed mb-4 whitespace-pre-wrap font-light text-lg" style={{ color: `${primary}CC` }}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-[#F5F0FF] rounded-2xl p-8 mb-12 border" style={{ borderColor: `${accent}33` }}>
            <h3 className="font-serif text-2xl mb-6" style={{ color: primary }}>Bu Dersten Sonra</h3>
            <ul className="space-y-3">
              {bolum.ders.learnings.map((learning, idx) => (
                <li key={idx} className="flex gap-3" style={{ color: primary }}>
                  <span className="font-semibold" style={{ color: accent }}>✓</span>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F3ECFF] rounded-lg p-6 mb-12 border-l-4" style={{ borderColor: accent }}>
            <p className="text-sm mb-2" style={{ color: `${primary}99` }}>Sonraki Adım</p>
            <h3 className="font-serif text-2xl mb-4" style={{ color: primary }}>
              {bolum.seansCount} Seans ile Pratik Yap
            </h3>
            <Link href={`/moduller/amac/${bolum.slug}`} className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition" style={{ color: accent }}>
              <span>Seansları Gör</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex gap-4 pt-8 border-t" style={{ borderColor: `${accent}33` }}>
            {prevBolum ? (
              <Link href={`/moduller/amac/${prevBolum.slug}/ders`} className="flex-1">
                <div className="bg-[#F3ECFF] rounded-lg p-4 hover:bg-[#EDE1FF] transition text-center">
                  <p className="text-xs" style={{ color: `${primary}99` }}>← Önceki</p>
                  <p className="font-serif text-sm" style={{ color: primary }}>{prevBolum.title}</p>
                </div>
              </Link>
            ) : <div className="flex-1"></div>}

            <Link href={`/moduller/amac/${bolum.slug}`}>
              <div className="bg-[#F3ECFF] rounded-lg p-4 hover:bg-[#EDE1FF] transition text-center">
                <p className="text-xs" style={{ color: `${primary}99` }}>Bölüme Dön</p>
                <p className="font-serif text-sm" style={{ color: primary }}>Tüm İçerik</p>
              </div>
            </Link>

            {nextBolum ? (
              <Link href={`/moduller/amac/${nextBolum.slug}/ders`} className="flex-1">
                <div className="bg-[#F3ECFF] rounded-lg p-4 hover:bg-[#EDE1FF] transition text-center">
                  <p className="text-xs" style={{ color: `${primary}99` }}>Sonraki →</p>
                  <p className="font-serif text-sm" style={{ color: primary }}>{nextBolum.title}</p>
                </div>
              </Link>
            ) : <div className="flex-1"></div>}
          </div>
        </div>
      </section>
    </main>
  );
}
