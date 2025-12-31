// AMAÇ Modülü İçerik Verisi
// 6 bölüm, 6 ders, 10 seans

import fs from 'fs';
import path from 'path';

export interface AmacSeans {
  id: number;
  slug: string;
  title: string;
  duration: string;
  difficulty: string;
  warning: string;
  content: string;
  sensitive?: boolean;
}

export interface AmacBolum {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  duration: string;
  dersCount: number;
  seansCount: number;
  order: number;
  ders: {
    title: string;
    duration: string;
    content: string;
    learnings: string[];
  };
  seans: AmacSeans[];
}

function loadMarkdown(file: string) {
  const filePath = path.join(process.cwd(), 'upload', file);
  return fs.readFileSync(filePath, 'utf8').trim();
}

const dersContent = {
  1: loadMarkdown('AMAC_DERS_1_1.md'),
  2: loadMarkdown('AMAC_DERS_2_1.md'),
  3: loadMarkdown('AMAC_DERS_3_1.md'),
  4: loadMarkdown('AMAC_DERS_4_1.md'),
  5: loadMarkdown('AMAC_DERS_5_1.md'),
  6: loadMarkdown('AMAC_DERS_6_1.md'),
};

const seansContent = {
  '1-1': loadMarkdown('AMAC_SEANS_1_1.md'),
  '2-1': loadMarkdown('AMAC_SEANS_2_1.md'),
  '2-2': loadMarkdown('AMAC_SEANS_2_2.md'),
  '3-1': loadMarkdown('AMAC_SEANS_3_1.md'),
  '3-2': loadMarkdown('AMAC_SEANS_3_2.md'),
  '4-1': loadMarkdown('AMAC_SEANS_4_1.md'),
  '4-2': loadMarkdown('AMAC_SEANS_4_2.md'),
  '5-1': loadMarkdown('AMAC_SEANS_5_1.md'),
  '5-2': loadMarkdown('AMAC_SEANS_5_2.md'),
  '6-1': loadMarkdown('AMAC_SEANS_6_1.md'),
};

export const amacData: {
  modulId: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  totalDuration: string;
  difficulty: string;
  requirements: string;
  introduction: string;
  bolumler: AmacBolum[];
} = {
  modulId: 'amac',
  title: 'AMAÇ',
  subtitle: 'Anlam, Yön ve Hizmet',
  icon: '🎯',
  description: 'Varoluşsal boşlukla yüzleş, değerlerini bul, ölümü hatırla, ikigai’ni çiz ve kendini aşarak hizmete dön. 6 bölüm, 10 rehberli seans.',
  totalDuration: '210-230 dakika meditasyon',
  difficulty: 'Başlangıç-Orta',
  requirements: 'AYNA ve IŞIK modüllerinden sonra önerilir',
  introduction: `Anlam arayışı hayatın temel itkisi. Bu modülde varoluşsal boşlukla dürüstçe bakışıyor, değer pusulanı netliyorsun, ölümü hatırlayıp zamanı keskinleştiriyor, ikigai haritanı çiziyor, ego sınırını gevşetip hizmete yöneliyorsun. Altı bölüm, on seans. Hepsi hareket ve eyleme bağlanıyor.`,

  bolumler: [
    {
      id: 1,
      slug: 'anlam-arayisi',
      title: 'Anlam Arayışı',
      subtitle: 'Varoluş Sorusu',
      description: 'Frankl’ın logoterapisiyle varoluşsal boşluğa bak, üç anlam kaynağını keşfet ve günlük pratiğe başla.',
      icon: '🧭',
      duration: '35-40 dk',
      dersCount: 1,
      seansCount: 1,
      order: 1,
      ders: {
        title: 'Neden?',
        duration: '15-18 dk',
        content: dersContent[1],
        learnings: [
          'Varoluşsal boşluğu ve logoterapi yaklaşımını kavramak',
          'Yaratmak, deneyimlemek ve tutumla anlam üretmek',
          'Anlam günlüğüyle günlük küçük anlamları toplamak'
        ]
      },
      seans: [
        {
          id: 1,
          slug: 'seans-1',
          title: 'Boşluğa Bakmak',
          duration: '18-20 dk',
          difficulty: 'Orta',
          warning: 'Varoluşsal boşluk duygusu tetikleyici olabilir; bunaltırsa ara ver ve bedeni hisset.',
          content: seansContent['1-1'],
          sensitive: false
        }
      ]
    },
    {
      id: 2,
      slug: 'degerler-pusulasi',
      title: 'Değerler Pusulası',
      subtitle: 'Yönü Bulmak',
      description: 'Schwartz değer haritası ve sufi edep perspektifiyle çekirdek değerlerini netleştir, beyan edilen ve yaşanan farkını gör.',
      icon: '🧭',
      duration: '35-40 dk',
      dersCount: 1,
      seansCount: 2,
      order: 2,
      ders: {
        title: 'Pusula',
        duration: '15-18 dk',
        content: dersContent[2],
        learnings: [
          'Çekirdek değerleri ve çatışmalarını fark etmek',
          'Beyan edilen ve yaşanan değer boşluğunu görmek',
          'Haftalık kalibrasyon için değer kartlarıyla pratik yapmak'
        ]
      },
      seans: [
        {
          id: 1,
          slug: 'seans-1',
          title: 'Değerlerimi Keşfetmek',
          duration: '20-22 dk',
          difficulty: 'Başlangıç',
          warning: '',
          content: seansContent['2-1'],
          sensitive: false
        },
        {
          id: 2,
          slug: 'seans-2',
          title: 'Değer Testiği',
          duration: '15-18 dk',
          difficulty: 'Orta',
          warning: '',
          content: seansContent['2-2'],
          sensitive: false
        }
      ]
    },
    {
      id: 3,
      slug: 'olum-ogretmeni',
      title: 'Ölüm Öğretmeni',
      subtitle: 'Memento Mori',
      description: 'Ölüm farkındalığıyla öncelikleri netleştir, zaman yanılsamasını kır ve yaşam şeridine kuş bakışı bak.',
      icon: '⏳',
      duration: '40-45 dk',
      dersCount: 1,
      seansCount: 2,
      order: 3,
      ders: {
        title: 'Memento Mori',
        duration: '16-18 dk',
        content: dersContent[3],
        learnings: [
          'Ölüm farkındalığını yaşam kalitesini artıran bir araç olarak görmek',
          'Zaman yanılsamasını kırıp öncelikleri netleştirmek',
          'Kendi sınırını bilip zorlanırsan destek ve erteleme kararı verebilmek'
        ]
      },
      seans: [
        {
          id: 1,
          slug: 'seans-1',
          title: 'Son Gün',
          duration: '20-22 dk',
          difficulty: 'İleri',
          warning: 'Ölüm teması derin duygular uyandırabilir; yakın kayıp, depresyon veya yoğun kaygıda isen seansı atla. Destek hattı: 182.',
          content: seansContent['3-1'],
          sensitive: true
        },
        {
          id: 2,
          slug: 'seans-2',
          title: 'Yaşam Şeridi',
          duration: '18-20 dk',
          difficulty: 'Orta-İleri',
          warning: 'Zaman ve sonluluk teması bazı kişiler için zorlayıcı olabilir; bunaltırsa ara ver. Destek hattı: 182.',
          content: seansContent['3-2'],
          sensitive: true
        }
      ]
    },
    {
      id: 4,
      slug: 'yasam-amaci',
      title: 'Yaşam Amacı',
      subtitle: 'İkigai',
      description: 'Okinawa’dan ilhamla ikigai kavramını öğren, dört daire modelini uygula ve gelecekteki beninle buluş.',
      icon: '🌅',
      duration: '40-45 dk',
      dersCount: 1,
      seansCount: 2,
      order: 4,
      ders: {
        title: 'İkigai',
        duration: '15-18 dk',
        content: dersContent[4],
        learnings: [
          'İkigai kavramını dört daire modeliyle uygulamak',
          'Kesişimlerdeki tatminsizlik tuzaklarını görmek',
          'İkigai’nin evrilen bir yön ve süreç olduğunu kabul etmek'
        ]
      },
      seans: [
        {
          id: 1,
          slug: 'seans-1',
          title: 'Dört Daire',
          duration: '22-25 dk',
          difficulty: 'Orta',
          warning: '',
          content: seansContent['4-1'],
          sensitive: false
        },
        {
          id: 2,
          slug: 'seans-2',
          title: 'Gelecek Ben',
          duration: '18-20 dk',
          difficulty: 'Başlangıç-Orta',
          warning: '',
          content: seansContent['4-2'],
          sensitive: false
        }
      ]
    },
    {
      id: 5,
      slug: 'kendini-asmak',
      title: 'Kendini Aşmak',
      subtitle: 'Egonun Ötesi',
      description: 'Maslow’un ek katmanı ve sufi perspektifle ego sınırını gevşet, birlik ve hizmet duygusunu deneyimle.',
      icon: '🌊',
      duration: '40-45 dk',
      dersCount: 1,
      seansCount: 2,
      order: 5,
      ders: {
        title: 'Daha Büyük Bir Şey',
        duration: '16-18 dk',
        content: dersContent[5],
        learnings: [
          'Kendini gerçekleştirme ile kendini aşma farkını görmek',
          'Ego tuzaklarını ve spiritüel bypass riskini fark etmek',
          'Hizmet, aşk ve dava ekseninde küçük adımlarla egoyu yumuşatmak'
        ]
      },
      seans: [
        {
          id: 1,
          slug: 'seans-1',
          title: 'Damladan Denize',
          duration: '22-25 dk',
          difficulty: 'İleri',
          warning: 'Mistik birlik hissi bazı kişilerde güçlü duygular uyandırabilir; bunaltırsa ara ver.',
          content: seansContent['5-1'],
          sensitive: false
        },
        {
          id: 2,
          slug: 'seans-2',
          title: 'Hizmet Meditasyonu',
          duration: '18-20 dk',
          difficulty: 'Başlangıç-Orta',
          warning: '',
          content: seansContent['5-2'],
          sensitive: false
        }
      ]
    },
    {
      id: 6,
      slug: 'anlamli-eylem',
      title: 'Anlamlı Eylem',
      subtitle: 'Niyet ve Sistem',
      description: 'Bilgi-eylem uçurumunu niyet, himmet ve mikro adımlarla kapat; sistem kurup son taahhüdünü yap.',
      icon: '🚀',
      duration: '35-40 dk',
      dersCount: 1,
      seansCount: 1,
      order: 6,
      ders: {
        title: 'Yaşamak',
        duration: '14-16 dk',
        content: dersContent[6],
        learnings: [
          'Bilgi-eylem boşluğunu niyet ve mikro adımlarla kapatmak',
          'Hedef yerine sistem kurmanın önemini görmek',
          'Küçük taahhütlerle öz-güveni yeniden inşa etmek'
        ]
      },
      seans: [
        {
          id: 1,
          slug: 'seans-1',
          title: 'Niyet ve Eylem',
          duration: '20-25 dk',
          difficulty: 'Orta',
          warning: '',
          content: seansContent['6-1'],
          sensitive: false
        }
      ]
    }
  ]
};
