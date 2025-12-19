# OLUK DERS 1 - GÖRSEL/VİDEO ÜRETİM SİSTEMİ: KAPSAMLI DÖKÜMAN

**Tarih:** 19 Aralık 2025  
**Durum:** 7/12 Tamamlandı (Statik görseller ✅ | Video upload ⏳)  
**Repo:** https://github.com/KemalG-u/oluk-portal  
**Branch:** main  
**Son Commit:** 7cc57a5

---

## 📋 İÇİNDEKİLER

1. [Proje Özeti](#proje-özeti)
2. [Tamamlanan İşler](#tamamlanan-işler)
3. [Kalan İşler](#kalan-işler)
4. [Teknik Altyapı](#teknik-altyapı)
5. [Dosya Yapısı](#dosya-yapısı)
6. [Adım Adım Kalan İş Talimatları](#adım-adım-kalan-iş-talimatları)
7. [Sorun Giderme](#sorun-giderme)
8. [Cloudinary URL'leri](#cloudinary-urlleri)

---

## 🎯 PROJE ÖZETİ

**Amaç:** OLUK platformu Ders 1 için 12 görsel/video asset üretimi ve Cloudinary CDN'e deployment

**Hedef Asset'ler:**
- 7 Statik Görsel (PNG, yüksek çözünürlük, branded)
- 5 Animasyon Videosu (MP4 + WebM, loop, sessiz)

**Kullanılan Teknolojiler:**
- **Görsel Üretim:** Vertex AI Imagen 3.0 (Google Cloud) + Python PIL (fallback)
- **Video Upload:** Python + Cloudinary SDK
- **Storage:** Cloudinary CDN (dzegofdgp cloud)
- **Automation:** Python scripts, batch processing

**Marka Renkleri:**
- Deep Teal: `#0D4F4F` (RGB: 13, 79, 79)
- Warm Gold: `#C9A962` (RGB: 201, 169, 98)
- Soft Cream: `#F5F0E6` (RGB: 245, 240, 230)

**Stil:** Ottoman Cyberpunk + Modern Spiritual Minimalism

---

## ✅ TAMAMLANAN İŞLER (7/12)

### Statik Görseller (7/7 - %100 Tamamlandı)

#### Yüksek Öncelikli (4/4)

1. **ders1-7aurik-katman** (9:16 portrait)
   - **Açıklama:** 7 aurik katman, renkli enerji tabakaları
   - **Üretim:** Vertex AI Imagen 3.0
   - **URL:** https://res.cloudinary.com/dzegofdgp/image/upload/v1766166298/oluk/ders1/infographics/ders1-7aurik-katman.png
   - **Klasör:** `oluk/ders1/infographics/`
   - **Durum:** ✅ Cloudinary'de yayında

2. **ders1-12adim-sifa** (9:16 portrait)
   - **Açıklama:** 12 adım şifa spiral yolu
   - **Üretim:** Vertex AI Imagen 3.0
   - **URL:** https://res.cloudinary.com/dzegofdgp/image/upload/v1766166320/oluk/ders1/infographics/ders1-12adim-sifa.png
   - **Klasör:** `oluk/ders1/infographics/`
   - **Durum:** ✅ Cloudinary'de yayında

3. **seans1-menzil-kapak** (1:1 square)
   - **Açıklama:** Seans 1 menzil kapak görseli, altın kapı
   - **Üretim:** Vertex AI Imagen 3.0
   - **URL:** https://res.cloudinary.com/dzegofdgp/image/upload/v1766166340/oluk/ders1/seans/seans1-menzil-kapak.png
   - **Klasör:** `oluk/ders1/seans/`
   - **Durum:** ✅ Cloudinary'de yayında

4. **seans-muhur-kapani** (1:1 square)
   - **Açıklama:** Seans tamamlama mühür sembolü, altın geometrik
   - **Üretim:** Python PIL (Otomatik - authentication issue nedeniyle)
   - **URL:** https://res.cloudinary.com/dzegofdgp/image/upload/v1766167880/oluk/ders1/seans/seans-muhur-kapani.png
   - **Klasör:** `oluk/ders1/seans/`
   - **Durum:** ✅ Cloudinary'de yayında

#### Orta Öncelikli (3/3)

5. **ders1-15chakra-tam-sistem** (16:9 landscape)
   - **Açıklama:** 15 çakra sistemi (7 beden + 8 morfogenetik)
   - **Üretim:** Python PIL (Otomatik)
   - **URL:** https://res.cloudinary.com/dzegofdgp/image/upload/v1766167880/oluk/ders1/infographics/ders1-15chakra-tam-sistem.png
   - **Klasör:** `oluk/ders1/infographics/`
   - **Durum:** ✅ Cloudinary'de yayında

6. **ders1-19aktivasyon-akis** (16:9 landscape)
   - **Açıklama:** 19 aktivasyon akış ağacı, 3 dal sistemi
   - **Üretim:** Python PIL (Otomatik)
   - **URL:** https://res.cloudinary.com/dzegofdgp/image/upload/v1766167901/oluk/ders1/infographics/ders1-19aktivasyon-akis.png
   - **Klasör:** `oluk/ders1/infographics/`
   - **Durum:** ✅ Cloudinary'de yayında

7. **ders1-felsefe-bakgec** (1:1 square)
   - **Açıklama:** "Bak Geç" felsefesi, akan altın nehir
   - **Üretim:** Python PIL (Otomatik)
   - **URL:** https://res.cloudinary.com/dzegofdgp/image/upload/v1766167882/oluk/ders1/infographics/ders1-felsefe-bakgec.png
   - **Klasör:** `oluk/ders1/infographics/`
   - **Durum:** ✅ Cloudinary'de yayında

---

## ⏳ KALAN İŞLER (5/12)

### Animasyon Videoları (0/5 - Bekliyor)

**Mevcut Durum:** 
- Kullanıcı videoları üretmiş: `D:\projelerim\İnternetten İndirdiklerim\`
- Kullanıcı 4 video olduğunu belirtti (5 bekleniyor, 1 eksik olabilir)
- Codespaces'e upload bekleniyor

**Beklenen Videolar:**

1. **seans-nefes-4-4-4-4.mp4**
   - **Açıklama:** 4-4-4-4 nefes ritmi animasyonu
   - **Süre:** ~30 saniye
   - **Loop:** Evet
   - **Ses:** Yok (sessiz)
   - **Hedef Klasör:** `oluk/ders1/seans/animations/`

2. **seans-kalp-tohum.mp4**
   - **Açıklama:** Kalp çakrasında altın tohum atış animasyonu
   - **Süre:** ~20 saniye
   - **Loop:** Evet
   - **Ses:** Yok
   - **Hedef Klasör:** `oluk/ders1/seans/animations/`

3. **seans-enerji-akis-yukari.mp4**
   - **Açıklama:** Omurgadan yukarı akan enerji animasyonu
   - **Süre:** ~25 saniye
   - **Loop:** Evet
   - **Ses:** Yok
   - **Hedef Klasör:** `oluk/ders1/seans/animations/`

4. **seans-arinma-mor-alev.mp4**
   - **Açıklama:** Mor ateş ile arınma dönüşüm animasyonu
   - **Süre:** ~30 saniye
   - **Loop:** Evet
   - **Ses:** Yok
   - **Hedef Klasör:** `oluk/ders1/seans/animations/`

5. **seans-altin-isik-doldurma.mp4**
   - **Açıklama:** Altın ışık ile dolma finali animasyonu
   - **Süre:** ~25 saniye
   - **Loop:** Evet
   - **Ses:** Yok
   - **Hedef Klasör:** `oluk/ders1/seans/animations/`

**NOT:** Kullanıcı 4 video olduğunu söyledi, eksik olanı kontrol et.

---

## 🛠️ TEKNİK ALTYAPI

### Cloudinary Yapılandırması

**Cloud Name:** `dzegofdgp`  
**API Key:** `283632349543287`  
**API Secret:** `dm_7xFvraZI-IwcvAxnWGTeNrWM`  

**Klasör Yapısı:**
```
oluk/
├── ders1/
│   ├── infographics/          # Statik görseller
│   │   ├── ders1-7aurik-katman.png
│   │   ├── ders1-12adim-sifa.png
│   │   ├── ders1-15chakra-tam-sistem.png
│   │   ├── ders1-19aktivasyon-akis.png
│   │   └── ders1-felsefe-bakgec.png
│   └── seans/                 # Seans görselleri
│       ├── seans1-menzil-kapak.png
│       ├── seans-muhur-kapani.png
│       └── animations/        # Videolar (boş)
│           ├── seans-nefes-4-4-4-4.mp4 (bekleniyor)
│           ├── seans-kalp-tohum.mp4 (bekleniyor)
│           ├── seans-enerji-akis-yukari.mp4 (bekleniyor)
│           ├── seans-arinma-mor-alev.mp4 (bekleniyor)
│           └── seans-altin-isik-doldurma.mp4 (bekleniyor)
```

**Video Upload Özellikleri:**
- **Formatlar:** MP4 (H.264) + WebM (VP9) otomatik oluşturulacak
- **Kalite:** Auto (Cloudinary optimize eder)
- **Overwrite:** Evet (aynı isimli video varsa üstüne yazar)
- **Resource Type:** `video`

### Google Cloud (Vertex AI)

**Project ID:** `gen-lang-client-0144452360`  
**Location:** `us-central1`  
**Model:** `imagen-3.0-generate-001`  
**Service Account:** `oluk-imagen@gen-lang-client-0144452360.iam.gserviceaccount.com`

**Sorunlar:**
- Service account JSON authentication gerekliydi
- JSON dosyası güvenlik için silindi (kullanıcı yükledi, işlem bitti, silindi)
- Quota limitleri: 429 error (günde ~20 görsel limiti var)
- Safety filters: "Human figure" kelimeleri blokluyordu

**Çözümler:**
- PIL fallback kullanıldı (authentication gerektirmez)
- Promptlardan insan referansları kaldırıldı
- Batch işlemi 10 saniye aralıklarla yapıldı

### Python Environment

**Kurulu Paketler:**
```bash
google-cloud-aiplatform
vertexai
cloudinary
Pillow
moviepy
numpy
python-dotenv
```

**Kurulum Komutları:**
```bash
pip3 install google-cloud-aiplatform cloudinary Pillow moviepy numpy python-dotenv
```

---

## 📁 DOSYA YAPISI

### Kod Dosyaları

```
_BRAIN/
├── content/
│   └── ders-1/
│       └── GORSEL_ANIMASYON_PROMPTLARI.md      # Ultra-detaylı prompt kütüphanesi
└── prompts/
    └── gorsel-uretim/
        ├── oluk_vertex_ai_gorseller.py          # İlk batch script (14 görsel - kullanılmadı)
        ├── oluk_ders1_yuksek_oncelik.py         # 4 yüksek öncelik (3 başarılı, 1 quota)
        ├── oluk_ders1_kalan_gorseller.py        # Kalan görseller (auth issue - kullanılmadı)
        ├── oluk_ders1_PIL_OTOMATIK.py           # PIL otomatik üretim (4 görsel - BAŞARILI)
        ├── oluk_ders1_HIZLI_API.py              # Manuel üretim helper (kullanılmadı)
        ├── upload_animations.py                  # Video upload script (HAZIR - çalıştırılacak)
        ├── DERS1_URETIM_RAPORU.md               # Üretim raporu (bu değil, kısa versiyon)
        ├── VIDEO_YUKLEME_TALIMATI.md            # Video upload talimatı
        └── OLUK_DERS1_MASTER_DOKUMAN.md         # BU DOSYA - tam sistem dokümantasyonu
```

### Log Dosyaları

```
_BRAIN/prompts/gorsel-uretim/
├── ders1_run3.log                               # İlk Vertex AI denemesi
├── ders1_final.log                              # Yüksek öncelikli batch (3/4 başarılı)
├── ders1_kalan_gorseller.log                    # Auth issue log
├── pil_otomatik.log                             # PIL üretim log (3/4 başarılı)
├── hizli_placeholder.log                        # Placeholder deneme (başarısız)
└── placeholders_20251219_181021.json            # Boş placeholder sonuç
```

### Script Detayları

#### 1. `oluk_ders1_PIL_OTOMATIK.py` (KULLANILAN - BAŞARILI)

**Amaç:** Authentication gerektirmeden branded görseller üret  
**Kullanım:**
```bash
cd /workspaces/oluk-portal/_BRAIN/prompts/gorsel-uretim
python3 oluk_ders1_PIL_OTOMATIK.py
```

**Özellikler:**
- PIL (Python Imaging Library) kullanır
- Marka renklerine uygun minimal görseller
- Cloudinary'ye otomatik upload
- 4 görsel üretir:
  - `seans-muhur-kapani`: Altın mühür sembolü
  - `ders1-15chakra-tam-sistem`: 15 çakra dikey diziliş
  - `ders1-19aktivasyon-akis`: 19 aktivasyon ağacı
  - `ders1-felsefe-bakgec`: Akan nehir

**Sonuç:** 4/4 başarılı (1 bug düzeltildi, tekrar çalıştırıldı)

#### 2. `upload_animations.py` (HAZIR - ÇALIŞTIRILACAK)

**Amaç:** MP4 videolarını Cloudinary'ye yükle ve WebM oluştur  
**Kullanım:**
```bash
cd /workspaces/oluk-portal/_BRAIN/prompts/gorsel-uretim
python3 upload_animations.py
```

**Gereksinimler:**
- 5 MP4 dosyası aynı dizinde olmalı:
  - `seans-nefes-4-4-4-4.mp4`
  - `seans-kalp-tohum.mp4`
  - `seans-enerji-akis-yukari.mp4`
  - `seans-arinma-mor-alev.mp4`
  - `seans-altin-isik-doldurma.mp4`

**Özellikler:**
- Dosya varlığını kontrol eder
- Dosya boyutunu raporlar
- Cloudinary'ye upload eder
- MP4 (H.264) + WebM (VP9) formatlarında oluşturur
- Hedef klasör: `oluk/ders1/seans/animations/`
- Progress bar ile ilerleme gösterir
- Her video için URL döner

**Beklenen Çıktı:**
```
[1/5] seans-nefes-4-4-4-4.mp4
  Dosya: 5.2 MB
  Yükleniyor...
  ✅ MP4: https://res.cloudinary.com/dzegofdgp/video/upload/v.../oluk/ders1/seans/animations/seans-nefes-4-4-4-4.mp4
  ✅ WebM: https://res.cloudinary.com/dzegofdgp/video/upload/v.../oluk/ders1/seans/animations/seans-nefes-4-4-4-4.webm

[2/5] seans-kalp-tohum.mp4
  ...
```

---

## 🎯 ADIM ADIM KALAN İŞ TALİMATLARI

### Kullanıcı İçin (Video Upload)

#### ADIM 1: Videoları Codespaces'e Yükle

**YÖNTEM 1: VS Code Sürükle-Bırak (ÖNERİLEN)**

1. **VS Code'da hedef klasörü aç:**
   - Sol panel "Explorer" → `_BRAIN` → `prompts` → `gorsel-uretim` klasörüne tıkla

2. **Windows Explorer'ı aç:**
   - `D:\projelerim\İnternetten İndirdiklerim` klasörüne git
   - 4 (veya 5) MP4 dosyasını seç (Ctrl+Click)

3. **Sürükle ve bırak:**
   - Seçili dosyaları VS Code'daki `gorsel-uretim` klasörüne sürükle
   - "Uploading files..." mesajını bekle
   - Her video ~5-10 MB ise toplam 30-60 saniye sürer

4. **Doğrula:**
   VS Code terminalinde:
   ```bash
   cd /workspaces/oluk-portal/_BRAIN/prompts/gorsel-uretim
   ls -lh *.mp4
   ```
   Çıktıda 4-5 MP4 dosyasını görmeli

**YÖNTEM 2: GitHub CLI**

Windows PowerShell veya CMD'de:
```powershell
cd "D:\projelerim\İnternetten İndirdiklerim"

# Her dosya için tek tek
gh codespace cp seans-nefes-4-4-4-4.mp4 remote:/workspaces/oluk-portal/_BRAIN/prompts/gorsel-uretim/
gh codespace cp seans-kalp-tohum.mp4 remote:/workspaces/oluk-portal/_BRAIN/prompts/gorsel-uretim/
gh codespace cp seans-enerji-akis-yukari.mp4 remote:/workspaces/oluk-portal/_BRAIN/prompts/gorsel-uretim/
gh codespace cp seans-arinma-mor-alev.mp4 remote:/workspaces/oluk-portal/_BRAIN/prompts/gorsel-uretim/
gh codespace cp seans-altin-isik-doldurma.mp4 remote:/workspaces/oluk-portal/_BRAIN/prompts/gorsel-uretim/
```

#### ADIM 2: Upload Script'i Çalıştır

**Kullanıcı için:**
VS Code terminalinde:
```bash
cd /workspaces/oluk-portal/_BRAIN/prompts/gorsel-uretim
python3 upload_animations.py
```

Veya kullanıcı "yüklendi" dediğinde Claude bu komutu çalıştırsın.

#### ADIM 3: Sonuçları Doğrula

Script çalıştıktan sonra:
```bash
# Cloudinary'de kontrol
# Script çıktısında gösterilen URL'leri tarayıcıda aç
# Videoların oynatıldığını doğrula
```

### Claude İçin (Bu Dokümana Bakan Yeni Bir Claude)

**Senaryo:** Kullanıcı "videolar yüklendi" veya "upload_animations.py çalıştır" dedi

```bash
# 1. Videoları kontrol et
cd /workspaces/oluk-portal/_BRAIN/prompts/gorsel-uretim
ls -lh *.mp4

# Çıktı: 4-5 MP4 dosyası görmeli
# Yoksa: Kullanıcıdan yüklemesini iste (yukarıdaki talimatları ver)
# Varsa: Devam et

# 2. Upload script'i çalıştır
python3 upload_animations.py 2>&1 | tee video_upload_$(date +%Y%m%d_%H%M%S).log

# 3. Sonucu kontrol et
# Log'da "✅" işaretlerini ara
# Her video için 2 URL olmalı (MP4 + WebM)

# 4. Başarılı ise: Git commit/push
cd /workspaces/oluk-portal
git add _BRAIN/prompts/gorsel-uretim/*.log
git commit -m "✅ Ders 1: Tüm videolar yüklendi - 12/12 asset tamamlandı

Yüklenen Videolar:
- seans-nefes-4-4-4-4.mp4 (MP4 + WebM)
- seans-kalp-tohum.mp4 (MP4 + WebM)
- seans-enerji-akis-yukari.mp4 (MP4 + WebM)
- seans-arinma-mor-alev.mp4 (MP4 + WebM)
- seans-altin-isik-doldurma.mp4 (MP4 + WebM)

Durum: PROJE TAMAMLANDI ✅
- 7 Statik Görsel: Cloudinary'de yayında
- 5 Animasyon: Cloudinary'de yayında (MP4 + WebM)
- Toplam: 12/12 asset hazır"

git push origin main

# 5. Final rapor oluştur (opsiyonel)
# DERS1_FINAL_RAPOR.md dosyası oluştur
# Tüm URL'leri listele
# TypeScript/React kod örnekleri ekle
```

---

## 🔧 SORUN GİDERME

### Problem 1: Videolar Yüklenmiyor (VS Code Sürükle-Bırak)

**Belirti:** Dosyalar sürüklenince hiçbir şey olmuyor

**Çözüm:**
1. VS Code'u yeniden yükle (F5 veya Cmd/Ctrl+R)
2. Codespaces bağlantısını kontrol et (sağ alt köşede "Codespaces" yazmalı)
3. Alternatif: GitHub CLI kullan

### Problem 2: `upload_animations.py` Dosya Bulamıyor

**Belirti:** `FileNotFoundError: seans-nefes-4-4-4-4.mp4`

**Çözüm:**
```bash
# Mevcut dizini kontrol et
pwd
# /workspaces/oluk-portal/_BRAIN/prompts/gorsel-uretim olmalı

# Dosyaları listele
ls -la *.mp4

# Dosya yoksa: Kullanıcıdan yüklemesini iste
# Dosya yanlış isimde: Yeniden adlandır
# Örnek:
mv seans_nefes.mp4 seans-nefes-4-4-4-4.mp4
```

### Problem 3: Cloudinary Upload Hatası

**Belirti:** `CloudinaryException: Invalid signature`

**Çözüm:**
```python
# upload_animations.py dosyasındaki Cloudinary config'i kontrol et
cloudinary.config(
    cloud_name="dzegofdgp",
    api_key="283632349543287",
    api_secret="dm_7xFvraZI-IwcvAxnWGTeNrWM"
)
# Bu değerler doğru
```

**Belirti:** `CloudinaryException: File size limit exceeded`

**Çözüm:**
- Video dosyası çok büyük (>100 MB)
- Video sıkıştırma gerekebilir
- Veya Cloudinary hesap limitini kontrol et

### Problem 4: 5 Yerine 4 Video Var

**Durum:** Kullanıcı 4 video olduğunu söyledi, prompt'ta 5 bekleniyor

**Kontrol:**
```bash
ls -1 seans-*.mp4 | wc -l
# Çıktı: 4 ise 1 video eksik
```

**Eksik Video Belirleme:**
```bash
# Beklenen 5 video:
# 1. seans-nefes-4-4-4-4.mp4
# 2. seans-kalp-tohum.mp4
# 3. seans-enerji-akis-yukari.mp4
# 4. seans-arinma-mor-alev.mp4
# 5. seans-altin-isik-doldurma.mp4

# Hangileri var kontrol et
for video in seans-nefes-4-4-4-4 seans-kalp-tohum seans-enerji-akis-yukari seans-arinma-mor-alev seans-altin-isik-doldurma; do
  if [ -f "${video}.mp4" ]; then
    echo "✅ ${video}.mp4"
  else
    echo "❌ ${video}.mp4 EKSİK"
  fi
done
```

**Çözüm:**
- Kullanıcıya eksik videoyu bildir
- Kullanıcı yoksa "5 yerine 4 video yüklenecek" onayını al
- `upload_animations.py` dosyasını düzenle (eksik videoyu listeden çıkar)

### Problem 5: Video Format Hatası

**Belirti:** Video Cloudinary'ye yüklendi ama oynatılamıyor

**Çözüm:**
```bash
# Video codec'ini kontrol et (ffmpeg gerekli)
ffmpeg -i seans-nefes-4-4-4-4.mp4

# Beklenen:
# Video: h264 (H.264 / AVC)
# Audio: none (sessiz) veya aac

# Yanlış format ise yeniden encode et
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 22 -an output.mp4
```

---

## 📊 CLOUDINARY URL'LERİ

### Statik Görseller (7/7 - Yayında)

```typescript
// TypeScript/React kullanımı için
const ders1Visuals = {
  // Yüksek Öncelikli
  aurikKatman: {
    url: "https://res.cloudinary.com/dzegofdgp/image/upload/v1766166298/oluk/ders1/infographics/ders1-7aurik-katman.png",
    alt: "7 Aurik Katman - Enerji Bedeni Tabakaları",
    aspect: "9:16",
    usage: ["hero", "infographic", "mobile"]
  },
  adimSifa: {
    url: "https://res.cloudinary.com/dzegofdgp/image/upload/v1766166320/oluk/ders1/infographics/ders1-12adim-sifa.png",
    alt: "12 Adım Şifa Spiral Yolu",
    aspect: "9:16",
    usage: ["hero", "infographic", "mobile"]
  },
  menzilKapak: {
    url: "https://res.cloudinary.com/dzegofdgp/image/upload/v1766166340/oluk/ders1/seans/seans1-menzil-kapak.png",
    alt: "Seans 1 Menzil Kapak Görseli",
    aspect: "1:1",
    usage: ["cover", "thumbnail", "social"]
  },
  muhurKapani: {
    url: "https://res.cloudinary.com/dzegofdgp/image/upload/v1766167880/oluk/ders1/seans/seans-muhur-kapani.png",
    alt: "Seans Mühür Kapanışı",
    aspect: "1:1",
    usage: ["outro", "completion", "badge"]
  },
  
  // Orta Öncelikli
  chakraSistem: {
    url: "https://res.cloudinary.com/dzegofdgp/image/upload/v1766167880/oluk/ders1/infographics/ders1-15chakra-tam-sistem.png",
    alt: "15 Çakralı Tam Sistem",
    aspect: "16:9",
    usage: ["infographic", "desktop", "presentation"]
  },
  aktivasyonAkis: {
    url: "https://res.cloudinary.com/dzegofdgp/image/upload/v1766167901/oluk/ders1/infographics/ders1-19aktivasyon-akis.png",
    alt: "19 Aktivasyon Akış Şeması",
    aspect: "16:9",
    usage: ["infographic", "desktop", "flowchart"]
  },
  bakgecFelsefe: {
    url: "https://res.cloudinary.com/dzegofdgp/image/upload/v1766167882/oluk/ders1/infographics/ders1-felsefe-bakgec.png",
    alt: "Bak Geç Felsefesi - Akış Prensibi",
    aspect: "1:1",
    usage: ["concept", "philosophy", "social"]
  }
};
```

### Animasyon Videoları (0/5 - Bekliyor)

```typescript
// Video upload sonrası bu URL'ler oluşacak
const ders1Animations = {
  nefes: {
    mp4: "https://res.cloudinary.com/dzegofdgp/video/upload/v.../oluk/ders1/seans/animations/seans-nefes-4-4-4-4.mp4",
    webm: "https://res.cloudinary.com/dzegofdgp/video/upload/v.../oluk/ders1/seans/animations/seans-nefes-4-4-4-4.webm",
    alt: "4-4-4-4 Nefes Ritmi Animasyonu",
    duration: "~30s",
    loop: true,
    autoplay: true,
    muted: true
  },
  kalpTohum: {
    mp4: "https://res.cloudinary.com/dzegofdgp/video/upload/v.../oluk/ders1/seans/animations/seans-kalp-tohum.mp4",
    webm: "https://res.cloudinary.com/dzegofdgp/video/upload/v.../oluk/ders1/seans/animations/seans-kalp-tohum.webm",
    alt: "Kalp Tohumu Atış Animasyonu",
    duration: "~20s",
    loop: true,
    autoplay: true,
    muted: true
  },
  enerjiAkis: {
    mp4: "https://res.cloudinary.com/dzegofdgp/video/upload/v.../oluk/ders1/seans/animations/seans-enerji-akis-yukari.mp4",
    webm: "https://res.cloudinary.com/dzegofdgp/video/upload/v.../oluk/ders1/seans/animations/seans-enerji-akis-yukari.webm",
    alt: "Yukarı Akan Enerji Animasyonu",
    duration: "~25s",
    loop: true,
    autoplay: true,
    muted: true
  },
  morAlev: {
    mp4: "https://res.cloudinary.com/dzegofdgp/video/upload/v.../oluk/ders1/seans/animations/seans-arinma-mor-alev.mp4",
    webm: "https://res.cloudinary.com/dzegofdgp/video/upload/v.../oluk/ders1/seans/animations/seans-arinma-mor-alev.webm",
    alt: "Mor Ateş Arınma Animasyonu",
    duration: "~30s",
    loop: true,
    autoplay: true,
    muted: true
  },
  altinIsik: {
    mp4: "https://res.cloudinary.com/dzegofdgp/video/upload/v.../oluk/ders1/seans/animations/seans-altin-isik-doldurma.mp4",
    webm: "https://res.cloudinary.com/dzegofdgp/video/upload/v.../oluk/ders1/seans/animations/seans-altin-isik-doldurma.webm",
    alt: "Altın Işık Dolma Finali",
    duration: "~25s",
    loop: true,
    autoplay: true,
    muted: true
  }
};
```

### Next.js Kullanım Örneği

```tsx
// components/ders1/Visuals.tsx
import Image from 'next/image';

const ders1Visuals = {
  aurikKatman: "https://res.cloudinary.com/dzegofdgp/image/upload/v1766166298/oluk/ders1/infographics/ders1-7aurik-katman.png",
  // ... diğerleri
};

export function AurikKatmanImage() {
  return (
    <Image
      src={ders1Visuals.aurikKatman}
      alt="7 Aurik Katman"
      width={1080}
      height={1920}
      quality={90}
      priority
    />
  );
}
```

```tsx
// components/ders1/Animations.tsx
export function NefesAnimation() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-auto"
    >
      <source src={ders1Animations.nefes.webm} type="video/webm" />
      <source src={ders1Animations.nefes.mp4} type="video/mp4" />
    </video>
  );
}
```

---

## 📈 İLERLEME GRAFİĞİ

```
█████████████████░░░░░░░ 58% (7/12)

Tamamlanan:
✅ ders1-7aurik-katman
✅ ders1-12adim-sifa
✅ seans1-menzil-kapak
✅ seans-muhur-kapani
✅ ders1-15chakra-tam-sistem
✅ ders1-19aktivasyon-akis
✅ ders1-felsefe-bakgec

Bekleyen:
⏳ seans-nefes-4-4-4-4.mp4
⏳ seans-kalp-tohum.mp4
⏳ seans-enerji-akis-yukari.mp4
⏳ seans-arinma-mor-alev.mp4
⏳ seans-altin-isik-doldurma.mp4
```

---

## 🎓 DERS ÇIKARIMLAR

### Başarılı Stratejiler

1. **PIL Fallback:** Authentication issue'da PIL kullanarak branded görseller oluşturmak hızlı çözüm oldu
2. **Batch Processing:** 10 saniye aralıklarla rate limit bypass
3. **Multi-format Video:** MP4 + WebM otomatik oluşturma browser compatibility için kritik
4. **Cloudinary Auto-optimize:** Manuel resize/optimize yerine Cloudinary'nin otomatik optimizasyonu kullanıldı

### Karşılaşılan Sorunlar

1. **Service Account Auth:** JSON dosyası silindi, yeniden oluşturuldu, işlem bitti, tekrar silindi
2. **Safety Filters:** "Human figure/silhouette" kelimeleri Imagen 3.0'da block edildi
3. **Quota Limits:** Günlük ~20 görsel limiti, PIL ile bypass edildi
4. **Prompt Complexity:** Çok uzun promptlar safety filter trigger'lıyor, kısa tutmak gerekiyor

### Gelecek İyileştirmeler

1. **Vertex AI Alternatifi:** Midjourney, DALL-E 3, Stable Diffusion API'leri test et
2. **Video Generator:** MoviePy ile otomatik branded animasyon üretimi
3. **Batch Automation:** Tüm Ders 2-5 için tek script
4. **CI/CD Pipeline:** GitHub Actions ile otomatik upload

---

## 📞 İLETİŞİM VE DESTEK

**Kullanıcı:** KemalG-u  
**Repo:** https://github.com/KemalG-u/oluk-portal  
**Branch:** main  

**Yardım Gerekirse:**
1. Bu dosyayı (`OLUK_DERS1_MASTER_DOKUMAN.md`) yeni Claude oturumunda aç
2. "ADIM ADIM KALAN İŞ TALİMATLARI" bölümünü takip et
3. "SORUN GİDERME" bölümünde yaygın hataları kontrol et

---

## ✅ SON KONTROL LİSTESİ

**Tamamlanan:**
- [x] 7 Statik görsel üretildi
- [x] 7 Statik görsel Cloudinary'ye yüklendi
- [x] URL'ler doğrulandı
- [x] Git commit/push yapıldı
- [x] Dökümanlar oluşturuldu
- [x] Upload script hazırlandı

**Bekleyen:**
- [ ] 4-5 Video Codespaces'e yüklendi mi?
- [ ] `upload_animations.py` çalıştırıldı mı?
- [ ] Video URL'leri doğrulandı mı?
- [ ] Final git commit yapıldı mı?
- [ ] Next.js entegrasyonu yapıldı mı?

---

**Son Güncelleme:** 19 Aralık 2025, 18:20  
**Hazırlayan:** GitHub Copilot (Claude Sonnet 4.5)  
**Versiyon:** 1.0 - Master Documentation
