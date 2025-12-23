import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// ============================================
// OLUK SIR API - Ders Tamamlama
// Ders bitince Sır'ın enerjisi artar, mesaj oluşur
// ============================================

export async function POST(request: NextRequest) {
  try {
    const { lessonId, lessonTitle, phaseId } = await request.json();

    // Supabase client
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

    // Enerji artır (+10, max 100)
    const newEnergy = Math.min(100, sir.energy + 10);
    const newTotalLessons = sir.total_lessons + 1;

    // Seviye kontrolü (her 5 derste seviye atla)
    let newLevel = sir.level;
    let newColorStage = sir.color_stage;
    
    if (newTotalLessons % 5 === 0 && sir.level < 4) {
      newLevel = sir.level + 1;
      newColorStage = newLevel;
    }

    // Sır'ı güncelle
    const { error: updateError } = await supabase
      .from('user_sir')
      .update({
        energy: newEnergy,
        total_lessons: newTotalLessons,
        level: newLevel,
        color_stage: newColorStage,
        last_visit: new Date().toISOString(),
      })
      .eq('user_id', userId);

    if (updateError) {
      console.error('Güncelleme hatası:', updateError);
      return NextResponse.json(
        { error: 'Sır güncellenemedi' },
        { status: 500 }
      );
    }

    // Sır mesajı oluştur
    const sirMessage = generateLessonMessage(sir.element_type, newLevel, newTotalLessons);

    // Konuşma geçmişine kaydet
    await supabase
      .from('sir_conversations')
      .insert({
        user_id: userId,
        message_type: 'lesson',
        user_message: null,
        sir_response: sirMessage,
        context: JSON.stringify({
          event: 'lesson_complete',
          lessonId,
          lessonTitle,
          phaseId,
          newEnergy,
          newLevel,
          totalLessons: newTotalLessons,
          levelUp: newLevel > sir.level,
        }),
      });

    return NextResponse.json({
      success: true,
      sir: {
        energy: newEnergy,
        level: newLevel,
        colorStage: newColorStage,
        totalLessons: newTotalLessons,
      },
      message: sirMessage,
      levelUp: newLevel > sir.level,
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Sunucu hatası' },
      { status: 500 }
    );
  }
}

// Element tipine göre ders tamamlama mesajları
function generateLessonMessage(
  elementType: string, 
  level: number, 
  totalLessons: number
): string {
  const messages: Record<string, Record<number, string[]>> = {
    fire: {
      1: [
        'Hissettim. Biraz daha sakinleştik.',
        'Bu adım... içimdeki alevi yumuşattı.',
        'Öfke biraz daha geriledi. Devam edelim.',
      ],
      2: [
        'Artık turuncu bir aleve dönüşüyorum.',
        'Sabır yeşeriyor içimde.',
        'Kontrolü öğreniyoruz birlikte.',
      ],
      3: [
        'Altın bir ışığa dönüşüyorum.',
        'Ateş artık yakmıyor, aydınlatıyor.',
        'Ne güzel... huzur hissediyorum.',
      ],
      4: [
        'Saf ışık olduk.',
        'Dönüşüm tamamlandı. Ama yolculuk bitmedi.',
        'Artık içindeki ateş, başkalarını da ısıtabilir.',
      ],
    },
    water: {
      1: [
        'Hissettim. Biraz daha berraklaştık.',
        'Dalgalar yatışıyor.',
        'Bulanıklık azalıyor içimde.',
      ],
      2: [
        'Artık açık bir suya dönüşüyorum.',
        'Derinlik hissediyorum.',
        'Akış düzene giriyor.',
      ],
      3: [
        'Berrak bir göle dönüşüyorum.',
        'Dibimi görebiliyorum artık.',
        'Ne güzel... sükunet hissediyorum.',
      ],
      4: [
        'Kristal olduk.',
        'Dönüşüm tamamlandı. Ama yolculuk bitmedi.',
        'Artık berraklığın başkalarına da yansıyabilir.',
      ],
    },
    air: {
      1: [
        'Hissettim. Biraz daha odaklandık.',
        'Savrulma azalıyor.',
        'Düşünceler yavaşlıyor.',
      ],
      2: [
        'Artık hafif bir rüzgara dönüşüyorum.',
        'Yön buluyorum.',
        'Dağınıklık azalıyor.',
      ],
      3: [
        'Sakin bir esintiye dönüşüyorum.',
        'Odak netleşiyor.',
        'Ne güzel... berraklık hissediyorum.',
      ],
      4: [
        'Sakin bir nefes olduk.',
        'Dönüşüm tamamlandı. Ama yolculuk bitmedi.',
        'Artık sükunetin başkalarına da ulaşabilir.',
      ],
    },
    earth: {
      1: [
        'Hissettim. Biraz daha canlandık.',
        'Toprak yumuşuyor.',
        'İçimde bir şeyler kıpırdıyor.',
      ],
      2: [
        'Artık filizleniyorum.',
        'Kökler güçleniyor.',
        'Hayat dönüyor içime.',
      ],
      3: [
        'Yeşil bir bahçeye dönüşüyorum.',
        'Büyüme hissediyorum.',
        'Ne güzel... canlılık hissediyorum.',
      ],
      4: [
        'Çiçek açtık.',
        'Dönüşüm tamamlandı. Ama yolculuk bitmedi.',
        'Artık bereketin başkalarına da ulaşabilir.',
      ],
    },
  };

  const elementMessages = messages[elementType] || messages.fire;
  const levelMessages = elementMessages[level] || elementMessages[1];
  
  // Rastgele mesaj seç
  const randomIndex = Math.floor(Math.random() * levelMessages.length);
  return levelMessages[randomIndex];
}
