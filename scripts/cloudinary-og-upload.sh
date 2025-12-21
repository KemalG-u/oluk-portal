#!/bin/bash

# Cloudinary OG Image URL'leri
# Bu URL'leri tarayıcıda açıp görselleri indirebilir veya direkt metadata'da kullanabilirsiniz

echo "🎨 OLUK OG Image URLs (Cloudinary)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Ana OG Image
echo "✅ ANA SAYFA OG IMAGE:"
echo "https://res.cloudinary.com/dzegofdgp/image/upload/w_1200,h_630,c_fill,b_rgb:0D4F4F,q_auto,f_auto/l_text:Arial_100_bold:OLUK,co_rgb:C9A962,g_center,y_-80/l_text:Arial_40:Akışın%20Kanalı%20·%20Dönüşümün%20Yolu,co_rgb:F5F0E6,g_center,y_40/l_text:Arial_28:oluk.org,co_rgb:F5F0E680,g_south,y_80/oluk-placeholder.png"
echo ""

# Sırdaş OG Image
echo "💬 SIRDAŞ OG IMAGE:"
echo "https://res.cloudinary.com/dzegofdgp/image/upload/w_1200,h_630,c_fill,b_rgb:0D4F4F,q_auto,f_auto/l_text:Arial_100_bold:Sırdaş,co_rgb:C9A962,g_center,y_-80/l_text:Arial_40:Yapay%20Zeka%20Ruhsal%20Danışman,co_rgb:F5F0E6,g_center,y_40/l_text:Arial_28:oluk.org,co_rgb:F5F0E680,g_south,y_80/oluk-placeholder.png"
echo ""

# Dersler OG Image
echo "📚 DERSLER OG IMAGE:"
echo "https://res.cloudinary.com/dzegofdgp/image/upload/w_1200,h_630,c_fill,b_rgb:0D4F4F,q_auto,f_auto/l_text:Arial_100_bold:Dersler,co_rgb:C9A962,g_center,y_-80/l_text:Arial_40:Dönüşüm%20Yolculuğuna%20Başla,co_rgb:F5F0E6,g_center,y_40/l_text:Arial_28:oluk.org,co_rgb:F5F0E680,g_south,y_80/oluk-placeholder.png"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📝 METADATA GÜNCELLEMESI:"
echo "Bu URL'leri src/app/layout.tsx ve sayfa metadata'larına ekle:"
echo ""
echo "openGraph: {"
echo "  images: ['https://res.cloudinary.com/dzegofdgp/image/upload/...'],"
echo "  width: 1200,"
echo "  height: 630"
echo "}"
echo ""

echo "🧪 TEST ARAÇLARI:"
echo "Facebook: https://developers.facebook.com/tools/debug/"
echo "Twitter: https://cards-dev.twitter.com/validator"
echo ""
