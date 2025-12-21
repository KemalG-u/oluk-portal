#!/bin/bash

echo "🔧 GitHub Copilot Onarım Scripti Başlatılıyor..."

# Renk kodları
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 1. GitHub Authentication kontrolü
echo -e "\n${YELLOW}1. GitHub Authentication Kontrolü...${NC}"
if gh auth status &>/dev/null; then
    echo -e "${GREEN}✓ GitHub authentication OK${NC}"
else
    echo -e "${RED}✗ GitHub authentication gerekli${NC}"
    echo "Şimdi giriş yapın:"
    gh auth login --web
fi

# 2. Copilot Extension durumu
echo -e "\n${YELLOW}2. Copilot Extensions Kontrolü...${NC}"
code --list-extensions | grep -q "github.copilot" && echo -e "${GREEN}✓ GitHub Copilot yüklü${NC}" || echo -e "${RED}✗ GitHub Copilot eksik${NC}"
code --list-extensions | grep -q "github.copilot-chat" && echo -e "${GREEN}✓ GitHub Copilot Chat yüklü${NC}" || echo -e "${RED}✗ GitHub Copilot Chat eksik${NC}"

# 3. Copilot Cache temizleme
echo -e "\n${YELLOW}3. Copilot Cache Temizleniyor...${NC}"
rm -rf ~/.config/github-copilot/versions.json
rm -rf ~/.vscode-remote/data/User/globalStorage/github.copilot
rm -rf ~/.vscode-remote/data/User/workspaceStorage/*/github.copilot
echo -e "${GREEN}✓ Cache temizlendi${NC}"

# 4. VS Code Reload
echo -e "\n${YELLOW}4. VS Code Window Reload Gerekiyor...${NC}"
echo -e "${GREEN}Terminalde şunu çalıştır: ${NC}"
echo -e "${YELLOW}Ctrl+Shift+P -> 'Developer: Reload Window'${NC}"

echo -e "\n${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Onarım tamamlandı!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "\n${YELLOW}Sonraki Adımlar:${NC}"
echo -e "1. VS Code'u reload et (Ctrl+Shift+P -> Reload Window)"
echo -e "2. Copilot Chat'i aç (Ctrl+Shift+I veya yan menüden)"
echo -e "3. Hâlâ çalışmazsa: Codespace'i Stop -> 30 sn bekle -> Start\n"
