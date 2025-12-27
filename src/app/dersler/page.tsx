'use client';

import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/seo';
import { Droplets, Shield, Zap, Sparkles, Lock, ChevronRight } from 'lucide-react';

const FAZLAR = [
  {
    id: 1,
    slug: 'arinma',
    baslik: 'ARINMA',
    slogan: 'Önce yükü at, sonra motora bak',
    aciklama: 'Fiziksel, duygusal, zihinsel ve enerjetik temizlik. Dönüşümün temeli.',
    icon: Droplets,
    renk: '#0D4F4F',
    asama: 8,
    sure: '~12 Hafta',
    kilitli: false,
  },
  {
    id: 2,
    slug: 'koruma',
    baslik: 'KORUMA',
    slogan: 'Temizlediğini koru, kalkanlarını kur',
    aciklama: 'Enerji kalkanları, sınırlar ve koruma protokolleri.',
    icon: Shield,
    renk: '#C9A962',
    asama: null,
    sure: '~8 Hafta',
    kilitli: true,
    onkosul: 'ARINMA',
  },
  {
    id: 3,
    slug: 'aktivasyon',
    baslik: 'AKTİVASYON',
    slogan: 'Sistemi çalıştır, potansiyelini aç',
    aciklama: 'Çakra aktivasyonları, enerji yükseltme ve kapasite artırma.',
    icon: Zap,
    renk: '#8B4513',
    asama: null,
    sure: '~10 Hafta',
    kilitli: true,
    onkosul: 'KORUMA',
  },
  {
    id: 4,
    slug: 'ileri-seviye',
    baslik: 'İLERİ SEVİYE',
    slogan: 'Derinleş, ustalaş, dönüştür',
    aciklama: 'İleri teknikler, ustalık ve derin dönüşüm çalışmaları.',
    icon: Sparkles,
    renk: '#4A2C6A',
    asama: null,
    sure: 'Süresiz',
    kilitli: true,
    onkosul: 'AKTİVASYON',
  },
];

export default function DerslerPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://oluk.org' },
    { name: 'Dersler', url: 'https://oluk.org/dersler' },
  ]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F0E6] to-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0D4F4F] mb-4">
            Dönüşüm Yolculuğu
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dıştan içe, adım adım, sabırla... Her faz bir öncekinin temeli üzerine kurulu.
          </p>
        </div>

        {/* FAZ Kartları */}
        <div className="space-y-6">
          {FAZLAR.map((faz, index) => {
            const Icon = faz.icon;
            
            return (
              <div key={faz.id}>
                {/* Bağlantı Çizgisi */}
                {index > 0 && (
                  <div className="flex justify-center -mt-3 mb-3">
                    <div className="w-0.5 h-6 bg-gray-300" />
                  </div>
                )}
                
                {/* FAZ Kartı */}
                <div
                  className={`relative rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                    faz.kilitli 
                      ? 'border-gray-200 bg-gray-50 opacity-70' 
                      : 'border-transparent shadow-lg hover:shadow-xl'
                  }`}
                  style={{
                    backgroundColor: faz.kilitli ? undefined : `${faz.renk}08`,
                    borderColor: faz.kilitli ? undefined : faz.renk,
                  }}
                >
                  {/* Sol Renkli Şerit */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-2"
                    style={{ backgroundColor: faz.kilitli ? '#d1d5db' : faz.renk }}
                  />

                  <div className="p-6 pl-8">
                    {/* Üst Kısım */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        {/* İkon */}
                        <div
                          className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                            faz.kilitli ? 'bg-gray-200' : ''
                          }`}
                          style={{ backgroundColor: faz.kilitli ? undefined : faz.renk }}
                        >
                          {faz.kilitli ? (
                            <Lock className="w-7 h-7 text-gray-400" />
                          ) : (
                            <Icon className="w-7 h-7 text-white" />
                          )}
                        </div>

                        {/* Başlık */}
                        <div>
                          <span className="text-sm font-medium text-gray-500">
                            FAZ {faz.id}
                          </span>
                          <h2
                            className="text-2xl font-bold"
                            style={{ color: faz.kilitli ? '#9ca3af' : faz.renk }}
                          >
                            {faz.baslik}
                          </h2>
                        </div>
                      </div>
                    </div>

                    {/* Slogan */}
                    <p className={`text-lg italic mb-3 ${faz.kilitli ? 'text-gray-400' : 'text-gray-600'}`}>
                      "{faz.slogan}"
                    </p>

                    {/* Açıklama */}
                    <p className={`text-base mb-4 ${faz.kilitli ? 'text-gray-400' : 'text-gray-500'}`}>
                      {faz.aciklama}
                    </p>

                    {/* Meta Bilgiler */}
                    <div className="flex items-center gap-4 text-base text-gray-500 mb-4">
                      <span>{faz.asama ? `${faz.asama} Aşama` : '? Aşama'}</span>
                      <span>•</span>
                      <span>{faz.sure}</span>
                    </div>

                    {/* Aksiyon */}
                    {faz.kilitli ? (
                      <div className="bg-gray-100 rounded-lg p-3 text-center text-gray-500 text-base">
                        <Lock className="w-4 h-4 inline mr-2" />
                        {faz.onkosul} tamamlandığında açılır
                      </div>
                    ) : (
                      <Link
                        href={`/dersler/${faz.slug}`}
                        className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90"
                        style={{ backgroundColor: faz.renk }}
                      >
                        Başla
                        <ChevronRight className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Alt Bilgi */}
        <div className="mt-16 text-center">
          <div className="bg-[#0D4F4F]/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-[#0D4F4F] mb-4">
              💡 Neden Bu Sıra?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              <strong>Arınmadan koruma olmaz</strong> – temizlemediğin şeyi koruyamazsın.<br />
              <strong>Korumadan aktivasyon olmaz</strong> – korumasız aktivasyon tehlikelidir.<br />
              <strong>Aktivasyonsuz ileri seviye olmaz</strong> – temel sistemler çalışmalı.<br /><br />
              Bu sistem senin güvenliğin için tasarlandı. Sabırla ilerle.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
//
// ...eski kod kaldırıldı, modern UI kodu yukarıda zaten mevcut...
