import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// ============================================
// OLUK SIR API - Sır Oluşturma
// ============================================

export async function POST(request: NextRequest) {
  try {
    const { elementType, sirName } = await request.json();

    // Validasyon
    if (!elementType || !sirName) {
      return NextResponse.json(
        { error: 'elementType ve sirName gerekli' },
        { status: 400 }
      );
    }

    const validElements = ['fire', 'water', 'air', 'earth'];
    if (!validElements.includes(elementType)) {
      return NextResponse.json(
        { error: 'Geçersiz element tipi' },
        { status: 400 }
      );
    }

    // Supabase client
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // TODO: Auth'dan user_id al
    // Şimdilik demo için sabit bir ID kullanıyoruz
    const userId = 'demo-user-id'; // Gerçek uygulamada auth'dan alınacak

    // Mevcut sır var mı kontrol et
    const { data: existingSir } = await supabase
      .from('user_sir')
      .select('id')
      .eq('user_id', userId)
      .single();

    if (existingSir) {
      return NextResponse.json(
        { error: 'Bu kullanıcının zaten bir Sır\'ı var' },
        { status: 400 }
      );
    }

    // Yeni sır oluştur
    const { data, error } = await supabase
      .from('user_sir')
      .insert({
        user_id: userId,
        element_type: elementType,
        sir_name: sirName.trim(),
        level: 1,
        energy: 50,
        color_stage: 1,
        total_lessons: 0,
        total_practices: 0,
        total_journal_entries: 0,
        longest_streak: 0,
        total_visits: 1,
        last_visit: new Date().toISOString(),
        ai_memory: JSON.stringify({
          firstMeeting: new Date().toISOString(),
          highlights: [],
          emotionalNotes: [],
        }),
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Sır oluşturulamadı' },
        { status: 500 }
      );
    }

    // İlk konuşmayı kaydet
    await supabase
      .from('sir_conversations')
      .insert({
        user_id: userId,
        message_type: 'greeting',
        user_message: null,
        sir_response: getFirstMessage(elementType, sirName),
        context: JSON.stringify({
          event: 'first_meeting',
          elementType,
          sirName,
        }),
      });

    return NextResponse.json({
      success: true,
      sir: data,
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Sunucu hatası' },
      { status: 500 }
    );
  }
}

// İlk karşılaşma mesajı
function getFirstMessage(elementType: string, sirName: string): string {
  const messages: Record<string, string> = {
    fire: `Ben ${sirName}. Senin içindeki ateşim. Yıllardır kontrolsüz yandım. Şimdi birlikte dönüşeceğiz.`,
    water: `Ben ${sirName}. Senin içindeki su. Yıllardır bulanık aktım. Şimdi birlikte berraklaşacağız.`,
    air: `Ben ${sirName}. Senin içindeki rüzgar. Yıllardır savrudum. Şimdi birlikte odaklanacağız.`,
    earth: `Ben ${sirName}. Senin içindeki toprak. Yıllardır uyudum. Şimdi birlikte filizleneceğiz.`,
  };
  
  return messages[elementType] || messages.fire;
}
