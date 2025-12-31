// AYNA Seans Detay Sayfası
// Dynamic routing: /moduller/ayna/[bolum]/seans-[seansNo]

import type { Metadata } from 'next';
import Link from 'next/link';
import { aynaData } from '@/lib/ayna-data';
import { ChevronLeft, ChevronRight, Play, BookOpen, Clock, AlertCircle } from 'lucide-react';

export const dynamicParams = false; // Sadece generateStaticParams'te tanımlı routeler

export async function generateStaticParams() {
  const params: Array<{ bolum: string; seansNo: string }> = [];

  aynaData.bolumler.forEach((bolum) => {
    bolum.seans.forEach((_, idx) => {
      params.push({
        bolum: bolum.slug,
        seansNo: (idx + 1).toString(),
      });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { bolum: string; seansNo: string };
}): Promise<Metadata> {
  return {
    title: 'OLUK AYNA | Seans',
    description: 'OLUK AYNA modülü seansı',
  };
}

export default function SeansPage({
  params,
}: {
  params: { bolum: string; seansNo: string };
}) {
  const bolum = aynaData.bolumler.find((b) => b.slug === params.bolum);
  const seansNo = parseInt(params.seansNo) - 1;

  if (!bolum || seansNo < 0 || seansNo >= bolum.seans.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-deep-teal mb-4">Seans Bulunamadı</h1>
          <Link href="/moduller/ayna" className="text-warm-gold hover:underline">
            AYNA Modülüne Dön
          </Link>
        </div>
      </div>
    );
  }

  const seans = bolum.seans[seansNo];
  
  if (!seans) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-deep-teal mb-4">Seans Yüklenemedi</h1>
          <Link href="/moduller/ayna" className="text-warm-gold hover:underline">
            AYNA Modülüne Dön
          </Link>
        </div>
      </div>
    );
  }

  const prevSeansNo = seansNo > 0 ? seansNo : null;
  const nextSeansNo = seansNo < bolum.seans.length - 1 ? seansNo + 2 : null;
  const isLastSeans = seansNo === bolum.seans.length - 1;
  const isLastBolum = bolum.order === aynaData.bolumler.length;

  return (
    <main className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-deep-teal/5 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-deep-teal/60">
          <Link href="/moduller" className="hover:text-warm-gold transition">Modüller</Link>
          <span>/</span>
          <Link href="/moduller/ayna" className="hover:text-warm-gold transition">AYNA</Link>
          <span>/</span>
          <Link href={`/moduller/ayna/${bolum.slug}`} className="hover:text-warm-gold transition">
            {bolum.title}
          </Link>
          <span>/</span>
          <span className="text-deep-teal font-semibold">{seans.title}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-deep-teal/10 h-1">
        <div
          className="bg-warm-gold h-full transition-all duration-500"
          style={{ width: `${((seansNo + 1) / bolum.seans.length) * 100}%` }}
        />
      </div>

      {/* Header */}
      <header className="bg-gradient-to-b from-deep-teal to-deep-teal/90 text-cream py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href={`/moduller/ayna/${bolum.slug}`} className="inline-flex items-center gap-2 text-cream/60 hover:text-cream transition mb-6">
            <ChevronLeft className="w-4 h-4" />
            <span>{bolum.title} Bölümüne Dön</span>
          </Link>

          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-warm-gold text-sm tracking-widest uppercase mb-2">
                Seans {seansNo + 1} / {bolum.seans.length}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl">{seans.title}</h1>
            </div>
            <div className="text-right">
              <div className="text-cream/60 text-sm">{seans.duration}</div>
              <div className="text-cream/60 text-sm">{seans.difficulty}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Uyarı Kutusu (varsa) */}
          {seans.warning && (
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 mb-1">⚠️ Uyarı</p>
                <p className="text-amber-800 text-sm">{seans.warning}</p>
              </div>
            </div>
          )}

          {/* Seans Bilgileri */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-warm-gold">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-warm-gold" />
                <span className="text-xs text-warm-gold font-semibold">SÜRE</span>
              </div>
              <p className="text-deep-teal font-semibold">{seans.duration}</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-warm-gold">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-warm-gold font-semibold">🎯</span>
                <span className="text-xs text-warm-gold font-semibold">ZORLUk</span>
              </div>
              <p className="text-deep-teal font-semibold">{seans.difficulty}</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-warm-gold">
              <div className="flex items-center gap-2 mb-2">
                <Play className="w-4 h-4 text-warm-gold" />
                <span className="text-xs text-warm-gold font-semibold">TÜR</span>
              </div>
              <p className="text-deep-teal font-semibold">Meditasyon</p>
            </div>
          </div>

          {/* Seans Metni */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-warm-gold/10 mb-12">
            <div className="space-y-6">
              {seans.content.split('\n').map((line, idx) => {
                // Timestamp bölümleri için special formatting
                if (line.match(/^\[/)) {
                  const [timestamp, ...rest] = line.split('] ');
                  return (
                    <div key={idx} className="space-y-2">
                      <div className="bg-cream/50 rounded-lg p-3 flex gap-3 mb-2">
                        <span className="text-sm font-mono text-deep-teal/60 flex-shrink-0">{timestamp}]</span>
                        <h4 className="font-semibold text-deep-teal">{rest.join('] ')}</h4>
                      </div>
                    </div>
                  );
                }

                // Boş satırlar
                if (!line.trim()) return null;

                // Normal metinler
                return (
                  <p key={idx} className="text-deep-teal/80 leading-relaxed font-light text-lg">
                    {line}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Pratik Bölümü */}
          {seans.practice && (
            <div className="bg-warm-gold/5 rounded-2xl p-8 border border-warm-gold/20 mb-12">
              <h3 className="font-serif text-2xl text-deep-teal mb-4">{seans.practice.title}</h3>
              <p className="text-deep-teal/70 mb-4">{seans.practice.description}</p>
              <div className="bg-white rounded-lg p-6 border-l-4 border-warm-gold">
                <p className="text-sm text-deep-teal/60 mb-2">Soruya Cevap Ver:</p>
                <p className="text-lg font-serif text-deep-teal italic">"{seans.practice.question}"</p>
              </div>
            </div>
          )}

          {/* Tamamla Butonu ve Navigation */}
          <div className="flex flex-col gap-6 py-8 border-t border-deep-teal/10 mt-12">
            <button className="w-full bg-gradient-to-r from-warm-gold to-warm-gold/80 text-deep-teal font-semibold px-8 py-4 rounded-full hover:shadow-lg transition text-lg">
              Bu Seansı Tamamladım ✓
            </button>

            <div className="flex justify-between items-center gap-4">
              {prevSeansNo !== null ? (
                <Link href={`/moduller/ayna/${bolum.slug}/seans-${prevSeansNo}`} className="flex items-center gap-2 text-warm-gold hover:text-warm-gold/80 transition">
                  <ChevronLeft className="w-4 h-4" />
                  <span>Önceki Seans</span>
                </Link>
              ) : (
                <div />
              )}

              {nextSeansNo ? (
                <Link href={`/moduller/ayna/${bolum.slug}/seans-${nextSeansNo}`} className="flex items-center gap-2 text-warm-gold hover:text-warm-gold/80 transition">
                  <span>Sonraki Seans</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : isLastSeans && !isLastBolum ? (
                <Link href={`/moduller/ayna/${aynaData.bolumler[bolum.order]?.slug || '/moduller/ayna'}`} className="flex items-center gap-2 text-warm-gold hover:text-warm-gold/80 transition">
                  <span>Sonraki Bölüm</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : isLastSeans && isLastBolum ? (
                <Link href="/moduller/ayna" className="flex items-center gap-2 text-warm-gold hover:text-warm-gold/80 transition">
                  <span>AYNA'yı Tamamladın! 🎉</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <div />
              )}
            </div>
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
