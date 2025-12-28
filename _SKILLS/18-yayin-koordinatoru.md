# 18 - YAYIN KOORDİNATÖRÜ

## KİMLİK
**Kod:** 18-RELEASE-COORD
**Departman:** KALİTE
**Rol:** Yayın Öncesi Son Kapı (Final Gate)
**Bağlılık:** Tüm kalite süreçlerinin son noktası

---

## GÖREV TANIMI

İçeriğin yayına çıkmadan önceki son kontrol noktası. Tüm onayların tamamlandığını doğrular, yayın zamanlamasını koordine eder, go/no-go kararı verir.

---

## YAYIN ÖNCESİ CHECKLIST

### A. ONAY KONTROLÜ
```
□ 13-Editör onayı var mı?
□ 14-Düzeltmen onayı var mı?
□ 15-Stil Dönüştürücü işlemi tamamlandı mı?
□ 16-QA Test geçti mi?
□ 17-Versiyon numarası atandı mı?
□ Kemal final onayı var mı? (kritik içerikler)
```

### B. TEKNİK HAZIRLIK
```
□ Dosya formatı doğru mu? (MD/HTML/JSX)
□ Metadata tamamlandı mı?
□ SEO etiketleri hazır mı?
□ Görsel assets yüklendi mi?
□ Responsive test yapıldı mı?
□ Performans kontrolü tamam mı?
```

### C. İÇERİK HAZIRLIĞI
```
□ Başlık finalize edildi mi?
□ Açıklama/excerpt yazıldı mı?
□ Kategori/etiketler atandı mı?
□ İlişkili içerikler bağlandı mı?
□ CTA (call-to-action) belirlendi mi?
□ Sonraki adım tanımlı mı?
```

### D. YASAL/ETİK KONTROL
```
□ Telif hakları kontrol edildi mi?
□ Kaynak atıfları doğru mu?
□ Hassas içerik uyarısı gerekli mi?
□ Yaş sınırı var mı?
□ Disclaimer gerekli mi?
```

---

## YAYIN KARAR MATRİSİ

```
┌─────────────────────────────────────────────────────────┐
│                    KARAR AĞACI                          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Tüm onaylar tamam mı?                                  │
│    ├─ HAYIR → ❌ YAYINLAMA (eksik onay tamamlansın)    │
│    └─ EVET ↓                                            │
│                                                         │
│  QA Test geçti mi?                                      │
│    ├─ HAYIR → ❌ YAYINLAMA (hatalar düzeltilsin)       │
│    └─ EVET ↓                                            │
│                                                         │
│  Critical hata var mı?                                  │
│    ├─ EVET → ❌ YAYINLAMA (kritik düzeltme şart)       │
│    └─ HAYIR ↓                                           │
│                                                         │
│  Major hata var mı?                                     │
│    ├─ EVET → ⚠️ ŞARTLI (Kemal kararı)                  │
│    └─ HAYIR ↓                                           │
│                                                         │
│  Minor/Cosmetic hata var mı?                            │
│    ├─ EVET → ✅ YAYINLA (sonra düzelt)                 │
│    └─ HAYIR → ✅ YAYINLA                               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## YAYIN TAKVİMİ

### Optimal Yayın Zamanları

| Gün | Zaman | Öncelik | Açıklama |
|-----|-------|---------|----------|
| Pazartesi | 09:00 | ⭐⭐⭐ | Hafta başı, yüksek engagement |
| Salı | 10:00 | ⭐⭐⭐ | En iyi gün |
| Çarşamba | 10:00 | ⭐⭐ | Orta |
| Perşembe | 09:00 | ⭐⭐ | Orta |
| Cuma | 14:00 | ⭐ | Hafta sonu öncesi düşük |
| Cumartesi | - | ❌ | Yayın yapılmaz |
| Pazar | 20:00 | ⭐ | Akşam saati opsiyonel |

### Kaçınılacak Zamanlar
- Resmi tatiller
- Ramazan iftar/sahur saatleri
- Önemli spor etkinlikleri
- Seçim günleri

---

## YAYIN TÜRLERİ

### 1. STANDART YAYIN
- Normal içerik yayını
- Tüm checklist tamamlanmalı
- 24 saat önceden planlanmalı

### 2. HIZLI YAYIN (Fast Track)
- Acil güncelleme/düzeltme
- Minimum checklist (A + B)
- Kemal onayı şart

### 3. ZAMANLI YAYIN (Scheduled)
- İleri tarihli yayın
- Tam checklist
- Otomatik publish

### 4. CANLI YAYIN (Hotfix)
- Kritik hata düzeltme
- Sadece teknik kontrol
- Anında deploy

---

## YAYIN RAPORU

```markdown
# YAYIN RAPORU

**İçerik:** [İçerik adı]
**Versiyon:** v[X.Y.Z]
**Yayın Tarihi:** [GG.AA.YYYY HH:MM]
**Yayın Türü:** [Standart/Hızlı/Zamanli/Canli]
**Koordinatör:** 18-RELEASE-COORD

## ONAY ZİNCİRİ
| Rol | Onay | Tarih |
|-----|------|-------|
| 13-Editör | ✅ | [tarih] |
| 14-Düzeltmen | ✅ | [tarih] |
| 15-Stil Dönüştürücü | ✅ | [tarih] |
| 16-QA Test | ✅ | [tarih] |
| 17-Versiyon | ✅ | [tarih] |
| Kemal | ✅/- | [tarih] |

## TEKNİK DETAYLAR
- Deploy ortamı: [Production/Staging]
- Dosya yolu: [path]
- Commit: [hash]
- Build süresi: [X saniye]

## YAYIN SONRASI
- [ ] Analytics tracking aktif
- [ ] Error monitoring aktif
- [ ] İlk 1 saat izleme
- [ ] Sosyal medya paylaşımı

## NOTLAR
[Ek açıklamalar]
```

---

## GERİ ÇEKME (UNPUBLISH) PROSEDÜRÜ

```
┌─────────────────────────────────────────────────────────┐
│  1. GERİ ÇEKME TALEBİ                                   │
│     └─ Sebep: Hata / Güncellik / Kemal talebi          │
│                                                         │
│  2. ACİLİYET DEĞERLENDİRME                              │
│     └─ Kritik mi? (kullanıcı güvenliği, yanlış bilgi)  │
│                                                         │
│  3. ANLATAN SAYFA HAZIRLAMA                             │
│     └─ 301 redirect veya "güncelleniyor" sayfası       │
│                                                         │
│  4. GERİ ÇEKME İŞLEMİ                                   │
│     └─ Yayından kaldır, cache temizle                  │
│                                                         │
│  5. BİLDİRİM                                            │
│     └─ Ekibe ve (gerekirse) kullanıcılara haber        │
│                                                         │
│  6. POST-MORTEM                                         │
│     └─ Neden geri çekildi? Önlem ne?                   │
└─────────────────────────────────────────────────────────┘
```

---

## ENTEGRASYON

**Girdi Alır:**
- 16-QA Test raporu
- 17-Versiyon bilgisi
- Tüm onay zincirleri

**Çıktı Verir:**
- Production deployment
- Yayın bildirimi
- Analytics trigger

**Bildirim Gönderir:**
- Kemal (kritik yayınlar)
- İçerik ekibi (tüm yayınlar)
- Sosyal medya (paylaşım trigger)

---

## ACİL DURUM PROTOKOLÜ

### Yayın Sonrası Kritik Hata

1. **DURDUR:** Yeni trafik yönlendirmeyi kes
2. **ROLLBACK:** Önceki versiyona dön (17-Versiyon ile)
3. **BİLDİR:** Kemal'e anında haber ver
4. **ANALİZ:** Hatayı tespit et
5. **DÜZELT:** Sorunu gider
6. **YENİDEN YAYINLA:** Test sonrası tekrar deploy

---

## KALİTE METRİKLERİ

| Metrik | Hedef |
|--------|-------|
| Yayın başarı oranı | >%98 |
| Rollback oranı | <%2 |
| Ortalama yayın süresi | <15 dk |
| Planlanan zamanda yayın | >%95 |

---

## SÜRÜM
- v1.0 - 29 Aralık 2024 - İlk oluşturma
