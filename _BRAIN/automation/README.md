# 🤖 OLUK YouTube Transcript Bot - Kullanım Kılavuzu

## 📋 Kurulum (İlk Kez)

### 1. Python Paketlerini Kurun
```bash
cd /workspaces/oluk-portal/_BRAIN/automation
pip3 install -r requirements.txt
```

### 2. API Key'leri Ayarlayın
```bash
# .env.example dosyasını kopyalayın
cp .env.example .env

# API key'lerinizi girin
nano .env
```

**.env dosyasında doldurun:**
```bash
YOUTUBE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
GEMINI_API_KEY=AIzaSyYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
```

### 3. OLUK GEM Prompt'unu Güncelleyin
```bash
# youtube_transcript_bot.py dosyasını açın
nano youtube_transcript_bot.py

# Line ~188'e gidin, system_prompt'u kendi OLUK GEM prompt'unuzla değiştirin
```

---

## 🚀 Kullanım

### Test Modu (1 video)
```bash
python3 youtube_transcript_bot.py --test
```
**Ne yapar?**
- 1 video işler
- Tüm adımları gösterir
- Hata varsa anında görürsünüz

### Normal Mod (15 video/gün)
```bash
python3 youtube_transcript_bot.py
```

### Özel Kanal
```bash
python3 youtube_transcript_bot.py --channel https://www.youtube.com/@yenikanal
```

### Limit Belirleme
```bash
python3 youtube_transcript_bot.py --limit 5
```

---

## 🔄 Otomatik Çalıştırma (Cron Job)

### Günlük Otomatik Çalışma
```bash
# Crontab'ı açın
crontab -e

# Her gün saat 03:00'da çalışsın
0 3 * * * cd /workspaces/oluk-portal/_BRAIN/automation && python3 youtube_transcript_bot.py >> bot.log 2>&1
```

### Haftada 3 Kez (Pazartesi, Çarşamba, Cuma)
```bash
0 3 * * 1,3,5 cd /workspaces/oluk-portal/_BRAIN/automation && python3 youtube_transcript_bot.py >> bot.log 2>&1
```

### Her 12 Saatte Bir
```bash
0 */12 * * * cd /workspaces/oluk-portal/_BRAIN/automation && python3 youtube_transcript_bot.py >> bot.log 2>&1
```

---

## 📊 İzleme

### Logs
```bash
# Real-time log takibi
tail -f youtube_bot.log

# Son 50 satır
tail -n 50 youtube_bot.log

# Hata logları
grep "ERROR" youtube_bot.log
```

### Progress Kontrolü
```bash
# İlerleme dosyasını görüntüle
cat progress.json | python3 -m json.tool
```

**Örnek progress.json:**
```json
{
  "channels": {
    "Ayşe Sarzey Bek": {
      "videos": {
        "abc123": {
          "title": "Video Başlığı",
          "processed_at": "2025-12-19T10:30:00",
          "status": "completed"
        }
      }
    }
  },
  "last_run": "2025-12-19T10:30:00",
  "total_processed": 15
}
```

---

## 🔧 Sorun Giderme

### API Key Hatası
```
❌ Error: API key not valid
```
**Çözüm:** `.env` dosyasında API key'leri kontrol edin

### Transcript Bulunamadı
```
⚠️ No transcript available
```
**Neden:** Video'da altyazı yok veya devre dışı
**Sonuç:** Video atlanır, diğerine geçilir

### Rate Limit Aşıldı
```
🚫 Daily limit reached (15 videos)
```
**Neden:** Günlük limiti doldurdunuz
**Çözüm:** Yarın otomatik devam eder

### Cloudinary Hatası
```
❌ Cloudinary upload error
```
**Çözüm:** `.env` dosyasında Cloudinary bilgilerini kontrol edin

---

## 📁 Cloudinary Klasör Yapısı

```
oluk/transcripts/
├── ayse-sarzey-bek/
│   ├── ham/
│   │   ├── video-basligi-1.json
│   │   ├── video-basligi-2.json
│   │   └── ...
│   └── cevrilmis/
│       ├── video-basligi-1.json
│       ├── video-basligi-2.json
│       └── ...
└── yeni-kanal/
    ├── ham/
    └── cevrilmis/
```

**JSON İçeriği (ham):**
```json
{
  "channel": "Ayşe Sarzey Bek",
  "video_id": "abc123",
  "title": "Video Başlığı",
  "published_at": "2025-01-01T10:00:00Z",
  "transcript": {
    "language": "tr",
    "is_generated": false,
    "full_text": "Merhaba ben...",
    "segments": [...]
  },
  "processed_at": "2025-12-19T10:30:00"
}
```

**JSON İçeriği (çevrilmiş):**
```json
{
  ...tüm ham data...
  "oluk_processed": "# Video Başlığı\n\nOLUK dil yapısıyla işlenmiş metin..."
}
```

---

## 🎯 Workflow

```
1. Bot başlatılır (manuel veya cron)
   ↓
2. YouTube kanalından video listesi çekilir
   ↓
3. Her video için:
   a. Zaten işlenmiş mi kontrol edilir (progress.json)
   b. İşlenmemişse transcript çekilir
   c. Ham transcript Cloudinary'ye yüklenir (ham/)
   d. OLUK GEM ile işlenir
   e. İşlenmiş versiyon Cloudinary'ye yüklenir (çevrilmiş/)
   f. progress.json güncellenir
   g. Random delay (30-120s)
   ↓
4. 15 video işlenince veya videolar bitince durur
   ↓
5. Sonraki gün devam eder (cron ile)
```

---

## 🔐 Güvenlik

- ✅ Rate limiting (YouTube ban'ı önler)
- ✅ Random delays (bot detection önler)
- ✅ User-agent rotation
- ✅ API key'ler .env dosyasında (git'e commit edilmez)
- ✅ Progress tracking (kaldığı yerden devam)
- ✅ Error handling (crash'lerde bile güvenli)

---

## 📈 İstatistikler

**Tahminler:**
- **Ayşe Sarzey Bek kanalı:** ~50-100 video (tahmin)
- **İşlem hızı:** 15 video/gün
- **Tamamlanma:** ~3-7 gün
- **Cloudinary storage:** ~10-20 MB (JSON'lar hafif)

**Maliyet:**
- YouTube API: ✅ Ücretsiz (10K quota/gün)
- Gemini API: ✅ Ücretsiz (1500 req/gün)
- Cloudinary: ✅ Zaten var

---

## 🎉 Başarı Mesajı

```
✅ Video processing completed!
📦 Raw: https://res.cloudinary.com/...ham/video-basligi.json
✨ Processed: https://res.cloudinary.com/...cevrilmis/video-basligi.json
```

Bu URL'leri tarayıcıda açarak sonuçları görebilirsiniz!

---

## 📞 Sorun mu var?

1. **Logs kontrol edin:** `tail -f youtube_bot.log`
2. **Progress kontrol edin:** `cat progress.json`
3. **Test mode çalıştırın:** `python3 youtube_transcript_bot.py --test`

**Hala çözülmedi mi?** Bana log dosyasını gönderin! 🚀
