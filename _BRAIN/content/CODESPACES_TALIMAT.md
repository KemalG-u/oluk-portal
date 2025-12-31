# CODESPACES TALİMATI: SEO SKILL PAKETİ KURULUMU

## ÖZET
**10 yeni SEO skill dosyası** eklenecek. Bunlar OLUK'un KRİTİK SEO eksikliğini kapatacak.

Kaynak: wshobson/agents SEO plugin sistemi (OLUK'a adapte edildi)

---

## ADIM 1: SEO Klasörü Oluştur

```bash
cd /workspaces/oluk-portal/_SKILLS
mkdir SEO
```

---

## ADIM 2: Dosyaları Yükle

Kemal sana 10 dosya yükleyecek:

**İçerik & Kalite (3):**
1. SEO-01-ICERIK-DENETCISI.md (E-E-A-T analizi)
2. SEO-09-OTORITE-INSAATCISI.md (Authority building)
3. SEO-10-ICERIK-YAZARI.md (SEO-optimized yazım)

**Teknik Optimizasyon (4):**
4. SEO-02-META-OPTIMIZER.md (Title, description, OG)
5. SEO-03-KEYWORD-STRATEJISTI.md (Keyword araştırma)
6. SEO-04-YAPI-MIMARI.md (Schema.org, header hierarchy)
7. SEO-05-SNIPPET-AVCISI.md (Featured snippet)

**Analiz & Monitoring (3):**
8. SEO-06-ICERIK-PLANLAYICI.md (Topic cluster, takvim)
9. SEO-07-ICERIK-TAZELEYICI.md (Content freshness)
10. SEO-08-KANIBALIZASYON-DEDEKTORU.md (Keyword çakışma)

Her dosyayı `_SKILLS/SEO/` klasörüne kaydet.

---

## ADIM 3: _INDEX.md Güncelle

`_SKILLS/_INDEX.md` dosyasına şu bölümü ekle:

```markdown
## SEO DEPARTMANI (10)

### İçerik & Kalite Grubu
| No | Skill | Dosya | Görev | Model |
|----|-------|-------|-------|-------|
| SEO-01 | SEO İçerik Denetçisi | SEO/SEO-01-ICERIK-DENETCISI.md | E-E-A-T analizi, içerik kalitesi | Sonnet |
| SEO-09 | Otorite İnşaatçısı | SEO/SEO-09-OTORITE-INSAATCISI.md | E-E-A-T sinyal güçlendirme | Sonnet |
| SEO-10 | SEO İçerik Yazarı | SEO/SEO-10-ICERIK-YAZARI.md | SEO-optimized içerik üretimi | Sonnet |

### Teknik Optimizasyon Grubu
| No | Skill | Dosya | Görev | Model |
|----|-------|-------|-------|-------|
| SEO-02 | Meta Optimizer | SEO/SEO-02-META-OPTIMIZER.md | Title, description, OG tags | Haiku |
| SEO-03 | Keyword Stratejisti | SEO/SEO-03-KEYWORD-STRATEJISTI.md | Keyword araştırma, density | Haiku |
| SEO-04 | Yapı Mimarı | SEO/SEO-04-YAPI-MIMARI.md | Schema.org, header hierarchy | Haiku |
| SEO-05 | Snippet Avcısı | SEO/SEO-05-SNIPPET-AVCISI.md | Featured snippet, PAA | Haiku |

### Analiz & Monitoring Grubu
| No | Skill | Dosya | Görev | Model |
|----|-------|-------|-------|-------|
| SEO-06 | İçerik Planlayıcı | SEO/SEO-06-ICERIK-PLANLAYICI.md | Topic cluster, takvim | Haiku |
| SEO-07 | İçerik Tazeleyici | SEO/SEO-07-ICERIK-TAZELEYICI.md | Content freshness analizi | Haiku |
| SEO-08 | Kanibalizasyon Dedektörü | SEO/SEO-08-KANIBALIZASYON-DEDEKTORU.md | Keyword çakışma tespiti | Haiku |
```

Ayrıca toplam skill sayısını güncelle:
```
Toplam Skill: 140 (130 mevcut + 10 SEO)
```

---

## ADIM 4: Git Commit

```bash
git add .
git commit -m "✅ SEO SKILL PAKETİ: 10 yeni skill eklendi (SEO-01 to SEO-10)

- İçerik & Kalite: SEO-01 (Denetçi), SEO-09 (Otorite), SEO-10 (Yazar)
- Teknik: SEO-02 (Meta), SEO-03 (Keyword), SEO-04 (Yapı), SEO-05 (Snippet)
- Analiz: SEO-06 (Planlayıcı), SEO-07 (Tazeleyici), SEO-08 (Kanibalizasyon)

Kaynak: wshobson/agents SEO plugin sistemi (OLUK adaptasyonu)
Toplam skill sayısı: 140"
git push
```

---

## ADIM 5: Doğrulama

```bash
ls -la _SKILLS/SEO/
```

Çıktı şöyle olmalı:
```
SEO-01-ICERIK-DENETCISI.md
SEO-02-META-OPTIMIZER.md
SEO-03-KEYWORD-STRATEJISTI.md
SEO-04-YAPI-MIMARI.md
SEO-05-SNIPPET-AVCISI.md
SEO-06-ICERIK-PLANLAYICI.md
SEO-07-ICERIK-TAZELEYICI.md
SEO-08-KANIBALIZASYON-DEDEKTORU.md
SEO-09-OTORITE-INSAATCISI.md
SEO-10-ICERIK-YAZARI.md
```

Toplam: **10 dosya**

---

## SEO SKILL İLİŞKİ HARİTASI

```
                         ┌─────────────────┐
                         │    SEO-06       │
                         │    İçerik       │
                         │    Planlayıcı   │
                         └────────┬────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         │                        │                        │
         ▼                        ▼                        ▼
  ┌──────────────┐        ┌──────────────┐        ┌──────────────┐
  │   SEO-03     │        │   SEO-10     │        │   SEO-07     │
  │   Keyword    │        │   İçerik     │        │   İçerik     │
  │   Stratejist │        │   Yazarı     │        │   Tazeleyici │
  └──────┬───────┘        └──────┬───────┘        └──────────────┘
         │                       │
         │        ┌──────────────┤
         │        │              │
         ▼        ▼              ▼
  ┌──────────────┐        ┌──────────────┐
  │   SEO-08     │        │   SEO-01     │
  │   Kanibali-  │        │   İçerik     │
  │   zasyon     │        │   Denetçisi  │
  └──────────────┘        └──────┬───────┘
                                 │
                    ┌────────────┼────────────┐
                    │            │            │
                    ▼            ▼            ▼
             ┌──────────┐ ┌──────────┐ ┌──────────┐
             │ SEO-09   │ │ SEO-04   │ │ SEO-05   │
             │ Otorite  │ │ Yapı     │ │ Snippet  │
             │ İnşaatçı │ │ Mimarı   │ │ Avcısı   │
             └──────────┘ └────┬─────┘ └──────────┘
                               │
                               ▼
                        ┌──────────────┐
                        │   SEO-02     │
                        │   Meta       │
                        │   Optimizer  │
                        └──────────────┘
```

## 3 ALT GRUP YAPISI (wshobson modeli)

### Grup 1: SEO-CONTENT-CREATION
```
SEO-01 (Denetçi) + SEO-09 (Otorite) + SEO-10 (Yazar)
Amaç: Kaliteli, E-E-A-T uyumlu içerik üretimi
```

### Grup 2: SEO-TECHNICAL-OPTIMIZATION  
```
SEO-02 (Meta) + SEO-03 (Keyword) + SEO-04 (Yapı) + SEO-05 (Snippet)
Amaç: Teknik SEO optimizasyonu
```

### Grup 3: SEO-ANALYSIS-MONITORING
```
SEO-06 (Planlayıcı) + SEO-07 (Tazeleyici) + SEO-08 (Kanibalizasyon)
Amaç: İçerik analizi ve izleme
```

---

## MEVCUT SKILL'LERLE ENTEGRASYON

SEO skill'leri şu mevcut skill'lerle çalışacak:

| SEO Skill | İlişki | Mevcut Skill |
|-----------|--------|--------------|
| SEO-01 | ← içerik alır | 15-Stil Dönüştürücü |
| SEO-02 | ↔ koordine | 41-Metadata Uzmanı |
| SEO-03 | ← araştırma alır | 01-Derin Araştırmacı |
| SEO-04 | → schema verir | Codespaces (teknik) |
| SEO-05 | ← içerik alır | 37-Blog Yazarı |
| SEO-06 | → brief verir | 27-Günlük İçerik Planlayıcısı |
| SEO-07 | → güncelleme listesi | 27-Günlük İçerik Planlayıcısı |
| SEO-08 | ↔ keyword paylaşır | SEO-03 Keyword Stratejisti |
| SEO-09 | ← değerler alır | 00-Kültür Muhafızı |
| SEO-10 | ↔ stil entegre | 15-Stil Dönüştürücü |

---

Tamam de, dosyaları atayım!
