import type { Metadata } from 'next';
import ChatInterface from '@/components/nur-kocu/ChatInterface';

export const metadata: Metadata = {
  title: 'Nur Koçu - OLUK Manevi Destek',
  description: 'Nur Koçu ile manevi dönüşüm yolculuğuna başla. 7/24 güvenli ve gizli sohbet.',
  openGraph: {
    title: 'Nur Koçu - OLUK Manevi Destek',
    description: 'Manevi dönüşüm yolculuğunda yanında olan yapay zeka destekli koçun.',
    type: 'website',
  },
};

export default function NurKocuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-light via-cream to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gold/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="text-2xl font-serif text-teal hover:text-teal/80 transition">
              OLUK
            </a>
            <span className="text-gray-300">/</span>
            <span className="text-gray-600">Nur Koçu</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="/dersler" 
              className="text-sm text-teal hover:text-teal/80 transition"
            >
              Derslere Dön
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Intro Section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
            7/24 Güvenli Sohbet
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif text-teal mb-6">
            🌙 Nur Koçu ile Konuş
          </h1>
          
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Manevi dönüşüm yolculuğunda seni dinleyen, anlayan ve yol gösteren yapay zeka destekli koçun. 
            Her konuşma gizli, güvenli ve yargısız.
          </p>
          
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Kriz Tespiti</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>182 Entegrasyonu</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>OLUK Metodolojisi</span>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <ChatInterface initialMood="dalgali" lessons={[]} />

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-teal/10">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-serif text-lg text-teal mb-2">Güvenli</h3>
            <p className="text-sm text-gray-600">
              Konuşmalarınız şifrelenir ve hiçbir zaman üçüncü taraflarla paylaşılmaz.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gold/10">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="font-serif text-lg text-gold mb-2">Akıllı</h3>
            <p className="text-sm text-gray-600">
              Claude Sonnet 4 ile Türkçe dil modelinde uzman, empatik yanıtlar.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-md border border-sage/10">
            <div className="text-3xl mb-3">🌱</div>
            <h3 className="font-serif text-lg text-sage mb-2">Destekleyici</h3>
            <p className="text-sm text-gray-600">
              OLUK metodolojisi ile manevi büyüme ve dönüşüm odaklı rehberlik.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <h4 className="font-serif text-amber-900 mb-3 flex items-center gap-2">
            <span className="text-xl">⚠️</span>
            Önemli Bilgilendirme
          </h4>
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>OLUK manevi destek platformudur.</strong> Nur Koçu terapötik tedavi yerine geçmez. 
            Psikolojik veya psikiyatrik destek gerektiğinde mutlaka profesyonel yardım alınmalıdır. 
            Kriz anlarında <strong>182 İntihar Önleme Hattı</strong> (7/24 ücretsiz) veya <strong>112 Acil Yardım</strong>'ı arayabilirsiniz.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-200 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
          <p>© 2025 OLUK. Tüm hakları saklıdır.</p>
          <p className="mt-2">
            <a href="/" className="text-teal hover:text-teal/80 transition">Ana Sayfa</a>
            {' • '}
            <a href="/dersler" className="text-teal hover:text-teal/80 transition">Dersler</a>
            {' • '}
            <a href="tel:182" className="text-red-600 hover:text-red-500 transition font-medium">Kriz: 182</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
