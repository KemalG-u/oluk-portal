# 🚀 OPENM EMORY TÜM ÇÖZÜMLER - TEK SCRIPT

## ⚡ KULLANIM

### **Windows PowerShell:**

```powershell
# Script'i direkt çalıştır (indirmeye gerek yok!)
irm https://raw.githubusercontent.com/KemalG-u/oluk-portal/main/.openmemory/full-auto-install.ps1 | iex
```

---

## 🎯 NE YAPACAK?

Script **3 yöntemi sırayla** deneyecek:

### **Yöntem 1: OpenMemory NPX** ✅
- `npx @openmemory/install --client claude` çalıştırır
- Başarılıysa → Bitir
- Başarısızsa → Yöntem 2'ye geç

### **Yöntem 2: Manuel Config** 🔧
- Senden API Key ister (varsa)
- `C:\Users\...\AppData\Roaming\Claude\claude_desktop_config.json` oluşturur
- Başarılıysa → Bitir
- API Key yoksa → Yöntem 3'e geç

### **Yöntem 3: Mem0 (Alternatif)** 🔄
- Python varsa `mem0ai` paketini kurar
- Claude entegrasyonu yok ama Python ile kullanılabilir

---

## 📋 SONRA NE YAPACAKSIN?

**Eğer Yöntem 1 veya 2 başarılıysa:**
1. Claude Desktop'ı **KAPAT** (tamamen)
2. 30 saniye **BEKLE**
3. Claude Desktop'ı **AÇ**
4. Test et:
   ```
   "OLUK projesi için çalışıyorum, bunu hatırla"
   ```
5. Yeni sohbet aç:
   ```
   "Hangi proje için çalışıyordum?"
   ```
6. **"OLUK" derse → ÇALIŞIYOR! 🎉**

---

## 🔧 SORUN ÇÖZME

### Script 404 hatası veriyor
- GitHub'a dosya yüklenmemiş olabilir
- **Alternatif:** Manuel komutları kullan (aşağıda)

### "Execution policy" hatası
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Node.js yok
1. https://nodejs.org → İndir ve kur
2. Script'i tekrar çalıştır

### Python yok (Yöntem 3 için)
1. https://python.org → İndir ve kur
2. Script'i tekrar çalıştır

---

## 📝 MANUEL KOMUTLAR (Script çalışmazsa)

### OpenMemory Direkt:
```powershell
npx @openmemory/install --client claude
```

### Manuel Config (API Key ile):
```powershell
# Claude config dizini
$configDir = "$env:APPDATA\Claude"
New-Item -ItemType Directory -Path $configDir -Force

# Config dosyası oluştur
$config = @'
{
  "mcpServers": {
    "openmemory": {
      "command": "npx",
      "args": ["-y", "@openmemory/mcp-server"],
      "env": {
        "OPENMEMORY_API_KEY": "BURAYA_API_KEY_YAPIŞTIR"
      }
    }
  }
}
'@

Set-Content -Path "$configDir\claude_desktop_config.json" -Value $config
```

### Mem0 (Python):
```powershell
pip install mem0ai
```

---

## ✅ ÖZET

1. PowerShell'i aç
2. `irm ... | iex` komutunu çalıştır
3. Ekrandaki talimatları takip et
4. Claude Desktop'ı yeniden başlat
5. Test et

**TOPLAM SÜRE: 2 DAKİKA** ⏱️
