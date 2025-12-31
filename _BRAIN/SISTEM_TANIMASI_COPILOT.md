# 🧠 OLUK SİSTEM TANIMI - GitHub Copilot İçin

**Tarih:** 31 Aralık 2025  
**Sürüm:** 1.0 - BAŞLANGIÇ HALİ  
**Amaç:** Copilot'un tüm sistem ve 143 çalışan/skill ile koordineli çalışmasını sağlamak

---

## I. SİSTEM GENEL BAKIŞ

### Mİmari
```
00-BEYİN (Kültür Muhafızı) - Merkez Hub
    ↓
    14 ANA DEPARTMAN
    ↓
    143 SKILL (çalışan/role)
    ↓
    3 TEKNIKL KATMAN (DB, API, UI)
    ↓
    5 DERS MODÜLÜ
    ↓
    20 ARINAMA MODÜLÜ
```

### Katmanlar
| Katman | Rol | Sorumluluk |
|--------|-----|-----------|
| **ÖRKESTRASYON** | 00-Beyin + Copilot | Koordinasyon, karar, yön |
| **DEPARTMAN** | 14 Başkanlık | Operasyon, iş akışı |
| **SKILL** | 143 Uzman | Teknik yürütme |
| **ALTYAPI** | Supabase, Next.js, Claude | Sistem ve veriler |
| **KONTENT** | Dersler, Arınma, Seans | Ürün ve hizmet |

---

## II. 143 SKILL ENVANTÜRÜ (KATEGORİSİ)

### A. YÖNETİM (5)
- 00: Kültür Muhafızı (HUB)
- 05: Acil Durum Koordinatörü
- 122: Veri Gizliliği Uzmanı
- 129: Marka Koruma Uzmanı
- 130: Sistem Entegratörü

### B. İÇERİK (44)
**Temel:** 01, 04, 07-15, 25-27, 34-43, 99-118, 125-126
- Araştırma (01, 04)
- Mufredat & Tasarım (08-11, 25)
- Yazarlık (26, 34-39, 42-43)
- Editörlük (12-14)
- Uzmanlaşma (07, 99-118: wellness, meditasyon, mindfulness vb.)

### C. KALİTE (6)
- 02: İçerik Denetçisi
- 16-17: QA, Versiyon Kontrol
- 18: Yayın Koordinatörü
- 119-121: Seans QC, İçerik Takvimi, Beta Test

### D. AI-OPS (11)
- 06: Master Prompt Mühendisi
- 19-21: Supabase, API, Performance
- 51-55: Güvenlik, DevOps, Model, Mobil, Erişilik
- 85, 94-95: Kişiselleştirme, NLP, Seans Motoru

### E. UX-PSİKOLOJİ (7)
- 03: NLP Danışmanı
- 22-24: Onboarding, Retention, Gamification
- 88, 92, 96-97: Bildirim, Dark Mode, Mood Tracker, İlerleme

### F. PAZARLAMA (12)
- 28-30: Sosyal Medya, İçerik Marketing, Growth
- 44-50: E-mail, Influencer, PR, Reklam, Partnership, Landing, Analytics
- 86-87: Push Notification, In-App Messaging

### G. BÜYÜME (9)
- 58-62: Topluluk, Referral, Lokalizasyon, ASO, Pricing
- 79-82: Geo, Sosyal Dinleme, Partnership, Affiliate
- 98: Sosyal Paylaşım

### H. DESTEK (7)
- 31-33: Topluluk Yönetimi, Müşteri Destek, Feedback
- 56-57: Kriz Müdahale, Kullanıcı Eğitimi
- 127-128: Moderatör, Destek Uzmanı

### I. STRATEJİ (9)
- 70-74: İçerik Planlama, Rakip Analiz, Araştırma, Roadmap, A/B Test
- 83-84: Segmentasyon, Churn Prevention
- 123-124: Raporlama, Rekabet İstihbaratı

### J. TEKNİK (8)
- 75-78: Webhook, DB, Cache/CDN, Error Tracking
- 89-91: Offline, Widget, Wearable

### K. PRODÜKSIYON (5)
- 66-69: Ses, Görsel, Video, Animasyon
- 93: Ses/Müzik Lisanslama

### L. FİNANS (3)
- 63-65: Ödeme, Muhasebe, Yasal/Uyum

### M. SEO (10)
- SEO-01-05: İçerik QC, Meta, Keywords, Yapı, Snippet
- SEO-06-10: Planlama, Tazeleyici, Kanibalizasyon, Otorite, Yazarlık

### N. TOPLULUK PROGRAMLARI (14)
**PROGRAMLAR/** alt klasörü:
- 100-113: Uyku, Stres/Kaygı, Odaklanma, Farkındalık, Nefes, Meditasyon, Rutin, Hareket, Öz-Şefkat, Şükran, Bağışlama, İlişki, Yaşam Geçişleri, Doğa Bağlantısı

---

## III. TEKNIK ALTYAPI

### Backend & Database
- **Supabase:** PostgreSQL, Auth, Real-time
- **API:** Next.js API routes, Claude API, Cloudinary
- **Monitoring:** Error tracking, performance logs

### Frontend
- **Framework:** Next.js 14, React, TypeScript
- **UI:** Tailwind, Framer Motion, Lucide/Phosphor icons
- **SEO:** Next.js metadata, sitemap, robots, feed

### AI/LLM
- **Models:** Claude (Sonnet, Haiku)
- **Integrasyonlar:** NLP, Custom prompts, Skill system
- **Analytics:** GA4, User tracking

---

## IV. KONTENT YAPISI

### Dersler (5)
1. **Kapı** (1) - Temel Arınma
   - 5 Seans: Menzil, Nefes, Tenin Sesi, Merkez, Mühür
   - Seans veri: `seans-data.ts`

2. **Ayna** (2) - Kendini Tanıma
   - 5 Seans (tanımlanmış, içerik bekleniyor)

3. **Köprü** (3) - Bağlantılar
   - 5 Seans (tanımlanmış, içerik bekleniyor)

4. **Işık** (4) - Aydınlanma
   - 5 Seans (tanımlanmış, içerik bekleniyor)

5. **Yol** (5) - Sürekli Yürüyüş
   - 5 Seans (tanımlanmış, içerik bekleniyor)

### Arınma Modülleri (9)
1. **Kapı** - Alt dersleri ve seans'ları (kapi/[ders]/[seans])
2. **Bilincaltı** - Placeholder
3. **Duygusal** - Placeholder
4. **Enerjetik** - Placeholder
5. **Fiziksel** - Abdest + içerik bekleniyor
6. **İlişkisel** - Placeholder
7. **Karmaşık** - Placeholder
8. **Zihinsel** - Placeholder

### Aktivasyon
- 7 bölüm + metadata mevcut, içerik bekleniyor

### Koruma
- Başlık ve açıklama var, içerik bekleniyor

---

## V. HALI HAZIR DURUM

### ✅ TAMAMLANDI
- GA4 entegrasyonu
- Server/client component split
- Metadata (Next.js generateMetadata)
- Sitemap, robots, feed otomasyonu
- Seans data yapısı (kapi için dolu)
- Build ve deployment pipeline

### ⚠️ DEVAM EDEN
- Arınma modüllerinin zenginleştirilmesi
- Ayna, Köprü, Işık, Yol derslerinin seans datası
- Aktivasyon ve Koruma modüllerinin içerikleri
- Skill'lerin birbirleriyle entegrasyonu

### ❌ EKSIK/GEREKLI
1. **Seans İçeriği Haritası:** Tüm dersler için transkript, pratik, video URL'leri
2. **Arınma Alt-modül İçeriği:** Her modül için seans akışı ve pratikler
3. **Skill Koordinasyonu:** API/prompt sistemi skillerin birbirini çağırmasını sağlasın
4. **Fallback UI:** Olmayan içerikte 404 yerine bilgilendirici sayfa
5. **Lokalizasyon Hazırlığı:** Çoklu dil yapısı
6. **Analytics Paneli:** İçerik performansı ve kullanıcı davranışı

---

## VI. COPILOT SORUMLULUK ÇIZELGESI

### Koordinasyon Düzeyi
| Görev | Kim | Copilot Rolü |
|-------|-----|-------------|
| Vizyonlar/Kararlar | Kullanıcı | Danışman |
| Uygulanabilirlik | Copilot | **LIDER** |
| Teknik İşler | 143 Skill | Yönetici |
| Kalite Kontrol | 02, 16, 119-121 | Koordinatör |
| Entegrasyon | 06, 20, 130 | **SORUMLU** |

### Başlıca Görevler
1. **Harita Çıkarma:** Skill → İş Akışı → Sorumlu → Deadline
2. **Eksik Tespiti:** Ne yapılmadı, neler gerekli, risk nedir
3. **Koordinasyon:** Skill'ler arası bağlantı, handoff, iletişim
4. **QA:** Tüm çalışmaların marka, standart ve amaçla uyumu
5. **Öneriler:** Geliştirme, optimizasyon, yeni fikirler

---

## VII. BAŞLANGIÇ AKSIYON PLANI

### Faz 1: Tanışma & Harita (Bu hafta)
- [ ] Tüm 143 skill dosyasını oku
- [ ] Her skill'in görevini, bağlantılarını, statüsünü dokümante et
- [ ] Departman-skill matrisini oluştur
- [ ] Eksik ve çakışan görevleri işaretle

### Faz 2: İçerik Tarama (Haftaya)
- [ ] Tüm ders ve arınma modüllerinin statüsünü kontrol et
- [ ] Seans data eksiklikleri listele
- [ ] Aktivasyon ve Koruma modüllerini doldur
- [ ] API/integrasyon kopya noktalarını tespit et

### Faz 3: Koordinasyon Sistemi (Yakında)
- [ ] Skill çağırma mekanizması (API/prompt)
- [ ] Hata yönetimi ve fallback
- [ ] Monitoring ve raporlama

### Faz 4: Operasyon (Bitmez)
- [ ] Hergün koordinasyon
- [ ] QA ve iyileştirmeler
- [ ] Yeni iş akışları

---

## VIII. İLETİŞİM KURALLARI

### Copilot ↔ Skill İletişimi
```
1. BAŞLAT: Skill ID + Görev + Deadline
2. KÜTÜPHANE: Seans data, ders yapısı, derse veri
3. İTERAT: Feedback, revize, onay
4. KAPACİ: Sonuç, Linkler, Dökümentasyon
```

### Skill ↔ Skill İletişimi
```
Sender → (01-araştırma) → (02-denetçi) → (16-QA) → (18-yayın)
         Rapor              Uyarı         Test       Yayınla
```

### Raporlama
- **Günlük:** Tamamlanan görevler, engelleyiciler
- **Haftalık:** Faz ilerleme, risk, tavsiye
- **Aylık:** Sistem sağlığı, KPI, rotasyon

---

## IX. BAŞARININ KRİTERİLERİ

| Kriter | Hedef | Şimdi |
|--------|-------|-------|
| Dersler Tamamlanma | 100% | 20% |
| Seans İçeriği | 100% | 5% |
| Skill Bilgisi (Copilot) | 100% | 0% |
| Koordinasyon Otomasyonu | 80% | 0% |
| Build/Deploy Başarısı | 100% | ✅ |
| Kullanıcı Memnuniyeti | 4.5+ | TBD |

---

## X. NOTLAR & UYARıLAR

⚠️ **CRİTİK:**
- Seans transkriptleri ve pratikleri yazılmadı (50+ saat iş)
- Arınma modülleri yapı hazır ama içerik yok (30+ saat)
- Skill'ler çoğu tanımda sadece başlık (entegrasyon gerekli)

💡 **FIRSATlar:**
- 143 skill'in birbiriyle harita çıkart → workflow otomatizasyonu
- Boş modüller → template'lerle hızlı doldur
- Copilot sistemin merkezine koy → tüm hızlı kararlar

🚀 **Hemen Başlanabilir:**
- Seans data yapısını diğer dersler için genişlet
- Arınma modüllerine temel içerik şablonu ekle
- Skill'ler için kurucu harita + bağlantı API'si

---

**Hazırız mı? Başlayalım!** 🎯

