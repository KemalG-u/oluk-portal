# 19 - SUPABASE MİMARI

## KİMLİK
**Kod:** 19-SUPABASE-ARCH
**Departman:** AI-OPS
**Rol:** Veritabanı Mimarı ve Yöneticisi
**Bağlılık:** Tüm veri gerektiren sistemlerle çalışır

---

## GÖREV TANIMI

OLUK platformunun Supabase altyapısını tasarlar, yönetir ve optimize eder. Veritabanı şemalarını oluşturur, RLS politikalarını tanımlar, real-time özellikleri yapılandırır.

---

## VERİTABANI ŞEMASI

### CORE TABLOLAR

```sql
-- KULLANICILAR
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  avatar_url TEXT,
  phase INTEGER DEFAULT 1, -- 1:Arınma, 2:Koruma, 3:Aktivasyon, 4:İleri
  level INTEGER DEFAULT 1,
  xp INTEGER DEFAULT 0,
  streak_days INTEGER DEFAULT 0,
  last_active_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- DERSLER
CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phase INTEGER NOT NULL,
  order_num INTEGER NOT NULL,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  content JSONB,
  duration_minutes INTEGER,
  is_premium BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- SEANSLAR
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID REFERENCES lessons(id),
  title TEXT NOT NULL,
  type TEXT CHECK (type IN ('meditation', 'breathwork', 'visualization', 'practice')),
  audio_url TEXT,
  duration_seconds INTEGER,
  script JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- KULLANICI İLERLEMESİ
CREATE TABLE user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES lessons(id),
  session_id UUID REFERENCES sessions(id),
  status TEXT CHECK (status IN ('not_started', 'in_progress', 'completed')),
  completed_at TIMESTAMPTZ,
  time_spent_seconds INTEGER DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id, session_id)
);

-- ROZETLER
CREATE TABLE badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  icon_url TEXT,
  criteria JSONB, -- {"type": "streak", "value": 7}
  xp_reward INTEGER DEFAULT 0
);

-- KULLANICI ROZETLERİ
CREATE TABLE user_badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  badge_id UUID REFERENCES badges(id),
  earned_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, badge_id)
);
```

### SIRDAŞ (AI CHAT) TABLOLARI

```sql
-- SIRDAŞ OTURUMLARI
CREATE TABLE sirdas_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  ended_at TIMESTAMPTZ,
  message_count INTEGER DEFAULT 0,
  mood_start TEXT,
  mood_end TEXT
);

-- SIRDAŞ MESAJLARI
CREATE TABLE sirdas_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES sirdas_sessions(id) ON DELETE CASCADE,
  role TEXT CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  tokens_used INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- SIRDAŞ İÇGÖRÜLERİ
CREATE TABLE sirdas_insights (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  insight_type TEXT, -- 'pattern', 'recommendation', 'milestone'
  content JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### ARİF SİSTEMİ TABLOLARI

```sql
-- KULLANICI PROFİLİ (Psikolojik)
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE,
  big_five JSONB, -- {"openness": 0.7, "conscientiousness": 0.8, ...}
  attachment_style TEXT,
  polyvagal_state TEXT,
  enneagram_type INTEGER,
  spiritual_level TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RİSK OLAYLARI
CREATE TABLE risk_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  risk_type TEXT, -- 'crisis', 'distress', 'stagnation'
  severity INTEGER CHECK (severity BETWEEN 1 AND 5),
  detected_at TIMESTAMPTZ DEFAULT NOW(),
  resolved_at TIMESTAMPTZ,
  action_taken TEXT
);

-- POLİVAGAL DURUMLAR
CREATE TABLE polyvagal_states (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  state TEXT CHECK (state IN ('ventral_vagal', 'sympathetic', 'dorsal_vagal')),
  detected_at TIMESTAMPTZ DEFAULT NOW(),
  context TEXT
);
```

---

## ROW LEVEL SECURITY (RLS)

```sql
-- RLS Aktifleştirme
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE sirdas_messages ENABLE ROW LEVEL SECURITY;

-- Kullanıcı kendi verisini görür
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);

-- İlerleme politikaları
CREATE POLICY "Users can view own progress" ON user_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON user_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Sırdaş mesaj politikaları
CREATE POLICY "Users can view own messages" ON sirdas_messages
  FOR SELECT USING (
    session_id IN (
      SELECT id FROM sirdas_sessions WHERE user_id = auth.uid()
    )
  );
```

---

## REAL-TIME SUBSCRIPTIONS

```typescript
// Kullanıcı ilerleme güncellemesi dinleme
const progressSubscription = supabase
  .channel('user-progress')
  .on(
    'postgres_changes',
    {
      event: 'INSERT',
      schema: 'public',
      table: 'user_progress',
      filter: `user_id=eq.${userId}`
    },
    (payload) => {
      handleProgressUpdate(payload.new);
    }
  )
  .subscribe();

// Rozet kazanma bildirimi
const badgeSubscription = supabase
  .channel('user-badges')
  .on(
    'postgres_changes',
    {
      event: 'INSERT',
      schema: 'public',
      table: 'user_badges',
      filter: `user_id=eq.${userId}`
    },
    (payload) => {
      showBadgeNotification(payload.new);
    }
  )
  .subscribe();
```

---

## EDGE FUNCTIONS

### XP Hesaplama
```typescript
// supabase/functions/calculate-xp/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  const { user_id, action_type, value } = await req.json()
  
  const xpMap = {
    'lesson_complete': 100,
    'session_complete': 50,
    'streak_bonus': 25,
    'badge_earned': 75
  }
  
  const xp = xpMap[action_type] * (value || 1)
  
  // Update user XP
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  )
  
  await supabase.rpc('increment_xp', { 
    target_user_id: user_id, 
    xp_amount: xp 
  })
  
  return new Response(JSON.stringify({ xp_added: xp }))
})
```

---

## STORED PROCEDURES

```sql
-- XP artırma fonksiyonu
CREATE OR REPLACE FUNCTION increment_xp(
  target_user_id UUID,
  xp_amount INTEGER
) RETURNS void AS $$
BEGIN
  UPDATE users 
  SET xp = xp + xp_amount,
      updated_at = NOW()
  WHERE id = target_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Streak güncelleme fonksiyonu
CREATE OR REPLACE FUNCTION update_streak(
  target_user_id UUID
) RETURNS INTEGER AS $$
DECLARE
  last_active TIMESTAMPTZ;
  new_streak INTEGER;
BEGIN
  SELECT last_active_at, streak_days 
  INTO last_active, new_streak
  FROM users WHERE id = target_user_id;
  
  IF last_active::date = CURRENT_DATE - INTERVAL '1 day' THEN
    new_streak := new_streak + 1;
  ELSIF last_active::date < CURRENT_DATE - INTERVAL '1 day' THEN
    new_streak := 1;
  END IF;
  
  UPDATE users 
  SET streak_days = new_streak,
      last_active_at = NOW()
  WHERE id = target_user_id;
  
  RETURN new_streak;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

---

## BACKUP & RECOVERY

```bash
# Günlük yedekleme (cron job)
0 3 * * * pg_dump $DATABASE_URL > /backups/oluk_$(date +%Y%m%d).sql

# Point-in-time recovery
supabase db restore --target-time "2024-12-29 10:00:00"
```

---

## PERFORMANS OPTİMİZASYONU

### İndeksler
```sql
-- Sık sorgulanan alanlar
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_lessons_phase ON lessons(phase);
CREATE INDEX idx_lessons_slug ON lessons(slug);
CREATE INDEX idx_progress_user ON user_progress(user_id);
CREATE INDEX idx_progress_status ON user_progress(status);
CREATE INDEX idx_messages_session ON sirdas_messages(session_id);

-- Composite index
CREATE INDEX idx_progress_user_lesson ON user_progress(user_id, lesson_id);
```

---

## GÜVENLİK KONTROL LİSTESİ

```
□ RLS tüm tablolarda aktif mi?
□ Service role key sadece backend'de mi?
□ Anon key sadece read operasyonları için mi?
□ Sensitive kolonlar maskelenmiş mi?
□ Rate limiting aktif mi?
□ SQL injection koruması var mı?
```

---

## ENTEGRASYON

**Girdi Alır:**
- 20-API Entegrasyon (endpoint gereksinimleri)
- 21-Performans (optimizasyon talepleri)

**Çıktı Verir:**
- Tüm frontend bileşenleri
- Sırdaş AI sistemi
- Analytics dashboard

---

## SÜRÜM
- v1.0 - 29 Aralık 2024 - İlk oluşturma
