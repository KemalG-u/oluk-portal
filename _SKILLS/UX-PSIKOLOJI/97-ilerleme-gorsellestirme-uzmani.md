# 97 - İLERLEME GÖRSELLEŞTİRME UZMANI

## KİMLİK
**Kod:** 97-PROGRESS-VIZ
**Rol:** İlerleme Görselleştirme Uzmanı
**Departman:** UX-PSİKOLOJİ
**Bağlı:** 00-Beyin, 24-Gamification Uzmanı, 50-Analytics
**Seviye:** Uzman

## AMAÇ
OLUK kullanıcılarının spiritüel yolculuklarını görsel olarak takip etmelerini sağlamak. Motivasyon artırıcı progress gösterimleri tasarlamak. Data visualization best practices uygulamak.

## TEMEL PRENSİPLER

### İlerleme Görselleştirme Felsefesi
- Motivate, don't intimidate
- Celebrate small wins
- Show growth over time
- Clear and beautiful
- Personalized milestones

## VİZUALİZASYON TÜRLERİ

### 1. Streak Visualization
```
STREAK RING:
       ╭──────────╮
      ╱     12     ╲
     │    GÜNLÜK    │
     │     🔥       │
      ╲   SERI     ╱
       ╰──────────╯
   
   En uzun: 21 gün
   
STREAK CALENDAR:
Aralık 2024
Pzt Sal Çar Per Cum Cmt Paz
                        1●
2●  3●  4●  5●  6●  7○  8●
9●  10● 11● 12● 13  14  15
...

● = Tamamlandı  ○ = Bugün  
```

### 2. Haftalık İlerleme
```
BU HAFTA:
█████░░ 5/7 gün

Pzt  Sal  Çar  Per  Cum  Cmt  Paz
 ●    ●    ●    ●    ●    ○    ○
10dk 15dk 10dk 20dk 5dk

Toplam: 60 dakika meditasyon
Hedef: 70 dakika ✓ %86
```

### 3. Aylık Progress
```
ARALIK 2024

Tamamlanan Gün: ████████████████░░░░ 20/31
Toplam Süre: 5 saat 30 dk
Seans Sayısı: 25

KATEGORI DAĞILIMI:
Uyku      ████████ 35%
Stres     ██████ 25%
Sabah     ████ 18%
Diğer     █████ 22%
```

### 4. Yolculuk Haritası
```
SENİN YOLCULUĞUN

Başlangıç ─────●───────●────────●────────○ Şimdi
            İlk      7 gün    21 gün    ↓
           seans    streak    streak   Hedef
                                       100 gün

Geçen süre: 45 gün
Toplam seans: 52
Toplam süre: 8.5 saat
```

### 5. Radar Chart (Skill Development)
```
        Nefes
          │
    Uyku ─┼─ Odaklanma
         ╱│╲
        ╱ │ ╲
       ╱  │  ╲
Stres ────┼──── Farkındalık
       ╲  │  ╱
        ╲ │ ╱
         ╲│╱
    Sabah─┼─Akşam
          │
        Şifa
```

## COMPONENT LIBRARY

### Progress Ring
```jsx
// ProgressRing component
function ProgressRing({ 
  progress, // 0-100
  size = 120,
  strokeWidth = 8,
  color = "#C9A962"
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;
  
  return (
    <svg width={size} height={size}>
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#E0E0E0"
        strokeWidth={strokeWidth}
      />
      {/* Progress circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}
```

### Streak Calendar
```jsx
// StreakCalendar component
function StreakCalendar({ data, month }) {
  const days = generateMonthDays(month);
  
  return (
    <div className="grid grid-cols-7 gap-1">
      {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map(day => (
        <div key={day} className="text-xs text-center text-gray-500">
          {day}
        </div>
      ))}
      {days.map(day => (
        <DayCell 
          key={day.date}
          date={day.date}
          completed={data[day.date]?.completed}
          isToday={day.isToday}
          duration={data[day.date]?.duration}
        />
      ))}
    </div>
  );
}

function DayCell({ date, completed, isToday, duration }) {
  return (
    <div className={`
      w-8 h-8 rounded-full flex items-center justify-center text-sm
      ${completed ? 'bg-primary text-white' : 'bg-gray-100'}
      ${isToday ? 'ring-2 ring-accent' : ''}
    `}>
      {date.getDate()}
    </div>
  );
}
```

### Journey Map
```jsx
// JourneyMap component
function JourneyMap({ milestones, currentProgress }) {
  return (
    <div className="relative">
      {/* Progress line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent"
          style={{ width: `${currentProgress}%` }}
        />
      </div>
      
      {/* Milestones */}
      <div className="flex justify-between relative">
        {milestones.map((milestone, i) => (
          <MilestoneNode
            key={i}
            {...milestone}
            achieved={milestone.progress <= currentProgress}
          />
        ))}
      </div>
    </div>
  );
}
```

## ANİMASYONLAR

### Celebration Animations
```javascript
// Confetti for milestones
const celebrateConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    colors: ['#0D4F4F', '#C9A962', '#F5F0E6'],
    origin: { y: 0.6 }
  });
};

// Number count-up
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  
  return <span>{count}</span>;
};
```

## VERİ GÖRSELLEŞTİRME

### Charts Library (Recharts)
```jsx
// Weekly activity chart
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

function WeeklyActivityChart({ data }) {
  return (
    <AreaChart width={300} height={150} data={data}>
      <defs>
        <linearGradient id="colorDuration" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#0D4F4F" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#0D4F4F" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="day" tickLine={false} axisLine={false} />
      <YAxis hide />
      <Tooltip />
      <Area 
        type="monotone" 
        dataKey="duration" 
        stroke="#0D4F4F" 
        fill="url(#colorDuration)" 
      />
    </AreaChart>
  );
}
```

## EKRAN TASARIMLARI

### Profile Progress Tab
```
┌─────────────────────────────────┐
│ ← İlerleme                      │
├─────────────────────────────────┤
│                                 │
│    ╭──────────╮                 │
│   ╱    45     ╲   Toplam        │
│  │    SEANS    │   5.5 saat    │
│   ╲           ╱   meditasyon   │
│    ╰──────────╯                 │
│                                 │
│ BU HAFTA                        │
│ █████░░ 5/7 gün                 │
│                                 │
│ [Haftalık] [Aylık] [Tüm Zaman]  │
│                                 │
│ ┌───────────────────────────┐   │
│ │  Weekly Activity Chart    │   │
│ └───────────────────────────┘   │
│                                 │
│ YOLCULUK                        │
│ ●──●──●──○──○──○──○             │
│ 1  7  21 30 60 90 100 gün       │
│                                 │
└─────────────────────────────────┘
```

## METRİKLER

```yaml
progress_viz_metrics:
  engagement:
    progress_tab_views: [sayı]
    avg_time_on_progress: "[saniye]"
    share_progress_rate: "[%]"
    
  impact:
    users_checking_weekly: "[%]"
    motivation_survey_score: "[1-5]"
    
  ux:
    viz_comprehension_rate: "[%]"
    feature_satisfaction: "[1-5]"
```

## ÇIKTI FORMATI

```yaml
ilerleme_gosterimi:
  id: "PROG-[numara]"
  user_id: "[user_id]"
  
  overview:
    total_sessions: [sayı]
    total_minutes: [sayı]
    current_streak: [sayı]
    longest_streak: [sayı]
    
  visualizations:
    - type: "[streak_ring/calendar/journey]"
      data: "[data object]"
```

## ETKİLEŞİM

### Kimden Alır
- 50-Analytics: User progress data
- 24-Gamification: Milestone definitions
- 69-Animasyon: Animation assets

### Kime Verir
- 18-Frontend: Visualization components
- 28-Sosyal Medya: Shareable progress cards
- 90-Widget: Widget progress displays

---
*Son Güncelleme: 29 Aralık 2024*
*Versiyon: 1.0*
