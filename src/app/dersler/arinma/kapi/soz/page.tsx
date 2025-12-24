import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Söz | OLUK',
  description: 'Niyet nedir? Yazılı taahhüdün gücü ve ruhun imzası. Arınma yolculuğuna kendine verdiğin söz.',
};

export default function SozPage() {
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
          Söz
        </h1>

        <p className="text-xl text-gray-600 italic mb-6">Kalpten geçen bir fısıltı mı, yoksa ruhu bağlayan bir zincir mi?</p>

        <div className="flex items-center gap-4 text-gray-500 mb-8">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>18 dk</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>Okuma</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <article className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6">Niyet Nedir?</h2>
            
            <p className="mb-4">Ameller niyetlere göredir.</p>
            
            <p className="mb-4">Bu cümle, bin dört yüz yıldır milyarlarca kalbin pusulası oldu.</p>
            
            <p className="mb-4">Ama dur bir an. Niyet nedir? Sadece kalpten geçen bir düşünce mi? Sabah uyanınca bugün şunu yapacağım demek mi? Yoksa daha derin, daha bağlayıcı bir şey mi?</p>
            
            <p className="mb-4">İmam-ı Rabbânî Hazretleri, Mektûbâtın 59. mektubunda bize bir formül veriyor:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Ebedî kurtuluş için insana üç şey mutlaka lazımdır: İlim, amel, ihlâs.
              <footer className="text-sm mt-2 not-italic text-gray-600">(İmam-ı Rabbânî, Mektûbât-ı Rabbânî, 59. Mektup)</footer>
            </blockquote>
            
            <p className="mb-4">Dikkat et: Sadece bilmek yetmiyor. Sadece yapmak da yetmiyor. <strong>İhlâs</strong> — yani o işi neden yaptığını bilmek, kalbinin o işe tam olarak yönelmesi — olmadan hiçbir şey tamam olmuyor.</p>
            
            <p className="mb-4">İmam Gazâlî, İhyâü Ulûmid-Dînin Niyet, İhlâs ve Sıdk bölümünde niyeti üç aşamada tanımlıyor:</p>
            
            <div className="space-y-3 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">İlim.</strong> Ne yapacağını bilmek.
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">Hal.</strong> Kalbin o şeye meyletmesi.
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">İrade.</strong> Bilgi ve meylin eyleme dönüşmesi.
              </div>
            </div>
            
            <p className="mb-8">Gazâlîye göre niyet, sadece zihinsel bir karar değil — <strong>kalbin bir noktaya toplanmasıdır.</strong></p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Sırların Sırrı: Yazmak</h2>
            
            <p className="mb-4">Hz. Ömer (r.a.) buyurmuş:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Hesaba çekilmeden önce kendinizi hesaba çekin.
            </blockquote>
            
            <p className="mb-4">Bu söz, yüzyıllar önce söylendi. Bugün ise bilim, aynı gerçeği farklı bir dille doğruluyor.</p>
            
            <h3 className="text-xl font-bold text-[#0D4F4F] mb-4 mt-8">Bir Üniversite, Bir Deney, Bir Keşif</h3>
            
            <p className="mb-4">2015 yılında, Californiadaki Dominican Üniversitesinden Dr. Gail Matthews, 267 kişiyle bir deney yaptı. Katılımcılar her kesimden insandı: girişimciler, öğretmenler, avukatlar, sanatçılar, bankacılar...</p>
            
            <p className="mb-4">Matthews onları beş gruba ayırdı ve sonuçlar çarpıcıydı:</p>
            
            <div className="space-y-3 mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span>Sadece hedeflerini düşündüler</span>
                  <span className="font-bold text-gray-500">4.28/10</span>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span>Hedeflerini yazdılar</span>
                  <span className="font-bold text-gray-600">6.08/10</span>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span>Yazdılar + eylem adımları belirlediler</span>
                  <span className="font-bold text-gray-700">6.44/10</span>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span>Yazdılar + birine söylediler</span>
                  <span className="font-bold text-gray-800">6.56/10</span>
                </div>
              </div>
              <div className="bg-[#0D4F4F]/10 border border-[#0D4F4F] rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Yazdılar + haftalık ilerleme raporu tuttular</span>
                  <span className="font-bold text-[#0D4F4F]">7.62/10</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">Hedeflerini yazanlar, yazmayanlardan %42 daha başarılı oldu.</p>
            </div>
            
            <p className="mb-8">Sadece yazmak. Başka bir şey değil. Sadece kalemi kâğıda değdirmek.</p>

            <h3 className="text-xl font-bold text-[#0D4F4F] mb-4 mt-8">Neden Yazmak Bu Kadar Güçlü?</h3>
            
            <p className="mb-4">Sosyal psikolojinin devlerinden Robert Cialdini, Influence kitabında bunu açıklıyor:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Yazılı taahhütler, sözlü taahhütlerden daha fazla çaba gerektirir. Bir taahhüde ne kadar çok çaba harcanırsa, bizi davranışa bağlama gücü o kadar artar.
            </blockquote>
            
            <p className="mb-4">Cialdiniye göre etkili bir taahhüdün dört özelliği var:</p>
            
            <div className="space-y-3 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">Aktif.</strong> Pasif değil, eylem içermeli — sen yazmalısın.
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">Çaba gerektiren.</strong> Kolay olmamalı — düşünüp formüle etmelisin.
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">Özgürce seçilmiş.</strong> Zorla değil — kendi iradeni kullanmalısın.
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">Kişisel.</strong> Genel değil — senin kelimelerin olmalı.
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Yapacağım Demek Neden Yetmiyor?</h2>
            
            <p className="mb-4">New York Üniversitesinden Peter Gollwitzer, 30 yıl boyunca tek bir soru üzerinde çalıştı: Neden bazı insanlar hedeflerine ulaşıyor, bazıları ulaşamıyor?</p>
            
            <p className="mb-4">94 farklı çalışmayı analiz ettikten sonra cevabı buldu:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Yapacağım demek yetmiyor. Ne zaman, nerede, nasıl yapacağım demek gerekiyor.
            </blockquote>
            
            <p className="mb-4">Buna <strong>uygulama niyeti</strong> diyor Gollwitzer:</p>
            
            <div className="space-y-3 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-600 font-medium mb-1">Zayıf Niyet</p>
                <p className="m-0">Meditasyon yapacağım</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-600 font-medium mb-1">Güçlü Niyet</p>
                <p className="m-0">Her sabah 06:30da, yatak odamda, 10 dakika nefes çalışması yapacağım</p>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-600 font-medium mb-1">Zayıf Niyet</p>
                <p className="m-0">Daha az stres yapacağım</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-600 font-medium mb-1">Güçlü Niyet</p>
                <p className="m-0">Eğer işte gerginleşirsem, o zaman 5 dakika derin nefes alacağım</p>
              </div>
            </div>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">Uygulama niyeti oluşturanlar, oluşturmayanlardan 3 kat daha başarılı.</p>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Kimlik Değişimi</h2>
            
            <p className="mb-4">James Clear, 25 milyon satılan Atomic Habits kitabında şöyle diyor:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Hedeflerinizin seviyesine yükselmezsiniz. Sistemlerinizin seviyesine düşersiniz.
            </blockquote>
            
            <p className="mb-4">Cleara göre değişimin üç katmanı var:</p>
            
            <div className="space-y-3 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">Sonuçlar.</strong> Ne elde etmek istiyorsun? → Arınmak istiyorum
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">Süreçler.</strong> Ne yapıyorsun? → Her gün OLUKa gireceğim
              </div>
              <div className="bg-[#0D4F4F]/10 border border-[#0D4F4F] rounded-lg p-4">
                <strong className="text-[#0D4F4F]">Kimlik.</strong> Kim olmak istiyorsun? → Ben arınma yolunda yürüyen biriyim
              </div>
            </div>
            
            <p className="mb-4">Ve işte sır burada:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Her eylem, olmak istediğin kişi için atılan bir oydur.
            </blockquote>
            
            <p className="mb-4">Yazdığında artık sadece düşünmüyorsun — <strong>beyan ediyorsun.</strong></p>
            
            <p className="mb-4">Arınmak istiyorum diyen biri var. Bir de Ben arınma yolunda yürüyorum diyen biri var.</p>
            
            <p className="mb-8">Aradaki fark, bir niyet beyanı kadar.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Sentez: Eski Bilgelik, Yeni Bilim</h2>
            
            <p className="mb-4">Şimdi bir an dur ve bak:</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#0D4F4F]/10 rounded-lg p-4 text-center">
                <p className="font-bold text-[#0D4F4F] mb-2">Tasavvuf</p>
                <p className="text-sm m-0">Niyet</p>
                <p className="text-sm m-0">İhlâs</p>
                <p className="text-sm m-0">Ahit</p>
                <p className="text-sm m-0">Muhasebe-i nefs</p>
                <p className="text-sm m-0">Sabır</p>
                <p className="text-sm m-0">Sıdk</p>
              </div>
              <div className="bg-[#C9A962]/20 rounded-lg p-4 text-center">
                <p className="font-bold text-[#0D4F4F] mb-2">Modern Psikoloji</p>
                <p className="text-sm m-0">Goal intention</p>
                <p className="text-sm m-0">Intrinsic motivation</p>
                <p className="text-sm m-0">Written commitment</p>
                <p className="text-sm m-0">Self-monitoring</p>
                <p className="text-sm m-0">Perseverance</p>
                <p className="text-sm m-0">Consistency</p>
              </div>
            </div>
            
            <p className="mb-4">Aynı hakikat. Farklı diller.</p>
            
            <p className="mb-8">İmam-ı Rabbânînin <strong>İlim + Amel + İhlâs</strong> formülü, modern psikolojinin <strong>Hedef + Eylem Planı + İçsel Motivasyon</strong> formülüyle özdeş. Bin yıl önce söylenen, bugün laboratuvarda doğrulanıyor.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Son Söz</h2>
            
            <p className="mb-4">Şimdi bir seçim var önünde.</p>
            
            <p className="mb-4">Bu yazıyı okuyup geçebilirsin. Çoğu insan öyle yapar.</p>
            
            <p className="mb-4">Ya da...</p>
            
            <p className="mb-4">Bir kâğıt alabilirsin. Bir kalem. Ve kendinle bir söz kesebilirsin.</p>
            
            <p className="mb-4">Kimse görmese de. Kimse bilmese de. Sen bileceksin.</p>
            
            <p className="mb-4">Ve o bilgi, her şeyi değiştirecek.</p>
            
            <p className="mb-4">Çünkü söz, havada kalan bir ses değildir.</p>
            
            <p className="text-xl font-semibold text-[#0D4F4F] mb-8">Söz, ruhun imzasıdır.</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Ebedî kurtuluş için insana üç şey mutlaka lazımdır: İlim, amel, ihlâs.
              <footer className="text-sm mt-2 not-italic text-gray-600">— İmam-ı Rabbânî Hazretleri</footer>
            </blockquote>
            
          </article>
        </div>

        <button className="w-full bg-[#0D4F4F] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#0D4F4F]/90 transition-colors mb-6">
          <CheckCircle className="w-5 h-5" />
          Dersi Tamamladım
        </button>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500 mb-2">Sıradaki Ders</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#0D4F4F]">Yolculuğa Hazırlık</span>
            <Link 
              href="/dersler/arinma/kapi/yolculuga-hazirlik"
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
