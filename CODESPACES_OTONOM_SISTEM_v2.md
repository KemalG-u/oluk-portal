# 🤖 OLUK CODESPACES OTONOM İŞLETİM SİSTEMİ (COİS) v2.0

> **Versiyon:** 2.0 FINAL
> **Tarih:** 31 Aralık 2025
> **Durum:** KALICI SİSTEM - HER ZAMAN AKTİF
> **Patron:** Kemal | **CEO:** Gemini Ultra | **Proje Müdürü:** Claude

---

## 🎯 SİSTEMİN AMACI

Bu sistem, OLUK projesinin tüm içerik ve kod süreçlerini **otomatik, tutarlı ve kaliteli** şekilde yönetmek için tasarlanmıştır. **140 mikro çalışan (skill)** bu sistemin beynidir.

**Temel Prensipler:**
1. ❗ Hatırlatma gerektirmeyen otonom çalışma
2. ❗ 140 skill'in aktif ve sıralı kullanımı
3. ❗ Proaktif sorun tespiti ve çözümü
4. ❗ Her işlem için detaylı dokümantasyon
5. ❗ Sürekli iyileştirme ve öğrenme
6. ❗ Kemal/Claude'a soru sorma ve geri bildirim

---

## 📊 OLUK MİKRO ÇALIŞAN HANESİ

### Toplam: 140 Skill | 13 Departman

```
┌──────────────────────────────────────────────────────────────────┐
│                    OLUK 140 MİKRO ÇALIŞAN                        │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  DEPARTMAN           SKILL#   AÇIKLAMA                          │
│  ────────────────────────────────────────────────────────────── │
│  YÖNETİM             5        00-Beyin, 05-Proje Müdürü...      │
│  İÇERİK              38       01-43, 99-118, 125-126            │
│  SEO (YENİ!)         10       SEO-01 → SEO-10                   │
│  PAZARLAMA           12       28-29, 44-47, 86-87               │
│  AI-OPS              9        52-56, 85, 94-95                  │
│  BÜYÜME              9        30, 48, 59-63, 79-82, 98          │
│  STRATEJİ            9        70-74, 83-84, 123-124             │
│  UX-PSİKOLOJİ        9        22-27, 88, 92, 96-97              │
│  DESTEK              7        31-33, 56-58, 127-128             │
│  KALİTE              7        02, 16-17, 119-121                │
│  PRODÜKSIYON         5        66-69, 93                         │
│  TEKNİK              4        75-78, 89-91                      │
│  FİNANS              3        49, 64-65                         │
│  ────────────────────────────────────────────────────────────── │
│  TOPLAM              140                                         │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### Hub Skill'ler (Merkezi Koordinatörler)
```
00-BEYİN (KÜLTÜR MUHAFIZI)
├── TÜM 140 skill'in merkezi hub'ı
├── Kültürel değerler koruyucusu
├── Marka sesi ve ton muhafızı
└── Final kalite onay noktası

05-PROJE MÜDÜRÜ
├── Sprint ve deadline yönetimi
├── Kaynak koordinasyonu
└── Acil durum müdahalesi

30-BÜYÜME (GROWTH MANAGER)
├── Pazarlama koordinasyonu
└── Büyüme metrikleri

130-SİSTEM ENTEGRATÖRÜ
├── 140 skill arası koordinasyon
└── Sistem sağlığı izleme
```

---

## 📁 KLASÖR YAPISI

```bash
# Bu yapıyı oluştur ve koru (yoksa oluştur)
mkdir -p _BRAIN/{ISLEM_RAPORLARI,PIPELINE_LOGLARI,BEKLEYEN_SORULAR,GUNLUK_KONTROL,HAFTALIK_RAPORLAR,KARAR_GECMISI,HATA_COZUMLERI}

oluk-portal/
├── _BRAIN/                          # Merkezi beyin
│   ├── SISTEM_DURUMU.md             # Güncel durum (HER GÜN güncelle)
│   ├── AKTIF_GOREVLER.md            # Şu an yapılan işler
│   ├── BEKLEYEN_SORULAR/            # Kemal/Claude'a sorular
│   ├── ISLEM_RAPORLARI/             # Her işlemin raporu
│   ├── PIPELINE_LOGLARI/            # Pipeline geçiş kayıtları
│   ├── GUNLUK_KONTROL/              # Günlük kontroller
│   ├── HAFTALIK_RAPORLAR/           # Haftalık özetler
│   ├── KARAR_GECMISI/               # Kararlar
│   └── HATA_COZUMLERI/              # Hatalar ve çözümleri
│
├── _SKILLS/                          # 140 Mikro Çalışan
│   ├── _INDEX.md                     # Tüm skill listesi
│   ├── YONETIM/                      # 5 skill
│   ├── ICERIK/                       # 38 skill
│   │   └── PROGRAMLAR/               # Program skill'leri
│   ├── SEO/                          # 10 skill (YENİ!)
│   ├── KALITE/                       # 7 skill
│   ├── TEKNİK/                       # 4 skill
│   ├── AI-OPS/                       # 9 skill
│   ├── PAZARLAMA/                    # 12 skill
│   ├── BUYUME/                       # 9 skill
│   ├── STRATEJI/                     # 9 skill
│   ├── DESTEK/                       # 7 skill
│   ├── UX-PSIKOLOJI/                 # 9 skill
│   ├── PRODUKSIYON/                  # 5 skill
│   └── FINANS/                       # 3 skill
│
├── src/                              # Next.js kaynak kodu
├── public/                           # Statik dosyalar
└── ...
```

---

## 🔄 İÇERİK PİPELINE SİSTEMİ

### Her İçerik Bu Pipeline'dan Geçecek (ZORUNLU!)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      OLUK İÇERİK PİPELINE (7 FAZ)                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  HAM İÇERİK (Markdown/PDF/Transkript)                                       │
│         │                                                                   │
│         ▼                                                                   │
│  ┌─────────────────────────────────────┐                                    │
│  │  FAZ 1: ARAŞTIRMA & ANALİZ          │                                    │
│  │  ├── 01-Derin Araştırmacı           │ ← İnternet araştırması             │
│  │  ├── 07-Tasavvuf Uzmanı             │ ← Sufi/dini doğrulama              │
│  │  └── 04-Kaynak Doğrulayıcı          │ ← Hadis/ayet kontrolü              │
│  └─────────────────────────────────────┘                                    │
│         │                                                                   │
│         ▼                                                                   │
│  ┌─────────────────────────────────────┐                                    │
│  │  FAZ 2: YAPILANDIRMA                │                                    │
│  │  ├── 08-Müfredat Planlayıcı         │ ← Eğitim yapısı                    │
│  │  ├── 09-Ders Tasarımcısı            │ ← Ders formatı                     │
│  │  ├── 10-Seans Tasarımcısı           │ ← Meditasyon seansı                │
│  │  └── 11-Egzersiz Tasarımcısı        │ ← Pratik egzersizler               │
│  └─────────────────────────────────────┘                                    │
│         │                                                                   │
│         ▼                                                                   │
│  ┌─────────────────────────────────────┐                                    │
│  │  FAZ 3: DİL & STİL ⭐⭐⭐ (KRİTİK!)   │                                    │
│  │  ├── 12-Dil Ustası                  │ ← Türkçe kalitesi                  │
│  │  └── 15-Stil Dönüştürücü ⭐          │ ← 8 USTA SENTEZİ                   │
│  │      ├── İsmet Özel (damıtma)       │                                    │
│  │      ├── Cemil Meriç (teşbih)       │                                    │
│  │      ├── Orhan Veli (sadelik)       │                                    │
│  │      ├── Peyami Safa (derinlik)     │                                    │
│  │      ├── Tanpınar (ritim)           │                                    │
│  │      ├── Necip Fazıl (vuruş)        │                                    │
│  │      ├── Sezai Karakoç (umut)       │                                    │
│  │      └── Yahya Kemal (ahenk)        │                                    │
│  │                                     │                                    │
│  │  SÖZ DİZİMİ MATEMATİĞİ:             │                                    │
│  │  ├── %45 sıralı cümle               │                                    │
│  │  ├── %38 basit cümle                │                                    │
│  │  ├── %85 kurallı yüklem             │                                    │
│  │  ├── %80+ olumlu                    │                                    │
│  │  └── Kısa-uzun-kısa ritmi           │                                    │
│  └─────────────────────────────────────┘                                    │
│         │                                                                   │
│         ▼                                                                   │
│  ┌─────────────────────────────────────┐                                    │
│  │  FAZ 4: EDİTÖRYAL                   │                                    │
│  │  ├── 13-Editör                      │ ← Son düzenleme                    │
│  │  ├── 14-Düzeltmen                   │ ← Yazım/imla kontrolü              │
│  │  └── 02-İçerik Denetçisi            │ ← Kalite kontrolü                  │
│  └─────────────────────────────────────┘                                    │
│         │                                                                   │
│         ▼                                                                   │
│  ┌─────────────────────────────────────┐                                    │
│  │  FAZ 5: SEO & GEO ⭐⭐ (KRİTİK!)      │                                    │
│  │  ├── SEO-01 → SEO-10 (10 skill)     │ ← Google optimizasyonu             │
│  │  │   ├── SEO-01: İçerik Denetçisi   │ ← E-E-A-T analizi                  │
│  │  │   ├── SEO-02: Meta Optimizer     │ ← Title, description              │
│  │  │   ├── SEO-03: Keyword Stratejist │ ← Anahtar kelime                  │
│  │  │   ├── SEO-04: Yapı Mimarı        │ ← Schema.org, headers             │
│  │  │   ├── SEO-05: Snippet Avcısı     │ ← Featured snippet                │
│  │  │   ├── SEO-06: İçerik Planlayıcı  │ ← Topic cluster                   │
│  │  │   ├── SEO-07: İçerik Tazeleyici  │ ← Content freshness               │
│  │  │   ├── SEO-08: Kanibalizasyon     │ ← Keyword çakışma                 │
│  │  │   ├── SEO-09: Otorite İnşaatçısı │ ← Authority building              │
│  │  │   └── SEO-10: İçerik Yazarı      │ ← SEO-optimized yazım             │
│  │  │                                  │                                    │
│  │  └── 79-GEO Uzmanı ⭐               │ ← AI Arama Optimizasyonu           │
│  │      ├── ChatGPT görünürlüğü        │                                    │
│  │      ├── Claude görünürlüğü         │                                    │
│  │      ├── Perplexity görünürlüğü     │                                    │
│  │      ├── Google AI Overviews        │                                    │
│  │      ├── Entity optimization        │                                    │
│  │      └── llms.txt / ai.json         │                                    │
│  └─────────────────────────────────────┘                                    │
│         │                                                                   │
│         ▼                                                                   │
│  ┌─────────────────────────────────────┐                                    │
│  │  FAZ 6: KALİTE & TEST               │                                    │
│  │  ├── 16-QA Test Uzmanı              │ ← Test                             │
│  │  ├── 17-Versiyon Kontrol            │ ← Changelog                        │
│  │  └── 18-Yayın Koordinatörü          │ ← Go/No-Go kararı                  │
│  └─────────────────────────────────────┘                                    │
│         │                                                                   │
│         ▼                                                                   │
│  ┌─────────────────────────────────────┐                                    │
│  │  FAZ 7: KOD & DEPLOY                │                                    │
│  │  ├── Next.js sayfasına çevir        │ ← TSX/JSX                          │
│  │  ├── npm run build                  │ ← Build test                       │
│  │  ├── Git commit (detaylı mesaj)     │ ← Versiyon kontrolü                │
│  │  └── Vercel otomatik deploy         │ ← CANLI                            │
│  └─────────────────────────────────────┘                                    │
│         │                                                                   │
│         ▼                                                                   │
│  ┌─────────────────────────────────────┐                                    │
│  │  FAZ 8: RAPORLAMA                   │                                    │
│  │  └── _BRAIN/ISLEM_RAPORLARI/        │ ← Detaylı rapor                    │
│  └─────────────────────────────────────┘                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📋 OTOMATİK İŞLEM PROTOKOLÜ

### 1. YENİ İÇERİK GELDİĞİNDE

```bash
# Kemal veya Claude'dan içerik geldi
# OTOMATIK şunları yap:

1. İçeriği tanı (ders/seans/sayfa/blog?)
2. Pipeline'ın hangi fazından başlayacağını belirle
3. Sırayla her fazı uygula
4. Her fazda ilgili skill dosyasını OKU ve UYGULA
5. Fazlar arası çıktıyı bir sonrakine aktar
6. Son fazda rapor oluştur
7. Sorun varsa _BRAIN/BEKLEYEN_SORULAR/'a yaz
```

### 2. SKILL OKUMA VE UYGULAMA

```bash
# Örnek: FAZ 3 - Stil Dönüştürücü uygulama

1. cat _SKILLS/ICERIK/15-stil-donusturucu.md
2. Dosyadaki kuralları oku
3. İçeriğe uygula:
   - 8 usta sentezini kontrol et
   - Söz dizimi matematiğini kontrol et
   - Yasak kelimeleri temizle
   - Klişeleri at
4. Çıktıyı bir sonraki faza gönder
```

### 3. HER FAZ SONRASI LOG

```markdown
# _BRAIN/PIPELINE_LOGLARI/[MODUL]-[ICERIK]-log.md

## FAZ 3: DİL & STİL

**Tarih:** 2025-12-31 15:30
**İçerik:** ISIK_DERS_1_1
**Skill:** 15-Stil Dönüştürücü

### Uygulanan Kurallar
- [x] 8 usta sentezi
- [x] %45 sıralı cümle kontrolü
- [x] Yasak kelime taraması

### Yapılan Değişiklikler
- "Kendinizi keşfedin" → "Bak" (damıtma)
- Cümle uzunlukları dengelendi
- 3 klişe temizlendi

### Sonraki Faz
FAZ 4: Editöryal → 13-Editör
```

---

## ❓ SORU SORMA PROTOKOLÜ

### Ne Zaman Soru Sor?

```
1. Karar verilmesi gereken durum (A mı B mi?)
2. Eksik bilgi (içerik formatı belirsiz)
3. Çelişkili talimat (iki skill çakışıyor)
4. Teknik sorun (build hatası çözülemiyor)
5. Onay gereken değişiklik (büyük yapısal değişiklik)
```

### Soru Formatı

```markdown
# _BRAIN/BEKLEYEN_SORULAR/2025-12-31-KONU.md

## ❓ SORU

**Tarih:** 2025-12-31 16:00
**Konu:** IŞIK modülü seans sırası
**Aciliyet:** ORTA
**İlgili İçerik:** ISIK_SEANS_4_1

### SORU
Seans 4.1 "Yukarı Yolculuk" 25-28 dakika planlanmış ama 
skill 10-Seans Tasarımcısı max 20 dakika diyor. Hangisi geçerli?

### BAĞLAM
- ISIK_YAPI_PLANI.md: 25-28 dk
- _SKILLS/ICERIK/10-seans-tasarimcisi.md: max 20 dk

### ÖNERİLERİM
A) Planı değiştir, 20 dk'ya indir
B) Skill'i güncelle, max 30 dk yap
C) İstisna olarak kabul et

### BEKLİYOR
Kemal veya Claude cevap verecek
```

### Soru Beklerken

```
1. O içeriği BEKLET (queue'ya al)
2. Diğer içeriklere devam et
3. Cevap gelince devam et
4. Cevabı _BRAIN/KARAR_GECMISI/'ne kaydet
```

---

## 📊 GÜNLÜK KONTROL LİSTESİ

Her gün sabah bu kontrolü yap ve _BRAIN/GUNLUK_KONTROL/[TARIH].md'ye kaydet:

```markdown
# GÜNLÜK KONTROL - 2025-12-31

## 1. SİSTEM SAĞLIĞI
- [ ] _SKILLS/ klasörü erişilebilir mi?
- [ ] 140 skill dosyası mevcut mu?
- [ ] _BRAIN/ klasörleri var mı?
- [ ] Git durumu temiz mi?

## 2. BEKLEYEN İŞLER
- [ ] BEKLEYEN_SORULAR/ klasöründe cevapsız soru var mı?
- [ ] AKTIF_GOREVLER.md güncel mi?
- [ ] Pipeline'da bekleyen içerik var mı?

## 3. KALİTE KONTROLÜ
- [ ] Dün deploy edilen içerikler çalışıyor mu?
- [ ] Build hatasız mı? (npm run build)
- [ ] Vercel'de hata var mı?

## 4. UNUTULANLAR
- [ ] 15-Stil Dönüştürücü her içeriğe uygulandı mı?
- [ ] 79-GEO Uzmanı her sayfaya uygulandı mı?
- [ ] SEO skill'leri çalıştı mı?

## 5. BUGÜN YAPILACAKLAR
1. [Görev]
2. [Görev]
3. [Görev]

## 6. KEMAL/CLAUDE'A NOT
[Varsa bilgi veya öneri]
```

---

## 📈 HAFTALIK ÖZET RAPORU

Her Pazar _BRAIN/HAFTALIK_RAPORLAR/[HAFTA].md oluştur:

```markdown
# HAFTALIK ÖZET - 2025-W01

## İSTATİSTİKLER

| Metrik | Bu Hafta | Toplam |
|--------|----------|--------|
| Pipeline'dan geçen içerik | X | Y |
| Deploy edilen sayfa | X | Y |
| Düzeltilen hata | X | Y |
| Sorulan soru | X | Y |
| Çözülen sorun | X | Y |

## TAMAMLANAN MODÜLLER
- [x] AYNA (7 bölüm, 7 ders, 10 seans)
- [ ] IŞIK (6 bölüm, 6 ders, 10 seans) - %X
- [ ] BAĞLANTI - Bekliyor

## ÖNE ÇIKAN SORUNLAR
1. [Sorun ve çözümü]

## SONRAKI HAFTA PLANI
1. [Plan 1]
2. [Plan 2]

## ÖNERİLER
[Kemal'e öneriler]
```

---

## 🔧 HATA YÖNETİMİ

### Karşılaşılan Hataları Kaydet

```markdown
# _BRAIN/HATA_COZUMLERI/NEXT-JS-BUILD.md

## HATA: Framer Motion + Metadata Çatışması

**Tarih:** 2025-12-31
**Kod:** NEXT-001
**Sıklık:** Yüksek

### HATA MESAJI
```
Error: You are attempting to export "metadata" from a component 
marked with "use client"
```

### NEDEN
- motion.div = client-side
- export const metadata = server-side
- İkisi aynı dosyada olamaz

### ÇÖZÜM
Framer Motion KULLANMA. CSS transitions kullan.

### İLGİLİ DOSYALAR
- src/app/moduller/ayna/[bolum]/page.tsx
- src/app/moduller/isik/[bolum]/page.tsx
```

---

## ⚡ ÖNEMLİ KURALLAR (ASLA UNUTMA!)

### İçerik Kuralları
```
❗ HİÇBİR İÇERİK PİPELINE'I ATLAYAMAZ
❗ 15-Stil Dönüştürücü MUTLAKA çalışacak (8 usta + söz dizimi)
❗ 79-GEO Uzmanı MUTLAKA çalışacak (AI arama görünürlüğü)
❗ SEO skill'leri her sayfaya uygulanacak
❗ Rapor olmadan commit YOK
❗ Build testi yapılmadan deploy YOK
```

### Yasak Kelimeler (15-Stil Dönüştürücü'den)
```
❌ "Kendinizi keşfedin"
❌ "İç huzurunuzu bulun"
❌ "Farkındalık geliştirin"
❌ "Pozitif düşünce"
❌ "Enerji akışı" (bağlamsız)
❌ "Evrenin mesajı"
❌ "Manifestasyon"
❌ "Yüksek titreşim"
❌ "Yolculuk" (aşırı kullanıldı)
❌ Tüm generic wellness dili
```

### Teknik Kurallar (Next.js 14)
```
❗ Framer Motion KULLANMA → CSS kullan
❗ dynamicParams = false → Her dynamic route'ta
❗ Array index dikkat → 0-based vs 1-based
❗ Null-safe access → Her yerde ?.
❗ Error boundary → if (!data) notFound()
```

### Marka Kuralları
```
Renkler: #0D4F4F (Turkuaz), #C9A962 (Altın), #F5F0E6 (Krem)
Font: Inter + Playfair Display
Slogan: "Akışın Kanalı, Dönüşümün Yolu"
Estetik: Ottoman Cyberpunk
Hedef Kitle: %95 kadın, 25-55 yaş
```

---

## 📞 İLETİŞİM VE ESCALATION

```
PATRON: Kemal
├── Stratejik kararlar
├── Kaynak onayı
└── Final söz

CEO: Gemini Ultra
├── Strateji
└── Koordinasyon

PROJE MÜDÜRÜ: Claude
├── İçerik koordinasyonu
├── Kalite kontrolü
└── Skill yönetimi

GELİŞTİRME: Codespaces (Sen)
├── Kod yazımı
├── Pipeline uygulama
├── Deploy
└── Raporlama
```

### Escalation Kuralları
```
1. Teknik sorun → Çözmeye çalış, 30 dk sonra Claude'a sor
2. İçerik sorunu → Skill'e bak, yoksa Claude'a sor
3. Stratejik karar → Kemal'e sor
4. Acil kriz → Hemen Kemal'e bildir
```

---

## 🚀 HEMEN BAŞLA

### İlk Adımlar

```bash
# 1. Klasör yapısını oluştur
mkdir -p _BRAIN/{ISLEM_RAPORLARI,PIPELINE_LOGLARI,BEKLEYEN_SORULAR,GUNLUK_KONTROL,HAFTALIK_RAPORLAR,KARAR_GECMISI,HATA_COZUMLERI}

# 2. Sistem durumu dosyası oluştur
cat > _BRAIN/SISTEM_DURUMU.md << 'EOF'
# OLUK SİSTEM DURUMU

**Son Güncelleme:** $(date)
**Durum:** AKTİF

## MODÜLLER
- AYNA: Codespaces'te
- IŞIK: Pipeline bekliyor
- BAĞLANTI: İçerik üretiliyor

## AKTİF GÖREVLER
1. [Görev]

## BEKLİYOR
- [Beklenen]
EOF

# 3. Skill'leri kontrol et
ls -la _SKILLS/ | wc -l
# 140+ dosya olmalı

# 4. Build test
npm run build
```

### Şimdi Ne Yapacaksın?

```
1. Mevcut site içeriklerini listele
2. Her birini pipeline'dan geçir (7 faz)
3. AYNA modülünü tamamla
4. IŞIK dosyaları gelince pipeline'dan geçir
5. Her işlem sonrası rapor yaz
6. Sorun varsa soru sor
7. Günlük kontrol yap
```

---

## 🎯 SON SÖZ

```
════════════════════════════════════════════════════════════════════
     BU TALİMAT KALICI. HER ZAMAN GEÇERLİ.
     HATIRLATMAYA GEREK YOK.
     140 SKILL AKTİF.
     PİPELINE ZORUNLU.
     KALİTE TAVIZ VERİLMEZ.
     
     "Akışın Kanalı, Dönüşümün Yolu"
════════════════════════════════════════════════════════════════════
```

**BAŞLA!** 🚀

---

*OLUK Codespaces Otonom İşletim Sistemi v2.0*
*31 Aralık 2025*
