#!/bin/bash

# 🚀 OLUK Portal - Tek Tuş Deploy Script

echo "🔥 OLUK Portal Deploy Başlatılıyor..."
echo ""

# 1. Clean build
echo "🧹 Cache temizleniyor..."
rm -rf .next

# 2. Build test
echo "�� Build testi yapılıyor..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build başarısız! Hataları kontrol et."
  exit 1
fi

echo ""
echo "✅ Build başarılı!"
echo ""

# 3. Vercel deploy
echo "🚀 Vercel'e deploy ediliyor..."
vercel --prod

if [ $? -ne 0 ]; then
  echo "❌ Deploy başarısız! Vercel login'i kontrol et."
  echo "   Çözüm: vercel login"
  exit 1
fi

echo ""
echo "✅ Deploy tamamlandı!"
echo ""
echo "📋 DEPLOYMENT PROTECTION'I KAPAT:"
echo "   1. https://vercel.com/olukorgs-projects/oluk-portal/settings/deployment-protection"
echo "   2. 'Vercel Authentication' → OFF"
echo "   3. Kaydet"
echo ""
echo "🎉 Tamamdır! Site yayında."
