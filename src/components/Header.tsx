'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const MODULES = [
  { href: '/moduller/ayna', label: 'AYNA', color: '#0D4F4F' },
  { href: '/moduller/isik', label: 'IŞIK', color: '#C9A962' },
  { href: '/moduller/baglanti', label: 'BAĞLANTI', color: '#2D6A4F' },
  { href: '/moduller/amac', label: 'AMAÇ', color: '#6B21A8' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openModules, setOpenModules] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenModules(false);
  }, [pathname]);

  const linkBase = 'text-base font-medium transition-all duration-200';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#F5F0E6]/95 shadow-md border-b border-[#C9A962]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🌊</span>
          <span className="text-xl font-bold text-[#0D4F4F] group-hover:text-[#C9A962] transition-colors">
            OLUK
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <div className="relative">
            <button
              onClick={() => setOpenModules((p) => !p)}
              className={`${linkBase} flex items-center gap-2 ${
                pathname.startsWith('/moduller') ? 'text-[#6B21A8]' : 'text-[#0D4F4F]/80 hover:text-[#0D4F4F]'
              }`}
            >
              Modüller
              <ChevronDown className="w-4 h-4" />
            </button>
            {openModules && (
              <div className="absolute right-0 mt-3 w-48 rounded-xl bg-white shadow-lg border border-[#0D4F4F]/10 p-3 space-y-2">
                {MODULES.map((modul) => (
                  <Link key={modul.href} href={modul.href} className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-[#F5F0E6]">
                    <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: modul.color }} />
                    <span className="text-sm font-semibold" style={{ color: modul.color }}>{modul.label}</span>
                  </Link>
                ))}
                <Link href="/moduller" className="block text-sm text-[#0D4F4F] px-3 py-2 rounded-lg hover:bg-[#F5F0E6]">
                  Tüm Modüller
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/sirdas"
            className={`${linkBase} ${pathname.startsWith('/sirdas') ? 'text-[#0D4F4F]' : 'text-[#0D4F4F]/80 hover:text-[#0D4F4F]'}`}
          >
            Sırdaş
          </Link>
          <Link
            href="/profil"
            className={`${linkBase} ${pathname.startsWith('/profil') ? 'text-[#0D4F4F]' : 'text-[#0D4F4F]/80 hover:text-[#0D4F4F]'}`}
          >
            Profil
          </Link>
        </div>

        <button
          onClick={() => setIsOpen((p) => !p)}
          className="md:hidden text-[#0D4F4F] h-11 w-11 flex items-center justify-center rounded-md"
          aria-label="Menü"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-[#F5F0E6]/95 border-t border-b border-[#C9A962]">
          <div className="px-4 py-4 space-y-4">
            <Link href="/moduller" className="block text-lg font-semibold text-[#0D4F4F]">Modüller</Link>
            <div className="grid grid-cols-2 gap-3">
              {MODULES.map((modul) => (
                <Link
                  key={modul.href}
                  href={modul.href}
                  className="rounded-lg px-3 py-3 text-sm font-semibold"
                  style={{ backgroundColor: `${modul.color}14`, color: modul.color }}
                >
                  {modul.label}
                </Link>
              ))}
            </div>
            <Link href="/sirdas" className="block text-lg font-medium text-[#0D4F4F]">Sırdaş</Link>
            <Link href="/profil" className="block text-lg font-medium text-[#0D4F4F]">Profil</Link>
          </div>
        </div>
      )}
    </header>
  );
}
