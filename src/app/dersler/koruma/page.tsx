import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Lock } from "@phosphor-icons/react";

export const metadata: Metadata = {
  title: "KORUMA | OLUK Spiritüel Dönüşüm",
  description: "KORUMA fazı: Temizlediğini koru, kalkanlarını kur. Bu bölüm yakında açılacak.",
  openGraph: {
    title: "KORUMA | OLUK Spiritüel Dönüşüm",
    description: "KORUMA fazı: Temizlediğini koru, kalkanlarını kur. Bu bölüm yakında açılacak.",
    url: "https://oluk.org/dersler/koruma",
    type: "article",
    images: [
      {
        url: "https://oluk.org/og-koruma.png",
        width: 1200,
        height: 630,
        alt: "KORUMA - OLUK"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "KORUMA | OLUK Spiritüel Dönüşüm",
    description: "KORUMA fazı: Temizlediğini koru, kalkanlarını kur. Bu bölüm yakında açılacak.",
    images: ["https://oluk.org/og-koruma.png"]
  },
  alternates: {
    canonical: "https://oluk.org/dersler/koruma",
    languages: {
      tr: "https://oluk.org/dersler/koruma",
      en: "https://oluk.org/en/dersler/koruma",
      "x-default": "https://oluk.org/dersler/koruma"
    }
  }
};

export default function KorumaPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F5F0E6] px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border-t-8" style={{ borderColor: "#C9A962" }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block px-3 py-1 bg-yellow-200 text-yellow-800 text-xs font-bold rounded-full uppercase tracking-wider">Yakında</span>
          <Lock size={28} color="#C9A962" weight="fill" />
        </div>
        <h1 className="text-3xl font-bold text-[#C9A962] mb-1">KORUMA</h1>
        <p className="text-[#C9A962] font-semibold mb-4">Temizlediğinizi koru, kalkanlarınızı kur</p>
        <p className="text-gray-700 text-center mb-6">Bu bölüm yakında açılacak. ARINMA bölümünü tamamladığınızda erişebilirsiniz.</p>
        <Link href="/dersler" className="mt-2 px-4 py-2 bg-[#C9A962] text-white rounded-lg font-bold shadow hover:bg-[#b89a4e] transition">&larr; Geri</Link>
      </div>
    </main>
  );
}
