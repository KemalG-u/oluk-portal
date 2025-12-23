-- ============================================
-- OLUK SIR SİSTEMİ - VERİTABANI TABLOLARI
-- Kemal'in Vizyonu: "Kişinin manevi kalbine giden yolda bir parça olmak"
-- ============================================

-- Mevcut tabloları temizle (dikkatli kullan!)
-- DROP TABLE IF EXISTS sir_visit_log;
-- DROP TABLE IF EXISTS sir_conversations;
-- DROP TABLE IF EXISTS user_sir;

-- ============================================
-- 1. USER_SIR - Kullanıcının Sır'ı
-- ============================================
CREATE TABLE IF NOT EXISTS user_sir (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL UNIQUE,
    
    -- Sır bilgileri
    element_type VARCHAR(10) NOT NULL CHECK (element_type IN ('fire', 'water', 'air', 'earth')),
    sir_name VARCHAR(50) NOT NULL,
    
    -- Seviye ve ilerleme
    level INTEGER DEFAULT 1 CHECK (level BETWEEN 1 AND 4),
    energy INTEGER DEFAULT 50 CHECK (energy BETWEEN 0 AND 100),
    color_stage INTEGER DEFAULT 1 CHECK (color_stage BETWEEN 1 AND 4),
    
    -- İstatistikler
    total_lessons INTEGER DEFAULT 0,
    total_practices INTEGER DEFAULT 0,
    total_journal_entries INTEGER DEFAULT 0,
    longest_streak INTEGER DEFAULT 0,
    total_visits INTEGER DEFAULT 0,
    
    -- Zaman
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_visit TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- AI hafızası (JSON formatında)
    ai_memory JSONB DEFAULT '{}'::jsonb,
    
    -- Foreign key
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Index'ler
CREATE INDEX IF NOT EXISTS idx_user_sir_user_id ON user_sir(user_id);
CREATE INDEX IF NOT EXISTS idx_user_sir_element ON user_sir(element_type);

-- ============================================
-- 2. SIR_CONVERSATIONS - Sır konuşma geçmişi
-- ============================================
CREATE TABLE IF NOT EXISTS sir_conversations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL,
    
    -- Mesaj bilgileri
    message_type VARCHAR(20) NOT NULL CHECK (message_type IN ('greeting', 'lesson', 'reminder', 'emotion', 'chat', 'milestone')),
    user_message TEXT,
    sir_response TEXT NOT NULL,
    
    -- Bağlam (JSON)
    context JSONB DEFAULT '{}'::jsonb,
    
    -- Zaman
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Foreign key
    CONSTRAINT fk_conversation_user FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Index'ler
CREATE INDEX IF NOT EXISTS idx_sir_conversations_user_id ON sir_conversations(user_id);
CREATE INDEX IF NOT EXISTS idx_sir_conversations_type ON sir_conversations(message_type);
CREATE INDEX IF NOT EXISTS idx_sir_conversations_date ON sir_conversations(created_at);

-- ============================================
-- 3. SIR_VISIT_LOG - Günlük giriş logları
-- ============================================
CREATE TABLE IF NOT EXISTS sir_visit_log (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL,
    
    -- Ziyaret bilgileri
    visit_date DATE NOT NULL,
    entry_time TIMESTAMP WITH TIME ZONE NOT NULL,
    exit_time TIMESTAMP WITH TIME ZONE,
    
    -- Aktivite (JSON)
    pages_visited JSONB DEFAULT '[]'::jsonb,
    lessons_completed JSONB DEFAULT '[]'::jsonb,
    time_spent_seconds INTEGER DEFAULT 0,
    
    -- Foreign key
    CONSTRAINT fk_visit_user FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Unique constraint - günde bir kayıt
    CONSTRAINT unique_daily_visit UNIQUE (user_id, visit_date)
);

-- Index'ler
CREATE INDEX IF NOT EXISTS idx_sir_visit_user_id ON sir_visit_log(user_id);
CREATE INDEX IF NOT EXISTS idx_sir_visit_date ON sir_visit_log(visit_date);

-- ============================================
-- FONKSİYONLAR
-- ============================================

-- Enerji güncelleme fonksiyonu
CREATE OR REPLACE FUNCTION update_sir_energy()
RETURNS TRIGGER AS $$
DECLARE
    days_since_visit INTEGER;
    new_energy INTEGER;
BEGIN
    -- Son ziyaretten bu yana geçen gün
    days_since_visit := EXTRACT(DAY FROM (NOW() - OLD.last_visit));
    
    IF days_since_visit = 0 THEN
        -- Bugün geldi - enerji artar
        new_energy := LEAST(100, OLD.energy + 5);
    ELSIF days_since_visit <= 3 THEN
        -- 1-3 gün - hafif düşüş
        new_energy := GREATEST(20, OLD.energy - 2);
    ELSIF days_since_visit <= 7 THEN
        -- 4-7 gün - orta düşüş
        new_energy := GREATEST(15, OLD.energy - 5);
    ELSE
        -- 7+ gün - düşük ama ASLA sıfır olmaz
        new_energy := GREATEST(10, OLD.energy - 3);
    END IF;
    
    NEW.energy := new_energy;
    NEW.last_visit := NOW();
    NEW.total_visits := OLD.total_visits + 1;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Ders tamamlama fonksiyonu
CREATE OR REPLACE FUNCTION on_lesson_complete(p_user_id UUID)
RETURNS VOID AS $$
DECLARE
    current_sir RECORD;
    new_level INTEGER;
    new_color INTEGER;
BEGIN
    SELECT * INTO current_sir FROM user_sir WHERE user_id = p_user_id;
    
    IF NOT FOUND THEN
        RETURN;
    END IF;
    
    -- Enerji artır
    UPDATE user_sir 
    SET 
        energy = LEAST(100, energy + 10),
        total_lessons = total_lessons + 1
    WHERE user_id = p_user_id;
    
    -- Her 5 derste seviye artır
    IF (current_sir.total_lessons + 1) % 5 = 0 THEN
        new_level := LEAST(4, current_sir.level + 1);
        UPDATE user_sir SET level = new_level WHERE user_id = p_user_id;
    END IF;
    
    -- Renk aşaması güncelle (seviyeye göre)
    SELECT level INTO new_level FROM user_sir WHERE user_id = p_user_id;
    UPDATE user_sir SET color_stage = new_level WHERE user_id = p_user_id;
    
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

ALTER TABLE user_sir ENABLE ROW LEVEL SECURITY;
ALTER TABLE sir_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE sir_visit_log ENABLE ROW LEVEL SECURITY;

-- Kullanıcı sadece kendi verilerini görebilir
CREATE POLICY "Users can view own sir" ON user_sir
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own sir" ON user_sir
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own sir" ON user_sir
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own conversations" ON sir_conversations
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own conversations" ON sir_conversations
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own visits" ON sir_visit_log
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own visits" ON sir_visit_log
    FOR ALL USING (auth.uid() = user_id);

-- ============================================
-- ÖRNEK VERİLER (Test için)
-- ============================================

-- Bu kısmı production'da çalıştırma!
/*
INSERT INTO user_sir (user_id, element_type, sir_name, level, energy, color_stage, total_lessons)
VALUES 
    ('00000000-0000-0000-0000-000000000001', 'fire', 'Alev', 2, 75, 2, 8),
    ('00000000-0000-0000-0000-000000000002', 'water', 'Damla', 1, 45, 1, 3);
*/

-- ============================================
-- NOTLAR
-- ============================================
-- 
-- element_type değerleri:
--   fire  - Ateş Yolu (Öfke → Sabır)
--   water - Su Yolu (Bulanıklık → Berraklık)
--   air   - Hava Yolu (Dağınıklık → Odak)
--   earth - Toprak Yolu (Atalet → Canlanma)
--
-- level değerleri (1-4):
--   1 - Başlangıç
--   2 - Arınma tamamlandı
--   3 - Koruma tamamlandı
--   4 - Aktivasyon tamamlandı
--
-- color_stage değerleri (1-4):
--   fire:  1=Kırmızı, 2=Turuncu, 3=Altın, 4=Beyaz
--   water: 1=Bulanık, 2=Açık, 3=Berrak, 4=Kristal
--   air:   1=Fırtına, 2=Rüzgar, 3=Esinti, 4=Sakin
--   earth: 1=Kuru, 2=Islak, 3=Yeşil, 4=Çiçekli
--
-- energy (0-100):
--   ASLA 0 olmaz, minimum 10
--   Her gün giriş +5
--   Her ders +10
--   3 gün uzak kalınca -2/gün
--   7+ gün uzak kalınca -3/gün (min 10)
--
