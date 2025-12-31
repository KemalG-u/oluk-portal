// AMAÇ Modülü İçerik Verisi
// 6 bölüm, 6 ders, 10 seans

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
        content: `Viktor Frankl Auschwitz’te bile “neden” sorusuna tutundu ve logoterapiyi doğurdu. Modern hayat konfor sunarken içimizde varoluşsal bir boşluk bırakıyor. Frankl üç anlam kaynağı önerir: yaratmak (eser, emek, çocuk, kod), deneyimlemek (doğa, sanat, sevgi) ve tutum (değiştiremediğin acıya yaklaşım). Anlam bazen bulunur, bazen inşa edilir; dışarıdaki malzemeyi nasıl işleyeceğimiz bize kalır. Küçük anlamlar da değerlidir; sabah kahvesi, bir arkadaşla gülmek, biten bir iş. Sufi gelenekte zahir ve batın ayrımı, “kendini bil” çağrısı anlamın içsel boyutunu hatırlatır. Frankl’ın sorusu perspektifi çevirir: “Hayat benden ne bekliyor?” Bu hafta her gece kısa bir anlam günlüğü tutarak (ne yarattım, ne deneyimledim, zor anlara nasıl yaklaştım) boşluğa tohumlar ekiyoruz. Anlamsızlık derinleşip hiçbir şeyin anlamı yok hale geliyorsa bu depresyon belirtisi olabilir; profesyonel destek ve 182 hattı hatırlatılır.`,
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
          content: `Hazırlık nefesleriyle beden gevşiyor. İçteki varoluşsal boşluk karanlık bir oda gibi hayal edilip yargısızca izleniyor. Seans boyunca iki kez “Neden yaşıyorum?” sorusu soruluyor; cevap zorunlu değil, sorunun kendisi önemli. Boşluğa anlam tohumları ekleniyor: hayatına anlam veren küçük veya büyük şeyler o alana bırakılıyor. Kapanışta nefese dönülüyor, bedene ve odaya yerleşiliyor; hisler kısa bir notla somutlanıyor.`,
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
        content: `Değer, uğruna fedakarlık yapabildiğin şeydir; hedefler biter, değerler yön verir. Schwartz’ın on değeri (öz-yönelim, uyarılma, hazcılık, başarı, güç, güvenlik, uyum, gelenek, iyilikseverlik, evrenselcilik) birbirine zıt ve yakın ilişkiler kurar; çatışmalar seçim gerektirir. Değerler aile, kültür ve deneyimle gelir ama seçilebilir. Beyan edilen değerlerle yaşanan değerler arasında fark oluşabilir; hiyerarşini bilmek kararları kolaylaştırır. Tasavvuf edep, sabır, şükür, tevekkül, kanaat ve hizmet vurgusuyla egoyu yumuşatır. Keşif soruları: zirve anları, öfke anları, kahramanlar ve “son gün” senaryosu. Pratik olarak değer kartları hazırlanır, sıralanır ve ilk üç çekirdek değer seçilir.`,
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
          content: `Zirve anı, öfke anı ve hayran olunan kahraman üzerinden üç değer kaynağına gidiliyor. Her sahnede beden duyumu ve duygularla yaşanan/çiğnenen değerler bulunuyor. Son bölümde ortak tema ve çekirdek değerler pusula metaforuyla bir araya getiriliyor; seans sonunda üç değer not ediliyor.`,
          sensitive: false
        },
        {
          id: 2,
          slug: 'seans-2',
          title: 'Değer Testiği',
          duration: '15-18 dk',
          difficulty: 'Orta',
          warning: '',
          content: `Önceki seanstan seçilen bir değer üzerine yoğunlaşılıyor. Son haftaya bakıp değerle uyumlu ve uyumsuz anlar dürüstçe görülüyor; boşluğun nedeni (yorgunluk, korku, alışkanlık) not ediliyor. Boşluğu daraltmak için bu haftaya ait küçük ve yapılabilir tek adım seçilip yazılıyor.`,
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
        content: `Stoacılar, Steve Jobs ve Yalom’un ölüm farkındalığı pratiği zamanı keskinleştirir; ölüm kaygısı diğer kaygıların kökeninde olabilir. Ölümü hatırlamak öncelikleri netleştirir, ilişkileri öne çıkarır, sıradan günü hediye yapar. Tasavvufta “ölmeden önce ölmek” ve Şeb-i Arus egonun çözülüşünü anlatır. Pratikler: sabah “belki son günüm” ile başlamak, karar anında ölüm aynasını tutmak, haftalık kısa ölüm meditasyonu. Yakın kayıp veya depresyon durumunda seansı atlamak önerilir; 182 hattı hatırlatılır.`,
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
          content: `Doktorun “24 saatin var” dediği bir senaryo canlandırılıyor. Son günün nereye gidildiği, kiminle olunacağı, kime hangi sözlerin söyleneceği görülüyor; geceye ve hayatın tamamına bakılıyor. Ardından bunun bir zihinsel deney olduğu fark edilip hâlâ zamanın olduğu hissediliyor; son günde istenen şeylerin şimdi de yapılabileceği vurgulanıyor.`,
          sensitive: true
        },
        {
          id: 2,
          slug: 'seans-2',
          title: 'Yaşam Şeridi',
          duration: '18-20 dk',
          difficulty: 'Orta-İleri',
          warning: 'Zaman ve sonluluk teması bazı kişiler için zorlayıcı olabilir; bunaltırsa ara ver. Destek hattı: 182.',
          content: `Doğumdan ölüme uzanan bir zaman şeridi görselleştiriliyor. Katılımcı şimdiki noktasından geçmişe (10, 20 yıl önceki ben) ve geleceğe (10, 20 yıl sonrası, şeridin sonu) yürüyor. Kuş bakışı perspektifte dönüm noktaları ve boşluklar görülüyor; şeridin kalanını nasıl doldurmak istediğine dair tek somut niyet yazılıyor.`,
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
        content: `İkigai “sabah kalkma sebebi”dir; büyük olmak zorunda değildir. Batıdaki dört daire modeli (sevdiğin, iyi olduğun, dünyanın ihtiyacı, para kazanabildiğin) pratik bir harita sunar; kesişimler farklı tuzaklar yaratır. İkigai süreçtir ve evrilir; küçük ikigailer de değerlidir. Türk kültüründeki “gönül işi, alın teri” örnekleri yerel karşılık sunar. Pratik: dört listeyi yaz, kesişimlere bak; kıskançlıklar, çocukluk akış anları ve denemeler ipucu verir. Sabırla, küçük adımlarla ilerle.`,
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
          content: `Sevdiğin, iyi olduğun, dünyanın ihtiyacı ve para kazanabildiğin alanlar dört renkli daire olarak görselleştiriliyor. Her daireye girip örnekler hatırlanıyor; kesişimlerdeki hisler yoklanıyor. Ortak nokta (ikigai) bulanık da olsa işaretleniyor; harita seans sonrası yazılı hale getiriliyor.`,
          sensitive: false
        },
        {
          id: 2,
          slug: 'seans-2',
          title: 'Gelecek Ben',
          duration: '18-20 dk',
          difficulty: 'Başlangıç-Orta',
          warning: '',
          content: `On adımlı bir zaman yolunda gelecekteki benle (10 yıl sonrası) buluşma yapılır. Gelecek benin yüzü, evi, işi ve ilişkileri görülür; “Ne öğrendin?”, “En kritik karar neydi?”, “Bana ne tavsiye edersin?” soruları sorulur. Alınan mesaj ve tavsiyelerle bugün geri dönülür, not alınır.`,
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
        content: `Maslow piramidinin üstüne eklediği kendini aşma katmanı mutluluğun egodan öteye bağlandığını söyler. Ego tuzağı (daha fazla başarı/onay) tatmin getirmez; paradoks olarak kendini unutan kendini bulur. Frankl’ın “başarı kovalanmaz” formülü, hizmet-aşk-dava üçlüsü ve sufi “fena” anlayışı ortak noktada buluşur. Spiritüel bypass riskine karşı önce sağlıklı bir benlik inşa, sonra aşma vurgulanır. Pratik: perspektifi genişlet, katkı odaklı sorular sor, doğaya ve sessizliğe çık, küçük hizmet denemeleri yap.`,
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
          content: `Ego sınırı küçük bir damla olarak hissediliyor; ardından uçsuz denize karışma görsellemesiyle sınırlar gevşiyor. Birlik ve bağlantı hissi, diğer damlalarla ortak alan, huzur ve genişlik olarak deneyimleniyor. Kapanışta damla sınırı geri geliyor ama denizi bilmenin hafifliği taşınıyor; hisler yazılıyor.`,
          sensitive: false
        },
        {
          id: 2,
          slug: 'seans-2',
          title: 'Hizmet Meditasyonu',
          duration: '18-20 dk',
          difficulty: 'Başlangıç-Orta',
          warning: '',
          content: `Kalpteki sevgi ışığı genişletilip üç çemberde (yakınlar, tanıdıklar, tanımadıklar) paylaşılıyor. “Nasıl hizmet edebilirim?” sorusuyla yetenek, kaynak ve zaman hatırlanıyor; küçük, yapılabilir bir hizmet taahhüdü (kime, ne zaman, nasıl) seçilip kalbe mühürleniyor.`,
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
        content: `Bilmek yapmak değildir; alışkanlık, korku ve mükemmeliyetçilik bilgi-eylem uçurumu yaratır. Niyet hareketi dönüştürür; tasavvuftaki “himmet” azim + niyet + yüksek hedef bileşimidir. Sistemler hedeflerden üstündür; %1 iyileşme kuralı ve mikro adımlar sürdürülebilirlik sağlar. Rutinlere Frankl’ın üç anlam kaynağı yerleştirilebilir. Taahhüt küçük başlar, güven inşa eder. Finalde tek somut yaşam taahhüdü yazılır.`,
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
          content: `Modülün özet yürüyüşünde tüm duraklar hatırlanıyor (anlam, değerler, ölüm, ikigai, kendini aşma). Katılımcı en önemli öğrenimi ve dönüşümü seçiyor. Ardından kişisel bir niyet cümlesi kuruluyor (“Ben ... niyetindeyim”) ve bu niyetle uyumlu, hafta içinde yapılacak tek somut eylem kararlaştırılıp söz veriliyor. Kapanışta niyet kalbe mühürleniyor ve yazılı hale getiriliyor.`,
          sensitive: false
        }
      ]
    }
  ]
};
