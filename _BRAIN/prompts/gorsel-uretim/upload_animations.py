#!/usr/bin/env python3
"""
OLUK DERS 1 - SEANS ANİMASYON YÜKLEYİCİ
5 loop animasyon videosu Cloudinary'e yüklenir
"""

import cloudinary
import cloudinary.uploader
import os
from pathlib import Path

# Cloudinary yapılandırma
cloudinary.config(
    cloud_name="dzegofdgp",
    api_key="283632349543287",
    api_secret="dm_7xFvraZI-IwcvAxnWGTeNrWM"
)

# Video dosyaları (4 adet mevcut, 5. video eksik)
VIDEOLAR = [
    {
        "dosya": "seans-nefes-4-4-4-4.mp4",
        "aciklama": "4-4-4-4 Kare Nefes Animasyonu (16 saniye loop)"
    },
    {
        "dosya": "seans-kalp-tohum.mp4", 
        "aciklama": "Kalp Tohumu Animasyonu (8 saniye loop)"
    },
    {
        "dosya": "seans-enerji-akis-yukari.mp4",
        "aciklama": "Enerji Yükselme Animasyonu (10 saniye loop)"
    },
    {
        "dosya": "seans-arinma-mor-alev.mp4",
        "aciklama": "Mor Alev Arınma Animasyonu (12 saniye loop)"
    }
    # EKSIK: seans-altin-isik-doldurma.mp4 (kullanıcıdan alınacak)
]

CLOUDINARY_KLASOR = "oluk/ders1/seans/animations"

def video_yukle(video_path, public_id):
    """Video dosyasını Cloudinary'e yükle"""
    print(f"  📤 Yükleniyor: {video_path}")
    
    result = cloudinary.uploader.upload(
        video_path,
        resource_type="video",
        public_id=public_id,
        folder=CLOUDINARY_KLASOR,
        overwrite=True,
        eager=[
            {"format": "mp4", "video_codec": "h264"},
            {"format": "webm", "video_codec": "vp9"}
        ],
        eager_async=False,
        invalidate=True
    )
    
    return result["secure_url"]

def main():
    print("=" * 60)
    print("OLUK DERS 1 - SEANS ANİMASYON YÜKLEYİCİ")
    print("=" * 60)
    print(f"Klasör: {CLOUDINARY_KLASOR}")
    print(f"Toplam: {len(VIDEOLAR)} video")
    print("=" * 60)
    
    # Mevcut dizini kontrol et
    current_dir = Path.cwd()
    print(f"📁 Çalışma dizini: {current_dir}\n")
    
    sonuclar = []
    
    for i, video in enumerate(VIDEOLAR, 1):
        dosya_adi = video["dosya"]
        dosya_yolu = current_dir / dosya_adi
        
        print(f"[{i}/{len(VIDEOLAR)}] {dosya_adi}")
        print(f"  {video['aciklama']}")
        
        # Dosya var mı kontrol et
        if not dosya_yolu.exists():
            print(f"  ❌ Dosya bulunamadı: {dosya_yolu}")
            sonuclar.append({
                "dosya": dosya_adi,
                "durum": "bulunamadi"
            })
            continue
        
        # Dosya boyutunu göster
        boyut_mb = dosya_yolu.stat().st_size / (1024 * 1024)
        print(f"  📊 Boyut: {boyut_mb:.2f} MB")
        
        try:
            # Cloudinary'e yükle
            public_id = dosya_adi.replace(".mp4", "")
            url = video_yukle(str(dosya_yolu), public_id)
            
            print(f"  ✅ Tamamlandı!")
            print(f"  🔗 URL: {url}\n")
            
            sonuclar.append({
                "dosya": dosya_adi,
                "url": url,
                "durum": "basarili"
            })
            
        except Exception as e:
            print(f"  ❌ HATA: {e}\n")
            sonuclar.append({
                "dosya": dosya_adi,
                "hata": str(e),
                "durum": "basarisiz"
            })
    
    # Özet
    print("=" * 60)
    print("SONUÇ")
    print("=" * 60)
    
    basarili = [s for s in sonuclar if s["durum"] == "basarili"]
    basarisiz = [s for s in sonuclar if s["durum"] == "basarisiz"]
    bulunamadi = [s for s in sonuclar if s["durum"] == "bulunamadi"]
    
    print(f"✅ Başarılı: {len(basarili)}/{len(VIDEOLAR)}")
    print(f"❌ Başarısız: {len(basarisiz)}/{len(VIDEOLAR)}")
    print(f"⚠️ Bulunamadı: {len(bulunamadi)}/{len(VIDEOLAR)}")
    
    if basarili:
        print("\n📹 YÜKLENDİ:")
        for s in basarili:
            print(f"  • {s['dosya']}")
            print(f"    {s['url']}")
    
    if bulunamadi:
        print("\n⚠️ BULUNAMADI:")
        for s in bulunamadi:
            print(f"  • {s['dosya']}")
    
    if basarisiz:
        print("\n❌ BAŞARISIZ:")
        for s in basarisiz:
            print(f"  • {s['dosya']}: {s['hata']}")
    
    print("\n" + "=" * 60)

if __name__ == "__main__":
    main()
