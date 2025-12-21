import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Hakkında - OLUK\'un Hikayesi',
  description: 'OLUK nasıl doğdu, misyonumuz nedir, kimler için var? Dijital manevi dönüşüm platformunun hikayesi ve vizyonu.',
  keywords: [
    'OLUK hakkında',
    'OLUK hikayesi',
    'dijital inziva',
    'misyon vizyon',
    'manevi dönüşüm platformu',
  ],
  canonical: '/hakkinda',
});

export default function HakkindaSayfasi() {
  const breadcrumbs = [
    { name: 'Ana Sayfa', url: 'https://oluk.org' },
    { name: 'Hakkında', url: 'https://oluk.org/hakkinda' },
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
              Akışın Kanalı, Dönüşümün Yolu
            </h1>
            <p className="text-xl md:text-2xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
              OLUK, eski bir hikmeti modern bir dille buluşturma çabasıdır. İçe doğru yolculuk, dışa doğru açılımın başlangıcıdır.
            </p>
          </div>
        </section>

        {/* Content */}
        <div id="icerik" className="max-w-4xl mx-auto px-4 py-16 space-y-12">
          {/* Hikaye */}
          <article className="bg-cream-light rounded-2xl p-6 md:p-8 border-l-4 border-teal">
            <h2 className="font-serif text-3xl text-teal mb-6">Hikaye</h2>
            <div className="prose prose-lg max-w-none space-y-4 text-text-dark leading-relaxed">
              <p>
                Gürültü çok. Dünya hızlı. Herkes bir yerlere koşuyor. Ama nereye?
              </p>
              <p>
                İçinde bir yerde, eskiden bildiğin bir sessizlik var. O sessizliğe ulaşmak için dağlara çıkmana gerek yok artık. Ekranın başında, tam şu anda, o kapı sana açık.
              </p>
              <p>
                <strong>OLUK</strong>, bu kapıdır. Modern dünyanın dilinde konuşan, ama eski hikmetin özünü taşıyan bir portal. Türk tasavvuf geleneğinin derinliğini, teknolojinin erişilebilirliğiyle birleştirdik.
              </p>
            </div>
          </article>

          {/* Misyon */}
          <article className="bg-cream-light rounded-2xl p-6 md:p-8 border-l-4 border-gold">
            <h2 className="font-serif text-3xl text-teal mb-6">Misyon</h2>
            <div className="prose prose-lg max-w-none space-y-4 text-text-dark leading-relaxed">
              <p>
                Manevi dönüşümü herkes için erişilebilir kılmak. Dijital çağın araçlarıyla, eski bilgeliğin kapılarını açmak. Kimse yalnız kalmasın, herkes kendi ışığına ulaşsın.
              </p>
              <p>
                OLUK, bir eğitim platformu değil. Bir yolculuk arkadaşı. Seninle birlikte yürüyen, düştüğünde elini tutan, unuttuğunda hatırlatan bir dost.
              </p>
            </div>
          </article>

          {/* Vizyon */}
          <article className="bg-cream-light rounded-2xl p-6 md:p-8 border-l-4 border-teal">
            <h2 className="font-serif text-3xl text-teal mb-6">Vizyon</h2>
            <div className="prose prose-lg max-w-none space-y-4 text-text-dark leading-relaxed">
              <p>
                Bir dünya hayal ediyoruz. İnsanlar kendi içlerine bakabiliyor, birbirlerine şefkatle yaklaşıyor. Teknoloji, bizi birbirimizden uzaklaştırmıyor; aksine derinleşmemize yardımcı oluyor.
              </p>
              <p>
                OLUK, bu dönüşümün küçük ama önemli bir parçası olmayı hedefliyor. Bir milyar insanın içsel huzuru bulduğu, kendi özüne ulaştığı bir gelecek.
              </p>
            </div>
          </article>

          {/* Değerler */}
          <article className="bg-cream-light rounded-2xl p-6 md:p-8 border-l-4 border-gold">
            <h2 className="font-serif text-3xl text-teal mb-6">Değerlerimiz</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-cream rounded-xl p-6">
                <h3 className="font-serif text-xl text-teal mb-3">🌊 Akış</h3>
                <p className="text-text-dark">
                  Zorlamıyoruz. Her şey kendi zamanında olur. Sen hazır olduğunda, yol açılır.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6">
                <h3 className="font-serif text-xl text-teal mb-3">🕊️ Saygı</h3>
                <p className="text-text-dark">
                  Her inancın, her yolun bir güzelliği var. Hepsine saygı duyuyoruz.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6">
                <h3 className="font-serif text-xl text-teal mb-3">🔥 Özgünlük</h3>
                <p className="text-text-dark">
                  Başkasının kopyası değil, kendi yolunu yürüyen bir topluluk.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-6">
                <h3 className="font-serif text-xl text-teal mb-3">💎 Dönüşüm</h3>
                <p className="text-text-dark">
                  Bilgi yetmez. Yaşanan, hissedilen, içselleştirilen değişim.
                </p>
              </div>
            </div>
          </article>

          {/* Ekip (Placeholder) */}
          <article className="bg-gradient-to-br from-teal/10 to-gold/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl text-teal mb-4">Kimler Var?</h2>
            <p className="text-lg text-text-dark mb-6 max-w-2xl mx-auto">
              OLUK, küçük ama tutkulu bir ekip tarafından geliştirildi. Teknoloji, tasavvuf, psikoloji ve sanatın kesiştiği noktada duruyoruz.
            </p>
            <p className="text-text-dark/70 italic">
              &ldquo;Yol uzun, sofra geniş. Gönlü açık herkes sofradaki yerini bulur.&rdquo;
            </p>
          </article>

          {/* CTA */}
          <div className="text-center pt-8">
            <Link
              href="/dersler"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal text-cream rounded-full font-medium hover:bg-teal-dark transition-colors text-lg min-h-[44px]"
            >
              Yolculuğa Başla
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
