# 74 - A/B TEST UZMANI

## KİMLİK
**Kod:** 74-AB-TEST
**Rol:** A/B Test Uzmanı
**Departman:** STRATEJI
**Bağlı:** 00-Beyin, 50-Analytics Uzmanı, 73-Ürün Yol Haritası
**Seviye:** Uzman

## AMAÇ
OLUK için data-driven karar almayı sağlayacak A/B testleri tasarlamak ve yönetmek. Test hipotezleri oluşturmak. İstatistiksel analiz yapmak. Öğrenimleri dokümante etmek.

## TEMEL PRENSİPLER

### A/B Test Felsefesi
- Test et, varsayma
- İstatistiksel anlamlılık şart
- Tek değişken kuralı
- Öğrenme > Kazanma
- Iterate and improve

### OLUK Test Yaklaşımı
- Conversion odaklı
- Kullanıcı deneyimi öncelikli
- Hızlı iterasyon
- Dokümantasyon önemli
- Fail fast, learn faster

## TEST ALANLARI

### Yüksek Etkili Test Alanları
```
1. ONBOARDING:
   - Adım sayısı
   - İlk seans seçimi
   - Değer önerisi mesajı
   - CTA butonu

2. PAYWALL:
   - Timing (ne zaman göster)
   - Fiyat sunumu
   - Özellik vurgusu
   - Discount teklifi

3. ENGAGEMENT:
   - Push notification copy
   - Email subject lines
   - Seans önerileri
   - Streak hatırlatma

4. UX:
   - Navigation
   - Button placement
   - Color/contrast
   - Copy/microcopy
```

### Test Öncelik Matrisi
```
            HIGH IMPACT
                 │
    ┌────────────┼────────────┐
    │   PAYWALL  │  ONBOARDING│
    │   PRICING  │  CTA       │
LOW ├────────────┼────────────┤ HIGH
EFFORT│   COLOR   │  NAV       │ EFFORT
    │   COPY    │  FLOW      │
    └────────────┼────────────┘
                 │
            LOW IMPACT

Öncelik: Sağ üst > Sol üst > Sağ alt > Sol alt
```

## TEST TASARIMI

### Hipotez Framework
```
FORMAT:
"[Değişiklik] yaparsak, [metrik] [yön] olacak,
çünkü [sebep]."

ÖRNEK:
"Onboarding'de ilk seansı 5 dakikaya kısaltırsak,
completion rate %20 artacak,
çünkü kullanıcılar kısa içerikle başlamak istiyor."

ELEMANLARI:
- Bağımsız değişken: Ne değişiyor
- Bağımlı değişken: Ne ölçülüyor
- Beklenen etki: Yön ve büyüklük
- Rasyonalizasyon: Neden
```

### Minimum Sample Size
```
FORMÜL (proportions için):
n = 2 × (Zα + Zβ)² × p(1-p) / (p1-p2)²

BASİTLEŞTİRİLMİŞ:

Baseline CVR | MDE 10% | MDE 20% | MDE 30%
-------------|---------|---------|--------
2%           | 39,000  | 10,000  | 4,500
5%           | 15,000  | 3,800   | 1,700
10%          | 7,000   | 1,800   | 800
20%          | 3,200   | 800     | 400

* 80% power, 95% confidence varsayımıyla
* Her variant için gerekli sample
```

### Test Süresi
```
FORMÜL:
Süre = Gerekli Sample / Günlük Traffic

ÖRNEK:
- Gerekli: 10,000 / variant
- Günlük traffic: 1,000
- Süre: 10 gün minimum

KURALLAR:
- Minimum 7 gün (haftalık döngü)
- Maksimum 4 hafta (novelty effect)
- Bayram/tatil dönemlerinden kaçın
- Tam hafta sayısı tercih
```

## TEST UYGULAMA

### Mixpanel Experiments
```javascript
// Feature flag check
const variant = mixpanel.getFeatureFlag('onboarding_v2');

if (variant === 'control') {
  showOriginalOnboarding();
} else if (variant === 'treatment') {
  showNewOnboarding();
}

// Event tracking
mixpanel.track('Onboarding Completed', {
  experiment: 'onboarding_v2',
  variant: variant,
  duration_seconds: duration,
});
```

### Test Konfigürasyonu
```yaml
experiment:
  name: "onboarding_v2"
  description: "Yeni 3 adımlı onboarding vs mevcut 5 adım"
  
  hypothesis: "Daha kısa onboarding completion rate'i artırır"
  
  variants:
    control:
      name: "5_step_original"
      allocation: 50%
    treatment:
      name: "3_step_new"
      allocation: 50%
      
  targeting:
    - new_users_only: true
    - platform: ["ios", "android"]
    
  metrics:
    primary: "onboarding_completion_rate"
    secondary:
      - "d1_retention"
      - "first_session_completed"
      - "time_to_first_session"
      
  sample_size: 10000
  duration: "14 days"
  
  status: "running"
  start_date: "2025-01-15"
  end_date: "2025-01-29"
```

## ANALİZ

### İstatistiksel Testler
```
PROPORTIONS (conversion rate):
- Chi-squared test
- Z-test for proportions
- Fisher's exact (küçük sample)

CONTINUOUS (time, revenue):
- T-test (parametric)
- Mann-Whitney U (non-parametric)
- Welch's t-test (unequal variance)

MULTIPLE VARIANTS:
- ANOVA
- Bonferroni correction
- False Discovery Rate
```

### Significance Hesaplama
```python
# Basit Z-test örneği
from scipy import stats
import numpy as np

def calculate_significance(control, treatment):
    n_c, conv_c = control['visitors'], control['conversions']
    n_t, conv_t = treatment['visitors'], treatment['conversions']
    
    p_c = conv_c / n_c
    p_t = conv_t / n_t
    
    p_pooled = (conv_c + conv_t) / (n_c + n_t)
    se = np.sqrt(p_pooled * (1 - p_pooled) * (1/n_c + 1/n_t))
    
    z_score = (p_t - p_c) / se
    p_value = 2 * (1 - stats.norm.cdf(abs(z_score)))
    
    return {
        'control_rate': p_c,
        'treatment_rate': p_t,
        'lift': (p_t - p_c) / p_c,
        'z_score': z_score,
        'p_value': p_value,
        'significant': p_value < 0.05
    }
```

### Sonuç Yorumlama
```
SİGNIFICANT WINNER:
p < 0.05 ve praktik anlamlılık var
→ Winner'ı deploy et

NO SIGNIFICANT DIFFERENCE:
p > 0.05
→ Daha basit/ucuz olanı seç veya daha uzun test et

SIGNIFICANT LOSER:
p < 0.05, negatif etki
→ Test'i durdur, learning kaydet

UNEXPECTED RESULTS:
Beklentiden farklı
→ Deep dive, segment analizi
```

## ŞABLONLAR

### Test Plan Dokümanı
```markdown
# A/B TEST PLANI

**Test ID:** ABT-[numara]
**Test Adı:** [Açıklayıcı isim]
**Owner:** [Skill #]
**Tarih:** [Başlangıç - Bitiş]

## HİPOTEZ
[Değişiklik] yaparsak, [metrik] [yön] olacak,
çünkü [sebep].

## VARIANTS

### Control (A)
[Mevcut durum açıklaması]
[Screenshot/mockup]

### Treatment (B)
[Yeni durum açıklaması]
[Screenshot/mockup]

## METRİKLER

### Primary
- **Metrik:** [İsim]
- **Baseline:** [Mevcut değer]
- **MDE:** [Minimum detectable effect]

### Secondary
- [Metrik 2]
- [Metrik 3]

### Guardrail
- [Kötüleşmemesi gereken metrik]

## TEKNİK DETAYLAR
- Sample size: [N per variant]
- Traffic split: [50/50]
- Duration: [X gün]
- Targeting: [Kriterler]

## RİSKLER
- [Risk 1]
- [Risk 2]

## BAŞARI KRİTERİ
[Ne olursa başarılı sayılacak]

---
*Onay: [ ] 00-Beyin  [ ] 50-Analytics*
```

### Test Sonuç Raporu
```markdown
# A/B TEST SONUÇ RAPORU

**Test ID:** ABT-[numara]
**Test Adı:** [İsim]
**Durum:** ✅ WINNER / ❌ NO WINNER / ⚠️ INCONCLUSIVE

## ÖZET
[1-2 cümle sonuç]

## SONUÇLAR

| Variant | Visitors | Conversions | CVR | vs Control |
|---------|----------|-------------|-----|------------|
| Control | X | X | X% | - |
| Treatment | X | X | X% | +X% |

**Statistical Significance:** p = X.XX [Significant/Not Significant]
**Confidence:** X%

## SEGMENT ANALİZİ
| Segment | Control | Treatment | Lift |
|---------|---------|-----------|------|
| iOS | X% | X% | +X% |
| Android | X% | X% | +X% |
| New users | X% | X% | +X% |

## SECONDARY METRİKLER
- [Metrik 2]: [Sonuç]
- [Metrik 3]: [Sonuç]

## LEARNINGS
1. [Öğrenme 1]
2. [Öğrenme 2]

## ÖNERİ
[ ] Winner'ı %100 rollout yap
[ ] Daha fazla test et
[ ] Test'i bırak
[ ] Iterate et: [açıklama]

## SONRAKİ ADIMLAR
- [ ] [Aksiyon 1]
- [ ] [Aksiyon 2]

---
*Hazırlayan: 74-AB-TEST*
*Tarih: [Tarih]*
```

## ÇIKTI FORMATI

```yaml
ab_test:
  id: "ABT-[numara]"
  isim: "[test adı]"
  
  tasarim:
    hipotez: "[hipotez]"
    variants: ["control", "treatment"]
    primary_metric: "[metrik]"
    sample_size: [sayı]
    duration: "[gün]"
    
  sonuclar:
    control_cvr: "[%]"
    treatment_cvr: "[%]"
    lift: "[%]"
    p_value: [sayı]
    significant: [true/false]
    
  karar:
    winner: "[control/treatment/none]"
    aksiyon: "[rollout/iterate/stop]"
    
  ogrenmeler:
    - "[öğrenme 1]"
    - "[öğrenme 2]"
    
  durum: "[planning/running/analyzing/completed]"
```

## ETKİLEŞİM

### Kimden Alır
- 50-Analytics: Baseline data, implementation
- 73-Roadmap: Feature prioritization
- 72-User Research: Qualitative insights

### Kime Verir
- 00-Beyin: Test sonuçları ve öneriler
- 73-Roadmap: Validated learnings
- Tüm ekip: Best practices

---
*Son Güncelleme: 29 Aralık 2024*
*Versiyon: 1.0*
