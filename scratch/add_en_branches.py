# Let's define the new translated BRANCHES list
new_branches = """const BRANCHES: {
  id: string;
  name: { uz: string; ru: string; tr: string; en?: string };
  address: { uz: string; ru: string; tr: string; en?: string };
  phone: string;
  hours: { uz: string; ru: string; tr: string; en?: string };
  mapsUrl: string;
  lat?: number;
  lng?: number;
}[] = [
  {
    id: 'qiziriq-ttb',
    name: {
      uz: 'Qiziriq tuman tibbiyot birlashmasi filiali',
      ru: 'Филиал при Кызырыкском районном медицинском объединении',
      tr: 'Kızırık İlçe Tıp Birleşimi Şubesi',
      en: 'Qiziriq District Medical Association Branch'
    },
    address: {
      uz: 'Qiziriq tumani tibbiyot birlashmasi hududida',
      ru: 'На территории Кызырыкского районного медицинского объединения',
      tr: 'Kızırık İlçe Tıp Birleşimi alanında',
      en: 'Inside the territory of Qiziriq District Medical Association'
    },
    phone: '+998 88 350 24 42',
    hours: { uz: 'Du-Shan: 08:00–17:00', ru: 'Пн-Сб: 08:00–17:00', tr: 'Pzt-Cmt: 08:00–17:00', en: 'Mon-Sat: 08:00–17:00' },
    mapsUrl: 'https://yandex.uz/maps/-/CTU372pc'
  },
  {
    id: 'sherobod-ttb',
    name: {
      uz: 'Sherobod tuman tibbiyot birlashmasi filiali',
      ru: 'Филиал при Шерабадском районном медицинском объединении',
      tr: 'Şerabad İlçe Tıp Birleşimi Şubesi',
      en: 'Sherobod District Medical Association Branch'
    },
    address: {
      uz: 'Sherobod tumani tibbiyot birlashmasi hududida',
      ru: 'На территории Шерабадского районного медицинского объединения',
      tr: 'Şerabad İlçe Tıp Birleşimi alanında',
      en: 'Inside the territory of Sherobod District Medical Association'
    },
    phone: '+998 99 622 54 52',
    hours: { uz: 'Du-Shan: 08:00–17:00', ru: 'Пн-Сб: 08:00–17:00', tr: 'Pzt-Cmt: 08:00–17:00', en: 'Mon-Sat: 08:00–17:00' },
    mapsUrl: 'https://yandex.uz/maps/-/CPTNNTig'
  },
  {
    id: 'angor-ttb',
    name: {
      uz: 'Angor tuman tibbiyot birlashmasi filiali',
      ru: 'Филиал при Ангорском районном медицинском объединении',
      tr: 'Angor İlçe Tıp Birleşimi Şubesi',
      en: 'Angor District Medical Association Branch'
    },
    address: {
      uz: 'Angor tumani tibbiyot birlashmasi hududida',
      ru: 'На территории Ангорского районного медицинского объединения',
      tr: 'Angor İlçe Tıp Birleşimi alanında',
      en: 'Inside the territory of Angor District Medical Association'
    },
    phone: '+998 93 635 22 58',
    hours: { uz: 'Du-Shan: 08:00–17:00', ru: 'Пн-Сб: 08:00–17:00', tr: 'Pzt-Cmt: 08:00–17:00', en: 'Mon-Sat: 08:00–17:00' },
    mapsUrl: 'https://yandex.uz/maps/-/CTU37BLj'
  },
  {
    id: 'uchqizil-ttb',
    name: {
      uz: 'Uchqizil tuman tibbiyot birlashmasi filiali',
      ru: 'Филиал при Учкизилском районном медицинском объединении',
      tr: 'Üçkızıl İlçe Tıp Birleşimi Şubesi',
      en: 'Uchqizil District Medical Association Branch'
    },
    address: {
      uz: 'Uchqizil tumani tibbiyot birlashmasi hududida',
      ru: 'На территории Учкизилского районного медицинского объединения',
      tr: 'Üçkızıl İlçe Tıp Birleşimi alanında',
      en: 'Inside the territory of Uchqizil District Medical Association'
    },
    phone: '+998 94 063 30 99',
    hours: { uz: 'Du-Shan: 08:00–17:00', ru: 'Пн-Сб: 08:00–17:00', tr: 'Pzt-Cmt: 08:00–17:00', en: 'Mon-Sat: 08:00–17:00' },
    mapsUrl: 'https://yandex.uz/maps/-/CTU3zD-i'
  },
  {
    id: 'shurchi-ttb',
    name: {
      uz: 'Sho‘rchi tuman tibbiyot birlashmasi filiali',
      ru: 'Филиал при Шурчинском районном медицинском объединении',
      tr: 'Şurçi İlçe Tıp Birleşimi Şubesi',
      en: 'Shurchi District Medical Association Branch'
    },
    address: {
      uz: 'Sho‘rchi tumani tibbiyot birlashmasi hududida',
      ru: 'На территории Шурчинского районного медицинского объединения',
      tr: 'Şurçi İlçe Tıp Birleşimi alanında',
      en: 'Inside the territory of Shurchi District Medical Association'
    },
    phone: '+998 99 715 77 72',
    hours: { uz: 'Du-Shan: 08:00–17:00', ru: 'Пн-Сб: 08:00–17:00', tr: 'Pzt-Cmt: 08:00–17:00', en: 'Mon-Sat: 08:00–17:00' },
    mapsUrl: 'https://yandex.uz/maps/-/CTU3zJjj'
  },
  {
    id: 'qumqurgon-ttb',
    name: {
      uz: 'Qumqo‘rg‘on tuman tibbiyot birlashmasi filiali',
      ru: 'Филиал при Кумкурганском районном медицинском объединении',
      tr: 'Kumkurgan İlçe Tıp Birleşimi Şubesi',
      en: 'Qumqo\'rg\'on District Medical Association Branch'
    },
    address: {
      uz: 'Qumqo‘rg‘on tumani tibbiyot birlashmasi hududida',
      ru: 'На территории Кумкурганского районного медицинского объединения',
      tr: 'Kumkurgan İlçe Tıp Birleşimi alanında',
      en: 'Inside the territory of Qumqo\'rg\'on District Medical Association'
    },
    phone: '+998 93 091 16 93',
    hours: { uz: 'Du-Shan: 08:00–17:00', ru: 'Пн-Сб: 08:00–17:00', tr: 'Pzt-Cmt: 08:00–17:00', en: 'Mon-Sat: 08:00–17:00' },
    mapsUrl: 'https://yandex.uz/maps/-/CTU3vX3a'
  },
  {
    id: 'jarqurgon-ttb',
    name: {
      uz: 'Jarqo‘rg‘on tuman tibbiyot birlashmasi filiali',
      ru: 'Филиал при Джаркурганском районном медицинском объединении',
      tr: 'Jarkurgan İlçe Tıp Birleşimi Şubesi',
      en: 'Jarqo\'rg\'on District Medical Association Branch'
    },
    address: {
      uz: 'Jarqo‘rg‘on tumani tibbiyot birlashmasi hududida',
      ru: 'На территории Джаркурганского районного медицинского объединения',
      tr: 'Jarkurgan İlçe Tıp Birleşimi alanında',
      en: 'Inside the territory of Jarqo\'rg\'on District Medical Association'
    },
    phone: '+998 94 076 45 55 / +998 90 072 02 81',
    hours: { uz: 'Du-Shan: 08:00–17:00', ru: 'Пн-Сб: 08:00–17:00', tr: 'Pzt-Cmt: 08:00–17:00', en: 'Mon-Sat: 08:00–17:00' },
    mapsUrl: 'https://yandex.uz/maps/-/CTU3v4Kt'
  },
  {
    id: 'boysun-ttb',
    name: {
      uz: 'Boysun tuman tibbiyot birlashmasi filiali',
      ru: 'Филиал при Байсунском районном медицинском объединении',
      tr: 'Boysun İlçe Tıp Birleşimi Şubesi',
      en: 'Boysun District Medical Association Branch'
    },
    address: {
      uz: 'Boysun tumani tibbiyot birlashmasi hududida',
      ru: 'На территории Байсунского районного медицинского объединения',
      tr: 'Boysun İlçe Tıp Birleşimi alanında',
      en: 'Inside the territory of Boysun District Medical Association'
    },
    phone: '+998 91 580 52 22',
    hours: { uz: 'Du-Shan: 08:00–17:00', ru: 'Пн-Сб: 08:00–17:00', tr: 'Pzt-Cmt: 08:00–17:00', en: 'Mon-Sat: 08:00–17:00' },
    mapsUrl: 'https://yandex.uz/maps/-/CTU3rCyk'
  },
  {
    id: 'onkologiya-filiali',
    name: {
      uz: 'Onkologiya va radiologiya tibbiyot markazi Surxondaryo filiali',
      ru: 'Сурхандарьинский филиал онкологического и радиологического центра',
      tr: 'Onkoloji ve Radyoloji Tıp Merkezi Surhanderya Şubesi',
      en: 'Surxondaryo Branch of Oncology and Radiology Medical Center'
    },
    address: {
      uz: 'Respublika ixtisoslashtirilgan onkologiya va radiologiya ilmiy-amaliy tibbiyot markazi Surxondaryo viloyat filiali hududida',
      ru: 'На территории Сурхандарьинского филиала онкологического и радиологического центра',
      tr: 'Cumhuriyet Onkoloji ve Radyoloji Merkezi Surhanderya Şubesi alanında',
      en: 'Inside the territory of Surxondaryo Regional Branch of the Republican Specialized Scientific and Practical Medical Center of Oncology and Radiology'
    },
    phone: '+998 99 093 90 70',
    hours: { uz: 'Du-Shan: 08:00–17:00', ru: 'Пн-Сб: 08:00–17:00', tr: 'Pzt-Cmt: 08:00–17:00', en: 'Mon-Sat: 08:00–17:00' },
    mapsUrl: 'https://yandex.uz/maps/-/CTUprV4H'
  },
  {
    id: 'bolalar-tibbiyot',
    name: {
      uz: 'Viloyat ko‘p tarmoqli bolalar tibbiyot markazi filiali',
      ru: 'Филиал при Детском многопрофильном медицинском центре',
      tr: 'Çocuk Çok Yönlü Tıp Merkezi Şubesi',
      en: 'Regional Multi-Profile Children\'s Medical Center Branch'
    },
    address: {
      uz: 'Surxondaryo viloyat ko‘p tarmoqli bolalar tibbiyot markazi hududida',
      ru: 'На территории Сурхандарьинского областного детского многопрофильного медцентра',
      tr: 'Surhanderya Çocuk Çok Yönlü Tıp Merkezi alanında',
      en: 'Inside the territory of Surxondaryo Regional Multi-Profile Children\'s Medical Center'
    },
    phone: '+998 93 093 93 34',
    hours: { uz: 'Du-Shan: 08:00–17:00', ru: 'Пн-Сб: 08:00–17:00', tr: 'Pzt-Cmt: 08:00–17:00', en: 'Mon-Sat: 08:00–17:00' },
    mapsUrl: 'https://yandex.uz/maps/-/CTUpjY3O'
  },
  {
    id: 'shoshilinch-tibbiy',
    name: {
      uz: 'Respublika shoshilinch tibbiy yordam ilmiy markazi Surxondaryo filiali',
      ru: 'Филиал Центра экстренной медицинской помощи, Сурхандарьинский филиал',
      tr: 'Acil Tıp Bilim Merkezi Surhanderya Şubesi',
      en: 'Surxondaryo Branch of the Republican Scientific Center of Emergency Medical Care'
    },
    address: {
      uz: 'Respublika shoshilinch tibbiy yordam ilmiy markazi Surxondaryo filiali hududida',
      ru: 'На территории Сурхандарьинского филиала Республиканского научного центра экстренной медпомощи',
      tr: 'Cumhuriyet Acil Tıp Merkezi Surhanderya Şubesi alanında',
      en: 'Inside the territory of Surxondaryo Branch of the Republican Scientific Center of Emergency Medical Care'
    },
    phone: '+998 93 077 70 34',
    hours: { uz: 'Du-Shan: 08:00–17:00', ru: 'Пн-Сб: 08:00–17:00', tr: 'Pzt-Cmt: 08:00–17:00', en: 'Mon-Sat: 08:00–17:00' },
    mapsUrl: 'https://yandex.uz/maps/-/CTUpbLIB'
  },
  {
    id: 'kardiologiya-filiali',
    name: {
      uz: 'Kardiologiya ilmiy-amaliy tibbiyot markazi Surxondaryo filiali',
      ru: 'Сурхандарьинский филиал Кардиологического центра',
      tr: 'Kardiyoloji Tıp Merkezi Surhanderya Şubesi',
      en: 'Surxondaryo Branch of Cardiology Scientific and Practical Medical Center'
    },
    address: {
      uz: 'Respublika ixtisoslashtirilgan kardiologiya markazi Surxondaryo viloyat filiali hududida',
      ru: 'На территории Сурхандарьинского филиала Республиканского кардиологического центра',
      tr: 'Cumhuriyet Kardiyoloji Merkezi Surhanderya Şubesi alanında',
      en: 'Inside the territory of Surxondaryo Regional Branch of the Republican Specialized Cardiology Center'
    },
    phone: '+998 88 350 28 82',
    hours: { uz: 'Du-Shan: 08:00–17:00', ru: 'Пн-Сб: 08:00–17:00', tr: 'Pzt-Cmt: 08:00–17:00', en: 'Mon-Sat: 08:00–17:00' },
    mapsUrl: 'https://yandex.uz/maps/-/CTUpZTLl'
  },
  {
    id: 'perinatal-markazi',
    name: {
      uz: 'Surxondaryo viloyati perinatal markazi filiali',
      ru: 'Филиал при Областном перинатальном центре',
      tr: 'Vilayet Perinatal Merkezi Şubesi',
      en: 'Surxondaryo Regional Perinatal Center Branch'
    },
    address: {
      uz: 'Surxondaryo viloyati perinatal markazi hududida',
      ru: 'На территории Сурхандарьинского областного перинатального центра',
      tr: 'Surhanderya Vilayet Perinatal Merkezi alanında',
      en: 'Inside the territory of Surxondaryo Regional Perinatal Center'
    },
    phone: '+998 95 571 28 19',
    hours: { uz: 'Du-Shan: 08:00–17:00', ru: 'Пн-Сб: 08:00–17:00', tr: 'Pzt-Cmt: 08:00–17:00', en: 'Mon-Sat: 08:00–17:00' },
    mapsUrl: 'https://yandex.uz/maps/-/CTUpVH-d'
  },
  {
    id: 'qon-quyish',
    name: {
      uz: 'Surxondaryo viloyat qon quyish markazi filiali',
      ru: 'Филиал при Областном центре переливания крови',
      tr: 'Vilayet Kan Bağışı Merkezi Şubesi',
      en: 'Surxondaryo Regional Blood Transfusion Center Branch'
    },
    address: {
      uz: 'Surxondaryo viloyat qon quyish markazi hududida',
      ru: 'На территории Сурхандарьинского областного центра переливания крови',
      tr: 'Surhanderya Vilayet Kan Bağışı Merkezi alanında',
      en: 'Inside the territory of Surxondaryo Regional Blood Transfusion Center'
    },
    phone: '+998 99 115 65 55',
    hours: { uz: 'Du-Shan: 08:00–17:00', ru: 'Пн-Сб: 08:00–17:00', tr: 'Pzt-Cmt: 08:00–17:00', en: 'Mon-Sat: 08:00–17:00' },
    mapsUrl: 'https://yandex.uz/maps/-/CTUpfD29'
  },
  {
    id: 'kop-tarmoqli-markaz',
    name: {
      uz: "Surxondaryo viloyat ko‘p tarmoqli tibbiyot markazi filiali",
      ru: 'Филиал при Областном многопрофильном медицинском центре',
      tr: 'Vilayet Çok Yönlü Tıp Merkezi Şubesi',
      en: 'Surxondaryo Regional Multi-Profile Medical Center Branch'
    },
    address: {
      uz: "Surxondaryo viloyat ko‘p tarmoqli tibbiyot markazi hududida",
      ru: 'На территории Сурхандарьинского областного многопрофильного медицинского центра',
      tr: 'Surhanderya Vilayet Çok Yönlü Tıp Merkezi alanında',
      en: 'Inside the territory of Surxondaryo Regional Multi-Profile Medical Center'
    },
    phone: '+998 99 093 93 10',
    hours: { uz: 'Du-Shan: 08:00–17:00', ru: 'Пн-Сб: 08:00–17:00', tr: 'Pzt-Cmt: 08:00–17:00', en: 'Mon-Sat: 08:00–17:00' },
    mapsUrl: 'https://yandex.uz/maps/-/CTUpnR52'
  }
];"""

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

start_idx = content.find('const BRANCHES:')
end_idx = content.find('];', start_idx) + 2
content = content[:start_idx] + new_branches + content[end_idx:]

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("BRANCHES successfully updated with EN translations!")
