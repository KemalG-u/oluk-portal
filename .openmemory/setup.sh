#!/bin/bash

# OpenMemory MCP Server Kurulum Scripti
# Codespaces için optimize edilmiş

echo "🧠 OpenMemory MCP Server Kurulumu Başlıyor..."

# API Key kontrolü
if [ -z "$OPENMEMORY_API_KEY" ]; then
    echo ""
    echo "❌ HATA: OPENMEMORY_API_KEY bulunamadı!"
    echo ""
    echo "Lütfen API key'inizi şu şekilde ekleyin:"
    echo ""
    echo "1. GitHub → Codespaces → Settings"
    echo "2. Secrets sekmesi"
    echo "3. 'New secret' → OPENMEMORY_API_KEY"
    echo ""
    echo "Veya terminalde:"
    echo "  export OPENMEMORY_API_KEY=your_api_key_here"
    echo ""
    exit 1
fi

echo "✅ API Key bulundu: ${OPENMEMORY_API_KEY:0:10}..."

# Node.js versiyonu kontrolü
NODE_VERSION=$(node --version)
echo "📦 Node.js: $NODE_VERSION"

# OpenMemory CLI kurulumu
echo "📥 OpenMemory CLI yükleniyor..."
npm install -g @openmemory/cli

# MCP Server kurulumu
echo "🔧 OpenMemory MCP Server yapılandırılıyor..."
npx @openmemory/install --client claude --env OPENMEMORY_API_KEY=$OPENMEMORY_API_KEY

echo ""
echo "✅ Kurulum tamamlandı!"
echo ""
echo "📝 Sonraki Adımlar:"
echo "1. Claude Desktop'ı yeniden başlat"
echo "2. Test et: 'OLUK projesi için çalışıyorum, bunu hatırla'"
echo ""
