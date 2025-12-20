# 🔗 N8N + SUPABASE + INSTAGRAM SETUP GUIDE

**Hedef:** 15 dakikada 3 hesap aç, bilgileri topla

---

## 📋 CHECKLIST

```
□ n8n hesap açıldı
□ Supabase hesap açıldı
□ Instagram hesap açıldı
□ Tüm bilgiler toplandı
□ Claude'a bildirildi
```

---

## 1️⃣ N8N HESAP AÇ (2 dakika)

### Adımlar:
```
1. Tarayıcı aç: https://app.n8n.cloud

2. "Start free trial" tıkla

3. Email gir: hatay61@gmail.com (veya yeni)

4. Şifre oluştur: (güçlü bir şifre)

5. Email'i onayla:
   → Gmail'e git
   → n8n'den gelen maili aç
   → "Verify email" tıkla

6. Dashboard açılınca:
   → Settings → Webhooks
   → "Production Webhook URL" kopyala
```

### Örnek Webhook URL:
```
https://oluk.hooks.n8n.cloud/webhook/abc123
```

### Not Et:
```
n8n Webhook URL: ___________________________
```

---

## 2️⃣ SUPABASE HESAP AÇ (2 dakika)

### Adımlar:
```
1. Tarayıcı aç: https://supabase.com

2. "Start your project" tıkla

3. GitHub ile giriş (VEYA email ile)
   → GitHub öneriyorum (daha hızlı)

4. "New Project" tıkla

5. Bilgileri doldur:
   Name: oluk-portal
   Database Password: (güçlü şifre oluştur)
   Region: Europe West (Frankfurt) → En yakın
   Plan: Free

6. "Create new project" tıkla (1-2 dk bekle)

7. Project açılınca:
   → Settings → API
   → Project URL kopyala
   → anon public key kopyala
```

### Örnek Bilgiler:
```
Project URL: https://abcdefgh.supabase.co
anon public: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Not Et:
```
Supabase URL: ___________________________
Supabase anon key: _______________________
```

---

## 3️⃣ INSTAGRAM HESAP AÇ (5 dakika)

### Adımlar:
```
1. Instagram app aç (telefondan)

2. "Yeni hesap oluştur" tıkla

3. Email gir: hatay61@gmail.com
   (veya yeni bir email aç)

4. Ad Soyad: OLUK Portal

5. Kullanıcı adı: oluk_portal
   (müsait değilse: oluk.portal veya olukportal)

6. Şifre oluştur: (güçlü şifre)

7. Doğum tarihi gir: (18+ olmalı)

8. Email'i onayla:
   → Gmail'den kodu kopyala
   → Instagram'a yapıştır

9. Profile photo yükle:
   → Bilgisayardan icon.svg'yi telefonuna at
   → Veya Cloudinary'den indir:
     https://res.cloudinary.com/dzegofdgp/image/upload/oluk/favicon.svg

10. Bio'ya yapıştır:
```

**BIO (COPY-PASTE):**
```
🌟 OLUK | Spiritüel Dönüşüm
✨ Günlük pratikler, derin seanslar
🧘‍♀️ BAK GEÇ, GÖR GEÇ, TAKILMA GEÇ
📲 oluk.org
```

```
11. Website ekle: oluk.org

12. Kategori seç: Eğitim

13. Contact: hatay61@gmail.com ekle
```

### Not Et:
```
Instagram username: @___________________
```

---

## 4️⃣ BİLGİLERİ TOPLA

### Codespaces'e Kopyala:

```bash
# 1. n8n Webhook URL
N8N_WEBHOOK_URL=https://oluk.hooks.n8n.cloud/webhook/YOUR_WEBHOOK_ID

# 2. Supabase Project URL
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co

# 3. Supabase anon key
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# 4. Instagram username
INSTAGRAM_USERNAME=@oluk_portal
```

---

## 5️⃣ CLAUDE'A BİLDİR

### Mesaj Şablonu:

```
@agent HESAPLAR AÇILDI!

n8n Webhook: https://oluk.hooks.n8n.cloud/webhook/abc123
Supabase URL: https://abcd1234.supabase.co
Supabase Key: eyJhbGciOiJI...
Instagram: @oluk_portal

Şimdi entegrasyonları kur!
```

---

## 🎯 SONRA BEN YAPARIM

### 1. n8n Workflow'lar (10 dk)
```
✅ Instagram post scheduler
✅ Email notifications
✅ Supabase data sync
✅ Analytics webhook
```

### 2. Supabase Schema (10 dk)
```
✅ Users table
✅ Meditation sessions
✅ Analytics events
✅ Row Level Security
```

### 3. Instagram Automation (10 dk)
```
✅ Post templates
✅ Caption generator
✅ Hashtag strategy
✅ Story scheduler
```

---

## ❓ SORUN ÇIKARSA

### Email onay kodu gelmiyor
```
→ Spam klasörüne bak
→ 2-3 dakika bekle
→ "Kodu tekrar gönder" tıkla
```

### Instagram username alınmış
```
→ oluk.portal dene
→ olukportal dene
→ olukortal dene (typo ama çalışır)
```

### Supabase project açılmıyor
```
→ 2-3 dakika bekle (provision time)
→ Sayfayı yenile
→ Hala açılmazsa: Dashboard → Projects → Refresh
```

### n8n webhook URL bulamıyorum
```
→ Dashboard → Settings
→ Sol menü → Webhooks
→ "Production Webhook URL" altında
```

---

## ⏱️ TOPLAM SÜRE

```
n8n:       2 dakika
Supabase:  2 dakika
Instagram: 5 dakika
Bilgi toplama: 1 dakika
─────────────────────
TOPLAM:    10 dakika
```

**Gerçekçi süre:** 15 dakika (sorun çıkarsa)

---

## 🚀 SONRA (CLAUDE YAPACAK)

### 30 Dakika İçinde:
```
✅ Tüm entegrasyonlar kurulacak
✅ Otomasyonlar çalışacak
✅ İlk post hazır olacak
✅ Analytics başlayacak
```

### Test Edilerek:
```
✅ n8n workflow test
✅ Supabase connection test
✅ Instagram post preview
✅ End-to-end test
```

---

**HAZIR MISIN? BAŞLA! ⏰**

15 dakika sonra tüm hesaplar hazır olacak! 🎉
