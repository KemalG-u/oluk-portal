"""
OLUK DERS GÖRSELLERİ - YENİ ŞABLONLAR
=====================================
Bu dosyayı oluk_gorsel_fabrikasi.py'deki PROMPT_TEMPLATES'e ekle:
PROMPT_TEMPLATES.update(DERS_GORSEL_SABLONLARI)

Sonra çalıştır:
- quick_ders_hero()  -> 5 ders hero görseli
- quick_ders_infografik() -> infografikler
- quick_ders_all() -> tüm ders görselleri
"""

# =============================================
# DERS HERO GÖRSELLERİ (Her ders için 1 adet)
# =============================================

DERS_HERO_SABLONLARI = {
    "ders_hero": {
        "template": """
Create a hero banner for OLUK.ORG spiritual education platform.

Lesson: {ders_adi} ({ders_adi_en})
Subtitle: {alt_baslik} ({alt_baslik_en})
Visual Metaphor: {metafor}
Mood: {atmosfer}

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
- No religious symbols (cross, crescent, star of david, etc.)

Technical: 16:9 aspect ratio, cinematic quality, 4K resolution feel
Lighting: Soft diffused light with golden accents, ethereal glow

AVOID: Dark/scary imagery, realistic faces, religious iconography, 
Western wellness clichés, stock photo aesthetics, busy/cluttered design
        """,
        "variants": [
            {
                "name": "kapi_hero",
                "ders_adi": "Kapı",
                "ders_adi_en": "The Door",
                "alt_baslik": "Temel Arınma",
                "alt_baslik_en": "Foundational Purification",
                "metafor": "An ancient golden door, slightly ajar, with soft teal light streaming through the gap. Ottoman geometric patterns subtly etched into the door frame. Ethereal mist at the threshold. The door represents the first step into inner transformation.",
                "atmosfer": "Inviting yet mysterious, sacred threshold, new beginnings"
            },
            {
                "name": "ayna_hero", 
                "ders_adi": "Ayna",
                "ders_adi_en": "The Mirror",
                "alt_baslik": "Kendini Tanıma",
                "alt_baslik_en": "Self-Recognition",
                "metafor": "An ornate antique mirror with golden Ottoman-style frame. The reflection shows not a face but an abstract inner light - particles of gold dissolving into teal. A silhouette stands before it, merging with their own reflection.",
                "atmosfer": "Introspective, honest, transformative self-discovery"
            },
            {
                "name": "kopru_hero",
                "ders_adi": "Köprü", 
                "ders_adi_en": "The Bridge",
                "alt_baslik": "Bağlantılar",
                "alt_baslik_en": "Connections",
                "metafor": "An elegant arched bridge suspended over a misty void. One side shrouded in darker teal (the known past), the other glowing with warm golden light (the unknown future). A lone silhouette stands at the exact center, balanced. Golden particles float in the air.",
                "atmosfer": "Transitional, balanced, courageous stillness between worlds"
            },
            {
                "name": "isik_hero",
                "ders_adi": "Işık",
                "ders_adi_en": "The Light", 
                "alt_baslik": "Aydınlanma",
                "alt_baslik_en": "Illumination",
                "metafor": "A single radiant golden flame or light source in the center, emanating outward in concentric waves. The surrounding teal darkness gradually transforms into warm light. Geometric Ottoman patterns emerge within the light rays. Particles ascending.",
                "atmosfer": "Awakening, radiant, inner revelation"
            },
            {
                "name": "yol_hero",
                "ders_adi": "Yol",
                "ders_adi_en": "The Path",
                "alt_baslik": "Sürekli Yürüyüş",
                "alt_baslik_en": "Continuous Journey",
                "metafor": "An infinite luminous path stretching toward a glowing horizon. The path itself is made of soft golden light with subtle Ottoman geometric patterns embedded. Mountains or abstract shapes frame the sides. Golden footsteps glow on the path. Ethereal teal and gold gradient sky.",
                "atmosfer": "Endless possibility, patient determination, sacred pilgrimage"
            }
        ],
        # SEO META DATA (Her görsel için)
        "seo_data": {
            "kapi_hero": {
                "tr_alt": "OLUK Kapı dersi - altın kapı turkuaz ışık temel arınma meditasyon",
                "en_alt": "OLUK Door lesson - golden door teal light foundational purification meditation",
                "tr_keywords": "kapı dersi, arınma, meditasyon, ruhsal gelişim, nefes çalışması",
                "en_keywords": "door lesson, purification, meditation, spiritual growth, breathwork"
            },
            "ayna_hero": {
                "tr_alt": "OLUK Ayna dersi - altın çerçeveli ayna kendini tanıma iç yolculuk",
                "en_alt": "OLUK Mirror lesson - golden framed mirror self-recognition inner journey",
                "tr_keywords": "ayna dersi, kendini tanıma, gölge çalışması, öz kabul, bilinç",
                "en_keywords": "mirror lesson, self-recognition, shadow work, self-acceptance, consciousness"
            },
            "kopru_hero": {
                "tr_alt": "OLUK Köprü dersi - ışıklı köprü geçiş dönüşüm denge meditasyonu",
                "en_alt": "OLUK Bridge lesson - luminous bridge transition transformation balance meditation",
                "tr_keywords": "köprü dersi, geçiş, dönüşüm, denge, belirsizlik, cesaret",
                "en_keywords": "bridge lesson, transition, transformation, balance, uncertainty, courage"
            },
            "isik_hero": {
                "tr_alt": "OLUK Işık dersi - altın ışık huzmesi aydınlanma uyanış meditasyonu",
                "en_alt": "OLUK Light lesson - golden light beam illumination awakening meditation",
                "tr_keywords": "ışık dersi, aydınlanma, uyanış, nur, bilinç genişlemesi",
                "en_keywords": "light lesson, illumination, awakening, radiance, consciousness expansion"
            },
            "yol_hero": {
                "tr_alt": "OLUK Yol dersi - sonsuz ışıklı patika yolculuk sürekli gelişim",
                "en_alt": "OLUK Path lesson - infinite luminous trail journey continuous growth",
                "tr_keywords": "yol dersi, yolculuk, sürekli gelişim, hayat yolu, manevi yürüyüş",
                "en_keywords": "path lesson, journey, continuous growth, life path, spiritual walk"
            }
        }
    }
}

# =============================================
# DERS İNFOGRAFİKLERİ (Konuya göre 1-3 adet)
# =============================================

DERS_INFOGRAFIK_SABLONLARI = {
    "ders_infografik": {
        "template": """
Create an educational infographic for OLUK.ORG spiritual education platform.

Topic: {konu} ({konu_en})
Structure: {yapi}
Number of elements: {eleman_sayisi}
Visual flow: {akis}

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

Layout: {layout}
Technical: Sharp lines, professional data visualization, clear hierarchy

AVOID: Realistic imagery, complex gradients, stock icons, cluttered design
        """,
        "variants": [
            # KAPI DERSİ İNFOGRAFİKLERİ
            {
                "name": "kapi_5seans_akis",
                "konu": "Kapı Dersi 5 Seans Akışı",
                "konu_en": "Door Lesson 5 Sessions Flow",
                "yapi": "Vertical flow diagram with 5 numbered stations connected by flowing lines. Each station: number in gold circle, Turkish name, icon, brief description",
                "eleman_sayisi": "5 stations",
                "akis": "Top to bottom: 1.Menzil (compass icon) → 2.Nefes (wind icon) → 3.Tenin Sesi (body icon) → 4.Merkez (chakra icon) → 5.Mühür (seal icon)",
                "layout": "Vertical 9:16 portrait, flowing top-to-bottom"
            },
            {
                "name": "kapi_7chakra_diagram",
                "konu": "7 Enerji Merkezi Haritası",
                "konu_en": "7 Energy Centers Map",
                "yapi": "Human silhouette with 7 colored energy points along spine. Each point labeled in Turkish and English with its function",
                "eleman_sayisi": "7 chakras",
                "akis": "Bottom to top: Kök/Root (red) → Sakral/Sacral (orange) → Solar/Solar (yellow) → Kalp/Heart (green) → Boğaz/Throat (blue) → Alın/Third Eye (indigo) → Taç/Crown (violet/gold)",
                "layout": "Vertical 9:16 or square 1:1, centered body silhouette"
            },
            
            # AYNA DERSİ İNFOGRAFİKLERİ
            {
                "name": "ayna_5seans_akis",
                "konu": "Ayna Dersi 5 Seans Akışı",
                "konu_en": "Mirror Lesson 5 Sessions Flow",
                "yapi": "Spiral or circular flow showing progression through self-discovery. Each stage with icon and bilingual label",
                "eleman_sayisi": "5 stations",
                "akis": "Spiral inward: 1.Yansıma/Reflection → 2.Gölge/Shadow → 3.Kabul/Acceptance → 4.Bütünleşme/Integration → 5.Mühür/Seal",
                "layout": "Square 1:1, spiral composition converging to center"
            },
            {
                "name": "ayna_golge_calisma",
                "konu": "Gölge Çalışması Süreci",
                "konu_en": "Shadow Work Process",
                "yapi": "3-stage transformation diagram: 1.Gölgeyi Gör (shadow visible) → 2.Gölgeyle Tanış (shadow acknowledged) → 3.Gölgeyi Kabul Et (shadow integrated as light)",
                "eleman_sayisi": "3 stages",
                "akis": "Left to right transformation, dark to light gradient",
                "layout": "Horizontal 16:9, transformation sequence"
            },
            
            # KÖPRÜ DERSİ İNFOGRAFİKLERİ  
            {
                "name": "kopru_5seans_akis",
                "konu": "Köprü Dersi 5 Seans Akışı",
                "konu_en": "Bridge Lesson 5 Sessions Flow",
                "yapi": "Bridge diagram with 5 stations across span. Left bank (past/known), right bank (future/unknown), stations on bridge",
                "eleman_sayisi": "5 stations",
                "akis": "Left to right: 1.Kıyı/Shore → 2.Boşluk/Gap → 3.Adım/Step → 4.Denge/Balance → 5.Varış/Arrival",
                "layout": "Horizontal 16:9, bridge spanning gap"
            },
            
            # IŞIK DERSİ İNFOGRAFİKLERİ
            {
                "name": "isik_5seans_akis",
                "konu": "Işık Dersi 5 Seans Akışı",
                "konu_en": "Light Lesson 5 Sessions Flow",
                "yapi": "Radiating diagram from center. Dark center gradually brightening outward through 5 rings",
                "eleman_sayisi": "5 stations",
                "akis": "Center outward: 1.Karanlık/Night (darkest) → 2.Kıvılcım/Spark → 3.Alev/Flame → 4.Güneş/Sun → 5.Paylaşım/Radiance (brightest)",
                "layout": "Square 1:1, concentric rings from dark center to bright edge"
            },
            {
                "name": "isik_karanlik_donusum",
                "konu": "Karanlıktan Aydınlığa Dönüşüm",
                "konu_en": "Darkness to Light Transformation",
                "yapi": "Gradient transformation showing journey from shadow to illumination in 3 phases",
                "eleman_sayisi": "3 phases",
                "akis": "Left dark → middle twilight → right illuminated",
                "layout": "Horizontal 16:9, gradient transformation"
            },
            
            # YOL DERSİ İNFOGRAFİKLERİ
            {
                "name": "yol_5seans_akis",
                "konu": "Yol Dersi 5 Seans Akışı",
                "konu_en": "Path Lesson 5 Sessions Flow",
                "yapi": "Winding path diagram with 5 milestone markers. Path continues beyond frame suggesting infinite journey",
                "eleman_sayisi": "5 milestones",
                "akis": "Winding path: 1.Harita/Map → 2.Azık/Provisions → 3.Yoldaş/Companion → 4.Mola/Rest → 5.Devam/Continue (path continues...)",
                "layout": "Horizontal 16:9, winding path with perspective"
            },
            {
                "name": "yol_yolcu_haritasi",
                "konu": "Yolcunun Haritası",
                "konu_en": "Traveler's Map",
                "yapi": "Stylized map showing complete OLUK journey: 5 major destinations (Kapı → Ayna → Köprü → Işık → Yol) connected by golden path",
                "eleman_sayisi": "5 destinations + connections",
                "akis": "Sequential journey through all 5 lessons as stations on a map",
                "layout": "Horizontal 16:9, treasure map style but modern/minimal"
            }
        ],
        # SEO META DATA
        "seo_data": {
            "kapi_5seans_akis": {
                "tr_alt": "OLUK Kapı dersi 5 seans akışı infografik menzil nefes beden merkez mühür",
                "en_alt": "OLUK Door lesson 5 sessions flow infographic destination breath body center seal",
                "tr_keywords": "kapı dersi, 5 seans, nefes çalışması, beden farkındalığı, enerji merkezi",
                "en_keywords": "door lesson, 5 sessions, breathwork, body awareness, energy center"
            },
            "kapi_7chakra_diagram": {
                "tr_alt": "7 enerji merkezi chakra haritası insan bedeni ruhsal gelişim OLUK",
                "en_alt": "7 energy centers chakra map human body spiritual development OLUK",
                "tr_keywords": "7 çakra, enerji merkezi, chakra sistemi, kundalini, enerji haritası",
                "en_keywords": "7 chakras, energy centers, chakra system, kundalini, energy map"
            },
            "ayna_5seans_akis": {
                "tr_alt": "OLUK Ayna dersi 5 seans spiral infografik kendini tanıma gölge kabul",
                "en_alt": "OLUK Mirror lesson 5 sessions spiral infographic self-recognition shadow acceptance",
                "tr_keywords": "ayna dersi, kendini tanıma, gölge çalışması, kabul, bütünleşme",
                "en_keywords": "mirror lesson, self-recognition, shadow work, acceptance, integration"
            },
            "ayna_golge_calisma": {
                "tr_alt": "Gölge çalışması 3 aşama infografik karanlık aydınlık dönüşüm OLUK",
                "en_alt": "Shadow work 3 stages infographic darkness light transformation OLUK",
                "tr_keywords": "gölge çalışması, jung, bilinçaltı, kabul, dönüşüm",
                "en_keywords": "shadow work, jung, subconscious, acceptance, transformation"
            },
            "kopru_5seans_akis": {
                "tr_alt": "OLUK Köprü dersi 5 seans köprü infografik eşik berzah denge vuslat",
                "en_alt": "OLUK Bridge lesson 5 sessions bridge infographic threshold liminal balance arrival",
                "tr_keywords": "köprü dersi, geçiş, belirsizlik, denge, cesaret, değişim",
                "en_keywords": "bridge lesson, transition, uncertainty, balance, courage, change"
            },
            "isik_5seans_akis": {
                "tr_alt": "OLUK Işık dersi 5 seans radyal infografik gece kıvılcım şule güneş tebliğ",
                "en_alt": "OLUK Light lesson 5 sessions radial infographic night spark flame sun radiance",
                "tr_keywords": "ışık dersi, aydınlanma, uyanış, bilinç, nur, tebliğ",
                "en_keywords": "light lesson, illumination, awakening, consciousness, radiance, sharing"
            },
            "isik_karanlik_donusum": {
                "tr_alt": "Karanlıktan aydınlığa dönüşüm 3 faz gradient infografik OLUK",
                "en_alt": "Darkness to light transformation 3 phases gradient infographic OLUK",
                "tr_keywords": "karanlık, aydınlık, dönüşüm, uyanış, bilinç genişlemesi",
                "en_keywords": "darkness, light, transformation, awakening, consciousness expansion"
            },
            "yol_5seans_akis": {
                "tr_alt": "OLUK Yol dersi 5 seans patika infografik harita azık yoldaş vakfe devam",
                "en_alt": "OLUK Path lesson 5 sessions trail infographic map provisions companion rest continue",
                "tr_keywords": "yol dersi, yolculuk, hayat yolu, manevi yürüyüş, sürekli gelişim",
                "en_keywords": "path lesson, journey, life path, spiritual walk, continuous growth"
            },
            "yol_yolcu_haritasi": {
                "tr_alt": "OLUK 5 ders yolculuk haritası kapı ayna köprü ışık yol tam program",
                "en_alt": "OLUK 5 lessons journey map door mirror bridge light path complete program",
                "tr_keywords": "OLUK programı, 5 ders, tam yolculuk, ruhsal gelişim haritası",
                "en_keywords": "OLUK program, 5 lessons, complete journey, spiritual growth map"
            }
        }
    }
}


# =============================================
# HIZLI ÜRETİM FONKSİYONLARI
# =============================================

def quick_ders_hero():
    """5 ders hero görselini üret"""
    from oluk_gorsel_fabrikasi import batch_generate
    return batch_generate("ders_hero")

def quick_ders_infografik():
    """Tüm ders infografiklerini üret"""
    from oluk_gorsel_fabrikasi import batch_generate
    return batch_generate("ders_infografik")

def quick_ders_all():
    """Tüm ders görsellerini üret (hero + infografik)"""
    results = []
    results.extend(quick_ders_hero())
    results.extend(quick_ders_infografik())
    return results

def quick_tek_ders(ders_slug):
    """Tek bir ders için tüm görselleri üret
    
    Args:
        ders_slug: 'kapi', 'ayna', 'kopru', 'isik', 'yol'
    """
    from oluk_gorsel_fabrikasi import batch_generate
    
    # Hero
    hero_name = f"{ders_slug}_hero"
    batch_generate("ders_hero", [hero_name])
    
    # İnfografikler (ders_slug ile başlayanlar)
    infografik_listesi = [v["name"] for v in DERS_INFOGRAFIK_SABLONLARI["ders_infografik"]["variants"] 
                         if v["name"].startswith(ders_slug)]
    
    if infografik_listesi:
        batch_generate("ders_infografik", infografik_listesi)


# =============================================
# GÖRSEL SAYISI ÖZETİ
# =============================================

"""
TOPLAM GÖRSEL SAYISI: 14

HERO GÖRSELLERİ (5 adet - her ders için 1):
1. kapi_hero
2. ayna_hero  
3. kopru_hero
4. isik_hero
5. yol_hero

İNFOGRAFİKLER (9 adet - konuya göre dağılım):

KAPI DERSİ (2):
- kapi_5seans_akis
- kapi_7chakra_diagram

AYNA DERSİ (2):
- ayna_5seans_akis
- ayna_golge_calisma

KÖPRÜ DERSİ (1):
- kopru_5seans_akis

IŞIK DERSİ (2):
- isik_5seans_akis
- isik_karanlik_donusum

YOL DERSİ (2):
- yol_5seans_akis
- yol_yolcu_haritasi
"""


if __name__ == "__main__":
    print("""
    ╔═══════════════════════════════════════════════════════════╗
    ║     OLUK DERS GÖRSELLERİ ŞABLONLARI                      ║
    ╠═══════════════════════════════════════════════════════════╣
    ║                                                           ║
    ║  HERO GÖRSELLERİ: 5 adet                                 ║
    ║  - kapi_hero, ayna_hero, kopru_hero, isik_hero, yol_hero ║
    ║                                                           ║
    ║  İNFOGRAFİKLER: 9 adet                                   ║
    ║  - Her ders için 1-2 infografik                          ║
    ║                                                           ║
    ║  TOPLAM: 14 görsel                                       ║
    ║                                                           ║
    ╠═══════════════════════════════════════════════════════════╣
    ║  KULLANIM:                                                ║
    ║  quick_ders_hero()      -> 5 hero                        ║
    ║  quick_ders_infografik() -> 9 infografik                 ║
    ║  quick_ders_all()       -> 14 görsel (hepsi)             ║
    ║  quick_tek_ders('kapi') -> Kapı dersi görselleri         ║
    ╚═══════════════════════════════════════════════════════════╝
    """)
