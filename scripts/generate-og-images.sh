#!/bin/bash

# OLUK OG Image Generator & Uploader
# Cloudinary ile OG image oluşturur ve metadataları günceller

echo "🎨 OLUK OG Image Generator"
echo ""

CLOUD_NAME="dzegofdgp"
BASE_URL="https://res.cloudinary.com/$CLOUD_NAME/image/upload"

# 1. Cloudinary Text Overlay URL
OG_URL="${BASE_URL}/w_1200,h_630,c_fill,b_rgb:0D4F4F/l_text:Playfair%20Display_120_bold_center:OLUK,co_rgb:C9A962,g_center,y_-60/l_text:Inter_36_center:Akışın%20Kanalı%20·%20Dönüşümün%20Yolu,co_rgb:F5F0E6,g_center,y_40/l_text:Inter_24:oluk.org,co_rgb:F5F0E680,g_south,y_120/v1/oluk/og-base.png"

echo "✅ Cloudinary OG Image URL:"
echo "$OG_URL"
echo ""

# 2. Alternatif: Basit renk base
OG_SIMPLE="${BASE_URL}/w_1200,h_630,c_fill,b_rgb:0D4F4F/l_text:Playfair%20Display_140_bold:OLUK,co_rgb:C9A962,g_center/oluk-og.png"

echo "📸 Basit Versiyon:"
echo "$OG_SIMPLE"
echo ""

# 3. OG Image metadata template
cat > /tmp/og-metadata.tsx << 'EOF'
// OG Image Metadata - Tüm sayfalara eklenecek
openGraph: {
  title: 'OLUK - Akışın Kanalı, Dönüşümün Yolu',
  description: 'Ruhsal dönüşüm için dijital manevi platform. Dersler, meditasyon ve AI destekli rehberlik.',
  url: 'https://oluk.org',
  siteName: 'OLUK',
  images: [
    {
      url: 'https://oluk.org/og-image.png',
      secureUrl: 'https://oluk.org/og-image.png',
      width: 1200,
      height: 630,
      alt: 'OLUK - Akışın Kanalı, Dönüşümün Yolu',
      type: 'image/png',
    },
  ],
  locale: 'tr_TR',
  type: 'website',
},
twitter: {
  card: 'summary_large_image',
  title: 'OLUK - Akışın Kanalı',
  description: 'Ruhsal dönüşüm için dijital manevi platform',
  images: ['https://oluk.org/og-image.png'],
  creator: '@oluk',
},
EOF

echo "📝 OG Metadata template oluşturuldu: /tmp/og-metadata.tsx"
echo ""

# 4. Test URLs
echo "🧪 Test URLs:"
echo ""
echo "Facebook Debugger:"
echo "https://developers.facebook.com/tools/debug/?q=https://oluk.org"
echo ""
echo "Twitter Card Validator:"
echo "https://cards-dev.twitter.com/validator"
echo ""
echo "LinkedIn Post Inspector:"
echo "https://www.linkedin.com/post-inspector/"
echo ""

# 5. Manual OG Image creation option
echo "🎨 Manuel OG Image Oluşturma:"
echo ""
echo "1. public/og-generator.html dosyasını aç"
echo "2. Tarayıcıda aç"
echo "3. 'Generate' butonuna tıkla"
echo "4. 'Download PNG' ile indir → oluk-og-image.png"
echo "5. public/og-image.png olarak kaydet"
echo ""

echo "✅ Hazır! Şimdi ne yapacaksın?"
echo ""
echo "A) Cloudinary URL'i metadata'ya ekle (yukarıdaki URL'yi kullan)"
echo "B) Manuel olarak public/og-generator.html ile PNG oluştur"
echo "C) Her ikisini de yap"
echo ""
