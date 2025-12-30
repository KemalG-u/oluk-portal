# OLUK Metin Yazarı - Codespaces Kurulum Rehberi

Bu rehber iki ortamı kapsar: (1) Claude.ai Project, (2) Codespaces + Subagent.

## 1) Claude.ai Project Kurulumu
1. [claude.ai](https://claude.ai) → Projects → + Create Project.
2. Name: `OLUK Metin Yazarı`, Description: `OLUK.ORG Baş Metin Yazarı - Tüm içerik üretimi`.
3. PROJECT-INSTRUCTIONS.md içeriğini Instructions alanına yapıştır → Save.
4. Knowledge/Files sekmesine şu dosyaları yükle: `BILGI-TABANI-01-SOZ-DIZIMI.md`, `BILGI-TABANI-02-DUYGU-MIMARISI.md`, `BILGI-TABANI-03-ICERIK-ORNEKLERI.md`, `BILGI-TABANI-04-12-DENEYIM.md`.
5. Test örnekleri:
   - "Enerji hissetme bölümü için ana sayfa metni yaz"
   - "Sırdaş için karşılama mesajı yaz"
   - "Déjà vu hakkında blog açılışı yaz"

## 2) Codespaces + Subagent Kurulumu
1. Klasörler: `.claude/agents`, `.claude/commands`, `docs/metin-yazari` oluştur.
2. Agent: `upload/oluk-metin-yazari.md` → `.claude/agents/oluk-metin-yazari.md`.
3. Komutlar: `deneyim-yaz.md`, `ders-yaz.md`, `sirdas-yanit.md` → `.claude/commands/`.
4. Proje talimatı: `CLAUDE.md` → repo kökü.
5. Bilgi tabanı: `docs/metin-yazari/` içine `soz-dizimi-rehberi.md`, `duygu-mimarisi.md`, `icerik-ornekleri.md`, `12-deneyim-rehberi.md`.
6. Git: `git add .` → `git commit -m "feat: OLUK Metin Yazarı subagent ve komutları eklendi"` → `git push`.

## Test
- Claude Code: `claude` çalıştır.
- Agent: "Use the oluk-metin-yazari agent to write hero section".
- Slash komutları:
  - `/project:deneyim-yaz enerji-hissetme`
  - `/project:ders-yaz nefes-calismalari`
  - `/project:sirdas-yanit kullanici-korku-paylasti`

## Beklenen Davranış
- "Sen" dili, kısa-uzun-kısa ritmi, parantez içi iç ses.
- Duygu → Bilinç → Edim zinciri.
- Vaaz/öğüt yok, zorlamayan CTA.

## Sorun Giderme
- Agent yoksa: `ls -la .claude/agents/` konum kontrolü.
- Komutlar yoksa: `ls -la .claude/commands/` kontrol.
- Stil bozuksa: kökte `CLAUDE.md` ve docs dosyalarının güncel olduğundan emin ol; agent'ı açıkça çağır.
