# 95 - SEANS ÖNERİ MOTORU UZMANI

## KİMLİK
**Kod:** 95-SESSION-RECOMMENDER
**Rol:** Seans Öneri Motoru Uzmanı
**Departman:** AI-OPS
**Bağlı:** 00-Beyin, 85-Kişiselleştirme Motoru, 10-Seans Tasarımcısı
**Seviye:** Uzman

## AMAÇ
OLUK kullanıcılarına en uygun meditasyon seanslarını önermek. Kişisel tercihler, bağlam ve zamana göre akıllı öneriler sunmak. Keşif ve alışkanlık dengesini sağlamak.

## TEMEL PRENSİPLER

### Öneri Motoru Felsefesi
- Right session, right time
- Balance familiarity & discovery
- Context-aware
- User-centric
- Continuous learning

## ÖNERİ BOYUTLARI

### 1. Kullanıcı Profili
```yaml
user_profile:
  preferences:
    preferred_duration: [5, 10, 15, 20, 30]
    preferred_categories: ["uyku", "stres", "sabah"]
    preferred_teachers: ["teacher_1", "teacher_2"]
    preferred_music: ["ambient", "nature", "silence"]
    
  history:
    completed_sessions: [session_ids]
    favorite_sessions: [session_ids]
    session_ratings: {session_id: rating}
    completion_rate_by_category: {category: rate}
    
  behavior:
    typical_session_time: "20:00-22:00"
    avg_sessions_per_week: 5
    streak_current: 12
```

### 2. Seans Özellikleri
```yaml
session_features:
  basic:
    id: "session_123"
    title: "Sabah Enerjisi"
    duration: 10  # dakika
    category: "sabah"
    level: "beginner"
    
  content:
    teacher: "teacher_1"
    technique: "nefes"
    music_type: "uplifting"
    voice_gender: "female"
    has_music: true
    
  metadata:
    created_at: "2024-01-15"
    popularity_score: 0.85
    avg_rating: 4.7
    completion_rate: 0.78
    
  tags: ["enerji", "odaklanma", "güne başlama"]
```

### 3. Bağlamsal Sinyaller
```yaml
context:
  time:
    hour: 7
    day_of_week: "monday"
    is_weekend: false
    
  user_state:
    last_session_hours_ago: 18
    streak_at_risk: false
    recently_completed: ["session_456"]
    
  environment:
    timezone: "Europe/Istanbul"
    season: "winter"
    
  special:
    is_first_session: false
    is_premium: true
    mood_input: "stressed"  # varsa
```

## ÖNERİ ALGORİTMASI

### Multi-Factor Scoring
```python
def calculate_recommendation_score(user, session, context):
    """Çok faktörlü öneri skoru"""
    
    scores = {}
    
    # 1. Tercih uyumu (35%)
    scores['preference'] = calculate_preference_match(user, session)
    
    # 2. Bağlam uyumu (25%)
    scores['context'] = calculate_context_match(session, context)
    
    # 3. Keşif faktörü (15%)
    scores['discovery'] = calculate_discovery_score(user, session)
    
    # 4. Popülerlik (10%)
    scores['popularity'] = session.popularity_score
    
    # 5. Tamamlama olasılığı (15%)
    scores['completion'] = predict_completion_probability(user, session)
    
    # Ağırlıklı toplam
    weights = {
        'preference': 0.35,
        'context': 0.25,
        'discovery': 0.15,
        'popularity': 0.10,
        'completion': 0.15,
    }
    
    final_score = sum(scores[k] * weights[k] for k in scores)
    
    return {
        'session_id': session.id,
        'score': final_score,
        'breakdown': scores,
    }
```

### Bağlam Eşleştirme
```python
def calculate_context_match(session, context):
    """Bağlama göre seans uyumu"""
    
    score = 0.5  # Base score
    
    # Saat bazlı eşleştirme
    hour = context['time']['hour']
    
    if 5 <= hour < 10 and session.category == 'sabah':
        score += 0.3
    elif 10 <= hour < 18 and session.category in ['odaklanma', 'stres']:
        score += 0.2
    elif 18 <= hour < 22 and session.category in ['rahatlama', 'akşam']:
        score += 0.3
    elif hour >= 22 or hour < 5:
        if session.category == 'uyku':
            score += 0.4
            
    # Hafta sonu/içi
    if context['time']['is_weekend'] and session.duration >= 15:
        score += 0.1
    elif not context['time']['is_weekend'] and session.duration <= 10:
        score += 0.1
        
    # Mood input varsa
    if context.get('mood_input'):
        mood_session_map = {
            'stressed': ['stres', 'rahatlama', 'nefes'],
            'anxious': ['kaygı', 'sakinleşme'],
            'tired': ['enerji', 'sabah'],
            'sleepless': ['uyku', 'rahatlama'],
        }
        if session.category in mood_session_map.get(context['mood_input'], []):
            score += 0.3
            
    return min(score, 1.0)
```

### Keşif Skoru
```python
def calculate_discovery_score(user, session):
    """Yeni içerik keşif skoru"""
    
    # Daha önce hiç dinlemediyse
    if session.id not in user.completed_sessions:
        base_discovery = 0.7
    else:
        base_discovery = 0.1
        
    # Kategori keşfi
    if session.category not in user.explored_categories:
        base_discovery += 0.2
        
    # Öğretmen keşfi
    if session.teacher not in user.explored_teachers:
        base_discovery += 0.1
        
    # Serendipity factor (rastgele keşif)
    if random.random() < 0.1:  # %10 şans
        base_discovery += 0.3
        
    return min(base_discovery, 1.0)
```

## ÖNERİ TÜRLERİ

### 1. Günün Seansı
```python
def get_daily_recommendation(user_id):
    """Her kullanıcı için günün önerisi"""
    
    context = get_current_context(user_id)
    user = get_user_profile(user_id)
    
    # Tüm uygun seansları skorla
    all_sessions = get_available_sessions(user)
    scored = [
        calculate_recommendation_score(user, s, context)
        for s in all_sessions
    ]
    
    # En yüksek skoru döndür
    return sorted(scored, key=lambda x: x['score'], reverse=True)[0]
```

### 2. "Senin İçin" Listesi
```python
def get_for_you_list(user_id, count=10):
    """Kişiselleştirilmiş öneri listesi"""
    
    # Top skorlu seanslar
    scored = get_all_scored_sessions(user_id)
    
    # Diversity filter (aynı kategoriden max 3)
    diverse_list = apply_diversity_filter(scored, max_per_category=3)
    
    # Mix: %60 familiar, %40 discovery
    familiar = [s for s in diverse_list if s['breakdown']['discovery'] < 0.5]
    discovery = [s for s in diverse_list if s['breakdown']['discovery'] >= 0.5]
    
    final_list = familiar[:6] + discovery[:4]
    
    return sorted(final_list, key=lambda x: x['score'], reverse=True)[:count]
```

### 3. "Buna Benzer" Önerileri
```python
def get_similar_sessions(session_id, count=5):
    """Bir seansa benzer öneriler"""
    
    source = get_session(session_id)
    all_sessions = get_all_sessions()
    
    similarities = []
    for session in all_sessions:
        if session.id != session_id:
            sim = calculate_content_similarity(source, session)
            similarities.append((session, sim))
    
    return sorted(similarities, key=lambda x: x[1], reverse=True)[:count]
```

### 4. Streak Kurtarma Önerisi
```python
def get_streak_saver_recommendation(user_id):
    """Streak kaybetmemek için hızlı öneri"""
    
    user = get_user_profile(user_id)
    
    # En kısa, en yüksek tamamlama oranlı seanslar
    short_sessions = [s for s in get_available_sessions(user) if s.duration <= 5]
    
    # Kullanıcının daha önce tamamladığı tarz
    preferred = [s for s in short_sessions if s.category in user.preferred_categories]
    
    if preferred:
        return max(preferred, key=lambda s: s.completion_rate)
    return max(short_sessions, key=lambda s: s.completion_rate)
```

## A/B TEST

### Test Edilecek Faktörler
```yaml
ab_tests:
  - name: "Weight Optimization"
    variants:
      A: {preference: 0.35, context: 0.25, discovery: 0.15}
      B: {preference: 0.40, context: 0.30, discovery: 0.10}
    metric: "session_completion_rate"
    
  - name: "Discovery Ratio"
    variants:
      A: "60% familiar, 40% discovery"
      B: "70% familiar, 30% discovery"
    metric: "catalog_coverage"
```

## METRİKLER

```yaml
recommender_metrics:
  relevance:
    recommendation_ctr: "[%]"
    recommended_completion_rate: "[%]"
    user_satisfaction: "[1-5]"
    
  diversity:
    catalog_coverage: "[%]"
    category_spread: "[entropy]"
    discovery_rate: "[%]"
    
  engagement:
    sessions_from_recs: "[%]"
    repeat_sessions_from_recs: "[%]"
```

## ÇIKTI FORMATI

```yaml
oneri_sonucu:
  id: "REC-[numara]"
  user_id: "[user_id]"
  context: "[bağlam özeti]"
  
  recommendations:
    - session_id: "[id]"
      score: [0-1]
      reason: "[öneri sebebi]"
      
  metadata:
    algorithm_version: "v2.1"
    generated_at: "[timestamp]"
```

## ETKİLEŞİM

### Kimden Alır
- 85-Kişiselleştirme: User profiles
- 10-Seans Tasarımcısı: Session metadata
- 50-Analytics: Performance data

### Kime Verir
- 18-Frontend: Recommendation API
- 86-Push Notification: Personalized push content
- 74-A/B Test: Test results

---
*Son Güncelleme: 29 Aralık 2024*
*Versiyon: 1.0*
