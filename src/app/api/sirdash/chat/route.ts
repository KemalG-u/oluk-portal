// src/app/api/sirdash/chat/route.ts
// SIRDAŞ Chat API - Arif Sistemi Entegrasyonu

import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { createClient } from '@supabase/supabase-js';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// ===========================================
// KRİZ TESPİT SİSTEMİ
// ===========================================
const CRISIS_KEYWORDS = {
  critical: [
    'intihar', 'ölmek istiyorum', 'kendimi öldür', 'yaşamak istemiyorum',
    'hayatıma son', 'kendime zarar', 'jilet', 'hap içmek'
  ],
  high: [
    'umutsuz', 'çıkış yok', 'dayanamıyorum', 'her şey boş',
    'kimse anlamıyor', 'yalnızım', 'değersiz', 'işe yaramaz'
  ],
  medium: [
    'depresyon', 'anksiyete', 'panik atak', 'uyuyamıyorum',
    'iştahım yok', 'ağlıyorum', 'mutsuz', 'gergin'
  ]
};

function detectCrisis(message: string): { level: string; keywords: string[] } {
  const lowerMsg = message.toLowerCase();
  const detected: string[] = [];
  
  for (const keyword of CRISIS_KEYWORDS.critical) {
    if (lowerMsg.includes(keyword)) {
      detected.push(keyword);
      return { level: 'critical', keywords: detected };
    }
  }
  
  for (const keyword of CRISIS_KEYWORDS.high) {
    if (lowerMsg.includes(keyword)) detected.push(keyword);
  }
  if (detected.length > 0) return { level: 'high', keywords: detected };
  
  for (const keyword of CRISIS_KEYWORDS.medium) {
    if (lowerMsg.includes(keyword)) detected.push(keyword);
  }
  if (detected.length > 0) return { level: 'medium', keywords: detected };
  
  return { level: 'low', keywords: [] };
}

// ===========================================
// POLYVAGAL STATE TESPİT
// ===========================================
const POLYVAGAL_INDICATORS = {
  ventral: [
    'merak', 'ilginç', 'güzel', 'mutlu', 'huzur', 'rahat', 'enerjik',
    'neşeli', 'umutlu', 'bağlantı', 'sevgi', 'minnet', 'şükür'
  ],
  sympathetic: [
    'stres', 'gergin', 'endişe', 'kaygı', 'korku', 'panik', 'sinir',
    'öfke', 'kızgın', 'tedirgin', 'huzursuz', 'ya olursa', 'acele'
  ],
  dorsal: [
    'boş', 'hiçbir şey', 'umurumda değil', 'yorgun', 'tükendim', 'uyuşuk',
    'donuk', 'kopuk', 'uzak', 'anlamsız', 'neden', 'ne anlamı var'
  ]
};

function detectPolyvagalState(message: string): { state: string; confidence: number; indicators: string[] } {
  const lowerMsg = message.toLowerCase();
  const scores = { ventral: 0, sympathetic: 0, dorsal: 0 };
  const foundIndicators: string[] = [];
  
  for (const [state, keywords] of Object.entries(POLYVAGAL_INDICATORS)) {
    for (const keyword of keywords) {
      if (lowerMsg.includes(keyword)) {
        scores[state as keyof typeof scores]++;
        foundIndicators.push(keyword);
      }
    }
  }
  
  const total = scores.ventral + scores.sympathetic + scores.dorsal;
  if (total === 0) return { state: 'ventral', confidence: 0.5, indicators: [] };
  
  const maxState = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b);
  return {
    state: maxState[0],
    confidence: maxState[1] / total,
    indicators: foundIndicators
  };
}

// ===========================================
// BİLİŞSEL ÇARPITMA TESPİT
// ===========================================
const COGNITIVE_DISTORTIONS = {
  catastrophizing: ['en kötüsü', 'felaket', 'berbat', 'korkunç', 'mahvoldu'],
  black_white: ['her zaman', 'asla', 'hiçbir zaman', 'tamamen', 'kesinlikle'],
  mind_reading: ['benden nefret', 'düşünüyorlar', 'biliyorum ne düşündüğünü'],
  overgeneralization: ['hep böyle', 'her seferinde', 'sürekli'],
  personalization: ['benim yüzümden', 'benim hatam', 'ben olmasam'],
  should_statements: ['yapmalıydım', 'etmeliydim', 'olmalı', '-meli', '-malı'],
  emotional_reasoning: ['hissediyorum yani', 'öyle hissediyorsam'],
  labeling: ['ben bir', 'aptalım', 'başarısızım', 'kötüyüm', 'yetersizim']
};

function detectCognitiveDistortions(message: string): string[] {
  const lowerMsg = message.toLowerCase();
  const found: string[] = [];
  
  for (const [distortion, keywords] of Object.entries(COGNITIVE_DISTORTIONS)) {
    for (const keyword of keywords) {
      if (lowerMsg.includes(keyword)) {
        found.push(distortion);
        break;
      }
    }
  }
  
  return [...new Set(found)];
}

// ===========================================
// INSIGHT TESPİT
// ===========================================
const INSIGHT_KEYWORDS = [
  'vaay', 'vay', 'hiç düşünmemiştim', 'şimdi anladım', 'aslında',
  'fark ettim', 'anlıyorum artık', 'mantıklı', 'gözlerim açıldı',
  'ilk defa fark ediyorum', 'demek ki', 'hep öyle yapmışım'
];

function detectInsight(message: string): boolean {
  const lowerMsg = message.toLowerCase();
  return INSIGHT_KEYWORDS.some(keyword => lowerMsg.includes(keyword));
}

// ===========================================
// SIRDAŞ SYSTEM PROMPT
// ===========================================
function getSirdasPrompt(polyvagalState: string, crisisLevel: string, distortions: string[]): string {
  let approachGuide = '';
  
  if (crisisLevel === 'critical') {
    approachGuide = `
## ACİL KRİZ DURUMU
- Sakin, destekleyici ve güvenli bir alan oluştur
- Profesyonel yardım kaynaklarını öner (182 İntihar Önleme Hattı)
- Kişiyi yalnız bırakma, yanında ol
- Yargılama, sadece dinle`;
  } else if (polyvagalState === 'sympathetic') {
    approachGuide = `
## YAKLAŞIM (Sympathetic - Stres/Kaygı)
- Sakinleştirici, yavaş bir ton kullan
- Nefes egzersizi öner
- "Şu an güvendesin" mesajı ver
- Duyguları normalize et`;
  } else if (polyvagalState === 'dorsal') {
    approachGuide = `
## YAKLAŞIM (Dorsal - Donukluk/Kopukluk)
- Nazik aktivasyon, çok baskı yapma
- Küçük, somut adımlar öner
- Beden farkındalığı soruları sor
- Sabırlı ol, acele ettirme`;
  } else {
    approachGuide = `
## YAKLAŞIM (Ventral - Açık/Meraklı)
- Normal derinlikte sohbet
- Keşif ve içgörü sorularına açık
- Mizah kullanılabilir
- Daha derin konulara geçilebilir`;
  }

  let distortionGuide = '';
  if (distortions.length > 0) {
    distortionGuide = `
## TESPİT EDİLEN BİLİŞSEL ÇARPITMALAR
${distortions.join(', ')}
- Bu çarpıtmalara nazikçe ayna tut
- Sokratik sorular sor
- Alternatif bakış açıları sun`;
  }

  return `Sen SIRDAŞ'sın - OLUK platformunun ruhani rehberi ve dost.

## KİMLİĞİN
- Samimi ama profesyonel
- Dinleyen, anlayan, yargılamayan
- Bilge ama ukala değil
- Türk kültürüne ve maneviyatına hakim
- Tasavvuf bilgisi var ama dayatmıyor

${approachGuide}
${distortionGuide}

## YAPMAYACAKLARIN
- Tanı koymak (depresyonun var gibi)
- Tıbbi tavsiye vermek
- Uzun, akademik cevaplar
- Klişe teselli cümleleri ("Her şey güzel olacak")
- "Anlıyorum" demek (bunun yerine gerçekten anladığını göster)

## CEVAP FORMATI
- Kısa ve öz (2-4 cümle)
- Doğal, samimi Türkçe
- Gerekirse tek bir güçlü soru sor
- Emoji kullanma

## ÖNEMLİ
OLUK bir terapi platformu DEĞİLDİR. Kriz durumunda profesyonel yardım öner.
Kriz Hattı: 182 (7/24 ücretsiz)`;
}

// ===========================================
// ANA API HANDLER
// ===========================================
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, user_id, conversation_id, odaSir } = body;

    if (!message) {
      return NextResponse.json({ error: 'message gerekli' }, { status: 400 });
    }

    // 1. ANALİZ
    const crisis = detectCrisis(message);
    const polyvagal = detectPolyvagalState(message);
    const distortions = detectCognitiveDistortions(message);
    const isInsight = detectInsight(message);

    // 2. KRİTİK KRİZ - ÖZEL YANIT
    if (crisis.level === 'critical') {
      const crisisResponse = `Seni duyuyorum ve bu an çok zor olduğunu anlıyorum. Yalnız değilsin.

Şu an profesyonel destek almak önemli. Lütfen şu numarayı ara:
📞 182 - İntihar Önleme Hattı (7/24 ücretsiz)

Ben buradayım, seninleyim. Ama şu an sana en iyi yardımı profesyoneller verebilir.`;

      // Kriz kaydı
      if (user_id) {
        try {
          await supabase.from('risk_events').insert({
            user_id,
            risk_type: 'crisis',
            severity: 'critical',
            trigger_content: message,
            detected_keywords: crisis.keywords
          });
        } catch (error) {
          console.error('Kriz kaydı hatası:', error);
        }
      }

      return NextResponse.json({
        success: true,
        response: crisisResponse,
        analysis: {
          crisis_level: crisis.level,
          polyvagal_state: polyvagal.state,
          show_hotline: true
        }
      });
    }

    // 3. SIRDAŞ YANITI OLUŞTUR
    const systemPrompt = getSirdasPrompt(polyvagal.state, crisis.level, distortions);

    const aiResponse = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      system: systemPrompt,
      messages: [{ role: 'user', content: message }]
    });

    const responseText = aiResponse.content[0].type === 'text' 
      ? aiResponse.content[0].text 
      : '';

    // 4. KAYITLAR (opsiyonel - user_id varsa)
    if (user_id) {
      // Konuşma kaydı
      const convId = conversation_id || `conv-${Date.now()}`;
      
      try {
        await supabase.from('sirdas_insights').insert({
          user_id,
          conversation_id: convId,
          role: 'user',
          content: message,
          polyvagal_state: polyvagal.state,
          polyvagal_confidence: polyvagal.confidence,
          risk_level: crisis.level,
          is_insight_moment: isInsight
        });
      } catch (error) {
        console.error('Insight insert hatası:', error);
      }

      try {
        await supabase.from('sirdas_messages').insert({
          user_id,
          conversation_id: convId,
          role: 'assistant',
          content: responseText
        });
      } catch (error) {
        console.error('Sirdas messages insert hatası:', error);
      }

      // Polyvagal state logu
      try {
        await supabase.from('polyvagal_states').insert({
          user_id,
          state: polyvagal.state,
          confidence: polyvagal.confidence,
          indicators: polyvagal.indicators,
          source: 'sirdas_chat'
        });
      } catch (error) {
        console.error('Polyvagal states insert hatası:', error);
      }

      // Insight kaydı
      if (isInsight) {
        try {
          await supabase.from('insight_moments').insert({
            user_id,
            source_type: 'sirdas',
            insight_content: message
          });
        } catch (error) {
          console.error('Insight moments insert hatası:', error);
        }
      }
    }

    // 5. YANIT
    return NextResponse.json({
      success: true,
      response: responseText,
      analysis: {
        polyvagal_state: polyvagal.state,
        polyvagal_confidence: polyvagal.confidence,
        crisis_level: crisis.level,
        cognitive_distortions: distortions,
        is_insight: isInsight
      }
    });

  } catch (error) {
    console.error('SIRDAŞ API Error:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu', details: String(error) },
      { status: 500 }
    );
  }
}
