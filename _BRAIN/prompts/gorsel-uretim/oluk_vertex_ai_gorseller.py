"""
OLUK GÖRSEL ÜRETİM - VERTEX AI IMAGEN
=====================================
Google Cloud Vertex AI üzerinden Imagen 3.0 kullanır
Billing: Aktif (My Billing Account)
Project: gen-lang-client-0144452360

KURULUM:
pip install google-cloud-aiplatform cloudinary python-dotenv

ÇALIŞTIR:
python oluk_vertex_ai_gorseller.py
"""

import os
import json
import time
from datetime import datetime
from dotenv import load_dotenv

# Vertex AI
from google.cloud import aiplatform
from vertexai.preview.vision_models import ImageGenerationModel

# Cloudinary
import cloudinary
import cloudinary.uploader

# .env yükle
load_dotenv()

# =============================================
# YAPILANDIRMA
# =============================================

# Google Cloud
PROJECT_ID = "gen-lang-client-0144452360"
LOCATION = "us-central1"  # Imagen için desteklenen region

# Cloudinary
cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME", "dzegofdgp"),
    api_key=os.getenv("CLOUDINARY_API_KEY", "283632349543287"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET", "dm_7xFvraZI-IwcvAxnWGTeNrWM")
)

# =============================================
# MARKA DNA
# =============================================

MARKA_DNA = """
=== OLUK.ORG BRAND IDENTITY ===

COLOR PALETTE:
- Primary: Deep Teal #0D4F4F
- Accent: Warm Gold #C9A962
- Background: Soft Cream #F5F0E6

STYLE: Ottoman Cyberpunk + Modern Spiritual Minimalism
- Clean, spacious composition
- Subtle sacred geometry
- Soft golden hour lighting
- No human faces (silhouettes only)

PROHIBITIONS:
- NO text in image
- NO religious symbols
- NO neon colors
- NO dark/scary imagery
- NO realistic faces
"""

# =============================================
# 14 GÖRSEL PROMPTLARI
# =============================================

GORSELLER = [
    # HERO 1: KAPI
    {
        "dosya_adi": "ders1-kapi-hero",
        "klasor": "oluk-org/gorseller/ders-1",
        "aspect_ratio": "16:9",
        "prompt": f"""
{MARKA_DNA}

Create a magnificent ancient golden door, slightly ajar, with soft teal light (#0D4F4F) streaming through the gap.
The door has intricate Ottoman geometric patterns carved into aged bronze/gold (#C9A962) surface.
Ethereal cream-colored mist (#F5F0E6) at the threshold.
Deep teal background gradient suggesting infinite depth.
Soft volumetric god rays from the gap.
Golden particles floating in the light beams.
Cinematic quality, 4K resolution feel.
Mood: Sacred threshold, invitation to transformation, new beginnings.
        """,
        "seo_tr": {
            "alt": "OLUK Kapı dersi altın kapı turkuaz ışık temel arınma meditasyon",
            "keywords": "kapı dersi, temel arınma, meditasyon, ruhsal gelişim, OLUK"
        },
        "seo_en": {
            "alt": "OLUK Door lesson golden door teal light foundational purification meditation",
            "keywords": "door lesson, foundational purification, meditation, spiritual growth, OLUK"
        }
    },
    # HERO 2: AYNA
    {
        "dosya_adi": "ders2-ayna-hero",
        "klasor": "oluk-org/gorseller/ders-2",
        "aspect_ratio": "16:9",
        "prompt": f"""
{MARKA_DNA}

An ornate full-length antique mirror with elaborate golden Ottoman frame (#C9A962).
A human silhouette (no face) stands before the mirror.
The reflection shows NOT the silhouette's back, but abstract inner light - golden particles dissolving into teal (#0D4F4F).
The silhouette is merging with light, becoming translucent.
Deep teal ambient background with floating gold and cream (#F5F0E6) particles.
Golden light emanating FROM the mirror reflection.
Cinematic quality, ethereal atmosphere.
Mood: Self-discovery, meeting one's true self, transformation.
        """,
        "seo_tr": {
            "alt": "OLUK Ayna dersi altın çerçeveli ayna kendini tanıma gölge çalışması",
            "keywords": "ayna dersi, kendini tanıma, gölge çalışması, OLUK"
        },
        "seo_en": {
            "alt": "OLUK Mirror lesson golden framed mirror self-recognition shadow work",
            "keywords": "mirror lesson, self-recognition, shadow work, OLUK"
        }
    },
    # HERO 3: KÖPRÜ
    {
        "dosya_adi": "ders3-kopru-hero",
        "klasor": "oluk-org/gorseller/ders-3",
        "aspect_ratio": "16:9",
        "prompt": f"""
{MARKA_DNA}

An elegant arched Ottoman-style stone bridge spanning across a misty void.
LEFT side: Darker teal atmosphere (#0D4F4F) representing the known past.
RIGHT side: Warm golden glow (#C9A962) representing the unknown future.
A lone human silhouette (no face) standing at the EXACT CENTER of the bridge.
Golden particles floating in the air around the figure.
Cream-colored (#F5F0E6) mist below the bridge.
Dramatic gradient from dark teal left to warm gold right.
Cinematic epic scope, 4K quality.
Mood: Balanced transition, courageous stillness between two worlds.
        """,
        "seo_tr": {
            "alt": "OLUK Köprü dersi taş köprü geçiş belirsizlik denge meditasyonu",
            "keywords": "köprü dersi, geçiş, belirsizlik, denge, OLUK"
        },
        "seo_en": {
            "alt": "OLUK Bridge lesson stone bridge transition uncertainty balance meditation",
            "keywords": "bridge lesson, transition, uncertainty, balance, OLUK"
        }
    },
    # HERO 4: IŞIK
    {
        "dosya_adi": "ders4-isik-hero",
        "klasor": "oluk-org/gorseller/ders-4",
        "aspect_ratio": "16:9",
        "prompt": f"""
{MARKA_DNA}

A radiant abstract light source at the center, brilliant warm gold (#C9A962).
Light radiating outward in concentric waves transforming darkness to light.
Surrounding teal darkness (#0D4F4F) gradually transforms into warm golden light.
Geometric Ottoman patterns emerging within the light rays.
Cream-colored (#F5F0E6) particles ascending toward the light source.
Soft, diffused rays creating depth and dimension.
HDR quality, volumetric lighting.
Mood: Illumination, awakening, inner revelation.
        """,
        "seo_tr": {
            "alt": "OLUK Işık dersi altın ışık aydınlanma uyanış bilinç genişlemesi",
            "keywords": "ışık dersi, aydınlanma, uyanış, bilinç, OLUK"
        },
        "seo_en": {
            "alt": "OLUK Light lesson golden light illumination awakening consciousness expansion",
            "keywords": "light lesson, illumination, awakening, consciousness, OLUK"
        }
    },
    # HERO 5: YOL
    {
        "dosya_adi": "ders5-yol-hero",
        "klasor": "oluk-org/gorseller/ders-5",
        "aspect_ratio": "16:9",
        "prompt": f"""
{MARKA_DNA}

An infinite luminous path stretching toward a glowing horizon.
The path is made of soft golden light (#C9A962) with subtle Ottoman geometric patterns.
Mountains or ethereal shapes in teal shades (#0D4F4F) framing the sides.
Golden footsteps glowing on the path suggesting previous travelers.
Ethereal sky with teal and gold gradient.
Soft cream (#F5F0E6) light at the distant horizon.
The path continues beyond the frame - endless journey.
Epic landscape quality, cinematic.
Mood: Endless possibility, patient determination, sacred pilgrimage.
        """,
        "seo_tr": {
            "alt": "OLUK Yol dersi sonsuz ışıklı patika yolculuk sürekli gelişim",
            "keywords": "yol dersi, yolculuk, sürekli gelişim, OLUK"
        },
        "seo_en": {
            "alt": "OLUK Path lesson infinite luminous trail journey continuous growth",
            "keywords": "path lesson, journey, continuous growth, OLUK"
        }
    },
    # İNFOGRAFİK 1: KAPI 5 SEANS
    {
        "dosya_adi": "ders1-kapi-5seans-akis",
        "klasor": "oluk-org/gorseller/ders-1",
        "aspect_ratio": "9:16",
        "prompt": f"""
{MARKA_DNA}

Vertical infographic showing 5 session flow.
Soft cream background (#F5F0E6) with subtle geometric texture.
5 numbered stations connected by flowing water blue (#5BA3A3) lines from top to bottom:
1. Compass/direction icon - gold circle with "1"
2. Wind/breath icon - gold circle with "2"  
3. Body silhouette icon - gold circle with "3"
4. Concentric circles/chakra icon - gold circle with "4"
5. Seal/lock icon - gold circle with "5"
All icons in teal (#0D4F4F), numbers in gold (#C9A962).
Clean, professional infographic style.
Ottoman decorative corner elements.
        """,
        "seo_tr": {
            "alt": "OLUK Kapı dersi 5 seans akış şeması infografik",
            "keywords": "kapı dersi, 5 seans, meditasyon programı, OLUK"
        },
        "seo_en": {
            "alt": "OLUK Door lesson 5 sessions flow chart infographic",
            "keywords": "door lesson, 5 sessions, meditation program, OLUK"
        }
    },
    # İNFOGRAFİK 2: 7 CHAKRA
    {
        "dosya_adi": "ders1-7chakra-haritasi",
        "klasor": "oluk-org/gorseller/ders-1",
        "aspect_ratio": "9:16",
        "prompt": f"""
{MARKA_DNA}

Vertical infographic: 7 chakra energy centers on human silhouette.
Deep teal background (#0D4F4F) gradient.
Translucent human silhouette in lighter teal, centered.
7 glowing orbs at correct anatomical locations:
1. ROOT - Deep red at base of spine
2. SACRAL - Orange below navel
3. SOLAR - Yellow at solar plexus
4. HEART - Emerald green at chest
5. THROAT - Sky blue at throat
6. THIRD EYE - Indigo at forehead
7. CROWN - Violet/gold at top of head
Golden (#C9A962) central channel connecting all chakras.
Elegant Ottoman geometric border in gold.
Educational, spiritual infographic style.
        """,
        "seo_tr": {
            "alt": "7 chakra enerji merkezi haritası insan bedeni kundalini",
            "keywords": "7 çakra, enerji merkezi, chakra sistemi, OLUK"
        },
        "seo_en": {
            "alt": "7 chakra energy centers map human body kundalini",
            "keywords": "7 chakras, energy centers, chakra system, OLUK"
        }
    },
    # İNFOGRAFİK 3: AYNA 5 SEANS (Spiral)
    {
        "dosya_adi": "ders2-ayna-5seans-akis",
        "klasor": "oluk-org/gorseller/ders-2",
        "aspect_ratio": "1:1",
        "prompt": f"""
{MARKA_DNA}

Square infographic: 5 session spiral flow for self-discovery.
Soft cream (#F5F0E6) to warm gold center gradient background.
Golden ratio spiral moving from outer edge to center.
5 stations along the spiral path (outside to center):
1. Mirror/reflection icon - outer edge, darker teal
2. Shadow/eclipse icon - first curve inward
3. Open hands/embrace icon - middle
4. Yin-yang/merge icon - inner curve
5. Seal/completion icon - radiant center
Gradient from teal (#0D4F4F) outer to gold (#C9A962) center.
Water blue (#5BA3A3) flowing lines connecting stations.
Elegant, meditative design.
        """,
        "seo_tr": {
            "alt": "OLUK Ayna dersi 5 seans spiral infografik kendini tanıma",
            "keywords": "ayna dersi, spiral meditasyon, kendini tanıma, OLUK"
        },
        "seo_en": {
            "alt": "OLUK Mirror lesson 5 sessions spiral infographic self-discovery",
            "keywords": "mirror lesson, spiral meditation, self-discovery, OLUK"
        }
    },
    # İNFOGRAFİK 4: GÖLGE ÇALIŞMASI
    {
        "dosya_adi": "ders2-golge-calisma-sureci",
        "klasor": "oluk-org/gorseller/ders-2",
        "aspect_ratio": "16:9",
        "prompt": f"""
{MARKA_DNA}

Horizontal infographic: 3-stage shadow work transformation.
Smooth gradient background from dark left to light right.

LEFT THIRD - "See the Shadow":
- Deep teal/dark atmosphere (#083838)
- Clear human silhouette with visible shadow behind
- Mysterious, first awareness

CENTER THIRD - "Meet the Shadow":
- Twilight gradient (teal mixing with gold)
- Two silhouettes facing each other, hands reaching
- Confrontation, dialogue

RIGHT THIRD - "Accept the Shadow":
- Warm golden light (#C9A962 to #F5F0E6)
- Single integrated figure, glowing, whole
- Resolution, peace, integration

Flowing transitions between phases, no harsh divisions.
Professional psychological infographic quality.
        """,
        "seo_tr": {
            "alt": "Gölge çalışması 3 aşama karanlık aydınlık dönüşüm infografik",
            "keywords": "gölge çalışması, Jung, bilinçaltı, dönüşüm, OLUK"
        },
        "seo_en": {
            "alt": "Shadow work 3 stages darkness light transformation infographic",
            "keywords": "shadow work, Jung, subconscious, transformation, OLUK"
        }
    },
    # İNFOGRAFİK 5: KÖPRÜ 5 SEANS
    {
        "dosya_adi": "ders3-kopru-5seans-akis",
        "klasor": "oluk-org/gorseller/ders-3",
        "aspect_ratio": "16:9",
        "prompt": f"""
{MARKA_DNA}

Horizontal infographic: Bridge journey with 5 stations.
Ottoman-style arched bridge spanning horizontally.
LEFT BANK: "Past" - darker teal (#0D4F4F) atmosphere
RIGHT BANK: "Future" - warm golden glow (#C9A962)

5 stations on the bridge (left to right):
1. Threshold icon - entry point
2. Mist/liminal space icon - first quarter
3. Footstep icon - exact center
4. Balance/scales icon - third quarter
5. Arrival icon - reaching right bank

Bridge in cream stone (#F5F0E6) with gold accents.
Misty void below (not threatening).
Color gradient: teal left to gold right.
Professional journey map quality.
        """,
        "seo_tr": {
            "alt": "OLUK Köprü dersi 5 seans köprü infografik geçiş yolculuğu",
            "keywords": "köprü dersi, geçiş, belirsizlik, denge, OLUK"
        },
        "seo_en": {
            "alt": "OLUK Bridge lesson 5 sessions bridge infographic transition journey",
            "keywords": "bridge lesson, transition, uncertainty, balance, OLUK"
        }
    },
    # İNFOGRAFİK 6: IŞIK 5 SEANS (Radyal)
    {
        "dosya_adi": "ders4-isik-5seans-akis",
        "klasor": "oluk-org/gorseller/ders-4",
        "aspect_ratio": "1:1",
        "prompt": f"""
{MARKA_DNA}

Square infographic: 5 concentric rings, center to edge.
Darkness at center transforming to light at edges (reversed - light spreads OUT).

5 rings (center outward):
1. NIGHT - darkest center, deep teal/black
2. SPARK - first ring, hints of amber emerging
3. FLAME - middle ring, growing warmth
4. SUN - fourth ring, warm gold
5. RADIANCE - outer ring, brilliant gold to cream

Each ring labeled with icon and number.
Light rays emanating from center outward.
Ottoman geometric accents at cardinal points.
Professional mandala-quality design.
        """,
        "seo_tr": {
            "alt": "OLUK Işık dersi 5 seans radyal infografik aydınlanma yolculuğu",
            "keywords": "ışık dersi, radyal meditasyon, aydınlanma, OLUK"
        },
        "seo_en": {
            "alt": "OLUK Light lesson 5 sessions radial infographic illumination journey",
            "keywords": "light lesson, radial meditation, illumination, OLUK"
        }
    },
    # İNFOGRAFİK 7: KARANLIK AYDINLIK
    {
        "dosya_adi": "ders4-karanlik-aydinlik-donusum",
        "klasor": "oluk-org/gorseller/ders-4",
        "aspect_ratio": "16:9",
        "prompt": f"""
{MARKA_DNA}

Horizontal infographic: 3-phase transformation from darkness to light.
Cinematic quality, smooth gradient.

LEFT - "Darkness":
- Deep teal to near-black
- Abstract figure curled in shadow
- Stars barely visible, peaceful darkness

CENTER - "Dawn":
- Twilight gradient
- Figure beginning to unfold, emerge
- Horizon line with golden glow appearing

RIGHT - "Radiance":
- Warm gold to cream
- Figure fully expanded, radiant
- Light particles flowing outward

Smooth transitions, cinematic color grading.
Professional transformation infographic.
        """,
        "seo_tr": {
            "alt": "Karanlıktan aydınlığa dönüşüm 3 faz uyanış infografik",
            "keywords": "karanlık, aydınlık, dönüşüm, uyanış, OLUK"
        },
        "seo_en": {
            "alt": "Darkness to light transformation 3 phases awakening infographic",
            "keywords": "darkness, light, transformation, awakening, OLUK"
        }
    },
    # İNFOGRAFİK 8: YOL 5 SEANS
    {
        "dosya_adi": "ders5-yol-5seans-akis",
        "klasor": "oluk-org/gorseller/ders-5",
        "aspect_ratio": "16:9",
        "prompt": f"""
{MARKA_DNA}

Horizontal infographic: Winding path with 5 milestones.
Journey map style, path continues beyond frame.

Landscape: Rolling teal hills, golden horizon glow.
Path: Luminous golden light (#C9A962), gently winding.

5 milestones along path:
1. Compass rose icon - path beginning
2. Bag/vessel icon - first curve
3. Two figures icon - middle section
4. Rest/pause icon - scenic bend
5. Forward arrow icon - leading to horizon, "..." continues

Golden footsteps on path, particles floating.
Soft mist in valleys, stars in upper sky.
Epic landscape quality, professional.
        """,
        "seo_tr": {
            "alt": "OLUK Yol dersi 5 seans patika infografik hayat yolculuğu",
            "keywords": "yol dersi, yolculuk, sürekli gelişim, OLUK"
        },
        "seo_en": {
            "alt": "OLUK Path lesson 5 sessions trail infographic life journey",
            "keywords": "path lesson, journey, continuous growth, OLUK"
        }
    },
    # İNFOGRAFİK 9: 5 DERS YOLCULUK HARİTASI
    {
        "dosya_adi": "oluk-5ders-yolculuk-haritasi",
        "klasor": "oluk-org/gorseller/genel",
        "aspect_ratio": "16:9",
        "prompt": f"""
{MARKA_DNA}

Comprehensive journey map: All 5 OLUK lessons as destinations.
Treasure map meets modern spiritual infographic.
Cream parchment background (#F5F0E6) with clean aesthetic.

5 destinations connected by golden path (#C9A962):
1. DOOR icon - START point, left side
2. MIRROR icon - upper left area
3. BRIDGE icon - center of map
4. LIGHT icon - upper right area
5. PATH icon - right side, continues beyond edge

Golden path winding between all destinations.
Gentle teal hills and terrain features.
Ottoman-styled compass rose in corner.
OLUK brand mark subtly integrated.
Premium quality, would frame on wall.
        """,
        "seo_tr": {
            "alt": "OLUK 5 ders yolculuk haritası kapı ayna köprü ışık yol tam program",
            "keywords": "OLUK tam program, 5 ders, ruhsal dönüşüm haritası"
        },
        "seo_en": {
            "alt": "OLUK 5 lessons journey map door mirror bridge light path complete program",
            "keywords": "OLUK complete program, 5 lessons, spiritual transformation map"
        }
    }
]

# =============================================
# VERTEX AI GÖRSEL ÜRETİM
# =============================================

def vertex_ai_baslat():
    """Vertex AI'ı başlat"""
    aiplatform.init(project=PROJECT_ID, location=LOCATION)
    print(f"✅ Vertex AI başlatıldı: {PROJECT_ID} / {LOCATION}")

def gorsel_uret(gorsel_data):
    """Tek görsel üret ve Cloudinary'ye yükle"""
    
    dosya_adi = gorsel_data["dosya_adi"]
    klasor = gorsel_data["klasor"]
    prompt = gorsel_data["prompt"]
    
    print(f"\n{'='*60}")
    print(f"📸 ÜRETİLİYOR: {dosya_adi}")
    print(f"{'='*60}")
    
    try:
        # Imagen modeli
        model = ImageGenerationModel.from_pretrained("imagen-3.0-generate-001")
        
        print("⏳ Vertex AI Imagen çağrılıyor...")
        
        # Görsel üret
        images = model.generate_images(
            prompt=prompt,
            number_of_images=1,
            aspect_ratio=gorsel_data.get("aspect_ratio", "16:9"),
            safety_filter_level="block_few",
            person_generation="allow_adult"
        )
        
        # Lokal kaydet
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        local_path = f"{dosya_adi}_{timestamp}.png"
        images[0].save(local_path)
        print(f"💾 Lokal kaydedildi: {local_path}")
        
        # Cloudinary'ye yükle
        print("☁️ Cloudinary'ye yükleniyor...")
        upload_result = cloudinary.uploader.upload(
            local_path,
            folder=klasor,
            public_id=dosya_adi,
            overwrite=True
        )
        
        cloudinary_url = upload_result["secure_url"]
        print(f"✅ BAŞARILI: {cloudinary_url}")
        
        return {
            "success": True,
            "data": {
                "dosya_adi": dosya_adi,
                "cloudinary_url": cloudinary_url,
                "seo_tr": gorsel_data["seo_tr"],
                "seo_en": gorsel_data["seo_en"]
            }
        }
        
    except Exception as e:
        print(f"❌ HATA: {str(e)}")
        return {"success": False, "error": str(e), "dosya_adi": dosya_adi}


def tum_gorselleri_uret():
    """Tüm 14 görseli üret"""
    
    print("""
    ╔════════════════════════════════════════════════════════════╗
    ║     🌊 OLUK VERTEX AI GÖRSEL ÜRETİM 🌊                    ║
    ║     Imagen 3.0 + Cloudinary                                ║
    ║     14 Görsel × ~1dk = ~15-20 dakika                      ║
    ╚════════════════════════════════════════════════════════════╝
    """)
    
    # Vertex AI başlat
    vertex_ai_baslat()
    
    sonuclar = []
    basarili = 0
    hatali = 0
    toplam = len(GORSELLER)
    
    for i, gorsel in enumerate(GORSELLER, 1):
        print(f"\n# GÖRSEL {i}/{toplam}")
        
        sonuc = gorsel_uret(gorsel)
        sonuclar.append(sonuc)
        
        if sonuc["success"]:
            basarili += 1
        else:
            hatali += 1
        
        # Rate limit
        if i < toplam:
            print("⏳ 10 saniye bekleniyor...")
            time.sleep(10)
    
    # Özet
    print(f"""
    ╔════════════════════════════════════════════════════════════╗
    ║                    TAMAMLANDI                              ║
    ╠════════════════════════════════════════════════════════════╣
    ║  ✅ Başarılı: {basarili:3d}                                      ║
    ║  ❌ Hatalı:   {hatali:3d}                                      ║
    ╚════════════════════════════════════════════════════════════╝
    """)
    
    # SEO JSON kaydet
    seo_path = f"oluk_seo_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    basarili_data = [s["data"] for s in sonuclar if s["success"]]
    with open(seo_path, "w", encoding="utf-8") as f:
        json.dump(basarili_data, f, ensure_ascii=False, indent=2)
    print(f"📋 SEO kaydedildi: {seo_path}")
    
    return sonuclar


if __name__ == "__main__":
    print("🚀 OLUK Vertex AI Görsel Üretim Başlıyor...\n")
    tum_gorselleri_uret()
    print("\n✨ Tamamlandı!")
