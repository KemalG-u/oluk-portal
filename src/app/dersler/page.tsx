"use client";
import React, { useState } from 'react';
import { FazCard } from '@/components/FazCard';
import { FazPanel } from '@/components/FazPanel';
import '@/styles/modern-cards.css';

const fazlar = [
  {
    faz: 1,
    title: 'ARINMA',
    slogan: 'Kendine rastlamak için, aramaya başlamalısın.',
    color: '#C9A962',
    symbol: 'drop',
    locked: false,
  },
  {
    faz: 2,
    title: 'KORUMA',
    slogan: 'Temizlediğini koru, kalkanlarını kur',
    color: '#C9A962',
    symbol: 'shield',
    locked: true,
  },
  {
    faz: 3,
    title: 'AKTİVASYON',
    slogan: 'Sistemi çalıştır, potansiyelini aç',
    color: '#8B4513',
    symbol: 'bolt',
    locked: true,
  },
  {
    faz: 4,
    title: 'İLERİ SEVİYE',
    slogan: 'Derinleş, ustalaş, dönüştür',
    color: '#4A2C6A',
    symbol: 'star',
    locked: true,
  },
];



export default function DerslerPage() {
  const [openFaz, setOpenFaz] = useState<number | null>(null);

  // ARINMA paneli içeriği
  const arinmaPanel = {
    faz: 1,
    title: 'ARINMA',
    slogan: 'Kendine rastlamak için, aramaya başlamalısın.',
    symbol: (
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
    color: '#C9A962',
    highlight: "Bu bir 'iyileşme' vaadi değil, bir HAYSİYET DAVASI'dır.",
    opening: 'Doğduğun günden beri sana giydirilen yabancı kumaşların altında asıl çehreni kaybettin. Ruhun, başkalarının arzularıyla, toplumun gürültüsüyle ve dünün tortusuyla öylesine ağırlaştı ki; artık kendi nefesinin sesini bile tanıyamaz hale geldin.',
    body: 'Arınmayı şatafatlı salonların süsü olarak görme. Bu, bir cerrahın neşterini kendi damarına basmak zorunda olduğu gibi keskin, dürüst ve acılı bir müdahaledir.\n\nRuhuna gelen, gelmesi gereken o OLUK tıkalıysa, akması gereken o muazzam enerji yerine sadece zehir birikir. Biriken her düğüm, senin HAKİKATE olan mesafendir.',
    features: [
      {
        title: 'Zamanın Katmanlarında Gezin',
        desc: 'Hafızanın yüklediği ama artık işlevi kalmamış o eski imgeleri, bir müze titizliğiyle ayıkla.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" width="24" height="24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#C9A962"/></svg>
        ),
      },
      {
        title: 'Niyeti Saf Tut',
        desc: 'Mesele yükselmek değil, ağırlaştıran her şeyi bırakabilmektir. Safiyet, fazlalıklardan kurtulunca kendiliğinden zuhur eder.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" width="24" height="24"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" stroke="#C9A962"/></svg>
        ),
      },
      {
        title: 'Geçmişin Prangalarını Çöz',
        desc: 'Ruhun sırtındaki o kamburlaşmış hatıraları, karmik tortuları bırak. Hafiflemeyen, yükselemez.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" width="24" height="24"><path d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" stroke="#C9A962"/></svg>
        ),
      },
      {
        title: 'Ruhun Labirentlerini Tara',
        desc: 'Bilinçaltının karanlık dehlizlerinde saklanan o yabancı sesleri teşhis et. Onlar senin değil, sana emanet edilmiş yüklerdir.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" width="24" height="24"><path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" stroke="#C9A962"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="#C9A962"/></svg>
        ),
      },
    ],
    cta: 'Yolculuğa Başla',
    footer: 'Hafiflemeyen, yükselemez.',
  };

  // Panel placeholder mesajları
  const fazPanelPlaceholders = [
    null,
    {
      faz: 2,
      title: 'KORUMA',
      slogan: 'Temizlediğini koru, kalkanlarını kur',
      symbol: (
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
      color: '#C9A962',
      locked: true,
      placeholderMsg: 'Bu bölüm yakında açılacak. ARINMA bölümünü tamamladığınızda erişebilirsiniz.',
      footer: '',
    },
    {
      faz: 3,
      title: 'AKTİVASYON',
      slogan: 'Sistemi çalıştır, potansiyelini aç',
      symbol: (
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
      color: '#8B4513',
      locked: true,
      placeholderMsg: 'Bu bölüm yakında açılacak. KORUMA bölümünü tamamladığınızda erişebilirsiniz.',
      footer: '',
    },
    {
      faz: 4,
      title: 'İLERİ SEVİYE',
      slogan: 'Derinleş, ustalaş, dönüştür',
      symbol: (
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
      color: '#4A2C6A',
      locked: true,
      placeholderMsg: 'Bu bölüm yakında açılacak. AKTİVASYON bölümünü tamamladığınızda erişebilirsiniz.',
      footer: '',
    },
  ];

  return (
    <main
      className="min-h-screen flex flex-col items-center py-10"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0D4F4F 100%)', minHeight: '100vh' }}
    >
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <div style={{ width: '100%', maxWidth: 600, margin: '0 auto' }}>
        {fazlar.map((faz, i) => (
          <FazCard
            key={faz.faz}
            faz={faz.faz}
            title={faz.title}
            slogan={faz.slogan}
            color={faz.color}
            symbol={faz.symbol as any}
            active={!faz.locked}
            locked={faz.locked}
            onClick={() => setOpenFaz(faz.faz)}
          />
        ))}
      </div>
      {/* Panel */}
      <FazPanel
        open={openFaz === 1}
        onClose={() => setOpenFaz(null)}
        {...arinmaPanel}
      />
      {/* Diğer fazlar için placeholder panel */}
      {fazPanelPlaceholders.slice(1).map((panel, idx) =>
        panel ? (
          <FazPanel
            key={panel.faz}
            open={openFaz === panel.faz}
            onClose={() => setOpenFaz(null)}
            {...panel}
          />
        ) : null
      )}
    </main>
  );
}
// ...eski kod kaldırıldı, modern UI kodu yukarıda zaten mevcut...
