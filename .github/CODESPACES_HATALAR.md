# 🐛 Codespaces Hatalar ve Çözümler

## 🔴 BİLİNEN PROBLEMLER

### 1. GitHub Copilot Chat Bağlantı Hatası

**Sebep:**
- Copilot uzantısı, Codespace başlatıldığında GitHub auth token'ını alamıyor
- Uzantı yüklenirken auth servisi henüz hazır değil
- Mount edilen Copilot config dosyaları senkronize olamıyor

**Kalıcı Çözüm:** (✅ Uygulandı)
- `.devcontainer/devcontainer.json` oluşturuldu
- Copilot extensions otomatik yükleme eklendi
- Copilot config mount ayarı eklendi

**Manuel Çözüm:**
```bash
# Terminal'de
gh auth login
# Tarayıcıda GitHub'a giriş yap ve kodu gir
```

---

### 2. Codespace Donma/Yanıt Vermeme

**Sebep:**
- Node.js process bellek limitine ulaşıyor
- `.next/cache` klasörü şişmiş
- Çok fazla dosya izleniyor (node_modules)

**Çözüm:**
```bash
# Cache temizle
rm -rf .next node_modules/.cache
npm run build
```

**Önlem:** (✅ Uygulandı)
- `.gitignore` dosyasına cache klasörleri eklendi
- `next.config.js` içinde cache optimizasyonu yapıldı

---

### 3. Port 3000 Çakışması

**Sebep:**
- Önceki dev server sonlanmamış
- PID dosyası kalmış

**Çözüm:**
```bash
# Port'u kullanan process'i bul ve öldür
lsof -ti:3000 | xargs kill -9

# PID dosyasını temizle
rm -f .dev-server.pid

# Yeniden başlat
npm run dev
```

**Önlem:** (✅ Uygulandı)
- `.devcontainer/devcontainer.json` içinde port forwarding tanımlandı

---

### 4. Extension Yüklenmiyor

**Sebep:**
- VS Code extension cache bozuk
- Codespace container durumu inconsistent

**Çözüm:**
```bash
# Codespace içinde (Ctrl+Shift+P)
Developer: Reload Window

# Veya terminal'de
killall node
```

**Son Çare:**
1. Codespace'i Durdur (Stop)
2. 1 dakika bekle
3. Tekrar Başlat (Resume)

---

## 🛡️ GELECEKTEKİ HATALARI ÖNLEME

### Yapılanlar:
✅ `.devcontainer/devcontainer.json` oluşturuldu
✅ Otomatik extension yükleme yapılandırıldı
✅ Port forwarding tanımlandı
✅ Copilot mount ayarları eklendi
✅ Post-create komutları eklendi

### Yapılacaklar:
⏳ `.github/workflows/codespace-test.yml` (CI testi)
⏳ Otomatik health check scripti
⏳ Extension version pinning

---

## 📊 Hata Raporlama

Yeni bir hata ile karşılaşırsanız:

1. **Hata mesajını kaydedin**
   ```bash
   # Terminal output'u kaydet
   npm run dev 2>&1 | tee error.log
   ```

2. **Sistem bilgilerini toplayın**
   ```bash
   # Codespace info
   code --version
   node --version
   npm --version
   gh --version
   ```

3. **Bu dosyayı güncelleyin** ve commit edin

---

**Son Güncelleme:** ${new Date().toISOString().split('T')[0]}
**Yapılandırma Versiyonu:** 1.0.0
