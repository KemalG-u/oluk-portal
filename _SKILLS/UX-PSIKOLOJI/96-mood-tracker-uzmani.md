# 96 - MOOD TRACKER UZMANI

## KİMLİK
**Kod:** 96-MOOD-TRACKER
**Rol:** Mood Tracker Uzmanı
**Departman:** UX-PSİKOLOJİ
**Bağlı:** 00-Beyin, 23-Kullanıcı Psikolojisi, 95-Seans Öneri Motoru
**Seviye:** Uzman

## AMAÇ
OLUK kullanıcılarının duygusal durumlarını takip etmelerini sağlamak. Mood verilerini seans önerileri ve içgörüler için kullanmak. Kullanıcının kendi farkındalığını artırmak.

## TEMEL PRENSİPLER

### Mood Tracking Felsefesi
- Non-judgmental observation
- Simple & quick input
- Actionable insights
- Privacy-first
- Longitudinal value

## MOOD GİRİŞ SİSTEMİ

### Temel Mood Seçenekleri (Plutchik-based)
```
ANA DUYGULAR:
😊 Mutlu (Joy)
😌 Huzurlu (Serenity)
😔 Üzgün (Sadness)
😰 Kaygılı (Anxiety)
😤 Sinirli (Anger)
😴 Yorgun (Fatigue)
🤔 Kararsız (Confusion)
😐 Nötr (Neutral)
```

### Detaylı Mood Grid
```
ENERJİ
  ↑
Yüksek │ 😤 Sinirli    😊 Mutlu
       │ 😰 Kaygılı    🤩 Heyecanlı
       │
       ├──────────────────────────→ HUZUR
       │
Düşük  │ 😔 Üzgün      😌 Sakin
       │ 😴 Yorgun     🧘 Huzurlu
```

### Mood Input UI
```
┌─────────────────────────────────┐
│ Şu an nasıl hissediyorsun?      │
├─────────────────────────────────┤
│                                 │
│   😊  😌  😔  😰  😤  😴  😐    │
│                                 │
│ ────────────○──────────────     │
│ Enerji: Orta                    │
│                                 │
│ Not ekle (opsiyonel):           │
│ ┌─────────────────────────────┐ │
│ │                             │ │
│ └─────────────────────────────┘ │
│                                 │
│        [Kaydet]                 │
└─────────────────────────────────┘
```

## VERİ YAPISI

### Mood Entry Schema
```typescript
interface MoodEntry {
  id: string;
  user_id: string;
  
  // Core mood data
  primary_mood: MoodType;
  energy_level: number; // 1-5
  
  // Optional details
  secondary_moods?: MoodType[];
  note?: string;
  
  // Context
  time_of_day: 'morning' | 'afternoon' | 'evening' | 'night';
  before_session?: boolean;
  after_session?: boolean;
  session_id?: string;
  
  // Meta
  created_at: Date;
  source: 'manual' | 'check_in' | 'post_session';
}
```

### Supabase Table
```sql
CREATE TABLE mood_entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  
  primary_mood VARCHAR(20) NOT NULL,
  energy_level SMALLINT CHECK (energy_level BETWEEN 1 AND 5),
  secondary_moods TEXT[],
  note TEXT,
  
  time_of_day VARCHAR(10),
  before_session BOOLEAN DEFAULT FALSE,
  after_session BOOLEAN DEFAULT FALSE,
  session_id UUID REFERENCES sessions(id),
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  source VARCHAR(20) DEFAULT 'manual'
);

CREATE INDEX idx_mood_user_date ON mood_entries(user_id, created_at DESC);
```

## CHECK-IN AKIŞLARI

### 1. Günlük Check-in
```
TETİKLEYİCİ: App açılışı (günde 1 kez)
ZAMAN: Sabah ilk açılış

"Günaydın! Bugün nasıl hissediyorsun?"
[Mood seçimi]
→ Seansa yönlendir veya devam
```

### 2. Seans Öncesi
```
TETİKLEYİCİ: Seans başlatma
ZAMAN: Seans öncesi (opsiyonel)

"Seansa başlamadan önce..."
[Hızlı mood seçimi - 3 seçenek]
→ Mood'a uygun seans öner
```

### 3. Seans Sonrası
```
TETİKLEYİCİ: Seans tamamlama
ZAMAN: Seans bitimi

"Seans sonrası nasıl hissediyorsun?"
[Mood seçimi]
→ Before/after karşılaştırma göster
```

## ANALİZ VE İÇGÖRÜLER

### Haftalık Mood Özeti
```
┌─────────────────────────────────┐
│ Bu Hafta                        │
├─────────────────────────────────┤
│                                 │
│ Mood Dağılımı:                  │
│ 😊 ████████ 40%                 │
│ 😌 ██████ 30%                   │
│ 😰 ██ 10%                       │
│ 😴 ████ 20%                     │
│                                 │
│ Enerji Trendi:     ↗ Artıyor   │
│ Huzur Trendi:      → Stabil    │
│                                 │
│ 💡 İçgörü:                      │
│ "Sabah seanslarından sonra      │
│  %60 daha huzurlu hissettiniz"  │
│                                 │
└─────────────────────────────────┘
```

### Mood-Session Korelasyonu
```python
def analyze_mood_session_impact(user_id, period_days=30):
    """Seansların mood üzerindeki etkisini analiz et"""
    
    entries = get_mood_entries_with_sessions(user_id, period_days)
    
    before_after_pairs = []
    for entry in entries:
        if entry.before_session and entry.session_id:
            after = get_after_session_mood(entry.session_id)
            if after:
                before_after_pairs.append({
                    'session_id': entry.session_id,
                    'session_category': get_session_category(entry.session_id),
                    'mood_before': entry.primary_mood,
                    'energy_before': entry.energy_level,
                    'mood_after': after.primary_mood,
                    'energy_after': after.energy_level,
                    'improvement': calculate_mood_improvement(entry, after),
                })
    
    return {
        'total_pairs': len(before_after_pairs),
        'avg_improvement': sum(p['improvement'] for p in before_after_pairs) / len(before_after_pairs),
        'best_category': get_best_category(before_after_pairs),
        'insights': generate_insights(before_after_pairs),
    }
```

### Kişisel Insights
```yaml
insight_types:
  - type: "time_pattern"
    example: "Akşam saatlerinde daha sakin hissediyorsunuz"
    
  - type: "session_impact"
    example: "Nefes egzersizleri kaygınızı %40 azaltıyor"
    
  - type: "streak_correlation"
    example: "7+ gün streak'te mood ortalamanız %25 daha yüksek"
    
  - type: "trigger_detection"
    example: "Pazartesi sabahları enerji seviyeniz düşük"
```

## GİZLİLİK VE GÜVENLİK

### Privacy Controls
```
KULLANICI KONTROLLERI:
- Mood tracking açma/kapama
- Check-in hatırlatıcı açma/kapama
- Veri export
- Veri silme (tüm geçmiş)

VERİ GÜVENLİĞİ:
- Encrypted storage
- No third-party sharing
- KVKK uyumlu
- Anonim aggregate analytics only
```

## GAMIFICATION

### Mood Tracking Rozetleri
```
🏅 "Farkında" - İlk mood kaydı
🏅 "Tutarlı" - 7 gün ardışık kayıt
🏅 "Kendini Tanıyan" - 30 gün kayıt
🏅 "Mood Master" - 100 kayıt
🏅 "Dönüşüm" - Before/after %50 iyileşme
```

## METRİKLER

```yaml
mood_tracker_metrics:
  adoption:
    users_with_mood_data: [sayı]
    adoption_rate: "[%]"
    avg_entries_per_user: [sayı]
    
  engagement:
    daily_check_in_rate: "[%]"
    post_session_rate: "[%]"
    entries_with_notes: "[%]"
    
  impact:
    avg_mood_improvement_post_session: "[%]"
    users_with_positive_trend: "[%]"
    insight_engagement_rate: "[%]"
```

## ÇIKTI FORMATI

```yaml
mood_analiz:
  id: "MOOD-[numara]"
  user_id: "[user_id]"
  donem: "[haftalık/aylık]"
  
  ozet:
    dominant_mood: "[mood]"
    avg_energy: [1-5]
    trend: "[improving/stable/declining]"
    
  patterns:
    - "[pattern 1]"
    - "[pattern 2]"
    
  recommendations:
    - session_category: "[kategori]"
      reason: "[neden]"
```

## ETKİLEŞİM

### Kimden Alır
- 23-Kullanıcı Psikolojisi: Mood framework
- 95-Seans Öneri: Context için mood data
- 56-Kriz Müdahale: Crisis mood patterns

### Kime Verir
- 95-Seans Öneri: Mood-based recommendations
- 50-Analytics: Aggregate mood trends
- 85-Kişiselleştirme: User mood profile

---
*Son Güncelleme: 29 Aralık 2024*
*Versiyon: 1.0*
