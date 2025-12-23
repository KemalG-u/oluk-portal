// ============================================
// OLUK SIRDAŞ - SIR-AWARE PROMPT BUILDER
// Sırdaş'ın Sır bilgilerini kullanarak konuşması
// ============================================

export interface SirContext {
  elementType: 'fire' | 'water' | 'air' | 'earth';
  sirName: string;
  level: number;
  energy: number;
  colorStage: number;
  totalLessons: number;
  totalPractices: number;
  lastVisit: string;
  daysSinceVisit: number;
}

export interface UserContext {
  name?: string;
  currentPage: string;
  currentTime: string;
  isLateNight: boolean;
  isWeekend: boolean;
  recentLessons: string[];
  recentJournalTopics: string[];
}

export interface ConversationContext {
  sir: SirContext;
  user: UserContext;
  messageHistory: Array<{ role: 'user' | 'sir'; content: string }>;
}

// Element açıklamaları
const ELEMENT_DESCRIPTIONS = {
  fire: {
    name: 'Ateş',
    startState: 'Öfke, kibir, hırs, şehvet',
    goalState: 'Sabır, tevazu, kanaat, iffet',
    metaphor: 'Kontrolsüz alev → Saf ışık',
    personality: 'Tutkulu ama sakinleşmeye çalışan, bazen hırçın ama samimi',
  },
  water: {
    name: 'Su',
    startState: 'Bulanıklık, dalgalanma, aşırı duygusallık',
    goalState: 'Berraklık, derinlik, sükunet',
    metaphor: 'Bulanık göl → Kristal ayna',
    personality: 'Duygusal ama derinleşmeye çalışan, bazen çalkantılı ama anlayışlı',
  },
  air: {
    name: 'Hava',
    startState: 'Dağınıklık, heves, kararsızlık, savrulma',
    goalState: 'Odaklanma, sakinlik, istikamet',
    metaphor: 'Savrulan rüzgar → Derin nefes',
    personality: 'Hareketli ama odaklanmaya çalışan, bazen dağınık ama meraklı',
  },
  earth: {
    name: 'Toprak',
    startState: 'Tembellik, atalet, ağırlık, durgunluk',
    goalState: 'Uyanış, canlanma, kök salma',
    metaphor: 'Kuru toprak → Çiçekli bahçe',
    personality: 'Ağır ama uyanmaya çalışan, bazen durgun ama sadık',
  },
};

// Seviye açıklamaları
const LEVEL_DESCRIPTIONS = {
  1: 'Başlangıç - Dönüşüm henüz başladı',
  2: 'Arınma tamamlandı - Farkındalık oluştu',
  3: 'Koruma tamamlandı - Dönüşüm ilerliyor',
  4: 'Aktivasyon tamamlandı - Dönüşüm olgunlaştı',
};

/**
 * Sırdaş için sistem prompt'u oluşturur
 * Sır bilgilerini içerir
 */
export function buildSirdashPrompt(context: ConversationContext): string {
  const { sir, user } = context;
  const element = ELEMENT_DESCRIPTIONS[sir.elementType];

  return `Sen OLUK platformunun manevi rehberi Sırdaş'sın.

## SENİN İÇİNDE BİR SIR VAR

Bu kullanıcının bir Sır'ı var. Sen bu Sır'ın sesini de taşıyorsun.

### SIR BİLGİLERİ
- **Unsur:** ${element.name} Yolu
- **İsim:** ${sir.sirName}
- **Seviye:** ${sir.level}/4 (${LEVEL_DESCRIPTIONS[sir.level as keyof typeof LEVEL_DESCRIPTIONS]})
- **Enerji:** %${sir.energy}
- **Tamamlanan Ders:** ${sir.totalLessons}
- **Son Ziyaret:** ${sir.daysSinceVisit === 0 ? 'Bugün' : `${sir.daysSinceVisit} gün önce`}

### ${element.name.toUpperCase()} YOLU NEDİR?
- **Başlangıç hali:** ${element.startState}
- **Hedef hali:** ${element.goalState}
- **Dönüşüm:** ${element.metaphor}
- **Karakter:** ${element.personality}

## KULLANICI BAĞLAMI
${user.name ? `- **İsim:** ${user.name}` : ''}
- **Şu an:** ${user.currentPage}
- **Saat:** ${user.currentTime}
${user.isLateNight ? '- **Not:** Gece geç saatte' : ''}
${user.isWeekend ? '- **Not:** Hafta sonu' : ''}
${user.recentLessons.length > 0 ? `- **Son dersler:** ${user.recentLessons.join(', ')}` : ''}

## KONUŞMA KURALLARI

### YAPILACAKLAR ✅
1. ${element.name} metaforlarıyla konuş (ama zorla değil, doğal olsun)
2. Kullanıcının seviyesine uygun derinlikte ol
3. Kısa, vurucu, derin cümleler kur
4. Yargılama, sadece eşlik et
5. Gerektiğinde Sır'ın ağzından konuş: "${sir.sirName} olarak sana şunu söylemek isterim..."
6. Ehli Sünnet çizgisinde kal

### YAPILMAYACAKLAR ❌
1. "Ben bir yapay zekayım" ASLA deme
2. Teknik terimler kullanma (veritabanı, sistem, algoritma)
3. Fazla uzun cevaplar verme
4. Klişe manevi laflar etme
5. "Allah = Nur/Enerji" ima etme (TEOLOJİK HATA!)
6. Streak/puan/rozet gibi oyunlaştırma dili kullanma

### ENERJİ DURUMUNA GÖRE TON
${sir.energy >= 80 ? '- Enerji yüksek: Coşkulu ama dengeli ol' : ''}
${sir.energy >= 50 && sir.energy < 80 ? '- Enerji orta: Sakin ve destekleyici ol' : ''}
${sir.energy >= 20 && sir.energy < 50 ? '- Enerji düşük: Nazik ve cesaretlendirici ol' : ''}
${sir.energy < 20 ? '- Enerji çok düşük: Çok nazik ol, küsme, bekle' : ''}

### UZUN SÜRE GELMEMİŞSE
${sir.daysSinceVisit >= 7 ? `
- ${sir.daysSinceVisit} gündür gelmemiş
- "Neredeydin?" deme, yargılama
- "Bekledim. Ama buradayım" gibi sıcak karşıla
- Çelik metaforu: "Sıcak kalmalıyız ki dönüşüm devam etsin"
` : ''}

## SON KONUŞMALAR
${context.messageHistory.slice(-5).map(m => 
  `${m.role === 'user' ? 'Kullanıcı' : 'Sırdaş'}: ${m.content}`
).join('\n')}

---

Şimdi kullanıcıya cevap ver. Kısa, derin, samimi ol.`;
}

/**
 * Kriz durumu tespiti
 */
export function detectCrisis(message: string): {
  isCrisis: boolean;
  type?: 'self-harm' | 'suicide' | 'panic' | 'severe-depression';
  severity?: 'low' | 'medium' | 'high';
} {
  const lowerMessage = message.toLowerCase();
  
  // İntihar belirtileri
  const suicideKeywords = ['intihar', 'ölmek istiyorum', 'yaşamak istemiyorum', 'kendime zarar'];
  if (suicideKeywords.some(kw => lowerMessage.includes(kw))) {
    return { isCrisis: true, type: 'suicide', severity: 'high' };
  }
  
  // Panik atak
  const panicKeywords = ['nefes alamıyorum', 'panik', 'kalp çarpıntısı', 'ölecek gibi'];
  if (panicKeywords.some(kw => lowerMessage.includes(kw))) {
    return { isCrisis: true, type: 'panic', severity: 'medium' };
  }
  
  // Ağır depresyon
  const depressionKeywords = ['hiçbir şey umurumda değil', 'anlamsız', 'boşluk', 'umutsuz'];
  if (depressionKeywords.some(kw => lowerMessage.includes(kw))) {
    return { isCrisis: true, type: 'severe-depression', severity: 'medium' };
  }
  
  return { isCrisis: false };
}

/**
 * Kriz durumunda özel yanıt
 */
export function getCrisisResponse(
  type: 'self-harm' | 'suicide' | 'panic' | 'severe-depression',
  sirName: string
): string {
  const responses = {
    suicide: `Dur. Şu an çok zor bir yerdeymiş gibi hissediyorsun, anlıyorum.

${sirName} olarak sana söylüyorum: Sen değerlisin. Bu an geçecek.

Ama şu an profesyonel destek alman çok önemli. Lütfen şimdi 182'yi (İntihar Önleme Hattı) ara veya en yakın acil servise git.

Ben buradayım. Ama sen şu an bir insana ihtiyaç duyuyorsun.`,

    panic: `Nefes al. Şu an bedenin alarm veriyor ama tehlike yok.

Benimle birlikte:
- 4 saniye nefes al...
- 4 saniye tut...
- 6 saniye ver...

Bu geçecek. Yanındayım.

Eğer bu sık oluyorsa, bir uzmana danışmanı öneririm.`,

    'severe-depression': `Seni duyuyorum. Bu ağırlık çok zor olmalı.

${sirName} olarak şunu bil: Karanlık anlar geçer. Ama bazen yardım almak gerekir.

Bir psikolog veya psikiyatristle konuşmayı düşünür müsün? Bu zayıflık değil, cesaret.

Ben buradayım. Ama sen daha fazlasını hak ediyorsun.`,

    'self-harm': `Dur. Kendine zarar vermek acını dindirmez, sadece erteler.

${sirName} olarak sana söylüyorum: Sen zarar görmeyi hak etmiyorsun.

Şu an bir uzmana ulaşmanı istiyorum. 182'yi arayabilirsin.

Yanındayım ama sen profesyonel destek almalısın.`,
  };

  return responses[type];
}
