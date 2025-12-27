'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/dersler', label: 'Dersler' },
  { href: '/sirdas', label: 'Sırdaş' },
  { href: '/hakkinda', label: 'Hakkında' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#F5F0E6]/95 shadow-md border-b border-[#C9A962]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🌊</span>
          <span className="text-xl font-bold text-[#0D4F4F] group-hover:text-[#C9A962] transition-colors">
            OLUK
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-medium transition-all duration-200 hover:text-[#0D4F4F] ${
                pathname === item.href 
                  ? 'text-[#C9A962] border-b-2 border-[#C9A962] pb-1' 
                  : 'text-[#0D4F4F]/80'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F5F0E6]/95 border-t border-b border-[#C9A962] animate__animated animate__fadeInDown">
          <div className="px-4 py-4 space-y-4">
            {NAV_ITEMS.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-medium transition-colors py-3 ${
                  pathname === item.href ? 'text-[#C9A962]' : 'text-[#0D4F4F]/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
