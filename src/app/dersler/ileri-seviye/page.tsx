import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Lock } from "@phosphor-icons/react";

export const metadata: Metadata = {
  title: "İLERİ SEVİYE | OLUK Spiritüel Dönüşüm",
  description: "İLERİ SEVİYE fazı: Derinleş, ustalaş, dönüştür. Bu bölüm yakında açılacak.",
  openGraph: {
    title: "İLERİ SEVİYE | OLUK Spiritüel Dönüşüm",
    description: "İLERİ SEVİYE fazı: Derinleş, ustalaş, dönüştür. Bu bölüm yakında açılacak.",
    url: "https://oluk.org/dersler/ileri-seviye",
    type: "article",
    images: [
      {
        url: "https://oluk.org/og-ileri-seviye.png",
        width: 1200,
        height: 630,
        alt: "İLERİ SEVİYE - OLUK"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "İLERİ SEVİYE | OLUK Spiritüel Dönüşüm",
    description: "İLERİ SEVİYE fazı: Derinleş, ustalaş, dönüştür. Bu bölüm yakında açılacak.",
    images: ["https://oluk.org/og-ileri-seviye.png"]
  },
  alternates: {
    canonical: "https://oluk.org/dersler/ileri-seviye",
    languages: {
      tr: "https://oluk.org/dersler/ileri-seviye",
      en: "https://oluk.org/en/dersler/ileri-seviye",
      "x-default": "https://oluk.org/dersler/ileri-seviye"
    }
  }
};

export default function IleriSeviyePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F5F0E6] px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border-t-8" style={{ borderColor: "#4A2C6A" }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block px-3 py-1 bg-yellow-200 text-yellow-800 text-xs font-bold rounded-full uppercase tracking-wider">Yakında</span>
          <Lock size={28} color="#4A2C6A" weight="fill" />
        </div>
        <h1 className="text-3xl font-bold text-[#4A2C6A] mb-1">İLERİ SEVİYE</h1>
        <p className="text-[#4A2C6A] font-semibold mb-4">Derinleş, ustalaş, dönüştür</p>
        <p className="text-gray-700 text-center mb-6">Bu bölüm yakında açılacak. AKTİVASYON bölümünü tamamladığınızda erişebilirsiniz.</p>
        <Link href="/dersler" className="mt-2 px-4 py-2 bg-[#4A2C6A] text-white rounded-lg font-bold shadow hover:bg-[#3a2252] transition">&larr; Geri</Link>
      </div>
    </main>
  );
}
