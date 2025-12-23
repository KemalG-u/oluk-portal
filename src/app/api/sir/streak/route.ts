import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// ============================================
// OLUK SIR API - Süreklilik/Streak
// Çelik metaforu ile - yargılamadan
// ============================================

export async function GET(request: NextRequest) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // TODO: Auth'dan user_id al
    const userId = 'demo-user-id';

    // Kullanıcının Sır'ını getir
    const { data: sir } = await supabase
      .from('user_sir')
      .select('element_type, total_visits, longest_streak, last_visit')
      .eq('user_id', userId)
      .single();

    if (!sir) {
      return NextResponse.json({ error: 'Sır bulunamadı' }, { status: 404 });
    }

    // Son 30 günlük ziyaretleri getir
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const { data: visits } = await supabase
      .from('sir_visit_log')
      .select('visit_date')
      .eq('user_id', userId)
      .gte('visit_date', thirtyDaysAgo.toISOString().split('T')[0])
      .order('visit_date', { ascending: false });

    // Şu anki streak'i hesapla
    let currentStreak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (visits && visits.length > 0) {
      const visitDates = visits.map(v => v.visit_date);
      
      // Bugünden geriye say
      for (let i = 0; i <= 30; i++) {
        const checkDate = new Date(today);
        checkDate.setDate(checkDate.getDate() - i);
        const dateStr = checkDate.toISOString().split('T')[0];
        
        if (visitDates.includes(dateStr)) {
          currentStreak++;
        } else if (i > 0) {
          // İlk boşlukta dur (bugün hariç)
          break;
        }
      }
    }

    // En uzun streak'i güncelle
    let longestStreak = sir.longest_streak || 0;
    if (currentStreak > longestStreak) {
      longestStreak = currentStreak;
      await supabase
        .from('user_sir')
        .update({ longest_streak: longestStreak })
        .eq('user_id', userId);
    }

    // Son 7 gün detayı
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const dayName = date.toLocaleDateString('tr-TR', { weekday: 'short' });
      
      last7Days.push({
        date: dateStr,
        day: dayName,
        active: visits?.some(v => v.visit_date === dateStr) || false,
        isToday: i === 0,
      });
    }

    return NextResponse.json({
      elementType: sir.element_type,
      totalVisits: sir.total_visits,
      longestStreak,
      currentStreak,
      lastVisit: sir.last_visit,
      last7Days,
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
  }
}
