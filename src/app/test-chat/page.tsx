'use client';
import { useState, FormEvent } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function TestChat() {
  const [mood] = useState('dalgali');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/nur-kocu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          mood,
          lessons: []
        })
      });

      if (!response.ok) throw new Error('API error');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          const text = decoder.decode(value);
          assistantMessage += text;
          
          setMessages(prev => {
            const last = prev[prev.length - 1];
            if (last?.role === 'assistant') {
              return [...prev.slice(0, -1), { role: 'assistant', content: assistantMessage }];
            }
            return [...prev, { role: 'assistant', content: assistantMessage }];
          });
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: '❌ Bir hata oluştu.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: '0 auto' }}>
      <h1>🌙 Nur Koçu Test</h1>
      <p style={{ color: '#666', fontSize: 12 }}>⚠️ OLUK terapi değildir. Kriz: 182</p>
      
      <div style={{ border: '1px solid #ccc', padding: 10, minHeight: 300, marginBottom: 10 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ 
            padding: 10, 
            margin: 5, 
            background: m.role === 'user' ? '#C9A962' : '#0D4F4F',
            color: 'white',
            borderRadius: 10,
            maxWidth: '80%',
            marginLeft: m.role === 'user' ? 'auto' : 0
          }}>
            {m.content}
          </div>
        ))}
        {isLoading && <div style={{ color: '#999' }}>Düşünüyor...</div>}
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10 }}>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="Mesajını yaz..."
          style={{ flex: 1, padding: 10, borderRadius: 20, border: '2px solid #0D4F4F' }}
        />
        <button 
          type="submit" 
          disabled={isLoading}
          style={{ padding: '10px 20px', background: '#0D4F4F', color: 'white', borderRadius: 20, border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer' }}
        >
          Gönder
        </button>
      </form>
    </div>
  );
}
