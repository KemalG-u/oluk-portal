import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Düşersen Kalk | OLUK',
  description: 'Yol düz bir çizgi değil. Düşmek yolun sonu değil, yolun parçası. Spiral değişim modeli ve tövbe kapısı.',
};

export default function DusersenKalkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F0E6] to-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        
        <Link 
          href="/dersler/arinma/kapi"
          className="inline-flex items-center gap-2 text-[#0D4F4F] hover:text-[#0D4F4F]/70 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          KAPI Dersleri
        </Link>

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <span>ARINMA</span>
          <span>→</span>
          <span>KAPI</span>
          <span>→</span>
          <span className="text-[#0D4F4F] font-medium">DERS</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0D4F4F] mb-4">
          Düşersen Kalk
        </h1>

        <p className="text-xl text-gray-600 italic mb-6">Yol düz bir çizgi değil.</p>

        <div className="flex items-center gap-4 text-gray-500 mb-8">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>15 dk</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>Okuma</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <article className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6">Açılış</h2>
            
            <p className="mb-4">Bir yolculuğa çıkmak istiyorsun.</p>
            
            <p className="mb-4">Arınmak istiyorsun. Değişmek istiyorsun. Daha iyi bir insan olmak istiyorsun.</p>
            
            <p className="mb-4">Ama içinde bir korku var:</p>
            
            <p className="mb-4 italic text-gray-600">Ya başlarsam da bırakırsam? Ya bir gün aksatırsam? Ya düşersem?</p>
            
            <p className="mb-4">Bu yazı, o korku hakkında.</p>
            
            <p className="mb-8">Ve sana şunu söyleyecek: <strong>Düşmek, yolun sonu değil.</strong></p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Nefsin Halleri</h2>
            
            <p className="mb-4">Rabbimiz, Kuran-ı Kerimde nefsin hallerinden bahseder.</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Şüphesiz ki nefis, kötülüğü şiddetle emredicidir.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Yusuf Suresi, 53)</footer>
            </blockquote>
            
            <p className="mb-4">Bu, <strong>nefs-i emmare</strong>. Henüz uyanmamış nefis. Kötülüğü emreden, sorgusuz itaat bekleyen.</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Kendini kınayan nefse yemin ederim.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Kıyame Suresi, 2)</footer>
            </blockquote>
            
            <p className="mb-4">Dikkat et: Allah, bu nefse yemin ediyor.</p>
            
            <p className="mb-4">Bu, <strong>nefs-i levvame</strong>. Kendini kınayan nefis. Hata yapıyor ama pişman oluyor. Düşüyor ama neden düştüm diye soruyor.</p>
            
            <p className="mb-4">Günahsız bir nefis değil bu. Günahına pişman olan bir nefis.</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Ey huzura ermiş nefis!
              <footer className="text-sm mt-2 not-italic text-gray-600">(Fecr Suresi, 27)</footer>
            </blockquote>
            
            <p className="mb-4">Bu, <strong>nefs-i mutmainne</strong>. Huzur bulmuş nefis.</p>
            
            <p className="mb-4">Peki emmareden mutmainneye nasıl geçilir?</p>
            
            <p className="mb-8"><strong>Levvameden geçerek.</strong> Düşerek ve kalkarak. Pişman olarak ve devam ederek.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Tövbe Kapısı</h2>
            
            <p className="mb-4">Ebu Hureyre (r.a.) rivayet ediyor, Resulullah (s.a.v.) Rabbinden naklen buyurdu:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Bir kul günah işledi ve Ya Rabbi, günahımı affet! dedi. Hak Teala buyurdu: Kulum bir günah işledi; arkadan bildi ki günahları affeden bir Rabbi vardır. Sonra kul dönüp tekrar günah işledi ve Ey Rabbim, günahımı affet! dedi. Allah yine buyurdu: Kulum bir günah işledi ve bildi ki, günahı affeden bir Rabbi vardır. Sonra kul tekrar günah işledi...
              <footer className="text-sm mt-2 not-italic text-gray-600">(Buhari; Müslim)</footer>
            </blockquote>
            
            <p className="mb-4">Ve bu döngü devam ediyor. Kul düşüyor, tövbe ediyor. Tekrar düşüyor, tekrar tövbe ediyor. Ve Allah her seferinde affediyor.</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Bütün Ademoğulları günahkardır. Günahkarların en hayırlıları ise tövbe edenlerdir.
              <footer className="text-sm mt-2 not-italic text-gray-600">(İbn Mace, Zühd, 30)</footer>
            </blockquote>
            
            <p className="mb-4">En hayırlısı hiç günah işlemeyen değil. En hayırlısı <strong>tövbe eden</strong>.</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Eğer siz günah işlemeseydiniz, Allah sizi helak eder ve yerinize, günah işleyip peşinden tövbe eden kullar yaratırdı.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Müslim, Tevbe, 9)</footer>
            </blockquote>
            
            <p className="mb-8">Bu, günah işle demek değil. Ama şunu demek: Düşmek insanın tabiatında var. Önemli olan düşmemek değil — <strong>kalkmak</strong>.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Alimlerin Sözleri</h2>
            
            <p className="mb-4"><strong>İmam Gazali</strong>, İhyau Ulumid-Dinde bir hadisi açıklıyor:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Kul bir günah işlediği zaman kalbine siyah bir leke çizilir. Bırakıp tövbe ederse kalbi temizlenir ve parlar.
              <footer className="text-sm mt-2 not-italic text-gray-600">(İbn Mace, Zühd, 29)</footer>
            </blockquote>
            
            <p className="mb-4">Gazali bu hadisi açıklarken kalbi aynaya benzetiyor. Günah onu karartıyor. Tövbe onu parlatıyor. Ve bu döngü ömür boyu sürüyor.</p>
            
            <p className="mb-4"><strong>İmam Nevevi</strong>, tövbenin tekrarı hakkında şöyle diyor:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Günahlar yüz kere, hatta bin ve daha çok kere tekrar edilse de kişi her seferinde tövbe etse, tövbesi makbuldür.
            </blockquote>
            
            <p className="mb-4">Bin kere düşsen, bin kere kalksan — hala kabul.</p>
            
            <p className="mb-4"><strong>Mevlana Celaleddin-i Rumi:</strong></p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Gel, gel, ne olursan ol, yine gel. Kafir, Mecusi, putperest de olsan gel. Bizim bu dergahımız umutsuzluk dergahı değildir. Yüz kere tövbeyi bozmuş olsan da yine gel.
            </blockquote>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Bilimin Keşfi</h2>
            
            <p className="mb-4">Şimdi yedi yüz yıl sonraya gel.</p>
            
            <p className="mb-4">1992 yılı. Amerika. Üç psikolog — James Prochaska, Carlo DiClemente ve John Norcross — yıllarca insanların nasıl değiştiğini araştırıyorlar.</p>
            
            <p className="mb-4">Bulgularını American Psychologist dergisinde yayınlıyorlar: <em>In Search of How People Change</em> (İnsanların Nasıl Değiştiğini Aramak).</p>
            
            <p className="mb-4">Ve şaşırtıcı bir şey keşfediyorlar:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Başlangıçta değişimi doğrusal bir ilerleme olarak kavramsallaştırdık... Ama gördük ki doğrusal ilerleme mümkün ama oldukça nadir bir olgudur.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Prochaska, DiClemente & Norcross, 1992)</footer>
            </blockquote>
            
            <p className="mb-4">Yani insanlar düz bir çizgide ilerlemiyor. Düşüyorlar, geri dönüyorlar, tekrar başlıyorlar.</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Düşüş (relapse), bağımlılıklarda istisna değil kuraldır.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Prochaska, DiClemente & Norcross, 1992)</footer>
            </blockquote>
            
            <h3 className="text-xl font-bold text-[#0D4F4F] mb-4 mt-8">Peki kaç kere düşülüyor?</h3>
            
            <p className="mb-4">Sigara bırakmak isteyenlerle ilgili araştırmalar:</p>
            
            <div className="space-y-3 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">1992 Araştırması:</strong> Başarılı bir şekilde bırakan kişiler ortalama 3-4 deneme yapmıştı.
              </div>
              <div className="bg-[#0D4F4F]/10 border border-[#0D4F4F] rounded-lg p-4">
                <strong className="text-[#0D4F4F]">2016 Kanada Araştırması:</strong> Birçok kişi için başarılı olmadan önce <strong>30 veya daha fazla deneme</strong> gerekebilir.
              </div>
            </div>
            
            <p className="mb-8">Otuz deneme. Bu, düşmenin ne kadar normal olduğunu gösteriyor.</p>

            <h3 className="text-xl font-bold text-[#0D4F4F] mb-4 mt-8">Spiral Merdiven Metaforu</h3>
            
            <p className="mb-4">2022de Carlo DiClemente, değişim sürecini anlatmak için bir metafor kullanıyor:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Başarılı değişim döngüsü, sonsuz bir daire yerine yukarıya doğru ilerleyen bir spiral merdiven gibi görünmelidir.
              <footer className="text-sm mt-2 not-italic text-gray-600">(DiClemente, 2022)</footer>
            </blockquote>
            
            <p className="mb-4">Ne demek bu?</p>
            
            <p className="mb-4"><strong>Düşen kişi, başladığı yere dönmüyor.</strong> Bir spiral merdivende düşsen bile, hala birkaç basamak yukarıdasın. Çünkü düşmeden önce bir şeyler öğrendin. Bir şeyler fark ettin.</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">Asla bir başarısızlık değil, her zaman bir ders.</p>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Ortak Hakikat</h2>
            
            <p className="mb-4">Şimdi iki dünyayı yan yana koy.</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#0D4F4F]/10 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">Yedi yüz yıl önce</p>
                <p className="text-sm m-0">Mevlana: Yüz kere tövbeyi bozmuş olsan da yine gel.</p>
              </div>
              <div className="bg-[#C9A962]/20 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">1992</p>
                <p className="text-sm m-0">Prochaska: Düşüş istisna değil, kural.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#0D4F4F]/10 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">Hadis-i Şerif</p>
                <p className="text-sm m-0">Günahkarların en hayırlısı tövbe edenlerdir.</p>
              </div>
              <div className="bg-[#C9A962]/20 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">Bilim</p>
                <p className="text-sm m-0">Düşen kişi başladığı yere dönmüyor.</p>
              </div>
            </div>
            
            <p className="mb-8">Aynı hakikat. Farklı diller. <strong>Düşmek yolun sonu değil. Yolun bir parçası.</strong></p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Senin İçin</h2>
            
            <p className="mb-4">Bu platformda bir yolculuğa çıkıyorsun.</p>
            
            <p className="mb-4">Ve sana şunu söylemem gerek: Düşebilirsin.</p>
            
            <p className="mb-4">Bir gün kaçırabilirsin. Belki bir hafta. Belki motivasyonun sönebilir. Belki ben yapamıyorum diyebilirsin.</p>
            
            <p className="mb-4">Bu olabilir. Çünkü insan böyle.</p>
            
            <p className="mb-4">Ama şunu bil:</p>
            
            <p className="mb-4"><strong>Düştüğün yer, başladığın yer değil.</strong> Sen bir şeyler öğrendin. Bir şeyler fark ettin. O farkındalık seninle kalıyor.</p>
            
            <p className="mb-4">Düştüğünde kendine sor:</p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Ne oldu da düştüm?</li>
              <li>Hangi an zayıfladım?</li>
              <li>Bir dahaki sefere ne yapabilirim?</li>
            </ul>
            
            <p className="mb-8">Sonra kalk. Ve devam et. Mevlananın dediği gibi: <strong>Yine gel.</strong></p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Son Söz</h2>
            
            <p className="mb-4">Hadis-i Kudsiyi hatırla:</p>
            
            <p className="mb-4">Kul günah işliyor, tövbe ediyor. Tekrar günah işliyor, tekrar tövbe ediyor.</p>
            
            <p className="mb-4">Ve Allah her seferinde diyor: <em>Kulum bildi ki günahları affeden bir Rabbi vardır.</em></p>
            
            <p className="mb-4">Sen de bil.</p>
            
            <p className="text-xl font-semibold text-[#0D4F4F]">Ve yine gel.</p>
            
          </article>
        </div>

        <button className="w-full bg-[#0D4F4F] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#0D4F4F]/90 transition-colors mb-6">
          <CheckCircle className="w-5 h-5" />
          Dersi Tamamladım
        </button>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500 mb-2">Sıradaki Ders</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#0D4F4F]">Sır</span>
            <Link 
              href="/dersler/arinma/kapi/sir"
              className="flex items-center gap-1 text-[#0D4F4F] hover:text-[#0D4F4F]/70 transition-colors"
            >
              Devam Et
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
