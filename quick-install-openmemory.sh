#!/bin/bash

# OLUK Development Environment Setup
# OpenMemory MCP + Claude Code 2.0.75
# Kullanım: ./quick-install-openmemory.sh YOUR_API_KEY [--with-claude-code]

# Renkler
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Parametreler
INSTALL_CLAUDE_CODE=false

if [ -z "$1" ]; then
    echo ""
    echo -e "${RED}❌ API Key gerekli!${NC}"
    echo ""
    echo "Kullanım:"
    echo "  ./quick-install-openmemory.sh om_your_api_key_here"
    echo "  ./quick-install-openmemory.sh om_your_api_key_here --with-claude-code"
    echo ""
    echo "API Key'i buradan al: https://app.openmemory.dev"
    echo ""
    echo "Seçenekler:"
    echo "  --with-claude-code    Claude Code 2.0.75 sürümünü de kur"
    echo ""
    exit 1
fi

# Claude Code kurulum flag kontrolü
if [ "$2" = "--with-claude-code" ]; then
    INSTALL_CLAUDE_CODE=true
fi

API_KEY=$1
echo "🧠 OpenMemory Kurulumu Başlıyor..."
echo "🔑 API Key: ${API_KEY:0:10}..."

# .env.local dosyasına ekle
if ! grep -q "OPENMEMORY_API_KEY" .env.local 2>/dev/null; then
    echo "" >> .env.local
    echo "# OpenMemory Configuration" >> .env.local
    echo "OPENMEMORY_API_KEY=$API_KEY" >> .env.local
    echo "✅ API Key .env.local'e eklendi"
else
    echo "⚠️ OPENMEMORY_API_KEY zaten .env.local'de mevcut"
fi

# Export for current session
export OPENMEMORY_API_KEY=$API_KEY

# MCP Server kurulumu için config hazırla
mkdir -p ~/.config/Claude
cat > ~/.config/Claude/claude_desktop_config.json <<EOF
{
  "mcpServers": {
    "openmemory": {
      "command": "npx",
      "args": [
        "-y",
        "@openmemory/mcp-server"
      ],
      "env": {
        "OPENMEMORY_API_KEY": "$API_KEY"
# Claude Code Kurulumu (opsiyonel)
if [ "$INSTALL_CLAUDE_CODE" = true ]; then
    echo ""
    echo -e "${YELLOW}🚀 Claude Code 2.0.75 Kurulumu Başlıyor...${NC}"
    echo ""
    
    # Claude Code kurulum script'ini indir ve çalıştır
    if command -v curl &> /dev/null; then
        echo "📥 Claude Code indiriliyor..."
        curl -fsSL claude.ai/install.sh | bash
        
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✅ Claude Code başarıyla kuruldu!${NC}"
            
            # Versiyon kontrolü
            if command -v claude &> /dev/null; then
                CLAUDE_VERSION=$(claude --version 2>/dev/null || echo "sürüm tespit edilemedi")
                echo "📦 Kurulu sürüm: $CLAUDE_VERSION"
            fi
        else
            echo -e "${RED}❌ Claude Code kurulumu başarısız oldu${NC}"
            echo "Manuel kurulum: curl -fsSL claude.ai/install.sh | bash"
        fi
    else
        echo -e "${RED}❌ curl bulunamadı. Claude Code kurulamadı.${NC}"
        echo "curl kurulumu: sudo apt-get install curl (Debian/Ubuntu)"
    fi
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}✅ KURULUM TAMAMLANDI!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📦 Yüklenen Bileşenler:"
echo "  ✅ OpenMemory MCP Server"
if [ "$INSTALL_CLAUDE_CODE" = true ]; then
    echo "  ✅ Claude Code 2.0.75"
fi
echo ""
echo "📝 Sonraki Adımlar:"
echo ""
if [ "$INSTALL_CLAUDE_CODE" = true ]; then
    echo "🔧 Claude Code Kullanımı:"
    echo "  → Terminal'de: claude"
    echo "  → Yeni proje: claude init"
    echo "  → Kod analizi: claude analyze"
    echo ""
fi
echo "🧠 OpenMemory Test:"
echo "  1. Claude Desktop'ı KAPAT (tamamen)"
echo "  2. Claude Desktop'ı TEKRAR AÇ"
echo "  3. Test et:"
echo "     → 'OLUK projesi için çalışıyorum, bunu hatırla'"
echo "     → Yeni sohbet aç"
echo "     → 'Hangi proje için çalışıyordum?'"
echo ""
echo "    cp ~/.config/Claude/claude_desktop_config.json "$WIN_CONFIG_PATH/"
        echo "✅ Windows Claude Desktop config kopyalandı"
    fi
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ KURULUM TAMAMLANDI!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📝 Sonraki Adımlar:"
echo ""
echo "1. Claude Desktop'ı KAPAT (tamamen)"
echo "2. Claude Desktop'ı TEKRAR AÇ"
echo "3. Test et:"
echo "   → 'OLUK projesi için çalışıyorum, bunu hatırla'"
echo "   → Yeni sohbet aç"
echo "   → 'Hangi proje için çalışıyordum?'"
echo ""
echo "4. 'OLUK' derse → ÇALIŞIYOR! 🎉"
echo ""
