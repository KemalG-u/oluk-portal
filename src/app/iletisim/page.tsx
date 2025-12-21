import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'İletişim - Bize Ulaşın',
  description: 'OLUK ile iletişime geçin. Sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçebilirsiniz.',
  keywords: [
    'OLUK iletişim',
    'bize ulaşın',
    'destek',
    'geri bildirim',
    'sorularınız',
  ],
  canonical: '/iletisim',
});

export default function IletisimSayfasi() {
  const breadcrumbs = [
    { name: 'Ana Sayfa', url: 'https://oluk.org' },
    { name: 'İletişim', url: 'https://oluk.org/iletisim' },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-cream">
        <a href="#icerik" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-50 focus:bg-teal focus:text-cream focus:px-6 focus:py-3 focus:rounded-lg focus:font-semibold">
          İçeriğe atla
        </a>

        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-teal via-teal-light to-teal-dark text-cream">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Bize Ulaşın
            </h1>
            <p className="text-xl md:text-2xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
              Sorularınız, önerileriniz veya geri bildirimleriniz için buradayız. Her sesiniz değerli.
            </p>
          </div>
        </section>

        {/* Content */}
        <div id="icerik" className="max-w-4xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* İletişim Kanalları */}
            <article className="bg-cream-light rounded-2xl p-6 md:p-8 border-l-4 border-teal">
              <h2 className="font-serif text-2xl text-teal mb-6">İletişim Kanalları</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <h3 className="font-medium text-teal mb-1">E-posta</h3>
                    <a
                      href="mailto:info@oluk.org"
                      className="text-text-dark hover:text-teal transition-colors"
                    >
                      info@oluk.org
                    </a>
                    <p className="text-sm text-text-dark/70 mt-1">
                      Genel sorular ve öneriler için
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h3 className="font-medium text-teal mb-1">Instagram</h3>
                    <a
                      href="https://instagram.com/olaborisun"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-dark hover:text-teal transition-colors"
                    >
                      @olaborisun
                    </a>
                    <p className="text-sm text-text-dark/70 mt-1">
                      Günlük paylaşımlar ve duyurular
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">💬</span>
                  <div>
                    <h3 className="font-medium text-teal mb-1">Sırdaş</h3>
                    <Link
                      href="/sirdas"
                      className="text-text-dark hover:text-teal transition-colors"
                    >
                      AI Manevi Rehber
                    </Link>
                    <p className="text-sm text-text-dark/70 mt-1">
                      7/24 anlık destek ve rehberlik
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Yanıt Süreleri */}
            <article className="bg-cream-light rounded-2xl p-6 md:p-8 border-l-4 border-gold">
              <h2 className="font-serif text-2xl text-teal mb-6">Yanıt Süreleri</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-teal mb-2">E-posta</h3>
                  <p className="text-text-dark">
                    Genellikle <strong>24-48 saat</strong> içinde yanıt veriyoruz. Yoğun dönemlerde bu süre 72 saate kadar uzayabilir.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-teal mb-2">Instagram</h3>
                  <p className="text-text-dark">
                    Mesajlarınıza <strong>1-3 gün</strong> içinde dönüş yapmaya çalışıyoruz.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-teal mb-2">Sırdaş</h3>
                  <p className="text-text-dark">
                    <strong>Anında</strong> yanıt alırsınız. 7/24 aktif.
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* SSS Yönlendirme */}
          <div className="bg-gradient-to-br from-teal/10 to-gold/10 rounded-2xl p-8 md:p-12 text-center mb-12">
            <h2 className="font-serif text-3xl text-teal mb-4">
              Önce SSS&apos;ye Bakın
            </h2>
            <p className="text-lg text-text-dark mb-6 max-w-2xl mx-auto">
              Sorularınızın çoğu muhtemelen Sıkça Sorulan Sorular sayfasında yanıtlanmış olabilir. Oraya göz atmak size zaman kazandırabilir.
            </p>
            <Link
              href="/sss"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal text-cream rounded-full font-medium hover:bg-teal-dark transition-colors min-h-[44px]"
            >
              SSS Sayfasına Git
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Gizlilik Notu */}
          <article className="bg-cream-light rounded-2xl p-6 md:p-8 border border-border">
            <h2 className="font-serif text-xl text-teal mb-4">🔒 Gizlilik ve Güvenlik</h2>
            <p className="text-text-dark leading-relaxed">
              Bize gönderdiğiniz tüm mesajlar gizli tutulur. Kişisel bilgileriniz hiçbir şekilde üçüncü taraflarla paylaşılmaz. E-postalarınız sadece ilgili ekip üyeleri tarafından görülür ve gerekli destek sağlandıktan sonra güvenli bir şekilde saklanır.
            </p>
          </article>

          {/* Ana Sayfa Dönüş */}
          <div className="text-center pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-teal text-teal rounded-full font-medium hover:bg-teal hover:text-cream transition-colors min-h-[44px]"
            >
              <span aria-hidden="true">←</span>
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
