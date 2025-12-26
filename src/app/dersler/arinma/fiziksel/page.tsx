import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FİZİKSEL Arınma | OLUK Spiritüel Dönüşüm",
  description: "Fiziksel arınma aşaması, bedenin temizliği ve sağlığına odaklanır. Beden farkındalığı, hareket, beslenme ve dinlenme ile dönüşüm başlar.",
  openGraph: {
    title: "FİZİKSEL Arınma | OLUK Spiritüel Dönüşüm",
    description: "Fiziksel arınma aşaması, bedenin temizliği ve sağlığına odaklanır.",
    url: "https://oluk.org/dersler/arinma/fiziksel",
    type: "article",
    images: [
      {
        url: "https://oluk.org/og-fiziksel.png",
        width: 1200,
        height: 630,
        alt: "Fiziksel Arınma - OLUK"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "FİZİKSEL Arınma | OLUK Spiritüel Dönüşüm",
    description: "Fiziksel arınma aşaması, bedenin temizliği ve sağlığına odaklanır.",
    images: ["https://oluk.org/og-fiziksel.png"]
  },
  alternates: {
    canonical: "https://oluk.org/dersler/arinma/fiziksel",
    languages: {
      tr: "https://oluk.org/dersler/arinma/fiziksel",
      en: "https://oluk.org/en/dersler/arinma/fiziksel",
      "x-default": "https://oluk.org/dersler/arinma/fiziksel"
    }
  }
};
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

const dersler = [
  { numara: 1, baslik: "Bedenin Gizli Haritası", sure: 18, kilitli: false, link: "/dersler/arinma/fiziksel/bedenin-gizli-haritasi" },
  { numara: 2, baslik: "Abdest", sure: 20, kilitli: false, link: "/dersler/arinma/fiziksel/abdest" },
  { numara: 3, baslik: "Fiziksel Temizlik Nedir?", sure: 15, kilitli: false },
  { numara: 4, baslik: "Beden Farkındalığı", sure: 10, kilitli: true },
  { numara: 5, baslik: "Hareket ve Enerji", sure: 20, kilitli: true },
  { numara: 6, baslik: "Beslenme ve Su", sure: 15, kilitli: true },
  { numara: 7, baslik: "Dinlenme ve Uyku", sure: 25, kilitli: true },
];

function DersKart({ ders }: { ders: typeof dersler[0] }) {
  const href = ders.link || `/dersler/arinma/fiziksel/${ders.numara}`;
  return (
    <Link href={ders.kilitli ? "#" : href}
      className={`w-full mb-4 block`}
      tabIndex={ders.kilitli ? -1 : 0}
      aria-disabled={ders.kilitli}
    >
      <div
        className={`rounded-xl p-4 flex items-center gap-4 shadow-md transition-all duration-200 ${ders.kilitli ? "opacity-50 bg-gray-100 cursor-not-allowed" : "bg-white hover:scale-[1.02]"}`}
        style={{ borderLeft: `8px solid #2D5A27` }}
      >
        <span className="text-2xl font-bold text-[#2D5A27]">{ders.numara}</span>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-[#2C3E50]">{ders.baslik}</span>
            {ders.kilitli && (
              <span className="ml-2 px-2 py-1 bg-gray-300 text-gray-700 rounded text-xs flex items-center gap-1"><span>🔒</span> Kilitli</span>
            )}
          </div>
          <div className="text-gray-700 text-sm">Süre: {ders.sure} dk</div>
        </div>
      </div>
    </Link>
  );
}

export default function FizikselPage() {
  const ilerleme = 20;
  return (
    <main className="min-h-screen bg-[#F5F0E6] flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-md">
        <Link href="/dersler/arinma" className="mb-4 inline-flex items-center text-[#0D4F4F] font-bold text-sm hover:underline">
          <span className="mr-2">←</span> ARINMA'ya dön
        </Link>
        <h1 className="text-2xl font-playfair font-bold mb-1 text-[#2D5A27]">AŞAMA 1: FİZİKSEL</h1>
        <p className="mb-6 text-[#4A2C6A] text-sm">Bedenini hazırla</p>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-600">İlerleme</span>
            <span className="text-xs text-gray-600">%{ilerleme}</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="h-2 rounded-full bg-[#2D5A27]" style={{ width: `${ilerleme}%` }} />
          </div>
        </div>
        <div className="flex flex-col">
          {dersler.map((ders) => (
            <DersKart key={ders.numara} ders={ders} />
          ))}
        </div>
      </div>
    </main>
  );
}
