import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İLİŞKİSEL Arınma | OLUK Spiritüel Dönüşüm",
  description: "İlişkisel arınma aşaması, ilişkilerdeki bağları ve sınırları güçlendirir. Sağlıklı iletişim ve dönüşüm için adım at.",
  openGraph: {
    title: "İLİŞKİSEL Arınma | OLUK Spiritüel Dönüşüm",
    description: "İlişkisel arınma aşaması, ilişkilerdeki bağları ve sınırları güçlendirir.",
    url: "https://oluk.org/dersler/arinma/iliskisel",
    type: "article",
    images: [
      {
        url: "https://oluk.org/og-iliskisel.png",
        width: 1200,
        height: 630,
        alt: "İlişkisel Arınma - OLUK"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "İLİŞKİSEL Arınma | OLUK Spiritüel Dönüşüm",
    description: "İlişkisel arınma aşaması, ilişkilerdeki bağları ve sınırları güçlendirir.",
    images: ["https://oluk.org/og-iliskisel.png"]
  },
  alternates: {
    canonical: "https://oluk.org/dersler/arinma/iliskisel",
    languages: {
      tr: "https://oluk.org/dersler/arinma/iliskisel",
      en: "https://oluk.org/en/dersler/arinma/iliskisel",
      "x-default": "https://oluk.org/dersler/arinma/iliskisel"
    }
  }
};
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

const dersler = [
  { numara: 1, baslik: "İlişkisel Temizlik Nedir?", sure: 15, kilitli: false },
  { numara: 2, baslik: "Bağlar ve Sınırlar", sure: 10, kilitli: true },
  { numara: 3, baslik: "Sağlıklı İletişim", sure: 20, kilitli: true },
  { numara: 4, baslik: "Bağımlılıklar", sure: 15, kilitli: true },
  { numara: 5, baslik: "İlişkisel Dönüşüm", sure: 25, kilitli: true },
];

function DersKart({ ders }: { ders: typeof dersler[0] }) {
  return (
    <Link href={ders.kilitli ? "#" : `/dersler/arinma/iliskisel/${ders.numara}`}
      className={`w-full mb-4 block`}
      tabIndex={ders.kilitli ? -1 : 0}
      aria-disabled={ders.kilitli}
    >
      <div
        className={`rounded-xl p-4 flex items-center gap-4 shadow-md transition-all duration-200 ${ders.kilitli ? "opacity-50 bg-gray-100 cursor-not-allowed" : "bg-white hover:scale-[1.02]"}`}
        style={{ borderLeft: `8px solid #8B4513` }}
      >
        <span className="text-2xl font-bold text-[#8B4513]">{ders.numara}</span>
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

export default function IliskiselPage() {
  const ilerleme = 20;
  return (
    <main className="min-h-screen bg-[#F5F0E6] flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-md">
        <Link href="/dersler/arinma" className="mb-4 inline-flex items-center text-[#0D4F4F] font-bold text-sm hover:underline">
          <span className="mr-2">←</span> ARINMA&apos;ya dön
        </Link>
        <h1 className="text-2xl font-playfair font-bold mb-1 text-[#8B4513]">AŞAMA 5: İLİŞKİSEL</h1>
        <p className="mb-6 text-[#4A2C6A] text-sm">Bağları kes</p>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-600">İlerleme</span>
            <span className="text-xs text-gray-600">%{ilerleme}</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="h-2 rounded-full bg-[#8B4513]" style={{ width: `${ilerleme}%` }} />
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
