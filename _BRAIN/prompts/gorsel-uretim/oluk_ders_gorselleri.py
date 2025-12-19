"""
OLUK 5 DERS GÖRSEL ÜRETİM SCRIPTİ
=================================
Bu script otomatik çalışır:
1. 14 görsel üretir (5 hero + 9 infografik)
2. Cloudinary'ye yükler
3. SEO metadata kaydeder

KULLANIM:
python oluk_ders_gorselleri.py

TAHMİNİ SÜRE: ~2 saat (14 görsel × ~8dk/görsel)
"""

import google.generativeai as genai
import cloudinary
import cloudinary.uploader
from dotenv import load_dotenv
import os
from datetime import datetime
import json
import time

# .env yükle
load_dotenv()

# API Yapılandırma
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET")
)

# =============================================
# MARKA DNA - HER PROMPT'A EKLENİR
# =============================================

MARKA_DNA = """
=== OLUK.ORG BRAND IDENTITY - STRICT REQUIREMENTS ===

COLOR PALETTE (MANDATORY):
- Primary: Deep Teal #0D4F4F (background, main elements)
- Accent: Warm Gold #C9A962 (highlights, sacred elements)
- Light: Soft Cream #F5F0E6 (light rays, soft glow)
- Text Dark: Charcoal #2C3E50 (if any text needed)

VISUAL STYLE: Ottoman Cyberpunk + Modern Spiritual Minimalism
- Clean, spacious composition with breathing room
- Subtle sacred geometry (modernized, not cliché)
- Soft golden hour lighting, ethereal glow
- Flowing water/light metaphors
- Premium, professional quality

STRICT PROHIBITIONS:
- NO text in image (except watermark if specified)
- NO religious symbols (cross, crescent, om, star of david)
- NO realistic human faces (silhouettes only)
- NO neon colors or cyberpunk clichés
- NO dark/scary/ominous imagery
- NO generic stock photo aesthetics
- NO cluttered or busy compositions

TARGET: 95% female audience, 28-55 age, educated, urban Turkish women
MOOD: Serene, transformative, accessible, empowering, safe
"""

# =============================================
# GÖRSEL ŞABLONLARI
# =============================================

GORSELLER = [
    # ===== HERO GÖRSELLERİ (5 adet) =====
    {
        "dosya_adi": "ders1-kapi-hero",
        "klasor": "oluk-org/gorseller/ders-1",
        "aspect_ratio": "16:9",
        "prompt": """
An ancient golden door slightly ajar with soft teal light streaming through the gap.
Ottoman geometric patterns subtly etched into the door frame.
Ethereal cream-colored mist at the threshold.
The door represents the first step into inner transformation.
Deep teal (#0D4F4F) background gradient.
Warm gold (#C9A962) door details and light rays.
Cinematic quality, 4K resolution feel, rule of thirds composition.
Mood: Inviting yet mysterious, sacred threshold, new beginnings.
        """,
        "seo_tr": {
            "alt": "OLUK Kapı dersi altın kapı turkuaz ışık temel arınma meditasyon",
            "keywords": "kapı dersi, temel arınma, meditasyon, ruhsal gelişim, nefes çalışması, OLUK"
        },
        "seo_en": {
            "alt": "OLUK Door lesson golden door teal light foundational purification meditation",
            "keywords": "door lesson, foundational purification, meditation, spiritual growth, breathwork, OLUK"
        }
    },
    {
        "dosya_adi": "ders2-ayna-hero",
        "klasor": "oluk-org/gorseller/ders-2",
        "aspect_ratio": "16:9",
        "prompt": """
An ornate antique mirror with golden Ottoman-style frame.
The reflection shows not a face but an abstract inner light - particles of gold dissolving into teal.
A human silhouette (no face details) stands before it, merging with their own reflection.
Deep teal (#0D4F4F) ambient background.
Warm gold (#C9A962) mirror frame with intricate patterns.
Soft cream (#F5F0E6) light particles emanating from the reflection.
Mood: Introspective, honest, transformative self-discovery.
        """,
        "seo_tr": {
            "alt": "OLUK Ayna dersi altın çerçeveli ayna kendini tanıma iç yolculuk",
            "keywords": "ayna dersi, kendini tanıma, gölge çalışması, öz kabul, iç yolculuk, OLUK"
        },
        "seo_en": {
            "alt": "OLUK Mirror lesson golden framed mirror self-recognition inner journey",
            "keywords": "mirror lesson, self-recognition, shadow work, self-acceptance, inner journey, OLUK"
        }
    },
    {
        "dosya_adi": "ders3-kopru-hero",
        "klasor": "oluk-org/gorseller/ders-3",
        "aspect_ratio": "16:9",
        "prompt": """
An elegant arched bridge suspended over a misty void.
Left side: darker teal atmosphere representing the known past.
Right side: warm golden glow representing the unknown future.
A lone human silhouette (no face) stands at the exact center of the bridge, perfectly balanced.
Golden particles float in the air around the figure.
Deep teal (#0D4F4F) to warm gold (#C9A962) gradient across the scene.
Ottoman arch design on the bridge structure.
Mood: Transitional, balanced, courageous stillness between two worlds.
        """,
        "seo_tr": {
            "alt": "OLUK Köprü dersi ışıklı köprü geçiş dönüşüm denge meditasyonu",
            "keywords": "köprü dersi, geçiş, dönüşüm, denge, belirsizlik, cesaret, OLUK"
        },
        "seo_en": {
            "alt": "OLUK Bridge lesson luminous bridge transition transformation balance",
            "keywords": "bridge lesson, transition, transformation, balance, uncertainty, courage, OLUK"
        }
    },
    {
        "dosya_adi": "ders4-isik-hero",
        "klasor": "oluk-org/gorseller/ders-4",
        "aspect_ratio": "16:9",
        "prompt": """
A single radiant golden flame or light source in the center of the image.
Light emanating outward in concentric waves transforming darkness to light.
Geometric Ottoman patterns emerging within the light rays.
Surrounding teal darkness (#0D4F4F) gradually transforms into warm golden light (#C9A962).
Cream-colored (#F5F0E6) particles ascending toward the light source.
Soft, diffused rays creating depth and dimension.
Mood: Awakening, radiant, inner revelation, hope.
        """,
        "seo_tr": {
            "alt": "OLUK Işık dersi altın ışık huzmesi aydınlanma uyanış meditasyonu",
            "keywords": "ışık dersi, aydınlanma, uyanış, nur, bilinç genişlemesi, OLUK"
        },
        "seo_en": {
            "alt": "OLUK Light lesson golden light beam illumination awakening meditation",
            "keywords": "light lesson, illumination, awakening, radiance, consciousness expansion, OLUK"
        }
    },
    {
        "dosya_adi": "ders5-yol-hero",
        "klasor": "oluk-org/gorseller/ders-5",
        "aspect_ratio": "16:9",
        "prompt": """
An infinite luminous path stretching toward a glowing horizon.
The path itself is made of soft golden light with subtle Ottoman geometric patterns embedded.
Mountains or abstract ethereal shapes frame the sides of the path.
Golden footsteps glowing on the path suggesting previous travelers.
Ethereal sky with deep teal (#0D4F4F) and warm gold (#C9A962) gradient.
Soft cream (#F5F0E6) light at the distant horizon.
The path continues beyond the frame suggesting endless journey.
Mood: Endless possibility, patient determination, sacred pilgrimage.
        """,
        "seo_tr": {
            "alt": "OLUK Yol dersi sonsuz ışıklı patika yolculuk sürekli gelişim",
            "keywords": "yol dersi, yolculuk, sürekli gelişim, hayat yolu, manevi yürüyüş, OLUK"
        },
        "seo_en": {
            "alt": "OLUK Path lesson infinite luminous trail journey continuous growth",
            "keywords": "path lesson, journey, continuous growth, life path, spiritual walk, OLUK"
        }
    },
    
    # ===== İNFOGRAFİKLER (9 adet) =====
    {
        "dosya_adi": "ders1-kapi-5seans-akis",
        "klasor": "oluk-org/gorseller/ders-1",
        "aspect_ratio": "9:16",
        "prompt": """
Vertical infographic showing 5 session flow for spiritual lesson.
Clean modern design with Ottoman-inspired subtle ornamentation.

5 numbered stations connected by flowing water/light lines from top to bottom:
1. MENZIL (compass/direction icon) - at top
2. NEFES (breath/wind icon)
3. TENİN SESİ (body/silhouette icon)
4. MERKEZ (energy center/chakra icon)
5. MÜHÜR (seal/lock icon) - at bottom

Each station: Gold circle with number, teal icon, clean label area.
Connection lines: Flowing water blue (#5BA3A3) curves between stations.
Background: Soft cream (#F5F0E6) with subtle geometric pattern.
Gold (#C9A962) accents on numbers and highlights.
Teal (#0D4F4F) for icons and main elements.

Style: Professional data visualization, clean iconography, consistent style.
        """,
        "seo_tr": {
            "alt": "OLUK Kapı dersi 5 seans akışı infografik menzil nefes beden merkez mühür",
            "keywords": "kapı dersi, 5 seans, nefes çalışması, beden farkındalığı, enerji merkezi"
        },
        "seo_en": {
            "alt": "OLUK Door lesson 5 sessions flow infographic destination breath body center seal",
            "keywords": "door lesson, 5 sessions, breathwork, body awareness, energy center"
        }
    },
    {
        "dosya_adi": "ders1-7chakra-haritasi",
        "klasor": "oluk-org/gorseller/ders-1",
        "aspect_ratio": "9:16",
        "prompt": """
Seven chakra energy centers diagram on abstract human silhouette.
Vertical composition showing energy channel from base to crown.

Each chakra as glowing orb in correct traditional color:
1. ROOT (Kök) - Deep red at base of spine
2. SACRAL (Sakral) - Orange below navel
3. SOLAR (Güneş) - Yellow at solar plexus
4. HEART (Kalp) - Emerald green at chest
5. THROAT (Boğaz) - Sky blue at throat
6. THIRD EYE (Alın) - Indigo at forehead
7. CROWN (Taç) - Violet/gold at top of head

Energy channels (nadis) connecting chakras as flowing teal light streams.
Human silhouette in deep teal (#0D4F4F), translucent.
Ottoman geometric frame border in gold (#C9A962).
Background: Soft cream (#F5F0E6) gradient.

Style: Educational, clean, professional spiritual infographic.
        """,
        "seo_tr": {
            "alt": "7 enerji merkezi chakra haritası insan bedeni ruhsal gelişim OLUK",
            "keywords": "7 çakra, enerji merkezi, chakra sistemi, kundalini, enerji haritası"
        },
        "seo_en": {
            "alt": "7 energy centers chakra map human body spiritual development OLUK",
            "keywords": "7 chakras, energy centers, chakra system, kundalini, energy map"
        }
    },
    {
        "dosya_adi": "ders2-ayna-5seans-akis",
        "klasor": "oluk-org/gorseller/ders-2",
        "aspect_ratio": "1:1",
        "prompt": """
Square infographic showing 5 session spiral flow for self-discovery lesson.
Spiral design converging from outer edge to center.

5 stations along the spiral path, moving inward:
1. YANSIMA (reflection/mirror icon) - outer edge
2. GÖLGE (shadow/dark icon)
3. KABUL (acceptance/open hands icon)
4. BÜTÜNLEŞME (integration/unity icon)
5. MÜHÜR (seal icon) - at center

Each station: Gold numbered marker, clean icon, Turkish label.
Spiral path: Flowing gradient from teal (#0D4F4F) outer to gold (#C9A962) center.
Background: Soft cream (#F5F0E6).
Connection flow lines in water blue (#5BA3A3).

Style: Modern flat design, spiral composition, professional quality.
        """,
        "seo_tr": {
            "alt": "OLUK Ayna dersi 5 seans spiral infografik kendini tanıma gölge kabul",
            "keywords": "ayna dersi, kendini tanıma, gölge çalışması, kabul, bütünleşme"
        },
        "seo_en": {
            "alt": "OLUK Mirror lesson 5 sessions spiral infographic self-recognition shadow acceptance",
            "keywords": "mirror lesson, self-recognition, shadow work, acceptance, integration"
        }
    },
    {
        "dosya_adi": "ders2-golge-calisma-sureci",
        "klasor": "oluk-org/gorseller/ders-2",
        "aspect_ratio": "16:9",
        "prompt": """
Horizontal infographic showing 3-stage shadow work transformation process.
Left to right progression from darkness to light.

3 STAGES:
1. GÖLGEYI GÖR (See the Shadow) - LEFT
   Dark silhouette with visible shadow behind, teal/dark atmosphere
   
2. GÖLGEYLE TANIŞ (Meet the Shadow) - CENTER
   Figure and shadow facing each other, twilight atmosphere
   
3. GÖLGEYI KABUL ET (Accept the Shadow) - RIGHT
   Figure and shadow merged into golden integrated whole

Gradient background: Dark teal left → twilight center → warm gold right.
Arrows or flowing lines connecting the stages.
Clean, professional style with subtle Ottoman geometric accents.
Gold (#C9A962) highlights and frame elements.
        """,
        "seo_tr": {
            "alt": "Gölge çalışması 3 aşama infografik karanlık aydınlık dönüşüm OLUK",
            "keywords": "gölge çalışması, jung, bilinçaltı, kabul, dönüşüm, kendini tanıma"
        },
        "seo_en": {
            "alt": "Shadow work 3 stages infographic darkness light transformation OLUK",
            "keywords": "shadow work, jung, subconscious, acceptance, transformation, self-recognition"
        }
    },
    {
        "dosya_adi": "ders3-kopru-5seans-akis",
        "klasor": "oluk-org/gorseller/ders-3",
        "aspect_ratio": "16:9",
        "prompt": """
Horizontal infographic showing bridge with 5 stations across the span.
Bridge design with Ottoman arches, spanning across a subtle void.

LEFT BANK: "GEÇMİŞ" (Past) - darker teal atmosphere
RIGHT BANK: "GELECEK" (Future) - warm golden glow

5 STATIONS ON BRIDGE (left to right):
1. KIYI (Shore) - entry point on left bank
2. BOŞLUK (Gap) - first quarter of bridge
3. ADIM (The Step) - center of bridge
4. DENGE (Balance) - third quarter of bridge
5. VARIŞ (Arrival) - reaching right bank

Gold numbered markers, clean icons, Turkish labels.
Bridge structure in warm gold (#C9A962).
Flowing connection lines in water blue (#5BA3A3).
Background gradient: dark teal → soft cream → warm gold.
        """,
        "seo_tr": {
            "alt": "OLUK Köprü dersi 5 seans köprü infografik eşik berzah denge vuslat",
            "keywords": "köprü dersi, geçiş, belirsizlik, denge, cesaret, değişim"
        },
        "seo_en": {
            "alt": "OLUK Bridge lesson 5 sessions bridge infographic threshold liminal balance arrival",
            "keywords": "bridge lesson, transition, uncertainty, balance, courage, change"
        }
    },
    {
        "dosya_adi": "ders4-isik-5seans-akis",
        "klasor": "oluk-org/gorseller/ders-4",
        "aspect_ratio": "1:1",
        "prompt": """
Square infographic with radiating concentric circles design.
Center is darkest, gradually brightening outward through 5 rings.

5 CONCENTRIC RINGS (center outward):
1. KARANLIK (Night) - darkest center, deep teal almost black
2. KIVILCIM (Spark) - first ring, hint of warm light emerging
3. ALEV (Flame) - middle ring, growing amber glow
4. GÜNEŞ (Sun) - fourth ring, bright warm gold
5. PAYLAŞIM (Radiance) - outer ring, brilliant gold spreading outward

Each ring labeled with Turkish name and simple icon.
Gold (#C9A962) numbers and text on darker areas.
Teal (#0D4F4F) numbers and text on lighter outer areas.
Subtle light ray patterns emanating outward.
Ottoman geometric accents in the design.
        """,
        "seo_tr": {
            "alt": "OLUK Işık dersi 5 seans radyal infografik gece kıvılcım şule güneş tebliğ",
            "keywords": "ışık dersi, aydınlanma, uyanış, bilinç, nur, tebliğ"
        },
        "seo_en": {
            "alt": "OLUK Light lesson 5 sessions radial infographic night spark flame sun radiance",
            "keywords": "light lesson, illumination, awakening, consciousness, radiance, sharing"
        }
    },
    {
        "dosya_adi": "ders4-karanlik-aydinlik-donusum",
        "klasor": "oluk-org/gorseller/ders-4",
        "aspect_ratio": "16:9",
        "prompt": """
Horizontal infographic showing 3-phase transformation from darkness to light.
Smooth gradient progression left to right.

3 PHASES:
1. KARANLIK (Darkness) - LEFT THIRD
   Deep teal/dark atmosphere, abstract figure in shadow
   Stars or small light points barely visible
   
2. ŞAFAK (Dawn) - CENTER THIRD
   Twilight atmosphere, figure emerging from shadow
   Horizon line with first light appearing
   Mix of teal and warm gold tones
   
3. AYDINLIK (Radiance) - RIGHT THIRD
   Bright warm golden atmosphere
   Figure fully illuminated, radiating light
   Light particles spreading outward

Flowing transition between phases, not harsh divisions.
Gold (#C9A962) and cream (#F5F0E6) light effects.
Deep teal (#0D4F4F) shadow areas.
Clean, cinematic quality.
        """,
        "seo_tr": {
            "alt": "Karanlıktan aydınlığa dönüşüm 3 faz gradient infografik OLUK",
            "keywords": "karanlık, aydınlık, dönüşüm, uyanış, bilinç genişlemesi"
        },
        "seo_en": {
            "alt": "Darkness to light transformation 3 phases gradient infographic OLUK",
            "keywords": "darkness, light, transformation, awakening, consciousness expansion"
        }
    },
    {
        "dosya_adi": "ders5-yol-5seans-akis",
        "klasor": "oluk-org/gorseller/ders-5",
        "aspect_ratio": "16:9",
        "prompt": """
Horizontal infographic showing winding path with 5 milestone markers.
Path continues beyond the right edge suggesting infinite journey.

WINDING PATH with 5 MILESTONES:
1. HARITA (Map) - path beginning, compass rose icon
2. AZIK (Provisions) - first curve, bag/supplies icon
3. YOLDAŞ (Companion) - middle section, two figures icon
4. MOLA (Rest Stop) - peaceful bend, rest icon
5. DEVAM (Continue) - path going forward, arrow icon, "..." suggesting continuation

Path made of golden light (#C9A962) on teal (#0D4F4F) landscape.
Mountains/hills in varying teal shades framing the path.
Golden glow at horizon where path leads.
Each milestone: numbered gold marker, icon, Turkish label.
Soft cream (#F5F0E6) sky gradient.
        """,
        "seo_tr": {
            "alt": "OLUK Yol dersi 5 seans patika infografik harita azık yoldaş vakfe devam",
            "keywords": "yol dersi, yolculuk, hayat yolu, manevi yürüyüş, sürekli gelişim"
        },
        "seo_en": {
            "alt": "OLUK Path lesson 5 sessions trail infographic map provisions companion rest continue",
            "keywords": "path lesson, journey, life path, spiritual walk, continuous growth"
        }
    },
    {
        "dosya_adi": "oluk-5ders-yolculuk-haritasi",
        "klasor": "oluk-org/gorseller/genel",
        "aspect_ratio": "16:9",
        "prompt": """
Complete OLUK journey map showing all 5 lessons as destinations on a stylized path.
Treasure map aesthetic but modern and minimal, Ottoman-inspired ornamentation.

5 MAJOR DESTINATIONS connected by golden path:
1. KAPI (The Door) 🚪 - represented by door icon, START point
2. AYNA (The Mirror) 🪞 - represented by mirror icon
3. KÖPRÜ (The Bridge) 🌉 - represented by bridge icon
4. IŞIK (The Light) ✨ - represented by light/sun icon
5. YOL (The Path) 🛤️ - represented by path icon, leads to "..." beyond

Golden path (#C9A962) winds through teal landscape (#0D4F4F).
Each destination as a glowing waypoint with icon and Turkish name.
Subtle Ottoman compass rose in corner.
"OLUK" brand mark subtly integrated.
Cream (#F5F0E6) parchment-like background with modern clean aesthetic.
Mountains, gentle terrain features framing the journey.
        """,
        "seo_tr": {
            "alt": "OLUK 5 ders yolculuk haritası kapı ayna köprü ışık yol tam program",
            "keywords": "OLUK programı, 5 ders, tam yolculuk, ruhsal gelişim haritası"
        },
        "seo_en": {
            "alt": "OLUK 5 lessons journey map door mirror bridge light path complete program",
            "keywords": "OLUK program, 5 lessons, complete journey, spiritual growth map"
        }
    }
]

# =============================================
# GÖRSEL ÜRETİM FONKSİYONU
# =============================================

def gorsel_uret(gorsel_data):
    """Tek görsel üret ve Cloudinary'ye yükle"""
    
    dosya_adi = gorsel_data["dosya_adi"]
    klasor = gorsel_data["klasor"]
    aspect_ratio = gorsel_data["aspect_ratio"]
    prompt = gorsel_data["prompt"]
    
    print(f"\n{'='*60}")
    print(f"📸 Üretiliyor: {dosya_adi}")
    print(f"📁 Klasör: {klasor}")
    print(f"📐 Oran: {aspect_ratio}")
    print(f"{'='*60}")
    
    try:
        # Gemini model
        model = genai.ImageGenerationModel("imagen-3.0-generate-002")
        
        # Tam prompt (Marka DNA + Görsel Prompt)
        tam_prompt = f"{MARKA_DNA}\n\n{prompt}"
        
        print("⏳ Görsel üretiliyor...")
        
        # Görsel üret
        result = model.generate_images(
            prompt=tam_prompt,
            number_of_images=1,
            aspect_ratio=aspect_ratio,
            safety_filter_level="block_few"
        )
        
        # Lokal kaydet
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        local_path = f"{dosya_adi}_{timestamp}.png"
        result.images[0].save(local_path)
        print(f"💾 Lokal kaydedildi: {local_path}")
        
        # Cloudinary'ye yükle
        print("☁️ Cloudinary'ye yükleniyor...")
        upload_result = cloudinary.uploader.upload(
            local_path,
            folder=klasor,
            public_id=dosya_adi,
            overwrite=True,
            resource_type="image"
        )
        
        cloudinary_url = upload_result["secure_url"]
        print(f"✅ Yüklendi: {cloudinary_url}")
        
        # SEO metadata kaydet
        seo_data = {
            "dosya_adi": dosya_adi,
            "cloudinary_url": cloudinary_url,
            "public_id": upload_result["public_id"],
            "seo_tr": gorsel_data["seo_tr"],
            "seo_en": gorsel_data["seo_en"],
            "uretim_tarihi": timestamp
        }
        
        return {"success": True, "data": seo_data}
        
    except Exception as e:
        print(f"❌ HATA: {str(e)}")
        return {"success": False, "error": str(e), "dosya_adi": dosya_adi}


def tum_gorselleri_uret():
    """Tüm görselleri sırayla üret"""
    
    print("""
    ╔═══════════════════════════════════════════════════════════╗
    ║                                                           ║
    ║     🌊 OLUK GÖRSEL ÜRETİM SİSTEMİ 🌊                     ║
    ║     "Akışın Kanalı, Dönüşümün Yolu"                       ║
    ║                                                           ║
    ║     📸 Toplam: 14 görsel                                  ║
    ║     ⏱️  Tahmini süre: ~2 saat                             ║
    ║                                                           ║
    ╚═══════════════════════════════════════════════════════════╝
    """)
    
    sonuclar = []
    basarili = 0
    hatali = 0
    toplam = len(GORSELLER)
    
    for i, gorsel in enumerate(GORSELLER, 1):
        print(f"\n{'#'*60}")
        print(f"# GÖRSEL {i}/{toplam}")
        print(f"{'#'*60}")
        
        sonuc = gorsel_uret(gorsel)
        sonuclar.append(sonuc)
        
        if sonuc["success"]:
            basarili += 1
        else:
            hatali += 1
        
        # Rate limiting - API aşırı yüklenmesini önle
        if i < toplam:
            print("\n⏳ 30 saniye bekleniyor (rate limit)...")
            time.sleep(30)
    
    # Sonuç özeti
    print(f"""
    ╔═══════════════════════════════════════════════════════════╗
    ║                    ÜRETİM TAMAMLANDI                      ║
    ╠═══════════════════════════════════════════════════════════╣
    ║  ✅ Başarılı: {basarili:3d}                                      ║
    ║  ❌ Hatalı:   {hatali:3d}                                      ║
    ║  📊 Toplam:   {toplam:3d}                                      ║
    ╚═══════════════════════════════════════════════════════════╝
    """)
    
    # SEO metadata'yı JSON olarak kaydet
    seo_metadata_path = f"oluk_gorsel_seo_metadata_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    basarili_sonuclar = [s["data"] for s in sonuclar if s["success"]]
    
    with open(seo_metadata_path, "w", encoding="utf-8") as f:
        json.dump(basarili_sonuclar, f, ensure_ascii=False, indent=2)
    
    print(f"📋 SEO Metadata kaydedildi: {seo_metadata_path}")
    
    return sonuclar


# =============================================
# ANA PROGRAM
# =============================================

if __name__ == "__main__":
    print("\n🚀 OLUK Görsel Üretim Başlıyor...\n")
    
    # Tüm görselleri üret
    sonuclar = tum_gorselleri_uret()
    
    print("\n✨ İşlem tamamlandı!")
