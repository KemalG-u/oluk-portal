'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================
// OLUK SEANS MODU - SIR İLE BİRLİKTE NEFES
// Meditasyon ve seanslarda kullanılır
// ============================================

type ElementType = 'fire' | 'water' | 'air' | 'earth';
type BreathPhase = 'inhale' | 'hold' | 'exhale' | 'rest';

interface SirSeansProps {
  elementType: ElementType;
  sirName: string;
  colorStage: number;
  // Nefes ayarları
  inhaleSeconds?: number;
  holdSeconds?: number;
  exhaleSeconds?: number;
  restSeconds?: number;
  // Callbacks
  onBreathComplete?: () => void;
  onSeansEnd?: () => void;
}

// Element verileri
const ELEMENTS = {
  fire: {
    emoji: '🔥',
    colors: ['#E53935', '#FF9800', '#FFC107', '#FFFFFF'],
    glowColors: ['rgba(229,57,53,0.4)', 'rgba(255,152,0,0.4)', 'rgba(255,193,7,0.4)', 'rgba(255,255,255,0.4)'],
    breathMessages: {
      inhale: 'Nefes al... alevle birlikte...',
      hold: 'Tut... enerjiyi hisset...',
      exhale: 'Ver... sakinlik yayılsın...',
      rest: '...',
    },
  },
  water: {
    emoji: '💧',
    colors: ['#1976D2', '#42A5F5', '#81D4FA', '#E1F5FE'],
    glowColors: ['rgba(25,118,210,0.4)', 'rgba(66,165,245,0.4)', 'rgba(129,212,250,0.4)', 'rgba(225,245,254,0.4)'],
    breathMessages: {
      inhale: 'Nefes al... dalgayla birlikte...',
      hold: 'Tut... derinliği hisset...',
      exhale: 'Ver... berraklık yayılsın...',
      rest: '...',
    },
  },
  air: {
    emoji: '🌬️',
    colors: ['#7E57C2', '#9575CD', '#B39DDB', '#EDE7F6'],
    glowColors: ['rgba(126,87,194,0.4)', 'rgba(149,117,205,0.4)', 'rgba(179,157,219,0.4)', 'rgba(237,231,246,0.4)'],
    breathMessages: {
      inhale: 'Nefes al... rüzgarla birlikte...',
      hold: 'Tut... sükuneti hisset...',
      exhale: 'Ver... odak yayılsın...',
      rest: '...',
    },
  },
  earth: {
    emoji: '🌍',
    colors: ['#5D4037', '#8D6E63', '#A1887F', '#4CAF50'],
    glowColors: ['rgba(93,64,55,0.4)', 'rgba(141,110,99,0.4)', 'rgba(161,136,127,0.4)', 'rgba(76,175,80,0.4)'],
    breathMessages: {
      inhale: 'Nefes al... toprakla birlikte...',
      hold: 'Tut... köklerini hisset...',
      exhale: 'Ver... canlılık yayılsın...',
      rest: '...',
    },
  },
};

export default function SirSeans({
  elementType,
  sirName,
  colorStage,
  inhaleSeconds = 4,
  holdSeconds = 4,
  exhaleSeconds = 6,
  restSeconds = 2,
  onBreathComplete,
  onSeansEnd,
}: SirSeansProps) {
  const [phase, setPhase] = useState<BreathPhase>('rest');
  const [breathCount, setBreathCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const element = ELEMENTS[elementType];
  const currentColor = element.colors[colorStage - 1] || element.colors[0];
  const currentGlow = element.glowColors[colorStage - 1] || element.glowColors[0];

  // Nefes döngüsü
  const breathCycle = useCallback(async () => {
    if (!isActive) return;

    // Nefes al
    setPhase('inhale');
    setCountdown(inhaleSeconds);
    for (let i = inhaleSeconds; i > 0; i--) {
      await new Promise(r => setTimeout(r, 1000));
      setCountdown(i - 1);
      if (!isActive) return;
    }

    // Tut
    if (holdSeconds > 0) {
      setPhase('hold');
      setCountdown(holdSeconds);
      for (let i = holdSeconds; i > 0; i--) {
        await new Promise(r => setTimeout(r, 1000));
        setCountdown(i - 1);
        if (!isActive) return;
      }
    }

    // Ver
    setPhase('exhale');
    setCountdown(exhaleSeconds);
    for (let i = exhaleSeconds; i > 0; i--) {
      await new Promise(r => setTimeout(r, 1000));
      setCountdown(i - 1);
      if (!isActive) return;
    }

    // Dinlen
    if (restSeconds > 0) {
      setPhase('rest');
      setCountdown(restSeconds);
      for (let i = restSeconds; i > 0; i--) {
        await new Promise(r => setTimeout(r, 1000));
        setCountdown(i - 1);
        if (!isActive) return;
      }
    }

    setBreathCount(prev => prev + 1);
    onBreathComplete?.();
  }, [isActive, inhaleSeconds, holdSeconds, exhaleSeconds, restSeconds, onBreathComplete]);

  // Döngüyü başlat
  useEffect(() => {
    if (isActive) {
      breathCycle();
    }
  }, [isActive, breathCount, breathCycle]);

  // Başlat/Durdur
  const toggleSeans = () => {
    if (isActive) {
      setIsActive(false);
      setPhase('rest');
      onSeansEnd?.();
    } else {
      setIsActive(true);
      setBreathCount(0);
    }
  };

  // Animasyon ölçeği
  const getScale = () => {
    switch (phase) {
      case 'inhale': return 1.5;
      case 'hold': return 1.5;
      case 'exhale': return 1;
      case 'rest': return 1;
      default: return 1;
    }
  };

  // Animasyon süresi
  const getDuration = () => {
    switch (phase) {
      case 'inhale': return inhaleSeconds;
      case 'hold': return 0.3;
      case 'exhale': return exhaleSeconds;
      case 'rest': return 0.3;
      default: return 1;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
      {/* Sır Simgesi - Nefesle büyüyüp küçülüyor */}
      <motion.div
        animate={{
          scale: getScale(),
          opacity: phase === 'rest' ? 0.7 : 1,
        }}
        transition={{
          duration: getDuration(),
          ease: 'easeInOut',
        }}
        className="relative mb-8"
      >
        {/* Glow efekti */}
        <motion.div
          animate={{
            scale: getScale() * 1.2,
            opacity: phase === 'inhale' || phase === 'hold' ? 0.6 : 0.2,
          }}
          transition={{ duration: getDuration(), ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            background: currentGlow,
            width: '150px',
            height: '150px',
            left: '-25px',
            top: '-25px',
          }}
        />
        
        {/* Ana simge */}
        <div
          className="relative text-8xl flex items-center justify-center w-[100px] h-[100px]"
          style={{
            filter: `drop-shadow(0 0 30px ${currentColor})`,
          }}
        >
          {element.emoji}
        </div>
      </motion.div>

      {/* Mesaj */}
      <AnimatePresence mode="wait">
        <motion.p
          key={phase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-xl text-gray-300 text-center mb-2 h-8"
        >
          {isActive ? element.breathMessages[phase] : `${sirName} seninle nefes almaya hazır.`}
        </motion.p>
      </AnimatePresence>

      {/* Sayaç */}
      {isActive && countdown > 0 && (
        <motion.div
          key={countdown}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-4xl font-light mb-6"
          style={{ color: currentColor }}
        >
          {countdown}
        </motion.div>
      )}

      {/* Nefes sayısı */}
      {isActive && (
        <p className="text-sm text-gray-500 mb-6">
          {breathCount} nefes tamamlandı
        </p>
      )}

      {/* Kontrol butonu */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleSeans}
        className="px-8 py-3 rounded-full text-white transition-all"
        style={{
          background: isActive 
            ? 'rgba(255,255,255,0.1)' 
            : `linear-gradient(135deg, ${currentColor}, #0D4F4F)`,
          border: isActive ? '1px solid rgba(255,255,255,0.2)' : 'none',
        }}
      >
        {isActive ? 'Bitir' : 'Başla'}
      </motion.button>

      {/* İpucu */}
      {!isActive && (
        <p className="text-xs text-gray-600 mt-4 text-center max-w-xs">
          Gözlerini kapa. Sadece {sirName}'ı takip et.
        </p>
      )}
    </div>
  );
}
