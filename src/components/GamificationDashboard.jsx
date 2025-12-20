'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function GamificationDashboard({ userId = 'demo' }) {
  const [stats, setStats] = useState({
    streak: 7,
    level: 3,
    xp: 450,
    xpToNext: 500,
    badges: ['🔥', '⭐', '🎯']
  });

  useEffect(() => {
    // Gerçek uygulamada Supabase'den çekilecek
    // const { data } = await supabase
    //   .from('user_progress')
    //   .select('*')
    //   .eq('user_id', userId)
  }, [userId]);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
      {/* Streak */}
      <motion.div 
        className="text-center mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-6xl mb-2">🔥</div>
        <div className="text-3xl font-bold text-teal-dark">{stats.streak}</div>
        <div className="text-sm text-text-muted">Gün Streak</div>
      </motion.div>

      {/* Level & XP */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Level {stats.level}</span>
          <span className="text-xs text-text-muted">{stats.xp}/{stats.xpToNext} XP</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <motion.div 
            className="bg-gradient-to-r from-teal to-teal-dark h-full glow-teal"
            initial={{ width: 0 }}
            animate={{ width: `${(stats.xp / stats.xpToNext) * 100}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Badges */}
      <div className="border-t pt-4">
        <div className="text-xs text-text-muted mb-3">Rozetler</div>
        <div className="flex gap-3 justify-center">
          {stats.badges.map((badge, i) => (
            <motion.div
              key={i}
              className="text-4xl"
              initial={{ rotate: 0, scale: 1 }}
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              {badge}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Başarı İlerleme */}
      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-gradient-to-r from-teal to-teal-dark text-white rounded-full hover:shadow-lg transition-all">
          Tüm Başarılar
        </button>
      </div>
    </div>
  );
}
