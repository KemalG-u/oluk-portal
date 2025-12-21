#!/bin/bash

# OpenMemory Hızlı Kurulum - API Key ile
# Kullanım: ./quick-install-openmemory.sh YOUR_API_KEY

if [ -z "$1" ]; then
    echo ""
    echo "❌ API Key gerekli!"
    echo ""
    echo "Kullanım:"
    echo "  ./quick-install-openmemory.sh om_your_api_key_here"
    echo ""
    echo "API Key'i buradan al: https://app.openmemory.dev"
    echo ""
    exit 1
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
      }
    }
  }
}
EOF

echo "✅ Claude Desktop config oluşturuldu: ~/.config/Claude/claude_desktop_config.json"

# Windows için config oluştur (eğer Windows subsystem üzerindeyse)
if [ -d "/mnt/c/Users" ]; then
    WIN_USER=$(ls /mnt/c/Users | grep -v Public | head -1)
    WIN_CONFIG_PATH="/mnt/c/Users/$WIN_USER/AppData/Roaming/Claude"
    
    if [ -d "$WIN_CONFIG_PATH" ]; then
        cp ~/.config/Claude/claude_desktop_config.json "$WIN_CONFIG_PATH/"
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
