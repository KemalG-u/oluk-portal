import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { 
  buildSirdashPrompt, 
  detectCrisis, 
  getCrisisResponse,
  type SirContext,
  type UserContext,
  type ConversationContext 
} from '@/lib/sirdash-sir-prompt';

// ============================================
// OLUK SIRDAŞ CHAT API - SIR ENTEGRELİ
// ============================================

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message, currentPage } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Mesaj gerekli' },
        { status: 400 }
      );
    }

    // Supabase client
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // TODO: Auth'dan user_id al
    const userId = 'demo-user-id';

    // Kriz tespiti
    const crisis = detectCrisis(message);

    // Kullanıcının Sır'ını getir
    const { data: sir } = await supabase
      .from('user_sir')
      .select('*')
      .eq('user_id', userId)
      .single();

    // Kriz durumunda özel yanıt
    if (crisis.isCrisis && crisis.type && crisis.severity === 'high') {
      const crisisResponse = getCrisisResponse(
        crisis.type, 
        sir?.sir_name || 'Sır'
      );

      // Krizi logla
      await supabase
        .from('sir_conversations')
        .insert({
          user_id: userId,
          message_type: 'emotion',
          user_message: message,
          sir_response: crisisResponse,
          context: JSON.stringify({
            crisis: true,
            crisisType: crisis.type,
            severity: crisis.severity,
          }),
        });

      return NextResponse.json({
        response: crisisResponse,
        crisis: true,
        crisisType: crisis.type,
      });
    }

    // Son konuşmaları getir
    const { data: recentConversations } = await supabase
      .from('sir_conversations')
      .select('user_message, sir_response')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(5);

    // Zaman bilgisi
    const now = new Date();
    const hour = now.getHours();
    const isLateNight = hour >= 23 || hour < 5;
    const isWeekend = now.getDay() === 0 || now.getDay() === 6;

    // Son ziyaretten kaç gün
    const daysSinceVisit = sir 
      ? Math.floor((now.getTime() - new Date(sir.last_visit).getTime()) / (1000 * 60 * 60 * 24))
      : 0;

    // Context oluştur
    const sirContext: SirContext = sir ? {
      elementType: sir.element_type,
      sirName: sir.sir_name,
      level: sir.level,
      energy: sir.energy,
      colorStage: sir.color_stage,
      totalLessons: sir.total_lessons,
      totalPractices: sir.total_practices,
      lastVisit: sir.last_visit,
      daysSinceVisit,
    } : {
      elementType: 'fire',
      sirName: 'Sır',
      level: 1,
      energy: 50,
      colorStage: 1,
      totalLessons: 0,
      totalPractices: 0,
      lastVisit: now.toISOString(),
      daysSinceVisit: 0,
    };

    const userContext: UserContext = {
      currentPage: currentPage || 'Ana Sayfa',
      currentTime: now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
      isLateNight,
      isWeekend,
      recentLessons: [], // TODO: Gerçek ders geçmişi
      recentJournalTopics: [],
    };

    const conversationContext: ConversationContext = {
      sir: sirContext,
      user: userContext,
      messageHistory: (recentConversations || [])
        .reverse()
        .flatMap(c => [
          ...(c.user_message ? [{ role: 'user' as const, content: c.user_message }] : []),
          { role: 'sir' as const, content: c.sir_response },
        ]),
    };

    // Sistem prompt'u oluştur
    const systemPrompt = buildSirdashPrompt(conversationContext);

    // Claude'a gönder
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      system: systemPrompt,
      messages: [
        { role: 'user', content: message }
      ],
    });

    const assistantMessage = response.content[0].type === 'text' 
      ? response.content[0].text 
      : '';

    // Konuşmayı kaydet
    await supabase
      .from('sir_conversations')
      .insert({
        user_id: userId,
        message_type: crisis.isCrisis ? 'emotion' : 'chat',
        user_message: message,
        sir_response: assistantMessage,
        context: JSON.stringify({
          page: currentPage,
          time: now.toISOString(),
          sirLevel: sirContext.level,
          sirEnergy: sirContext.energy,
          crisis: crisis.isCrisis,
          crisisType: crisis.type,
        }),
      });

    return NextResponse.json({
      response: assistantMessage,
      sir: {
        name: sirContext.sirName,
        element: sirContext.elementType,
        energy: sirContext.energy,
        level: sirContext.level,
      },
    });

  } catch (error) {
    console.error('Sırdaş API error:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar dene.' },
      { status: 500 }
    );
  }
}
