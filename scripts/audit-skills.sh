#!/bin/bash
# OLUK Skill Sistemi - Sürekli Audit Scripti
# Kullanım: bash scripts/audit-skills.sh
# CI/CD entegrasyonu için: GitHub Actions veya pre-commit hook

set -e

echo "=========================================="
echo "OLUK SKILL SİSTEMİ - HIZLI AUDİT"
echo "Tarih: $(date '+%d %B %Y, %H:%M')"
echo "=========================================="
echo ""

SKILLS_DIR="_SKILLS"
CRITICAL_ISSUES=0
WARNING_ISSUES=0

# 1. KİMLİK BÖLÜMÜ KONTROLÜ
echo "1️⃣  KİMLİK Bölümü Kontrolü..."
missing_kimlik=0

for file in $(find $SKILLS_DIR -type f -name "*.md" | grep -v "_INDEX" | grep -v "OLUK_KULLANIM" | grep -v "README" | grep -v "SISTEM_ANALIZ" | grep -v "BEYIN"); do
  has_kimlik=$(grep -c "## KİMLİK" "$file" 2>/dev/null || echo "0")
  has_kod=$(grep -ci "^\*\*Kod:\*\*" "$file" 2>/dev/null || echo "0")
  has_rol=$(grep -ci "^\*\*Rol:\*\*" "$file" 2>/dev/null || echo "0")
  has_dep=$(grep -ci "^\*\*Departman:\*\*" "$file" 2>/dev/null || echo "0")
  has_bagli=$(grep -ci "^\*\*Bağ" "$file" 2>/dev/null || echo "0")
  
  # Remove any leading/trailing whitespace
  has_kimlik=$(echo "$has_kimlik" | tr -d ' ')
  has_kod=$(echo "$has_kod" | tr -d ' ')
  has_rol=$(echo "$has_rol" | tr -d ' ')
  has_dep=$(echo "$has_dep" | tr -d ' ')
  has_bagli=$(echo "$has_bagli" | tr -d ' ')
  
  if [[ "$has_kimlik" == "0" ]] || [[ "$has_kod" == "0" ]] || [[ "$has_rol" == "0" ]] || [[ "$has_dep" == "0" ]] || [[ "$has_bagli" == "0" ]]; then
    echo "   ❌ KRITIK: $(basename "$file") (eksik: kimlik=$has_kimlik kod=$has_kod rol=$has_rol dep=$has_dep bağlı=$has_bagli)"
    ((missing_kimlik++))
    ((CRITICAL_ISSUES++))
  fi
done

if [[ $missing_kimlik -eq 0 ]]; then
  echo "   ✅ Tüm dosyalarda KİMLİK standart"
fi
echo ""

# 2. ORPHAN KONTROLÜ
echo "2️⃣  Orphan (Bağlantısız) Kontrolü..."
orphan_count=0

for file in $(find $SKILLS_DIR -type f -name "*.md" | grep -v "_INDEX" | grep -v "OLUK_KULLANIM" | grep -v "README" | grep -v "SISTEM_ANALIZ" | grep -v "BEYIN"); do
  bagli_line=$(grep -i "^\*\*Bağ" "$file" 2>/dev/null | head -n 1 || echo "")
  
  if [[ -z "$bagli_line" ]]; then
    echo "   ⚠️  $(basename "$file"): Bağlı satırı yok"
    ((orphan_count++))
    ((WARNING_ISSUES++))
  elif echo "$bagli_line" | grep -qE "(:\s*$|:\s*-\s*$)"; then
    echo "   ⚠️  $(basename "$file"): Bağlı satırı boş"
    ((orphan_count++))
    ((WARNING_ISSUES++))
  fi
done

if [[ $orphan_count -eq 0 ]]; then
  echo "   ✅ Orphan skill yok"
fi
echo ""

# 3. DUPLICATE KOD KONTROLÜ
echo "3️⃣  Duplicate Kod Kontrolü..."
temp_codes=/tmp/skill_codes_$$.txt
> $temp_codes

for file in $(find $SKILLS_DIR -type f -name "*.md" | grep -v "_INDEX" | grep -v "OLUK_KULLANIM" | grep -v "README" | grep -v "SISTEM_ANALIZ" | grep -v "BEYIN"); do
  kod=$(grep -i "^\*\*Kod:\*\*" "$file" | head -n 1 | sed 's/\*\*Kod:\*\*//i' | tr -d ' ' | tr -d '*')
  if [[ -n "$kod" ]]; then
    echo "$kod|$file" >> $temp_codes
  fi
done

duplicate_found=0
while IFS='|' read -r kod file; do
  count=$(grep -c "^$kod|" $temp_codes || echo 0)
  if [[ $count -gt 1 ]]; then
    echo "   ❌ KRITIK: Kod '$kod' birden fazla dosyada"
    grep "^$kod|" $temp_codes | awk -F'|' '{print "      - " $2}'
    ((duplicate_found++))
    ((CRITICAL_ISSUES++))
  fi
done < <(sort $temp_codes | uniq)

rm -f $temp_codes

if [[ $duplicate_found -eq 0 ]]; then
  echo "   ✅ Duplicate kod yok"
fi
echo ""

# 4. FORMAT KONTROLÜ
echo "4️⃣  Format Tutarlılığı..."
no_footer=0

for file in $(find $SKILLS_DIR -type f -name "*.md" | grep -v "_INDEX" | grep -v "OLUK_KULLANIM" | grep -v "README" | grep -v "SISTEM_ANALIZ" | grep -v "BEYIN"); do
  has_footer=$(grep -c "^---$" "$file" || echo "0")
  has_update=$(grep -ci "son güncelleme\|versiyon" "$file" || echo "0")
  
  # Clean whitespace
  has_footer=$(echo "$has_footer" | tr -d ' ')
  has_update=$(echo "$has_update" | tr -d ' ')
  
  if [[ "$has_footer" == "0" ]] || [[ "$has_update" == "0" ]]; then
    echo "   ⚠️  $(basename "$file"): Footer eksik"
    ((no_footer++))
    ((WARNING_ISSUES++))
  fi
done

if [[ $no_footer -eq 0 ]]; then
  echo "   ✅ Tüm dosyalarda format tutarlı"
fi
echo ""

# 5. DOSYA SAYISI
echo "5️⃣  Dosya Sayısı..."
total_skills=$(find $SKILLS_DIR -type f -name "*.md" | grep -v "_INDEX" | grep -v "OLUK_KULLANIM" | grep -v "README" | grep -v "SISTEM_ANALIZ" | grep -v "BEYIN" | wc -l)
echo "   📊 Toplam skill dosyası: $total_skills"

if [[ "$total_skills" -lt 130 ]]; then
  echo "   ⚠️  Hedef 130, mevcut $total_skills (-$((130 - total_skills)))"
  ((WARNING_ISSUES++))
elif [[ "$total_skills" -gt 130 ]]; then
  echo "   ⚠️  Hedef 130, mevcut $total_skills (+$((total_skills - 130)))"
  ((WARNING_ISSUES++))
else
  echo "   ✅ Hedef sayıda (130)"
fi
echo ""

# ÖZET
echo "=========================================="
echo "AUDİT SONUCU"
echo "=========================================="

if [[ "$CRITICAL_ISSUES" -eq 0 ]] && [[ $WARNING_ISSUES -eq 0 ]]; then
  echo "✅ SİSTEM SAĞLIKLI"
  echo "   Kritik Sorun: 0"
  echo "   Uyarı: 0"
  exit 0
elif [[ "$CRITICAL_ISSUES" -eq 0 ]]; then
  echo "⚠️  MINOR SORUNLAR VAR"
  echo "   Kritik Sorun: 0"
  echo "   Uyarı: $WARNING_ISSUES"
  exit 0
else
  echo "🔴 KRİTİK SORUNLAR VAR"
  echo "   Kritik Sorun: $CRITICAL_ISSUES"
  echo "   Uyarı: $WARNING_ISSUES"
  echo ""
  echo "Lütfen sorunları düzeltin ve tekrar çalıştırın."
  exit 1
fi
