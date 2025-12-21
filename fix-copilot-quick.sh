#!/bin/bash
# ACIL COPILOT ONARIMI - 10 Saniyede Çözüm

echo "🚨 ACİL COPILOT ONARIMI BAŞLIYOR..."

# Cache temizle
rm -rf ~/.config/github-copilot/versions.json 2>/dev/null
rm -rf ~/.vscode-remote/data/User/globalStorage/github.copilot 2>/dev/null

# GitHub auth kontrol
if ! gh auth status &>/dev/null; then
    echo "⚠️ GitHub login gerekli:"
    gh auth login --web
fi

echo ""
echo "✅ TAMAMLANDI!"
echo ""
echo "ŞİMDİ BU KOMUTU ÇALIŞTIR:"
echo "  Ctrl+Shift+P → 'Developer: Reload Window'"
echo ""
