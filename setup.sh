#!/bin/bash
# OLUK Portal - Hızlı Kurulum Scripti

echo "🚀 OLUK Portal Kurulum Başlatılıyor..."

# Gerekli paketleri yükle
echo "📦 Paketler yükleniyor..."
npm install

# Environment dosyası kontrolü
if [ ! -f .env.local ]; then
    echo "⚠️  .env.local bulunamadı - örnek oluşturuluyor..."
    cat > .env.local << EOF
# Anthropic API Key
ANTHROPIC_API_KEY=your_api_key_here

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
EOF
fi

# Build test
echo "🏗️  Build test ediliyor..."
npm run build

echo "✅ Kurulum tamamlandı!"
echo ""
echo "🎯 Başlatmak için:"
echo "   npm run dev"
echo ""
echo "🔗 Vercel'e deploy için:"
echo "   vercel --prod"
