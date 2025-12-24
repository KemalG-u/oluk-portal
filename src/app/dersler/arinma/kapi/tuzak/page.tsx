import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Tuzak | OLUK',
  description: 'Mükemmel olana kadar bekle yalanı. Ya hep ya hiç düşüncesinin panzehiri.',
};

export default function TuzakPage() {
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
          Tuzak
        </h1>

        <p className="text-xl text-gray-600 italic mb-6">Mükemmel olana kadar bekle yalanı.</p>

        <div className="flex items-center gap-4 text-gray-500 mb-8">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>14 dk</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>Okuma</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <article className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6">Mükemmeliyetçinin İç Sesi</h2>
            
            <p className="mb-4">Tanıyor musun bu sesi?</p>
            
            <p className="mb-4 italic text-gray-600">Daha hazır değilim.</p>
            <p className="mb-4 italic text-gray-600">Önce şunu halledeyim.</p>
            <p className="mb-4 italic text-gray-600">Mükemmel ortam oluşunca başlayacağım.</p>
            <p className="mb-4 italic text-gray-600">Ya tam yapacağım ya hiç.</p>
            
            <p className="mb-8">Bu ses seni <strong>oyalıyor</strong>. Ve adı var: <strong>Mükemmeliyetçilik tuzağı.</strong></p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Kuranın Cevabı: Kolaylık İlkesi</h2>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Allah sizin için kolaylık diler, zorluk istemez.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Bakara, 185)</footer>
            </blockquote>
            
            <p className="mb-4">Allah, kullarına karşı sonsuz merhamet sahibi. Hep yapılabilir olanı istiyor. Zorluk değil, kolaylık esas.</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Kendini kınayan nefse yemin ederim.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Kıyame, 2)</footer>
            </blockquote>
            
            <p className="mb-4">Dikkat et: Allah, kendini kınayan nefse yemin ediyor. Bu nefis <strong>övülüyor</strong>.</p>
            
            <p className="mb-4">Nefs-i levvame. Kusur işleyip pişman olan. Düşüp kalkan. Bu, hareketsiz kalmaktan iyidir.</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Nefsini arındıran kurtuluşa ermiştir. Onu günahlarla kirleten ise ziyana uğramıştır.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Şems, 9-10)</footer>
            </blockquote>
            
            <p className="mb-8"><strong>Arındıran</strong> = Tedrici bir süreç. Bir anda mükemmellik değil. <strong>Kirleten</strong> = Hiç çalışmamak, hareket etmemek. Kurtuluş bir hal değil, bir <strong>yolculuk</strong>.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Peygamberin Yolu: Az Ama Devamlı</h2>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Kolaylaştırın, zorlaştırmayın. Müjdeleyin, nefret ettirmeyin.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Buhari, İlim, 11; Müslim, Cihad, 6)</footer>
            </blockquote>
            
            <p className="mb-4">Hz. Peygamberin temel eğitim prensibi. Mükemmel ol değil, <strong>kolaylaştır</strong>.</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Allaha en sevimli amel, az da olsa devamlı olanıdır.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Buhari, Rikak, 18; Müslim, Salat, 282)</footer>
            </blockquote>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">Az ama devamlı {'>'}  Çok ama kesik</p>
            </div>
            
            <p className="mb-4">Mükemmeliyetçi der: Ya tam yapacağım ya hiç.</p>
            
            <p className="mb-4">Peygamberi yol der: <strong>Az ama HER GÜN.</strong></p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Günahından dönen tövbe eden, hiç günah işlememiş gibidir.
              <footer className="text-sm mt-2 not-italic text-gray-600">(İbn Mace, Zühd, 30)</footer>
            </blockquote>
            
            <p className="mb-4">Geçmiş hataların silinebilirliği. Artık çok geç düşüncesinin reddi. Her an <strong>yeni başlangıç</strong> mümkün.</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Orta yolu tutun, aşırılıktan sakının.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Buhari, Rikak, 18)</footer>
            </blockquote>
            
            <p className="mb-8">Mükemmeliyetçilik = aşırılık. Orta yol = denge. Ya hep ya hiç değil, <strong>ne kadarsa o kadar</strong>.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Gazalinin Uyarısı: Şeytanın Hilesi</h2>
            
            <p className="mb-4">İmam Gazali, İhyau Ulumid-Dinde şeytanın bir hilesinden bahseder:</p>
            
            <blockquote className="border-l-4 border-red-400 pl-6 py-4 my-6 bg-red-50 rounded-r-lg italic">
              Şeytanın hilelerinden biri: Riya ile yapacağına hiç yapma! demesidir.
            </blockquote>
            
            <p className="mb-4">Şeytan: Mükemmel değilse yapma!</p>
            
            <p className="mb-4">Hakikat: <strong>Eksik de olsa YAP!</strong></p>
            
            <p className="mb-4">Gazali devam eder:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Ahlaklar, riyazetle değişmeyi kabul eder. Hastalıkların tedavisi tedricidir. Bedenin ilacı zamanla etki eder. Nefsin ıslahı da adım adımdır.
            </blockquote>
            
            <p className="mb-8">Tedrici. Adım adım. Bir anda değil.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Nefis Mertebeleri: Adım Adım Yükseliş</h2>
            
            <p className="mb-4">Tasavvufta nefsin yedi mertebesi:</p>
            
            <div className="space-y-2 mb-6">
              <div className="bg-gray-100 rounded-lg p-3 text-sm">1. Nefs-i Emmare - Kötülüğü emreden</div>
              <div className="bg-gray-200 rounded-lg p-3 text-sm">2. Nefs-i Levvame - Kendini kınayan</div>
              <div className="bg-gray-300 rounded-lg p-3 text-sm">3. Nefs-i Mülhime - İlham alan</div>
              <div className="bg-[#0D4F4F]/20 rounded-lg p-3 text-sm">4. Nefs-i Mutmainne - Huzur bulan</div>
              <div className="bg-[#0D4F4F]/30 rounded-lg p-3 text-sm">5. Nefs-i Raziye - Razı olan</div>
              <div className="bg-[#0D4F4F]/40 rounded-lg p-3 text-sm">6. Nefs-i Merziyye - Razı olunan</div>
              <div className="bg-[#0D4F4F]/50 rounded-lg p-3 text-sm text-white">7. Nefs-i Safiye - Arınmış</div>
            </div>
            
            <p className="mb-4"><strong>Kritik nokta:</strong> Emmareden Mutmainneye ATLAMA yok. Her mertebe bir basamak. Bir perdenin kalkması = bir adım ilerleme.</p>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <p className="text-red-700 font-medium m-0">Bir anda veli olacağım = TUZAK</p>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Bilimin Keşfi</h2>
            
            <p className="mb-4">Şimdi yedi yüz yıl sonraya gel.</p>
            
            <h3 className="text-xl font-bold text-[#0D4F4F] mb-4 mt-8">Ya Hep Ya Hiç Düşüncesi</h3>
            
            <p className="mb-4">Aaron Beck, 1960larda bu düşünce kalıbını tanımladı: <strong>Bilişsel çarpıtma</strong>.</p>
            
            <p className="mb-4">Örnekler:</p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Ya mükemmel yapacağım ya hiç başlamayacağım</li>
              <li>Bir gün aksattım, artık her şey bitti</li>
              <li>B aldım, demek ki başarısızım</li>
              <li>Bir kurabiye yedim, diyet bozuldu, istediğimi yerim artık</li>
            </ul>
            
            <h3 className="text-xl font-bold text-[#0D4F4F] mb-4 mt-8">Mükemmeliyetçilik Artıyor</h3>
            
            <p className="mb-4">2019da Thomas Curran ve Andrew Hill, 164 çalışmayı analiz etti. 41.641 üniversite öğrencisi. 27 yıllık veri.</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">Son 27 yılda mükemmeliyetçilik %33 arttı.</p>
            </div>
            
            <p className="mb-4">Sonuç?</p>
            
            <blockquote className="border-l-4 border-red-400 pl-6 py-4 my-6 bg-red-50 rounded-r-lg italic">
              Kaygı, depresyon ve intihar düşünceleri, yüksek mükemmeliyetçilik ile ilişkili.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Curran & Hill, 2019)</footer>
            </blockquote>
            
            <h3 className="text-xl font-bold text-[#0D4F4F] mb-4 mt-8">Panzehir: Öz-Şefkat</h3>
            
            <p className="mb-4">Kristin Neff, öz-şefkat teorisini geliştirdi. Başarısızlık anında kendine karşı şefkatli olmak.</p>
            
            <p className="mb-4">Kritik bulgu:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Öz-şefkatli insanlar da yüksek hedefler koyar. Ama başarısızlıkta kendilerini yok etmiyorlar. Hedef yüksek, ama düşse de kalkar.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Neff, 2023)</footer>
            </blockquote>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Ortak Hakikat</h2>
            
            <div className="space-y-3 mb-8">
              <div className="bg-[#0D4F4F]/10 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">Kuran</p>
                <p className="text-sm m-0">Allah kolaylık diler, zorluk istemez.</p>
              </div>
              <div className="bg-[#C9A962]/20 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">Peygamber</p>
                <p className="text-sm m-0">Az da olsa devamlı olan en sevimlidir.</p>
              </div>
              <div className="bg-[#0D4F4F]/10 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">Gazali</p>
                <p className="text-sm m-0">Eksik de olsa yap, hiç yapmamaktan iyidir.</p>
              </div>
              <div className="bg-[#C9A962]/20 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">Nefis Mertebeleri</p>
                <p className="text-sm m-0">Bir anda değil, adım adım yükseliş.</p>
              </div>
              <div className="bg-[#0D4F4F]/10 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">Beck (Bilişsel Terapi)</p>
                <p className="text-sm m-0">Ya hep ya hiç düşüncesi = bilişsel çarpıtma.</p>
              </div>
              <div className="bg-[#C9A962]/20 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">Neff</p>
                <p className="text-sm m-0">Öz-şefkat, mükemmeliyetçiliğin panzehiri.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Mükemmeliyetçinin Sesi vs. Hakikat</h2>
            
            <div className="space-y-3 mb-8">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">Ya tam yapacağım ya hiç</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">Az da olsa yap</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">Bir hata yaptım, her şey bitti</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">Tövbe kapısı her an açık</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">Mükemmel değilse değersiz</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">İlerleme mükemmellikten değerli</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">Artık çok geç</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">Günahtan dönen hiç günah işlememiş gibi</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Pratik: Ne Yapmalı?</h2>
            
            <div className="space-y-3 mb-8">
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <strong className="text-[#0D4F4F]">1. Ya hep ya hiçi tanı.</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">Bu ses çaldığında DUR. Bu şeytanın sesi.</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <strong className="text-[#0D4F4F]">2. Küçük başla.</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">5 dakika &gt; 0 dakika. Her zaman.</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <strong className="text-[#0D4F4F]">3. Devamlılık &gt; Yoğunluk.</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">Her gün bir şey &gt; Haftada bir yoğun.</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <strong className="text-[#0D4F4F]">4. Düşersen kalk.</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">Bir aksatma = İPTAL değil.</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <strong className="text-[#0D4F4F]">5. Kendine şefkat.</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">Herkes hata yapar, ben de insan.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Son Söz</h2>
            
            <p className="mb-4">Mükemmellik, Allaha mahsus.</p>
            
            <p className="mb-4">Senin işin = <strong>İLERLEMEK</strong>.</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">Her gün bir adım &gt; Bir gün bin adım</p>
            </div>
            
            <p className="text-xl font-semibold text-[#0D4F4F]">Başla. Şimdi. Olduğun yerden.</p>
            
          </article>
        </div>

        <button className="w-full bg-[#0D4F4F] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#0D4F4F]/90 transition-colors mb-6">
          <CheckCircle className="w-5 h-5" />
          Dersi Tamamladım
        </button>

        <div className="bg-[#0D4F4F]/5 rounded-xl border border-[#0D4F4F]/20 p-6 text-center">
          <p className="text-[#0D4F4F] font-semibold mb-2">🎉 KAPI Bölümünü Tamamladın!</p>
          <p className="text-gray-600 text-sm">Artık Arınma yolculuğuna hazırsın. Bir sonraki aşama: Beden Temizliği</p>
        </div>

      </div>
    </div>
  );
}
