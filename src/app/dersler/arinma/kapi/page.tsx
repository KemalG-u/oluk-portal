import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KAPI | Arınma Yolculuğu Başlangıcı - OLUK",
  description: "KAPI aşaması, arınma yolculuğunun ilk adımıdır. Neden burada olduğunu keşfet, dönüşümün kapısından geç.",
  openGraph: {
    title: "KAPI | Arınma Yolculuğu Başlangıcı - OLUK",
    description: "KAPI aşaması, arınma yolculuğunun ilk adımıdır. Neden burada olduğunu keşfet, dönüşümün kapısından geç.",
    url: "https://oluk.org/dersler/arinma/kapi",
    type: "article",
    images: [
      {
        url: "https://oluk.org/og-kapi.png",
        width: 1200,
        height: 630,
        alt: "KAPI - OLUK Arınma Başlangıcı"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "KAPI | Arınma Yolculuğu Başlangıcı - OLUK",
    description: "KAPI aşaması, arınma yolculuğunun ilk adımıdır. Neden burada olduğunu keşfet, dönüşümün kapısından geç.",
    images: ["https://oluk.org/og-kapi.png"]
  },
  alternates: {
    canonical: "https://oluk.org/dersler/arinma/kapi",
    languages: {
      tr: "https://oluk.org/dersler/arinma/kapi",
      en: "https://oluk.org/en/dersler/arinma/kapi",
      "x-default": "https://oluk.org/dersler/arinma/kapi"
    }
  }
};
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities
import React from "react";
import Link from "next/link";

const dersler = [
  {
    numara: 1,
    baslik: "Arınma Nedir ve Neden Şart?",
    sure: 15,
    kilitli: false,
  },
  {
    numara: 2,
    baslik: "Ferrari Metaforu",
    sure: 10,
    kilitli: true,
  },
  {
    numara: 3,
    baslik: "Yükler ve Blokajlar",
    sure: 20,
    kilitli: true,
  },
  {
    numara: 4,
    baslik: "ZAN Kavramı",
    sure: 15,
    kilitli: true,
  },
  {
    numara: 5,
    baslik: "Büyük Resim",
    sure: 25,
    kilitli: true,
  },
];

function DersKart({ ders }: { ders: typeof dersler[0] }) {
  return (
    <Link href={ders.kilitli ? "#" : `/dersler/arinma/kapi/${ders.numara}`}
      className={`w-full mb-4 block`}
      tabIndex={ders.kilitli ? -1 : 0}
      aria-disabled={ders.kilitli}
    >
      <div
        className={`rounded-xl p-4 flex items-center gap-4 shadow-md transition-all duration-200 ${ders.kilitli ? "opacity-50 bg-gray-100 cursor-not-allowed" : "bg-white hover:scale-[1.02]"}`}
        style={{ borderLeft: `8px solid #C9A962` }}
      >
        <span className="text-2xl font-bold text-[#C9A962]">{ders.numara}</span>
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

export default function KapiPage() {
  // İlerleme: sadece ilk ders açık, %20
  const ilerleme = 20;
  return (
    <main className="min-h-screen bg-[#F5F0E6] flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-md">
        <Link href="/dersler/arinma" className="mb-4 inline-flex items-center text-[#0D4F4F] font-bold text-sm hover:underline">
          <span className="mr-2">←</span> ARINMA'ya dön
        </Link>
        <h1 className="text-2xl font-playfair font-bold mb-1 text-[#C9A962]">AŞAMA 0: KAPI</h1>
        <p className="mb-6 text-[#4A2C6A] text-sm">Neden buradayım? Neden arınmam gerekiyor?</p>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-600">İlerleme</span>
            <span className="text-xs text-gray-600">%{ilerleme}</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="h-2 rounded-full bg-[#C9A962]" style={{ width: `${ilerleme}%` }} />
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
