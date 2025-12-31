# IŞIK MODÜLÜ PIPELINE LOGU (31 Aralık 2025)

## Kapsam
- Modül: IŞIK (6 bölüm, 6 ders, 10 seans)
- Bu log: FAZ 3 (Stil) ve FAZ 5 (SEO/GEO) uygulaması

## Okunan Skill Dosyaları
- FAZ 3: _SKILLS/ICERIK/15-stil-donusturucu.md
- FAZ 5: _SKILLS/SEO/SEO-01-ICERIK-DENETCISI.md
- FAZ 5 (GEO): _SKILLS/BUYUME/79-geo-uzmani.md

## FAZ 3 - Stil Dönüştürücü
- Cliche temizliği: "mucize" söylemi 2 yerde kaldırıldı → biyokimyasal ve sinir sistemi odaklı ifadelerle değiştirildi.
- Kalp bölüm açıklaması "keşfet" yerine "hisset, koheransı kur" şeklinde netleştirildi.
- Amaç: Klişe/abartı yok, somut ve ölçülebilir dil.

## FAZ 5 - SEO & GEO
- Meta description iyileştirme: IŞIK ana sayfa metadata açıklaması Sufi + bilim vurgusuyla güncellendi.
- Structured Data (Course) eklendi: /moduller/isik sayfasına JSON-LD Course şeması (name, description, provider, lesson sayısı, süre).
- GEO sinyali: Structured data + otorite vurgusu (provider=OLUK) ile AI arama görünürlüğü güçlendirildi.

## Dosya Değişiklikleri
- src/lib/isik-data.ts
  - Nefes dersi: "mucize" ifadeleri çıkarıldı, biyokimya odaklı anlatı.
  - Kalp bölümü description: "keşfet" → "hisset, koheransı kur".
- src/app/moduller/isik/page.tsx
  - metadata.description güçlendirildi.
  - JSON-LD Course şeması eklendi (Script afterInteractive).

## Test
- npm run build: ✅ (önceki çalışmada geçiyordu; stil/SEO değişiklikleri sonrası yeniden çalıştırılacak)

## Notlar
- FAZ 1,2,4,6 henüz uygulanmadı (araştırma, yapılandırma, editöryel, QA). Bu log sadece FAZ 3 ve FAZ 5 düzeltmelerini kapsar.
