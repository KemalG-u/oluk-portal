# 📬 Telegram Bildirim Konfigürasyonu

Bu dosya OLUK sisteminde Telegram ile admin bildirimleri için gerekli bilgileri içerir.

## Admin Chat ID
- Değer: `8515394439`
- Açıklama: Admin’e gönderilecek mesajların hedef chat ID’si. n8n/Railway iş akışlarında `Send Message` step’inde kullanılır.

## Ortam Değişkeni
- Anahtar: `TELEGRAM_ADMIN_CHAT_ID`
- Kayıt Yeri:
  - Local: `.env.local`
  - Template: `.env.example`
- Kullanım: Script’ler ve iş akışları bu değişkeni okuyarak chat id’yi alabilir.

## Nasıl Chat ID Bulunur?
1. @userinfobot veya @RawDataBot ile konuşup mesaj atın; dönen JSON’da `chat.id` değerini alın.
2. Kendi bot’unuzla sohbet başlatıp bir mesaj atın; webhook/log üzerinden `chat.id`’yi saklayın.

## Güvenlik Notu
- Chat ID bir gizli anahtar değildir; yine de repo dışında paylaşmamayı tercih edin.
- Asıl gizli bilgi bot token’ıdır. Bot token’ını kesinlikle `.env.local`/Vercel Secrets dışında kaydetmeyin.

## Entegrasyon Örneği (n8n)
- Node: Telegram → Send Message
- Chat ID: `{{$json.TELEGRAM_ADMIN_CHAT_ID || $env.TELEGRAM_ADMIN_CHAT_ID}}`
- Text:
  ```
  ✅ Yeni Geliştirme Görevi
  • ID: {{$json.task_id}}
  • Görev: {{$json.original_task}}
  ```
