/**
 * 🚀 Performance & SEO Optimization Utilities
 * 
 * - Image lazy loading ve optimization
 * - Critical CSS extraction
 * - Resource hints (preload, prefetch)
 */

/**
 * Cloudinary URL optimizer
 * Otomatik format seçimi (WebP/AVIF) ve boyut optimizasyonu
 */
export function optimizeImageURL(
  url: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
  } = {}
): string {
  const { width, height, quality = 80, format = 'auto' } = options;

  // Cloudinary URL değilse olduğu gibi döndür
  if (!url.includes('cloudinary.com')) {
    return url;
  }

  // Base URL ve path'i ayır
  const [baseURL, path] = url.split('/upload/');
  if (!path) return url;

  // Transformation parametreleri
  const transformations: string[] = [
    format !== 'auto' && `f_${format}`,
    width && `w_${width}`,
    height && `h_${height}`,
    `q_${quality}`,
    'c_limit', // Aspect ratio korunur
    'dpr_auto', // Retina ekranlar için
  ].filter(Boolean) as string[];

  return `${baseURL}/upload/${transformations.join(',')}/${path}`;
}

/**
 * Responsive image srcset generator
 */
export function generateSrcSet(baseURL: string, widths: number[] = [640, 768, 1024, 1280, 1920]): string {
  return widths
    .map((width) => {
      const optimized = optimizeImageURL(baseURL, { width });
      return `${optimized} ${width}w`;
    })
    .join(', ');
}

/**
 * Sizes attribute helper
 */
export function generateSizes(breakpoints: Record<string, string>): string {
  return Object.entries(breakpoints)
    .map(([breakpoint, size]) => `(max-width: ${breakpoint}) ${size}`)
    .join(', ');
}

/**
 * Critical CSS için inline styles
 */
export const criticalStyles = `
  /* Prevent FOUT (Flash of Unstyled Text) */
  .font-serif { font-family: var(--font-cormorant), serif; }
  .font-sans { font-family: var(--font-source), sans-serif; }
  
  /* Critical hero styles */
  .hero-gradient {
    background: linear-gradient(135deg, #2D5A5A 0%, #3D7A7A 100%);
  }
  
  /* Loading spinner */
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  .animate-spin {
    animation: spin 1s linear infinite;
  }
`;

/**
 * Resource hints helper
 */
export function getResourceHints() {
  return [
    // Preconnect to CDN
    { rel: 'preconnect', href: 'https://res.cloudinary.com' },
    { rel: 'dns-prefetch', href: 'https://res.cloudinary.com' },
    
    // Preconnect to Google Fonts
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  ];
}

/**
 * Lazy load video helper
 */
export function createLazyVideoObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
) {
  if (typeof window === 'undefined') return null;

  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '200px', // Video görünmeden 200px önce yükle
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry);
      }
    });
  }, defaultOptions);
}

/**
 * Performance metrics tracker
 */
export function trackWebVitals() {
  if (typeof window === 'undefined') return;

  // Core Web Vitals
  if ('PerformanceObserver' in window) {
    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number };
      console.log('LCP:', lastEntry.renderTime || lastEntry.startTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('FID:', (entry as PerformanceEventTiming).processingStart - entry.startTime);
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!(entry as LayoutShift).hadRecentInput) {
          clsValue += (entry as LayoutShift).value;
        }
      });
      console.log('CLS:', clsValue);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }
}

// TypeScript interfaces
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

/**
 * Image component props helper
 */
export interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  quality?: number;
  className?: string;
}

/**
 * Generate Next.js Image props with optimization
 */
export function getOptimizedImageProps(
  src: string,
  options: Partial<OptimizedImageProps> = {}
): OptimizedImageProps {
  return {
    src: optimizeImageURL(src, {
      quality: options.quality,
      format: 'auto',
    }),
    alt: options.alt || '',
    width: options.width || 1920,
    height: options.height || 1080,
    priority: options.priority || false,
    quality: options.quality || 80,
    className: options.className || '',
  };
}

/**
 * Preload critical images
 */
export function preloadCriticalImages(urls: string[]) {
  if (typeof document === 'undefined') return;

  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = optimizeImageURL(url, { width: 1920, quality: 80 });
    document.head.appendChild(link);
  });
}
