'use client';

import Link from 'next/link';
import { ArrowLeft, Lock, ChevronRight, Sparkles, Heart, Brain, Zap, Users, Infinity, Eye, DoorOpen } from 'lucide-react';

const ASAMALAR = [
  {
    id: 0,
    slug: 'kapi',
    icon: DoorOpen,
    renk: '#0D4F4F',
    ders: 3,
  },
  {
    id: 1,
    slug: 'beden-temizligi',
    icon: Sparkles,
    renk: '#2D7D7D',
    ders: 5,
  },
  {
    id: 2,
    slug: 'kalp-temizligi',
    icon: Heart,
    renk: '#E07A5F',
    ders: 6,
  },
  {
    id: 3,
    slug: 'zihin-temizligi',
    icon: Brain,
    renk: '#6B5B95',
    ders: 5,
  },
  {
    id: 4,
    slug: 'enerji-temizligi',
    icon: Zap,
    renk: '#F4A261',
    ders: 7,
  },
  {
    id: 5,
    slug: 'sosyal-temizlik',
    icon: Users,
    renk: '#81B29A',
    ders: 4,
  },
  {
    id: 6,
    slug: 'sonsuzluk',
    icon: Infinity,
    renk: '#9C6644',
    ders: 5,
  },
  {
    id: 7,
    slug: 'goz-temizligi',
    icon: Eye,
    renk: '#4A2C6A',
    ders: 4,
  },
];

export default function ArinmaPage() {
  const toplamDers = ASAMALAR.reduce((acc, a) => acc + a.ders, 0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F0E6] to-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          href="/dersler"
          className="inline-flex items-center gap-2 text-[#0D4F4F] hover:text-[#0D4F4F]/70 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Tüm Fazlar</span>
        </Link>
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-[#0D4F4F]/60 mb-2 block">FAZ 1</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0D4F4F] mb-4">
            ARINMA
          </h1>
          <p className="text-xl text-gray-600 italic mb-4">
            "Önce yükü at, sonra motora bak"
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Dıştan içe, katman katman temizlik. Fiziksel bedenden başlayıp bilinçaltına kadar 
            tüm sistemlerini arındır. Bu faz olmadan diğerleri anlamsız.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500">
            <span>{ASAMALAR.length} Aşama</span>
            <span>•</span>
            <span>{toplamDers} Ders</span>
            <span>•</span>
            <span>~12 Hafta</span>
          </div>
        </div>

        <div className="space-y-4">
          {ASAMALAR.map((asama, index) => {
            const Icon = asama.icon;
            
            return (
              <div key={asama.id}>
                {/* Bağlantı Çizgisi */}
                {index > 0 && (
                  <div className="flex justify-center -mt-2 mb-2">
                    <div className="w-0.5 h-4 bg-gray-300" />
                  </div>
                )}
                
                {/* Aşama Kartı */}
                <div
                  className={`relative rounded-xl border overflow-hidden transition-all duration-300 ${
                    asama.kilitli 
            ? 'border-gray-200 bg-white/50 opacity-60' 
            : 'border-gray-200 bg-white shadow-md hover:shadow-lg'
          }`}
                >
                  <div className="p-5">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          asama.kilitli ? 'bg-gray-100' : ''
                        }`}
                        style={{ backgroundColor: asama.kilitli ? undefined : `${asama.renk}15` }}
                      >
                        {asama.kilitli ? (
                          <Lock className="w-5 h-5 text-gray-400" />
                        ) : (
                          <Icon className="w-6 h-6" style={{ color: asama.renk }} />
                        )}
                      </div>
                      {/* İçerik */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-gray-400">
                            AŞAMA {asama.id}
                          </span>
                          <span className="text-xs text-gray-300">•</span>
                          <span className="text-xs text-gray-400">{asama.ders} Ders</span>
                        </div>
                        <h3
                          className={`font-bold text-lg ${asama.kilitli ? 'text-gray-400' : ''}`}
                          style={{ color: asama.kilitli ? undefined : asama.renk }}
                        >
                          {asama.baslik}
                        </h3>
                        <p className={`text-sm ${asama.kilitli ? 'text-gray-400' : 'text-gray-500'}`}>
                          {asama.altbaslik}
                        </p>
                      </div>

                      {/* Aksiyon */}
                      {asama.kilitli ? (
                        <Lock className="w-5 h-5 text-gray-300 flex-shrink-0" />
                      ) : (
                        <Link
                          href={`/dersler/arinma/${asama.slug}`}
                          className="flex items-center justify-center w-10 h-10 rounded-lg transition-all hover:scale-105"
                          style={{ backgroundColor: asama.renk }}
                        >
                          <ChevronRight className="w-5 h-5 text-white" />
                        </Link>
                      )}
                    </div>
                    
                    {/* Açıklama - Sadece açık aşamalarda */}
                    {!asama.kilitli && (
                      <p className="mt-3 text-sm text-gray-500 pl-16">
                        {asama.aciklama}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Alt Bilgi */}
        <div className="mt-12 bg-[#0D4F4F]/5 rounded-xl p-6 text-center">
          <p className="text-gray-600 text-sm">
            Her aşama bir öncekinin üzerine inşa edilir. Sırayla ilerle, acele etme.
            <br />
            <strong>Bir aşamayı tamamlamadan sonrakine geçemezsin.</strong>
          </p>
        </div>

      </div>
    </div>
  );
}

