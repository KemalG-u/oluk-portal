import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aktivasyon Dersi | OLUK - İçindeki Gücü Uyandır',
  description: 'Arındın, korudun. Şimdi aktive etme zamanı. Enerji merkezlerini uyandır, potansiyelini aç.',
}

const moduller = [
  { id: 1, baslik: 'Kök Aktivasyonu', aciklama: 'Hayatta kalma enerjisi, güvenlik hissi, topraklanma', ikon: '🔴', sure: '20 dk' },
  { id: 2, baslik: 'Sakral Aktivasyon', aciklama: 'Yaratıcılık, tutku, duygusal akış', ikon: '🟠', sure: '20 dk' },
  { id: 3, baslik: 'Solar Plexus', aciklama: 'Kişisel güç, özgüven, irade', ikon: '🟡', sure: '25 dk' },
  { id: 4, baslik: 'Kalp Aktivasyonu', aciklama: 'Sevgi, şefkat, bağlantı', ikon: '💚', sure: '25 dk' },
  { id: 5, baslik: 'Boğaz Aktivasyonu', aciklama: 'İfade, iletişim, hakikat', ikon: '🔵', sure: '20 dk' },
  { id: 6, baslik: 'Üçüncü Göz', aciklama: 'Sezgi, içgörü, bilgelik', ikon: '🟣', sure: '25 dk' },
  { id: 7, baslik: 'Taç Aktivasyonu', aciklama: 'Evrensel bağlantı, aşkınlık', ikon: '⚪', sure: '30 dk' },
]

export default function AktivasyonPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E6] text-[#0D4F4F]">
      <section className="py-20 px-6 bg-gradient-to-b from-[#0D4F4F] to-[#0D4F4F]/90 text-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/dersler" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8">← Derslere Dön</Link>
          <span className="inline-block px-3 py-1 mb-4 bg-[#C9A962]/20 text-[#C9A962] rounded-full text-sm">MODÜL 3</span>
          <h1 className="text-4xl md:text-6xl font-serif mb-4"><span className="text-[#C9A962]">Aktivasyon</span></h1>
          <p className="text-xl text-white/80 mb-2">İçindeki Gücü Uyandır</p>
          <p className="text-white/60 max-w-2xl">Arındın, korudun. Şimdi aktive etme zamanı. 7 enerji merkezini sırayla uyandır, potansiyelini tam olarak aç.</p>
        </div>
      </section>
      <section className="py-8 px-6 bg-[#C9A962]/10 border-b border-[#C9A962]/20">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <span className="text-2xl">⚠️</span>
          <p className="text-[#0D4F4F]/80">Ön Koşul: <Link href="/dersler/koruma" className="text-[#C9A962] hover:underline">Koruma Modülü</Link></p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif mb-8 text-center">7 Enerji <span className="text-[#C9A962]">Merkezi</span></h2>
          <div className="grid gap-4">
            {moduller.map((m, i) => (
              <div key={m.id} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-[#C9A962]/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0D4F4F]/5 flex items-center justify-center text-2xl">{m.ikon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-[#0D4F4F]/40">Çakra {i + 1}</span>
                      <span className="text-sm text-[#0D4F4F]/40">{m.sure}</span>
                    </div>
                    <h3 className="text-lg font-medium mb-1 group-hover:text-[#C9A962] transition-colors">{m.baslik}</h3>
                    <p className="text-[#0D4F4F]/70 text-sm">{m.aciklama}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-[#0D4F4F]/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-serif mb-4">Aktivasyona Hazır mısın?</h2>
          <p className="text-[#0D4F4F]/70 mb-8">Önce Arınma ve Koruma modüllerini tamamla.</p>
          <Link href="/dersler/koruma" className="inline-block px-8 py-3 bg-[#C9A962] text-white rounded-full hover:bg-[#0D4F4F] transition-colors">Korumaya Git</Link>
        </div>
      </section>
    </main>
  )
}
