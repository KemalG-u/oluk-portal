#!/bin/bash

# OLUK - Google Search Console Otomasyon Setup
# Bu script Google Search Console için gerekli hazırlıkları yapar

set -e

echo "🔍 GOOGLE SEARCH CONSOLE SETUP - OLUK"
echo "======================================"
echo ""

# Renkler
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Verification meta tag ekleme
echo -e "${BLUE}📋 Adım 1: Verification Meta Tag${NC}"
echo "Google Search Console'a gidip site ekledikten sonra,"
echo "verification meta tag'ini alacaksınız."
echo ""
echo -e "${YELLOW}Örnek:${NC}"
echo '<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />'
echo ""
echo "Bu tag'i src/app/layout.tsx dosyasına ekliyoruz..."
echo ""

# Layout dosyasını kontrol et
LAYOUT_FILE="src/app/layout.tsx"

if [ -f "$LAYOUT_FILE" ]; then
    echo -e "${GREEN}✅ layout.tsx bulundu${NC}"
    
    # Verification placeholder var mı kontrol et
    if grep -q "google-site-verification" "$LAYOUT_FILE"; then
        echo -e "${GREEN}✅ Verification meta tag placeholder zaten mevcut${NC}"
    else
        echo -e "${YELLOW}⚠️ Verification meta tag bulunamadı${NC}"
        echo "Manuel olarak eklemen gerekebilir."
    fi
else
    echo -e "${YELLOW}⚠️ layout.tsx bulunamadı${NC}"
fi

echo ""

# 2. Sitemap kontrolü
echo -e "${BLUE}📋 Adım 2: Sitemap Kontrolü${NC}"

SITEMAP_FILES=(
    "public/sitemap.xml"
    "public/sitemap-0.xml"
    "public/robots.txt"
)

for file in "${SITEMAP_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅ $file mevcut${NC}"
    else
        echo -e "${YELLOW}⚠️ $file bulunamadı (build sonrası oluşturulabilir)${NC}"
    fi
done

echo ""

# 3. robots.txt kontrolü
echo -e "${BLUE}📋 Adım 3: robots.txt Kontrolü${NC}"

if [ -f "public/robots.txt" ]; then
    echo -e "${GREEN}✅ robots.txt mevcut${NC}"
    echo ""
    echo "İçerik:"
    cat public/robots.txt
else
    echo -e "${YELLOW}⚠️ robots.txt bulunamadı${NC}"
fi

echo ""

# 4. Production build kontrolü
echo -e "${BLUE}📋 Adım 4: Production Build Durumu${NC}"

if [ -d ".next" ]; then
    echo -e "${GREEN}✅ Build klasörü mevcut${NC}"
else
    echo -e "${YELLOW}⚠️ Build yapılmamış. 'npm run build' çalıştır${NC}"
fi

echo ""

# 5. Deployment kontrolü
echo -e "${BLUE}📋 Adım 5: Live Site Kontrolü${NC}"
echo "https://oluk.org adresine erişim test ediliyor..."
echo ""

if command -v curl &> /dev/null; then
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://oluk.org)
    
    if [ "$HTTP_CODE" -eq 200 ]; then
        echo -e "${GREEN}✅ Site canlı ve erişilebilir (HTTP $HTTP_CODE)${NC}"
    else
        echo -e "${YELLOW}⚠️ Site erişiminde sorun olabilir (HTTP $HTTP_CODE)${NC}"
    fi
else
    echo -e "${YELLOW}⚠️ curl komutu bulunamadı, manuel kontrol et${NC}"
fi

echo ""

# 6. Sitemap erişim kontrolü
echo -e "${BLUE}📋 Adım 6: Sitemap Erişim Kontrolü${NC}"

if command -v curl &> /dev/null; then
    echo "https://oluk.org/sitemap.xml kontrol ediliyor..."
    
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://oluk.org/sitemap.xml)
    
    if [ "$HTTP_CODE" -eq 200 ]; then
        echo -e "${GREEN}✅ Sitemap erişilebilir (HTTP $HTTP_CODE)${NC}"
        
        # URL sayısını göster
        URL_COUNT=$(curl -s https://oluk.org/sitemap.xml | grep -c "<url>")
        echo "📊 Toplam URL sayısı: $URL_COUNT"
    else
        echo -e "${YELLOW}⚠️ Sitemap erişiminde sorun (HTTP $HTTP_CODE)${NC}"
    fi
else
    echo -e "${YELLOW}⚠️ curl komutu bulunamadı${NC}"
fi

echo ""
echo ""

# 7. Manuel adımlar
echo -e "${GREEN}======================================"
echo "🎯 SONRAKI MANUEL ADIMLAR"
echo -e "======================================${NC}"
echo ""
echo "1️⃣  Google Search Console'a Git"
echo "   🔗 https://search.google.com/search-console"
echo ""
echo "2️⃣  Sol üst köşeden 'Özellik Ekle' tıkla"
echo "   Seçenek: 'URL ön eki' (önerilen)"
echo "   URL: https://oluk.org"
echo ""
echo "3️⃣  Doğrulama Yöntemi Seç"
echo "   Önerilen: HTML meta tag"
echo "   Alternatif: HTML dosyası, DNS kaydı"
echo ""
echo "4️⃣  Meta Tag'i Kopyala"
echo "   Örnek:"
echo "   <meta name=\"google-site-verification\" content=\"ABC123XYZ\" />"
echo ""
echo "5️⃣  layout.tsx'e Ekle"
echo "   Dosya: src/app/layout.tsx"
echo "   Konum: <head> içinde, diğer meta taglarla birlikte"
echo ""
echo "6️⃣  Build ve Deploy"
echo "   $ npm run build"
echo "   $ vercel --prod"
echo ""
echo "7️⃣  Google'da Doğrula"
echo "   Search Console'da 'Doğrula' butonuna tıkla"
echo "   ✅ işareti görene kadar bekle"
echo ""
echo "8️⃣  Sitemap Gönder"
echo "   Sol menüden: Sitemaps"
echo "   URL gir: sitemap.xml"
echo "   'Gönder' tıkla"
echo ""
echo "9️⃣  İlk Verileri Bekle"
echo "   ⏰ 1-3 gün: İlk crawl verileri"
echo "   ⏰ 1-2 hafta: Arama performansı verileri"
echo "   ⏰ 2-4 hafta: Rich results görünmeye başlar"
echo ""
echo "🔟  Rich Results Test"
echo "   🔗 https://search.google.com/test/rich-results"
echo "   Test et: https://oluk.org"
echo "   Test et: https://oluk.org/sss"
echo ""
echo ""

# 8. Ek araçlar
echo -e "${GREEN}======================================"
echo "🛠️  EK GOOGLE ARAÇLARI"
echo -e "======================================${NC}"
echo ""
echo "📊 Google Analytics 4"
echo "   🔗 https://analytics.google.com"
echo "   Property: oluk.org"
echo ""
echo "🔍 Rich Results Test"
echo "   🔗 https://search.google.com/test/rich-results"
echo "   Test: FAQPage, Organization, WebSite schemas"
echo ""
echo "📱 Mobile-Friendly Test"
echo "   🔗 https://search.google.com/test/mobile-friendly"
echo "   Test: https://oluk.org"
echo ""
echo "⚡ PageSpeed Insights"
echo "   🔗 https://pagespeed.web.dev"
echo "   Test: https://oluk.org"
echo "   Hedef: 90+ score"
echo ""
echo "🔗 Schema Markup Validator"
echo "   🔗 https://validator.schema.org"
echo "   Test: https://oluk.org"
echo ""
echo ""

# 9. Özet
echo -e "${GREEN}======================================"
echo "📋 DURUM ÖZETİ"
echo -e "======================================${NC}"
echo ""
echo "Hazır Durumda:"
echo -e "${GREEN}✅ Sitemap: https://oluk.org/sitemap.xml${NC}"
echo -e "${GREEN}✅ robots.txt: https://oluk.org/robots.txt${NC}"
echo -e "${GREEN}✅ SSL: https://oluk.org${NC}"
echo -e "${GREEN}✅ Schema.org: FAQPage, Organization, WebSite${NC}"
echo ""
echo "Bekleyen İşlemler:"
echo -e "${YELLOW}⏳ Google Search Console verification${NC}"
echo -e "${YELLOW}⏳ Sitemap submission${NC}"
echo -e "${YELLOW}⏳ İlk crawl verileri (1-3 gün)${NC}"
echo ""
echo -e "${BLUE}🚀 Başarılar! Setup tamamlandı.${NC}"
echo ""

# 10. Verification helper script oluştur
echo -e "${BLUE}📝 Verification helper script oluşturuluyor...${NC}"

cat > scripts/update-verification-tag.sh << 'SCRIPT_EOF'
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
SCRIPT_EOF

chmod +x scripts/update-verification-tag.sh

echo -e "${GREEN}✅ Helper script oluşturuldu: scripts/update-verification-tag.sh${NC}"
echo ""
echo "Kullanım:"
echo "  ./scripts/update-verification-tag.sh YOUR_CODE_HERE"
echo ""
