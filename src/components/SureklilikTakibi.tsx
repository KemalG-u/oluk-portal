'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// ============================================
// OLUK SÜREKLİLİK TAKİBİ
// Çelik metaforu ile - yargılamadan, nazikçe
// "Streak broken" YOK - sadece devam eden sıcaklık
// ============================================

interface SureklilikProps {
  totalVisits: number;
  longestStreak: number;
  currentStreak: number;
  lastVisit: string;
  elementType: 'fire' | 'water' | 'air' | 'earth';
}

const ELEMENT_METAPHORS = {
  fire: {
    hot: 'Ateş sıcak tutuluyor',
    warm: 'Alev hâlâ yanıyor',
    cool: 'Biraz soğuduk ama kıvılcım var',
    cold: 'Kor hâlâ içinde, üfle yeter',
  },
  water: {
    hot: 'Akış devam ediyor',
    warm: 'Su hâlâ akıyor',
    cool: 'Biraz durakladık ama kaynak var',
    cold: 'Kaynak hâlâ içinde, aç yeter',
  },
  air: {
    hot: 'Nefes düzenli',
    warm: 'Esinti devam ediyor',
    cool: 'Biraz dağıldık ama rüzgar var',
    cold: 'Nefes hâlâ içinde, al yeter',
  },
  earth: {
    hot: 'Toprak canlı',
    warm: 'Filiz büyüyor',
    cool: 'Biraz uyukladık ama tohum var',
    cold: 'Tohum hâlâ içinde, sula yeter',
  },
};

export default function SureklilikTakibi({
  totalVisits,
  longestStreak,
  currentStreak,
  lastVisit,
  elementType,
}: SureklilikProps) {
  const [daysSinceVisit, setDaysSinceVisit] = useState(0);

  useEffect(() => {
    const last = new Date(lastVisit);
    const now = new Date();
    const days = Math.floor((now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
    setDaysSinceVisit(days);
  }, [lastVisit]);

  // Sıcaklık durumu
  const getHeatLevel = () => {
    if (daysSinceVisit === 0) return 'hot';
    if (daysSinceVisit <= 2) return 'warm';
    if (daysSinceVisit <= 5) return 'cool';
    return 'cold';
  };

  const heatLevel = getHeatLevel();
  const metaphor = ELEMENT_METAPHORS[elementType][heatLevel];

  // Renk
  const getColor = () => {
    switch (heatLevel) {
      case 'hot': return '#4CAF50';  // Yeşil
      case 'warm': return '#FFC107'; // Sarı
      case 'cool': return '#FF9800'; // Turuncu
      case 'cold': return '#9E9E9E'; // Gri
    }
  };

  // Son 7 gün grid
  const getLast7Days = () => {
    const days = [];
    const now = new Date();
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      const dayName = date.toLocaleDateString('tr-TR', { weekday: 'short' });
      
      // Basit kontrol: currentStreak'e göre
      const isActive = i < currentStreak || i === 0;
      days.push({
        day: dayName,
        active: isActive,
        isToday: i === 0,
      });
    }
    
    return days;
  };

  const last7Days = getLast7Days();

  return (
    <div
      className="rounded-2xl p-5"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Başlık */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm text-gray-400">Süreklilik</h4>
        <div
          className="px-2 py-1 rounded-full text-xs"
          style={{
            background: `${getColor()}20`,
            color: getColor(),
          }}
        >
          {metaphor}
        </div>
      </div>

      {/* Son 7 gün */}
      <div className="flex justify-between mb-4">
        {last7Days.map((day, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                background: day.active 
                  ? day.isToday 
                    ? getColor() 
                    : `${getColor()}60`
                  : 'rgba(255,255,255,0.05)',
                border: day.isToday ? `2px solid ${getColor()}` : 'none',
              }}
            >
              {day.active && (
                <span className="text-xs">✓</span>
              )}
            </motion.div>
            <span className="text-[10px] text-gray-600">{day.day}</span>
          </div>
        ))}
      </div>

      {/* İstatistikler */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-lg font-light text-white">{currentStreak}</p>
          <p className="text-[10px] text-gray-500">Şu an</p>
        </div>
        <div>
          <p className="text-lg font-light text-white">{longestStreak}</p>
          <p className="text-[10px] text-gray-500">En uzun</p>
        </div>
        <div>
          <p className="text-lg font-light text-white">{totalVisits}</p>
          <p className="text-[10px] text-gray-500">Toplam</p>
        </div>
      </div>

      {/* Çelik metaforu notu */}
      {daysSinceVisit >= 3 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-gray-500 mt-3 text-center italic"
        >
          &quot;Çeliğe şekil vermek için sıcak tutmalı...&quot;
        </motion.p>
      )}
    </div>
  );
}
