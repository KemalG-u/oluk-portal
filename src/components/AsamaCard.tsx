import React from 'react';
import { motion } from 'framer-motion';
import '@/styles/modern-cards.css';

interface AsamaCardProps {
  numara: number;
  isim: string;
  slogan: string;
  renk: string;
  aktif: boolean;
  tamamlandi?: boolean;
  onClick?: () => void;
}

export const AsamaCard: React.FC<AsamaCardProps> = ({ numara, isim, slogan, renk, aktif, tamamlandi, onClick }) => {
  return (
    <motion.div
      className="relative group"
      style={{
        width: '100%',
        maxWidth: 420,
        margin: '0 auto',
        marginBottom: 28,
        borderRadius: 18,
        overflow: 'hidden',
        cursor: aktif ? 'pointer' : 'not-allowed',
        background: `linear-gradient(180deg, ${renk} 0%, #0a0a0a 100%)`,
        boxShadow: '0 4px 16px rgba(13, 79, 79, 0.12)',
        opacity: aktif ? 1 : 0.6,
        filter: !aktif ? 'blur(1px)' : 'none',
        position: 'relative',
        transition: 'all 0.3s',
      }}
      whileHover={aktif ? { y: -4, boxShadow: '0 16px 32px rgba(201, 169, 98, 0.18)' } : {}}
      onClick={aktif ? onClick : undefined}
      tabIndex={0}
      aria-disabled={!aktif}
    >
      {/* Akan Partiküller */}
      <div className="particles" style={{ zIndex: 2 }}>{Array.from({ length: 10 }).map((_, i) => {
        const left = Math.random() * 100;
        const height = Math.random() * 40 + 30;
        const delay = Math.random() * 2;
        const duration = Math.random() * 2 + 1.5;
        return (
          <div
            key={i}
            className="particle"
            style={{
              left: `${left}%`,
              height: `${height}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}</div>
      {/* Progress ve ikonlar */}
      <div style={{ position: 'absolute', left: 18, top: 24, zIndex: 5 }}>
        {tamamlandi ? (
          <svg width="28" height="28" viewBox="0 0 28 28"><circle cx="14" cy="14" r="13" fill="#C9A962" /><path d="M8 14l4 4 6-8" stroke="#fff" strokeWidth="2" fill="none"/></svg>
        ) : aktif ? (
          <div className="glow-ring" style={{ width: 38, height: 38, border: '2px solid #C9A962' }} />
        ) : (
          <svg width="28" height="28" viewBox="0 0 32 32"><circle cx="16" cy="16" r="13" fill="#0D4F4F" stroke="#C9A962" strokeWidth="2" /><rect x="10" y="16" width="12" height="7" rx="3" fill="#C9A962" /><rect x="13" y="12" width="6" height="7" rx="3" fill="#F5F0E6" /></svg>
        )}
      </div>
      {/* İçerik */}
      <div style={{ padding: '32px 32px 32px 64px', position: 'relative', zIndex: 10 }}>
        <div style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: 2, color: '#C9A962', marginBottom: 8 }}>Aşama {numara + 1}</div>
        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, fontWeight: 600, letterSpacing: 2, marginBottom: 8, color: '#F5F0E6' }}>{isim}</div>
        <div style={{ fontSize: 15, color: 'rgba(245, 240, 230, 0.7)', fontStyle: 'italic' }}>{slogan}</div>
      </div>
    </motion.div>
  );
};
