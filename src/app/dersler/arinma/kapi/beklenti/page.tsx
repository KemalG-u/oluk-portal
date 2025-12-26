import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Beklenti | OLUK',
  description: 'Belki de sorun sende değil, beklentilerinde. Dönüşüm yolunda gerçekçi beklentiler.',
};

export default function BeklentiPage() {
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
          Beklenti
        </h1>

        <p className="text-xl text-gray-600 italic mb-6">Belki de sorun sende değil, beklentilerinde.</p>

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
            
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6">Bir Sahne</h2>
            
            <p className="mb-4">Ayşe, üç haftadır her gece meditasyon yapıyor. Nefes egzersizleri, şükür günlüğü, sabah duaları... Her şeyi "doğru" yapıyor.</p>
            
            <p className="mb-4">Ama içinde bir şey değişmedi.</p>
            
            <p className="mb-4">Hâlâ aynı kaygılar. Hâlâ aynı düşünceler. Hâlâ o "yetersizim" hissi.</p>
            
            <p className="mb-4">Dördüncü haftanın başında bırakıyor.</p>
            
            <p className="mb-4 italic text-gray-600">"Bu benim için değilmiş" diyor. "Herkes değişiyor, ben değişemiyorum."</p>
            
            <p className="mb-4">Peki Ayşe gerçekten başarısız mı oldu?</p>
            
            <p className="mb-8">Yoksa başından beri yanlış bir şey mi bekliyordu?</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Kafamızdaki Film</h2>
            
            <p className="mb-4">Araştırmacı Brené Brown yıllarca insanların hayal kırıklıklarını inceledi. Sonunda şu sonuca vardı:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Hayal kırıklığı, karşılanmamış beklentilerdir.
              <footer className="text-sm mt-2 not-italic text-gray-600">— Brené Brown, Daring Greatly</footer>
            </blockquote>
            
            <p className="mb-4">Basit görünüyor değil mi? Ama işin derinliği şurada:</p>
            
            <p className="mb-4">Brown'a göre biz bir şeye başladığımızda, kafamızda bir <strong>film çekiyoruz</strong>. Bu filmde her şey var: Nasıl hissedeceğimiz, ne zaman değişeceğimiz, başkalarının bize nasıl tepki vereceği...</p>
            
            <p className="mb-8">Sorun şu ki, bu filmin senaryosunu sadece biz yazıyoruz. Hayat o senaryoyu okumadı bile.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Bu Bizimle Ne Alakalı?</h2>
            
            <p className="mb-4">Bir dönüşüm yoluna girdiğinde kafanda bir film başlıyor:</p>
            
            <p className="mb-2 italic text-gray-600">"Bir hafta sonra daha sakin olacağım."</p>
            <p className="mb-2 italic text-gray-600">"Üç hafta sonra kaygılarım azalacak."</p>
            <p className="mb-4 italic text-gray-600">"Bir ay sonra bambaşka biri olacağım."</p>
            
            <p className="mb-8">Bu film ne kadar detaylıysa, hayal kırıklığı o kadar büyük oluyor. Çünkü gerçeklik hiçbir zaman o filme benzemiyor.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">İki Bin Yıllık Bir Bilgelik</h2>
            
            <p className="mb-4">Seneca, Roma İmparatorluğunun en güçlü döneminde yaşamış bir filozoftu. İmparatorun danışmanıydı, zengin bir adamdı, her şeyi vardı. Ama sürgüne gönderildi, servetini kaybetti.</p>
            
            <p className="mb-4">Bu kadar iniş çıkış yaşamış biri olarak şunu yazdı:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Öfkenin en büyük sebebi aşırı iyimser beklentilerdir. Beklenmedik şey daha ağır gelir. Hazırlıksızlık acıyı artırır.
              <footer className="text-sm mt-2 not-italic text-gray-600">— Seneca, De Ira</footer>
            </blockquote>
            
            <p className="mb-4">Senecanın çözümü ilginçti: <strong>Kötülüğü önceden düşün.</strong></p>
            
            <p className="mb-8">Bir yolculuğa çıkmadan önce, "Fırtına çıkabilir. Hastalanabilirim" diye düşün. Böylece bunlar olduğunda yıkılmazsın.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Kuranın Teşhisi</h2>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              İnsan, aceleci bir tabiatta yaratılmıştır.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Enbiya, 37)</footer>
            </blockquote>
            
            <p className="mb-4">Bu ayeti yüzeysel okumak kolay: "Evet, acele ediyoruz."</p>
            
            <p className="mb-4">Ama İsmail Hakkı Bursevi Hazretleri—Osmanlının büyük alimlerinden biri, Bursa Ulu Camiinde 23 yıl boyunca vaaz vererek Ruhul Beyan tefsirini oluşturmuş bir gönül adamı—bu ayeti şöyle açıklıyor:</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6">
              <p className="text-lg font-medium m-0">İnsan, acele yaratılmıştır; yani tohum ekmeden meyve istiyor. Çaba göstermeden sonuç bekliyor. Bir adım atmadan hedefe varmak istiyor.</p>
            </div>
            
            <p className="mb-8">Bu "acelecilik" sadece hız meselesi değil. <strong>Süreç olmadan sonuç bekleme hastalığı.</strong></p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Gazalinin Uyarısı</h2>
            
            <p className="mb-4">İmam Gazali, İhyau Ulumid-Dinde şöyle der:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Kalbin tedavisi bedenin tedavisi gibidir. Nasıl ki beden bir günde şifa bulmaz, kalp de bir günde temizlenmez. Sabırsız olan tedaviyi yarıda bırakır ve hastalığı artar.
            </blockquote>
            
            <p className="mb-4">Ayşenin hikayesine dönelim.</p>
            
            <p className="mb-4">Üç hafta pratik yaptı ve değişim bekledi. Ama tohum ekip ertesi gün ağaç beklemek gibi bir şey bu.</p>
            
            <p className="mb-8">Dönüşüm bir süreç. Ve bu sürecin kendisi—o zorlu günler, o "hiçbir şey olmuyor" hissi, o iki adım ileri bir adım geri—<strong>tam da dönüşümün ta kendisi</strong>.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Bilimin Keşfi</h2>
            
            <p className="mb-4">2023 yılında yapılan büyük bir araştırma, meditasyon uygulamalarını inceleyen 70 ayrı çalışmayı analiz etti.</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">Dijital meditasyon uygulamalarında ortalama bırakma oranı: %24.7</p>
              <p className="text-lg mt-2 m-0">Destek olmadan: %38.7</p>
            </div>
            
            <p className="mb-4">Yani her üç kişiden biri, bir ay bile dolmadan bırakıyor.</p>
            
            <p className="mb-4">Peki neden?</p>
            
            <p className="mb-4">Araştırmacılar bir şey fark etti: <strong>Başlangıçta daha şiddetli belirtileri olanlar (kaygı, depresyon) daha erken bırakıyordu.</strong></p>
            
            <p className="mb-4">Bu paradoks gibi görünüyor: En çok ihtiyacı olanlar en erken bırakıyor.</p>
            
            <p className="mb-8">Ama aslında mantıklı: Onların beklentileri de en yüksek. "Bu beni kurtaracak" düşüncesiyle başlıyorlar. Ve ilk haftalarda "kurtarılmadıklarını" görünce hayal kırıklığına uğruyorlar.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Umut ve Beklenti Farkı</h2>
            
            <div className="space-y-3 mb-8">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="font-bold text-green-700 mb-1">Umut</p>
                  <p className="text-sm text-green-700 m-0">"Bu yolculuk bana iyi gelecek."</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="font-bold text-red-700 mb-1">Beklenti</p>
                  <p className="text-sm text-red-700 m-0">"Üç haftada kaygılarım bitecek."</p>
                </div>
              </div>
            </div>
            
            <p className="mb-8">Umut seni yolda tutar. Beklenti seni yoldan çıkarır.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Peygamberin Uyarısı</h2>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Keşke demekten sakın. Çünkü keşke demek şeytanın işine kapı açar.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Müslim, 2664)</footer>
            </blockquote>
            
            <p className="mb-4">Bu hadis genellikle "geçmişe takılma" olarak yorumlanıyor. Doğru, ama bir şey daha var:</p>
            
            <p className="mb-4">"Keşke" sadece geçmişe değil, <strong>karşılanmamış beklentilere</strong> de takılmaktır.</p>
            
            <p className="mb-2 italic text-gray-600">"Keşke şimdiye kadar değişseydim."</p>
            <p className="mb-2 italic text-gray-600">"Keşke bu kadar zor olmasaydı."</p>
            <p className="mb-4 italic text-gray-600">"Keşke başkaları gibi hızlı ilerlseydim."</p>
            
            <p className="mb-8">"Keşke" yerine şunu sor: <strong>"Şu an elimde ne var?"</strong></p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Ortak Hakikat</h2>
            
            <div className="space-y-3 mb-8">
              <div className="bg-[#0D4F4F]/10 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">Kuran</p>
                <p className="text-sm m-0">İnsan aceleci yaratıldı - tohum ekmeden meyve istiyor.</p>
              </div>
              <div className="bg-[#C9A962]/20 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">Peygamber</p>
                <p className="text-sm m-0">Keşke demek şeytanın işine kapı açar.</p>
              </div>
              <div className="bg-[#0D4F4F]/10 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">Gazali</p>
                <p className="text-sm m-0">Kalp bir günde temizlenmez, sabırsız olan tedaviyi bırakır.</p>
              </div>
              <div className="bg-[#C9A962]/20 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">Seneca</p>
                <p className="text-sm m-0">Aşırı iyimser beklentiler öfkenin en büyük sebebi.</p>
              </div>
              <div className="bg-[#0D4F4F]/10 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">Brené Brown</p>
                <p className="text-sm m-0">Hayal kırıklığı, karşılanmamış beklentilerdir.</p>
              </div>
              <div className="bg-[#C9A962]/20 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">2023 Araştırması</p>
                <p className="text-sm m-0">En çok ihtiyacı olanlar en erken bırakıyor - beklenti yüksek.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Beklentinin Sesi vs. Hakikat</h2>
            
            <div className="space-y-3 mb-8">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">Bir haftada sakinleşmeliyim</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">İlk hafta sadece alışkanlık kurma</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">Her gün daha iyi hissetmeliyim</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">Dalgalanma normal, düz çizgi yok</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">Başkaları gibi hızlı ilerlmeliyim</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">Herkesin temposu farklı</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">Hiçbir şey değişmedi, başarısızım</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">Değişim sessiz gelir, fark etmezsin</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Gerçekçi Zaman Çizelgesi</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">İlk 7 Gün</p>
                <p className="text-sm text-gray-600 m-0">Pratikleri öğrenme dönemi. Yanlış yapacaksın, unutacaksın, zorlanacaksın. Büyük değişim bekleme. Sadece alışkanlık kurma odağı.</p>
              </div>
              <div className="bg-gray-200 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">7-21 Gün</p>
                <p className="text-sm text-gray-600 m-0">Pratikler biraz daha kolay gelmeye başlar. AMA duygusal olarak hâlâ büyük değişim görmeyebilirsin. Bazı günler çok iyi, bazı günler berbat. Bu dalgalanma normal.</p>
              </div>
              <div className="bg-gray-300 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">21-40 Gün</p>
                <p className="text-sm text-gray-600 m-0">Alışkanlık oturmaya başlar. İlk küçük farkındalıklar gelir. "Haa, eskiden bu durumda böyle tepki verirdim, şimdi farklı" gibi anlar olur.</p>
              </div>
              <div className="bg-[#0D4F4F]/20 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">40+ Gün</p>
                <p className="text-sm text-gray-600 m-0">Gerçek değişim burada başlar. Ve bu "değişim" çoğu zaman dramatik değil, sessiz olur. Bir gün fark edersin ki eskisi kadar kaygılı değilsin.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Pratik: Beklenti Haritası</h2>
            
            <p className="mb-4">Bir kağıt al. İki sütun çiz.</p>
            
            <div className="space-y-3 mb-6">
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <strong className="text-[#0D4F4F]">Sol sütun: Beklentilerim</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">Bu yolculuktan ne bekliyorsun? Dürüst ol. "Bir ayda kaygılarım bitsin" beklentisi mi var? Yaz.</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <strong className="text-[#0D4F4F]">Sağ sütun: Gerçekçi mi?</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">Her beklentinin yanına birini yaz: ✓ Gerçekçi | ? Belki, ama zaman alır | ✗ Film senaryosu</p>
              </div>
            </div>
            
            <p className="mb-8">Çoğu beklentinin "?" veya "✗" olduğunu göreceksin. Bu kötü bir şey değil. <strong>Farkındalık, değişimin ilk adımı.</strong></p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Hayal Kırıklığı Anında</h2>
            
            <p className="mb-4">O an gelecek. "Bu işe yaramıyor" diyeceğin bir an.</p>
            
            <p className="mb-4">O an, şunu hatırla:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Sabır, musibetin ilk anındadır.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Buhari, 1283)</footer>
            </blockquote>
            
            <p className="mb-4">Tam o an—bırakmak istediğin an, "bu benim için değil" dediğin an—işte gerçek sabır orada.</p>
            
            <p className="mb-8">O anı geçersen, bir adım daha ilerlemiş olursun.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Son Söz</h2>
            
            <p className="mb-4">Bu yazıyı okuduktan sonra, beklentilerinin değişmesini bekleme.</p>
            
            <p className="mb-4">Ama belki, bir sonraki zor günde, bu satırları hatırlarsın.</p>
            
            <p className="mb-4">Ve "başarısızım" demek yerine, "bu sürecin parçası" dersin.</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">Bu bile, büyük bir adım.</p>
            </div>
            
          </article>
        </div>

        <button className="w-full bg-[#0D4F4F] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#0D4F4F]/90 transition-colors mb-6">
          <CheckCircle className="w-5 h-5" />
          Dersi Tamamladım
        </button>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500 mb-2">Sıradaki Aşama</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#0D4F4F]">Beden Temizliği</span>
            <Link 
              href="/dersler/arinma/beden"
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
