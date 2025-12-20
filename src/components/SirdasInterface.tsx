'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, AlertCircle, Phone } from 'lucide-react';
import { 
  Leaf, 
  WaveSine, 
  Lightning, 
  Moon, 
  SunHorizon,
  PaperPlaneTilt,
  Warning
} from '@phosphor-icons/react';
import { detectCrisis } from '@/lib/crisis-detection';
import { useAnalytics } from '@/lib/analytics';
import { 
  WELCOME_MESSAGE, 
  PLACEHOLDER_TEXT, 
  LOADING_TEXT, 
  EMPTY_STATE,
  MOOD_OPTIONS,
  CRISIS_MESSAGE,
  CRISIS_FOOTER,
  CRISIS_HOTLINES
} from '@/lib/sirdas-content';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  crisisDetected?: boolean;
}

interface SirdasInterfaceProps {
  initialMood?: string;
  lessons?: string[];
}

export default function SirdasInterface({ initialMood = 'wavy', lessons = [] }: SirdasInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: WELCOME_MESSAGE,
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [mood, setMood] = useState(initialMood);
  const [isLoading, setIsLoading] = useState(false);
  const [showCrisisWarning, setShowCrisisWarning] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const analytics = useAnalytics();

  useEffect(() => {
    analytics.startSession(initialMood, lessons);
    return () => analytics.endSession();
  }, []);

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
    analytics.trackMessage();

    try {
      const crisisResult = detectCrisis(input);
      
      if (crisisResult.response.blockAIResponse) {
        analytics.trackCrisis(crisisResult.severity);
        setShowCrisisWarning(true);
        
        const crisisResponse: Message = {
          role: 'assistant',
          content: CRISIS_MESSAGE,
          timestamp: new Date(),
          crisisDetected: true,
        };
        
        setMessages(prev => [...prev, crisisResponse]);
        setIsLoading(false);
        return;
      }

      const response = await fetch('/api/sirdas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          mood,
          lessons,
        }),
      });

      if (!response.ok) throw new Error('API error');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      if (reader) {
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
      }
    } catch (error) {
      console.error('Sırdaş error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Bir lahza aksadı. Tekrar dene lütfen.',
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-deep-teal via-deep-teal-dark to-black">
      {/* Crisis Warning Modal */}
      <AnimatePresence>
        {showCrisisWarning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setShowCrisisWarning(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-soft-cream rounded-3xl p-8 max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <AlertCircle className="w-16 h-16 mx-auto text-red-500 mb-4" />
                <h3 className="text-2xl font-serif text-deep-teal mb-4">Dur bir lahza.</h3>
                <p className="text-text-dark leading-relaxed whitespace-pre-line">
                  {CRISIS_MESSAGE}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {CRISIS_HOTLINES.map((hotline, i) => (
                  <a
                    key={i}
                    href={`tel:${hotline.number}`}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl hover:bg-warm-gold/10 transition-all"
                  >
                    <Phone className="w-6 h-6 text-warm-gold" />
                    <div>
                      <div className="font-bold text-deep-teal">{hotline.name}</div>
                      <div className="text-sm text-text-muted">{hotline.description}</div>
                    </div>
                  </a>
                ))}
              </div>

              <p className="text-sm text-text-muted text-center italic">
                {CRISIS_FOOTER}
              </p>

              <button
                onClick={() => setShowCrisisWarning(false)}
                className="mt-6 w-full btn-primary"
              >
                Anladım
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mood Selector */}
      <div className="p-4 backdrop-blur-xl bg-white/10 border-b border-white/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-soft-cream/70 text-sm mb-3">Bugün nasılsın?</p>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {MOOD_OPTIONS.map((option) => {
              const iconMap: Record<string, any> = {
                'Leaf': Leaf,
                'WaveSine': WaveSine,
                'Lightning': Lightning,
                'Moon': Moon,
                'SunHorizon': SunHorizon,
              };
              const IconComponent = iconMap[option.icon];
              
              return (
                <motion.button
                  key={option.id}
                  onClick={() => setMood(option.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                    mood === option.id
                      ? 'bg-warm-gold text-white shadow-lg ring-2 ring-warm-gold/50 ring-offset-2 ring-offset-deep-teal'
                      : 'bg-white/10 text-soft-cream hover:bg-white/20 hover:scale-105'
                  }`}
                  whileHover={{ scale: mood === option.id ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {IconComponent && (
                    <IconComponent size={20} weight="duotone" color={mood === option.id ? '#fff' : option.color} />
                  )}
                  {option.label}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 mobile-scroll-fix">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.length === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-soft-cream/60 py-12"
            >
              {EMPTY_STATE}
            </motion.div>
          )}

          <AnimatePresence mode="popLayout">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    msg.role === 'user'
                      ? 'bg-warm-gold text-white'
                      : msg.crisisDetected
                      ? 'bg-red-500/20 border border-red-500/50 text-soft-cream'
                      : 'bg-white/15 backdrop-blur-xl border border-white/20 text-soft-cream'
                  }`}
                  style={{
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                  <p className="text-xs mt-2 opacity-60">
                    {msg.timestamp.toLocaleTimeString('tr-TR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3 text-soft-cream/70"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 rounded-full bg-warm-gold"
              />
              <span className="text-sm italic">{LOADING_TEXT}</span>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 backdrop-blur-xl bg-white/10 border-t border-white/20">
        <div className="max-w-4xl mx-auto flex gap-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={PLACEHOLDER_TEXT}
            disabled={isLoading}
            className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-soft-cream placeholder-soft-cream/50 focus:outline-none focus:ring-2 focus:ring-warm-gold transition-all"
            style={{ backdropFilter: 'blur(20px)' }}
          />
          <motion.button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-8 py-4 rounded-full bg-warm-gold text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(201, 169, 98, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </div>
      </form>
    </div>
  );
}
