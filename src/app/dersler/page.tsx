'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const dersler = [
  {
    id: 1,
    slug: 'ders-1',
    baslik: 'Kapı',
    altBaslik: 'İlk Adım',
    durum: 'ücretsiz',
    sure: '45 dakika',
    renk: 'from-teal to-teal-dark',
    ikon: '🚪',
  },
  {
    id: 2,
    slug: 'ders-2',
    baslik: 'Ayna',
    altBaslik: 'Kendi Yüzün',
    durum: 'ücretsiz',
    sure: '50 dakika',
    renk: 'from-gold to-gold-muted',
    ikon: '🪞',
  },
  {
    id: 3,
    slug: 'ders-3',
    baslik: 'Köprü',
    altBaslik: 'Geçiş',
    durum: 'premium',
    sure: '55 dakika',
    renk: 'from-sage to-sage-dark',
    ikon: '🌉',
  },
  {
    id: 4,
    slug: 'ders-4',
    baslik: 'Işık',
    altBaslik: 'Aydınlanma',
    durum: 'premium',
    sure: '60 dakika',
    renk: 'from-gold to-amber-600',
    ikon: '💡',
  },
  {
    id: 5,
    slug: 'ders-5',
    baslik: 'Yol',
    altBaslik: 'Süreklilik',
    durum: 'premium',
    sure: '65 dakika',
    renk: 'from-teal-dark to-midnight',
    ikon: '🛤️',
  },
];

export default function DerslerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-light to-cream py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-white/60 backdrop-blur-sm border border-gold-muted rounded-full">
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-sm text-teal tracking-widest">BEŞ DERS</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif text-teal mb-4">
            Yolculuk
          </h1>
          
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Her ders bir kapı.
            <br />
            Her kapı bir dünya.
          </p>
        </motion.div>

        <div className="space-y-6">
          {dersler.map((ders, index) => (
            <motion.div
              key={ders.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/dersler/${ders.slug}`}>
                <div className="group relative bg-white rounded-2xl p-8 border-2 border-transparent hover:border-gold transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div className={`absolute inset-0 bg-gradient-to-r ${ders.renk} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                  
                  <div className="relative flex items-center justify-between gap-6">
                    <div className="flex items-center gap-6 flex-1">
                      <div className="text-5xl">{ders.ikon}</div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl font-serif text-teal">
                            {ders.baslik}
                          </span>
                          
                          {ders.durum === 'ücretsiz' ? (
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                              ÜCRETSİZ
                            </span>
                          ) : (
                            <span className="text-gold text-sm">🔒</span>
                          )}
                        </div>
                        
                        <p className="text-charcoal/60 text-lg mb-2 italic">
                          {ders.altBaslik}
                        </p>
                        
                        <div className="flex items-center gap-2 text-sm text-charcoal/50">
                          <span>⏱️</span>
                          <span>{ders.sure}</span>
                        </div>
                      </div>
                    </div>
                    
                    <span className="text-2xl text-gold group-hover:translate-x-2 transition-transform inline-block">&rarr;</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-cream-dark/50 rounded-2xl p-8 max-w-2xl">
            <p className="text-charcoal/70 leading-relaxed mb-4">
              İlk iki ders ücretsiz.
              <br />
              Sonrası için abone ol.
            </p>
            <div className="text-sm text-charcoal/50">
              99 TL / ay
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
