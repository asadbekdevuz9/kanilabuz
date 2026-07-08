import re

# Read original file
with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update useState<'uz' | 'ru' | 'tr'>('uz')
content = content.replace("useState<'uz' | 'ru' | 'tr'>('uz')", "useState<'uz' | 'ru' | 'tr' | 'en'>('uz')")

# 2. Translate GALLERY_ITEMS
# Let's define the new GALLERY_ITEMS block with 'en' translations
new_gallery_items = """const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    category: 'collaboration',
    title: {
      uz: 'Seminar va nazariy o‘quv mashg‘ulotlari',
      ru: 'Семинары и теоретические занятия',
      tr: 'Seminerler ve teorik eğitimler',
      en: 'Seminars and theoretical training sessions'
    },
    description: {
      uz: 'Termiz Davlat Universiteti Biologiya yo‘nalishi talabalari uchun o‘tkazilgan amaliy mashg‘ulotlardan lavha',
      ru: 'Кадры с теоретических и семинарских занятий для студентов-биологов Термезского государственного университета',
      tr: 'Termez Devlet Üniversitesi Biyoloji bölümü öğrencileri için düzenlenen teorik seminerlerden bir kare',
      en: 'A scene from practical classes conducted for biology students of Termez State University'
    },
    image: terdu4Img
  },
  {
    id: 'gal-2',
    category: 'collaboration',
    title: {
      uz: 'Laboratoriya tahlillari bo‘yicha seminar',
      ru: 'Семинар по лабораторным анализам',
      tr: 'Laboratuvar analizleri üzerine seminer',
      en: 'Seminar on laboratory analyses'
    },
    description: {
      uz: 'Termiz Davlat Universiteti Biologiya yo‘nalishi talabalari uchun o‘tkazilgan amaliy mashg‘ulotlardan lavha',
      ru: 'Кадры с практических занятий для студентов биологического направления Термезского государственного университета',
      tr: 'Termez Devlet Üniversitesi Biyoloji bölümü öğrencileri için düzenlenen pratik derslerden bir kare',
      en: 'A scene from practical training sessions held for biology students of Termez State University'
    },
    image: terdu1Img
  },
  {
    id: 'gal-3',
    category: 'collaboration',
    title: {
      uz: 'Amaliy laboratoriya mashg‘ulotlari',
      ru: 'Практические лабораторные занятия',
      tr: 'Pratik laboratuvar uygulamaları',
      en: 'Practical laboratory sessions'
    },
    description: {
      uz: 'Termiz Davlat Universiteti Biologiya yo‘nalishi talabalari uchun o‘tkazilgan amaliy mashg‘ulotlardan lavha',
      ru: 'Студенты биологического факультета ТерГУ во время выполнения практических лабораторных работ',
      tr: 'Termez Devlet Üniversitesi Biyoloji bölümü öğrencilerinin laboratuvardaki pratik çalışma anları',
      en: 'Biology students of Termez State University during practical laboratory tasks'
    },
    image: terdu3Img
  },
  {
    id: 'gal-4',
    category: 'collaboration',
    title: {
      uz: 'Tibbiy diagnostika bo‘yicha mahorat darslari',
      ru: 'Мастер-классы по медицинской диагностике',
      tr: 'Tıbbi teşhis üzerine atölye çalışmaları',
      en: 'Master classes on medical diagnostics'
    },
    description: {
      uz: 'Termiz Davlat Universiteti Biologiya yo‘nalishi talabalari uchun o‘tkazilgan amaliy mashg‘ulotlardan lavha',
      ru: 'Проведение мастер-классов по методам современной медицинской диагностики для будущих специалистов',
      tr: 'Geleceğin uzmanlarına modern tıbbi teşhis yöntemleri üzerine uygulamalı eğitim verilmesi',
      en: 'Providing hands-on training to future specialists on modern medical diagnostic methods'
    },
    image: terdu2Img
  },
  {
    id: 'gal-5',
    category: 'opening',
    title: {
      uz: 'Tantanali ochilish marosimi: KANI-LAB yangi imkoniyatlar sari',
      ru: 'Торжественная церемония открытия: KANI-LAB на пути к новым возможностям',
      tr: 'Görkemli açılış töreni: KANI-LAB yeni fırsatlara doğru',
      en: 'Grand Opening Ceremony: KANI-LAB towards new opportunities'
    },
    description: {
      uz: 'KANI-LAB laboratoriyasining Respublika ixtisoslashtirilgan dermatovenerologiya va kosmetologiya ilmiy-amaliy tibbiyot markazi Surxondaryo viloyat filialidagi qon olish shahobchasi tantanali ochilish marosimidan lavhalar.',
      ru: 'Кадры с торжественной церемонии открытия пункта забора крови KANI-LAB в Сурхандарьинском областном филиале Республиканского специализированного научно-практического медицинского центра дерматовенерологии и косметологии.',
      tr: 'Cumhuriyet Dermatoveneroloji ve Kozmetoloji Uzmanlık Bilimsel ve Pratik Tıp Merkezi Surhanderya bölge şubesinde KANI-LAB kan alma biriminin görkemli açılış töreninden görüntüler.',
      en: 'Scenes from the grand opening ceremony of the KANI-LAB blood collection station at the Surxondaryo regional branch of the Republican Specialized Scientific and Practical Medical Center of Dermatology and Cosmetology.'
    },
    image: tanosil1Img
  },
  {
    id: 'gal-6',
    category: 'opening',
    title: {
      uz: 'An’anaviy qizil tasmalar kesildi: yangi bo‘lim faoliyati rasman boshlandi',
      ru: 'Традиционная красная лента разрезана: новое отделение официально начало работу',
      tr: 'Geleneksel kırmızı kurdele kesildi: yeni bölüm resmen faaliyete başladı',
      en: 'Traditional red ribbons cut: new department officially starts operations'
    },
    description: {
      uz: 'Tasmalar kesilib, Respublika dermatovenerologiya va kosmetologiya markazi filialida yangi qon olish shahobchamiz faoliyati rasman boshlangan lahzalar.',
      ru: 'Момент разрезания ленты, символизирующий официальный запуск нашего нового пункта забора крови в филиале Республиканского центра дерматовенерологии и косметологии.',
      tr: 'Kurdele kesilerek Cumhuriyet Dermatoveneroloji ve Kozmetoloji Merkezi şubesinde yeni kan alma birimimizin resmen faaliyete başladığı anlar.',
      en: 'Moments when the ribbon was cut, officially starting the activities of our new blood collection point in the branch of the Republican Dermatology and Cosmetology Center.'
    },
    image: tanosil2Img
  },
  {
    id: 'gal-7',
    category: 'opening',
    title: {
      uz: 'Birinchi ish kunlari: mutaxassislarimiz tashrif buyurgan mehmonlar va hamkasblar bilan birga',
      ru: 'Первые рабочие дни: наши специалисты с гостями и коллегами',
      tr: 'İlk iş günleri: uzmanlarımız davetli misafirler ve meslektaşları ile birlikte',
      en: 'First working days: our specialists together with visiting guests and colleagues'
    },
    description: {
      uz: 'Mutaxassislarimiz yangi ochilgan qon olish shahobchasida hamkor shifokorlar va mehmonlar bilan birinchi ish kunida.',
      ru: 'Наши специалисты с врачами-партнерами и гостями в первый рабочий день в новом пункте забора крови.',
      tr: 'Uzmanlarımızın, yeni açılan kan alma biriminde ortak doktorlar ve misafirler ile ilk iş gününden bir kare.',
      en: 'Our specialists on the first working day at the newly opened blood collection point with partner doctors and guests.'
    },
    image: tanosil3Img
  },
  {
    id: 'gal-8',
    category: 'opening',
    title: {
      uz: 'Sifatli xizmat ko‘rsatish uchun barcha texnik tayyorgarlik ta’minlangan',
      ru: 'Обеспечена техническая подготовка для качественного обслуживания',
      tr: 'Kaliteli hizmet için tüm teknik hazırlıklar tamamlandı',
      en: 'All technical preparations ensured for high-quality service'
    },
    description: {
      uz: 'Bemorlarni ro‘yxatga olish, tahlil namunalarini rasmiylashtirish va xavfsiz qon olish uchun barcha shart-sharoitlar shay holatga keltirilgan.',
      ru: 'Обеспечены все технические условия для регистрации пациентов, оформления образцов анализов и безопасного забора крови.',
      tr: 'Hastalardan numunelerin güvenli alınması, kaydı ve analize hazırlanması için tüm teknik ve hijyenik altyapı hazır durumdadır.',
      en: 'All conditions are prepared and ready for patient registration, test sample processing, and safe blood collection.'
    },
    image: tanosil4Img
  },
  {
    id: 'gal-9',
    category: 'womens-day',
    title: {
      uz: 'KANI-LAB Angor filiali jamoasi bayram shukuhi bilan',
      ru: 'Коллектив филиала KANI-LAB в Ангоре в праздничной атмосфере',
      tr: 'Angor\'daki KANI-LAB şubesi ekibi bayram havasında',
      en: 'KANI-LAB Angor branch team in festive spirit'
    },
    description: {
      uz: 'KANI-LAB jamoasi ayollarning jamiyatdagi, xususan tibbiyot sohasidagi o‘rni va mehnatini yuksak qadrlaydi. 8-mart bayrami munosabati bilan laboratoriyamizning markaziy ofisi hamda barcha filiallarida ayol xodimlarimiz va hamkorlarimiz uchun bayram tadbirlari o‘tkazildi. Ushbu lavhalarda jamoamizdagi iliq munosabatlar va bayramona kayfiyat aks etgan.',
      ru: 'Коллектив KANI-LAB высоко ценит роль и труд женщин в обществе, особенно в сфере медицины. В связи с праздником 8 марта в головном офисе и во всех филиалах нашей лаборатории прошли праздничные мероприятия для наших сотрудниц и партнеров. В этих кадрах отражены теплые отношения и праздничная атмосфера в нашем коллективе.',
      tr: 'KANI-LAB ekibi, kadınların toplumdaki, özellikle de tıp alanındaki rolünü ve emeğini derinden takdir etmektedir. 8 Mart Dünya Kadınlar Günü vesilesiyle merkez ofisimiz ve tüm şubelerimizde kadın çalışanlarımız ve ortaklarımız için kutlama etkinlikleri düzenlendi. Bu kareler, ekibimizdeki sıcak ilişkileri ve bayram havasını yansıtmaktadır.',
      en: 'The KANI-LAB team highly values the role and work of women in society, especially in the field of medicine. On the occasion of March 8, festive events were held for our female employees and partners at the main office and all branches of our laboratory. These scenes reflect the warm relations and festive mood in our team.'
    },
    image: xotinQizlarAngorImg
  },
  {
    id: 'gal-10',
    category: 'womens-day',
    title: {
      uz: 'Filiallarimizda bayram tabriklari va e\'tibor',
      ru: 'Праздничные поздравления и внимание в наших филиалах',
      tr: 'Şubelerimizde bayram tebrikleri ve gösterilen ilgi',
      en: 'Holiday congratulations and attention in our branches'
    },
    description: {
      uz: 'KANI-LAB jamoasi ayollarning jamiyatdagi, xususan tibbiyot sohasidagi o‘rni va mehnatini yuksak qadrlaydi. 8-mart bayrami munosabati bilan laboratoriyamizning markaziy ofisi hamda barcha filiallarida ayol xodimlarimiz va hamkorlarimiz uchun bayram tadbirlari o‘tkazildi. Ushbu lavhalarda jamoamizdagi iliq munosabatlar va bayramona kayfiyat aks etgan.',
      ru: 'Коллектив KANI-LAB высоко ценит роль и труд женщин в обществе, особенно в сфере медицины. В связи с праздником 8 марта в головном офисе и во всех филиалах нашей лаборатории прошли праздничные мероприятия для наших сотрудниц и партнеров. В этих кадрах отражены теплые отношения и праздничная атмосфера в нашем коллективе.',
      tr: 'KANI-LAB ekibi, kadınların toplumdaki, özellikle de tıp alanındaki rolünü ve emeğini derinden takdir etmektedir. 8 Mart Dünya Kadınlar Günü vesilesiyle merkez ofisimiz ve tüm şubelerimizde kadın çalışanlarımız ve ortaklarımız için kutlama etkinlikleri düzenlendi. Bu kareler, ekibimizdeki sıcak ilişkileri ve bayram havasını yansıtmaktadır.',
      en: 'The KANI-LAB team highly values the role and work of women in society, especially in the field of medicine. On the occasion of March 8, festive events were held for our female employees and partners at the main office and all branches of our laboratory. These scenes reflect the warm relations and festive mood in our team.'
    },
    image: xotinQizlarFilialdaImg
  },
  {
    id: 'gal-11',
    category: 'womens-day',
    title: {
      uz: 'KANI-LAB Markaziy laboratoriyasida bayram tadbiri',
      ru: 'Праздничное мероприятие в Центральной лаборатории KANI-LAB',
      tr: 'KANI-LAB Merkez Laboratuvarı\'nda bayram etkinliği',
      en: 'Holiday event at KANI-LAB Central Laboratory'
    },
    description: {
      uz: 'KANI-LAB jamoasi ayollarning jamiyatdagi, xususan tibbiyot sohasidagi o‘rni va mehnatini yuksak qadrlaydi. 8-mart bayrami munosabati bilan laboratoriyamizning markaziy ofisi hamda barcha filiallarida ayol xodimlarimiz va hamkorlarimiz uchun bayram tadbirlari o‘tkazildi. Ushbu lavhalarda jamoamizdagi iliq munosabatlar va bayramona kayfiyat aks etgan.',
      ru: 'Коллектив KANI-LAB высоко ценит роль и труд женщин в обществе, особенно в сфере медицины. В связи с праздником 8 марта в головном офисе и во всех филиалах нашей лаборатории прошли праздничные мероприятия для наших сотрудниц и партнеров. В этих кадрах отражены теплые отношения и праздничная атмосфера в нашем коллективе.',
      tr: 'KANI-LAB ekibi, kadınların toplumdaki, özellikle de tıp alanındaki rolünü ve emeğini derinden takdir etmektedir. 8 Mart Dünya Kadınlar Günü vesilesiyle merkez ofisimiz ve tüm şubelerimizde kutlama etkinlikleri düzenlendi. Bu kareler, ekibimizdeki sıcak ilişkileri ve bayram havasını yansıtmaktadır.',
      en: 'The KANI-LAB team highly values the role and work of women in society, especially in the field of medicine. On the occasion of March 8, festive events were held for our female employees and partners at the main office and all branches of our laboratory. These scenes reflect the warm relations and festive mood in our team.'
    },
    image: xotinQizlarMarkazdaImg
  },
  {
    id: 'gal-12',
    category: 'womens-day',
    title: {
      uz: 'Jamoamiz birgalikda: bayramona kayfiyat va xotira uchun surat',
      ru: 'Наша команда вместе: праздничное настроение и фото на память',
      tr: 'Ekibimiz bir arada: bayram havası ve hatıra fotoğrafı',
      en: 'Our team together: festive mood and commemorative photo'
    },
    description: {
      uz: 'KANI-LAB jamoasi ayollarning jamiyatdagi, xususan tibbiyot sohasidagi o‘rni va mehnatini yuksak qadrlaydi. 8-mart bayrami munosabati bilan laboratoriyamizning markaziy ofisi hamda barcha filiallarida ayol xodimlarimiz va hamkorlarimiz uchun bayram tadbirlari o‘tkazildi. Ushbu lavhalarda jamoamizdagi iliq munosabatlar va bayramona kayfiyat aks etgan.',
      ru: 'Коллектив KANI-LAB высоко ценит роль и труд женщин в обществе, особенно в сфере медицины. В связи с праздником 8 марта в головном офисе и во всех филиалах нашей лаборатории прошли праздничные мероприятия для наших сотрудниц и партнеров. В этих кадрах отражены теплые отношения и праздничная атмосфера в нашем коллективе.',
      tr: 'KANI-LAB ekibi, kadınların toplumdaki, özellikle de tıp alanındaki rolünü ve emeğini derinden takdir etmektedir. 8 Mart Dünya Kadınlar Günü vesilesiyle merkez ofisimiz ve tüm şubelerimizde kutlama etkinlikleri düzenlendi. Bu kareler, ekibimizdeki sıcak ilişkileri ve bayram havasını yansıtmaktadır.',
      en: 'The KANI-LAB team highly values the role and work of women in society, especially in the field of medicine. On the occasion of March 8, festive events were held for our female employees and partners at the main office and all branches of our laboratory. These scenes reflect the warm relations and festive mood in our team.'
    },
    image: xotinQizlarSherabodImg
  }
];"""

# Replace in content
start_idx = content.find('const GALLERY_ITEMS = [')
end_idx = content.find('];', start_idx) + 2
content = content[:start_idx] + new_gallery_items + content[end_idx:]

# 3. Translate NEWS_ITEMS
new_news_items = """const NEWS_ITEMS = [
  {
    id: 'news-video-3',
    category: 'video',
    date: '2026-06-29',
    youtubeId: 'IrN0aMwhuhE',
    title: {
      uz: 'Kani-Lab laboratoriyasi haqida to‘liq video-taqdimot',
      ru: 'Полная видеопрезентация о лаборатории Kani-Lab',
      tr: 'Kani-Lab laboratuvarı hakkında detaylı video tanıtımı',
      en: 'Full video presentation about Kani-Lab laboratory'
    },
    description: {
      uz: 'Kani-Lab laboratoriyasi faoliyati, zamonaviy robotlashtirilgan tahlil uskunalari va yuqori texnologik imkoniyatlarimiz aks etgan yangi video.',
      ru: 'Новое видео, отражающее деятельность лаборатории Kani-Lab, современное роботизированное аналитическое оборудование и наши высокотехнологичные возможности.',
      tr: 'Kani-Lab laboratuvarının faaliyetlerini, modern robotik analiz ekipmanlarını ve yüksek teknoloji imkanlarımızı yansıtan yeni tanıtım videosu.',
      en: 'A new video reflecting Kani-Lab laboratory activities, modern robotic analytical equipment, and our high-tech capabilities.'
    },
    image: ''
  },
  {
    id: 'news-video-2',
    category: 'video',
    date: '2022-06-29',
    youtubeId: 'p5-yqEegx6Y',
    title: {
      uz: 'Termiz shahridagi Perinatal markazida Kani-Lab filiali ochildi',
      ru: 'В Перинатальном центре г. Термеза открылся филиал Kani-Lab',
      tr: 'Tirmiz şehrindeki Perinatal merkezinde Kani-Lab şubesi açıldı',
      en: 'Kani-Lab branch opened in the Perinatal Center in Termez'
    },
    description: {
      uz: 'Termiz shahridagi viloyat perinatal markazida shoshilinch hamda yuqori aniqlikdagi tahlillar uchun mo‘ljallangan Kani-Lab qo‘shma laboratoriyasi faoliyat boshladi.',
      ru: 'В областном перинатальном центре города Термеза начала работу совместная лаборатория Kani-Lab, предназначенная для проведения экстренных и высокоточных анализов.',
      tr: 'Tirmiz şehrindeki vilayet perinatal merkezinde acil ve yüksek hassasiyetli analizler için tasarlanmış Kani-Lab ortak laboratuvarı faaliyete başladı.',
      en: 'A joint Kani-Lab laboratory designed for emergency and high-precision analyses has started operations in the regional perinatal center in Termez.'
    },
    image: ''
  },
  {
    id: 'news-video-1',
    category: 'video',
    date: '2021-06-29',
    youtubeId: '7Bifg4-Ceqs',
    title: {
      uz: 'Kani-Lab Markaziy Laboratoriyasi faoliyati haqida maxsus videolavha',
      ru: 'Специальный видеосюжет о деятельности Центральной Лаборатории Kani-Lab',
      tr: 'Kani-Lab Merkez Laboratuvarı faaliyetleri hakkında özel video klip',
      en: 'Special video segment on the activities of Kani-Lab Central Laboratory'
    },
    description: {
      uz: 'Kani-Lab premium laboratoriya tarmog‘ining markaziy laboratoriyasida tahlillarni bajarish jarayoni va tibbiy jihozlar haqida video-arxiv.',
      ru: 'Видеоархив о процессе выполнения анализов и медицинском оборудовании в центральной лаборатории сети лабораторий премиум-класса Kani-Lab.',
      tr: 'Kani-Lab premium laboratuvar ağının merkez laboratuvarındaki analiz süreci ve tıbbi ekipmanlar hakkında video arşivi.',
      en: 'A video archive about the test execution process and medical equipment in the central laboratory of the Kani-Lab premium laboratory network.'
    },
    image: ''
  }
];"""

start_idx = content.find('const NEWS_ITEMS = [')
end_idx = content.find('];', start_idx) + 2
content = content[:start_idx] + new_news_items + content[end_idx:]

# Save modified content
with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Gallery and News translation arrays successfully inserted!")
