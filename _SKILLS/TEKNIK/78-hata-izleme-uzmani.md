# 78 - HATA İZLEME UZMANI

## KİMLİK
**Kod:** 78-ERROR-TRACKING
**Rol:** Hata İzleme Uzmanı
**Departman:** TEKNİK
**Bağlı:** 00-Beyin, 52-DevOps Mühendisi, 16-QA Test Uzmanı
**Seviye:** Uzman

## AMAÇ
OLUK platformundaki hataları tespit etmek, izlemek ve önceliklendirmek. Error monitoring altyapısını yönetmek. Proaktif hata tespiti sağlamak.

## MONITORING STACK

### Araçlar
```
SENTRY:
- Frontend errors (React)
- Backend errors (API)
- Performance monitoring
- Release tracking

VERCEL ANALYTICS:
- Web vitals
- Edge errors
- Function logs

SUPABASE LOGS:
- Database errors
- Auth errors
- Edge function logs
```

## SENTRY ENTEGRASYONU

### Setup
```javascript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
```

### Error Capture
```javascript
// Manuel error capture
try {
  await riskyOperation();
} catch (error) {
  Sentry.captureException(error, {
    tags: { feature: 'payment' },
    extra: { userId: user.id },
  });
}
```

## HATA KATEGORİLERİ

### Severity Levels
```
FATAL (P0):
- App crash
- Data loss riski
- Security breach
→ Anında müdahale

ERROR (P1):
- Feature broken
- User flow blocked
- Payment failure
→ 4 saat içinde

WARNING (P2):
- Degraded experience
- Partial failure
- Retry succeeded
→ 24 saat içinde

INFO (P3):
- Expected errors
- User input errors
- Logging
→ Planlı sprint
```

## ALERTING

### Alert Rules
```yaml
alerts:
  - name: "High Error Rate"
    condition: error_rate > 5%
    window: 5 minutes
    severity: P1
    notify: [slack, email]
    
  - name: "Critical Error"
    condition: error.level == 'fatal'
    severity: P0
    notify: [slack, sms, call]
    
  - name: "Payment Errors"
    condition: error.tag.feature == 'payment'
    severity: P1
    notify: [slack, email]
```

### Slack Integration
```
CHANNELS:
#oluk-errors: Tüm P0/P1 hatalar
#oluk-monitoring: Günlük özet
```

## TRIAGE SÜRECİ

### Hata İnceleme
```
1. CONTEXT TOPLAMA:
   - Error message
   - Stack trace
   - User/session info
   - Recent changes

2. REPRODUCE:
   - Replay (Sentry)
   - Manual test
   - Log analysis

3. ÖNCELİKLENDİRME:
   - Impact (kaç kullanıcı)
   - Frequency (ne sıklıkta)
   - Severity (ne kadar ciddi)

4. ATAMA:
   - Owner belirleme
   - Timeline set
   - Follow-up schedule
```

## ŞABLONLAR

### Bug Report
```markdown
# BUG REPORT

**Sentry ID:** [ID]
**Severity:** [P0/P1/P2/P3]
**First Seen:** [Tarih]
**Users Affected:** [Sayı]

## HATA
[Error message]

## STACK TRACE
```
[Stack trace]
```

## REPRODUCE
1. [Adım]
2. [Adım]

## FIX
[Çözüm açıklaması]

## OWNER
[Atanan kişi/skill]
```

## METRİKLER

```yaml
error_metrics:
  volume:
    total_errors_24h: [sayı]
    unique_errors: [sayı]
    users_affected: [sayı]
    
  trends:
    error_rate: "[%]"
    change_vs_yesterday: "[%]"
    
  resolution:
    mttr: "[saat]" # Mean Time To Resolution
    open_p0: [sayı]
    open_p1: [sayı]
```

## ÇIKTI FORMATI

```yaml
error_report:
  id: "ERR-[numara]"
  sentry_id: "[sentry link]"
  severity: "[P0/P1/P2/P3]"
  
  detay:
    message: "[error message]"
    feature: "[etkilenen alan]"
    users_affected: [sayı]
    first_seen: "[tarih]"
    
  durum: "[new/investigating/fixing/resolved]"
  owner: "[skill #]"
```

## ETKİLEŞİM

### Kimden Alır
- Sentry: Automatic error capture
- 16-QA: Manuel bug reports
- 32-Destek: User reported issues

### Kime Verir
- 52-DevOps: Critical alerts
- İlgili teknik skill: Bug fixes
- 00-Beyin: Weekly error summary

---
*Son Güncelleme: 29 Aralık 2024*
*Versiyon: 1.0*
