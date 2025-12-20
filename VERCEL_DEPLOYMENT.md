# 🚀 VERCEL DEPLOYMENT GEREKLİ

## Durum
- ✅ Kod GitHub'da hazır
- ❌ Vercel'e connect edilmemiş
- ❌ oluk.org GitHub Pages'te (static)
- ❌ Next.js özellikleri çalışmıyor

## Acil Yapılması Gerekenler

### 1. Vercel'e Login & Deploy

```bash
# Terminal'de çalıştır:
vercel login

# Projeyi deploy et:
vercel --prod

# Domain ekle:
vercel domains add oluk.org
```

### 2. Environment Variables (Vercel Dashboard'da)

Vercel Dashboard > Settings > Environment Variables:

```env
ANTHROPIC_API_KEY=your_actual_key_here
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=ddkcmr5yw
NODE_ENV=production
```

### 3. Domain Ayarları

#### A) GitHub Pages'i Kaldır:
1. GitHub Repo > Settings > Pages
2. "None" seç (devre dışı bırak)

#### B) Domain DNS Ayarları (oluk.org registrar'ında):
```
Type: A Record
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### 4. Vercel'de Domain Connect
```bash
vercel domains add oluk.org
vercel domains add www.oluk.org
```

## Neden Şimdi Çalışmıyor?

GitHub Pages sadece static HTML/CSS/JS serve eder:
- ❌ Next.js API routes çalışmaz
- ❌ Server-side rendering yok
- ❌ Dynamic routes (nur-kocu, sirdas) 404 verir
- ❌ Environment variables erişilemez

## Deploy Sonrası Çalışacaklar

✅ Ana sayfa
✅ /nur-kocu (AI Chat)
✅ /sirdas (AI Danışman)  
✅ /dersler/ders-1
✅ API routes (/api/*)
✅ Faviconlar
✅ SEO optimizasyonları
✅ Dynamic content

---

**ÖNEMLİ**: Bu işlemler Vercel hesabına login gerektiriyor!
