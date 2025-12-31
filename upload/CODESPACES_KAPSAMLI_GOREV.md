# 🚀 CODESPACES KAPSAMLI GÖREV TALİMATI

> **Tarih:** 31 Aralık 2025  
> **Gönderen:** Claude (Proje Müdürü)  
> **Öncelik:** KRİTİK  
> **Hedef:** Tüm modülleri tamamla, sistemi production-ready yap

---

## 📊 DURUM ANALİZİ - ÖNCE KONTROL ET

### ADIM 1: Mevcut Modülleri Kontrol Et

```bash
# Hangi modüller var?
echo "=== MODÜL DURUMU ===" && \
ls -la src/app/moduller/ 2>/dev/null || echo "moduller klasörü YOK" && \
echo "" && \
echo "=== AYNA ===" && \
ls src/app/moduller/ayna/ 2>/dev/null | head -5 || echo "AYNA YOK" && \
echo "" && \
echo "=== IŞIK ===" && \
ls src/app/moduller/isik/ 2>/dev/null | head -5 || echo "ISIK YOK" && \
echo "" && \
echo "=== BAĞLANTI ===" && \
ls src/app/moduller/baglanti/ 2>/dev/null | head -5 || echo "BAGLANTI YOK" && \
echo "" && \
echo "=== AMAÇ ===" && \
ls src/app/moduller/amac/ 2>/dev/null | head -5 || echo "AMAC YOK"
```

Bu komutun çıktısına göre hangi modüllerin eksik olduğunu belirle.

---

## 🎯 ANA GÖREV: AMAÇ MODÜLÜNÜ EKLE

### Upload Klasöründeki Dosyalar

`upload/` klasöründe 16 dosya var:

**Dersler (6 adet):**
- AMAC_DERS_1_1.md → Bölüm 1: Anlam Arayışı
- AMAC_DERS_2_1.md → Bölüm 2: Değerler Pusulası
- AMAC_DERS_3_1.md → Bölüm 3: Ölüm Öğretmeni
- AMAC_DERS_4_1.md → Bölüm 4: Yaşam Amacı (İkigai)
- AMAC_DERS_5_1.md → Bölüm 5: Kendini Aşmak
- AMAC_DERS_6_1.md → Bölüm 6: Anlamlı Eylem

**Seanslar (10 adet):**
- AMAC_SEANS_1_1.md → Boşluğa Bakmak (18-20 dk)
- AMAC_SEANS_2_1.md → Değerlerimi Keşfetmek (20-22 dk)
- AMAC_SEANS_2_2.md → Değer Testiği (15-18 dk)
- AMAC_SEANS_3_1.md → Son Gün (20-22 dk) ⚠️ İLERİ SEVİYE
- AMAC_SEANS_3_2.md → Yaşam Şeridi (18-20 dk)
- AMAC_SEANS_4_1.md → Dört Daire (22-25 dk)
- AMAC_SEANS_4_2.md → Gelecek Ben (18-20 dk)
- AMAC_SEANS_5_1.md → Damladan Denize (22-25 dk)
- AMAC_SEANS_5_2.md → Hizmet Meditasyonu (18-20 dk)
- AMAC_SEANS_6_1.md → Niyet ve Eylem (20-25 dk)

---

## 📁 KLASÖR YAPISI OLUŞTUR

```bash
# AMAÇ modülü klasör yapısı
mkdir -p src/app/moduller/amac
mkdir -p src/app/moduller/amac/bolum-1
mkdir -p src/app/moduller/amac/bolum-2
mkdir -p src/app/moduller/amac/bolum-3
mkdir -p src/app/moduller/amac/bolum-4
mkdir -p src/app/moduller/amac/bolum-5
mkdir -p src/app/moduller/amac/bolum-6
```

---

## ⚡ İÇERİK DÖNÜŞTÜRME PİPELINE

Her içerik dosyası için şu sırayı uygula:

### FAZ 1: İçeriği Oku
```bash
cat upload/AMAC_DERS_1_1.md
```

### FAZ 2: Skill 15 Kontrol (Klişe Temizliği)
`_SKILLS/ICERIK/15-stil-donusturucu.md` oku ve şu kelimeleri kontrol et:

**YASAK KELİMELER (varsa değiştir):**
- "yolculuk" → "süreç" veya "geçiş"
- "derinlik" → "içerik" veya "öz"
- "ışık tutmak" → "göstermek" veya "açmak"
- "dönüşüm" → "değişim" (çok tekrarda)
- "farkındalık" → "bilinç" veya "uyanıklık"

### FAZ 3: SEO Metadata Ekle
Her sayfa için:
```tsx
export const metadata = {
  title: 'Ders Başlığı | AMAÇ Modülü | OLUK',
  description: 'Ders özeti - 150 karakter',
  keywords: ['anahtar', 'kelimeler'],
}
```

### FAZ 4: GEO Schema Ekle (Skill 79)
```tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'AMAÇ Modülü - Bölüm X',
  provider: { '@type': 'Organization', name: 'OLUK' },
  // ...
}
```

### FAZ 5: Next.js Page Oluştur
AYNA veya IŞIK modüllerindeki format örnek alınacak:
```tsx
// src/app/moduller/amac/bolum-1/ders-1/page.tsx
import { Metadata } from 'next'
// ... içerik
```

---

## 📋 SAYFA LİSTESİ (22 sayfa)

| # | Yol | İçerik |
|---|-----|--------|
| 1 | /moduller/amac | Ana sayfa (modül tanıtımı) |
| 2 | /moduller/amac/bolum-1 | Bölüm 1 giriş |
| 3 | /moduller/amac/bolum-1/ders-1 | Anlam Arayışı |
| 4 | /moduller/amac/bolum-1/seans-1 | Boşluğa Bakmak |
| 5 | /moduller/amac/bolum-2 | Bölüm 2 giriş |
| 6 | /moduller/amac/bolum-2/ders-1 | Değerler Pusulası |
| 7 | /moduller/amac/bolum-2/seans-1 | Değerlerimi Keşfetmek |
| 8 | /moduller/amac/bolum-2/seans-2 | Değer Testiği |
| 9 | /moduller/amac/bolum-3 | Bölüm 3 giriş |
| 10 | /moduller/amac/bolum-3/ders-1 | Ölüm Öğretmeni |
| 11 | /moduller/amac/bolum-3/seans-1 | Son Gün ⚠️ |
| 12 | /moduller/amac/bolum-3/seans-2 | Yaşam Şeridi |
| 13 | /moduller/amac/bolum-4 | Bölüm 4 giriş |
| 14 | /moduller/amac/bolum-4/ders-1 | İkigai |
| 15 | /moduller/amac/bolum-4/seans-1 | Dört Daire |
| 16 | /moduller/amac/bolum-4/seans-2 | Gelecek Ben |
| 17 | /moduller/amac/bolum-5 | Bölüm 5 giriş |
| 18 | /moduller/amac/bolum-5/ders-1 | Kendini Aşmak |
| 19 | /moduller/amac/bolum-5/seans-1 | Damladan Denize |
| 20 | /moduller/amac/bolum-5/seans-2 | Hizmet Meditasyonu |
| 21 | /moduller/amac/bolum-6 | Bölüm 6 giriş |
| 22 | /moduller/amac/bolum-6/ders-1 | Anlamlı Eylem |
| 23 | /moduller/amac/bolum-6/seans-1 | Niyet ve Eylem (Final) |

---

## ⚠️ KRİTİK: KRİZ PROTOKOLÜ

**Bölüm 3 (Ölüm Öğretmeni)** içerikleri hassas.

Her seans sayfasına şu uyarı komponenti ekle:

```tsx
{/* Güvenlik Uyarısı */}
<div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
  <p className="text-sm text-red-800">
    ⚠️ Bu seans yoğun duygular uyandırabilir. 
    Zorlanırsan durabilirsin.
  </p>
  <p className="text-sm text-red-600 mt-2">
    Profesyonel destek: <strong>182</strong> (İntihar Önleme Hattı)
  </p>
</div>
```

---

## 🔍 EKSİK MODÜL KONTROLÜ

Yukarıdaki kontrol komutunun sonucuna göre:

### Eğer IŞIK yoksa:
```
upload/ klasöründe ISIK_ ile başlayan dosyalar var mı kontrol et.
Yoksa: "IŞIK modülü dosyaları yüklenmemiş" raporla.
```

### Eğer BAĞLANTI yoksa:
```
upload/ klasöründe BAGLANTI_ ile başlayan dosyalar var mı kontrol et.
Yoksa: "BAĞLANTI modülü dosyaları yüklenmemiş" raporla.
```

### Eğer AYNA yoksa:
```
Bu kritik! AYNA ilk modül, mutlaka olmalı.
"AYNA modülü eksik - acil bildir" raporla.
```

---

## ✅ TAMAMLAMA KRİTERLERİ

Her modül için:
- [ ] Tüm sayfalar oluşturuldu
- [ ] SEO metadata eklendi
- [ ] GEO schema eklendi
- [ ] Klişe kontrolü yapıldı
- [ ] Build başarılı (`npm run build`)
- [ ] 182 hotline uyarısı eklendi (hassas içeriklere)
- [ ] Git commit yapıldı

---

## 📊 RAPORLAMA

İşlem bitince şu raporu oluştur:

```bash
cat > _BRAIN/RAPORLAR/AMAC_MODUL_RAPORU.md << 'EOF'
# AMAÇ MODÜLÜ RAPORU

**Tarih:** [tarih]
**İşlem Süresi:** [süre]

## Oluşturulan Sayfalar
- [ ] Liste...

## SEO Durumu
- Meta: ✅/❌
- Schema: ✅/❌

## Klişe Kontrolü
- Değiştirilen kelimeler: [liste]

## Build
- Durum: ✅/❌
- Hatalar: [varsa]

## Commit
- Hash: [commit hash]
EOF
```

---

## 🚀 BAŞLA!

1. Önce kontrol komutunu çalıştır
2. Eksikleri belirle
3. AMAÇ modülünü oluşturmaya başla
4. Her 5 sayfada bir commit yap
5. Bitince rapor oluştur

**SORMADAN YAP! Proaktif ol!**

---

**OLUK - Akışın Kanalı, Dönüşümün Yolu** 🌊
