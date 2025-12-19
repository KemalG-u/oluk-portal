interface Seans {
  id: number;
  baslik: string;
  sure: string;
}

export const dersler = {
  'kapi': {
    id: 1,
    baslik: 'Kapı',
    altBaslik: 'Temel Arınma',
    icon: '🚪',
    sure: '45 dakika',
    giris: `Eşiktesin.

Bu "Kapı", sadece bir müfredatın başlangıcı değil; kendi içine doğru atılacak o ilk, ürkek ama vakur adımın adıdır.

Ruhun, tozlu raflar arasında unutulmuş eski bir yazma eser gibi, gün ışığına çıkmayı bekliyor.

Burada öğreneceğin nefesten öte bir "can üfleyişi", bedenden öte bir "mülk tanıyışıdır."

Hazırsan, perdeler aralanıyor; içeride seni, yine sen bekliyorsun.`,
    seanslar: [
      { id: 1, baslik: 'Menzil: Neden Buradayız?', sure: '8 dk' },
      { id: 2, baslik: 'Nefes: İlk Emanet', sure: '12 dk' },
      { id: 3, baslik: 'Tenin Sesi: Bedene Dönüş', sure: '10 dk' },
      { id: 4, baslik: 'Merkez: Ruhun Durakları', sure: '10 dk' },
      { id: 5, baslik: 'Mühür: Niyet ve Sükût', sure: '5 dk' },
    ],
    kazanimlar: [
      'Ciğerine dolan havayı sıradan bir rüzgâr değil, hayatın tartılmış bir musikisi gibi tanıyacaksın.',
      'Bedenin, o uzun zamandır uğramadığın mahzun şehir, yeniden senin haritana dahil olacak.',
      'Ruhundaki saklı merkezlerin, madde ile mana arasındaki o ince köprünün farkına varacaksın.',
      'Günlük hayatın keşmekeşi içinde kendine ait, yıkılmaz bir kale inşa etmenin ilk harcını koyacaksın.'
    ]
  },
  'ayna': {
    id: 2,
    baslik: 'Ayna',
    altBaslik: 'Kendini Tanıma',
    icon: '🪞',
    sure: '60 dakika',
    giris: `Ayna karşısındasın.

Ama bu ayna, yüzünü değil; yüzünün ardındakini gösterir.

Gölgeler, kaçtıkça büyür. Dönüp baktığında küçülürler.

Cesaretin varsa, bak.`,
    seanslar: [
      { id: 1, baslik: 'Yansıma: Ayna Nedir?', sure: '10 dk' },
      { id: 2, baslik: 'Gölge: Karanlıkla Tanışma', sure: '15 dk' },
      { id: 3, baslik: 'Kabul: Olduğun Gibi', sure: '12 dk' },
      { id: 4, baslik: 'Bütünleşme: Parçaların Dansı', sure: '15 dk' },
      { id: 5, baslik: 'Mühür: Kendine Söz', sure: '8 dk' },
    ],
    kazanimlar: [
      'Gölgelerinle yüzleşir, onları düşman değil öğretmen olarak görürsün.',
      'Kendini yargılamadan kabul etmenin huzurunu tadarsın.',
      'Parçalanmış benliğini bütünlemeye başlarsın.',
      'Kendine verdiğin sözün ağırlığını hissedersin.'
    ]
  },
  'kopru': {
    id: 3,
    baslik: 'Köprü',
    altBaslik: 'Bağlantılar',
    icon: '🌉',
    sure: '75 dakika',
    giris: `İki kıyı arasındasın.

Biri bildiğin, biri bilinmeyen.

Köprü, ikisini birleştiren o ince çizgi.

Geçmek cesaret ister. Ama asıl cesaret, köprüde durup iki tarafa da bakabilmek.`,
    seanslar: [
      { id: 1, baslik: 'Kıyı: Nereden Geldin?', sure: '12 dk' },
      { id: 2, baslik: 'Boşluk: Aradaki Mesafe', sure: '15 dk' },
      { id: 3, baslik: 'Adım: İlk Hamle', sure: '18 dk' },
      { id: 4, baslik: 'Denge: Köprüde Kalmak', sure: '20 dk' },
      { id: 5, baslik: 'Varış: Yeni Kıyı', sure: '10 dk' },
    ],
    kazanimlar: [
      'Geçmişinle barışır, geleceğe açılırsın.',
      'Belirsizlikte durmayı öğrenirsin.',
      'İlk adımın gücünü keşfedersin.',
      'Yeni bir kıyıya varmış olarak uyandığın sabahı hayal edersin.'
    ]
  },
  'isik': {
    id: 4,
    baslik: 'Işık',
    altBaslik: 'Aydınlanma',
    icon: '✨',
    sure: '90 dakika',
    giris: `Karanlık, ışığın yokluğu değil.

Onu görmezden gelişimiz.

Bir kibrit çakmak yeter bazen.

Bazen de güneş doğması lazım.

Sen hangisine hazırsın?`,
    seanslar: [
      { id: 1, baslik: 'Karanlık: Gece Vakti', sure: '15 dk' },
      { id: 2, baslik: 'Kıvılcım: İlk Işık', sure: '18 dk' },
      { id: 3, baslik: 'Alev: Büyüyen Nur', sure: '20 dk' },
      { id: 4, baslik: 'Güneş: Tam Aydınlık', sure: '25 dk' },
      { id: 5, baslik: 'Paylaşım: Işığı Taşımak', sure: '12 dk' },
    ],
    kazanimlar: [
      'Karanlığın da bir anlamı olduğunu anlarsın.',
      'İçindeki ışığı uyandırırsın.',
      'Aydınlanmanın bir son değil, başlangıç olduğunu görürsün.',
      'Işığı başkalarıyla paylaşmanın yollarını öğrenirsin.'
    ]
  },
  'yol': {
    id: 5,
    baslik: 'Yol',
    altBaslik: 'Sürekli Yürüyüş',
    icon: '🛤️',
    sure: '120 dakika',
    giris: `Yol bitmez.

Biten, yolcunun nefesidir.

Ama sen nefesini tuttun mu, yol seni bekler.

Acele etme. Yürü.

Her adım, bir duadır.`,
    seanslar: [
      { id: 1, baslik: 'Harita: Yolun Çizgisi', sure: '20 dk' },
      { id: 2, baslik: 'Azık: Yola Ne Götürürsün?', sure: '25 dk' },
      { id: 3, baslik: 'Yoldaş: Kiminle Yürürsün?', sure: '25 dk' },
      { id: 4, baslik: 'Mola: Durup Dinlenmek', sure: '20 dk' },
      { id: 5, baslik: 'Devam: Yürüyüş Sürer', sure: '30 dk' },
    ],
    kazanimlar: [
      'Yolculuğun haritasını çıkarırsın.',
      'Yanına alacaklarını ve bırakacaklarını seçersin.',
      'Yalnız olmadığını hatırlarsın.',
      'Durmanın da yürümenin parçası olduğunu öğrenirsin.'
    ]
  }
} as const;

export type DersSlug = keyof typeof dersler;
export type Ders = typeof dersler[DersSlug];
