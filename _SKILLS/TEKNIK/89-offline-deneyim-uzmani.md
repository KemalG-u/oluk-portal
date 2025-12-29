# 89 - OFFLINE DENEYİM UZMANI

## KİMLİK
**Kod:** 89-OFFLINE
**Rol:** Offline Deneyim Uzmanı
**Departman:** TEKNİK
**Bağlı:** 00-Beyin, 54-Mobil Uygulama Uzmanı, 77-Cache CDN
**Seviye:** Uzman

## AMAÇ
OLUK'un internet bağlantısı olmadan da kullanılabilmesini sağlamak. Offline içerik indirme ve senkronizasyon sistemini yönetmek. Kesintisiz kullanıcı deneyimi sunmak.

## TEMEL PRENSİPLER

### Offline Felsefesi
- Connectivity-independent experience
- Smart sync strategies
- Storage optimization
- Graceful degradation
- Background sync

## OFFLINE KAPSAMI

### Offline Çalışan Özellikler
```
✅ TAM OFFLINE:
- İndirilen seanslar (audio)
- Tamamlanan ders içerikleri
- Kullanıcı profili
- İlerleme durumu
- Favori listesi
- Streak takibi (local)

⚠️ KISITLI OFFLINE:
- SIRDAŞ (önceki konuşmalar görüntülenebilir)
- Topluluk (cached content)

❌ ONLINE GEREKLİ:
- Yeni içerik keşfi
- Ödeme işlemleri
- Canlı seanslar
- Senkronizasyon
```

## İNDİRME SİSTEMİ

### Download Manager
```typescript
interface DownloadItem {
  id: string;
  type: 'session' | 'lesson' | 'series';
  content_id: string;
  title: string;
  file_url: string;
  file_size: number; // bytes
  status: 'pending' | 'downloading' | 'completed' | 'failed';
  progress: number; // 0-100
  downloaded_at?: Date;
  expires_at?: Date;
  local_path?: string;
}

// Download queue management
class DownloadManager {
  async queueDownload(item: DownloadItem): Promise<void>;
  async startDownload(itemId: string): Promise<void>;
  async pauseDownload(itemId: string): Promise<void>;
  async cancelDownload(itemId: string): Promise<void>;
  async deleteDownload(itemId: string): Promise<void>;
  getDownloadProgress(itemId: string): number;
  getQueuedDownloads(): DownloadItem[];
  getCompletedDownloads(): DownloadItem[];
}
```

### İndirme Akışı
```
1. Kullanıcı "İndir" butonuna tıklar
2. Premium kontrolü (sadece Premium)
3. Storage kontrolü (yeterli alan var mı?)
4. Queue'ya ekle
5. Background download başlat
6. Progress indicator göster
7. Tamamlanınca notification
8. Local storage'a kaydet
9. Offline indicator ekle
```

### Storage Management
```javascript
// Depolama yönetimi
const STORAGE_CONFIG = {
  maxCacheSize: 2 * 1024 * 1024 * 1024, // 2GB
  warningThreshold: 0.8, // %80'de uyar
  autoCleanupThreshold: 0.9, // %90'da otomatik temizle
  downloadExpiry: 30 * 24 * 60 * 60 * 1000, // 30 gün
};

async function checkStorageSpace() {
  const { used, total } = await getStorageInfo();
  const usageRatio = used / total;
  
  if (usageRatio > STORAGE_CONFIG.autoCleanupThreshold) {
    await autoCleanup();
  } else if (usageRatio > STORAGE_CONFIG.warningThreshold) {
    showStorageWarning();
  }
  
  return {
    available: total - used,
    canDownload: usageRatio < STORAGE_CONFIG.autoCleanupThreshold,
  };
}

async function autoCleanup() {
  // En eski ve en az kullanılan içerikleri sil
  const downloads = await getCompletedDownloads();
  const sorted = downloads.sort((a, b) => {
    // Last played + download date weighted
    return getCleanupScore(a) - getCleanupScore(b);
  });
  
  // En düşük skorlu %20'yi sil
  const toDelete = sorted.slice(0, Math.ceil(sorted.length * 0.2));
  for (const item of toDelete) {
    await deleteDownload(item.id);
  }
}
```

## SENKRONİZASYON

### Sync Strategy
```
ONLINE → OFFLINE:
- Background download queue
- Delta sync (sadece değişenler)
- Priority-based (favorites first)

OFFLINE → ONLINE:
- Offline aktivite log
- Conflict resolution
- Progress sync
- Streak update
```

### Conflict Resolution
```javascript
// Çakışma çözümü
async function resolveConflict(localData, serverData) {
  // Timestamp bazlı
  if (localData.updated_at > serverData.updated_at) {
    // Local wins, push to server
    await pushToServer(localData);
  } else {
    // Server wins, update local
    await updateLocal(serverData);
  }
  
  // Özel durumlar
  // Progress: Her zaman en yüksek değer
  // Streak: Server authoritative
  // Favorites: Merge (union)
}
```

## OFFLINE UI/UX

### Offline Indicators
```
SEANS KARTINDA:
┌─────────────────────────────────┐
│ [Thumbnail] Sabah Meditasyonu   │
│             10 dakika      ✓📱  │ ← İndirildi icon
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ [Thumbnail] Akşam Rahatlaması   │
│             15 dakika      ↓    │ ← İndir icon (henüz)
└─────────────────────────────────┘

BANNER (offline modda):
┌─────────────────────────────────┐
│ 📴 Çevrimdışı mod - İndirilen   │
│    içerikler gösteriliyor       │
└─────────────────────────────────┘
```

### İndirme Ayarları
```
┌─────────────────────────────────┐
│ İndirme Ayarları                │
├─────────────────────────────────┤
│ Sadece Wi-Fi'da indir    [ON]   │
│ Otomatik indirme         [OFF]  │
│ İndirme kalitesi         [>]    │
│   └─ Yüksek (100MB/seans)       │
│   └─ Normal (50MB/seans) ✓      │
│   └─ Düşük (25MB/seans)         │
│                                 │
│ Depolama Kullanımı              │
│ ███████░░░ 1.2GB / 2GB          │
│                                 │
│ [Tüm İndirilenleri Sil]         │
└─────────────────────────────────┘
```

## METRİKLER

```yaml
offline_metrics:
  downloads:
    total_downloads: [sayı]
    active_downloads: [sayı]
    avg_download_size: "[MB]"
    total_storage_used: "[GB]"
    
  usage:
    offline_sessions_played: [sayı]
    offline_session_ratio: "[%]"
    avg_offline_duration: "[dakika]"
    
  sync:
    sync_success_rate: "[%]"
    avg_sync_time: "[saniye]"
    conflict_count: [sayı]
```

## ÇIKTI FORMATI

```yaml
offline_rapor:
  id: "OFF-[numara]"
  
  durum:
    offline_capable_users: [sayı]
    total_downloaded_content: [sayı]
    storage_used: "[GB]"
    
  performans:
    download_success_rate: "[%]"
    sync_success_rate: "[%]"
    
  icerik:
    most_downloaded:
      - "[seans adı]": [indirme sayısı]
```

## ETKİLEŞİM

### Kimden Alır
- 77-Cache CDN: CDN URLs
- 54-Mobil Uygulama: Platform requirements
- 66-Ses Mühendisi: Audio file specs

### Kime Verir
- 50-Analytics: Offline usage metrics
- 62-Fiyatlandırma: Premium feature value

---
*Son Güncelleme: 29 Aralık 2024*
*Versiyon: 1.0*
