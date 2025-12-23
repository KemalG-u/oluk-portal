// ...existing code...
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

type ElementType = 'fire' | 'water' | 'air' | 'earth';

type Stage = 
	| 'prepare' | 'breathe' | 'heart' | 'explain'
	| 'show-fire' | 'show-water' | 'show-air' | 'show-earth'
	| 'think' | 'select' | 'bonded'
	| 'intro-1' | 'intro-2' | 'intro-3' | 'name';

const ELEMENTS = {
	fire: {
		name: 'Ateş Yolu',
		emoji: '🔥',
		color: '#E53935',
		question: 'İçinde bazen kontrolsüz bir alev mi yanıyor?',
		shortQuestion: 'Kontrolsüz alev',
	},
	water: {
		name: 'Su Yolu',
		emoji: '💧',
		color: '#1976D2',
		question: 'İçin bazen bulanık bir göle mi dönüyor?',
		shortQuestion: 'Bulanık göl',
	},
	air: {
		name: 'Hava Yolu',
		emoji: '🌬️',
		color: '#7E57C2',
		question: 'Zihnin hiç durmayan bir rüzgar mı?',
		shortQuestion: 'Savrulan rüzgar',
	},
	earth: {
		name: 'Toprak Yolu',
		emoji: '🌍',
		color: '#5D4037',
		question: 'Bazen yerinden kalkamayacak kadar mı ağır hissediyorsun?',
		shortQuestion: 'Durgun toprak',
	},
};

const COLORS = {
	warmGold: '#C9A962',
	deepTeal: '#0D4F4F',
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

	useEffect(() => {
		if (stage === 'breathe' && isBreathing && breathCount < 3) {
			const breathCycle = async () => {
				setBreathPhase('in');
				await new Promise(resolve => setTimeout(resolve, 4000));
				setBreathPhase('out');
				await new Promise(resolve => setTimeout(resolve, 6000));
				setBreathCount(prev => prev + 1);
			};
			breathCycle();
		} else if (breathCount >= 3) {
			setIsBreathing(false);
			setTimeout(() => setStage('heart'), 1000);
		}
	}, [stage, breathCount, isBreathing]);

	useEffect(() => {
		if (stage === 'think' && thinkCountdown > 0) {
			const timer = setTimeout(() => setThinkCountdown(prev => prev - 1), 1000);
			return () => clearTimeout(timer);
		} else if (stage === 'think' && thinkCountdown === 0) {
			setStage('select');
		}
	}, [stage, thinkCountdown]);

	useEffect(() => {
		const autoStages: Stage[] = ['show-fire', 'show-water', 'show-air', 'show-earth'];
		const nextMap: Record<string, Stage> = {
			'show-fire': 'show-water',
			'show-water': 'show-air',
			'show-air': 'show-earth',
			'show-earth': 'think',
		};
		if (autoStages.includes(stage)) {
			const timer = setTimeout(() => setStage(nextMap[stage]), 8000);
			return () => clearTimeout(timer);
		}
	}, [stage]);

	const handleSelect = (element: ElementType) => {
		setSelectedElement(element);
		setStage('bonded');
	};

	const handleComplete = async () => {
		if (!selectedElement || !sirName.trim()) return;
		try {
			const response = await fetch('/api/sir/create', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ elementType: selectedElement, sirName: sirName.trim() }),
			});
			if (response.ok) {
				router.push('/');
			}
		} catch (error) {
			console.error('Sır kaydedilemedi:', error);
		}
	};

	const nextStage = () => {
		const order: Stage[] = ['prepare', 'breathe', 'heart', 'explain', 'show-fire', 'show-water', 'show-air', 'show-earth', 'think', 'select', 'bonded', 'intro-1', 'intro-2', 'intro-3', 'name'];
		const idx = order.indexOf(stage);
		if (idx < order.length - 1) {
			if (stage === 'breathe') { setIsBreathing(true); return; }
			setStage(order[idx + 1]);
		}
	};

	return (
		<div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4">
			<AnimatePresence mode="wait">
				{stage === 'prepare' && (
					<StageBox key="prepare">
						<p className="text-xl text-gray-300 mb-4">Şimdi bir an dur.</p>
						<p className="text-lg text-gray-400 mb-8">Etrafındaki sesler uzaklaşsın.<br/>Sadece bu ekran ve sen kalsın.</p>
						<Btn onClick={nextStage}>Hazırım</Btn>
					</StageBox>
				)}

				{stage === 'breathe' && (
					<StageBox key="breathe">
						<motion.div animate={{ scale: breathPhase === 'in' ? 1.5 : 1 }} transition={{ duration: breathPhase === 'in' ? 4 : 6 }} className="w-32 h-32 rounded-full mx-auto mb-8" style={{ background: `radial-gradient(circle, ${COLORS.warmGold}40, transparent)` }} />
						<p className="text-xl text-gray-300">{breathPhase === 'in' ? 'Derin bir nefes al...' : 'Yavaşça ver...'}</p>
						<p className="text-sm text-gray-500 mt-4">{breathCount + 1} / 3</p>
						{!isBreathing && <Btn onClick={nextStage} className="mt-8">Başla</Btn>}
					</StageBox>
				)}

				{stage === 'heart' && (
					<StageBox key="heart">
						<p className="text-5xl mb-8">❤️</p>
						<p className="text-xl text-gray-300 mb-4">Şimdi elini kalbinin üstüne koy.</p>
						<p className="text-lg text-gray-400 mb-8">Atışını hisset. O senin en derin sesin.</p>
						<Btn onClick={nextStage}>Hazırım</Btn>
					</StageBox>
				)}

				{stage === 'explain' && (
					<StageBox key="explain">
						<p className="text-xl text-gray-300 mb-6">İnsan, dört unsurdan yaratıldı:</p>
						<p className="text-2xl mb-6" style={{ color: COLORS.warmGold }}>Ateş... Su... Hava... Toprak...</p>
						<p className="text-lg text-gray-400 mb-8">Her birimizde biri daha baskın. Hangisi seni en çok anlattığını KALBİNLE hisset.</p>
						<Btn onClick={nextStage}>Göster</Btn>
					</StageBox>
				)}

				{['show-fire', 'show-water', 'show-air', 'show-earth'].includes(stage) && (
					<StageBox key={stage}>
						<p className="text-8xl mb-8">{ELEMENTS[stage.replace('show-', '') as ElementType].emoji}</p>
						<p className="text-lg text-gray-400">{ELEMENTS[stage.replace('show-', '') as ElementType].question}</p>
					</StageBox>
				)}

				{stage === 'think' && (
					<StageBox key="think">
						<p className="text-xl text-gray-300 mb-4">Gözlerini kapa.</p>
						<p className="text-lg text-gray-400 mb-8">Hangisi KALBİNDE yankılandı? Bekle. Hisset.</p>
						<p className="text-4xl" style={{ color: COLORS.warmGold }}>{thinkCountdown}</p>
					</StageBox>
				)}

				{stage === 'select' && (
					<StageBox key="select">
						<p className="text-xl text-gray-300 mb-8">Hangisi seni en çok anlattı?</p>
						<div className="space-y-4">
							{(Object.keys(ELEMENTS) as ElementType[]).map((el) => (
								<motion.button key={el} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => handleSelect(el)} className="w-full p-4 rounded-xl border border-gray-700 hover:border-gray-500 flex items-center gap-4 text-left" style={{ background: 'rgba(255,255,255,0.03)' }}>
									<span className="text-3xl">{ELEMENTS[el].emoji}</span>
									<span className="text-gray-300">{ELEMENTS[el].shortQuestion}</span>
								</motion.button>
							))}
						</div>
					</StageBox>
				)}

				{stage === 'bonded' && selectedElement && (
					<StageBox key="bonded">
						<p className="text-7xl mb-8">{ELEMENTS[selectedElement].emoji}</p>
						<p className="text-xl mb-2" style={{ color: COLORS.warmGold }}>{ELEMENTS[selectedElement].name}</p>
						<p className="text-lg text-gray-400 mb-4">seninle bağlandı.</p>
						<p className="text-xl text-gray-300 mb-8">Artık bir sırrın var.</p>
						<Btn onClick={nextStage}>Devam</Btn>
					</StageBox>
				)}

				{stage === 'intro-1' && selectedElement && (
					<StageBox key="intro-1">
						<p className="text-5xl mb-6">{ELEMENTS[selectedElement].emoji}</p>
						<p className="text-xl text-gray-300 mb-6">Sırın seni her yerde takip edecek.</p>
						<div className="text-left space-y-3 mb-8 text-gray-400">
							<p>📍 <span className="text-gray-300">Ana sayfada</span> - seninle selamlaşacak</p>
							<p>📍 <span className="text-gray-300">Derslerde</span> - köşede sessizce bekleyecek</p>
							<p>📍 <span className="text-gray-300">Seanslarda</span> - seninle nefes alacak</p>
						</div>
						<Btn onClick={nextStage}>Devam</Btn>
					</StageBox>
				)}

				{stage === 'intro-2' && selectedElement && (
					<StageBox key="intro-2">
						<p className="text-xl text-gray-300 mb-6">Sırın seninle birlikte <span style={{ color: COLORS.warmGold }}>DÖNÜŞECEK</span>.</p>
						<div className="space-y-4 mb-8 text-gray-400">
							<p>🔴 Şimdi başlangıç halinde...</p>
							<p>🟠 Dersler ilerledikçe değişecek...</p>
							<p>🟡 Altın bir parıltıya dönüşecek...</p>
							<p>⚪ Ve sonunda saf ışık olacak.</p>
						</div>
						<p className="text-lg text-gray-400 mb-8">Senin dönüşümün, onun dönüşümü.</p>
						<Btn onClick={nextStage}>Devam</Btn>
					</StageBox>
				)}

				{stage === 'intro-3' && selectedElement && (
					<StageBox key="intro-3">
						<p className="text-5xl mb-6">{ELEMENTS[selectedElement].emoji}</p>
						<p className="text-xl text-gray-300 mb-4">Bir şeyi bil:</p>
						<p className="text-lg text-gray-400 mb-4">Sırın ASLA sönmez, asla ölmez.</p>
						<p className="text-lg text-gray-400 mb-4">Ama tıpkı demircinin ateşi gibi — birlikte sıcak kalmazsak, dönüşüm zorlaşır.</p>
						<p className="text-lg text-gray-400 mb-8">Uzak kalsan da seni bekleyecek.</p>
						<Btn onClick={nextStage}>Devam</Btn>
					</StageBox>
				)}

				{stage === 'name' && selectedElement && (
					<StageBox key="name">
						<p className="text-6xl mb-6">{ELEMENTS[selectedElement].emoji}</p>
						<p className="text-xl text-gray-300 mb-4">Şimdi Sırına bir isim ver.</p>
						<p className="text-gray-400 mb-8">Bu isim sadece ikinizin arasında kalacak.</p>
						<input type="text" value={sirName} onChange={(e) => setSirName(e.target.value)} placeholder="Sırının ismi..." className="w-full p-4 rounded-xl bg-white/5 border border-gray-700 text-center text-xl mb-8 focus:outline-none focus:border-gray-500" maxLength={20} />
						<Btn onClick={handleComplete} disabled={!sirName.trim()}>Yolculuğa Başla</Btn>
					</StageBox>
				)}
			</AnimatePresence>
		</div>
	);
}

function StageBox({ children }: { children: React.ReactNode }) {
	return (
		<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="w-full max-w-md mx-auto text-center">
			{children}
		</motion.div>
	);
}

function Btn({ children, onClick, disabled = false, className = '' }: { children: React.ReactNode; onClick: () => void; disabled?: boolean; className?: string }) {
	return (
		<motion.button whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }} onClick={onClick} disabled={disabled} className={`px-8 py-3 rounded-full ${className}`} style={{ background: disabled ? 'rgba(255,255,255,0.1)' : `linear-gradient(135deg, ${COLORS.warmGold}, ${COLORS.deepTeal})`, opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}>
			{children} →
		</motion.button>
	);
}
