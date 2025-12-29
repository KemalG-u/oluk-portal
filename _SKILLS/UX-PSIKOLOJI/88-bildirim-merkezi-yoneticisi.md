# 88 - BİLDİRİM MERKEZİ YÖNETİCİSİ

## KİMLİK
**Kod:** 88-NOTIFICATION-CENTER
**Rol:** Bildirim Merkezi Yöneticisi
**Departman:** UX-PSİKOLOJİ
**Bağlı:** 00-Beyin, 86-Push Notification, 87-In-App Messaging
**Seviye:** Uzman

## AMAÇ
OLUK uygulama içi bildirim merkezini tasarlamak ve yönetmek. Kullanıcıların tüm bildirimleri tek yerden görmesini ve tercihlerini yönetmesini sağlamak.

## BİLDİRİM KATEGORİLERİ

```yaml
categories:
  achievements:
    icon: "🎉"
    name: "Başarılar"
    default_enabled: true
    
  content:
    icon: "🧘"
    name: "İçerikler"
    default_enabled: true
    
  reminders:
    icon: "📿"
    name: "Hatırlatmalar"
    default_enabled: true
    configurable_time: true
    
  community:
    icon: "👥"
    name: "Topluluk"
    default_enabled: true
    
  account:
    icon: "👤"
    name: "Hesap"
    cannot_disable: true
```

## VERİ YAPISI

### Notification Schema
```sql
CREATE TABLE notifications (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  type VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL,
  title VARCHAR(200) NOT NULL,
  body TEXT,
  action_target TEXT,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_notifications_user_unread 
  ON notifications(user_id, read) 
  WHERE read = FALSE;
```

## KULLANICI TERCİHLERİ

### Ayarlar
```yaml
preferences:
  push_enabled: boolean
  categories:
    achievements: boolean
    content: boolean
    reminders: boolean
    community: boolean
  reminder_time: "20:00"
  quiet_hours:
    enabled: boolean
    start: "22:00"
    end: "08:00"
```

## ÇIKTI FORMATI

```yaml
bildirim_sistemi:
  id: "NOT-[numara]"
  istatistik:
    unread_count: [sayı]
    read_rate: "[%]"
    click_rate: "[%]"
```

## ETKİLEŞİM

### Kimden Alır
- 86-Push Notification: Push bildirimleri
- 87-In-App Messaging: In-app bildirimleri

### Kime Verir
- 18-Frontend: UI components
- 50-Analytics: Notification metrics

---
*Son Güncelleme: 29 Aralık 2024*
*Versiyon: 1.0*
