import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const SIR_DATA = {
  fire: { color: '#FF6B35', message: 'Ateşin gücü seninle. Her zorluk, yeniden doğuşun için bir fırsat.' },
  water: { color: '#4ECDC4', message: 'Suyun bilgeliği seninle. Engellerin etrafından akarak yolunu bulacaksın.' },
  air: { color: '#95E1D3', message: 'Havanın özgürlüğü seninle. Düşüncelerini berraklaştır, yükselişini hisset.' },
  earth: { color: '#8B7355', message: 'Toprağın gücü seninle. Sağlam temeller üzerine yükseleceksin.' },
};

export async function POST(request: NextRequest) {
  try {
    const { element, sirName } = await request.json();

    if (!element || !SIR_DATA[element as keyof typeof SIR_DATA]) {
      return NextResponse.json({ error: 'Geçersiz element' }, { status: 400 });
    }

    if (!sirName || sirName.trim().length < 2) {
      return NextResponse.json({ error: 'İsim en az 2 karakter olmalı' }, { status: 400 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const sirData = SIR_DATA[element as keyof typeof SIR_DATA];
    const userId = crypto.randomUUID();

    // user_sir tablosuna ekle
    const { data: newSir, error: sirError } = await supabase
      .from('user_sir')
      .insert({
        user_id: userId,
        element_type: element,
        sir_name: sirName.trim(),
        color: sirData.color,
      })
      .select()
      .single();

    if (sirError) {
      console.error('user_sir insert error:', sirError);
      return NextResponse.json({ error: sirError.message }, { status: 500 });
    }

    // sir_conversations tablosuna ekle
    const { error: convError } = await supabase
      .from('sir_conversations')
      .insert({
        sir_id: newSir.id,
        role: 'assistant',
        message: sirData.message,
      });

    if (convError) {
      console.error('sir_conversations insert error:', convError);
      return NextResponse.json({ error: convError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, sir: newSir });
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json({ error: error?.message || 'Sunucu hatası' }, { status: 500 });
  }
}
