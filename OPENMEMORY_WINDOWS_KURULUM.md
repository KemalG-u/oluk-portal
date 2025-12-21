# 🪟 WINDOWS'TA OPENMEMORY KURULUM - ADIM ADIM

## ⚠️ ÖNEMLİ: Bu işlemi WINDOWS BİLGİSAYARINDA yapacaksın!
(Codespaces'te değil - çünkü Claude Desktop Windows'ta çalışıyor)

---

## 📋 ADIM ADIM KURULUM

### **ADIM 1: PowerShell Aç**

**Yöntem 1 (Kolay):**
- Klavyeden `Win + X` tuşlarına bas
- Menüden **"Windows PowerShell"** seç
- Mavi pencere açılacak

**Yöntem 2:**
- `Win + R` tuşlarına bas
- Yaz: `powershell`
- Enter

**Yöntem 3:**
- Başlat menüsüne tıkla
- Yaz: "PowerShell"
- Sağ tıkla → **"Yönetici olarak çalıştır"** (tavsiye)

---

### **ADIM 2: Node.js Var mı Kontrol Et**

PowerShell'de yaz:
```bash
node --version
```

**Çıktılar:**

✅ **"v20.x.x" gibi bir şey çıkarsa:** Node.js var, devam et ADIM 3'e

❌ **"node: The term 'node' is not recognized" çıkarsa:** Node.js yok, önce kur:

#### Node.js Kurulumu:
1. Tarayıcıda aç: **https://nodejs.org**
2. Yeşil buton: **"20.x.x LTS"** → İndir
3. İndirilen `.msi` dosyasını çalıştır
4. Next → Next → Install
5. PowerShell'i **KAPAT** ve **YENİDEN AÇ**
6. Tekrar test et: `node --version`

---

### **ADIM 3: OpenMemory Kurulum Komutunu Çalıştır**

PowerShell'de **bu komutu YAZ ve ENTER'a BAS:**

```bash
npx @openmemory/install --client claude
```

**Ne olacak:**
1. Komut çalışacak (30-60 saniye sürebilir)
2. Tarayıcıda bir pencere açılabilir → **"Authorize"** tıkla
3. Terminal'de sorular sorabilir:
   - **"API Key?"** → https://app.openmemory.dev'den aldığın key'i yapıştır
   - **"Continue?"** → `Y` yaz, Enter

**Başarılı çıktı şöyle olmalı:**
```
✅ Successfully configured Claude Desktop
✅ Config file created at: C:\Users\...\AppData\Roaming\Claude\claude_desktop_config.json
```

---

### **ADIM 4: Claude Desktop'ı Yeniden Başlat**

1. Claude Desktop'ı **TAMAMEN KAPAT**
   - X'e tıkla
   - Taskbar'da (alt çubuk) varsa sağ tıkla → **Çık**
   
2. **30 saniye bekle**

3. Claude Desktop'ı **TEKRAR AÇ**

---

### **ADIM 5: TEST ET**

**Test 1: Hafızaya Yaz**
Claude Desktop'ta yaz:
```
OLUK projesi için çalışıyorum. Next.js 14 ve Tailwind kullanıyoruz. Bunu hatırla.
```

Claude yanıt verecek: "Anladım, hatırladım" gibi.

**Test 2: Yeni Sohbet Aç**
- Sol üstte **"+"** (Yeni Sohbet) tıkla

**Test 3: Hafızadan Oku**
Yeni sohbette sor:
```
Hangi proje için çalışıyorduk?
```

**CEVAP "OLUK" derse → ÇALIŞIYOR! 🎉**

---

## 🔧 SORUN GİDERME

### "npx: command not found"
→ Node.js yüklü değil. ADIM 2'ye dön ve Node.js kur.

### "API Key required"
→ Terminal soruyor, https://app.openmemory.dev'den aldığın key'i yapıştır

### "Permission denied"
→ PowerShell'i **yönetici olarak** aç (sağ tıkla → Run as Administrator)

### Claude Desktop açılmıyor
→ Config dosyası bozuk olabilir. Şu dosyayı sil:
```
C:\Users\KULLANICI_ADIN\AppData\Roaming\Claude\claude_desktop_config.json
```
Sonra kurulumu tekrarla.

### Hâlâ hatırlamıyor
1. Claude Desktop'ı kapat
2. 1 dakika bekle
3. Tekrar aç
4. Yeni sohbet açıp test et

---

## 📚 ÖZET

```
1. PowerShell aç (Win + X)
2. node --version (yoksa nodejs.org'dan kur)
3. npx @openmemory/install --client claude
4. API key yapıştır (app.openmemory.dev'den)
5. Claude Desktop'ı yeniden başlat
6. Test et: "OLUK projesi" yaz → Yeni sohbet → "Hangi proje?" sor
```

---

## ❓ NE ZAMAN YARDIM İSTE

Hangi adımda takıldıysan, bana söyle:
- "ADIM 1'de PowerShell açamadım"
- "ADIM 3'te hata verdi, şu çıktı: ..."
- "Claude Desktop hatırlamıyor"

**Şimdi Windows bilgisayarında PowerShell'i aç ve başla!** 🚀
