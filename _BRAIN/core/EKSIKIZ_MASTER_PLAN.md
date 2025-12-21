# 🌙 OLUK.ORG - EKSİKSİZ MASTER PLAN
## "Paha Biçilmez Bir Sistem"

**Tarih:** 19 Aralık 2024  
**Hazırlayan:** Claude (Proje Müdürü)  
**Patron:** Kemal

---

# 📑 İÇİNDEKİLER

1. VİZYON VE STRATEJİ
2. SİTE MİMARİSİ VE SAYFALAR
3. ÇOK DİLLİ SEO (TR + EN)
4. GÖRSEL SİSTEMİ
5. SOSYAL MEDYA STRATEJİSİ
6. EMAİL PAZARLAMA
7. ANALİTİK VE ÖLÇÜMLEME
8. YASAL VE UYUM (KVKK/GDPR)
9. GÜVENLİK
10. PERFORMANS
11. ERİŞİLEBİLİRLİK
12. MOBİL VE PWA
13. TOPLULUK VE BAĞLILIK
14. İÇERİK STRATEJİSİ
15. BÜYÜME VE ÖLÇEKLENDİRME
16. TEKNİK ALTYAPI
17. TAKVİM VE MİLESTONE'LAR

---

# 1. VİZYON VE STRATEJİ

## 1.1 Ne İnşa Ediyoruz?
OLUK, Türk tasavvuf geleneğini modern dijital deneyimle buluşturan bir **dönüşüm ekosistemi**.

## 1.2 Temel İlkeler
| İlke | Açıklama |
|------|----------|
| Gizli İrşad | Seküler vitrin, Rabbani öz |
| Paha Biçilmez Değer | Önce değer üret, para sonra gelir |
| OLUK Stili | 9 usta sentezi, klişe yasak |
| Osmanlı Cyberpunk | Geleneksel estetik + Modern teknoloji |
| Erişilebilirlik | Herkes için, her cihazda |

## 1.3 Hedef Kitle

### Birincil Kitle (Türkiye)
- %95 kadın
- 28-55 yaş
- Şehirli, eğitimli
- "Hiçbir şey işe yaramadı" deneyimi
- Sistematik yol arayan

### İkincil Kitle (Global)
- Türk diaspora (Almanya, Hollanda, UK, USA)
- İngilizce konuşan spirituel arayış içindekiler
- Sufi geleneğine ilgi duyanlar

## 1.4 Rakip Analizi
| Rakip | Güç | Zayıflık | OLUK Farkı |
|-------|-----|----------|------------|
| Calm | $7.7M/ay gelir, güçlü marka | Batı odaklı, yüzeysel | Türk-Sufi derinliği |
| Headspace | 80M indirme, iyi UX | Pahalı, jenerik | Kültürel özgünlük |
| Meditopia | TR #1, Türkçe içerik | Psikoloji odaklı | Ruhani boyut |
| Insight Timer | 25M kullanıcı, ücretsiz | Dağınık içerik | Sistematik yol |

---

# 2. SİTE MİMARİSİ VE SAYFALAR

## 2.1 URL Yapısı (Çok Dilli)

```
oluk.org/                     → Türkçe ana sayfa
oluk.org/en/                  → İngilizce ana sayfa

oluk.org/dersler/             → Ders listesi (TR)
oluk.org/en/lessons/          → Lessons list (EN)

oluk.org/dersler/kapi/        → Tek ders (TR)
oluk.org/en/lessons/the-door/ → Single lesson (EN)

oluk.org/inziva/              → Siber İnziva (TR)
oluk.org/en/retreat/          → Cyber Retreat (EN)

oluk.org/hakkinda/            → Hakkımızda (TR)
oluk.org/en/about/            → About (EN)

oluk.org/blog/                → Blog (TR)
oluk.org/en/blog/             → Blog (EN)
```

## 2.2 Tüm Sayfalar Listesi

### Ana Sayfalar
| Sayfa | TR URL | EN URL | Durum |
|-------|--------|--------|-------|
| Ana Sayfa | / | /en/ | ✅ TR Tamamlandı |
| Dersler | /dersler/ | /en/lessons/ | ✅ TR Tamamlandı |
| Tek Ders | /dersler/[slug]/ | /en/lessons/[slug]/ | 📄 Kod Hazır |
| Tek Seans | /dersler/[slug]/[seans]/ | /en/lessons/[slug]/[session]/ | ⏳ Sırada |
| Siber İnziva | /inziva/ | /en/retreat/ | ⏳ Faz 2 |
| Profil | /profil/ | /en/profile/ | ⏳ Faz 2 |
| Hakkımızda | /hakkinda/ | /en/about/ | ⏳ |
| İletişim | /iletisim/ | /en/contact/ | ⏳ |
| Blog | /blog/ | /en/blog/ | ⏳ |
| SSS | /sss/ | /en/faq/ | ⏳ |

### Yasal Sayfalar
| Sayfa | TR URL | EN URL |
|-------|--------|--------|
| Gizlilik Politikası | /gizlilik/ | /en/privacy/ |
| Kullanım Koşulları | /kullanim-kosullari/ | /en/terms/ |
| KVKK Aydınlatma | /kvkk/ | /en/gdpr/ |
| Çerez Politikası | /cerezler/ | /en/cookies/ |

### Özel Sayfalar
| Sayfa | URL | Açıklama |
|-------|-----|----------|
| 404 | /404/ | Özelleştirilmiş hata sayfası |
| Bakım | /bakim/ | Bakım modu sayfası |
| Sitemap | /sitemap.xml | XML sitemap |
| Robots | /robots.txt | Arama motoru talimatları |

---

# 3. ÇOK DİLLİ SEO (TR + EN)

## 3.1 Teknik SEO Yapılandırması

### Hreflang Implementasyonu
```html
<!-- Her sayfada -->
<link rel="alternate" hreflang="tr" href="https://oluk.org/dersler/" />
<link rel="alternate" hreflang="en" href="https://oluk.org/en/lessons/" />
<link rel="alternate" hreflang="x-default" href="https://oluk.org/" />
```

### Meta Tags (TR Örneği)
```html
<title>Kapı - Temel Arınma Dersi | OLUK</title>
<meta name="description" content="Ruhsal dönüşüm yolculuğunun ilk adımı. Nefes teknikleri, beden farkındalığı ve enerji merkezleri." />
<meta name="keywords" content="meditasyon, nefes egzersizi, ruhsal gelişim, Türk tasavvufu" />
<meta property="og:title" content="Kapı - Temel Arınma | OLUK" />
<meta property="og:description" content="Dur. Ve Hatırla. On konaklık bir yolculuk." />
<meta property="og:image" content="https://oluk.org/images/og/kapi-og.jpg" />
<meta property="og:url" content="https://oluk.org/dersler/kapi/" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="tr_TR" />
<meta property="og:locale:alternate" content="en_US" />
```

### Meta Tags (EN Örneği)
```html
<title>The Door - Foundational Purification | OLUK</title>
<meta name="description" content="First step of spiritual transformation. Breathwork, body awareness, and energy centers." />
<meta name="keywords" content="meditation, breathwork, spiritual growth, Turkish Sufism" />
<meta property="og:locale" content="en_US" />
<meta property="og:locale:alternate" content="tr_TR" />
```

## 3.2 Anahtar Kelime Stratejisi

### Türkçe Anahtar Kelimeler
| Kelime | Arama Hacmi | Zorluk | Hedef Sayfa |
|--------|-------------|--------|-------------|
| meditasyon uygulaması | 5,400/ay | Orta | Ana sayfa |
| nefes egzersizi | 3,600/ay | Düşük | /dersler/kapi/ |
| ruhsal gelişim | 2,900/ay | Orta | /hakkinda/ |
| tasavvuf dersleri | 1,300/ay | Düşük | /dersler/ |
| enerji temizliği | 1,900/ay | Düşük | /inziva/ |
| chakra çalışması | 2,400/ay | Orta | /dersler/isik/ |
| bilinçaltı temizliği | 1,600/ay | Düşük | /dersler/ayna/ |

### İngilizce Anahtar Kelimeler
| Keyword | Volume | Difficulty | Target Page |
|---------|--------|------------|-------------|
| sufi meditation | 1,900/mo | Low | /en/ |
| turkish spirituality | 720/mo | Low | /en/about/ |
| breathwork meditation | 8,100/mo | Medium | /en/lessons/the-door/ |
| spiritual transformation | 2,400/mo | Medium | /en/ |
| energy healing meditation | 1,600/mo | Medium | /en/retreat/ |

## 3.3 Yapısal Veri (Schema.org)

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Kapı - Temel Arınma",
  "description": "Ruhsal dönüşüm yolculuğunun ilk adımı",
  "provider": {
    "@type": "Organization",
    "name": "OLUK",
    "url": "https://oluk.org"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "duration": "PT45M",
    "inLanguage": ["tr", "en"]
  },
  "educationalLevel": "beginner"
}
```

## 3.4 URL Slug Kuralları

### Türkçe
- Küçük harf
- Türkçe karakterler dönüştürülür (ö→o, ü→u, ş→s, ç→c, ğ→g, ı→i)
- Boşluk yerine tire (-)
- Örnek: "Yasin Kapısı" → yasin-kapisi

### İngilizce
- Lowercase
- Hyphens for spaces
- Semantic meaning preserved
- Example: "The Door" → the-door

---

# 4. GÖRSEL SİSTEMİ

## 4.1 Görsel Tipleri ve Boyutları

### Hero Görselleri
| Kullanım | Boyut | Format | Kalite |
|----------|-------|--------|--------|
| Desktop Hero | 1920x1080px | WebP + JPG fallback | 85% |
| Mobile Hero | 750x1334px | WebP + JPG fallback | 80% |
| OG Image | 1200x630px | JPG | 90% |
| Twitter Card | 1200x600px | JPG | 90% |

### Ders Görselleri
| Kullanım | Boyut | Format |
|----------|-------|--------|
| Ders Kartı | 600x400px | WebP |
| Ders Detay Hero | 1200x600px | WebP |
| Seans Thumbnail | 400x300px | WebP |
| İkon | 128x128px | SVG/PNG |

### Responsive Srcset
```html
<img 
  src="/images/kapi-800.webp"
  srcset="
    /images/kapi-400.webp 400w,
    /images/kapi-800.webp 800w,
    /images/kapi-1200.webp 1200w,
    /images/kapi-1600.webp 1600w
  "
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
  alt="Kapı dersi - Altın kapı ve turkuaz ışık huzmesi"
  loading="lazy"
  decoding="async"
/>
```

## 4.2 Alt Text Sistemi (Çok Dilli)

### Alt Text Formatı
```
TR: [Ana Obje] - [Bağlam/Eylem] - [OLUK Markası]
EN: [Main Object] - [Context/Action] - [OLUK Brand]
```

### Örnekler

| Görsel | TR Alt Text | EN Alt Text |
|--------|-------------|-------------|
| Kapı Hero | Altın kapı aralanıyor turkuaz ışık huzmesi - OLUK temel arınma dersi | Golden door opening with teal light beam - OLUK foundational purification |
| Ayna Hero | Sufi kadın ayna karşısında meditasyon - OLUK kendini tanıma dersi | Sufi woman meditating before mirror - OLUK self-discovery lesson |
| Nefes İkonu | Nefes alıp veren insan silueti - OLUK nefes egzersizi | Human silhouette breathing - OLUK breathwork exercise |
| Chakra Görseli | Yedi enerji merkezi ışıldayan insan bedeni - OLUK enerji çalışması | Seven glowing energy centers on human body - OLUK energy work |

### Alt Text Kuralları
1. ✅ Maksimum 125 karakter
2. ✅ "image of" veya "resim" ile BAŞLAMA
3. ✅ Anahtar kelime doğal şekilde dahil
4. ✅ Her dil için ayrı alt text
5. ✅ Dekoratif görseller için alt="" (boş)
6. ❌ Keyword stuffing yasak

## 4.3 Görsel Dosya İsimlendirme

### Format
```
[konu]-[tip]-[boyut]-[dil].[format]
```

### Örnekler
```
kapi-hero-1920-tr.webp
kapi-hero-1920-en.webp
kapi-card-600-tr.webp
ayna-thumbnail-400-tr.webp
nefes-icon-128.svg
og-homepage-tr.jpg
og-homepage-en.jpg
```

## 4.4 Cloudinary Entegrasyonu

### Klasör Yapısı
```
dzegofdgp/
├── heroes/
│   ├── tr/
│   └── en/
├── lessons/
│   ├── kapi/
│   ├── ayna/
│   ├── kopru/
│   ├── isik/
│   └── yol/
├── sessions/
├── icons/
├── og-images/
│   ├── tr/
│   └── en/
├── social/
│   ├── instagram/
│   ├── tiktok/
│   └── youtube/
└── blog/
```

### Otomatik Transformasyonlar
```javascript
// Cloudinary URL Builder
const cloudinaryUrl = (publicId, options) => {
  const base = 'https://res.cloudinary.com/dzegofdgp/image/upload';
  const transforms = [
    `w_${options.width}`,
    `h_${options.height}`,
    'c_fill',
    'f_auto',
    'q_auto:good',
    options.blur ? 'e_blur:1000' : ''
  ].filter(Boolean).join(',');
  
  return `${base}/${transforms}/${publicId}`;
};
```

## 4.5 Görsel Üretim Pipeline

```
1. PROMPT YAZIMI (Claude)
   ↓
2. GEM'DEN GEÇİRME (OLUK Stili)
   ↓
3. AI GÖRSEL ÜRETİMİ (Gemini Imagen)
   ↓
4. MANUEL KONTROL (Kemal)
   ↓
5. BOYUTLANDIRMA (ImageMagick)
   ↓
6. OPTİMİZASYON (Squoosh/TinyPNG)
   ↓
7. CLOUDINARY UPLOAD (API)
   ↓
8. ALT TEXT EKLEME (TR + EN)
   ↓
9. SİTEYE ENTEGRASYON
```

### Görsel Prompt Şablonu
```
OLUK GÖRSEL PROMPT ŞABLONU

Konu: [Ders/Seans adı]
Stil: Ottoman Cyberpunk - Geleneksel Türk-İslam motiflerini futuristik elementlerle harmanlayan

Renk Paleti:
- Ana: Derin Turkuaz (#0D4F4F)
- Vurgu: Sıcak Altın (#C9A962)
- Zemin: Soft Krem (#F5F0E6)

Atmosfer: [Mistik/Huzurlu/Güçlü/Aydınlık]

Elementler:
- [Ana obje]
- [İkincil objeler]
- [Işık kaynağı ve yönü]

YASAKLAR:
- ❌ Yüz detayı (silüet tercih)
- ❌ Dini semboller (hilal, Besmele vb.)
- ❌ Karanlık/korkunç atmosfer
- ❌ Batı spirituel klişeleri (lotus pozisyonu, üçüncü göz)

Aspect Ratio: 16:9
Çözünürlük: Minimum 2048px genişlik
```

---

# 5. SOSYAL MEDYA STRATEJİSİ

## 5.1 Platform Stratejisi

### Instagram (@oluk.org)
| Özellik | Detay |
|---------|-------|
| Hedef Kitle | 28-45 yaş kadın, wellness ilgisi |
| İçerik Türleri | Carousel eğitim, Reels kısa meditasyon, Stories günlük |
| Paylaşım Sıklığı | Günde 1 post, 3-5 story |
| Hashtag Stratejisi | #meditasyon #ruhsalgelişim #oluk #nefes #içhuzur |
| Görsel Stili | OLUK renk paleti, tutarlı filtre |

### TikTok (@oluk.org)
| Özellik | Detay |
|---------|-------|
| Hedef Kitle | 18-35 yaş, merak eden |
| İçerik Türleri | 60sn meditasyon, myth busters, before/after |
| Paylaşım Sıklığı | Günde 1-2 video |
| Trend Takibi | Trending sounds + wellness twist |
| Hook Stratejisi | İlk 3 saniye kritik, soru ile aç |

### YouTube (@OLUK)
| Özellik | Detay |
|---------|-------|
| İçerik Türleri | Uzun meditasyonlar, ders tanıtımları, röportajlar |
| Video Uzunluğu | 10-30 dakika |
| Paylaşım Sıklığı | Haftada 1-2 video |
| SEO | Başlık, açıklama, etiket optimizasyonu |
| Thumbnail | Tutarlı tasarım, yüz veya metin |

### Pinterest (@oluk)
| Özellik | Detay |
|---------|-------|
| Board'lar | Nefes Egzersizleri, Meditasyon, Enerji Çalışması, OLUK Sözleri |
| Pin Türleri | İnfografik, alıntı, blog görseli |
| Paylaşım Sıklığı | Günde 5-10 pin |
| SEO | Anahtar kelime zengin açıklamalar |

## 5.2 İçerik Takvimi (Haftalık)

| Gün | Instagram | TikTok | YouTube | Pinterest |
|-----|-----------|--------|---------|-----------|
| Pazartesi | Carousel: Haftalık tema tanıtımı | Trend videosu | - | 10 pin |
| Salı | Reel: Kısa nefes egzersizi | Eğitim videosu | - | 10 pin |
| Çarşamba | Post: Motivasyon alıntısı | Behind the scenes | Video yayın | 10 pin |
| Perşembe | Reel: Kullanıcı hikayesi | Q&A videosu | - | 10 pin |
| Cuma | Carousel: Hafta özeti | Trend videosu | - | 10 pin |
| Cumartesi | Post: Canlı duyurusu | - | - | 5 pin |
| Pazar | Canlı: Grup meditasyonu | Recap | - | 5 pin |

## 5.3 İçerik Pillars

1. **Eğitim** (40%)
   - Nefes teknikleri
   - Enerji merkezi bilgileri
   - Meditasyon tipleri

2. **İlham** (25%)
   - OLUK stili alıntılar
   - Kullanıcı dönüşüm hikayeleri
   - Motivasyon içerikleri

3. **Topluluk** (20%)
   - Kullanıcı içerikleri (UGC)
   - Q&A'ler
   - Canlı yayınlar

4. **Ürün/Hizmet** (15%)
   - Yeni ders duyuruları
   - Platform özellikleri
   - Kullanım ipuçları

## 5.4 Influencer Stratejisi

### Hedef Influencer Profili
- Mikro influencer (5K-50K takipçi)
- Wellness, yoga, meditasyon nişi
- Türk veya Türkçe konuşan
- Otantik ve samimi içerik

### İşbirliği Türleri
1. **Ürün değişimi**: Ücretsiz premium erişim karşılığı içerik
2. **Affiliate**: Referans kodu ile komisyon
3. **Sponsorlu içerik**: Ücretli tanıtım
4. **Ambassador**: Uzun vadeli marka elçiliği

---

# 6. EMAİL PAZARLAMA

## 6.1 Email Listesi Segmentleri

| Segment | Kriter | İçerik Tipi |
|---------|--------|-------------|
| Yeni Kayıt | <7 gün | Hoşgeldin serisi |
| Aktif | Son 7 günde giriş | Haftalık özet |
| Uyuyan | 14-30 gün inaktif | Re-engagement |
| Kayıp | >30 gün inaktif | Win-back kampanya |
| Premium | Ödeme yapan | VIP içerik |

## 6.2 Email Akışları

### Hoşgeldin Serisi (7 email, 14 gün)
1. **Gün 0**: Hoşgeldin + İlk ders daveti
2. **Gün 2**: OLUK felsefesi tanıtımı
3. **Gün 4**: İlk dersi tamamla hatırlatması
4. **Gün 7**: Kullanıcı hikayesi + sosyal kanıt
5. **Gün 10**: Siber İnziva tanıtımı
6. **Gün 12**: Topluluk daveti
7. **Gün 14**: İlerleme özeti + sonraki adım

### Haftalık Newsletter
- Konu: Bu haftanın teması
- İçerik: 1 kısa meditasyon + 1 alıntı + 1 ipucu
- CTA: Platforma dön

## 6.3 Email Tasarım Kuralları
- OLUK renk paleti (Turkuaz header, Krem body)
- Tek kolon layout
- Mobil öncelikli
- Açık CTA butonları
- Alt text tüm görsellerde
- Unsubscribe link görünür

---

# 7. ANALİTİK VE ÖLÇÜMLEME

## 7.1 Araçlar

| Araç | Kullanım | Öncelik |
|------|----------|---------|
| Mixpanel | Kullanıcı davranışı, retention, funnel | Birincil |
| Google Analytics 4 | Traffic, acquisition, SEO | İkincil |
| Google Search Console | SEO performans, indeksleme | SEO |
| Hotjar | Heatmap, session recording | UX |
| Cloudinary Analytics | Görsel performansı | Medya |

## 7.2 Temel Metrikler (KPIs)

### Acquisition
- Organik trafik (aylık)
- Referral kaynakları
- Sosyal medya click-through
- Email open/click rate

### Activation
- Kayıt oranı
- İlk ders tamamlama oranı
- Onboarding completion

### Retention
- D1, D7, D30 retention
- Haftalık aktif kullanıcı (WAU)
- Aylık aktif kullanıcı (MAU)
- Streak ortalaması

### Engagement
- Ders tamamlama oranı
- Ortalama seans süresi
- Jurnal kullanım oranı
- Topluluk katılımı

### Revenue (Sonraki Faz)
- Conversion rate
- ARPU (Average Revenue Per User)
- Churn rate
- LTV (Lifetime Value)

## 7.3 Raporlama Takvimi

| Rapor | Sıklık | İçerik |
|-------|--------|--------|
| Günlük Dashboard | Her gün | Aktif kullanıcı, yeni kayıt |
| Haftalık Özet | Pazartesi | Tüm KPI'lar, trend analizi |
| Aylık Rapor | Ay başı | Derinlemesine analiz, öneriler |
| Çeyrek Raporu | 3 ayda 1 | Stratejik değerlendirme |

---

# 8. YASAL VE UYUM (KVKK/GDPR)

## 8.1 Gerekli Yasal Sayfalar

### Gizlilik Politikası (/gizlilik/)
- Toplanan veriler
- Veri kullanım amaçları
- Üçüncü taraf paylaşımları
- Kullanıcı hakları
- İletişim bilgileri

### KVKK Aydınlatma Metni (/kvkk/)
- Veri sorumlusu bilgileri
- İşlenen kişisel veriler
- Veri işleme amaçları
- Veri aktarımı
- Saklama süreleri
- Başvuru hakları

### Kullanım Koşulları (/kullanim-kosullari/)
- Hizmet tanımı
- Kullanıcı sorumlulukları
- Fikri mülkiyet
- Sorumluluk sınırları
- Fesih koşulları

### Çerez Politikası (/cerezler/)
- Kullanılan çerezler
- Amaçları
- Üçüncü taraf çerezleri
- Yönetim seçenekleri

## 8.2 Cookie Consent Banner

### Türkçe
```
Bu site deneyiminizi iyileştirmek için çerez kullanır.

[Tümünü Kabul Et] [Ayarları Yönet] [Sadece Zorunlu]

Detaylı bilgi için Çerez Politikamızı inceleyebilirsiniz.
```

### İngilizce
```
This site uses cookies to improve your experience.

[Accept All] [Manage Settings] [Essential Only]

See our Cookie Policy for details.
```

## 8.3 Çerez Kategorileri

| Kategori | Zorunlu | Varsayılan |
|----------|---------|------------|
| Zorunlu | Evet | Açık (kapatılamaz) |
| Analitik | Hayır | Kapalı |
| Pazarlama | Hayır | Kapalı |
| Tercihler | Hayır | Kapalı |

## 8.4 Veri Saklama Süreleri

| Veri Tipi | Saklama Süresi |
|-----------|----------------|
| Hesap bilgileri | Hesap silinene kadar |
| İlerleme verileri | Hesap silinene kadar |
| Analitik veriler | 26 ay |
| Log kayıtları | 12 ay |
| Email listesi | Abonelik iptaline kadar |

---

# 9. GÜVENLİK

## 9.1 Temel Güvenlik Önlemleri

| Önlem | Uygulama |
|-------|----------|
| HTTPS | Let's Encrypt SSL, HSTS |
| Authentication | Supabase Auth, bcrypt hash |
| SQL Injection | Parameterized queries |
| XSS | Content Security Policy |
| CSRF | Token validation |
| Rate Limiting | API rate limits |

## 9.2 Supabase Güvenlik Ayarları

```sql
-- Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);
```

## 9.3 Yedekleme Stratejisi

| Ne | Sıklık | Nerede |
|----|--------|--------|
| Database | Günlük | Supabase auto-backup |
| Medya | Haftalık | Cloudinary + S3 |
| Kod | Her commit | GitHub |
| Dokümanlar | Anlık | Google Drive |

## 9.4 Güvenlik Kontrol Listesi

- [ ] SSL sertifikası aktif
- [ ] HSTS header aktif
- [ ] CSP header yapılandırıldı
- [ ] Input validation aktif
- [ ] Rate limiting aktif
- [ ] Error mesajları güvenli
- [ ] Admin paneli korumalı
- [ ] Yedekleme test edildi
- [ ] Güvenlik taraması yapıldı

---

# 10. PERFORMANS

## 10.1 Core Web Vitals Hedefleri

| Metrik | Hedef | Açıklama |
|--------|-------|----------|
| LCP | <2.5s | Largest Contentful Paint |
| FID | <100ms | First Input Delay |
| CLS | <0.1 | Cumulative Layout Shift |
| TTFB | <600ms | Time to First Byte |
| FCP | <1.8s | First Contentful Paint |

## 10.2 Optimizasyon Teknikleri

### Görsel Optimizasyonu
- WebP format (JPEG fallback)
- Lazy loading
- Responsive srcset
- Cloudinary CDN

### JavaScript Optimizasyonu
- Code splitting
- Dynamic imports
- Tree shaking
- Bundle analizi

### CSS Optimizasyonu
- Critical CSS inline
- Unused CSS removal
- CSS minification

### Caching Stratejisi
```javascript
// next.config.js
headers: [
  {
    source: '/images/:path*',
    headers: [
      { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
    ]
  },
  {
    source: '/:path*',
    headers: [
      { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' }
    ]
  }
]
```

## 10.3 CDN Stratejisi

| Kaynak | CDN |
|--------|-----|
| Görseller | Cloudinary |
| Statik dosyalar | Vercel Edge |
| Fontlar | Google Fonts (subset) |
| Video | YouTube embed |

---

# 11. ERİŞİLEBİLİRLİK

## 11.1 WCAG 2.1 AA Uyumu

### Görsel
- [ ] Renk kontrast oranı minimum 4.5:1
- [ ] Tüm görsellerde alt text
- [ ] Renk dışı görsel ipuçları
- [ ] Responsive zoom desteği (200%)

### Navigasyon
- [ ] Keyboard navigasyon
- [ ] Skip to content link
- [ ] Focus visible states
- [ ] Logical tab order

### İçerik
- [ ] Heading hiyerarşisi (h1-h6)
- [ ] Anlamlı link text
- [ ] Form label'ları
- [ ] Error mesajları açıklayıcı

### Medya
- [ ] Video altyazıları
- [ ] Audio transkriptleri
- [ ] Otomatik oynatma yok

## 11.2 ARIA Kullanımı

```html
<!-- Örnek: Ders kartı -->
<article 
  role="article"
  aria-labelledby="ders-kapi-title"
  aria-describedby="ders-kapi-desc"
>
  <h3 id="ders-kapi-title">Kapı</h3>
  <p id="ders-kapi-desc">Temel Arınma - 45 dakika</p>
  <a href="/dersler/kapi/" aria-label="Kapı dersine git">
    Keşfet
  </a>
</article>
```

---

# 12. MOBİL VE PWA

## 12.1 Responsive Breakpoints

| Breakpoint | Genişlik | Cihaz |
|------------|----------|-------|
| xs | <640px | Telefon |
| sm | 640px+ | Büyük telefon |
| md | 768px+ | Tablet |
| lg | 1024px+ | Laptop |
| xl | 1280px+ | Desktop |
| 2xl | 1536px+ | Büyük ekran |

## 12.2 Mobil Test Protokolü

Her push öncesi test edilecek cihazlar:
1. iPhone SE (375px) - Küçük ekran
2. iPhone 14 (390px) - Standart
3. iPad (768px) - Tablet

### Test Kontrol Listesi
- [ ] Scroll çalışıyor
- [ ] Butonlar tıklanabilir
- [ ] Form'lar kullanılabilir
- [ ] Görseller yükleniyor
- [ ] Metin okunabilir
- [ ] Navigasyon çalışıyor

## 12.3 PWA Manifest

```json
{
  "name": "OLUK - Akışın Kanalı",
  "short_name": "OLUK",
  "description": "Ruhsal dönüşüm platformu",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#F5F0E6",
  "theme_color": "#0D4F4F",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

# 13. TOPLULUK VE BAĞLILIK

## 13.1 Gamification Sistemi

### Streak Sistemi
- Günlük giriş streak
- 7 gün streak → Bronz rozet
- 21 gün streak → Gümüş rozet
- 90 gün streak → Altın rozet

### Rozetler
| Rozet | Kriter | Görsel |
|-------|--------|--------|
| Kapı Açan | İlk dersi tamamla | 🚪 |
| Ayna Tutan | Kendini tanıma dersi | 🪞 |
| Köprü Kuran | Bağlantılar dersi | 🌉 |
| Işık Taşıyan | Aydınlanma dersi | ✨ |
| Yolcu | Tüm dersleri tamamla | 🛤️ |
| Sebat | 21 gün streak | ⭐ |
| Ustalık | 90 gün streak | 🏆 |

### İlerleme Haritası
- Görsel yol haritası
- Tamamlanan dersler işaretli
- Sonraki hedef görünür
- Toplam ilerleme yüzdesi

## 13.2 Topluluk Özellikleri

### Faz 1 (MVP)
- Yorum/feedback sistemi
- Paylaşım butonları

### Faz 2
- Deneyim paylaşımı
- Topluluk hikayeler
- Mentor/mentee eşleştirme

### Faz 3
- Canlı grup seansları
- Forum
- Özel gruplar

---

# 14. İÇERİK STRATEJİSİ

## 14.1 İçerik Üretim Pipeline

```
1. KONU BELİRLEME
   - Kullanıcı ihtiyaçları
   - SEO fırsatları
   - Trend konular
       ↓
2. HAM METİN (Claude)
   - Taslak yazımı
   - Yapısal düzenleme
       ↓
3. GEM DÖNÜŞÜMÜ (Gemini)
   - OLUK Dil Ustası
   - 9 usta sentezi
       ↓
4. GÖRSEL PLANLAMA
   - Prompt yazımı
   - AI üretim
   - Optimizasyon
       ↓
5. EDİTÖRYAL KONTROL
   - Son okuma
   - Marka uyumu
       ↓
6. YAYINLAMA
   - CMS girişi
   - SEO meta
   - Sosyal paylaşım
```

## 14.2 İçerik Tipleri

| Tip | Sıklık | Platform |
|-----|--------|----------|
| Ders İçeriği | Sürekli | Web |
| Blog Yazısı | Haftada 2 | Web + Sosyal |
| Video | Haftada 1 | YouTube + Web |
| Podcast | Haftada 1 | Spotify + Web |
| İnfografik | Haftada 2 | Pinterest + Sosyal |
| Alıntı Görseli | Günlük | Instagram + Pinterest |
| Kısa Video | Günlük | TikTok + Reels |

## 14.3 OLUK Yazım Kuralları

### Kullanılacak
- Kısa cümle
- Aktif çatı
- Türkçe kelime tercihi
- Teşbih ve istiare
- Şiirsel ritim

### Kaçınılacak (Klişeler)
- "Farkındalık"
- "Enerji akışı"
- "Evrensel bilinç"
- "Manifestasyon"
- "Yüksek titreşim"
- "Üçüncü göz"

---

# 15. BÜYÜME VE ÖLÇEKLENDİRME

## 15.1 Faz Planı

### Faz 1: MVP (Ocak 2025)
- [x] Ana sayfa
- [x] Dersler sayfası
- [ ] Tek ders sayfası
- [ ] Tek seans sayfası
- [ ] Temel navigasyon
- [ ] Mobil responsive

### Faz 2: Portal (Şubat 2025)
- [ ] Supabase Auth
- [ ] Kullanıcı profili
- [ ] İlerleme takibi
- [ ] Siber İnziva

### Faz 3: Büyüme (Mart 2025)
- [ ] Streak sistemi
- [ ] Rozet/başarı
- [ ] Jurnal
- [ ] Email otomasyonları

### Faz 4: Genişleme (Nisan+ 2025)
- [ ] İngilizce versiyon
- [ ] Ders 6-10
- [ ] Admin panel
- [ ] AI Koç "Nur"
- [ ] Mobil uygulama

## 15.2 Ölçeklendirme Hazırlığı

### Teknik
- Serverless architecture (Vercel)
- Database indexing
- CDN caching
- Auto-scaling

### İçerik
- CMS/Admin panel
- Database-driven content
- Template sistemi
- Batch upload araçları

### Operasyonel
- Dokümantasyon
- Onboarding guides
- Support sistemi
- Monitoring alerts

---

# 16. TEKNİK ALTYAPI

## 16.1 Tech Stack

| Katman | Teknoloji | Neden |
|--------|-----------|-------|
| Framework | Next.js 14 | SSR/SSG, SEO friendly |
| Dil | TypeScript | Type safety |
| Stil | Tailwind CSS | Hızlı geliştirme |
| Animasyon | Framer Motion | Smooth UX |
| State | Zustand | Lightweight |
| Database | Supabase (Postgres) | Free tier, realtime |
| Auth | Supabase Auth | Email + OAuth |
| Medya | Cloudinary | Optimizasyon, CDN |
| Hosting | GitHub Pages → Vercel | Free, fast |
| Analytics | Mixpanel | Retention focus |
| Email | Resend | Developer friendly |
| Monitoring | Sentry | Error tracking |

## 16.2 Repository Yapısı

```
oluk-portal/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── _BRAIN/
│   └── core/
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── (tr)/
│   │   │   ├── page.tsx
│   │   │   ├── dersler/
│   │   │   └── ...
│   │   ├── (en)/
│   │   │   ├── page.tsx
│   │   │   ├── lessons/
│   │   │   └── ...
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── sections/
│   ├── lib/
│   │   ├── supabase.ts
│   │   ├── cloudinary.ts
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── hooks/
│   ├── stores/
│   ├── types/
│   └── i18n/
│       ├── tr.json
│       └── en.json
├── next.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

---

# 17. TAKVİM VE MİLESTONE'LAR

## 17.1 Haftalık Plan (Aralık 2024 - Ocak 2025)

| Hafta | Tarih | Milestone |
|-------|-------|-----------|
| 1 | 19-25 Aralık | Tek ders sayfası + Tek seans sayfası |
| 2 | 26-31 Aralık | Navigasyon + Footer + About |
| 3 | 1-7 Ocak | Auth sistemi + Profil sayfası |
| 4 | 8-14 Ocak | İngilizce versiyon başlangıç |
| 5 | 15-21 Ocak | Siber İnziva MVP |
| 6 | 22-28 Ocak | Test + Bug fix + Launch prep |
| 7 | 29 Ocak | **SOFT LAUNCH** |

## 17.2 Kritik Milestone'lar

| Tarih | Milestone | Başarı Kriteri |
|-------|-----------|----------------|
| 25 Aralık | MVP Web Ready | 5 ders sayfası yayında |
| 15 Ocak | Auth Ready | Kayıt/Giriş çalışıyor |
| 29 Ocak | Soft Launch | 100 beta kullanıcı |
| 15 Şubat | EN Launch | İngilizce versiyon yayında |
| 1 Mart | Public Launch | Marketing kampanyası |

---

# 📌 KONTROL LİSTESİ

## Her Push Öncesi
- [ ] Mobil test (3 boyut)
- [ ] Cross-browser test
- [ ] Console error yok
- [ ] Alt text kontrol
- [ ] SEO meta kontrol
- [ ] Build başarılı

## Her Hafta
- [ ] Analytics review
- [ ] Performance check
- [ ] Security scan
- [ ] Backup verify
- [ ] Content audit

## Her Ay
- [ ] SEO audit
- [ ] Accessibility audit
- [ ] Speed test
- [ ] User feedback review
- [ ] Roadmap update

---

# 🔗 KAYNAKLAR

| Kaynak | Link |
|--------|------|
| Canlı Site | https://oluk.org |
| GitHub | https://github.com/KemalG-u/oluk-portal |
| Cloudinary | Cloud: dzegofdgp |
| Claude Projects | OLUK Portal |
| Gemini Gem | OLUK Dil Ustası |
| Figma | (Tasarım dosyaları) |
| Notion | (Proje yönetimi) |

---

**Bu doküman yaşayan bir dokümandır ve sürekli güncellenecektir.**

**Son güncelleme:** 19 Aralık 2024  
**Versiyon:** 2.0
