#!/usr/bin/env python3
"""
OLUK DERS 1 - EKSİK GÖRSELLER (YÜKSEK ÖNCELİK)
4 Statik Görsel Üretimi
"""

from google.cloud import aiplatform
from vertexai.preview.vision_models import ImageGenerationModel
import cloudinary
import cloudinary.uploader
from datetime import datetime
import os
import time
import json

# ═══════════════════════════════════════════════════════════════
# YAPILANDIRMA
# ═══════════════════════════════════════════════════════════════

PROJECT_ID = "gen-lang-client-0144452360"
LOCATION = "us-central1"

cloudinary.config(
    cloud_name="dzegofdgp",
    api_key="283632349543287",
    api_secret="dm_7xFvraZI-IwcvAxnWGTeNrWM"
)

# ═══════════════════════════════════════════════════════════════
# MARKA DNA
# ═══════════════════════════════════════════════════════════════

BRAND_STYLE = """
Style: Ottoman Cyberpunk meets Modern Spiritual Minimalism.
Color palette: Deep Teal #0D4F4F (primary), Warm Gold #C9A962 (accent), Soft Cream #F5F0E6 (background).
Restrictions: No text, no Arabic script, no religious symbols, no realistic human faces, no neon colors.
Quality: 8K resolution, cinematic lighting, professional photography quality.
"""

# ═══════════════════════════════════════════════════════════════
# YÜKSEK ÖNCELİKLİ GÖRSELLER (4 ADET)
# ═══════════════════════════════════════════════════════════════

GORSELLER = [
    {
        "id": "ders1-7aurik-katman",
        "aspect_ratio": "9:16",
        "folder": "oluk/ders1/infographics",
        "seo_tr": "7 Aurik Katman Diyagramı - İnsan enerji alanı, eterik bedenden keterik şablona yedi koruma katmanı",
        "seo_en": "7 Auric Layer Diagram - Human energy field, seven protective layers from etheric to ketheric template",
        "prompt": f"""
{BRAND_STYLE}

Vertical minimalist infographic showing 7 concentric auric energy layers as glowing rings.
Seven distinct energy field layers emanating outward from center:
Layer 1: Thin white-gold etheric line closest to body
Layer 2: Soft orange-pink emotional flowing energy
Layer 3: Yellow-gold mental structured layer
Layer 4: Green-teal astral bridge with sparkles
Layer 5: Blue geometric grid etheric template
Layer 6: Violet luminous celestial layer
Layer 7: Golden-white outer ketheric boundary

Deep teal (#0D4F4F) background gradient.
Subtle light particles between layers.
Clean, modern, ethereal aesthetic.
9:16 vertical format.
"""
    },
    {
        "id": "ders1-12adim-sifa",
        "aspect_ratio": "9:16",
        "folder": "oluk/ders1/infographics",
        "seo_tr": "12 Şifa Adımı - Topraklamadan entegrasyona yükselen basamaklar, spiritüel ilerleme yolu",
        "seo_en": "12 Healing Steps - Rising platforms from grounding to integration, spiritual progression path",
        "prompt": f"""
{BRAND_STYLE}

Vertical infographic with 12 glowing circular platforms ascending in a gentle spiral.

Platforms color progression from bottom to top:
1-3: Earth tones (red-brown, brown, amber) - grounding
4-6: Transitional (silver-white, teal, yellow-gold) - connection  
7-9: Transformative (purple, violet, gold) - transformation
10-12: Integration (iridescent DNA pattern, rainbow, pure golden-white light) - completion

Soft luminous mist between platforms.
Glowing energy presence ascending the steps.
Golden light source from top.
Background: Deep teal (#0D4F4F) to soft cream (#F5F0E6) gradient.
Ethereal, mystical, sense of progression.
9:16 vertical format.
"""
    },
    {
        "id": "seans1-menzil-kapak",
        "aspect_ratio": "1:1",
        "folder": "oluk/ders1/seans",
        "seo_tr": "Menzil Seansı Kapak - Altın pusula, niyet belirleme ve yön bulma metaforu",
        "seo_en": "Direction Session Cover - Golden compass, intention setting and direction finding metaphor",
        "prompt": f"""
{BRAND_STYLE}

Square composition: ornate golden compass (#C9A962) floating in ethereal teal void.

Compass features:
- Ornate golden circular frame with Ottoman geometric engravings
- Soft cream (#F5F0E6) face with sacred geometry
- Single elegant golden needle pointing upward
- Warm glow from needle tip
- No letters, no text - purely symbolic

Environment:
- Soft gold and cream particle mist
- Concentric energy ripples expanding outward
- Deep teal (#0D4F4F) background gradient
- Tiny golden light particles like stars

Floating, weightless, magical.
Sense of direction, purpose, clarity.
1:1 square format.
"""
    },
    {
        "id": "seans-muhur-kapani",
        "aspect_ratio": "1:1",
        "folder": "oluk/ders1/seans",
        "seo_tr": "Seans Mühür Kapanışı - Tamamlanan çalışmayı mühürleyen altın geometrik sembol",
        "seo_en": "Session Seal Closure - Golden geometric symbol sealing completed work",
        "prompt": f"""
{BRAND_STYLE}

Square composition: sacred golden seal symbol for completion and protection.

Central element:
- Golden (#C9A962) circular seal with Ottoman geometric pattern
- Interlocking circles and flowing curves (no religious symbols)
- Abstract lotus mandala in cream (#F5F0E6)
- Embossed 3D appearance with depth
- Subtle inner divine glow

Radiating soft golden light rays fading into teal background.
Protective circle of white light surrounding seal.
Deep teal (#0D4F4F) gradient background darker at edges.
Subtle sacred geometry pattern faintly visible.

Feeling: "Complete. Safe. Sealed."
Elegant, authoritative, warm.
1:1 square format.
"""
    }
]

# ═══════════════════════════════════════════════════════════════
# ÜRETİM FONKSİYONLARI
# ═══════════════════════════════════════════════════════════════

def initialize():
    """Vertex AI başlat - eski çalışan yöntemi kullan"""
    aiplatform.init(project=PROJECT_ID, location=LOCATION)
    print(f"✅ Vertex AI başlatıldı: {PROJECT_ID} / {LOCATION}\n")
    return ImageGenerationModel.from_pretrained("imagen-3.0-generate-001")

def generate_image(model, prompt, aspect_ratio):
    """Görsel üret"""
    response = model.generate_images(
        prompt=prompt,
        number_of_images=1,
        aspect_ratio=aspect_ratio,
        safety_filter_level="block_few",
        person_generation="dont_allow"
    )
    
    if not response.images or len(response.images) == 0:
        raise Exception("Vertex AI hiç görsel döndürmedi - prompt güvenlik filtrelerini geçememiş olabilir")
    
    return response.images[0]

def upload_to_cloudinary(image, gorsel_id, folder):
    """Cloudinary'ye yükle"""
    temp_path = f"/tmp/{gorsel_id}.png"
    image.save(temp_path)
    
    result = cloudinary.uploader.upload(
        temp_path,
        public_id=gorsel_id,
        folder=folder,
        overwrite=True,
        resource_type="image"
    )
    
    os.remove(temp_path)
    return result["secure_url"]

def main():
    print("=" * 60)
    print("OLUK DERS 1 - YÜKSEK ÖNCELİKLİ GÖRSELLER")
    print("=" * 60)
    print(f"Başlangıç: {datetime.now().strftime('%H:%M:%S')}")
    print(f"Toplam: {len(GORSELLER)} görsel")
    print("=" * 60)
    
    model = initialize()
    results = []
    
    for i, gorsel in enumerate(GORSELLER, 1):
        print(f"\n[{i}/{len(GORSELLER)}] {gorsel['id']}")
        print(f"  Oran: {gorsel['aspect_ratio']}")
        
        try:
            # Üret
            print("  Üretiliyor...")
            image = generate_image(model, gorsel["prompt"], gorsel["aspect_ratio"])
            
            # Yükle
            print("  Yükleniyor...")
            url = upload_to_cloudinary(image, gorsel["id"], gorsel["folder"])
            
            print(f"  ✅ Tamamlandı!")
            print(f"  URL: {url}")
            
            results.append({
                "id": gorsel["id"],
                "url": url,
                "seo_tr": gorsel["seo_tr"],
                "seo_en": gorsel["seo_en"],
                "status": "success"
            })
            
            # Rate limit
            if i < len(GORSELLER):
                print("  ⏳ Bekleniyor (10sn)...")
                time.sleep(10)
                
        except Exception as e:
            print(f"  ❌ HATA: {e}")
            results.append({
                "id": gorsel["id"],
                "error": str(e),
                "status": "failed"
            })
    
    # Özet
    print("\n" + "=" * 60)
    print("SONUÇ")
    print("=" * 60)
    
    success = [r for r in results if r["status"] == "success"]
    failed = [r for r in results if r["status"] == "failed"]
    
    print(f"✅ Başarılı: {len(success)}/{len(GORSELLER)}")
    print(f"❌ Başarısız: {len(failed)}/{len(GORSELLER)}")
    
    if success:
        print("\n📷 ÜRETİLEN GÖRSELLER:")
        for r in success:
            print(f"  • {r['id']}: {r['url']}")
    
    if failed:
        print("\n⚠️ BAŞARISIZ:")
        for r in failed:
            print(f"  • {r['id']}: {r['error']}")
    
    print(f"\nBitiş: {datetime.now().strftime('%H:%M:%S')}")
    print("=" * 60)

if __name__ == "__main__":
    main()
