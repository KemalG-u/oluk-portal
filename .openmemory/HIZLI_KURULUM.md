# 🚀 OPENMEMORY - TEK TIKLAMA KURULUM

## ⚡ EN HIZLI KURULUM (2 Adım)

### **ADIM 1: Script'i İndir**

**ÇOK KOLAY - Direkt İndir:**

📥 **[BURAYA TIKLA - İNDİR](https://raw.githubusercontent.com/KemalG-u/oluk-portal/main/.openmemory/windows-auto-install.ps1)**

(Sağ tıkla → "Farklı Kaydet" → Masaüstüne kaydet → Dosya adı: `windows-auto-install.ps1`)

**VEYA Manuel:**
1. Bu repo'da `.openmemory/windows-auto-install.ps1` dosyasını aç
2. "Raw" butonuna tıkla
3. Sağ tıkla → "Farklı Kaydet" → Masaüstüne kaydet

---

### **ADIM 2: Script'i Çalıştır**

**Windows'ta:**
1. Masaüstündeki `windows-auto-install.ps1` dosyasına **SAĞ TIKLA**
2. **"Run with PowerShell"** seç (PowerShell ile Çalıştır)

**VEYA:**
1. `Win + X` → PowerShell (Yönetici olarak)
2. Şunu yaz:
```powershell
cd $HOME\Desktop
.\windows-auto-install.ps1
```

---

## 🎯 Script Ne Yapacak?

**Otomatik olarak:**
1. ✅ Node.js var mı kontrol eder (yoksa yönlendirir)
2. ✅ OpenMemory sitesini açar (https://app.openmemory.dev)
3. ✅ API Key ister (kopyala-yapıştır yapacaksın)
4. ✅ OpenMemory'yi kurar
5. ✅ Claude Desktop'ı yapılandırır
6. ✅ Sana test adımlarını söyler

**Sen sadece:**
- API Key'i kopyala-yapıştır yapacaksın
- Claude Desktop'ı yeniden başlatacaksın
- Test edeceksin

---

## 📋 Detaylı Adımlar (Script çalışırken)

### 1. Script başlayınca:
- Node.js kontrolü yapılır
- Yoksa tarayıcıda nodejs.org açılır → Kur → Script'i tekrar çalıştır

### 2. API Key:
- Script otomatik https://app.openmemory.dev açar
- Sen: GitHub ile giriş yap → API Keys → Create → Kopyala
- PowerShell'e geri dön → Yapıştır → Enter

### 3. Kurulum:
- 30-60 saniye bekle
- "✅ KURULUM BAŞARILI!" göreceksin

### 4. Claude'u Yenile:
- Claude Desktop'ı kapat → 30 saniye bekle → Aç

### 5. Test:
```
"OLUK projesi için çalışıyorum, bunu hatırla"
```
Yeni sohbet aç:
```
"Hangi proje için çalışıyordum?"
```
**"OLUK" derse → ÇALIŞIYOR! 🎉**

---

## 🔧 Sorun Çözme

### "execution policy" hatası
PowerShell'i **Yönetici olarak** aç, şunu çalıştır:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
Sonra script'i tekrar çalıştır.

### Node.js yok
Script otomatik yönlendirir:
1. https://nodejs.org → İndir
2. Kur
3. PowerShell'i yeniden başlat
4. Script'i tekrar çalıştır

### API Key hatalı
Script tekrar çalıştır, doğru key'i yapıştır (om_... ile başlamalı)

---

## 📚 Alternatif: Manuel Kurulum

Eğer script çalışmazsa, elle kur:

**PowerShell'de:**
```powershell
# Node.js kontrolü
node --version

# Kurulum
npx @openmemory/install --client claude

# API Key sor
# → https://app.openmemory.dev'den aldığın key'i yapıştır
```

---

## ✅ Özet

1. **İndir:** Script'i masaüstüne indir
2. **Çalıştır:** Sağ tıkla → Run with PowerShell
3. **API Key:** app.openmemory.dev'den al, yapıştır
4. **Yeniden Başlat:** Claude Desktop'ı kapat-aç
5. **Test Et:** "OLUK projesi" de, yeni sohbette sor

**SADECE 2 DAKİKA! 🚀**
