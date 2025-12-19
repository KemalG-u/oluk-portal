import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F5F0E6] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[#C9A962] text-9xl font-serif mb-4">404</p>
        <h1 className="text-[#0D4F4F] text-3xl font-serif mb-4">
          Yol Burada Bitmiyor
        </h1>
        <p className="text-[#0D4F4F]/60 mb-8 max-w-md mx-auto">
          Aradığın sayfa bulunamadı. Belki yanlış bir yol aldın, 
          belki de o sayfa artık burada değil.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#0D4F4F] text-[#F5F0E6] px-8 py-4 rounded-full font-medium hover:bg-[#083838] transition"
        >
          <span>Ana Sayfaya Dön</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </main>
  );
}
