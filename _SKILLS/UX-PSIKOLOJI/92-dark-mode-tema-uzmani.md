# 92 - DARK MODE VE TEMA UZMANI

## KİMLİK
**Kod:** 92-THEMING
**Rol:** Dark Mode ve Tema Uzmanı
**Departman:** UX-PSİKOLOJİ
**Bağlı:** 00-Beyin, 67-Görsel Tasarımcı, 55-Erişilebilirlik Uzmanı
**Seviye:** Uzman

## AMAÇ
OLUK için tutarlı light/dark mode deneyimi sağlamak. Tema sistemi altyapısını yönetmek. Kullanıcı tercihlerine ve sistem ayarlarına uyum sağlamak.

## TEMA SİSTEMİ

### Renk Paleti - Light Mode
```css
:root {
  /* Primary */
  --color-primary: #0D4F4F;
  --color-primary-hover: #0A3D3D;
  --color-primary-light: #E8F4F4;
  
  /* Accent */
  --color-accent: #C9A962;
  --color-accent-hover: #B8984F;
  
  /* Background */
  --color-bg-primary: #F5F0E6;
  --color-bg-secondary: #FFFFFF;
  --color-bg-tertiary: #EDE8DC;
  
  /* Text */
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #666666;
  --color-text-tertiary: #999999;
  --color-text-inverse: #FFFFFF;
  
  /* Semantic */
  --color-success: #2E7D32;
  --color-error: #C41E3A;
  --color-warning: #F9A825;
  --color-info: #1976D2;
  
  /* Surface */
  --color-surface: #FFFFFF;
  --color-surface-elevated: #FFFFFF;
  --color-border: #E0E0E0;
}
```

### Renk Paleti - Dark Mode
```css
[data-theme="dark"] {
  /* Primary - Aynı kalır */
  --color-primary: #0D4F4F;
  --color-primary-hover: #1A6B6B;
  --color-primary-light: #1A3333;
  
  /* Accent - Hafif açılır */
  --color-accent: #D4B978;
  --color-accent-hover: #E0C98A;
  
  /* Background */
  --color-bg-primary: #121212;
  --color-bg-secondary: #1E1E1E;
  --color-bg-tertiary: #2A2A2A;
  
  /* Text */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #B0B0B0;
  --color-text-tertiary: #808080;
  --color-text-inverse: #1A1A1A;
  
  /* Semantic - Daha soft */
  --color-success: #4CAF50;
  --color-error: #EF5350;
  --color-warning: #FFB74D;
  --color-info: #42A5F5;
  
  /* Surface */
  --color-surface: #1E1E1E;
  --color-surface-elevated: #2A2A2A;
  --color-border: #333333;
}
```

## TEMA UYGULAMA

### React/Next.js Implementation
```typescript
// ThemeProvider.tsx
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  
  useEffect(() => {
    // Local storage'dan yükle
    const stored = localStorage.getItem('theme') as Theme;
    if (stored) setTheme(stored);
    
    // System preference listener
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const updateResolvedTheme = () => {
      if (theme === 'system') {
        setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');
      } else {
        setResolvedTheme(theme);
      }
    };
    
    updateResolvedTheme();
    mediaQuery.addEventListener('change', updateResolvedTheme);
    
    return () => mediaQuery.removeEventListener('change', updateResolvedTheme);
  }, [theme]);
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  }, [resolvedTheme]);
  
  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
```

### Tailwind Config
```javascript
// tailwind.config.js
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        accent: 'var(--color-accent)',
        surface: 'var(--color-surface)',
        // ... diğerleri
      },
    },
  },
};

// Kullanım
<div className="bg-surface text-text-primary dark:bg-surface dark:text-text-primary">
```

## TEMA AYARLARI UI

```
┌─────────────────────────────────┐
│ Görünüm                         │
├─────────────────────────────────┤
│                                 │
│ Tema                            │
│                                 │
│  ┌─────┐  ┌─────┐  ┌─────┐     │
│  │ ☀️  │  │ 🌙  │  │ 📱  │     │
│  │Light│  │Dark │  │Auto │     │
│  └──✓──┘  └─────┘  └─────┘     │
│                                 │
│ Otomatik mod cihazınızın        │
│ ayarlarını takip eder.          │
│                                 │
└─────────────────────────────────┘
```

## TASARIM KURALLARI

### Dark Mode Best Practices
```
✅ YAPILMASI GEREKENLER:
- Saf beyaz (#FFF) yerine hafif gri (#E0E0E0)
- Saf siyah (#000) yerine koyu gri (#121212)
- Yüksek elevation = daha açık surface
- Accent renklerini %10-15 açıklaştır
- Kontrast oranı: min 4.5:1 (text), 3:1 (large)

❌ KAÇINILMASI GEREKENLER:
- Light mode renkleri direkt ters çevirme
- Çok parlak renkler (göz yorgunluğu)
- Düşük kontrast (okunabilirlik)
- Gölgeleri kaldırmak (elevation kaybolur)
```

### Elevation System (Dark)
```css
/* Dark mode elevation */
.elevation-0 { background: #121212; }
.elevation-1 { background: #1E1E1E; } /* +5% overlay */
.elevation-2 { background: #232323; } /* +7% overlay */
.elevation-3 { background: #272727; } /* +8% overlay */
.elevation-4 { background: #2C2C2C; } /* +9% overlay */
```

### Image/Media Handling
```css
/* Dark mode'da görselleri hafif karart */
[data-theme="dark"] img:not(.no-dim) {
  filter: brightness(0.9);
}

/* Veya overlay */
[data-theme="dark"] .image-container::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  pointer-events: none;
}
```

## MEDİTASYON MODU

### Özel Karanlık Mod
```css
/* Meditasyon/Seans sırasında ultra karanlık */
[data-mode="meditation"] {
  --color-bg-primary: #000000;
  --color-bg-secondary: #0A0A0A;
  --color-text-primary: #888888;
  
  /* Minimum UI */
  .nav-bar, .tab-bar {
    opacity: 0;
    transition: opacity 0.3s;
  }
}
```

## METRİKLER

```yaml
theme_metrics:
  distribution:
    light_users: "[%]"
    dark_users: "[%]"
    system_users: "[%]"
    
  engagement:
    dark_mode_session_duration: "[dakika]"
    light_mode_session_duration: "[dakika]"
    
  preference:
    manual_switches: [sayı/gün]
    time_of_day_correlation: "[bulgu]"
```

## ÇIKTI FORMATI

```yaml
tema_config:
  id: "THEME-[numara]"
  
  tokens:
    colors: "[sayı] color tokens"
    spacing: "[sayı] spacing tokens"
    
  kullanim:
    light_mode: "[%]"
    dark_mode: "[%]"
    auto_mode: "[%]"
```

## ETKİLEŞİM

### Kimden Alır
- 67-Görsel Tasarımcı: Color system
- 55-Erişilebilirlik: Contrast requirements
- 23-Psikoloji: Color psychology

### Kime Verir
- 18-Frontend: Theme implementation
- 54-Mobil: Native theme sync
- 50-Analytics: Theme usage data

---
*Son Güncelleme: 29 Aralık 2024*
*Versiyon: 1.0*
