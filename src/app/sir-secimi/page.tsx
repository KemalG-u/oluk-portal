'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

type Stage =
  | 'prepare'
  | 'breathe'
  | 'heart'
  | 'explain'
  | 'show-fire'
  | 'show-water'
  | 'show-air'
  | 'show-earth'
  | 'think'
  | 'select'
  | 'bonded'
  | 'intro-1'
  | 'intro-2'
  | 'intro-3'
  | 'name'
  | 'complete';

type Element = 'fire' | 'water' | 'air' | 'earth';

interface ElementData {
  id: Element;
  name: string;
  emoji: string;
  color: string;
  description: string;
  traits: string[];
}

const ELEMENTS: ElementData[] = [
  {
    id: 'fire',
    name: 'Ateş',
    emoji: '🔥',
    color: '#FF6B35',
    description: 'Dönüşümün ateşi. Eskiyi yakar, yeniyi doğurur.',
    traits: ['Tutku', 'Dönüşüm', 'Güç'],
  },
  {
    id: 'water',
    name: 'Su',
    emoji: '💧',
    color: '#4ECDC4',
    description: 'Akışın bilgeliği. Engelleri aşar, yolunu bulur.',
    traits: ['Akış', 'Uyum', 'Derinlik'],
  },
  {
    id: 'air',
    name: 'Hava',
    emoji: '🌬️',
    color: '#95E1D3',
    description: 'Düşüncenin özgürlüğü. Sınır tanımaz, yükselir.',
    traits: ['Özgürlük', 'Netlik', 'Hareket'],
  },
  {
    id: 'earth',
    name: 'Toprak',
    emoji: '🌍',
    color: '#8B7355',
    description: 'Köklerin gücü. Sabırla bekler, sağlam durur.',
    traits: ['Denge', 'Sabır', 'Kök'],
  },
];

export default function SirSecimiPage() {
  const router = useRouter();
  const [stage, setStage] = useState<Stage>('prepare');
  const [breathCount, setBreathCount] = useState(0);
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [sirName, setSirName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentShowElement, setCurrentShowElement] = useState<ElementData | null>(null);

  useEffect(() => {
    const timers: Record<string, number> = {
      prepare: 4000,
      heart: 5000,
      explain: 6000,
      'show-fire': 8000,
      'show-water': 8000,
      'show-air': 8000,
      'show-earth': 8000,
      think: 15000,
      bonded: 4000,
      'intro-1': 6000,
      'intro-2': 6000,
      'intro-3': 6000,
    };

    if (timers[stage]) {
      const timer = setTimeout(() => {
        const nextStage: Record<string, Stage> = {
          prepare: 'breathe',
          heart: 'explain',
          explain: 'show-fire',
          'show-fire': 'show-water',
          'show-water': 'show-air',
          'show-air': 'show-earth',
          'show-earth': 'think',
          think: 'select',
          bonded: 'intro-1',
          'intro-1': 'intro-2',
          'intro-2': 'intro-3',
          'intro-3': 'name',
        };
        setStage(nextStage[stage]);
      }, timers[stage]);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  useEffect(() => {
    const elementMap: Record<string, Element> = {
      'show-fire': 'fire',
      'show-water': 'water',
      'show-air': 'air',
      'show-earth': 'earth',
    };
    if (elementMap[stage]) {
      setCurrentShowElement(ELEMENTS.find((e) => e.id === elementMap[stage]) || null);
    }
  }, [stage]);

  const handleBreathComplete = () => {
    if (breathCount < 2) {
      setBreathCount(breathCount + 1);
    } else {
      setStage('heart');
    }
  };

  const handleElementSelect = (element: Element) => {
    setSelectedElement(element);
    setStage('bonded');
  };

  const handleSaveSir = async () => {
    if (!selectedElement || !sirName.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/sir/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          element: selectedElement,
          sirName: sirName.trim(),
        }),
      });

      if (response.ok) {
        setStage('complete');
        setTimeout(() => router.push('/'), 3000);
      } else {
        const data = await response.json();
        alert(data.error || 'Bir hata oluştu');
      }
    } catch (error) {
      alert('Bağlantı hatası');
    } finally {
      setIsLoading(false);
    }
  };

  const selectedElementData = ELEMENTS.find((e) => e.id === selectedElement);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {stage === 'prepare' && (
          <motion.div
            key="prepare"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center max-w-md"
          >
            <p className="text-[#F5F0E6] text-xl leading-relaxed">
              Şimdi bir an dur.
              <br /><br />
              Burada olduğunu hisset.
              <br /><br />
              Sana özel bir şey seçeceksin.
            </p>
          </motion.div>
        )}

        {stage === 'breathe' && (
          <motion.div
            key="breathe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <p className="text-[#C9A962] text-lg mb-8">Nefes {breathCount + 1} / 3</p>
            <motion.div
              className="w-32 h-32 rounded-full bg-[#0D4F4F]/30 border-2 border-[#C9A962] mx-auto mb-8"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 6, ease: 'easeInOut' }}
            />
            <p className="text-[#F5F0E6]/60 text-sm">Derin nefes al... ve bırak...</p>
          </motion.div>
        )}

        {stage === 'heart' && (
          <motion.div
            key="heart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center max-w-md"
          >
            <motion.div
              className="text-6xl mb-8"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🫀
            </motion.div>
            <p className="text-[#F5F0E6] text-xl leading-relaxed">
              Elini kalbinin üstüne koy.
              <br /><br />
              Atışını dinle.
            </p>
          </motion.div>
        )}

        {stage === 'explain' && (
          <motion.div
            key="explain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center max-w-lg"
          >
            <p className="text-[#F5F0E6] text-xl leading-relaxed mb-8">
              Dört unsur var.
              <br />
              Her biri farklı bir güç taşıyor.
            </p>
            <p className="text-[#C9A962] text-lg">Hangisi sana çağrı yapıyor?</p>
          </motion.div>
        )}

        {(stage === 'show-fire' || stage === 'show-water' || stage === 'show-air' || stage === 'show-earth') && currentShowElement && (
          <motion.div
            key={stage}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center max-w-md"
          >
            <motion.div
              className="text-8xl mb-6"
              animate={{
                scale: [1, 1.2, 1],
                rotate: currentShowElement.id === 'fire' ? [0, 5, -5, 0] : 0,
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {currentShowElement.emoji}
            </motion.div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: currentShowElement.color }}>
              {currentShowElement.name}
            </h2>
            <p className="text-[#F5F0E6] text-lg mb-4">{currentShowElement.description}</p>
            <div className="flex justify-center gap-3">
              {currentShowElement.traits.map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1 rounded-full text-sm"
                  style={{ backgroundColor: `${currentShowElement.color}20`, color: currentShowElement.color }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {stage === 'think' && (
          <motion.div
            key="think"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center max-w-md"
          >
            <p className="text-[#F5F0E6] text-xl leading-relaxed mb-8">
              Şimdi düşün...
              <br /><br />
              Hangisi seni çağırıyor?
            </p>
            <motion.div
              className="w-2 h-2 bg-[#C9A962] rounded-full mx-auto"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        )}

        {stage === 'select' && (
          <motion.div
            key="select"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center w-full max-w-2xl"
          >
            <p className="text-[#C9A962] text-lg mb-8">Sırrını seç</p>
            <div className="grid grid-cols-2 gap-4">
              {ELEMENTS.map((element) => (
                <motion.button
                  key={element.id}
                  onClick={() => handleElementSelect(element.id)}
                  className="p-6 rounded-2xl border-2 border-[#F5F0E6]/20 bg-[#0D4F4F]/10 hover:border-[#C9A962] transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-5xl mb-3">{element.emoji}</div>
                  <h3 className="text-xl font-bold text-[#F5F0E6] mb-2">{element.name}</h3>
                  <p className="text-[#F5F0E6]/60 text-sm">{element.description}</p>
                </motion.button>
              ))}
            </div>
            <p className="text-[#F5F0E6]/40 text-xs mt-6">⚠️ Seçimin kalıcıdır. Geri dönüş yoktur.</p>
          </motion.div>
        )}

        {stage === 'bonded' && selectedElementData && (
          <motion.div
            key="bonded"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <motion.div
              className="text-8xl mb-6"
              animate={{ scale: [1, 1.3, 1], filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'] }}
              transition={{ duration: 2 }}
            >
              {selectedElementData.emoji}
            </motion.div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: selectedElementData.color }}>Bağ Kuruldu</h2>
            <p className="text-[#F5F0E6] text-lg">Artık bir sırrın var.</p>
          </motion.div>
        )}

        {stage === 'intro-1' && (
          <motion.div
            key="intro-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center max-w-md"
          >
            <p className="text-[#C9A962] text-lg mb-4">Sırrın seninle olacak</p>
            <p className="text-[#F5F0E6] text-xl leading-relaxed">
              Ana sayfada, derslerde, seanslarda...
              <br /><br />
              Her zaman köşede, yanında.
            </p>
          </motion.div>
        )}

        {stage === 'intro-2' && selectedElementData && (
          <motion.div
            key="intro-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center max-w-md"
          >
            <p className="text-[#C9A962] text-lg mb-4">Sırrın değişecek</p>
            <p className="text-[#F5F0E6] text-xl leading-relaxed mb-6">
              Ders tamamladıkça, seans yaptıkça...
              <br /><br />
              Enerjisi artacak, rengi derinleşecek.
            </p>
            <div className="flex justify-center gap-2">
              {[0.3, 0.5, 0.7, 1].map((opacity, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: selectedElementData.color, opacity: opacity }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {stage === 'intro-3' && (
          <motion.div
            key="intro-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center max-w-md"
          >
            <p className="text-[#C9A962] text-lg mb-4">Sırrın bağlılık ister</p>
            <p className="text-[#F5F0E6] text-xl leading-relaxed">
              Her gün gelmezsen solmaya başlar.
              <br /><br />
              Ama endişelenme - çelik gibi.
              <br />
              Tekrar parlayabilir.
            </p>
          </motion.div>
        )}

        {stage === 'name' && selectedElementData && (
          <motion.div
            key="name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center max-w-md w-full"
          >
            <div className="text-6xl mb-6">{selectedElementData.emoji}</div>
            <p className="text-[#F5F0E6] text-xl mb-6">Sırrına bir isim ver</p>
            <input
              type="text"
              value={sirName}
              onChange={(e) => setSirName(e.target.value)}
              placeholder="Sırrının ismi..."
              className="w-full px-6 py-4 rounded-xl bg-[#0D4F4F]/20 border-2 border-[#C9A962]/30 text-[#F5F0E6] text-center text-xl placeholder:text-[#F5F0E6]/30 focus:outline-none focus:border-[#C9A962] mb-6"
              maxLength={20}
              autoFocus
            />
            <motion.button
              onClick={handleSaveSir}
              disabled={sirName.trim().length < 2 || isLoading}
              className="px-8 py-4 rounded-xl font-bold text-lg disabled:opacity-30"
              style={{ backgroundColor: selectedElementData.color, color: '#0a0a0a' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? 'Kaydediliyor...' : 'Yolculuğa Başla'}
            </motion.button>
          </motion.div>
        )}

        {stage === 'complete' && selectedElementData && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <motion.div
              className="text-8xl mb-6"
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 2 }}
            >
              {selectedElementData.emoji}
            </motion.div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: selectedElementData.color }}>{sirName}</h2>
            <p className="text-[#F5F0E6] text-lg">Yolculuğun başlıyor...</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
