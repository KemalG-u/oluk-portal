'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Sparkle, 
  Heart, 
  Eye, 
  Moon, 
  Wind, 
  Lightning,
  Spiral,
  ArrowRight,
  Play,
  Check,
  Star,
  Users,
  BookOpen,
  Shield
} from '@phosphor-icons/react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ═══════════════════════════════════════════════════════════════════════════
// OLUK.ORG ANA SAYFA
// Ottoman Cyberpunk Estetiği | Teal #0D4F4F | Gold #C9A962 | Cream #F5F0E6
// ═══════════════════════════════════════════════════════════════════════════

export default function HomePage() {
  const [activeExperience, setActiveExperience] = useState(0);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // 12 Deneyim verisi
  const experiences = [
    { icon: Lightning, title: 'Enerji Hissetme', desc: 'Avuçlarındaki sıcaklık, kimse görmedi.' },
    { icon: Spiral, title: 'Déjà Vu', desc: 'Bu anı daha önce yaşadın, değil mi?' },
    { icon: Eye, title: 'Sezgisel Bilme', desc: 'Telefon çalmadan kimin aradığını bildin.' },
    { icon: Moon, title: 'Rüya Mesajları', desc: 'Uyandığında hâlâ oradaydın.' },
    { icon: Users, title: 'Enerji Bulaşması', desc: 'Yanından geçtin, halin değişti.' },
    { icon: Heart, title: 'Mekan Hafızası', desc: 'Duvarlarda bir şey vardı.' },
    { icon: Wind, title: 'Ani Duygu Dalgası', desc: 'Sebepsiz ağladın. Ya da güldün.' },
    { icon: Sparkle, title: 'Eşzamanlılık', desc: 'Düşündüğün anda karşına çıktı.' },
    { icon: Shield, title: 'Bedensel Bilgelik', desc: 'Sırtın ürperdi, biri bakıyordu.' },
    { icon: Star, title: 'Mistik Deneyim', desc: 'Bir an için her şey durdu.' },
    { icon: BookOpen, title: 'Çocukluk Anıları', desc: 'Küçükken gördün, kimseye anlatmadın.' },
    { icon: Eye, title: 'Açıklanamayan', desc: 'Bir şey oldu. Adı yok.' },
  ];

  // Auto-rotate experiences
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExperience((prev) => (prev + 1) % experiences.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [experiences.length]);

  return (
    <main className="bg-[#F5F0E6] text-[#0D4F4F] overflow-hidden">
      
      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION - "Sana da mı oldu?" + Lotus Görseli
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* ZEN ARKA PLAN GÖRSELİ */}
        <div className="absolute inset-0">
          <Image
            src="/assets/backgrounds/zen-stones-white-sand-background-art-balance-concept.jpg"
            alt="Zen background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E6]/80 via-[#F5F0E6]/60 to-[#F5F0E6]" />
        </div>

        {/* Animated background blurs */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: backgroundY }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A962]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0D4F4F]/10 rounded-full blur-3xl" />
        </motion.div>

        {/* 2 SÜTUNLU LAYOUT */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-20">
            {/* SOL SÜTUN - METİN */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-[#C9A962]/30 bg-white/50 backdrop-blur-sm"
              >
                <Sparkle weight="duotone" className="text-[#C9A962]" size={16} />
                <span className="text-sm tracking-[0.2em] uppercase">Türkiye'nin İlk Spiritüel Platformu</span>
              </motion.div>

              {/* Main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-[1.1]"
              >
                Sana da mı oldu?
              </motion.h1>

              {/* Subheadline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4 mb-10"
              >
                <p className="text-xl md:text-2xl text-[#0D4F4F]/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Bir şey hissettin. Açıklayamadın.
                </p>
                <p className="text-lg text-[#0D4F4F]/60 italic">
                  (Ya deli sanırlarsa?)
                </p>
                <p className="text-xl md:text-2xl text-[#0D4F4F]/80">
                  Değilsin. Ve yalnız değilsin.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/kayit"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0D4F4F] text-white rounded-full hover:bg-[#0D4F4F]/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-[#0D4F4F]/20"
                >
                  <span className="font-medium">Yolculuğa Başla</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  href="#deneyimler"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#0D4F4F]/20 rounded-full hover:border-[#C9A962] hover:bg-white/50 transition-all duration-300"
                >
                  <Play weight="fill" size={20} />
                  <span>12 Deneyimi Keşfet</span>
                </Link>
              </motion.div>

              {/* Sosyal Kanıt */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center gap-8 mt-10 pt-8 border-t border-[#0D4F4F]/10 justify-center lg:justify-start"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0D4F4F]">1000+</div>
                  <div className="text-sm text-[#0D4F4F]/60">Deneyim</div>
                </div>
                <div className="w-px h-10 bg-[#0D4F4F]/10" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0D4F4F]">40+</div>
                  <div className="text-sm text-[#0D4F4F]/60">Seans</div>
                </div>
                <div className="w-px h-10 bg-[#0D4F4F]/10" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#0D4F4F]">4</div>
                  <div className="text-sm text-[#0D4F4F]/60">Modül</div>
                </div>
              </motion.div>
            </div>

            {/* SAĞ SÜTUN - LOTUS GÖRSELİ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative flex justify-center items-center order-first lg:order-last"
            >
              {/* Dekoratif daireler */}
              <div className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-[#C9A962]/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute w-48 h-48 lg:w-64 lg:h-64 bg-[#0D4F4F]/10 rounded-full blur-2xl translate-x-12 translate-y-12" />

              {/* Ana Lotus Görseli */}
              <div className="relative z-10 w-64 h-64 lg:w-96 lg:h-96">
                <Image
                  src="/assets/lotus/7075657.jpg"
                  alt="Lotus - Spiritüel Dönüşüm"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                {/* Fallback emoji - görsel yüklenmezse */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[150px] lg:text-[200px] opacity-80">🪷</span>
                </div>
              </div>

              {/* Floating elementler */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-10 right-10 lg:top-20 lg:right-20 w-12 h-12 bg-white/80 rounded-xl shadow-lg flex items-center justify-center backdrop-blur-sm"
              >
                <span className="text-2xl">🧘</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                className="absolute bottom-10 left-10 lg:bottom-20 lg:left-0 w-12 h-12 bg-white/80 rounded-xl shadow-lg flex items-center justify-center backdrop-blur-sm"
              >
                <span className="text-2xl">✨</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                className="absolute top-1/2 right-0 w-10 h-10 bg-[#C9A962]/20 rounded-full flex items-center justify-center"
              >
                <span className="text-xl">🌟</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-[#0D4F4F]/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-[#C9A962] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          12 DENEYİM - Interactive Carousel
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="deneyimler" className="py-24 px-6 bg-gradient-to-b from-[#F5F0E6] to-white">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-4 text-sm tracking-[0.2em] text-[#C9A962] border border-[#C9A962]/30 rounded-full">
              12 DENEYİM
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Hangisi sana tanıdık?
            </h2>
            <p className="text-[#0D4F4F]/70 max-w-xl mx-auto">
              Milyonlarca insan aynı şeyleri yaşadı. Sadece konuşmadı.
            </p>
          </div>

          {/* Experience grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              const isActive = idx === activeExperience;
              return (
                <motion.button
                  key={exp.title}
                  onClick={() => setActiveExperience(idx)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative p-6 rounded-2xl text-left transition-all duration-500 ${
                    isActive 
                      ? 'bg-[#0D4F4F] text-white shadow-xl shadow-[#0D4F4F]/20' 
                      : 'bg-white hover:bg-[#F5F0E6] border border-[#0D4F4F]/10'
                  }`}
                >
                  <Icon 
                    size={28} 
                    weight="duotone" 
                    className={isActive ? 'text-[#C9A962]' : 'text-[#C9A962]'} 
                  />
                  <h3 className="font-medium mt-3 mb-1">{exp.title}</h3>
                  <p className={`text-sm ${isActive ? 'text-white/70' : 'text-[#0D4F4F]/60'}`}>
                    {exp.desc}
                  </p>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-3 right-3 w-2 h-2 bg-[#C9A962] rounded-full"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/deneyimler"
              className="inline-flex items-center gap-2 text-[#0D4F4F] hover:text-[#C9A962] transition-colors"
            >
              <span>Tüm deneyimleri incele</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PROBLEM SECTION - Empathy
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0D4F4F] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Problem */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif leading-tight">
                Yaşadın.
                <br />
                <span className="text-[#C9A962]">Ama anlatamazdın.</span>
              </h2>
              
              <div className="space-y-4 text-white/80">
                <p>Bir odaya girdin, havası ağırdı. Birinin yanından geçtin, enerjin düştü. Rüyanda gördüğün şey ertesi gün oldu.</p>
                
                <p className="italic text-white/60">(Anlatsam deli derler.)</p>
                
                <p>Sustun. Yıllarca. Belki kendine bile itiraf etmedin.</p>
              </div>
            </div>

            {/* Right - Validation */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check weight="bold" className="text-[#C9A962] mt-1 flex-shrink-0" size={20} />
                  <p>Bu deneyimler gerçek</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check weight="bold" className="text-[#C9A962] mt-1 flex-shrink-0" size={20} />
                  <p>Bilimsel açıklamaları var</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check weight="bold" className="text-[#C9A962] mt-1 flex-shrink-0" size={20} />
                  <p>Binlerce yıllık gelenekler bunları biliyor</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check weight="bold" className="text-[#C9A962] mt-1 flex-shrink-0" size={20} />
                  <p>Ve sen yalnız değilsin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SOLUTION SECTION - What is OLUK
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-4 text-sm tracking-[0.2em] text-[#C9A962] border border-[#C9A962]/30 rounded-full">
              OLUK NEDİR?
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Akışın Kanalı,<br />
              <span className="text-[#C9A962]">Dönüşümün Yolu</span>
            </h2>
            <p className="text-[#0D4F4F]/70 max-w-2xl mx-auto text-lg">
              OLUK, bin yıllık Sufi geleneğini modern bilimle buluşturan Türkiye'nin ilk sistematik spiritüel eğitim platformu.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: '4 Aşamalı Yolculuk',
                desc: 'Arınma → Koruma → Aktivasyon → İleri Seviye. Her adım bir öncekinin üzerine inşa edilir.',
              },
              {
                icon: Shield,
                title: 'Güvenli Rehberlik',
                desc: 'Spiritüel deneyimler riskli olabilir. OLUK seni korur, yönlendirir, asla yalnız bırakmaz.',
              },
              {
                icon: Users,
                title: 'Sırdaş Topluluk',
                desc: 'Seninle aynı şeyleri yaşayan insanlar. Yargılanmadan paylaşabileceğin bir alan.',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg shadow-[#0D4F4F]/5 border border-[#0D4F4F]/5 hover:border-[#C9A962]/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#0D4F4F]/5 rounded-xl flex items-center justify-center mb-6">
                    <Icon size={24} weight="duotone" className="text-[#C9A962]" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-[#0D4F4F]/70">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MODÜLLER SECTION - 4 Modules (UNLOCKED)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-[#F5F0E6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">4 Modül, Tamamı Açık</h2>
            <p className="text-[#0D4F4F]/70">Her modül bir kapı. Hepsi seni bekliyor.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                href: '/moduller/ayna', 
                name: 'AYNA', 
                desc: 'İçini gör. Gerçek yüzünle tanış. Değişim buradan başlar.', 
                color: '#0D4F4F',
                icon: Eye
              },
              { 
                href: '/moduller/isik', 
                name: 'IŞIK', 
                desc: 'Karanlıktan çık. Enerjini yükselt. Işığını saklama artık.', 
                color: '#C9A962',
                icon: Sparkle
              },
              { 
                href: '/moduller/baglanti', 
                name: 'BAĞLANTI', 
                desc: 'Her şey birbirine bağlı. Ağı hisset. Tek olmadığını gör.', 
                color: '#2D6A4F',
                icon: Wind
              },
              { 
                href: '/moduller/amac', 
                name: 'AMAÇ', 
                desc: 'Neden buradasın? Misyonun ne? Cevap içinde gizli.', 
                color: '#6B21A8',
                icon: Lightning
              },
            ].map((modul, idx) => {
              const Icon = modul.icon;
              return (
                <motion.div
                  key={modul.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={modul.href}
                    className="group block relative p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] border-2"
                    style={{ 
                      borderColor: `${modul.color}20`,
                      backgroundColor: `${modul.color}05`
                    }}
                  >
                    <div 
                      className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"
                      style={{ backgroundColor: modul.color }}
                    />
                    
                    <div className="relative z-10">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                        style={{ backgroundColor: `${modul.color}15` }}
                      >
                        <Icon size={28} weight="duotone" style={{ color: modul.color }} />
                      </div>
                      
                      <h3 
                        className="text-2xl font-semibold mb-3"
                        style={{ color: modul.color }}
                      >
                        {modul.name}
                      </h3>
                      
                      <p className="text-[#0D4F4F]/70 mb-6 leading-relaxed">
                        {modul.desc}
                      </p>
                      
                      <div 
                        className="inline-flex items-center gap-2 font-medium group-hover:gap-3 transition-all"
                        style={{ color: modul.color }}
                      >
                        <span>Keşfet</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Sırdaş Quick Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/sirdas"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#0D4F4F]/10 rounded-full hover:border-[#C9A962] hover:shadow-lg transition-all"
            >
              <Users weight="duotone" size={24} className="text-[#0D4F4F]" />
              <span className="font-medium text-[#0D4F4F]">Sırdaş ile Konuş</span>
              <ArrowRight size={18} className="text-[#0D4F4F] group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="mt-3 text-sm text-[#0D4F4F]/60">
              Senin için buradayım. Her an, her soru.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0D4F4F] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Onlar da Yaşadı</h2>
            <p className="text-white/60">Ve artık konuşuyorlar.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Yıllarca "benimle bir şey yanlış" dedim. OLUK sayesinde anladım: Yanlış olan bir şey yoktu. Sadece kimse anlatmamıştı.',
                name: 'Elif K.',
                role: 'İstanbul',
              },
              {
                quote: 'İlk kez yargılanmadan konuşabildim. İlk kez "evet, bu normal" dediler.',
                name: 'Ayşe M.',
                role: 'Ankara',
              },
              {
                quote: 'Meditasyon uygulamaları denedim, hiçbiri bu kadar derine inmedi. OLUK farklı.',
                name: 'Zeynep T.',
                role: 'İzmir',
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} weight="fill" className="text-[#C9A962]" size={16} />
                  ))}
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-white/50 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A962]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0D4F4F]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            Hazır mısın?
          </h2>
          <p className="text-xl text-[#0D4F4F]/70 mb-4">
            Yıllardır taşıdığın soruların cevabı burada.
          </p>
          <p className="text-lg text-[#0D4F4F]/50 italic mb-12">
            (Ve evet, sen de yapabilirsin.)
          </p>

          <Link
            href="/kayit"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#0D4F4F] text-white text-lg rounded-full hover:bg-[#0D4F4F]/90 transition-all duration-300 hover:scale-105 shadow-xl shadow-[#0D4F4F]/20"
          >
            <span className="font-medium">Ücretsiz Başla</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </Link>

          <p className="mt-6 text-sm text-[#0D4F4F]/50">
            Kredi kartı gerekmez · İstediğin zaman iptal
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════════════ */}
      <footer className="py-12 px-6 bg-[#0D4F4F] text-white/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Sparkle weight="duotone" className="text-[#C9A962]" size={24} />
              <span className="font-serif text-xl text-white">OLUK</span>
            </div>
            
            <div className="flex gap-6 text-sm">
              <Link href="/hakkinda" className="hover:text-white transition-colors">Hakkında</Link>
              <Link href="/iletisim" className="hover:text-white transition-colors">İletişim</Link>
              <Link href="/gizlilik" className="hover:text-white transition-colors">Gizlilik</Link>
              <Link href="/sartlar" className="hover:text-white transition-colors">Şartlar</Link>
            </div>

            <p className="text-sm">© 2025 OLUK. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
