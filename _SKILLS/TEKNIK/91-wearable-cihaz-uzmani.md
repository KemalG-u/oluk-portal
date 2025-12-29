# 91 - WEARABLE CİHAZ UZMANI

## KİMLİK
**Kod:** 91-WEARABLES
**Rol:** Wearable Cihaz Uzmanı
**Departman:** TEKNİK
**Bağlı:** 00-Beyin, 54-Mobil Uygulama Uzmanı, 90-Widget Uzmanı
**Seviye:** Uzman

## AMAÇ
OLUK için Apple Watch ve diğer wearable cihaz entegrasyonlarını geliştirmek. Bilek üzerinden meditasyon deneyimi sunmak. Health kit entegrasyonu sağlamak.

## PLATFORM KAPSAMI

### Desteklenen Cihazlar
```
PHASE 1 (Öncelikli):
- Apple Watch (watchOS 9+)

PHASE 2 (Gelecek):
- Wear OS (Google)
- Samsung Galaxy Watch

PHASE 3 (Potansiyel):
- Fitbit
- Garmin
```

## APPLE WATCH UYGULAMA

### Özellikler
```
✅ MVP ÖZELLİKLER:
- Hızlı seans başlatma (5dk, 10dk)
- Nefes egzersizi (haptic guided)
- Streak görüntüleme
- Mindful minutes sync

🔜 GELECEK:
- Offline audio playback
- Complications
- Heart rate monitoring
- Sleep tracking integration
```

### Watch App UI
```
ANA EKRAN:
┌─────────────────┐
│      OLUK       │
│                 │
│    7 gün 🔥     │
│                 │
│ [▶ Hızlı Seans] │
│ [🫁 Nefes]      │
│ [📊 İlerleme]   │
└─────────────────┘

NEFES EGZERSİZİ:
┌─────────────────┐
│                 │
│    Nefes Al     │
│       ○         │ ← Expanding circle
│     4 sn        │
│                 │
│   ● ● ● ○ ○     │ ← Progress
└─────────────────┘

SEANS OYNATMA:
┌─────────────────┐
│  Sabah          │
│  Meditasyonu    │
│                 │
│    03:45        │
│   ▶️  ⏭️        │
│                 │
│ ♡ 72 bpm       │
└─────────────────┘
```

### Haptic Feedback
```swift
// Nefes egzersizi için haptic pattern
let breatheIn = WKHapticType.start
let hold = WKHapticType.stop
let breatheOut = WKHapticType.success

func guideBreathingCycle() {
    // Nefes al (4sn)
    WKInterfaceDevice.current().play(breatheIn)
    
    DispatchQueue.main.asyncAfter(deadline: .now() + 4) {
        // Tut (4sn)
        WKInterfaceDevice.current().play(hold)
    }
    
    DispatchQueue.main.asyncAfter(deadline: .now() + 8) {
        // Nefes ver (4sn)
        WKInterfaceDevice.current().play(breatheOut)
    }
}
```

## HEALTH KIT ENTEGRASYONU

### Veri Türleri
```swift
// Okunacak veriler
let readTypes: Set<HKObjectType> = [
    HKObjectType.quantityType(forIdentifier: .heartRate)!,
    HKObjectType.categoryType(forIdentifier: .sleepAnalysis)!,
    HKObjectType.quantityType(forIdentifier: .heartRateVariabilitySDNN)!,
]

// Yazılacak veriler
let writeTypes: Set<HKSampleType> = [
    HKObjectType.categoryType(forIdentifier: .mindfulSession)!,
]
```

### Mindful Minutes Sync
```swift
// Meditasyon seansını HealthKit'e kaydet
func saveMindfulSession(start: Date, end: Date) {
    let mindfulType = HKObjectType.categoryType(forIdentifier: .mindfulSession)!
    
    let sample = HKCategorySample(
        type: mindfulType,
        value: HKCategoryValue.notApplicable.rawValue,
        start: start,
        end: end
    )
    
    healthStore.save(sample) { success, error in
        if success {
            print("Mindful session saved to HealthKit")
        }
    }
}
```

### Heart Rate Monitoring
```swift
// Seans sırasında kalp atışı izleme
func startHeartRateMonitoring() {
    let heartRateType = HKQuantityType.quantityType(forIdentifier: .heartRate)!
    
    let query = HKAnchoredObjectQuery(
        type: heartRateType,
        predicate: nil,
        anchor: nil,
        limit: HKObjectQueryNoLimit
    ) { query, samples, deletedObjects, anchor, error in
        self.processHeartRateSamples(samples)
    }
    
    query.updateHandler = { query, samples, deletedObjects, anchor, error in
        self.processHeartRateSamples(samples)
    }
    
    healthStore.execute(query)
}
```

## COMPLICATIONS

### Watch Face Complications
```swift
// Complication types
struct OlukComplication: TimelineProvider {
    // Circular - Streak sayısı
    // Modular - Streak + son seans
    // Graphic - Progress ring
    
    func getCurrentTimelineEntry(for complication: CLKComplication) -> CLKComplicationTimelineEntry? {
        switch complication.family {
        case .circularSmall:
            return createCircularEntry(streak: currentStreak)
        case .modularSmall:
            return createModularEntry(streak: currentStreak, lastSession: lastSessionDate)
        case .graphicCircular:
            return createGraphicEntry(weekProgress: weeklyProgress)
        default:
            return nil
        }
    }
}
```

## BAĞLANTI VE SYNC

### Watch ↔ iPhone
```swift
// WatchConnectivity
class ConnectivityManager: NSObject, WCSessionDelegate {
    
    func sendSessionComplete(sessionId: String, duration: Int) {
        let message = [
            "action": "session_complete",
            "session_id": sessionId,
            "duration": duration,
            "timestamp": Date().timeIntervalSince1970
        ] as [String: Any]
        
        WCSession.default.sendMessage(message, replyHandler: nil)
    }
    
    func syncStreakData() {
        WCSession.default.transferUserInfo([
            "streak": currentStreak,
            "last_session": lastSessionDate
        ])
    }
}
```

## METRİKLER

```yaml
wearable_metrics:
  adoption:
    watch_app_installs: [sayı]
    watch_active_users: [sayı]
    complication_users: [sayı]
    
  engagement:
    watch_sessions: [sayı]
    avg_session_duration: "[dakika]"
    breathe_exercises: [sayı]
    
  health:
    healthkit_connected: "[%]"
    mindful_minutes_logged: [sayı]
    avg_heart_rate_during_session: [bpm]
```

## ÇIKTI FORMATI

```yaml
wearable_rapor:
  id: "WEAR-[numara]"
  platform: "[watchos/wearos]"
  
  kullanim:
    active_users: [sayı]
    sessions_from_watch: [sayı]
    
  healthkit:
    mindful_minutes: [sayı]
    avg_hr_change: "[%]"
```

## ETKİLEŞİM

### Kimden Alır
- 54-Mobil Uygulama: Platform sync
- 10-Seans Tasarımcısı: Watch-optimized content
- 69-Animasyon: Watch animations

### Kime Verir
- 50-Analytics: Wearable metrics
- 23-Psikoloji Uzmanı: Biometric insights

---
*Son Güncelleme: 29 Aralık 2024*
*Versiyon: 1.0*
