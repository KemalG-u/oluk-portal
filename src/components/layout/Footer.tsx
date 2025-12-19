import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0D4F4F] text-[#F5F0E6]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Logo & Slogan */}
          <div>
            <p className="font-serif text-2xl text-[#C9A962] mb-2">OLUK</p>
            <p className="text-[#F5F0E6]/60 text-sm">
              Akışın Kanalı, Dönüşümün Yolu
            </p>
          </div>

          {/* Keşfet */}
          <div>
            <h4 className="text-[#C9A962] font-medium mb-4">Keşfet</h4>
            <ul className="space-y-2 text-sm text-[#F5F0E6]/60">
              <li><Link href="/dersler" className="hover:text-[#C9A962] transition">Dersler</Link></li>
              <li><Link href="/hakkinda" className="hover:text-[#C9A962] transition">Hakkımızda</Link></li>
              <li><Link href="/blog" className="hover:text-[#C9A962] transition">Blog</Link></li>
            </ul>
          </div>

          {/* Yasal */}
          <div>
            <h4 className="text-[#C9A962] font-medium mb-4">Yasal</h4>
            <ul className="space-y-2 text-sm text-[#F5F0E6]/60">
              <li><Link href="/gizlilik" className="hover:text-[#C9A962] transition">Gizlilik Politikası</Link></li>
              <li><Link href="/kvkk" className="hover:text-[#C9A962] transition">KVKK</Link></li>
              <li><Link href="/kullanim-kosullari" className="hover:text-[#C9A962] transition">Kullanım Koşulları</Link></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-[#C9A962] font-medium mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm text-[#F5F0E6]/60">
              <li><Link href="/iletisim" className="hover:text-[#C9A962] transition">Bize Ulaşın</Link></li>
              <li><a href="mailto:merhaba@oluk.org" className="hover:text-[#C9A962] transition">merhaba@oluk.org</a></li>
            </ul>
          </div>
        </div>

        {/* Alt Çizgi */}
        <div className="border-t border-[#F5F0E6]/10 mt-12 pt-8 text-center text-sm text-[#F5F0E6]/40">
          <p>© 2024 OLUK. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
