import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | OLUK - Manevi Gelişim Yazıları',
  description: 'Sufi geleneği, meditasyon, nefes teknikleri ve enerji çalışmaları hakkında derinlikli yazılar. Türkiye\'nin ilk spiritüel platformundan içgörüler.',
  openGraph: {
    title: 'Blog | OLUK',
    description: 'Manevi gelişim, meditasyon ve Sufi geleneği üzerine yazılar',
    type: 'website',
  }
}

const blogPosts = [
  {
    slug: 'meditasyona-giris',
    title: 'Meditasyona Giriş: İlk Adımlar',
    excerpt: 'Meditasyona başlamak için bilmeniz gereken her şey. Zihin sessizliğinin kapısını aralamak için pratik rehber.',
    date: '2025-01-02',
    readTime: '8 dk',
    category: 'Başlangıç'
  },
  {
    slug: 'nefes-teknikleri',
    title: 'Nefes Teknikleri: Bedenin Gizli Anahtarı',
    excerpt: 'Sufi geleneğinden modern bilime: Nefes çalışmalarının dönüştürücü gücü ve günlük uygulamalar.',
    date: '2025-01-01',
    readTime: '10 dk',
    category: 'Teknikler'
  },
  {
    slug: 'enerji-temizligi',
    title: 'Enerji Temizliği: Görünmeyeni Arındırmak',
    excerpt: 'Mekanların ve bedenin enerjetik temizliği. Ağırlıklardan kurtulmanın kadim yolları.',
    date: '2024-12-30',
    readTime: '7 dk',
    category: 'Pratik'
  },
  {
    slug: 'sufi-gelenegi',
    title: 'Sufi Geleneği: Bin Yılın Bilgeliği',
    excerpt: 'Tasavvufun özünden modern yaşama taşınan öğretiler. Mevlana\'dan günümüze akan nehir.',
    date: '2024-12-28',
    readTime: '12 dk',
    category: 'Gelenek'
  },
  {
    slug: 'dijital-detoks',
    title: 'Dijital Detoks: Ekranlardan Ruha Dönüş',
    excerpt: 'Sürekli bağlantı çağında içsel sessizliği bulmak. Teknoloji ve maneviyat dengesi.',
    date: '2024-12-25',
    readTime: '6 dk',
    category: 'Modern Yaşam'
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E6] text-[#0D4F4F]">
      {/* Hero */}
      <section className="py-20 px-6 bg-[#0D4F4F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-4 text-sm tracking-[0.2em] text-[#C9A962] border border-[#C9A962]/30 rounded-full">
            OLUK BLOG
          </span>
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            Derinlikten <span className="text-[#C9A962]">Yazılar</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Sufi geleneği, meditasyon ve içsel dönüşüm üzerine düşünceler. 
            Her yazı, bin yıllık bilgeliğin modern yorumu.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-[#0D4F4F] to-[#0D4F4F]/70 flex items-center justify-center">
                  <span className="text-[#C9A962] text-6xl font-serif opacity-30 group-hover:opacity-50 transition-opacity">
                    {post.title.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-sm text-[#0D4F4F]/60">
                    <span className="px-2 py-1 bg-[#C9A962]/10 text-[#C9A962] rounded">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-serif mb-3 group-hover:text-[#C9A962] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#0D4F4F]/70 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#0D4F4F]/10 text-sm text-[#0D4F4F]/50">
                    {new Date(post.date).toLocaleDateString('tr-TR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#0D4F4F]/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-serif mb-4">Yolculuğa Başla</h2>
          <p className="text-[#0D4F4F]/70 mb-6">
            Okumak güzel, yaşamak daha güzel. OLUK ile kendi deneyimini başlat.
          </p>
          <Link 
            href="/dersler/arinma"
            className="inline-block px-8 py-3 bg-[#C9A962] text-white rounded-full hover:bg-[#0D4F4F] transition-colors"
          >
            Derslere Göz At
          </Link>
        </div>
      </section>
    </main>
  )
}
