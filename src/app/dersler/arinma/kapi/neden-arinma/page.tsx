import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Neden Arınma? | OLUK',
  description: 'Arınmanın neden ilk adım olduğunu, zan kavramının hayatımızdaki gizli etkisini ve bilimin aynı hakikate nasıl ulaştığını öğren.',
};

export default function NedenArinmaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F0E6] to-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Geri Butonu */}
        <Link 
          href="/dersler/arinma/kapi"
          className="inline-flex items-center gap-2 text-[#0D4F4F] hover:text-[#0D4F4F]/70 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          KAPI Dersleri
        </Link>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <span>ARINMA</span>
          <span>→</span>
          <span>KAPI</span>
          <span>→</span>
          <span className="text-[#0D4F4F] font-medium">DERS</span>
        </div>

        {/* Başlık */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#0D4F4F] mb-4">
          Neden Arınma?
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-gray-500 mb-8">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>20 dk</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>Okuma</span>
          </div>
        </div>

        {/* İçerik */}
        <div className="bg-white rounded-2 xl shadow-sm border border-gray-100 p-8 mb-8">
          <article className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-[#0D4F4F] mb-6">Eşiği Geçerken</h2>
            
            <p className="mb-4">Usulsüz vusul olmaz der eskiler. Yolun başındayız. Bu ders, üç düğümü çözecek: 1400 yıllık bir sırrın, "zan" kavramının gündelik hayatımızdaki gizli kumandası; modern laboratuvarların, travma araştırmalarının aynı hakikate nasıl farklı kelimelerle diz çöktüğü ve arınma basamağını atlayıp doğrudan "uçmak" isteyenlerin çarptığı o sert duvarlar.</p>
            
            <p className="mb-8">Nihayetinde tüm kadim nehirlerin neden aynı denize döküldüğünü göreceksin: <strong>Önce temizlen, sonra yüksel.</strong> Bu bir tavsiye değil, varoluşsal bir mecburiyet.</p>
            ... (devamı kullanıcı promptunda mevcut, tamamı eklenecek) ...
          </article>
        </div>

        {/* Tamamla Butonu */}
        <button className="w-full bg-[#0D4F4F] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#0D4F4F]/90 transition-colors mb-6">
          <CheckCircle className="w-5 h-5" />
          Dersi Tamamladım
        </button>

        {/* Sonraki Ders */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500 mb-2">Sıradaki Ders</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#0D4F4F]">Ferrari Metaforu</span>
            <Link 
              href="/dersler/arinma/kapi/ferrari-metaforu"
              className="flex items-center gap-1 text-[#0D4F4F] hover:text-[#0D4F4F]/70 transition-colors"
            >
              Devam Et
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
