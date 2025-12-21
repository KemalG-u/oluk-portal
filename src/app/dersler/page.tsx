// =====================================================
// OLUK DERSLER SAYFASI - /dersler/page.tsx
// Konum: src/app/dersler/page.tsx
// =====================================================

import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dersler | OLUK - On Konaklık Yolculuk',
  description: 'Malumat yığını değil, halden hale geçiş. Bilmek için değil, olmak için. On basamaklık dönüşüm yolculuğu.',
  openGraph: {
    title: 'Dersler | OLUK',
    description: 'On konaklık bir yolculuk. Temelden çatıya, taş taş üstüne.',
    type: 'website',
    locale: 'tr_TR',
  },
}

// DERS VERİLERİ
const dersler = [
  {
    id: 1,
    slug: 'ders-1',
    baslik: 'Kapı',
    altBaslik: 'Temel Arınma',
    aciklama: 'Dur. Ve hatırla. Yolculuk burada başlar. Nefesle tanış, bedenle barış.',
    sure: '45 dakika',
    seviye: 'Başlangıç',
    icon: '🚪',
    renk: 'from-teal-600 to-teal-800',
    kilit: false,
    tamamlandi: false,
  },
  {
    id: 2,
    slug: 'ders-2',
    baslik: 'Yasin Kapısı',
    altBaslik: '40 Günlük Arınma',
    aciklama: 'Kapı açılmaz. Kapı zaten açık. Sen kapalıydın. Eşiği geç.',
    sure: '25-35 dakika',
    seviye: 'Orta',
    icon: '🌙',
    renk: 'from-amber-600 to-amber-800',
    kilit: false,
    tamamlandi: false,
  },
  {
    id: 3,
    slug: 'ders-3',
    baslik: '8 Kalkan',
    altBaslik: 'Enerji Koruma Sistemi',
    aciklama: 'Sekiz katmanlı koruma. Dışarının gürültüsü içeriye sızmaz.',
    sure: '30 dakika',
    seviye: 'Orta',
    icon: '🛡️',
    renk: 'from-indigo-600 to-indigo-800',
    kilit: false,
    tamamlandi: false,
  },
  {
    id: 4,
    slug: 'ders-4',
    baslik: 'Spiral Beyaz Alev',
    altBaslik: 'Derin Arınma',
    aciklama: 'Ateş yakmaz, arındırır. Spiral yükselir, sen yücelirsin.',
    sure: '40 dakika',
    seviye: 'İleri',
    icon: '🔥',
    renk: 'from-orange-500 to-red-700',
    kilit: true,
    tamamlandi: false,
  },
  {
    id: 5,
    slug: 'ders-5',
    baslik: 'Ayna',
    altBaslik: 'Kendini Tanıma',
    aciklama: 'Aynaya bak. Gördüğün sen değil. Gerçek sen, aynanın ardında.',
    sure: '35 dakika',
    seviye: 'İleri',
    icon: '🪞',
    renk: 'from-purple-600 to-purple-800',
    kilit: true,
    tamamlandi: false,
  },
  {
    id: 6,
    slug: 'ders-6',
    baslik: 'Köprü',
    altBaslik: 'Bağlantılar',
    aciklama: 'Sen bir ada değilsin. Köprüler kur, bağlan, genişle.',
    sure: '30 dakika',
    seviye: 'İleri',
    icon: '🌉',
    renk: 'from-cyan-600 to-cyan-800',
    kilit: true,
    tamamlandi: false,
  },
  {
    id: 7,
    slug: 'ders-7',
    baslik: '4 Beden',
    altBaslik: 'Bütünleşme',
    aciklama: 'Fizik. Eterik. Astral. Mental. Dört beden, tek ruh.',
    sure: '45 dakika',
    seviye: 'İleri',
    icon: '✨',
    renk: 'from-emerald-600 to-emerald-800',
    kilit: true,
    tamamlandi: false,
  },
  {
    id: 8,
    slug: 'ders-8',
    baslik: 'Işık',
    altBaslik: 'Aydınlanma',
    aciklama: 'Karanlık yok. Sadece ışığın yokluğu var. Şimdi ışık ol.',
    sure: '50 dakika',
    seviye: 'Usta',
    icon: '💫',
    renk: 'from-yellow-500 to-amber-600',
    kilit: true,
    tamamlandi: false,
  },
  {
    id: 9,
    slug: 'ders-9',
    baslik: 'Kollektif',
    altBaslik: 'Bilinçaltı Havuzu',
    aciklama: 'Sen bir dalga. Okyanus hep oradaydı. Şimdi hatırla.',
    sure: '45 dakika',
    seviye: 'Usta',
    icon: '🌊',
    renk: 'from-blue-600 to-blue-900',
    kilit: true,
    tamamlandi: false,
  },
  {
    id: 10,
    slug: 'ders-10',
    baslik: 'Yol',
    altBaslik: 'Zarafetin Akışı',
    aciklama: 'Varış yok. Yolculuk var. Her adım, varış. Her nefes, vuslat.',
    sure: '60 dakika',
    seviye: 'Usta',
    icon: '🛤️',
    renk: 'from-rose-600 to-rose-800',
    kilit: true,
    tamamlandi: false,
  },
]

// SEVİYE RENKLERİ
const seviyeRenk: Record<string, string> = {
  'Başlangıç': 'bg-green-500/20 text-green-300',
  'Orta': 'bg-amber-500/20 text-amber-300',
  'İleri': 'bg-purple-500/20 text-purple-300',
  'Usta': 'bg-rose-500/20 text-rose-300',
}

export default function DerslerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0D4F4F] via-[#0a3d3d] to-[#072b2b]">
      {/* HEADER */}
      <header className="pt-20 pb-12 px-6 text-center">
        <Link 
          href="/" 
          className="inline-block mb-8 text-[#C9A962] hover:text-[#d4b978] transition-colors"
        >
          ← Ana Sayfa
        </Link>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#C9A962] mb-4">
          On Konak
        </h1>
        <p className="text-[#F5F0E6]/70 text-lg md:text-xl max-w-2xl mx-auto">
          Malumat yığını değil, halden hale geçiş.<br />
          Bilmek için değil, <span className="text-[#C9A962]">olmak</span> için.
        </p>
      </header>

      {/* DERS GRID */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dersler.map((ders, index) => (
            <DersKarti key={ders.id} ders={ders} index={index} />
          ))}
        </div>
      </section>

      {/* ALTYAZI */}
      <footer className="text-center pb-16 px-6">
        <p className="text-[#F5F0E6]/40 text-sm">
          İlk iki ders ücretsiz. Devamı için <span className="text-[#C9A962]">premium</span> üyelik gerekli.
        </p>
      </footer>
    </main>
  )
}

// DERS KARTI KOMPONENTİ
function DersKarti({ ders, index }: { ders: typeof dersler[0], index: number }) {
  const gecikme = index * 100

  return (
    <div 
      className={`
        group relative overflow-hidden rounded-2xl
        bg-gradient-to-br ${ders.renk}
        transition-all duration-500 ease-out
        hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#C9A962]/20
        ${ders.kilit ? 'opacity-70' : ''}
      `}
      style={{ animationDelay: `${gecikme}ms` }}
    >
      {/* KİLİT OVERLAY */}
      {ders.kilit && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10 flex items-center justify-center">
          <div className="text-center">
            <span className="text-4xl">🔒</span>
            <p className="text-white/80 text-sm mt-2">Premium</p>
          </div>
        </div>
      )}

      {/* KART İÇERİĞİ */}
      <div className="p-6 h-full flex flex-col">
        {/* ÜST KISIM */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-5xl">{ders.icon}</span>
          <div className="text-right">
            <span className="text-white/60 text-sm">Ders {ders.id}</span>
            <div className={`text-xs px-2 py-1 rounded-full mt-1 ${seviyeRenk[ders.seviye]}`}>
              {ders.seviye}
            </div>
          </div>
        </div>

        {/* BAŞLIK */}
        <h2 className="font-serif text-2xl text-white mb-1">
          {ders.baslik}
        </h2>
        <p className="text-white/60 text-sm mb-3">
          {ders.altBaslik}
        </p>

        {/* AÇIKLAMA */}
        <p className="text-white/80 text-sm leading-relaxed mb-4 flex-grow">
          {ders.aciklama}
        </p>

        {/* ALT KISIM */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-white/50 text-sm">
            ⏱️ {ders.sure}
          </span>
          
          {!ders.kilit ? (
            <Link
              href={`/dersler/${ders.slug}`}
              className="
                px-4 py-2 rounded-lg
                bg-white/10 hover:bg-white/20
                text-white text-sm font-medium
                transition-all duration-300
                group-hover:bg-[#C9A962] group-hover:text-[#0D4F4F]
              "
            >
              Başla →
            </Link>
          ) : (
            <span className="text-white/40 text-sm">
              Kilitli
            </span>
          )}
        </div>
      </div>

      {/* TAMAMLANDI İŞARETİ */}
      {ders.tamamlandi && (
        <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white">✓</span>
        </div>
      )}
    </div>
  )
}
    id: 5,
    slug: 'ders-5',
    baslik: 'Yol',
    altBaslik: 'Süreklilik',
    durum: 'premium',
    sure: '65 dakika',
    renk: 'from-teal-dark to-midnight',
    ikon: Path,
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
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal/10 to-gold/10 flex items-center justify-center">
                        <ders.ikon size={32} weight="duotone" className="text-teal" />
                      </div>
                      
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
