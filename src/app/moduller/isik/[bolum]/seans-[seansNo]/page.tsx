// IŞIK Seans Template
// Tüm seanslar bu template'i kullanacak

import type { Metadata } from 'next';
import Link from 'next/link';
import { isikData } from '@/lib/isik-data';
import { ChevronLeft, ChevronRight, Play, Clock, AlertCircle } from 'lucide-react';

export const dynamicParams = false;

export async function generateStaticParams() {
  const params: Array<{ bolum: string; seansNo: string }> = [];
  
  isikData.bolumler.forEach((bolum) => {
    bolum.seans.forEach((_, idx) => {
      params.push({
        bolum: bolum.slug,
        seansNo: String(idx + 1),
      });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: { params: { bolum: string; seansNo: string } }): Promise<Metadata> {
  const bolum = isikData.bolumler.find((b) => b.slug === params.bolum);
  const seansNo = parseInt(params.seansNo);
  const seans = bolum?.seans[seansNo - 1];

  if (!bolum || !seans) {
    return {
      title: 'Seans Bulunamadı | OLUK IŞIK',
      description: 'İstenen seans bulunamadı.',
    };
  }

  return {
    title: `${seans.title} - ${bolum.title} | OLUK IŞIK`,
    description: `${seans.title} seansı. ${seans.duration} meditasyon. ${bolum.title} bölümü.`,
    openGraph: {
      title: `${seans.title}`,
      description: `${seans.duration} meditasyon seansı`,
    }
  };
}

export default function SeansPage({ params }: { params: { bolum: string; seansNo: string } }) {
  const bolum = isikData.bolumler.find((b) => b.slug === params.bolum);
  const seansNo = parseInt(params.seansNo);
  const seans = bolum?.seans[seansNo - 1];

  if (!bolum || !seans) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-deep-teal mb-4">Seans Bulunamadı</h1>
          <Link href="/moduller/isik" className="text-warm-gold hover:underline">
            IŞIK Modülüne Dön
          </Link>
        </div>
      </div>
    );
  }

  const prevSeans = seansNo > 1 ? bolum.seans[seansNo - 2] : null;
  const nextSeans = seansNo < bolum.seans.length ? bolum.seans[seansNo] : null;
  const nextBolum = nextSeans ? null : isikData.bolumler.find((b) => b.order === bolum.order + 1);

  return (
    <main className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-deep-teal/5 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-deep-teal/60">
          <Link href="/moduller" className="hover:text-warm-gold transition">Modüller</Link>
          <span>/</span>
          <Link href="/moduller/isik" className="hover:text-warm-gold transition">IŞIK</Link>
          <span>/</span>
          <Link href={`/moduller/isik/${bolum.slug}`} className="hover:text-warm-gold transition">
            {bolum.title}
          </Link>
          <span>/</span>
          <span className="text-deep-teal font-semibold">{seans.title}</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-b from-deep-teal to-deep-teal/90 text-cream py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link href={`/moduller/isik/${bolum.slug}`} className="inline-flex items-center gap-2 text-cream/60 hover:text-cream transition mb-6">
            <ChevronLeft className="w-4 h-4" />
            <span>{bolum.title} Bölümüne Dön</span>
          </Link>
          <div className="text-5xl mb-4">{bolum.icon}</div>
          <p className="text-warm-gold text-sm tracking-widest uppercase mb-2">Seans {seansNo}</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-2">{seans.title}</h1>
          <p className="text-cream/80 max-w-2xl mx-auto mb-6">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {seans.duration}
            </span>
          </p>
        </div>
      </header>

      {/* Uyarı */}
      {seans.warning && (
        <div className="bg-warm-gold/10 border border-warm-gold/30 px-6 py-4">
          <div className="max-w-4xl mx-auto flex gap-4">
            <AlertCircle className="w-5 h-5 text-warm-gold flex-shrink-0 mt-0.5" />
            <p className="text-deep-teal/80 text-sm">{seans.warning}</p>
          </div>
        </div>
      )}

      {/* Seans İçeriği */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Info */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gold/10 mb-12">
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-sm text-deep-teal/60 mb-1">Bölüm</div>
                <div className="font-serif text-lg text-deep-teal">{bolum.title}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-deep-teal/60 mb-1">Seans</div>
                <div className="font-serif text-lg text-deep-teal">{seansNo}/{bolum.seansCount}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-deep-teal/60 mb-1">Zorluk</div>
                <div className="font-serif text-lg text-deep-teal">{seans.difficulty}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-warm-gold/5 rounded-lg border border-warm-gold/20">
              <Play className="w-5 h-5 text-warm-gold" />
              <span className="font-semibold text-deep-teal">Sessiz bir ortam bul ve rahat pozisyon al.</span>
            </div>
          </div>

          {/* Senaryo */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-cream rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-3 mb-4">
                <Play className="w-5 h-5 text-warm-gold flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl text-deep-teal m-0">Seans Senaryosu</h2>
              </div>
              
              {seans.content.split('\n\n').map((para, idx) => (
                <p key={idx} className="text-deep-teal/80 leading-relaxed mb-4 whitespace-pre-wrap font-light text-base">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Sonrası */}
          <div className="bg-warm-gold/5 rounded-2xl p-8 mb-12 border border-warm-gold/20">
            <h3 className="font-serif text-2xl text-deep-teal mb-4">Sonra Ne Yap?</h3>
            <ul className="space-y-3 text-deep-teal/80">
              <li className="flex gap-3">
                <span className="text-warm-gold">1.</span>
                <span>Birkaç dakika daha uzanmaya devam et.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-warm-gold">2.</span>
                <span>Hızlı kalkma, deneyimi günlüğe yaz.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-warm-gold">3.</span>
                <span>Biraz su iç, deneyimi işlet.</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 pt-8 border-t border-warm-gold/20">
            {prevSeans ? (
              <Link href={`/moduller/isik/${bolum.slug}/seans-${seansNo - 1}`} className="flex-1">
                <div className="bg-cream rounded-lg p-4 hover:bg-cream/80 transition text-center">
                  <p className="text-xs text-deep-teal/60 mb-1">← Önceki Seans</p>
                  <p className="font-serif text-sm text-deep-teal">{prevSeans.title}</p>
                </div>
              </Link>
            ) : (
              <Link href={`/moduller/isik/${bolum.slug}/ders`} className="flex-1">
                <div className="bg-cream rounded-lg p-4 hover:bg-cream/80 transition text-center">
                  <p className="text-xs text-deep-teal/60 mb-1">← Dersi Oku</p>
                  <p className="font-serif text-sm text-deep-teal">{bolum.ders.title}</p>
                </div>
              </Link>
            )}
            
            {nextSeans ? (
              <Link href={`/moduller/isik/${bolum.slug}/seans-${seansNo + 1}`} className="flex-1">
                <div className="bg-cream rounded-lg p-4 hover:bg-cream/80 transition text-center">
                  <p className="text-xs text-deep-teal/60 mb-1">Sonraki Seans →</p>
                  <p className="font-serif text-sm text-deep-teal">{nextSeans.title}</p>
                </div>
              </Link>
            ) : nextBolum ? (
              <Link href={`/moduller/isik/${nextBolum.slug}`} className="flex-1">
                <div className="bg-cream rounded-lg p-4 hover:bg-cream/80 transition text-center">
                  <p className="text-xs text-deep-teal/60 mb-1">Sonraki Bölüm →</p>
                  <p className="font-serif text-sm text-deep-teal">{nextBolum.title}</p>
                </div>
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
