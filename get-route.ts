import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// ============================================
// OLUK SIR API - Sır Getirme
// ============================================

export async function GET(request: NextRequest) {
  try {
    // Supabase client
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // TODO: Auth'dan user_id al
    const userId = 'demo-user-id'; // Gerçek uygulamada auth'dan alınacak

    // Kullanıcının Sır'ını getir
    const { data: sir, error } = await supabase
      .from('user_sir')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error && error.code !== 'PGRST116') {
      // PGRST116 = no rows returned (normal durum, sır yok)
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Sır getirilemedi' },
        { status: 500 }
      );
    }

    if (!sir) {
      return NextResponse.json({ sir: null });
    }

    // Son ziyareti güncelle ve enerji hesapla
    const now = new Date();
    const lastVisit = new Date(sir.last_visit);
    const daysSinceVisit = Math.floor(
      (now.getTime() - lastVisit.getTime()) / (1000 * 60 * 60 * 24)
    );

    let newEnergy = sir.energy;
    
    // Enerji hesaplama
    if (daysSinceVisit === 0) {
      // Bugün zaten gelmiş, değişiklik yok
    } else if (daysSinceVisit <= 1) {
      // Dün gelmişti, bugün geldi - enerji artar
      newEnergy = Math.min(100, sir.energy + 5);
    } else if (daysSinceVisit <= 3) {
      // 2-3 gün - hafif düşüş
      newEnergy = Math.max(20, sir.energy - (daysSinceVisit * 2));
    } else if (daysSinceVisit <= 7) {
      // 4-7 gün - orta düşüş
      newEnergy = Math.max(15, sir.energy - (daysSinceVisit * 3));
    } else {
      // 7+ gün - düşük ama ASLA 10'un altına düşmez
      newEnergy = Math.max(10, sir.energy - 10);
    }

    // Güncelle
    if (newEnergy !== sir.energy || daysSinceVisit > 0) {
      await supabase
        .from('user_sir')
        .update({
          energy: newEnergy,
          last_visit: now.toISOString(),
          total_visits: sir.total_visits + (daysSinceVisit > 0 ? 1 : 0),
        })
        .eq('user_id', userId);
    }

    // Ziyaret logu
    const today = now.toISOString().split('T')[0];
    await supabase
      .from('sir_visit_log')
      .upsert({
        user_id: userId,
        visit_date: today,
        entry_time: now.toISOString(),
      }, {
        onConflict: 'user_id,visit_date',
      });

    return NextResponse.json({
      sir: {
        ...sir,
        energy: newEnergy,
        last_visit: now.toISOString(),
      },
      daysSinceLastVisit: daysSinceVisit,
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Sunucu hatası' },
      { status: 500 }
    );
  }
}
