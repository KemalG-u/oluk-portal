import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ders 2 | OLUK',
  description: '', // SONRA EKLENECEK
};

export default function Ders2Page() {
  return (
    <main className="ders-container min-h-screen bg-cream py-20 px-6">
      {/* BÖLÜMLER SONRA EKLENECEK */}
      {/* Metinler Gem'den geldikten sonra */}
      
      <div className="ders-placeholder max-w-4xl mx-auto text-center py-32">
        <div className="w-16 h-16 mx-auto mb-6 border-2 border-gold rounded-full animate-pulse" />
        <h1 className="text-4xl font-serif text-teal mb-4">Ders 2</h1>
        <p className="text-lg text-teal-dark/70">İçerik hazırlanıyor...</p>
        <p className="text-sm text-teal-dark/50 mt-2">Metinler Gem işlemesinden sonra eklenecek</p>
      </div>
    </main>
  );
}
