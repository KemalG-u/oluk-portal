'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

// ============================================
// OLUK SIR COMPANION - Her Sayfada Görünen Sır
// Modlar: Pasif, Dikkatli, Aktif, Seans
// ============================================

type ElementType = 'fire' | 'water' | 'air' | 'earth';
type CompanionMode = 'passive' | 'attentive' | 'active' | 'session';

interface SirData {
  elementType: ElementType;
  sirName: string;
  level: number;
  energy: number;
  colorStage: number;
  lastVisit: string;
}

// Element verileri
const ELEMENTS = {
  fire: {
    emoji: '🔥',
    colors: ['#E53935', '#FF9800', '#FFC107', '#FFFFFF'],
    glowColors: ['rgba(229,57,53,0.3)', 'rgba(255,152,0,0.3)', 'rgba(255,193,7,0.3)', 'rgba(255,255,255,0.3)'],
  },
  water: {
    emoji: '💧',
    colors: ['#1976D2', '#42A5F5', '#81D4FA', '#E1F5FE'],
    glowColors: ['rgba(25,118,210,0.3)', 'rgba(66,165,245,0.3)', 'rgba(129,212,250,0.3)', 'rgba(225,245,254,0.3)'],
  },
  air: {
    emoji: '🌬️',
    colors: ['#7E57C2', '#9575CD', '#B39DDB', '#EDE7F6'],
    glowColors: ['rgba(126,87,194,0.3)', 'rgba(149,117,205,0.3)', 'rgba(179,157,219,0.3)', 'rgba(237,231,246,0.3)'],
  },
  earth: {
    emoji: '🌍',
    colors: ['#5D4037', '#8D6E63', '#A1887F', '#4CAF50'],
    glowColors: ['rgba(93,64,55,0.3)', 'rgba(141,110,99,0.3)', 'rgba(161,136,127,0.3)', 'rgba(76,175,80,0.3)'],
  },
};

// Duruma göre mesajlar
const MESSAGES = {
  fire: {
    greeting: ['Buradayım.', 'Seninleyim.', 'Hazırım.'],
    longAbsence: 'Biraz soğuduk... ama kıvılcım hâlâ içimde.',
    lesson: 'Hissettim. Biraz daha sakinleştik.',
    lateNight: 'Uyuyamıyor musun? Ben de uyanığım.',
  },
  water: {
    greeting: ['Akıyorum.', 'Seninleyim.', 'Buradayım.'],
    longAbsence: 'Biraz bulanıklaştık... ama kaynak hâlâ içimde.',
    lesson: 'Hissettim. Biraz daha berraklaştık.',
    lateNight: 'Geceleri dalgalar daha derin.',
  },
  air: {
    greeting: ['Esiyorum.', 'Seninleyim.', 'Buradayım.'],
    longAbsence: 'Biraz savruludum... ama nefes hâlâ içimde.',
    lesson: 'Hissettim. Biraz daha odaklandık.',
    lateNight: 'Gece sessizliğinde düşünceler daha net.',
  },
  earth: {
    greeting: ['Köklüyüm.', 'Seninleyim.', 'Buradayım.'],
    longAbsence: 'Biraz uyukladık... ama tohum hâlâ içimde.',
    lesson: 'Hissettim. Biraz daha filizlendik.',
    lateNight: 'Gece tohumlar en çok büyür.',
  },
};

export default function SirCompanion() {
  const pathname = usePathname();
  const [sirData, setSirData] = useState<SirData | null>(null);
  const [mode, setMode] = useState<CompanionMode>('passive');
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Sır verilerini yükle
  useEffect(() => {
    const loadSirData = async () => {
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
              lastVisit: data.sir.last_visit,
            });
          }
        }
      } catch (error) {
        console.error('Sır yüklenemedi:', error);
      }
    };

    loadSirData();
  }, []);

  // Mod belirleme
  useEffect(() => {
    if (!sirData) return;

    // Seans sayfasında mı?
    if (pathname?.includes('/seans') || pathname?.includes('/meditasyon')) {
      setMode('session');
      return;
    }

    // Gece mi? (23:00 - 05:00)
    const hour = new Date().getHours();
    const isLateNight = hour >= 23 || hour < 5;

    // Son ziyaretten kaç gün geçmiş?
    const daysSinceVisit = Math.floor(
      (Date.now() - new Date(sirData.lastVisit).getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysSinceVisit >= 3 || isLateNight) {
      setMode('attentive');
      // Dikkatli modda mesaj göster
      const messages = MESSAGES[sirData.elementType];
      if (daysSinceVisit >= 7) {
        setCurrentMessage(messages.longAbsence);
      } else if (isLateNight) {
        setCurrentMessage(messages.lateNight);
      }
      setShowMessage(true);
    } else {
      setMode('passive');
    }
  }, [sirData, pathname]);

  // Sır yoksa gösterme
  if (!sirData) return null;

  // Seçim sayfasında gösterme
  if (pathname?.includes('/sir-secimi')) return null;

  const element = ELEMENTS[sirData.elementType];
  const currentColor = element.colors[sirData.colorStage - 1] || element.colors[0];
  const currentGlow = element.glowColors[sirData.colorStage - 1] || element.glowColors[0];

  return (
    <>
      {/* Ana Companion Simgesi */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Mesaj Balonu */}
        <AnimatePresence>
          {(showMessage || isHovered) && currentMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute bottom-full right-0 mb-3 p-3 rounded-xl max-w-[200px]"
              style={{
                background: 'rgba(13, 79, 79, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(201, 169, 98, 0.3)',
              }}
            >
              <p className="text-sm text-gray-200 leading-relaxed">
                {currentMessage}
              </p>
              <div 
                className="absolute bottom-0 right-6 w-3 h-3 transform translate-y-1/2 rotate-45"
                style={{ background: 'rgba(13, 79, 79, 0.95)' }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Simge */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
          style={{
            background: `radial-gradient(circle, ${currentColor}20, transparent)`,
            boxShadow: `0 0 30px ${currentGlow}`,
          }}
        >
          {/* Nefes Animasyonu */}
          <motion.div
            animate={{
              scale: mode === 'session' ? [1, 1.2, 1] : [1, 1.05, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: mode === 'session' ? 4 : 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-3xl"
          >
            {element.emoji}
          </motion.div>

          {/* Dikkatli mod göstergesi */}
          {mode === 'attentive' && (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
              style={{ background: currentColor }}
            />
          )}
        </motion.button>

        {/* Enerji Çubuğu (hover'da görünür) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 56 }}
              exit={{ opacity: 0, width: 0 }}
              className="absolute -bottom-2 left-0 h-1 rounded-full overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${sirData.energy}%` }}
                className="h-full rounded-full"
                style={{ background: currentColor }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Genişletilmiş Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed bottom-24 right-6 w-72 rounded-2xl p-5 z-50"
            style={{
              background: 'rgba(10, 10, 10, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(201, 169, 98, 0.2)',
            }}
          >
            {/* Başlık */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{element.emoji}</span>
              <div>
                <h3 className="text-lg font-medium text-white">{sirData.sirName}</h3>
                <p className="text-sm text-gray-400">
                  {sirData.elementType === 'fire' && 'Ateş Yolu'}
                  {sirData.elementType === 'water' && 'Su Yolu'}
                  {sirData.elementType === 'air' && 'Hava Yolu'}
                  {sirData.elementType === 'earth' && 'Toprak Yolu'}
                </p>
              </div>
            </div>

            {/* Enerji */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Enerji</span>
                <span className="text-gray-300">{sirData.energy}%</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${sirData.energy}%` }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${currentColor}, ${element.colors[Math.min(sirData.colorStage, 3)]})` }}
                />
              </div>
            </div>

            {/* Seviye */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-gray-400">Seviye:</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((lvl) => (
                  <div
                    key={lvl}
                    className="w-6 h-1 rounded-full"
                    style={{
                      background: lvl <= sirData.level 
                        ? element.colors[lvl - 1] 
                        : 'rgba(255,255,255,0.1)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Mesaj */}
            <p className="text-sm text-gray-300 italic">
              "{MESSAGES[sirData.elementType].greeting[Math.floor(Math.random() * 3)]}"
            </p>

            {/* Kapat butonu */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-300 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
