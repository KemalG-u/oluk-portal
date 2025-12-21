#!/bin/bash

# Google Search Console verification tag güncelleme helper

if [ -z "$1" ]; then
    echo "❌ Kullanım: $0 <verification-code>"
    echo ""
    echo "Örnek:"
    echo "  $0 ABC123XYZ"
    echo ""
    echo "Google Search Console'dan aldığın verification code'u yapıştır."
    exit 1
fi

VERIFICATION_CODE=$1
LAYOUT_FILE="src/app/layout.tsx"

echo "🔧 Verification tag güncelleniyor..."
echo "Code: $VERIFICATION_CODE"
echo ""

# Backup oluştur
cp "$LAYOUT_FILE" "${LAYOUT_FILE}.backup"

# Tag'i ekle veya güncelle
if grep -q "google-site-verification" "$LAYOUT_FILE"; then
    # Var olanı güncelle
    sed -i "s/<meta name=\"google-site-verification\" content=\".*\" \/>/<meta name=\"google-site-verification\" content=\"$VERIFICATION_CODE\" \/>/" "$LAYOUT_FILE"
    echo "✅ Verification tag güncellendi"
else
    # Yeni ekle (head içinde, title'dan sonra)
    sed -i "/<title>/a\        <meta name=\"google-site-verification\" content=\"$VERIFICATION_CODE\" \/>" "$LAYOUT_FILE"
    echo "✅ Verification tag eklendi"
fi

echo ""
echo "📋 Sonraki adımlar:"
echo "1. npm run build"
echo "2. vercel --prod"
echo "3. Google Search Console'da 'Doğrula' tıkla"
echo ""
echo "Backup: ${LAYOUT_FILE}.backup"
