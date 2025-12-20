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
              {/* ⚠️ İÇERİK GEM'DEN GELECEK - Placeholder */}
              Ruhun sibernetik hicreti ve ışık muhafızları. 8 koruma kalkanı aktivasyonu.
            </p>
          </div>
        </section>

        {/* ANA İÇERİK */}
        <div id="icerik" className="max-w-5xl mx-auto px-4 py-16">
          {/* 20 BÖLÜM İSKELETİ */}
          {[
            '01 - Negatiflerden Arınma',
            '02 - Zarafetin Akışı',
            '03 - Yavaşlama ve Derinleşme',
            '04 - Siber-İnziva Kavramı',
            '05 - Işık Muhafızları',
            '06 - Yasin Kapısı',
            '07 - 8 Koruma Kalkanı',
            '08 - TELLURIC - NADA',
            '09 - DORADIC - ALPHI',
            '10 - MARUTIC - KARETH',
            '11 - SOLEDIC - ELETH',
            '12 - LUNADIC - GOMAR',
            '13 - ADROMEDIC - URETH',
            '14 - SIRIUSIC - ANDAS',
            '15 - GALACTIC - LOGOS',
            '16 - Spiral Beyaz Alev',
            '17 - Uygulama Protokolü',
            '18 - 3B&apos;den 5B&apos;ye Geçiş',
            '19 - Aktivasyon Adımları',
            '20 - Kapanış ve Entegrasyon',
          ].map((baslik, index) => {
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
                    {baslik.replace(/^\d+ - /, '')}
                  </h2>
                </div>

                <div className="bolum-icerik">
                  <p className="bolum-giris text-lg text-text-muted leading-relaxed">
                    {/* ⚠️ İÇERİK GEM'DEN GELECEK */}
                    <span className="text-gold-dark font-medium">[İçerik hazırlanıyor...]</span>
                    <br />
                    <span className="text-sm italic">
                      Bu bölümün içeriği Gem workflow&apos;undan geçtikten sonra eklenecektir.
                    </span>
                  </p>

                  {/* Özel bölümler için vurgu */}
                  {(index === 5 || index === 6 || index === 15) && (
                    <div className="mt-4 p-4 bg-gold/10 rounded-lg border border-gold/30">
                      <p className="text-sm text-gold-dark font-medium">
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
