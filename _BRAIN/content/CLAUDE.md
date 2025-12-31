# OLUK.ORG - Proje Talimatları

## 🎯 PROJE HAKKINDA

OLUK.ORG, açıklanamaz spiritüel deneyimler yaşayan insanlar için Türkiye'nin ilk ve tek platformudur.

**Slogan:** "Akışın Kanalı, Dönüşümün Yolu"

**Hedef Kitle:** %95 kadın, 25-45 yaş, spiritüel ama dogmatik olmayan

## 🎨 MARKA KİMLİĞİ

### Renkler
- Deep Teal: #0D4F4F (ana)
- Warm Gold: #C9A962 (vurgu)
- Cream: #F5F0E6 (arka plan)

### Fontlar
- Başlık: Playfair Display
- Gövde: Inter

### Estetik
- "Ottoman Cyberpunk" - geleneksel + modern sentezi
- Dini sembol YOK (bilinçaltı iletişim)
- Siyah arka plan YOK (%95 kadın kitlesi)

## 📁 PROJE YAPISI

```
oluk-portal/
├── .claude/
│   ├── agents/           ← Özel Claude ajanları
│   └── commands/         ← Slash komutları
├── src/
│   ├── app/              ← Next.js sayfalar
│   ├── components/       ← React bileşenleri
│   └── lib/              ← Yardımcı fonksiyonlar
├── docs/
│   └── metin-yazari/     ← İçerik rehberleri
└── public/               ← Statik dosyalar
```

## 👥 EKİP YAPISI

| Rol | Kim | Sorumluluk |
|-----|-----|------------|
| Patron | Kemal | Kaynaklar, onay |
| CEO | Gemini Ultra | Strateji |
| Project Manager | Claude | İçerik, koordinasyon, kod |
| Metin Yazarı | oluk-metin-yazari agent | Tüm içerik üretimi |

## 📝 İÇERİK KURALLARI

### OLUK Dili
- ✅ "Sen" dili (2. tekil şahıs)
- ✅ Max 5 cümle paragraflar
- ✅ Kısa → Uzun → Kısa ritmi
- ✅ Parantez içi iç ses
- ❌ "Siz" (mesafeli)
- ❌ Vaaz/öğüt
- ❌ Akademik dil
- ❌ Spiritüel klişeler

### İçerik Üretimi İçin
Metin yazarken `oluk-metin-yazari` ajanını kullan:
```
Use the oluk-metin-yazari agent for this content.
```

Veya slash komutları:
- `/project:deneyim-yaz [bölüm-adı]`
- `/project:ders-yaz [konu]`
- `/project:sirdas-yanit [durum]`

## 🚨 KRİTİK KURALLAR

1. **Kalite:** Her şeyin en iyisi - "her şeyin en iyisi" prensibi
2. **Onay:** Kemal'den onay almadan büyük değişiklik yapma
3. **İçerik:** Tüm metinler oluk-metin-yazari ajanından geçmeli
4. **Tasarım:** Araştırma yap, amatör tasarım YOK
5. **Adım adım:** Codespaces'te tek dosya, tek adım, onay al

## 📊 MEVCUT DURUM

- **Versiyon:** v3.0
- **İlerleme:** %25
- **Kritik:** Mobile fix, n8n, SEO, social media strategy
- **Domain:** oluk.org (beklemede)
- **Canlı:** oluk-portal.vercel.app

## 📚 KAYNAKLAR

- Söz dizimi rehberi: `docs/metin-yazari/soz-dizimi-rehberi.md`
- Duygu mimarisi: `docs/metin-yazari/duygu-mimarisi.md`
- 12 deneyim: `docs/metin-yazari/12-deneyim-rehberi.md`
- İçerik örnekleri: `docs/metin-yazari/icerik-ornekleri.md`

---

*Son güncelleme: Aralık 2025*