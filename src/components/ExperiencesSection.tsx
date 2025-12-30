'use client';

import { Sparkle } from '@phosphor-icons/react';

const experiences = [
  {
    title: 'Enerji Hissetme',
    subtitle: 'Avuçlarında bir sıcaklık, kimse görmedi.',
    body: ['Bir anda karıncalandı ellerin.', 'Sebep yoktu; içinden bir dalga geçti.', '(Ya biri fark ederse?)', 'Normal: Bedenin konuşuyor, sen duyuyorsun.'],
  },
  {
    title: 'Déjà Vu',
    subtitle: 'Zaman büküldü; sahne tanıdık.',
    body: ['Daha önce yaşamış gibiydin.', 'Aynı koku, aynı ışık, aynı susuş.', '(Neden tekrar?)', 'Hatırla: Zamanın kıvrımları bazen görünür olur.'],
  },
  {
    title: 'Sezgisel Bilme',
    subtitle: 'Biliyordun, kimse söylemedi.',
    body: ['Telefon çalmadan önce kimin aradığını bildin.', 'Açıklaması yoktu; içinden geldi.', '(Ya tesadüfse?)', 'Değil: Sezgi, bedenin en eski dili.'],
  },
  {
    title: 'Rüya Deneyimleri',
    subtitle: 'Uyandığında gerçekti; hâlâ hatırlıyorsun.',
    body: ['Rüyanda gördüğün sonra oldu.', 'Ya da orada birine kavuştun, uyanınca yok oldu.', '(Sadece hayal miydi?)', 'Rüya da bir kapı; bazıları açık bırakılır.'],
  },
  {
    title: 'Enerji Bulaşması',
    subtitle: 'Birinin yanından geçtin; halin değişti.',
    body: ['Neşeli girdin, yorgun çıktın.', 'Kalabalıktan sonra tükenmiştin.', '(Neden bu kadar etkileniyorum?)', 'Enerji sınır tanımaz; ama sen sınır çizebilirsin.'],
  },
  {
    title: 'Mekan Hafızası',
    subtitle: 'Duvarlarda bir şey vardı; sen hissettin.',
    body: ['Eve girdin, içini bir ağırlık sardı.', 'Ya da tam tersi: Aniden huzur buldun.', '(Mekanlar konuşur mu?)', 'Evet: Taşlar hatırlar, duvarlar saklar.'],
  },
  {
    title: 'Ani Duygu Dalgası',
    subtitle: 'Sebepsiz ağladın; ya da güldün.',
    body: ['Hiçbir şey olmamıştı; ama boğazın düğümlendi.', 'Gözyaşı geldi, neden bilmedin.', '(Ne oluyor bana?)', 'Ruhu olan bedende dalgalar normal.'],
  },
  {
    title: 'Eşzamanlılık',
    subtitle: 'Düşündüğün anda karşına çıktı.',
    body: ['Birini hatırladın, o aradı.', 'Bir şeye ihtiyacın vardı, önüne düştü.', '(Tesadüf olamaz bu kadar!)', 'Değil: Evren seninle konuşuyor.'],
  },
  {
    title: 'Bedensel Bilgelik',
    subtitle: 'Sırtın ürperdi; biri bakıyordu.',
    body: ['Döndün, haklıydın.', 'Miğden sıkıştı bir karardan önce.', '(Bedenime güvenebilir miyim?)', 'Evet: Beden yalan söylemez, sen dinle.'],
  },
  {
    title: 'Mistik Deneyim',
    subtitle: 'Bir an için her şey durdu.',
    body: ['Işıkla doldu içi; boşlukta huzur.', 'Konuşamadın; gerek yoktu.', '(Ne oldu bana?)', 'Bu da bir kapı; adını koymak şart değil.'],
  },
  {
    title: 'Çocukluk Deneyimleri',
    subtitle: 'Küçükken gördün; kimseye anlatmadın.',
    body: ['Dolabın arkasında ışık, gece duyulan adımlar.', 'O an sustun; büyüyünce hatırladın.', '(Ya deli deselerdi?)', 'Masumiyetin gördükleri gerçekti; sadece saklandı.'],
  },
  {
    title: 'Açıklanamayan Anlar',
    subtitle: 'Bir an sustu dünya; anlam aradın.',
    body: ['Her şey aynı anda oldu, hiçbir şey açıklanmadı.', 'Kalbin hızlandı, sonra yavaşladı.', '(Neye tanık oldum?)', 'Bazen açıklama yok; deneyim var ve tanıklık kâfi.'],
  },
];

export function ExperiencesSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-[#F5F0E6] overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 20% 20%, rgba(201,169,98,0.15) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(13,79,79,0.12) 0%, transparent 45%), radial-gradient(circle at 50% 80%, rgba(122,158,126,0.1) 0%, transparent 50%)'}} />
      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A962]/40 bg-white/60 backdrop-blur">
            <Sparkle size={18} weight="duotone" className="text-[#C9A962]" />
            <span className="text-sm tracking-[0.2em] text-[#0D4F4F]">12 DENEYİM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0D4F4F]">Sana da oldu</h2>
          <p className="text-[#0D4F4F]/70 max-w-2xl mx-auto leading-relaxed">Her biri tanıdık bir dalga. Sen de yaşadın. Normal. Adını koyalım, nefes alalım.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, idx) => (
            <div key={exp.title} className="group relative p-8 rounded-2xl bg-white shadow-[0_15px_40px_rgba(13,79,79,0.08)] border border-[#C9A962]/20 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{background:'linear-gradient(135deg, rgba(201,169,98,0.2), rgba(13,79,79,0.15))'}} />
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm uppercase tracking-[0.2em] text-[#C9A962]">{String(idx + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-2xl font-serif text-[#0D4F4F] mb-2">{exp.title}</h3>
              <p className="text-[#C9A962] mb-4 italic">{exp.subtitle}</p>
              <div className="space-y-2 text-[#0D4F4F]/70 leading-[1.8]">
                {exp.body.map((line, i) => (<p key={i} className={line.startsWith('(') ? 'italic text-[#0D4F4F]/50' : ''}>{line}</p>))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center pt-8">
          <a href="/deneyimler" className="inline-flex items-center gap-3 px-8 py-4 bg-[#0D4F4F] text-white rounded-full hover:bg-[#0D4F4F]/90 transition-all duration-300 hover:scale-105 shadow-lg">
            <span className="font-medium">Deneyimini Keşfet</span>
            <Sparkle size={20} weight="duotone" />
          </a>
        </div>
      </div>
    </section>
  );
}
