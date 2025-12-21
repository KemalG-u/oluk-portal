# 🔧 Codespaces Yapılandırması

## 📋 Bu Nedir?

Bu klasör, GitHub Codespaces için otomatik yapılandırma içerir. Artık her Codespace açtığınızda:

✅ **Otomatik yüklenir:**
- GitHub Copilot & Copilot Chat
- ESLint & Prettier
- Tailwind CSS IntelliSense
- TypeScript güncellemeleri

✅ **Otomatik çalışır:**
- `npm install` (ilk açılışta)
- Port 3000 yönlendirme (Next.js için)

✅ **Copilot ayarları:**
- Tüm dosya türleri için aktif
- Otomatik auth bağlantısı

---

## 🚨 Sorun Yaşarsanız

### ⚡ HIZLI ÇÖZÜM: Copilot Hataları
**"Chat took too long" veya "Failed to get a response" hatası için:**

```bash
./.devcontainer/fix-copilot.sh
```
Sonra: `Ctrl+Shift+P` → **"Developer: Reload Window"**

---

### Copilot Çalışmıyor (Manuel Çözüm)

**1. GitHub Authentication:**
```bash
gh auth login
```

**2. Cache Temizle:**
```bash
rm -rf ~/.config/github-copilot/versions.json
rm -rf ~/.vscode-remote/data/User/globalStorage/github.copilot
```

**3. VS Code Reload:**
- `Ctrl+Shift+P` → "Developer: Reload Window"

**4. Son Çare:**
- GitHub → Codespaces → `...` → Stop
- 30 saniye bekle → Start

### Extension yüklenmiyor
1. Codespace'i durdurun
2. 30 saniye bekleyin
3. Tekrar başlatın
4. Extensions sekmesinde "Reload Required" varsa tıklayın

### Port açılmıyor
```bash
# Terminal'de
lsof -ti:3000 | xargs kill -9
npm run dev
```

---

## 🔍 Bu Hatalar Neden Oluyor?

1. **GitHub Token Expire:** Codespaces bazen GitHub token'ını kaybediyor
2. **Extension Cache Corrupt:** Copilot cache bozulduğunda timeout veriyor
3. **Remote Connection Lag:** VS Code uzak bağlantısında gecikmeler

**Kalıcı Çözüm:** Bu repo'nun devcontainer.json ayarları bu sorunları minimize ediyor.

---

## 📚 Daha Fazla Bilgi

- [VS Code Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers)
- [GitHub Codespaces Docs](https://docs.github.com/en/codespaces)
