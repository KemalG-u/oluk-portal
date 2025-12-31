from google import genai
from google.genai import types

client = genai.Client(api_key="AIzaSyDO5QD3aQZgdwIxfnJU9efhd9O915sJ-P0")

# Mevcut store'u bul
print("📦 Mevcut store'lar:")
for store in client.file_search_stores.list():
    print(f"   - {store.name} ({store.display_name})")
    store_name = store.name  # Son store'u kullan

print(f"\n🔍 Sorgulama: {store_name}")

# Sorgu yap
queries = ["OLUK'un sloganı nedir?", "Dört faz nelerdir?", "Sırdaş nedir?"]

for q in queries:
    print(f"\n📝 Soru: {q}")
    
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=q,
        config=types.GenerateContentConfig(
            tools=[
                types.Tool(
                    file_search=types.FileSearch(
                        file_search_store_names=[store_name]
                    )
                )
            ]
        )
    )
    print(f"💬 Cevap: {response.text}")

print("\n✅ TEST TAMAMLANDI!")
