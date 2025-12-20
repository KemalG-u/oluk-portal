# ⚡ OLUK Portal - Hızlı Başlangıç

## 🚨 VERCEL DEPLOYMENT PROTECTION KAPALI!

**Önce bunu yap:**
1. https://vercel.com/olukorgs-projects/oluk-portal/settings/deployment-protection
2. **"Vercel Authentication"** → **OFF** yap
3. Kaydet

## 📦 Yerel Geliştirme

```bash
npm install
npm run dev
```

Site: http://localhost:3000

## 🚀 Production Deploy

```bash
npm run build
vercel --prod
```

## ⚡ Performans Optimizasyonları (YENİ!)

### ✅ Yapılan İyileştirmeler:
- **IntersectionObserver** ile scroll reveal (eski scroll listener yerine)
- **requestAnimationFrame** ile debounced parallax
- **Passive event listeners** ile 60fps
- **Font preconnect** ile hızlı font loading
- **Cache headers** static dosyalar için (1 yıl)
- **Loading screen** ile kullanıcı deneyimi
- **Console logs** production'da kaldırıldı

### 📊 Beklenen Sonuçlar:
- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Total Blocking Time (TBT):** < 200ms
- **Cumulative Layout Shift (CLS):** < 0.1

## 🔥 Hızlı Test

```bash
# Build test
npm run build

# Lighthouse audit
npm install -g lighthouse
lighthouse https://oluk-portal.vercel.app --view
```

## 📝 Deployment Checklist

- [ ] `vercel login` yaptın mı?
- [ ] Environment variables eklenmiş mi? (`ANTHROPIC_API_KEY`)
- [ ] Deployment Protection kapatıldı mı?
- [ ] Build başarılı mı? (`npm run build`)
- [ ] ESLint warnings var mı? (sadece uyarı, critical değil)

## 🎯 Production URL'ler

- **Production:** https://oluk-portal-git-main-olukorgs-projects.vercel.app
- **Latest Build:** https://oluk-portal.vercel.app

## ⚠️ Sorun mu var?

```bash
# Cache temizle
rm -rf .next node_modules
npm install
npm run build

# Vercel logs
vercel logs

# Local test
npm run dev
```

## 💡 İpuçları

1. **Yavaş yükleme:** Deployment Protection'ı kontrol et
2. **Build hataları:** `npm run build` ile local test yap
3. **API çalışmıyor:** Environment variables'ı kontrol et
4. **Font yüklenmiyor:** CDN preconnect var mı kontrol et

---

**Son Güncelleme:** 20 Aralık 2025  
**Durum:** ✅ Optimize edildi - Production'a hazır
