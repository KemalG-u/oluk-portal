// IŞIK Bölüm Ders Template
// Tüm dersler bu template'i kullanacak

import type { Metadata } from 'next';
import Link from 'next/link';
import { isikData } from '@/lib/isik-data';
import { ChevronLeft, ChevronRight, BookOpen, Clock } from 'lucide-react';

export const dynamicParams = false; // Sadece generateStaticParams'te tanımlı routeler

// params = { bolum: 'beden-isigi' }
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
    title: `${bolum.title}: ${bolum.subtitle} - Ders | OLUK IŞIK`,
    description: `${bolum.description} - OLUK IŞIK modülü ${bolum.order}. bölümü. ${bolum.dersCount} ders, ${bolum.seansCount} seans.`,
    openGraph: {
      title: `${bolum.title}: ${bolum.subtitle}`,
      description: bolum.description,
    }
  };
}

export default function BolumDersPage({ params }: { params: { bolum: string } }) {
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
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-deep-teal/60">
          <Link href="/moduller" className="hover:text-warm-gold transition">Modüller</Link>
          <span>/</span>
          <Link href="/moduller/isik" className="hover:text-warm-gold transition">IŞIK</Link>
          <span>/</span>
          <span className="text-deep-teal font-semibold">{bolum.title}</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-b from-deep-teal to-deep-teal/90 text-cream py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/moduller/isik" className="inline-flex items-center gap-2 text-cream/60 hover:text-cream transition mb-6">
            <ChevronLeft className="w-4 h-4" />
            <span>IŞIK Modülüne Dön</span>
          </Link>
          <div className="text-5xl mb-4">{bolum.icon}</div>
          <p className="text-warm-gold text-sm tracking-widest uppercase mb-2">Bölüm {bolum.order}</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-2">{bolum.title}</h1>
          <p className="text-xl text-cream/80 italic mb-6">{bolum.subtitle}</p>
          <p className="text-cream/70 max-w-2xl mx-auto">{bolum.description}</p>
        </div>
      </header>

      {/* Ders İçeriği */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Ders Başlığı */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-warm-gold" />
              <h2 className="font-serif text-3xl text-deep-teal">{bolum.ders.title}</h2>
            </div>
            <div className="flex items-center gap-4 text-sm text-deep-teal/60 mb-8">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{bolum.ders.duration}</span>
              </div>
            </div>
          </div>

          {/* Ders Metni */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-warm-gold/10 mb-12">
            <div className="prose prose-lg max-w-none">
              {bolum.ders.content.split('\n\n').map((para, idx) => (
                <p key={idx} className="text-deep-teal/80 leading-relaxed mb-4 whitespace-pre-wrap font-light text-lg">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Kazanımlar */}
          <div className="bg-warm-gold/5 rounded-2xl p-8 mb-12 border border-warm-gold/20">
            <h3 className="font-serif text-2xl text-deep-teal mb-6">Bu Dersten Sonra</h3>
            <ul className="space-y-3">
              {bolum.ders.learnings.map((learning, idx) => (
                <li key={idx} className="flex gap-3 text-deep-teal">
                  <span className="text-warm-gold font-semibold">✓</span>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Seanslar Linki */}
          <div className="bg-cream rounded-lg p-6 mb-12 border-l-4 border-warm-gold">
            <p className="text-deep-teal/70 mb-2 text-sm">Sonraki Adım</p>
            <h3 className="font-serif text-2xl text-deep-teal mb-4">
              {bolum.seansCount} Seans ile Pratik Yap
            </h3>
            <Link href={`/moduller/isik/${bolum.slug}`} className="inline-flex items-center gap-2 text-warm-gold font-semibold hover:gap-3 transition">
              <span>Seansları Gör</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 pt-8 border-t border-warm-gold/20">
            {prevBolum ? (
              <Link href={`/moduller/isik/${prevBolum.slug}/ders`} className="flex-1">
                <div className="bg-cream rounded-lg p-4 hover:bg-cream/80 transition text-center">
                  <p className="text-xs text-deep-teal/60 mb-1">← Önceki</p>
                  <p className="font-serif text-sm text-deep-teal">{prevBolum.title}</p>
                </div>
              </Link>
            ) : <div className="flex-1"></div>}
            
            <Link href={`/moduller/isik/${bolum.slug}`}>
              <div className="bg-cream rounded-lg p-4 hover:bg-cream/80 transition text-center">
                <p className="text-xs text-deep-teal/60 mb-1">Bölüme Dön</p>
                <p className="font-serif text-sm text-deep-teal">Tüm İçerik</p>
              </div>
            </Link>
            
            {nextBolum ? (
              <Link href={`/moduller/isik/${nextBolum.slug}/ders`} className="flex-1">
                <div className="bg-cream rounded-lg p-4 hover:bg-cream/80 transition text-center">
                  <p className="text-xs text-deep-teal/60 mb-1">Sonraki →</p>
                  <p className="font-serif text-sm text-deep-teal">{nextBolum.title}</p>
                </div>
              </Link>
            ) : <div className="flex-1"></div>}
          </div>
        </div>
      </section>
    </main>
  );
}
