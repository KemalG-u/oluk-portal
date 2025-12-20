/**
 * OLUK Supabase Client & Schema
 * Session history, user data, crisis events
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Database Types
export interface NurKocuSession {
  id: string;
  user_id?: string;
  session_id: string;
  mood: string;
  lessons: string[];
  message_count: number;
  crisis_detected: boolean;
  crisis_severity?: 'low' | 'medium' | 'high' | 'critical';
  duration_seconds?: number;
  started_at: string;
  ended_at?: string;
  created_at: string;
}

export interface CrisisEvent {
  id: string;
  session_id: string;
  user_id?: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  matched_keywords: string[];
  message_content: string; // Hashed for privacy
  response_shown: string;
  escalated: boolean;
  created_at: string;
}

// Session Operations
export async function saveSession(sessionData: Partial<NurKocuSession>) {
  if (!supabase) {
    console.warn('⚠️ Supabase not configured. Session not saved.');
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('nur_kocu_sessions')
      .insert([sessionData])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error saving session:', error);
    return null;
  }
}

export async function updateSession(sessionId: string, updates: Partial<NurKocuSession>) {
  if (!supabase) return null;

  try {
    const { data, error } = await supabase
      .from('nur_kocu_sessions')
      .update(updates)
      .eq('session_id', sessionId)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating session:', error);
    return null;
  }
}

export async function getUserSessions(userId: string, limit = 10) {
  if (!supabase) return [];

  try {
    const { data, error } = await supabase
      .from('nur_kocu_sessions')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching sessions:', error);
    return [];
  }
}

// Crisis Event Operations
export async function logCrisisEvent(eventData: Partial<CrisisEvent>) {
  if (!supabase) {
    console.warn('⚠️ Supabase not configured. Crisis event not logged.');
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('crisis_events')
      .insert([eventData])
      .select()
      .single();

    if (error) throw error;

    // Log to console for immediate visibility
    console.error('🚨 CRISIS EVENT LOGGED:', {
      severity: eventData.severity,
      escalated: eventData.escalated,
      timestamp: new Date().toISOString(),
    });

    return data;
  } catch (error) {
    console.error('Error logging crisis event:', error);
    return null;
  }
}

export async function getCrisisEvents(limit = 50) {
  if (!supabase) return [];

  try {
    const { data, error } = await supabase
      .from('crisis_events')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching crisis events:', error);
    return [];
  }
}

// Analytics Queries
export async function getSessionStats(days = 7) {
  if (!supabase) return null;

  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const { data, error } = await supabase
      .from('nur_kocu_sessions')
      .select('*')
      .gte('created_at', startDate.toISOString());

    if (error) throw error;

    const stats = {
      totalSessions: data?.length || 0,
      avgDuration: data?.reduce((acc, s) => acc + (s.duration_seconds || 0), 0) / (data?.length || 1),
      avgMessages: data?.reduce((acc, s) => acc + s.message_count, 0) / (data?.length || 1),
      crisisCount: data?.filter(s => s.crisis_detected).length || 0,
      moodDistribution: data?.reduce((acc: any, s) => {
        acc[s.mood] = (acc[s.mood] || 0) + 1;
        return acc;
      }, {}),
    };

    return stats;
  } catch (error) {
    console.error('Error fetching session stats:', error);
    return null;
  }
}

// SQL Schema for Supabase (run manually)
export const SUPABASE_SCHEMA = `
-- Nur Koçu Sessions Table
CREATE TABLE IF NOT EXISTS nur_kocu_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  session_id TEXT UNIQUE NOT NULL,
  mood TEXT NOT NULL,
  lessons TEXT[] DEFAULT '{}',
  message_count INTEGER DEFAULT 0,
  crisis_detected BOOLEAN DEFAULT FALSE,
  crisis_severity TEXT,
  duration_seconds INTEGER,
  started_at TIMESTAMPTZ NOT NULL,
  ended_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Crisis Events Table
CREATE TABLE IF NOT EXISTS crisis_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id),
  severity TEXT NOT NULL,
  matched_keywords TEXT[] DEFAULT '{}',
  message_content TEXT, -- Hashed for privacy
  response_shown TEXT,
  escalated BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON nur_kocu_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_created_at ON nur_kocu_sessions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_crisis_events_created_at ON crisis_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_crisis_events_severity ON crisis_events(severity);

-- Row Level Security (RLS)
ALTER TABLE nur_kocu_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE crisis_events ENABLE ROW LEVEL SECURITY;

-- Users can only see their own sessions
CREATE POLICY "Users can view own sessions" ON nur_kocu_sessions
  FOR SELECT USING (auth.uid() = user_id);

-- Admins can view all crisis events
CREATE POLICY "Admins can view crisis events" ON crisis_events
  FOR SELECT USING (auth.jwt() ->> 'role' = 'admin');
`;
