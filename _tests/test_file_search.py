#!/usr/bin/env python3
"""Gemini File Search Test - OLUK"""

from google import genai
from google.genai import types
import time

# API Key
client = genai.Client(api_key="AIzaSyDO5QD3aQZgdwIxfnJU9efhd9O915sJ-P0")

print("=" * 50)
print("GEMINI FILE SEARCH TEST - OLUK")
print("=" * 50)

# Test dosyası oluştur
test_content = """OLUK - Siber Işık Portalı

OLUK, geleneksel İslami tasavvuf bilgeliğini modern teknolojiyle birleştiren bir Türk ruhani wellness platformudur.

Temel Özellikler:
- Sırdaş: Yapay zeka destekli ruhani rehberlik sistemi
- Siber İnziva: Dijital meditasyon ve arınma seansları
- Ders Sistemi: Yücel Balkancı'nın öğretilerinden derlenen 4 fazlı eğitim programı

Dört Faz:
1. ARINMA (Purification) - Bilinçaltı temizliği ve enerji arınması
2. KORUMA (Protection) - Enerjetik kalkan ve koruma teknikleri
3. AKTİVASYON (Activation) - Ruhani yeteneklerin aktifleştirilmesi
4. İLERİ SEVİYE (Advanced) - Üst düzey çalışmalar

Slogan: Akışın Kanalı, Dönüşümün Yolu
"""

with open("_tests/test_oluk.txt", "w") as f:
    f.write(test_content)

# 1. API Testi
print("\n0️⃣ API Bağlantı testi...")
try:
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents="Sadece 'OK' yaz."
    )
    print(f"   ✅ API Çalışıyor: {response.text.strip()}")
except Exception as e:
    print(f"   ❌ API Hatası: {e}")
    exit(1)

# 2. File Search Store oluştur
print("\n1️⃣ File Search Store oluşturuluyor...")
file_search_store = client.file_search_stores.create(
    config={'display_name': 'oluk-test-store'}
)
print(f"   ✅ Store: {file_search_store.name}")

# 3. Dosya yükle
print("\n2️⃣ Dosya yükleniyor...")
operation = client.file_search_stores.upload_to_file_search_store(
    file='_tests/test_oluk.txt',
    file_search_store_name=file_search_store.name,
    config={'display_name': 'oluk-bilgi'}
)

print("   ⏳ İndeksleniyor...")
while not operation.done:
    time.sleep(2)
    operation = client.operations.get(operation)
print("   ✅ Tamamlandı!")

# 4. Sorgula
print("\n3️⃣ Test sorguları:")
queries = ["OLUK'un sloganı nedir?", "Dört faz nelerdir?", "Sırdaş nedir?"]

for q in queries:
    print(f"\n   📝 {q}")
    try:
        resp = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=q,
            config=types.GenerateContentConfig(
                tools=[types.Tool(file_search=types.FileSearch(
                    file_search_store_names=[file_search_store.name]
                ))]
            )
        )
        print(f"   💬 {resp.text.strip()[:150]}")
    except Exception as e:
        print(f"   ⚠️ Sorgu hatası: {str(e)[:100]}")

print("\n" + "=" * 50)
print("✅ TEST BAŞARILI!")
