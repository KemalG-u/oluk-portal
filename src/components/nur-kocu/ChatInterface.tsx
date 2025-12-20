'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Moon, Loader2, AlertCircle, Phone } from 'lucide-react';
import { detectCrisis, OLUK_DISCLAIMER } from '@/lib/crisis-detection';
import { useAnalytics } from '@/lib/analytics';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  crisisDetected?: boolean;
}

interface ChatInterfaceProps {
  initialMood?: string;
  lessons?: string[];
}

const MOODS = [
  { value: 'huzurlu', label: '😌 Huzurlu', color: 'bg-sage/20 text-sage' },
  { value: 'dalgali', label: '🌊 Dalgalı', color: 'bg-blue-100 text-blue-800' },
  { value: 'kararsiz', label: '🤔 Kararsız', color: 'bg-amber-100 text-amber-800' },
  { value: 'yorgun', label: '😔 Yorgun', color: 'bg-gray-100 text-gray-700' },
  { value: 'coskulu', label: '✨ Coşkulu', color: 'bg-gold/20 text-gold' },
];

export default function ChatInterface({ initialMood = 'dalgali', lessons = [] }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '🌙 Hoş geldin. Burada güvendesin. Ne paylaşmak istersin?',
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [mood, setMood] = useState(initialMood);
  const [isLoading, setIsLoading] = useState(false);
  const [showCrisisWarning, setShowCrisisWarning] = useState(false);
  const [crisisMessage, setCrisisMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const analytics = useAnalytics();

  // Start session on mount
  useEffect(() => {
    analytics.startSession(initialMood, lessons);
    
    return () => {
      analytics.endSession();
    };
  }, []);

  // Update mood in analytics
  useEffect(() => {
    if (mood !== initialMood) {
      analytics.changeMood(mood);
    }
  }, [mood]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Track message
    analytics.trackMessage();

    try {
      // Crisis detection
      const crisisResult = detectCrisis(input);
      
      if (crisisResult.response.blockAIResponse) {
        // Track crisis
        analytics.trackCrisis(crisisResult.severity);
        
        // Critical crisis - show warning and block AI
        setCrisisMessage(crisisResult.response.message);
        setShowCrisisWarning(true);
        
        const crisisResponse: Message = {
          role: 'assistant',
          content: crisisResult.response.message,
          timestamp: new Date(),
          crisisDetected: true,
        };
        
        setMessages(prev => [...prev, crisisResponse]);
        setIsLoading(false);
        return;
      }

      // Normal flow - call API
      const response = await fetch('/api/nur-kocu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          mood,
          lessons,
        }),
      });

      if (!response.ok) throw new Error('API error');

      // Stream response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      if (reader) {
        const assistantMessageId = Date.now();
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: '',
          timestamp: new Date(),
        }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const text = decoder.decode(value);
          assistantMessage += text;

          setMessages(prev => {
            const newMessages = [...prev];
            const lastMessage = newMessages[newMessages.length - 1];
            if (lastMessage.role === 'assistant') {
              lastMessage.content = assistantMessage;
            }
            return newMessages;
          });
        }

        // Show crisis warning if needed (high severity)
        if (crisisResult.response.showHotline) {
          analytics.trackCrisis(crisisResult.severity);
          setCrisisMessage(crisisResult.response.message);
          setShowCrisisWarning(true);
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '❌ Bir hata oluştu. Lütfen tekrar dene.',
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  return (
    <div className="flex flex-col h-[600px] max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gold/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal to-teal/90 text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Moon className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-serif">Nur Koçu</h2>
              <p className="text-sm text-white/80">Manevi dönüşüm yolculuğun</p>
            </div>
          </div>
          
          {/* Mood Selector */}
          <div className="flex gap-2">
            {MOODS.map(m => (
              <button
                key={m.value}
                onClick={() => setMood(m.value)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  mood === m.value 
                    ? 'bg-white text-teal scale-110 shadow-lg' 
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
                title={m.label}
              >
                {m.label.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border-b border-amber-200 px-6 py-3 text-xs text-amber-800 flex items-start gap-2">
        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
        <span>{OLUK_DISCLAIMER}</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-cream-light/30 to-white">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-5 py-3 ${
                msg.role === 'user'
                  ? 'bg-gradient-to-br from-gold to-gold/90 text-white'
                  : msg.crisisDetected
                  ? 'bg-red-50 border-2 border-red-300 text-red-900'
                  : 'bg-white border border-teal/20 text-text-dark'
              } shadow-md`}
            >
              <div className="prose prose-sm max-w-none">
                {msg.content.split('\n').map((line, i) => (
                  <p key={i} className="mb-2 last:mb-0">{line}</p>
                ))}
              </div>
              <div className={`text-xs mt-2 ${
                msg.role === 'user' ? 'text-white/70' : 'text-gray-500'
              }`}>
                {msg.timestamp.toLocaleTimeString('tr-TR', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-teal/20 rounded-2xl px-5 py-3 shadow-md">
              <Loader2 className="w-5 h-5 text-teal animate-spin" />
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Crisis Warning Modal */}
      {showCrisisWarning && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-3xl p-8 max-w-md shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-serif text-red-900">Acil Destek</h3>
            </div>
            <div className="prose prose-sm mb-6">
              {crisisMessage.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <button
              onClick={() => setShowCrisisWarning(false)}
              className="w-full bg-teal text-white py-3 rounded-xl font-medium hover:bg-teal/90 transition"
            >
              Anladım
            </button>
          </div>
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-6 bg-white border-t border-gray-200">
        <div className="flex gap-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Mesajını yaz..."
            disabled={isLoading}
            className="flex-1 px-6 py-4 rounded-2xl border-2 border-teal/30 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-gradient-to-br from-teal to-teal/90 text-white p-4 rounded-2xl hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
          >
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <Send className="w-6 h-6" />
            )}
          </button>
        </div>
        
        <div className="mt-3 text-xs text-gray-500 text-center">
          Mood: <span className="font-medium text-teal">{MOODS.find(m => m.value === mood)?.label}</span>
          {lessons.length > 0 && (
            <span className="ml-3">• Tamamlanan: {lessons.join(', ')}</span>
          )}
        </div>
      </form>
    </div>
  );
}
