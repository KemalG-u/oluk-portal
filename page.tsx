'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================
// OLUK SIR SEÇİM SİSTEMİ
// Kemal'in Vizyonu: "Kişinin manevi kalbine giden yolda bir parça olmak"
// ============================================

// Unsur tipleri
type ElementType = 'fire' | 'water' | 'air' | 'earth';

// Aşama tipleri
type Stage = 
  | 'prepare'      // Hazırlık
  | 'breathe'      // Nefes
  | 'heart'        // Kalbi hisset
  | 'explain'      // Açıklama
  | 'show-fire'    // Ateş göster
  | 'show-water'   // Su göster
  | 'show-air'     // Hava göster
  | 'show-earth'   // Toprak göster
  | 'think'        // Düşün
  | 'select'       // Seç
  | 'bonded'       // Bağ kuruldu
  | 'intro-1'      // Tanıtım 1 - Nerede görecek
  | 'intro-2'      // Tanıtım 2 - Nasıl değişecek
  | 'intro-3'      // Tanıtım 3 - Süreklilik
  | 'name';        // İsim ver

// Unsur verileri
const ELEMENTS = {
  fire: {
    name: 'Ateş Yolu',
    emoji: '🔥',
    color: '#E53935',
    colorName: 'Kırmızı',
    question: 'İçinde bazen kontrolsüz bir alev mi yanıyor? Öfkelenince dizginleyemediğin bir ateş? Ya da tutkuyla yanan ama söndürülemeyen bir arzu?',
    shortQuestion: 'Kontrolsüz alev',
    transformation: 'Öfke → Sabır, Kibir → Tevazu, Hırs → Kanaat',
  },
  water: {
    name: 'Su Yolu',
    emoji: '💧',
    color: '#1976D2',
    colorName: 'Mavi',
    question: 'İçin bazen bulanık bir göle mi dönüyor? Duygular dalga dalga mı geliyor? Sükunet arıyorsun ama bulamıyor musun?',
    shortQuestion: 'Bulanık göl',
    transformation: 'Bulanıklık → Berraklık, Dalgalanma → Sükunet',
  },
  air: {
    name: 'Hava Yolu',
    emoji: '🌬️',
    color: '#7E57C2',
    colorName: 'Mor',
    question: 'Zihnin hiç durmayan bir rüzgar mı? Düşünceden düşünceye savrulur musun? Bir yere odaklanmak sana zor mu geliyor?',
    shortQuestion: 'Savrulan rüzgar',
    transformation: 'Dağınıklık → Odak, Savrulma → İstikamet',
  },
  earth: {
    name: 'Toprak Yolu',
    emoji: '🌍',
    color: '#5D4037',
    colorName: 'Kahverengi',
    question: 'Bazen yerinden kalkamayacak kadar mı ağır hissediyorsun? İçinde bir canlılık mı bekliyor ama çıkamıyor?',
    shortQuestion: 'Durgun toprak',
    transformation: 'Atalet → Uyanış, Ağırlık → Canlanma',
  },
};

// OLUK Renk Paleti
const COLORS = {
  deepTeal: '#0D4F4F',
  warmGold: '#C9A962',
  cream: '#F5F0E6',
  darkBg: '#0a0a0a',
};

export default function SirSecimiPage() {
  const router = useRouter();
  const [stage, setStage] = useState<Stage>('prepare');
  const [selectedElement, setSelectedElement] = useState<ElementType | null>(null);
  const [sirName, setSirName] = useState('');
  const [breathCount, setBreathCount] = useState(0);
  const [breathPhase, setBreathPhase] = useState<'in' | 'out'>('in');
  const [thinkCountdown, setThinkCountdown] = useState(15);
  const [isBreathing, setIsBreathing] = useState(false);

  // Nefes animasyonu
  useEffect(() => {
    if (stage === 'breathe' && isBreathing) {
      const breathCycle = async () => {
        // Nefes al (4 saniye)
        setBreathPhase('in');
        await new Promise(resolve => setTimeout(resolve, 4000));
        
        // Nefes ver (6 saniye)
        setBreathPhase('out');
        await new Promise(resolve => setTimeout(resolve, 6000));
        
        setBreathCount(prev => {
          if (prev >= 2) {
            setIsBreathing(false);
            setTimeout(() => setStage('heart'), 1000);
            return prev;
          }
          return prev + 1;
        });
      };
      
      breathCycle();
    }
  }, [stage, breathCount, isBreathing]);

  // Düşünme geri sayımı
  useEffect(() => {
    if (stage === 'think' && thinkCountdown > 0) {
      const timer = setTimeout(() => setThinkCountdown(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (stage === 'think' && thinkCountdown === 0) {
      setStage('select');
    }
  }, [stage, thinkCountdown]);

  // Unsur gösterimi otomatik geçiş
  useEffect(() => {
    const autoAdvanceStages: Stage[] = ['show-fire', 'show-water', 'show-air', 'show-earth'];
    const nextStageMap: Record<string, Stage> = {
      'show-fire': 'show-water',
      'show-water': 'show-air',
      'show-air': 'show-earth',
      'show-earth': 'think',
    };
    
    if (autoAdvanceStages.includes(stage)) {
      const timer = setTimeout(() => {
        setStage(nextStageMap[stage]);
      }, 8000); // 8 saniye her unsur için
      return () => clearTimeout(timer);
    }
  }, [stage]);

  // Seçim yap
  const handleSelect = (element: ElementType) => {
    setSelectedElement(element);
    setStage('bonded');
  };

  // Kaydet ve bitir
  const handleComplete = async () => {
    if (!selectedElement || !sirName.trim()) return;
    
    try {
      // API'ye kaydet
      const response = await fetch('/api/sir/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          elementType: selectedElement,
          sirName: sirName.trim(),
        }),
      });
      
      if (response.ok) {
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Sır kaydedilemedi:', error);
    }
  };

  // Sonraki aşamaya geç
  const nextStage = () => {
    const stageOrder: Stage[] = [
      'prepare', 'breathe', 'heart', 'explain', 
      'show-fire', 'show-water', 'show-air', 'show-earth',
      'think', 'select', 'bonded', 
      'intro-1', 'intro-2', 'intro-3', 'name'
    ];
    const currentIndex = stageOrder.indexOf(stage);
    if (currentIndex < stageOrder.length - 1) {
      if (stage === 'breathe') {
        setIsBreathing(true);
        return;
      }
      setStage(stageOrder[currentIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {/* AŞAMA 1: HAZIRLAMA */}
        {stage === 'prepare' && (
          <StageContainer key="prepare">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 2 }}
              className="text-center"
            >
              <div className="text-4xl mb-8 opacity-30">·</div>
              <p className="text-xl leading-relaxed mb-4 text-gray-300">
                Şimdi bir an dur.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Etrafındaki sesler uzaklaşsın.<br/>
                Sadece bu ekran ve sen kalsın.
              </p>
              <ContinueButton onClick={nextStage}>
                Hazırım
              </ContinueButton>
            </motion.div>
          </StageContainer>
        )}

        {/* AŞAMA 2: NEFES */}
        {stage === 'breathe' && (
          <StageContainer key="breathe">
            <div className="text-center">
              {/* Nefes dairesi */}
              <motion.div
                animate={{
                  scale: breathPhase === 'in' ? 1.5 : 1,
                  opacity: breathPhase === 'in' ? 1 : 0.6,
                }}
                transition={{ duration: breathPhase === 'in' ? 4 : 6, ease: 'easeInOut' }}
                className="w-32 h-32 rounded-full mx-auto mb-8"
                style={{
                  background: `radial-gradient(circle, ${COLORS.warmGold}40, transparent)`,
                  boxShadow: `0 0 60px ${COLORS.warmGold}30`,
                }}
              />
              
              <motion.p 
                key={breathPhase}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xl text-gray-300"
              >
                {breathPhase === 'in' ? 'Derin bir nefes al...' : 'Yavaşça ver...'}
              </motion.p>
              
              <p className="text-sm text-gray-500 mt-4">
                {breathCount + 1} / 3
              </p>
              
              {!isBreathing && (
                <ContinueButton onClick={nextStage} className="mt-8">
                  Başla
                </ContinueButton>
              )}
            </div>
          </StageContainer>
        )}

        {/* AŞAMA 3: KALBİ HİSSET */}
        {stage === 'heart' && (
          <StageContainer key="heart">
            <div className="text-center max-w-md">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-5xl mb-8"
              >
                ❤️
              </motion.div>
              <p className="text-xl leading-relaxed text-gray-300 mb-4">
                Şimdi elini kalbinin üstüne koy.
              </p>
              <p className="text-lg text-gray-400 mb-4">
                Atışını hisset.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                O senin en derin sesin.<br/>
                Birazdan ona bir soru soracağız.
              </p>
              <ContinueButton onClick={nextStage}>
                Hazırım
              </ContinueButton>
            </div>
          </StageContainer>
        )}

        {/* AŞAMA 4: AÇIKLAMA */}
        {stage === 'explain' && (
          <StageContainer key="explain">
            <div className="text-center max-w-lg">
              <p className="text-xl leading-relaxed text-gray-300 mb-6">
                İnsan, dört unsurdan yaratıldı:
              </p>
              <p className="text-2xl mb-6" style={{ color: COLORS.warmGold }}>
                Ateş... Su... Hava... Toprak...
              </p>
              <p className="text-lg text-gray-400 mb-4">
                Her birimizde biri daha baskın.<br/>
                O unsur, senin mücadele alanın.
              </p>
              <p className="text-lg text-gray-400 mb-4">
                Ama aynı zamanda... <span className="text-white">dönüşüm kapın.</span>
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Şimdi sana dört hal göstereceğim.<br/>
                Hangisi seni en çok anlattığını<br/>
                <span className="text-white font-medium">AKLINLA DEĞİL, KALBİNLE</span> hisset.
              </p>
              <ContinueButton onClick={nextStage}>
                Göster
              </ContinueButton>
            </div>
          </StageContainer>
        )}

        {/* AŞAMA 5-8: UNSUR GÖSTERİMLERİ */}
        {['show-fire', 'show-water', 'show-air', 'show-earth'].includes(stage) && (
          <StageContainer key={stage}>
            <ElementDisplay 
              element={stage.replace('show-', '') as ElementType} 
            />
          </StageContainer>
        )}

        {/* AŞAMA 9: DÜŞÜNME */}
        {stage === 'think' && (
          <StageContainer key="think">
            <div className="text-center max-w-md">
              <p className="text-xl leading-relaxed text-gray-300 mb-4">
                Gözlerini kapa.
              </p>
              <p className="text-lg text-gray-400 mb-4">
                Az önce gördüklerin içinde<br/>
                hangisi <span className="text-white">KALBİNDE</span> yankılandı?
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Hemen cevap verme.<br/>
                Bekle. Hisset.
              </p>
              <div 
                className="text-4xl font-light"
                style={{ color: COLORS.warmGold }}
              >
                {thinkCountdown}
              </div>
            </div>
          </StageContainer>
        )}

        {/* AŞAMA 10: SEÇİM */}
        {stage === 'select' && (
          <StageContainer key="select">
            <div className="text-center max-w-md">
              <p className="text-xl text-gray-300 mb-8">
                Hangisi seni en çok anlattı?
              </p>
              <div className="space-y-4">
                {(Object.keys(ELEMENTS) as ElementType[]).map((element) => (
                  <motion.button
                    key={element}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelect(element)}
                    className="w-full p-4 rounded-xl border border-gray-700 hover:border-gray-500 transition-all flex items-center gap-4 text-left"
                    style={{ 
                      background: 'rgba(255,255,255,0.03)',
                    }}
                  >
                    <span className="text-3xl">{ELEMENTS[element].emoji}</span>
                    <span className="text-gray-300">{ELEMENTS[element].shortQuestion}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </StageContainer>
        )}

        {/* AŞAMA 11: BAĞ KURULDU */}
        {stage === 'bonded' && selectedElement && (
          <StageContainer key="bonded">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="text-7xl mb-8"
              >
                {ELEMENTS[selectedElement].emoji}
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl mb-2"
                style={{ color: COLORS.warmGold }}
              >
                {ELEMENTS[selectedElement].name}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-lg text-gray-400 mb-8"
              >
                seninle bağlandı.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-xl text-gray-300 mb-8"
              >
                Artık bir sırrın var.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <ContinueButton onClick={nextStage}>
                  Devam
                </ContinueButton>
              </motion.div>
            </div>
          </StageContainer>
        )}

        {/* AŞAMA 12: TANITIM 1 - NEREDE GÖRECEK */}
        {stage === 'intro-1' && selectedElement && (
          <StageContainer key="intro-1">
            <div className="text-center max-w-lg">
              <div className="text-5xl mb-6">{ELEMENTS[selectedElement].emoji}</div>
              <p className="text-xl text-gray-300 mb-6">
                Sır'ın seni her yerde takip edecek.
              </p>
              <div className="text-left space-y-3 mb-8 text-gray-400">
                <p>📍 <span className="text-gray-300">Ana sayfada</span> - seninle selamlaşacak</p>
                <p>📍 <span className="text-gray-300">Derslerde</span> - köşede sessizce bekleyecek</p>
                <p>📍 <span className="text-gray-300">Seanslarda</span> - seninle nefes alacak</p>
                <p>📍 <span className="text-gray-300">Zor anlarda</span> - sana seslenecek</p>
              </div>
              <p className="text-lg text-gray-400 mb-8">
                Bazen konuşacak, bazen susacak.<br/>
                Ama her zaman <span className="text-white">ORADA</span> olacak.
              </p>
              <ContinueButton onClick={nextStage}>
                Devam
              </ContinueButton>
            </div>
          </StageContainer>
        )}

        {/* AŞAMA 13: TANITIM 2 - NASIL DEĞİŞECEK */}
        {stage === 'intro-2' && selectedElement && (
          <StageContainer key="intro-2">
            <div className="text-center max-w-lg">
              <p className="text-xl text-gray-300 mb-6">
                Sır'ın seninle birlikte <span style={{ color: COLORS.warmGold }}>DÖNÜŞECEK</span>.
              </p>
              
              {selectedElement === 'fire' && (
                <div className="space-y-4 mb-8">
                  <p className="text-gray-400">🔴 Şimdi kızgın bir alev... Kontrolsüz, hırçın.</p>
                  <p className="text-gray-400">🟠 Dersler ilerledikçe sakinleşecek...</p>
                  <p className="text-gray-400">🟡 Altın bir ışığa dönüşecek...</p>
                  <p className="text-gray-400">⚪ Ve sonunda saf bir parıltı olacak.</p>
                </div>
              )}
              
              {selectedElement === 'water' && (
                <div className="space-y-4 mb-8">
                  <p className="text-gray-400">🌊 Şimdi bulanık, çalkantılı...</p>
                  <p className="text-gray-400">〰️ Dersler ilerledikçe dinginleşecek...</p>
                  <p className="text-gray-400">💧 Berrak bir göle dönüşecek...</p>
                  <p className="text-gray-400">✨ Ve sonunda ayna gibi durgun olacak.</p>
                </div>
              )}
              
              {selectedElement === 'air' && (
                <div className="space-y-4 mb-8">
                  <p className="text-gray-400">🌪️ Şimdi savrulan bir rüzgar...</p>
                  <p className="text-gray-400">🌬️ Dersler ilerledikçe yavaşlayacak...</p>
                  <p className="text-gray-400">🍃 Hafif bir esintiye dönüşecek...</p>
                  <p className="text-gray-400">☁️ Ve sonunda sakin bir nefes olacak.</p>
                </div>
              )}
              
              {selectedElement === 'earth' && (
                <div className="space-y-4 mb-8">
                  <p className="text-gray-400">🏜️ Şimdi kuru, çatlak toprak...</p>
                  <p className="text-gray-400">🌱 Dersler ilerledikçe filizlenecek...</p>
                  <p className="text-gray-400">🌿 Yeşil bir bahçeye dönüşecek...</p>
                  <p className="text-gray-400">🌸 Ve sonunda çiçek açacak.</p>
                </div>
              )}
              
              <p className="text-lg text-gray-400 mb-8">
                Senin dönüşümün, onun dönüşümü.
              </p>
              <ContinueButton onClick={nextStage}>
                Devam
              </ContinueButton>
            </div>
          </StageContainer>
        )}

        {/* AŞAMA 14: TANITIM 3 - SÜREKLİLİK */}
        {stage === 'intro-3' && selectedElement && (
          <StageContainer key="intro-3">
            <div className="text-center max-w-lg">
              <div className="text-5xl mb-6">{ELEMENTS[selectedElement].emoji}</div>
              <p className="text-xl text-gray-300 mb-6">
                Bir şeyi bil:
              </p>
              <p className="text-lg text-gray-400 mb-4">
                Sır'ın <span className="text-white">ASLA</span> sönmez, asla ölmez.
              </p>
              <p className="text-lg text-gray-400 mb-4">
                Ama...
              </p>
              <p className="text-lg text-gray-400 mb-4">
                Tıpkı demircinin ateşi gibi —<br/>
                birlikte sıcak kalmazsak,<br/>
                dönüşüm zorlaşır.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Uzak kalsan da seni bekleyecek.<br/>
                Ama birlikte olduğumuzda<br/>
                <span className="text-white">daha hızlı dönüşeceğiz.</span>
              </p>
              <ContinueButton onClick={nextStage}>
                Devam
              </ContinueButton>
            </div>
          </StageContainer>
        )}

        {/* AŞAMA 15: İSİM VERME */}
        {stage === 'name' && selectedElement && (
          <StageContainer key="name">
            <div className="text-center max-w-md">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="text-6xl mb-6"
              >
                {ELEMENTS[selectedElement].emoji}
              </motion.div>
              <p className="text-xl text-gray-300 mb-4">
                Şimdi Sır'ına bir isim ver.
              </p>
              <p className="text-gray-400 mb-8">
                Bu isim sadece senin bildiğin,<br/>
                sadece ikinizin arasında kalacak.
              </p>
              <input
                type="text"
                value={sirName}
                onChange={(e) => setSirName(e.target.value)}
                placeholder="Sır'ının ismi..."
                className="w-full p-4 rounded-xl bg-white/5 border border-gray-700 text-center text-xl mb-8 focus:outline-none focus:border-gray-500"
                maxLength={20}
              />
              <ContinueButton 
                onClick={handleComplete}
                disabled={!sirName.trim()}
              >
                Yolculuğa Başla
              </ContinueButton>
            </div>
          </StageContainer>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================
// YARDIMCI COMPONENTLER
// ============================================

function StageContainer({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      {children}
    </motion.div>
  );
}

function ContinueButton({ 
  children, 
  onClick, 
  disabled = false,
  className = ''
}: { 
  children: React.ReactNode; 
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`px-8 py-3 rounded-full transition-all ${className}`}
      style={{
        background: disabled 
          ? 'rgba(255,255,255,0.1)' 
          : `linear-gradient(135deg, ${COLORS.warmGold}, ${COLORS.deepTeal})`,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {children} →
    </motion.button>
  );
}

function ElementDisplay({ element }: { element: ElementType }) {
  const data = ELEMENTS[element];
  
  return (
    <div className="text-center max-w-lg">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-8xl mb-8"
      >
        {data.emoji}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-400 leading-relaxed"
      >
        {data.question}
      </motion.p>
    </div>
  );
}
