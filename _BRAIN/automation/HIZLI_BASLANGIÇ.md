# 🎉 YouTube Transcript Bot - HAREKETLİ ADIMLAR

## ✅ Sistem Hazır! Şimdi Ne Yapmalısınız?

---

## ADIM 1: API Key'leri Alın (5 dakika)

### YouTube Data API v3
1. **Git:** https://console.cloud.google.com/apis/credentials
2. **Login:** Google Ultra hesabınız
3. **Enable:** "YouTube Data API v3"
4. **Create:** "API Key" oluşturun
5. **Restrict:** Sadece YouTube API'ye kısıtlayın
6. **Copy:** Key'i kopyalayın

### Gemini API
1. **Git:** https://aistudio.google.com/app/apikey  
2. **Create:** "Get API Key"
3. **Copy:** Key'i kopyalayın

---

## ADIM 2: OLUK GEM Prompt'unu Hazırlayın

### Eğer OLUK GEM'iniz varsa:
1. **Git:** https://aistudio.google.com/
2. **Aç:** "OLUK GEM DİL USTASI - 9 USTA SENTEZİ"
3. **Copy:** System Instructions'ı kopyalayın

### Eğer OLUK GEM'iniz yoksa:
1. **Oku:** `OLUK_GEM_PROMPT_TEMPLATE.md`
2. **Oluştur:** AI Studio'da yeni Gem
3. **Test et:** Birkaç deneme yap

---

## ADIM 3: Sistemi Kurun (3 dakika)

```bash
# 1. Klasöre gidin
cd /workspaces/oluk-portal/_BRAIN/automation

# 2. Paketleri kurun
pip3 install -r requirements.txt

# 3. .env dosyası oluşturun
cp .env.example .env

# 4. API key'leri .env'ye ekleyin
nano .env
# YOUTUBE_API_KEY=AIzaSy...
# GEMINI_API_KEY=AIzaSy...
# (Ctrl+X → Y → Enter ile kaydet)

# 5. OLUK GEM prompt'unu ekleyin
nano youtube_transcript_bot.py
# Line ~188: system_prompt değişkenine kendi prompt'unuzu yapıştırın
# (Ctrl+X → Y → Enter ile kaydet)
```

---

## ADIM 4: İlk Testi Yapın (2 dakika)

```bash
# Test mode (sadece 1 video işler)
python3 youtube_transcript_bot.py --test
```

**Beklenen çıktı:**
```
🚀 OLUK YouTube Bot Started
📺 Channel: https://www.youtube.com/@aysesarzeybek2739/videos
✅ Channel ID: UC...
📹 Found X videos
🎬 Processing: [Video başlığı]
⏳ Waiting 45.2s to avoid detection...
✅ Turkish transcript found
☁️ Uploaded to: https://res.cloudinary.com/.../ham/...
✅ OLUK GEM processed: 1234 chars
☁️ Uploaded to: https://res.cloudinary.com/.../cevrilmis/...
✅ Video processing completed!
🏁 Bot finished
```

**Sorun mu var?**
- Logs kontrol edin: `tail -f youtube_bot.log`
- README.md'de "Sorun Giderme" bölümüne bakın

---

## ADIM 5: Tam Sistemi Başlatın

### Manuel Çalıştırma (15 video işler)
```bash
python3 youtube_transcript_bot.py
```

### Cron Job (Otomatik - Günlük 03:00)
```bash
# Crontab aç
crontab -e

# Bu satırı ekleyin (Her gün 03:00)
0 3 * * * cd /workspaces/oluk-portal/_BRAIN/automation && python3 youtube_transcript_bot.py >> bot.log 2>&1

# Kaydet ve çık
```

---

## ADIM 6: İzleme ve Yönetim

### Real-time İzleme
```bash
# Log'ları takip et
tail -f youtube_bot.log

# Progress kontrol
cat progress.json | python3 -m json.tool
```

### Cloudinary'de Sonuçları Görme
```bash
# Cloudinary dashboard
https://console.cloudinary.com/console/c-xxx/media_library/folders/oluk/transcripts
```

---

## 📊 Sistem Özellikleri

| Özellik | Değer |
|---------|-------|
| **Günlük Limit** | 15 video |
| **Delay** | 30-120s (random) |
| **Bot Detection** | ✅ Önlendi |
| **Rate Limit** | ✅ Güvenli |
| **Auto-Resume** | ✅ Kaldığı yerden devam |
| **Error Handling** | ✅ Crash-safe |

---

## 🎯 Beklentiler

### Ayşe Sarzey Bek Kanalı
- **Tahmini video sayısı:** 50-100 (kontrol edin)
- **İşlem süresi:** 3-7 gün (15 video/gün)
- **Maliyet:** ✅ Tamamen ücretsiz

### Kanal Bitince
```bash
# Yeni kanal ekleyin
python3 youtube_transcript_bot.py --channel https://www.youtube.com/@yenikanal
```

Bot progress.json dosyasında her kanalı ayrı tutar, karışmaz!

---

## 🚨 ÖNEMLİ UYARILAR

### 1. Rate Limiting
- **15 video/gün** limitini aşmayın
- Bot'u manuel çok sık çalıştırmayın
- YouTube ban riski var!

### 2. API Key Güvenliği
- `.env` dosyasını **ASLA** git'e commit etmeyin
- API key'leri kimseyle paylaşmayın
- GitHub'da gizli tutun

### 3. OLUK GEM Prompt
- Telif hakkı olan metinler kullanmayın
- Prompt'unuzu test edin
- Kalite kontrolü yapın

---

## 📞 Destek

**Sorun mu yaşıyorsunuz?**

1. **README.md** okuyun (detaylı rehber)
2. **Logs** kontrol edin: `tail -f youtube_bot.log`
3. **Test mode** çalıştırın: `--test`
4. **Bana ulaşın** (log dosyasını gönderin)

---

## 🎊 Tebrikler!

**Sisteminiz hazır!** 🚀

Artık:
- ✅ YouTube videoları otomatik işleniyor
- ✅ OLUK GEM ile dönüştürülüyor
- ✅ Cloudinary'de kategorik depolanıyor
- ✅ Progress tracking yapılıyor
- ✅ Her gün otomatik çalışıyor

**İlk kanalı bitirince benimle paylaşın, diğer kanalları ekleyelim!** 💪

---

**Hazırlayan:** GitHub Copilot (Claude Sonnet 4.5)  
**Tarih:** 19 Aralık 2025  
**Commit:** c0dfed8  
**Status:** ✅ Production Ready
