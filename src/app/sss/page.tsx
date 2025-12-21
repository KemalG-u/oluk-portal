import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sıkça Sorulan Sorular (SSS)',
  description: 'OLUK hakkında merak ettikleriniz. Platform nasıl çalışır, ücretsiz mi, Sırdaş nedir, kimler için uygun gibi soruların cevapları.',
  keywords: [
    'OLUK SSS',
    'sıkça sorulan sorular',
    'OLUK nedir',
    'Sırdaş nedir',
    'ücretsiz meditasyon',
    'online manevi eğitim',
  ],
  canonical: '/sss',
});

const faqs = [
  {
    question: 'OLUK nedir?',
    answer: 'OLUK, Türk tasavvuf geleneği ile modern teknolojiyi birleştiren dijital manevi dönüşüm platformudur. 10 basamaklı sistematik yolculuk, AI destekli Sırdaş ve binlerce yol arkadaşı ile içsel dönüşüm yolculuğunuza eşlik eder.',
  },
  {
    question: 'OLUK ücretsiz mi?',
    answer: 'Evet, OLUK\'un temel özellikleri tamamen ücretsizdir. Tüm dersler, Sırdaş ile temel konuşmalar ve topluluk özelliklerine ücretsiz erişebilirsiniz. Premium üyelik ile daha derin içerikler, özel meditasyonlar ve ileri seviye rehberlik sunuyoruz.',
  },
  {
    question: 'Sırdaş nedir ve nasıl çalışır?',
    answer: 'Sırdaş, OLUK\'un AI destekli manevi rehberidir. 7/24 ulaşılabilir, kişiselleştirilmiş manevi rehberlik sunar. Türk tasavvuf geleneği, modern psikoloji ve mindfulness prensipleriyle eğitilmiştir. Gecenin her vaktinde açık bir kapı gibi, sırrınızı verir, sükûneti alırsınız.',
  },
  {
    question: 'OLUK\'ta kaç ders var?',
    answer: 'OLUK\'ta 10 basamaklı sistematik bir yolculuk var. Her basamak (ders), manevi gelişimin farklı bir boyutunu keşfetmenizi sağlar. Temelden çatıya, taş taş üstüne sağlam bir inşâ. Her ders video anlatımlar, pratik uygulamalar ve ödevlerden oluşur.',
  },
  {
    question: 'Meditasyon deneyimim yok, başlayabilir miyim?',
    answer: 'Kesinlikle! OLUK, sıfırdan başlayanlar için tasarlanmıştır. İlk dersten itibaren adım adım rehberlik edilirsiniz. Önceden deneyim gerekmez. Aksine, hiçbir ön yargı olmadan başlamanız daha iyi olabilir.',
  },
  {
    question: 'Günde ne kadar vakit ayırmam gerekir?',
    answer: 'Bu tamamen size kalmış. Minimum günde 5-10 dakika nefes çalışması bile etkili olabilir. Ancak dersleri düzenli takip ederseniz, haftada 2-3 saat ayırmanız önerilir. Kendi hızınızda ilerleyebilirsiniz, hiçbir acele yok.',
  },
  {
    question: 'OLUK hangi din veya inanışa bağlı?',
    answer: 'OLUK, herhangi bir din veya mezhebe bağlı değildir. Türk tasavvuf geleneğinden ilham alsa da, evrensel manevi prensiplerle çalışır. Tüm inançlardan veya inançsız kişiler rahatlıkla katılabilir. Saygı ve hoşgörü temeldir.',
  },
  {
    question: 'Verilerim güvende mi?',
    answer: 'Evet, gizliliğiniz bizim için önceliktir. Sırdaş ile yaptığınız konuşmalar end-to-end şifrelidir. Kişisel verileriniz hiçbir üçüncü tarafla paylaşılmaz. Detaylar için Gizlilik Politikamızı inceleyebilirsiniz.',
  },
  {
    question: 'Mobil uygulamanız var mı?',
    answer: 'Şu anda OLUK web tabanlı çalışmaktadır ve tüm cihazlarda (telefon, tablet, bilgisayar) sorunsuz kullanılabilir. Mobil uygulama 2025 yılında yayınlanacak. Web sitesini telefonunuzun ana ekranına ekleyerek uygulama gibi kullanabilirsiniz.',
  },
  {
    question: 'OLUK terapinin yerini alır mı?',
    answer: 'Hayır. OLUK, profesyonel psikoterapi veya psikiyatrik tedavinin yerini almaz. Manevi gelişim ve kişisel dönüşüm için bir araçtır. Ciddi psikolojik sorunlarınız varsa, lütfen bir uzman desteği alın. OLUK, terapi ile birlikte destekleyici olarak kullanılabilir.',
  },
];

export default function SSSSayfasi() {
  const breadcrumbs = [
    { name: 'Ana Sayfa', url: 'https://oluk.org' },
    { name: 'SSS', url: 'https://oluk.org/sss' },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const faqSchema = generateFAQSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-cream">
        <a href="#icerik" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-50 focus:bg-teal focus:text-cream focus:px-6 focus:py-3 focus:rounded-lg focus:font-semibold">
          İçeriğe atla
        </a>

        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-teal via-teal-light to-teal-dark text-cream">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-xl md:text-2xl text-cream/90 leading-relaxed max-w-3xl mx-auto">
              OLUK hakkında merak ettiklerinizin cevapları burada. Başka sorunuz varsa bize ulaşabilirsiniz.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <div id="icerik" className="max-w-4xl mx-auto px-4 py-16">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <article
                key={index}
                className="bg-cream-light rounded-2xl p-6 md:p-8 border-l-4 border-teal shadow-sm hover:shadow-md hover:border-gold transition-all duration-300"
              >
                <h2 className="font-serif text-2xl text-teal mb-4">
                  {faq.question}
                </h2>
                <p className="text-lg text-text-dark leading-relaxed">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gradient-to-br from-teal/10 to-gold/10 rounded-2xl p-8 md:p-12">
            <h2 className="font-serif text-3xl text-teal mb-4">
              Sorunuz cevaplanmadı mı?
            </h2>
            <p className="text-lg text-text-dark mb-6">
              Başka bir sorunuz varsa bizimle iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal text-cream rounded-full font-medium hover:bg-teal-dark transition-colors min-h-[44px]"
              >
                İletişime Geç
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-teal text-teal rounded-full font-medium hover:bg-teal hover:text-cream transition-colors min-h-[44px]"
              >
                Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
