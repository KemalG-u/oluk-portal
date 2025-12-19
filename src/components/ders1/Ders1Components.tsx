/**
 * OLUK DERS 1 - REACT COMPONENT ÖRNEKLERİ
 * 
 * Next.js Image ve video componentleri ile kullanım örnekleri
 * Responsive, optimize, production-ready
 */

import Image from "next/image";
import { ders1Visuals, ders1Animations } from "@/lib/ders1-assets";

// ============================================================================
// STATİK GÖRSEL COMPONENTLER
// ============================================================================

/**
 * Hero Image - 9:16 Portrait
 * Mobil için optimize edilmiş dikey görsel
 */
export function AurikKatmanHero() {
  const visual = ders1Visuals.aurikKatman;

  return (
    <div className="relative w-full max-w-md mx-auto">
      <Image
        src={visual.url}
        alt={visual.alt}
        width={visual.width}
        height={visual.height}
        quality={90}
        priority // LCP için önemli
        className="rounded-lg shadow-2xl"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

/**
 * Infographic - 16:9 Landscape
 * Desktop için geniş infografik
 */
export function ChakraSystemInfographic() {
  const visual = ders1Visuals.chakraSistem;

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Image
        src={visual.url}
        alt={visual.alt}
        width={visual.width}
        height={visual.height}
        quality={85}
        className="rounded-xl shadow-xl"
        sizes="(max-width: 1280px) 100vw, 1280px"
      />
      <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-xl">
        <p className="text-white font-medium">{visual.alt}</p>
      </div>
    </div>
  );
}

/**
 * Cover Image - 1:1 Square
 * Sosyal medya ve thumbnail için
 */
export function SessionCover() {
  const visual = ders1Visuals.menzilKapak;

  return (
    <div className="relative w-64 h-64">
      <Image
        src={visual.url}
        alt={visual.alt}
        fill
        quality={80}
        className="rounded-lg object-cover"
        sizes="256px"
      />
    </div>
  );
}

/**
 * Responsive Grid - Tüm Görseller
 */
export function VisualsGrid() {
  const visuals = Object.values(ders1Visuals);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {visuals.map((visual, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-lg bg-gray-100 hover:shadow-2xl transition-shadow"
        >
          <div className="relative aspect-square">
            <Image
              src={visual.url}
              alt={visual.alt}
              fill
              quality={75}
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
            <p className="text-white text-sm font-medium line-clamp-2">
              {visual.alt}
            </p>
            <span className="text-white/70 text-xs">{visual.aspect}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// ANİMASYON VİDEO COMPONENTLER
// ============================================================================

/**
 * Loop Animation - Autoplay
 * Seans animasyonları için
 */
export function NefesAnimation() {
  const anim = ders1Animations.nefes;

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto rounded-lg shadow-xl"
      >
        <source src={anim.mp4} type="video/mp4" />
        {anim.alt}
      </video>
      <div className="mt-2 text-center text-sm text-gray-600">
        {anim.alt} • {anim.duration}s
      </div>
    </div>
  );
}

/**
 * Interactive Video - User Control
 * Kullanıcı kontrollü oynatma
 */
export function KalpTohumInteractive() {
  const anim = ders1Animations.kalpTohum;

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <video
        loop
        muted
        playsInline
        controls
        className="w-full h-auto rounded-lg shadow-xl"
      >
        <source src={anim.mp4} type="video/mp4" />
        {anim.alt}
      </video>
    </div>
  );
}

/**
 * Background Video - Fullscreen
 * Arka plan animasyonu
 */
export function EnerjiAkisBackground() {
  const anim = ders1Animations.enerjiAkis;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src={anim.mp4} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
    </div>
  );
}

/**
 * Animation Gallery
 * Tüm animasyonları grid'de göster
 */
export function AnimationGallery() {
  const animations = Object.entries(ders1Animations);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
      {animations.map(([key, anim]) => (
        <div key={key} className="relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-lg shadow-lg"
          >
            <source src={anim.mp4} type="video/mp4" />
            {anim.alt}
          </video>
          <div className="mt-3 space-y-1">
            <h3 className="font-semibold text-gray-900">{anim.alt}</h3>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="px-2 py-1 bg-gray-100 rounded">
                {anim.duration}s
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                {anim.category}
              </span>
              {anim.loop && (
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded">
                  Loop
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// COMBINED LAYOUT
// ============================================================================

/**
 * Hero Section - Görsel + Animasyon
 */
export function Ders1HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-6">
      {/* Arka plan animasyon */}
      <EnerjiAkisBackground />

      {/* İçerik */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Sol: Görsel */}
        <div>
          <AurikKatmanHero />
        </div>

        {/* Sağ: Animasyon + Metin */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Ders 1: Enerji Bedeni
          </h1>
          <p className="text-xl text-white/90">
            7 Aurik katmandan oluşan enerji bedeninizi keşfedin
          </p>
          <NefesAnimation />
        </div>
      </div>
    </section>
  );
}

/**
 * Infographic Section
 */
export function Ders1InfographicSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Enerji Sistemi Haritası
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            15 çakra ve 19 aktivasyon noktasından oluşan tam sistem
          </p>
        </div>

        <ChakraSystemInfographic />

        <VisualsGrid />
      </div>
    </section>
  );
}

/**
 * Session Section - Videolu Seans
 */
export function Ders1SessionSection() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Rehberli Meditasyon Seansı
          </h2>
          <p className="text-xl text-gray-300">
            4 aşamalı arınma ve yükseltme pratiği
          </p>
        </div>

        <AnimationGallery />
      </div>
    </section>
  );
}
