import React from "react";
import Link from "next/link";

const asamalar = [
  {
    numara: 0,
    slug: "kapi",
    baslik: "KAPI",
    slogan: "Neden buradayım?",
    renk: "#C9A962",
    icon: "door-open",
    kilitli: false,
  },
  {
    numara: 1,
    slug: "fiziksel",
    baslik: "FİZİKSEL",
    slogan: "Bedenini hazırla",
    renk: "#2D5A27",
    icon: "heart-pulse",
    kilitli: true,
  },
  {
    numara: 2,
    slug: "duygusal",
    baslik: "DUYGUSAL",
    slogan: "Duyguları çöz",
    renk: "#1E3A5F",
    icon: "heart",
    kilitli: true,
  },
  {
    numara: 3,
    slug: "zihinsel",
    baslik: "ZİHİNSEL",
    slogan: "Mental çöpü at",
    renk: "#4A2C6A",
    icon: "brain",
    kilitli: true,
  },
  {
    numara: 4,
    slug: "enerjetik",
    baslik: "ENERJETİK",
    slogan: "Kanalları aç",
    renk: "#0D4F4F",
    icon: "zap",
    kilitli: true,
  },
  {
    numara: 5,
    slug: "iliskisel",
    baslik: "İLİŞKİSEL",
    slogan: "Bağları kes",
    renk: "#8B4513",
    icon: "unlink",
    kilitli: true,
  },
  {
    numara: 6,
    slug: "karmik",
    baslik: "KARMİK",
    slogan: "Köklere in",
    renk: "#722F37",
    icon: "git-branch",
    kilitli: true,
  },
  {
    numara: 7,
    slug: "bilincalti",
    baslik: "BİLİNÇALTI",
    slogan: "Entegre et",
    renk: "#C0C0C0",
    icon: "database",
    kilitli: true,
  },
];

function AsamaKart({ asama }: { asama: typeof asamalar[0] }) {
  const iconMap: Record<string, string> = {
    "door-open": "🚪",
    "heart-pulse": "💓",
    "heart": "❤️",
    "brain": "🧠",
    "zap": "⚡",
    "unlink": "🔗",
    "git-branch": "🌱",
    "database": "🗄️",
  };
  return (
    <Link href={asama.kilitli ? "#" : `/dersler/arinma/${asama.slug}`}
      className={`w-full mb-4 block`}
      tabIndex={asama.kilitli ? -1 : 0}
      aria-disabled={asama.kilitli}
    >
      <div
        className={`rounded-xl p-4 flex items-center gap-4 shadow-md transition-all duration-200 ${asama.kilitli ? "opacity-50 bg-gray-100 cursor-not-allowed" : "bg-white hover:scale-[1.02]"}`}
        style={{ borderLeft: `8px solid ${asama.renk}` }}
      >
        <span className="text-3xl" style={{ color: asama.renk }}>{iconMap[asama.icon]}</span>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg" style={{ color: asama.renk }}>{asama.baslik}</span>
            {asama.kilitli && (
              <span className="ml-2 px-2 py-1 bg-gray-300 text-gray-700 rounded text-xs">Kilitli</span>
            )}
          </div>
          <div className="text-gray-700 text-sm mb-2">{asama.slogan}</div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="h-2 rounded-full" style={{ width: asama.kilitli ? "0%" : "0%", background: asama.renk }} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ArinmaPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E6] flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-playfair font-bold mb-2 text-[#0D4F4F]">ARINMA</h1>
      <p className="mb-8 text-[#4A2C6A] text-center">Dıştan içe, somuttan soyuta</p>
      <div className="w-full max-w-md flex flex-col">
        {asamalar.map((asama) => (
          <AsamaKart key={asama.slug} asama={asama} />
        ))}
      </div>
    </main>
  );
}
