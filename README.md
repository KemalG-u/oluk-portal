# 🔥 OLUK SIR SİSTEMİ - CODESPACE KURULUM

## 📁 DOSYA YAPISI

```
sir-sistemi/
├── page.tsx              → app/sir-secimi/page.tsx
├── route.ts              → app/api/sir/create/route.ts  
├── sir_tables.sql        → Supabase'de çalıştır
└── OLUK_SIR_SISTEMI_v2.md → Referans doküman (okumak için)
```

---

## 🚀 KURULUM ADIMLARI

### ADIM 1: Veritabanı Tabloları
1. Supabase Dashboard'a git
2. SQL Editor'ü aç
3. `sir_tables.sql` içeriğini yapıştır ve çalıştır

### ADIM 2: Sayfa Dosyası
```bash
# Klasör oluştur
mkdir -p app/sir-secimi

# Dosyayı kopyala
cp page.tsx app/sir-secimi/page.tsx
```

### ADIM 3: API Endpoint
```bash
# Klasör oluştur
mkdir -p app/api/sir/create

# Dosyayı kopyala
cp route.ts app/api/sir/create/route.ts
```

### ADIM 4: Framer Motion Kontrolü
```bash
# Framer Motion yüklü mü kontrol et
npm list framer-motion

# Yoksa yükle
npm install framer-motion
```

### ADIM 5: Test Et
```bash
npm run dev
# Tarayıcıda: http://localhost:3000/sir-secimi
```

---

## ⚠️ ÖNEMLİ NOTLAR

### Auth Entegrasyonu
`route.ts` dosyasında şu satırı güncelle:
```typescript
// BUNU:
const userId = 'demo-user-id';

// BUNA ÇEVİR:
const { data: { user } } = await supabase.auth.getUser();
const userId = user?.id;
```

### Mevcut Kullanıcı Kontrolü
Ana sayfada kullanıcının Sır'ı var mı kontrol et:
```typescript
// Eğer varsa sir-secimi'ne yönlendirme
// Eğer yoksa sir-secimi'ne yönlendir
```

---

## 📋 SEÇİM AKIŞI (10 AŞAMA)

1. **prepare** - "Şimdi bir an dur..."
2. **breathe** - 3x nefes al-ver (animasyonlu)
3. **heart** - "Elini kalbinin üstüne koy"
4. **explain** - 4 unsur açıklaması
5. **show-fire/water/air/earth** - Her unsur 8sn gösterilir
6. **think** - 15sn düşünme süresi
7. **select** - 4 seçenek, tıkla ve BİTTİ (geri dönüş YOK!)
8. **bonded** - "Artık bir sırrın var"
9. **intro-1/2/3** - Nerede görecek, nasıl değişecek, süreklilik
10. **name** - İsim verme ve başla

---

## 🎨 RENK PALETİ (Zaten OLUK'ta var)

```css
--deep-teal: #0D4F4F;
--warm-gold: #C9A962;
--cream: #F5F0E6;
--dark-bg: #0a0a0a;
```

---

## 🔗 SONRAKI ADIMLAR

1. ✅ Seçim sayfası (BU DOSYA)
2. ⏳ Ana sayfada Sır gösterimi (Pasif mod)
3. ⏳ Ders sayfalarında Sır köşe simgesi
4. ⏳ Sırdaş AI entegrasyonu

---

**Sorular için:** Kemal'e veya Claude'a sor
**Tarih:** 23 Aralık 2024
