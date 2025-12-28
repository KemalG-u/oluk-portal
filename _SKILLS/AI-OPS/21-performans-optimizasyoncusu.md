# 21 - PERFORMANS OPTİMİZASYONCUSU

## KİMLİK
**Kod:** 21-PERF-OPT
**Departman:** AI-OPS
**Rol:** Performans ve Hız Uzmanı
**Bağlılık:** Tüm teknik sistemlerle çalışır

---

## GÖREV TANIMI

OLUK platformunun performansını izler, darboğazları tespit eder ve optimize eder. Core Web Vitals hedeflerini karşılar, kullanıcı deneyimini hız açısından mükemmelleştirir.

---

## CORE WEB VITALS HEDEFLERİ

| Metrik | Hedef | Kritik Eşik | Açıklama |
|--------|-------|-------------|----------|
| **LCP** | <2.5s | <4.0s | Largest Contentful Paint |
| **FID** | <100ms | <300ms | First Input Delay |
| **CLS** | <0.1 | <0.25 | Cumulative Layout Shift |
| **TTFB** | <600ms | <1.8s | Time to First Byte |
| **FCP** | <1.8s | <3.0s | First Contentful Paint |
| **INP** | <200ms | <500ms | Interaction to Next Paint |

---

## NEXT.JS OPTİMİZASYONLARI

### 1. Image Optimization

```typescript
// components/OptimizedImage.tsx
import Image from 'next/image';

export function OptimizedImage({ 
  src, 
  alt, 
  priority = false,
  ...props 
}: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      placeholder="blur"
      blurDataURL={generateBlurDataURL()}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      {...props}
    />
  );
}

// next.config.js
module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
};
```

### 2. Code Splitting

```typescript
// Lazy loading components
import dynamic from 'next/dynamic';

// Heavy components
const SirdasChat = dynamic(() => import('@/components/SirdasChat'), {
  loading: () => <SirdasSkeleton />,
  ssr: false // Client-only
});

const MeditationPlayer = dynamic(() => import('@/components/MeditationPlayer'), {
  loading: () => <PlayerSkeleton />
});

// Route-based splitting (otomatik Next.js)
// pages/lesson/[slug].tsx → ayrı chunk
```

### 3. Bundle Analysis

```bash
# Bundle analizi
npm install @next/bundle-analyzer

# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // config
});

# Çalıştır
ANALYZE=true npm run build
```

---

## CACHING STRATEJİSİ

### 1. Static Generation (SSG)

```typescript
// Statik sayfalar için
export async function generateStaticParams() {
  const lessons = await getLessons();
  return lessons.map((lesson) => ({
    slug: lesson.slug,
  }));
}

// ISR (Incremental Static Regeneration)
export const revalidate = 3600; // 1 saat
```

### 2. Server-Side Caching

```typescript
// lib/cache.ts
import { unstable_cache } from 'next/cache';

export const getCachedLessons = unstable_cache(
  async () => {
    return await db.lessons.findMany({
      where: { is_published: true },
      orderBy: { order_num: 'asc' }
    });
  },
  ['lessons'],
  { revalidate: 3600, tags: ['lessons'] }
);

// Cache invalidation
import { revalidateTag } from 'next/cache';
revalidateTag('lessons');
```

### 3. Client-Side Caching (SWR)

```typescript
// hooks/useLessons.ts
import useSWR from 'swr';

export function useLessons() {
  const { data, error, isLoading } = useSWR(
    '/api/lessons',
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 60000, // 1 dk
      focusThrottleInterval: 60000
    }
  );
  
  return { lessons: data, error, isLoading };
}
```

### 4. Edge Caching

```typescript
// Vercel Edge Config
// vercel.json
{
  "headers": [
    {
      "source": "/api/lessons/:path*",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "s-maxage=3600, stale-while-revalidate=86400"
        }
      ]
    },
    {
      "source": "/_next/static/:path*",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## DATABASE OPTİMİZASYONU

### 1. Query Optimization

```sql
-- Yavaş sorguları tespit
SELECT 
  query,
  calls,
  mean_time,
  total_time
FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 20;

-- EXPLAIN ANALYZE kullan
EXPLAIN ANALYZE
SELECT * FROM user_progress
WHERE user_id = 'xxx' AND status = 'completed';
```

### 2. Connection Pooling

```typescript
// Supabase otomatik pooling yapar
// Ekstra: PgBouncer yapılandırması
// Transaction mode önerilir

const supabase = createClient(url, key, {
  db: {
    schema: 'public',
  },
  auth: {
    persistSession: true,
  },
  global: {
    headers: { 'x-connection-pool': 'true' },
  },
});
```

### 3. Selective Fetching

```typescript
// Sadece gerekli alanları çek
const { data } = await supabase
  .from('lessons')
  .select('id, title, slug, phase') // TÜM kolonları çekme!
  .eq('is_published', true)
  .order('order_num');

// İlişkili veri için join
const { data } = await supabase
  .from('lessons')
  .select(`
    id, title,
    sessions (id, title, duration_seconds)
  `)
  .eq('id', lessonId)
  .single();
```

---

## FRONTEND OPTİMİZASYONU

### 1. Font Optimization

```typescript
// app/layout.tsx
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: false, // Başlıklarda kullanılıyor, geciktirilebilir
});
```

### 2. CSS Optimization

```typescript
// Tailwind purge
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  // Unused CSS otomatik silinir
};

// Critical CSS (otomatik Next.js)
// _document.tsx ile inline critical CSS
```

### 3. JavaScript Optimization

```typescript
// Tree shaking için named imports
import { motion } from 'framer-motion'; // ❌ Tüm library
import { motion } from 'framer-motion/motion'; // ✅ Sadece motion

// Lodash modüler import
import debounce from 'lodash/debounce'; // ✅
import { debounce } from 'lodash'; // ❌
```

---

## MONITORING & ALERTING

### 1. Vercel Analytics

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

### 2. Custom Performance Tracking

```typescript
// lib/performance.ts
export function trackWebVitals(metric: Metric) {
  const { name, value, id } = metric;
  
  // Mixpanel'e gönder
  trackEvent('system', 'Web Vital', {
    metric_name: name,
    metric_value: Math.round(value),
    metric_id: id,
  });
  
  // Threshold aşımı alert
  const thresholds = {
    LCP: 2500,
    FID: 100,
    CLS: 0.1,
    TTFB: 600,
  };
  
  if (value > thresholds[name]) {
    console.warn(`Performance degradation: ${name} = ${value}`);
  }
}
```

### 3. Error Tracking

```typescript
// Sentry entegrasyonu
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0.1, // %10 sampling
  profilesSampleRate: 0.1,
  environment: process.env.NODE_ENV,
});
```

---

## PERFORMANS CHECKLIST

### Deploy Öncesi
```
□ Lighthouse skoru >90 (tüm kategoriler)
□ Bundle size <500KB (gzipped)
□ LCP <2.5s (mobil)
□ FID <100ms
□ CLS <0.1
□ Tüm görseller optimize
□ Lazy loading aktif
□ Cache headers doğru
```

### Haftalık Kontrol
```
□ Core Web Vitals raporu
□ Yavaş endpoint'ler analizi
□ Error rate kontrolü
□ Database query performance
□ CDN hit ratio
```

---

## ENTEGRASYON

**Girdi Alır:**
- 19-Supabase (query optimization)
- 20-API Entegrasyon (endpoint performance)

**Çıktı Verir:**
- Performance raporları
- Optimizasyon önerileri
- Alert bildirimleri

---

## SÜRÜM
- v1.0 - 29 Aralık 2024 - İlk oluşturma
