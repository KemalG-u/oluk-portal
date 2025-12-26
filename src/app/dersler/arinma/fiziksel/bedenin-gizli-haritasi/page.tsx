import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Bedenin Gizli Haritası | OLUK',
  description: 'Beden bir mabet. İçinde uyuyan kapılar, ışık bekleyen köşeler var. Ruhani dönüşümün haritası.',
};

export default function BedeninGizliHaritasiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F0E6] to-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        
        <Link 
          href="/dersler/arinma/fiziksel"
          className="inline-flex items-center gap-2 text-[#0D4F4F] hover:text-[#0D4F4F]/70 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Fiziksel Arınma
        </Link>

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <span>ARINMA</span>
          <span>→</span>
          <span>FİZİKSEL</span>
          <span>→</span>
          <span className="text-[#0D4F4F] font-medium">GİRİŞ</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0D4F4F] mb-4">
          Bedenin Gizli Haritası
        </h1>

        <p className="text-xl text-gray-600 italic mb-6">Beden bir mabet. İçinde uyuyan kapılar var.</p>

        <div className="flex items-center gap-4 text-gray-500 mb-8">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>22 dk</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>Okuma</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <article className="prose prose-lg max-w-none">
            
            {/* BÖLÜM 1: AÇILIŞ */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6">Kayıp Bilgi</h2>
            
            <p className="mb-4">Modern insan bedeni bir makine olarak görüyor.</p>
            
            <p className="mb-4">Parçalar var, mekanizma var, bozulunca tamirciye götürülüyor.</p>
            
            <p className="mb-4">Ama kadim bilgelik başka bir şey söylüyordu:</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">Beden bir mabet.</p>
            </div>
            
            <p className="mb-4">İçinde gizli odalar var. Uyuyan kapılar var. Işık bekleyen karanlık köşeler var.</p>
            
            <p className="mb-4">İmam Gazali, İhyada şöyle diyor:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Kalp parlatılmadan önce beden arındırılmalı. Kirli bir kapta temiz su durmaz.
            </blockquote>
            
            <p className="mb-4">Bu yazı sağlıklı yaşam rehberi değil. Spor ve diyet tavsiyeleri vermeyeceğiz.</p>
            
            <p className="mb-8">Bu yazı, bedenin <strong>ruhani haritasını</strong> çıkarıyor. Çünkü kalp açılmadan önce beden hazırlanmalı.</p>

            {/* BÖLÜM 2: İKİ DİL BİR HAKİKAT */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">İki Dil, Bir Hakikat</h2>
            
            <p className="mb-4">Yüzyıllar önce sufiler bir şeyler keşfetti.</p>
            
            <p className="mb-4">Bugün bilim aynı şeyleri farklı kelimelerle anlatıyor.</p>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0D4F4F] text-white">
                    <th className="p-3 text-left rounded-tl-lg">Tasavvuf</th>
                    <th className="p-3 text-left rounded-tr-lg">Bilim</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="p-3 border-b font-medium">Latifeler (ince merkezler)</td>
                    <td className="p-3 border-b">İnteroception (iç algı sistemi)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border-b font-medium">Nur (ışık)</td>
                    <td className="p-3 border-b">Biyofoton emisyonu (hücresel ışık)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border-b font-medium">Kalp gözü (basiret)</td>
                    <td className="p-3 border-b">İnteroceptive awareness</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border-b font-medium">Zikrin etkisi</td>
                    <td className="p-3 border-b">Kalp koheransı, HRV düzenlenmesi</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border-b font-medium">Nefs terbiyesi</td>
                    <td className="p-3 border-b">Prefrontal korteks güçlendirme</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border-b font-medium">Ruh-beden bağı</td>
                    <td className="p-3 border-b">Embodied cognition (bedenlenmiş biliş)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-medium">Kalp beyni</td>
                    <td className="p-3">Neurocardiology (40,000 nöron)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="mb-8">Kelimeler farklı. İşaret edilen yer aynı.</p>

            {/* BÖLÜM 3: LATİFELER SİSTEMİ */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Latifeler Sistemi</h2>
            
            <p className="mb-4">İmam-ı Rabbani (Ahmed Sirhindi, 1564-1624), Mektubatında insandaki "latifeler"den bahseder.</p>
            
            <p className="mb-4">Bunlar fiziksel organlar değil—<strong>ince enerji merkezleri</strong>.</p>
            
            <p className="mb-6">Nakşibendi-Müceddidi geleneğinde 6 latife tanımlanır:</p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                  <h4 className="font-bold text-[#0D4F4F] m-0">1. KALP (Qalb)</h4>
                </div>
                <p className="text-sm text-gray-600 m-0"><strong>Konum:</strong> Sol göğüs, fiziksel kalbin 2 parmak altı</p>
                <p className="text-sm text-gray-600 m-0"><strong>İşlev:</strong> İlahi aşkın ve marifetin merkezi. Tüm latifelerin sultanı.</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 rounded-full bg-red-400"></div>
                  <h4 className="font-bold text-[#0D4F4F] m-0">2. RUH</h4>
                </div>
                <p className="text-sm text-gray-600 m-0"><strong>Konum:</strong> Sağ göğüs, kalbin simetriği</p>
                <p className="text-sm text-gray-600 m-0"><strong>İşlev:</strong> İlahi tecellilerin alıcısı. Ruhani vizyonların kapısı.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-400"></div>
                  <h4 className="font-bold text-[#0D4F4F] m-0">3. SIRR</h4>
                </div>
                <p className="text-sm text-gray-600 m-0"><strong>Konum:</strong> Göğsün ortası, kalbin üstü</p>
                <p className="text-sm text-gray-600 m-0"><strong>İşlev:</strong> Gizli bilginin deposu. İlahi sırların muhafazası.</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 rounded-full bg-green-400"></div>
                  <h4 className="font-bold text-[#0D4F4F] m-0">4. HAFİ (Khafi)</h4>
                </div>
                <p className="text-sm text-gray-600 m-0"><strong>Konum:</strong> Alın ortası</p>
                <p className="text-sm text-gray-600 m-0"><strong>İşlev:</strong> Gizlinin gizlisi. Derin sezginin kaynağı.</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                  <h4 className="font-bold text-[#0D4F4F] m-0">5. AHFA (Akhfa)</h4>
                </div>
                <p className="text-sm text-gray-600 m-0"><strong>Konum:</strong> Başın tepesi</p>
                <p className="text-sm text-gray-600 m-0"><strong>İşlev:</strong> En gizli olan. Fena fillahın (Allahta yok oluşun) kapısı.</p>
              </div>
              
              <div className="bg-gray-100 border border-gray-300 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 rounded-full bg-gray-500"></div>
                  <h4 className="font-bold text-[#0D4F4F] m-0">6. NEFS</h4>
                </div>
                <p className="text-sm text-gray-600 m-0"><strong>Konum:</strong> Göbek ve altı</p>
                <p className="text-sm text-gray-600 m-0"><strong>İşlev:</strong> Terbiye edilmesi gereken merkez. Dönüşümün başlangıç noktası.</p>
              </div>
            </div>
            
            <p className="mb-4"><strong>Neden önemli?</strong></p>
            
            <p className="mb-8">Latifeler aktive olmadan kalp açılmaz. Beden kirli veya bloke olduğunda, latifeler uyuyor. Uyuyan latifelerle keşf gerçekleşmez.</p>

            {/* BÖLÜM 4: BİLİMİN KEŞFETTİĞİ İKİNCİ BEYİNLER */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Bilimin Keşfettiği "İkinci Beyinler"</h2>
            
            <p className="mb-4">Modern nörobilim şaşırtıcı şeyler keşfetti.</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6">
              <p className="text-xl font-bold mb-2">Kalp Beyni</p>
              <p className="m-0">Kalp 40,000 nöron içeriyor. Kendi sinir sistemi var. Öğrenebiliyor, hatırlayabiliyor, karar verebiliyor.</p>
              <p className="text-sm mt-2 m-0 opacity-80">Kaynak: HeartMath Institute</p>
            </div>
            
            <div className="bg-[#C9A962]/20 p-6 rounded-xl my-6">
              <p className="text-xl font-bold text-[#0D4F4F] mb-2">Bağırsak Beyni</p>
              <p className="text-[#0D4F4F] m-0">Bağırsaklarda 500 milyon nöron var. Serotoninin %95i burada üretiliyor. "İçgüdü" dediğimiz şey, buradan geliyor.</p>
            </div>
            
            <p className="mb-4">Ve işte en şaşırtıcısı:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg">
              Kalp beyne, beynin kalbe gönderdiğinden <strong>daha fazla</strong> sinyal gönderiyor.
            </blockquote>
            
            <p className="mb-4">Yani kalp sadece pompa değil. Kalp bir <strong>algı ve iletişim merkezi</strong>.</p>
            
            <p className="mb-8">Sufiler bunu yüzyıllar önce söylüyordu. Bilim şimdi doğruluyor.</p>

            {/* BÖLÜM 5: BİYOFOTONLAR */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Biyofotonlar: Bedenin Işığı</h2>
            
            <p className="mb-4">1970lerde Alman fizikçi Fritz-Albert Popp bir şey keşfetti:</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">Her hücre ışık yayıyor.</p>
            </div>
            
            <p className="mb-4">Buna "biyofoton" deniyor. Dalga boyu 200-800 nanometre arası. Çıplak gözle görülmüyor ama ölçülebiliyor.</p>
            
            <p className="mb-4">İlginç bulgular:</p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>DNA, biyofotonların birincil kaynağı</li>
              <li>Sağlıklı hücreler tutarlı ışık yayıyor, hasta hücreler kaotik</li>
              <li>Meditasyon sonrası biyofoton emisyonu değişiyor</li>
              <li>Hücreler arası iletişimde rol oynuyor olabilir</li>
            </ul>
            
            <p className="mb-4">Şimdi düşün:</p>
            
            <p className="mb-4">Tasavvufta "nur" kavramı var. Arınmış kalbin "ışık" yaydığı söylenir. Evliyanın yüzündeki "nur"dan bahsedilir.</p>
            
            <p className="mb-8">Biyofotonlar bu "nurun" bilimsel karşılığı olabilir mi? Kesin bir şey söyleyemeyiz. Ama bağlantı düşündürücü.</p>

            {/* BÖLÜM 6: TRAVMA BEDENDE SAKLANIR */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Travma Bedende Saklanır</h2>
            
            <p className="mb-4">Dr. Bessel van der Kolk, Harvard Tıp Fakültesinde 30 yılı aşkın travma araştırdı. Kitabının adı her şeyi özetliyor:</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">"The Body Keeps the Score"</p>
              <p className="mt-2 m-0 opacity-80">Beden Hesabı Tutar</p>
            </div>
            
            <p className="mb-4">Ana tezi:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Travma sadece zihinsel değil, bedenseldir. Zihin unutmaya çalışırken, beden hatırlar.
            </blockquote>
            
            <p className="mb-4">Travma şunları etkiliyor:</p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Amigdala:</strong> Sürekli alarm modunda kalıyor</li>
              <li><strong>Hipokampus:</strong> Hafıza işleme bozuluyor</li>
              <li><strong>Prefrontal korteks:</strong> Karar verme zayıflıyor</li>
              <li><strong>Kas sistemi:</strong> Kronik gerginlik, zırh oluşuyor</li>
            </ul>
            
            <p className="mb-4"><strong>Neden önemli?</strong></p>
            
            <p className="mb-8">Ruhani çalışmaya başlayan biri, bedeninde ne taşıdığının farkında olmayabilir. "Meditasyon yapamıyorum" diyor. Belki sorun zihinde değil—bedende biriken, çözülmemiş yükler sinyali bozuyor.</p>

            {/* BÖLÜM 7: EMBODIED COGNITION */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Embodied Cognition: Beden Bilir</h2>
            
            <p className="mb-4">Klasik görüş şuydu: Zihin kafada, beden aşağıda. Zihin düşünür, beden taşır.</p>
            
            <p className="mb-4">"Embodied cognition" (bedenlenmiş biliş) araştırmaları bu görüşü yıktı:</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6">
              <p className="text-xl font-bold m-0">Zihin sadece kafada değil. Beden, bilişin parçası.</p>
            </div>
            
            <p className="mb-4">Örnekler:</p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Gülümseme kaslarını çalıştırmak mutluluk hissini artırıyor</li>
              <li>Dik duruş özgüveni yükseltiyor</li>
              <li>El hareketleri düşünce kalitesini etkiliyor</li>
              <li>Bedensel sıcaklık, sosyal sıcaklık algısını değiştiriyor</li>
            </ul>
            
            <p className="mb-4">Tibet geleneğinde şöyle denir:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Aydınlanma bedende bulunur, başka hiçbir yerde değil.
            </blockquote>
            
            <p className="mb-8">Dini ve ruhani deneyimler havada gerçekleşmiyor. <strong>Bedende</strong> gerçekleşiyor.</p>

            {/* BÖLÜM 8: NEDEN BEDEN ÖNCE */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Neden "Önce Beden"?</h2>
            
            <p className="mb-4">Gazali net söylüyor:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Mide dolu olunca kalp kör olur.
            </blockquote>
            
            <p className="mb-4">Mantık zinciri şu:</p>
            
            <div className="space-y-2 mb-6">
              <div className="bg-gray-100 rounded-lg p-3 text-sm">1. Kalp, sinyalleri bedenden alıyor (HeartMath)</div>
              <div className="bg-gray-200 rounded-lg p-3 text-sm">2. Beden gergin/kirli → Sinyal bozuk (Van der Kolk)</div>
              <div className="bg-gray-300 rounded-lg p-3 text-sm">3. Sinyal bozuk → Latifeler uyuyor (İmam-ı Rabbani)</div>
              <div className="bg-[#0D4F4F]/20 rounded-lg p-3 text-sm">4. Latifeler uyuyor → Keşf gerçekleşmez (Gazali)</div>
            </div>
            
            <p className="mb-4">Başka bir benzetme:</p>
            
            <p className="mb-4">Beden bir anten. Anten paslı ve kirli olduğunda, en güçlü sinyal bile net alınamaz.</p>
            
            <p className="mb-8">Bu yüzden eski ustalar hep aynı sırayı izledi: Önce beden, sonra kalp, sonra ruh.</p>

            {/* BÖLÜM 9: BU SERİDE NE ÖĞRENECEKSIN */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Bu Seride Ne Öğreneceksin</h2>
            
            <p className="mb-4">Bu yazı, 5 yazılık bir serinin girişi. Her yazıda bedenin farklı bir kapısını açacağız:</p>
            
            <div className="space-y-3 mb-6">
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">1. Bedenin Gizli Haritası (Bu yazı)</p>
                <p className="text-sm text-gray-600 m-0">Neden beden önce gelir? Teorik temel.</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">2. Nefes</p>
                <p className="text-sm text-gray-600 m-0">Vagus siniri, kalp-beyin köprüsü, nefes teknikleri.</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">3. Hareket</p>
                <p className="text-sm text-gray-600 m-0">Bedenin duası. Secdenin hikmeti. Enerji akışı.</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">4. Beslenme</p>
                <p className="text-sm text-gray-600 m-0">Helal ötesi. Bağırsak-beyin ekseni. Orucun bilimi.</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">5. Uyku ve Dinlenme</p>
                <p className="text-sm text-gray-600 m-0">Teheccüdün hikmeti. Uyku fizyolojisi. Rüya.</p>
              </div>
            </div>
            
            <p className="mb-8">Her yazıda: <strong>Tasavvuf + Bilim + Pratik</strong>. Teori değil, uygulama.</p>

            {/* BÖLÜM 10: DİRENCİN SESİ */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Direncin Sesi vs. Hakikat</h2>
            
            <div className="space-y-3 mb-8">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">"Ben zaten temizim"</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">Temizlik katmanlar halinde. Dış temizlik sadece başlangıç.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">"Bunlar hurafe"</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">Peer-reviewed araştırmalar var. Bilim doğruluyor.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">"Bana zaman kaybı"</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">Temel olmadan bina çöker. Bu yatırım.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">"Hemen sonuç istiyorum"</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">Dönüşüm süreç ister. Hızlı olan kalıcı olmaz.</p>
                </div>
              </div>
            </div>

            {/* BÖLÜM 11: KAPANIŞ */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Kapanış: Davet</h2>
            
            <p className="mb-4">Bu seri bir başlangıç.</p>
            
            <p className="mb-4">Beden, mabede giriş kapısı.</p>
            
            <p className="mb-4">İlk adım: <strong>Fark etmek</strong>.</p>
            
            <p className="mb-4">Bedeninde ne taşıdığını fark etmek. Nerede gerginlik var, nerede blokaj var, nerede uyuyan kapılar var.</p>
            
            <p className="mb-4">Bu farkındalık olmadan kalp çalışması yüzeysel kalır.</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">Şimdi kapının önünde duruyorsun.</p>
              <p className="mt-2 m-0 opacity-80">Sonraki adım: Nefes</p>
            </div>
            
          </article>
        </div>

        <button className="w-full bg-[#0D4F4F] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#0D4F4F]/90 transition-colors mb-6">
          <CheckCircle className="w-5 h-5" />
          Dersi Tamamladım
        </button>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500 mb-2">Sıradaki Ders</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#0D4F4F]">Nefes</span>
            <Link 
              href="/dersler/arinma/fiziksel/nefes"
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
