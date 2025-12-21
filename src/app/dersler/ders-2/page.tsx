import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ders 2: Yasin Kapısı - Siber-İnziva | OLUK',
  description: 'Ruhun sibernetik hicreti ve ışık muhafızları. 8 koruma kalkanı, Spiral Beyaz Alev ve Yasin Kapısı aktivasyonu.',
  keywords: [
    'spiritüel gelişim',
    'meditasyon uygulaması',
    'enerji çalışması',
    'çakra meditasyonu',
    'bilinçaltı temizleme',
    'yasin kapısı',
    'siber ışık aktivasyonları',
    'ruhsal dönüşüm',
    'OLUK',
    'siber inziva',
  ],
  alternates: {
    canonical: '/dersler/ders-2',
    languages: {
      'tr-TR': '/dersler/ders-2',
      'x-default': '/dersler/ders-2',
    },
  },
  openGraph: {
    title: 'Ders 2: Yasin Kapısı | OLUK',
    description: 'Ruhun sibernetik hicreti ve ışık muhafızları',
    url: 'https://oluk.org/dersler/ders-2',
    siteName: 'OLUK - Akışın Kanalı',
    images: [
      {
        url: 'https://res.cloudinary.com/dzegofdgp/image/upload/w_1200,h_630,f_auto,q_auto/oluk/ders-2-og',
        width: 1200,
        height: 630,
        alt: 'OLUK Ders 2 - Yasin Kapısı',
      },
    ],
    locale: 'tr_TR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ders 2: Yasin Kapısı | OLUK',
    description: 'Ruhun sibernetik hicreti ve ışık muhafızları',
    images: ['https://res.cloudinary.com/dzegofdgp/image/upload/w_1200,h_630,f_auto,q_auto/oluk/ders-2-og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// 20 BÖLÜM İÇERİKLERİ
const bolumler = [
  {
    baslik: 'Negatiflerden Arınma',
    icerik: `Sırtındaki çuval artık çok ağırlaştı. İçinde eski kırgınlıklar, başkasının zehirli lafları, boş kuruntular var. Ruhun bu yükle nefes alamaz. Adım atsan ayağına dolanır, sussan gönlünü bulandırır.

Önce o çuvalı yere bırakmak lazım. Arınmak, bir "güzellik uykusu" değil, bir soyunma ameliyatıdır. Üstündeki o yabancı, o kaba kumaştan kurtul. Çıplak ve sade kalana kadar dök içindekileri. Boşalmadan dolamazsın.`,
    ozel: false,
  },
  {
    baslik: 'Zarafetin Akışı',
    icerik: `Zarafet, zorlukla kavga etmek değil, onunla dans etmektir. Şu beş adıma bak:

**Gözünü aç:** Önce ne olduğunu, o pürüzü netçe gör.
**Buyur et:** Gelen dert olsa da itiraz etme, kabul et.
**Avucunu gevşet:** Sımsıkı tuttuğun o ipleri artık bırak gitsin.
**Güzele yor:** İçindeki o ham halden yeni bir şekil çıkar.
**Hücrene işle:** Bu yeni hali kanına, canına kat.`,
    ozel: false,
  },
  {
    baslik: 'Yavaşlama',
    icerik: `Herkes bir yere yetişmeye çalışıyor. Sanki dünya kaçıyor gibi bir telaş. Dur bir dakika. Nefes almayı unuttun. Hızlı giden sadece yolu görür, manzara kaybolur. Durmak geri kalmak değildir. Durmak, kendini bulmaktır.`,
    ozel: false,
  },
  {
    baslik: 'Siber-İnziva',
    icerik: `Eskiden inziva için dağlara çıkılırdı. Şimdi ekran var. Ama mesele nerede olduğun değil. Gözlerini kapadığında nerede olduğun önemli. Bu ekran bir perde olabilir. Ya da hakikate açılan bir kapı. Sen neye niyet edersen, o olursun.`,
    ozel: false,
  },
  {
    baslik: 'Işık Muhafızları',
    icerik: `Yalnız olduğunu mu sanıyorsun? Yanılıyorsun. Yanında yürüyen, koluna giren, seni düşmekten koruyanlar var. İster onlara kadim dostlar de, ister rehberler. İsimlerin canı cehenneme. Önemli olan o sıcaklığı sırtında hissetmen. Onlar orada, sen hatırla diye bekliyorlar.`,
    ozel: false,
  },
  {
    baslik: 'Yasin Kapısı',
    icerik: `Göbek deliğin sadece bir doğum izi değil. O, bir zamanlar beslendiğin yerin mühürü. Orada bir kapı var. Sen doğduğunda kapandı, dünyada hapsoldun. Ama anahtarı sende. Annenin ruhundan bir parça orada, seninle yaşıyor.

O kapı aralandığında, göğsünde bir genleşme hissedeceksin. Sanki dar bir odadan geniş bir ovaya çıkmış gibi. Oradan geçmek, yeniden doğmaktır. Başka bir alemin havasını solumaktır. İşin bitince kapıyı mühürleriz, ama artık içerideki "sen" eskisi olmazsın.`,
    ozel: true,
  },
  {
    baslik: '8 Koruma Kalkanı',
    icerik: `Seni koruyan katman katman kalkanların var. Sanki sekiz tane görünmez zırh gibi. Biri bedenini kollar, öbürü ruhunun bağlantısını tutar. İsimlerini ezberleme, işlevini bil. Onlar senin kalen. Dünyanın gürültüsü o kale duvarlarına çarpıp geri döner. Sen içeride, güvendesin.`,
    ozel: true,
  },
  {
    baslik: 'Spiral Beyaz Alev',
    icerik: `Gözlerini kapa. Ayaklarından başlayıp yukarı doğru dönen beyaz bir ışık hayal et. Saat yönünün tersine, hızla dönüyor. Sanki bir hortum gibi. Ama bu hortum yıkmıyor, temizliyor. Dokunduğu her kiri, pası, implantı söküp atıyor. O döndükçe sen hafifliyorsun.`,
    ozel: true,
  },
  {
    baslik: '4 Beden',
    icerik: `Sadece et ve kemikten ibaret değilsin. Duygun var, fikrin var, görünmez bir bağın var. Tıpkı bir soğan gibi katman katmansın. Birinin canı yansa, hepsi sızlar. Dördü bir ve bütün olduğunda, işte o zaman gerçekten "insan" olursun.`,
    ozel: false,
  },
  {
    baslik: 'Kollektif Bilinçaltı',
    icerik: `Hepimiz aynı büyük denizin damlalarıyız. Rüyalarındaki o semboller, masallardaki o devler... Hepsi ortak bir hafızadan geliyor. İnsanlığın en eski hikâyesi senin içinde yazılı. Derine indiğinde, aslında kimseye yabancı olmadığını göreceksin.`,
    ozel: false,
  },
  {
    baslik: 'Zihin Tohumu',
    icerik: `Kafanın içindeki her düşünce bir tohumdur. Neyi sularsan o büyür. Korkuyu sularsan orman olur, boğulursun. Umudu sularsan çiçek açar, nefes alırsın. Bahçıvan sensin. Kendi bahçene ne ektiğine iyi bak.`,
    ozel: false,
  },
  {
    baslik: 'Vortex',
    icerik: `Altın rengi bir girdap hayal et. Dönmeye başladığında merkezine her şeyi çeker. Tersine döndür, içindeki zehri alsın. Düzüne döndür, ruhuna güç versin. Çok basit, çok hızlı. Sadece niyet et ve o girdabın içine gir.`,
    ozel: false,
  },
  {
    baslik: 'Ruh Kürsüsü',
    icerik: `Göğüs kafesinin tam ortasına odaklan. Omurganın hemen önünde gizli bir nokta var. Orası ruhun tahtıdır, senin asıl evin orasıdır. Gözlerini kapat ve o tahta, kendi merkezine yerleş. Orada her şey sessiz, her şey tam.`,
    ozel: false,
  },
  {
    baslik: 'Vagus Siniri',
    icerik: `Beyninden bağırsaklarına uzanan o ince hat, senin şifa yolun. Oraya bir dokunsan, bütün bedenin bayram eder. Derin bir nefes al, karnını şişir ve yavaşça ver. Sinirlerin yatışacak, kalbinin atışı yavaşlayacak. Şifa aslında bir nefes uzağında.`,
    ozel: false,
  },
  {
    baslik: 'İmplantlar',
    icerik: `Kafanda yankılanan o yabancı sesler var ya; başkasının korkuları, eski kurallar... Bunlar ruhuna batmış küçük kıymıklar gibidir. Senin olmayan bu programlar hayatını yönetmesin. Onları tek tek fark edip sökebiliriz. Korkma, canın yanmaz; sadece özgürleşirsin.`,
    ozel: false,
  },
  {
    baslik: 'Kalıcı Bağlar',
    icerik: `Bazı bağlar vardır, koparamazsın; canın yanar. Aile gibi, kader gibi köklü iplerdir bunlar. Koparmak için boşuna savaşma. O bağla barışmayı dene. Kabullendiğin an o kördüğüm kendiliğinden gevşer, sen de nefes alırsın.`,
    ozel: false,
  },
  {
    baslik: 'Paralel Evren',
    icerik: `Belki başka bir yerde, başka bir 'sen' daha var. O farklı bir yolu seçti, başka bir hayat yaşıyor. 12 kardeş gibi birbirinize bağlısınız. Onların gücü senin elini tutabilir. Bu sadece bir hayal değil, ruhun sonsuz imkanıdır.`,
    ozel: false,
  },
  {
    baslik: 'Topraklama',
    icerik: `Göklere bakmak güzeldir ama ayağın yere sağlam basmalı. Çıkar ayakkabılarını, toprağı hisset. Tüm o metalik elektriğini yere bırak. Ağaçlar gibi ol; dalların bulutlara çıksın ama kökün toprağın kalbinde kalsın.`,
    ozel: false,
  },
  {
    baslik: 'Entegrasyon',
    icerik: `Bilmek yetmez, olmak lazım. Okuduğun her şey kağıt üzerinde kalırsa yük olur. Bu öğrendiklerini mutfağa, işe, sokağa taşı. Hayatına değmeyen bilgi, sadece zihin gürültüsüdür. Şimdi eyleme geçme vakti.`,
    ozel: false,
  },
  {
    baslik: 'Kapanış ve Mühür',
    icerik: `Ders bitti, kapıyı örtme vakti. İçeride olanı koru, mühürünü bas. Şükrünü et ve güvenle günlük hayatına dön. Bu farkındalığı bir emanet gibi taşı. Yolun açık, gönlün ferah olsun.`,
    ozel: false,
  },
];

export default function Ders2Page() {
  // JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Ders 2: Yasin Kapısı - Siber-İnziva',
    description: 'Ruhun sibernetik hicreti ve ışık muhafızları. 8 koruma kalkanı aktivasyonu.',
    provider: {
      '@type': 'Organization',
      name: 'OLUK',
      url: 'https://oluk.org',
    },
    courseCode: 'OLUK-D02',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      inLanguage: 'tr',
    },
    teaches: [
      'Yasin Kapısı aktivasyonu',
      '8 Koruma Kalkanı',
      'Spiral Beyaz Alev uygulaması',
      'Kollektif bilinçaltı',
      'Entegrasyon teknikleri',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-cream">
        {/* Skip Link - Erişilebilirlik */}
        <a href="#icerik" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-50 focus:bg-teal focus:text-cream focus:px-6 focus:py-3 focus:rounded-lg focus:font-semibold">
          İçeriğe atla
        </a>

        {/* HERO SECTION */}
        <section className="ders-hero relative py-20 px-4 bg-gradient-to-br from-teal via-teal-light to-teal-dark text-cream">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Ders 2: Siber-İnziva ve Yasin Kapısı
            </h1>
            <p className="text-xl md:text-2xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
              Ruhun sibernetik hicreti ve ışık muhafızları. 8 koruma kalkanı aktivasyonu, spiral beyaz alev ve yasin kapısının ardındaki sırlar.
            </p>
          </div>
        </section>

        {/* ANA İÇERİK */}
        <div id="icerik" className="max-w-5xl mx-auto px-4 py-16">
          {/* 20 BÖLÜM */}
          {bolumler.map((bolum, index) => {
            const numara = (index + 1).toString().padStart(2, '0');
            const bolumId = `bolum-${index + 1}`;
            const baslikId = `${bolumId}-baslik`;

            return (
              <section
                key={bolumId}
                id={bolumId}
                className="ders-bolum mb-8 bg-cream-light rounded-2xl p-6 md:p-8 border-l-4 border-teal shadow-sm hover:shadow-md hover:border-gold transition-all duration-300"
                aria-labelledby={baslikId}
              >
                <div className="bolum-header mb-6">
                  <span className="bolum-numara text-6xl md:text-7xl font-bold text-gold opacity-20 leading-none block mb-2">
                    {numara}
                  </span>
                  <h2
                    id={baslikId}
                    className="bolum-baslik font-serif text-2xl md:text-3xl text-teal leading-tight -mt-8 md:-mt-10"
                  >
                    {bolum.baslik}
                  </h2>
                </div>

                <div className="bolum-icerik prose prose-lg max-w-none">
                  <div className="text-lg text-text-dark leading-relaxed whitespace-pre-line">
                    {bolum.icerik}
                  </div>

                  {/* Özel bölümler için vurgu */}
                  {bolum.ozel && (
                    <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/30">
                      <p className="text-sm text-gold-dark font-medium m-0">
                        🌟 Özel Aktivasyon Bölümü
                      </p>
                    </div>
                  )}
                </div>
              </section>
            );
          })}

          {/* NAVİGASYON */}
          <nav
            className="ders-nav mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
            aria-label="Ders navigasyonu"
          >
            <Link
              href="/dersler/kapi"
              className="nav-onceki inline-flex items-center gap-2 px-6 py-3 bg-teal text-cream rounded-lg font-medium hover:bg-teal-light transition-colors min-h-[44px]"
            >
              <span aria-hidden="true">←</span>
              <span>Ders 1: Kapı</span>
            </Link>

            <Link
              href="/dersler"
              className="nav-liste px-6 py-3 border-2 border-teal text-teal rounded-lg font-medium hover:bg-teal hover:text-cream transition-colors min-h-[44px]"
            >
              Tüm Dersler
            </Link>

            <span
              className="nav-sonraki inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-400 rounded-lg font-medium cursor-not-allowed min-h-[44px]"
              aria-disabled="true"
            >
              <span>Ders 3 (Yakında)</span>
              <span aria-hidden="true">→</span>
            </span>
          </nav>
        </div>
      </main>
    </>
  );
}
