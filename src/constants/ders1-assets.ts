/**
 * OLUK DERS 1 - GÖRSEL VE ANİMASYON ASSET'LERİ
 * 
 * Cloudinary CDN üzerinden serve edilen tüm görseller ve videolar
 * Kullanım: Next.js Image ve video componentlerinde
 * 
 * @version 1.0
 * @date 2025-12-19
 */

// ============================================================================
// TİP TANIMLARI
// ============================================================================

export interface VisualAsset {
  url: string;
  alt: string;
  width: number;
  height: number;
  aspect: "1:1" | "16:9" | "9:16";
  category: "infographic" | "cover" | "session";
}

export interface AnimationAsset {
  mp4: string;
  alt: string;
  duration: number; // saniye
  loop: boolean;
  category: "breathing" | "chakra" | "energy" | "cleansing";
}

// ============================================================================
// STATİK GÖRSELLER (7/7)
// ============================================================================

export const ders1Visuals: Record<string, VisualAsset> = {
  // Yüksek Öncelikli (4)
  aurikKatman: {
    url: "https://res.cloudinary.com/dzegofdgp/image/upload/v1766166298/oluk/ders1/infographics/ders1-7aurik-katman.png",
    alt: "7 Aurik Katman - Enerji Bedeni Tabakaları",
    width: 1080,
    height: 1920,
    aspect: "9:16",
    category: "infographic",
  },
  adimSifa: {
    url: "https://res.cloudinary.com/dzegofdgp/image/upload/v1766166320/oluk/ders1/infographics/ders1-12adim-sifa.png",
    alt: "12 Adım Şifa Spiral Yolu",
    width: 1080,
    height: 1920,
    aspect: "9:16",
    category: "infographic",
  },
  menzilKapak: {
    url: "https://res.cloudinary.com/dzegofdgp/image/upload/v1766166340/oluk/ders1/seans/seans1-menzil-kapak.png",
    alt: "Seans 1 Menzil Kapak Görseli",
    width: 1024,
    height: 1024,
    aspect: "1:1",
    category: "cover",
  },
  muhurKapani: {
    url: "https://res.cloudinary.com/dzegofdgp/image/upload/v1766167880/oluk/ders1/seans/seans-muhur-kapani.png",
    alt: "Seans Mühür Kapanışı",
    width: 1024,
    height: 1024,
    aspect: "1:1",
    category: "session",
  },

  // Orta Öncelikli (3)
  chakraSistem: {
    url: "https://res.cloudinary.com/dzegofdgp/image/upload/v1766167880/oluk/ders1/infographics/ders1-15chakra-tam-sistem.png",
    alt: "15 Çakralı Tam Sistem - 7 Ana + 8 Morfogenetik",
    width: 1920,
    height: 1080,
    aspect: "16:9",
    category: "infographic",
  },
  aktivasyonAkis: {
    url: "https://res.cloudinary.com/dzegofdgp/image/upload/v1766167901/oluk/ders1/infographics/ders1-19aktivasyon-akis.png",
    alt: "19 Aktivasyon Akış Şeması",
    width: 1920,
    height: 1080,
    aspect: "16:9",
    category: "infographic",
  },
  bakgecFelsefe: {
    url: "https://res.cloudinary.com/dzegofdgp/image/upload/v1766167882/oluk/ders1/infographics/ders1-felsefe-bakgec.png",
    alt: "Bak Geç Felsefesi - Akış Prensibi",
    width: 1024,
    height: 1024,
    aspect: "1:1",
    category: "infographic",
  },
} as const;

// ============================================================================
// ANİMASYON VİDEOLARI (4/5 - 1 EKSİK)
// ============================================================================

export const ders1Animations: Record<string, AnimationAsset> = {
  nefes: {
    mp4: "https://res.cloudinary.com/dzegofdgp/video/upload/v1766168656/oluk/ders1/seans/animations/seans-nefes-4-4-4-4.mp4",
    alt: "4-4-4-4 Kare Nefes Ritmi Animasyonu",
    duration: 16,
    loop: true,
    category: "breathing",
  },
  kalpTohum: {
    mp4: "https://res.cloudinary.com/dzegofdgp/video/upload/v1766168670/oluk/ders1/seans/animations/seans-kalp-tohum.mp4",
    alt: "Kalp Tohumu Atış Animasyonu",
    duration: 8,
    loop: true,
    category: "chakra",
  },
  enerjiAkis: {
    mp4: "https://res.cloudinary.com/dzegofdgp/video/upload/v1766168680/oluk/ders1/seans/animations/seans-enerji-akis-yukari.mp4",
    alt: "Enerji Yükselme Animasyonu",
    duration: 10,
    loop: true,
    category: "energy",
  },
  morAlev: {
    mp4: "https://res.cloudinary.com/dzegofdgp/video/upload/v1766168692/oluk/ders1/seans/animations/seans-arinma-mor-alev.mp4",
    alt: "Mor Alev Arınma Animasyonu",
    duration: 12,
    loop: true,
    category: "cleansing",
  },
  // EKSİK: altinIsik (seans-altin-isik-doldurma.mp4)
  // TODO: Video eklenince buraya ekle
} as const;

// ============================================================================
// HELPER FONKSİYONLAR
// ============================================================================

/**
 * Kategoriye göre görselleri filtrele
 */
export function getVisualsByCategory(
  category: VisualAsset["category"]
): VisualAsset[] {
  return Object.values(ders1Visuals).filter((v) => v.category === category);
}

/**
 * Aspect ratio'ya göre görselleri filtrele
 */
export function getVisualsByAspect(
  aspect: VisualAsset["aspect"]
): VisualAsset[] {
  return Object.values(ders1Visuals).filter((v) => v.aspect === aspect);
}

/**
 * Kategoriye göre animasyonları filtrele
 */
export function getAnimationsByCategory(
  category: AnimationAsset["category"]
): AnimationAsset[] {
  return Object.values(ders1Animations).filter((a) => a.category === category);
}

/**
 * Toplam asset sayısı
 */
export function getTotalAssets(): { total: number; complete: number } {
  const visualCount = Object.keys(ders1Visuals).length;
  const animationCount = Object.keys(ders1Animations).length;
  return {
    total: 12, // 7 görsel + 5 video
    complete: visualCount + animationCount, // 7 + 4 = 11
  };
}

// ============================================================================
// CLOUDINARY CONFIG
// ============================================================================

export const cloudinaryConfig = {
  cloudName: "dzegofdgp",
  folders: {
    infographics: "oluk/ders1/infographics",
    session: "oluk/ders1/seans",
    animations: "oluk/ders1/seans/animations",
  },
} as const;

// ============================================================================
// MARKA RENK PALETİ
// ============================================================================

export const brandColors = {
  teal: {
    hex: "#0D4F4F",
    rgb: "rgb(13, 79, 79)",
    name: "Deep Teal",
  },
  gold: {
    hex: "#C9A962",
    rgb: "rgb(201, 169, 98)",
    name: "Warm Gold",
  },
  cream: {
    hex: "#F5F0E6",
    rgb: "rgb(245, 240, 230)",
    name: "Soft Cream",
  },
} as const;

// ============================================================================
// EXPORT TÜRÜ KONTROL
// ============================================================================

// TypeScript tip güvenliği için
export type Ders1VisualKey = keyof typeof ders1Visuals;
export type Ders1AnimationKey = keyof typeof ders1Animations;
