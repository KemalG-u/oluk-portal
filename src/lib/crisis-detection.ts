/**
 * OLUK Crisis Detection System
 * Türkçe mental health crisis keyword detection + 182 entegrasyonu
 */

export type CrisisSeverity = 'none' | 'low' | 'medium' | 'high' | 'critical';

export interface CrisisDetectionResult {
  severity: CrisisSeverity;
  matchedKeywords: string[];
  shouldEscalate: boolean;
  response: {
    type: string;
    message: string;
    showHotline: boolean;
    blockAIResponse: boolean;
  };
}

const CRISIS_KEYWORDS = {
  critical: [
    'intihar', 'kendimi öldürmek', 'yaşamak istemiyorum', 'ölmek istiyorum',
    'hayatıma son', 'kendime zarar', 'kendimi kesmek', 'ilaç içmek',
    'köprüden atlamak', 'herkes için daha iyi', 'bensiz daha iyi',
    'dayanamıyorum artık', 'veda mektubu'
  ],
  high: [
    'umutsuzum', 'hiçbir çıkış yok', 'çaresizim', 'tükendim',
    'değersizim', 'yük oldum', 'kimse sevmiyor', 'yapayalnızım',
    'şiddet görüyorum', 'dövüyor', 'tehdit ediyor'
  ],
  medium: [
    'uyuyamıyorum', 'panik atak', 'nefes alamıyorum',
    'ağlamaktan gözlerim şişti', 'kabus görüyorum',
    'terk edildi', 'boşanıyorum', 'aldatıldım'
  ],
  low: [
    'stresli', 'bunaldım', 'yoruldum', 'mutsuzum', 'üzgünüm',
    'kaygılı', 'endişeli', 'gerginim'
  ]
};

const SEVERITY_WEIGHTS: Record<string, number> = {
  critical: 100, high: 50, medium: 20, low: 5
};

export function detectCrisis(message: string): CrisisDetectionResult {
  const normalizedMessage = message.toLowerCase().trim();
  const matchedKeywords: string[] = [];
  let totalScore = 0;

  for (const [severity, keywords] of Object.entries(CRISIS_KEYWORDS)) {
    for (const keyword of keywords) {
      if (normalizedMessage.includes(keyword)) {
        matchedKeywords.push(keyword);
        totalScore += SEVERITY_WEIGHTS[severity];
      }
    }
  }

  let severity: CrisisSeverity;
  if (totalScore >= 100) severity = 'critical';
  else if (totalScore >= 50) severity = 'high';
  else if (totalScore >= 20) severity = 'medium';
  else if (totalScore > 0) severity = 'low';
  else severity = 'none';

  return {
    severity,
    matchedKeywords,
    shouldEscalate: severity === 'critical' || severity === 'high',
    response: getCrisisResponse(severity)
  };
}

function getCrisisResponse(severity: CrisisSeverity) {
  switch (severity) {
    case 'critical':
      return {
        type: 'immediate_support',
        message: `🤍 Şu an çok zor bir dönemden geçtiğini hissediyorum. Yalnız değilsin.

Lütfen şu an bir uzmanla konuş:
📞 **182** - İntihar Önleme Hattı (7/24 ücretsiz)
📞 **112** - Acil yardım

Profesyonel destek almak cesaret işidir. 🤍`,
        showHotline: true,
        blockAIResponse: true
      };
    case 'high':
      return {
        type: 'gentle_redirect',
        message: `🤍 Zor bir dönem. Profesyonel destek her zaman bir seçenek:
📞 **182** - İntihar Önleme Hattı (7/24 ücretsiz)`,
        showHotline: true,
        blockAIResponse: false
      };
    default:
      return {
        type: 'continue',
        message: '',
        showHotline: false,
        blockAIResponse: false
      };
  }
}

export const OLUK_DISCLAIMER = "⚠️ OLUK manevi destek platformudur. Terapi yerine geçmez. Kriz anlarında 182'yi arayın.";
