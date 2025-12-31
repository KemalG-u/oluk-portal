import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { aynaData } from '@/lib/ayna-data';
import { isikData } from '@/lib/isik-data';
import { baglantiData } from '@/lib/baglanti-data';
import { amacData } from '@/lib/amac-data';

const getSeansCount = (bolumler: { seansCount: number }[]) => bolumler.reduce((sum, bolum) => sum + bolum.seansCount, 0);

const moduleCards = [
  {
    slug: 'ayna',
    title: aynaData.title,
    subtitle: aynaData.subtitle,
    description: 'Gölge çalışması ve öz-farkındalık; 7 bölüm, 10 seans.',
    icon: aynaData.icon,
    duration: aynaData.totalDuration,
    bolum: aynaData.bolumler.length,
    seans: getSeansCount(aynaData.bolumler),
    href: '/moduller/ayna',
    color: '#1D4ED8',
    accent: '#DBEAFE',
  },
  {
    slug: 'isik',
    title: isikData.title,
    subtitle: isikData.subtitle,
    description: 'Enerji farkındalığı, nefes ve merkezler; 6 bölüm, 10 seans.',
    icon: isikData.icon,
    duration: isikData.totalDuration,
    bolum: isikData.bolumler.length,
    seans: getSeansCount(isikData.bolumler),
    href: '/moduller/isik',
    color: '#C9A962',
    accent: '#F5E6B3',
  },
  {
    slug: 'baglanti',
    title: baglantiData.title,
    subtitle: baglantiData.subtitle,
    description: 'İlişkiler, sınırlar, empati; 6 bölüm, 10 seans.',
    icon: baglantiData.icon,
    duration: baglantiData.totalDuration,
    bolum: baglantiData.bolumler.length,
    seans: getSeansCount(baglantiData.bolumler),
    href: '/moduller/baglanti',
    color: '#0F766E',
    accent: '#D1FAE5',
  },
  {
    slug: 'amac',
    title: amacData.title,
    subtitle: amacData.subtitle,
    description: 'Anlam, değerler, memento mori, ikigai; 6 bölüm, 10 seans.',
    icon: amacData.icon,
    duration: amacData.totalDuration,
    bolum: amacData.bolumler.length,
    seans: getSeansCount(amacData.bolumler),
    href: '/moduller/amac',
    color: '#6B21A8',
    accent: '#E9D5FF',
  },
];

export const metadata: Metadata = {
  title: 'Modüller | OLUK',
  description: 'AYNA, IŞIK, BAĞLANTI ve AMAÇ modüllerini keşfet. Her biri kendi akışı ve rehberli seanslarıyla tasarlandı.'
};

export default function ModulesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F8F8F6] to-white">
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#E0F2FE', color: '#1D4ED8' }}>
            <Sparkles className="w-4 h-4" />
            Modüller
          </div>
          <h1 className="font-serif text-5xl md:text-6xl mt-6 mb-4" style={{ color: '#0F172A' }}>Yolculuğunu Seç</h1>
          <p className="text-lg text-[#334155] max-w-3xl mx-auto">Her modül kendi ritmine ve derinliğine sahip. Kendini tanımadan enerji farkındalığına, ilişkilerden varoluş pratiğine uzanan dört akış.</p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          {moduleCards.map((modul) => (
            <div key={modul.slug} className="relative overflow-hidden rounded-2xl shadow-md border" style={{ backgroundColor: modul.accent, borderColor: `${modul.color}29` }}>
              <div className="p-8 flex flex-col gap-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl" aria-hidden>{modul.icon}</div>
                    <div>
                      <p className="text-xs font-semibold uppercase" style={{ color: modul.color }}>Modül</p>
                      <h2 className="font-serif text-3xl" style={{ color: '#0F172A' }}>{modul.title}</h2>
                      <p className="text-sm" style={{ color: '#334155' }}>{modul.subtitle}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#FFFFFFAA', color: modul.color }}>Hazır</span>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: '#1F2937' }}>{modul.description}</p>

                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="rounded-lg p-3" style={{ backgroundColor: '#FFFFFFBB' }}>
                    <p className="text-xs uppercase font-semibold" style={{ color: modul.color }}>Bölüm</p>
                    <p className="font-serif text-xl" style={{ color: '#0F172A' }}>{modul.bolum}</p>
                  </div>
                  <div className="rounded-lg p-3" style={{ backgroundColor: '#FFFFFFBB' }}>
                    <p className="text-xs uppercase font-semibold" style={{ color: modul.color }}>Seans</p>
                    <p className="font-serif text-xl" style={{ color: '#0F172A' }}>{modul.seans}</p>
                  </div>
                  <div className="rounded-lg p-3" style={{ backgroundColor: '#FFFFFFBB' }}>
                    <p className="text-xs uppercase font-semibold" style={{ color: modul.color }}>Süre</p>
                    <p className="font-serif text-xl" style={{ color: '#0F172A' }}>{modul.duration}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-sm" style={{ color: '#334155' }}>Akışı gör, istediğin yerden başla.</div>
                  <Link href={modul.href} className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold" style={{ backgroundColor: modul.color, color: '#F8FAFC' }}>
                    Modüle Git
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
