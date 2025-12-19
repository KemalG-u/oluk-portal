# 🔑 GEMINI API KURULUMU

## Google AI Studio'dan API Key Alma

### 1. Google AI Studio'ya Git
https://aistudio.google.com/

### 2. API Key Oluştur
1. Sağ üst köşe → "Get API key"
2. "Create API key"
3. Mevcut bir Google Cloud projesi seç VEYA "Create API key in new project"
4. Key'i kopyala ve güvenli bir yere kaydet

### 3. API Limitler (Free Tier)
- **1,500 görsel/gün**
- **15 request/dakika**
- Ödeme bilgisi GEREKMEZ (free tier)

### 4. .env Dosyasına Ekle
```bash
# .env dosyasını oluştur
touch .env

# İçeriği ekle
echo "GEMINI_API_KEY=your_actual_api_key_here" >> .env
```

### 5. Cloudinary Kurulumu
https://cloudinary.com/users/register_free

1. Free hesap aç
2. Dashboard → Account Details
3. Şu bilgileri kopyala:
   - Cloud name: `dzegofdgp`
   - API Key: `your_cloudinary_api_key`
   - API Secret: `your_cloudinary_secret`

### 6. Tam .env Dosyası
```bash
# Gemini API
GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# Cloudinary
CLOUDINARY_CLOUD_NAME=dzegofdgp
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Test Komutu

```python
# test_api.py
import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

try:
    model = genai.ImageGenerationModel("imagen-3.0-generate-002")
    print("✅ Gemini API bağlantısı başarılı!")
    print(f"✅ Model: {model}")
except Exception as e:
    print(f"❌ Hata: {e}")
```

Çalıştır:
```bash
python test_api.py
```

## Güvenlik Notları

⚠️ **ASLA** API key'leri git'e commit etme
⚠️ `.env` dosyasını `.gitignore`'a ekle
⚠️ Key'leri başkalarıyla paylaşma
⚠️ Codespaces Secrets kullan (production için)

### .gitignore'a Ekle
```
.env
.env.local
*.key
```

## Sorun Giderme

### "API Key Invalid"
- Key'i doğru kopyaladığından emin ol
- Baş ve sondaki boşlukları kaldır
- Google AI Studio'da key'in aktif olduğunu kontrol et

### "Quota Exceeded"
- Günlük 1,500 görsel limitine ulaştın
- Yarın tekrar dene
- Veya paid plan'e geç (opsiyonel)

### "Model Not Found"
- `imagen-3.0-generate-002` model adını kontrol et
- API'nin en son sürümünü kullandığından emin ol
- `pip install --upgrade google-generativeai`

## Alternatif API'ler (Yedek)

Gemini çalışmazsa:
- **OpenAI DALL-E 3**: `openai.Image.create()`
- **Stability AI**: `stability_sdk.client`
- **Midjourney API**: `midjourney-api`

Ama şimdilik Gemini yeterli ve ücretsiz!
