# 🚀 OLUK Codespaces Hızlı Başlangıç Rehberi

> **✅ ARTIK OTOMATİK:** Codespace açtığınızda tüm uzantılar ve ayarlar otomatik yüklenir!  
> Detaylar: [.devcontainer/README.md](.devcontainer/README.md)

## ⚡ 3 Dakikada Başla

### 1. Environment Setup
```bash
# .env.local dosyasını kontrol et/düzenle
nano .env.local
```

Gerekli değerler:
```env
ANTHROPIC_API_KEY=sk-ant-api03-xxx
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx
```

### 2. Kurulum ve Başlatma
```bash
# Hızlı kurulum (artık otomatik)
bash setup.sh

# Veya manuel
npm install
npm run dev
```

### 3. Test Et
- Tarayıcıda aç: http://localhost:3000
- Mobil test: F12 → Device toolbar → iPhone SE
- Nur Koçu test: /nur-kocu

---

## 📦 Yeni Eklenen Özellikler

### ✅ Mobil Scroll Fix
- iOS Safari için `-webkit-overflow-scrolling`
- `overscroll-behavior-y: contain`
- Kullanım: `className="mobile-scroll-fix"`

### ✅ Gamification Dashboard
- Streak tracking (🔥)
- Level & XP bar
- Rozet sistemi
- Animasyonlu progression

**Kullanım:**
```jsx
import GamificationDashboard from '@/components/GamificationDashboard';

<GamificationDashboard userId="demo" />
```

### ✅ CSS Utilities
```css
.glow-teal      → Teal parlama efekti
.shimmer        → Yükleme animasyonu
.mobile-scroll-fix → Mobil scroll düzeltme
```

---

## 🔧 Önemli Komutlar

```bash
# Development
npm run dev

# Production build test
npm run build

# Lint
npm run lint

# Vercel deploy
vercel --prod
```

---

## 📁 Yeni Dosya Yapısı

```
/workspaces/oluk-portal/
├── setup.sh                    ← Kurulum scripti
├── .github/
│   └── workflows/
│       └── deploy.yml          ← Auto-deploy (mevcut)
├── src/
│   ├── app/
│   │   ├── globals.css         ← Güncellendi (mobil fix)
│   │   └── api/
│   │       └── nur-kocu/
│   │           └── route.ts    ← Mevcut API
│   └── components/
│       └── GamificationDashboard.jsx ← YENİ
```

---

## 🎯 Sonraki Adımlar

### 1. Gamification'ı Entegre Et
```jsx
// src/app/nur-kocu/page.tsx içine ekle
import GamificationDashboard from '@/components/GamificationDashboard';

// Sidebar'a ekle
<aside className="col-span-1">
  <GamificationDashboard userId={session?.user?.id} />
</aside>
```

### 2. Supabase'e Gamification Tabloları
```sql
CREATE TABLE user_progress (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  streak INT DEFAULT 0,
  level INT DEFAULT 1,
  xp INT DEFAULT 0,
  badges JSONB DEFAULT '[]',
  last_activity TIMESTAMP DEFAULT NOW()
);
```

### 3. Mobil Scroll Test
- iPhone SE, iPhone 12, iPad'de test et
- Safari'de smooth scroll kontrolü
- Overscroll bounce efekti kontrolü

---

## ⚠️ Troubleshooting

### Problem: npm run dev çalışmıyor
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Problem: Environment variables çalışmıyor
```bash
# .env.local'i kontrol et
cat .env.local

# Değişkenleri yeniden yükle
source .env.local
npm run dev
```

### Problem: Build hatası
```bash
# Cache temizle
rm -rf .next
npm run build
```

---

## 🚀 Vercel'e Deploy

### Manuel Deploy
```bash
vercel --prod
```

### Auto-Deploy (GitHub Actions)
Zaten aktif! Her `git push origin main` otomatik deploy tetikler.

**Gerekli Secrets:**
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

---

## 📊 Performans İzleme

### Build Kontrolü
```bash
npm run build
# Bundle size kontrolü
du -sh .next/
```

### Lighthouse Test
```bash
# Chrome DevTools → Lighthouse
# Mobil: 90+ hedef
# Desktop: 95+ hedef
```

---

## 🎨 UI/UX İyileştirmeleri

### Yeni CSS Utilities
```jsx
// Glow efekti
<div className="glow-teal">...</div>

// Shimmer loading
<div className="shimmer h-20 w-full rounded-lg" />

// Mobil scroll fix
<div className="mobile-scroll-fix overflow-y-auto">...</div>
```

---

## 📞 Destek

- **Dokümantasyon:** `_BRAIN/` klasörü
- **Deployment Logs:** `_BRAIN/logs/`
- **Vercel Dashboard:** https://vercel.com/olukorgs-projects/oluk-portal

---

## ✨ Son Kontrol Listesi

- [ ] `npm run dev` başarılı
- [ ] http://localhost:3000 açılıyor
- [ ] Mobil görünüm test edildi
- [ ] Gamification dashboard render ediliyor
- [ ] Nur Koçu API çalışıyor
- [ ] Build başarılı (`npm run build`)
- [ ] Vercel deploy başarılı

---

**Son güncelleme:** 20 Aralık 2025  
**Versiyon:** 2.1.0  
**Status:** ✅ Production Ready
