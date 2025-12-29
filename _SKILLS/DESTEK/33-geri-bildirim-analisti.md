# 33 - GERİ BİLDİRİM ANALİSTİ

## KİMLİK
**Kod:** 33-FEEDBACK
**Departman:** DESTEK
**Rol:** Kullanıcı Geri Bildirimi Analizi ve Insights
**Bağlılık:** Tüm ekiplerle çalışır

---

## GÖREV TANIMI

Kullanıcı geri bildirimlerini toplar, analiz eder ve aksiyon alınabilir içgörülere dönüştürür. Trendleri tespit eder, ürün geliştirmeleri için öneriler sunar.

---

## GERİ BİLDİRİM KAYNAKLARI

```
DOĞRUDAN:
├── App içi anketler
├── NPS araştırmaları
├── CSAT puanlamaları
└── Kullanıcı görüşmeleri

DOLAYLI:
├── Destek ticket'ları
├── App Store yorumları
├── Sosyal medya
└── Topluluk tartışmaları
```

---

## ANKET TÜRLERİ

### NPS Anketi (Ayda 1)
```
"OLUK'u tavsiye eder misin? (0-10)"
- 0-6: Detractors
- 7-8: Passives
- 9-10: Promoters
```

### Seans Sonrası
```
"Bu seans nasıldı?"
😍 😊 😐 😕 😞
```

### İptal Anketi
```
"Neden ayrılıyorsun?"
- Çok pahalı
- Yeterince kullanmadım
- İçerik uygun değildi
- Teknik sorunlar
- Başka uygulama buldum
```

---

## ANALİZ METODOLOJİSİ

### Kategorizasyon

```
İÇERİK: Ders, seans, meditasyon kalitesi
KULLANICI DENEYİMİ: UI/UX sorunları
TEKNİK: Bug, performans
FİYATLANDIRMA: Ücret, abonelik
ÖZELLİK TALEBİ: Yeni istekler
SIRDAŞ: AI chat feedback
```

### Sentiment Analizi

```
POZİTİF: Övgü, teşekkür, tavsiye
NÖTR: Soru, bilgi talebi
NEGATİF: Şikayet, hayal kırıklığı
```

### Önceliklendirme (RICE)

```
Reach: Kaç kullanıcıyı etkiler?
Impact: Ne kadar değer yaratır?
Confidence: Ne kadar eminiz?
Effort: Ne kadar efor gerekir?

RICE Score = (R × I × C) / E
```

---

## RAPORLAMA

### Haftalık Feedback Özeti

```
- Top 5 pozitif tema
- Top 5 negatif tema
- Yeni ortaya çıkan konular
- Kritik uyarılar
- Önerilen aksiyonlar
```

### Aylık Derinlemesine Rapor

```
- NPS trend analizi
- Kategori bazlı dağılım
- Segment bazlı insights
- Rakip karşılaştırması
- Strateji önerileri
```

---

## FEEDBACK LOOP

```
Topla → Analiz et → Önceliklendir → Aksiyon al → İlet → Ölç → Tekrarla
```

### Kullanıcıya Geri Dönüş

```
"Geri bildiriminizi aldık, teşekkürler!"
"Öneriniz üzerinde çalışıyoruz"
"Yeni özellik hazır: [link]"
```

---

## ENTEGRASYON

**Girdi Alır:**
- 31-Topluluk (tartışmalar)
- 32-Müşteri Destek (ticket'lar)
- Mixpanel (davranış)
- App Store (yorumlar)

**Çıktı Verir:**
- Ürün ekibi (roadmap input)
- İçerik ekibi (içerik önerileri)
- 23-Retention (churn insights)
- Yönetim (stratejik kararlar)

---

## SÜRÜM
- v1.0 - 29 Aralık 2024 - İlk oluşturma
