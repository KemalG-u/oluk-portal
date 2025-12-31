import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const blogContent: Record<string, {
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  content: string
}> = {
  'meditasyona-giris': {
    title: 'Meditasyona Giriş: İlk Adımlar',
    excerpt: 'Meditasyona başlamak için bilmeniz gereken her şey.',
    date: '2025-01-02',
    readTime: '8 dk',
    category: 'Başlangıç',
    content: `Bir odaya girdin. Sessizlik vardı. Ama içindeki gürültü durmadı.

İşte meditasyon, o gürültüyü susturmak değil—onunla barışmak. Zihin düşünür, bu onun işi. Ama sen, düşüncelerinin efendisi olabilirsin.

## Neden Meditasyon?

Modern insan, tarihte hiç olmadığı kadar "bağlı". Telefonlar, bildirimler, sosyal medya... Ama içsel bağlantı kopuk. Meditasyon, o kopan bağı onarır.

Araştırmalar gösteriyor: Günde 10 dakika düzenli meditasyon, kortizol seviyelerini düşürür, odaklanmayı artırır, uyku kalitesini iyileştirir. Ama bunlar yan faydalar. Asıl olan, kendinle tanışmak.

## İlk Adım: Sadece Otur

Karmaşık teknikler şart değil. Başlangıç basit:

Rahat bir yere otur. Sırtın dik olsun, ama gergin değil. Gözlerini kapat ya da yarı aralık bırak. Ve sadece nefesini izle.

Nefes giriyor. Nefes çıkıyor.

Düşünceler gelecek. Normal. Onları kovma, onlarla savaşma. Sadece fark et ve nefese dön.

## İkinci Adım: Süre Değil, Süreklilik

Başta 5 dakika bile uzun gelebilir. Sorun değil. 3 dakika ile başla. Ama her gün yap. Haftada bir 30 dakika, her gün 3 dakikadan daha az etkili.

Zihin, alışkanlık sever. Ona yeni bir alışkanlık ver.

## Üçüncü Adım: Beklentiyi Bırak

"Huzur bulacağım", "aydınlanacağım", "stresim bitecek"... Bu beklentiler, meditasyonun önündeki en büyük engel.

Hiçbir şey bekleme. Sadece otur. Olan olsun.

Paradoks şu: Bir şey beklemediğinde, her şey gelir.

## OLUK'ta Meditasyon

OLUK'un Arınma modülü, meditasyona yapılandırılmış bir giriş sunuyor. Sufi geleneğinin nefes teknikleriyle modern mindfulness'ı birleştiriyoruz.

Tek başına denemek zor geliyorsa, Sırdaş sana eşlik edebilir. Sorularını sor, rehberlik al.

Yolculuk uzun. Ama ilk adım, her zaman şimdi.`
  },
  'nefes-teknikleri': {
    title: 'Nefes Teknikleri: Bedenin Gizli Anahtarı',
    excerpt: 'Sufi geleneğinden modern bilime: Nefes çalışmalarının dönüştürücü gücü.',
    date: '2025-01-01',
    readTime: '10 dk',
    category: 'Teknikler',
    content: `Her gün yaklaşık 20.000 kez nefes alıyorsun. Ama kaç tanesinin farkındasın?

Nefes, bedenin en otomatik ama aynı zamanda en kontrol edilebilir fonksiyonu. Bu paradoks, onu dönüşümün kapısı yapıyor.

## Nefes Neden Önemli?

Sufi geleneğinde nefes, ruh ile beden arasındaki köprü olarak görülür. Her nefes, ilahi olanla bir bağlantı. Bu sadece metafor değil—bilim de doğruluyor.

Derin nefes, parasempatik sinir sistemini aktive eder. Kalp atışı yavaşlar, kan basıncı düşer, stres hormonları azalır. Ama etkisi bunun ötesinde: Bilinç durumu değişir.

## Temel Teknik: 4-7-8

Bu teknik, hem Sufi hem de yogik geleneklerde var. Modern versiyonu Dr. Andrew Weil tarafından popülerleştirildi.

4 saniye nefes al (burundan).
7 saniye tut.
8 saniye ver (ağızdan, dudaklar hafif aralık).

Bu döngüyü 4 kez tekrarla. Günde iki kez uygula.

## Sufi Nefesi: Zikir ile Birlikte

Geleneksel Sufi pratiğinde nefes, zikir (ilahi isimlerin tekrarı) ile birleşir.

Nefes alırken: "Hu" (içsel, sessiz)
Nefes verirken: "Allah" (ya da sadece "Hu")

Bu pratik, nefesi bir ibadet haline getirir. Ama inanç sisteminiz ne olursa olsun, nefese bir "niyet" eklemek, etkisini derinleştirir.

## Kaotik Nefes: Temizlik İçin

Bazen birikenler, düzenli nefesle çıkmaz. O zaman kaotik nefes devreye girer:

2-3 dakika boyunca hızlı, kesik kesik nefes al (hiperventilasyon değil, kontrollü).
Sonra derin bir nefes al ve tut.
Bırak ve sessizlikte kal.

Bu teknik güçlüdür. İlk denemelerde yanında bilen biri olsun.

## Uyarı

Nefes çalışmaları güvenlidir, ama bazı durumlar istisna: Hamilelik, epilepsi, ciddi kalp rahatsızlıkları. Şüphen varsa, önce bir uzmana danış.

## OLUK'ta Nefes

OLUK'un Arınma modülünde nefes teknikleri, kademeli bir yapıda sunuluyor. Temel pratiklerden başlayıp, ileri tekniklere doğru ilerliyorsun.

Her nefes bir fırsat. Şimdi bir tane al. Fark et. Ve devam et.`
  },
  'enerji-temizligi': {
    title: 'Enerji Temizliği: Görünmeyeni Arındırmak',
    excerpt: 'Mekanların ve bedenin enerjetik temizliği.',
    date: '2024-12-30',
    readTime: '7 dk',
    category: 'Pratik',
    content: `Bir odaya girdin. Nedensiz bir ağırlık hissettin. Ya da tam tersi—bir yer seni aniden ferahlattı.

Bu hisler rastgele değil. Mekanlar ve bedenler, enerji taşır. Ve bu enerji bazen temizlenmeye ihtiyaç duyar.

## Enerji Nedir?

Bilim henüz tam açıklayamasa da, her kültürde benzer bir kavram var: Çin'de "chi", Hint'te "prana", Japonya'da "ki", İslam tasavvufunda "nur" veya "latife".

Bu enerji, fiziksel bedenin ötesinde bir alan oluşturur. Duygular, düşünceler, niyetler—hepsi bu alanı etkiler.

## Beden Temizliği

Bedenin enerjetik temizliği için en basit yöntem: su ve niyet.

Duş alırken, suyun sadece bedeni değil, "taşıdıklarını" da yıkadığını hayal et. Ağırlıkların giderle birlikte aktığını hisset.

Daha derin temizlik için: Deniz tuzu banyosu. Bir avuç deniz tuzu, ılık suya. 15-20 dakika bekle. Tuzun arındırıcı özelliği, binlerce yıldır biliniyor.

## Mekan Temizliği

Mekanlar, içinde yaşananların izini taşır. Kavga edilen bir ev, o enerjiyi biriktirir. Huzurlu bir mekan, huzur yayar.

Basit temizlik: Tütsü veya buhur. Sufi geleneğinde öd ağacı (oud) ve amber kullanılır. Dumanın her köşeye ulaşmasını sağla, pencereleri aç.

Daha yoğun temizlik: Tuz. Odanın köşelerine birer kase kaba tuz koy. 24-48 saat beklet. Sonra tuzu çöpe at (lavaboya dökme).

## Koruma

Temizlik sonrası koruma önemli. Yoksa boşalan yer, tekrar dolar.

En basit koruma: Niyet. "Bu mekan/beden artık sadece yüksek frekanslı enerjilere açık" gibi bir niyet belirle.

Görselleştirme: Bedenini veya mekanı beyaz veya altın ışıkla sarılı hayal et.

## Dikkat

Enerji çalışmaları, psikolojik sorunların yerine geçmez. Ciddi kaygı, depresyon veya travma varsa, önce profesyonel destek al.

## OLUK'ta Enerji Çalışması

OLUK'un Koruma modülü, enerji temizliği ve koruma tekniklerini sistematik olarak öğretiyor. Teori ile pratik birleşiyor.

Görmediğin şey, olmadığı anlamına gelmiyor. Sadece farklı bir dikkat istiyor.`
  },
  'sufi-gelenegi': {
    title: 'Sufi Geleneği: Bin Yılın Bilgeliği',
    excerpt: 'Tasavvufun özünden modern yaşama taşınan öğretiler.',
    date: '2024-12-28',
    readTime: '12 dk',
    category: 'Gelenek',
    content: `"Aşkın dini yoktur" dedi Mevlana. Bu söz, tasavvufun özünü bir cümlede anlatır.

Sufi geleneği, İslam'ın mistik boyutu olarak bilinir. Ama özünde, tüm inançların ötesinde evrensel bir arayışı temsil eder: İnsanın, kaynağına dönüş yolculuğu.

## Tasavvuf Nedir?

Kelime olarak "yün giyen" anlamına gelir—ilk Sufiler'in sade kıyafetlerinden. Ama gerçek anlam çok daha derin.

Tasavvuf, dışsal dinin içsel boyutudur. Namaz kılan bir Müslüman, bedenle ibadet eder. Sufi, kalple ibadet eder. Biri kurallara uyar, diğeri kurallarda anlam arar.

## Temel Kavramlar

Nefs: Ego, benlik. Sufizm'de nefs, dönüştürülmesi gereken temel engel. Ama düşman değil—ham madde.

Kalp: Fiziksel kalp değil, ruhani merkez. Kalp temizliği, tüm pratiğin özü.

Fena: Benliğin erimesi, yokoluş. Korkunç gelebilir, ama aslında özgürlük. "Ben"in sınırlılığından kurtulmak.

Beka: Fena'dan sonra yeni bir varoluş. Yokoluştan sonra yeniden doğuş.

## Pratikler

Zikir: İlahi isimlerin tekrarı. Dille, kalple veya tüm bedenle yapılabilir. Sema (dönerek zikir) de bunun bir formu.

Murakabe: Sufi meditasyonu. Sessizce oturup kalbi izlemek.

Sohbet: Bir mürşidin huzurunda olmak, onun halinden etkilenmek. Bilgi aktarımından çok, "hal" aktarımı.

Hizmet: Başkalarına hizmet etmek, egonun erimesi için en etkili pratiklerden.

## Modern Yaşamda Sufi Bilgeliği

Bin yıl önce yazılanlar, bugün hâlâ geçerli. Çünkü insan değişmedi. Hâlâ aynı acıları çekiyor, aynı soruları soruyor.

Mevlana'nın "Gel, ne olursan ol yine gel" daveti, bugün daha da anlamlı. Kutuplaşmış bir dünyada, kucaklayıcı bir ses.

Yunus Emre'nin "Bir kez gönül yıktın ise, bu kıldığın namaz değil" uyarısı, ritüele takılıp özü kaçıranlara.

## OLUK ve Sufi Geleneği

OLUK, Sufi geleneğini dogmatik değil, deneyimsel olarak sunuyor. Amaç, bir tarikata bağlamak değil—içindeki bilgeliği erişilebilir kılmak.

Gelenek, bir müze değil. Yaşayan bir nehir. Ve o nehir, hâlâ akıyor.`
  },
  'dijital-detoks': {
    title: 'Dijital Detoks: Ekranlardan Ruha Dönüş',
    excerpt: 'Sürekli bağlantı çağında içsel sessizliği bulmak.',
    date: '2024-12-25',
    readTime: '6 dk',
    category: 'Modern Yaşam',
    content: `Sabah gözlerini açtığında ilk ne yapıyorsun?

Çoğumuz için cevap aynı: Telefona uzanmak. Bildirimler, mesajlar, haberler... Gün daha başlamadan, zihin çoktan dolmuş.

## Sorun Ne?

Teknoloji kötü değil. Ama kullanım şeklimiz, bizi esir aldı.

Ortalama bir insan, günde 2.600 kez telefonuna dokunuyor. Her bildirim, bir dopamin vuruşu. Beyin, sürekli uyarı bekler hale geliyor. Sessizlik, rahatsız etmeye başlıyor.

Ve en önemlisi: İçe dönme kapasitesi zayıflıyor. Meditasyon yapmak isteyip "beceremeyenlerin" çoğu, aslında bu aşırı uyarılmışlığın kurbanı.

## Dijital Detoks Nedir?

Tam bir kopuş şart değil. Amaç, bilinçli kullanım.

Detoks, bağımlılığı kırmak, kontrolü geri almak. Telefonun seni kullanması yerine, senin onu kullanman.

## Pratik Adımlar

İlk saat kuralı: Sabah uyandıktan sonra en az 1 saat telefona bakma. Bu saati kendine ayır—nefes, hareket, sessizlik.

Son saat kuralı: Yatmadan 1 saat önce ekranları kapat. Mavi ışık, uyku hormonlarını bozuyor. Ama etkisi bunun ötesinde—zihin yatışmaya vakit buluyor.

Bildirim orucu: Tüm bildirimleri kapat. Sadece arama açık kalsın. Mesajlara sen karar verdiğinde bak.

Tek görev: Telefon kullanırken başka iş yapma. Sosyal medyaya bakacaksan, sadece onu yap. Yemek yerken telefon masada olmasın.

Haftalık şabat: Haftada bir gün (veya yarım gün), tamamen ekransız geçir. Başta zor gelir, sonra özlersin.

## Derin Detoks: Siber İnziva

OLUK'un sunduğu Siber İnziva kavramı, dijital detoksu spiritüel pratikle birleştiriyor.

Ekranlardan çekiliş, sadece beyin dinlendirmek için değil—içe dönüş için. Sessizlikte ne var, onu keşfetmek için.

## Uyarı

Birden bırakmak, yoksunluk belirtileri yaratabilir. Kademeli azaltma daha sürdürülebilir.

Ve şunu unutma: Amaç teknolojiden kaçmak değil, onunla sağlıklı bir ilişki kurmak.

## Son Söz

Her çıkış, bir dönüşün başlangıcı. Ekranlardan çıkış, kendine dönüşün kapısı.

Şimdi telefonu bırak. Bir pencereden dışarı bak. Sadece bak.`
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogContent[slug]
  
  if (!post) return { title: 'Yazı Bulunamadı' }
  
  return {
    title: `${post.title} | OLUK Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    }
  }
}

export async function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogContent[slug]
  
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-[#F5F0E6] text-[#0D4F4F]">
      {/* Header */}
      <section className="py-16 px-6 bg-[#0D4F4F] text-white">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
          >
            ← Blog'a Dön
          </Link>
          <div className="flex items-center gap-3 mb-4 text-sm">
            <span className="px-3 py-1 bg-[#C9A962]/20 text-[#C9A962] rounded-full">
              {post.category}
            </span>
            <span className="text-white/60">{post.readTime} okuma</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-white/70 text-lg">{post.excerpt}</p>
          <div className="mt-6 pt-6 border-t border-white/10 text-sm text-white/50">
            {new Date(post.date).toLocaleDateString('tr-TR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto prose prose-lg prose-slate">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-serif text-[#0D4F4F] mt-12 mb-6">
                  {paragraph.replace('## ', '')}
                </h2>
              )
            }
            if (paragraph.trim() === '') return null
            return (
              <p key={index} className="text-[#0D4F4F]/80 leading-relaxed mb-6">
                {paragraph}
              </p>
            )
          })}
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#0D4F4F]/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-serif mb-4">Okumak Güzel, Yaşamak Daha Güzel</h2>
          <p className="text-[#0D4F4F]/70 mb-6">
            Bu yazıdaki pratikleri OLUK ile deneyimle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/dersler/arinma"
              className="px-8 py-3 bg-[#C9A962] text-white rounded-full hover:bg-[#0D4F4F] transition-colors"
            >
              Derslere Başla
            </Link>
            <Link 
              href="/sirdas"
              className="px-8 py-3 border border-[#0D4F4F] text-[#0D4F4F] rounded-full hover:bg-[#0D4F4F] hover:text-white transition-colors"
            >
              Sırdaş ile Konuş
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
