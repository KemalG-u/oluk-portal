interface Pratik {
  baslik: string;
  aciklama: string;
  soru: string;
}

interface SeansIcerik {
  baslik: string;
  sure: string;
  aciklama: string;
  videoUrl: string;
  transkript: string;
  pratik: Pratik;
}

export const seansIcerikleri: Record<string, Record<number, SeansIcerik>> = {
  'kapi': {
    1: {
      baslik: 'Menzil: Neden Buradayız?',
      sure: '8 dk',
      aciklama: `Eşiktesin.

Bu ilk seansta, yolculuğun başlangıcına bakacağız.

Neden buradasın?
Ne arıyorsun?
Ne bulmayı umuyorsun?

Bu sorular, cevaplarından daha önemli.`,
      videoUrl: '',
      transkript: `Hoş geldin.

Şu an bu satırları okuyorsan, bir şeyler seni buraya getirdi. Belki bir arayış, belki bir sızı, belki de sadece merak.

Sebep ne olursa olsun, önemli olan tek şey: Buradasın.

Ve burası, bir başlangıç noktası...`,
      pratik: {
        baslik: 'Günlük Soru',
        aciklama: 'Bugün kendine şu soruyu sor ve cevabını bir yere yaz:',
        soru: '"Bu yolculuktan ne bekliyorum?"'
      }
    },
    2: {
      baslik: 'Nefes: İlk Emanet',
      sure: '12 dk',
      aciklama: `Nefes, sana verilen ilk emanet.

Her nefes alışta hayat giriyor.
Her verişte, bırakman gereken gidiyor.

Bu kadar basit. Bu kadar derin.`,
      videoUrl: '',
      transkript: `Nefes almak...

Bunu günde yaklaşık 20.000 kez yapıyorsun. Ama kaç tanesinin farkındasın?

İşte bu seansta, nefesi yeniden keşfedeceğiz...`,
      pratik: {
        baslik: '4-7-8 Nefes',
        aciklama: 'Günde 3 kez bu tekniği uygula:',
        soru: '4 saniye nefes al, 7 saniye tut, 8 saniye ver. 4 döngü tekrarla.'
      }
    },
    3: {
      baslik: 'Tenin Sesi: Bedene Dönüş',
      sure: '10 dk',
      aciklama: `Bedenin seninle konuşuyor.

Ama onu dinlemeyi unuttun.

O sızı, o gerginlik, o ağırlık...
Hepsi bir mesaj.`,
      videoUrl: '',
      transkript: `Bedenin bir harita gibi.

Her bölgesi, farklı bir hikaye anlatıyor. Omuzlarındaki yük, karnındaki düğüm, göğsündeki sıkışma...

Bu seansta, bedeni okumayı öğreneceğiz...`,
      pratik: {
        baslik: 'Beden Taraması',
        aciklama: 'Yatmadan önce 5 dakika ayır:',
        soru: 'Gözlerini kapat. Ayak parmaklarından başlayarak, bedeninin her bölgesini tara. Nerede gerginlik var? Nerede rahatlık?'
      }
    },
    4: {
      baslik: 'Merkez: Ruhun Durakları',
      sure: '10 dk',
      aciklama: `Bedeninde yedi durak var.

Her biri, farklı bir kapı.
Her biri, farklı bir bilgelik.

Hangisi sana sesleniyor?`,
      videoUrl: '',
      transkript: `Enerji merkezleri...

Binlerce yıldır, farklı kültürler bu merkezlerin varlığını biliyordu. Hint'te chakra, Çin'de tan tien, bizde letaif...

Bu seansta, kendi merkezlerinle tanışacaksın...`,
      pratik: {
        baslik: 'Merkez Farkındalığı',
        aciklama: 'Oturarak yapılacak kısa bir pratik:',
        soru: 'Elini kalbinin üzerine koy. 7 nefes boyunca sadece orayı hisset. Sonra elini karnına indir. 7 nefes daha.'
      }
    },
    5: {
      baslik: 'Mühür: Niyet ve Sükût',
      sure: '5 dk',
      aciklama: `Her kapanış, bir mühür.

Öğrendiklerini içine hapseden.
Seni bir sonrakine hazırlayan.

Şimdi, sessizce mühürle.`,
      videoUrl: '',
      transkript: `Bu ilk dersin sonuna geldin.

Ama bu bir son değil, bir başlangıç. Her ders, bir öncekinin üzerine inşa edecek.

Şimdi, öğrendiklerini bir niyetle mühürle...`,
      pratik: {
        baslik: 'Niyet Mühürü',
        aciklama: 'Dersi tamamlamadan önce:',
        soru: 'Gözlerini kapat. Bu derste sana en çok dokunan şeyi hatırla. Onu bir niyet cümlesine dönüştür. "Ben..." diye başlasın.'
      }
    }
  }
};

export type { Pratik, SeansIcerik };
