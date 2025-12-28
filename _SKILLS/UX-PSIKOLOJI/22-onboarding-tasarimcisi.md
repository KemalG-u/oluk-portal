# 22 - ONBOARDING TASARIMCISI

## KİMLİK
**Kod:** 22-ONBOARDING
**Departman:** UX-PSİKOLOJİ
**Rol:** İlk Deneyim Mimarı
**Bağlılık:** Retention ve Gamification ile yakın çalışır

---

## GÖREV TANIMI

Kullanıcının platformla ilk temasından itibaren 7 gün boyunca yaşayacağı deneyimi tasarlar. Aktivasyon metriklerini optimize eder, ilk "aha moment"i hızlandırır.

---

## İLK 7 GÜN HARİTASI

```
┌─────────────────────────────────────────────────────────────────┐
│                     ONBOARDING JOURNEY                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  GÜN 0 (Kayıt)                                                  │
│  ├─ Minimal form (sadece email + şifre)                        │
│  ├─ Hoş geldin ekranı (değer önerisi)                          │
│  └─ İlk soru: "Seni buraya getiren neydi?"                     │
│                                                                 │
│  GÜN 1 (Keşif)                                                  │
│  ├─ Platform turu (3 adım, skip edilebilir)                    │
│  ├─ İlk mini-seans (2 dk nefes egzersizi)                      │
│  ├─ Sırdaş tanıtımı                                            │
│  └─ 🎯 AHA MOMENT: "Bu farklı hissettiriyor"                   │
│                                                                 │
│  GÜN 2 (Deneyim)                                                │
│  ├─ Ders 1 başlangıç                                           │
│  ├─ Push notification izni (değer gösterdikten sonra)          │
│  └─ Streak başlangıcı                                          │
│                                                                 │
│  GÜN 3 (Alışkanlık)                                             │
│  ├─ Hatırlatma zamanı seçimi                                   │
│  ├─ İlk seans tamamlama                                        │
│  └─ İlk rozet: "İlk Adım" 🏅                                   │
│                                                                 │
│  GÜN 4-5 (Derinleşme)                                           │
│  ├─ Sırdaş ile ilk derin sohbet                                │
│  ├─ Kişiselleştirilmiş içerik önerileri                        │
│  └─ Topluluk keşfi (okuma modunda)                             │
│                                                                 │
│  GÜN 6-7 (Bağlanma)                                             │
│  ├─ Haftalık özet                                              │
│  ├─ İlerleme gösterimi                                         │
│  ├─ Premium teaser (nazik, baskısız)                           │
│  └─ 🎯 KARAR NOKTASI: Devam mı, premium mı?                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## AKTİVASYON METRİKLERİ

### North Star Metric
**D7 Retention:** %16+ (sektör ortalaması %13)

### Activation Events (Sıralı)
```
1. signup_completed → Kayıt tamamlandı
2. first_session_played → İlk seans izlendi (2+ dk)
3. sirdas_first_message → Sırdaş'a ilk mesaj
4. lesson_1_started → Ders 1 başlandı
5. notification_enabled → Bildirim izni verildi
6. streak_day_2 → 2. gün geri geldi
7. lesson_1_completed → Ders 1 tamamlandı
```

### Activation Rate Hedefi
```
signup → first_session: >80%
first_session → sirdas_message: >50%
sirdas_message → lesson_started: >70%
lesson_started → day_2_return: >60%
day_2_return → day_7_active: >40%
```

---

## ONBOARDING AKIŞI

### Adım 1: Kayıt Ekranı
```
┌────────────────────────────────────────┐
│                                        │
│           🌊 OLUK                      │
│     Akışın Kanalı, Dönüşümün Yolu     │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │  Email                           │  │
│  └──────────────────────────────────┘  │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │  Şifre                           │  │
│  └──────────────────────────────────┘  │
│                                        │
│  [      Yolculuğa Başla      ]        │
│                                        │
│  ─────── veya ───────                  │
│                                        │
│  [G] Google ile devam et              │
│                                        │
└────────────────────────────────────────┘

NOT: Minimal bilgi. Ad-soyad sonra alınacak.
```

### Adım 2: Niyet Belirleme
```
┌────────────────────────────────────────┐
│                                        │
│  Seni buraya getiren neydi?            │
│  (Birden fazla seçebilirsin)           │
│                                        │
│  ○ Stres ve kaygıyla başa çıkmak      │
│  ○ Daha iyi uyumak                     │
│  ○ İç huzur bulmak                     │
│  ○ Kendimi tanımak                     │
│  ○ Spiritüel gelişim                   │
│  ○ Sadece merak ettim                  │
│                                        │
│  [          Devam          ]           │
│                                        │
└────────────────────────────────────────┘

NOT: Bu veri Arif Sistemi için kullanılacak.
```

### Adım 3: İlk Deneyim
```
┌────────────────────────────────────────┐
│                                        │
│  Başlamadan önce...                    │
│                                        │
│  2 dakikalık bir nefes pratiği ile    │
│  kendini hissetmeye ne dersin?         │
│                                        │
│  🎧 Kulaklık takmayı unutma           │
│                                        │
│  [     ▶ Başla     ]                  │
│                                        │
│  [Sonra yaparım]                       │
│                                        │
└────────────────────────────────────────┘

NOT: Skip seçeneği göster ama vurgulama.
```

### Adım 4: Sırdaş Tanıtımı
```
┌────────────────────────────────────────┐
│                                        │
│  Sırdaş ile tanış                      │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │  🤍                              │  │
│  │                                  │  │
│  │  "Merhaba! Ben Sırdaş.          │  │
│  │   Seninle bu yolda yürümek      │  │
│  │   için buradayım.               │  │
│  │                                  │  │
│  │   Ne hissediyorsan, paylaş."    │  │
│  └──────────────────────────────────┘  │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │  Bir şeyler yaz...               │  │
│  └──────────────────────────────────┘  │
│                                        │
└────────────────────────────────────────┘
```

---

## PROGRESSİF PROFILING

Bilgileri aşamalı topla, kullanıcıyı bunaltma:

| Gün | Toplanan Bilgi | Neden |
|-----|----------------|-------|
| 0 | Email, şifre | Kayıt için minimum |
| 0 | Niyet (çoklu seçim) | Kişiselleştirme |
| 2 | Ad | Sırdaş'ın kullanması için |
| 3 | Bildirim tercihi | Engagement |
| 5 | Doğum yılı (opsiyonel) | Yaş grubu analizi |
| 7 | Premium ilgi | Conversion |

---

## FRICTION AZALTMA

### Yapılacaklar
```
✓ Sosyal login (Google)
✓ Email doğrulama sonraya bırak (7. gün)
✓ Ödeme bilgisi isteme (premium geçişte)
✓ Minimum form alanı
✓ Her adımda "Sonra" seçeneği
✓ İlerleme göstergesi
```

### Yapılmayacaklar
```
✗ Uzun anket
✗ Telefon numarası isteme
✗ Zorunlu bildirim izni
✗ Hemen premium satış
✗ CAPTCHA (gerekmedikçe)
✗ Email doğrulama engelleyici
```

---

## ONBOARDING MESAJLARI

### Push Notifications (Gün Bazlı)

**Gün 1 (Akşam):**
> "İlk adımını attın. Yarın devam etmeye ne dersin?"

**Gün 2 (Sabah - seçilen saatte):**
> "Günaydın! 2 dakikalık bir nefesle güne başla."

**Gün 3 (Akşam):**
> "2 günlük serin başladı! Kaybetme. 🔥"

**Gün 5 (Öğlen):**
> "Sırdaş seni merak ediyor. Bugün nasılsın?"

**Gün 7 (Sabah):**
> "İlk haftanı tamamladın! 🎉 Özetine göz at."

---

## A/B TEST ÖNERİLERİ

| Test | Varyant A | Varyant B | Metrik |
|------|-----------|-----------|--------|
| Kayıt CTA | "Başla" | "Ücretsiz Başla" | signup_rate |
| İlk seans | 2 dk nefes | 5 dk meditasyon | completion_rate |
| Niyet sorusu | Tek seçim | Çoklu seçim | D1_retention |
| Sırdaş timing | Hemen göster | Gün 2'de göster | D7_sirdas_usage |

---

## ENTEGRASYON

**Girdi Alır:**
- 03-NLP Danışmanı (dil analizi)
- 23-Retention Stratejisti (tutundurma hedefleri)

**Çıktı Verir:**
- 24-Gamification (rozet trigger'ları)
- Mixpanel (activation events)
- n8n (email workflow trigger)

---

## SÜRÜM
- v1.0 - 29 Aralık 2024 - İlk oluşturma
