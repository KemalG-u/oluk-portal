# Claude Desktop MCP Config Temizleme ve Yeniden Kurulum
# Windows PowerShell'de çalıştırın

Write-Host ""
Write-Host "🔧 CLAUDE DESKTOP MCP CONFIG TEMİZLEME" -ForegroundColor Cyan
Write-Host "════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""

# 1. Claude Desktop'ın kapalı olduğunu kontrol et
$claudeProcess = Get-Process -Name "Claude" -ErrorAction SilentlyContinue
if ($claudeProcess) {
    Write-Host "⚠️ Claude Desktop çalışıyor! Kapatılıyor..." -ForegroundColor Yellow
    Stop-Process -Name "Claude" -Force
    Start-Sleep -Seconds 2
    Write-Host "✅ Claude Desktop kapatıldı" -ForegroundColor Green
} else {
    Write-Host "✅ Claude Desktop zaten kapalı" -ForegroundColor Green
}

Write-Host ""

# 2. Config path
$ConfigPath = "$env:APPDATA\Claude\claude_desktop_config.json"
Write-Host "📁 Config: $ConfigPath" -ForegroundColor Yellow

# 3. Mevcut config'i yedekle
if (Test-Path $ConfigPath) {
    $BackupPath = "$env:APPDATA\Claude\claude_desktop_config.backup-$(Get-Date -Format 'yyyyMMdd-HHmmss').json"
    Copy-Item $ConfigPath $BackupPath
    Write-Host "💾 Yedek oluşturuldu: $BackupPath" -ForegroundColor Green
}

Write-Host ""
Write-Host "════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""
Write-Host "🎯 HANGİ ÇÖZÜMÜ DENEYELİM?" -ForegroundColor Cyan
Write-Host ""
Write-Host "1️⃣  MCP Server'ı KALDIR (OpenMemory'siz çalıştır)" -ForegroundColor White
Write-Host "2️⃣  MCP Config'i YENİLE (API key olmadan)" -ForegroundColor White
Write-Host "3️⃣  MCP Config'i YENİLE (Yeni API key ile)" -ForegroundColor White
Write-Host "4️⃣  TEMİZ KURULUM (Config sil, yeniden başlat)" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Seçim (1-4)"

switch ($choice) {
    "1" {
        # MCP Server'ı kaldır
        Write-Host ""
        Write-Host "🗑️ OpenMemory MCP Server kaldırılıyor..." -ForegroundColor Yellow
        
        $config = @{}
        if (Test-Path $ConfigPath) {
            $config = Get-Content $ConfigPath | ConvertFrom-Json -AsHashtable
        }
        
        if ($config.mcpServers -and $config.mcpServers.openmemory) {
            $config.mcpServers.Remove("openmemory")
        }
        
        # Eğer mcpServers boşsa, tamamen kaldır
        if ($config.mcpServers.Count -eq 0) {
            $config.Remove("mcpServers")
        }
        
        $config | ConvertTo-Json -Depth 10 | Set-Content $ConfigPath -Encoding UTF8
        Write-Host "✅ OpenMemory kaldırıldı" -ForegroundColor Green
    }
    
    "2" {
        # API key olmadan yenile
        Write-Host ""
        Write-Host "🔄 Config yenileniyor (API key YOK)..." -ForegroundColor Yellow
        
        $config = @{
            mcpServers = @{
                openmemory = @{
                    command = "npx"
                    args = @("-y", "@openmemory/mcp-server")
                }
            }
        }
        
        $config | ConvertTo-Json -Depth 10 | Set-Content $ConfigPath -Encoding UTF8
        Write-Host "✅ Config yenilendi (API key olmadan)" -ForegroundColor Green
        Write-Host "⚠️  OpenMemory sınırlı modda çalışacak" -ForegroundColor Yellow
    }
    
    "3" {
        # Yeni API key ile
        Write-Host ""
        $apiKey = Read-Host "OpenMemory API Key'i gir (om_...)"
        
        if ($apiKey -match "^om_") {
            Write-Host "🔄 Config yenileniyor (Yeni API key)..." -ForegroundColor Yellow
            
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
            }
            
            $config | ConvertTo-Json -Depth 10 | Set-Content $ConfigPath -Encoding UTF8
            Write-Host "✅ Config yenilendi (Yeni API key ile)" -ForegroundColor Green
        } else {
            Write-Host "❌ Geçersiz API key formatı!" -ForegroundColor Red
        }
    }
    
    "4" {
        # Temiz kurulum
        Write-Host ""
        Write-Host "🧹 Temiz kurulum yapılıyor..." -ForegroundColor Yellow
        
        if (Test-Path $ConfigPath) {
            Remove-Item $ConfigPath -Force
            Write-Host "✅ Eski config silindi" -ForegroundColor Green
        }
        
        # Boş config oluştur
        @{} | ConvertTo-Json | Set-Content $ConfigPath -Encoding UTF8
        Write-Host "✅ Temiz config oluşturuldu" -ForegroundColor Green
    }
    
    default {
        Write-Host "❌ Geçersiz seçim!" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""
Write-Host "📝 YENİ CONFIG:" -ForegroundColor Cyan
Get-Content $ConfigPath

Write-Host ""
Write-Host "════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""
Write-Host "✅ İŞLEM TAMAMLANDI!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 SONRAKI ADIMLAR:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Claude Desktop'ı BAŞLAT" -ForegroundColor White
Write-Host "2. Yeni bir sohbet aç" -ForegroundColor White
Write-Host "3. Hata mesajı gelirse:" -ForegroundColor White
Write-Host "   → Ekran görüntüsü al" -ForegroundColor Gray
Write-Host "   → Log dosyasını kontrol et (debug-claude.ps1)" -ForegroundColor Gray
Write-Host ""
Write-Host "════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""
