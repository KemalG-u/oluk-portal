'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuAcik, setMenuAcik] = useState(false);

  const menuItems = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/dersler', label: 'Dersler' },
    { href: '/sirdas', label: 'Sırdaş' },
    { href: '/hakkinda', label: 'Hakkımızda' },
    { href: '/iletisim', label: 'İletişim' },
  ];

  return (
    <header className="bg-[#0D4F4F] text-[#F5F0E6] py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl tracking-wide hover:text-[#C9A962] transition">
          OLUK
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#F5F0E6]/80 hover:text-[#C9A962] transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuAcik(!menuAcik)}
          className="md:hidden text-[#F5F0E6] p-2"
          aria-label="Menü"
        >
          {menuAcik ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuAcik && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuAcik(false)}
                className="block py-3 text-[#F5F0E6]/80 hover:text-[#C9A962] transition border-b border-[#F5F0E6]/10"
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
