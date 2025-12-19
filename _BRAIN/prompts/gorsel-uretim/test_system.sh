#!/bin/bash

echo "========================================"
echo "OLUK DERS 1 SİSTEM TESTİ"
echo "========================================"
echo ""

# 1. STATIK GÖRSELLER TEST
echo "📸 STATIK GÖRSELLER (7/7):"
echo ""

declare -a images=(
  "https://res.cloudinary.com/dzegofdgp/image/upload/v1766166298/oluk/ders1/infographics/ders1-7aurik-katman.png"
  "https://res.cloudinary.com/dzegofdgp/image/upload/v1766166320/oluk/ders1/infographics/ders1-12adim-sifa.png"
  "https://res.cloudinary.com/dzegofdgp/image/upload/v1766166340/oluk/ders1/seans/seans1-menzil-kapak.png"
  "https://res.cloudinary.com/dzegofdgp/image/upload/v1766167880/oluk/ders1/seans/seans-muhur-kapani.png"
  "https://res.cloudinary.com/dzegofdgp/image/upload/v1766167880/oluk/ders1/infographics/ders1-15chakra-tam-sistem.png"
  "https://res.cloudinary.com/dzegofdgp/image/upload/v1766167901/oluk/ders1/infographics/ders1-19aktivasyon-akis.png"
  "https://res.cloudinary.com/dzegofdgp/image/upload/v1766167882/oluk/ders1/infographics/ders1-felsefe-bakgec.png"
)

success=0
failed=0

for url in "${images[@]}"; do
  name=$(basename "$url" | cut -d'.' -f1)
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  if [ "$status" -eq 200 ]; then
    echo "✅ $name (HTTP $status)"
    ((success++))
  else
    echo "❌ $name (HTTP $status)"
    ((failed++))
  fi
done

echo ""
echo "Sonuç: $success başarılı, $failed başarısız"
echo ""

# 2. VİDEOLAR TEST
echo "🎬 ANİMASYON VİDEOLARI (4/5):"
echo ""

declare -a videos=(
  "https://res.cloudinary.com/dzegofdgp/video/upload/v1766168656/oluk/ders1/seans/animations/seans-nefes-4-4-4-4.mp4"
  "https://res.cloudinary.com/dzegofdgp/video/upload/v1766168670/oluk/ders1/seans/animations/seans-kalp-tohum.mp4"
  "https://res.cloudinary.com/dzegofdgp/video/upload/v1766168680/oluk/ders1/seans/animations/seans-enerji-akis-yukari.mp4"
  "https://res.cloudinary.com/dzegofdgp/video/upload/v1766168692/oluk/ders1/seans/animations/seans-arinma-mor-alev.mp4"
)

vsuccess=0
vfailed=0

for url in "${videos[@]}"; do
  name=$(basename "$url" | cut -d'.' -f1)
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  if [ "$status" -eq 200 ]; then
    echo "✅ $name (HTTP $status)"
    ((vsuccess++))
  else
    echo "❌ $name (HTTP $status)"
    ((vfailed++))
  fi
done

echo ""
echo "Sonuç: $vsuccess başarılı, $vfailed başarısız"
echo "⚠️ EKSİK: seans-altin-isik-doldurma.mp4"
echo ""

# 3. LOKAL DOSYALAR
echo "📁 LOKAL DOSYALAR:"
echo ""
ls -lh seans-*.mp4 2>/dev/null | awk '{print "✅", $9, "-", $5}' || echo "❌ Video dosyası yok"
echo ""

# 4. PYTHON SCRIPT'LER
echo "🐍 PYTHON SCRIPT'LER:"
echo ""
for script in oluk_ders1_PIL_OTOMATIK.py upload_animations.py; do
  if [ -f "$script" ]; then
    echo "✅ $script"
  else
    echo "❌ $script EKSİK"
  fi
done
echo ""

# 5. DÖKÜMANLAR
echo "📚 DÖKÜMANLAR:"
echo ""
for doc in OLUK_DERS1_MASTER_DOKUMAN.md FINAL_DURUM_RAPORU.md VIDEO_YUKLEME_TALIMATI.md; do
  if [ -f "$doc" ]; then
    lines=$(wc -l < "$doc")
    echo "✅ $doc ($lines satır)"
  else
    echo "❌ $doc EKSİK"
  fi
done
echo ""

# 6. GIT DURUMU
echo "🔧 GIT DURUMU:"
echo ""
cd /workspaces/oluk-portal
git status --short | head -20
if [ -z "$(git status --short)" ]; then
  echo "✅ Tüm değişiklikler commit edildi"
else
  echo "⚠️ Commit edilmemiş değişiklikler var"
fi
echo ""

# 7. ÖZET
echo "========================================"
echo "ÖZET"
echo "========================================"
total_success=$((success + vsuccess))
total_failed=$((failed + vfailed))
total_assets=$((success + vsuccess + 1)) # +1 eksik video
echo "✅ Başarılı: $total_success/12"
echo "❌ Başarısız: $total_failed/12"
echo "⏳ Eksik: 1/12 (seans-altin-isik-doldurma.mp4)"
echo ""
progress=$(($total_success * 100 / 12))
echo "İlerleme: ${progress}% tamamlandı"
echo "========================================"

