# OLUK VERTEX AI KURULUM TALİMATLARI

## 🔐 MEVCUT BİLGİLER

```
Google Cloud Project ID: gen-lang-client-0144452360
Project Number: 130703893084
Billing Account: My Billing Account (AKTİF)
Vertex AI API: ETKİNLEŞTİRİLMİŞ

Cloudinary Cloud: dzegofdgp
Cloudinary API Key: 283632349543287
Cloudinary Secret: dm_7xFvraZI-IwcvAxnWGTeNrWM
```

---

## 📦 CODESPACES KURULUM

### Adım 1: Paketleri Kur
```bash
pip install google-cloud-aiplatform cloudinary python-dotenv
```

### Adım 2: .env Dosyası Oluştur
```bash
cat > .env << 'EOF'
# Cloudinary
CLOUDINARY_CLOUD_NAME=dzegofdgp
CLOUDINARY_API_KEY=283632349543287
CLOUDINARY_API_SECRET=dm_7xFvraZI-IwcvAxnWGTeNrWM
EOF
```

### Adım 3: Google Cloud Authentication

#### Seçenek A: Service Account Key (Önerilen)

1. Google Cloud Console'a git:
   https://console.cloud.google.com/iam-admin/serviceaccounts?project=gen-lang-client-0144452360

2. "CREATE SERVICE ACCOUNT" tıkla
   - Name: oluk-imagen
   - Description: OLUK görsel üretim

3. "CREATE AND CONTINUE" tıkla

4. Role ekle: "Vertex AI User"
   - "SELECT A ROLE" → "Vertex AI" → "Vertex AI User"

5. "DONE" tıkla

6. Oluşan hesaba tıkla → "KEYS" sekmesi → "ADD KEY" → "Create new key" → "JSON" → "CREATE"

7. İndirilen JSON dosyasını Codespaces'e yükle, örneğin: `service-account.json`

8. Terminalde:
```bash
export GOOGLE_APPLICATION_CREDENTIALS="service-account.json"
```

#### Seçenek B: gcloud CLI ile Login

```bash
# gcloud kur (eğer yoksa)
curl https://sdk.cloud.google.com | bash
exec -l $SHELL

# Login ol
gcloud auth application-default login

# Proje ayarla
gcloud config set project gen-lang-client-0144452360
```

---

## 🚀 ÇALIŞTIR

```bash
python oluk_vertex_ai_gorseller.py
```

---

## ⏱️ TAHMİNİ SÜRELER

| Görsel Sayısı | Süre |
|---------------|------|
| 14 görsel | ~15-20 dk |
| Rate limit | 10 sn/görsel |

---

## 🔧 SORUN GİDERME

### "Permission denied" hatası
```bash
# Vertex AI API'nin etkin olduğundan emin ol
gcloud services enable aiplatform.googleapis.com
```

### "Quota exceeded" hatası
- Imagen günlük limiti: 1500 görsel (ücretsiz tier)
- Bekle veya quota artışı iste

### "Location not available" hatası
- us-central1 kullanıldığından emin ol
- Script'te LOCATION değişkenini kontrol et
