#!/usr/bin/env python3
"""
OLUK DERS 1 - PIL ile Otomatik Görsel Üretimi
Placeholder yerine minimal branded görseller oluştur
"""

from PIL import Image, ImageDraw, ImageFont
import cloudinary
import cloudinary.uploader
from datetime import datetime
import os
import math

# ═══════════════════════════════════════════════════════════════
# YAPILANDIRMA
# ═══════════════════════════════════════════════════════════════

cloudinary.config(
    cloud_name="dzegofdgp",
    api_key="283632349543287",
    api_secret="dm_7xFvraZI-IwcvAxnWGTeNrWM"
)

# Marka Renkleri
TEAL = (13, 79, 79)      # #0D4F4F
GOLD = (201, 169, 98)    # #C9A962
CREAM = (245, 240, 230)  # #F5F0E6

# ═══════════════════════════════════════════════════════════════
# GÖRSELLER
# ═══════════════════════════════════════════════════════════════

GORSELLER = [
    {
        "id": "seans-muhur-kapani",
        "size": (1024, 1024),
        "folder": "oluk/ders1/seans",
        "seo_tr": "Seans Mühür Kapanışı",
        "design": "seal"  # Altın mühür sembolu
    },
    {
        "id": "ders1-15chakra-tam-sistem",
        "size": (1920, 1080),
        "folder": "oluk/ders1/infographics",
        "seo_tr": "15 Çakralı Tam Sistem",
        "design": "chakras"  # 15 çakra sistemi
    },
    {
        "id": "ders1-19aktivasyon-akis",
        "size": (1920, 1080),
        "folder": "oluk/ders1/infographics",
        "seo_tr": "19 Aktivasyon Akış",
        "design": "flow"  # Akış ağacı
    },
    {
        "id": "ders1-felsefe-bakgec",
        "size": (1024, 1024),
        "folder": "oluk/ders1/infographics",
        "seo_tr": "Bak Geç Felsefesi",
        "design": "river"  # Akan nehir
    }
]

# ═══════════════════════════════════════════════════════════════
# GÖRSEL ÜRETME FONKSİYONLARI
# ═══════════════════════════════════════════════════════════════

def create_seal_image(width, height):
    """Altın mühür sembolu"""
    img = Image.new('RGB', (width, height), TEAL)
    draw = ImageDraw.Draw(img)
    
    # Merkez
    cx, cy = width // 2, height // 2
    
    # Dış altın çember
    r_outer = min(width, height) // 3
    draw.ellipse([cx - r_outer, cy - r_outer, cx + r_outer, cy + r_outer], 
                 outline=GOLD, width=8)
    
    # İç altın çember
    r_inner = r_outer - 60
    draw.ellipse([cx - r_inner, cy - r_inner, cx + r_inner, cy + r_inner], 
                 outline=GOLD, width=6)
    
    # Merkez sembol - altı köşeli yıldız
    points = []
    for i in range(6):
        angle = math.radians(i * 60)
        x = cx + int(r_inner * 0.5 * math.cos(angle))
        y = cy + int(r_inner * 0.5 * math.sin(angle))
        points.append((x, y))
    
    for i in range(6):
        draw.line([points[i], points[(i + 2) % 6]], fill=GOLD, width=4)
    
    # Merkez nokta
    r_center = 20
    draw.ellipse([cx - r_center, cy - r_center, cx + r_center, cy + r_center], 
                 fill=GOLD)
    
    return img

def create_chakras_image(width, height):
    """15 Çakra sistemi"""
    img = Image.new('RGB', (width, height), TEAL)
    draw = ImageDraw.Draw(img)
    
    cx = width // 2
    spacing = height // 17  # 15 çakra + padding
    
    # 15 çakra noktası
    for i in range(15):
        y = spacing + (i * spacing)
        
        # Alt 7 çakra - gökkuşağı renkleri
        if i < 7:
            colors = [
                (255, 0, 0), (255, 127, 0), (255, 255, 0), 
                (0, 255, 0), (0, 0, 255), (75, 0, 130), (148, 0, 211)
            ]
            color = colors[i]
        else:
            # Üst 8 çakra - altın tonları
            color = GOLD
        
        r = 25 if i < 7 else 20
        draw.ellipse([cx - r, y - r, cx + r, y + r], 
                     fill=color, outline=CREAM, width=2)
    
    # Bağlantı çizgisi
    draw.line([(cx, spacing), (cx, height - spacing)], 
              fill=CREAM, width=3)
    
    return img

def create_flow_image(width, height):
    """19 Aktivasyon akış ağacı"""
    img = Image.new('RGB', (width, height), TEAL)
    draw = ImageDraw.Draw(img)
    
    # Merkez tohum
    cx = width // 2
    cy = height // 2
    cy_seed = height - 100
    draw.ellipse([cx - 30, cy_seed - 30, cx + 30, cy_seed + 30], fill=GOLD)
    
    # 3 dal
    branches = [
        {"x": width // 4, "nodes": 6, "color": CREAM},      # Sol - arınma
        {"x": cx, "nodes": 6, "color": GOLD},                # Orta - yükseltme
        {"x": 3 * width // 4, "nodes": 7, "color": (138, 43, 226)}  # Sağ - derin çalışma
    ]
    
    for branch in branches:
        bx = branch["x"]
        
        # Tohum merkezden dala
        draw.line([(cx, cy_seed), (bx, cy_seed - 50)], fill=branch["color"], width=3)
        
        # Dallar
        for i in range(branch["nodes"]):
            y = cy_seed - 100 - (i * 80)
            r = 15
            draw.ellipse([bx - r, y - r, bx + r, y + r], 
                         fill=branch["color"], outline=CREAM, width=2)
            
            if i > 0:
                y_prev = cy_seed - 100 - ((i - 1) * 80)
                draw.line([(bx, y_prev), (bx, y)], fill=branch["color"], width=2)
    
    return img

def create_river_image(width, height):
    """Bak geç felsefesi - akan nehir"""
    img = Image.new('RGB', (width, height), CREAM)
    draw = ImageDraw.Draw(img)
    
    # Altın nehir - dalga şeklinde
    cy = height // 2
    points = []
    
    for x in range(0, width, 10):
        # Sinüs dalgası
        wave = int(100 * math.sin(x * 0.01))
        y = cy + wave
        points.append((x, y))
    
    # Nehir kalınlığı
    for i in range(len(points) - 1):
        x1, y1 = points[i]
        x2, y2 = points[i + 1]
        draw.line([(x1, y1 - 30), (x2, y2 - 30)], fill=GOLD, width=60)
    
    # Engeller (teal daireler)
    obstacles = [
        (width // 4, cy - 50),
        (width // 2, cy + 50),
        (3 * width // 4, cy)
    ]
    
    for ox, oy in obstacles:
        r = 40
        draw.ellipse([ox - r, oy - r, ox + r, oy + r], 
                     fill=TEAL, outline=GOLD, width=3)
    
    return img

def generate_image(gorsel):
    """Görsel üret"""
    width, height = gorsel["size"]
    design = gorsel["design"]
    
    if design == "seal":
        img = create_seal_image(width, height)
    elif design == "chakras":
        img = create_chakras_image(width, height)
    elif design == "flow":
        img = create_flow_image(width, height)
    elif design == "river":
        img = create_river_image(width, height)
    else:
        # Varsayılan
        img = Image.new('RGB', (width, height), TEAL)
    
    return img

def upload_to_cloudinary(image, gorsel_id, folder):
    """Cloudinary'ye yükle"""
    temp_path = f"/tmp/{gorsel_id}.png"
    image.save(temp_path, "PNG")
    
    result = cloudinary.uploader.upload(
        temp_path,
        public_id=gorsel_id,
        folder=folder,
        overwrite=True,
        resource_type="image"
    )
    
    os.remove(temp_path)
    return result["secure_url"]

# ═══════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════

def main():
    print("=" * 70)
    print("🎨 OLUK DERS 1 - PIL GÖRSEL ÜRETİMİ")
    print("=" * 70)
    print(f"Başlangıç: {datetime.now().strftime('%H:%M:%S')}")
    print(f"Toplam: {len(GORSELLER)} görsel\n")
    
    results = []
    
    for i, gorsel in enumerate(GORSELLER, 1):
        print(f"[{i}/{len(GORSELLER)}] {gorsel['id']}")
        print(f"  Boyut: {gorsel['size'][0]}x{gorsel['size'][1]}")
        print(f"  Tasarım: {gorsel['design']}")
        
        try:
            # Üret
            print("  🎨 Oluşturuluyor...")
            image = generate_image(gorsel)
            
            # Yükle
            print("  ☁️ Yükleniyor...")
            url = upload_to_cloudinary(image, gorsel["id"], gorsel["folder"])
            
            print(f"  ✅ Tamamlandı!")
            print(f"  🔗 {url}\n")
            
            results.append({
                "id": gorsel["id"],
                "url": url,
                "seo_tr": gorsel["seo_tr"],
                "status": "success"
            })
            
        except Exception as e:
            print(f"  ❌ HATA: {e}\n")
            results.append({
                "id": gorsel["id"],
                "error": str(e),
                "status": "failed"
            })
    
    # Özet
    print("=" * 70)
    print("SONUÇ")
    print("=" * 70)
    
    success = [r for r in results if r["status"] == "success"]
    failed = [r for r in results if r["status"] == "failed"]
    
    print(f"✅ Başarılı: {len(success)}/{len(GORSELLER)}")
    print(f"❌ Başarısız: {len(failed)}/{len(GORSELLER)}")
    
    if success:
        print("\n📷 ÜRETİLEN GÖRSELLER:")
        for r in success:
            print(f"  ✅ {r['id']}")
            print(f"     {r['url']}")
    
    if failed:
        print("\n⚠️ BAŞARISIZ:")
        for r in failed:
            print(f"  ❌ {r['id']}: {r['error']}")
    
    print(f"\nBitiş: {datetime.now().strftime('%H:%M:%S')}")
    print("=" * 70)

if __name__ == "__main__":
    main()
