
"use client";

import React from 'react';
import { NedenArinma, FerrariMetaforu, YolculugaHazirlik } from './icerikler';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, BookOpen, CheckCircle2 } from 'lucide-react';

const DERS_ICERIKLERI: Record<string, {
  baslik: string;
  sure: string;
  Icerik: React.ComponentType;
  sonrakiDers: string | null;
  sonrakiBaslik: string | null;
}> = {
  'neden-arinma': {
    baslik: 'Neden Arınma?',
    sure: '20 dk',
    Icerik: NedenArinma,
    sonrakiDers: 'ferrari-metaforu',
    sonrakiBaslik: 'Ferrari Metaforu',
  },
  'ferrari-metaforu': {
    baslik: 'Ferrari Metaforu',
    sure: '12 dk',
    Icerik: FerrariMetaforu,
    sonrakiDers: 'yolculuga-hazirlik',
    sonrakiBaslik: 'Yolculuğa Hazırlık',
  },
  'yolculuga-hazirlik': {
    baslik: 'Yolculuğa Hazırlık',
    sure: '20 dk',
    Icerik: YolculugaHazirlik,
    sonrakiDers: null,
    sonrakiBaslik: null,
  },
};

export default function DersPage() {
  const params = useParams();
  const dersSlug = params.ders as string;
  const ders = DERS_ICERIKLERI[dersSlug];

  if (!ders) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F5F0E6] to-white pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Ders Bulunamadı</h1>
          <Link href="/dersler/arinma/kapi" className="text-[#0D4F4F] hover:underline">
            ← Geri Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F0E6] to-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Geri Butonu */}
        <Link
          href="/dersler/arinma/kapi"
          className="inline-flex items-center gap-2 text-[#0D4F4F] hover:text-[#0D4F4F]/70 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>KAPI Dersleri</span>
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-sm text-[#0D4F4F]/60 mb-3">
            <span>ARINMA</span>
            <span>→</span>
            <span>KAPI</span>
            <span>→</span>
            <span className="text-[#0D4F4F] font-medium">DERS</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0D4F4F] mb-4">
            {ders.baslik}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{ders.sure}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>Okuma</span>
            </div>
          </div>
        </div>

        {/* İçerik */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="prose prose-lg max-w-none prose-headings:text-[#0D4F4F] prose-a:text-[#0D4F4F] prose-strong:text-gray-800">
            {(() => {
              const { Icerik } = ders;
              return <Icerik />;
            })()}
          </div>
        </div>

        {/* Tamamla Butonu */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <button
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#0D4F4F] text-white font-semibold hover:bg-[#0D4F4F]/90 transition-all"
          >
            <CheckCircle2 className="w-5 h-5" />
            Dersi Tamamladım
          </button>
        </div>

        {/* Sonraki Ders */}
        {ders.sonrakiDers && (
          <div className="bg-[#0D4F4F]/5 rounded-xl p-6">
            <p className="text-sm text-gray-500 mb-2">Sıradaki Ders</p>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#0D4F4F]">{ders.sonrakiBaslik}</span>
              <Link
                href={`/dersler/arinma/kapi/${ders.sonrakiDers}`}
                className="flex items-center gap-2 text-[#0D4F4F] hover:underline text-sm"
              >
                Devam Et
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Son Ders Mesajı */}
        {!ders.sonrakiDers && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-green-800 mb-2">KAPI Aşaması Tamamlandı!</h3>
            <p className="text-sm text-green-700 mb-4">
              Tebrikler! Bir sonraki aşamaya geçebilirsin.
            </p>
            <Link
              href="/dersler/arinma"
              className="inline-flex items-center gap-2 text-green-700 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Aşamalara Dön
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
