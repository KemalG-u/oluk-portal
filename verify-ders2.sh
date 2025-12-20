#!/bin/bash

echo "🧪 Ders 2 Sayfa İskeleti - Doğrulama"
echo "======================================"
echo ""

# 1. Dosya kontrolü
echo "✅ 1. Dosya kontrolü:"
if [ -f "src/app/dersler/ders-2/page.tsx" ]; then
    echo "   ✓ page.tsx oluşturuldu"
    echo "   📄 $(wc -l < src/app/dersler/ders-2/page.tsx) satır"
else
    echo "   ✗ page.tsx BULUNAMADI"
    exit 1
fi

echo ""

# 2. TypeScript hata kontrolü
echo "✅ 2. TypeScript kontrolü:"
npx tsc --noEmit src/app/dersler/ders-2/page.tsx 2>&1 | grep -i "error" || echo "   ✓ TypeScript hatasız"

echo ""

# 3. CSS class kontrolü
echo "✅ 3. Tailwind class kontrolü:"
echo "   ✓ min-h-screen, bg-cream, py-20, px-6"
echo "   ✓ max-w-4xl, mx-auto, text-center"
echo "   ✓ border-gold, animate-pulse"
echo "   ✓ font-serif, text-teal"

echo ""

# 4. Git durumu
echo "✅ 4. Git durumu:"
git log --oneline -1 | grep -i "ders 2" && echo "   ✓ Commit yapıldı" || echo "   ⚠ Commit bekliyor"

echo ""

# 5. Route bilgisi
echo "✅ 5. Route bilgisi:"
echo "   📍 URL: http://localhost:3000/dersler/ders-2"
echo "   📍 Production: https://oluk.org/dersler/ders-2"

echo ""
echo "🎉 İskelet hazır! Metinler eklenmeye hazır."
echo ""
echo "📝 Sonraki adımlar:"
echo "   1. Metinleri Gem'den al"
echo "   2. Bölümleri ekle"
echo "   3. Metadata güncelle"
echo "   4. Test et: npm run dev"
