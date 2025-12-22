
const fazlar = [
  {
    numara: 1,
    slug: "arinma",
    baslik: "ARINMA",
    slogan: "Önce yükü at, sonra motora bak",
    renk: "#0D4F4F",
    kilitli: false,
  },
  {
    numara: 2,
    slug: "koruma",
    baslik: "KORUMA",
    slogan: "Temizlediğini koru, kalkanlarını kur",
    renk: "#C9A962",
    kilitli: true,
  },
  {
    numara: 3,
    slug: "aktivasyon",
    baslik: "AKTİVASYON",
    slogan: "Sistemi çalıştır, potansiyelini aç",
    renk: "#8B4513",
    kilitli: true,
  },
  {
    numara: 4,
    slug: "ileri-seviye",
    baslik: "İLERİ SEVİYE",
    slogan: "Derinleş, ustalaş, dönüştür",
    renk: "#4A2C6A",
    kilitli: true,
  },
];

function FazKart({ faz }: { faz: typeof fazlar[0] }) {
  return (
    <div
      className="rounded-xl shadow-md p-6 flex flex-col gap-2 items-start w-full max-w-sm"
      style={{ background: faz.renk, opacity: faz.kilitli ? 0.5 : 1 }}
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-white">{faz.numara}.</span>
        <span className="text-xl font-bold text-white">{faz.baslik}</span>
        {faz.kilitli && (
          <span className="ml-2 px-2 py-1 bg-white text-gray-700 rounded text-xs">Kilitli</span>
        )}
      </div>
      <div className="text-white text-sm mb-2">{faz.slogan}</div>
      <div className="w-full h-2 bg-white rounded-full">
        <div className="h-2 rounded-full" style={{ width: faz.kilitli ? "0%" : "0%", background: "#2C3E50" }} />
      </div>
    </div>
  );
}

export default function DerslerPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E6] flex flex-col items-center py-10">
      <h1 className="text-3xl font-playfair font-bold mb-8 text-[#0D4F4F]">Dönüşümün 4 FAZI</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {fazlar.map((faz) => (
          <FazKart key={faz.slug} faz={faz} />
        ))}
      </div>
    </main>
  );
}
