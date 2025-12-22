import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KARMİK Arınma | OLUK Spiritüel Dönüşüm",
  description: "Karmik arınma aşaması, geçmişten gelen yükleri ve döngüleri çözerek özgürleşmeni sağlar. Atalar ve kök inançlarla yüzleş.",
  openGraph: {
    title: "KARMİK Arınma | OLUK Spiritüel Dönüşüm",
    description: "Karmik arınma aşaması, geçmişten gelen yükleri ve döngüleri çözerek özgürleşmeni sağlar.",
    url: "https://oluk.org/dersler/arinma/karmik",
    type: "article",
    images: [
      {
        url: "https://oluk.org/og-karmik.png",
        width: 1200,
        height: 630,
        alt: "Karmik Arınma - OLUK"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "KARMİK Arınma | OLUK Spiritüel Dönüşüm",
    description: "Karmik arınma aşaması, geçmişten gelen yükleri ve döngüleri çözerek özgürleşmeni sağlar.",
    images: ["https://oluk.org/og-karmik.png"]
  },
  alternates: {
    canonical: "https://oluk.org/dersler/arinma/karmik",
    languages: {
      tr: "https://oluk.org/dersler/arinma/karmik",
      en: "https://oluk.org/en/dersler/arinma/karmik",
      "x-default": "https://oluk.org/dersler/arinma/karmik"
    }
  }
};
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

const dersler = [
  { numara: 1, baslik: "Karmik Temizlik Nedir?", sure: 15, kilitli: false },
  { numara: 2, baslik: "Geçmişten Gelen Yükler", sure: 10, kilitli: true },
  { numara: 3, baslik: "Aile ve Atalar", sure: 20, kilitli: true },
  { numara: 4, baslik: "Karmik Döngüler", sure: 15, kilitli: true },
  { numara: 5, baslik: "Kök İnançlar", sure: 25, kilitli: true },
];

function DersKart({ ders }: { ders: typeof dersler[0] }) {
  return (
    <Link href={ders.kilitli ? "#" : `/dersler/arinma/karmik/${ders.numara}`}
      className={`w-full mb-4 block`}
      tabIndex={ders.kilitli ? -1 : 0}
      aria-disabled={ders.kilitli}
    >
      <div
        className={`rounded-xl p-4 flex items-center gap-4 shadow-md transition-all duration-200 ${ders.kilitli ? "opacity-50 bg-gray-100 cursor-not-allowed" : "bg-white hover:scale-[1.02]"}`}
        style={{ borderLeft: `8px solid #722F37` }}
      >
        <span className="text-2xl font-bold text-[#722F37]">{ders.numara}</span>
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

export default function KarmikPage() {
  const ilerleme = 20;
  return (
    <main className="min-h-screen bg-[#F5F0E6] flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-md">
        <Link href="/dersler/arinma" className="mb-4 inline-flex items-center text-[#0D4F4F] font-bold text-sm hover:underline">
          <span className="mr-2">←</span> ARINMA'ya dön
        </Link>
        <h1 className="text-2xl font-playfair font-bold mb-1 text-[#722F37]">AŞAMA 6: KARMİK</h1>
        <p className="mb-6 text-[#4A2C6A] text-sm">Köklere in</p>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-600">İlerleme</span>
            <span className="text-xs text-gray-600">%{ilerleme}</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="h-2 rounded-full bg-[#722F37]" style={{ width: `${ilerleme}%` }} />
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
