#!/bin/bash
# OLUK Mobil Test Script

echo "📱 OLUK MOBİL TEST BAŞLATILIYOR..."
echo ""

# Chrome DevTools talimatları
cat << 'EOF'

╔══════════════════════════════════════════════════════════════╗
║              OLUK MOBİL TEST TALİMATI                        ║
╚══════════════════════════════════════════════════════════════╝

1. CHROME'DA AÇ:
   https://oluk-portal.vercel.app/sirdas

2. F12 (DevTools aç)

3. Toggle Device Toolbar (Ctrl+Shift+M)

4. TEST CIHAZLARI:
   ├─ iPhone SE (375 x 667)
   ├─ iPhone 12 (390 x 844)
   └─ Pixel 5 (393 x 851)

5. TEST KRİTERLERİ:

   ✓ SCROLL:
     • Smooth scroll var mı?
     • Overscroll bounce var mı?
     • Chat list'te scroll sorunlu mu?

   ✓ TOUCH TARGETS:
     • Butonlar en az 44x44px mi?
     • Mood selector butonları tıklanabilir mi?
     • Send button yeterince büyük mü?

   ✓ FONT BOYUTLARI:
     • Body text minimum 16px mi?
     • Okunabilir mi?
     • Zoom gerekiyor mu?

   ✓ KLAVYE:
     • Input açılınca görünür mü?
     • Keyboard overlay sorun mu?
     • Auto-scroll çalışıyor mu?

   ✓ LANDSCAPE:
     • Yatay modda UI bozuluyor mu?
     • Butonlar erişilebilir mi?

6. SORUNLARI KAYDET:
   • Screenshot çek
   • Console error'larını not et
   • Network tab'ı kontrol et

╔══════════════════════════════════════════════════════════════╗
║           SORUN BULURSAN BİLDİR!                             ║
╚══════════════════════════════════════════════════════════════╝

EOF

echo ""
echo "Test URL'leri:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ https://oluk-portal.vercel.app/"
echo "✅ https://oluk-portal.vercel.app/sirdas"
echo "✅ https://oluk-portal.vercel.app/nur-kocu"
echo ""
echo "🔧 CSS Fix (gerekirse):"
echo "   src/app/globals.css → .mobile-scroll-fix class'ını ekle"
echo ""
