// AYNA Modülü İçerik Verisi
// Tüm bölümler, dersler, seanslar

export const aynaData = {
  modulId: 'ayna',
  title: 'AYNA',
  subtitle: 'Kendini Tanıma',
  icon: '🪞',
  description: 'OLUK\'un AYNA modülüyle kendini tanıma yolculuğuna çık. Sufi bilgeliği ve modern psikoloji sentezi. 7 bölüm, 10 seans.',
  totalDuration: '360-420 dakika',
  difficulty: 'Orta-Yüksek',
  requirements: 'KAPI modülünü tamamlamış olmak önerilir',
  introduction: `Ayna karşısındasın.

Ama bu ayna, yüzünü değil; yüzünün ardındakini gösterir.

Gölgeler, kaçtıkça büyür. Dönüp baktığında küçülürler.

Cesaretin varsa, bak.

Bu yolculukta, kendini tanıyacaksın. Sosyal maskelerini soyacaksın. Bastırdıklarınla yüzleşeceksin. Ve sonunda, kendine merhamet öğreneceksin.

AYNA, Jung'un gölge çalışmasıyla, Sufi öz-bilgesi sentezlenmişte.`,
  
  bolumler: [
    {
      id: 1,
      slug: 'ilk-bakis',
      title: 'İlk Bakış',
      subtitle: 'Aynaya Dönmek',
      description: 'Kendine bakma cesaretini uyandır. Yargılamayan farkındalık.',
      icon: '👁️',
      duration: '35-40 dk',
      dersCount: 1,
      seansCount: 1,
      order: 1,
      
      ders: {
        title: 'Aynaya Dönmek',
        duration: '12-15 dk',
        content: `Çoğumuz kendimize bakmaktan korkuuz.

Çünkü biliyoruz: Kendimize baktığımızda, hoşlanmadığımız şeyleri göreceğiz.
Kusurlarımızı göreceğiz.
Yaşarken bastırdıklarımızı göreceğiz.

Ama bu bölümde öğreneceğin şey basit:
Aynada kendimi görmek, onu yargılamak değil.
Sadece, görmek.

Yargılamayan gözlerle, kendine bakmak.

Jung bunu "shadow work" (gölge çalışması) diye tanımlıyor.
Sufi geleneği bunu "muhasebe" (nefsi muhasebe) diyor.

Her ikisi de aynı şeyi söylüyor:
Kendini tanı. Önce farkındalık, sonra değişim.

Farkındalık olmadan, değişim olamaz.

Bu derste, aynaya dönüş cesaretini uyandıracağız.`,
        learnings: [
          'Kendine bakmanın anlamını anlayacaksın',
          'Yargılama ile gözlem arasındaki farkı göreceksin',
          'İlk bakışın neden önemli olduğunu öğreneceksin'
        ]
      },
      
      seans: [{
        id: 1,
        slug: 'seans-1',
        title: 'İlk Karşılaşma',
        duration: '18-20 dk',
        difficulty: 'Başlangıç',
        warning: 'Bu seans basit görünse de, derin duygular açabilir. Kendi hızında ilerle.',
        content: `[00:00 - 00:30] AÇILIŞ
Gözlerini kapat. Derin bir nefes al.

[00:30 - 02:00] HAZIRLIK
Bugün, kendine bakmaya başlayacaksın.
Yüzüne bakmıyorsun sadece.
Kalbini, düşüncelerini, hislerini da göreceksin.

[02:00 - 08:00] MEDITASYON - AYNA PRATIĞI
Kendini rahat bir yerde kur. Aynaya bak, ama yüzüne değil.

Gözlerinin içine bak.
Orada kim var?
Kim sana bakıyor?

Korku hissetmen normal.
Yargılanmış hissetmen normal.
Ama sadece gözle. Değiştirme, sadece gözle.

[08:00 - 15:00] YAZMA PRATİĞİ
Şu soruyu cevapla:
"Bu aynada kendime bakarken ne hissettim?"

[15:00 - 18:00] KAPANIŞ
Böyle kalmak isteseydin, kalırdın.
Ama sen, kendini tanımaya cesaret gösterdin.

Bu yeterli. Burada dur.`,
        practice: {
          title: 'Günlük Ayna Pratiği',
          description: 'Bugün, aynaya bak. Sadece bak. 5 dakika yeterli.',
          question: 'Aynada kendime bakarken ne hissettim? Neden?'
        }
      }]
    },
    
    {
      id: 2,
      slug: 'yuzey',
      title: 'Yüzey',
      subtitle: 'Maskeler ve Ben',
      description: 'Sosyal maskelerini tanı. Persona kavramı.',
      icon: '🎭',
      duration: '35-40 dk',
      dersCount: 1,
      seansCount: 1,
      order: 2,
      
      ders: {
        title: 'Maskeler ve Ben',
        duration: '14-16 dk',
        content: `Sosyal dünyada yaşıyoruz.
Ve sosyal dünyada, maskeler takıyoruz.

Ofiste ben farklı.
Ailede ben farklı.
Arkadaşlarla ben farklı.

Bu kötü değil. Uyum sağlama mekanizması.

Ama problem başlıyor şundan:
Maskeler çoğu zaman, gerçek beni saklar.
Hatta, maskeler öylesine kalınlaşır ki, "maskesiz ben" kim olduğunu unuturuz.

Jung bunu "persona" (persona = maske) diyor.
Ve persona iyi bir şey, ama kapalı kalırsa sorun oluyor.

Bu bölümde, senin persona'larını harita çıkaracağız.
Ofis-ben, aile-ben, sosyal-ben...

Hepsi sen misin? Evet.
Hepsi sen mi? Hayır.

Fark nedir?`,
        learnings: [
          'Persona kavramını anlayacaksın',
          'Senin farklı maskelerini fark edeceksin',
          'Maskeler ile gerçek ben arasındaki ilişkiyi göreceksin'
        ]
      },
      
      seans: [{
        id: 1,
        slug: 'seans-1',
        title: 'Yüzeyin Altına',
        duration: '20-22 dk',
        difficulty: 'Başlangıç',
        warning: 'Personas arasındaki çatışmalar duygusal olabilir. Rahat ol.',
        content: `[00:00 - 00:45] AÇILIŞ
Hayatında kaç farklı "sen" var?

[00:45 - 03:00] VIZUALIZASYON
Gözlerini kapat.

Ofiste kendini gör. Kim bu?
Evde kendini gör. Kim bu?
Arkadaşlarla. Kim bu?
Ailede. Kim bu?

Farklı mısın? Evet.
Ama hepsi sen misin? Evet.

[03:00 - 12:00] DIYALOG
Offis-ben: "Neden burada sunumlarda kontrollü konuşuyorum?"
Hakiki-ben: "Çünkü güvensizim, onay istiyorum"
Offis-ben: "Tamam. İçimde güvensizlik var."

[12:00 - 18:00] YAZMA
Her persona için: "Bu kimlik bana ne koruma sağlıyor?"

[18:00 - 20:00] KAPANIŞ
Senin maskelerini tanımışsın. Bundan sonra, fark görürsün.`,
        practice: {
          title: 'Persona Haritası',
          description: 'Bugün, farklı ortamlarda kendine karşı dik dur. Fark et.',
          question: 'Bugün kaç farklı "ben" oynadım? Niye?'
        }
      }]
    },
    
    {
      id: 3,
      slug: 'golge',
      title: 'Gölge',
      subtitle: 'Karanlıktaki Hazine',
      description: 'Bastırdıklarınla yüzleş. Jung gölge çalışması.',
      icon: '🌙',
      duration: '60-70 dk',
      dersCount: 1,
      seansCount: 2,
      order: 3,
      
      ders: {
        title: 'Karanlıktaki Hazine',
        duration: '18-20 dk',
        content: `Gölge nedir?

Gölge, Jung'a göre, kendimizin bastırılmış kısmı.

Çocuklukta, bize şunları söylediler:
"Ağlama"
"Öfkeli olma"
"Bencil olma"
"Korkaklık yapma"

Bunları söyleyenleri seviyorduk. Uyyduk.
Ve bu kısımları içimize sakladık.

Yıllar geçti.
Ve bu bastırılmış kısımlar... gölgenin içinde yaşamaya başladı.

Gölge nedir? Reddedilmiş ben.
Bastırılmış enerji.
Kapalı kapı arkasında oturan ben.

Ama işte iş burada başlıyor:
Gölgenin de gücü var.
Kreativitenin, şehvetinin, enerjisinin kaynağı gölgededir.

Gölgeden korkmak yerine, gölgeyle arkadaş olmak gerekir.

Sufi'lerde bunu "nefs" (ego, kendililik) ile çalışma derler.
Nefs'i öldürmek değil, nefs'i dönüştürmek.`,
        learnings: [
          'Gölge (shadow self) kavramını anlayacaksın',
          'Bastırdıklarının kaynağını bulacaksın',
          'Gölgenin gücünü tanıyacaksın'
        ]
      },
      
      seans: [
        {
          id: 1,
          slug: 'seans-1',
          title: 'Gölgeyle Tanışma',
          duration: '22-25 dk',
          difficulty: 'Orta',
          warning: 'Bu seans yoğun olabilir. Öfke, korku, ayıp duyguları çıkabilir. Normal. Devam et.',
          content: `[00:00 - 01:00] AÇILIŞ
Bugün, kendinin bastırdığı kısmıyla tanışacaksın.

[01:00 - 03:00] HAZIRLIK
Gölge korkutucu görünür.
Ama gölge, esasen, enerji.

[03:00 - 10:00] VIZUALIZASYON - GÖLGE İN ÖNÜNDE DURMAK
Gözlerini kapat.
Karanlık bir kapı gör.
Kapının arkasında, senin gölgen var.

Kapıyı aç.
Karanlıkta, bir şekil görürsün.
Kim bu?

Sene nefreti mi? Korku mu? Öfke mi?
Kime benziyor?

[10:00 - 18:00] DİYALOG
Gözlerini açık tut. Yazı yaz.

"Gölge: Merhaba. Ben senin bastırdığın kısımım."
"Ben: Kim olduğunu söylesene."
"Gölge: Senin gözlemlerin, hissettiklerin beni burada tuttular."

[18:00 - 22:00] KAPANIŞ
Gölge korkutucu değil. Sadece, beklemişti.
Bunu hatırla.`,
          practice: {
            title: 'Gölge Günlüğü',
            description: 'Bugün, kendine öfkeli hissettiğini söyle. Yargıla değil, söyle.',
            question: 'Gölgem bana ne söylemek istiyor?'
          }
        },
        {
          id: 2,
          slug: 'seans-2',
          title: 'Yansıtma Aynası',
          duration: '18-20 dk',
          difficulty: 'Orta',
          warning: 'Bugün başkalarında gölgenizi göreceksiniz. Dikkat et: başkasında gördüğün, senin gölgen olabilir.',
          content: `[00:00 - 00:45] AÇILIŞ
Biliyorsun: Başkaları içinde en çok gördüğümüz şey, kendi gölgemizdir.

[00:45 - 03:00] HAZIRLIK
Başkasından "nefret" ettiğin şeyler?
Saçma, budala, kişi mi?

Dikkat: Bu kişi, senin aynağısı olabilir.

[03:00 - 10:00] VIZUALIZASYON - AYNA
Senden nefret ettiğin birini düşün.
O kişi nesi yapar? Ne söyler?

Şimdi, senin o davranışı yaptığı zamanları hatırla.
Kaç kez senin bu davranış yaptığını gördün?

[10:00 - 15:00] YAZMA
"O kişi bana nesi hatırlatıyor?
Bende nesi gördüğü zaman, o kişiye öfkeliyim?
Senin o davranışı yaptığında, kendine ne dersin?
Başkasına yapınca, haklı, ama kendine yapınca suç mu?"

[15:00 - 18:00] KAPANIŞ
Yansıtma, kendini tanımanın en güzel aynasıdır.`,
          practice: {
            title: 'Yansıtma Haritası',
            description: 'Senden nefret ettiğin birini gözlemle. Nedeni belki gölgen.',
            question: 'Başkasında gördüğüm şey, benim neresim?'
          }
        }
      ]
    },
    
    {
      id: 4,
      slug: 'derinlik',
      title: 'Derinlik',
      subtitle: 'Yaralı Çocuk',
      description: 'İç çocuğunla tanış. Yeniden ebeveynlik.',
      icon: '👶',
      duration: '70-80 dk',
      dersCount: 1,
      seansCount: 2,
      order: 4,
      
      ders: {
        title: 'Yaralı Çocuk ve Şefkat',
        duration: '18-22 dk',
        content: `İçinde bir çocuk yaşıyor.

Çocuk, hiç büyümedı.
Çocuk, hala annesinin sevgisini arıyor.
Çocuk, hala babasının onayını arıyor.
Çocuk, hala korkuyor.

İçindeki çocuk yaralı olabilir.
Çünkü çocukken, ne istersen alamadın belki.
Çabalar fark edilmedi.
Ağlaman duyulmadı.

Bu çocuk, şimdi sende, ve sürekli çığlık atıyor.

Yetişkin sen, çocuğu duyabilir misin?
Çocuğa babacan mı olabilir misin?

Bu bölümde, inner child'ı bulacaksın.
Yeniden ebeveynlik (reparenting) yapacaksın.

Kendi kendine, ebeveyn olacaksın.`,
        learnings: [
          'İç çocuk (inner child) kavramını anlayacaksın',
          'Çocukluğundaki yaraları fark edeceksin',
          'Kendine şefkat (self-compassion) öğreneceksin'
        ]
      },
      
      seans: [
        {
          id: 1,
          slug: 'seans-1',
          title: 'İç Çocukla Buluşma',
          duration: '25-28 dk',
          difficulty: 'Yüksek',
          warning: 'Bu seans çok duygusal olabilir. Hüngür hüngür ağlayabilirsin. Normal. Devam et.',
          content: `[00:00 - 01:00] AÇILIŞ
Bugün, içindeki çocukla tanışacaksın.

[01:00 - 03:00] HAZIRLIK
Çocuklu Sevgili
Çocuğunun gülüşünü düşün.
O çocukta var olan korkuyu düşün.

[03:00 - 08:00] REGRESYON
Gözlerini kapat.
Küçülüyor musun?
Çocuk misin?

Bugünün en ağırlaştığı şey, çocuk duymuşsal?
Çocuk yalnız mı kalıştı?
Çocuk sevilmedi mi?

[08:00 - 18:00] DIYALOG
Açık gözler. Yazı yaz.

Çocuk: "Merhaba ben"
Yetişkin: "Naber? Nasılsın?"
Çocuk: "Korkuyorum"
Yetişkin: "Ne korkuyorsun?"
Çocuk: "Kimse beni sevmiyor"
Yetişkin: "Ama ben seni seviyorum. Bana bırak."

[18:00 - 25:00] KAPANIŞ
Çocuğu kucakla.
Çocuğa söyle: "Ben buradayım. Artık yalnız değilsin."`,
          practice: {
            title: 'İç Çocuğa Şefkat',
            description: 'Bugün, içindeki çocuğa sevgi gönder. Bileğini tutup, kendini rassur et.',
            question: 'İç çocuğum bana ne anlatmak istiyor?'
          }
        },
        {
          id: 2,
          slug: 'seans-2',
          title: 'Yeniden Ebeveynlik',
          duration: '22-25 dk',
          difficulty: 'Yüksek',
          warning: 'Bu seans yeniden ebeveynlik mekanizmasını tanıştırır. Öz-şefkat üzerine.',
          content: `[00:00 - 01:00] AÇILIŞ
Bugün, çocuğa ebeveyn olacaksın.

[01:00 - 03:00] HAZIRLIK
Çocuk neyi istiyordu? Sevgi, güvenlik, onay?
Çocuk onu alamadı. Ama sen verebilirsin.

[03:00 - 10:00] VIZUALIZASYON - YENIDEN EBEVEYNLIK
Gözlerini kapat.
Çocuğu gör.
Çocuğun yüzüne bak.

Artık, sen ebeveynsin.
Çocuğa söyle: "Seni seviyorum"
Çocuğa söyle: "Aman aman, ben buradayım"
Çocuğa söyle: "Haklısın, üzülmen normal"
Çocuğa söyle: "Senin hata değildi, ben seninle ilgilenmek isterdim ama ben de yaralanmıştım"

[10:00 - 18:00] YAZMA
Çocuğa bir mektup yaz.
Çocuğa söylemek istediğin her şeyi söyle.

[18:00 - 22:00] KAPANIŞ
Çocuğu kucakla.
Bu defa, kolların sıcak ve güvenli.`,
          practice: {
            title: 'Yeniden Ebeveynlik Ritüeli',
            description: 'Bugün, çocuğa bir hediye al. İç çocuğa. Sevgini göster.',
            question: 'Çocuğa ebeveyn olunca ne değişti?'
          }
        }
      ]
    },
    
    {
      id: 5,
      slug: 'parcalar',
      title: 'Parçalar',
      subtitle: 'İç Sesler',
      description: 'İçindeki sesleri haritalα. IFS modeli.',
      icon: '🗣️',
      duration: '60-70 dk',
      dersCount: 1,
      seansCount: 2,
      order: 5,
      
      ders: {
        title: 'İç Parçalar ve Diyalog',
        duration: '16-18 dk',
        content: `Senin içinde birkaç kişi yaşıyor.

Birisi söylüyor: "Çalış, yapamayacaksın"
Diğeri söylüyor: "Evet ama eğlenmek istiyorum"
Üçüncüsü söylüyor: "İkisiniz saçmahız, ben kurala uyarım"
Dördüncüsü söylüyor: "Hepiniz yanlış, ben doğruyu biliyorum"

Bu sesler senin parçaların.

IFS (Internal Family Systems) modeline göre, her insan birbirinden farklı "parts" (parçalar) içinde taşır.

Bunları diyaloglandırmak, entegre etmek, birbirini anlamalarını sağlamak...

Bu, kendini tanımanın en derindeşi.

Parçalar çatışır çünkü hepsi seni koruduğunu sanıyor.
Korkulu parça koruyor.
Kontrol parçası koruyor.
Yaşlıksız parça koruyor.

Ama çoğumuzda, bir parça başarılı kılmak isterken, diğeri engelliyordu.

Bu bölümde, parçaları keşfedeceksin.
Ve onların diyaloguna kulak kaşacaksın.`,
        learnings: [
          'İç parçaları (parts) tanıyacaksın',
          'Parçalar arası çatışmayı göreceksin',
          'Parçaları diyaloglandıracaksın'
        ]
      },
      
      seans: [
        {
          id: 1,
          slug: 'seans-1',
          title: 'Parça Haritası',
          duration: '22-25 dk',
          difficulty: 'Orta-Yüksek',
          warning: 'Parçalar çok çeşitli ve çatışmalı olabilir. Dinle, yargıla değil.',
          content: `[00:00 - 01:00] AÇILIŞ
İçinde kaç tane ses var?

[01:00 - 03:00] HAZIRLIK
Parçaları tanıdan başla:
- Korkulu ben
- Kontroller ben
- Yaralanan ben
- Başarılı ben
- Playful ben
- Sorumlu ben

[03:00 - 12:00] HARITA ÇIZME
Gözlerini aç. Yazı yaz.

Her parçanın bir adı var. Mesela:
- GUARDIAN (koruyucu): "Dikkatli ol, risk alma"
- PUSHER (çalıştırıcı): "Daha fazla yap, başarılı ol"
- DREAMER (rüyacı): "Eğlen, yaşa, seç"
- CRITIC (eleştirmen): "Hepsi yanlış, başarısın"
- LOVER (sevgili): "Kişiler önemli, bağlantı lazım"

[12:00 - 20:00] DIYALOG BAŞLAT
GUARDIAN: "Bu işi yapmayız, çok riskli"
PUSHER: "Yok, yapacağız, başarılı olmak lazım"
DREAMER: "Boş ver, eğlenelim"
CRITIC: "Hepiniz saçmasınız"
LOVER: "Arkadaşlık kaybolacak mı?"

Dinle. Hepsi konuşsun.

[20:00 - 22:00] KAPANIŞ
Parçalar sensin. Hepsi haklı.`,
          practice: {
            title: 'Parça Günlüğü',
            description: 'Bugün bir karar alırken, parçalarını dinle. Hepsi ne söylüyor?',
            question: 'Hangi parça bugün en çok sesini çıkardı?'
          }
        },
        {
          id: 2,
          slug: 'seans-2',
          title: 'İç Diyalog',
          duration: '20-22 dk',
          difficulty: 'Orta-Yüksek',
          warning: 'Parçaların diyalogu karmaşık olabilir. Çok karışıksa, yavaş git.',
          content: `[00:00 - 01:00] AÇILIŞ
Parçaların birbirini anlaması lazım.

[01:00 - 03:00] HAZIRLIK
Parçalar öfkeli midir birbirine?
Parçalar birbilerine uzak mı?

[03:00 - 14:00] DİYALOG - MEDYATÖRLÜK
Sen hakem olacaksın.

GUARDIAN: "PUSHER, sen çok yoracaksın bizi"
PUSHER: "Ama başarılı olmamız lazım"
GUARDIAN: "Başarılı olmak iyidir, ama ölmemek daha iyi"
PUSHER: "Peki, hafta sonları rahatlayalım?"
GUARDIAN: "Tamam. Hafta sonları sen rahat, ben rahatlayayım"

Parçaların uzlaşması lazım.

[14:00 - 20:00] YAZMA
Her parçaya sor:
"Sana karşı teşekkür etmek istedim çünkü..."
"Sana rağmen, şüphelerim var çünkü..."

[20:00 - 22:00] KAPANIŞ
Parçalar bir aile gibi. Birbirini sevmesi lazım.`,
          practice: {
            title: 'Parça Uzlaşması',
            description: 'Bugün, iki parçan birbirini anlaşması için ne yapabilirsin?',
            question: 'Parçaların barışabilir mi?'
          }
        }
      ]
    },
    
    {
      id: 6,
      slug: 'kabul',
      title: 'Kabul',
      subtitle: 'Kendine Merhamet',
      description: 'Öz-şefkat pratiği. Bütünleşme ritüeli.',
      icon: '💚',
      duration: '45-55 dk',
      dersCount: 1,
      seansCount: 2,
      order: 6,
      
      ders: {
        title: 'Kendine Merhamet ve Bütünleşme',
        duration: '14-16 dk',
        content: `Tüm bu yolculuk, bir amaca doğru gidiyor:
Kendine, merhamet etmek.

Gölge, parçalar, yarasız çocuk... hepsi sen.
Gölge olmak yaramaz. Güçlü olmak istemenin kendisi yanlış değil. Çocuk olmak sorun değil.

Problem, bu parçalar arasındaki savaş.
Problem, bu parçaları sevmemek.

Öz-şefkat demek: Kendinden nefret etme. Kendini kabul et.

Sufi'lerde buna "terkh" (terk etme, pes etme) derler.
Kendini pes et. Kendine sevgi ves. Kendini affet.

Bu bölüm, bütünleşme bölümü.
Buraya kadar gelen parçalar, sesleri, gölgeler... hepsini toplayacaksın.
Ve söyleyeceksin: "Siz hepsi bensiz. Sizi seviyorum. Çünkü siz bensiz."`,
        learnings: [
          'Öz-şefkat (self-compassion) pratiğini öğreneceksin',
          'Kendini kabul etmenin yolunu göreceksin',
          'Parçaları bütünleştirme mekanizmasını anlayacaksın'
        ]
      },
      
      seans: [
        {
          id: 1,
          slug: 'seans-1',
          title: 'Şefkat Nefesi',
          duration: '18-20 dk',
          difficulty: 'Orta',
          warning: 'Bu seans çok sevgi içerir. Ağlamak doğal.',
          content: `[00:00 - 00:45] AÇILIŞ
Kendine merhamet eteceksin.

[00:45 - 02:00] HAZIRLIK
Merhamet ne demek?
Yargılamayan sevgi demek.
Koşulsuz sevgi demek.

[02:00 - 08:00] MEDITASYON - KALBE EL KOYMAK
Gözlerini kapat.
Elini kalbine koy.

"Merhaba ben. Ben seninle burası.
Sen hata yaptın. Evet.
Ama ben seni hala seviyorum.

Gölgenle beraber, seninle.
Parçalarınla beraber, seninle.
Yarasız çocuk olman sorun değil, seninle.

Ben kendini affediyorum.
Şu anda, seninle sevinç için.
Sesini duy. Seninle, içinde. Seninle."

[08:00 - 16:00] YAZMA
Kendine bir mektup yaz.
Kendini rassur et.
Kendini affet.
Kendini sev.

[16:00 - 18:00] KAPANIŞ
El kalıbına kaldırıldı.
Kendine merhamet gönderdin.`,
          practice: {
            title: 'Günlük Şefkat',
            description: 'Bugün, her hata yaptığında, kendine söyle: "Hata yapan insan, iyisi var. Ben seni seviyorum."',
            question: 'Kendime merhamet ettiğinde ne hissettim?'
          }
        },
        {
          id: 2,
          slug: 'seans-2',
          title: 'Bütünleşme Ritüeli',
          duration: '25-28 dk',
          difficulty: 'Orta',
          warning: 'Bu ritüel çok güçlüdür. Yukarıdan aşağıya tüm parçaları berabar getir.',
          content: `[00:00 - 01:00] AÇILIŞ - KÖK ENERJI
Gözlerini kapat.
Kökten (tailbone) başla.
Enerji yükseliyor. Tüm bedenin geçiyor.

[01:00 - 03:00] DAVET
Gölge, gel. Burada güvenli.
Çocuk, gel. Burada güvenli.
Parçalar, hep gel. Burada güvenli.
Topiluğun merkezi. Sevgi var.

[03:00 - 12:00] BÜTÜNLEŞME
Senin içinde tüm parçalar karşılaşıyor.
Gölge, çocuk, kritik, pusher... hepsi.
Ve hepsi "merhaba" diyor birbirine.
Hepsi gülüyor.
Hepsi raad.
Hepsi seni oluşturuyor.
Ve hepsi iyi.

[12:00 - 20:00] RITÜEL - TABAKTİK SAL
Taban şağa. Vücut ısınıyor.
Kalb açılıyor.
Gülümsüyor.
Tüm parçalar, kalp merkezinde, dans ediyor.

[20:00 - 25:00] KAPANIŞ - BİRLİK
Gözler açılır.
Tüm parçaların birliğinin farkında, buradan çık.
Hem parçalar hem bütün.
Hem gölge hem ışık.
Hem çocuk hem yetişkin.
Hem kusurlu hem kıymetli.`,
          practice: {
            title: 'Günlük Bütünleşme',
            description: 'Her sabah, parçalarını seç. Hepsi birlikte, barışçıl olarak yaşayacaksınız.',
            question: 'Bütünleşme duygusu ne kadar sürüyor?'
          }
        }
      ]
    },
    
    {
      id: 7,
      slug: 'yeni-bakis',
      title: 'Yeni Bakış',
      subtitle: 'Dönüşmüş Gözler',
      description: 'Yolculuğun kapanışı. Yeni gözlerle kendine bak.',
      icon: '✨',
      duration: '35-40 dk',
      dersCount: 1,
      seansCount: 1,
      order: 7,
      
      ders: {
        title: 'Yeni Ayna, Yeni Gözler',
        duration: '12-14 dk',
        content: `Bu AYNA yolculuğunun başında, kendine bakmaktan korkuyordun.
Şimdi, misin.

Aynada bakan kişi, aynı kişi misin?
Evet. Ama farklı gözlerle bakıyorsun.

Gözlerin dönüşmüş.
Yargılamayan gözler.
Şefkatli gözler.
Bütüncül gözler.

Kendini gördün:
- Maskelerini
- Gölgeni
- Çocuğunu
- Parçaları

Ve tüm bunları sevdin.
Tüm bunları kabul ettin.

Şimdi, bu bilgiyle ne yapacaksın?

AYNA sadece bilgi vermedi. AYNA, dönüştürdü.

Kendini tanımak, değişim demek.
Değişim, başkalarıyla ilişkinizi demek.
İlişkilerin değişmesi, dünyayı demek.

Bu son bölüm, kapanış değil. Başlangıç.

Çünkü artık, gözler açıldı.
Ve kapanamazlar.`,
        learnings: [
          'AYNA yolculuğunun anlamını anlayacaksın',
          'Dönüşümü hissedeceksin',
          'Yeni gözlerle kendine bakacaksın'
        ]
      },
      
      seans: [{
        id: 1,
        slug: 'seans-1',
        title: 'Yeni Ayna',
        duration: '20-22 dk',
        difficulty: 'Kapanış',
        warning: null,
        content: `[00:00 - 01:00] AÇILIŞ
Aynaya bak. Kim bakıyor?

[01:00 - 03:00] HATIRLA
Başında, korkuyla başladı.
Şimdi, sevgiyle bakıyorsun.

[03:00 - 10:00] RITÜEL - AYNA MEDITASYONU
Gözlerini kapat.
Aynanda kendini gör.
Ama bu defa, şefkat ile gör.

Merhaba ben. Ne yazık ki seninle.
Seninle yapılan her şey için, seninle.
Seninle hata yaptığın için, seninle.
Seninle güzel olduğun için, seninle.
Seninle yaşıyor olduğun için, seninle.

[10:00 - 18:00] KAPANIŞ SÖZLERİ
"AYNA'ya başladım, korkayla.
Gözlerimi kapatmaktan, kendime bakmaktan korktuğum için.

Ama bugün, gözler açık.
Ve gördüğüm, kendim.
Kusurlu, parçalanmış, yaralı... ama kıymetli.
Evet, ben bu. Ve ben seni seviyorum.

AYNA bitti mi? Hayır.
AYNA her gün, devam edecek.
Çünkü kendini tanımak, bir gün değil, bir yaşam işi.

Ama bugün, biliyorum: Ben öğrendim.
Ben kabulledim. Ben sevdim.

Yeni gözlerle, devam ediyorum."

[18:00 - 20:00] KAPANIŞ
Ayna karşısından kalk. Sevgiyle, yavaş kalk.`,
        practice: {
          title: 'AYNA Devamı',
          description: 'AYNA bitti, ama kendini tanıma devam edecek. Her gün biraz daha derinleşecek.',
          question: 'AYNA yolculuğu bana neler verdi?'
        }
      }]
    }
  ]
};

export type AynaModule = typeof aynaData;
