# 23 - RETENTION STRATEJİSTİ

## KİMLİK
**Kod:** 23-RETENTION
**Departman:** UX-PSİKOLOJİ
**Rol:** Kullanıcı Tutundurma Uzmanı
**Bağlılık:** Onboarding ve Gamification ile yakın çalışır

---

## GÖREV TANIMI

Kullanıcıların platforma geri dönmesini ve aktif kalmasını sağlayan stratejiler geliştirir. Churn riskini tespit eder, müdahale eder. Uzun vadeli bağlılık oluşturur.

---

## RETENTION METRİKLERİ

### Hedefler (Sektör Kıyaslaması)

| Metrik | OLUK Hedef | Sektör Ort. | En İyi |
|--------|------------|-------------|--------|
| D1 Retention | %45 | %35 | %50 |
| D7 Retention | %25 | %16 | %30 |
| D30 Retention | %12 | %8 | %15 |
| D90 Retention | %6 | %4 | %8 |

### Kohort Analizi Şablonu
```
           D1    D7    D14   D30   D60   D90
Hafta 1:   45%   25%   18%   12%   8%    6%
Hafta 2:   47%   27%   19%   13%   -     -
Hafta 3:   44%   24%   17%   -     -     -
Hafta 4:   48%   28%   -     -     -     -
```

---

## CHURN TAHMİN MODELİ

### Risk Skorlama

```typescript
function calculateChurnRisk(user: User): number {
  let riskScore = 0;
  
  // Son aktivite
  const daysSinceActive = getDaysSince(user.last_active_at);
  if (daysSinceActive > 3) riskScore += 20;
  if (daysSinceActive > 7) riskScore += 30;
  if (daysSinceActive > 14) riskScore += 50;
  
  // Engagement düşüşü
  const weeklyTrend = getWeeklyEngagementTrend(user.id);
  if (weeklyTrend < -30) riskScore += 25;
  
  // Streak kırılması
  if (user.streak_days === 0 && user.previous_streak > 7) {
    riskScore += 20;
  }
  
  // Sırdaş kullanımı
  const sırdasUsage = getSırdasMessagesThisWeek(user.id);
  if (sırdasUsage === 0) riskScore += 10;
  
  // Premium durumu
  if (!user.is_premium && user.trial_ended) {
    riskScore += 15;
  }
  
  return Math.min(riskScore, 100);
}

// Risk Seviyeleri
// 0-30: Düşük risk (yeşil)
// 31-60: Orta risk (sarı)
// 61-80: Yüksek risk (turuncu)
// 81-100: Kritik risk (kırmızı)
```

---

## RE-ENGAGEMENT KAMPANYALARI

### 1. Streak Koruma

```
TRIGGER: Streak kırılma riski (son 2 saat aktif değil)

MESAJ (Push):
"Bugün için sadece 2 dakika! 🔥 {streak_days} günlük serini korumaya değer."

TIMING: Kullanıcının tercih ettiği saat - 2 saat
```

### 2. Win-Back (Kayıp Kullanıcı)

```
SEGMENT: 7+ gün inaktif

GÜN 7:
Subject: "Seni özledik"
Body: "Son görüşmemizden bu yana neler değişti? 
       Yeni {new_content_count} içerik seni bekliyor."

GÜN 14:
Subject: "Bir şeyler mi oldu?"
Body: "Bazen ara vermek gerekir. 
       Hazır olduğunda buradayız."

GÜN 30:
Subject: "Son bir merhaba"
Body: "Hesabın hâlâ aktif. Dönmek istersen...
       [Tekrar Başla]"
```

### 3. Milestone Kutlama

```
TRIGGERS:
- 7 gün streak → "İlk hafta tamam! 🎉"
- 21 gün streak → "21 gün! Alışkanlık oluştu 💪"
- 30 gün streak → "Bir ay boyunca her gün! Harikasın 🏆"
- 100 ders tamamlama → "100. ders! Master seviyesi 👑"
- 1 yıl üyelik → "1 yıldır birlikteyiz ❤️"
```

---

## LOSS AVERSION TAKTİKLERİ

### Streak Kaybı Önleme
```
"7 günlük serini kaybetmek üzeresin!
 Son 3 saat. Sadece 1 seans yeter."

[🔥 Seriyi Koru]
```

### İlerleme Gösterimi
```
"Arınma fazında %78 ilerleme.
 Koruma fazına 2 ders kaldı!"

 ████████████░░░ 78%
```

### Premium Avantaj Hatırlatma (Premium kullanıcılar için)
```
"Bu ay premium içeriklerden 12 seans izledin.
 Normal fiyatla 348₺ değerinde!"
```

---

## ENGAGEMENT DÖNGÜSÜ

```
┌─────────────────────────────────────────────────────────┐
│                 DAİLY ENGAGEMENT LOOP                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  TRIGGER (Tetikleyici)                                  │
│  └─ Sabah bildirimi / Streak hatırlatma                │
│                                                         │
│         ↓                                               │
│                                                         │
│  ACTION (Aksiyon)                                       │
│  └─ App'i aç / Seansa başla                            │
│                                                         │
│         ↓                                               │
│                                                         │
│  VARIABLE REWARD (Değişken Ödül)                        │
│  └─ Günün sözü / Yeni içerik / İlerleme                │
│                                                         │
│         ↓                                               │
│                                                         │
│  INVESTMENT (Yatırım)                                   │
│  └─ Not alma / Sırdaş sohbeti / Rozet                  │
│                                                         │
│         ↓                                               │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Sonraki gün için TRIGGER hazırla               │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## SEGMENT BAZLI STRATEJİLER

### Segment 1: Yeni Kullanıcılar (0-7 gün)
```
ODAK: Aktivasyon ve ilk aha moment
TAKTİK:
- Günlük nazik hatırlatmalar
- İlk seans tamamlama teşviki
- Sırdaş tanıtımı
HEDEF: D7 retention >25%
```

### Segment 2: Keşifçiler (8-30 gün)
```
ODAK: Alışkanlık oluşturma
TAKTİK:
- Streak mekanikleri aktif
- Kişiselleştirilmiş içerik önerileri
- Haftalık özet emaili
HEDEF: D30 retention >12%
```

### Segment 3: Düzenli Kullanıcılar (31-90 gün)
```
ODAK: Derinleştirme ve premium
TAKTİK:
- İleri seviye içerik açılımı
- Topluluk özellikleri
- Premium değer gösterimi
HEDEF: Premium conversion >5%
```

### Segment 4: Sadık Kullanıcılar (90+ gün)
```
ODAK: Savunuculuk ve LTV maksimizasyonu
TAKTİK:
- Özel içerik erişimi
- Referral programı
- VIP deneyimler
HEDEF: NPS >50
```

---

## HAFTALIK ENGAGEMENT TAKVİMİ

| Gün | İçerik | Amaç |
|-----|--------|------|
| Pazartesi | Haftalık tema tanıtımı | Yeni başlangıç motivasyonu |
| Salı | Derinleşme seansı | Engagement artırma |
| Çarşamba | Sırdaş check-in | Duygusal bağ |
| Perşembe | Yeni içerik bildirimi | Merak uyandırma |
| Cuma | Hafta sonu hazırlığı | Sürdürülebilirlik |
| Cumartesi | Özgür keşif | Baskısız deneyim |
| Pazar | Haftalık özet + sonraki hafta teaser | Döngü kapatma |

---

## CHURN MÜDAHALELERİ

### Otomatik Müdahaleler

| Risk Skoru | Aksiyon | Kanal |
|------------|---------|-------|
| 31-50 | Nazik hatırlatma | Push |
| 51-70 | Kişisel email | Email |
| 71-85 | Özel teklif | Email + Push |
| 86-100 | Sırdaş özel mesajı | In-app |

### Manuel Müdahale Tetikleyicileri
```
- Premium iptal talebi
- Negatif feedback
- Sosyal medya şikayeti
- 30+ gün premium inaktivite
```

---

## ANALİTİK DASHBOARD

### Günlük İzleme
```
DAU / WAU / MAU
DAU/MAU Ratio (stickiness)
Session süresi (ortalama)
Seans tamamlama oranı
Streak dağılımı
```

### Haftalık İzleme
```
Kohort retention eğrileri
Churn riski dağılımı
Re-engagement kampanya performansı
NPS skoru
```

### Aylık İzleme
```
LTV hesaplaması
CAC/LTV oranı
Premium conversion funnel
Segment büyüme oranları
```

---

## ENTEGRASYON

**Girdi Alır:**
- 22-Onboarding (aktivasyon verileri)
- Mixpanel (davranış verileri)
- Arif Sistemi (kullanıcı profili)

**Çıktı Verir:**
- n8n (kampanya trigger'ları)
- 24-Gamification (ödül stratejisi)
- Sırdaş (kişiselleştirilmiş mesajlar)

---

## SÜRÜM
- v1.0 - 29 Aralık 2024 - İlk oluşturma
