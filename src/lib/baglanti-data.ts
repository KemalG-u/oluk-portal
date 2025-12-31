// BAĞLANTI Modülü İçerik Verisi
// 6 bölüm, 6 ders, 10 seans

export const baglantiData = {
  modulId: 'baglanti',
  title: 'BAĞLANTI',
  subtitle: 'İlişkiler ve Topluluk',
  icon: '🔗',
  description: 'İlişkilerde kalıplarını tanı, sınır koy, şefkat ve empatiyi güçlendir. 6 bölüm, 10 rehberli seans.',
  totalDuration: '200-220 dakika meditasyon',
  difficulty: 'Başlangıç-Orta',
  requirements: 'AYNA ve IŞIK modüllerini tamamlamak önerilir',
  introduction: `İlişki kalıplarını gör. İç sesini yumuşat. Sınırlarını koru. Dinlemeyi derinleştir. Kırıkları onar. Topluluğun sıcaklığını hisset.

BAĞLANTI modülü maskesiz ilişki için tasarlandı. Bağlanma stilini tanı, iç dostunu güçlendir, sağlıklı sınır koy, kalple dinle, affetmeyi dene, topluluğa yerleş.

Altı bölüm. On seans. Her adım birbirini besler.`,

  bolumler: [
    {
      id: 1,
      slug: 'baglanma-haritasi',
      title: 'Bağlanma Haritası',
      subtitle: 'İlişki Aynası',
      description: 'Bağlanma stilini tanı, kalıplarını gör ve değişime alan aç.',
      icon: '🧭',
      duration: '35-40 dk',
      dersCount: 1,
      seansCount: 1,
      order: 1,
      ders: {
        title: 'İlişki Aynası',
        duration: '15-18 dk',
        content: `Yalnız değilsin.

Ama bazen öyle hissediyorsun.

Kalabalıkta bile.

Belki en çok kalabalıkta.

Bağlanma doğumla başlar. İlk nefeste. Bebek hayatta kalmak için birine tutunur. O bağlanma kaderine iz düşer.

İlk ilişkide öğrendiklerin bedenine yazıldı: İnsanlar güvenilir mi? İhtiyaçlarım karşılanır mı? Sevilmeye değer miyim? Dünya güvenli mi? Cevaplar bilinçsizce kodlandı ve hâlâ etkili.

Psikoloji dört stil tanımlar:

Güvenli: “Sevilmeye değerim, insanlara güvenebilirim.” Tutarlı bakım ile oluşur. Yakınlık ve bağımsızlık dengede.

Kaygılı: “Terk edilebilirim.” Tutarsız bakım sonucu. Terk edilme korkusu, onay arayışı, yapışma.

Kaçıngan: “Kimseye muhtaç değilim.” Uzak bakım sonucu. Yakınlıktan kaçınma, duyguları bastırma, “sorun yok” maskesi.

Dezorganize: “İstiyorum ama korkuyorum.” Travmatik bakım sonucu. Çelişkili duygular, kaotik ilişkiler.

Çoğu insan saf bir stil değil; bir stil baskın, diğerleri karışık. Bir test sor: Yakınlıkta ne hissediyorsun? Partner uzaklaşınca ne yapıyorsun? İhtiyaçlarını nasıl ifade ediyorsun?

Kötü haber: Kalıplar derine işlemiş ve sabote edebilir. Kaygılı + kaçıngan tuzağı tanıdık. İyi haber: Değişim mümkün (%20-30). Farkındalık, güvenli ilişki, terapi, bilinçli pratik.

Başlangıç: Geçmiş ilişkilerini tara. Hep aynı tip mi? Hep aynı final mi? Kalıp varsa bağlanma stilinle bağlantılı.

Pratik: İlişki envanteri. Son 3-5 önemli ilişkiyi yaz: nasıl başladı, nasıl bitti, tema ne, ben nasıl davrandım? Ortak kalıpları bul.

Seans 1.1’de stili bedende hissedeceksin.`,
        learnings: [
          'Bağlanma stilinin temelini kavramak',
          'İlişki kalıplarını fark etmek',
          'Değişimin mümkün olduğunu görmek'
        ]
      },
      seans: [
        {
          id: 1,
          slug: 'seans-1',
          title: 'Bağlanma Stilim',
          duration: '18-20 dk',
          difficulty: 'Başlangıç-Orta',
          warning: 'Çocukluk anıları tetikleyici olabilir. Zorlanırsan seansı durdur, ayaklarını hisset, gözlerini aç.',
          content: `**Hazırlık**
Rahat pozisyon, gözler kapalı, nefesle gevşe. Güvende olduğunu hatırla.

**Çocukluk Kapısı**
Ev ortamını hatırla. İhtiyaç duyduğun bir anı çağır. Karşılık aldın mı? Beden ne hissediyor?

**İlişki Hafızası**
Yetişkinlikte önemli bir ilişkiyi hatırla. Başlangıç duygusu? Çatışmada ne yaptın? Bedenin tepkisi neydi?

**Kalıp Tanıma**
Birden çok ilişkiye bak. Tekrar eden korku veya tepkiyi fark et (yaklaşma, kaçma, donma). Kalıbın bir zamanlar koruduğunu hatırla.

**Kabul**
“Bu benim bağlanma stilim. Bir zamanlar korudu. Şimdi farkındayım ve değişebilir.”

**Dönüş**
Nefesle kapanış, odaya dön.`
        }
      ]
    },
    {
      id: 2,
      slug: 'icsel-baglanti',
      title: 'İçsel Bağlantı',
      subtitle: 'İlk İlişki',
      description: 'İç eleştirmeni tanı, iç dostu güçlendir, öz-şefkat pratiği kur.',
      icon: '💚',
      duration: '35-40 dk',
      dersCount: 1,
      seansCount: 2,
      order: 2,
      ders: {
        title: 'İlk İlişki',
        duration: '15-18 dk',
        content: `En önemli ilişki kendinle. İç diyalog çoğu zaman acımasız: “Yine beceremedin”, “Yetersizsin.” Bu sesler içeri alınmış. İç dost ise kısık: “Herkes hata yapar”, “Kendine nazik ol.”

Kristin Neff’in üçlü modeli: Kendine şefkat (yargı yerine anlayış), ortak insanlık (acı evrensel), bilinçli farkındalık (duyguyu bastırmadan görmek).

İç eleştirmen geneller, abartır, kişiselleştirir, siyah-beyaz düşünür. Fark et, durdur, yeniden çerçevele: Bir arkadaşına ne derdin? O sesi içe getir.

Pratik: İç dost mektubu. Zor bir durumu yaz. Eleştirmenin sözlerini yaz. Sonra bir dosta yazar gibi sevgiyle, dürüstçe yanıt ver ve sesli oku.

Seans 2.1 iç dostu güçlendirir. Seans 2.2 zor anlarda üç nefeslik şefkat aracı sunar.`,
        learnings: [
          'İç eleştirmen kalıplarını yakalamak',
          'Öz-şefkatin üç bileşenini uygulamak',
          'Şefkatli iç ses inşa etmek'
        ]
      },
      seans: [
        {
          id: 1,
          slug: 'seans-1',
          title: 'İç Dost',
          duration: '18-20 dk',
          difficulty: 'Başlangıç-Orta',
          warning: '',
          content: `İç eleştirmeni hatırlatan bir anı çağır. Tonunu duy. Şefkatli bir figürü hayal et; o ne derdi? O sesi içselleştir ve kendine söyle: “Zor olduğunu biliyorum. Herkes zorlanır. Bu seni kötü biri yapmaz. Seninleyim.” Eller kalpte, beden sarılıyor, iç dostun güçleniyor.`
        },
        {
          id: 2,
          slug: 'seans-2',
          title: 'Öz-Şefkat Nefesi',
          duration: '15-18 dk',
          difficulty: 'Başlangıç',
          warning: '',
          content: `Kısa araç seansı. Orta zorlukta bir anı getir. Üç cümle, üç nefes:
1) “Bu zor bir an.”
2) “Acı çekmek insani.”
3) “Kendime şefkat gösteriyorum.”
Döngüyü birkaç kez tekrarla. Eller kalp ve karında, sıcaklığı hisset. Zor anlarda kullanılacak bir acil şefkat protokolü.`
        }
      ]
    },
    {
      id: 3,
      slug: 'sinirlar',
      title: 'Sınırlar',
      subtitle: 'Görünmez Çitler',
      description: 'Sağlıklı sınır koymayı öğren, hayır demeyi bedenle ve zihinle sahiplen.',
      icon: '🛡️',
      duration: '35-40 dk',
      dersCount: 1,
      seansCount: 2,
      order: 3,
      ders: {
        title: 'Görünmez Çitler',
        duration: '15-18 dk',
        content: `Sınır: Nerede bittiğini gösteren çizgi. Fiziksel, duygusal, zihinsel, zamansal sınırlar var. Üç tip: Zayıf (hayır diyemez, tükenir), katı (yakınlıktan kaçar), sağlıklı (kapısı var, seçerek açılır).

Sınır koymak sevgiye karşı değil; saygı ve ilişkiyi koruma. Korkular: sevilmeme, çatışma, suçluluk, alışkanlık, kültürel baskılar. Formül: Durumu belirt, etkiyi söyle, ihtiyacını söyle, sınırı net koy. Hayır demek temel sınır. İhlalde hatırlat, sonuç belirt, uygula.

Pratik: Sınır envanteri. İlişkileri listele, nerede zayıf/katı bak, bir sınır seç ve koy.

Seans 3.1 sınır alanını kurar. Seans 3.2 “hayır”ı bedende sağlar.`,
        learnings: [
          'Sınır türlerini ve etkilerini görmek',
          'Net ve nazik sınır cümleleri kurmak',
          'Hayır deme pratiğini güvenle yapmak'
        ]
      },
      seans: [
        {
          id: 1,
          slug: 'seans-1',
          title: 'Sınır Çizme',
          duration: '20-22 dk',
          difficulty: 'Orta',
          warning: 'Sınır zorlayan kişilerle hayal çalışması tetikleyici olabilir; zorlanırsan geç veya dur.',
          content: `Grounding sonrası etrafında ışıktan bir çember kur. Sınırı hisset. Sınır zorlayan birini sınırda hayal et; içeri giremiyor, izin sende. Güvendiğin biri yaklaşınca kapıyı açmayı dene. Nefesle sınırı güçlendir: “Sınırlarımı koruyorum, bu kendime saygı.”` 
        },
        {
          id: 2,
          slug: 'seans-2',
          title: 'Hayır Deme Pratiği',
          duration: '15-18 dk',
          difficulty: 'Orta',
          warning: '',
          content: `Dik duruş, güçlü beden. “Hayır” kelimesini içten, kısık, normal, güçlü sesle söyle. Ton varyasyonları: “Hayır, teşekkürler.”, “Bu benim için uygun değil.” Senaryo: bir talep geliyor; beden güçlü, ses net: “Hayır, yapamam.” Israr olursa “Kararım bu.” Her “hayır” başka bir şeye “evet” açar.`
        }
      ]
    },
    {
      id: 4,
      slug: 'gercek-dinleme',
      title: 'Gerçek Dinleme',
      subtitle: 'İki Kulak, Bir Ağız',
      description: 'Cevap vermek için değil, anlamak için dinle. Empatiyi ve kalp kulağını aç.',
      icon: '👂',
      duration: '35-40 dk',
      dersCount: 1,
      seansCount: 2,
      order: 4,
      ders: {
        title: 'İki Kulak, Bir Ağız',
        duration: '15-18 dk',
        content: `Çoğu insan dinlemez; cevap hazırlar, yargılar, tavsiye düşünür. Gerçek dinleme: tamamen orada olmak, kendi gündemini bırakmak.

Dinlemenin engelleri: cevap hazırlama, yargı, istenmeyen tavsiye, sabırsızlık, kendi hikayeni anlatma. Empati (içeriden hissetmek) sempatiden (dışarıdan acıma) farklı.

NVC dinleme çerçevesi: Gözlem, duygu, ihtiyaç, rica. Yansıtma tekniği anlaşılma hissi verir. Sessizlik alan açar. Yargılamadan duymak: önce anla, sonra konuş.

Pratik: Günlük dinleme. Her gün bir kişiyi 3 dakika tam dikkatle dinle, yansıt, not et.

Seans 4.1 empatiyi genişletir. Seans 4.2 kalp kulağını açar.`,
        learnings: [
          'Dinlemenin engellerini fark etmek',
          'NVC gözlem-duygu-ihtiyaç çerçevesini uygulamak',
          'Yargısız empatik dinlemeyi denemek'
        ]
      },
      seans: [
        {
          id: 1,
          slug: 'seans-1',
          title: 'Empati Meditasyonu',
          duration: '20-22 dk',
          difficulty: 'Orta',
          warning: 'Zor kişi bölümünde travmatik kişilerden kaçın, orta zorlukta biri seç.',
          content: `Metta esinli çalışma. Sırasıyla kendin, sevdiğin biri, nötr biri, zor biri, tüm insanlar için “Mutlu olmak istiyor, acı çekmek istemiyor, güvende olmak istiyor” cümleleriyle empati kur. Zor kişi için onaylama değil, insanlığını görmek. Evrensel bağlantı ile kapanış.`
        },
        {
          id: 2,
          slug: 'seans-2',
          title: 'Kalp Kulağı',
          duration: '18-20 dk',
          difficulty: 'Orta',
          warning: '',
          content: `Kalp kulağı metaforu: kelimeler kulaklara, niyet kalbe gider. Son konuşmalardan birini hatırla; kelimelerin ardındaki duygu ve ihtiyacı dinle. “Gerçekten ne diyor, neye ihtiyacı var?” sorularıyla pratik. Sessizlik ve alıcılık vurgusu.`
        }
      ]
    },
    {
      id: 5,
      slug: 'onarim',
      title: 'Onarım',
      subtitle: 'Kırıklar ve Altın',
      description: 'Affetme ve sembolik onarım ile eski yükleri bırak, kintsugi gibi güçlen.',
      icon: '⭐',
      duration: '40-45 dk',
      dersCount: 1,
      seansCount: 2,
      order: 5,
      ders: {
        title: 'Kırıklar ve Altın',
        duration: '18-20 dk',
        content: `Kintsugi kırıkları altınla onarır; gizlemez, vurgular. İlişkiler kırılır; küçük çatlaklar, büyük yaralar. Affetmek yanlış anlaşılır: onaylamak değildir, unutmak değildir, ilişkiyi sürdürmek zorunda bırakmaz. Affetmek öfke yükünü bırakmaktır, süreçtir, güç ister. Affetmeme bedeli stres ve beden yükü. Kendini affetmek en zorudur.

Affetme adımları: Acıyı kabul et, hikayeni anlat, sorumluluğu ayır, empati dene (onay değil), bırakma niyeti kur, anlam bul. Onarım mümkünse: sorumluluk al, özür dile, değişim göster, sabret. Mümkün değilse sembolik onarım (mektup, ritüel).

Pratik: Onarım mektubu (ne oldu, etkisi, şimdi his, bırakma niyeti). Seans 5.1 affetme, seans 5.2 sembolik onarım.`,
        learnings: [
          'Affetmenin ne olduğunu ve olmadığını ayırt etmek',
          'Affetme sürecinin adımlarını uygulamak',
          'Onarımı mümkünse gerçekleştirmek, değilse sembolik tamamlamak'
        ]
      },
      seans: [
        {
          id: 1,
          slug: 'seans-1',
          title: 'Affetme Pratiği',
          duration: '22-25 dk',
          difficulty: 'İleri',
          warning: 'Derin duygular uyandırabilir. Çok ağır travma için profesyonel destek önerilir. Opt-out ve 182 yönlendirmesi hatırlat.',
          content: `Güvenli alan kur. Önce kendini affet: orta düzey bir hatayı hatırla, “O zaman bilmiyordum, şimdi biliyorum. Hata yaptım, insanım. Kendimi affetmeyi seçiyorum.”

Sonra başkasını affet: orta zorlukta biri. Acıyı kabul et, onun insan olduğunu gör, onaylama değil. Hazırsan “Seni affetmeyi seçiyorum, bu benim için” de. Bırakım nefesiyle öfkeyi bırak, kalpte şifa ışığıyla kapan.`
        },
        {
          id: 2,
          slug: 'seans-2',
          title: 'Onarım Ritüeli',
          duration: '20-22 dk',
          difficulty: 'Orta-İleri',
          warning: 'Sessizlik ve duygu yoğun; çok ağır kişiler yerine orta zorlukta seçim öner.',
          content: `Kutsal alan oluştur. Tamamlanmamış işi olan kişiyi sembolik olarak çağır. Söylenmeyenleri söyle, sessizliklerde ifade et. Hayali cevapları dinle. Son sözünü söyle (“elveda/affettim/bırakıyorum”). Kişi vedalaşıp gider, daire kapanır, yük hafifler.`
        }
      ]
    },
    {
      id: 6,
      slug: 'topluluk',
      title: 'Topluluk',
      subtitle: 'Biz',
      description: 'Yalnızlık yanılgısını bırak, aidiyet ve hizmetle bağlantıyı güçlendir.',
      icon: '🌱',
      duration: '35-40 dk',
      dersCount: 1,
      seansCount: 1,
      order: 6,
      ders: {
        title: 'Biz',
        duration: '15-18 dk',
        content: `“Ben” iyi, “Biz” güç. Yalnızlık epidemi; sağlık ve ruh hali için risk. Aidiyet: kabul, görülme, değer. Modern zorluklar: atomizasyon, dijitalleşme, hareketlilik, güvensizlik.

Topluluk sağlıklıysa: ortak değer, düzenli temas, karşılıklı destek, açık sınır. Sağlıksız ise: tek lider, izolasyon, korku, çıkış zor, bireyselliği ezer.

Sufi sohbet, hizmet ve fütüvvet örneği: kalplerin buluşması, cömertlik, egoyu yumuşatma.

Topluluk seçenekleri: manevi gruplar, ilgi/hobi, destek grupları, online (dikkat). OLUK da bir topluluk; aynı yolda yürüyenler.

Pratik: Topluluk haritası (hangi topluluklara aitsin, derinlik, ihtiyaç, katkı). Seans 6.1 bağlantı çemberi ile kapanış.`,
        learnings: [
          'Aidiyet ihtiyacını ve yalnızlığın etkisini görmek',
          'Sağlıklı topluluk kriterlerini ayırt etmek',
          'Katkı ve hizmetle bağlantıyı güçlendirmek'
        ]
      },
      seans: [
        {
          id: 1,
          slug: 'seans-1',
          title: 'Bağlantı Çemberi',
          duration: '20-25 dk',
          difficulty: 'Orta',
          warning: '',
          content: `Bağlantı çemberi kur. İç çember: en yakınlar; ışık iplikleriyle bağlan. Orta çember: arkadaşlar, iş, tanıdıklar. Geniş çember: topluluklar, şehir, insanlık, geçmiş ve gelecek. “Ben bu ağın parçasıyım, yalnız değilim, bağlıyım.” Modül kapanışı, adımları hatırlatma ve toplulukta kalma çağrısı.`
        }
      ]
    }
  ]
};
