import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Spiral Beyaz Alev - Derin Arınma | OLUK Ders 4',
  description: 'Ateş yakmaz, arındırır. Spiral yükselir, sen yücelirsin. 40 dakikalık ileri seviye derin arınma protokolü.',
  openGraph: {
    title: 'Spiral Beyaz Alev | OLUK Ders 4',
    description: 'Ateş yakmaz, arındırır. Spiral yükselir, sen yücelirsin.',
    type: 'article',
  },
}

const asamalar = [
  { no: 1, yer: 'Alt karın' },
  { no: 2, yer: 'Göbek' },
  { no: 3, yer: 'Solar plexus' },
  { no: 4, yer: 'Kalp' },
  { no: 5, yer: 'Boğaz' },
  { no: 6, yer: 'Alın' },
  { no: 7, yer: 'Tepe' },
]

export default function SpiralBeyazAlevPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a0a0a] via-[#2d1810] to-[#1a0a0a]">
      {/* HEADER */}
      <header className="pt-20 pb-12 px-6 text-center border-b border-orange-500/30 relative">
        <Link 
          href="/dersler" 
          className="inline-block mb-8 text-orange-400 hover:text-orange-300 transition-colors text-sm"
        >
          ← Dersler
        </Link>
        
        <div className="text-6xl mb-6 animate-pulse">🔥</div>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 bg-clip-text text-transparent mb-4">
          SPİRAL BEYAZ ALEV
        </h1>
        <p className="text-[#F5F0E6]/70 text-lg">
          Ders 4 | Derin Arınma Protokolü
        </p>
        <div className="mt-4 text-[#F5F0E6]/50 text-sm">
          ⏱️ 40 dakika | 📊 İleri Seviye | 🔥 Premium
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* UYARI */}
        <div className="mb-12 bg-red-900/20 border border-red-500/50 rounded-xl p-6">
          <h4 className="text-red-300 text-lg font-semibold mb-4">⚠️ ÖNEMLİ UYARILAR</h4>
          <ul className="space-y-2 text-[#F5F0E6]/80">
            <li className="flex items-start gap-2">
              <span className="text-xl">⚠️</span>
              <span>Bu seans ileri seviyedir. Ders 1-3&apos;ü tamamlamış olmalısınız.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">⚠️</span>
              <span>Hamilelik döneminde uygulamayın.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">⚠️</span>
              <span>Ciddi kalp rahatsızlığı varsa doktorunuza danışın.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">⚠️</span>
              <span>Seans sırasında baş dönmesi olursa yavaşlayın.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">⚠️</span>
              <span>İlk uygulamada yarım dozla başlayın (20 dk).</span>
            </li>
          </ul>
        </div>

        {/* GİRİŞ */}
        <section className="mb-12 pb-12 border-b border-orange-500/20">
          <h2 className="font-serif text-3xl text-orange-500 mb-6">Spiral Beyaz Alev Nedir?</h2>
          <div className="space-y-4 text-[#F5F0E6]/90 leading-relaxed">
            <p>
              Ateş yakar mı?<br />
              Hayır. <span className="text-orange-400 font-medium">Ateş arındırır.</span>
            </p>
            <p>
              Spiral ne yapar?<br />
              Düz gitmez. <span className="text-orange-400 font-medium">Dönerek yükselir.</span>
            </p>
            <p>
              Beyaz alev ne demek?<br />
              En sıcak alev. <span className="text-orange-400 font-medium">En saf enerji.</span>
            </p>
            <p>
              Üçü birleşince:<br />
              <span className="text-orange-400 font-medium">Dönerek yükselen, arındıran, saf enerji.</span>
            </p>
          </div>
          <div className="text-center text-6xl my-8 animate-spin" style={{ animationDuration: '10s' }}>
            🌀
          </div>
        </section>

        {/* FAZ 1: UYUMLAMA */}
        <section className="mb-12 pb-12 border-b border-orange-500/20">
          <h2 className="font-serif text-3xl text-orange-500 mb-6">Faz 1: Uyumlama (8 dk)</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-orange-300 text-xl mb-3">Ortam Hazırlığı</h3>
              <p className="text-[#F5F0E6]/90 leading-relaxed">
                Loş ışık. Mum varsa yak.<br />
                Sessizlik. Ya da çok hafif ambient.<br />
                <span className="text-orange-400 font-medium">Sırt dik otur. Eller dizlerde.</span>
              </p>
            </div>

            <div className="bg-orange-500/10 border-l-4 border-orange-500 p-6 italic">
              <em>&quot;Artık taşımak istemediğim ne varsa, bu aleve teslim ediyorum. Spiral yükselirken, ben de yüceliyorum.&quot;</em>
            </div>
          </div>
        </section>

        {/* FAZ 2: ALEV AKTİVASYONU */}
        <section className="mb-12 pb-12 border-b border-orange-500/20">
          <h2 className="font-serif text-3xl text-orange-500 mb-6">Faz 2: Alev Aktivasyonu (15 dk)</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-orange-300 text-xl mb-3">Adım 1: Kıvılcım</h3>
              <p className="text-[#F5F0E6]/90 leading-relaxed">
                Göbek deliğinin 3 parmak altı.<br />
                Orada küçük bir ışık noktası.<br />
                Beyaz. Parlak. Minik.<br /><br />
                <span className="text-orange-400 font-medium">Gör onu. Hisset onu.</span>
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-orange-300 text-xl mb-3">Adım 2: Alev</h3>
              <p className="text-[#F5F0E6]/90 leading-relaxed">
                Kıvılcım büyüyor.<br />
                Bir mum alevi kadar.<br />
                Sıcak ama yakmıyor.<br />
                <span className="text-orange-400 font-medium">Arındırıyor.</span>
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-orange-300 text-xl mb-3">Adım 3: Spiral Başlangıcı</h3>
              <p className="text-[#F5F0E6]/90 leading-relaxed">
                Alev dönmeye başlıyor.<br />
                Saat yönünde. Yavaş.<br />
                Her dönüşte biraz yükseliyor.<br /><br />
                Göbekten... göğüse...<br />
                <span className="text-orange-400 font-medium">Spiral çiziyor.</span>
              </p>
            </div>

            {/* AŞAMALAR */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {asamalar.map((asama) => (
                <div key={asama.no} className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-orange-500 text-[#1a0a0a] rounded-full flex items-center justify-center font-bold mx-auto mb-2 text-sm">
                    {asama.no}
                  </div>
                  <span className="text-[#F5F0E6]/80 text-sm">{asama.yer}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAZ 3: ARINMA */}
        <section className="mb-12 pb-12 border-b border-orange-500/20">
          <h2 className="font-serif text-3xl text-orange-500 mb-6">Faz 3: Arınma (12 dk)</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-orange-300 text-xl mb-3">Ne Yanıyor?</h3>
              <p className="text-[#F5F0E6]/90 leading-relaxed">
                Şimdi sor kendine:<br />
                &quot;Ne taşıyorum artık?&quot;<br /><br />
                
                Bir kızgınlık mı?<br />
                Bir korku mu?<br />
                Bir pişmanlık mı?<br />
                Bir alışkanlık mı?<br /><br />
                
                <span className="text-orange-400 font-medium">Adını koy. Aleve ver.</span>
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-500/15 to-red-600/15 border-l-4 border-orange-500 p-6 italic">
              <em>&quot;Alev alıyor. Spiral yükseliyor. Duman çıkıyor. Duman dağılıyor. Geriye ne kalıyor? Sadece sen. Arınmış. Hafif.&quot;</em>
            </div>

            <div>
              <h3 className="text-orange-300 text-xl mb-3">Boşluk</h3>
              <p className="text-[#F5F0E6]/90 leading-relaxed">
                Artık alev sakinleşiyor.<br />
                Spiral yavaşlıyor.<br />
                Ama ışık duruyor.<br /><br />
                
                Yanan yerin yerinde şimdi:<br />
                <span className="text-orange-400 font-medium">Boşluk. Temiz alan. Yeni potansiyel.</span>
              </p>
            </div>
          </div>
        </section>

        {/* FAZ 4: ENTEGRASYON */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl text-orange-500 mb-6">Faz 4: Entegrasyon (5 dk)</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-orange-300 text-xl mb-3">Alevi Sakla</h3>
              <p className="text-[#F5F0E6]/90 leading-relaxed">
                Spiral durdu.<br />
                Alev küçülüyor.<br />
                Ama sönmüyor.<br /><br />
                
                Göbek altına geri dönüyor.<br />
                Orada bekliyor.<br />
                <span className="text-orange-400 font-medium">Her zaman hazır. Her zaman seninle.</span>
              </p>
            </div>
          </div>
        </section>

        {/* KAPANIŞ */}
        <section className="text-center py-12">
          <p className="font-serif text-2xl md:text-3xl bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 bg-clip-text text-transparent italic mb-4">
            &quot;Ateş yakmaz. Ateş arındırır. Sen küllerinden doğan ankaydın hep.&quot;
          </p>
          <p className="text-[#F5F0E6]/40 text-sm">— OLUK</p>
        </section>
      </div>
    </main>
  )
}
