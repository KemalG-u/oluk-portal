// AYNA Bölüm Ders Template
// Tüm dersler bu template'i kullanacak

import type { Metadata } from 'next';
import Link from 'next/link';
import { aynaData } from '@/lib/ayna-data';
import { ChevronLeft, ChevronRight, BookOpen, Clock } from 'lucide-react';

export const dynamicParams = false; // Sadece generateStaticParams'te tanımlı routeler

// params = { bolum: 'ilk-bakis' }
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
    title: `${bolum.title}: ${bolum.subtitle} - Ders | OLUK AYNA`,
    description: `${bolum.description} - OLUK AYNA modülü ${bolum.order}. bölümü. ${bolum.dersCount} ders, ${bolum.seansCount} seans.`,
    openGraph: {
      title: `${bolum.title}: ${bolum.subtitle}`,
      description: bolum.description,
    }
  };
}

export default function BolumDersPage({ params }: { params: { bolum: string } }) {
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
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-deep-teal/60">
          <Link href="/moduller" className="hover:text-warm-gold transition">Modüller</Link>
          <span>/</span>
          <Link href="/moduller/ayna" className="hover:text-warm-gold transition">AYNA</Link>
          <span>/</span>
          <span className="text-deep-teal font-semibold">{bolum.title}</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-b from-deep-teal to-deep-teal/90 text-cream py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/moduller/ayna" className="inline-flex items-center gap-2 text-cream/60 hover:text-cream transition mb-6">
            <ChevronLeft className="w-4 h-4" />
            <span>AYNA Modülüne Dön</span>
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

          {/* CTA - Seansa Geç */}
          <div className="text-center mb-12">
            <p className="text-deep-teal/60 mb-4">Ders tamamlandı. Seansa geçmeye hazır mısın?</p>
            <Link href={`/moduller/ayna/${bolum.slug}/seans-1`}>
              <button className="bg-gradient-to-r from-warm-gold to-warm-gold/80 text-deep-teal font-semibold px-10 py-4 rounded-full hover:shadow-lg transition flex items-center justify-center gap-2 mx-auto">
                Seansa Başla
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center py-8 border-t border-deep-teal/10 mt-12">
            {prevBolum ? (
              <Link href={`/moduller/ayna/${prevBolum.slug}`} className="flex items-center gap-2 text-warm-gold hover:text-warm-gold/80 transition">
                <ChevronLeft className="w-4 h-4" />
                <span>{prevBolum.title}</span>
              </Link>
            ) : (
              <div />
            )}

            <Link href="/moduller/ayna" className="text-deep-teal/60 hover:text-deep-teal transition text-sm">
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
