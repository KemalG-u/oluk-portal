'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { dersler, type DersSlug } from '@/lib/dersler-data';
import { ders1Visuals, ders1Animations } from '@/constants/ders1-assets';

// This is now a client component - SEO metadata is handled in page.server.tsx

export default function DersDetayClient({ params }: { params: { slug: string } }) {
  const ders = dersler[params.slug as DersSlug];
  
  if (!ders) {
    notFound();
  }

  // Ders 1 (Kapı) için özel sayfa
  if (params.slug === 'kapi') {
    return (
      <div className="min-h-screen bg-cream">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-dark via-teal to-teal-light" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="font-serif text-6xl md:text-8xl text-cream mb-4">
              Ders 1
            </h1>
            <p className="font-serif text-4xl md:text-5xl text-gold mb-8">
              Kapı
            </p>
            <p className="text-xl md:text-2xl text-cream-light max-w-2xl mx-auto">
              İlk Adım: Bilinç Kapısını Aralayın
            </p>
          </motion.div>

          {/* Decorative scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-gold rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* Felsefe Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-cream to-cream-light">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-teal-dark mb-6">
                  Bak, Gör, Geç
                </h2>
                <p className="text-lg text-text-muted mb-4 leading-relaxed">
                  OLUK&apos;un temel felsefesi: Durma, takılma, yapışma. 
                  Her şeyi gözlemle, anla ve bırak. Akış içinde kal.
                </p>
                <p className="text-lg text-text-muted leading-relaxed">
                  Nehir gibi akarsın. Taşlara çarpmadan, girdaplara kapılmadan, 
                  özünü koruyarak yoluna devam edersin.
                </p>
              </div>
              
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={ders1Visuals.bakgecFelsefe.url}
                  alt={ders1Visuals.bakgecFelsefe.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enerji Anatomisi Section */}
        <section className="py-20 px-6 bg-teal/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-teal-dark mb-4">
                Enerji Anatomisi
              </h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto">
                Bedeninizin görünmeyen katmanlarını keşfedin
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* 7 Aurik Katman */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative aspect-[9/16]">
                  <img
                    src={ders1Visuals.aurikKatman.url}
                    alt={ders1Visuals.aurikKatman.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-teal-dark mb-2">
                    7 Aurik Katman
                  </h3>
                  <p className="text-text-muted">
                    Enerji bedeninizin yedi tabakası: Fiziksel&apos;den Tanrısal&apos;a
                  </p>
                </div>
              </motion.div>

              {/* 12 Adım Şifa */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative aspect-[9/16]">
                  <img
                    src={ders1Visuals.adimSifa.url}
                    alt={ders1Visuals.adimSifa.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-teal-dark mb-2">
                    12 Adım Şifa Yolu
                  </h3>
                  <p className="text-text-muted">
                    Spiral yükseliş: Kökten taca, cidden öze
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tam Sistem Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-cream-light to-cream">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-teal-dark mb-8 text-center">
                15 Çakralı Tam Sistem
              </h2>
              
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8">
                <img
                  src={ders1Visuals.chakraSistem.url}
                  alt={ders1Visuals.chakraSistem.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-lg text-text-muted text-center max-w-3xl mx-auto">
                Klasik 7 çakra + 8 üst çakra = 15 enerji merkezi. 
                Yerden göğe, maddeden ışığa tam spektrum.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Aktivasyon Akışı Section */}
        <section className="py-20 px-6 bg-teal/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-teal-dark mb-8 text-center">
                19 Aktivasyon Akışı
              </h2>
              
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8">
                <img
                  src={ders1Visuals.aktivasyonAkis.url}
                  alt={ders1Visuals.aktivasyonAkis.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-lg text-text-muted text-center max-w-3xl mx-auto">
                Kodları açma, mühürleri çözme, blokları temizleme. 
                19 aşamalı derinlemesine aktivasyon süreci.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pratik: Nefes Animasyonu */}
        <section className="py-20 px-6 bg-gradient-to-b from-cream to-teal-dark/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-teal-dark mb-4">
                Pratik: 4-4-4-4 Nefes
              </h2>
              <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
                Şimdi deneyin. Videoyu izleyin ve nefes ritmine uyum sağlayın.
              </p>

              <div className="relative aspect-video max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-teal-dark/5">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={ders1Animations.nefes.url} type="video/mp4" />
                  {ders1Animations.nefes.alt}
                </video>
              </div>

              <div className="mt-8 grid grid-cols-4 gap-4 max-w-md mx-auto">
                <div className="bg-white/80 backdrop-blur rounded-lg p-4">
                  <p className="font-serif text-3xl text-gold mb-1">4</p>
                  <p className="text-sm text-text-muted">İç Çek</p>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg p-4">
                  <p className="font-serif text-3xl text-gold mb-1">4</p>
                  <p className="text-sm text-text-muted">Tut</p>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg p-4">
                  <p className="font-serif text-3xl text-gold mb-1">4</p>
                  <p className="text-sm text-text-muted">Ver</p>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg p-4">
                  <p className="font-serif text-3xl text-gold mb-1">4</p>
                  <p className="text-sm text-text-muted">Bekle</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Diğer Animasyonlar Grid */}
        <section className="py-20 px-6 bg-teal-dark/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-teal-dark mb-12 text-center">
              Enerji Teknikleri
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Kalp Tohumu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative aspect-video">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={ders1Animations.kalpTohum.url} type="video/mp4" />
                    {ders1Animations.kalpTohum.alt}
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-teal-dark mb-2">
                    Kalp Tohumu
                  </h3>
                  <p className="text-text-muted text-sm">
                    İçinizdeki ışık tohumunu filizlendirin
                  </p>
                </div>
              </motion.div>

              {/* Enerji Akışı */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative aspect-video">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={ders1Animations.enerjiAkis.url} type="video/mp4" />
                    {ders1Animations.enerjiAkis.alt}
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-teal-dark mb-2">
                    Enerji Yükselişi
                  </h3>
                  <p className="text-text-muted text-sm">
                    Kökten taca kundalini akışı
                  </p>
                </div>
              </motion.div>

              {/* Mor Alev */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative aspect-video">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={ders1Animations.morAlev.url} type="video/mp4" />
                    {ders1Animations.morAlev.alt}
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-teal-dark mb-2">
                    Mor Alev Arınma
                  </h3>
                  <p className="text-text-muted text-sm">
                    Transmütasyon ateşiyle temizlenme
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Seanslar Preview */}
        <section className="py-20 px-6 bg-gradient-to-b from-cream to-cream-light">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-teal-dark mb-4">
                5 Seans Yolculuğu
              </h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto">
                Her biri 8-15 dakika, derin dönüşüm seansları
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Seans 1 Kapak */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow cursor-pointer group"
              >
                <div className="relative aspect-square">
                  <img
                    src={ders1Visuals.menzilKapak.url}
                    alt={ders1Visuals.menzilKapak.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gold font-semibold mb-2">SEANS 1</p>
                  <h3 className="font-serif text-2xl text-teal-dark mb-2">
                    Menzil
                  </h3>
                  <p className="text-text-muted text-sm">
                    Enerjik alanınızı genişletin
                  </p>
                </div>
              </motion.div>

              {/* Placeholder cards for other seanslar */}
              {[
                { no: 2, title: 'Nefes', desc: 'İlk emanet, hayat ritmi' },
                { no: 3, title: 'Teni Ses', desc: 'Bedene dönüş yolculuğu' },
                { no: 4, title: 'Merkez', desc: 'Ruhun durakları' },
                { no: 5, title: 'Mühür', desc: 'Niyet ve sükût' },
              ].map((seans, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-teal-dark/5 to-gold/5 rounded-2xl overflow-hidden border-2 border-dashed border-teal/20 p-6 flex flex-col items-center justify-center min-h-[280px] hover:border-gold/40 transition-colors"
                >
                  <p className="text-sm text-gold font-semibold mb-2">SEANS {seans.no}</p>
                  <h3 className="font-serif text-2xl text-teal-dark mb-2 text-center">
                    {seans.title}
                  </h3>
                  <p className="text-text-muted text-sm text-center">
                    {seans.desc}
                  </p>
                  <p className="text-xs text-teal/60 mt-4">Yakında</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Kapanış Mührü */}
        <section className="py-20 px-6 bg-gradient-to-b from-cream-light to-teal-dark">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square max-w-md mx-auto mb-8">
                <img
                  src={ders1Visuals.muhurKapani.url}
                  alt={ders1Visuals.muhurKapani.alt}
                  className="w-full h-full object-cover rounded-full shadow-2xl"
                />
              </div>

              <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
                Mühür Kapanışı
              </h2>
              <p className="text-xl text-cream-light mb-8 max-w-2xl mx-auto">
                Her seans sonunda, öğrendiğiniz enerjileri içinizde mühürleyin. 
                Dönüşüm kalıcılaşsın.
              </p>

              <Link
                href="/dersler"
                className="inline-block bg-gold hover:bg-gold-muted text-teal-dark font-semibold px-8 py-4 rounded-full transition-colors shadow-lg hover:shadow-xl"
              >
                Tüm Derslere Dön
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  // Diğer dersler için genel layout

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
