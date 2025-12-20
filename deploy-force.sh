#!/bin/bash

# OLUK Force Deploy Script
# Vercel CLI sorunlarını çözer

set -e

echo "🚀 OLUK Force Deploy Başlatılıyor..."

# 1. Build cache temizle
echo "🧹 Build cache temizleniyor..."
rm -rf .next

# 2. Fresh build
echo "🔨 Fresh build yapılıyor..."
npm run build

# 3. Git commit (eğer değişiklik varsa)
if [[ -n $(git status -s) ]]; then
  echo "📝 Değişiklikler commit ediliyor..."
  git add -A
  git commit -m "chore: Force deploy $(date +%Y%m%d_%H%M%S)"
  git push origin main
  echo "✅ Git push tamamlandı"
else
  echo "ℹ️ Değişiklik yok, force commit yapılıyor..."
  git commit --allow-empty -m "chore: Force redeploy $(date +%Y%m%d_%H%M%S)"
  git push origin main
  echo "✅ Force push tamamlandı"
fi

# 4. Vercel force deploy (timeout ile)
echo "☁️ Vercel force deploy yapılıyor..."
timeout 180 vercel --force --prod --yes || {
  echo "⚠️ Vercel CLI timeout! Ama GitHub push yapıldı, Vercel otomatik deploy edecek."
  echo "📍 Kontrol et: https://vercel.com/olukorgs-projects/oluk-portal/deployments"
  exit 0
}

echo ""
echo "✅ DEPLOYMENT TAMAMLANDI!"
echo "🌐 Site: https://oluk.org"
echo "📊 Dashboard: https://vercel.com/olukorgs-projects/oluk-portal"
echo ""
