import React from 'react';
import { motion } from 'framer-motion';
import '@/styles/modern-cards.css';

interface FazCardProps {
  faz: number;
  title: string;
  slogan: string;
  color: string;
  symbol: 'drop' | 'shield' | 'bolt' | 'star';
  active?: boolean;
  onClick?: () => void;
  locked?: boolean;
}

const symbols = {
  drop: (
    <svg viewBox="0 0 60 80" width="60" height="80">
      <defs>
        <linearGradient id="dropGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C9A962" stopOpacity="1" />
          <stop offset="100%" stopColor="#0D4F4F" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path className="drop-fill" fill="url(#dropGradient)" d="M30 0 C30 0 60 40 60 55 C60 70 47 80 30 80 C13 80 0 70 0 55 C0 40 30 0 30 0 Z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 64 80" width="60" height="80">
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C9A962" stopOpacity="1" />
          <stop offset="100%" stopColor="#0D4F4F" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path fill="url(#shieldGradient)" d="M32 4C32 4 8 12 8 28c0 28 24 44 24 44s24-16 24-44C56 12 32 4 32 4z" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 60 80" width="60" height="80">
      <defs>
        <linearGradient id="boltGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C9A962" stopOpacity="1" />
          <stop offset="100%" stopColor="#0D4F4F" stopOpacity="1" />
        </linearGradient>
      </defs>
      <polygon fill="url(#boltGradient)" points="30,0 10,45 28,45 20,80 50,35 32,35 40,0" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 80 80" width="60" height="80">
      <defs>
        <linearGradient id="starGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C9A962" stopOpacity="1" />
          <stop offset="100%" stopColor="#0D4F4F" stopOpacity="1" />
        </linearGradient>
      </defs>
      <polygon fill="url(#starGradient)" points="40,5 49,30 76,30 54,47 62,73 40,58 18,73 26,47 4,30 31,30" />
    </svg>
  ),
};

function createParticles(count: number) {
  return Array.from({ length: count }).map((_, i) => {
    const left = Math.random() * 100;
    const height = Math.random() * 60 + 40;
    const delay = Math.random() * 3;
    const duration = Math.random() * 2 + 2;
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
  });
}

export const FazCard: React.FC<FazCardProps> = ({ faz, title, slogan, color, symbol, active = true, onClick, locked }) => {
  return (
    <motion.div
      className="relative arinma-card group"
      style={{
        width: '100%',
        maxWidth: 500,
        margin: '0 auto',
        marginBottom: 40,
        borderRadius: 24,
        overflow: 'hidden',
        cursor: active ? 'pointer' : 'not-allowed',
        background: 'linear-gradient(180deg, #0D4F4F 0%, #073333 100%)',
        boxShadow: '0 8px 32px rgba(13, 79, 79, 0.18)',
        opacity: active ? 1 : 0.6,
        position: 'relative',
        transition: 'all 0.4s',
      }}
      whileHover={active ? { y: -8, boxShadow: '0 30px 60px rgba(201, 169, 98, 0.4)' } : {}}
      onClick={active ? onClick : undefined}
      tabIndex={0}
      aria-disabled={!active}
    >
      {/* Arka Plan */}
      <div className="card-bg" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
      {/* Akan Partiküller */}
      <div className="particles" style={{ zIndex: 2 }}>{createParticles(20)}</div>
      {/* Işık Halkası */}
      <div className="glow-ring" style={{ zIndex: 3 }} />
      {/* Merkez Sembol */}
      <div className="center-symbol" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 4, width: 80, height: 80 }}>
        {symbols[symbol]}
        {locked && (
          <svg viewBox="0 0 32 32" width="32" height="32" style={{ position: 'absolute', top: 24, left: 24 }}>
            <circle cx="16" cy="16" r="14" fill="#0D4F4F" stroke="#C9A962" strokeWidth="2" />
            <rect x="10" y="16" width="12" height="7" rx="3" fill="#C9A962" />
            <rect x="13" y="12" width="6" height="7" rx="3" fill="#F5F0E6" />
          </svg>
        )}
      </div>
      {/* İçerik */}
      <div className="card-content" style={{ position: 'relative', zIndex: 10, padding: '50px 40px', minHeight: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div className="card-top" style={{ textAlign: 'center' }}>
          <div className="faz-label" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 3, color, marginBottom: 12 }}>Faz {faz}</div>
          <h2 className="card-title" style={{ fontFamily: 'Playfair Display, serif', fontSize: 36, fontWeight: 600, letterSpacing: 6, marginBottom: 16, background: 'linear-gradient(180deg, #F5F0E6 0%, #C9A962 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{title}</h2>
          <p className="card-tagline" style={{ fontSize: 16, fontStyle: 'italic', color: 'rgba(245, 240, 230, 0.7)', maxWidth: 300, margin: '0 auto', lineHeight: 1.6 }}>{slogan}</p>
        </div>
      </div>
    </motion.div>
  );
};
