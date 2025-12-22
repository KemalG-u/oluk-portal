import React from "react";
import Link from "next/link";

export default function DersDetayPage() {
  // Statik test dersi
  const ders = {
    baslik: "Arınma Nedir ve Neden Şart?",
    sure: 15,
    icerik:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi euismod nisi, euismod euismod nisi nisi euismod nisi.",
  };
  return (
    <main className="min-h-screen bg-[#F5F0E6] flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-md">
        {/* HEADER */}
        <Link href="/dersler/arinma/kapi" className="mb-4 inline-flex items-center text-[#0D4F4F] font-bold text-sm hover:underline">
          <span className="mr-2">←</span> KAPI&apos;ya dön
        </Link>
        <h1 className="text-2xl font-playfair font-bold mb-1 text-[#0D4F4F]">{ders.baslik}</h1>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs text-[#C9A962]">Süre: {ders.sure} dk</span>
          <div className="w-24 h-2 bg-gray-200 rounded-full">
            <div className="h-2 rounded-full bg-[#C9A962]" style={{ width: "100%" }} />
          </div>
        </div>

        {/* İÇERİK ALANI */}
        <div className="mb-6">
          <div className="w-full aspect-video bg-[#0D4F4F] rounded-lg flex items-center justify-center mb-4">
            <span className="text-white text-lg">Video/Audio Player</span>
          </div>
          <div className="bg-white rounded-lg p-4 shadow mb-4">
            <p className="text-gray-700 text-base leading-relaxed">{ders.icerik.replace("'", "&apos;")}</p>
          </div>
          <button className="w-full py-2 px-4 bg-[#C9A962] text-white font-bold rounded-lg shadow hover:bg-[#b89a4e] transition mb-2">
            Sonraki Ders
          </button>
        </div>

        {/* QUIZ ALANI */}
        <div className="bg-white rounded-lg p-4 shadow flex flex-col items-center">
          <button className="w-full py-2 px-4 bg-[#0D4F4F] text-white font-bold rounded-lg shadow hover:bg-[#093a3a] transition mb-2">
            Dersi Tamamla
          </button>
          <div className="w-full text-center text-gray-400 text-sm py-2 border-t mt-2">
            Quiz alanı (yakında)
          </div>
        </div>
      </div>
    </main>
  );
}
