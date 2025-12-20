# 🔐 OLUK PORTAL - SİSTEM BİLGİLERİ & KREDENSİYELLER
**Tarih:** 21 Aralık 2025  
**Durum:** ÖNEMLİ - GÜVENLİ SAKLA  
**Not:** Bu dosya .gitignore'da, asla GitHub'a pushlama!

---

## 🌐 PRODUCTION URL'LER

### Ana URL'ler
- **Production:** https://oluk.org
- **Vercel Dashboard:** https://vercel.com/olukorgs-projects/oluk-portal
- **GitHub Repo:** https://github.com/KemalG-u/oluk-portal

### Alternate URLs
- **Vercel Preview:** https://oluk-portal-*.vercel.app
- **Git Branch:** main (default)

---

## 🔑 API KEYS & SECRETS

### 1. ANTHROPIC (Claude AI)
**Kullanım:** Sırdaş AI chatbot
**Console:** https://console.anthropic.com/

```bash
ANTHROPIC_API_KEY=sk-ant-api03-***
```

**Lokasyon:**
- ✅ Vercel Production (Environment Variable)
- ✅ `.env.local` (local development)
- ⚠️ **ASLA** GitHub'a push etme!

**Model:** claude-sonnet-4-20250514  
**Limit:** Check console for usage

---

### 2. CLOUDINARY (Image CDN)
**Kullanım:** Görsel optimizasyon ve CDN
**Console:** https://console.cloudinary.com/

```bash
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dzegofdgp
CLOUDINARY_API_KEY=283632349543287
CLOUDINARY_API_SECRET=dm_7xFvraZI-IwcvAxnWGTeNrWM
```

**Lokasyon:**
- ✅ Vercel Production
- ✅ `.env.local`
- ✅ Public (CLOUD_NAME - güvenli)

**Quota:** Free tier - 25 GB storage, 25 GB bandwidth/month

---

### 3. SUPABASE (Database - Şu an kullanılmıyor)
**Console:** https://supabase.com/dashboard

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxxx
```

**Durum:** ⚠️ Configured ama aktif kullanımda değil  
**Not:** İleride user auth için kullanılabilir

---

## 📦 VERCEL DEPLOYMENT

### Environment Variables (Production)
**Nasıl Erişilir:**
```
Vercel Dashboard → Settings → Environment Variables
```

**Kayıtlı Secrets:**
1. `ANTHROPIC_API_KEY` - Claude AI (encrypted)
2. `CLOUDINARY_CLOUD_NAME` - dzegofdgp
3. `CLOUDINARY_API_KEY` - 283632349543287
4. `CLOUDINARY_API_SECRET` - (encrypted)

**Deployment Protection:**
- ✅ Kapatıldı (herkes erişebilir)
- URL: https://vercel.com/olukorgs-projects/oluk-portal/settings/deployment-protection

---

## 🛠️ LOCAL DEVELOPMENT

### Setup
```bash
# 1. Clone repo
git clone https://github.com/KemalG-u/oluk-portal.git

# 2. Install dependencies
npm install

# 3. Copy env
cp .env.example .env.local

# 4. Add real keys to .env.local
# (Yukarıdaki secrets'ları kopyala)

# 5. Run dev server
npm run dev
```

### Environment Files
- `.env.example` - Template (GitHub'da)
- `.env.local` - Gerçek keys (gitignore'da)
- `.env.production` - Production config (gitignore'da)

---

## 📂 CLOUDINARY ASSETS

### Upload Klasörleri
```
/oluk/
  ├── og-images/     # Open Graph images (1200x630)
  ├── favicons/      # Favicon assets
  ├── dersler/       # Ders görselleri
  └── content/       # Genel içerik
```

### Upload Script
```bash
node scripts/upload-to-cloudinary.cjs
```

**Kullanım:**
```javascript
import { CldImage } from '@/components/CldImage'

<CldImage 
  src="oluk/og-images/home"
  width={1200}
  height={630}
  alt="OLUK"
/>
```

---

## 🔒 GÜVENLİK NOTLARI

### ✅ Güvenli Pratikler
- Environment variables Vercel'de encrypted
- API keys asla client-side'da expose edilmiyor
- `.env.local` gitignore'da
- CORS headers yapılandırılmış

### ⚠️ Dikkat Edilmesi Gerekenler
- API rate limits (Anthropic: check console)
- Cloudinary bandwidth quota
- Vercel build minutes (ücretsiz: 100/ay)

### 🚨 Eğer Key Leak Olursa
1. **Hemen:** API key'i değiştir (provider console'dan)
2. **Vercel:** Environment variable'ı güncelle
3. **Local:** `.env.local`'i güncelle
4. **Redeploy:** `vercel --prod`

---

## 📊 MONITORING & ANALYTICS

### Vercel Analytics
- **URL:** https://vercel.com/olukorgs-projects/oluk-portal/analytics
- **Metrics:** Pageviews, visitors, Core Web Vitals

### Error Tracking
- Vercel Logs: Runtime errors
- Build Logs: Compile-time errors

**Logs Nasıl Görülür:**
```bash
vercel logs
# veya
vercel logs --prod
```

---

## 🔄 BACKUP & RECOVERY

### GitHub (Source Code)
- ✅ Main branch: Production-ready
- ✅ Commit history: Full
- ✅ Auto-deploy: Aktif (push → deploy)

### Vercel (Deployments)
- ✅ Her deployment kayıtlı
- ✅ Rollback mümkün
- ✅ Preview deployments saved

**Rollback Nasıl:**
```
Vercel Dashboard → Deployments → 
Eski deployment seç → "Promote to Production"
```

---

## 📞 DESTEK & DOKÜMANTASYON

### Service Providers
- **Vercel Support:** https://vercel.com/support
- **Anthropic Support:** support@anthropic.com
- **Cloudinary Support:** https://support.cloudinary.com

### Dokümantasyon
- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- Anthropic: https://docs.anthropic.com
- Cloudinary: https://cloudinary.com/documentation

---

## 🗓️ RENEWAL & SUBSCRIPTION

### Vercel (Free Tier)
- **Plan:** Hobby (Free)
- **Limits:** 
  - 100 deployments/ay
  - Serverless Functions: 100 GB-hours
  - Bandwidth: 100 GB
- **Upgrade:** Pro ($20/ay) - daha fazla gerekirse

### Anthropic
- **Plan:** Pay-as-you-go
- **Cost:** ~$0.01-0.03 per 1K tokens
- **Monitor:** Console → Usage

### Cloudinary
- **Plan:** Free Tier
- **Limits:** 25 GB storage, 25 GB bandwidth/ay
- **Upgrade:** Plus ($89/ay) - gerekirse

---

## 🚀 QUICK COMMANDS

### Deployment
```bash
# Production deploy
vercel --prod --yes

# Preview deploy
vercel

# Check deployment status
vercel ls
```

### Development
```bash
# Start dev server
npm run dev

# Build test
npm run build

# Type check
npx tsc --noEmit

# Lint
npm run lint
```

### Git
```bash
# Status
git status

# Commit & push
git add .
git commit -m "feat: description"
git push

# Pull latest
git pull origin main
```

---

## 🎯 TEKNİK DETAYLAR

### Stack
- **Framework:** Next.js 14.2.35
- **Runtime:** Edge (Vercel)
- **AI:** Claude Sonnet 4
- **CDN:** Cloudinary
- **Styling:** Tailwind CSS
- **Font:** Cormorant Garamond, Source Sans 3

### Build Configuration
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### Performance Targets
- **FCP:** < 1.5s ✅
- **LCP:** < 2.5s ✅
- **TBT:** < 200ms ✅
- **CLS:** < 0.1 ✅

---

**Son Güncelleme:** 21 Aralık 2025  
**Durum:** 🔐 ACTIVE & SECURE  
**Owner:** KemalG-u / oluk-portal

⚠️ **DİKKAT:** Bu dosyayı güvenli bir yerde sakla. Asla public olarak paylaşma!
