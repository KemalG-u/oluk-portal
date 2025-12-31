
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ELEMENTS = [
  { id: 'fire', name: 'Ateş', emoji: '🔥', color: '#FF6B35', description: 'Dönüşümün gücü' },
  { id: 'water', name: 'Su', emoji: '💧', color: '#4ECDC4', description: 'Akışın bilgeliği' },
  { id: 'air', name: 'Hava', emoji: '🌬️', color: '#95E1D3', description: 'Özgürlüğün nefesi' },
  { id: 'earth', name: 'Toprak', emoji: '🌍', color: '#8B7355', description: 'Köklerin sabrı' },
];

export default function SirSecimiPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string | null>(null);
  const [sirName, setSirName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSelect = (id: string) => {
    setSelected(id);
    setStep(2);
  };

  const handleSave = async () => {
    if (!selected || !sirName.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/sir/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ element: selected, sirName: sirName.trim() }),
      });
      const data = await res.json();
      if (res.ok) {
        setStep(3);
        setTimeout(() => router.push('/'), 2000);
      } else {
        alert('Hata: ' + (data.error || 'Bilinmeyen hata'));
      }
    } catch (e) {
      alert('Bağlantı hatası: ' + e);
    }
    setLoading(false);
  };

  const selectedData = ELEMENTS.find(e => e.id === selected);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D4F4F] to-[#0a0a0a] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        
        {step === 1 && (
          <>
            <h1 className="text-3xl text-[#C9A962] mb-4">Sırrını Seç</h1>
            <p className="text-[#F5F0E6]/70 mb-8">Hangi unsur sana sesleniyor?</p>
            <div className="grid grid-cols-2 gap-4">
              {ELEMENTS.map((el) => (
                <button
                  key={el.id}
                  onClick={() => handleSelect(el.id)}
                  className="p-6 rounded-2xl border-2 border-[#C9A962]/30 bg-[#0a0a0a]/50 hover:border-[#C9A962] transition-all"
                >
                  <div className="text-5xl mb-3">{el.emoji}</div>
                  <h3 className="text-xl text-[#F5F0E6] font-bold">{el.name}</h3>
                  <p className="text-[#F5F0E6]/60 text-sm">{el.description}</p>
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && selectedData && (
          <>
            <div className="text-7xl mb-6">{selectedData.emoji}</div>
            <h2 className="text-2xl text-[#F5F0E6] mb-6">Sırrına bir isim ver</h2>
            <input
              type="text"
              value={sirName}
              onChange={(e) => setSirName(e.target.value)}
              placeholder="Sırrının ismi..."
              className="w-full max-w-xs mx-auto px-6 py-4 rounded-xl bg-[#0a0a0a]/50 border-2 border-[#C9A962]/30 text-[#F5F0E6] text-center text-xl focus:outline-none focus:border-[#C9A962] mb-6"
              maxLength={20}
              autoFocus
            />
            <br />
            <button
              onClick={handleSave}
              disabled={sirName.trim().length < 2 || loading}
              className="px-8 py-4 rounded-xl font-bold text-lg disabled:opacity-30"
              style={{ backgroundColor: selectedData.color, color: '#0a0a0a' }}
            >
              {loading ? 'Kaydediliyor...' : 'Başla'}
            </button>
          </>
        )}

        {step === 3 && selectedData && (
          <>
            <div className="text-8xl mb-6">{selectedData.emoji}</div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: selectedData.color }}>{sirName}</h2>
            <p className="text-[#F5F0E6]">Yolculuğun başlıyor...</p>
          </>
        )}

      </div>
    </div>
  );
}
