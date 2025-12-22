import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Lock } from "@phosphor-icons/react";

export const metadata: Metadata = {
  title: "AKTİVASYON | OLUK Spiritüel Dönüşüm",
  description: "AKTİVASYON fazı: Sistemi çalıştır, potansiyelini aç. Bu bölüm yakında açılacak.",
  openGraph: {
    title: "AKTİVASYON | OLUK Spiritüel Dönüşüm",
    description: "AKTİVASYON fazı: Sistemi çalıştır, potansiyelini aç. Bu bölüm yakında açılacak.",
    url: "https://oluk.org/dersler/aktivasyon",
    type: "article",
    images: [
      {
        url: "https://oluk.org/og-aktivasyon.png",
        width: 1200,
        height: 630,
        alt: "AKTİVASYON - OLUK"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AKTİVASYON | OLUK Spiritüel Dönüşüm",
    description: "AKTİVASYON fazı: Sistemi çalıştır, potansiyelini aç. Bu bölüm yakında açılacak.",
    images: ["https://oluk.org/og-aktivasyon.png"]
  },
  alternates: {
    canonical: "https://oluk.org/dersler/aktivasyon",
    languages: {
      tr: "https://oluk.org/dersler/aktivasyon",
      en: "https://oluk.org/en/dersler/aktivasyon",
      "x-default": "https://oluk.org/dersler/aktivasyon"
    }
  }
};

export default function AktivasyonPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F5F0E6] px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border-t-8" style={{ borderColor: "#8B4513" }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block px-3 py-1 bg-yellow-200 text-yellow-800 text-xs font-bold rounded-full uppercase tracking-wider">Yakında</span>
          <Lock size={28} color="#8B4513" weight="fill" />
        </div>
        <h1 className="text-3xl font-bold text-[#8B4513] mb-1">AKTİVASYON</h1>
        <p className="text-[#8B4513] font-semibold mb-4">Sistemi çalıştır, potansiyelini aç</p>
        <p className="text-gray-700 text-center mb-6">Bu bölüm yakında açılacak. KORUMA bölümünü tamamladığınızda erişebilirsiniz.</p>
        <Link href="/dersler" className="mt-2 px-4 py-2 bg-[#8B4513] text-white rounded-lg font-bold shadow hover:bg-[#6e3610] transition">&larr; Geri</Link>
      </div>
    </main>
  );
}
