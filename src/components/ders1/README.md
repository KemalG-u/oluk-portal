# Ders 1 Component'leri - Kullanım Kılavuzu

## Kurulum

1. **Asset dosyasını içe aktar:**
```typescript
import { ders1Visuals, ders1Animations } from "@/lib/ders1-assets";
```

2. **Component'leri kullan:**
```typescript
import {
  AurikKatmanHero,
  ChakraSystemInfographic,
  NefesAnimation,
  AnimationGallery,
} from "@/components/ders1/Ders1Components";
```

## Temel Kullanım

### 1. Hero Section
```tsx
// app/ders-1/page.tsx
import { Ders1HeroSection } from "@/components/ders1/Ders1Components";

export default function Ders1Page() {
  return <Ders1HeroSection />;
}
```

### 2. Infographic Section
```tsx
import { Ders1InfographicSection } from "@/components/ders1/Ders1Components";

export default function Ders1Page() {
  return (
    <div>
      <Ders1HeroSection />
      <Ders1InfographicSection />
    </div>
  );
}
```

### 3. Session Section
```tsx
import { Ders1SessionSection } from "@/components/ders1/Ders1Components";

export default function Ders1Page() {
  return (
    <div>
      <Ders1HeroSection />
      <Ders1InfographicSection />
      <Ders1SessionSection />
    </div>
  );
}
```

## Özel Kullanımlar

### Single Image
```tsx
import Image from "next/image";
import { ders1Visuals } from "@/lib/ders1-assets";

function MyComponent() {
  return (
    <Image
      src={ders1Visuals.aurikKatman.url}
      alt={ders1Visuals.aurikKatman.alt}
      width={1080}
      height={1920}
      quality={90}
    />
  );
}
```

### Single Video
```tsx
import { ders1Animations } from "@/lib/ders1-assets";

function MyComponent() {
  return (
    <video autoPlay loop muted playsInline>
      <source src={ders1Animations.nefes.mp4} type="video/mp4" />
    </video>
  );
}
```

### Helper Functions
```tsx
import {
  getVisualsByCategory,
  getVisualsByAspect,
  getTotalAssets,
} from "@/lib/ders1-assets";

// Kategoriye göre filtrele
const infographics = getVisualsByCategory("infographic");
const covers = getVisualsByCategory("cover");

// Aspect ratio'ya göre filtrele
const squareImages = getVisualsByAspect("1:1");
const portraitImages = getVisualsByAspect("9:16");

// Toplam asset sayısı
const stats = getTotalAssets();
console.log(`${stats.complete}/${stats.total} completed`);
```

## Responsive Davranış

Tüm component'ler responsive:

- **Mobile (< 768px):** 1 sütun, tam genişlik
- **Tablet (768px - 1200px):** 2 sütun
- **Desktop (> 1200px):** 3 sütun

## Performance Optimizasyonları

1. **Image Priority:** Hero görsellerde `priority` kullanılıyor (LCP)
2. **Lazy Loading:** Grid'deki görseller lazy load
3. **Quality:** 75-90 arası optimize kalite
4. **Sizes:** Responsive `sizes` attribute
5. **Video:** `playsInline` + `muted` autoplay için

## Tailwind CSS

Tüm component'ler Tailwind CSS kullanıyor:

```tsx
// Örnek class'lar
className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
className="bg-gradient-to-b from-white to-gray-50"
```

## TypeScript Tip Güvenliği

```typescript
import type { VisualAsset, AnimationAsset } from "@/lib/ders1-assets";

function renderVisual(visual: VisualAsset) {
  // Type-safe
}

function renderAnimation(anim: AnimationAsset) {
  // Type-safe
}
```

## Örnekler

### Lightbox Gallery
```tsx
import { useState } from "react";
import Image from "next/image";
import { ders1Visuals } from "@/lib/ders1-assets";

export function LightboxGallery() {
  const [selected, setSelected] = useState<string | null>(null);
  const visuals = Object.values(ders1Visuals);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {visuals.map((v, i) => (
          <button key={i} onClick={() => setSelected(v.url)}>
            <Image src={v.url} alt={v.alt} width={300} height={300} />
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <Image src={selected} alt="" fill className="object-contain" />
        </div>
      )}
    </>
  );
}
```

### Video Player with Controls
```tsx
import { useRef, useState } from "react";
import { ders1Animations } from "@/lib/ders1-assets";

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <div className="relative">
      <video ref={videoRef} loop muted playsInline>
        <source src={ders1Animations.nefes.mp4} type="video/mp4" />
      </video>
      <button
        onClick={toggle}
        className="absolute bottom-4 left-4 px-4 py-2 bg-white/90 rounded"
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}
```

## Test

```bash
# TypeScript tip kontrolü
npm run type-check

# Build test
npm run build

# Development
npm run dev
```

## Deployment

Tüm asset'ler Cloudinary CDN'de, deployment'a hazır:
- ✅ HTTPS
- ✅ Global CDN
- ✅ Otomatik optimizasyon
- ✅ Responsive images
- ✅ Video transcoding

## Notlar

- 5. animasyon (seans-altin-isik-doldurma.mp4) henüz yüklenmedi
- Yüklendiğinde `ders1-assets.ts` dosyasına eklenecek
- Component'ler otomatik güncellenecek (type-safe)
