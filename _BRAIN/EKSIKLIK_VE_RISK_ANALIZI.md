# 🔍 OLUK SİSTEM EKSİKLİK & RİSK ANALİZİ

**Tarih:** 31 Aralık 2025  
**Analiz Tipi:** Kapsamlı Teknik & İş Denetimi  
**Seviyesi:** ÜRGENSİ YÜKSEK

---

## I. KONTENT EKSİKLİKLERİ (ADET & SAATİ)

### A. SEANS İÇERİĞİ - CRİTİK

| Ders | Seans # | Durum | Gerekli İş |
|------|---------|-------|-----------|
| **Kapı** | 5 | ✅ Full (transkript + pratik) | 0h |
| **Ayna** | 5 | ❌ Başlık sadece | Title, transkript, pratik, video URL |
| **Köprü** | 5 | ❌ Başlık sadece | Title, transkript, pratik, video URL |
| **Işık** | 5 | ❌ Başlık sadece | Title, transkript, pratik, video URL |
| **Yol** | 5 | ❌ Başlık sadece | Title, transkript, pratik, video URL |
| **TOPLAM** | **25** | **80% ❌** | **~40 saat** (5 seans × 4 ders × 2 saat) |

### B. ARINAMA MODÜLLERİ - ORTA RİSK

| Modül | Statü | Eksik | Saat |
|-------|-------|-------|------|
| Kapı | Kısmen (alt dersler, seans yapısı var) | Seans pratikleri | 8h |
| Bilincaltı | Placeholder | Tümü | 20h |
| Duygusal | Placeholder | Tümü | 20h |
| Enerjetik | Placeholder | Tümü | 20h |
| Fiziksel | Kısmen (abdest, 1 ders) | Diğer modüller | 16h |
| İlişkisel | Placeholder | Tümü | 20h |
| Karmaşık | Placeholder | Tümü | 20h |
| Zihinsel | Placeholder | Tümü | 20h |
| **TOPLAM** | **12% ✅** | **164 saatlik içerik** | **~164h** |

### C. AKTİVASYON MOD - DÜŞÜK RİSK

| Bölüm # | Durum | Eksik |
|---------|-------|-------|
| 7 bölüm | Metadata + başlık var | İçerik (her bölüme ~1000 kelime × 0.5h) |
| | | ~3.5 saat |

### D. KORUMA MOD - DÜŞÜK RİSK

| Modül | Durum | Eksik |
|-------|-------|-------|
| Koruma | Liste + başlık | İçerik (~2 saat) |

### E. TOPLAM KONTENT RİSKİ
```
Kritik (Seans):    40 saat
Orta (Arınma):    164 saat
Düşük (Aktivasyon + Koruma): 5.5 saat
─────────────────────────────
TOPLAM:           209.5 saat = ~5.2 iş haftası
```

---

## II. TEKNIK EKSİKLİKLERİ

### A. SEANS DATA ENTEGRASYONU - HIGH

**Problem:**
- `seans-data.ts` yalnızca `kapi` slug'unda dolu
- Diğer slug'lar (ayna, kopru, isik, yol) boş → notFound()

**Etki:**
```
⚠️ Kullanıcı ayna/1 'e giterse 404 yiyor
⚠️ SEO zarar (boş sayfalar)
⚠️ User experience kötü
```

**Çözüm:**
- [ ] `seans-data.ts` yapısı extend et (tüm slug'lar)
- [ ] Mock/placeholder seans verisi ekle
- [ ] Fallback sayfa (bilgilendirici, "çok yakında")

**Tahmini Saat:** 4h (data yapısı + type'lar + 4× slug)

### B. ARINAMA MODÜL SLUGİ - MEDIUM

**Problem:**
- `/dersler/arinma/kapi/[slug]/[seans]` yapısı başlangıç
- `bilincalti`, `duygusal` vb. için rota yok
- Router konfigurasyon eksik

**Çözüm:**
- [ ] Arınma alt-modüleri için slug şablonu kopyala
- [ ] Metadata ve seans data linkle
- [ ] Route structure standardize et

**Tahmini Saat:** 6h (router setup + copy + test)

### C. API/DATABASE BAĞLANTI - MEDIUM

**Problem:**
- Skill'ler veriye erişebiliyor mi? (Supabase entegrasyonu kontrol edilmedi)
- Seans tamamlama (POST `/api/sir/seans-complete`) hangal skill'i yönetiyor?
- Analytics (GA4 + custom events) setup kontrol edilmedi

**Çözüm:**
- [ ] Supabase skemalarını kontrol et (seans_complete, user_progress)
- [ ] API route'ları test et
- [ ] Analytics event'lerini harita çıkar

**Tahmini Saat:** 8h (audit + test + doc)

### D. FALLBACK & ERROR HANDLING - LOW

**Problem:**
- Olmayan seans → notFound() → 404
- Olmayan ders → metadata boş

**Çözüm:**
- [ ] Bilgilendirici fallback sayfası
- [ ] Smart redirect (en yakın mevcut sayfaya)
- [ ] Error boundary component

**Tahmini Saat:** 3h

### E. LOKALIZASYON (TÜRKÇEh) - LOW

**Problem:**
- Sistem Türkçe hardcoded
- Çoklu dil hazırlığı yok

**Çözüm:**
- İmmediate: Türkçe sabit tutun
- Future: i18n setup (3+ hafta)

### F. TOPLAM TEKNİK RİSKİ
```
High:   Seans data entegrasyon → 4h
Medium: Arınma router + API     → 14h
Low:    Fallback + error        → 3h
─────────────────────────────────────
TOPLAM: 21 saat teknik
```

---

## III. SKILL/ORGANİZASYON EKSİKLİKLERİ

### A. SKILL TANIMLAMASI - MEDIUM

| Durum | Count | Sorun | Puan |
|-------|-------|-------|------|
| Tam dokümante | 20 | Yok | 100% |
| Kısmi/Başlık | 100 | Prompt eksik, kaynaklar boş | 30% |
| Boş | 23 | Tanım yok | 0% |

**Eksik Skill'ler (No Desc):**
- ICERIK/PROGRAMLAR/ (14 dosya)
- Bazı SEO skill'leri
- Bazı AI-OPS skill'leri

**Çözüm:**
- [ ] Tüm skill'ler için prompt + amaç + output format yazılsın
- [ ] Her skill için bağlantı (upstream/downstream skills)
- [ ] Entegrasyon kütüphanesi kurulacak

**Tahmini Saat:** 40h (143 skill × 15-20 dk)

### B. SKILL ENTEGRASYONU (API) - HIGH

**Problem:**
- Skill'ler şu an izole markdown'lar
- Skill'ler arasında veri akışı yok
- Örn: 01-Araştırmacı → 02-Denetçi el sıkışması otomasyonu yok

**Çözüm:**
- [ ] Skill activation sistemi (prompt API)
- [ ] Data passing (JSON, context)
- [ ] Status tracking (pending, in-progress, done)
- [ ] Error recovery

**Tahmini Saat:** 24h (API design + implementation + test)

### C. KOORDINASYON DASHBOARD - LOW

**Problem:**
- Skill'lerin çalışma durumunu izlemek zor
- Bottleneck'ler görünür değil
- Deadline tracking yok

**Çözüm:**
- [ ] Simple admin dashboard
- [ ] Skill status (todo/doing/done)
- [ ] Timeline view
- [ ] Dependency graph

**Tahmini Saat:** 12h (Next.js page + Supabase queries + UI)

### D. TOPLAM ORG RİSKİ
```
Skill prompt completion:   40h
Skill API integration:     24h
Coordination dashboard:    12h
─────────────────────────────────
TOPLAM: 76 saat
```

---

## IV. YAPAY ZEKÁ & ENTEGRASYON RİSKİ

### A. CLAUDE MODEL SINIRI

**Problem:**
- 143 skill × complex prompt = token kullanımı yüksek
- Sonnet vs Haiku seçimi (hız vs kalite)

**İçer Plan:**
- Sonnet: Kritik görevler (content review, research)
- Haiku: Teknik (SEO, optimization, tagging)
- Cache kullan (context reuse)

**Maliyet:** ~$500-2000/ay beklenti

### B. PROMPT İNJEKSİYON RİSKİ

**Problem:**
- User-generated content → prompt'a verilirse injection riski
- Seans transkriptleri, kullanıcı yorumları

**Çözüm:**
- Input sanitization
- Jailbreak detection
- Content filtering

**Tahmini Saat:** 4h

### C. TOPLAM AI RİSKİ
```
Model strategy:  Documented ✅
Injection:       4 saat fix gerekli
İzleme:         Monitoring setup (GA4) ✅
```

---

## V. ÇAKIŞMA & KOPYA RISK

### A. Skill Çakışmaları
```
02-İçerik Denetçisi vs SEO-01-İçerik Denetçisi
  → Ayrım netleştirilmeli (genel vs SEO-specific)

28-Sosyal Medya vs 98-Sosyal Paylaşım
  → Biribirinin alt görevi mi, parallel mi?

01-Derin Araştırmacı vs 72-Kullanıcı Araştırması
  → Academic vs user research ayrımı
```

**Çözüm:** RACI matrix oluştur (8h)

### B. Veri Kopyalaması
```
Seans data:
  - src/app/dersler/[slug]/[seans]/seans-data.ts
  - _BRAIN/config/ (var mı?)
  - Supabase (var mı?)
```

**Çözüm:** Single source of truth (Supabase) kur (12h)

---

## VI. RİSK MATRISI (P × I)

| Risk | Probability | Impact | Score | Öncelik |
|------|-------------|--------|-------|---------|
| Seans data eksikliği | HIGH | HIGH | 9 | 🔴 |
| Skill entegrasyonu yok | HIGH | MEDIUM | 6 | 🔴 |
| Arınma routing | MEDIUM | MEDIUM | 4 | 🟠 |
| Fallback UI yok | MEDIUM | LOW | 2 | 🟡 |
| Model token overflow | MEDIUM | MEDIUM | 4 | 🟠 |
| Skill prompt eksikliği | HIGH | MEDIUM | 6 | 🔴 |

---

## VII. EYLEMLİ PLAN (İLK 30 GÜN)

### HFT 1 (31 Dec - 6 Jan)
- [ ] Tüm skill'leri oku + harita çıkar (20h)
- [ ] Seans data ext yapı design (4h)
- [ ] Arınma slug pattern kopyala (6h)
**Cumul:** 30h

### HFT 2 (7 - 13 Jan)
- [ ] Seans data AYNA/KOPRU/ISIK/YOL populate (12h)
- [ ] API test + Supabase schema audit (8h)
- [ ] RACI matrix + skill coordinates (8h)
**Cumul:** 28h (58h total)

### HFT 3 (14 - 20 Jan)
- [ ] Skill API activation sistemi (16h)
- [ ] Fallback UI + error handling (4h)
- [ ] Koordinasyon dashboard MVP (8h)
**Cumul:** 28h (86h total)

### HFT 4 (21 - 27 Jan)
- [ ] Aktivasyon + Koruma modül kontent (5h)
- [ ] Arınma modüller template + temel content (16h)
- [ ] QA, testing, dokumentasyon (8h)
**Cumul:** 29h (115h total)

---

## VIII. BAŞLAMA KARARINDA BİLGİLENDİRİLMİŞ YORUM

**OLUMLU:**
✅ Teknik altyapı (Next.js, Supabase, GA4) solid
✅ Tasarım ve UX başlangıcı iyi
✅ Build pipeline çalışıyor
✅ Skill framework tanımlanmış

**NEGATİF:**
❌ Kontent 95% boş (209.5 saat iş)
❌ Skill'ler entegre değil (76 saat iş)
❌ Seans data yapısı scaled değil (21 saat iş)
❌ Koordinasyon sistemi manuel

**TAHMÎN:**
- **Minumum MVP:** 2 haft (tanım, temel kontent doldur)
- **Tam sistem:** 4-6 hafta (tüm modüller, entegrasyon, test)
- **Üretim hazı:** 3 ay (skill otomasyonu, monitoring, optimization)

**BAŞLAYACAK MISINIZ?** 🚀

