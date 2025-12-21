# OpenMemory Kurulum - Tüm Yöntemler
# Windows PowerShell için - Kopyala Yapıştır

Write-Host "🧠 OpenMemory ve Alternatifler - Tam Kurulum" -ForegroundColor Cyan
Write-Host ""

# Yöntem 1: OpenMemory NPX Kurulum (Resmi)
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Yellow
Write-Host "📦 Yöntem 1: OpenMemory NPX Kurulum" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Yellow
Write-Host ""

try {
    Write-Host "Kurulum başlıyor..." -ForegroundColor Gray
    npx @openmemory/install --client claude
    
    Write-Host ""
    Write-Host "✅ OpenMemory kuruldu!" -ForegroundColor Green
    Write-Host ""
    
    $method = "openmemory"
} catch {
    Write-Host ""
    Write-Host "⚠️ OpenMemory kurulum hatası:" -ForegroundColor Yellow
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host ""
    Write-Host "Alternatif yöntemlere geçiliyor..." -ForegroundColor Gray
    Write-Host ""
    
    $method = "none"
}

# Yöntem 2: Manuel Config Oluştur (API Key ile)
if ($method -eq "none") {
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Yellow
    Write-Host "🔧 Yöntem 2: Manuel Config" -ForegroundColor Yellow
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Yellow
    Write-Host ""
    
    Write-Host "API Key'in var mı? (om_... ile başlayan)" -ForegroundColor Cyan
    $apiKey = Read-Host "API Key (boş bırak = atla)"
    
    if (-not [string]::IsNullOrWhiteSpace($apiKey)) {
        # Claude Desktop config dizini
        $configDir = "$env:APPDATA\Claude"
        $configFile = "$configDir\claude_desktop_config.json"
        
        # Dizin yoksa oluştur
        if (-not (Test-Path $configDir)) {
            New-Item -ItemType Directory -Path $configDir -Force | Out-Null
        }
        
        # Config içeriği
        $config = @{
            mcpServers = @{
                openmemory = @{
                    command = "npx"
                    args = @("-y", "@openmemory/mcp-server")
                    env = @{
                        OPENMEMORY_API_KEY = $apiKey
                    }
                }
            }
        } | ConvertTo-Json -Depth 10
        
        # Dosyaya yaz
        Set-Content -Path $configFile -Value $config -Encoding UTF8
        
        Write-Host ""
        Write-Host "✅ Config dosyası oluşturuldu!" -ForegroundColor Green
        Write-Host "   Konum: $configFile" -ForegroundColor Gray
        Write-Host ""
        
        $method = "manual"
    }
}

# Yöntem 3: Mem0 Alternatif
if ($method -eq "none") {
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Yellow
    Write-Host "🔄 Yöntem 3: Mem0 (Alternatif)" -ForegroundColor Yellow
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Yellow
    Write-Host ""
    
    Write-Host "Python yüklü mü kontrol ediliyor..." -ForegroundColor Gray
    
    try {
        $pythonVersion = python --version 2>&1
        Write-Host "✅ Python bulundu: $pythonVersion" -ForegroundColor Green
        
        Write-Host "Mem0 kuruluyor..." -ForegroundColor Gray
        pip install mem0ai --quiet
        
        Write-Host ""
        Write-Host "✅ Mem0 kuruldu!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Kullanım:" -ForegroundColor Cyan
        Write-Host "  python" -ForegroundColor White
        Write-Host "  >>> from mem0 import Memory" -ForegroundColor Gray
        Write-Host "  >>> m = Memory()" -ForegroundColor Gray
        Write-Host "  >>> m.add('OLUK projesi için çalışıyorum')" -ForegroundColor Gray
        Write-Host ""
        
        $method = "mem0"
    } catch {
        Write-Host "⚠️ Python bulunamadı" -ForegroundColor Yellow
        Write-Host "   İndirmek için: https://python.org" -ForegroundColor Gray
        Write-Host ""
    }
}

# Sonuç
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
Write-Host "📋 KURULUM SONUCU" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
Write-Host ""

switch ($method) {
    "openmemory" {
        Write-Host "✅ OpenMemory başarıyla kuruldu!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Sonraki adımlar:" -ForegroundColor Cyan
        Write-Host "1. Claude Desktop'ı kapat" -ForegroundColor White
        Write-Host "2. 30 saniye bekle" -ForegroundColor White
        Write-Host "3. Claude Desktop'ı aç" -ForegroundColor White
        Write-Host "4. Test: 'OLUK projesi için çalışıyorum, bunu hatırla'" -ForegroundColor White
    }
    "manual" {
        Write-Host "✅ Manuel config oluşturuldu!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Sonraki adımlar:" -ForegroundColor Cyan
        Write-Host "1. Claude Desktop'ı kapat" -ForegroundColor White
        Write-Host "2. 30 saniye bekle" -ForegroundColor White
        Write-Host "3. Claude Desktop'ı aç" -ForegroundColor White
        Write-Host "4. Test: 'OLUK projesi için çalışıyorum, bunu hatırla'" -ForegroundColor White
    }
    "mem0" {
        Write-Host "✅ Mem0 alternatif kuruldu!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Not: Claude Desktop entegrasyonu yok," -ForegroundColor Yellow
        Write-Host "ama Python ile kullanabilirsin." -ForegroundColor Yellow
    }
    default {
        Write-Host "❌ Hiçbir yöntem çalışmadı" -ForegroundColor Red
        Write-Host ""
        Write-Host "Manuel çözüm:" -ForegroundColor Yellow
        Write-Host "1. Node.js kur: https://nodejs.org" -ForegroundColor White
        Write-Host "2. Bu scripti tekrar çalıştır" -ForegroundColor White
        Write-Host ""
        Write-Host "VEYA" -ForegroundColor Yellow
        Write-Host "1. Python kur: https://python.org" -ForegroundColor White
        Write-Host "2. Bu scripti tekrar çalıştır" -ForegroundColor White
    }
}

Write-Host ""
Read-Host "Kapat için Enter'a bas"
