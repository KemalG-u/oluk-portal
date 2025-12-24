
'use client';

import Link from 'next/link';
import { ArrowLeft, Lock, ChevronRight, Play, CheckCircle2, Circle, BookOpen, Clock, Target } from 'lucide-react';

const DERSLER = [
  {
    id: 1,
    slug: 'neden-arinma',
    baslik: 'Neden Arınma?',
    aciklama: 'Büyük resmi gör. Arınma olmadan neden ilerlenemeyeceğini anla.',
    sure: '15 dk',
    tur: 'Okuma',
    icon: BookOpen,
    tamamlandi: false,
    kilitli: false,
  },
  {
    id: 2,
    slug: 'soz',
    baslik: 'Söz',
    aciklama: 'Ruhun imzası. Niyet ve yazılı taahhüdün gücü.',
    sure: '12 dk',
    tur: 'Okuma',
    icon: Target,
    tamamlandi: false,
    kilitli: false,
  },
  {
    id: 3,
    slug: 'yolculuga-hazirlik',
    baslik: 'Yolculuğa Hazırlık',
    aciklama: 'Kurallar, beklentiler ve bu yolculukta senden istenenler.',
    sure: '20 dk',
    tur: 'Okuma + Video',
    icon: Play,
    tamamlandi: false,
    kilitli: false,
  },
];

export default function KapiPage() {
  const tamamlanan = DERSLER.filter(d => d.tamamlandi).length;
  const toplam = DERSLER.length;
  const yuzde = Math.round((tamamlanan / toplam) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F0E6] to-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Geri Butonu */}
        <Link
          href="/dersler/arinma"
          className="inline-flex items-center gap-2 text-[#0D4F4F] hover:text-[#0D4F4F]/70 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Arınma Aşamaları</span>
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-sm text-[#0D4F4F]/60 mb-2">
            <span>FAZ 1: ARINMA</span>
            <span>→</span>
            <span>AŞAMA 0</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0D4F4F] mb-3">
            KAPI
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Giriş ve Farkındalık
          </p>
          <p className="text-gray-500">
            Neden arınma? Bu sorunun cevabını anlamadan başlamak, 
            haritasız yola çıkmak gibidir. Önce büyük resmi gör.
          </p>
        </div>

        {/* İlerleme */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">İlerleme</span>
            <span className="text-sm text-[#0D4F4F] font-semibold">{tamamlanan}/{toplam} Ders</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#0D4F4F] rounded-full transition-all duration-500"
              style={{ width: `${yuzde}%` }}
            />
          </div>
        </div>

        {/* Ders Listesi */}
        <div className="space-y-3">
          {DERSLER.map((ders, index) => {
            const Icon = ders.icon;
            
            return (
              <div
                key={ders.id}
                className={`relative rounded-xl border overflow-hidden transition-all duration-300 ${
                  ders.kilitli 
                    ? 'border-gray-200 bg-gray-50 opacity-60' 
                    : 'border-gray-200 bg-white shadow-sm hover:shadow-md'
                }`}
              >
                <div className="p-5">
                  <div className="flex items-center gap-4">
                    {/* Durum İkonu */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      ders.tamamlandi 
                        ? 'bg-green-100' 
                        : ders.kilitli 
                          ? 'bg-gray-100' 
                          : 'bg-[#0D4F4F]/10'
                    }`}>
                      {ders.tamamlandi ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      ) : ders.kilitli ? (
                        <Lock className="w-4 h-4 text-gray-400" />
                      ) : (
                        <Circle className="w-5 h-5 text-[#0D4F4F]" />
                      )}
                    </div>

                    {/* İçerik */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-medium text-gray-400">
                          DERS {ders.id}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          <span>{ders.sure}</span>
                        </div>
                        <span className="text-xs text-gray-300">•</span>
                        <span className="text-xs text-gray-400">{ders.tur}</span>
                      </div>
                      <h3 className={`font-semibold text-lg ${
                        ders.kilitli ? 'text-gray-400' : 'text-gray-800'
                      }`}>
                        {ders.baslik}
                      </h3>
                      <p className={`text-sm mt-1 ${
                        ders.kilitli ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {ders.aciklama}
                      </p>
                    </div>

                    {/* Aksiyon */}
                    {!ders.kilitli && !ders.tamamlandi && (
                      <Link
                        href={`/dersler/arinma/kapi/${ders.slug}`}
                        className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0D4F4F] transition-all hover:scale-105"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </Link>
                    )}
                    {ders.tamamlandi && (
                      <Link
                        href={`/dersler/arinma/kapi/${ders.slug}`}
                        className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 transition-all hover:bg-gray-200"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Alt Bilgi */}
        <div className="mt-10 text-center text-sm text-gray-500">
          <p>Her dersi sırayla tamamla. Bir ders bitmeden sonraki açılmaz.</p>
        </div>

      </div>
    </div>
  );
}
