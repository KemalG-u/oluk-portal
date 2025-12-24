import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Sır | OLUK',
  description: 'Senin ve Rabbin arasında. Gizlilik prensibi ve ameli korumanın yolu.',
};

export default function SirPage() {
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
          Sır
        </h1>

        <p className="text-xl text-gray-600 italic mb-6">Senin ve Rabbin arasında.</p>

        <div className="flex items-center gap-4 text-gray-500 mb-8">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>12 dk</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>Okuma</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <article className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6">Açılış</h2>
            
            <p className="mb-4">Bir yolculuğa çıkmak üzeresin.</p>
            
            <p className="mb-4">Bir karar verdin. Değişmek istiyorsun. Arınmak istiyorsun. Daha iyi bir insan olmak istiyorsun.</p>
            
            <p className="mb-4">Ve içinden bir ses diyor: <em>Bunu birine söylemeli miyim?</em></p>
            
            <p className="mb-4">Belki yakınlarına. Belki arkadaşlarına. Belki sosyal medyaya.</p>
            
            <p className="mb-8">Bu yazı, o soruya cevap. Ve cevap seni şaşırtabilir.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Kuranın Ölçüsü</h2>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Sadakaları açıktan verirseniz ne güzel! Ama onları gizler ve fakirlere gizlice verirseniz, bu sizin için daha hayırlıdır. Allah da bu sebeple günahlarınızdan bir kısmını bağışlar. Allah, yaptığınız her şeyden haberdardır.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Bakara Suresi, 271)</footer>
            </blockquote>
            
            <p className="mb-4">Dikkat et: Açıktan vermek de güzel. Ama gizli vermek <em>daha hayırlı</em>.</p>
            
            <p className="mb-4">Neden?</p>
            
            <p className="mb-4">Çünkü gizlilik, ihlası korur. Gizlilik, ameli sadece Allah için yapmayı kolaylaştırır.</p>
            
            <p className="mb-8">Ve ayetin sonunda bir hatırlatma: <strong>Allah, yaptığınız her şeyden haberdardır.</strong> Yani sen gizlesen de, O biliyor. Onun bilmesi yeter.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Peygamberin Uyarısı</h2>
            
            <p className="mb-4">Resulullah (s.a.v.) buyurdu:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Yedi kişi vardır ki Allah onları, kendine mahsus olandan başka hiçbir gölgenin bulunmadığı günde gölgesinde barındırır...
              <footer className="text-sm mt-2 not-italic text-gray-600">(Buhari; Müslim)</footer>
            </blockquote>
            
            <p className="mb-4">Ve bu yedi kişiden biri:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              ...Bir sadaka verip de onu, sol elinin verdiğini sağ eli bilmeyecek kadar gizleyen kişi...
            </blockquote>
            
            <p className="mb-4">Düşün: Sol elin verdiğini sağ el bilmeyecek. Bu ne kadar gizlilik? <strong>Bu kadar.</strong></p>
            
            <p className="mb-4">Bir başka hadiste Peygamber Efendimiz (s.a.v.) buyurdu:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Ümmetim için gizli şirk ve şehvetten kaygı duyuyorum.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Müsned, IV, 124)</footer>
            </blockquote>
            
            <p className="mb-4">Sahabe sordu: Sizden sonra da hala şirk olacak mı?</p>
            
            <p className="mb-4">Efendimiz:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Evet, fakat güneşe, aya, taşa ve puta tapmak şeklinde olmayacak. İnsanlar ibadetlerini riya için yapacaklar.
            </blockquote>
            
            <p className="mb-8"><strong>Riya:</strong> Gösteriş. İbadeti Allah için değil, insanların görmesi için yapmak. Ve bu, gizli şirk olarak tanımlanıyor.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Hz. Lokmanın Oğluna Öğüdü</h2>
            
            <p className="mb-4">Hz. Lokman (a.s.), oğluna şöyle dedi:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Riyakarlık, amelinin ecrini dünya yurdunda istemendir. Halbuki iyi insanların ameli ahiret için olmalıdır.
            </blockquote>
            
            <p className="mb-4">Oğlu sordu: Riyanın ilacı nedir?</p>
            
            <p className="mb-4">Hz. Lokman:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Ameli gizlemektir.
            </blockquote>
            
            <p className="mb-4">İki kural:</p>
            
            <div className="space-y-3 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">1.</strong> Açıktan yapman gereken şeyi (farzlar) ihlasla yap.
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">2.</strong> Gizli yapabileceğin şeyi, gizli tut.
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Alimlerin Sözleri</h2>
            
            <p className="mb-4"><strong>İmam-ı Rabbani</strong>, Mektubatın 59. Mektubunda:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Bilmiş olasın ki, ebedi necatın müyesser olması için insana şu üç şey mutlaka lazımdır: İlim, amel, ihlas.
            </blockquote>
            
            <p className="mb-4">İlmi ve ameli öğrenebilirsin. Ama ihlas? O, nefisle mücadele ister. Çaba ister. Ve gizlilik, o ihlası korumanın en güçlü yollarından biri.</p>
            
            <p className="mb-4"><strong>İmam Gazali</strong>, İhyau Ulumid-Dinde riyayı şöyle tanımlar:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Riya, Allaha itaat eder görünerek kulların takdirini kazanmayı istemektir. Amellerde esas olan gizliliktir. Çünkü gizlilik, ihlasli olmayı ve riyadan kurtulmayı sağlar.
            </blockquote>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Bilimin Keşfi</h2>
            
            <p className="mb-4">Şimdi yedi yüz yıl sonraya gel.</p>
            
            <p className="mb-4">2009 yılı. New York Üniversitesi. Peter Gollwitzer ve meslektaşları, dört farklı deney yapıyorlar. Sonuçları Psychological Science dergisinde yayınlıyorlar.</p>
            
            <p className="mb-4">Hukuk öğrencileriyle yapılan deneyde, avukat olmak isteyen öğrencilere haftalık çalışma niyetleri soruldu. Bir grup, niyetlerini deneyciye söyledi. Diğer grup, anonim kaldı.</p>
            
            <p className="mb-4">Sonuç?</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">Niyetini açıklayan öğrenciler, DAHA AZ çalıştı.</p>
            </div>
            
            <p className="mb-4">Neden?</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Başkaları bir bireyin kimlik hedefiyle ilgili davranışsal niyetini fark ettiğinde, bu durum bireye, arzuladığı kimliğe zaten sahip olduğuna dair erken bir his verir.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Gollwitzer ve ark., 2009)</footer>
            </blockquote>
            
            <p className="mb-4">Yani: Avukat olacağım dediğinde, beyin sanki zaten avukat olmuşsun gibi hissediyor. Ve çalışma motivasyonu düşüyor.</p>
            
            <h3 className="text-xl font-bold text-[#0D4F4F] mb-4 mt-8">Peki kime söylemeli?</h3>
            
            <p className="mb-4">2019da Ohio State Üniversitesinden Howard Klein ve meslektaşları yeni bir çalışma yayınladı:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Hedeflerini, kendilerinden daha yüksek statüde algıladıkları birine söyleyen kişiler, hem daha yüksek hedef bağlılığı hem de daha iyi performans gösterdi.
              <footer className="text-sm mt-2 not-italic text-gray-600">(Klein ve ark., 2019)</footer>
            </blockquote>
            
            <p className="mb-8">Yani: Eğer söyleyeceksen, senden daha yüksek statüde gördüğün birine söyle. Bir mentor. Bir hoca. Saygı duyduğun biri.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Ortak Hakikat</h2>
            
            <p className="mb-4">Şimdi iki dünyayı yan yana koy:</p>
            
            <div className="space-y-3 mb-8">
              <div className="bg-[#0D4F4F]/10 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">Kuran</p>
                <p className="text-sm m-0">Gizlice verirseniz sizin için daha hayırlıdır.</p>
              </div>
              <div className="bg-[#C9A962]/20 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">Peygamber Efendimiz</p>
                <p className="text-sm m-0">Sol elinin verdiğini sağ eli bilmeyecek kadar gizle.</p>
              </div>
              <div className="bg-[#0D4F4F]/10 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">Hz. Lokman</p>
                <p className="text-sm m-0">Riyanın ilacı ameli gizlemektir.</p>
              </div>
              <div className="bg-[#C9A962]/20 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">Gazali</p>
                <p className="text-sm m-0">Amellerde esas olan gizliliktir.</p>
              </div>
              <div className="bg-[#0D4F4F]/10 rounded-lg p-4">
                <p className="font-bold text-[#0D4F4F] mb-1">Bilim (2009)</p>
                <p className="text-sm m-0">Niyetini açıklayan daha az çalışıyor.</p>
              </div>
            </div>
            
            <p className="mb-8">Aynı hakikat. Farklı diller. <strong>Gizlilik, ameli korur.</strong></p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Senin İçin</h2>
            
            <p className="mb-4">Bu platformda bir yolculuğa çıkıyorsun.</p>
            
            <p className="mb-4">Ve sana şunu söylemem gerek: <strong>Bu yolculuğu herkese duyurma.</strong></p>
            
            <p className="mb-4">Neden mi?</p>
            
            <div className="space-y-3 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">1. Açıklama, ameli zayıflatır.</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">Bilim bunu söylüyor. Beyin, söyledim ile yaptım arasındaki farkı bulanıklaştırıyor.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">2. Gizlilik, ihlası korur.</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">Tasavvuf bunu söylüyor. Başkalarının takdiri, amelin safiyetini bozabilir.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">3. Erken paylaşım, beklentiye dönüşür.</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">Ne oldu, devam ediyor musun? soruları, baskı yaratır. Gizlilik, seni bu döngüden korur.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Pratik</h2>
            
            <div className="space-y-3 mb-8">
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <strong className="text-[#0D4F4F]">1. Herkese duyurma.</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">Sosyal medyaya Arınma yolculuğuna başladım! yazmak, motivasyonunu düşürebilir.</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <strong className="text-[#0D4F4F]">2. Bir kişiye söyle - ama doğru kişiye.</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">Eğer söyleyeceksen, saygı duyduğun, senden daha tecrübeli birine söyle.</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <strong className="text-[#0D4F4F]">3. Sır olarak tut.</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">Senin ve Rabbin arasında. Başkalarının bilmesine gerek yok.</p>
              </div>
              <div className="bg-[#0D4F4F]/5 border border-[#0D4F4F]/20 rounded-lg p-4">
                <strong className="text-[#0D4F4F]">4. İlerlemeni paylaşma, sonuçlarını paylaş.</strong>
                <p className="text-sm text-gray-600 mt-1 mb-0">Meditasyon yapıyorum yerine, değişimini göster. Sözle değil, halle.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Son Söz</h2>
            
            <p className="mb-4">Bakara 271i hatırla:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              Allah, yaptığınız her şeyden haberdardır.
            </blockquote>
            
            <p className="mb-4">Sen gizlesen de, O biliyor.</p>
            
            <p className="text-xl font-semibold text-[#0D4F4F]">Onun bilmesi yeter.</p>
            
          </article>
        </div>

        <button className="w-full bg-[#0D4F4F] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#0D4F4F]/90 transition-colors mb-6">
          <CheckCircle className="w-5 h-5" />
          Dersi Tamamladım
        </button>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500 mb-2">Sıradaki Ders</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#0D4F4F]">Tuzak</span>
            <Link 
              href="/dersler/arinma/kapi/tuzak"
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
