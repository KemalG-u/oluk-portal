# 🔥 SIR COMPANION - KURULUM

## 📁 DOSYALAR

```
components/
└── SirCompanion.tsx     → Köşede görünen Sır simgesi

api/sir/
├── create/route.ts      → POST - Yeni Sır oluştur
└── get/route.ts         → GET - Sır'ı getir
```

---

## 🚀 KURULUM

### ADIM 1: Dosyaları Kopyala

```bash
# Component
cp SirCompanion.tsx src/components/

# API endpoint
mkdir -p src/app/api/sir/get
cp get-route.ts src/app/api/sir/get/route.ts
```

### ADIM 2: Layout'a Ekle

`src/app/layout.tsx` dosyasını aç ve SirCompanion'ı ekle:

```tsx
import SirCompanion from '@/components/SirCompanion';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        {children}
        
        {/* SIR COMPANION - Her sayfada görünür */}
        <SirCompanion />
      </body>
    </html>
  );
}
```

---

## 🎨 MODLAR

### 1. PASİF MOD (Varsayılan)
- Sağ alt köşede küçük simge
- Hafif nefes animasyonu
- Hover'da enerji çubuğu görünür

### 2. DİKKATLİ MOD
- 3+ gün gelmeyince aktif
- Gece geç saatte aktif (23:00-05:00)
- Mesaj balonu gösterir
- Simgede kırmızı nokta

### 3. AKTİF MOD
- Simgeye tıklayınca açılır
- Detaylı panel: İsim, enerji, seviye
- Rastgele selamlaşma mesajı

### 4. SEANS MODU
- `/seans` veya `/meditasyon` sayfalarında
- Daha yavaş nefes animasyonu
- Kullanıcıyla senkron

---

## 📊 ENERJİ SİSTEMİ

| Durum | Enerji Değişimi |
|-------|-----------------|
| Her gün giriş | +5 |
| 1-3 gün ara | -2/gün |
| 4-7 gün ara | -3/gün |
| 7+ gün ara | -10 (tek seferde) |
| **MİNİMUM** | **10 (asla sıfır olmaz!)** |

---

## 🎯 GÖRSEL EVRİM

### ATEŞ YOLU
- Seviye 1: 🔴 Kırmızı (kontrolsüz)
- Seviye 2: 🟠 Turuncu (farkındalık)
- Seviye 3: 🟡 Altın (dönüşüm)
- Seviye 4: ⚪ Beyaz (saf ışık)

### SU YOLU
- Seviye 1: 🌊 Bulanık
- Seviye 2: 💧 Açık
- Seviye 3: ✨ Berrak
- Seviye 4: 💎 Kristal

### HAVA YOLU
- Seviye 1: 🌪️ Fırtına
- Seviye 2: 🌬️ Rüzgar
- Seviye 3: 🍃 Esinti
- Seviye 4: ☁️ Sakin

### TOPRAK YOLU
- Seviye 1: 🏜️ Kuru
- Seviye 2: 🌱 Filiz
- Seviye 3: 🌿 Yeşil
- Seviye 4: 🌸 Çiçekli

---

## ⚠️ DİKKAT

1. **Auth Entegrasyonu:** `get/route.ts`'de `userId`'yi auth'dan al
2. **Seçim Kontrolü:** Sır yoksa `/sir-secimi`'ye yönlendir
3. **Framer Motion:** Yüklü olmalı (`npm install framer-motion`)

---

**Tarih:** 23 Aralık 2024
