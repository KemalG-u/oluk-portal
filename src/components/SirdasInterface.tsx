'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  PaperPlaneTilt,
  House,
  Sparkle,
  Heart,
  WaveSine,
  Leaf,
  Lightning,
  Moon,
  SunHorizon
} from '@phosphor-icons/react';
import { detectCrisis } from '@/lib/crisis-detection';
import { useAnalytics } from '@/lib/analytics';
import { 
  WELCOME_MESSAGE, 
  MOOD_OPTIONS,
  CRISIS_MESSAGE,
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

const moodIcons = {
  calm: Leaf,
  wavy: WaveSine,
  storm: Lightning,
  dark: Moon,
  bright: SunHorizon,
};

export default function SirdasInterface({ initialMood = 'wavy', lessons = [] }: SirdasInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [mood, setMood] = useState(initialMood);
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showCrisisWarning, setShowCrisisWarning] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const analytics = useAnalytics();

  useEffect(() => {
    analytics.startSession(initialMood, lessons);
    inputRef.current?.focus();
    return () => analytics.endSession();
  }, [analytics, initialMood, lessons]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (showWelcome) setShowWelcome(false);

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    analytics.trackMessage();

    // Auto-resize textarea
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
    }

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
          message: input, 
          mood, 
          lessons: lessons.length > 0 ? lessons : undefined 
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.reply,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const startConversation = (selectedMood: string) => {
    setMood(selectedMood);
    setShowWelcome(false);
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col h-screen max-h-screen">
      {/* Header */}
      <header className="border-b border-teal/10 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition">
              <House size={24} weight="duotone" className="text-teal" />
              <span className="text-sm text-text-muted hidden sm:inline">Ana Sayfa</span>
            </Link>
            <div className="w-px h-6 bg-teal/20" />
            <div className="flex items-center gap-2">
              <Sparkle size={24} weight="duotone" className="text-gold" />
              <h1 className="font-serif text-xl sm:text-2xl text-teal">Sırdaş</h1>
            </div>
          </div>
          <div className="text-xs text-text-muted hidden sm:block">
            AI destekli manevi destek
          </div>
        </div>
      </header>

      {/* Main Chat Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Welcome Screen */}
          <AnimatePresence>
            {showWelcome && messages.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-xl">
                  <Sparkle size={40} weight="duotone" className="text-white" />
                </div>
                
                <div className="space-y-3">
                  <h2 className="font-serif text-3xl sm:text-4xl text-teal">
                    Hoş Geldin
                  </h2>
                  <p className="text-lg text-text-muted max-w-md">
                    Gecenin her vaktinde açık bir kapı. Sırrını ver, sükûneti al.
                  </p>
                </div>

                {/* Mood Selection */}
                <div className="w-full max-w-2xl">
                  <p className="text-sm text-text-muted mb-4">Bugün nasıl hissediyorsun?</p>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {MOOD_OPTIONS.map((option) => {
                      const Icon = moodIcons[option.id as keyof typeof moodIcons];
                      return (
                        <motion.button
                          key={option.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => startConversation(option.id)}
                          className="flex flex-col items-center gap-2 p-4 rounded-2xl border-2 border-teal/20 hover:border-gold hover:bg-gold/5 transition-all group"
                        >
                          <Icon size={32} weight="duotone" className="text-teal group-hover:text-gold transition-colors" />
                          <span className="text-sm font-medium text-teal group-hover:text-gold transition-colors">
                            {option.label}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                <p className="text-xs text-text-muted/60 max-w-md">
                  Ya da hemen yazmaya başla. Burası senin için güvenli bir alan.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Messages */}
          <div className="space-y-6">
            <AnimatePresence initial={false}>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-5 py-4 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-br from-teal to-teal-light text-white'
                        : message.crisisDetected
                        ? 'bg-rose/10 border-2 border-rose text-text-dark'
                        : 'bg-white border border-teal/10 text-text-dark shadow-sm'
                    }`}
                  >
                    {message.role === 'assistant' && !message.crisisDetected && (
                      <div className="flex items-center gap-2 mb-2 text-teal">
                        <Sparkle size={16} weight="duotone" />
                        <span className="text-xs font-medium">Sırdaş</span>
                      </div>
                    )}
                    <p className="text-[15px] leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                    {message.crisisDetected && (
                      <div className="mt-4 pt-4 border-t border-rose/20">
                        <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                          <Heart size={16} weight="fill" className="text-rose" />
                          Acil Yardım Hatları
                        </p>
                        <div className="space-y-2 text-sm">
                          {CRISIS_HOTLINES.map((hotline, i) => (
                            <a
                              key={i}
                              href={`tel:${hotline.number}`}
                              className="flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-rose/5 transition"
                            >
                              <span className="font-medium">{hotline.name}:</span>
                              <span className="text-rose font-mono">{hotline.number}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Loading */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-white border border-teal/10 rounded-2xl px-5 py-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Sparkle size={16} weight="duotone" className="text-teal animate-pulse" />
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-teal/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-teal/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-teal/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area - Sticky Bottom */}
      <div className="border-t border-teal/10 bg-white/80 backdrop-blur-md sticky bottom-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex items-end gap-2 bg-white rounded-2xl border-2 border-teal/20 focus-within:border-gold transition-colors shadow-sm">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  // Auto-resize
                  e.target.style.height = 'auto';
                  e.target.style.height = Math.min(e.target.scrollHeight, 150) + 'px';
                }}
                onKeyDown={handleKeyDown}
                placeholder={showWelcome ? "Sırrını ver, sükûneti al..." : "Mesajını yaz..."}
                disabled={isLoading}
                className="flex-1 px-5 py-4 bg-transparent border-none outline-none resize-none text-[15px] text-text-dark placeholder:text-text-muted/50 max-h-[150px]"
                rows={1}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={!input.trim() || isLoading}
                className="m-2 p-3 bg-gradient-to-br from-gold to-gold-dark text-white rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg transition-all"
              >
                <PaperPlaneTilt size={20} weight="bold" />
              </motion.button>
            </div>
          </form>
          
          {/* Footer Info */}
          <div className="mt-3 text-center">
            <p className="text-xs text-text-muted/60">
              Sırdaş bir AI asistanıdır. Acil durumlarda lütfen profesyonel yardım alın.
            </p>
          </div>
        </div>
      </div>

      {/* Crisis Warning Modal */}
      <AnimatePresence>
        {showCrisisWarning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCrisisWarning(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-rose/10 rounded-full flex items-center justify-center">
                  <Heart size={32} weight="fill" className="text-rose" />
                </div>
                <h3 className="font-serif text-2xl text-teal">Yalnız Değilsin</h3>
                <p className="text-text-muted">
                  Acil yardım hatlarını mesajlarımda bulabilirsin. Lütfen profesyonel destek al.
                </p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowCrisisWarning(false)}
                  className="w-full py-3 bg-gradient-to-br from-gold to-gold-dark text-white rounded-xl font-medium"
                >
                  Anladım
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
