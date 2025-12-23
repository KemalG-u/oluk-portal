'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// ============================================
// OLUK DASHBOARD SIR KARTI
// Ana sayfada kullanıcının Sır'ını gösterir
// ============================================

type ElementType = 'fire' | 'water' | 'air' | 'earth';

interface SirData {
  elementType: ElementType;
  sirName: string;
  level: number;
  energy: number;
  colorStage: number;
  totalLessons: number;
  totalPractices: number;
  lastVisit: string;
}

const ELEMENTS = {
  fire: {
    emoji: '🔥',
    name: 'Ateş Yolu',
    colors: ['#E53935', '#FF9800', '#FFC107', '#FFFFFF'],
    levelNames: ['Kızgın Alev', 'Sakinleşen Alev', 'Altın Işık', 'Saf Parıltı'],
    shortDesc: 'Öfke → Sabır',
  },
  water: {
    emoji: '💧',
    name: 'Su Yolu',
    colors: ['#1976D2', '#42A5F5', '#81D4FA', '#E1F5FE'],
    levelNames: ['Bulanık Göl', 'Açılan Su', 'Berrak Kaynak', 'Kristal Ayna'],
    shortDesc: 'Bulanıklık → Berraklık',
  },
  air: {
    emoji: '🌬️',
    name: 'Hava Yolu',
    colors: ['#7E57C2', '#9575CD', '#B39DDB', '#EDE7F6'],
    levelNames: ['Savrulan Rüzgar', 'Yavaşlayan Esinti', 'Sakin Nefes', 'Derin Sükunet'],
    shortDesc: 'Dağınıklık → Odak',
  },
  earth: {
    emoji: '🌍',
    name: 'Toprak Yolu',
    colors: ['#5D4037', '#8D6E63', '#A1887F', '#4CAF50'],
    levelNames: ['Kuru Toprak', 'Filizlenen Tohum', 'Yeşeren Bahçe', 'Çiçek Açan Cennet'],
    shortDesc: 'Atalet → Canlanma',
  },
};

export default function DashboardSirCard() {
  const [sirData, setSirData] = useState<SirData | null>(null);
  const [loading, setLoading] = useState(true);
  const [daysSinceVisit, setDaysSinceVisit] = useState(0);

  useEffect(() => {
    const loadSir = async () => {
      try {
        const response = await fetch('/api/sir/get');
        if (response.ok) {
          const data = await response.json();
          if (data.sir) {
            setSirData({
              elementType: data.sir.element_type,
              sirName: data.sir.sir_name,
              level: data.sir.level,
              energy: data.sir.energy,
              colorStage: data.sir.color_stage,
              totalLessons: data.sir.total_lessons,
              totalPractices: data.sir.total_practices,
              lastVisit: data.sir.last_visit,
            });
            setDaysSinceVisit(data.daysSinceLastVisit || 0);
          }
        }
      } catch (error) {
        console.error('Sır yüklenemedi:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSir();
  }, []);

  // Yükleniyor
  if (loading) {
    return (
      <div className="rounded-2xl p-6 animate-pulse" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <div className="h-20 bg-gray-800 rounded-xl" />
      </div>
    );
  }

  // Sır yok - seçim sayfasına yönlendir
  if (!sirData) {
    return (
      <Link href="/sir-secimi">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl p-6 cursor-pointer transition-all border border-dashed border-gray-700 hover:border-gray-500"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          <div className="text-center">
            <p className="text-4xl mb-3">✨</p>
            <p className="text-gray-300 mb-1">Henüz bir Sır&apos;ın yok</p>
            <p className="text-sm text-gray-500">Dönüşüm yolculuğuna başla →</p>
          </div>
        </motion.div>
      </Link>
    );
  }

  const element = ELEMENTS[sirData.elementType];
  const currentColor = element.colors[sirData.colorStage - 1] || element.colors[0];
  const levelName = element.levelNames[sirData.level - 1] || element.levelNames[0];

  // Hoşgeldin mesajı
  const getWelcomeMessage = () => {
    if (daysSinceVisit === 0) {
      return 'Bugün de buradasın. Güzel.';
    } else if (daysSinceVisit === 1) {
      return 'Dün de gelmiştin. Devam ediyoruz.';
    } else if (daysSinceVisit <= 3) {
      return `${daysSinceVisit} gün olmuş. Özledim.`;
    } else if (daysSinceVisit <= 7) {
      return 'Biraz uzak kaldık... ama buradayım.';
    } else {
      return 'Uzun zaman oldu. Ama bekledim.';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl p-6 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(13,79,79,0.3), rgba(10,10,10,0.9))`,
        border: '1px solid rgba(201,169,98,0.2)',
      }}
    >
      {/* Arka plan glow */}
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20"
        style={{ background: currentColor }}
      />

      {/* Üst kısım - Sır ve isim */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="flex items-center gap-4">
          {/* Sır simgesi */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-5xl"
            style={{ filter: `drop-shadow(0 0 20px ${currentColor})` }}
          >
            {element.emoji}
          </motion.div>

          {/* İsim ve yol */}
          <div>
            <h3 className="text-xl font-medium text-white">{sirData.sirName}</h3>
            <p className="text-sm text-gray-400">{element.name}</p>
          </div>
        </div>

        {/* Seviye rozeti */}
        <div
          className="px-3 py-1 rounded-full text-xs"
          style={{
            background: `${currentColor}20`,
            color: currentColor,
            border: `1px solid ${currentColor}40`,
          }}
        >
          {levelName}
        </div>
      </div>

      {/* Hoşgeldin mesajı */}
      <p className="text-gray-400 text-sm mb-4 italic">&quot;{getWelcomeMessage()}&quot;</p>

      {/* Enerji çubuğu */}
      <div className="mb-4">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-500">Enerji</span>
          <span className="text-gray-400">{sirData.energy}%</span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${sirData.energy}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${currentColor}, ${element.colors[Math.min(sirData.colorStage, 3)]})`,
            }}
          />
        </div>
      </div>

      {/* İstatistikler */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <p className="text-2xl font-light text-white">{sirData.totalLessons}</p>
          <p className="text-xs text-gray-500">Ders</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-light text-white">{sirData.totalPractices}</p>
          <p className="text-xs text-gray-500">Seans</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-light text-white">{sirData.level}/4</p>
          <p className="text-xs text-gray-500">Seviye</p>
        </div>
      </div>

      {/* Seviye ilerleme */}
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((lvl) => (
          <div
            key={lvl}
            className="flex-1 h-1 rounded-full transition-all"
            style={{
              background: lvl <= sirData.level ? element.colors[lvl - 1] : 'rgba(255,255,255,0.1)',
            }}
          />
        ))}
      </div>

      {/* Dönüşüm açıklaması */}
      <p className="text-xs text-gray-600 mt-3 text-center">
        {element.shortDesc}
      </p>
    </motion.div>
  );
}
