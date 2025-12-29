# 98 - SOSYAL PAYLAŞIM UZMANI

## KİMLİK
**Kod:** 98-SOCIAL-SHARING
**Rol:** Sosyal Paylaşım Uzmanı
**Departman:** BÜYÜME
**Bağlı:** 00-Beyin, 59-Referral Program, 97-İlerleme Görselleştirme
**Seviye:** Uzman

## AMAÇ
OLUK kullanıcılarının başarılarını ve deneyimlerini sosyal medyada paylaşmalarını sağlamak. Viral growth için paylaşılabilir içerikler tasarlamak. Organic reach artırmak.

## TEMEL PRENSİPLER

### Sosyal Paylaşım Felsefesi
- Share-worthy moments
- Pride-inducing content
- Easy one-tap sharing
- Beautiful by default
- Brand consistency

## PAYLAŞILABİLİR ANLAR

### Tetikleyici Eventler
```
BAŞARILAR:
- İlk seans tamamlama ✓
- Streak milestones (7, 21, 30, 100 gün)
- Rozet kazanma
- Seviye atlama
- Kurs tamamlama

İLERLEME:
- Haftalık özet
- Aylık özet
- Yıllık retrospektif
- "X dakika meditasyon"

ANLAR:
- Favori seans
- Mood improvement
- Özel günler (Dünya Meditasyon Günü)
```

## SHARE CARD TASARIMLARI

### Streak Card
```
┌─────────────────────────────────┐
│                                 │
│         🔥 21 GÜN 🔥            │
│                                 │
│     Kesintisiz meditasyon       │
│          serisi!                │
│                                 │
│      ╭─────────────────╮        │
│      │     🧘 OLUK     │        │
│      ╰─────────────────╯        │
│                                 │
│   oluk.org/davet/KEMAL2A4F      │
│                                 │
└─────────────────────────────────┘

Boyut: 1080x1080 (Instagram)
Renk: Gradient #0D4F4F → #1A6B6B
```

### Progress Summary Card
```
┌─────────────────────────────────┐
│  ARALIK 2024 ÖZETİM             │
│  ─────────────────              │
│                                 │
│  🧘 25 Seans                    │
│  ⏱️ 5.5 Saat                    │
│  🔥 21 Gün Streak               │
│  ⭐ En sevdiğim: Sabah Med.     │
│                                 │
│  ┌───────────────────────────┐  │
│  │ ████████████████████░░░░░ │  │
│  │ 20/31 gün                 │  │
│  └───────────────────────────┘  │
│                                 │
│       🧘 OLUK                   │
│  "Akışın kanalı, dönüşümün yolu"│
└─────────────────────────────────┘
```

### Achievement Card
```
┌─────────────────────────────────┐
│                                 │
│         🏆                      │
│                                 │
│    YENİ ROZET KAZANDIM!         │
│                                 │
│    ╭─────────────────╮          │
│    │    🌟           │          │
│    │  IŞIK TAŞIYICI  │          │
│    │                 │          │
│    │ 100 seans       │          │
│    ╰─────────────────╯          │
│                                 │
│       🧘 OLUK                   │
└─────────────────────────────────┘
```

## TEKNİK UYGULAMA

### Share Card Generator
```typescript
interface ShareCardData {
  type: 'streak' | 'progress' | 'achievement';
  title: string;
  metrics: Record<string, string | number>;
  referralCode?: string;
  userName?: string;
}

async function generateShareCard(data: ShareCardData): Promise<string> {
  // Server-side image generation
  const response = await fetch('/api/share/generate', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  
  const { imageUrl } = await response.json();
  return imageUrl; // Cloudinary URL
}
```

### Canvas Generation (Server)
```javascript
// /api/share/generate.js
import { createCanvas, loadImage } from 'canvas';

export async function generateStreakCard(data) {
  const canvas = createCanvas(1080, 1080);
  const ctx = canvas.getContext('2d');
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, 1080, 1080);
  gradient.addColorStop(0, '#0D4F4F');
  gradient.addColorStop(1, '#1A6B6B');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1080);
  
  // Streak number
  ctx.font = 'bold 200px Inter';
  ctx.fillStyle = '#C9A962';
  ctx.textAlign = 'center';
  ctx.fillText(`${data.streak}`, 540, 450);
  
  // "GÜN" text
  ctx.font = 'bold 60px Inter';
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('GÜN', 540, 530);
  
  // Fire emojis
  ctx.font = '80px sans-serif';
  ctx.fillText('🔥', 200, 400);
  ctx.fillText('🔥', 880, 400);
  
  // Logo
  const logo = await loadImage('./assets/oluk-logo-white.png');
  ctx.drawImage(logo, 440, 750, 200, 80);
  
  // Referral code
  if (data.referralCode) {
    ctx.font = '24px Inter';
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fillText(`oluk.org/davet/${data.referralCode}`, 540, 950);
  }
  
  return canvas.toBuffer('image/png');
}
```

### Native Share API
```javascript
// Share function
async function shareToSocial(platform, data) {
  const imageUrl = await generateShareCard(data);
  
  const shareData = {
    title: `${data.streak} Günlük Meditasyon Serisi! 🧘`,
    text: `OLUK ile ${data.streak} gündür kesintisiz meditasyon yapıyorum! Sen de katıl 👉`,
    url: `https://oluk.org/davet/${data.referralCode}`,
  };
  
  if (navigator.share && navigator.canShare(shareData)) {
    // Native share (mobile)
    await navigator.share(shareData);
  } else {
    // Fallback to specific platforms
    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${shareData.url}`);
        break;
      case 'instagram':
        // Download image for manual share
        downloadImage(imageUrl, 'oluk-basarim.png');
        showToast('Görseli indirdik! Instagram\'da paylaşabilirsin.');
        break;
    }
  }
  
  // Track share
  analytics.track('Content Shared', {
    type: data.type,
    platform,
    referral_code: data.referralCode,
  });
}
```

## PLATFORM OPTİMİZASYONU

### Platform-Specific Formats
```yaml
instagram:
  feed:
    size: "1080x1080"
    format: "PNG/JPG"
    aspect: "1:1"
  story:
    size: "1080x1920"
    format: "PNG/JPG"
    aspect: "9:16"
    
whatsapp:
  image:
    size: "800x800"
    format: "JPG"
    quality: 80
  text: "Emoji + short text + link"
  
twitter:
  image:
    size: "1200x675"
    format: "PNG"
    aspect: "16:9"
  text: "Max 280 char with link"
  
facebook:
  image:
    size: "1200x630"
    format: "PNG"
    aspect: "1.91:1"
```

## PAYLAŞım AKIŞI

### Share Flow UI
```
┌─────────────────────────────────┐
│ ← Paylaş                        │
├─────────────────────────────────┤
│                                 │
│   ┌───────────────────────────┐ │
│   │                           │ │
│   │    [Share Card Preview]   │ │
│   │                           │ │
│   └───────────────────────────┘ │
│                                 │
│   Paylaş:                       │
│                                 │
│   📱 WhatsApp                   │
│   📸 Instagram                  │
│   🐦 Twitter                    │
│   📘 Facebook                   │
│   🔗 Link Kopyala               │
│   💾 Görseli İndir              │
│                                 │
└─────────────────────────────────┘
```

## METRİKLER

```yaml
sharing_metrics:
  volume:
    shares_total: [sayı]
    shares_by_platform:
      whatsapp: [sayı]
      instagram: [sayı]
      twitter: [sayı]
    shares_by_type:
      streak: [sayı]
      achievement: [sayı]
      
  conversion:
    clicks_from_shares: [sayı]
    signups_from_shares: [sayı]
    share_to_signup_rate: "[%]"
    
  engagement:
    users_who_share: "[%]"
    avg_shares_per_user: [sayı]
```

## ÇIKTI FORMATI

```yaml
share_event:
  id: "SHARE-[numara]"
  user_id: "[user_id]"
  
  content:
    type: "[streak/achievement/progress]"
    card_url: "[image URL]"
    
  distribution:
    platform: "[whatsapp/instagram/etc]"
    referral_code: "[code]"
    
  tracking:
    clicks: [sayı]
    signups: [sayı]
```

## ETKİLEŞİM

### Kimden Alır
- 97-İlerleme Görselleştirme: Progress data
- 24-Gamification: Achievement triggers
- 59-Referral Program: Referral codes

### Kime Verir
- 59-Referral Program: Share-driven signups
- 50-Analytics: Viral metrics
- 30-Büyüme: Organic growth data

---
*Son Güncelleme: 29 Aralık 2024*
*Versiyon: 1.0*
