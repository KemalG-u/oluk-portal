# OLUK Skill Sistemi - Hub İlişki Haritası

## 🧠 Merkezi Hub: 00-BEYİN (KÜLTÜR MUHAFIZI)

OLUK'un 130 skill'inden oluşan mikro-worker sistemi, 00-Beyin merkezli bir hub-and-spoke yapısındadır.

```mermaid
graph TB
    %% Merkezi Hub
    BEYIN["🧠 00-BEYİN<br/>KÜLTÜR MUHAFIZI<br/>(Hub)"]
    
    %% Koordinatör Hub'lar
    PM["⚙️ 05-PROJE MÜDÜRÜ<br/>(Koordinatör Hub)"]
    GROWTH["📈 30-BÜYÜME YÖNETİCİSİ<br/>(Koordinatör Hub)"]
    INTEGRATOR["🔗 130-SİSTEM ENTEGRATÖRÜ<br/>(Koordinatör Hub)"]
    
    %% Departmanlar
    YONETIM["📋 YÖNETİM<br/>(6 skill)"]
    ICERIK["✍️ İÇERİK<br/>(46 skill)<br/>└─ PROGRAMLAR (14)"]
    TEKNIK["💻 TEKNİK<br/>(7 skill)"]
    AIOPS["🤖 AI-OPS<br/>(12 skill)"]
    PAZARLAMA["📢 PAZARLAMA<br/>(12 skill)"]
    BUYUME["🚀 BÜYÜME<br/>(10 skill)"]
    STRATEJI["🎯 STRATEJİ<br/>(9 skill)"]
    UXPSI["🎨 UX-PSİKOLOJİ<br/>(8 skill)"]
    DESTEK["🛟 DESTEK<br/>(7 skill)"]
    KALITE["✅ KALİTE<br/>(7 skill)"]
    PROD["🎬 PRODÜKSIYON<br/>(5 skill)"]
    FINANS["💰 FİNANS<br/>(3 skill)"]
    
    %% Merkezi Hub → Koordinatör Hub'lar
    BEYIN -.-> PM
    BEYIN -.-> GROWTH
    BEYIN -.-> INTEGRATOR
    
    %% Koordinatör Hub'lar → Departmanlar
    PM --> YONETIM
    PM --> KALITE
    
    GROWTH --> BUYUME
    GROWTH --> PAZARLAMA
    GROWTH --> STRATEJI
    
    INTEGRATOR --> TEKNIK
    INTEGRATOR --> AIOPS
    
    %% Beyin → Tüm Departmanlar (direkt bağlantı)
    BEYIN ==> YONETIM
    BEYIN ==> ICERIK
    BEYIN ==> TEKNIK
    BEYIN ==> AIOPS
    BEYIN ==> PAZARLAMA
    BEYIN ==> BUYUME
    BEYIN ==> STRATEJI
    BEYIN ==> UXPSI
    BEYIN ==> DESTEK
    BEYIN ==> KALITE
    BEYIN ==> PROD
    BEYIN ==> FINANS
    
    %% Departmanlar arası önemli bağlantılar
    ICERIK -.-> PROD
    ICERIK -.-> KALITE
    PAZARLAMA -.-> BUYUME
    TEKNIK -.-> AIOPS
    UXPSI -.-> ICERIK
    
    %% Stil
    classDef hubClass fill:#0D4F4F,stroke:#C9A962,stroke-width:4px,color:#F5F0E6
    classDef coordClass fill:#1A6363,stroke:#C9A962,stroke-width:3px,color:#F5F0E6
    classDef deptClass fill:#2A7373,stroke:#C9A962,stroke-width:2px,color:#F5F0E6
    
    class BEYIN hubClass
    class PM,GROWTH,INTEGRATOR coordClass
    class YONETIM,ICERIK,TEKNIK,AIOPS,PAZARLAMA,BUYUME,STRATEJI,UXPSI,DESTEK,KALITE,PROD,FINANS deptClass
```

## 🔑 Hub Yapısı Açıklaması

### 🧠 00-BEYİN (Merkezi Hub)
- **Rol:** Kültür Muhafızı, marka sesi koruyucusu
- **Bağlantı:** Tüm 130 skill'e direkt bağlı
- **Sorumluluk:** Final kalite onayı, kültürel değerler standardı

### ⚙️ 05-PROJE MÜDÜRÜ (Koordinatör Hub)
- **Rol:** Operasyonel koordinasyon
- **Alan:** YÖNETİM, KALİTE departmanları
- **Sorumluluk:** Sprint, deadline, kaynak yönetimi

### 📈 30-BÜYÜME YÖNETİCİSİ (Koordinatör Hub)
- **Rol:** Growth hub'ı
- **Alan:** BÜYÜME, PAZARLAMA, STRATEJİ departmanları
- **Sorumluluk:** Viral stratejiler, metrik takibi

### 🔗 130-SİSTEM ENTEGRATÖRÜ (Koordinatör Hub)
- **Rol:** Teknik koordinasyon
- **Alan:** TEKNİK, AI-OPS departmanları
- **Sorumluluk:** 130 skill arası entegrasyon, sistem sağlığı

## 📊 Departman Dağılımı

| Departman | Skill Sayısı | % | Koordinatör |
|-----------|--------------|---|-------------|
| İÇERİK | 46 | 35.4% | 00-Beyin |
| PAZARLAMA | 12 | 9.2% | 30-Büyüme |
| AI-OPS | 12 | 9.2% | 130-Entegratör |
| BÜYÜME | 10 | 7.7% | 30-Büyüme |
| STRATEJİ | 9 | 6.9% | 30-Büyüme |
| UX-PSİKOLOJİ | 8 | 6.2% | 00-Beyin |
| TEKNİK | 7 | 5.4% | 130-Entegratör |
| DESTEK | 7 | 5.4% | 00-Beyin |
| KALİTE | 7 | 5.4% | 05-Proje |
| YÖNETİM | 6 | 4.6% | 05-Proje |
| PRODÜKSIYON | 5 | 3.8% | 00-Beyin |
| FİNANS | 3 | 2.3% | 00-Beyin |
| **TOPLAM** | **130** | **100%** | |

## 🔄 Departmanlar Arası Ana Akışlar

### İçerik Üretim Akışı
```
İÇERİK → UX-PSİKOLOJİ → PRODÜKSIYON → KALİTE → 00-Beyin (Onay)
```

### Growth & Marketing Akışı
```
STRATEJİ → PAZARLAMA → BÜYÜME → 30-Büyüme (Koordinasyon)
```

### Teknik Geliştirme Akışı
```
TEKNİK → AI-OPS → 130-Entegratör (Senkronizasyon)
```

### Kullanıcı Desteği Akışı
```
DESTEK → KALİTE → YÖNETİM → 05-Proje (Eskalasyon)
```

## 📖 Kullanım

### Yeni Skill Eklerken
1. Uygun departmanı belirle
2. İlgili hub'a bağla (00-Beyin + koordinatör hub)
3. İlişkili skill'lerle bağlantıyı kur
4. `**Bağlı:**` alanını güncelle

### Skill İlişkilerini Kontrol Etmek
```bash
# Bir skill'in bağlantılarını görmek için:
grep -A5 "## ETKİLEŞİM" _SKILLS/[DEPARTMAN]/[skill].md

# Orphan skill'leri bulmak için:
bash scripts/audit-skills.sh
```

---

*Son Güncelleme: 29 Aralık 2025*  
*Hub Yapısı: 1 Merkezi + 3 Koordinatör + 12 Departman*  
*Toplam Skill: 130*
