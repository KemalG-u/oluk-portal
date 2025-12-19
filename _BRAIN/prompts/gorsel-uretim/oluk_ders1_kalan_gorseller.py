#!/usr/bin/env python3
"""
OLUK DERS 1 - KALAN TÜM GÖRSELLER
4 Statik Görsel (1 yüksek + 3 orta öncelik)
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
Restrictions: No text, no Arabic script, no religious symbols, no realistic faces, no neon colors.
Quality: 8K resolution, cinematic lighting, professional photography quality.
"""

# ═══════════════════════════════════════════════════════════════
# KALAN GÖRSELLER (4 ADET)
# ═══════════════════════════════════════════════════════════════

GORSELLER = [
    {
        "id": "seans-muhur-kapani",
        "aspect_ratio": "1:1",
        "folder": "oluk/ders1/seans",
        "oncelik": "yuksek",
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

Feeling: Complete. Safe. Sealed.
Elegant, authoritative, warm.
1:1 square format.
"""
    },
    {
        "id": "ders1-15chakra-tam-sistem",
        "aspect_ratio": "16:9",
        "folder": "oluk/ders1/infographics",
        "oncelik": "orta",
        "seo_tr": "15 Çakralı Tam Sistem - 7 ana çakra ve 8 morfogenetik çakra, bedenden kozmosa uzanan enerji hattı",
        "seo_en": "Complete 15 Chakra System - 7 main chakras and 8 morphogenetic chakras, energy line from body to cosmos",
        "prompt": f"""
{BRAND_STYLE}

Panoramic horizontal composition showing complete 15-chakra energy system.

Central vertical energy column with 15 glowing orbs:
Bottom 7 (in body): Traditional chakra colors (red, orange, yellow, green, blue, purple, violet)
Top 8 (above): Morphogenetic chakras ascending (pale gold, silver, platinum, pearl, diamond, rainbow, white, golden-star)

Vertical light beam connecting all 15 points.
Earth grounding energy below.
Cosmic stars in background above.
Deep teal (#0D4F4F) to space gradient background.
Golden (#C9A962) Ottoman geometric border frame.

Wide cinematic composition.
No labels, pure visual.
16:9 horizontal format.
"""
    },
    {
        "id": "ders1-19aktivasyon-akis",
        "aspect_ratio": "16:9",
        "folder": "oluk/ders1/infographics",
        "oncelik": "orta",
        "seo_tr": "19 Aktivasyon Akış Şeması - Arınma, yükseltme ve derin çalışma dalları, altın tohum merkez",
        "seo_en": "19 Activation Flow Chart - Cleansing, upgrading and deep work branches, golden seed center",
        "prompt": f"""
{BRAND_STYLE}

Elegant flowchart showing 19 activation points in harmonious tree pattern.

Central golden seed at base, three branches emanating upward:

Left branch (6 nodes): Teal water droplet shapes - cleansing
Center branch (6 nodes): Gold flame shapes rising - upgrading
Right branch (7 nodes): Purple crystal/diamond shapes - deep work

All branches converge at top unified light point.
Each node glows with inner light.
Subtle particle trails on connecting lines.
Deep teal (#0D4F4F) background with radial gradient.
Ottoman geometry faintly visible.

Sacred geometry meets modern data viz.
No text, pure symbolism.
16:9 horizontal format.
"""
    },
    {
        "id": "ders1-felsefe-bakgec",
        "aspect_ratio": "1:1",
        "folder": "oluk/ders1/infographics",
        "oncelik": "orta",
        "seo_tr": "Bak Geç Felsefesi - Akan altın enerji engelleri geçiyor, akış prensibi görseli",
        "seo_en": "Look and Pass Philosophy - Flowing golden energy passing obstacles, flow principle visual",
        "prompt": f"""
{BRAND_STYLE}

Square abstract composition: "Look and Pass" philosophy visualization.

Visual metaphor:
- River of liquid golden light (#C9A962) flowing left to right
- Abstract teal obstacles/rocks in the path
- Golden river flows smoothly around/through them
- No splash, no resistance - pure graceful flow
- Subtle particle effects showing continuous movement

Three subtle wave patterns (representing "three times" principle).
Ottoman water/wave motifs subtly integrated.
Background: Cream (#F5F0E6) center to teal (#0D4F4F) edges gradient.

Zen-like simplicity, peaceful movement.
Meditative quality, effortless flow.
1:1 square format.
"""
    }
]

# ═══════════════════════════════════════════════════════════════
# ÜRETİM FONKSİYONLARI
# ═══════════════════════════════════════════════════════════════

def initialize():
    """Vertex AI başlat - ADC veya service account kullanarak"""
    # Önce service-account.json'ı dene
    if os.path.exists("service-account.json"):
        os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "service-account.json"
        print("🔑 Service account authentication kullanılıyor")
    else:
        # ADC (Application Default Credentials) kullan
        print("🔑 ADC (Application Default Credentials) deneniyor...")
        # Google Cloud SDK varsa gcloud auth application-default kullan
        import subprocess
        try:
            result = subprocess.run(
                ["gcloud", "auth", "application-default", "print-access-token"],
                capture_output=True,
                text=True,
                timeout=5
            )
            if result.returncode == 0:
                print("✅ Gcloud ADC authentication başarılı")
            else:
                print("⚠️ Gcloud ADC bulunamadı, ortam değişkenlerine bakılıyor...")
        except:
            print("⚠️ Gcloud bulunamadı, direct authentication deneniyor...")
    
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
        raise Exception("Vertex AI görsel döndürmedi - güvenlik filtresi veya quota")
    
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
    print("OLUK DERS 1 - KALAN TÜM GÖRSELLER")
    print("=" * 60)
    print(f"Başlangıç: {datetime.now().strftime('%H:%M:%S')}")
    print(f"Toplam: {len(GORSELLER)} görsel")
    yuksek = [g for g in GORSELLER if g["oncelik"] == "yuksek"]
    orta = [g for g in GORSELLER if g["oncelik"] == "orta"]
    print(f"  🔴 Yüksek öncelik: {len(yuksek)}")
    print(f"  🟡 Orta öncelik: {len(orta)}")
    print("=" * 60)
    
    model = initialize()
    results = []
    
    for i, gorsel in enumerate(GORSELLER, 1):
        oncelik_emoji = "🔴" if gorsel["oncelik"] == "yuksek" else "🟡"
        print(f"\n[{i}/{len(GORSELLER)}] {oncelik_emoji} {gorsel['id']}")
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
                "oncelik": gorsel["oncelik"],
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
                "oncelik": gorsel["oncelik"],
                "error": str(e),
                "status": "failed"
            })
            
            # Quota hatası ise biraz daha bekle
            if "quota" in str(e).lower() or "429" in str(e):
                print("  ⏰ Quota limiti - 30 saniye bekleniyor...")
                time.sleep(30)
    
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
            oncelik_emoji = "🔴" if r["oncelik"] == "yuksek" else "🟡"
            print(f"  {oncelik_emoji} {r['id']}")
            print(f"     {r['url']}")
    
    if failed:
        print("\n⚠️ BAŞARISIZ:")
        for r in failed:
            oncelik_emoji = "🔴" if r["oncelik"] == "yuksek" else "🟡"
            print(f"  {oncelik_emoji} {r['id']}: {r['error']}")
    
    # JSON kaydet
    output_file = f"ders1_kalan_gorseller_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print(f"\n💾 Sonuçlar kaydedildi: {output_file}")
    
    print(f"\nBitiş: {datetime.now().strftime('%H:%M:%S')}")
    print("=" * 60)

if __name__ == "__main__":
    main()
