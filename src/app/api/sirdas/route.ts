/**
 * SIRDAŞ API - Kelâmın Süzüldüğü Durak
 */

import { streamText } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { detectCrisis, OLUK_DISCLAIMER } from '@/lib/crisis-detection';
import { getNurKocuSystemPrompt } from '@/lib/nur-kocu-prompt';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages, mood = 'wavy', lessons = [] } = await req.json();

    // Son mesajı al
    const lastMessage = messages.filter((m: any) => m.role === 'user').pop();
    if (!lastMessage) {
      return new Response(JSON.stringify({ error: 'Mesaj bulunamadı' }), { status: 400 });
    }

    // Crisis detection
    const crisisResult = detectCrisis(lastMessage.content);

    // Critical durumda AI'ı blokla
    if (crisisResult.response.blockAIResponse) {
      return new Response(JSON.stringify({
        type: 'crisis_response',
        message: crisisResult.response.message,
        severity: crisisResult.severity,
        showHotline: true
      }), { headers: { 'Content-Type': 'application/json' } });
    }

    // System prompt (Nur Koçu ile aynı, ama Sırdaş persona'sı eklenebilir)
    const systemPrompt = getNurKocuSystemPrompt(mood, lessons);

    // Streaming response
    const result = streamText({
      model: anthropic('claude-sonnet-4-20250514'),
      system: systemPrompt,
      messages,
      temperature: 0.7
    });

    return result.toTextStreamResponse({
      headers: {
        'X-Crisis-Severity': crisisResult.severity,
        'X-Show-Hotline': crisisResult.response.showHotline.toString()
      }
    });

  } catch (error) {
    console.error('Sırdaş API Error:', error);
    return new Response(JSON.stringify({ error: 'Bir hata oluştu' }), { status: 500 });
  }
}
