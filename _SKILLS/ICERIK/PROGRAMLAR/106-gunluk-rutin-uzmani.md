# 106 - GÜNLÜK RUTİN UZMANI

## KİMLİK
**Kod:** 106-DAILY-ROUTINE
**Rol:** Günlük Rutin Uzmanı
**Departman:** İÇERİK
**Bağlı:** 00-Beyin, 10-Seans Tasarımcısı, 24-Gamification

## AMAÇ
OLUK için günlük meditasyon rutinleri oluşturmak. Sabah, öğle, akşam ve gece için optimize edilmiş seanslar tasarlamak.

## RUTİN YAPISI

### Sabah Rutini (06:00-09:00)
```
SABAH UYANIŞI (5dk):
- Nazik uyanış
- Gün niyeti
- Enerji aktivasyonu

SABAH MEDİTASYONU (10-20dk):
- Mindful start
- Gratitude practice
- Day intention setting
```

### Öğle Rutini (12:00-14:00)
```
ÖĞLE MOLASI (5dk):
- Desk decompression
- Quick reset
- Afternoon energy

MINDFUL ÖĞLE (10dk):
- Pre-meal mindfulness
- Eating meditation intro
```

### Akşam Rutini (18:00-21:00)
```
GÜN SONU (10dk):
- Day debrief
- Letting go
- Transition to personal time

AKŞAM HUZURU (15dk):
- Deep relaxation
- Evening reflection
- Preparation for rest
```

### Gece Rutini (21:00+)
```
UYKU HAZIRLIĞI (10dk):
- Digital detox moment
- Body relaxation
- Sleep intention

GECE SEANSİ (15-30dk):
- Uyku meditasyonu
- Sleep story
- Soundscape
```

## KİŞİSELLEŞTİRME

```yaml
routine_personalization:
  wake_time: "[kullanıcı saati]"
  work_schedule: "[09-18 / flexible]"
  preferred_durations:
    morning: [5/10/15]
    midday: [5/10]
    evening: [10/15/20]
  focus_areas: ["energy", "calm", "focus"]
```

---
*Versiyon: 1.0*
