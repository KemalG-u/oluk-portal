# OpenMemory Otomatik Kurulum - Windows PowerShell
# Kullanım: Bu dosyayı Windows'ta PowerShell'de çalıştır

Write-Host "🧠 OpenMemory Otomatik Kurulum Başlıyor..." -ForegroundColor Cyan
Write-Host ""

# Node.js kontrolü
Write-Host "📦 Node.js kontrol ediliyor..." -ForegroundColor Yellow
$nodeVersion = $null
try {
    $nodeVersion = node --version 2>$null
} catch {}

if (-not $nodeVersion) {
    Write-Host "❌ Node.js bulunamadı!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Node.js kurulumu gerekli:" -ForegroundColor Yellow
    Write-Host "1. https://nodejs.org adresini aç" -ForegroundColor White
    Write-Host "2. 'Download Node.js (LTS)' butonuna tıkla" -ForegroundColor White
    Write-Host "3. İndirilen .msi dosyasını çalıştır" -ForegroundColor White
    Write-Host "4. Kurulum bitince PowerShell'i kapat ve tekrar aç" -ForegroundColor White
    Write-Host "5. Bu scripti tekrar çalıştır" -ForegroundColor White
    Write-Host ""
    Write-Host "🌐 Şimdi tarayıcıda Node.js sitesini açıyorum..." -ForegroundColor Green
    Start-Process "https://nodejs.org"
    Read-Host "Node.js kurduktan sonra Enter'a bas"
    exit
}

Write-Host "✅ Node.js bulundu: $nodeVersion" -ForegroundColor Green

# API Key al
Write-Host ""
Write-Host "🔑 API Key gerekli..." -ForegroundColor Yellow
Write-Host ""
Write-Host "1. https://app.openmemory.dev adresini açıyorum..." -ForegroundColor White
Start-Sleep -Seconds 2
Start-Process "https://app.openmemory.dev"
Write-Host ""
Write-Host "2. GitHub ile giriş yap" -ForegroundColor White
Write-Host "3. Dashboard'da 'API Keys' sekmesine git" -ForegroundColor White
Write-Host "4. 'Create API Key' tıkla" -ForegroundColor White
Write-Host "5. Oluşan key'i kopyala (om_abc123... gibi)" -ForegroundColor White
Write-Host ""

$apiKey = Read-Host "API Key'ini buraya yapıştır"

if ([string]::IsNullOrWhiteSpace($apiKey)) {
    Write-Host "❌ API Key boş olamaz!" -ForegroundColor Red
    exit
}

if (-not $apiKey.StartsWith("om_")) {
    Write-Host "⚠️ API Key 'om_' ile başlamalı. Doğru key'i yapıştırdığından emin ol." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "✅ API Key alındı: $($apiKey.Substring(0, [Math]::Min(10, $apiKey.Length)))..." -ForegroundColor Green

# OpenMemory kurulum
Write-Host ""
Write-Host "📥 OpenMemory kurulumu başlıyor..." -ForegroundColor Yellow
Write-Host "   (Bu 30-60 saniye sürebilir, lütfen bekle...)" -ForegroundColor Gray
Write-Host ""

try {
    $env:OPENMEMORY_API_KEY = $apiKey
    npx @openmemory/install --client claude --env OPENMEMORY_API_KEY=$apiKey
    
    Write-Host ""
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
    Write-Host "✅ KURULUM BAŞARILI!" -ForegroundColor Green
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
    Write-Host ""
    Write-Host "📝 Şimdi yapman gerekenler:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1. Claude Desktop'ı KAPAT (tamamen kapat, taskbar'dan da çık)" -ForegroundColor White
    Write-Host "2. 30 saniye BEKLE" -ForegroundColor White
    Write-Host "3. Claude Desktop'ı TEKRAR AÇ" -ForegroundColor White
    Write-Host ""
    Write-Host "🧪 Test:" -ForegroundColor Cyan
    Write-Host '   → "OLUK projesi için çalışıyorum, bunu hatırla"' -ForegroundColor White
    Write-Host '   → Yeni sohbet aç (+)' -ForegroundColor White
    Write-Host '   → "Hangi proje için çalışıyordum?"' -ForegroundColor White
    Write-Host ""
    Write-Host "   OLUK derse → ÇALIŞIYOR! 🎉" -ForegroundColor Green
    Write-Host ""
    
} catch {
    Write-Host ""
    Write-Host "❌ HATA OLUŞTU!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Hata mesajı:" -ForegroundColor Yellow
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host ""
    Write-Host "Çözüm önerileri:" -ForegroundColor Yellow
    Write-Host "1. PowerShell'i 'Yönetici olarak çalıştır' ile aç" -ForegroundColor White
    Write-Host "2. İnternet bağlantını kontrol et" -ForegroundColor White
    Write-Host "3. API Key'in doğru olduğundan emin ol" -ForegroundColor White
    Write-Host "4. Bu scripti tekrar çalıştır" -ForegroundColor White
    Write-Host ""
}

Write-Host ""
Read-Host "Kapat için Enter'a bas"
