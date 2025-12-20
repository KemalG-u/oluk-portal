'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  DoorOpen, 
  Sparkle, 
  ArrowRight,
  Circle,
  Heart,
  UsersThree,
  Hourglass,
  Compass,
  Path,
  Star,
  Stairs,
  Clock,
  Key,
  BookOpen
} from '@phosphor-icons/react';

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation with IntersectionObserver (performanslı)
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -100px 0px' }
    );
    
    revealElements.forEach(el => observer.observe(el));
    
    // Parallax - debounced ve passive
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const decors = document.querySelectorAll('[data-parallax]');
          const x = e.clientX / window.innerWidth;
          const y = e.clientY / window.innerHeight;
          
          decors.forEach((decor, i) => {
            const speed = (i + 1) * 10;
            (decor as HTMLElement).style.transform = `translate(${x * speed}px, ${y * speed}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      observer.disconnect();
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-8 py-8 bg-gradient-to-b from-cream-light to-cream overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(201, 169, 98, 0.12) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(13, 79, 79, 0.08) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(122, 158, 126, 0.05) 0%, transparent 60%)'
          }} />
        </div>

        {/* Decorative Elements */}
        <div data-parallax className="absolute top-[10%] left-[5%] w-[120px] h-[120px] border border-gold-muted rounded-full opacity-20 animate-float" />
        <div data-parallax className="absolute top-[20%] right-[10%] w-20 h-20 border border-teal rotate-45 opacity-15 animate-float-slow" />
        <div data-parallax className="absolute bottom-[15%] left-[8%] w-[60px] h-[60px] border border-sage opacity-20 animate-float" style={{ animationDuration: '12s' }} />
        <div data-parallax className="absolute bottom-[25%] right-[5%] w-[100px] h-[100px] rounded-full border border-gold opacity-15 animate-float-slow" style={{ animationDuration: '9s' }} />

        <div className="relative z-10 max-w-[800px]">
          {/* Door Icon */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-20 h-[120px] mx-auto relative">
              <div className="w-full h-full border-2 border-gold rounded-t-[40px] relative overflow-hidden bg-gradient-to-br from-gold/10 to-transparent">
                <div className="absolute right-[-2px] top-0 bottom-0 w-5 bg-gradient-to-l from-gold/40 to-transparent animate-pulse-glow" />
                <div className="absolute right-[15px] top-1/2 w-2 h-2 bg-gold rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 text-sm tracking-[0.15em] text-teal mb-8 px-6 py-3 border border-gold-muted rounded-full bg-white/60 backdrop-blur-sm"
          >
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-gold rounded-full animate-heartbeat" />
              <div className="w-1.5 h-1.5 bg-gold rounded-full animate-heartbeat" style={{ animationDelay: '0.2s' }} />
              <div className="w-1.5 h-1.5 bg-gold rounded-full animate-heartbeat" style={{ animationDelay: '0.4s' }} />
            </div>
            Beş bin kalp. Tek bir ritim.
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-7xl lg:text-8xl text-teal mb-2 tracking-tight"
            style={{ textShadow: '0 4px 30px rgba(13, 79, 79, 0.1)' }}
          >
            Dur.
            <span className="block text-[0.5em] text-gold italic mt-2">Ve Hatırla.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-text-muted max-w-[500px] mx-auto my-8 leading-[1.9]"
          >
            On konaklık bir yolculuk.<br />
            Malumat yığını değil, <strong className="text-teal font-medium">halden hale geçiş</strong>.<br />
            Bilmek için değil, <strong className="text-teal font-medium">olmak</strong> için.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Kapıyı Arala Butonu */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <Link 
                href="/dersler" 
                className="inline-flex items-center gap-3 px-10 py-[1.1rem] bg-teal text-cream font-serif text-xl font-medium tracking-[0.05em] rounded border-2 border-teal transition-all duration-300 hover:bg-teal-light hover:shadow-[0_10px_30px_rgba(13,79,79,0.3)] relative overflow-hidden"
              >
                <DoorOpen size={24} weight="duotone" className="relative z-10" />
                <span className="relative z-10">Kapıyı Arala</span>
                <ArrowRight size={20} weight="bold" className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </Link>
              
              {/* Tooltip */}
              <span className="absolute -bottom-24 left-1/2 -translate-x-1/2 bg-gray-900/95 text-white text-sm px-4 py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-80 text-center leading-relaxed pointer-events-none z-50 shadow-xl">
                On menzillik bir sefer, kendinden kendine. Eşiği geç, ruhun yeni mevsimine ilk adımı at.
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900/95 rotate-45" />
              </span>
            </motion.div>

            {/* Sırdaş Butonu */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <Link 
                href="/sirdas" 
                className="inline-flex items-center gap-3 px-10 py-[1.1rem] bg-gradient-to-br from-gold to-gold/90 text-white font-serif text-xl font-medium tracking-[0.05em] rounded border-2 border-gold transition-all duration-300 hover:shadow-[0_10px_30px_rgba(201,169,98,0.4)] relative overflow-hidden"
              >
                <Sparkle size={24} weight="duotone" className="relative z-10" />
                <span className="relative z-10">Sırdaş</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </Link>
              
              {/* Tooltip */}
              <span className="absolute -bottom-24 left-1/2 -translate-x-1/2 bg-gray-900/95 text-white text-sm px-4 py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-80 text-center leading-relaxed pointer-events-none z-50 shadow-xl">
                Gecenin her vaktinde açık bir kapı; sırrını ver, sükûneti al. Kelâmın süzüldüğü sadık bir yankı.
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900/95 rotate-45" />
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="relative py-32 px-8 bg-teal text-cream overflow-hidden">
        {/* Wave transition */}
        <div className="absolute top-[-50px] left-0 right-0 h-[100px] bg-cream" style={{ clipPath: 'ellipse(70% 100% at 50% 0%)' }} />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* Listen Icon */}
            <div className="w-[60px] h-[60px] mx-auto mb-6 relative">
              <div className="w-10 h-[50px] border-2 border-gold mx-auto relative" style={{ borderRadius: '50% 50% 45% 45%' }}>
                <div className="absolute top-2.5 left-2 w-5 h-[25px] border border-gold-muted rounded-full opacity-60" />
              </div>
              <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 flex gap-1">
                <div className="w-0.5 h-[15px] bg-gold rounded animate-sound-wave" />
                <div className="w-0.5 h-[25px] bg-gold rounded animate-sound-wave" style={{ animationDelay: '0.2s' }} />
                <div className="w-0.5 h-5 bg-gold rounded animate-sound-wave" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl text-gold mb-4">Bu Ses Tanıdık mı?</h2>
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="w-[60px] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="w-2 h-2 bg-gold rotate-45" />
              <div className="w-[60px] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { text: "Gecen uykusuz.\nGündüzün ruhsuz.\nTakvim yaprakları anlamsız." },
              { text: "Çok okudun. Çok dinledin. Çok aradın.\nAma o boşluk dolmadı." },
              { text: "Bir sızı.\nTam şurada.\nAdı yok. Yeri belli." },
              { text: "Bir hevesle başla.\nBir hüsranla bırak.\nBu kısır döngü kaderin değil." }
            ].map((pain, i) => (
              <div key={i} className="reveal text-center p-10 rounded-xl bg-white/[0.03] border border-gold/20 transition-all duration-400 hover:bg-white/[0.06] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-transparent before:via-gold-muted before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                <p className="text-lg leading-[1.9] text-cream/90 whitespace-pre-line">{pain.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="relative py-32 px-8 bg-cream-light overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* Compass Icon */}
            <div className="w-[70px] h-[70px] mx-auto mb-6 relative">
              <div className="w-[60px] h-[60px] border-2 border-teal rounded-full mx-auto relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px]">
                  <div className="absolute top-1/2 left-1/2 w-0.5 h-[25px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-gold via-gold to-teal animate-compass-wobble origin-center" />
                </div>
              </div>
            </div>

            <h2 className="text-5xl md:text-7xl text-teal mb-4">Usûlümüz</h2>
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="w-[60px] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="w-2 h-2 bg-gold rotate-45" />
              <div className="w-[60px] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Circle, title: "Kırık ayna değil, tam suret.", text: "Tesadüf yok. Tertip var. Başı belli, sonu aydınlık." },
              { icon: Heart, title: "Seyretmek yok. Yaşamak var.", text: "Satırda kalmaz, sadra şifa olur." },
              { icon: UsersThree, title: "Yol uzun. Ama tenhada yürümüyorsun.", text: "Binlerce nefes, tek bir niyet. Omuz omuza." },
              { icon: Hourglass, title: "Otuz yılın imbiğinden süzüldü.", text: "Posası atıldı. Özü kaldı. Sana uzanan bir el." }
            ].map((feature, i) => (
              <div key={i} className="reveal group p-10 bg-cream rounded-xl border-l-4 border-gold transition-all duration-400 hover:shadow-[0_25px_50px_rgba(13,79,79,0.1)] hover:-translate-y-1.5 relative overflow-hidden after:absolute after:top-0 after:right-0 after:w-[100px] after:h-[100px] after:bg-[radial-gradient(circle,_rgba(201,169,98,0.1)_0%,_transparent_70%)] after:pointer-events-none">
                <feature.icon 
                  size={40} 
                  weight="duotone" 
                  color="#C9A962" 
                  className="mb-4 transition-transform duration-300 group-hover:scale-110" 
                />
                <h3 className="text-2xl text-teal mb-4 leading-[1.4]">{feature.title}</h3>
                <p className="text-text-muted leading-[1.8]">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-32 px-8 bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            {/* Map Icon */}
            <div className="w-[60px] h-[50px] mx-auto mb-6 relative">
              <div className="w-[50px] h-10 border-2 border-teal rounded mx-auto relative bg-gradient-to-r from-transparent via-teal/10 to-transparent" style={{
                backgroundImage: 'linear-gradient(90deg, transparent 30%, rgba(13, 79, 79, 0.1) 30%, rgba(13, 79, 79, 0.1) 33%, transparent 33%, transparent 66%, rgba(13, 79, 79, 0.1) 66%, rgba(13, 79, 79, 0.1) 69%, transparent 69%)'
              }}>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-3.5">
                  <div className="absolute w-2.5 h-2.5 bg-gold rounded-full" style={{ borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)' }} />
                </div>
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl text-teal mb-4">Yol Haritası</h2>
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="w-[60px] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="w-2 h-2 bg-gold rotate-45" />
              <div className="w-[60px] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[35px] top-20 bottom-20 w-[3px] bg-gradient-to-b from-gold via-sage to-teal rounded-full" />
            
            {[
              { icon: Compass, num: "I", title: "Niyet", text: "Kapı açık. Kilit yok. Bedel yok.\nSadece gir ve gör." },
              { icon: Path, num: "II", title: "Sebat", text: "Acele etme. Her gün bir damla.\nKendi ritminde. Sindire sindire." },
              { icon: Star, num: "III", title: "Vuslat", text: "On adımın sonunda.\nEski sen geride. Yeni bir yüz aynada." }
            ].map((step, i) => (
              <div key={i} className="reveal flex gap-10 py-10">
                <div className="group w-[70px] h-[70px] bg-cream border-[3px] border-gold rounded-full flex items-center justify-center font-serif text-3xl text-teal shrink-0 relative z-10 shadow-[0_5px_20px_rgba(201,169,98,0.2)] transition-all duration-300 hover:bg-gold hover:text-cream hover:scale-110">
                  <step.icon size={32} weight="duotone" className="absolute opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:opacity-0 transition-opacity">{step.num}</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl text-gold mb-3 uppercase tracking-[0.15em]">{step.title}</h3>
                  <p className="text-text-muted text-lg leading-[1.9] whitespace-pre-line">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="relative py-32 px-8 bg-gradient-to-br from-sage to-teal text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'20\' fill=\'none\' stroke=\'white\' stroke-width=\'0.5\'/%3E%3C/svg%3E")'
        }} />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-cream mb-4">Heybende Ne Var?</h2>
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="w-[60px] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="w-2 h-2 bg-gold rotate-45" />
              <div className="w-[60px] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Stairs, title: "On Basamak", text: "Temelden çatıya.\nTaş taş üstüne.\nSağlam bir inşâ." },
              { icon: Clock, title: "Vakitler", text: "Seherde uyanış. Gecede duruluş.\nGünün her saati için bir sığınak." },
              { icon: Key, title: "Anahtarlar", text: "Nefes. Ses. Söz. Ve sükûnet.\nTabiatın kendi lisanı." },
              { icon: BookOpen, title: "İrfan Hazinesi", text: "Kelimelerin kökü.\nSembollerin sırrı.\nMerakın şifası." }
            ].map((card, i) => (
              <div key={i} className="reveal group bg-white/[0.08] backdrop-blur-md p-10 rounded-2xl text-center border border-white/15 transition-all duration-400 hover:bg-white/[0.12] hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.2)] relative overflow-hidden before:absolute before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_0%,_transparent_50%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-400">
                <card.icon 
                  size={40} 
                  weight="duotone" 
                  color="#C9A962" 
                  className="mx-auto mb-4 relative z-10 transition-transform duration-300 group-hover:scale-110" 
                />
                <h3 className="text-2xl text-gold-muted mb-4 relative z-10">{card.title}</h3>
                <p className="text-[15px] leading-[1.9] text-cream/85 whitespace-pre-line relative z-10">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOCA SECTION */}
      <section className="relative py-32 px-8 bg-cream text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(201,169,98,0.08)_0%,_transparent_70%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="mb-16">
            {/* Guide Icon */}
            <div className="w-20 h-20 mx-auto mb-6 relative">
              <div className="w-[70px] h-[70px] border-2 border-teal rounded-full mx-auto relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-[18px] h-[18px] border-2 border-teal rounded-full mx-auto mb-1" />
                  <div className="w-[25px] h-[15px] border-2 border-teal border-b-0 rounded-t-xl" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-gold opacity-50" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-gold opacity-50" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-gold opacity-50" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-gold opacity-50" />
              </div>
            </div>

            <h2 className="text-5xl md:text-7xl text-teal italic mb-4">Mihmandar</h2>
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="w-[60px] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="w-2 h-2 bg-gold rotate-45" />
              <div className="w-[60px] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </div>
          
          <div className="reveal">
            <p className="text-xl text-text-muted leading-[2.1]">
              Otuz yıl birikti. <strong className="text-teal font-medium">Demlendi.</strong> Oldu.<br />
              Eskinin hikmeti, yeninin diliyle.<br />
              Şimdi, parmaklarının ucunda.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-32 px-8 bg-cream-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-teal mb-4">Yol Arkadaşlarının Sesi</h2>
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="w-[60px] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="w-2 h-2 bg-gold rotate-45" />
              <div className="w-[60px] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Dağınıktım, toplandım. Aradığım dışarıda değilmiş, yolu bulunca anladım.", author: "Ayşe, İstanbul" },
              { quote: "Yarım bırakmaktan yorulmuştum. Bu kez sürüyor. Oyun zannettim, hayatım ciddileşti.", author: "Zeynep, Ankara" },
              { quote: "Sabahlarımın rengi değişti. Beş nefes... Meğer bütün mesele doğru solukmuş.", author: "Fatma, İzmir" }
            ].map((testimonial, i) => (
              <div key={i} className="reveal bg-cream p-10 rounded-xl relative border-b-4 border-gold shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] before:absolute before:top-6 before:left-6 before:w-10 before:h-[30px] before:bg-[url('data:image/svg+xml,%3Csvg%20width=%2740%27%20height=%2730%27%20viewBox=%270%200%2040%2030%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M0%2030V18C0%2012%201.5%207.5%204.5%204.5C7.5%201.5%2012%200%2018%200V6C14%206%2011%207%209%209C7%2011%206%2014%206%2018H16V30H0ZM24%2030V18C24%2012%2025.5%207.5%2028.5%204.5C31.5%201.5%2036%200%2042%200V6C38%206%2035%207%2033%209C31%2011%2030%2014%2030%2018H40V30H24Z%27%20fill=%27%23C9A962%27%20opacity=%270.2%27/%3E%3C/svg%3E')] before:bg-no-repeat">
                <p className="text-lg italic text-text-dark leading-[1.9] mb-6 pt-4 relative z-10">{testimonial.quote}</p>
                <cite className="not-italic text-teal font-medium text-[15px] flex items-center gap-2">
                  <span className="w-5 h-0.5 bg-gold" />
                  {testimonial.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-40 px-8 bg-teal text-center overflow-hidden">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,_rgba(201,169,98,0.15)_0%,_transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 0L100 50L50 100L0 50z\' fill=\'none\' stroke=\'%23C9A962\' stroke-width=\'0.5\' opacity=\'0.1\'/%3E%3C/svg%3E")'
        }} />
        
        <div className="relative z-10">
          {/* Hourglass Icon */}
          <div className="w-[70px] h-[70px] mx-auto mb-8 relative">
            <div className="w-10 h-[60px] mx-auto relative">
              <div className="absolute top-0 w-10 h-[25px] border-2 border-gold rounded-t-[20px]" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)' }} />
              <div className="absolute bottom-0 w-10 h-[25px] border-2 border-gold rounded-b-[20px]" style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0 100%)' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-[15px] bg-gold animate-sand-flow" />
            </div>
          </div>
          
          <h2 className="text-6xl md:text-7xl text-gold mb-6" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.2)' }}>
            Vakit Geldi
          </h2>
          <p className="text-xl text-cream/85 max-w-[500px] mx-auto mb-12 leading-[2]">
            Mesafe yok. Engel yok.<br />
            Kapı aralık.<br />
            Sadece girmen gerek.
          </p>
          <Link 
            href="#" 
            className="inline-flex items-center gap-3 px-14 py-5 bg-gold text-teal font-serif text-[1.3rem] font-semibold tracking-[0.05em] rounded transition-all duration-400 hover:bg-cream hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] relative overflow-hidden group"
          >
            <span className="relative z-10">Yola Çık</span>
            <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-20 px-8 bg-[#1a1a1a] text-center">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 0L40 20L20 40L0 20z\' fill=\'none\' stroke=\'%23C9A962\' stroke-width=\'0.3\' opacity=\'0.05\'/%3E%3C/svg%3E")'
        }} />
        
        <div className="relative z-10">
          <div className="font-serif text-5xl text-gold mb-3 tracking-[0.3em]">OLUK</div>
          <div className="text-lg text-cream/60 mb-6 italic">Akışın Yatağı. Ruhun Ocağı.</div>
          <p className="text-[15px] text-cream/40 max-w-md mx-auto leading-[1.8]">
            Şehrin gürültüsünde bir sığınak. Dijital bir mağara.
          </p>
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-1 h-1 bg-gold rounded-full opacity-40" />
            <div className="w-1 h-1 bg-gold rounded-full opacity-40" />
            <div className="w-1 h-1 bg-gold rounded-full opacity-40" />
          </div>
        </div>
      </footer>
    </main>
  );
}
