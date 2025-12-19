'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { dersler, type DersSlug } from '@/lib/dersler-data';

export default function DersDetay({ params }: { params: { slug: string } }) {
  const ders = dersler[params.slug as DersSlug];
  
  if (!ders) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F5F0E6]">
      {/* Header */}
      <header className="bg-[#0D4F4F] text-[#F5F0E6] py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/dersler" className="flex items-center gap-2 hover:opacity-80 transition">
            <span>&larr;</span>
            <span>Dersler</span>
          </Link>
          <Link href="/" className="font-serif text-xl tracking-wide">OLUK</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0D4F4F] to-[#083838] text-[#F5F0E6] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl mb-6"
          >
            {ders.icon}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#C9A962] text-sm tracking-widest uppercase mb-2"
          >
            {ders.id}. Konak
          </motion.p>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-serif text-5xl md:text-6xl mb-4"
          >
            {ders.baslik}
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[#C9A962] text-xl italic"
          >
            {ders.altBaslik}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-[#F5F0E6]/60"
          >
            {ders.seanslar.length} seans · {ders.sure}
          </motion.p>
        </div>
      </section>

      {/* Giriş Metni */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#C9A962]/20"
          >
            <div className="w-12 h-1 bg-[#C9A962] mb-8" />
            <p className="text-[#0D4F4F] text-lg leading-relaxed whitespace-pre-line font-light">
              {ders.giris}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seanslar */}
      <section className="py-16 px-6 bg-[#0D4F4F]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-[#F5F0E6] text-center mb-12">
            Seanslar
          </h2>
          
          <div className="space-y-4">
            {ders.seanslar.map((seans, index) => (
              <motion.div
                key={seans.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#083838] rounded-xl p-6 flex items-center justify-between group hover:bg-[#0a4545] transition cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border-2 border-[#C9A962] flex items-center justify-center text-[#C9A962] font-serif">
                    {seans.id}
                  </div>
                  <div>
                    <h3 className="text-[#F5F0E6] font-medium">{seans.baslik}</h3>
                    <p className="text-[#F5F0E6]/50 text-sm">{seans.sure}</p>
                  </div>
                </div>
                <div className="text-[#C9A962] opacity-0 group-hover:opacity-100 transition">
                  &rarr;
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kazanımlar */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-[#0D4F4F] text-center mb-4">
            Bu Kapıdan Geçtiğinde
          </h2>
          <div className="w-16 h-1 bg-[#C9A962] mx-auto mb-12" />
          
          <div className="grid md:grid-cols-2 gap-6">
            {ders.kazanimlar.map((kazanim, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#C9A962]"
              >
                <p className="text-[#0D4F4F] leading-relaxed">
                  {kazanim}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#F5F0E6] to-[#e8e0d0]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[#0D4F4F]/60 mb-6 italic">
              Hazırsan, perdeler aralanıyor.
            </p>
            
            <Link
              href={`/dersler/${params.slug}/1`}
              className="inline-flex items-center gap-3 bg-[#0D4F4F] text-[#F5F0E6] px-10 py-4 rounded-full text-lg font-medium hover:bg-[#083838] transition shadow-lg hover:shadow-xl"
            >
              <span>Eşiği Geç</span>
              <span>&rarr;</span>
            </Link>
            
            <p className="mt-8 text-[#0D4F4F]/40 text-sm">
              Bismillah
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D4F4F] text-[#F5F0E6]/60 py-8 px-6 text-center">
        <p className="font-serif text-[#C9A962]">OLUK</p>
        <p className="text-sm mt-2">Akışın Kanalı, Dönüşümün Yolu</p>
      </footer>
    </main>
  );
}
