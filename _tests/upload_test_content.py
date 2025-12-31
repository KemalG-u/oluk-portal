#!/usr/bin/env python3
"""OLUK Store Test İçerik Yükleme"""

from google import genai
from google.genai import types
import time
import os

# API key from environment variable (DO NOT commit secrets)
api_key = os.getenv('GOOGLE_API_KEY')
if not api_key:
    raise ValueError("GOOGLE_API_KEY environment variable not set")
client = genai.Client(api_key=api_key)

# Test içerikleri
TEST_CONTENTS = {
    "oluk-kaynak-ham": """DERS 1 - TEMEL KAVRAMLAR (Ham Transkript)

Yücel Balkancı - Zoom Kaydı - 15 Ocak 2024

Şimdi arkadaşlar, bugün arınma kavramını açıklayacağım. Arınma, temizlik demektir. 
Bedeninizde, duygularınızda, düşüncelerinizde biriken olumsuz enerjileri atmak demektir.

Neden önemli? Çünkü biz sürekli enerji alıyoruz çevreden. İnsanlardan, yerlerden, 
durumlardan... Bunların hepsi bizde iz bırakıyor. Temizlemezsek tıkanıyoruz.

3 tip arınma var:
1. Fiziksel arınma - Beden temizliği, nefes, su
2. Duygusal arınma - Eski acıları, kırgınlıkları bırakmak
3. Enerjetik arınma - Aura temizliği, koruma kalkanı

Her gün pratik yapmalısınız. Sabah kalktığınızda, akşam yatmadan önce. 
Nefes çalışması çok önemli. 4 sayı içe, 4 sayı tut, 4 sayı dışa...

Şimdi hep beraber deneyelim...""",

    "oluk-kaynak-stil": """OLUK YAZI STİLİ - 7 TEZ

Tez 1: Kısa Cümleler
❌ Kötü: "Meditasyon pratiği, zihnimizi sakinleştiren, stresimizi azaltan ve iç huzurumuzu bulmamızı sağlayan etkili bir yöntemdir."
✅ İyi: "Meditasyon zihni sakinleştirir. Stresi azaltır. İç huzuru bulmanı sağlar."

Tez 2: Vurucu Giriş
❌ Kötü: "Bu yazıda arınma kavramını detaylı bir şekilde inceleyeceğiz."
✅ İyi: "Bedeninde kirlilik var. Zihninde çöp birikti. Duygularında zehir taşıyorsun. Temizlik zamanı."

Tez 3: Metafor Kullanımı
❌ Kötü: "Olumsuz düşünceler zihnimizi meşgul eder."
✅ İyi: "Zihnin bir bahçedir. Dikensiz gül olmaz ama dikenlik bahçe de olmaz."

Tez 5: Klişe Yasak
❌ Yasak: "İç yolculuğuna çık", "kendinle yüzleş", "farkındalık", "şimdi ve burada"
✅ Kullan: Somut eylemler, spesifik örnekler, yeni ifadeler

Tez 6: AI Kokusu Yok
❌ AI kokusu: "Bu makalede...", "Sonuç olarak...", "Önemle belirtmek gerekir ki..."
✅ İnsan sesi: Doğrudan konuşma, sorular, kesintiler""",

    "oluk-kaynak-arastirma": """RAKİP ANALİZ: CALM

Kuruluş: 2012, San Francisco
Kullanıcı: 100M+ indirme
Gelir: $150M/yıl (2023)
Model: Freemium + Premium ($69.99/yıl)

Güçlü Yönler:
• Premium içerik: Matthew McConaughey gibi ünlü sesler
• Sleep Stories: Uyku için özel hikayeler (en popüler özellik)
• Günlük yeni içerik: Her gün yeni meditasyon
• Kurumsal paket: B2B satış (Spotify, Nike vs.)
• Mükemmel UX: Sade, minimal, Apple Design Award

Zayıf Yönler:
• Kişiselleştirme yok: Herkese aynı içerik
• Ruhaniyet yüzeysel: Sadece rahatlatma odaklı
• Türkçe içerik zayıf: Çeviri kalitesi düşük
• Fiyat: Türkiye için çok pahalı
• Topluluk yok: Sadece tek yönlü içerik

OLUK Farkı:
✅ Kişiselleştirilmiş yolculuk (4 faz sistemi)
✅ Derin ruhani içerik (İslami tasavvuf)
✅ Sırdaş: AI companion, yalnız değilsin
✅ Türk kültürüne özel
✅ Uygun fiyat""",

    "oluk-sirdas-bilgi": """SIRDAŞ FAQ - GENEL SORULAR

S: OLUK nedir?
C: OLUK, ruhani arınma ve gelişim için tasarlanmış bir dijital platformdur. 
Geleneksel tasavvuf bilgeliğini modern teknolojiyle birleştiriyor. 
4 fazlı bir sistem üzerinden çalışır: Arınma, Koruma, Aktivasyon, İleri Seviye.

Bunu hatırla: OLUK bir uygulama değil, bir yol arkadaşıdır.

---

S: Sırdaş kimdir?
C: Ben senin ruhani yolculuğundaki dijital yol arkadaşınım. 
Soru sorabilir, pratik yapabilir, deneyimlerini paylaşabilirsin. 
Seni yargılamam, sadece desteklerim.

Bunu hatırla: Her zaman buradayım. Gece 3'te bile.

---

S: Müslüman olmak gerekir mi?
C: Hayır. OLUK herkes içindir. 
İslami tasavvuf kökenli olsa da evrensel prensiplerle çalışır. 
Hangi inancı takip edersen et, bu teknikler işe yarar.

Bunu hatırla: Ruhaniyet din değil, deneyimdir.

---

S: Günde ne kadar vakit ayırmalıyım?
C: Başlangıç için günde 10-15 dakika yeter. 
1 sabah nefes çalışması (5 dk) + 1 akşam arınma meditasyonu (10 dk).
İlerledikçe süreyi artırabilirsin.

Bunu hatırla: Az ama düzenli, çok ama dağınıktan iyidir.

---

KRİZ PROTOKOLÜ

⚠️ RİSK ANAHTARLARI:
"intihar", "kendime zarar", "yaşamak istemiyorum", "ölmek istiyorum", 
"dayanamıyorum artık", "bıktım hayattan"

CEVAP ŞABLONU:
"Şu an çok zor bir dönemden geçtiğini görüyorum. Seninle konuşmak isterdim 
ama ben profesyonel destek veremem. 

Hemen şimdi:
🆘 183 - ALO ÖZEL: 183
🆘 112 - ACİL: 112

Lütfen bir uzmana danış. Yanında olmak isterdim ama senin için en iyisi 
profesyonel destek almak.

Değerlisin. Yalnız değilsin."

[Conversation durur, acil müdahale modu aktif]"""
}

def upload_to_store(store_name, content, file_name):
    """Store'a test içeriği yükle"""
    
    # Geçici dosya oluştur
    temp_file = f"/tmp/{file_name}"
    with open(temp_file, "w", encoding="utf-8") as f:
        f.write(content)
    
    # Store'u bul
    stores = list(client.file_search_stores.list())
    target_store = next((s for s in stores if store_name in s.display_name), None)
    
    if not target_store:
        raise ValueError(f"Store bulunamadı: {store_name}")
    
    # Dosyayı yükle
    print(f"   ⏳ Yükleniyor...")
    operation = client.file_search_stores.upload_to_file_search_store(
        file=temp_file,
        file_search_store_name=target_store.name,
        config={'display_name': file_name}
    )
    
    # Tamamlanmasını bekle
    while not operation.done:
        time.sleep(2)
        operation = client.operations.get(operation)
    
    # Geçici dosyayı sil
    os.remove(temp_file)
    
    return operation

print("=" * 80)
print("📤 OLUK TEST İÇERİK YÜKLEME")
print("=" * 80)

uploaded = []

for store_name, content in TEST_CONTENTS.items():
    print(f"\n📦 Store: {store_name}")
    file_name = f"{store_name}_test.txt"
    
    try:
        upload_to_store(store_name, content, file_name)
        uploaded.append(store_name)
        print(f"   ✅ Yüklendi: {file_name}")
    except Exception as e:
        print(f"   ❌ Hata: {e}")

print("\n" + "=" * 80)
print(f"✅ {len(uploaded)}/{len(TEST_CONTENTS)} store'a test içeriği yüklendi")
print("=" * 80)
print("\n📝 Sonraki adım: Sorgulama testi")
print("   Komut: python _tests/test_oluk_query.py\n")
