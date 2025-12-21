import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '8 Kalkan - Enerji Koruma Sistemi | OLUK Ders 3',
  description: 'Sekiz katmanlı enerji koruma sistemi. Dışarının gürültüsü içeriye sızmaz. 30 dakikalık orta seviye meditasyon.',
  openGraph: {
    title: '8 Kalkan | OLUK Ders 3',
    description: 'Sekiz katmanlı koruma. Dışarının gürültüsü içeriye sızmaz.',
    type: 'article',
  },
}

const kalkanlar = [
  { id: 1, ad: 'Tellurik', renk: 'Kahverengi', emoji: '🟤', anlam: 'Toprak bağlantısı. Kök.', telkin: 'Köklerim derin. Sarsılmam.' },
  { id: 2, ad: 'Doradic', renk: 'Turuncu', emoji: '🟠', anlam: 'Yaratıcı enerji. Akış.', telkin: 'Akışım kesintisiz. Yaratırım.' },
  { id: 3, ad: 'Teuric', renk: 'Sarı', emoji: '🟡', anlam: 'İrade gücü. Merkez.', telkin: 'İradem güçlü. Yönüm belli.' },
  { id: 4, ad: 'Maharic', renk: 'Yeşil', emoji: '💚', anlam: 'Kalp alanı. Sevgi.', telkin: 'Kalbim açık. Ama korumalı.' },
  { id: 5, ad: 'Rishic', renk: 'Mavi', emoji: '🔵', anlam: 'İfade. Hakikat.', telkin: 'Sözüm doğru. Sesim net.' },
  { id: 6, ad: 'Triadic', renk: 'Mor', emoji: '🟣', anlam: 'Sezgi. Görüş.', telkin: 'Görürüm. Bilirim. Anlarım.' },
  { id: 7, ad: 'Polaric', renk: 'Gümüş', emoji: '⚪', anlam: 'Bağlantı. Birlik.', telkin: 'Bağlıyım. Ama bağımlı değil.' },
  { id: 8, ad: 'Eckatic', renk: 'Altın', emoji: '🥇', anlam: 'Kaynak. Tanrısal.', telkin: 'Korunuyorum. Kaynak benimle.' },
]

export default function SekizKalkanPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-indigo-900 to-indigo-950">
      {/* HEADER */}
      <header className="pt-20 pb-12 px-6 text-center border-b border-[#C9A962]/30">
        <Link 
          href="/dersler" 
          className="inline-block mb-8 text-[#C9A962] hover:text-[#d4b978] transition-colors text-sm"
        >
          ← Dersler
        </Link>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#C9A962] mb-4">
          8 KALKAN
        </h1>
        <p className="text-[#F5F0E6]/70 text-lg">
          Ders 3 | Enerji Koruma Sistemi
        </p>
        <div className="mt-4 text-[#F5F0E6]/50 text-sm">
          ⏱️ 30 dakika | 📊 Orta Seviye
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* KALKAN GRİD */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {kalkanlar.map((kalkan) => (
              <div
                key={kalkan.id}
                className="bg-white/5 border border-[#C9A962]/20 rounded-xl p-4 text-center hover:border-[#C9A962] hover:shadow-lg hover:shadow-[#C9A962]/10 transition-all"
              >
                <div className="w-10 h-10 bg-[#C9A962] text-indigo-950 rounded-full flex items-center justify-center font-bold mx-auto mb-3 text-sm">
                  {kalkan.id}
                </div>
                <div className="text-2xl mb-2">{kalkan.emoji}</div>
                <h3 className="text-[#C9A962] font-semibold text-sm mb-1">{kalkan.ad}</h3>
                <p className="text-[#F5F0E6]/60 text-xs">{kalkan.renk}</p>
                <p className="text-[#F5F0E6]/80 text-xs mt-2">{kalkan.anlam}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAZ 1: HAZIRLIK */}
        <section className="mb-12 pb-12 border-b border-[#C9A962]/20">
          <h2 className="font-serif text-3xl text-[#C9A962] mb-6">Faz 1: Hazırlık (5 dk)</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-indigo-300 text-xl mb-3">Ortam</h3>
              <p className="text-[#F5F0E6]/90 leading-relaxed">
                Sessiz bir köşe.<br />
                Otur veya uzan. Fark etmez.<br />
                <span className="text-[#C9A962] font-medium">Önemli olan: Rahatsın ve güvendesin.</span>
              </p>
            </div>

            <div className="bg-[#C9A962]/10 border-l-4 border-[#C9A962] p-6 italic">
              <em>&quot;Sekiz katman. Sekiz kalkan. Her biri bir koruma. Şimdi inşa başlıyor.&quot;</em>
            </div>

            <div>
              <h3 className="text-indigo-300 text-xl mb-3">Nefes</h3>
              <p className="text-[#F5F0E6]/90 leading-relaxed">
                4 saniye içeri...<br />
                4 saniye tut...<br />
                4 saniye dışarı...<br />
                4 saniye bekle...<br /><br />
                <span className="text-[#C9A962] font-medium">Kare nefes. Üç döngü.</span>
              </p>
            </div>
          </div>
        </section>

        {/* FAZ 2: KALKAN İNŞASI */}
        <section className="mb-12 pb-12 border-b border-[#C9A962]/20">
          <h2 className="font-serif text-3xl text-[#C9A962] mb-6">Faz 2: Kalkan İnşası (18 dk)</h2>
          
          <div className="space-y-8">
            {kalkanlar.map((kalkan) => (
              <div key={kalkan.id} className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl text-indigo-300 mb-3 flex items-center gap-3">
                  <span className="text-2xl">{kalkan.emoji}</span>
                  {kalkan.id}. {kalkan.ad} Kalkan ({kalkan.renk})
                </h3>
                <p className="text-[#F5F0E6]/80 leading-relaxed mb-4">
                  {kalkan.anlam}
                </p>
                <div className="bg-indigo-950/50 rounded-lg p-4 border-l-4 border-[#C9A962]">
                  <p className="text-[#C9A962] font-medium italic">
                    &quot;{kalkan.telkin}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAZ 3: MÜHÜRLEME */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl text-[#C9A962] mb-6">Faz 3: Mühürleme (7 dk)</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-indigo-300 text-xl mb-3">Bütünleştirme</h3>
              <p className="text-[#F5F0E6]/90 leading-relaxed">
                Sekiz kalkanı bir arada gör.<br />
                Bir soğan gibi. Katman katman.<br />
                Her renk birbiriyle dans ediyor.<br /><br />
                <span className="text-[#C9A962] font-medium">Sen merkezdesin. Güvendesin.</span>
              </p>
            </div>

            <div>
              <h3 className="text-indigo-300 text-xl mb-3">Test</h3>
              <p className="text-[#F5F0E6]/90 leading-relaxed">
                Dışarıdan bir ses hayal et.<br />
                Bir eleştiri. Bir saldırı. Bir olumsuzluk.<br /><br />
                Kalkanların nasıl emiyor?<br />
                Nasıl dönüştürüyor?<br />
                İçeriye ne geçiyor?<br /><br />
                <span className="text-[#C9A962] font-medium">Hiçbir şey. Sadece huzur.</span>
              </p>
            </div>

            <div className="bg-[#C9A962]/10 border-l-4 border-[#C9A962] p-6 italic">
              <em>&quot;Sekiz kalkan. Tek koruma. Her gün yenilenir. Her nefes güçlenir.&quot;</em>
            </div>
          </div>
        </section>

        {/* KAPANIŞ */}
        <section className="text-center py-12">
          <p className="font-serif text-2xl md:text-3xl text-[#C9A962] italic mb-4">
            &quot;Dışarının gürültüsü içeriye sızmaz. Sen bir kale. Sekiz sur.&quot;
          </p>
          <p className="text-[#F5F0E6]/40 text-sm">— OLUK</p>
        </section>
      </div>
    </main>
  )
}
