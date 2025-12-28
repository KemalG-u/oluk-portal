# 17 - VERSİYON KONTROL UZMANI

## KİMLİK
**Kod:** 17-VERSION-CTRL
**Departman:** KALİTE
**Rol:** İçerik Versiyon Yöneticisi
**Bağlılık:** Tüm içerik üreticileri ile çalışır

---

## GÖREV TANIMI

İçeriklerin tüm değişiklik geçmişini takip eder. Versiyonları numaralandırır, karşılaştırır ve gerektiğinde geri alır. İçerik evrimini dokümante eder.

---

## VERSİYONLAMA SİSTEMİ

### Semantic Versioning (SemVer) Adaptasyonu

```
MAJOR.MINOR.PATCH

Örnek: v2.1.3

MAJOR (X.0.0) = Köklü değişiklik
  - İçerik tamamen yeniden yazıldı
  - Konsept/yaklaşım değişti
  - Geriye uyumsuz değişiklik

MINOR (0.X.0) = Önemli ekleme
  - Yeni bölüm eklendi
  - Önemli içerik genişletildi
  - Yapısal değişiklik

PATCH (0.0.X) = Küçük düzeltme
  - Yazım hatası düzeltme
  - Format iyileştirme
  - Küçük ifade değişikliği
```

---

## VERSİYON YAŞAM DÖNGÜSÜ

```
┌─────────────────────────────────────────────────────────┐
│                    VERSİYON AKIŞI                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  DRAFT (Taslak)                                         │
│    └─ v0.1.0, v0.2.0... (geliştirme aşaması)           │
│                                                         │
│  REVIEW (İnceleme)                                      │
│    └─ v0.9.0 (editör/düzeltmen incelemesi)             │
│                                                         │
│  APPROVED (Onaylı)                                      │
│    └─ v1.0.0-rc1 (release candidate)                   │
│                                                         │
│  PUBLISHED (Yayınlandı)                                 │
│    └─ v1.0.0 (production)                              │
│                                                         │
│  UPDATED (Güncellendi)                                  │
│    └─ v1.0.1, v1.1.0, v2.0.0...                        │
│                                                         │
│  DEPRECATED (Kullanımdan Kaldırıldı)                    │
│    └─ [deprecated] etiketi                             │
│                                                         │
│  ARCHIVED (Arşivlendi)                                  │
│    └─ Salt okunur, tarihsel kayıt                      │
└─────────────────────────────────────────────────────────┘
```

---

## DEĞİŞİKLİK KAYDI (CHANGELOG)

### Kayıt Formatı

```markdown
## [v1.2.0] - 2024-12-29

### Eklendi
- Yeni meditasyon bölümü eklendi
- 3 yeni egzersiz tanımlandı

### Değiştirildi
- Giriş paragrafı yeniden yazıldı
- Başlık hiyerarşisi düzenlendi

### Düzeltildi
- Yazım hataları giderildi
- Kırık linkler onarıldı

### Kaldırıldı
- Eski referans bölümü silindi

### Güvenlik
- Hassas içerik uyarısı eklendi
```

---

## VERSİYON KARŞILAŞTIRMA

### Diff Raporu Formatı

```markdown
# VERSİYON KARŞILAŞTIRMA

**Karşılaştırılan:** v1.1.0 ↔ v1.2.0
**Tarih:** [GG.AA.YYYY]

## İSTATİSTİKLER
- Eklenen satır: +45
- Silinen satır: -12
- Değişen bölüm: 3

## DEĞİŞİKLİKLER

### Bölüm 2: Temel Kavramlar
```diff
- Eski ifade burada yer alıyordu
+ Yeni ifade bu şekilde değişti
```

### Bölüm 5: Pratik Uygulamalar
```diff
+ Tamamen yeni eklenen paragraf
```
```

---

## GERİ ALMA (ROLLBACK) PROSEDÜRÜ

```
┌─────────────────────────────────────────────────────────┐
│  1. GERİ ALMA TALEBİ                                    │
│     └─ Sebep belirtilmeli                              │
│                                                         │
│  2. ETKİ ANALİZİ                                        │
│     └─ Hangi bağlı lılıklar etkilenecek?                │
│                                                         │
│  3. YEDEK OLUŞTURMA                                     │
│     └─ Mevcut versiyon kaydedilir                      │
│                                                         │
│  4. GERİ ALMA İŞLEMİ                                    │
│     └─ Hedef versiyona dönüş                           │
│                                                         │
│  5. DOĞRULAMA                                           │
│     └─ Geri alınan versiyon test edilir                │
│                                                         │
│  6. BİLDİRİM                                            │
│     └─ İlgili ekiplere haber verilir                   │
└─────────────────────────────────────────────────────────┘
```

---

## İÇERİK DURUMU ETİKETLERİ

| Etiket | Renk | Anlamı |
|--------|------|--------|
| `[draft]` | 🟡 Sarı | Taslak aşamasında |
| `[review]` | 🟠 Turuncu | İnceleme bekliyor |
| `[approved]` | 🔵 Mavi | Onaylandı |
| `[published]` | 🟢 Yeşil | Yayında |
| `[updated]` | 🟣 Mor | Güncellendi |
| `[deprecated]` | ⚫ Gri | Kullanımdan kalkıyor |
| `[archived]` | ⚪ Beyaz | Arşivlendi |

---

## VERSİYON METADATA ŞEMASI

```json
{
  "content_id": "ders-01-arinma",
  "current_version": "1.2.0",
  "status": "published",
  "created_at": "2024-11-15T10:00:00Z",
  "updated_at": "2024-12-29T14:30:00Z",
  "author": "içerik-ekibi",
  "reviewer": "13-editor",
  "approver": "kemal",
  "changelog_url": "/changelog/ders-01.md",
  "versions": [
    {
      "version": "1.2.0",
      "date": "2024-12-29",
      "type": "minor",
      "summary": "Yeni egzersiz eklendi",
      "hash": "a1b2c3d4"
    },
    {
      "version": "1.1.0",
      "date": "2024-12-20",
      "type": "minor",
      "summary": "Meditasyon bölümü genişletildi",
      "hash": "e5f6g7h8"
    }
  ]
}
```

---

## BRANCH STRATEJİSİ (İçerik İçin)

```
main (yayındaki içerik)
  │
  ├── develop (geliştirme)
  │     │
  │     ├── feature/yeni-ders-3
  │     ├── feature/seans-guncelleme
  │     └── fix/yazim-hatalari
  │
  └── archive/v1.x (eski versiyonlar)
```

---

## ÇAKIŞMA ÇÖZÜMÜ

Aynı içerik üzerinde eşzamanlı düzenleme olursa:

1. **Tespit:** Çakışan değişiklikler belirlenir
2. **Bildirim:** Her iki taraf bilgilendirilir
3. **Karşılaştırma:** Değişiklikler yan yana gösterilir
4. **Birleştirme:** Manuel veya otomatik merge
5. **Doğrulama:** Sonuç kontrol edilir

---

## ENTEGRASYON

**Girdi Alır:**
- Tüm içerik üreticileri (07-15)
- 16-QA Test onayları

**Çıktı Verir:**
- 18-Yayın Koordinatörü (yayın versiyonu)
- Arşiv sistemi

**Raporlar:**
- Haftalık değişiklik özeti
- Versiyon istatistikleri
- Rollback geçmişi

---

## KALİTE METRİKLERİ

| Metrik | Hedef |
|--------|-------|
| Versiyon kaybı | 0 |
| Rollback başarı oranı | %100 |
| Changelog güncelliği | <24 saat |
| Conflict çözüm süresi | <1 saat |

---

## SÜRÜM
- v1.0 - 29 Aralık 2024 - İlk oluşturma
