# 🎨 OLUK GÖRSEL ÜRETİM SİSTEMİ

## GENEL BAKIŞ

Otomatik görsel üretim pipeline'ı:
```
Claude (Prompt) → Gemini API → Görsel Üretim → Cloudinary Upload → Site Entegre
```

## MARKA STİL REHBERİ

### Renk Paleti
| Renk | HEX | Kullanım |
|------|-----|----------|
| Derin Turkuaz | #0D4F4F | Arka plan, ana elementler |
| Sıcak Altın | #C9A962 | Vurgular, ışık efektleri |
| Krem | #F5F0E6 | Işık huzmesi, yumuşak alanlar |
| Su Mavisi | #5BA3A3 | Bağlantı çizgileri, akış okları |
| Charcoal | #1a1a2e | Koyu arka plan (gece sahneleri) |

### Estetik: Ottoman Cyberpunk
- Geleneksel İslami geometri + modern dijital minimalizm
- Akan su, ışık ışınları, spiraller, kutsal geometri
- Temiz, profesyonel, premium his
- Yüz yok (sadece siluet), gerçekçi fotoğraf yok
- Soft diffused lighting, golden hour tonu

### YASAKLAR
❌ Generic stok fotoğraf estetiği
❌ Karikatürize elementler
❌ Neon renkler (batı wellness klişesi)
❌ Dini semboller (hilal, haç, om, david yıldızı)
❌ Görselde metin (sadece watermark olabilir)
❌ Yüz detayları (siluet OK)
❌ Karmaşık, kalabalık kompozisyon

## PYTHON SCRIPTİ

### Kurulum (Codespaces)
```bash
pip install google-generativeai cloudinary python-dotenv pillow
```

### .env Dosyası
```bash
GEMINI_API_KEY=your_gemini_api_key_here
CLOUDINARY_CLOUD_NAME=dzegofdgp
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

### Ana Script (oluk_gorsel_fabrikasi.py)
```python
import google.generativeai as genai
import cloudinary
import cloudinary.uploader
from dotenv import load_dotenv
import os
from datetime import datetime

load_dotenv()

# API Yapılandırma
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET")
)

# Marka DNA
MARKA_DNA = """
BRAND IDENTITY - OLUK.ORG:
- Primary Color: Deep Teal #0D4F4F
- Accent Color: Warm Gold #C9A962  
- Background: Soft Cream #F5F0E6
- Style: Ottoman Cyberpunk meets Modern Spiritual Minimalism
- Mood: Serene, deep, transformative, sacred
- NO TEXT IN IMAGE (bilingual labels in infographics are OK)
- NO religious symbols (no crescent, cross, star of david, om)
- NO human faces (silhouettes only if needed)
- Clean, professional, premium feel
- Soft diffused lighting, golden hour ambiance
"""

def gorsel_uret(prompt, dosya_adi, aspect_ratio="16:9"):
    """Görsel üret ve Cloudinary'ye yükle"""
    
    model = genai.ImageGenerationModel("imagen-3.0-generate-002")
    tam_prompt = f"{MARKA_DNA}\n\nCreate: {prompt}"
    
    print(f"🎨 Üretiliyor: {dosya_adi}")
    
    result = model.generate_images(
        prompt=tam_prompt,
        number_of_images=1,
        aspect_ratio=aspect_ratio,
        safety_filter_level="block_few"
    )
    
    # Lokal kaydet
    local_path = f"output/{dosya_adi}.png"
    os.makedirs("output", exist_ok=True)
    result.images[0].save(local_path)
    print(f"✅ Lokal kaydedildi: {local_path}")
    
    # Cloudinary'ye yükle
    upload_result = cloudinary.uploader.upload(
        local_path,
        folder="oluk-org/gorseller",
        public_id=dosya_adi,
        overwrite=True
    )
    
    url = upload_result["secure_url"]
    print(f"☁️ Cloudinary URL: {url}\n")
    
    return url

def batch_generate(template_name, variant_list=None):
    """Toplu görsel üretimi"""
    from OLUK_DERS_GORSEL_SABLONLARI import DERS_HERO_SABLONLARI, DERS_INFOGRAFIK_SABLONLARI
    
    # Template'i bul
    if template_name in DERS_HERO_SABLONLARI:
        template = DERS_HERO_SABLONLARI[template_name]
    elif template_name in DERS_INFOGRAFIK_SABLONLARI:
        template = DERS_INFOGRAFIK_SABLONLARI[template_name]
    else:
        print(f"❌ Template bulunamadı: {template_name}")
        return []
    
    results = []
    variants = template["variants"]
    
    # Sadece belirtilen variant'ları üret
    if variant_list:
        variants = [v for v in variants if v["name"] in variant_list]
    
    for variant in variants:
        name = variant["name"]
        prompt = template["template"].format(**variant)
        
        # Aspect ratio belirle
        aspect_ratio = "16:9"  # Default
        if "infografik" in template_name and "akis" in name:
            aspect_ratio = "9:16" if "vertical" in variant.get("layout", "") else "16:9"
        
        url = gorsel_uret(prompt, name, aspect_ratio)
        results.append({"name": name, "url": url})
    
    return results
```

## BOYUT REHBERİ

| Kullanım | Oran | Boyut | Örnek |
|----------|------|-------|-------|
| Hero/Banner | 16:9 | 1920x1080 | Ders detay hero |
| Mobil Dikey | 9:16 | 1080x1920 | Seans akış infografik |
| Kare (Sosyal) | 1:1 | 1080x1080 | Instagram post |
| İnfografik | 4:5 | 1080x1350 | Instagram story |

## PROMPT YAZIM KURALLARI

1. **Marka stilini ekle** - Her prompt'a MARKA_DNA dahil
2. **Detaylı anlat** - Ne görmek istiyorsan yaz
3. **Renk belirt** - Teal, gold, cream kullan
4. **Teknik gereksinimler** - 4K quality, cinematic lighting
5. **Kaçınılacakları yaz** - AVOID: dark/scary, realistic faces, etc.
6. **Boyut belirt** - Aspect ratio ver
7. **SEO düşün** - Türkçe ve İngilizce anahtar kelimeler

## ÖRNEK PROMPTLAR

### Hero Görseli (Kapı Dersi)
```
Create a hero banner for OLUK.ORG spiritual education platform.

Lesson: Kapı (The Door)
Subtitle: Temel Arınma (Foundational Purification)
Visual Metaphor: An ancient golden door, slightly ajar, with soft teal light 
streaming through the gap. Ottoman geometric patterns subtly etched into the door frame. 
Ethereal mist at the threshold. The door represents the first step into inner transformation.
Mood: Inviting yet mysterious, sacred threshold, new beginnings

=== STRICT BRAND REQUIREMENTS ===
Color Palette: 
- Deep Teal #0D4F4F (primary, background gradient)
- Warm Gold #C9A962 (accent, highlights, glow)
- Soft Cream #F5F0E6 (light rays, soft elements)

Style: Ottoman Cyberpunk meets Modern Spiritual Minimalism
- Clean, spacious composition
- Subtle sacred geometry elements
- Soft golden hour lighting
- No human faces (silhouettes only if needed)
- No religious symbols

Technical: 16:9 aspect ratio, cinematic quality, 4K resolution feel
Lighting: Soft diffused light with golden accents, ethereal glow

AVOID: Dark/scary imagery, realistic faces, religious iconography, 
Western wellness clichés, stock photo aesthetics, busy/cluttered design
```

### İnfografik (Chakra Sistemi)
```
Create an educational infographic for OLUK.ORG spiritual education platform.

Topic: 7 Enerji Merkezi Haritası (7 Energy Centers Map)
Structure: Human silhouette with 7 colored energy points along spine. 
Each point labeled in Turkish and English with its function
Number of elements: 7 chakras
Visual flow: Bottom to top: Kök/Root (red) → Sakral/Sacral (orange) → 
Solar/Solar (yellow) → Kalp/Heart (green) → Boğaz/Throat (blue) → 
Alın/Third Eye (indigo) → Taç/Crown (violet/gold)

=== STRICT BRAND REQUIREMENTS ===
Color Palette:
- Deep Teal #0D4F4F (main elements, backgrounds)
- Warm Gold #C9A962 (numbers, highlights, icons)
- Soft Cream #F5F0E6 (background, light areas)
- Water Blue #5BA3A3 (connection lines, flow arrows)

Style: Modern flat design with Ottoman-inspired subtle ornamentation
- Clean iconography, consistent icon style
- Flowing connection lines
- Numbered steps with gold circles
- Turkish and English labels

Layout: Vertical 9:16 portrait, centered body silhouette
Technical: Sharp lines, professional data visualization, clear hierarchy

AVOID: Realistic imagery, complex gradients, stock icons, cluttered design
```

## İŞ AKIŞI

### 1. Claude'un Görevi:
- Konuyu analiz et
- Kaç görsel lazım belirle
- Her görsel için detaylı prompt yaz
- Boyut ve oran belirle
- SEO anahtar kelimeleri hazırla (TR + EN)

### 2. Codespaces'in Görevi:
- Script'i çalıştır: `python oluk_gorsel_fabrikasi.py`
- Gemini API'den görsel al
- Cloudinary'ye yükle
- URL'leri konsola yazdır

### 3. Kemal'in Görevi:
- Kalite kontrol
- Onay ver veya revizyon iste
- Site entegrasyonu kontrol

## HIZLI KULLANIM KOMUTLARİ

```python
# Tüm ders hero görsellerini üret (5 adet)
python -c "from OLUK_DERS_GORSEL_SABLONLARI import quick_ders_hero; quick_ders_hero()"

# Tüm infografikleri üret (9 adet)
python -c "from OLUK_DERS_GORSEL_SABLONLARI import quick_ders_infografik; quick_ders_infografik()"

# Tüm ders görsellerini üret (14 adet)
python -c "from OLUK_DERS_GORSEL_SABLONLARI import quick_ders_all; quick_ders_all()"

# Tek bir ders için tüm görselleri üret
python -c "from OLUK_DERS_GORSEL_SABLONLARI import quick_tek_ders; quick_tek_ders('kapi')"
```

## KRİTİK NOTLAR

⚠️ Her prompt MARKA_DNA ile başlamalı
⚠️ Görselde asla metin olmamalı (infografiklerde label OK)
⚠️ Mobil öncelikli düşün (9:16 veya 1:1)
⚠️ SEO için dosya adı Türkçe karakter içermesin
⚠️ Cloudinary klasör yapısı: `oluk-org/gorseller/`
⚠️ Gemini API limiti: Günlük 1500 görsel (Free tier)
⚠️ Her görsel ~2-3 saniye sürer
⚠️ 14 görsel toplam ~40 saniye

## DOSYA YAPISI

```
_BRAIN/prompts/gorsel-uretim/
├── README.md (bu dosya)
├── DERS_GORSEL_SABLONLARI.py (5 hero + 9 infografik)
├── oluk_gorsel_fabrikasi.py (ana script)
└── .env (API anahtarları)

output/
├── kapi_hero.png
├── ayna_hero.png
├── ...
└── yol_yolcu_haritasi.png
```

## SEO ENTEGRASYON ÖRNEĞİ

```jsx
// src/app/dersler/[slug]/page.tsx
<Image 
  src="https://res.cloudinary.com/dzegofdgp/image/upload/oluk-org/gorseller/kapi_hero.png"
  alt="OLUK Kapı dersi - altın kapı turkuaz ışık temel arınma meditasyon"
  width={1920}
  height={1080}
  priority
/>
```

## SONRAKI ADIMLAR

1. ✅ 5 ders hero görseli üret
2. ✅ 9 infografik üret
3. ⏳ Seans içi küçük ikonlar (25 adet)
4. ⏳ Sosyal medya post görselleri (20 adet)
5. ⏳ Blog header görselleri (10 adet)

**Toplam planlanan: 60+ görsel**
