import { Anthropic } from '@anthropic-ai/sdk';

// API key .env.local dosyasında tanımlı
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function nurKocuSorgu(prompt, userMood = "bilinmiyor", tamamlananDersler = []) {
  const systemPrompt = `
  Sen OLUK'un Nur Koçu'sun. Yanıtlarını MEGA SİSTEM_v1.docx'a tam sadık ver: 5 kolon (Envanter/Teşhis/Protokol/Bilgi Bankası/Güvenlik), 4 fazlı seans. 
  Kullanıcı mood: ${userMood}. Tamamlanan dersler: ${tamamlananDersler.join(', ')}.
  Stil: Türk yazarların üslubu – İsmet Özel damıtma, Cemil Meriç teşbih, Necip Fazıl vecd, Tanpınar estetik, Peyami Safa ahlaki betimleme.
  Guardrails: Tıbbi tavsiye verme, krizde 182'ye yönlendir, kaynak belirt.
  Yanıt formatı: JSON + Markdown.
  `;

  const msg = await anthropic.messages.create({
    model: 'claude-3-haiku-20240307',  // Şu an çalışan model
    // model: 'claude-3-5-sonnet-20240620',  // Sonnet erişimi gelince bu satırı aktif et
    max_tokens: 2048,
    system: systemPrompt,
    messages: [{ role: 'user', content: prompt }]
  });

  console.log('Nur Koçu Yanıtı:\n');
  console.log(msg.content[0].text);
}

// Test 1: Basit seans
nurKocuSorgu('Bugün enerjim düşük, Yasin Kapısı seansı öner.', 'düşük enerji', ['Ders 1']);

// Test 2: Kişiselleştirilmiş
// nurKocuSorgu('8 Kalkan Sistemi nasıl uygulanır?', 'stresli', ['Ders 1', 'Ders 2']);
