# 📘 OLUK PORTAL - KAPSAMLI SİSTEM BİBLESİ

**Tarih:** 29 Aralık 2025  
**Versiyon:** 2.0  
**Son Güncelleme:** Sistem Hackeri Modu - Derinlemesine Analiz  
**Durum:** ✅ Production Ready

---

## 🎯 SISTEM ÖZET

| Metrik | Değer |
|--------|-------|
| **Toplam Skill** | 74 skill |
| **Departmanlar** | 11 |
| **API Entegrasyonları** | 9 (Claude, Supabase, Stripe, Google, Apple, Cloudinary, n8n, Sentry, YouTube) |
| **Kritik Hub'lar** | 00-Beyin (47 ref), 30-Büyüme (12 ref) |
| **İlerleme** | ~57% (74/130 planlı) |
| **Stack** | Next.js 14, React 18, TypeScript, Tailwind, Supabase |

---

## 📁 PROJE YAPISI

```
oluk-portal/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API Routes
│   │   │   ├── sirdas/       # Claude AI endpoint
│   │   │   └── webhooks/      # Stripe, Supabase webhooks
│   │   ├── dersler/           # Lesson pages
│   │   ├── components/
│   │   └── layout.tsx
│   ├── components/            # React components
│   ├── lib/
│   │   ├── supabase.ts       # Supabase client
│   │   └── utils/
│   ├── constants/             # Config, enums
│   └── styles/               # CSS, Tailwind
│
├── _BRAIN/                    # System intelligence & docs
│   ├── core/                 # Core architecture
│   ├── config/               # Configuration docs
│   ├── content/              # Content strategy
│   ├── prompts/              # AI prompts, system messages
│   │   ├── seo/             # SEO optimization
│   │   └── gorsel-uretim/   # Visual generation (Vertex AI, Gemini)
│   ├── logs/                # Operation logs, changefiles
│   ├── automation/          # Automation scripts
│   └── decisions/           # Architecture decisions
│
├── _SKILLS/                  # 74 skill files organized by department
│   ├── ICERIK/              # 22 skills (Content creation)
│   ├── PAZARLAMA/           # 10 skills (Marketing)
│   ├── AI-OPS/              # 8 skills (Infrastructure)
│   ├── BUYUME/              # 7 skills (Growth)
│   ├── DESTEK/              # 5 skills (Support)
│   ├── STRATEJI/            # 5 skills (Strategy)
│   ├── PRODUKSIYON/         # 4 skills (Production)
│   ├── TEKNIK/              # 4 skills (Tech)
│   ├── FINANS/              # 3 skills (Finance)
│   ├── KALITE/              # 3 skills (Quality)
│   └── UX-PSIKOLOJI/        # 3 skills (UX/Psychology)
│
├── public/                   # Static files, fonts, images
├── scripts/                  # Build, deploy scripts
├── out/                      # Static export (generated)
├── upload/                   # Incoming file buffer
│
└── Config Files:
    ├── next.config.js       # Next.js configuration
    ├── tailwind.config.ts   # Tailwind CSS
    ├── tsconfig.json        # TypeScript config
    ├── vercel.json          # Vercel deployment
    ├── package.json         # Dependencies
    └── .env files           # Environment variables
```

---

## 🔐 ENVIRONMENT VARIABLES (Critical)

### API KEYS & CREDENTIALS

```
🔐 ANTHROPIC_API_KEY
   ├── Service: Anthropic (Claude AI)
   ├── Source: https://console.anthropic.com/
   ├── Usage: SIRDAŞ AI conversations
   ├── Location: Vercel secrets (encrypted)
   └── Scope: claude-sonnet-4-20250514 model

🔐 SUPABASE_SERVICE_ROLE_KEY
   ├── Service: Supabase (Database)
   ├── Source: https://supabase.com/dashboard
   ├── Usage: Server-side database operations
   ├── Level: Full admin access
   └── WARNING: Server-side only, never expose to client

🔐 NEXT_PUBLIC_SUPABASE_ANON_KEY
   ├── Service: Supabase (Client)
   ├── Source: https://supabase.com/dashboard
   ├── Usage: Client-side database queries
   ├── Level: Row-level security enforced
   └── Format: eyJ... (JWT token)

NEXT_PUBLIC_SUPABASE_URL
   ├── Service: Supabase instance
   ├── Format: https://xxxxx.supabase.co
   └── Public: Safe to expose (project-specific)

🔐 CLOUDINARY_API_KEY & CLOUDINARY_API_SECRET
   ├── Service: Cloudinary (Image CDN/Optimization)
   ├── Cloud Name: dzegofdgp
   ├── Source: https://console.cloudinary.com/
   ├── Usage: Image upload, transformation, delivery
   └── Format: API Key: 283632349543287 (masked in docs)

🔐 YOUTUBE_API_KEY
   ├── Service: YouTube Data API
   ├── Source: https://console.cloud.google.com/
   ├── Usage: Video publishing, analytics
   └── Scope: youtube.upload, youtube.readonly

🔐 GEMINI_API_KEY (Vertex AI)
   ├── Service: Google Cloud (Visual generation)
   ├── Source: https://console.cloud.google.com/
   ├── Usage: Image generation (alternative to Cloudinary)
   └── Region: us-central1

🔐 N8N_WEBHOOK_URL
   ├── Service: n8n (Workflow automation)
   ├── Usage: Event triggers, automation workflows
   └── Protocol: POST webhooks

🔐 STRIPE_API_KEY (When added)
   ├── Service: Stripe (Payments)
   ├── Usage: Subscription management
   └── Scope: Products, customers, subscriptions
```

### DEPLOYMENT ENVIRONMENT

```
NEXT_PUBLIC_SITE_URL = https://oluk-portal.vercel.app
NODE_ENV = production
```

---

## 🏗️ KRITIK SISTEM BAĞLANTILARI

### Skill Hub Hierarchy (Citation Network)

```
00-BEYIN (Kültür Muhafızı)
  ├── Referenced by: 47 other skills (CORE)
  ├── Function: Cultural & value keeper
  └── Connection: Tüm sistem buna dayanıyor

30-BÜYÜME (Growth Expert)
  ├── Referenced by: 12 skills
  ├── Function: Growth strategy, acquisition
  └── Key deps: 28, 29, 50

28-SOSYAL MEDYA (Social Media Strategist)
  ├── Referenced by: 7 skills
  ├── Function: SM strategy, content planning
  └── Key deps: 29, 30, 49

29-İÇERİK PAZARLAMACISI (Content Marketing)
  ├── Referenced by: 6 skills
  ├── Function: Content distribution, funnel
  └── Key deps: 28, 30, 42

19-SUPABASE MİMARİ (Database Architecture)
  ├── Referenced by: 4 skills
  ├── Function: Database design, optimization
  └── Key deps: 20, 21, 76
```

### Pipeline Order (Workflow Sequence)

```
CONTENT PIPELINE:
08-Müfredat → 09-Ders → 10-Seans → 11-Egzersiz → 12-Dil → 13-Editör → 14-Düzeltmen → 15-Stil → 18-Yayın

GROWTH PIPELINE:
30-Büyüme ← 28-Sosyal ← 29-İçerik ← 50-Analytics
           ← 44-Email ← 45-Influencer ← 46-PR
           ← 47-Ads ← 48-Partnership ← 49-Landing

TECHNICAL PIPELINE:
06-Prompt → 19-DB → 20-API → 21-Perform → 52-DevOps
                ↓
            75-Webhooks
                ↓
            76-Database → 77-Cache ← 78-Errors
```

---

## 🔌 API ENTEGRASYONLARI (9 Systems)

### 1. ANTHROPIC - Claude AI (4 Skills)
```
Skills: 15-Stil, 20-API, 53-AI Model, 79-GEO
Endpoint: /api/sirdas/route.ts
Model: claude-sonnet-4-20250514
Usage: SIRDAŞ AI companion conversations
Auth: ANTHROPIC_API_KEY (env)
Rate Limit: Token-based
Integration Type: REST + AI SDK (@ai-sdk/anthropic)
```

### 2. SUPABASE - Database (13 Skills)
```
Skills: 19, 20, 21, 24, 40, + 8 more
Service: PostgreSQL database, auth, storage
Tables: 
  - users (auth)
  - profiles (extended user data)
  - lessons, sessions, categories
  - user_progress, user_sessions
  - subscriptions, payments
  - chat_messages (SIRDAŞ)
  - notifications
Auth: Row-level security (RLS)
SDK: @supabase/supabase-js
Webhook: Supported (stripe events)
```

### 3. CLOUDINARY - Image CDN (7 Skills)
```
Skills: 20, 21, 25, 40, 52, + others
Cloud Name: dzegofdgp
Services:
  - Image optimization & delivery
  - Automatic format conversion (WebP, AVIF)
  - Responsive images
  - OG image generation
Integration: next-cloudinary SDK
SDK: cloudinary NPM package
```

### 4. GOOGLE SERVICES (14 Skills)
```
a) YouTube API:
   Skills: 30, 41, 46, + others
   Usage: Video publishing, channel management
   
b) Gemini (Vertex AI):
   Skills: 20, 21, 41, + others
   Usage: Visual generation, image analysis
   Region: us-central1

c) Google Analytics:
   Skills: 30, 50, + others
   Usage: Traffic analysis, user behavior

d) Google Cloud Storage:
   Skills: 40, 52, + others
   Usage: Content backup, CDN
```

### 5. APPLE - AppStore & iOS (5 Skills)
```
Skills: 30, 54, 63, 65, 75
Services:
  - App Store publishing
  - In-app purchases
  - Subscription management
  - TestFlight
Auth: Developer account + API keys
```

### 6. STRIPE - Payments (4 Skills)
```
Skills: 51, 60, 63, 75
Services:
  - Subscription management
  - Payment processing
  - Invoice generation
  - Webhook events
Integration: Server-side, secured endpoints
Tables: subscriptions, payments (Supabase)
Webhook: /api/webhooks/stripe
```

### 7. N8N - Workflow Automation (5 Skills)
```
Skills: 20, 22, 23, 24, 75
Services:
  - User event triggers
  - Email automation
  - Slack notifications
  - Conditional workflows
Integration: Webhooks (POST)
Auth: N8N_WEBHOOK_URL (env)
```

### 8. SENTRY - Error Tracking (3 Skills)
```
Skills: 21, 52, 78
Services:
  - Error monitoring
  - Performance tracking
  - Release management
Dashboard: https://sentry.io
SDK: @sentry/next
```

### 9. STRIPE + APPLE IAP (Subscription)
```
Dual billing system:
  - Web: Stripe
  - iOS: App Store (in-app)
SKU Management: Separate price IDs
Currency: TRY, USD, EUR
Churn tracking: Supabase webhooks
```

---

## 📊 VERİTABANI YAPISI

### Ana Tablolar

```sql
-- Kullanıcı Yönetimi
users (Supabase Auth)
  ├── id (UUID)
  ├── email
  ├── password (encrypted)
  └── created_at

profiles
  ├── user_id (FK)
  ├── full_name
  ├── avatar_url
  ├── subscription_tier (free/premium/family)
  ├── language (tr/en)
  └── preferences (JSON)

-- İçerik Yönetimi
lessons
  ├── id
  ├── title
  ├── category_id (FK)
  ├── difficulty (beginner/intermediate/advanced)
  ├── video_url (Cloudinary)
  ├── duration_minutes
  └── published_at

sessions
  ├── id
  ├── lesson_id (FK)
  ├── title
  ├── description
  ├── duration_minutes
  └── order

categories
  ├── id
  ├── name
  ├── description
  └── icon

-- İlerleme Takibi
user_progress
  ├── user_id (FK)
  ├── lesson_id (FK)
  ├── completed_at
  ├── time_spent_seconds
  └── score

user_sessions
  ├── user_id (FK)
  ├── session_id (FK)
  ├── completed_at
  └── notes

-- Abonelik & Ödeme
subscriptions
  ├── id
  ├── user_id (FK)
  ├── stripe_subscription_id
  ├── plan (monthly/yearly)
  ├── status (active/canceled/past_due)
  ├── start_date
  ├── end_date
  └── auto_renew

payments
  ├── id
  ├── subscription_id (FK)
  ├── stripe_payment_id
  ├── amount
  ├── currency
  ├── status
  └── paid_at

-- Etkileşim
chat_messages (SIRDAŞ)
  ├── id
  ├── user_id (FK)
  ├── conversation_id
  ├── role (user/assistant)
  ├── content
  ├── tokens_used
  └── created_at

notifications
  ├── id
  ├── user_id (FK)
  ├── type (reminder/achievement/alert)
  ├── title
  ├── body
  ├── read_at
  └── created_at
```

---

## 🎯 KRİTİK METRİKLER (Standardized)

### SaaS Metrics

```
LTV (Lifetime Value):
  Formula: ARPU × (1 / Monthly Churn Rate)
  Range: ₺1,500 - ₺5,000
  Owner: Skill 64-Finance
  Used in: 62-Pricing, 30-Growth, 50-Analytics

CAC (Customer Acquisition Cost):
  Formula: Monthly Marketing Spend / New Paying Users
  Target: CAC < LTV/3 (LTV:CAC > 3:1)
  Owner: Skill 64-Finance
  Used in: 21-Performance, 30-Growth, 50-Analytics

ARPU (Average Revenue Per User):
  Formula: MRR / Active Paying Users
  Current: ~₺150 (Premium monthly)
  Owner: Skill 64-Finance
  Used in: 30-Growth, 62-Pricing, 64-Finance

MRR (Monthly Recurring Revenue):
  Formula: Σ (Each user's monthly payment)
  Tracking: Supabase payments table
  Owner: Skill 64-Finance

Churn Rate:
  Formula: (Users canceled in month / Start users) × 100
  Target: <5% monthly
  Owner: Skill 64-Finance
  Used in: 23-Retention, 29-Content Marketing

Runway:
  Formula: Cash Available / Monthly Burn Rate
  Target: >12 months (ideal 18+)
  Owner: Skill 64-Finance
```

### Content Metrics

```
Engagement Rate:
  Definition: (Likes + Comments + Shares) / Impressions
  Target: >3%
  Owner: Skill 28-Social Media

Video Completion Rate:
  Definition: Users who watched to 90% / Total who started
  Target: >60%
  Owner: Skill 10-Session Designer

Subscriber Growth Rate:
  Definition: (New - Churned) / Previous Month Users
  Target: >10% monthly
  Owner: Skill 30-Growth

Content Quality Score:
  Factors: Accuracy (40%), Clarity (30%), Engagement (20%), Production (10%)
  Target: >85/100
  Owner: Skill 16-QA Test
```

---

## 🛠️ TEKNIK STACK

### Frontend
```
Framework: Next.js 14.2.35
  ├── App Router (src/app)
  ├── Server Components
  ├── Image Optimization
  └── Static Export capable

UI Framework: React 18.3.1
  ├── React Hooks
  ├── Context API (no Redux)
  └── Suspense boundaries

Styling: Tailwind CSS
  ├── Design System: OLUK Ottoman Cyberpunk
  ├── Colors: Turkuaz (#0D4F4F), Gold (#C9A962), Cream
  ├── Typography: Playfair Display + Inter
  └── Dark mode: Supported

Icons: Phosphor Icons (@phosphor-icons/react)
Component Library: shadcn/ui patterns

Language: TypeScript 5.7.2
  ├── Strict mode
  ├── Full type safety
  └── Path aliases (@/...)
```

### Backend/Infrastructure
```
Database: Supabase (PostgreSQL)
  ├── Managed instances
  ├── Row-level security
  ├── Real-time subscriptions
  └── Auth system built-in

API Layer: Next.js API Routes
  ├── /api/sirdas - Claude AI
  ├── /api/sirdash/chat - Chat history
  ├── /api/webhooks/* - External events
  └── Edge functions capability

File Storage: Cloudinary
  ├── CDN: Global distribution
  ├── Transformations: Automatic
  ├── Formats: WebP, AVIF auto-generation
  └── Analytics: Built-in

AI Integration: Vercel AI SDK
  ├── @ai-sdk/anthropic - Claude
  ├── @ai-sdk/react - Streaming
  └── genAI package - Google Vertex

Authentication:
  ├── Supabase Auth (JWT)
  ├── OAuth: Google, Apple (planned)
  └── Email/Password: Current default
```

### Deployment & DevOps
```
Hosting: Vercel
  ├── Automatic deployments from GitHub
  ├── Environment variables management
  ├── Edge functions
  ├── Analytics integration
  └── Custom domains

CI/CD: GitHub Actions (likely)
  ├── Build on push
  ├── Test suite
  └── Automated deployments

Monitoring: Sentry
  ├── Error tracking
  ├── Performance monitoring
  ├── Release tracking
  └── Alerting

Sitemap: next-sitemap
  ├── Auto-generated sitemap.xml
  ├── SEO optimization
  └── Updated on build
```

---

## 🔑 KOD STANDARDLARI

### Skill Numaralandırması

```
Format: ## SKİLL_NUMBER - SKİLL_NAME
Range: 00-130 (130 total planned)
Status: 74/130 (57%) complete

Categories:
  00-05: Foundation & Management
  06-27: Content Creation
  28-50: Marketing & Growth
  51-67: Finance & Operations
  68-90: Technical & Production (IN PROGRESS)
  91-130: Advanced & Specialty (PLANNED)
```

### Kod Formatı

```
Standard: NUMBER-ENGLISH-CAPS
Example: 00-CULTURE-KEEPER, 30-GROWTH-EXPERT
Validation: ^[0-9]+-[A-Z][A-Z0-9\-]*$

INVALID (Legacy):
  ⚠️  CONTENT-CURRICULUM-08
  ⚠️  CONTENT-EDITOR-13
  ⚠️  CONTENT-EXERCISE-11
  (Need fixing: 9 skills - reverse numbering issue)
```

---

## 📋 DEPLOYMENT & SEKRETER CONFIGURATION

### Vercel Secrets (Encrypted)
```
Environment Variables set in Vercel Dashboard:
  ✓ ANTHROPIC_API_KEY
  ✓ SUPABASE_SERVICE_ROLE_KEY
  ✓ CLOUDINARY_API_KEY
  ✓ CLOUDINARY_API_SECRET
  ✓ YOUTUBE_API_KEY
  ✓ GEMINI_API_KEY
  ✓ N8N_WEBHOOK_URL

Public Variables (safe):
  ✓ NEXT_PUBLIC_SUPABASE_URL
  ✓ NEXT_PUBLIC_SUPABASE_ANON_KEY
  ✓ NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
```

### Local Development
```
File: .env.local
Copy from: .env.example
Required for:
  - Local API testing
  - Database connections
  - Image optimization
  - AI model testing
```

---

## 🎓 OLUK DNA (6 Values + 8 Mentors)

### 6 Core Values

```
1. Damıtılmış Dil (Distilled Language)
   - Clear, concise, elegant
   - No fluff, maximum clarity
   
2. Derin Ama Anlaşılır (Deep But Understandable)
   - Complex topics made accessible
   - Depth with approachability
   
3. Zarif (Elegant)
   - Aesthetically refined
   - Technically superior
   
4. Manipülatif Değil (Non-Manipulative)
   - Honest value proposition
   - Ethical business practices
   
5. Generic Wellness Değil (Not Generic)
   - Culturally rooted (Sufi tradition)
   - Uniquely Turkish perspective
   
6. En İyinin En İyisi (Best of Best)
   - Premium quality
   - No compromises
```

### 8 Mentor Synthesis

```
İsmet Özel (20%) - Philosophical depth, critique
Cemil Meriç (15%) - Cultural wisdom, history
Orhan Veli (15%) - Turkish spirit, simplicity
Peyami Safa (10%) - Modern relevance, psychology
Ahmet Hamdi Yazır (15%) - Islamic scholarship, interpretation
Necip Fazıl (10%) - Spiritual direction, poetry
Sezai Karakoç (10%) - National consciousness
Yahya Kemal (5%) - Aesthetic refinement
```

---

## ⚡ PERFORMANCE TARGETS

```
Page Load: <2 seconds
FCP (First Contentful Paint): <1.5s
LCP (Largest Contentful Paint): <2.5s
CLS (Cumulative Layout Shift): <0.1

Video Streaming:
  - Adaptive bitrate (1-5 Mbps)
  - Buffer ahead: 30 seconds
  - Codec: H.264 (compatibility)
  
Audio Quality:
  - Format: AAC / MP3
  - Bitrate: 320 kbps
  - Loudness: -16 LUFS
  
Image Optimization:
  - WebP/AVIF auto-generated
  - Lazy loading enabled
  - Responsive srcset
```

---

## 🔍 IDENTIFIED ISSUES & GAPS

### Critical (Fix Now)

```
1. Kod Format Inconsistency (9 skills):
   Issue: CONTENT-CURRICULUM-08 (should be 08-CURRICULUM)
   Impact: Parsing, automation
   Fix: Rename skill codes in reverse order
   Skills: 07-15 (content group)

2. Metric Standardization Gaps:
   Issue: LTV/CAC/ARPU calculated differently across skills
   Impact: Financial decision-making
   Fix: 64-Finance owns definitions (DONE ✅)
   Status: Documented, needs implementation check
```

### High Priority (Fix Soon)

```
1. Legal Documentation (65-Legal):
   Issue: Placeholder, needs real legal counsel
   Impact: Compliance risk
   Timeline: Before production launch
   
2. Post-Production Pipeline:
   Issue: Video Editing, Color Grading missing
   Impact: Content quality
   Skills needed: 81-82 (planned)
   
3. Security Testing:
   Issue: No dedicated security skill
   Impact: Vulnerability risks
   Skills needed: 81+ (TEKNİK expansion)
```

### Medium Priority (Optimize)

```
1. Departman Organization:
   Issue: BÜYÜME (7 skills) might need splitting
   Option: GROWTH vs EXPANSION
   Timeline: After 130 skill completion
   
2. Metric Dashboard:
   Issue: No unified analytics view
   Owner: 50-Analytics + 64-Finance
   Timeline: Q2 2026
   
3. Content Testing:
   Issue: A/B testing incomplete
   Owner: 74-A/B Test specialist
   Timeline: Q1 2026
```

---

## 🎯 NEXT ACTIONS

### Immediate (Week 1)

```
1. Fix 9 skill codes (07-15 CONTENT group)
2. Verify metric standardization implementation (64-Finance)
3. Audit all API integrations for security
4. Create API documentation (rate limits, auth)
```

### Short Term (Weeks 2-4)

```
1. Complete skills 68-80 integration
2. Launch skills 81-90 batch (TEKNİK+PAZARLAMA)
3. Security audit & penetration testing
4. Performance optimization (LCP, FCP targets)
```

### Medium Term (Month 2)

```
1. Skills 91-110 (Enterprise tier)
2. Unified analytics dashboard
3. Legal counsel review & compliance
4. B2B pricing & contracts
```

---

## 📞 KONTAKT & KAYNAKLAR

### Admin Panels

```
Supabase Dashboard: https://supabase.com/dashboard
Vercel Deploy: https://vercel.com/KemalG-u/oluk-portal
Cloudinary Console: https://console.cloudinary.com/
Sentry Monitoring: https://sentry.io/
Stripe Dashboard: https://dashboard.stripe.com/
```

### Documentation

```
Next.js: https://nextjs.org/docs
Supabase: https://supabase.com/docs
Anthropic: https://docs.anthropic.com/
Cloudinary: https://cloudinary.com/documentation
Tailwind: https://tailwindcss.com/docs
```

---

## ✅ CHECKLIST

- [x] System architecture documented
- [x] API integrations catalogued
- [x] Environment variables secured
- [x] Database schema defined
- [x] Performance targets set
- [x] OLUK DNA preserved
- [x] Metrics standardized
- [x] Issues identified
- [x] Next actions planned
- [x] This bible created

---

**Created by:** GitHub Copilot (Sistem Hackeri Modu)  
**Scope:** Complete system documentation  
**Classification:** INTERNAL - System Reference  
**Last Updated:** 29 December 2025