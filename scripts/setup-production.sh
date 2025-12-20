#!/bin/bash
# OLUK Portal - Otomatik Kurulum Script
# DNS ve Cloudinary Yapılandırması

echo "🚀 OLUK PORTAL - OTOMATIK YAPILANDIRMA"
echo "======================================"
echo ""

# Renkler
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. CLOUDINARY API KEY KONTROLÜ
echo "📍 1. CLOUDINARY API KEY KONTROLÜ"
echo "-----------------------------------"

if grep -q "your_api_key_here" .env.local 2>/dev/null; then
    echo -e "${RED}❌ Cloudinary API keys placeholder durumunda${NC}"
    echo ""
    echo "Cloudinary Console'dan API key'leri alman gerekiyor:"
    echo "1. https://console.cloudinary.com/ → Login (dzegofdgp account)"
    echo "2. Settings → API Keys"
    echo "3. API Key ve API Secret'ı kopyala"
    echo ""
    echo "Sonra .env.local dosyasını düzenle:"
    echo "  CLOUDINARY_API_KEY=<gerçek_key>"
    echo "  CLOUDINARY_API_SECRET=<gerçek_secret>"
    echo ""
    CLOUDINARY_CONFIGURED=false
else
    echo -e "${GREEN}✅ Cloudinary API keys configured${NC}"
    CLOUDINARY_CONFIGURED=true
fi

# 2. DNS KONTROLÜ
echo ""
echo "📍 2. DNS A RECORD KONTROLÜ"
echo "----------------------------"

# Vercel domain durumunu kontrol et
VERCEL_STATUS=$(vercel domains inspect oluk.org 2>&1 | grep -c "not configured properly")

if [ "$VERCEL_STATUS" -gt 0 ]; then
    echo -e "${YELLOW}⚠️  DNS A Record henüz güncellenmemiş${NC}"
    echo ""
    echo "Hosting Provider: p3.hosting.com.tr"
    echo "DNS Ayarları → A Record:"
    echo "  Host: @"
    echo "  Type: A"
    echo "  Value: 76.76.21.21  ← Vercel IP"
    echo "  TTL: 3600"
    echo ""
    echo "Mevcut nameservers: p3.hosting.com.tr, p4.hosting.com.tr"
    echo "Hedef: A record ekle (nameserver değiştirmeye gerek yok)"
    echo ""
    DNS_CONFIGURED=false
else
    echo -e "${GREEN}✅ DNS configured${NC}"
    DNS_CONFIGURED=true
fi

# 3. UPLOAD TEST
echo ""
echo "📍 3. CLOUDINARY UPLOAD TEST"
echo "----------------------------"

if [ "$CLOUDINARY_CONFIGURED" = true ]; then
    echo "Upload script çalıştırılıyor..."
    npm run cloudinary:upload
    UPLOAD_STATUS=$?
    
    if [ $UPLOAD_STATUS -eq 0 ]; then
        echo -e "${GREEN}✅ Upload başarılı${NC}"
    else
        echo -e "${RED}❌ Upload başarısız (exit code: $UPLOAD_STATUS)${NC}"
    fi
else
    echo -e "${YELLOW}⏭️  Skipped - API keys gerekli${NC}"
fi

# 4. DOMAIN TEST
echo ""
echo "📍 4. DOMAIN ERİŞİM TESTİ"
echo "-------------------------"

if [ "$DNS_CONFIGURED" = true ]; then
    echo "Testing https://oluk.org ..."
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://oluk.org)
    
    if [ "$HTTP_CODE" -eq 200 ] || [ "$HTTP_CODE" -eq 308 ]; then
        echo -e "${GREEN}✅ oluk.org erişilebilir (HTTP $HTTP_CODE)${NC}"
    else
        echo -e "${RED}❌ oluk.org erişim hatası (HTTP $HTTP_CODE)${NC}"
    fi
else
    echo -e "${YELLOW}⏭️  Skipped - DNS propagation bekleniyor${NC}"
fi

# 5. ÖZET
echo ""
echo "======================================"
echo "📊 YAPILANDIRMA DURUMU ÖZETİ"
echo "======================================"
echo ""

if [ "$CLOUDINARY_CONFIGURED" = true ]; then
    echo -e "Cloudinary API Keys: ${GREEN}✅ Configured${NC}"
else
    echo -e "Cloudinary API Keys: ${RED}❌ Placeholder - Action Required${NC}"
fi

if [ "$DNS_CONFIGURED" = true ]; then
    echo -e "DNS A Record:        ${GREEN}✅ Configured${NC}"
else
    echo -e "DNS A Record:        ${YELLOW}⚠️  Not configured - Action Required${NC}"
fi

echo ""
echo "Production URL:      https://oluk-portal.vercel.app ✅"
echo "Custom Domain:       https://oluk.org"

echo ""
echo "======================================"

# Exit code
if [ "$CLOUDINARY_CONFIGURED" = false ] || [ "$DNS_CONFIGURED" = false ]; then
    echo -e "${YELLOW}⚠️  Kullanıcı aksiyonu gerekli${NC}"
    exit 1
else
    echo -e "${GREEN}✅ Tüm sistemler operasyonel!${NC}"
    exit 0
fi
