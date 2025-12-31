// AMAÇ Seans Template

import type { Metadata } from 'next';
import Link from 'next/link';
import { amacData } from '@/lib/amac-data';
import { ChevronLeft, ChevronRight, Play, Clock, AlertCircle, Phone } from 'lucide-react';

export const dynamicParams = false;

const primary = '#6B21A8';
const accent = '#A78BFA';

function normalizeSeansParam(rawParam: string | string[] | undefined) {
  const raw = Array.isArray(rawParam) ? rawParam[0] : rawParam;

  if (!raw) {
    return { seansNo: null, seansSlug: '' };
  }

  const sanitized = String(raw).replace(/^seans-/, '');
  const seansNo = Number.parseInt(sanitized, 10);
  const seansSlug = raw.startsWith('seans-') ? raw : `seans-${sanitized}`;

  return {
    seansNo: Number.isFinite(seansNo) ? seansNo : null,
    seansSlug,
  };
}

function resolveSeans(params: { bolum: string; seansNo: string }) {
  const bolum = amacData.bolumler.find((b) => b.slug === params.bolum);
  const { seansNo, seansSlug } = normalizeSeansParam(params.seansNo);
  const seansIndex = bolum?.seans.findIndex((seans, idx) => seans.slug === seansSlug || (seansNo && idx + 1 === seansNo)) ?? -1;
  const seans = seansIndex >= 0 && bolum ? bolum.seans[seansIndex] : undefined;
  const displaySeansNo = seansIndex >= 0 ? seansIndex + 1 : seansNo;

  return {
    bolum,
    seans,
    seansIndex,
    displaySeansNo,
  };
}

export async function generateStaticParams() {
  const params: Array<{ bolum: string; seansNo: string }> = [];

  amacData.bolumler.forEach((bolum) => {
    bolum.seans.forEach((_, idx) => {
      params.push({ bolum: bolum.slug, seansNo: String(idx + 1) });
    });
  });

  return params;
}

export async function generateMetadata({ params }: { params: { bolum: string; seansNo: string } }): Promise<Metadata> {
  const { bolum, seans, displaySeansNo } = resolveSeans(params);

  if (!bolum || !seans || !displaySeansNo) {
    return {
      title: 'Seans Bulunamadı | OLUK AMAÇ',
      description: 'İstenen seans bulunamadı.'
    };
  }

  return {
    title: `${seans.title} - ${bolum.title} | OLUK AMAÇ`,
    description: `${seans.title} seansı. ${seans.duration} meditasyon. ${bolum.title} bölümü. Seans ${displaySeansNo}.`,
    openGraph: {
      title: seans.title,
      description: `${seans.duration} rehberli seans`
    }
  };
}

export default function SeansPage({ params }: { params: { bolum: string; seansNo: string } }) {
  const { bolum, seans, seansIndex, displaySeansNo } = resolveSeans(params);

  if (!bolum || !seans || !displaySeansNo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif" style={{ color: primary }}>Seans Bulunamadı</h1>
          <Link href="/moduller/amac" className="hover:underline" style={{ color: accent }}>
            AMAÇ Modülüne Dön
          </Link>
        </div>
      </div>
    );
  }

  const prevSeans = seansIndex > 0 ? bolum.seans[seansIndex - 1] : null;
  const nextSeans = seansIndex >= 0 && seansIndex < bolum.seans.length - 1 ? bolum.seans[seansIndex + 1] : null;
  const nextBolum = nextSeans ? null : amacData.bolumler.find((b) => b.order === bolum.order + 1);
  const isSensitive = seans.sensitive;
  const seansNumber = displaySeansNo;

  return (
    <main className="min-h-screen bg-[#F8F4FF]">
      {/* Breadcrumb */}
      <div className="px-6 py-4" style={{ backgroundColor: `${primary}0D` }}>
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm" style={{ color: `${primary}99` }}>
          <Link href="/moduller" className="hover:text-[#6B21A8] transition">Modüller</Link>
          <span>/</span>
          <Link href="/moduller/amac" className="hover:text-[#6B21A8] transition">AMAÇ</Link>
          <span>/</span>
          <Link href={`/moduller/amac/${bolum.slug}`} className="hover:text-[#6B21A8] transition">
            {bolum.title}
          </Link>
          <span>/</span>
          <span className="font-semibold" style={{ color: primary }}>{seans.title}</span>
        </div>
      </div>

      {/* Header */}
      <header className="text-cream py-12 px-6" style={{ background: `linear-gradient(180deg, ${primary}, ${primary}E6)` }}>
        <div className="max-w-4xl mx-auto text-center">
          <Link href={`/moduller/amac/${bolum.slug}`} className="inline-flex items-center gap-2 text-white/70 hover:text-white transition mb-6">
            <ChevronLeft className="w-4 h-4" />
            <span>{bolum.title} Bölümüne Dön</span>
          </Link>
          <div className="text-5xl mb-4">{bolum.icon}</div>
          <p className="text-sm tracking-widest uppercase mb-2" style={{ color: accent }}>Seans {seansNumber}</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-2">{seans.title}</h1>
          <p className="text-cream/80 max-w-2xl mx-auto mb-6 flex items-center gap-2 justify-center">
            <Clock className="w-4 h-4" />
            {seans.duration}
          </p>
        </div>
      </header>

      {/* Safety Banner for hassas seanslar */}
      {isSensitive && (
        <div className="px-6 py-4" style={{ backgroundColor: `${accent}1A`, borderTop: `1px solid ${accent}33`, borderBottom: `1px solid ${accent}33` }}>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5" style={{ color: accent }} />
              <p className="text-sm" style={{ color: `${primary}CC` }}>
                Bu seans derin duygular uyandırabilir. Zorlanırsan seansı durdurabilir veya atlayabilirsin. Destek hattı: 182.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link href={`/moduller/amac/${bolum.slug}`} className="px-4 py-2 rounded-md text-sm font-semibold" style={{ backgroundColor: accent, color: primary }}>
                Seansı atla
              </Link>
              <a href="tel:182" className="flex items-center gap-2 text-sm font-semibold" style={{ color: primary }}>
                <Phone className="w-4 h-4" /> 182
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Uyarı */}
      {seans.warning && (
        <div className="px-6 py-4" style={{ backgroundColor: `${accent}14`, borderTop: `1px solid ${accent}33`, borderBottom: `1px solid ${accent}33` }}>
          <div className="max-w-4xl mx-auto flex gap-4">
            <AlertCircle className="w-5 h-5" style={{ color: accent }} />
            <p className="text-sm" style={{ color: `${primary}CC` }}>{seans.warning}</p>
          </div>
        </div>
      )}

      {/* Seans İçeriği */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border" style={{ borderColor: `${accent}33` }}>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-sm mb-1" style={{ color: `${primary}99` }}>Bölüm</div>
                <div className="font-serif text-lg" style={{ color: primary }}>{bolum.title}</div>
              </div>
              <div className="text-center">
                <div className="text-sm mb-1" style={{ color: `${primary}99` }}>Seans</div>
                <div className="font-serif text-lg" style={{ color: primary }}>{seansNumber}/{bolum.seansCount}</div>
              </div>
              <div className="text-center">
                <div className="text-sm mb-1" style={{ color: `${primary}99` }}>Zorluk</div>
                <div className="font-serif text-lg" style={{ color: primary }}>{seans.difficulty}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg mb-6" style={{ backgroundColor: `${accent}14`, border: `1px solid ${accent}33`, color: primary }}>
              <Play className="w-5 h-5" style={{ color: accent }} />
              <span className="font-semibold">Sessiz bir ortam bul ve rahat pozisyon al.</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-[#F5F0FF] rounded-2xl p-8 mb-8">
                <div className="flex items-start gap-3 mb-4">
                  <Play className="w-5 h-5" style={{ color: accent }} />
                  <h2 className="font-serif text-2xl m-0" style={{ color: primary }}>Seans Senaryosu</h2>
                </div>
                {seans.content.split('\n\n').map((para, idx) => (
                  <p key={idx} className="leading-relaxed mb-4 whitespace-pre-wrap font-light text-base" style={{ color: `${primary}CC` }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-12 border" style={{ borderColor: `${accent}33` }}>
              <h3 className="font-serif text-2xl mb-4" style={{ color: primary }}>Sonra Ne Yap?</h3>
              <ul className="space-y-3" style={{ color: `${primary}CC` }}>
                <li className="flex gap-3"><span className="font-semibold" style={{ color: accent }}>1.</span><span>Birkaç dakika sakin kal, deneyimi sindir.</span></li>
                <li className="flex gap-3"><span className="font-semibold" style={{ color: accent }}>2.</span><span>Hızlı kalkma; gerekirse deneyimi not et.</span></li>
                <li className="flex gap-3"><span className="font-semibold" style={{ color: accent }}>3.</span><span>Su iç, günü hafifçe sürdür.</span></li>
              </ul>
            </div>

            <div className="flex gap-4 pt-8 border-t" style={{ borderColor: `${accent}33` }}>
              {prevSeans ? (
                <Link href={`/moduller/amac/${bolum.slug}/seans-${seansNumber - 1}`} className="flex-1">
                  <div className="bg-[#F3ECFF] rounded-lg p-4 hover:bg-[#EDE1FF] transition text-center">
                    <p className="text-xs" style={{ color: `${primary}99` }}>← Önceki Seans</p>
                    <p className="font-serif text-sm" style={{ color: primary }}>{prevSeans.title}</p>
                  </div>
                </Link>
              ) : (
                <Link href={`/moduller/amac/${bolum.slug}/ders`} className="flex-1">
                  <div className="bg-[#F3ECFF] rounded-lg p-4 hover:bg-[#EDE1FF] transition text-center">
                    <p className="text-xs" style={{ color: `${primary}99` }}>← Dersi Oku</p>
                    <p className="font-serif text-sm" style={{ color: primary }}>{bolum.ders.title}</p>
                  </div>
                </Link>
              )}

              {nextSeans ? (
                <Link href={`/moduller/amac/${bolum.slug}/seans-${seansNumber + 1}`} className="flex-1">
                  <div className="bg-[#F3ECFF] rounded-lg p-4 hover:bg-[#EDE1FF] transition text-center">
                    <p className="text-xs" style={{ color: `${primary}99` }}>Sonraki Seans →</p>
                    <p className="font-serif text-sm" style={{ color: primary }}>{nextSeans.title}</p>
                  </div>
                </Link>
              ) : nextBolum ? (
                <Link href={`/moduller/amac/${nextBolum.slug}`} className="flex-1">
                  <div className="bg-[#F3ECFF] rounded-lg p-4 hover:bg-[#EDE1FF] transition text-center">
                    <p className="text-xs" style={{ color: `${primary}99` }}>Sonraki Bölüm →</p>
                    <p className="font-serif text-sm" style={{ color: primary }}>{nextBolum.title}</p>
                  </div>
                </Link>
              ) : (
                <div className="flex-1"></div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
