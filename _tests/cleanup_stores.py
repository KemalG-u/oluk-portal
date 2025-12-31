from google import genai

client = genai.Client(api_key="AIzaSyDO5QD3aQZgdwIxfnJU9efhd9O915sJ-P0")

print("🗑️ Mevcut store'ları siliyorum...\n")

count = 0
for store in client.file_search_stores.list():
    print(f"   Siliniyor: {store.name} ({store.display_name})")
    try:
        client.file_search_stores.delete(name=store.name, config={'force': True})
        print(f"   ✅ Silindi")
        count += 1
    except Exception as e:
        print(f"   ❌ Hata: {e}")

print(f"\n🧹 Toplam {count} store silindi!")
print("✅ Temizlik tamamlandı!")
