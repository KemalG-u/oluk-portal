import { Anthropic } from '@anthropic-ai/sdk';

// API key .env.local dosyasında tanımlı
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Nur Koçu Zinciri (Basit Async Pipeline)
class NurKocuZincir {
  constructor() {
    this.state = {
      userPrompt: null,
      userMood: null,
      completedLessons: [],
      filteredKnowledge: null,
      finalSeans: null
    };
  }

  // 1. Adım: Kullanıcı girdisini al
  async inputNode(prompt, mood, lessons) {
    this.state.userPrompt = prompt;
    this.state.userMood = mood;
    this.state.completedLessons = lessons;
    console.log('✅ Adım 1: Kullanıcı girdisi alındı');
    console.log(`   Prompt: ${prompt}`);
    console.log(`   Mood: ${mood}`);
    console.log(`   Dersler: ${lessons.join(', ')}\n`);
  }

  // 2. Adım: Bilgi tabanından filtrele
  async knowledgeFilter() {
    console.log('⏳ Adım 2: Bilgi tabanı filtreleniyor...');
    const prompt = `OLUK MEGA SİSTEM'den sadece ilgili kısımları çek: Kullanıcı "${this.state.userPrompt}" diyor, mood: ${this.state.userMood}, tamamlanan dersler: ${this.state.completedLessons.join(', ')}. Sadece Yasin Kapısı veya ilgili dersi özetle, 5 kolon yapısına hazırla.`;
    
    const msg = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }]
    });
    
    this.state.filteredKnowledge = msg.content[0].text;
    console.log('✅ Bilgi Filtrelendi:');
    console.log(this.state.filteredKnowledge);
    console.log('\n');
  }

  // 3. Adım: 4 fazlı seansı üret
  async seansUretici() {
    console.log('⏳ Adım 3: 4 fazlı seans üretiliyor...');
    const prompt = `Filtrelediğin bilgiyi kullanarak tam bir Yasin Kapısı seansı üret. Mood: ${this.state.userMood}, Ders geçmişi: ${this.state.completedLessons.join(', ')}. 
    Zorunlu: 5 kolon (Envanter/Teşhis/Protokol/Bilgi Bankası/Güvenlik), 4 faz (Hazırlık/Arınma/Aktivasyon/Entegrasyon). OLUK yazar stiliyle. JSON + Markdown formatında.`;

    const msg = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 2048,
      messages: [{ role: 'user', content: prompt }]
    });
    
    this.state.finalSeans = msg.content[0].text;
    console.log('✅ Nur Koçu Son Seans:');
    console.log(this.state.finalSeans);
    console.log('\n');
  }

  // Zinciri çalıştır
  async run(prompt, mood, lessons) {
    console.log('🚀 Nur Koçu Zinciri Başlıyor...\n');
    console.log('━'.repeat(60) + '\n');
    
    await this.inputNode(prompt, mood, lessons);
    await this.knowledgeFilter();
    await this.seansUretici();
    
    console.log('━'.repeat(60));
    console.log('🎉 Zincir Tamamlandı!\n');
    return this.state.finalSeans;
  }
}

// Test Çalıştır
async function testNurKocu() {
  const zincir = new NurKocuZincir();
  await zincir.run(
    "Bugün enerjim çok düşük, bana Yasin Kapısı seansı öner",
    "düşük enerji",
    ["Ders 1"]
  );
}

testNurKocu();
