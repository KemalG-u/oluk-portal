'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { seansIcerikleri } from './seans-data';
import type { SeansIcerik } from './seans-data';

export default function SeansDetay({ params }: { params: { slug: string; seans: string } }) {
  const seansNo = parseInt(params.seans);
  const dersSeanslar = seansIcerikleri[params.slug];
  
  if (!dersSeanslar || !dersSeanslar[seansNo]) {
    notFound();
  }
  
  const seans = dersSeanslar[seansNo];
  const toplamSeans = Object.keys(dersSeanslar).length;
  const [transkriptAcik, setTranskriptAcik] = useState(false);
  const [tamamlandi, setTamamlandi] = useState(false);

  return (
    <main className="min-h-screen bg-[#F5F0E6]">
      {/* Header */}
      <header className="bg-[#0D4F4F] text-[#F5F0E6] py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href={`/dersler/${params.slug}`} className="flex items-center gap-2 hover:opacity-80 transition">
            <span>&larr;</span>
            <span>Derse Dön</span>
          </Link>
          <span className="text-[#C9A962] text-sm">
            Seans {seansNo} / {toplamSeans}
          </span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-[#083838] h-1">
        <div 
          className="bg-[#C9A962] h-full transition-all duration-500"
          style={{ width: `${(seansNo / toplamSeans) * 100}%` }}
        />
      </div>

      {/* İçerik */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-[#C9A962] text-sm tracking-widest uppercase mb-2">
            Seans {seansNo}
          </p>
          <h1 className="font-serif text-4xl text-[#0D4F4F] mb-2">
            {seans.baslik}
          </h1>
          <p className="text-[#0D4F4F]/60">{seans.sure}</p>
        </motion.div>

        {/* Açıklama */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-8"
        >
          <p className="text-[#0D4F4F] text-lg leading-relaxed whitespace-pre-line">
            {seans.aciklama}
          </p>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#0D4F4F] rounded-2xl aspect-video flex items-center justify-center mb-8"
        >
          <div className="text-center text-[#F5F0E6]">
            <div className="text-6xl mb-4">▶️</div>
            <p className="text-[#C9A962]">Video içeriği yakında</p>
          </div>
        </motion.div>

        {/* Transkript */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <button
            onClick={() => setTranskriptAcik(!transkriptAcik)}
            className="w-full bg-white rounded-xl p-4 flex items-center justify-between shadow-md hover:shadow-lg transition"
          >
            <span className="text-[#0D4F4F] font-medium">Metin Olarak Oku</span>
            <span className="text-[#C9A962]">{transkriptAcik ? '▲' : '▼'}</span>
          </button>
          
          {transkriptAcik && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-white rounded-b-xl p-6 border-t border-[#F5F0E6]"
            >
              <p className="text-[#0D4F4F]/80 leading-relaxed whitespace-pre-line">
                {seans.transkript}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Pratik */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-[#0D4F4F] to-[#083838] rounded-2xl p-8 text-[#F5F0E6] mb-12"
        >
          <h3 className="text-[#C9A962] font-serif text-xl mb-4">
            {seans.pratik.baslik}
          </h3>
          <p className="text-[#F5F0E6]/80 mb-4">
            {seans.pratik.aciklama}
          </p>
          <p className="text-lg font-medium italic">
            {seans.pratik.soru}
          </p>
        </motion.div>

        {/* Tamamla Butonu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          {!tamamlandi ? (
            <button
              onClick={() => setTamamlandi(true)}
              className="bg-[#C9A962] text-[#0D4F4F] px-8 py-4 rounded-full font-medium hover:bg-[#e0c888] transition shadow-lg"
            >
              Bu Seansı Tamamladım ✓
            </button>
          ) : (
            <div className="space-y-4">
              <p className="text-[#0D4F4F] text-lg">Tebrikler! 🎉</p>
              
              {seansNo < toplamSeans ? (
                <Link
                  href={`/dersler/${params.slug}/${seansNo + 1}`}
                  className="inline-flex items-center gap-2 bg-[#0D4F4F] text-[#F5F0E6] px-8 py-4 rounded-full font-medium hover:bg-[#083838] transition"
                >
                  <span>Sonraki Seans</span>
                  <span>&rarr;</span>
                </Link>
              ) : (
                <Link
                  href="/dersler"
                  className="inline-flex items-center gap-2 bg-[#0D4F4F] text-[#F5F0E6] px-8 py-4 rounded-full font-medium hover:bg-[#083838] transition"
                >
                  <span>Dersi Tamamladın!</span>
                  <span>🏆</span>
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0D4F4F] text-[#F5F0E6]/60 py-8 px-6 text-center mt-12">
        <p className="font-serif text-[#C9A962]">OLUK</p>
        <p className="text-sm mt-2">Akışın Kanalı, Dönüşümün Yolu</p>
      </footer>
    </main>
  );
}
