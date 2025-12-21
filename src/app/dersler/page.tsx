'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const dersler = [
  {
    id: 1,
    slug: 'ders-1',
    title: 'Kapı',
    subtitle: 'Temel Arınma',
    description: 'Yolculuk burada başlar. Nefes, beden, farkındalık.',
    duration: 45,
    level: 'Başlangıç',
    icon: '🚪',
    color: 'from-teal-600 to-teal-800',
    locked: false,
  },
  {
    id: 2,
    slug: 'ders-2',
    title: 'Yasin Kapısı',
    subtitle: '40 Günlük Arınma',
    description: 'Kapı açılmaz. Kapı zaten açık. Sen kapalıydın.',
    duration: 25,
    level: 'Orta',
    icon: '🌙',
    color: 'from-amber-600 to-amber-800',
    locked: false,
  },
  {
    id: 3,
    slug: 'ders-3',
    title: '8 Kalkan',
    subtitle: 'Enerji Koruma',
    description: 'Sekiz katman. Sekiz sur. Dışarı sızmaz.',
    duration: 30,
    level: 'Orta',
    icon: '🛡️',
    color: 'from-indigo-600 to-indigo-800',
    locked: false,
  },
  {
    id: 4,
    slug: 'ders-4',
    title: 'Spiral Beyaz Alev',
    subtitle: 'Derin Arınma',
    description: 'Ateş yakmaz. Ateş arındırır.',
    duration: 40,
    level: 'İleri',
    icon: '🔥',
    color: 'from-orange-600 to-orange-800',
    locked: false,
  },
  {
    id: 5,
    slug: 'ders-5',
    title: 'Ayna',
    subtitle: 'Kendini Tanıma',
    description: 'Ayna yalan söylemez. Sen hazır mısın?',
    duration: 35,
    level: 'İleri',
    icon: '🪞',
    color: 'from-purple-600 to-purple-800',
    locked: true,
  },
  {
    id: 6,
    slug: 'ders-6',
    title: 'Köprü',
    subtitle: 'Bağlantılar',
    description: 'İki kıyı arasında. Ne orada ne burada.',
    duration: 30,
    level: 'İleri',
    icon: '🌉',
    color: 'from-cyan-600 to-cyan-800',
    locked: true,
  },
  {
    id: 7,
    slug: 'ders-7',
    title: '4 Beden',
    subtitle: 'Bütünleşme',
    description: 'Fiziksel. Duygusal. Zihinsel. Ruhsal.',
    duration: 45,
    level: 'İleri',
    icon: '✨',
    color: 'from-emerald-600 to-emerald-800',
    locked: true,
  },
  {
    id: 8,
    slug: 'ders-8',
    title: 'Işık',
    subtitle: 'Aydınlanma',
    description: 'Karanlık ışığı tanımlar. Işık karanlığı siler.',
    duration: 50,
    level: 'Usta',
    icon: '💫',
    color: 'from-yellow-500 to-yellow-700',
    locked: true,
  },
  {
    id: 9,
    slug: 'ders-9',
    title: 'Kollektif',
    subtitle: 'Bilinçaltı Havuzu',
    description: 'Sen bir damla. Damla denizde. Deniz damlada.',
    duration: 45,
    level: 'Usta',
    icon: '🌊',
    color: 'from-blue-600 to-blue-800',
    locked: true,
  },
  {
    id: 10,
    slug: 'ders-10',
    title: 'Yol',
    subtitle: 'Zarafetin Akışı',
    description: 'Yol bitmez. Yolcu biter. Sonra yeniden başlar.',
    duration: 60,
    level: 'Usta',
    icon: '🛤️',
    color: 'from-rose-600 to-rose-800',
    locked: true,
  },
];

const levelColors: Record<string, string> = {
  'Başlangıç': 'bg-green-500/20 text-green-300',
  'Orta': 'bg-amber-500/20 text-amber-300',
  'İleri': 'bg-purple-500/20 text-purple-300',
  'Usta': 'bg-rose-500/20 text-rose-300',
};

export default function DerslerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1f3c] to-[#0a1628]">
      {/* Header */}
      <header className="pt-20 pb-12 px-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#C9A962] tracking-[0.3em] text-sm mb-4"
        >
          ON KONAK
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif text-white mb-4"
        >
          Dönüşüm Yolculuğu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-md mx-auto"
        >
          Her ders bir kapı. Her kapı bir dünya.
        </motion.p>
      </header>

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dersler.map((ders, index) => (
            <motion.div
              key={ders.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={ders.locked ? '#' : `/dersler/${ders.slug}`}>
                <div
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${ders.color} p-6 h-full min-h-[280px] flex flex-col justify-between transition-all duration-300 ${
                    ders.locked
                      ? 'opacity-60 cursor-not-allowed'
                      : 'hover:scale-[1.02] hover:shadow-xl hover:shadow-[#C9A962]/20 cursor-pointer'
                  }`}
                >
                  {/* Lock overlay */}
                  {ders.locked && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                      <span className="text-white/80 text-lg">🔒 Premium</span>
                    </div>
                  )}

                  {/* Content */}
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{ders.icon}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${levelColors[ders.level]}`}>
                        {ders.level}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif text-white mb-1">{ders.title}</h3>
                    <p className="text-white/70 text-sm mb-3">{ders.subtitle}</p>
                    <p className="text-white/60 text-sm leading-relaxed">{ders.description}</p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <span className="text-white/50 text-sm">⏱️ {ders.duration} dk</span>
                    {!ders.locked && (
                      <span className="text-[#C9A962] text-sm font-medium">Başla →</span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-gray-500 text-sm mt-12"
        >
          İlk dört ders ücretsiz. Devamı için premium üyelik gerekli.
        </motion.p>
      </main>
    </div>
  );
}
