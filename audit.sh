#!/bin/bash

echo "=============================================="
echo "🔍 OLUK PORTAL - TAM SİSTEM TARAMASI"
echo "=============================================="

# Build kontrolü
echo ""
echo "🏗️ BUILD KONTROLÜ"
echo "-------------------------------------------"
npm run build 2>&1

if [ $? -eq 0 ]; then
  echo "✅ Build başarılı"
else
  echo "❌ BUILD BAŞARISIZ - Hataları yukarıda gör"
  exit 1
fi

# TypeScript kontrolü
echo ""
echo "🔧 TYPESCRIPT KONTROLÜ"
echo "-------------------------------------------"
npx tsc --noEmit 2>&1

# Dosya yapısı
echo ""
echo "📁 DOSYA YAPISI"
echo "-------------------------------------------"
find src/app -name "page.tsx" -type f

# İçerik dosyaları
echo ""
echo "📊 İÇERİK DOSYALARI"
echo "-------------------------------------------"
ls -la src/app/dersler/arinma/kapi/\[ders\]/ 2>/dev/null || echo "Ders klasörü kontrolü gerekli"

# Env değişkenleri
echo ""
echo "🔐 ENV DEĞİŞKENLERİ"
echo "-------------------------------------------"
if [ -f ".env.local" ]; then
  echo "✅ .env.local mevcut"
  grep -o "^[A-Z_]*=" .env.local | tr -d '='
else
  echo "⚠️ .env.local yok"
fi

echo ""
echo "=============================================="
echo "TARAMA TAMAMLANDI"
echo "=============================================="
