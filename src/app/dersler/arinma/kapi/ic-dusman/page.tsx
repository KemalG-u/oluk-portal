import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'İç Düşman | OLUK',
  description: 'Değişime neden bu kadar direniyorsun? Beynin sırları ve nefsin tuzakları.',
};

export default function IcDusmanPage() {
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
          İç Düşman
        </h1>

        <p className="text-xl text-gray-600 italic mb-6">Değişime neden bu kadar direniyorsun?</p>

        <div className="flex items-center gap-4 text-gray-500 mb-8">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>16 dk</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>Okuma</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <article className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6">Tanıdık Ses</h2>
            
            <p className="mb-4">Tanıyor musun bu sesi?</p>
            
            <p className="mb-4 italic text-gray-600">Yarın başlarım.</p>
            <p className="mb-4 italic text-gray-600">Bu benim için değil.</p>
            <p className="mb-4 italic text-gray-600">Çok zor, başaramam.</p>
            <p className="mb-4 italic text-gray-600">Her seferinde başarısız oldum, bu sefer de olmaz.</p>
            
            <p className="mb-4">Bu ses <strong>kime</strong> ait?</p>
            
            <p className="mb-8">Bu yazı, o sesin kimliğini açığa çıkaracak. Ve neden bu kadar güçlü olduğunu anlayacaksın.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Beynin Sırrı</h2>
            
            <p className="mb-4">2010 yılı. Londra. UCL Üniversitesi. Araştırmacılar fMRI cihazıyla beyni inceliyorlar.</p>
            
            <p className="mb-4">Soru şu: İnsan neden mevcut durumu değiştirmekten kaçınıyor?</p>
            
            <p className="mb-4">Cevap şaşırtıcı:</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">Değişmek için beyin DAHA FAZLA enerji harcamak zorunda.</p>
            </div>
            
            <p className="mb-4">Beyin, enerji tasarrufu yapan bir makine. Ve tanıdık olan = güvenli olan.</p>
            
            <p className="mb-4">Bu yüzden:</p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Eski alışkanlıklar otomatik pilotta çalışıyor</li>
              <li>Yeni davranış bilinçli çaba gerektiriyor</li>
              <li>Yorgunken beyin eskiye dönüyor</li>
              <li>Stres altında eski kalıplar devreye giriyor</li>
            </ul>
            
            <p className="mb-4">Buna <strong>status quo bias</strong> deniyor. Mevcut durumu koruma eğilimi.</p>
            
            <p className="mb-8">Ama bekle. Bu sadece beyin mi? Hayır. Çok daha derin bir şey var.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Nefis: Asıl Düşman</h2>
            
            <p className="mb-4">Kuran-ı Kerimde nefis kelimesi <strong>295 kez</strong> geçiyor.</p>
            
            <p className="mb-4">Şeytan kelimesi? <strong>88 kez.</strong></p>
            
            <p className="mb-4">Neden?</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Muhakkak ki nefis, daima kötülüğü emreder.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Yusuf, 53)</footer>
            </blockquote>
            
            <p className="mb-4"><strong>Daima.</strong> Sürekli. Durmadan.</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Andolsun ki, insanı biz yarattık ve nefsinin ona ne gibi vesveseler verdiğini biliyoruz.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Kaf, 16)</footer>
            </blockquote>
            
            <p className="mb-4">Allah, nefsin vesveselerini biliyor. Peki sen biliyor musun?</p>
            
            <p className="mb-4">Mevlana diyor ki:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Nefis, bütün kötülüklerin anasıdır. Nefis bir ejderhadır. Firavunda olan sende de vardır.
            </blockquote>
            
            <p className="mb-8">İçindeki ejderha. Herkesin içinde var. Ve o ejderha, değişimi <strong>istemiyor</strong>.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Şeytanın Stratejisi</h2>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Sonra önlerinden, arkalarından, sağlarından ve sollarından onlara sokulacağım.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Araf, 17)</footer>
            </blockquote>
            
            <p className="mb-4">Her yönden. Her açıdan. Dur durak bilmeden.</p>
            
            <p className="mb-4">Peygamber Efendimiz (s.a.v.) buyurdu:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Şeytan, kanın bedende dolaştığı gibi insanın damarlarında dolaşır.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Buhari, Müslim)</footer>
            </blockquote>
            
            <p className="mb-4">Ve şeytanın en sinsi hilesi:</p>
            
            <blockquote className="border-l-4 border-red-400 pl-6 py-4 my-6 bg-red-50 rounded-r-lg italic">
              Şeytanın hilelerinden biri: Ya tam yap ya hiç yapma! demesidir.
              <footer className="text-sm mt-2 not-italic text-gray-600">— İmam Gazali</footer>
            </blockquote>
            
            <p className="mb-4">Tanıdık mı geldi?</p>
            
            <p className="mb-8">Nasıl olsa başaramazsın. Bırak. Çok zor. Senin harcın değil. Bu sesler... şeytanın fısıltısı.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Nefis + Şeytan = İttifak</h2>
            
            <p className="mb-4">Mevlana, gemi metaforunu kullanır:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Su, geminin içine girerse onu batırır. Altında bulunursa, onu yüzdürür.
            </blockquote>
            
            <p className="mb-4">Nefis ve şeytana <strong>hakim</strong> olursan = Yükseliş.</p>
            
            <p className="mb-4">Onlara <strong>mahkum</strong> olursan = Batış.</p>
            
            <p className="mb-4">İkisi birlikte çalışıyor:</p>
            
            <div className="space-y-3 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">Nefis:</strong> Değişmek istemiyorum, rahatım böyle.
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">Şeytan:</strong> Zaten başaramazsın, deneme bile.
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">Beyin:</strong> Enerji tasarrufu yapalım, eskisi iyiydi.
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Bilimin Keşfi: Kendine Sabotaj</h2>
            
            <p className="mb-4">Modern psikoloji buna <strong>self-sabotage</strong> diyor. Kendine sabotaj.</p>
            
            <p className="mb-4">Erişkinlerin <strong>%20si</strong> ciddi erteleme problemi yaşıyor.</p>
            
            <p className="mb-4">Neden?</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Beyin tahmin edilebilir olanı sever. Olumsuz bile olsa tanıdık = rahatlatıcı.
            </blockquote>
            
            <p className="mb-4">Yani: Mutsuz ama tanıdık hayat, mutlu ama bilinmeyen hayattan daha çekici.</p>
            
            <p className="mb-4">Ve araştırmalar gösteriyor:</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">Yeni bir davranışın otomatik hale gelmesi: Ortalama 66 gün.</p>
            </div>
            
            <p className="mb-8">21 gün miti <strong>yanlış</strong>. Gerçek: 2 ay civarı. Sabır gerekli.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Çıkış Yolu: Tedrici İlerleme</h2>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Kuranı insanlara ağır ağır okuman için bölümlere ayırdık.
              <footer className="text-sm mt-2 not-italic text-gray-600">(İsra, 106)</footer>
            </blockquote>
            
            <p className="mb-4">Allah bile vahyi <strong>tedrici</strong> indirdi. Bir anda değil, adım adım.</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Allaha en sevimli amel, az da olsa devamlı olanıdır.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Buhari, Müslim)</footer>
            </blockquote>
            
            <p className="mb-4">Küçük adımlar &gt; Büyük atılımlar.</p>
            
            <p className="mb-4">Devamlılık &gt; Yoğunluk.</p>
            
            <p className="mb-4">Gazali diyor ki:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Ahlaklar, riyazetle değişmeyi kabul eder. Hastalıkların tedavisi tedricidir. Bedenin ilacı zamanla etki eder. Nefsin ıslahı da adım adımdır.
            </blockquote>
            
            <p className="mb-8">Değişim <strong>mümkün</strong>. Ama sabır gerekli.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Direncin Sesi vs. Hakikat</h2>
            
            <div className="space-y-3 mb-8">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">Çok zor, başaramam</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">Tedrici ilerleme mümkün</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">Değişmek için geç kaldım</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">Tövbe kapısı her an açık</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">Benim için imkansız</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">Allah kimseye taşıyamayacağı yük yüklemez</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">Her seferinde başarısız oldum</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">Her düşüş yeni başlangıç</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">Bu benim kaderim</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">Değiştirme gücü sende</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Pratik: Direnci Nasıl Aşarsın?</h2>
            
            <div className="space-y-3 mb-8">
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <strong className="text-[#0D4F4F]">1. Sesi tanı.</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">Bu düşünce benim mi, nefsin mi? Fark et.</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <strong className="text-[#0D4F4F]">2. Küçük başla.</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">5 dakika &gt; 0 dakika. Her zaman.</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <strong className="text-[#0D4F4F]">3. Tevekkül et.</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">Çalış, sonucu Allaha bırak.</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <strong className="text-[#0D4F4F]">4. Sabırlı ol.</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">66 gün, 2 ay, belki daha fazla. Acele etme.</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <strong className="text-[#0D4F4F]">5. Düşersen kalk.</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">Her düşüş yeni başlangıç.</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <strong className="text-[#0D4F4F]">6. Yalnız savaşma.</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">Destek al. Rehber bul.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Son Söz</h2>
            
            <p className="mb-4">Değişim <strong>zor</strong>.</p>
            
            <p className="mb-4">Beyin direnç gösteriyor. Nefis ayak diriyor. Şeytan fısıldıyor.</p>
            
            <p className="mb-4">Ama...</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Allah sizin için kolaylık diler, zorluk istemez.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Bakara, 185)</footer>
            </blockquote>
            
            <p className="mb-4">Zor ama <strong>imkansız değil</strong>.</p>
            
            <p className="mb-4">Beyin değişebilir. Buna <strong>nöroplastisite</strong> deniyor.</p>
            
            <p className="mb-4">Nefis terbiye edilebilir. Buna <strong>riyazet</strong> deniyor.</p>
            
            <p className="mb-4">Şeytanın hilesi zayıf. Fark edersen aşarsın.</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">Seninle bir sorun yok. Beyin böyle çalışıyor. Ama sen daha güçlüsün.</p>
            </div>
            
            <p className="text-xl font-semibold text-[#0D4F4F]">Başla. Düş. Kalk. Devam et.</p>
            
          </article>
        </div>

        <button className="w-full bg-[#0D4F4F] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#0D4F4F]/90 transition-colors mb-6">
          <CheckCircle className="w-5 h-5" />
          Dersi Tamamladım
        </button>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500 mb-2">Sıradaki Ders</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#0D4F4F]">Beklenti</span>
            <Link 
              href="/dersler/arinma/kapi/beklenti"
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
