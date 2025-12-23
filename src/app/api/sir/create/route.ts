import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const SIR_DATA = {
  fire: {
    name: 'Ateş',
    emoji: '🔥',
    color: '#FF6B35',
    element: 'fire',
    traits: ['Tutku', 'Dönüşüm', 'Güç'],
    initialMessage: 'Ateşin gücü seninle. Her zorluk, yeniden doğuşun için bir fırsat.',
  },
  water: {
    name: 'Su',
    emoji: '💧',
    color: '#4ECDC4',
    element: 'water',
    traits: ['Akış', 'Uyum', 'Derinlik'],
    initialMessage: 'Suyun bilgeliği seninle. Engellerin etrafından akarak yolunu bulacaksın.',
  },
  air: {
    name: 'Hava',
    emoji: '🌬️',
    color: '#95E1D3',
    element: 'air',
    traits: ['Özgürlük', 'Netlik', 'Hareket'],
    initialMessage: 'Havanın özgürlüğü seninle. Düşüncelerini berraklaştır, yükselişini hisset.',
  },
  earth: {
    name: 'Toprak',
    emoji: '🌍',
    color: '#8B7355',
    element: 'earth',
    traits: ['Denge', 'Sabır', 'Kök'],
    initialMessage: 'Toprağın gücü seninle. Sağlam temeller üzerine yükseleceksin.',
  },
};

export async function POST(request: NextRequest) {
  try {
    const { element, sirName } = await request.json();

    if (!element || !SIR_DATA[element as keyof typeof SIR_DATA]) {
      return NextResponse.json({ error: 'Geçersiz element seçimi' }, { status: 400 });
    }

    if (!sirName || sirName.trim().length < 2) {
      return NextResponse.json({ error: 'Sır ismi en az 2 karakter olmalı' }, { status: 400 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const userId = 'demo-user-id';
    const sirData = SIR_DATA[element as keyof typeof SIR_DATA];

    const { data: existingSir } = await supabase
      .from('user_sir')
      .select('id')
      .eq('user_id', userId)
      .single();

    if (existingSir) {
      return NextResponse.json({ error: 'Zaten bir sırrın var. Sır değiştirilemez.' }, { status: 400 });
    }

    const { data: newSir, error } = await supabase
      .from('user_sir')
      .insert({
        user_id: userId,
        element: element,
        sir_name: sirName.trim(),
        color: sirData.color,
        energy: 50,
        level: 1,
        created_at: new Date().toISOString(),
        last_visit: new Date().toISOString(),
        total_visits: 1,
        lessons_completed: 0,
        sessions_completed: 0,
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Sır oluşturulamadı' }, { status: 500 });
    }

    await supabase.from('sir_conversations').insert({
      user_id: userId,
      sir_id: newSir.id,
      message_type: 'welcome',
      message: sirData.initialMessage,
      created_at: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      sir: {
        id: newSir.id,
        name: sirName,
        element: element,
        emoji: sirData.emoji,
        color: sirData.color,
        traits: sirData.traits,
        message: sirData.initialMessage,
        energy: 50,
        level: 1,
      },
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
  }
}
