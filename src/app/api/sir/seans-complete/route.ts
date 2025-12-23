import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// ============================================
// OLUK SIR API - Seans Tamamlama
// Seans/meditasyon bitince Sır'ın enerjisi artar
// ============================================

export async function POST(request: NextRequest) {
  try {
    const { seansType, breathCount, durationSeconds } = await request.json();

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // TODO: Auth'dan user_id al
    const userId = 'demo-user-id';

    // Kullanıcının Sır'ını getir
    const { data: sir, error: sirError } = await supabase
      .from('user_sir')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (sirError || !sir) {
      return NextResponse.json(
        { error: 'Sır bulunamadı' },
        { status: 404 }
      );
    }

    // Enerji artışı hesapla (süreye göre)
    let energyBonus = 5; // Minimum
    if (durationSeconds >= 300) energyBonus = 8;  // 5+ dakika
    if (durationSeconds >= 600) energyBonus = 12; // 10+ dakika
    if (durationSeconds >= 900) energyBonus = 15; // 15+ dakika

    const newEnergy = Math.min(100, sir.energy + energyBonus);
    const newTotalPractices = sir.total_practices + 1;

    // Sır'ı güncelle
    await supabase
      .from('user_sir')
      .update({
        energy: newEnergy,
        total_practices: newTotalPractices,
        last_visit: new Date().toISOString(),
      })
      .eq('user_id', userId);

    // Seans mesajı
    const sirMessage = generateSeansMessage(sir.element_type, breathCount);

    // Konuşma geçmişine kaydet
    await supabase
      .from('sir_conversations')
      .insert({
        user_id: userId,
        message_type: 'lesson',
        user_message: null,
        sir_response: sirMessage,
        context: JSON.stringify({
          event: 'seans_complete',
          seansType,
          breathCount,
          durationSeconds,
          energyBonus,
        }),
      });

    return NextResponse.json({
      success: true,
      sir: {
        energy: newEnergy,
        totalPractices: newTotalPractices,
      },
      message: sirMessage,
      energyBonus,
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Sunucu hatası' },
      { status: 500 }
    );
  }
}

function generateSeansMessage(elementType: string, breathCount: number): string {
  const messages: Record<string, string[]> = {
    fire: [
      'Birlikte nefes aldık. Alev biraz daha sakinleşti.',
      'Her nefeste öfke eridi. Güzel.',
      'Sıcaklığı hissettim. Devam edelim.',
    ],
    water: [
      'Birlikte nefes aldık. Dalgalar yatıştı.',
      'Her nefeste berraklaştık. Güzel.',
      'Akışı hissettim. Devam edelim.',
    ],
    air: [
      'Birlikte nefes aldık. Rüzgar dinginleşti.',
      'Her nefeste odaklandık. Güzel.',
      'Sükuneti hissettim. Devam edelim.',
    ],
    earth: [
      'Birlikte nefes aldık. Toprak canlandı.',
      'Her nefeste köklendik. Güzel.',
      'Canlılığı hissettim. Devam edelim.',
    ],
  };

  const elementMessages = messages[elementType] || messages.fire;
  
  // Nefes sayısına göre özel mesaj
  if (breathCount >= 20) {
    return `${breathCount} nefes... Derin bir seans oldu. İçimde bir şeyler değişti.`;
  }
  
  return elementMessages[Math.floor(Math.random() * elementMessages.length)];
}
