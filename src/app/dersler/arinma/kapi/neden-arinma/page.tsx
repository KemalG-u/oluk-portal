import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Neden Arınma? | OLUK',
  description: 'Arınmanın neden ilk adım olduğunu, zan kavramının hayatımızdaki gizli etkisini ve bilimin aynı hakikate nasıl ulaştığını öğren.',
};

export default function NedenArinmaPage() {
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
          Neden Arınma?
        </h1>

        <div className="flex items-center gap-4 text-gray-500 mb-8">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>20 dk</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>Okuma</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <article className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6">Eşiği Geçerken</h2>
            
            <p className="mb-4">Usulsüz vusul olmaz der eskiler. Yolun başındayız. Bu ders, üç düğümü çözecek: 1400 yıllık bir sırrın, "zan" kavramının gündelik hayatımızdaki gizli kumandası; modern laboratuvarların, travma araştırmalarının aynı hakikate nasıl farklı kelimelerle diz çöktüğü ve arınma basamağını atlayıp doğrudan "uçmak" isteyenlerin çarptığı o sert duvarlar.</p>
            
            <p className="mb-8">Nihayetinde tüm kadim nehirlerin neden aynı denize döküldüğünü göreceksin: <strong>Önce temizlen, sonra yüksel.</strong> Bu bir tavsiye değil, varoluşsal bir mecburiyet.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Bir Ayna Olarak Zan</h2>
            
            <p className="mb-4">Attığın her adım, nefes aldığın her an, aslında bir aynanın karşısında duruyorsun. Ama bu ayna, sadece dış yüzünü değil, kalbinin en kuytu köşelerindeki beklentilerini yansıtıyor. OLUK'un üzerine inşa edildiği o sarsılmaz temel, bir Hadis-i Kudsi'de gizli:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              "Ben kulumun zannı üzerindeyim. Ben onunla beraberim o beni zikrettiğinde. Eğer beni kendi nefsinde zikrederse, Ben de onu kendi nefsimde zikrederim. Eğer beni bir toplulukta zikrederse, Ben de onu onlardan daha hayırlı bir toplulukta zikrederim."
              <footer className="text-sm mt-2 not-italic text-gray-600">(Buhari ve Müslim, Ebu Hureyre r.a.'dan)</footer>
            </blockquote>
            
            <p className="mb-4"><strong>Zan.</strong> Arapça'da iki yüzü var bu kelimenin: Yakîn—kesinlik; Şek—şüphe. Fakat bu mukaddes hitaptaki zan, bir tereddüt değil, bir itimat meselesidir. Beklentidir. Kesin bir inançtır.</p>
            
            <p className="mb-4">İbnü'l-Melik hazretleri meseleyi şöyle damıtır:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              "'Ben kulumun zannı üzerindeyim' sözünün manası şudur: Kulum Benden ne beklerse, ona göre muamele ederim. Onun Benden umduğunu yaparım."
            </blockquote>
            
            <p className="mb-8">Bugün modern psikoloji buna "kendini gerçekleştiren kehanet" diyerek meseleyi laboratuvar diline tercüme ediyor. Sen neye inanıyorsan, bilinçaltın o yöne doğru bir nehir gibi akmaya başlıyor. Rabbimiz 1400 yıl evvel bu pusulayı elimize vermiş. Merhamet beklersen merhamet, cömertlik beklersen cömertlik, af beklersen af bulursun.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Zan'ın Dört Damarı</h2>
            
            <p className="mb-4">İbn Ebi Cemre hazretleri, bu beklentinin hayatın dört ana damarında aktığını söyler.</p>
            
            <p className="mb-4"><strong>Dua.</strong> "Rabbim kabul edecek" diyen el, semaya başka türlü kalkar. "Nasılsa olmaz" diyen el ise kalkmadan düşer. İlki bir kapı çalar, ikincisi kapının varlığından bile şüphe eder.</p>
            
            <p className="mb-4"><strong>Tevbe.</strong> "Rabbim beni silecek" ferahlığı, insanı O'na koşturur. "Ben çok günahkârım, kabul olmaz" ağırlığı ise ayakları yere çaklar. Biri döner, biri yerinde sayar.</p>
            
            <p className="mb-4"><strong>İstiğfar.</strong> "Affedildim" huzuru, kalbi genişletir. "Ben affa layık değilim" fısıltısı ise kalbi daraltır. Biri nefes alır, biri boğulur.</p>
            
            <p className="mb-8"><strong>İbadet.</strong> "Kabul gördü" zarafeti, ameli nurlandırır. "Benim ibadetim ne ki" küçümsemesi ise ameli karartır. Biri verir, biri kendinden alır.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">İçerideki Vahşet</h2>
            
            <p className="mb-4">Ancak burada bir uçurum var. İbn Kayyım el-Cevziyye bizi o uçurumun kenarında uyarır:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              "Hüsn-ü zan ancak ihsan (güzel amel) ile birlikte olur. Güzel amel işleyen kimse Rabbine hüsn-ü zan besler ki, O ihsanına karşılık verecek, vaadinden dönmeyecek ve tevbesini kabul edecektir. Ama büyük günahlara, zulme ve muhalefetlere ısrar eden kişiye gelince; masiyetlerin, zulmün ve haramın verdiği vahşet, onu Rabbine hüsn-ü zan beslemekten alıkoyar."
            </blockquote>
            
            <p className="mb-4"><strong>Vahşet.</strong> Ne kadar ağır ve yerinde bir kelime. İçindeki o kirli tortu, suçluluk ve utanç yığınları, senin "iyiliği" bekleme kapasiteni felç eder. Kalbin paslıysa, güneşin ışığını yansıtamazsın. İç sesin "sen buna layık değilsin" diye fısıldarken, nasıl olur da gerçek bir hüsn-ü zan besleyebilirsin?</p>
            
            <p className="mb-4">İşte tam burası, arınmanın neden ilk adım olduğunun düğüm noktası.</p>
            
            <p className="mb-4">Hasan-ı Basri hazretleri bu iki kutbu şöyle ayırır:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              "Mümin Rabbine hüsn-ü zan besledi ve amelini güzelleştirdi. Facir ise Rabbine su-i zan besledi ve amelini kötületti."
            </blockquote>
            
            <p className="mb-8">Bu bir döngü. Ya güzellik güzelliği doğurur ya da karanlık kendi kuyusunu kazar. Birbirini besleyen iki nehir düşün. Biri ışığa akar; güzel zan, güzel ameli doğurur, o amel ise zannı daha da berraklaştırır. Diğeri karanlığa; kötü zan, ameli bozar, bozulan amel kalbi karartır. Arınma, bu ikinci nehrin yatağını kurutmak için.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Formül</h2>
            
            <p className="mb-4">Hüsn-ü zannın özünü tek bir denkleme indirgeyebiliriz:</p>
            
            <div className="bg-[#0D4F4F] text-white p-6 rounded-xl my-6 text-center">
              <p className="text-xl font-bold m-0">HÜSN-Ü ZAN = NİYET + YAKİN + AMEL</p>
            </div>
            
            <p className="mb-4"><strong>Niyet:</strong> "Rabbim'den dönüşümü bekliyorum." Bu, kalbin yönelişidir. Her seansa, her pratiğe bununla başlarsın.</p>
            
            <p className="mb-4"><strong>Yakîn:</strong> "Rabbim beni yarı yolda bırakmaz." Bu, şüphesiz bir güvendir. Bilinçaltının derinliklerine işleyen bir itimat.</p>
            
            <p className="mb-4"><strong>Amel:</strong> "Bunun için elimden geleni yapıyorum." Bu, bedenin hareketidir. Pratiklerin düzenli uygulanması.</p>
            
            <p className="mb-4">Üçü birleştiğinde kapılar açılır. Ama biri eksikse?</p>
            
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Niyet var, yakîn var, amel yok—bu sadece <strong>temenni</strong>. Boş hayal.</li>
              <li>Niyet var, amel var, yakîn yok—bu <strong>şüphe</strong>. Verim düşer.</li>
              <li>Yakîn var, amel var, niyet yok—bu <strong>ruhsuz hareket</strong>. Bereket gelmez.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Hücreler Hatırlar</h2>
            
            <p className="mb-4">Şimdi bu manevi iklimden çıkıp modern bilimin soğuk ama dürüst aynasına bakalım.</p>
            
            <p className="mb-4">Dr. Bessel van der Kolk, kırk yıllık araştırmasını tek bir cümlede özetler:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              "Travma bir hikaye olarak değil, duyusal deneyim olarak depolanır."
            </blockquote>
            
            <p className="mb-4">Zihin unutsa da beden unutmaz. Beyin taramaları bize şunu fısıldıyor: Acı hatıralar sadece mantık süzgecinden geçmiyor, kaslarında, sinir uçlarında, hücrelerinin hafızasında düğümleniyor. Yıllar sonra duyduğun bir koku ya da bir ses, seni nedenini bilmediğin bir dehşetin içine fırlatabiliyorsa, bu o düğümün hâlâ orada olduğunun ispatıdır.</p>
            
            <p className="mb-8">Sadece "olumlu düşün" demek yetmez. Çünkü o zan, zihninde değil hücrelerinde lekelenmiştir. Van der Kolk'un önerdiği somatik çözüm, kadim arınma pratiklerinin modern bir yankısı. Bilim, 1400 yıl sonra aynı kapıya geldi. Farklı kelimelerle, aynı hakikat.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Sıralamayı Atlamanın Bedeli</h2>
            
            <p className="mb-4">Hiyerarşiyi bozmak, fıtrata karşı gelmektir. Arınmadan yükselmeye çalışmak, çatısı olmayan eve kat çıkmaya benzer.</p>
            
            <p className="mb-4">Spiritüel literatürde "Kundalini Sendromu" denilen, tıbbi kayıtlara ise aşırı beden ısısı, kontrolsüz öfke, kronik yorgunluk ve hatta psikotik ataklar olarak geçen durumlar, usulsüzlüğün neticesi.</p>
            
            <p className="mb-4">Dr. Lawrence Edwards, bunların birer "spiritüel metafor" olmadığını, bizzat hastane kayıtlarına giren tıbbi vakalar olduğunu hatırlatır:</p>
            
            <blockquote className="border-l-4 border-red-400 pl-6 py-4 my-6 bg-red-50 rounded-r-lg italic">
              "Hazırlıksız enerji dönüşümü hospitalizasyona yol açabiliyor."
            </blockquote>
            
            <p className="mb-4">Tasavvufun "nefis tezkiyesi" dediği süreç de tam olarak bu. Şems Suresi'nde Rabbimiz şöyle buyurur:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              "Nefsini arındıran kurtuldu. Onu kirleten ise ziyan etti."
              <footer className="text-sm mt-2 not-italic text-gray-600">(Şems Suresi, 91:9-10)</footer>
            </blockquote>
            
            <p className="mb-8">Kalp temizlenmeden ilahi sırlar o kalbe misafir olmaz. Kirli bardağa zemzem koysan, su bardağın şeklini ve kirini alır. Önce bardağı yıka.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Değişimin Ritmi</h2>
            
            <p className="mb-4">Değişim bir gecede değil, bir "devam" fikriyle mümkün. 21 gün efsanesi, popüler kültürün masalı. Phillippa Lally'nin araştırmaları gösteriyor ki, bir davranışın sinir sistemine mühürlenmesi ortalama <strong>66 gün</strong> sürer.</p>
            
            <p className="mb-4">Bu süreçte beş katmanda çalışacağız:</p>
            
            <div className="space-y-3 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">Fiziksel.</strong> Hücrelerinde saklı toksinler ve kaslarına çöreklenmiş gerginlikler.
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">Duygusal.</strong> Yuttuğun o korkular, söyleyemediğin o kederler.
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">Zihinsel.</strong> Seni "yetersiz" olduğuna inandıran o gizli programlar.
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">Enerjetik.</strong> Tıkanmış akışlar, zayıflamış sınırlar.
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <strong className="text-[#0D4F4F]">İlişkisel.</strong> Seni aşağı çeken o görünmez prangalar.
              </div>
            </div>
            
            <p className="mb-8">Beden temizlenmeden duygular, duygular açılmadan zihin, zihin netleşmeden ise zan düzelmez. Her şey birbirine bağlı, her şey bir ritim içinde.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Sen Bir Karış, O Bir Kulaç</h2>
            
            <p className="mb-4">Hadis-i Kudsi'nin devamında müthiş bir müjde gizli:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              "Kim Bana bir karış yaklaşırsa, Ben ona bir arşın yaklaşırım. Kim Bana bir arşın yaklaşırsa, Ben ona bir kulaç yaklaşırım. Kim Bana yürüyerek gelirse, Ben ona koşarak gelirim."
            </blockquote>
            
            <p className="mb-4">Burada dur ve düşün.</p>
            
            <p className="mb-4">Sen sadece bir karış atacaksın. O ilk arınma adımını, o ilk "evet"i söyleyeceksin. Gerisini O tamamlayacak. Sen yürümeye niyet et, O sana koşarak gelecek.</p>
            
            <p className="mb-8">Ama yürümek için önce ayağındaki o prangalardan, o "vahşet" yükünden kurtulman gerek. Kirli ayakla atılan adım, iz bırakmaz.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">O An İçin Yaşamak</h2>
            
            <p className="mb-4">Peygamber Efendimiz (s.a.v.), dünyadan ayrılmadan üç gün evvel şu vasiyeti bıraktı:</p>
            
            <blockquote className="border-l-4 border-[#C9A962] pl-6 py-4 my-6 bg-[#0D4F4F]/5 rounded-r-lg italic">
              "Hiçbiriniz Allahu Teâlâ'ya hüsn-ü zan beslemeksizin ölmesin."
              <footer className="text-sm mt-2 not-italic text-gray-600">(Sahih-i Müslim)</footer>
            </blockquote>
            
            <p className="mb-4"><strong>Üç gün.</strong> Son nefesler. En ağır anlar. Ve O, bu mesajı seçti.</p>
            
            <p className="mb-8">Alimler bu hadisten şu hükmü çıkardı: Ölüm anında Allahu Teâlâ'ya hüsn-ü zan beslemek vaciptir. Ama o son anda hüsn-ü zan besleyebilmek, bir ömür süren arınmanın meyvesi. O berraklık, bir gecede kazanılmaz. OLUK'ta öğreneceğin her pratik, seni aslında o ana hazırlıyor.</p>

            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6 mt-12">Kapı Açık</h2>
            
            <p className="mb-4">Arınma fazı, bu negatif döngüyü kırmak ve ruhun "diriliş" müjdesini başlatmak için bir kapı.</p>
            
            <p className="mb-4">İçindeki o eski sinir yollarını, o karanlık zannı geride bırakıp, sana "koşarak gelen" o sonsuz rahmete bir karış yaklaşmaya hazır mısın?</p>
            
            <p className="text-xl font-semibold text-[#0D4F4F]">Hazırsan, kapı açık.</p>
            
          </article>
        </div>

        <button className="w-full bg-[#0D4F4F] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#0D4F4F]/90 transition-colors mb-6">
          <CheckCircle className="w-5 h-5" />
          Dersi Tamamladım
        </button>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500 mb-2">Sıradaki Ders</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#0D4F4F]">Ferrari Metaforu</span>
            <Link 
              href="/dersler/arinma/kapi/ferrari-metaforu"
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
