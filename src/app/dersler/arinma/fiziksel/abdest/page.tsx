import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, CheckCircle, ArrowRight, Droplets } from 'lucide-react';

export const metadata = {
  title: 'Abdest | OLUK',
  description: 'Günde beş kez, milyarlarca Müslüman aynı ritüeli tekrarlıyor. Ama kaçımız abdestin ne olduğunu gerçekten biliyor?',
};

export default function AbdestPage() {
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
          <span className="text-[#0D4F4F] font-medium">DERS 2</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0D4F4F] mb-4">
          Abdest
        </h1>

        <p className="text-xl text-gray-600 italic mb-6">Sıradan bir yıkanmayı ibadete çeviren sır.</p>

        <div className="flex items-center gap-4 text-gray-500 mb-8">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>20 dk</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>Okuma + Pratik</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <article className="prose prose-lg max-w-none">
            
            {/* AÇILIŞ */}
            <p className="mb-4">Günde beş kez, milyarlarca Müslüman aynı ritüeli tekrarlıyor.</p>
            
            <p className="mb-4">Ama kaçımız abdestin ne olduğunu gerçekten biliyor?</p>
            
            <p className="mb-8">Bu yazı, abdestin sadece "temizlik" olmadığını gösterecek.</p>

            {/* BÖLÜM 1: BESMELE VE NİYET */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Her İşin Başı: Besmele</h2>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-2xl font-arabic m-0">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
              <p className="text-lg mt-2 m-0">Bismillâhirrahmânirrahîm</p>
            </div>
            
            <p className="mb-4">Bu üç kelime, sıradan bir hareketi kutsala bağlar.</p>
            
            <p className="mb-4">Besmele, "Ben bu işi kendi gücümle değil, Allahın adıyla, Onun izniyle, Onun yardımıyla yapıyorum" demektir.</p>
            
            <p className="mb-8">Sıradan bir yıkanma eylemini ibadete çeviren ilk adım budur.</p>

            <h3 className="text-xl font-bold text-[#0D4F4F] mb-4">Sonra Niyet</h3>
            
            <p className="mb-4">Niyet, kalbin bir işe yönelmesidir.</p>
            
            <p className="mb-4">Besmeleden sonra, kalbinden geçir: <strong>"Allah rızası için abdest alıyorum."</strong></p>
            
            <p className="mb-4">Formül ezberleme. Söylemen de gerekmez. Sadece kalbinin ne için abdest aldığını bilmesi yeterli.</p>
            
            <div className="bg-[#C9A962]/20 border border-[#C9A962] rounded-xl p-4 my-6">
              <p className="font-bold text-[#0D4F4F] mb-2">Niyetsiz Abdest</p>
              <p className="text-sm text-gray-700 m-0">Niyetsiz yapılan yıkama, abdest değildir—sadece el yüz yıkamaktır. Aynı su, aynı hareket... ama niyet olmayınca ibadet olmuyor. Fark, kalptedir.</p>
            </div>

            {/* BÖLÜM 2: ABDEST NASIL ALINIR */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Abdest Nasıl Alınır?</h2>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Ey iman edenler! Namaza kalkacağınız zaman yüzlerinizi, dirseklere kadar ellerinizi yıkayın, başlarınızı meshedin ve topuklara kadar ayaklarınızı yıkayın.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Mâide, 5/6)</footer>
            </blockquote>
            
            <div className="space-y-3 mb-8">
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#0D4F4F] text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <p className="font-bold text-[#0D4F4F] m-0">Besmele ve Niyet</p>
                    <p className="text-sm text-gray-600 m-0">"Bismillâhirrahmânirrahîm." Kalbinden: "Allah rızası için abdest alıyorum."</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#0D4F4F] text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <p className="font-bold text-[#0D4F4F] m-0">Eller</p>
                    <p className="text-sm text-gray-600 m-0">Bileklere kadar üç kez yıka. Parmak aralarını ovala.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#0D4F4F] text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <p className="font-bold text-[#0D4F4F] m-0">Ağız</p>
                    <p className="text-sm text-gray-600 m-0">Sağ avuçla ağza su al, iyice çalkala. Üç kez.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#0D4F4F] text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  <div>
                    <p className="font-bold text-[#0D4F4F] m-0">Burun</p>
                    <p className="text-sm text-gray-600 m-0">Sağ avuçla burna su çek, sol elle temizle. Üç kez.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#0D4F4F] text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
                  <div>
                    <p className="font-bold text-[#0D4F4F] m-0">Yüz</p>
                    <p className="text-sm text-gray-600 m-0">Alnın saç bitiminden çene altına, kulaktan kulağa tüm yüzü yıka. Üç kez.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#0D4F4F] text-white rounded-full flex items-center justify-center font-bold text-sm">6</span>
                  <div>
                    <p className="font-bold text-[#0D4F4F] m-0">Kollar</p>
                    <p className="text-sm text-gray-600 m-0">Sağ kolu parmak uçlarından dirsek dahil yıka. Üç kez. Sonra sol kol.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#0D4F4F] text-white rounded-full flex items-center justify-center font-bold text-sm">7</span>
                  <div>
                    <p className="font-bold text-[#0D4F4F] m-0">Baş</p>
                    <p className="text-sm text-gray-600 m-0">Islak ellerle başı mesh et (sıvazla). Bir kez.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#0D4F4F] text-white rounded-full flex items-center justify-center font-bold text-sm">8</span>
                  <div>
                    <p className="font-bold text-[#0D4F4F] m-0">Kulaklar</p>
                    <p className="text-sm text-gray-600 m-0">Islak parmaklarla kulakların içini ve dışını mesh et. Bir kez.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#0D4F4F] text-white rounded-full flex items-center justify-center font-bold text-sm">9</span>
                  <div>
                    <p className="font-bold text-[#0D4F4F] m-0">Ense</p>
                    <p className="text-sm text-gray-600 m-0">Ellerin dışıyla enseyi mesh et. Bir kez.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#0D4F4F] text-white rounded-full flex items-center justify-center font-bold text-sm">10</span>
                  <div>
                    <p className="font-bold text-[#0D4F4F] m-0">Ayaklar</p>
                    <p className="text-sm text-gray-600 m-0">Sağ ayağı topuk dahil yıka. Parmak aralarını ovala. Üç kez. Sonra sol ayak.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0D4F4F] text-white rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-white text-[#0D4F4F] rounded-full flex items-center justify-center font-bold text-sm">✓</span>
                  <div>
                    <p className="font-bold m-0">Bitiriş</p>
                    <p className="text-sm opacity-80 m-0">Kelime-i Şehadet getir. Abdest tamam.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BÖLÜM 3: KALBEN GEÇİRMEK */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Kalben Geçirmek</h2>
            
            <p className="mb-4">Abdest alırken, o an ne yaptığının farkında olmak. Sadece mekanik yıkama değil—her uzuvda, o uzvun Allaha olan bağını hissetmek.</p>
            
            <p className="mb-6">Formül yok. Ezber yok. Sadece kalbinin sesi.</p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-[#C9A962]/10 border-l-4 border-[#C9A962] rounded-r-xl p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">Yüzünü yıkarken:</p>
                <p className="text-sm text-gray-700 m-0 italic">"Ya Rabbi, bu yüz Senin huzuruna çıkacak. Sana secde edecek. Bu yüzü nurlandır."</p>
              </div>
              
              <div className="bg-[#C9A962]/10 border-l-4 border-[#C9A962] rounded-r-xl p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">Ellerini yıkarken:</p>
                <p className="text-sm text-gray-700 m-0 italic">"Ya Rabbi, bu eller Senin rızan için çalışsın. Hayır işlesin. Kötülükten uzak dursun."</p>
              </div>
              
              <div className="bg-[#C9A962]/10 border-l-4 border-[#C9A962] rounded-r-xl p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">Ayaklarını yıkarken:</p>
                <p className="text-sm text-gray-700 m-0 italic">"Ya Rabbi, bu ayaklar Senin rızana giden yolda yürüsün. Harama gitmesin."</p>
              </div>
              
              <div className="bg-[#C9A962]/10 border-l-4 border-[#C9A962] rounded-r-xl p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">Başını mesh ederken:</p>
                <p className="text-sm text-gray-700 m-0 italic">"Ya Rabbi, bu baş Senin rahmetinin gölgesinde olsun. Düşüncelerim Sana yönelsin."</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#0D4F4F] mb-4">Zamanla Ne Olacak?</h3>
            
            <p className="mb-4">Başta bu düşünceleri bilinçli olarak geçirmen gerekiyor. Her uzuvda durup, kalpten o düşünceyi hissetmen lazım. Yavaş olacak.</p>
            
            <p className="mb-4">Ama insan beyni harika bir şey yapıyor: Tekrar eden düşünceler, sinir yolları oluşturuyor. Her tekrarda bu yollar güçleniyor.</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">2-3 ay sonra düşünce, kalbe yerleşiyor.</p>
            </div>
            
            <p className="mb-4">Artık bilinçli olarak düşünmene gerek kalmıyor. Yüzünü yıkamaya başladığın an, kalbin otomatik olarak o hissi üretiyor.</p>
            
            <p className="mb-4">Sporcular buna "kas hafızası" diyor. Hafızlar buna "hıfz" diyor.</p>
            
            <p className="mb-8">Senin abdestin de böyle olacak. Başta yavaş ve bilinçli. Sonra <strong>hızlı ama derin</strong>.</p>

            {/* BÖLÜM 4: SUYUN SIRRI */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Suyun Sırrı</h2>
            
            <p className="mb-4">Peygamber Efendimiz (s.a.v.) bir gün sahabeden Sadın (r.a.) abdest aldığını gördü. Sad suyu bolca kullanıyordu.</p>
            
            <p className="mb-4">Efendimiz sordu: <strong>"Bu israf nedir?"</strong></p>
            
            <p className="mb-4">Sad şaşırdı: "Abdestte de israf olur mu ya Rasûlallah?"</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Evet, akan bir nehir kenarında olsan bile!
              <footer className="text-sm mt-2 not-italic text-gray-600">(İbn Mâce, Tahâret 48)</footer>
            </blockquote>
            
            <p className="mb-4">Akan nehir. Sonsuz su. Mantıken "israf" kavramı geçersiz görünüyor.</p>
            
            <p className="mb-4">Ama Peygamber Efendimiz "Evet, israf olur" diyor. Neden?</p>
            
            <h3 className="text-xl font-bold text-[#0D4F4F] mb-4">Dikkat: Gizli Anahtar</h3>
            
            <p className="mb-4">Peygamberimiz (s.a.v.) yaklaşık yarım litre ile bir litre arası su ile abdest alırdı.</p>
            
            <p className="mb-4">Bu kadar az suyla abdest almak, <strong>dikkati zorunlu kılıyor</strong>.</p>
            
            <p className="mb-4">Musluk sonuna kadar açık, su şırıl şırıl akarken dikkat dağılıyor. "Bir an önce bitsin" moduna giriyorsun.</p>
            
            <p className="mb-4">Az suyla abdest alırken ise dikkat etmek zorundasın. Her damlayı hesaplamak, her hareketi bilinçli yapmak gerekiyor.</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6">
              <p className="text-lg font-bold mb-2">Dikkat = Bilinç = Kalbin Katılımı</p>
              <p className="m-0">Dikkatsiz abdestte sadece beden yıkanıyor. Dikkatli abdestte kalp, ruh ve beden birlikte arınıyor.</p>
            </div>

            {/* BÖLÜM 5: BİLİMİN KEŞFİ */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Tekrar, Beyin ve Kalp</h2>
            
            <p className="mb-4">Nörobilim, beynin ömür boyu değişebildiğini keşfetti. Buna "nöroplastisite" deniyor.</p>
            
            <p className="mb-4">Tekrar eden bir davranış, beyinde sinir yolları oluşturur. Her tekrarda bu yollar güçlenir. Yaklaşık 66 gün sonra davranış "alışkanlık" haline gelir.</p>
            
            <h3 className="text-xl font-bold text-[#0D4F4F] mb-4">Kalp-Beyin Bağlantısı</h3>
            
            <p className="mb-4">HeartMath Enstitüsünün 30 yıllık araştırmaları şaşırtıcı bir şey ortaya koydu:</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">Kalp beyne, beynin kalbe gönderdiğinden daha fazla sinyal gönderiyor.</p>
            </div>
            
            <p className="mb-4">Kalp sadece pompa değil. Kalbin kendi zekası var.</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Kalpler ancak Allahı zikretmekle huzur bulur.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Rad, 13/28)</footer>
            </blockquote>
            
            <h3 className="text-xl font-bold text-[#0D4F4F] mb-4">Abdestte Ne Oluyor?</h3>
            
            <div className="space-y-4 mb-8">
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">İlk Aşama (1-3 hafta)</p>
                <p className="text-sm text-gray-600 m-0">Bilinçli çaba gerekiyor. Yavaş. Zor. Her adımı düşünmen lazım. Ama her tekrarda beyinde yeni sinir yolları oluşuyor.</p>
              </div>
              <div className="bg-gray-200 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">İkinci Aşama (3-9 hafta)</p>
                <p className="text-sm text-gray-600 m-0">Davranış otomatikleşmeye başlıyor. Sırayı biliyorsun. Düşünceler daha kolay geliyor. Ama hâlâ bilinçli dikkat gerekiyor.</p>
              </div>
              <div className="bg-[#0D4F4F]/20 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">Üçüncü Aşama (9+ hafta)</p>
                <p className="text-sm text-gray-600 m-0">Dönüşüm burada. Beyin yolları güçlendi. Kalp-beyin uyumu oluştu. Abdest hızlanıyor ama kalite düşmüyor. Çünkü kalp "öğrenmiş".</p>
              </div>
            </div>

            {/* BÖLÜM 6: HADİSLERİN IŞIĞINDA */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Hadislerin Işığında</h2>
            
            <div className="bg-[#C9A962]/20 border border-[#C9A962] rounded-xl p-6 my-6">
              <h4 className="font-bold text-[#0D4F4F] mb-3">Nur Hadisi</h4>
              <blockquote className="italic text-gray-700 m-0">
                "Benim ümmetim kıyâmet gününde abdest izlerinden dolayı 'Yüzleri nurlu, elleri ve ayakları bembeyaz olanlar' diye çağrılacaklardır."
              </blockquote>
              <p className="text-sm text-gray-600 mt-2 m-0">(Buhârî, Vudû 3; Müslim, Tahâret 35)</p>
            </div>
            
            <p className="mb-4">Kıyamet günü milyarlarca insan toplanacak. O kalabalıkta Peygamberimiz (s.a.v.) ümmetini nasıl tanıyacak?</p>
            
            <p className="mb-8"><strong>Abdest izlerinden.</strong> Yüzündeki nur, ellerindeki parlaklık, ayaklarındaki beyazlık... Dünyada aldığın her abdest, ahirette seni işaretliyor.</p>
            
            <div className="bg-[#C9A962]/20 border border-[#C9A962] rounded-xl p-6 my-6">
              <h4 className="font-bold text-[#0D4F4F] mb-3">Günahların Dökülmesi</h4>
              <blockquote className="italic text-gray-700 m-0">
                "Bir Müslüman abdest aldığı zaman, yüzünü yıkarken gözleriyle işlediği her günah abdest suyu ile dökülür gider. Ellerini yıkadığında elleriyle işlediği günahlar dökülür. Ayaklarını yıkadığında ayaklarıyla işlediği günahlar akıp gider."
              </blockquote>
              <p className="text-sm text-gray-600 mt-2 m-0">(Müslim, Tahâret 32)</p>
            </div>
            
            <p className="mb-8">Her abdest, yeni bir başlangıç. Her abdest, af kapısı. Günde beş vakit namaz, günde en az beş arınma fırsatı.</p>
            
            <div className="bg-[#C9A962]/20 border border-[#C9A962] rounded-xl p-6 my-6">
              <h4 className="font-bold text-[#0D4F4F] mb-3">Öfke ve Abdest</h4>
              <blockquote className="italic text-gray-700 m-0">
                "Gazap şeytandandır, şeytan ateşten yaratılmıştır, ateş ise su ile söndürülür. Biriniz öfkelendiği zaman abdest alsın."
              </blockquote>
              <p className="text-sm text-gray-600 mt-2 m-0">(Ebû Dâvûd, Edeb 4)</p>
            </div>
            
            <p className="mb-4">Öfke, ateş gibi. İçini yakar, çevreni yakar.</p>
            
            <p className="mb-4">Peygamberimiz (s.a.v.) reçete veriyor: <strong>Abdest al.</strong></p>
            
            <p className="mb-8">Ama sadece öfke değil. Huzursuz olduğunda, kafan karışık olduğunda, içın sıkıldığında—abdest al. Su, Allahın şifa aracı. Bedene de ruha da.</p>

            {/* DİRENCİN SESİ */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Direncin Sesi vs. Hakikat</h2>
            
            <div className="space-y-3 mb-8">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">"Vaktim yok, bilinçli abdest alamam."</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">2-3 ay sonra hızlı ama derin abdest alabileceksin. Bu bir yatırım.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">"Her abdeste mi böyle yapacağım?"</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">Evet. Ama zamanla kolaylaşacak. Kalbin öğrenecek.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 m-0">"Bunlar ek külfet değil mi?"</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-700 m-0">Abdest zaten alıyorsun. Sadece biraz daha bilinçli. Fazladan bir şey yok.</p>
                </div>
              </div>
            </div>

            {/* KAPANIŞ */}
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Şimdi Ne Yapmalısın?</h2>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Ancak mümin kimse, devamlı abdestli bulunmaya gayret eder.
              <footer className="text-sm mt-2 not-italic text-gray-600">(İbn Mâce, Tahâret 4)</footer>
            </blockquote>
            
            <p className="mb-4">Bu yazıyı okudun. Bilgi aldın. Ama bilgi, uygulanmadıkça sadece yüktür.</p>
            
            <p className="mb-4">Bugünden itibaren:</p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Her abdeste Besmele ile başla</li>
              <li>Niyeti kalbinden geçir</li>
              <li>Her uzuvda bir an dur—kalbini kat</li>
              <li>Suyu ölçülü kullan, her damlaya dikkat et</li>
            </ul>
            
            <p className="mb-4">İlk hafta zor olacak. İkinci hafta daha kolay. Üçüncü haftada fark edeceksin—bir şeyler değişiyor.</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">Bu, arınmanın ilk meyvesi.</p>
              <p className="mt-2 m-0 opacity-80">Yolculuk devam ediyor.</p>
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
