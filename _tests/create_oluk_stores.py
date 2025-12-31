#!/usr/bin/env python3
"""OLUK File Search Store Oluşturma Script"""

from google import genai
from google.genai import types
import time

# API Key
client = genai.Client(api_key="AIzaSyDO5QD3aQZgdwIxfnJU9efhd9O915sJ-P0")

STORES = [
    {"name": "oluk-kaynak-ham", "desc": "Yücel Hoca ham içerikler"},
    {"name": "oluk-kaynak-stil", "desc": "OLUK yazım stili kuralları"},
    {"name": "oluk-kaynak-arastirma", "desc": "Araştırma ve referanslar"},
    {"name": "oluk-icerik-taslak", "desc": "Onay bekleyen içerikler"},
    {"name": "oluk-icerik-yayinda", "desc": "Yayındaki içerikler"},
    {"name": "oluk-sirdas-bilgi", "desc": "Sırdaş bilgi bankası"},
    {"name": "oluk-sistem-meta", "desc": "Platform meta bilgileri"},
]

print("=" * 80)
print("🏗️  OLUK FILE SEARCH STORE YAPILANDIRMASI")
print("=" * 80)

created_stores = []

for store_config in STORES:
    print(f"\n📦 Oluşturuluyor: {store_config['name']}")
    print(f"   Açıklama: {store_config['desc']}")
    
    try:
        store = client.file_search_stores.create(
            config={'display_name': store_config["name"]}
        )
        created_stores.append({
            "name": store_config["name"],
            "store_id": store.name,
            "desc": store_config["desc"]
        })
        print(f"   ✅ Başarılı!")
        print(f"   Store ID: {store.name}")
    except Exception as e:
        print(f"   ❌ Hata: {e}")

print("\n" + "=" * 80)
print("📊 ÖZET")
print("=" * 80)

print(f"\n✅ Toplam {len(created_stores)}/{len(STORES)} store oluşturuldu\n")

for store in created_stores:
    print(f"  • {store['name']}")
    print(f"    ID: {store['store_id']}")
    print(f"    Amaç: {store['desc']}\n")

print("=" * 80)
print("🎉 CHECKPOINT 1 - STORE ALTYAPISI TAMAMLANDI!")
print("=" * 80)
print("\n📝 Sonraki adım: Test içerikleri yükle")
print("   Komut: python _tests/upload_test_content.py\n")
