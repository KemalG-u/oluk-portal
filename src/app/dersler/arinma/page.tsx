
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AsamaCard } from '@/components/AsamaCard';
import '@/styles/modern-cards.css';

const asamalar = [
  { numara: 0, slug: "kapi", isim: "KAPI", slogan: "Neden buradayım?", renk: "#C9A962", aktif: true },
  { numara: 1, slug: "fiziksel", isim: "FİZİKSEL", slogan: "Bedenini hazırla", renk: "#2D5A27", aktif: false },
  { numara: 2, slug: "duygusal", isim: "DUYGUSAL", slogan: "Duyguları çöz", renk: "#1E3A5F", aktif: false },
  { numara: 3, slug: "zihinsel", isim: "ZİHİNSEL", slogan: "Mental çöpü at", renk: "#4A2C6A", aktif: false },
  { numara: 4, slug: "enerjetik", isim: "ENERJETİK", slogan: "Kanalları aç", renk: "#0D4F4F", aktif: false },
  { numara: 5, slug: "iliskisel", isim: "İLİŞKİSEL", slogan: "Bağları kes", renk: "#8B4513", aktif: false },
  { numara: 6, slug: "karmik", isim: "KARMİK", slogan: "Köklere in", renk: "#722F37", aktif: false },
  { numara: 7, slug: "bilincalti", isim: "BİLİNÇALTI", slogan: "Entegre et", renk: "#C0C0C0", aktif: false },
];

export default function ArinmaPage() {
  const [openAsama, setOpenAsama] = useState<number | null>(null);

  return (
    <main
      className="min-h-screen flex flex-col items-center py-6 px-2"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0D4F4F 100%)', minHeight: '100vh' }}
    >
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      {/* Header */}
      <div style={{ width: '100%', maxWidth: 480, margin: '0 auto', position: 'relative', marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
          <Link href="/dersler" style={{ color: '#C9A962', fontWeight: 500, fontSize: 18, textDecoration: 'none', padding: '8px 16px', borderRadius: 8, background: 'rgba(201,169,98,0.08)', transition: 'background 0.2s' }}>&larr; Dersler</Link>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <span style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }}>
              <svg viewBox="0 0 60 80" width="36" height="48">
                <defs>
                  <linearGradient id="dropGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#C9A962" stopOpacity="1" />
                    <stop offset="100%" stopColor="#0D4F4F" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path className="drop-fill" fill="url(#dropGradient)" d="M30 0 C30 0 60 40 60 55 C60 70 47 80 30 80 C13 80 0 70 0 55 C0 40 30 0 30 0 Z" />
              </svg>
            </span>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 32, fontWeight: 700, letterSpacing: 4, color: '#C9A962' }}>ARINMA</span>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: '#F5F0E6', fontSize: 18, fontWeight: 500, marginBottom: 8 }}>8 Aşamalı Derin Temizlik Yolculuğu</div>
        <div style={{ height: 2, background: 'linear-gradient(90deg, #C9A962 0%, #0D4F4F 100%)', borderRadius: 2, margin: '12px 0' }} />
      </div>
      {/* Progress Line ve Kartlar */}
      <div style={{ width: '100%', maxWidth: 480, margin: '0 auto', position: 'relative', display: 'flex', flexDirection: 'column', gap: 0 }}>
        {/* Progress Line */}
        <div style={{ position: 'absolute', left: 32, top: 0, bottom: 0, width: 4, background: 'linear-gradient(180deg, #C9A962 0%, #0D4F4F 100%)', borderRadius: 2, zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          {asamalar.map((asama, idx) => (
            <div key={asama.slug} style={{ position: 'relative' }}>
              <AsamaCard
                numara={asama.numara}
                isim={asama.isim}
                slogan={asama.slogan}
                renk={asama.renk}
                aktif={asama.aktif}
                onClick={() => asama.aktif ? setOpenAsama(asama.numara) : undefined}
                tamamlandi={false}
              />
              {/* Progress connector çizgisi */}
              {idx < asamalar.length - 1 && (
                <div style={{ position: 'absolute', left: 48, top: 'calc(100% - 8px)', width: 2, height: 32, background: 'linear-gradient(180deg, #C9A962 0%, #0D4F4F 100%)', borderRadius: 1, zIndex: 0 }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
