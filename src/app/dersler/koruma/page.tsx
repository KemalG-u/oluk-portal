import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Koruma Dersi | OLUK - Enerjini Koru',
  description: 'Arındıktan sonra temiz kalmak için koruma teknikleri. Enerji kalkanları, sınır koyma, negatiflikten korunma.',
}

const moduller = [
  { id: 1, baslik: 'Enerji Kalkanı', aciklama: 'Auranı güçlendir, görünmez kalkan oluştur', ikon: '🛡️', sure: '15 dk' },
  { id: 2, baslik: 'Sınır Koyma', aciklama: 'Enerji vampirlerine karşı sağlıklı sınırlar', ikon: '🚧', sure: '20 dk' },
  { id: 3, baslik: 'Mekan Koruma', aciklama: 'Evini ve iş yerini koruma altına al', ikon: '🏠', sure: '25 dk' },
  { id: 4, baslik: 'Ayna Tekniği', aciklama: 'Negatif enerjiyi kaynağına geri gönder', ikon: '🪞', sure: '15 dk' },
  { id: 5, baslik: 'Topraklama', aciklama: 'Fazla enerjiyi toprağa ver, dengelen', ikon: '🌳', sure: '20 dk' },
  { id: 6, baslik: 'Gece Koruması', aciklama: 'Uyku öncesi koruma ritüeli', ikon: '🌙', sure: '10 dk' },
]

export default function KorumaPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E6] text-[#0D4F4F]">
      <section className="py-20 px-6 bg-gradient-to-b from-[#0D4F4F] to-[#0D4F4F]/90 text-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/dersler" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8">← Derslere Dön</Link>
          <span className="inline-block px-3 py-1 mb-4 bg-[#C9A962]/20 text-[#C9A962] rounded-full text-sm">MODÜL 2</span>
          <h1 className="text-4xl md:text-6xl font-serif mb-4"><span className="text-[#C9A962]">Koruma</span></h1>
          <p className="text-xl text-white/80 mb-2">Temizlediğini Koru, Kalkanlarını Kur</p>
          <p className="text-white/60 max-w-2xl">Arınma modülünde içini temizledin. Şimdi o temizliği koruma zamanı. Enerji kalkanları kurmayı ve negatif etkilerden korunmayı öğren.</p>
        </div>
      </section>

      <section className="py-8 px-6 bg-[#C9A962]/10 border-b border-[#C9A962]/20">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <span className="text-2xl">⚠️</span>
          <p className="text-[#0D4F4F]/80">Ön Koşul: <Link href="/dersler/arinma" className="text-[#C9A962] hover:underline">Arınma Modülü</Link></p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif mb-8 text-center">Koruma <span className="text-[#C9A962]">Bölümleri</span></h2>
          <div className="grid gap-4">
            {moduller.map((m, i) => (
              <div key={m.id} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-[#C9A962]/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0D4F4F]/5 flex items-center justify-center text-2xl">{m.ikon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-[#0D4F4F]/40">Bölüm {i + 1}</span>
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
          <h2 className="text-2xl font-serif mb-4">Korumaya Hazır mısın?</h2>
          <p className="text-[#0D4F4F]/70 mb-8">Önce Arınma modülünü tamamla, sonra korumaya geç.</p>
          <Link href="/dersler/arinma" className="inline-block px-8 py-3 bg-[#C9A962] text-white rounded-full hover:bg-[#0D4F4F] transition-colors">Arınma'ya Git</Link>
        </div>
      </section>
    </main>
  )
}
