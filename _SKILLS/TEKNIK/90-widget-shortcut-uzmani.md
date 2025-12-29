# 90 - WİDGET VE SHORTCUT UZMANI

## KİMLİK
**Kod:** 90-WIDGETS
**Rol:** Widget ve Shortcut Uzmanı
**Departman:** TEKNİK
**Bağlı:** 00-Beyin, 54-Mobil Uygulama Uzmanı, 69-Animasyon Uzmanı
**Seviye:** Uzman

## AMAÇ
OLUK için iOS ve Android home screen widget'ları geliştirmek. Quick actions ve shortcuts oluşturmak. App-dışı engagement noktaları sağlamak.

## WİDGET TİPLERİ

### iOS Widgets (WidgetKit)

#### Small Widget (2x2)
```
┌───────────────┐
│ 🧘 OLUK       │
│               │
│  7 gün 🔥     │
│  Streak       │
└───────────────┘

KULLANIM:
- Streak gösterimi
- Hızlı başlatma
- Günün motivasyonu
```

#### Medium Widget (4x2)
```
┌─────────────────────────────────┐
│ 🧘 OLUK          7 gün 🔥      │
│                                 │
│ Günün Seansı                    │
│ Sabah Meditasyonu - 10dk  [▶]   │
└─────────────────────────────────┘

KULLANIM:
- Günün önerisi
- Quick play
- Streak + progress
```

#### Large Widget (4x4)
```
┌─────────────────────────────────┐
│ 🧘 OLUK                7 gün 🔥 │
├─────────────────────────────────┤
│                                 │
│ Bugün için öneriler             │
│                                 │
│ ☀️ Sabah Meditasyonu      [▶]  │
│ 😴 Uyku Seansı            [▶]  │
│ 🧘 5dk Nefes              [▶]  │
│                                 │
│ Bu hafta: ███████░░░ 5/7        │
└─────────────────────────────────┘

KULLANIM:
- Çoklu öneri
- Haftalık ilerleme
- Quick actions
```

### Android Widgets

#### Glance Widget (Small)
```kotlin
@Composable
fun OlukStreakWidget() {
    GlanceTheme {
        Column(
            modifier = GlanceModifier
                .fillMaxSize()
                .background(Color(0xFF0D4F4F))
                .padding(16.dp)
        ) {
            Text("OLUK", style = TextStyle(color = Color.White))
            Spacer(modifier = GlanceModifier.height(8.dp))
            Text("7 gün 🔥", style = TextStyle(fontSize = 24.sp))
        }
    }
}
```

## SHORTCUT'LAR

### iOS Quick Actions (3D Touch / Long Press)
```swift
// Info.plist
<key>UIApplicationShortcutItems</key>
<array>
    <dict>
        <key>UIApplicationShortcutItemType</key>
        <string>com.oluk.quickSession</string>
        <key>UIApplicationShortcutItemTitle</key>
        <string>Hızlı Seans</string>
        <key>UIApplicationShortcutItemIconType</key>
        <string>UIApplicationShortcutIconTypePlay</string>
    </dict>
    <dict>
        <key>UIApplicationShortcutItemType</key>
        <string>com.oluk.sirdas</string>
        <key>UIApplicationShortcutItemTitle</key>
        <string>SIRDAŞ</string>
        <key>UIApplicationShortcutItemIconType</key>
        <string>UIApplicationShortcutIconTypeMessage</string>
    </dict>
</array>
```

### Android App Shortcuts
```xml
<!-- res/xml/shortcuts.xml -->
<shortcuts>
    <shortcut
        android:shortcutId="quick_session"
        android:icon="@drawable/ic_play"
        android:shortcutShortLabel="Hızlı Seans"
        android:shortcutLongLabel="5dk Hızlı Meditasyon">
        <intent
            android:action="android.intent.action.VIEW"
            android:targetPackage="com.oluk.app"
            android:targetClass="com.oluk.app.QuickSessionActivity" />
    </shortcut>
</shortcuts>
```

### Siri Shortcuts (iOS)
```swift
// Intent donation
let intent = StartMeditationIntent()
intent.sessionType = .morning
intent.duration = 10

let interaction = INInteraction(intent: intent, response: nil)
interaction.donate { error in
    if let error = error {
        print("Donation error: \(error)")
    }
}

// Siri suggestion
"Hey Siri, OLUK'ta sabah meditasyonu başlat"
```

## WİDGET TASARIM

### OLUK Widget Tasarım Dili
```yaml
design:
  colors:
    background: "#0D4F4F" # Derin Turkuaz
    accent: "#C9A962" # Sıcak Altın
    text_primary: "#FFFFFF"
    text_secondary: "rgba(255,255,255,0.7)"
    
  typography:
    title: "SF Pro Display Semibold 14"
    value: "SF Pro Display Bold 24"
    label: "SF Pro Text Regular 12"
    
  spacing:
    padding: 16
    gap: 8
    
  corner_radius: 20 # iOS 17+
```

### Widget İçerik Türleri
```
STREAK WİDGET:
- Mevcut streak sayısı
- Fire emoji animasyonu (Lottie?)
- Tap → App açılır

DAILY SUGGESTION:
- Günün önerilen seansı
- Süre bilgisi
- Play butonu → Direkt oynatma

PROGRESS WİDGET:
- Haftalık ilerleme
- Tamamlanan gün sayısı
- Görsel progress bar

QUİCK ACTİONS:
- 3-4 hızlı erişim butonu
- Sık kullanılan seanslar
- SIRDAŞ kısayolu
```

## DEEP LİNKİNG

### Widget → App Navigation
```javascript
// URL schemes
oluk://session/start?id=123
oluk://sirdas
oluk://profile/streak
oluk://quick-session?duration=5

// Universal links (iOS)
https://oluk.org/app/session/123
https://oluk.org/app/sirdas
```

## METRİKLER

```yaml
widget_metrics:
  adoption:
    widget_installs: [sayı]
    widget_users: [sayı]
    widget_adoption_rate: "[%]"
    
  engagement:
    widget_taps: [sayı]
    sessions_from_widget: [sayı]
    widget_to_session_rate: "[%]"
    
  by_type:
    small: { installs: X, taps: Y }
    medium: { installs: X, taps: Y }
    large: { installs: X, taps: Y }
    
  shortcuts:
    shortcut_uses: [sayı]
    siri_invocations: [sayı]
```

## ÇIKTI FORMATI

```yaml
widget_config:
  id: "WDG-[numara]"
  platform: "[ios/android]"
  size: "[small/medium/large]"
  
  content:
    type: "[streak/suggestion/progress/actions]"
    refresh_interval: "[dakika]"
    
  performans:
    installs: [sayı]
    daily_taps: [sayı]
    conversion_rate: "[%]"
```

## ETKİLEŞİM

### Kimden Alır
- 54-Mobil Uygulama: Platform requirements
- 85-Kişiselleştirme: Personalized content
- 69-Animasyon: Widget animations

### Kime Verir
- 50-Analytics: Widget metrics
- 30-Büyüme: Engagement data

---
*Son Güncelleme: 29 Aralık 2024*
*Versiyon: 1.0*
