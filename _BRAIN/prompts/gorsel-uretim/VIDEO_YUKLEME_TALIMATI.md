# Video Yükleme Talimatları

## Gerekli 5 Video Dosyası

Aşağıdaki 5 animasyon videosunu yükle:

1. **seans-nefes-4-4-4-4.mp4** - 4-4-4-4 solunum animasyonu
2. **seans-kalp-tohum.mp4** - Kalp tohumunun atması
3. **seans-enerji-akis-yukari.mp4** - Yukarı akan enerji
4. **seans-arinma-mor-alev.mp4** - Mor ateş arınma
5. **seans-altin-isik-doldurma.mp4** - Altın ışık dolma

## Yükleme Yöntemi

### Seçenek 1: GitHub CLI (önerilen)
```bash
# Yerel bilgisayarından
cd "D:\projelerim\İnternetten İndirdiklerim"
gh codespace cp seans-*.mp4 remote:/workspaces/oluk-portal/_BRAIN/prompts/gorsel-uretim/
```

### Seçenek 2: VS Code Sürükle-Bırak
1. VS Code dosya gezgininde `_BRAIN/prompts/gorsel-uretim/` klasörünü aç
2. Yerel bilgisayarından 5 MP4 dosyasını sürükle-bırak yap

### Seçenek 3: VS Code Upload
1. VS Code'da `_BRAIN/prompts/gorsel-uretim/` klasörüne sağ tıkla
2. "Upload..." seç
3. 5 MP4 dosyasını seç ve yükle

## Yükleme Sonrası

Dosyalar yüklendiğinde otomatik olarak:
```bash
cd /workspaces/oluk-portal/_BRAIN/prompts/gorsel-uretim
python3 upload_animations.py
```

Bu script:
- 5 videoyu Cloudinary'ye yükleyecek
- MP4 (H.264) + WebM (VP9) formatlarında oluşturacak
- `oluk/ders1/seans/animations/` klasörüne yerleştirecek

## Durum

**Statik Görseller:** ✅ 7/7 Tamamlandı
- ders1-7aurik-katman
- ders1-12adim-sifa
- seans1-menzil-kapak
- seans-muhur-kapani
- ders1-15chakra-tam-sistem
- ders1-19aktivasyon-akis
- ders1-felsefe-bakgec

**Animasyonlar:** ⏳ 0/5 Bekliyor (videolar yüklenince)
