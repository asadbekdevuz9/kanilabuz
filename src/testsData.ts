export interface TestItem {
  id: string;
  code?: string;
  name: { uz: string; ru: string; tr?: string };
  category: 'packages' | 'hematology' | 'biochemistry' | 'hormones' | 'infections' | 'coagulogram' | 'blood_groups' | 'allergy' | 'pcr' | 'urine' | 'bacteriology' | 'general_clinical';
  price: number;
  fasting: boolean;
  time: string;
  desc: { uz: string; ru: string; tr?: string };
}

export const LABORATORY_TESTS: TestItem[] = [
  // =========================================================================
  // --- DIAGNOSTIK PAKETLAR (DIAGNOSTIC PACKAGES) ---
  // =========================================================================
  {
    id: 'paket1',
    code: '501',
    name: { uz: 'PAKET № 1 Umumiy holat (Keng qamrovli tahlil)', ru: 'ПАКЕТ № 1 Общего Состояния (Комплексный)', tr: 'PAKET № 1 Genel Sağlık Durumu (Kapsamlı)' },
    category: 'packages',
    price: 600000,
    fasting: true,
    time: '4-5 h',
    desc: {
      uz: 'Glyukoza, Umumiy oqsil, Albumin, Mochevina, Kreatinin, Mochevaya kislota, ALT, AST, GGT, ShF, Umumiy bilirubin, Natriy, Kaliy, Kalsiy, Fosfor tahlillari.',
      ru: 'Глюкоза, Белок Общий, Альбумин, Мочевина, Креатинин, Мочевая кислота, АЛТ, АСТ, ГГТ, ЩФ, Билирубин Общий, Натрий, Калий, Кальций, Фосфор.',
      tr: 'Glukoz, Toplam Protein, Albumin, Üre, Kreatinin, Ürik Asit, ALT, AST, GGT, ALP, Toplam Bilirubin, Sodyum, Potasyum, Kalsiyum, Fosfor.'
    }
  },
  {
    id: 'paket2',
    code: '502',
    name: { uz: 'PAKET № 2 Gematologiya', ru: 'ПАКЕТ № 2 Гематология', tr: 'PAKET № 2 Hematoloji' },
    category: 'packages',
    price: 100000,
    fasting: true,
    time: '2-3 h',
    desc: {
      uz: 'Gematologik tadqiqotlar qon, tezlik eritrotsitlar (SOE/ESR).',
      ru: 'Гемограмма и Скорость Оседания Эритроцитов (СОЭ, ESR).',
      tr: 'Hemogram (Tam Kan Sayımı) ve Sedimantasyon (ESR).'
    }
  },
  {
    id: 'paket3',
    code: '503',
    name: { uz: 'PAKET № 3 Lipidogramma', ru: 'ПАКЕТ № 3 Липидограмма', tr: 'PAKET № 3 Lipid Paneli' },
    category: 'packages',
    price: 195000,
    fasting: true,
    time: '3-4 h',
    desc: {
      uz: 'Xolesterin, Trigliceridlar, LPVP, LPNP, LPONP, Aterogenlik indeksi.',
      ru: 'Холестерин, Триглицериды, ЛПВП, ЛПНП, ЛПОНП, Индекс Атерогенности.',
      tr: 'Kolesterol, Trigliserid, HDL, LDL, VLDL, Aterojenik İndeks.'
    }
  },
  {
    id: 'paket4',
    code: '504',
    name: { uz: 'PAKET № 4 Reproduktiv holat', ru: 'ПАКЕТ № 4 Репродуктивное состояние', tr: 'PAKET № 4 Üreme Sağlığı Paneli' },
    category: 'packages',
    price: 455000,
    fasting: true,
    time: '4-5 h',
    desc: {
      uz: 'Estradiol, FSG, LG, Prolaktin, Testosteron umumiy.',
      ru: 'Эстрадиол, ФСГ, ЛГ, Пролактин, Тестостерон общий.',
      tr: 'Estradiol, FSH, LH, Prolaktin, Total Testosteron.'
    }
  },
  {
    id: 'paket5',
    code: '505',
    name: { uz: 'PAKET № 5 Diabet', ru: 'ПАКЕТ № 5 Диабет', tr: 'PAKET № 5 Diyabet Paneli' },
    category: 'packages',
    price: 260000,
    fasting: true,
    time: '3-4 h',
    desc: {
      uz: 'Glyukoza, Glyukoza (ovqatdan keyin), Insulin, Glikolizirlangan gemoglobin (HbA1c).',
      ru: 'Глюкоза, Глюкоза (после приема пищи), Инсулин, Гликолизированный гемоглобин (HbA1c).',
      tr: 'Glukoz, Tokluk Kan Şekeri, İnsülin, HbA1c (Glikoze Hemoglobin).'
    }
  },
  {
    id: 'paket6',
    code: '506',
    name: { uz: 'PAKET № 6 Kardiologik', ru: 'ПАКЕТ № 6 Кардиологический', tr: 'PAKET № 6 Kardiyoloji Paneli' },
    category: 'packages',
    price: 170000,
    fasting: false,
    time: '1-2 h',
    desc: {
      uz: 'CK-MB (Kreatinkinaza-MB) va Troponin.',
      ru: 'КК-МВ (Креатинкиназа-МВ), Тропонин.',
      tr: 'CK-MB (Kreatin Kinaz MB) ve Troponin.'
    }
  },
  {
    id: 'paket7',
    code: '507',
    name: { uz: 'PAKET № 7 Buyrak sinamalari', ru: 'ПАКЕТ № 7 Почечные пробы', tr: 'PAKET № 7 Böbrek Fonksiyon Testleri' },
    category: 'packages',
    price: 260000,
    fasting: true,
    time: '3-4 h',
    desc: {
      uz: 'Mochevina, Kreatinin, Mochevaya kislota, Kalsiy, Kaliy.',
      ru: 'Мочевина, Креатинин, Мочевая кислота, Кальций, Калий.',
      tr: 'Üre, Kreatinin, Ürik Asit, Kalsiyum, Potasyum.'
    }
  },
  {
    id: 'paket8',
    code: '508',
    name: { uz: 'PAKET № 8 Homiladorlar uchun', ru: 'ПАКЕТ № 8 Для беременных', tr: 'PAKET № 8 Hamilelik Paneli' },
    category: 'packages',
    price: 390000,
    fasting: true,
    time: '4-5 h',
    desc: {
      uz: 'Glyukoza, Gepatit C jami antitelalar, Gepatit B antigen, Sifilis, Gemogramma (OAK), Siydik umumiy tahlili, Mikroflora surtmasi.',
      ru: 'Глюкоза, Гепатит С суммарные антитела, Гепатит В антиген, Сифилис-ИФА, Гемограмма (ОАК), Общий анализ мочи, Мазок на микрофлору.',
      tr: 'Glukoz, Hepatit C Toplam Antikor, Hepatit B Antijeni, Sifiliz, Hemogram (Tam Kan Sayımı), Tam İdrar Tahlili, Vajinal Smear.'
    }
  },

  // =========================================================================
  // --- GEMATOLOGIYA (HEMATOLOGY - FIOLETOVAYA & CHORNAYA KRYSHKA) ---
  // =========================================================================
  {
    id: 'test_iga',
    code: '037',
    name: { uz: 'Иммуноглобулин А (IgA)', ru: 'Иммуноглобулин А (IgA)' },
    category: 'hematology',
    price: 145000,
    fasting: true,
    time: '3-4 h',
    desc: { uz: 'Immunitet holatini va shilliq pardalar himoyasini baholash.', ru: 'Оценка состояния иммунной системы и местной защиты слизистых оболочек.' }
  },
  {
    id: 'test_aso',
    code: '038',
    name: { uz: 'Антистрептолизин-О (ASO)', ru: 'Антистрептолизин-О (ASO)' },
    category: 'hematology',
    price: 70000,
    fasting: true,
    time: '3-4 h',
    desc: { uz: 'Streptokokk infeksiyasidan keyingi asoratlarni aniqlash.', ru: 'Маркер перенесенной стрептококковой инфекции и риска осложнений.' }
  },
  {
    id: 'test_crp_hem',
    code: '039',
    name: { uz: 'С-Реактивный Белок (CRP) [Gematologiya]', ru: 'С-Реактивный Белок (CRP) [Гематология]' },
    category: 'hematology',
    price: 70000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Oʻtkir yalligʻlanish va toʻqimalar shikastlanishi koʻrsatkichi.', ru: 'Высокочувствительный индикатор воспаления и повреждения тканей.' }
  },
  {
    id: 'test_rf',
    code: '040',
    name: { uz: 'Ревматоидный Фактор (RF)', ru: 'Ревматоидный Фактор (RF)' },
    category: 'hematology',
    price: 70000,
    fasting: true,
    time: '3-4 h',
    desc: { uz: 'Sistemali revmatologik kasalliklarni aniqlash uchun.', ru: 'Маркер системных воспалительных (аутоиммунных) заболеваний.' }
  },
  {
    id: 'test_hba1c_hem',
    code: '001',
    name: { uz: 'Гликозилированный гемоглобин (HbA1c)', ru: 'Гликозилированный гемоглобин (HbA1c)' },
    category: 'hematology',
    price: 100000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Soʻnggi 3 oylik qondagi oʻrtacha glyukoza darajasi.', ru: 'Показывает среднее содержание сахара в крови за последние 3 месяца.' }
  },
  {
    id: 'test_cbc_25',
    name: { uz: 'Gemogramma (OAK) 25 koʻrsatkich', ru: 'Гемограмма (ОАК) 25 параметров' },
    category: 'hematology',
    price: 80000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Leykoformulali kengaytirilgan klinik qon tahlili.', ru: 'Развернутый клинический анализ крови по 25 ключевым параметрам.' }
  },
  {
    id: 'test_cbc_19',
    name: { uz: 'Umumiy qon tahlili (19 koʻrsatkich)', ru: 'Общий анализ крови (19 параметров)' },
    category: 'hematology',
    price: 65000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Standart klinik qon tahlili.', ru: 'Базовое клиническое исследование крови.' }
  },
  {
    id: 'test_soz_002',
    code: '002',
    name: { uz: 'Qon. Eritrotsitlar choʻkish tezligi (SOE/ESR)', ru: 'Кровь. Скорость Эритроцитов (СОЭ, ESR)' },
    category: 'hematology',
    price: 40000,
    fasting: true,
    time: '2 h',
    desc: { uz: 'Yalligʻlanish jarayonlarini bilvosita aniqlovchi tahlil.', ru: 'Косвенный маркер воспалительного процесса в организме.' }
  },

  // =========================================================================
  // --- BIOKIMYO (BIOCHEMISTRY - JELTAYA ILI KRASNAYA KRYSHKA) ---
  // =========================================================================
  {
    id: 'test_glucose',
    code: '004',
    name: { uz: 'Glyukoza (GLU)', ru: 'Глюкоза (GLU)' },
    category: 'biochemistry',
    price: 45000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Qondagi glyukoza miqdorini aniqlash.', ru: 'Определение концентрации глюкозы в плазме крови.' }
  },
  {
    id: 'test_glucose_post',
    code: '005',
    name: { uz: 'Glyukoza (ovqatdan keyin)', ru: 'Глюкоза (после приема пищи)' },
    category: 'biochemistry',
    price: 45000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Ovqatlangandan keyin glyukoza dinamikasini tekshirish.', ru: 'Исследование динамики уровня глюкозы после еды.' }
  },
  {
    id: 'test_glucose_tol_1h',
    code: '006',
    name: { uz: 'Glyukoza tolerantlik testi (homiladorlikda) 50g 1 soat', ru: 'Глюкозотолерантный тест (при беременности) 50 гр. 1 час' },
    category: 'biochemistry',
    price: 65000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Gestatsion diabetni erta aniqlash testi.', ru: 'Ранний скрининг гестационного сахарного диабета у беременных.' }
  },
  {
    id: 'test_glucose_tol_2h',
    code: '007',
    name: { uz: 'Glyukoza tolerantlik testi (peroral) 75g 2 soat', ru: 'Глюкозотолерантный тест (пероральный) 75 гр. 2 часа' },
    category: 'biochemistry',
    price: 100000,
    fasting: true,
    time: '5 h',
    desc: { uz: 'Uglevod tolerantligi buzilishini va diabetni aniqlash.', ru: 'Оценка толерантности к углеводам для диагностики преддиабета и диабета.' }
  },
  {
    id: 'test_urea',
    code: '008',
    name: { uz: 'Mochevina (URE)', ru: 'Мочевина (URE)' },
    category: 'biochemistry',
    price: 45000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Buyrak faoliyatini va oqsil almashinuvini baholash.', ru: 'Оценка выделительной функции почек и белкового обмена.' }
  },
  {
    id: 'test_creatinine',
    code: '009',
    name: { uz: 'Kreatinin (CREA)', ru: 'Креатинин (CREA)' },
    category: 'biochemistry',
    price: 45000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Buyraklar filtrlash qobiliyatining asosiy koʻrsatkichi.', ru: 'Основной маркер функции почек и фильтрационной способности.' }
  },
  {
    id: 'test_uric_acid',
    code: '010',
    name: { uz: 'Mochevaya kislota (UA)', ru: 'Мочевая кислота (UA)' },
    category: 'biochemistry',
    price: 45000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Podagra va buyrak toshlari xavfini tahlil qilish.', ru: 'Диагностика подагры, мочекаменной болезни и фильтрации почек.' }
  },
  {
    id: 'test_total_protein',
    code: '011',
    name: { uz: 'Umumiy oqsil (TP)', ru: 'Белок Общий (TP)' },
    category: 'biochemistry',
    price: 45000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Qondagi oqsillarning umumiy miqdorini baholash.', ru: 'Оценка общего содержания белков в сыворотке крови.' }
  },
  {
    id: 'test_albumin',
    code: '012',
    name: { uz: 'Albumin (ALB)', ru: 'Альбумин (ALB)' },
    category: 'biochemistry',
    price: 45000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Organizmning oqsil zaxirasini va gidratatsiya darajasini baholash.', ru: 'Маркер белкового синтеза, питания и водного баланса.' }
  },
  {
    id: 'test_alt',
    code: '013',
    name: { uz: 'Alanin Aminotransferaza (ALT)', ru: 'Аланин Аминотрансфераза (ALT)' },
    category: 'biochemistry',
    price: 45000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Jigar hujayralari holatini baholash uchun ferment.', ru: 'Фермент, используемый для оценки состояния клеток печени.' }
  },
  {
    id: 'test_ast',
    code: '014',
    name: { uz: 'Aspartat Aminotransferaza (AST)', ru: 'Аспартат Аминотрансфераза (AST)' },
    category: 'biochemistry',
    price: 45000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Yurak va jigar mushaklari holatini aniqlash tahlili.', ru: 'Фермент, отражающий состояние клеток печени и миокарда.' }
  },
  {
    id: 'test_alp',
    code: '015',
    name: { uz: 'Ishqoriy fosfataza (ALP)', ru: 'Щелочная фосфатаза (ALP)' },
    category: 'biochemistry',
    price: 45000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Jigar va suyak toʻqimalari faoliyatini tahlil qilish.', ru: 'Маркер патологии печени, желчевыводящих путей и костной ткани.' }
  },
  {
    id: 'test_ggt',
    code: '016',
    name: { uz: 'Gamma-Glutamil Transferaza (gGT)', ru: 'Гамма-Глутамил Трансфераза (gGT)' },
    category: 'biochemistry',
    price: 45000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Jigar va safro yoʻllari kasalliklarining yuqori sezuvchan markeri.', ru: 'Чувствительный маркер патологии печени и желчных путей.' }
  },
  {
    id: 'test_ldh',
    code: '017',
    name: { uz: 'Laktatdegidrogenaza (LDH)', ru: 'Лактат Дегидрогеназа (LDH)' },
    category: 'biochemistry',
    price: 55000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Hujayralar zararlanishi va toʻqimalar destruksiyasini koʻrsatadi.', ru: 'Показатель общего повреждения клеток и распада тканей.' }
  },
  {
    id: 'test_amylase',
    code: '018',
    name: { uz: 'Alfa-Amilaza (a-Amylase)', ru: 'Амилаза (a-Amylase)' },
    category: 'biochemistry',
    price: 55000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Meʻda osti bezi va soʻlak bezlari yalligʻlanishini tekshirish.', ru: 'Диагностика заболеваний поджелудочной и слюнных желез.' }
  },
  {
    id: 'test_lipase',
    code: '019',
    name: { uz: 'Lipaza (LIP)', ru: 'Липаза (LIP)' },
    category: 'biochemistry',
    price: 65000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Oʻtkir pankreatit va meʻda osti bezi kasalliklarining spesifik koʻrsatkichi.', ru: 'Специфический маркер заболеваний поджелудочной железы.' }
  },
  {
    id: 'test_ck',
    code: '020',
    name: { uz: 'Kreatinkinaza (CK)', ru: 'Креатин Киназа (CK)' },
    category: 'biochemistry',
    price: 65000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Yurak va skelet mushaklari shikastlanishi koʻrsatkichi.', ru: 'Маркер повреждения мышечной ткани и инфаркта миокарда.' }
  },
  {
    id: 'test_cholesterol',
    code: '021',
    name: { uz: 'Xolesterin (CHOL)', ru: 'Холестерол (CHOL)' },
    category: 'biochemistry',
    price: 45000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Lipid almashinuvining asosiy koʻrsatkichi.', ru: 'Ключевой показатель липидного обмена и атеросклероза.' }
  },
  {
    id: 'test_hdl',
    code: '022',
    name: { uz: 'Lipoproteidlar yuqori zichlikdagi (HDL)', ru: 'Холестерол-липопротеины высокой плотности, HDL' },
    category: 'biochemistry',
    price: 65000,
    fasting: true,
    time: '3 h',
    desc: { uz: '"Yaxshi xolesterin" - yurakni aterosklerozdan himoyalash xususiyati.', ru: '«Хороший холестерин», защищающий сосуды от атеросклероза.' }
  },
  {
    id: 'test_ldl',
    code: '023',
    name: { uz: 'Lipoproteidlar past zichlikdagi (LDL)', ru: 'Холестерол-липопротеины низкой плотности, LDL' },
    category: 'biochemistry',
    price: 65000,
    fasting: true,
    time: '3 h',
    desc: { uz: '"Yomon xolesterin" - qon tomirlarda pilakchalar hosil qiluvchi lipid.', ru: '«Плохой холестерин», основной маркер риска атеросклероза.' }
  },
  {
    id: 'test_trg',
    code: '024',
    name: { uz: 'Triglitseridlar (TRG)', ru: 'Триглицериды (TRG)' },
    category: 'biochemistry',
    price: 45000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Energiya zaxirasi boʻlgan neytral yogʻlar miqdori.', ru: 'Оценка запасов жиров в крови, маркер риска ИБС.' }
  },
  {
    id: 'test_bilirubin_total',
    code: '025',
    name: { uz: 'Umumiy bilirubin (TBIL)', ru: 'Билирубин Общий (TBIL)' },
    category: 'biochemistry',
    price: 45000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Jigar va oʻt yoʻllari faoliyati, sariqlik sabablarini aniqlash.', ru: 'Маркер функции печени, желчного пузыря и распада эритроцитов.' }
  },
  {
    id: 'test_bilirubin_direct',
    code: '026',
    name: { uz: 'Toʻgʻri bilirubin (DBIL)', ru: 'Билирубин Прямой (DBIL)' },
    category: 'biochemistry',
    price: 45000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Konʼyugasiyalangan (jigarda bogʻlangan) bilirubin ulushi.', ru: 'Связанная фракция билирубина, маркер холестаза.' }
  },
  {
    id: 'test_bilirubin_indirect',
    code: '027',
    name: { uz: 'Bilvosita bilirubin (Bilirubin I)', ru: 'Билирубин Непрямой (Bilirubin I)' },
    category: 'biochemistry',
    price: 90000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Bogʻlanmagan bilirubin, gemolitik anemiya koʻrsatkichi.', ru: 'Свободная фракция билирубина, маркер гемолиза.' }
  },
  {
    id: 'test_calcium',
    code: '028',
    name: { uz: 'Kalsiy (Ca)', ru: 'Кальций (Ca)' },
    category: 'biochemistry',
    price: 50000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Suyak toʻqimasi asosi, nerv-mushak oʻtkazuvchanligi koʻrsatkichi.', ru: 'Важнейший макроэлемент для костей, сердца и мышц.' }
  },
  {
    id: 'test_magnesium',
    code: '029',
    name: { uz: 'Magniy (Mg)', ru: 'Магний (Mg)' },
    category: 'biochemistry',
    price: 50000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Nerv va yurak tizimini normada saqlovchi mineral.', ru: 'Оценка электролитного баланса, регулятор нервной системы.' }
  },
  {
    id: 'test_phosphorus',
    code: '030',
    name: { uz: 'Anorganik fosfor (P)', ru: 'Фосфор Неорганический (P)' },
    category: 'biochemistry',
    price: 50000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Kalsiy balansi va energiya almashinuvi minerali.', ru: 'Регулятор фосфорно-кальциевого обмена и прочности скелета.' }
  },
  {
    id: 'test_iron',
    code: '031',
    name: { uz: 'Temir (Fe)', ru: 'Железо (Fe)' },
    category: 'biochemistry',
    price: 45000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Gemoglobin sintezi va kislorod tashish asosi.', ru: 'Ключевой элемент для синтеза гемоглобина и переноса O2.' }
  },
  {
    id: 'test_uibc',
    code: '032',
    name: { uz: 'Toʻyinmagan temir bogʻlash qobiliyati (UIBC)', ru: 'Ненасыщенная железосвязывающая способность (UIBC)' },
    category: 'biochemistry',
    price: 70000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Temir tanqisligi anemiyasini yashirin davrini aniqlash.', ru: 'Диагностика латентного дефицита железа.' }
  },
  {
    id: 'test_ferritin',
    code: '033',
    name: { uz: 'Ferritin', ru: 'Ферритин (FERRITIN)' },
    category: 'biochemistry',
    price: 105000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Organizmdagi temir zaxiralarini aniqlovchi eng ishonchli marker.', ru: 'Самый точный маркер запасов железа в организме.' }
  },
  {
    id: 'test_sodium',
    code: '034',
    name: { uz: 'Natriy (Na)', ru: 'Натрий (Na)' },
    category: 'biochemistry',
    price: 60000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Hujayra tashqarisidagi suv va osmotik bosim regulyatori.', ru: 'Регулятор водно-солевого баланса и давления в тканях.' }
  },
  {
    id: 'test_potassium',
    code: '035',
    name: { uz: 'Kaliy (K)', ru: 'Калий (K)' },
    category: 'biochemistry',
    price: 60000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Yurak ritmi va mushaklar qisqarishi uchun muhim element.', ru: 'Важнейший внутриклеточный элемент, регулятор ритма сердца.' }
  },
  {
    id: 'test_chlorides',
    code: '036',
    name: { uz: 'Xloridlar (Cl)', ru: 'Хлориды (Cl)' },
    category: 'biochemistry',
    price: 60000,
    fasting: true,
    time: '3 h',
    desc: { uz: 'Kislota-ishqor balansi va gidratatsiyani saqlovchi anion.', ru: 'Основной анион крови, поддерживает кислотно-щелочной баланс.' }
  },

  // =========================================================================
  // --- GORMONLAR VA ONKOMARKERLAR (HORMONAL - JELTAYA ILI KRASNAYA KRYSHKA) ---
  // =========================================================================
  {
    id: 'test_estradiol',
    code: '041',
    name: { uz: 'Estradiol (E2)', ru: 'Эстрадиол (E2)' },
    category: 'hormones',
    price: 85000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Asosiy ayollik jinsiy gormonini tekshirish.', ru: 'Ключевой эстроген, показатель функции яичников.' }
  },
  {
    id: 'test_lh',
    code: '042',
    name: { uz: 'Lyuteinlovchi gormon (LH)', ru: 'Лютеинизирующий гормон (LH)' },
    category: 'hormones',
    price: 85000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Ovulyatsiya va reproduktiv tizim regulyatori.', ru: 'Стимулятор овуляции и синтеза половых гормонов.' }
  },
  {
    id: 'test_fsh',
    code: '043',
    name: { uz: 'Follikulani stimulyatsiya qiluvchi gormon (FSH)', ru: 'Фолликулостимулирующий гормон (FSH)' },
    category: 'hormones',
    price: 85000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Tuxumdonlar va urugʻdonlar rivojlanishi gormoni.', ru: 'Регулятор созревания фолликулов у женщин и сперматогенеза у мужчин.' }
  },
  {
    id: 'test_progesterone',
    code: '044',
    name: { uz: 'Progesteron (PROG)', ru: 'Прогестерон (PROG)' },
    category: 'hormones',
    price: 85000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Homiladorlik gormoni - sariq tana faoliyati markeri.', ru: 'Гормон беременности, отражает функцию желтого тела.' }
  },
  {
    id: 'test_prolactin',
    code: '045',
    name: { uz: 'Prolaktin (PRL)', ru: 'Пролактин (PRL)' },
    category: 'hormones',
    price: 85000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Laktatsiya va gipofiz bezi faoliyati gormoni.', ru: 'Регулятор лактации, маркер функции гипофиза.' }
  },
  {
    id: 'test_17oh_prog',
    code: '046',
    name: { uz: '17-OH progesteron', ru: '17-OH прогестерон (17-OH Progesterone)' },
    category: 'hormones',
    price: 100000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Buyrak usti bezi gormonlari sintezi markeri.', ru: 'Стероидный гормон, маркер дисфункции коры надпочечников.' }
  },
  {
    id: 'test_testosterone_047',
    code: '047',
    name: { uz: 'Testosteron umumiy (Testosterone)', ru: 'Тестостерон общий (Testosterone)' },
    category: 'hormones',
    price: 85000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Asosiy erkaklik jinsiy gormoni darajasi.', ru: 'Главный андроген, показатель репродуктивного здоровья.' }
  },
  {
    id: 'test_hcg',
    code: '048',
    name: { uz: 'Beta-Xorionik gonadotropin (Beta-hCG)', ru: 'Бета-Хорионический гонадотропин (Beta-hCG)' },
    category: 'hormones',
    price: 85000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Homiladorlikni eng erta muddatlarda aniqlash testi.', ru: 'Высокочувствительный маркер беременности и онкопатологии.' }
  },
  {
    id: 'test_dheas',
    code: '049',
    name: { uz: 'Degidroepiandrosteron-sulfat (DHEA-S)', ru: 'Дегидроэпиандростерон-сульфат (DHEA-S)' },
    category: 'hormones',
    price: 130000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Buyrak usti bezi androgen faoliyatini baholash.', ru: 'Маркер секреторной активности надпочечников.' }
  },
  {
    id: 'test_insulin_050',
    code: '050',
    name: { uz: 'Insulin (INS)', ru: 'Инсулин (INS)' },
    category: 'hormones',
    price: 85000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Meʻda osti bezi uglevod gormoni.', ru: 'Гормон поджелудочной железы, регулятор обмена углеводов.' }
  },
  {
    id: 'test_c_peptide',
    code: '051',
    name: { uz: 'S-Peptid (C-Peptide)', ru: 'С-Пептид (C-Peptide)' },
    category: 'hormones',
    price: 182000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Xususiy insulin ishlab chiqarish darajasini aniqlash.', ru: 'Показатель выработки собственного инсулина.' }
  },
  {
    id: 'test_homa',
    code: '052',
    name: { uz: 'HOMA indeks (HOMA Index)', ru: 'HOMA индекс (HOMA Index)' },
    category: 'hormones',
    price: 146000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Insulinga sezuvchanlik va insulin rezistentligi koʻrsatkichi.', ru: 'Расчетный индекс резистентности к инсулину.' }
  },
  {
    id: 'test_vit_d_053',
    code: '053',
    name: { uz: 'Vitamin D (25-gidroksivitamin D2/D3) VIT D', ru: 'Витамин D (25-гидроксивитамин D2/D3) VIT D' },
    category: 'hormones',
    price: 170000,
    fasting: false,
    time: '4-5 h',
    desc: { uz: 'Immunitet va suyak tizimi uchun asosiy vitamin.', ru: 'Исследование общего уровня витамина D для скелета и иммунитета.' }
  },
  {
    id: 'test_vit_b12_054',
    code: '054',
    name: { uz: 'Vitamin B12 (Kobalamin) VIT B12', ru: 'Витамин B12 (Кобаламин) VIT B12' },
    category: 'hormones',
    price: 130000,
    fasting: false,
    time: '4-5 h',
    desc: { uz: 'Eritrotsitlar va nerv tizimi salomatligi vitamini.', ru: 'Необходим для кроветворения и работы нервной системы.' }
  },
  {
    id: 'test_folic_acid',
    code: '055',
    name: { uz: 'Foliya kislotasi (F.A)', ru: 'Фолиевая кислота (F.A)' },
    category: 'hormones',
    price: 85000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Hujayralar boʻlinishi va homila rivojlanishi vitamini (B9).', ru: 'Важнейший витамин B9 для беременных и кроветворения.' }
  },
  {
    id: 'test_afp',
    code: '056',
    name: { uz: 'Alfa-Fetoprotien (AFP)', ru: 'Альфа-Фетопротеин (AFP)' },
    category: 'hormones',
    price: 100000,
    fasting: true,
    time: '4-5 h',
    desc: { uz: 'Jigar onkomarkeri va homila nuqsonlari skriningi.', ru: 'Онкомаркер печени и показатель пренатального скрининга.' }
  },
  {
    id: 'test_psa_total',
    code: '057',
    name: { uz: 'Prostat spesifik antigen umumiy (TPSA)', ru: 'Простат-специфический антиген Общий (TPSA)' },
    category: 'hormones',
    price: 85000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Erkaklarda prostata bezi onkologiya skriningi.', ru: 'Главный онкомаркер рака предстательной железы.' }
  },
  {
    id: 'test_psa_free',
    code: '058',
    name: { uz: 'Prostat spesifik antigen erkin (FPSA)', ru: 'Простат-специфический антиген Свободный (FPSA)' },
    category: 'hormones',
    price: 85000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Prostata bezi kasalliklarini differensial diagnostikasi.', ru: 'Используется вместе с общим ПСА для уточнения диагноза.' }
  },
  {
    id: 'test_cea',
    code: '059',
    name: { uz: 'Rako-embrional antigen (CEA)', ru: 'Раково-эмбриональный антиген (CEA)' },
    category: 'hormones',
    price: 120000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Keng qamrovli onkologik tekshirish markeri.', ru: 'Универсальный онкомаркер опухолей внутренних органов.' }
  },
  {
    id: 'test_ca_72_4',
    code: '060',
    name: { uz: 'Onkomarker Oshqozon-Ichak (CA 72-4)', ru: 'Онкомаркер ЖКТ (CA 72-4)' },
    category: 'hormones',
    price: 465000,
    fasting: true,
    time: '5 h',
    desc: { uz: 'Oshqozon va tuxumdonlar onkologik kasalliklari markeri.', ru: 'Маркер опухолей желудка и яичников.' }
  },
  {
    id: 'test_ca_19_9',
    code: '061',
    name: { uz: 'Onkomarker meʻda osti bezi (CA 19-9)', ru: 'Онкомаркер поджелудочной железы (CA 19-9)' },
    category: 'hormones',
    price: 125000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Meʻda osti bezi onkologiya markeri.', ru: 'Маркер опухолей поджелудочной железы и желчных путей.' }
  },
  {
    id: 'test_ca_15_3',
    code: '062',
    name: { uz: 'Onkomarker sut bezi (CA 15-3)', ru: 'Онкомаркер молочной железы (CA 15-3)' },
    category: 'hormones',
    price: 120000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Sut bezlari onkologiyasini kuzatish.', ru: 'Маркер рака молочной железы и мониторинга его лечения.' }
  },
  {
    id: 'test_ca_125_063',
    code: '063',
    name: { uz: 'Onkomarker tuxumdon (CA 125)', ru: 'Onkomarker yaichnikov (CA 125)' },
    category: 'hormones',
    price: 120000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Tuxumdonlar saratoni monitoringi markeri.', ru: 'Маркер новообразований яичников.' }
  },
  {
    id: 'test_he4',
    code: '064',
    name: { uz: 'Epitelial tuxumdon saratoni markeri (HE4)', ru: 'Эпителиальный рак яичников (HE4)' },
    category: 'hormones',
    price: 180000,
    fasting: true,
    time: '5 h',
    desc: { uz: 'Tuxumdonlar saratonini erta aniqlashning yuqori sezgir markeri.', ru: 'Современный высокочувствительный маркер опухолей малого таза.' }
  },
  {
    id: 'test_roma_index',
    code: '065',
    name: { uz: 'ROMA indeksi (ROMA Index)', ru: 'ROMA индекс (ROMA Index)' },
    category: 'hormones',
    price: 305000,
    fasting: true,
    time: '5 h',
    desc: { uz: 'Tuxumdon onkologiyasi xavfini hisoblash algoritmi.', ru: 'Расчет вероятности наличия злокачественного процесса в придатках.' }
  },
  {
    id: 'test_ft3',
    code: '066',
    name: { uz: 'Erkin triyodtironin (FT3)', ru: 'Трийодтиронин, Свободный (FT3)' },
    category: 'hormones',
    price: 85000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Qalqonsimon bez gormonlarining faol shakli.', ru: 'Активная фракция гормона щитовидной железы.' }
  },
  {
    id: 'test_ft4',
    code: '067',
    name: { uz: 'Erkin tiroksin (FT4)', ru: 'Тироксин, Свободный (FT4)' },
    category: 'hormones',
    price: 85000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Qalqonsimon bez faoliyatining asosiy gormoni.', ru: 'Основной гормон щитовидной железы, свободная фракция.' }
  },
  {
    id: 'test_tsh_068',
    code: '068',
    name: { uz: 'Tireotrop gormon (TSH)', ru: 'Тиреотропный гормон ТТГ (TSH)' },
    category: 'hormones',
    price: 95000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Gipofiz bezi qalqonsimon bez regulyatori.', ru: 'Основной гормон гипофиза, управляющий щитовидной железой.' }
  },
  {
    id: 'test_atpo',
    code: '069',
    name: { uz: 'Antitela tireoperoksidazaga (ATPO)', ru: 'Антитела к тиреопероксидазе (АТПО)' },
    category: 'hormones',
    price: 120000,
    fasting: true,
    time: '4-5 h',
    desc: { uz: 'Autoimmun qalqonsimon bez kasalliklarini aniqlash.', ru: 'Аутоиммунные маркеры поражения щитовидной железы.' }
  },
  {
    id: 'test_pth',
    code: '070',
    name: { uz: 'Paratgormon intakt (PTH)', ru: 'Паратгормон Интактный (PTH)' },
    category: 'hormones',
    price: 285000,
    fasting: true,
    time: '4-5 h',
    desc: { uz: 'Kalsiy va fosfor almashinuvi regulyatori.', ru: 'Гормон околощитовидных желез, регулятор кальция.' }
  },
  {
    id: 'test_pct',
    code: '071',
    name: { uz: 'Prokalsitonin (PCT)', ru: 'Прокальцитонин (PCT)' },
    category: 'hormones',
    price: 210000,
    fasting: true,
    time: '4-5 h',
    desc: { uz: 'Sepsis va ogʻir bakterial yalligʻlanishlar markeri.', ru: 'Важнейший маркер системного сепсиса и бактериальной инфекции.' }
  },
  {
    id: 'test_ige',
    code: '072',
    name: { uz: 'Immunoglobulin E (IgE)', ru: 'Иммуноглобулин E (IgE)' },
    category: 'hormones',
    price: 85000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Allergik reaksiyalar va gelmintoz koʻrsatkichi.', ru: 'Суммарные антитела класса E, маркер аллергии и гельминтозов.' }
  },
  {
    id: 'test_cortisol',
    code: '073',
    name: { uz: 'Kortizol (Cortisol)', ru: 'Кортизол (Cortisol)' },
    category: 'hormones',
    price: 95000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Stress gormoni - buyrak usti bezi faoliyati markeri.', ru: 'Гормон стресса коры надпочечников.' }
  },
  {
    id: 'test_ck_mb_074',
    code: '074',
    name: { uz: 'Kreatinkinaza-MB (CK-MB)', ru: 'Креатинкиназа-МВ (CK-MB)' },
    category: 'hormones',
    price: 80000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Yurak mushaklari oʻtkir shikastlanishi tahlili.', ru: 'Высокоспецифичный маркер поражения миокарда.' }
  },
  {
    id: 'test_tni',
    code: '075',
    name: { uz: 'Troponin I (TnI)', ru: 'Тропонин I (TnI)' },
    category: 'hormones',
    price: 130000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Infarkt miokardning eng oʻziga xos oʻtkir markeri.', ru: 'Золотой стандарт диагностики инфаркта миокарда.' }
  },
  {
    id: 'test_probnp',
    code: '076',
    name: { uz: 'Natriy uretik peptid (Pro BNP)', ru: 'Натрий уретический пептид (Pro BNP)' },
    category: 'hormones',
    price: 280000,
    fasting: false,
    time: '5 h',
    desc: { uz: 'Yurak yetishmovchiligini erta aniqlash testi.', ru: 'Маркер застойной сердечной недостаточности.' }
  },

  // =========================================================================
  // --- KOAGULOGRAMMA (HEMOSTASIS - SINYAYA KRYSHKA) ---
  // =========================================================================
  {
    id: 'test_pt_077',
    code: '077',
    name: { uz: 'Protrombin vaqti (PT) - Koagulogramma', ru: 'Протромбиновое Время (PT)' },
    category: 'coagulogram',
    price: 55000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Qon ivish tizimining tashqi yoʻlini baholash.', ru: 'Оценка внешнего пути свертывания крови.' }
  },
  {
    id: 'test_aptt',
    code: '078',
    name: { uz: 'Aktivlangan qisman tromboplastin vaqti (aPTT)', ru: 'Активированное Частичное Тромбопластиновое Время (аПТВ/aPTT)' },
    category: 'coagulogram',
    price: 50000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Qon ivishining ichki yoʻli faolligini oʻlchash.', ru: 'Оценка внутреннего пути свертываемости крови.' }
  },
  {
    id: 'test_fibrinogen_079',
    code: '079',
    name: { uz: 'Fibrinogen (FIB)', ru: 'Фибриноген (FIB)' },
    category: 'coagulogram',
    price: 50000,
    fasting: true,
    time: '4 h',
    desc: { uz: 'Qon ivishining asosiy oqsillaridan biri.', ru: 'Ключевой белок системы свертывания крови.' }
  },
  {
    id: 'test_ddimer_080',
    code: '080',
    name: { uz: 'D-Dimor miqdoriy (D-DIMER)', ru: 'Д-Димер Количественный (D-DIMER)' },
    category: 'coagulogram',
    price: 160000,
    fasting: false,
    time: '4-5 h',
    desc: { uz: 'Tromblar hosil boʻlishini istisno qilish uchun tahlil.', ru: 'Маркер процессов тромбообразования и фибринолиза.' }
  },

  // =========================================================================
  // --- INFEKSION TADQIQOTLAR (INFECTIONS - JELTAYA ILI KRASNAYA KRYSHKA) ---
  // =========================================================================
  {
    id: 'test_hbsag',
    code: '081',
    name: { uz: 'Gepatit B antigen (HBsAg)', ru: 'Гепатит В антиген (HBsAg)' },
    category: 'infections',
    price: 80000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Gepatit B virusining borligini aniqlash.', ru: 'Определение наличия антигена вируса гепатита B.' }
  },
  {
    id: 'test_hcv',
    code: '082',
    name: { uz: 'Gepatit C jami antitelalar (Anti HCV)', ru: 'Гепатит С суммарные антитела (Anti HCV)' },
    category: 'infections',
    price: 80000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Gepatit C virusiga qarshi antitelalarni aniqlash.', ru: 'Определение суммарных антител к вирусу гепатита C.' }
  },
  {
    id: 'test_anti_hbs',
    code: '083',
    name: { uz: 'Gepatit B jami antitelalari (Anti HBs)', ru: 'Гепатит В суммарные антитела (Anti HBs)' },
    category: 'infections',
    price: 95000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Gepatit B ga qarshi immunitet mavjudligini tekshirish.', ru: 'Оценка иммунитета к гепатиту B (после вакцинации или болезни).' }
  },
  {
    id: 'test_anti_hav_igm',
    code: '084',
    name: { uz: 'Gepatit A antitelalari IgM (Anti HAV IgM)', ru: 'Гепатит А антитела IgM (Anti HAV IgM)' },
    category: 'infections',
    price: 80000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Oʻtkir gepatit A (Sariqlik) virusini aniqlash.', ru: 'Маркер острой стадии вирусного гепатита А.' }
  },
  {
    id: 'test_anti_hav',
    code: '085',
    name: { uz: 'Gepatit A jami antitelalari (Anti HAV)', ru: 'Гепатит А антитела (Anti HAV)' },
    category: 'infections',
    price: 80000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Gepatit A ga qarshi umumiy antitelalarni aniqlash.', ru: 'Определение постинфекционного иммунитета к гепатиту А.' }
  },
  {
    id: 'test_anti_hdv',
    code: '086',
    name: { uz: 'Gepatit D jami antitelalari (Anti HDV)', ru: 'Гепатит d (Anti HDV) суммарные антитела' },
    category: 'infections',
    price: 80000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Delta gepatit virusi antitelalarini aniqlash.', ru: 'Выявление суперинфекции гепатита D у носителей гепатита B.' }
  },
  {
    id: 'test_toxo_igm',
    code: '087',
    name: { uz: 'Toksoplazmoz antitelalari IgM', ru: 'Токсоплазмоз антитела IgM (Toxoplasma gondii IgM)' },
    category: 'infections',
    price: 80000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Toksoplazma infeksiyasining oʻtkir bosqichini aniqlash.', ru: 'Маркер первичного инфицирования токсоплазмой.' }
  },
  {
    id: 'test_toxo_igg',
    code: '088',
    name: { uz: 'Toksoplazmoz antitelalari IgG', ru: 'Токсоплазмоз антитела IgG (Toxoplasma gondii IgG)' },
    category: 'infections',
    price: 80000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Toksoplazmozga qarshi surunkali immunitetni tekshirish.', ru: 'Выявление долгосрочного иммунитета к токсоплазме.' }
  },
  {
    id: 'test_rubella_igm',
    code: '089',
    name: { uz: 'Qizilcha antitelalari IgM (Rubella IgM)', ru: 'Краснуха антитела IgM (Rubella IgM)' },
    category: 'infections',
    price: 80000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Qizilcha (Rubella) infeksiyasining oʻtkir davrini baholash.', ru: 'Диагностика острого периода краснухи.' }
  },
  {
    id: 'test_rubella_igg',
    code: '090',
    name: { uz: 'Qizilcha antitelalari IgG (Rubella IgG)', ru: 'Краснуха антитела IgG (Rubella IgG)' },
    category: 'infections',
    price: 80000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Qizilcha virusiga qarshi doimiy immunitet mavjudligi.', ru: 'Оценка наличия защитных антител после краснухи или вакцинации.' }
  },
  {
    id: 'test_cmv_igm',
    code: '091',
    name: { uz: 'Sitomegalovirus antitelalari IgM', ru: 'Цитомегаловирус антитела IgM (Cytomegalovirus IgM)' },
    category: 'infections',
    price: 80000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Sitomegalovirus faol bosqichini aniqlash.', ru: 'Выявление активной фазы цитомегаловирусной инфекции.' }
  },
  {
    id: 'test_cmv_igg',
    code: '092',
    name: { uz: 'Sitomegalovirus antitelalari IgG', ru: 'Цитомегаловирус антитела IgG (Cytomegalovirus IgG)' },
    category: 'infections',
    price: 80000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Sitomegalovirus tashuvchanligi va immuniteti.', ru: 'Определение хронического носительства цитомегаловируса.' }
  },
  {
    id: 'test_hsv_igm',
    code: '093',
    name: { uz: 'Oddiy gerpes virusi 1,2 antitelalari IgM', ru: 'Вирусу простого герпеса антитела 1,2 IgM (Anti-HSV-1/2 IgM)' },
    category: 'infections',
    price: 85000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Gerpes oʻtkir infeksiyasini aniqlash.', ru: 'Маркер первичного инфицирования вирусом простого герпеса.' }
  },
  {
    id: 'test_hsv_igg',
    code: '094',
    name: { uz: 'Oddiy gerpes virusi 1,2 antitelalari IgG', ru: 'Вирусу простого герпеса антитела 1,2 IgG (Anti-HSV-1/2 IgG)' },
    category: 'infections',
    price: 85000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Gerpes surunkali turi va tashuvchanligini tekshirish.', ru: 'Показывает наличие хронического герпеса в организме.' }
  },
  {
    id: 'test_h_pylori_igg',
    code: '095',
    name: { uz: 'Xelikobakter pilori antitelalari IgG', ru: 'Хеликобактер пилори Антитела IgG (Helicobacter Pylori IgG)' },
    category: 'infections',
    price: 85000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Oshqozon yarasi va gastrit qoʻzgʻatuvchisiga qarshi antitelalar.', ru: 'Выявление бактерии, ассоциированной с гастритом и язвой желудка.' }
  },
  {
    id: 'test_ureaplasma_igm',
    code: '096',
    name: { uz: 'Ureaplazma antitelalari IgM', ru: 'Уреаплазма Антитела IgM (Ureaplasma IgM)' },
    category: 'infections',
    price: 85000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Ureaplazmoz oʻtkir urogenital infeksiyasini aniqlash.', ru: 'Маркер острой фазы уреаплазменной инфекции.' }
  },
  {
    id: 'test_ureaplasma_igg',
    code: '097',
    name: { uz: 'Ureaplazma antitelalari IgG', ru: 'Уреаплазма Антитела IgG (Ureaplasma IgG)' },
    category: 'infections',
    price: 85000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Ureaplazma surunkali yoki oʻtkazilgan infeksiya markeri.', ru: 'Маркер перенесенной или хронической уреаплазменной инфекции.' }
  },
  {
    id: 'test_mycoplasma_igm',
    code: '098',
    name: { uz: 'Mikoplazma antitelalari IgM', ru: 'Микоплазма Антитела IgM (Mycoplasma IgM)' },
    category: 'infections',
    price: 85000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Mikoplazmoz oʻtkir yalligʻlanishini tekshirish.', ru: 'Выявление острой стадии микоплазменной инфекции.' }
  },
  {
    id: 'test_mycoplasma_igg',
    code: '099',
    name: { uz: 'Mikoplazma antitelalari IgG', ru: 'Микоплазма Антитела IgG (Mycoplasma IgG)' },
    category: 'infections',
    price: 85000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Mikoplazmoz tashuvchanligini aniqlash.', ru: 'Маркер перенесенной или хронической микоплазменной инфекции.' }
  },
  {
    id: 'test_chlamydia_igm',
    code: '100',
    name: { uz: 'Xlamidiya antitelalari IgM', ru: 'Хламидия Антитела IgM (Chlamydia IgM)' },
    category: 'infections',
    price: 85000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Xlamidioz oʻtkir urogenital infeksiyasini aniqlash.', ru: 'Маркер свежей хламидийной инфекции.' }
  },
  {
    id: 'test_chlamydia_igg',
    code: '101',
    name: { uz: 'Xlamidiya antitelalari IgG', ru: 'Хламидия Антитела IgG (Chlamydia IgG)' },
    category: 'infections',
    price: 85000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Xlamidioz surunkali turi va unga qarshi antitelalar.', ru: 'Выявление хронического процесса или иммунной памяти.' }
  },
  {
    id: 'test_brucella_igm',
    code: '102',
    name: { uz: 'Brutsella antitelalari IgM', ru: 'Бруцелла Антитела IgM (Brucella IgM)' },
    category: 'infections',
    price: 85000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Brutselloz oʻtkir infeksiyasini erta aniqlash.', ru: 'Оценка острой стадии бруцеллеза.' }
  },
  {
    id: 'test_brucella_igg',
    code: '103',
    name: { uz: 'Brutsella antitelalari IgG', ru: 'Бруцелла Антитела IgG (Brucella IgG)' },
    category: 'infections',
    price: 85000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Brutselloz surunkali turi va immunitetni tekshirish.', ru: 'Оценка хронической или перенесенной формы бруцеллеза.' }
  },
  {
    id: 'test_candida_igm',
    code: '104',
    name: { uz: 'Kandida antitelalari IgM', ru: 'Кандида Антитела IgM (Candida IgM)' },
    category: 'infections',
    price: 65000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Kandidoz (molochnitsa) oʻtkir davri skriningi.', ru: 'Диагностика острой грибковой инфекции Candida.' }
  },
  {
    id: 'test_giardia_lamblia',
    code: '105',
    name: { uz: 'Lyambliya jami antitelalari', ru: 'Лямблия Суммарные антитела (Giardia Lamblia)' },
    category: 'infections',
    price: 65000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Lyamblioz parazitar parazitlariga qarshi antitelalarni aniqlash.', ru: 'Иммунодиагностика лямблиоза по анализу крови.' }
  },
  {
    id: 'test_syphilis_ifa',
    code: '106',
    name: { uz: 'Treponema pallidum antitelalari (Sifilis-IFA)', ru: 'Трепонема паллидум антитела (Сифилис-ИФА)' },
    category: 'infections',
    price: 70000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Sifilis infeksiyasiga qarshi yuqori sezgir tahlil.', ru: 'Иммуноферментный анализ для точной диагностики сифилиса.' }
  },
  {
    id: 'test_syphilis_express',
    code: '107',
    name: { uz: 'Sifilis Tezkor (Express) test', ru: 'Трепонема паллидум антитела, (Сифилис Экспресс тест)' },
    category: 'infections',
    price: 90000,
    fasting: false,
    time: '2 h',
    desc: { uz: 'Sifilis kasalligini tezkor skrining usuli.', ru: 'Быстрый экспресс-метод определения сифилиса.' }
  },
  {
    id: 'test_cov19_ab',
    code: '108',
    name: { uz: 'Sars-Kov 2 Antitelalar IgM/IgG(Cov 19)', ru: 'Сарс-Ков 2 Антитела IgM/IgG(Cov 19)' },
    category: 'infections',
    price: 460000,
    fasting: false,
    time: '1 day',
    desc: { uz: 'Koronavirusga qarshi antitelalarni miqdoriy aniqlash.', ru: 'Выявление антител класса IgM и IgG к вирусу SARS-CoV-2.' }
  },
  {
    id: 'test_il2',
    code: '109',
    name: { uz: 'Interleykin 2 (IL 2)', ru: 'Интерлейкин 2 (IL 2)' },
    category: 'infections',
    price: 290000,
    fasting: false,
    time: '1 day',
    desc: { uz: 'Hujayrali immunitet va oʻsmalar yalligʻlanish sitsokinlari.', ru: 'Оценка клеточного иммунитета и иммунодефицитных состояний.' }
  },
  {
    id: 'test_il6',
    code: '110',
    name: { uz: 'Interleykin 6 (IL 6)', ru: 'Интерлейкин 6 (IL 6)' },
    category: 'infections',
    price: 305000,
    fasting: false,
    time: '1 day',
    desc: { uz: 'Yalligʻlanish jarayoni va sitokin boʻroni diagnostikasi.', ru: 'Маркер острой фазы воспалительного процесса и цитокинового шторма.' }
  },

  // =========================================================================
  // --- QON GURUHI (BLOOD GROUP - FIOLETOVAYA KRYSHKA) ---
  // =========================================================================
  {
    id: 'test_blood_group_111',
    code: '111',
    name: { uz: 'Qon guruhi va Rezus-faktor (ABO/Rh D), oddiy usul', ru: 'Группа Крови (ABO/Rh D), Простой метод (ABO/RhD)' },
    category: 'blood_groups',
    price: 80000,
    fasting: false,
    time: '2 h',
    desc: { uz: 'Standart qon guruhi va rezus-mansublikni aniqlash tahlili.', ru: 'Определение групповой и резус принадлежности крови.' }
  },
  {
    id: 'test_direct_coombs_112',
    code: '112',
    name: { uz: 'Kumbs toʻgʻri probasi (Direct Coombs test)', ru: 'Прямая проба Кумбса (Direct Coombs test)' },
    category: 'blood_groups',
    price: 80000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Autoimmun gemolitik anemiya va yangi tugʻilgan chaqaloqlar gemolizini aniqlash.', ru: 'Диагностика аутоиммунной гемолитической анемии и резус-конфликта.' }
  },
  {
    id: 'test_indirect_coombs_113',
    code: '113',
    name: { uz: 'Kumbs bilvosita probasi (Indirect Coombs test)', ru: 'Непрямая проба Кумбса (Indirect Coombs test)' },
    category: 'blood_groups',
    price: 80000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Qon quyish oldidan yoki homiladorlikda antitelalarni aniqlash.', ru: 'Выявление неполных антиэритроцитарных антител перед гемотрансфузией.' }
  },
  // =========================================================================
  // --- ADDED NEW PCR TESTS (pcr category) ---
  // =========================================================================
  {
    id: 'test_pcr_sars_cov2',
    code: '114',
    name: { uz: 'Sars-kov-2 PSR Mazok (SARS-CoV-2 PCR)', ru: 'Сарс-ков-2 ПЦР Мазок (SARS-CoV-2 PCR)', tr: 'SARS-CoV-2 PCR Sürüntü' },
    category: 'pcr',
    price: 230000,
    fasting: false,
    time: '4-6 h',
    desc: { uz: 'Koronavirus DNK/RNK sini aniqlash.', ru: 'Определение РНК коронавируса методом ПЦР.', tr: 'PCR yöntemiyle koronavirüs RNA tespiti.' }
  },
  {
    id: 'test_pcr_hbv_qual',
    code: '115',
    name: { uz: 'Gepatit B PSR sifat tahlili (HBV PCR Quality)', ru: 'Гепатит B ПЦР качественный (HBV PCR Quality)', tr: 'Hepatit B PCR Kalitatif' },
    category: 'pcr',
    price: 390000,
    fasting: false,
    time: '1 day',
    desc: { uz: 'Gepatit B virusi DNK sini sifat koʻrsatkichi.', ru: 'Качественное определение ДНК вируса гепатита B.', tr: 'Hepatit B virüsü DNA kalitatif tespiti.' }
  },
  {
    id: 'test_pcr_hbv_quant',
    code: '116',
    name: { uz: 'Gepatit B PSR miqdoriy tahlili (HBV PCR Quantitative)', ru: 'Гепатит B ПЦР количественный (HBV PCR Quantitative)', tr: 'Hepatit B PCR Kantitatif' },
    category: 'pcr',
    price: 490000,
    fasting: false,
    time: '1 day',
    desc: { uz: 'Gepatit B virusi viral yuklamasini aniqlash.', ru: 'Количественное определение ДНК вируса гепатита B.', tr: 'Hepatit B virüsü viral yük miktar tayini.' }
  },
  {
    id: 'test_pcr_hcv_qual',
    code: '117',
    name: { uz: 'Gepatit C PSR sifat tahlili (HCV PCR Quality)', ru: 'Гепатит C ПЦР качественный (HCV PCR Quality)', tr: 'Hepatit C PCR Kalitatif' },
    category: 'pcr',
    price: 390000,
    fasting: false,
    time: '1 day',
    desc: { uz: 'Gepatit C virusi RNK sini sifat koʻrsatkichi.', ru: 'Качественное определение РНК вируса гепатита C.', tr: 'Hepatit C virüsü RNA kalitatif tespiti.' }
  },
  {
    id: 'test_pcr_hcv_quant',
    code: '118',
    name: { uz: 'Gepatit C PSR miqdoriy tahlili (HCV PCR Quantitative)', ru: 'Гепатит C ПЦР количественный (HCV PCR Quantitative)', tr: 'Hepatit C PCR Kantitatif' },
    category: 'pcr',
    price: 490000,
    fasting: false,
    time: '1 day',
    desc: { uz: 'Gepatit C virusi viral yuklamasini aniqlash.', ru: 'Количественное определение РНК вируса гепатита C.', tr: 'Hepatit C virüsü viral yük miktar tayini.' }
  },
  {
    id: 'test_pcr_hcv_genotype',
    code: '119',
    name: { uz: 'Gepatit C PSR genotip tahlili (HCV PCR Genotype)', ru: 'Гепатит C ПЦР генотип (HCV PCR Genotype)', tr: 'Hepatit C PCR Genotip' },
    category: 'pcr',
    price: 450000,
    fasting: false,
    time: '2 days',
    desc: { uz: 'Gepatit C virusi genotipini aniqlash.', ru: 'Определение генотипа вируса гепатита C.', tr: 'Hepatit C virüsü genotip tespiti.' }
  },
  {
    id: 'test_pcr_hdv_qual',
    code: '120',
    name: { uz: 'Gepatit D PSR sifat tahlili (HDV PCR Quality)', ru: 'Гепатит D ПЦР качественный (HDV PCR Quality)', tr: 'Hepatit D PCR Kalitatif' },
    category: 'pcr',
    price: 390000,
    fasting: false,
    time: '1 day',
    desc: { uz: 'Gepatit D virusi RNK sini sifat koʻrsatkichi.', ru: 'Качественное определение РНК вируса гепатита D.', tr: 'Hepatit D virüsü RNA kalitatif tespiti.' }
  },
  {
    id: 'test_pcr_hdv_quant',
    code: '121',
    name: { uz: 'Gepatit D PSR miqdoriy tahlili (HDV PCR Quantitative)', ru: 'Гепатит D ПЦР количественный (HDV PCR Quantitative)', tr: 'Hepatit D PCR Kantitatif' },
    category: 'pcr',
    price: 490000,
    fasting: false,
    time: '1 day',
    desc: { uz: 'Gepatit D virusi viral yuklamasini aniqlash.', ru: 'Количественное определение РНК вируса гепатита D.', tr: 'Hepatit D virüsü viral yük miktar tayini.' }
  },
  // =========================================================================
  // --- ADDED NEW URINE BIOCHEMISTRY TESTS (urine category) ---
  // =========================================================================
  {
    id: 'test_urine_analysis',
    code: '122',
    name: { uz: 'Siydik umumiy tahlili (General Urine Analysis)', ru: 'Общий анализ мочи (General Urine Analysis)', tr: 'Tam İdrar Tahlili' },
    category: 'urine',
    price: 45000,
    fasting: false,
    time: '2 h',
    desc: { uz: 'Siydikning fizik-kimyoviy va mikroskopik xususiyatlarini oʻrganish.', ru: 'Физико-химическое и микроскопическое исследование мочи.', tr: 'İdrarın fizikokimyasal ve mikroskobik incelemesi.' }
  },
  {
    id: 'test_urine_glucose_24',
    code: '123',
    name: { uz: 'Glyukoza (Siydik - 24 soat) (Glucose - Urine)', ru: 'Глюкоза (Моча - 24 часа) (Glucose - Urine)', tr: 'İdrarda Glukoz (24 Saatlik)' },
    category: 'urine',
    price: 40000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Kundalik siydikda glyukoza miqdorini aniqlash.', ru: 'Определение суточного выделения глюкозы с мойой.', tr: 'Günlük idrarda glukoz miktarının belirlenmesi.' }
  },
  {
    id: 'test_urine_urea_24',
    code: '124',
    name: { uz: 'Mochevina (Siydik - 24 soat) (UREA - Urine)', ru: 'Мочевина (Моча - 24 часа) (UREA - Urine)', tr: 'İdrarda Üre (24 Saatlik)' },
    category: 'urine',
    price: 40000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Kundalik siydikda mochevina miqdorini aniqlash.', ru: 'Определение мочевины в суточной моче.', tr: 'Günlük idrarda üre miktarının belirlenmesi.' }
  },
  {
    id: 'test_urine_creatinine_24',
    code: '125',
    name: { uz: 'Kreatinin (Siydik - 24 soat) (Creatinine - Urine)', ru: 'Креатинин (Моча - 24 часа) (Creatinine - Urine)', tr: 'İdrarda Kreatinin (24 Saatlik)' },
    category: 'urine',
    price: 40000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Kundalik siydikda kreatinin miqdorini aniqlash.', ru: 'Определение выделения креатинина с суточной мочой.', tr: 'Günlük idrarda kreatinin miktarının belirlenmesi.' }
  },
  {
    id: 'test_urine_uric_24',
    code: '126',
    name: { uz: 'Siydik kislotasi (Siydik - 24 soat) (Uric Acid - Urine)', ru: 'Мочевая кислота (Моча - 24 часа) (Uric Acid - Urine)', tr: 'İdrarda Ürik Asit (24 Saatlik)' },
    category: 'urine',
    price: 40000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Kundalik siydikda siydik kislotasini aniqlash.', ru: 'Определение выделения мочевой кислоты с суточной мочой.', tr: 'Günlük idrarda ürik asit miktarının belirlenmesi.' }
  },
  {
    id: 'test_urine_protein_24',
    code: '127',
    name: { uz: 'Umumiy oqsil (24 soat) (UPROT)', ru: 'Общий белок (24 часа) (UPROT)', tr: 'İdrarda Toplam Protein (24 Saatlik)' },
    category: 'urine',
    price: 65000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Siydikda oqsil miqdorini (proteinuriya) aniqlash.', ru: 'Определение уровня белка в суточной моче.', tr: 'Günlük idrarda protein miktarının (proteinüri) belirlenmesi.' }
  },
  {
    id: 'test_urine_microalbumin_24',
    code: '128',
    name: { uz: 'Mikroalbumin (24 soat) (Microalbumin)', ru: 'Микроальбумин (24 часа) (Microalbumin)', tr: 'Mikroalbümin (24 Saatlik)' },
    category: 'urine',
    price: 80000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Buyrak shikastlanishini erta aniqlash testi.', ru: 'Ранний маркер поражения почек (диабетической нефропатии).', tr: 'Böbrek hasarının erken teşhisi için mikroalbümin tespiti.' }
  },
  {
    id: 'test_urine_amylase_spot',
    code: '129',
    name: { uz: 'Amilaza (Siydik) (a-Amylase Spot urine)', ru: 'Амилаза (Моча) (a-Amylase Spot urine)', tr: 'İdrar Amilazı (Spot İdrar)' },
    category: 'urine',
    price: 45000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Oshqozon osti bezi faoliyatini tekshirish.', ru: 'Исследование активности амилазы в моче.', tr: 'Pankreas fonksiyonlarının idrar amilazı ile tespiti.' }
  },
  {
    id: 'test_urine_calcium_24',
    code: '130',
    name: { uz: 'Kalsiy (Siydik - 24 soat) (Ca - Urine)', ru: 'Кальций (Моча - 24 часа) (Ca - Urine)', tr: 'İdrarda Kalsiy (24 Saatlik)' },
    category: 'urine',
    price: 45000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Kalsiy almashinuvini siydik orqali tekshirish.', ru: 'Определение уровня кальция в суточной моче.', tr: 'Günlük idrarda kalsiy miktarının belirlenmesi.' }
  },
  {
    id: 'test_urine_potassium_24',
    code: '131',
    name: { uz: 'Kaliy (24 soat) (K - Urine)', ru: 'Калий (24 часа) (K - Urine)', tr: 'İdrarda Potasyum (24 Saatlik)' },
    category: 'urine',
    price: 45000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Elektrolitlar balansini tekshirish.', ru: 'Определение суточного выделения калия с мочой.', tr: 'Elektrolit dengesinin idrarda potasyum ile tespiti.' }
  },
  {
    id: 'test_urine_magnesium_24',
    code: '132',
    name: { uz: 'Magniy (24 soat) (Mg - Urine)', ru: 'Magniy (24 часа) (Mg - Urine)', tr: 'İdrarda Magnezyum (24 Saatlik)' },
    category: 'urine',
    price: 45000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Mineral almashinuvini tekshirish.', ru: 'Определение уровня магния в суточной моче.', tr: 'Mineral dengesinin idrarda magnezyum ile tespiti.' }
  },
  {
    id: 'test_urine_phosphorus_24',
    code: '133',
    name: { uz: 'Fosfor neorganik (24 soat)', ru: 'Фосфор Неорганический (24 часа)', tr: 'İdrarda İnorganik Fosfor (24 Saatlik)' },
    category: 'urine',
    price: 45000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Fosfor-kalsiy almashinuvini tekshirish.', ru: 'Определение неорганического фосфора в суточной моче.', tr: 'İdrarda fosfor-kalsiy dengesinin tespiti.' }
  },
  {
    id: 'test_urine_sodium_24',
    code: '134',
    name: { uz: 'Natriy (24 soat) (Na - Urine)', ru: 'Натрий (24 часа) (Na - Urine)', tr: 'İdrarda Sodyum (24 Saatlik)' },
    category: 'urine',
    price: 45000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Elektrolit balansini siydikda tekshirish.', ru: 'Определение уровня натрия в суточной моче.', tr: 'Elektrolit dengesinin idrarda sodyum ile tespiti.' }
  },
  {
    id: 'test_urine_chlorides_24',
    code: '135',
    name: { uz: 'Xloridlar (24 soat) (Cl - urine)', ru: 'Хлориды (24 часа) (Cl - urine)', tr: 'İdrarda Klorür (24 Saatlik)' },
    category: 'urine',
    price: 45000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Siydikdagi klorid ionlari darajasini aniqlash.', ru: 'Определение хлоридов в суточной моче.', tr: 'İdrardaki klorür iyonu konsantrasyonu tespiti.' }
  },
  // =========================================================================
  // --- ADDED NEW ALLERGY PANELS (allergy category) ---
  // =========================================================================
  {
    id: 'test_allergy_atopic_30',
    code: '150-1',
    name: { uz: 'Allergiya paneli Atopik 30-I (Atopic)', ru: 'Панель аллергии Атопическая 30-I (Atopic)', tr: 'Alerji Paneli Atopik 30-I (Atopic)' },
    category: 'allergy',
    price: 715000,
    fasting: false,
    time: '2 days',
    desc: { uz: 'Sigir suti, Tuxum oqsili, Bugʻdoy, Yongʻoqlar, Uy changi kanasi, Polshin, Hayvonlar yungi kabi 30 xil allergenlarni aniqlash.', ru: 'Молоко, Яичный белок, Соя, Арахис, Кошка, Собака, Клещ пыли, Пыльца полыни, березы и др. (30 аллергенов).', tr: 'İnek sütü, Yumurta akı, Soya, Fıstık, Kedi, Köpek, Ev tozu akarı, Pelin otu, Huş ağacı vb. (30 alerjen).' }
  },
  {
    id: 'test_allergy_inhal_30',
    code: '150-2',
    name: { uz: 'Allergiya paneli Ingalyatsion 30', ru: 'Панель аллергии Ингаляционная 30', tr: 'Alerji Paneli İnhalasyon 30' },
    category: 'allergy',
    price: 715000,
    fasting: false,
    time: '2 days',
    desc: { uz: 'Daraxtlar, oʻtlar changi, chang kanasi, hayvonlar yungi va mogʻor kabi 30 xil havoda uchuvchi allergenlarni aniqlash.', ru: 'Пыльца деревьев и трав, Клещи домашней пыли, Латекс, Кошка, Собака, Грибки и др. (30 аллергенов).', tr: 'Ağaç ve ot polenleri, Ev tozu akarları, Lateks, Kedi, Köpek, Mantarlar vb. (30 solunum alerjeni).' }
  },
  {
    id: 'test_allergy_food_30',
    code: '150-3',
    name: { uz: 'Allergiya paneli Oziq-ovqat 30', ru: 'Панель аллергии Пищевая 30', tr: 'Alerji Paneli Gıda 30' },
    category: 'allergy',
    price: 715000,
    fasting: false,
    time: '2 days',
    desc: { uz: 'Sut, tuxum, bugʻdoy, dengiz mahsulotlari, mevalar, goʻsht va sabzavotlar kabi 30 xil asosiy oziq-ovqat allergenlarini aniqlash.', ru: 'Молоко, Яичный белок, Какао, Пшеница, Морепродукты, Мясо, Фрукты и овощи (30 пищевых аллергенов).', tr: 'Süt, Yumurta akı, Kakao, Buğday, Deniz ürünleri, Etler, Meyve ve sebzeler (30 gıda alerjeni).' }
  },
  // =========================================================================
  // --- ADDED NEW BACTERIOLOGICAL TESTS (bacteriology category) ---
  // =========================================================================
  {
    id: 'test_urine_culture',
    code: '136',
    name: { uz: 'Siydik ekmasi (посев)', ru: 'Исследование мочи (посев)', tr: 'İdrar Kültürü (Ekim)' },
    category: 'bacteriology',
    price: 215000,
    fasting: false,
    time: '3-5 days',
    desc: { uz: 'Siydik yoʻllari infeksiyalarini qoʻzgʻatuvchi bakteriyalar ekmasi va antibiotiklarga sezuvchanlik.', ru: 'Посев мочи на флору с определением чувствительности к антибиотикам.', tr: 'İdrar yolu enfeksiyonu bakterilerinin ekimi ve antibiyotik duyarlılığı.' }
  },
  {
    id: 'test_stool_disbacteriosis',
    code: '137',
    name: { uz: 'Najas ekmasi (дисбактериоз)', ru: 'Исследование кала на кишечный дисбактериоз', tr: 'Bağırsak Disbakteriyozi Dışkı Kültürü' },
    category: 'bacteriology',
    price: 215000,
    fasting: false,
    time: '3-5 days',
    desc: { uz: 'Ichak mikroflorasi va disbakteriozni oʻrganish.', ru: 'Исследование микрофлоры кишечника и выявление дисбактериоза.', tr: 'Bağırsak florası ve disbakteriyoz analizi.' }
  },
  {
    id: 'test_wound_swab_culture',
    code: '138',
    name: { uz: 'Yara ajralmasi ekmasi', ru: 'Исследование мазка из раневого отделяемого', tr: 'Yara Sürüntüsü Kültürü' },
    category: 'bacteriology',
    price: 195000,
    fasting: false,
    time: '3-5 days',
    desc: { uz: 'Yara yalligʻlanish qoʻzgʻatuvchisini aniqlash va ekish.', ru: 'Выявление возбудителя инфекции раны с антибиотикограммой.', tr: 'Yara enfeksiyonu etkeninin tespiti ve antibiyogram.' }
  },
  {
    id: 'test_vaginal_culture',
    code: '139',
    name: { uz: 'Qin surtmasi ekmasi (посев)', ru: 'Исследование мазка из влагалища (посев)', tr: 'Vajinal Sürüntü Kültürü' },
    category: 'bacteriology',
    price: 195000,
    fasting: false,
    time: '3-5 days',
    desc: { uz: 'Qin mikroflorasi va uning tarkibidagi patogenlar ekmasi.', ru: 'Микробиологическое исследование влагалищного содержимого.', tr: 'Vajinal flora ve patojen tespiti ekimi.' }
  },
  {
    id: 'test_throat_culture',
    code: '140',
    name: { uz: 'Tomoq surtmasi ekmasi (посев)', ru: 'Исследование мазка зева (посев)', tr: 'Boğaz Sürüntüsü Kültürü' },
    category: 'bacteriology',
    price: 165000,
    fasting: false,
    time: '3-5 days',
    desc: { uz: 'Tomoq mikroflorasi va streptokokk patogenlari ekmasi.', ru: 'Посев мазка из зева на флору и антибиотики.', tr: 'Boğaz florası ve patojenik streptokok ekimi.' }
  },
  {
    id: 'test_urethral_culture',
    code: '141',
    name: { uz: 'Uretra surtmasi ekmasi (посев)', ru: 'Исследование мазка из уретры (посев)', tr: 'Üretral Sürüntü Kültürü' },
    category: 'bacteriology',
    price: 195000,
    fasting: false,
    time: '3-5 days',
    desc: { uz: 'Siydik yoʻllari uretra mikrob florasi ekmasi.', ru: 'Микробиологический посев из уретры у мужчин и женщин.', tr: 'Üretral akıntı florası ekimi.' }
  },
  {
    id: 'test_ear_culture',
    code: '142',
    name: { uz: 'Quloq surtmasi ekmasi (посев)', ru: 'Исследование мазка из уха (посев)', tr: 'Kulak Sürüntüsü Kültürü' },
    category: 'bacteriology',
    price: 195000,
    fasting: false,
    time: '3-5 days',
    desc: { uz: 'Quloq yalligʻlanish (otit) qoʻzgʻatuvchilarini aniqlash.', ru: 'Микробиологическое исследование отделяемого уха.', tr: 'Kulak enfeksiyonu (otit) etkenlerinin ekimi.' }
  },
  {
    id: 'test_nose_culture',
    code: '143',
    name: { uz: 'Burun surtmasi ekmasi (посев)', ru: 'Исследование мазка носа (посев)', tr: 'Burun Sürüntüsü Kültürü' },
    category: 'bacteriology',
    price: 250000,
    fasting: false,
    time: '3-5 days',
    desc: { uz: 'Burun boʻshligʻidagi tilla rang stafilokokk va boshqa patogenlarni aniqlash.', ru: 'Посев из носа на определение золотистого стафилококка и др.', tr: 'Burun sürüntüsünden altın sarısı stafilokok vb. ekimi.' }
  },
  {
    id: 'test_sputum_culture',
    code: '144',
    name: { uz: 'Balgʻam ekmasi (посев)', ru: 'Исследование мокроты (посев)', tr: 'Balgam Kültürü' },
    category: 'bacteriology',
    price: 250000,
    fasting: false,
    time: '3-5 days',
    desc: { uz: 'Nafas yoʻllari infeksiyalarining mikroblarini aniqlash.', ru: 'Посев мокроты для выявления возбудителей бронхолегочных инфекций.', tr: 'Balgam Kültürü' }
  },
  {
    id: 'test_eye_culture',
    code: '145',
    name: { uz: 'Koʻz surtmasi ekmasi (посев)', ru: 'Исследование мазка из глаза (посев)', tr: 'Göz Sürüntüsü Kültürü' },
    category: 'bacteriology',
    price: 165000,
    fasting: false,
    time: '3-5 days',
    desc: { uz: 'Konʼyunktivit va koʻz infeksiyasi qoʻzgʻatuvchisini aniqlash.', ru: 'Микробиологический посев отделяемого конъюнктивы.', tr: 'Göz Sürüntüsü Kültürü' }
  },
  {
    id: 'test_blood_culture',
    code: '146',
    name: { uz: 'Qon ekmasi (sterillikka tahlil)', ru: 'Исследование крови (Посев)', tr: 'Kan Kültürü (Sterilite Testi)' },
    category: 'bacteriology',
    price: 325000,
    fasting: true,
    time: '5-7 days',
    desc: { uz: 'Sepsis va qon infeksiyalarini aniqlash.', ru: 'Посев крови на стерильность для выявления бактериемии.', tr: 'Kan Kültürü (Sterilite Testi)' }
  },
  {
    id: 'test_csf_culture',
    code: '147',
    name: { uz: 'Likvor (orqa miya suyuqligi) ekmasi', ru: 'Посев СМЖ (ликвор цереброспинальный)', tr: 'Lomber Ponksiyon Sıvısı (BOS) Kültürü' },
    category: 'bacteriology',
    price: 225000,
    fasting: false,
    time: '5-7 days',
    desc: { uz: 'Meningit va markaziy asab tizimi infeksiyalarini aniqlash.', ru: 'Посев спинномозговой жидкости при подозрении на менингит.', tr: 'Lomber Ponksiyon Sıvısı (BOS) Kültürü' }
  },
  {
    id: 'test_ureaplasma_culture',
    code: '148',
    name: { uz: 'Ureaplazma ekmasi titr bilan', ru: 'Посев на уреаплазму с определением титра', tr: 'Üreaplazma Kültürü ve Titre Tayini' },
    category: 'bacteriology',
    price: 325000,
    fasting: false,
    time: '3 days',
    desc: { uz: 'Ureaplazma miqdori va antibakterial dori vositalariga sezuvchanlik.', ru: 'Количественный посев Ureaplasma с чувствительностью к антибиотикам.', tr: 'Üreaplazma Kültürü ve Titre Tayini' }
  },
  {
    id: 'test_mycoplasma_culture',
    code: '149',
    name: { uz: 'Mikoplazma ekmasi titr bilan', ru: 'Посев на микоплазму с определением титра', tr: 'Mikoplazma Kültürü ve Titre Tayini' },
    category: 'bacteriology',
    price: 325000,
    fasting: false,
    time: '3 days',
    desc: { uz: 'Mikoplazma miqdori va uning antibiotiklarga chidamliligi.', ru: 'Количественный посев Mycoplasma с чувствительностью к антибиотикам.', tr: 'Mikoplazma Kültürü ve Titre Tayini' }
  },
  {
    id: 'test_yeast_culture',
    code: '150',
    name: { uz: 'Drojjasimon zamburugʻlar ekmasi', ru: 'Исследование мазка на дрожжеподобные грибы', tr: 'Maya Benzeri Mantar Ekim Testi' },
    category: 'bacteriology',
    price: 105000,
    fasting: false,
    time: '3 days',
    desc: { uz: 'Zamburugʻli (kandidoz) infeksiyalarni aniqlash.', ru: 'Посев на дрожжеподобные грибы рода Candida.', tr: 'Maya Benzeri Mantar Ekim Testi' }
  },
  {
    id: 'test_brucella_huddleson',
    code: '151',
    name: { uz: 'Brutselloz Xeddelson-Rayt reaksiyasi', ru: 'Бруцеллёз реакция Хеддельсона-Райта', tr: 'Bruselloz Huddleson-Wright Reaksiyonu' },
    category: 'bacteriology',
    price: 85000,
    fasting: true,
    time: '1 day',
    desc: { uz: 'Brutselloz kasalligini aniqlashning serologik testi.', ru: 'Диагностика бруцеллеза экспресс-методом (агглютинация).', tr: 'Bruselloz Huddleson-Wright Reaksiyonu' }
  },
  {
    id: 'test_agglutination_reaction',
    code: '152',
    name: { uz: 'Agglyutinatsiya reaksiyasidagi qon tahlili', ru: 'Исследование крови в реакции агглютинации', tr: 'Aglütinasyon Reaksiyonu Kan Testi' },
    category: 'bacteriology',
    price: 130000,
    fasting: true,
    time: '1 day',
    desc: { uz: 'Turli bakterial antitelalarni aniqlash.', ru: 'Определение антител в реакции агглютинации.', tr: 'Aglütinasyon Reaksiyonu Kan Testi' }
  },
  {
    id: 'test_breast_milk_culture',
    code: '153',
    name: { uz: 'Ona suti ekmasi', ru: 'Исследование материнского молока (посев)', tr: 'Anne Sütü Kültürü (Ekim)' },
    category: 'bacteriology',
    price: 215000,
    fasting: false,
    time: '3 days',
    desc: { uz: 'Ona sutining mikroblardan xoliligini tekshirish.', ru: 'Посев грудного молока на флору с определением чувствительности.', tr: 'Anne Sütü Kültürü (Ekim)' }
  },
  {
    id: 'test_echinococcus_ab',
    code: '154',
    name: { uz: 'Qonda exinokokk antitelalarini aniqlash', ru: 'Исследование крови на эхинококк', tr: 'Ekinokok Kan Testi' },
    category: 'bacteriology',
    price: 355000,
    fasting: true,
    time: '2 days',
    desc: { uz: 'Exinokok parazitar kistasini aniqlash tahlili.', ru: 'Определение IgG антител к эхинококку в сыворотке крови.', tr: 'Ekinokok Kan Testi' }
  },
  // =========================================================================
  // --- ADDED NEW GENERAL CLINICAL TESTS (general_clinical category) ---
  // =========================================================================
  {
    id: 'test_stool_general',
    code: '155',
    name: { uz: 'Najas umumiy tahlili (Koprogramma)', ru: 'Анализ кала (General Analisys of Feces)', tr: 'Koproloji (Dışkı Genel Analizi)' },
    category: 'general_clinical',
    price: 40000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Hazm qilish tizimi va gelmint tuxumlarini baholash.', ru: 'Копрограмма для оценки переваривания пищи и воспаления.', tr: 'Koproloji (Dışkı Genel Analizi)' }
  },
  {
    id: 'test_stool_occult_blood',
    code: '156',
    name: { uz: 'Najasda yashirin qon tahlili', ru: 'Анализ кала на скрытую кровь', tr: 'Dışkıda Gizli Kan Testi' },
    category: 'general_clinical',
    price: 65000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Ichak devorlaridan yashirin qon ketishini aniqlash.', ru: 'Раннее выявление скрытых кровотечений в ЖКТ.', tr: 'Dışkıda Gizli Kan Testi' }
  },
  {
    id: 'test_clostridium_toxin',
    code: '157',
    name: { uz: 'Najasda klostridiya A va B toxins, IXA', ru: 'Анализ кала на токсины клостридии А и В, ИХА', tr: 'Dışkıda Clostridium Difficile Toksin A ve B' },
    category: 'general_clinical',
    price: 90000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Antibiotiklar sabab boʻlgan kolit va disbakteriozni aniqlash.', ru: 'Быстрый тест на антиген токсинов клостридий при дисбактериозе.', tr: 'Dışkıda Clostridium Difficile Toksin A ve B' }
  },
  {
    id: 'test_stool_adenovirus',
    code: '158',
    name: { uz: 'Najasda adenovirus aniqlash, IXA', ru: 'Анализ кала на аденовирус, ИХА', tr: 'Dışkıda Adenovirüs Antijeni (Hızlı Test)' },
    category: 'general_clinical',
    price: 65000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Oʻtkir ichak infeksiyalarida adenovirus antijenini aniqlash.', ru: 'Экспресс-диагностика аденовирусной кишечной инфекции.', tr: 'Dışkıda Adenovirüs Antijeni (Hızlı Test)' }
  },
  {
    id: 'test_stool_rotavirus',
    code: '159',
    name: { uz: 'Najasda rotavirus aniqlash, IXA', ru: 'Анализ кала на ротавирус, ИХА', tr: 'Dışkıda Rotavirüs Antijeni (Hızlı Test)' },
    category: 'general_clinical',
    price: 60000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Bolalardagi rotavirusli ichburugʻ qoʻzgʻatuvchisini aniqlash.', ru: 'Выявление ротавирусного гастроэнтерита экспресс-методом.', tr: 'Dışkıda Rotavirüs Antijeni (Hızlı Test)' }
  },
  {
    id: 'test_stool_amoeba',
    code: '160',
    name: { uz: 'Najasda Entamoeba histolytica, IXA', ru: 'Анализ кала на Entamoeba histolytica, ИХА', tr: 'Dışkıda Entamoeba Histolytica Antijeni' },
    category: 'general_clinical',
    price: 60000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Dizenteriya amyobasini aniqlash testi.', ru: 'Экспресс-тест на определение дизентерийной амебы.', tr: 'Dışkıda Entamoeba Histolytica Antijeni' }
  },
  {
    id: 'test_stool_giardia_ag',
    code: '161',
    name: { uz: 'Najasda lyambliya antijenlari, IXA', ru: 'Анализ кала на антигены лямблии, ИХА', tr: 'Dışkıda Giardia Lamblia Antijeni' },
    category: 'general_clinical',
    price: 65000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Ichak paraziti lyambliya antijenlarini najasda aniqlash.', ru: 'Иммунохроматографическое определение антигенов лямблий в кале.', tr: 'Dışkıda Giardia Lamblia Antijeni' }
  },
  {
    id: 'test_chlamydia_smear',
    code: '162',
    name: { uz: 'Xlamidiya surtmasi tahlili, IXA', ru: 'Анализ мазка на хламидии, ИХА', tr: 'Chlamydia Sürüntü Hızlı Test (İHA)' },
    category: 'general_clinical',
    price: 65000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Surtmada xlamidiya infeksiyasini tezkor aniqlash.', ru: 'Экспресс-определение хламидий в соскобе из урогенитального тракта.', tr: 'Chlamydia Sürüntü Hızlı Test (İHA)' }
  },
  {
    id: 'test_smear_cervix',
    code: '163',
    name: { uz: 'Mikroflora surtmasi (Cervix)', ru: 'АНАЛИЗ МАЗКА НА МИКРОФЛОРУ (CERVIX)', tr: 'Mikroflora Sürüntü Analizi (Serviks)' },
    category: 'general_clinical',
    price: 70000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Servikal kanaldagi bakterial flora va leykotsitlarni aniqlash.', ru: 'Микроскопическое исследование соскоба шейки матки.', tr: 'Mikroflora Sürüntü Analizi (Serviks)' }
  },
  {
    id: 'test_smear_urethra',
    code: '164',
    name: { uz: 'Mikroflora surtmasi (Uretra)', ru: 'АНАЛИЗ МАЗКА НА МИКРОФЛОРУ (URETRA)', tr: 'Mikroflora Sürüntü Analizi (Uretra)' },
    category: 'general_clinical',
    price: 85000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Uretra mikroskopik shilliq qavati florasini tekshirish.', ru: 'Оценка клеточного состава и флоры уретры.', tr: 'Mikroflora Sürüntü Analizi (Uretra)' }
  },
  {
    id: 'test_smear_vagina',
    code: '165',
    name: { uz: 'Mikroflora surtmasi (Vagina)', ru: 'АНАЛИЗ МАЗКА НА МИКРОФЛОРУ (VAGINA)', tr: 'Mikroflora Sürüntü Analizi (Vajina)' },
    category: 'general_clinical',
    price: 80000,
    fasting: false,
    time: '3 h',
    desc: { uz: 'Qin shilliq pardasidagi yalligʻlanish va zamburugʻlarni aniqlash.', ru: 'Гинекологический мазок на флору (вагинальный).', tr: 'Mikroflora Sürüntü Analizi (Vajina)' }
  },
  {
    id: 'test_spermogram',
    code: '166',
    name: { uz: 'Spermogramma', ru: 'Спермограмма', tr: 'Spermiyogram (Sperm Analizi)' },
    category: 'general_clinical',
    price: 140000,
    fasting: false,
    time: '3-4 h',
    desc: { uz: 'Erkak urugʻlik suyuqligini va fertilligini laboratoriya tahlili.', ru: 'Анализ эякулята для оценки мужской репродуктивной способности.', tr: 'Spermiyogram (Sperm Analizi)' }
  },
  {
    id: 'test_spermogram_kruger',
    code: '167',
    name: { uz: 'Spermogramma (Kryuger boʻyicha)', ru: 'Спермограмма по Крюгеру', tr: 'Kruger Kriterlerine Göre Sperm Morfolojisi' },
    category: 'general_clinical',
    price: 195000,
    fasting: false,
    time: '1 day',
    desc: { uz: 'Spermatozoidlar morfologiyasini oʻta aniq mikroskopik tekshirish.', ru: 'Оценка строгого строения (морфологии) сперматозоидов по Крюгеру.', tr: 'Kruger Kriterlerine Göre Sperm Morfolojisi' }
  },
  {
    id: 'test_h_pylori_stool_ag',
    code: '168',
    name: { uz: 'Najasda Helicobacter pylori antijeni, IXA', ru: 'Анализ кала на антигены ИХА (Helicobacter pylori)', tr: 'Düşkıda Helicobacter Pylori Antijeni' },
    category: 'general_clinical',
    price: 80000,
    fasting: false,
    time: '4 h',
    desc: { uz: 'Oshqozon va oʻn ikki barmoqli ichak yarasi bakteriyasini aniqlash.', ru: 'Выявление антигена бактерии Helicobacter pylori в кале.', tr: 'Düşkıda Helicobacter Pylori Antijeni' }
  }
];
