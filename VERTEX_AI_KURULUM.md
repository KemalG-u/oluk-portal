# 🎨 OLUK VERTEX AI KURULUM TALİMATLARI

**Tarih:** 21 Aralık 2025  
**Amaç:** Google Vertex AI Imagen ile OLUK görselleri oluşturma  
**Durum:** 🟡 Kurulum Aşamasında

---

## 🔐 MEVCUT BİLGİLER

### Google Cloud Project
```
Project ID: gen-lang-client-0144452360
Project Number: 130703893084
Billing Account: My Billing Account (AKTİF)
Vertex AI API: ETKİNLEŞTİRİLMİŞ
Region: us-central1
```

### Cloudinary (Görsel Storage)
```
Cloud Name: dzegofdgp
API Key: 283632349543287
API Secret: dm_7xFvraZI-IwcvAxnWGTeNrWM
```

**⚠️ NOT:** Bu bilgiler `.env.local` dosyasında saklanmalı, asla GitHub'a push edilmemeli!

---

## 📦 CODESPACES KURULUM

### Adım 1: Python Paketlerini Kur

```bash
pip install google-cloud-aiplatform cloudinary python-dotenv
```

**Paketler:**
- `google-cloud-aiplatform`: Vertex AI SDK
- `cloudinary`: Görsel yükleme ve optimizasyon
- `python-dotenv`: Environment variable yönetimi

---

### Adım 2: .env Dosyası Oluştur

```bash
cat > .env.local << 'EOF'
# Google Cloud
GOOGLE_CLOUD_PROJECT=gen-lang-client-0144452360
GOOGLE_APPLICATION_CREDENTIALS=service-account.json

# Cloudinary
CLOUDINARY_CLOUD_NAME=dzegofdgp
CLOUDINARY_API_KEY=283632349543287
CLOUDINARY_API_SECRET=dm_7xFvraZI-IwcvAxnWGTeNrWM
EOF
```

**Lokasyon:** `/workspaces/oluk-portal/.env.local`

---

### Adım 3: Google Cloud Authentication

#### ✅ Seçenek A: Service Account Key (Önerilen - Codespaces için)

**1. Service Account Oluştur**

Google Cloud Console'a git:
```
https://console.cloud.google.com/iam-admin/serviceaccounts?project=gen-lang-client-0144452360
```

**2. Hesap Bilgileri**
- Name: `oluk-imagen`
- Description: `OLUK görsel üretim servisi`
- Service Account ID: `oluk-imagen@gen-lang-client-0144452360.iam.gserviceaccount.com`

**3. Role Ata**
- Role: **Vertex AI User**
- Path: `SELECT A ROLE` → `Vertex AI` → `Vertex AI User`

**4. JSON Key Oluştur**
- Oluşan hesaba tıkla
- `KEYS` sekmesi
- `ADD KEY` → `Create new key` → `JSON` → `CREATE`
- İndirilen dosya: `gen-lang-client-0144452360-xxxx.json`

**5. Key'i Codespaces'e Yükle**

```bash
# VSCode'da sol panelde Explorer → Upload Files
# Dosya adını şuna değiştir: service-account.json

# veya terminal ile:
# (Lokal makineden Codespaces'e scp ile kopyala)
```

**6. Environment Variable Ayarla**

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/workspaces/oluk-portal/service-account.json"

# Kalıcı yapmak için .bashrc'ye ekle:
echo 'export GOOGLE_APPLICATION_CREDENTIALS="/workspaces/oluk-portal/service-account.json"' >> ~/.bashrc
```

---

#### 🔧 Seçenek B: gcloud CLI ile Login (Alternatif)

```bash
# 1. gcloud CLI kur (eğer yoksa)
curl https://sdk.cloud.google.com | bash
exec -l $SHELL

# 2. Login ol (browser açılacak)
gcloud auth application-default login

# 3. Proje ayarla
gcloud config set project gen-lang-client-0144452360

# 4. Vertex AI API'yi etkinleştir
gcloud services enable aiplatform.googleapis.com
```

---

## 🎨 GÖRSEL ÜRETİM SCRIPT

### oluk_vertex_ai_gorseller.py

```python
#!/usr/bin/env python3
"""
OLUK Vertex AI Görsel Üretim Script
Imagen API kullanarak OpenGraph ve sosyal medya görselleri üretir
"""

import os
import time
from pathlib import Path
from dotenv import load_dotenv
from google.cloud import aiplatform
import cloudinary
import cloudinary.uploader

# .env.local yükle
load_dotenv('.env.local')

# Cloudinary config
cloudinary.config(
    cloud_name=os.getenv('CLOUDINARY_CLOUD_NAME'),
    api_key=os.getenv('CLOUDINARY_API_KEY'),
    api_secret=os.getenv('CLOUDINARY_API_SECRET')
)

# Vertex AI config
PROJECT_ID = os.getenv('GOOGLE_CLOUD_PROJECT')
LOCATION = 'us-central1'
aiplatform.init(project=PROJECT_ID, location=LOCATION)

# Görsel tanımları
IMAGES = [
    {
        'name': 'og-ana-sayfa',
        'prompt': 'Minimalist Ottoman Cyberpunk design, deep teal gradient background, golden accent, "OLUK" elegant typography, sacred geometry patterns, spiritual aesthetic, modern mystical, 1200x630',
        'folder': 'og-images'
    },
    {
        'name': 'og-sirdas',
        'prompt': 'AI spiritual guide concept, Ottoman Cyberpunk style, teal and gold color scheme, chat interface elements, sacred symbols, "Sırdaş" elegant text, mystical technology fusion, 1200x630',
        'folder': 'og-images'
    },
    {
        'name': 'og-dersler',
        'prompt': 'Spiritual journey visualization, Ottoman Cyberpunk aesthetic, ten lesson pathway, chakra energy flow, teal gradient, golden accents, "Dersler" elegant calligraphy, 1200x630',
        'folder': 'og-images'
    },
    # Ders-specific görseller
    {
        'name': 'ders-1-kapi',
        'prompt': 'Ancient door opening to light, Ottoman architecture meets cyberpunk, teal stone walls, golden light rays, mystical threshold, spiritual beginning, elegant typography "Kapı", 1200x630',
        'folder': 'dersler'
    },
    {
        'name': 'ders-2-ayna',
        'prompt': 'Mystical mirror reflecting inner light, Ottoman Cyberpunk style, fractured reality, self-discovery symbolism, teal and gold palette, "Ayna" elegant script, 1200x630',
        'folder': 'dersler'
    },
    # Instagram post templates
    {
        'name': 'instagram-gem-template',
        'prompt': 'Instagram post template, Ottoman Cyberpunk aesthetic, deep teal gradient background, golden frame border, space for text overlay, mystical patterns, 1080x1080',
        'folder': 'social-media'
    },
    {
        'name': 'instagram-story-template',
        'prompt': 'Instagram story template, Ottoman Cyberpunk design, vertical format, teal gradient, golden accent lines, sacred geometry corners, space for text, 1080x1920',
        'folder': 'social-media'
    }
]

def generate_image(prompt, output_path):
    """Vertex AI Imagen ile görsel üret"""
    try:
        from vertexai.preview.vision_models import ImageGenerationModel
        
        model = ImageGenerationModel.from_pretrained("imagegeneration@002")
        
        print(f"🎨 Generating: {output_path}")
        
        response = model.generate_images(
            prompt=prompt,
            number_of_images=1,
            aspect_ratio="16:9"  # 1200x630 için uygun
        )
        
        # Görseli kaydet
        response.images[0].save(output_path)
        print(f"✅ Saved: {output_path}")
        
        return output_path
        
    except Exception as e:
        print(f"❌ Error generating {output_path}: {e}")
        return None

def upload_to_cloudinary(local_path, folder):
    """Görseli Cloudinary'ye yükle"""
    try:
        print(f"☁️ Uploading to Cloudinary: {folder}/")
        
        response = cloudinary.uploader.upload(
            local_path,
            folder=f"oluk/{folder}",
            overwrite=True,
            resource_type="image"
        )
        
        url = response['secure_url']
        print(f"✅ Cloudinary URL: {url}")
        
        return url
        
    except Exception as e:
        print(f"❌ Cloudinary upload error: {e}")
        return None

def main():
    """Ana çalıştırma fonksiyonu"""
    print("🚀 OLUK Vertex AI Görsel Üretimi Başlıyor...")
    print(f"📁 Proje: {PROJECT_ID}")
    print(f"📍 Lokasyon: {LOCATION}")
    print(f"🎨 Görsel Sayısı: {len(IMAGES)}")
    print("-" * 50)
    
    # Yerel output klasörü
    output_dir = Path("generated_images")
    output_dir.mkdir(exist_ok=True)
    
    results = []
    
    for i, img in enumerate(IMAGES, 1):
        print(f"\n[{i}/{len(IMAGES)}] {img['name']}")
        print(f"Prompt: {img['prompt'][:80]}...")
        
        # Yerel dosya yolu
        local_path = output_dir / f"{img['name']}.png"
        
        # Vertex AI ile üret
        generated_path = generate_image(img['prompt'], str(local_path))
        
        if generated_path:
            # Cloudinary'ye yükle
            cloudinary_url = upload_to_cloudinary(generated_path, img['folder'])
            
            results.append({
                'name': img['name'],
                'local': str(local_path),
                'cloudinary': cloudinary_url,
                'status': 'success' if cloudinary_url else 'upload_failed'
            })
        else:
            results.append({
                'name': img['name'],
                'status': 'generation_failed'
            })
        
        # Rate limit: 10 saniye bekle
        if i < len(IMAGES):
            print("⏳ Rate limit: 10 saniye bekleniyor...")
            time.sleep(10)
    
    # Sonuç raporu
    print("\n" + "=" * 50)
    print("📊 SONUÇ RAPORU")
    print("=" * 50)
    
    success_count = sum(1 for r in results if r['status'] == 'success')
    print(f"✅ Başarılı: {success_count}/{len(IMAGES)}")
    
    print("\n📋 Cloudinary URL'leri:")
    for r in results:
        if r.get('cloudinary'):
            print(f"  • {r['name']}: {r['cloudinary']}")
    
    print("\n✨ İşlem tamamlandı!")

if __name__ == "__main__":
    main()
```

---

## 🚀 ÇALIŞTIRMA

```bash
# 1. Script'i çalıştırılabilir yap
chmod +x oluk_vertex_ai_gorseller.py

# 2. Çalıştır
python oluk_vertex_ai_gorseller.py
```

---

## ⏱️ TAHMİNİ SÜRELER

| Görsel Sayısı | İşlem Süresi | Rate Limit |
|---------------|--------------|------------|
| 1 görsel | ~30 saniye | - |
| 7 görsel | ~8 dakika | 10 sn/görsel |
| 14 görsel | ~15-20 dakika | 10 sn/görsel |

**Not:** Vertex AI Imagen rate limit: ~6 request/dakika (ücretsiz tier)

---

## 💰 MALİYET TAHMİNİ

### Vertex AI Imagen Pricing (us-central1)

| Tier | Fiyat | Aylık Limit |
|------|-------|-------------|
| **Free Tier** | $0 | 1500 görsel/ay |
| **Standard** | $0.020/görsel | Sınırsız |

**14 görsel için:**
- Free tier: $0
- Standard: $0.28

**Aylık kullanım (günde 5 görsel):**
- Free tier: $0 (150 görsel/ay)
- Standard: $3/ay

---

## 🔧 SORUN GİDERME

### ❌ "Permission denied" hatası

```bash
# Vertex AI API'nin etkin olduğundan emin ol
gcloud services enable aiplatform.googleapis.com

# Service account role kontrolü
gcloud projects get-iam-policy gen-lang-client-0144452360 \
  --flatten="bindings[].members" \
  --filter="bindings.members:serviceAccount:oluk-imagen*"
```

### ❌ "Quota exceeded" hatası

**Sebep:** Günlük/aylık Imagen limiti aşıldı

**Çözüm:**
1. Bekle (limit ertesi gün sıfırlanır)
2. Quota artışı iste: https://console.cloud.google.com/iam-admin/quotas

### ❌ "Location not available" hatası

**Sebep:** Imagen tüm bölgelerde mevcut değil

**Çözüm:** Script'te `LOCATION = 'us-central1'` olduğundan emin ol

### ❌ "Authentication failed" hatası

```bash
# Service account key kontrolü
ls -la service-account.json

# Environment variable kontrolü
echo $GOOGLE_APPLICATION_CREDENTIALS

# Yeniden ayarla
export GOOGLE_APPLICATION_CREDENTIALS="/workspaces/oluk-portal/service-account.json"
```

### ❌ "Cloudinary upload failed" hatası

```bash
# .env.local kontrolü
cat .env.local | grep CLOUDINARY

# Credentials test
python -c "
import cloudinary
cloudinary.config(cloud_name='dzegofdgp', api_key='283632349543287', api_secret='dm_7xFvraZI-IwcvAxnWGTeNrWM')
print('✅ Cloudinary config OK')
"
```

---

## 📋 CHECKPOINT SONRASI

Görseller üretildikten sonra:

1. ✅ Cloudinary URL'lerini metadata'lara ekle
2. ✅ OG image'ları test et (Facebook Debug Tool)
3. ✅ Sosyal medya şablonlarını test et
4. ✅ `generated_images/` klasörünü `.gitignore`'a ekle

---

## 🔒 GÜVENLİK

**⚠️ ASLA GİTHUB'A PUSH ETME:**
- `service-account.json`
- `.env.local`
- `generated_images/` (opsiyonel)

**`.gitignore`'a ekle:**
```
service-account.json
.env.local
generated_images/
```

---

## 📞 DESTEK

**Google Cloud Console:** https://console.cloud.google.com/  
**Vertex AI Docs:** https://cloud.google.com/vertex-ai/docs/generative-ai/image/generate-images  
**Cloudinary Docs:** https://cloudinary.com/documentation

---

**PM:** Claude (Sonnet 4.5)  
**Proje:** OLUK Portal - oluk.org  
**Son Güncelleme:** 21 Aralık 2025
