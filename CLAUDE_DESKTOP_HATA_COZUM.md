# 🔧 CLAUDE DESKTOP HATA ÇÖZÜM REHBERİ

## ⚡ HIZLI ÇÖZÜM (30 saniye)

### Windows PowerShell'de:

```powershell
# 1. Claude Desktop'ı kapat
Stop-Process -Name "Claude" -Force

# 2. Config dosyasını temizle
$config = "$env:APPDATA\Claude\claude_desktop_config.json"
"{}" | Set-Content $config -Encoding UTF8

# 3. Claude Desktop'ı başlat
# Windows menüsünden Claude'u aç
```

**Bu çözüm:** Tüm MCP server'ları (OpenMemory dahil) kaldırır. Claude temiz halde çalışır.

---

## 🔍 HATANIN NEDENİNİ BUL

### 1. Debug Script'i Çalıştır

```powershell
# PowerShell'de:
cd C:\path\to\oluk-portal

# Script'i çalıştır:
.\debug-claude-desktop.sh içeriğini kopyala-yapıştır
```

**Gösterecekler:**
- ✅ Log dosyasındaki hatalar
- ✅ Config dosyası içeriği
- ✅ OpenMemory API key durumu
- ✅ Node.js/npx kontrolü

---

## 🛠️ DETAYLI ÇÖZÜMLER

### ÇÖZÜM 1: MCP Server'ı Kaldır (Önerilen)

**Ne zaman:** "Hata hemen kayboluyor" durumunda

```powershell
# fix-claude-desktop.ps1'i çalıştır
# Seçim: 1️⃣ (MCP Server'ı KALDIR)
```

**Sonuç:** OpenMemory olmadan çalışır, ama hafıza kaybolur.

---

### ÇÖZÜM 2: API Key'siz Çalıştır

**Ne zaman:** OpenMemory'yi tutmak istiyorsan ama API key sorunu varsa

```powershell
# fix-claude-desktop.ps1'i çalıştır
# Seçim: 2️⃣ (API key YOK)
```

**Sonuç:** OpenMemory sınırlı modda çalışır.

---

### ÇÖZÜM 3: Yeni API Key

**Ne zaman:** API key'in expired veya geçersizse

```powershell
# fix-claude-desktop.ps1'i çalıştır
# Seçim: 3️⃣ (Yeni API key)
```

**API Key nereden:** https://app.openmemory.dev

---

### ÇÖZÜM 4: Temiz Kurulum

**Ne zaman:** Hiçbir şey işe yaramadıysa

```powershell
# fix-claude-desktop.ps1'i çalıştır
# Seçim: 4️⃣ (TEMİZ KURULUM)
```

**Sonuç:** Her şey sıfırlanır, temiz başlar.

---

## 🚨 SIK GÖRÜLEN HATALAR

### 1. "MCP Server connection failed"

**Sebep:** OpenMemory MCP server çalışamıyor
**Çözüm:** ÇÖZÜM 1 (MCP Server'ı kaldır)

---

### 2. "npx command not found"

**Sebep:** Node.js kurulu değil
**Çözüm:**
1. Node.js kur: https://nodejs.org
2. Claude Desktop'ı yeniden başlat

---

### 3. "API key invalid"

**Sebep:** OpenMemory API key geçersiz/expired
**Çözüm:** ÇÖZÜM 3 (Yeni API key)

---

### 4. "Hata hemen kayboluyor"

**Sebep:** MCP server başlatılamıyor
**Çözüm:** 
1. ÇÖZÜM 1 (MCP Server'ı kaldır)
2. Veya log'lara bak (debug script)

---

## 📁 DOSYA YERLERİ

### Windows:
```
Config:  %APPDATA%\Claude\claude_desktop_config.json
Logs:    %APPDATA%\Claude\logs\
Backup:  %APPDATA%\Claude\claude_desktop_config.backup-*.json
```

### Manuel Config Temizleme:
```powershell
# 1. Dosyayı aç
notepad "$env:APPDATA\Claude\claude_desktop_config.json"

# 2. İçeriği değiştir:
{}

# 3. Kaydet ve Claude'u başlat
```

---

## ✅ BAŞARILI KURULUM KONTROLÜ

Claude Desktop başladıktan sonra test et:

```
Sende: "Test mesajı"
Claude: [Normal cevap verirse ✅]
```

Eğer hata veriyorsa:
1. Debug script çalıştır
2. Log dosyasını kontrol et
3. Hatayı buraya yapıştır

---

## 💡 ÖNERİLER

1. **OpenMemory'ye ihtiyacın yoksa:** ÇÖZÜM 1 kullan (kaldır)
2. **Hafıza özelliği lazımsa:** ÇÖZÜM 3 kullan (yeni API key)
3. **Hata devam ediyorsa:** ÇÖZÜM 4 kullan (temiz kurulum)

---

## 📞 DESTEK

Hala sorun varsa:
1. Debug script çıktısını kopyala
2. Log dosyasını kopyala
3. Hatanın ekran görüntüsünü al
4. Buraya yapıştır

---

**Son Güncelleme:** 21 Aralık 2025
**Proje:** OLUK Portal
**PM:** Claude (Sonnet 4.5)
