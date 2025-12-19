#!/usr/bin/env python3
"""
OLUK DERS 1 - API Tabanlı Hızlı Görsel Üretimi
Google AI Studio (Gemini) veya alternatif API kullanarak
"""

import os
import json
import time
import cloudinary
import cloudinary.uploader
from datetime import datetime
import requests
import base64
from pathlib import Path

# ═══════════════════════════════════════════════════════════════
# YAPILANDIRMA
# ═══════════════════════════════════════════════════════════════

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
Color palette: Deep Teal #0D4F4F, Warm Gold #C9A962, Soft Cream #F5F0E6.
No text, no Arabic script, no religious symbols, no faces.
8K resolution, cinematic lighting.
"""

# ═══════════════════════════════════════════════════════════════
# GÖRSELLER
# ═══════════════════════════════════════════════════════════════

GORSELLER = [
    {
        "id": "seans-muhur-kapani",
        "placeholder_url": "https://via.placeholder.com/1024x1024/0D4F4F/C9A962?text=Seal+Symbol",
        "folder": "oluk/ders1/seans",
        "seo_tr": "Seans Mühür Kapanışı - Altın geometrik sembol",
        "description": "Golden Ottoman geometric seal on teal background"
    },
    {
        "id": "ders1-15chakra-tam-sistem",
        "placeholder_url": "https://via.placeholder.com/1920x1080/0D4F4F/C9A962?text=15+Chakras",
        "folder": "oluk/ders1/infographics",
        "seo_tr": "15 Çakralı Tam Sistem - Enerji haritası",
        "description": "15 chakra energy system, 7 body + 8 cosmic, vertical alignment"
    },
    {
        "id": "ders1-19aktivasyon-akis",
        "placeholder_url": "https://via.placeholder.com/1920x1080/0D4F4F/C9A962?text=19+Activations",
        "folder": "oluk/ders1/infographics",
        "seo_tr": "19 Aktivasyon Akış Şeması - Dallanma ağacı",
        "description": "19 activation flow tree, 3 branches from golden seed"
    },
    {
        "id": "ders1-felsefe-bakgec",
        "placeholder_url": "https://via.placeholder.com/1024x1024/F5F0E6/C9A962?text=Flow+Philosophy",
        "folder": "oluk/ders1/infographics",
        "seo_tr": "Bak Geç Felsefesi - Akış prensibi",
        "description": "Golden river flowing through teal obstacles, effortless movement"
    }
]

# ═══════════════════════════════════════════════════════════════
# PLACEHOLDER YÜKLEYİCİ (GERÇEKLEŞTİRME)
# ═══════════════════════════════════════════════════════════════

def upload_placeholder_to_cloudinary(gorsel):
    """Placeholder görseli indir ve Cloudinary'ye yükle"""
    print(f"  📥 Placeholder indiriliyor...")
    
    # URL'den indir
    response = requests.get(gorsel["placeholder_url"], timeout=10)
    if response.status_code != 200:
        raise Exception(f"Placeholder indirilemedi: {response.status_code}")
    
    # Geçici kaydet
    temp_path = f"/tmp/{gorsel['id']}.png"
    with open(temp_path, "wb") as f:
        f.write(response.content)
    
    print(f"  ☁️ Cloudinary'ye yükleniyor...")
    
    # Cloudinary'ye yükle
    result = cloudinary.uploader.upload(
        temp_path,
        public_id=gorsel["id"],
        folder=gorsel["folder"],
        overwrite=True,
        resource_type="image"
    )
    
    # Temizle
    os.remove(temp_path)
    
    return result["secure_url"]

# ═══════════════════════════════════════════════════════════════
# MANUEL ÜRETME TALİMATLARI
# ═══════════════════════════════════════════════════════════════

def generate_manual_instructions():
    """Manuel görsel üretme talimatları oluştur"""
    print("\n" + "=" * 70)
    print("📋 MANUEL GÖRSEL ÜRETME TALİMATLARI")
    print("=" * 70)
    print("\nKendi AI aracını kullanarak aşağıdaki görselleri üret:\n")
    print("Araçlar: Midjourney, DALL-E 3, Stable Diffusion, Leonardo.AI\n")
    
    instructions_file = "MANUEL_GORSEL_TALIMAT.md"
    with open(instructions_file, "w", encoding="utf-8") as f:
        f.write("# Manuel Görsel Üretme Talimatları\n\n")
        f.write(f"**Tarih:** {datetime.now().strftime('%d.%m.%Y %H:%M')}\n\n")
        f.write("## Marka Stili\n\n")
        f.write(f"```\n{BRAND_STYLE}\n```\n\n")
        f.write("---\n\n")
        
        for i, gorsel in enumerate(GORSELLER, 1):
            f.write(f"## {i}. {gorsel['id']}\n\n")
            f.write(f"**Açıklama (TR):** {gorsel['seo_tr']}\n\n")
            f.write(f"**Prompt:**\n```\n{gorsel['description']}\n\n{BRAND_STYLE}\n```\n\n")
            f.write(f"**Çıktı Dosya Adı:** `{gorsel['id']}.png`\n\n")
            f.write(f"**Hedef Klasör:** `{gorsel['folder']}`\n\n")
            f.write("---\n\n")
            
            print(f"{i}. {gorsel['id']}")
            print(f"   Prompt: {gorsel['description']}")
            print(f"   Dosya: {gorsel['id']}.png")
            print()
    
    print(f"\n💾 Talimatlar dosyası oluşturuldu: {instructions_file}")
    print("\n✅ Görselleri ürettikten sonra buraya yükle ve upload komutunu çalıştır.")
    print("=" * 70)

# ═══════════════════════════════════════════════════════════════
# LOKAL DOSYA YÜKLEYİCİ
# ═══════════════════════════════════════════════════════════════

def upload_local_images():
    """Lokal klasördeki görselleri Cloudinary'ye yükle"""
    print("\n" + "=" * 70)
    print("📤 LOKAL GÖRSEL YÜKLEME")
    print("=" * 70)
    
    uploaded = []
    not_found = []
    
    for gorsel in GORSELLER:
        filename = f"{gorsel['id']}.png"
        
        if not os.path.exists(filename):
            print(f"⚠️ {filename} bulunamadı, atlanıyor...")
            not_found.append(gorsel['id'])
            continue
        
        print(f"\n📤 {filename} yükleniyor...")
        
        try:
            result = cloudinary.uploader.upload(
                filename,
                public_id=gorsel["id"],
                folder=gorsel["folder"],
                overwrite=True,
                resource_type="image"
            )
            
            url = result["secure_url"]
            print(f"✅ Başarılı: {url}")
            
            uploaded.append({
                "id": gorsel["id"],
                "url": url,
                "seo_tr": gorsel["seo_tr"]
            })
            
        except Exception as e:
            print(f"❌ Hata: {e}")
            not_found.append(gorsel["id"])
    
    # Özet
    print("\n" + "=" * 70)
    print(f"✅ Yüklenen: {len(uploaded)}/{len(GORSELLER)}")
    print(f"❌ Bulunamayan: {len(not_found)}/{len(GORSELLER)}")
    
    if uploaded:
        print("\n📷 YÜKLENEN GÖRSELLER:")
        for item in uploaded:
            print(f"  ✅ {item['id']}")
            print(f"     {item['url']}")
    
    if not_found:
        print("\n⚠️ BULUNAMAYAN:")
        for item in not_found:
            print(f"  ❌ {item}.png")
    
    print("=" * 70)
    
    # JSON kaydet
    if uploaded:
        output_file = f"uploaded_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(uploaded, f, ensure_ascii=False, indent=2)
        print(f"\n💾 Sonuçlar: {output_file}")

# ═══════════════════════════════════════════════════════════════
# PLACEHOLDER YÜKLEYİCİ (GEÇİCİ)
# ═══════════════════════════════════════════════════════════════

def upload_placeholders():
    """Geçici placeholder'ları yükle (test için)"""
    print("\n" + "=" * 70)
    print("🎨 PLACEHOLDER YÜKLEME (GEÇİCİ)")
    print("=" * 70)
    print("⚠️ Bu sadece test içindir. Gerçek görseller manuel üretilmelidir.\n")
    
    uploaded = []
    
    for i, gorsel in enumerate(GORSELLER, 1):
        print(f"[{i}/{len(GORSELLER)}] {gorsel['id']}")
        
        try:
            url = upload_placeholder_to_cloudinary(gorsel)
            print(f"  ✅ Yüklendi: {url}\n")
            
            uploaded.append({
                "id": gorsel["id"],
                "url": url,
                "seo_tr": gorsel["seo_tr"],
                "is_placeholder": True
            })
            
            time.sleep(2)  # Rate limit
            
        except Exception as e:
            print(f"  ❌ Hata: {e}\n")
    
    print("=" * 70)
    print(f"✅ Toplam: {len(uploaded)}/{len(GORSELLER)} placeholder yüklendi")
    print("=" * 70)
    
    # JSON kaydet
    output_file = f"placeholders_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(uploaded, f, ensure_ascii=False, indent=2)
    print(f"\n💾 Sonuçlar: {output_file}")

# ═══════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════

def main():
    import sys
    
    if len(sys.argv) < 2:
        print("\n" + "=" * 70)
        print("🎨 OLUK DERS 1 - GÖRSEL YÖNETİM ARACI")
        print("=" * 70)
        print("\nKullanım:")
        print("  python3 oluk_ders1_HIZLI_API.py instructions   # Manuel üretme talimatları")
        print("  python3 oluk_ders1_HIZLI_API.py upload         # Lokal görselleri yükle")
        print("  python3 oluk_ders1_HIZLI_API.py placeholder    # Test placeholder'ları yükle")
        print("\n" + "=" * 70)
        return
    
    command = sys.argv[1].lower()
    
    if command == "instructions":
        generate_manual_instructions()
    elif command == "upload":
        upload_local_images()
    elif command == "placeholder":
        upload_placeholders()
    else:
        print(f"❌ Bilinmeyen komut: {command}")
        print("Kullanım: instructions | upload | placeholder")

if __name__ == "__main__":
    main()
