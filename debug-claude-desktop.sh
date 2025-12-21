#!/bin/bash

# Claude Desktop Hata Debug Script
# Windows'ta PowerShell ile çalıştırılacak

cat << 'EOFPS1' > /tmp/debug-claude.ps1
Write-Host "🔍 CLAUDE DESKTOP HATA DEBUG" -ForegroundColor Cyan
Write-Host "════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""

# 1. Log dosyasının yeri
$LogPath = "$env:APPDATA\Claude\logs"
Write-Host "📁 Log Klasörü: $LogPath" -ForegroundColor Yellow

if (Test-Path $LogPath) {
    Write-Host "✅ Log klasörü bulundu" -ForegroundColor Green
    Write-Host ""
    
    # En son log dosyasını bul
    $LatestLog = Get-ChildItem -Path $LogPath -Filter "*.log" | 
                 Sort-Object LastWriteTime -Descending | 
                 Select-Object -First 1
    
    if ($LatestLog) {
        Write-Host "📄 Son log dosyası: $($LatestLog.Name)" -ForegroundColor Yellow
        Write-Host "📅 Tarih: $($LatestLog.LastWriteTime)" -ForegroundColor Gray
        Write-Host ""
        Write-Host "🔴 SON HATALAR (son 50 satır):" -ForegroundColor Red
        Write-Host "────────────────────────────────────────" -ForegroundColor Gray
        Get-Content $LatestLog.FullName -Tail 50 | Where-Object { 
            $_ -match "error|Error|ERROR|exception|Exception|failed|Failed|FAILED" 
        }
    } else {
        Write-Host "⚠️ Log dosyası bulunamadı" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Log klasörü bulunamadı: $LogPath" -ForegroundColor Red
}

Write-Host ""
Write-Host "════════════════════════════════════════" -ForegroundColor Gray

# 2. Config dosyasını kontrol et
$ConfigPath = "$env:APPDATA\Claude\claude_desktop_config.json"
Write-Host "📁 Config: $ConfigPath" -ForegroundColor Yellow

if (Test-Path $ConfigPath) {
    Write-Host "✅ Config dosyası bulundu" -ForegroundColor Green
    Write-Host ""
    Write-Host "📝 Config İçeriği:" -ForegroundColor Yellow
    Write-Host "────────────────────────────────────────" -ForegroundColor Gray
    Get-Content $ConfigPath | ConvertFrom-Json | ConvertTo-Json -Depth 10
} else {
    Write-Host "❌ Config dosyası bulunamadı" -ForegroundColor Red
}

Write-Host ""
Write-Host "════════════════════════════════════════" -ForegroundColor Gray

# 3. MCP Server test
Write-Host "🧪 MCP SERVER TEST" -ForegroundColor Cyan
Write-Host ""

# OpenMemory API key kontrolü
if ($env:OPENMEMORY_API_KEY) {
    Write-Host "✅ OPENMEMORY_API_KEY environment variable var" -ForegroundColor Green
    Write-Host "   Key başlangıcı: $($env:OPENMEMORY_API_KEY.Substring(0, [Math]::Min(10, $env:OPENMEMORY_API_KEY.Length)))..." -ForegroundColor Gray
} else {
    Write-Host "⚠️ OPENMEMORY_API_KEY environment variable YOK" -ForegroundColor Yellow
}

Write-Host ""

# npx komutu test
Write-Host "🔧 npx komutu test ediliyor..." -ForegroundColor Yellow
try {
    $npxVersion = npx --version 2>&1
    Write-Host "✅ npx version: $npxVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npx bulunamadı! Node.js kurulu mu?" -ForegroundColor Red
}

Write-Host ""
Write-Host "════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""
Write-Host "💡 ÇÖZÜM ÖNERİLERİ:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Claude Desktop'ı TAMAMEN KAPAT (Tray icon'dan çık)" -ForegroundColor White
Write-Host "2. Config dosyasını kontrol et (yukarıdaki çıktıya bak)" -ForegroundColor White
Write-Host "3. OpenMemory API key'i kontrol et" -ForegroundColor White
Write-Host "4. Node.js ve npx kurulu olduğundan emin ol" -ForegroundColor White
Write-Host "5. Claude Desktop'ı tekrar başlat" -ForegroundColor White
Write-Host ""
Write-Host "════════════════════════════════════════" -ForegroundColor Gray

EOFPS1

echo ""
echo "════════════════════════════════════════════════════════════"
echo "🎯 WINDOWS'TA ÇALIŞTIR:"
echo "════════════════════════════════════════════════════════════"
echo ""
echo "PowerShell'i aç ve şunu çalıştır:"
echo ""
echo "powershell -ExecutionPolicy Bypass -File debug-claude.ps1"
echo ""
echo "Veya script içeriğini kopyala-yapıştır"
echo ""
echo "════════════════════════════════════════════════════════════"
echo ""

cat /tmp/debug-claude.ps1
