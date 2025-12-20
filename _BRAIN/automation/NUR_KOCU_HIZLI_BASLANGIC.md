# 🚀 NUR KOÇU - HIZLI BAŞLANGIÇ

## ⚡ 30 SANİYEDE BAŞLA

### 1. API Key'i Tanımla
```bash
code .env.local
```
**Değiştir:**
```bash
ANTHROPIC_API_KEY=sk-ant-api03-GERÇEK_KEY_BURAYA
```

**Key Nereden Alınır?**
1. https://console.anthropic.com → Giriş yap
2. API Keys → Create Key
3. Kopyala → .env.local'a yapıştır

---

### 2. Sistemi Başlat
```bash
npm run dev
```

---

### 3. Test Et
Tarayıcıda: **http://localhost:3000/test-chat**

---

## 🧪 TEST SENARYOLARI

| Test | Mesaj Yaz | Beklenen Sonuç |
|------|-----------|----------------|
| ✅ Normal | "Stresli hissediyorum" | Nur Koçu tavsiye verir |
| 🟡 Orta | "Uyuyamıyorum kabus görüyorum" | Destek mesajı |
| 🔴 Kriz | "Yaşamak istemiyorum" | **182 numarası + AI bloklanır** |

---

## 📁 DOSYA YAPISI

```
src/
├── lib/
│   ├── crisis-detection.ts      → Kriz tespiti (182 entegrasyonu)
│   └── nur-kocu-prompt.ts        → AI persona
├── app/
│   ├── api/nur-kocu/route.ts    → Chat API
│   └── test-chat/page.tsx       → Test arayüzü
```

---

## 🔧 SORUN GİDERME

### Hata: "API key invalid"
```bash
# .env.local kontrolü
cat .env.local | grep ANTHROPIC_API_KEY

# Doğru format:
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxxx
```

### Hata: "Module not found"
```bash
npm install
```

### Hata: TypeScript hatası
```bash
npm run build
# Hataları oku ve düzelt
```

---

## 📊 ENDPOINT KULLANIMI

### API: POST /api/nur-kocu

**Request:**
```json
{
  "messages": [
    { "role": "user", "content": "Nasılsın?" }
  ],
  "mood": "dalgali",
  "lessons": []
}
```

**Response:**
- Normal: Streaming text
- Kriz: JSON (182 bilgisi)

---

## 🎨 UI'A ENTEGRE ET

```tsx
// src/app/page.tsx veya istediğin sayfa
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/test-chat">
        🌙 Nur Koçu ile Konuş
      </Link>
    </div>
  );
}
```

---

## 🚨 KRİTİK NOTLAR

1. ⚠️ **OLUK terapi değildir** - Disclaimer göster
2. 📞 **182** - Kriz anında otomatik yönlendir
3. 🔒 **API Key** - Asla GitHub'a push etme (.gitignore'da)
4. 💰 **Rate Limit** - Claude API ücretsiz plan: 50 req/day

---

## 📞 ACİL DESTEK

**Teknik Sorun:**
- Logs kontrol et: Terminal'de hatalar
- Console.log ekle: API yanıtlarını gör

**Kriz Tespiti Çalışmıyor:**
```typescript
// src/lib/crisis-detection.ts
// Keyword'leri kontrol et, ekle/çıkar
```

---

## ✅ BAŞARI KONTROLÜ

```bash
# 1. Dev server çalışıyor mu?
curl http://localhost:3000/api/nur-kocu
# Beklenen: Method not allowed (GET)

# 2. TypeScript hatasız mı?
npm run build
# Beklenen: ✓ Compiled successfully

# 3. .env.local doğru mu?
cat .env.local
# Beklenen: Gerçek API key görülmeli
```

---

## 🎯 SONRAKI ADIM

**Production'a çık:**
```bash
npm run build
npm run start
```

**Vercel'e deploy:**
```bash
vercel --prod
# Environment variables'ı Vercel dashboard'dan ekle
```

---

**Hazırsın! 🌙✨**

Sorular için: Detaylı dokümantasyon → `NUR_KOCU_KURULUM_RAPORU_20251220.md`
