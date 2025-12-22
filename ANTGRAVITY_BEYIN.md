# 🧠 ANTGRAVITY BEYİN - OLUK PORTAL
## Proje Hafızası | Son Güncelleme: 22 Aralık 2024

---

# 📋 HIZLI REFERANS

| Bilgi | Değer |
|-------|-------|
| **Proje** | OLUK - Spiritüel Dönüşüm Platformu |
| **Canlı Site** | https://oluk.org |
| **Repo** | https://github.com/KemalG-u/oluk-portal |
| **Tech Stack** | Next.js 14, TypeScript, Tailwind, Supabase |
| **Patron** | Kemal |
| **Proje Müdürü** | Claude (strateji, içerik, koordinasyon) |
| **Baş Mimar** | Antgravity (kod, implementasyon) |

---

# 🎨 MARKA KİMLİĞİ

## Renkler
| Renk | HEX | Kullanım |
|------|-----|----------|
| Derin Turkuaz | `#0D4F4F` | Ana marka, başlıklar |
| Sıcak Altın | `#C9A962` | Vurgular, premium |
| Krem | `#F5F0E6` | Arka plan |
| Kömür | `#2C3E50` | Metin |

## Fontlar
- **Inter** → Gövde metin, UI
- **Playfair Display** → Başlıklar

## Slogan
> "Akışın Kanalı, Dönüşümün Yolu"

---

# 🚫 YASAKLAR (KRİTİK!)

1. **Besmele/dini sembol YASAK** → Bilinçaltı iletişim
2. **Kapkara site YASAK** → %95 kadın kitle
3. **"Nur Koçu" ismi YASAK** → "SIRDAŞ" kullan
4. **Hocanın sesi YASAK** → Kemal AI ile üretecek
5. **Claude direkt metin yazmaz** → GEM'e gönderilecek

---

# 📁 DOSYA YAPISI

```
oluk-portal/
├── src/
│   ├── app/
│   │   ├── page.tsx                 ← ANA SAYFA
│   │   ├── layout.tsx               ← GENEL LAYOUT
│   │   │
│   │   ├── dersler/                 ← DERSLER BÖLÜMÜ
│   │   │   ├── page.tsx             ← FAZ LİSTESİ (4 FAZ)
│   │   │   ├── arinma/              ← FAZ 1
│   │   │   │   ├── page.tsx         ← 7 Aşama listesi
│   │   │   │   └── [asama]/
│   │   │   │       └── [ders]/
│   │   │   ├── koruma/              ← FAZ 2 (placeholder)
│   │   │   ├── aktivasyon/          ← FAZ 3 (placeholder)
│   │   │   └── ileri-seviye/        ← FAZ 4 (placeholder)
│   │   │
│   │   └── sirdas/
│   │       └── page.tsx             ← AI CHAT
│   │
│   ├── components/
│   │   ├── dersler/
│   │   │   └── FazKart.tsx
│   │   └── arinma/
│   │       ├── AsamaKart.tsx
│   │       └── DersKart.tsx
│   │
│   └── lib/
│       ├── supabase/
│       └── dersler/
│           ├── types.ts
│           └── queries.ts
│
├── ANTGRAVITY_BEYIN.md              ← BU DOSYA
└── CHECKPOINT.md                     ← İLERLEME KAYDI
```

---

# 🗄️ VERİTABANI ŞEMASI

## fazlar tablosu
```sql
CREATE TABLE public.fazlar (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(50) UNIQUE NOT NULL,
    sira INT NOT NULL,
    baslik VARCHAR(100) NOT NULL,
    slogan VARCHAR(200),
    renk VARCHAR(7) DEFAULT '#0D4F4F',
    icon VARCHAR(50) DEFAULT 'circle',
    tahmini_sure VARCHAR(50),
    onkosul_faz_id INT REFERENCES public.fazlar(id),
    aktif BOOLEAN DEFAULT true
);
```

## asamalar tablosu
```sql
CREATE TABLE public.asamalar (
    id SERIAL PRIMARY KEY,
    faz_id INT REFERENCES public.fazlar(id),
    slug VARCHAR(50) UNIQUE NOT NULL,
    sira INT NOT NULL,
    baslik VARCHAR(100) NOT NULL,
    alt_baslik VARCHAR(200),
    slogan VARCHAR(200),
    icon VARCHAR(50),
    renk VARCHAR(7),
    aktif BOOLEAN DEFAULT true
);
```

## dersler tablosu
```sql
CREATE TABLE public.dersler (
    id SERIAL PRIMARY KEY,
    asama_id INT REFERENCES public.asamalar(id),
    slug VARCHAR(100) UNIQUE NOT NULL,
    sira INT NOT NULL,
    baslik VARCHAR(200) NOT NULL,
    sure_dakika INT DEFAULT 30,
    icerik JSONB,
    video_url VARCHAR(500),
    audio_url VARCHAR(500),
    quiz_sorulari JSONB,
    gecme_puani INT DEFAULT 70,
    onkosul_ders_id INT REFERENCES public.dersler(id),
    premium BOOLEAN DEFAULT false,
    aktif BOOLEAN DEFAULT true
);
```

## kullanici_ilerleme tablosu
```sql
CREATE TABLE public.kullanici_ilerleme (
    id SERIAL PRIMARY KEY,
    kullanici_id UUID REFERENCES auth.users(id),
    ders_id INT REFERENCES public.dersler(id),
    durum VARCHAR(20) DEFAULT 'kilitli',
    quiz_puani INT,
    tamamlama_tarihi TIMESTAMP,
    UNIQUE(kullanici_id, ders_id)
);
```

---

# 🎯 MEVCUT GÖREV

## /dersler Sayfa Yapısı

### FAZ Sistemi (4 FAZ)
| FAZ | Slug | Slogan | Renk |
|-----|------|--------|------|
| 1. ARINMA | `arinma` | "Önce yükü at, sonra motora bak" | #0D4F4F |
| 2. KORUMA | `koruma` | "Temizlediğini koru, kalkanlarını kur" | #C9A962 |
| 3. AKTİVASYON | `aktivasyon` | "Sistemi çalıştır, potansiyelini aç" | #8B4513 |
| 4. İLERİ SEVİYE | `ileri-seviye` | "Derinleş, ustalaş, dönüştür" | #4A2C6A |

### ARINMA İçindeki 7 Aşama
| # | Aşama | Slogan |
|---|-------|--------|
| 0 | KAPI | "Neden buradayım?" |
| 1 | FİZİKSEL | "Bedenini hazırla" |
| 2 | DUYGUSAL | "Duyguları çöz" |
| 3 | ZİHİNSEL | "Mental çöpü at" |
| 4 | ENERJETİK | "Kanalları aç" |
| 5 | İLİŞKİSEL | "Bağları kes" |
| 6 | KARMİK | "Köklere in" |
| 7 | BİLİNÇALTI | "Entegre et" |

---

# ⚙️ ÇALIŞMA KURALLARI

1. **CHECKPOINT SİSTEMİ** → Her adım sonrası güncelle
2. **KÜÇÜK ADIMLAR** → Büyük değişiklik yapma, parçala
3. **PUSH SIK** → Her tamamlanan iş = 1 commit
4. **TEST ET** → DevTools mobile view kontrol
5. **SORMADAN YAP** → Basit işlerde onay bekleme

---

# 🔗 ÖNEMLİ LİNKLER

- **Canlı Site:** https://oluk.org
- **Repo:** https://github.com/KemalG-u/oluk-portal
- **Vercel:** https://vercel.com/olukorgs-projects/oluk-portal
- **Cloudinary:** https://console.cloudinary.com
- **Supabase:** (kurulacak)

---

# 📝 NOTLAR

## Felsefe
> "BAK GEÇ, GÖR GEÇ, TAKILMA GEÇ"
> "Her şeyin EN İYİSİ"
> "Küçük başlayıp büyütme YOK"

## Ferrari Metaforu
> "Ferrari olsan bile 2 ton yük arkadaysa gitmiyor. Önce yükü at!"

---

*Context sıfırlanırsa bu dosyayı oku ve kaldığın yerden devam et.*
*Son güncelleme: 22 Aralık 2024*