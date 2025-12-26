import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Bedenin Gizli Haritası | OLUK',
  description: 'Beden, hafızadır. Her sıkıntınız, korkunuz ve çatışmanız bedeninizde bir yer bulmuştur.',
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
          <span className="text-[#0D4F4F] font-medium">DERS</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0D4F4F] mb-4">
          Bedenin Gizli Haritası
        </h1>

        <p className="text-xl text-gray-600 italic mb-6">Beden, hafızadır. Her sıkıntınız, korkunuz ve çatışmanız bedeninizde bir yer bulmuştur.</p>

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
            
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6">Bir Tesadüf Değil</h2>
            
            <p className="mb-4">Neden kaygılı insanlar sıkça boyun ağrısından yakınır?</p>
            
            <p className="mb-4">Neden depresyondaki kişiler her şey ağır gelir?</p>
            
            <p className="mb-4">Neden öfkeli kimse dişlerini sıkar?</p>
            
            <p className="mb-8">Bu tesadüf değil. Bu, bedenin dil konuştuğunun kanıtı.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Çöpten Çölü Yapmak</h2>
            
            <p className="mb-4">Wilhelm Reich, Freud'un en saygın öğrencilerinden biriydi. 1920'lerde yaptığı araştırmada şunu keşfetti:</p>
            
            <p className="mb-4">İnsanın duygusal travmaları—bastırılmış öfke, korku, üzüntü—bedeninde <strong>fiziksel gerginlik</strong> haline dönüşür.</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Hiçbir duygusal travma bedensel travma olmadan ya da bedensel travma hiç duygusal travma olmadan gerçekleşmez.
              <footer className="text-sm mt-2 not-italic text-gray-600">— Wilhelm Reich</footer>
            </blockquote>
            
            <p className="mb-8">Reich bunu "kas zırhı" olarak adlandırdı. Sanki beden, duygulardan korunmak için kendisini zırhla kaplayacakmış gibi.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Soracak Sorular</h2>
            
            <p className="mb-4">Bedenin bu gizli haritasını okumak için sorular sormalısın:</p>
            
            <div className="space-y-3 mb-8">
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <p className="font-semibold text-[#0D4F4F] m-0">Nerede gerginlim?</p>
                <p className="text-sm text-gray-600 mt-1 m-0">Omuzlar? Çene? Mide? Göğüs?</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <p className="font-semibold text-[#0D4F4F] m-0">Hangi duyguda bu gerginlik artar?</p>
                <p className="text-sm text-gray-600 mt-1 m-0">Kaygı? Öfke? Utanç? Yalnızlık?</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <p className="font-semibold text-[#0D4F4F] m-0">Bu bölgeyi serbest bıraktığımda ne oluyor?</p>
                <p className="text-sm text-gray-600 mt-1 m-0">Ağlamak mı geliyor? Sesini çıkarmak mı? Öfke mi?</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <p className="font-semibold text-[#0D4F4F] m-0">Çocukluğumda ne oldu bu bölgede?</p>
                <p className="text-sm text-gray-600 mt-1 m-0">Çarpılmışım, itmişler, bastırılmışım?</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Ciltege Yazılı Hikayeleri</h2>
            
            <p className="mb-4">Başında sıkı bir bağlılık—boyun ağrısının kültü.</p>
            
            <p className="mb-4">İnsanlar söyler: "Beni boyun ağrılarım bitiriyor."</p>
            
            <p className="mb-4">Ama daha derin baksan, neler bulursun?</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6">
              <p className="text-lg font-medium m-0">"Kafamı yukarı kaldırıp kendim olamadım. Her zaman bu istedikleri gibi yaptım. Boynum ağrıyor çünkü istediklerimi söylemeye cesaret edemedim."</p>
            </div>
            
            <p className="mb-4">Göğüs sıkıntısı?</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6">
              <p className="text-lg font-medium m-0">"Sevgimizi saklamak, hislerimizi gizlemek zorunda kaldık. Şimdi göğsümüz, o bastırılan sevginin mezarı."</p>
            </div>
            
            <p className="mb-4">Bel ağrısı?</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6">
              <p className="text-lg font-medium m-0">"Sorumlulukların yükü, benim sırtımda. Bellim, taşıdığı yükün altında kırılıyor."</p>
            </div>
            
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Peter A. Levine'in Keşfi</h2>
            
            <p className="mb-4">Travma uzmanı Peter A. Levine, bir çok araştırma sonrasında anladı ki:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Travma bedenin içinde kalmaz sadece—bedenin kaslarına, kemiklerine, nörolojisine yazılır. Dış dünyada bir tehdit seçilmediğinde, içyüzü bir fizyolojik cezalandırmaya dönüşür.
            </blockquote>
            
            <p className="mb-8">Yani, duygularımızı bastırırız, ama kaçacak yeri olmayan bu enerji, bedenimizin içinde hapus kalır ve orada hastalığa dönüşür.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Ruh-Beden İlişkisi İslam'da</h2>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Bileyin ki, bir bedenin içinde bir ruh vardır. Ruh sağlı ise, bütün beden sağlı olur. Ruh hasta ise, bütün beden hasta olur.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Sahihi Buhari, Kitabul İman)</footer>
            </blockquote>
            
            <p className="mb-4">Hadis çok açık. Ruh (kalp, bilinç, ruh hali) hasta olunca, beden sağlıklı olamaz.</p>
            
            <p className="mb-8">Dolayısıyla, bedeni iyileştirmek istiyorsan, önce ruhu—yani duyguları, düşünceleri, inançları—temizlemelisin.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Bedenin Haritası ve Duygular</h2>
            
            <div className="space-y-3 mb-8">
              <div className="bg-white border-2 border-[#0D4F4F] rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">👁️ Gözler</p>
                <p className="text-sm text-gray-600 m-0"><strong>Bastırılan duygular:</strong> Gerçeği görmek istememe, kaçış. <strong>Semptom:</strong> Göz sorunu, göz yorgunluğu, bulanık görüş.</p>
              </div>
              <div className="bg-white border-2 border-[#0D4F4F] rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">👂 Kulaklar</p>
                <p className="text-sm text-gray-600 m-0"><strong>Bastırılan duygular:</strong> Duymak istememek, önemli sesleri görmezden gelme. <strong>Semptom:</strong> Kulak ağrısı, işitme zorlukları, tinnitus.</p>
              </div>
              <div className="bg-white border-2 border-[#0D4F4F] rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">🗣️ Ağız/Boğaz</p>
                <p className="text-sm text-gray-600 m-0"><strong>Bastırılan duygular:</strong> Kendini ifade edememe, söyleyemediklerim, bastırılan gerçekler. <strong>Semptom:</strong> Boğaz ağrısı, nutuk, hastalık, dişçi sorunları.</p>
              </div>
              <div className="bg-white border-2 border-[#0D4F4F] rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">📍 Boyun/Omuzlar</p>
                <p className="text-sm text-gray-600 m-0"><strong>Bastırılan duygular:</strong> Kontrol, katılık, kendine hükmetme. <strong>Semptom:</strong> Boyun ağrısı, omuz gerginliği, enkıyaj.</p>
              </div>
              <div className="bg-white border-2 border-[#0D4F4F] rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">❤️ Göğüs/Kalp</p>
                <p className="text-sm text-gray-600 m-0"><strong>Bastırılan duygular:</strong> Sevgi, güven, açılma, vulnerability. <strong>Semptom:</strong> Göğüs sıkıntısı, palpitasyon, dispne.</p>
              </div>
              <div className="bg-white border-2 border-[#0D4F4F] rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">🫀 Mide</p>
                <p className="text-sm text-gray-600 m-0"><strong>Bastırılan duygular:</strong> Korku, endişe, hazımsızlık, kırılan güven. <strong>Semptom:</strong> Mide ağrısı, hazımsızlık, ülser.</p>
              </div>
              <div className="bg-white border-2 border-[#0D4F4F] rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">🦵 Bel/Kalça</p>
                <p className="text-sm text-gray-600 m-0"><strong>Bastırılan duygular:</strong> Sorumluluk, desteği kaybetme, stabilite. <strong>Semptom:</strong> Bel ağrısı, sakroiliyak ağrısı.</p>
              </div>
              <div className="bg-white border-2 border-[#0D4F4F] rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-2">🦶 Bacaklar/Ayaklar</p>
                <p className="text-sm text-gray-600 m-0"><strong>Bastırılan duygular:</strong> Hareket etme özgürlüğü, ilerleme, güvenlik. <strong>Semptom:</strong> Bacak ağrısı, kayak, stomata.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Duygu Farkındalığı: İlk Adım</h2>
            
            <p className="mb-4">Sadece "Benim boynum ağrıyor" demek yetmiyor.</p>
            
            <p className="mb-4">Sorması gereken soru: "Bu ağrı bana ne söylemek istiyor?"</p>
            
            <p className="mb-8">Bedeni dinlemek, ruhla konuşmak demektir.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Pratik: Beden Taraması</h2>
            
            <p className="mb-4">Sessiz bir yerde otur. Gözlerini kapat.</p>
            
            <div className="space-y-3 mb-8">
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <p className="font-semibold text-[#0D4F4F] m-0">Baş</p>
                <p className="text-sm text-gray-600 mt-1 m-0">Ağrı? Gerginlik? Basınç? Nerede?</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <p className="font-semibold text-[#0D4F4F] m-0">Boyun & Omuzlar</p>
                <p className="text-sm text-gray-600 mt-1 m-0">Genelde burada gerginlik toplanır. Neden?</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <p className="font-semibold text-[#0D4F4F] m-0">Göğüs & Kalp</p>
                <p className="text-sm text-gray-600 mt-1 m-0">Açılmış mısın, yoksa kapalı mısın?</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <p className="font-semibold text-[#0D4F4F] m-0">Mide & Çöp</p>
                <p className="text-sm text-gray-600 mt-1 m-0">Rahat mısın, yoksa çevrilip dolaşmış mısın?</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <p className="font-semibold text-[#0D4F4F] m-0">Bel & Bacaklar</p>
                <p className="text-sm text-gray-600 mt-1 m-0">Kuvvetli mi? Güvensiz mi? Ağrılı mı?</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Somali Medeniyeti Söyler</h2>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Biraz bile hastalandığında, ilahın beni cezalandırdığını sanırım.
              <footer className="text-sm mt-2 not-italic text-gray-600">— Rumi, Mesnevî</footer>
            </blockquote>
            
            <p className="mb-4">Rumi diyordu ki hastalık, bir uyarıdır.</p>
            
            <p className="mb-4">Ama bu "ceza" değil—bu <strong>"dikkat et"</strong> anlamına gelir.</p>
            
            <p className="mb-8">Beden sana "Hey, bir şey ters gidiyor. Dinle beni" diyor.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Somluk: Duygu Serisini Açmak</h2>
            
            <p className="mb-4">Beden semptomlarını şöyle düşün:</p>
            
            <ol className="list-decimal list-inside space-y-2 mb-8 text-gray-700">
              <li><strong>Duygu</strong> (bilinç)—öfke, korku, utanç, kırılmışlık</li>
              <li><strong>Bastırma</strong> (kaçış)—"bunu hissetmeyeceğim"</li>
              <li><strong>Tutulma</strong> (kas zırhı)—beden gerginliği</li>
              <li><strong>Semptom</strong> (hastalık)—ağrı, rahatsızlık, hastalık</li>
            </ol>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Çıkış Noktası</h2>
            
            <p className="mb-4">Eğer halen aşamada geri dönersen:</p>
            
            <div className="space-y-3 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-bold text-green-700 mb-1">Duyguyu Fark Et</p>
                <p className="text-sm text-green-700 m-0">"Şu anda korkuyorum" veya "Öfkeliyim" demek, cesaret ister.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-bold text-green-700 mb-1">Bastırma Yok</p>
                <p className="text-sm text-green-700 m-0">Duyguyu bir kez daha bastırmaya çalışma. Orada bırak, akmasına izin ver.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-bold text-green-700 mb-1">Bedenle Konuş</p>
                <p className="text-sm text-green-700 m-0">"Omuzlarım, sizleri neden sıkı tutuyor? Ne söylemek istiyorsunuz?"</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-bold text-green-700 mb-1">Hareket Et</p>
                <p className="text-sm text-green-700 m-0">Dans et, yürü, vücudunu salını. Harcanan enerjiyi bedenden çıkar.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Son Söz</h2>
            
            <p className="mb-4">Bedenin çöpü yok.</p>
            
            <p className="mb-4">Her ağrı, her rahatsızlık, her semptom—hepsi bir mesajdır.</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">Bedenin dili, yalnızca ses değildir. Bunu anlayan, kendi içini temizler.</p>
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
            <span className="font-semibold text-[#0D4F4F]">Fiziksel Temizlik Nedir?</span>
            <Link 
              href="/dersler/arinma/fiziksel/1"
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
