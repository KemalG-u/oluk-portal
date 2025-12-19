# 🔑 Google Cloud API Key Alma Rehberi

## 1. Google Cloud Console'a Giriş

1. **Tarayıcıda açın:** https://console.cloud.google.com
2. **Google Ultra hesabınızla giriş yapın**
3. Sağ üstten projenizi seçin (yoksa yeni proje oluşturun)

---

## 2. YouTube Data API v3 Aktifleştirme

### Adım 2.1: API Library
```
1. Sol menüden: "APIs & Services" → "Library"
2. Arama kutusuna: "YouTube Data API v3"
3. İlk sonuca tıklayın
4. Mavi "Enable" butonuna basın
```

### Adım 2.2: Credentials Oluşturma
```
1. Sol menüden: "APIs & Services" → "Credentials"
2. Üstte: "+ CREATE CREDENTIALS" → "API Key"
3. API Key otomatik oluşturulacak
4. "Restrict Key" butonuna tıklayın (güvenlik için)
```

### Adım 2.3: API Key Kısıtlamaları (Önemli!)
```
1. "API restrictions" → "Restrict key"
2. Sadece şunu seçin: "YouTube Data API v3"
3. "Save" butonuna basın
```

### Adım 2.4: API Key'i Kopyalayın
```
1. Credentials sayfasında API Key'iniz listelenecek
2. Sağ taraftaki "Copy" ikonuna tıklayın
3. Bu key'i bana verin (örnek: AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX)
```

---

## 3. Gemini API Key Alma (OLUK GEM için)

### Adım 3.1: Google AI Studio
```
1. Tarayıcıda açın: https://aistudio.google.com/app/apikey
2. Google Ultra hesabınızla giriş yapın
3. "Create API Key" butonuna basın
4. Projenizi seçin (YouTube API ile aynı proje olsun)
5. API Key'i kopyalayın
```

### Adım 3.2: OLUK GEM Detayları
**Bana şunları söyleyin:**
- OLUK GEM'in tam adı/ID'si nedir?
- Nasıl kullanıyorsunuz? (web arayüzden mi, API'den mi?)
- Örnek bir prompt gösterebilir misiniz?

---

## 4. API Key'leri Bana Verin

**Güvenli şekilde paylaşın:**
```
YouTube API Key: AIzaSy...
Gemini API Key: AIzaSy...
OLUK GEM Details: ...
```

**Alternatif (daha güvenli):**
VS Code'da `.env` dosyası oluşturup içine yazın:
```bash
YOUTUBE_API_KEY=AIzaSy...
GEMINI_API_KEY=AIzaSy...
```

---

## 5. Kotalar (Bilgi Amaçlı)

### YouTube Data API v3
- **Günlük quota:** 10,000 birim (ücretsiz)
- **Video listesi çekme:** 1 birim
- **Video detayı:** 1 birim
- **Yeterli mi?** Evet! Günde ~5000 video listeleyebilirsiniz

### Gemini API
- **Ücretsiz tier (Google Ultra dahil):**
  - 60 request/minute
  - 1500 request/day
- **Yeterli mi?** Evet! Günde 15 video için fazlasıyla yeterli

---

## ✅ Hazır mısınız?

Bu adımları tamamladıktan sonra API key'leri bana verin, ben de:
1. ✅ Otomasyonu kuracağım
2. ✅ İlk testi yapacağım (1-2 video)
3. ✅ Sistemi başlatacağım

**API key'leri aldıktan sonra buraya yazın!** 🚀
