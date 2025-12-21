# 🧠 OPENMEMORY KURULUM KILAVUZU

## ✅ ADIM 1: API KEY AL (Sen yaptın)
- https://app.openmemory.dev → Giriş yaptın
- Dashboard'dan API Key aldın

---

## 🚀 ADIM 2: OTOMATIK KURULUM (Ben yapacağım)

### API Key'ini Bana Ver
Aldığın API key'i (örn: `om_abc123xyz456`) buraya yapıştır:

```bash
./quick-install-openmemory.sh om_BURAYA_YAPIŞTIR
```

Script otomatik olarak:
- ✅ API key'i .env.local'e ekler
- ✅ Claude Desktop config dosyası oluşturur
- ✅ MCP server ayarlarını yapar

---

## 🎯 ADIM 3: CLAUDE DESKTOP'I YENİDEN BAŞLAT

1. **Claude Desktop'ı KAPAT** (tamamen kapat, taskbar'dan da çık)
2. **30 saniye bekle**
3. **Claude Desktop'ı TEKRAR AÇ**

---

## 🧪 ADIM 4: TEST ET

### Test 1: Hafızaya Kaydet
Claude Desktop'ta yaz:
```
"OLUK projesi için çalışıyorum, bunu hatırla"
```

### Test 2: Hafızadan Oku
**Yeni bir sohbet aç** (+ ikonu) ve sor:
```
"Hangi proje için çalışıyordum?"
```

**Eğer "OLUK" derse → ÇALIŞIYOR! 🎉**

---

## 🔧 SORUN GİDERME

### "MCP server not found" Hatası
```bash
# Claude Desktop config dosyasını kontrol et
cat ~/.config/Claude/claude_desktop_config.json
```

### API Key Yanlışsa
```bash
# .env.local'i düzenle
nano .env.local
# OPENMEMORY_API_KEY satırını bul ve düzelt
```

### Claude Desktop Açılmıyorsa
1. Windows: `%APPDATA%\Claude\claude_desktop_config.json` dosyasını kontrol et
2. JSON formatının doğru olduğundan emin ol
3. Claude Desktop'ı yönetici olarak çalıştır

---

## 📚 OpenMemory Nedir?

**OpenMemory**, Claude'un sohbetler arası bilgi hatırlamasını sağlar:

- 💾 **Uzun dönem hafıza**: Projeler, tercihler, kararlar
- 🔄 **Sohbetler arası**: Yeni sohbet açsan bile hatırlar
- 🧠 **Akıllı hatırlama**: İlgili bilgileri otomatik getirir

### Örnek Kullanım:
```
"OLUK projesinde Next.js 14 ve Tailwind kullanıyoruz, bunu hatırla"
"Kemal tercih ediyor: Türkçe döküman, detaylı açıklama"
"Bug: Cloudinary upload timeout veriyor - çözüm: retry logic"
```

**Sonra yeni sohbette:**
```
"OLUK projesinde bug var"
```
Claude hatırlayacak: "Cloudinary upload timeout - retry logic eklenecek"

---

## ✅ HAZIRSIN!

API key'ini bana ver, kurulumu bitireyim:
```bash
./quick-install-openmemory.sh om_YOUR_API_KEY
```
