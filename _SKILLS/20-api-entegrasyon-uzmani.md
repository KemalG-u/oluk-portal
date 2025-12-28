# 20 - API ENTEGRASYON UZMANI

## KİMLİK
**Kod:** 20-API-INTEGRATION
**Departman:** AI-OPS
**Rol:** Dış Servis Entegrasyon Uzmanı
**Bağlılık:** Tüm 3. parti servislerle entegrasyon

---

## GÖREV TANIMI

OLUK platformunun dış servislerle entegrasyonunu yönetir. API bağlantılarını kurar, webhook'ları yapılandırır, veri akışlarını koordine eder.

---

## AKTİF ENTEGRASYONLAR

### 1. ANTHROPIC CLAUDE API (Sırdaş)

```typescript
// lib/anthropic.ts
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function chatWithSirdas(
  messages: Message[],
  userProfile: UserProfile
): Promise<string> {
  const systemPrompt = buildSirdasPrompt(userProfile);
  
  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    system: systemPrompt,
    messages: messages.map(m => ({
      role: m.role,
      content: m.content
    }))
  });
  
  return response.content[0].text;
}

// Rate limiting
const RATE_LIMIT = {
  free: { rpm: 10, tpd: 10000 },
  premium: { rpm: 30, tpd: 50000 }
};
```

### 2. CLOUDINARY (Medya)

```typescript
// lib/cloudinary.ts
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(file: File, folder: string) {
  const result = await cloudinary.uploader.upload(file.path, {
    folder: `oluk/${folder}`,
    transformation: [
      { width: 1200, height: 630, crop: 'fill' },
      { quality: 'auto:good' },
      { format: 'webp' }
    ]
  });
  
  return {
    url: result.secure_url,
    publicId: result.public_id
  };
}

export async function uploadAudio(file: File) {
  const result = await cloudinary.uploader.upload(file.path, {
    resource_type: 'video', // audio uses video endpoint
    folder: 'oluk/audio',
    format: 'mp3'
  });
  
  return result.secure_url;
}
```

### 3. MIXPANEL (Analytics)

```typescript
// lib/mixpanel.ts
import Mixpanel from 'mixpanel';

const mixpanel = Mixpanel.init(process.env.MIXPANEL_TOKEN!, {
  host: 'api-eu.mixpanel.com' // GDPR compliance
});

export function trackEvent(
  userId: string,
  event: string,
  properties?: Record<string, any>
) {
  mixpanel.track(event, {
    distinct_id: userId,
    ...properties,
    $insert_id: crypto.randomUUID(),
    timestamp: Date.now()
  });
}

// Önemli eventler
export const EVENTS = {
  // Onboarding
  SIGNUP_STARTED: 'Signup Started',
  SIGNUP_COMPLETED: 'Signup Completed',
  ONBOARDING_STEP: 'Onboarding Step',
  
  // Engagement
  LESSON_STARTED: 'Lesson Started',
  LESSON_COMPLETED: 'Lesson Completed',
  SESSION_STARTED: 'Session Started',
  SESSION_COMPLETED: 'Session Completed',
  
  // Sırdaş
  SIRDAS_OPENED: 'Sirdas Opened',
  SIRDAS_MESSAGE_SENT: 'Sirdas Message Sent',
  
  // Retention
  STREAK_ACHIEVED: 'Streak Achieved',
  BADGE_EARNED: 'Badge Earned',
  
  // Conversion
  PREMIUM_VIEWED: 'Premium Viewed',
  PREMIUM_STARTED: 'Premium Started',
  PREMIUM_COMPLETED: 'Premium Completed'
};
```

### 4. RESEND (Email)

```typescript
// lib/resend.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(user: User) {
  await resend.emails.send({
    from: 'OLUK <merhaba@oluk.org>',
    to: user.email,
    subject: 'OLUK\'a Hoş Geldin 🌊',
    react: WelcomeEmailTemplate({ name: user.name })
  });
}

export async function sendStreakReminder(user: User) {
  await resend.emails.send({
    from: 'OLUK <hatirlatma@oluk.org>',
    to: user.email,
    subject: `${user.streak_days} günlük serinı kaybetme!`,
    react: StreakReminderTemplate({ 
      name: user.name,
      streak: user.streak_days 
    })
  });
}

// Email şablonları
const EMAIL_TEMPLATES = {
  welcome: 'Hoş geldin',
  streak_reminder: 'Seri hatırlatma',
  lesson_complete: 'Ders tamamlandı',
  badge_earned: 'Rozet kazanıldı',
  weekly_summary: 'Haftalık özet',
  premium_trial: 'Premium deneme',
  payment_success: 'Ödeme başarılı',
  payment_failed: 'Ödeme başarısız'
};
```

### 5. İYZİCO (Ödeme)

```typescript
// lib/iyzico.ts
import Iyzipay from 'iyzipay';

const iyzipay = new Iyzipay({
  apiKey: process.env.IYZICO_API_KEY!,
  secretKey: process.env.IYZICO_SECRET_KEY!,
  uri: process.env.NODE_ENV === 'production' 
    ? 'https://api.iyzipay.com' 
    : 'https://sandbox-api.iyzipay.com'
});

export async function createSubscription(
  user: User,
  plan: 'monthly' | 'yearly'
) {
  const price = plan === 'monthly' ? '99.00' : '799.00';
  
  const request = {
    locale: Iyzipay.LOCALE.TR,
    conversationId: crypto.randomUUID(),
    price: price,
    paidPrice: price,
    currency: Iyzipay.CURRENCY.TRY,
    basketId: `oluk_${plan}_${user.id}`,
    paymentGroup: Iyzipay.PAYMENT_GROUP.SUBSCRIPTION,
    buyer: {
      id: user.id,
      name: user.name.split(' ')[0],
      surname: user.name.split(' ').slice(1).join(' ') || 'User',
      email: user.email,
      identityNumber: '11111111111',
      registrationAddress: 'Turkey',
      city: 'Istanbul',
      country: 'Turkey'
    },
    // ... rest of payment config
  };
  
  return new Promise((resolve, reject) => {
    iyzipay.payment.create(request, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}
```

### 6. N8N (Workflow Automation)

```typescript
// lib/n8n.ts
export async function triggerWorkflow(
  workflowId: string,
  data: Record<string, any>
) {
  const response = await fetch(
    `${process.env.N8N_WEBHOOK_URL}/${workflowId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.N8N_API_KEY}`
      },
      body: JSON.stringify(data)
    }
  );
  
  return response.json();
}

// Tanımlı workflow'lar
export const WORKFLOWS = {
  NEW_USER: 'new-user-onboarding',
  CRISIS_DETECTED: 'crisis-alert',
  CONTENT_PUBLISHED: 'content-notification',
  PAYMENT_RECEIVED: 'payment-processing',
  WEEKLY_REPORT: 'weekly-analytics'
};
```

---

## WEBHOOK YÖNETİMİ

### Webhook Endpoint Yapısı

```typescript
// app/api/webhooks/[provider]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(
  request: NextRequest,
  { params }: { params: { provider: string } }
) {
  const body = await request.text();
  const signature = request.headers.get('x-signature');
  
  // Signature doğrulama
  if (!verifySignature(body, signature, params.provider)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }
  
  const data = JSON.parse(body);
  
  switch (params.provider) {
    case 'iyzico':
      await handleIyzicoWebhook(data);
      break;
    case 'resend':
      await handleResendWebhook(data);
      break;
    case 'cloudinary':
      await handleCloudinaryWebhook(data);
      break;
  }
  
  return NextResponse.json({ received: true });
}

function verifySignature(
  body: string, 
  signature: string | null, 
  provider: string
): boolean {
  const secrets: Record<string, string> = {
    iyzico: process.env.IYZICO_WEBHOOK_SECRET!,
    resend: process.env.RESEND_WEBHOOK_SECRET!,
    cloudinary: process.env.CLOUDINARY_WEBHOOK_SECRET!
  };
  
  const expected = crypto
    .createHmac('sha256', secrets[provider])
    .update(body)
    .digest('hex');
    
  return signature === expected;
}
```

---

## HATA YÖNETİMİ

```typescript
// lib/api-error-handler.ts
export class APIError extends Error {
  constructor(
    public provider: string,
    public code: string,
    public message: string,
    public retryable: boolean = false
  ) {
    super(message);
  }
}

export async function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> {
  let lastError: Error;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      if (error instanceof APIError && !error.retryable) {
        throw error;
      }
      
      await new Promise(resolve => setTimeout(resolve, delay * (i + 1)));
    }
  }
  
  throw lastError!;
}

// Kullanım
const result = await withRetry(
  () => chatWithSirdas(messages, profile),
  3,
  1000
);
```

---

## API KEY YÖNETİMİ

```bash
# .env.local (ASLA commit etme!)
ANTHROPIC_API_KEY=sk-ant-...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
MIXPANEL_TOKEN=...
RESEND_API_KEY=re_...
IYZICO_API_KEY=...
IYZICO_SECRET_KEY=...
N8N_API_KEY=...

# Vercel'de Environment Variables olarak tanımla
# Production / Preview / Development ayrımı yap
```

---

## RATE LIMITING

```typescript
// middleware/rate-limit.ts
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
});

const rateLimiters = {
  sirdas: new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, '1 m'),
    prefix: 'ratelimit:sirdas'
  }),
  api: new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(100, '1 m'),
    prefix: 'ratelimit:api'
  })
};

export async function checkRateLimit(
  identifier: string,
  type: 'sirdas' | 'api'
): Promise<{ success: boolean; remaining: number }> {
  const { success, remaining } = await rateLimiters[type].limit(identifier);
  return { success, remaining };
}
```

---

## ENTEGRASYON

**Girdi Alır:**
- 19-Supabase (veri şeması)
- 21-Performans (optimizasyon gereksinimleri)

**Çıktı Verir:**
- Frontend bileşenleri (API client'lar)
- Backend servisler
- Webhook handler'lar

---

## SÜRÜM
- v1.0 - 29 Aralık 2024 - İlk oluşturma
