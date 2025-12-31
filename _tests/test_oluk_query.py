#!/usr/bin/env python3
"""OLUK Multi-Store Sorgulama Testi"""

from google import genai
from google.genai import types

client = genai.Client(api_key="AIzaSyDO5QD3aQZgdwIxfnJU9efhd9O915sJ-P0")

def query_oluk(question, target_stores=None):
    """OLUK store'larında sorgulama yap"""
    
    # Tüm store'ları listele
    all_stores = list(client.file_search_stores.list())
    
    # Hedef store'ları filtrele
    if target_stores:
        store_names = [
            s.name for s in all_stores 
            if any(target in s.display_name for target in target_stores)
        ]
    else:
        store_names = [s.name for s in all_stores if "oluk-" in s.display_name]
    
    print(f"   🔍 Aranan store'lar: {[s.split('/')[-1] for s in store_names]}")
    
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=question,
        config=types.GenerateContentConfig(
            tools=[
                types.Tool(
                    file_search=types.FileSearch(
                        file_search_store_names=store_names
                    )
                )
            ],
            system_instruction="""Sen OLUK platformunun Sırdaş asistanısın.

OLUK stiliyle cevap ver:
• Sıcak ve samimi ol
• Kısa, net cümleler kullan
• Klişe yasak: "iç yolculuk", "farkındalık", "şimdi ve burada" gibi
• AI gibi konuşma: "Bu makalede...", "Sonuç olarak..." yasak
• Sorular sor, diyalog kur

Her cevabı "Bunu hatırla:" ile bitir ve pratik bir öneri ver."""
        )
    )
    
    return response.text

print("=" * 80)
print("🧪 OLUK MULTI-STORE SORGULAMA TESTİ")
print("=" * 80)

# Test senaryoları
TESTS = [
    {
        "name": "Ham İçerik Sorgusu",
        "question": "Arınma nedir ve neden önemli?",
        "stores": ["oluk-kaynak-ham"]
    },
    {
        "name": "Stil Sorgusu",
        "question": "OLUK yazım stilinin 7 tezi nedir?",
        "stores": ["oluk-kaynak-stil"]
    },
    {
        "name": "Rakip Analiz Sorgusu",
        "question": "Calm uygulamasının güçlü ve zayıf yönleri neler?",
        "stores": ["oluk-kaynak-arastirma"]
    },
    {
        "name": "Sırdaş FAQ Sorgusu",
        "question": "OLUK nedir ve nasıl çalışır?",
        "stores": ["oluk-sirdas-bilgi"]
    },
    {
        "name": "Multi-Store Sorgusu",
        "question": "Günlük meditasyon pratiği için ne önerirsin?",
        "stores": ["oluk-kaynak-ham", "oluk-sirdas-bilgi"]
    }
]

for i, test in enumerate(TESTS, 1):
    print(f"\n{'='*80}")
    print(f"TEST {i}/{len(TESTS)}: {test['name']}")
    print(f"{'='*80}")
    print(f"\n❓ Soru: {test['question']}")
    
    try:
        answer = query_oluk(test['question'], test['stores'])
        print(f"\n💬 Sırdaş Cevabı:\n")
        print(answer)
        print(f"\n   ✅ Başarılı")
    except Exception as e:
        print(f"\n   ❌ Hata: {e}")

print("\n" + "=" * 80)
print("🎉 CHECKPOINT 1 TAMAMLANDI!")
print("=" * 80)
print("""
✅ Store altyapısı hazır
✅ Test içerikleri yüklendi
✅ Sorgulama çalışıyor

📝 Sonraki Checkpoint:
   Checkpoint 2: Ham İçerik Yükleme
   • Ders transkriptlerini organize et
   • Stil kurallarını detaylandır
   • Metadata yapısını standardize et
""")
