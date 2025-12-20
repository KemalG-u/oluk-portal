/**
 * OLUK Analytics & Session Tracking
 * Crisis events, session metrics, user interactions
 */

export interface SessionEvent {
  type: 'session_start' | 'session_end' | 'message_sent' | 'crisis_detected' | 'mood_changed';
  timestamp: Date;
  metadata?: {
    mood?: string;
    crisisSeverity?: string;
    messageCount?: number;
    duration?: number;
  };
}

export interface SessionMetrics {
  sessionId: string;
  userId?: string;
  startTime: Date;
  endTime?: Date;
  messageCount: number;
  mood: string;
  crisisDetected: boolean;
  crisisSeverity?: string;
  lessons: string[];
}

class AnalyticsTracker {
  private currentSession: SessionMetrics | null = null;
  private events: SessionEvent[] = [];

  startSession(mood: string, lessons: string[] = [], userId?: string) {
    this.currentSession = {
      sessionId: this.generateSessionId(),
      userId,
      startTime: new Date(),
      messageCount: 0,
      mood,
      crisisDetected: false,
      lessons,
    };

    this.trackEvent('session_start', { mood });
    
    if (typeof window !== 'undefined') {
      console.log('📊 Session started:', this.currentSession.sessionId);
    }
  }

  trackMessage() {
    if (!this.currentSession) return;
    
    this.currentSession.messageCount++;
    this.trackEvent('message_sent', { 
      messageCount: this.currentSession.messageCount 
    });
  }

  trackCrisis(severity: string) {
    if (!this.currentSession) return;

    this.currentSession.crisisDetected = true;
    this.currentSession.crisisSeverity = severity;
    
    this.trackEvent('crisis_detected', { crisisSeverity: severity });
    
    // Log to console for admin monitoring
    console.warn('🚨 CRISIS DETECTED:', {
      sessionId: this.currentSession.sessionId,
      severity,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send to Supabase for admin dashboard
    // this.sendToSupabase('crisis_events', { ... });
  }

  changeMood(newMood: string) {
    if (!this.currentSession) return;

    this.currentSession.mood = newMood;
    this.trackEvent('mood_changed', { mood: newMood });
  }

  endSession() {
    if (!this.currentSession) return;

    this.currentSession.endTime = new Date();
    const duration = 
      (this.currentSession.endTime.getTime() - this.currentSession.startTime.getTime()) / 1000;

    this.trackEvent('session_end', { 
      duration,
      messageCount: this.currentSession.messageCount 
    });

    console.log('📊 Session ended:', {
      id: this.currentSession.sessionId,
      duration: `${Math.floor(duration / 60)}m ${Math.floor(duration % 60)}s`,
      messages: this.currentSession.messageCount,
      crisis: this.currentSession.crisisDetected,
    });

    // TODO: Send to Supabase
    // this.sendToSupabase('sessions', this.currentSession);

    this.currentSession = null;
  }

  private trackEvent(type: SessionEvent['type'], metadata?: SessionEvent['metadata']) {
    const event: SessionEvent = {
      type,
      timestamp: new Date(),
      metadata,
    };

    this.events.push(event);

    // Keep only last 100 events in memory
    if (this.events.length > 100) {
      this.events = this.events.slice(-100);
    }
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  getSessionMetrics(): SessionMetrics | null {
    return this.currentSession;
  }

  getEvents(): SessionEvent[] {
    return this.events;
  }
}

// Singleton instance
export const analytics = new AnalyticsTracker();

// React Hook
export function useAnalytics() {
  return {
    startSession: (mood: string, lessons?: string[], userId?: string) => 
      analytics.startSession(mood, lessons, userId),
    trackMessage: () => analytics.trackMessage(),
    trackCrisis: (severity: string) => analytics.trackCrisis(severity),
    changeMood: (mood: string) => analytics.changeMood(mood),
    endSession: () => analytics.endSession(),
    getMetrics: () => analytics.getSessionMetrics(),
  };
}
