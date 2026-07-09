import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Activity, Calendar, Clock, MapPin, Phone, Mail, ChevronDown, Check, 
  Star, ShieldCheck, Cpu, ArrowRight, Search, ShoppingCart, User, 
  Send, Sun, Moon, Sparkles, X, Globe, Microscope, FileText, 
  Award, Trash2, Printer, CheckCircle2, ChevronRight, Eye, RefreshCw,
  SlidersHorizontal, Filter, Grid, List, ArrowUpDown, ChevronUp, Plus, AlertCircle,
  Heart, Menu, Maximize2, ClipboardList, Database, Zap, ChevronLeft, Circle, ArrowLeft,
  Monitor, Smartphone
} from 'lucide-react';

// ==========================================
// TYPES & DATA STRUCTURES
// ==========================================

import { TestItem, LABORATORY_TESTS } from './testsData';
import Typed from 'typed.js';

import kaniLabLogoImg from './assets/images/logo.png';
import rocheCobasImg from './assets/images/Aparatlar/cobas6000.jpg';
import mindrayBS2000Img from './assets/images/Aparatlar/59ea81316c.jpg.500x500.jpg';
import mindrayBC5800Img from './assets/images/Aparatlar/mindray-bc-5800.jpg';
import coagulationImg from './assets/images/Aparatlar/C2000-4-AnalizadorCoagulacionSemiautomatico-1.jpg';
import bioradPcrImg from './assets/images/Aparatlar/lsr_CFX-Connect-Real-Time-PCR-Detection-System-PDP.png';
import abbottC8000Img from './assets/images/Aparatlar/C8000.png';
import coatronXImg from './assets/images/Aparatlar/Coatron-X.jpg';
import termizUnivImg from './assets/images/terdu.jpg';
import tashkentMedicalImg from './assets/images/ttatf.jpg';
import cert1Img from './assets/images/Cap sertifikat/sertifikat-1.jfif';
import cert2Img from './assets/images/Cap sertifikat/sertifikat-2.jfif';
import cert3Img from './assets/images/Cap sertifikat/sertifikat-3.jfif';
import markazOldImg from './assets/images/markaz old.jpg';
import sunnatulloImg from "./assets/images/Xodimlar/Eshpo'latov Sunnatullo.jpg";
import sitoraImg from "./assets/images/Xodimlar/Xurramova Sitora.jpg";
import shaxzodaImg from "./assets/images/Xodimlar/Qaxxorova Shaxzoda.jpg";
import asadbekImg from "./assets/images/Xodimlar/Davronov Asadbek.jpg";
import yasminaImg from "./assets/images/Xodimlar/Turopova Yasmina.jpg";
import yusufbekImg from "./assets/images/Xodimlar/Davronov Yusufbek.jpg";
import farangizImg from "./assets/images/Xodimlar/Alikulova Farangiz.jpg";
import zilolaImg from "./assets/images/Xodimlar/Amirqulova Zilola.jpg";
import zubaydaImg from "./assets/images/Xodimlar/Xurramova Zubayda.jpg";
import xoshiyevaSitoraImg from "./assets/images/Xodimlar/Xo'shiyeva Sitora.jpg";
import terdu1Img from "./assets/images/TerDU/TerDU-1.jpg";
import terdu2Img from "./assets/images/TerDU/TerDU-2.jpg";
import terdu3Img from "./assets/images/TerDU/TerDU-3.jpg";
import terdu4Img from "./assets/images/TerDU/TerDU-4.jpg";
import tanosil1Img from "./assets/images/Teri Tanosil/teri tanosil- 1.jpg";
import tanosil2Img from "./assets/images/Teri Tanosil/teri tanosil- 2.jpg";
import tanosil3Img from "./assets/images/Teri Tanosil/teri tanosil- 3.jpg";
import tanosil4Img from "./assets/images/Teri Tanosil/teri tanosil- 4.jpg";
import xotinQizlarAngorImg from "./assets/images/2025 yil Xotin qizlar bayrami/xotin qizlar kuni angor.jpg";
import xotinQizlarFilialdaImg from "./assets/images/2025 yil Xotin qizlar bayrami/xotin qizlar kuni filialda.jpg";
import xotinQizlarMarkazdaImg from "./assets/images/2025 yil Xotin qizlar bayrami/xotin qizlar kuni Markazda.jpg";
import xotinQizlarSherabodImg from "./assets/images/2025 yil Xotin qizlar bayrami/xotin qizlar kuni sherabod.jpg";
import { supabase } from './supabaseClient';

const sertifikatImg = cert3Img;

const ANALYZERS_DATA = [
  {
    id: 'roche-cobas-6000',
    name: 'Roche Cobas 6000 (c502, e411)',
    badge: 'Roche • Swiss',
    badgeColor: 'bg-red-600',
    image: rocheCobasImg,
    shortDesc: {
      uz: 'Immunokimyoviy va gormon analizlari uchun robotlashtirilgan liniya. Tahlillarning 99.9% analitik aniqligini kafolatlaydi.',
      ru: 'Автоматизированная линия для иммунохимических и гормональных исследований. Гарантирует 99.9% аналитическую точность.',
      tr: 'İmmünokimyasal ve hormon analizleri için robotik hat. Analizlerin %99.9 analitik doğruluğunu garanti eder.'
    },
    category: { uz: 'Gormonlar va immunologiya', ru: 'Гормоны и иммунология', tr: 'Hormonlar ve İmmünoloji' },
    model: 'Cobas c502',
    scientificDetails: {
      uz: 'Roche Cobas 6000 (c502, e411) — elektroximilyuminessensiya (ECLIA) va fotometrik texnologiyalarni o‘zida birlashtirgan gibrid tizim. U gormonlar, onkomarkerlar va infeksion kasalliklarni aniqlashda misli ko‘rilmagan sezgirlikni ta’minlaydi. Kuniga 1000 dan ortiq tahlillarni inson aralashuvisiz, avtomatik kalibratsiya va sifat nazorati ostida bajaradi. Qurilmada maxsus elektrokimyoviy o‘lchash katakchalari qo‘llanilgan bo‘lib, umuman antigen-antitelo reaksiyalari ruteniy kompleksi yordamida yorug‘lik nurlanishi orqali hisoblanadi. Shuningdek, reaktivlar bilan ishlashda krossovka va kontaminatsiyani oldini olish uchun 0.1 mikrolitrgacha aniqlikda ishlovchi pipetkalash tizimiga ega. Reaksiya vaqti turiga qarab atigi 9-18 daqiqani tashkil etadi, bu esa bemorlar va shifokorlar uchun javoblarni maksimal tezkorlikda yetkazish imkonini beradi. Har bir test reaktivida avtomatik ravishda shtrix-kodni o‘qish orqali xatoliklar ehtimoli nolga tenglashtiriladi.',
      ru: 'Roche Cobas 6000 (c502, e411) — гибридная система, объединяющая электрохемилюминесценцию (ECLIA) и фотометрические технологии. Обеспечивает беспрецедентную чувствительность при выявлении гормонов, онкомаркеров и инфекционных заболеваний. Выполняет более 1000 тестов в день без вмешательства человека с автоматической калибровкой и контролем качества. В устройстве используются специальные электрохимические измерительные ячейки, посредством которых реакции антиген-антитело рассчитываются за счет излучения света с использованием рутениевого комплекса. Кроме того, имеется система пипетирования, работающая с точностью до 0,1 микролитра, чтобы предотвратить контаминацию. Время реакции составляет всего 9–18 минут, что позволяет максимально быстро предоставлять ответы. Путем автоматического считывания штрих-кода вероятность ошибок сводится к нулю.',
      tr: 'Roche Cobas 6000 (c502, e411), elektrokimyasal lüminesans (ECLIA) ve fotometrik teknolojileri birleştiren hibrit bir sistemdir. Hormon, tümör belirteçleri ve enfeksiyon hastalıklarının tespitinde eşsiz hassasiyet sağlar. Günde 1000\'den fazla testi insan müdahalesi olmadan otomatik kalibrasyon ve kalite kontrolüyle gerçekleştirir. Cihazda, antijen-antikor reaksiyonlarının rutenyum kompleksi kullanılarak ışık emisyonu yoluyla ölçüldüğü özel elektrokimyasal ölçüm hücreleri kullanılır. Ayrıca, kontaminasyonu önlemek için 0.1 mikrolitreye kadar hassasiyette çalışan pipetleme sistemine sahiptir. Reaksiyon süresi analiz türüne göre sadece 9-18 dakikadır ve bu sayede sonuçlar en hızlı şekilde teslim edilir. Her test reaktifinde otomatik barkod okuma sayesinde hata payı sıfıra indirgenmiştir.'
    },
    specs: [
      { label: { uz: 'Ishlash prinsipi', ru: 'Принцип работы', tr: 'Çalışma Prensibi' }, value: 'ECLIA & Fotometriya' },
      { label: { uz: 'Unumdorlik', ru: 'Производительность', tr: 'Performans' }, value: '1000+ tahlil/soat' },
      { label: { uz: 'Ishlab chiqaruvchi', ru: 'Производитель', tr: 'Üretici' }, value: 'Roche Diagnostics (Shveysariya)' },
      { label: { uz: 'Reaksiya aniqligi', ru: 'Точность реакции', tr: 'Reaksiyon Hassasiyeti' }, value: '99.9% / 0.1 mkl gacha' },
      { label: { uz: 'O\'lchash texnologiyasi', ru: 'Технология измерения', tr: 'Ölçüm Teknolojisi' }, value: 'Ruteniy markalash' },
      { label: { uz: 'Kalibratsiya', ru: 'Калибровка', tr: 'Kalibrasyon' }, value: 'Avtomatik (2-point/Full)' }
    ]
  },
  {
    id: 'mindray-bs-2000m',
    name: 'Mindray BS-2000M',
    badge: 'Mindray • High Speed',
    badgeColor: 'bg-blue-600',
    image: mindrayBS2000Img,
    shortDesc: {
      uz: 'Tezkor biokimyoviy tahlillar uchun to‘liq avtomatlashtirilgan yuqori tezlikda ishlovchi tahlil tizimi.',
      ru: 'Высокоскоростной автоматический биохимический анализатор для оперативных исследований.',
      tr: 'Hızlı biyokimyasal analizler için tam otomatik, yüksek hızlı analiz sistemi.'
    },
    category: { uz: 'Biokimyo', ru: 'Биохимия', tr: 'Biyokimya' },
    model: 'BS-2000M',
    scientificDetails: {
      uz: 'Mindray BS-2000M — yuqori samarali biokimyoviy analizator bo‘lib, ilg‘or golografik diffraksion panjarali fotometriya tizimiga ega. Qurilma qon zardobi fermentlari, lipidlar spektri va substratlar konsentratsiyasini nanometrik aniqlikda o‘lchaydi. Barcha namunalarni maxsus mikserlar va ultratovushli aralashtirish texnologiyasi orqali bir xil massaga keltiradi. Kengaytirilgan absorbsiya spektri (340nm dan 800nm gacha bo‘lgan 14 xil to‘lqin uzunligi) har qanday nodir reaktivlar bilan ishlashga hamda gemoliz, ikteriya va lipemiya ta\'sirini (HIL indekslari orqali) avtomatik tarzda istisno qilishga yordam beradi. Tizim reaktivlarni 2-8°C gradusda doimiy sovitish kamerasida saqlaydi, bu ularning barqarorligini taminlaydi va xatoliklarni kamaytiradi.',
      ru: 'Mindray BS-2000M — высокоэффективный биохимический анализатор с передовой голографической дифракционной фотометрией. Устройство измеряет ферменты сыворотки крови, липидный спектр и концентрацию субстратов с нанометрической точностью. Доводит все пробы до однородной массы с помощью специальных миксеров и технологии ультразвукового смешивания. Расширенный спектр абсорбции (14 длин волн от 340 нм до 800 нм) помогает работать с любыми реагентами и автоматически исключать влияние гемолиза, иктеричности и липемии. Система хранит реагенты при температуре 2-8°С в холодильной камере, что обеспечивает их стабильность.',
      tr: 'Mindray BS-2000M, gelişmiş holografik kırınım ızgaralı fotometri sistemine sahip yüksek verimli bir biyokimyasal analizördür. Cihaz, kan serumu enzimlerini, lipid spektrumunu ve substrat konsantrasyonunu nanometrik hassasiyetle ölçer. Özel mikserler ve ultrasonik karıştırma teknolojisiyle tüm numuneleri homojen bir kütleye getirir. Genişletilmiş absorpsiyon spektrumu (340nm ila 800nm arasında 14 farklı dalga boyu) her türlü nadir reaktifle çalışmaya ve hemoliz, ikter ve lipemi etkisini (HIL indeksleri aracılığıyla) otomatik olarak hariç tutmaya yardımcı olur. Sistem reaktifleri 2-8°C derecede sürekli soğutmalı haznede saklayarak kararlılıklarını sağlar ve hataları en aza indirir.'
    },
    specs: [
      { label: { uz: 'Optik tizim', ru: 'Оптическая система', tr: 'Optik Sistem' }, value: 'Golografik difraksiya' },
      { label: { uz: 'Tezlik', ru: 'Скорость', tr: 'Hız' }, value: '2000 fotometrik test/soat' },
      { label: { uz: 'Reagent bloki', ru: 'Блок реагентов', tr: 'Reaktif Bloğu' }, value: 'Muzlatish tizimi bilan' },
      { label: { uz: 'To\'lqin uzunliklari', ru: 'Длины волн', tr: 'Dalga Boyları' }, value: '340nm - 800nm (14 kanal)' },
      { label: { uz: 'HIL Indeksi', ru: 'HIL Индекс', tr: 'HIL İndeksi' }, value: 'Avtomatik tekshiruv' },
      { label: { uz: 'Aralashtirish', ru: 'Смешивание', tr: 'Karıştırma' }, value: 'Ultratovushli texnologiya' }
    ]
  },
  {
    id: 'mindray-bc-5800',
    name: 'Mindray BC-5800',
    badge: 'Mindray • Hematology',
    badgeColor: 'bg-cyan-600',
    image: mindrayBC5800Img,
    shortDesc: {
      uz: '5-diff avtomatlashtirilgan gematologik tahlil tizimi. Qon tahlillarining aniq va tezkor ko‘rsatkichlarini ta’minlaydi.',
      ru: 'Высокоточный гематологический анализатор 5-diff с автоматической загрузкой пробирок.',
      tr: '5-diff otomatik hematolojik analiz sistemi. Kan analizlerinin doğru ve hızlı göstergelerini sağlar.'
    },
    category: { uz: 'Gematologiya', ru: 'Гематология', tr: 'Hematoloji' },
    model: 'BC-5800',
    scientificDetails: {
      uz: 'Mindray BC-5800 analizatori hujayralarni yorug‘likning uch burchak ostida tarqalishi (tri-angle laser scatter), kimyoviy bo‘yash va oqim sitometriyasi (flow cytometry) yordamida o‘rganadi. U texnologiya leykotsitlarni nafaqat hajmi, balki yadrosining tuzilishi va granulyatsiyasiga ko‘ra 5 ta asosiy subpopulyatsiyaga (neytrofillar, limfotsitlar, monotsitlar, eozinofillar, bazofillar) mikroskopik aniqlikda ajratadi. Eritrotsitlar va trombotsitlarni tahlil qilish uchun ikki o‘lchamli gidrodinamik fokuslash usuli qo‘llanilgan, bu esa kichik yoki anomal trombotsitlarni eritrotsitlardan farqlashda juda muhimdir. Tizim retikulotsitlar sonini ham maxsus lyuminessent bo‘yash yordamida hisoblash imkoniyatiga ega bo‘lib, kamqonlik (anemiya) diagnostikasida bebaho ahamiyatga ega.',
      ru: 'Анализатор Mindray BC-5800 изучает клетки с помощью трехуглового лазерного рассеяния, химического окрашивания и проточной цитометрии. Эта технология разделяет лейкоциты не только по размеру, но и по строению ядра и грануляции на 5 основных субпопуляций. Для анализа эритроцитов и тромбоцитов применяется метод двумерной гидродинамической фокусировки, что очень важно для отличия мелких или аномальных тромбоцитов от эритроцитов. В системе также реализован подсчет количества ретикулоцитов с помощью специального люминесцентного окрашивания, что имеет неоценимое значение при диагностике анемий.',
      tr: 'Mindray BC-5800 analizörü hücreleri üç açılı ışık saçılımı (tri-angle laser scatter), kimyasal boyama ve akış sitometrisi (flow cytometry) kullanarak inceler. Bu teknoloji, lökositleri sadece boyutlarına göre değil, aynı zamanda çekirdeklerinin yapısına ve granülasyonlarına göre 5 ana alt popülasyona (nötrofiller, lenfositler, monositler, eozinfiller, bazofiller) mikroskobik hassasiyetle ayırır. Eritrositler ve trombositlerin analizi için iki boyutlu hidrodinamik odaklama yöntemi uygulanmıştır; bu, küçük veya anormal trombositleri eritrositlerden ayırt etmede son derece önemlidir. Sistem, anemilerin teşhisinde paha biçilmez bir öneme sahip olan retikülosit sayısını da özel floresan boyama yardımıyla hesaplayabilmektedir.'
    },
    specs: [
      { label: { uz: 'Metodologiya', ru: 'Методология', tr: 'Metodoloji' }, value: 'Oqim sitometriyasi & Lazer' },
      { label: { uz: 'Differensiatsiya', ru: 'Дифференциация', tr: 'Diferansiasyon' }, value: '5-Diff (Leykoformulalar)' },
      { label: { uz: 'O‘tkazuvchanlik', ru: 'Пропускная способность', tr: 'Geçirgenlik' }, value: '90 test/soat' },
      { label: { uz: 'Gidrodinamik fokus', ru: 'Гидродин. фокусировка', tr: 'Hidrodinamik Odak' }, value: 'Ikki o\'lchamli tizim' },
      { label: { uz: 'Retikulotsitlar tahlili', ru: 'Анализ ретикулоцитов', tr: 'Retikülosit Analizi' }, value: 'Lyuminessent usul' },
      { label: { uz: 'Anomal hujayralar', ru: 'Аномальные клетки', tr: 'Anormal Hücreler' }, value: 'Signallash qobiliyati' }
    ]
  },
  {
    id: 'mindray-ba-88a',
    name: 'Mindray BA-88A',
    badge: 'Mindray • Coagulation',
    badgeColor: 'bg-indigo-600',
    image: coagulationImg,
    shortDesc: {
      uz: 'Yarim-avtomatlashtirilgan koagulyatsion va biokimyoviy tahlillar uchun mos keluvchi qurilma. Qon ivish tizimini tekshiradi.',
      ru: 'Полуавтоматический анализатор для коагулологии и экспресс-биохимии.',
      tr: 'Yarı otomatik koagülasyon ve biyokimyasal analizler için uygun cihaz. Kan pıhtılaşma sistemini kontrol eder.'
    },
    category: { uz: 'Koagulogramma (Ivish)', ru: 'Коагулограмма', tr: 'Koagülogram (Pıhtılaşma)' },
    model: 'BA-88A / C2000',
    scientificDetails: {
      uz: 'Ushbu qurilma qon plazmasidagi fibrinolitik va koagulyatsion faollikni baholash uchun mo‘ljallangan ishonchli apparatdir. U trombin vaqti, protrombin indeksi, fibrinogen miqdori va faollashtirilgan qisman tromboplastin vaqtini (AChTV) aniqlashda nefelometrik va optik-mexanik datchiklar kombinatsiyasidan foydalanadi. O‘ziga xosligi shundaki, u koagulyatsiya jarayonidagi mikro-laxtalarni o‘sish dinamikasini egri chiziq orqali vizualizatsiya qiladi. Bu funksiya jarrohlik operatsiyalaridan oldin qon ketish xavfini yoki qon quyqalari hosil bo‘lish patologiyalarini o‘ta ishonchli aniqlash imkonini beradi. Haroratni doimiy nazorat qiluvchi Peltier bloklari bilan jihozlangan bo‘lib, reaksiya uchun mukammal 37°C muhitini saqlaydi.',
      ru: 'Устройство предназначено для оценки фибринолитической и коагуляционной активности плазмы крови. Использует комбинацию нефелометрических и оптико-механических датчиков для определения тромбинового времени, протромбинового индекса и АЧТВ. Визуализирует динамику роста микросгустков в процессе коагуляции с помощью кривой. Эта функция позволяет с высокой степенью надежности выявлять риск кровотечений перед хирургическими операциями или патологии тромбообразования. Оснащен блоками Пельтье, обеспечивающими постоянный контроль температуры.',
      tr: 'Bu cihaz, kan plazmasındaki fibrinolitik ve koagülasyon aktivitesini değerlendirmek üzere tasarlanmış güvenilir bir araçtır. Trombin süresi, protrombin indeksi, fibrinojen konsantrasyonu ve aktive parsiyel tromboplastin süresinin (aPTT) saptanmasında nefelometrik ve optik-mekanik sensör kombinasyonunu kullanır. Koagülasyon sürecindeki mikro pıhtı büyüme dinamiklerini bir eğri üzerinden görselleştirebilmesi en önemli özelliğidir. Bu fonksiyon, cerrahi operasyonlardan önce kanama riskini veya kan pıhtısı oluşum patolojilerini son derece güvenilir bir şekilde tespit etmeye olanak tanır. Sıcaklığı sürekli kontrol eden Peltier blokları ile donatılmış olup reaksiyon için mükemmel 37°C ortamını korur.'
    },
    specs: [
      { label: { uz: 'Sensor turi', ru: 'Тип сенсора', tr: 'Sensör Tipi' }, value: 'Optik-Mexanik gibrid' },
      { label: { uz: 'Tahlil turlari', ru: 'Виды анализов', tr: 'Analiz Türleri' }, value: 'PT, APTT, FIB, TT, D-Dimer' },
      { label: { uz: 'Avtomatlashtirish', ru: 'Автоматизация', tr: 'Otomasyon' }, value: 'Yarim-avtomat' },
      { label: { uz: 'O\'lchash harorati', ru: 'Температура измерения', tr: 'Ölçüm Sıcaklığı' }, value: '37°C (Peltier bloki)' },
      { label: { uz: 'Vizualizatsiya', ru: 'Визуализация', tr: 'Görselleştirme' }, value: 'Dinamik egri chiziqlar' },
      { label: { uz: 'Deteksiya', ru: 'Детекция', tr: 'Deteksiyon' }, value: 'Nefelometrik usul' }
    ]
  },
  {
    id: 'biorad-cfx',
    name: 'Bio-Rad CFX Connect',
    badge: 'Bio-Rad • USA',
    badgeColor: 'bg-green-600',
    image: bioradPcrImg,
    shortDesc: {
      uz: 'Real-time rejimida ishlaydigan PSR amplifikatori. Infeksiya va genetik tahlillar diagnostikasi uchun mo‘ljallangan.',
      ru: 'Передовой ПЦР-амплификатор реального времени для выявления инфекций и генетической диагностики высокой чувствительности.',
      tr: 'Gerçek zamanlı çalışan PCR amplifikatörü. Enfeksiyon ve genetik analiz tanıları için tasarlanmıştır.'
    },
    category: { uz: 'Molekulyar Genetik (PSR)', ru: 'ПЦР-диагностика', tr: 'Moleküler Genetik (PCR)' },
    model: 'CFX Connect',
    scientificDetails: {
      uz: 'Bio-Rad CFX Connect tizimi — bu Real-Time PCR (miqdoriy polimeraza zanjirli reaksiya) texnologiyasining eng so‘nggi yutuqlarini o‘zida mujassam etgan. Suyuq kristalli va qattiq jismli Peltier termobloklari yordamida o‘ta tezkor harorat sikllarini (isitish/sovitish) mikrosekund tezligida amalga oshiradi. Uning ilg‘or optik tizimi 3 xil rangli (multiplex) fluoressent bo‘yoqlarni bir vaqtning o‘zida skanerlashi mumkin bo‘lib, virus yuklamasi va genetik mutatsiyalarni (DNK/RNK dagi o‘zgarishlarni) bitta naychada 3 xil patogen uchun aniqlay oladi. Gepatit, OIV, HPV, infeksion va genetik kasalliklarni aniqlashda eng past konsentratsiyalarni ham o‘tkazib yubormaslik uchun yuqori sezuvchan fotoelektron ko‘paytiruvchi naychalarga ega.',
      ru: 'Система Bio-Rad CFX Connect — это вершина технологии Real-Time PCR (количественной ПЦР). Осуществляет сверхбыстрые температурные циклы с помощью элементов Пельтье на микросекундной скорости. Его передовая оптическая система позволяет одновременно сканировать трехцветные флуоресцентные красители, способные определять вирусную нагрузку и генетические мутации для 3 разных патогенов в одной пробирке. Обладает высокочувствительными фотоэлектронными умножителями, чтобы не упустить даже самые низкие концентрации при выявлении гепатита, ВИЧ, ВПЧ и генетических заболеваний.',
      tr: 'Bio-Rad CFX Connect sistemi, Real-Time PCR (kantitatif polimeraz zincir reaksiyonu) teknolojisinin en son başarılarını bünyesinde barındırır. Sıvı kristal ve katı hal Peltier termoblokları yardımıyla ultra hızlı sıcaklık döngülerini (ısıtma/soğutma) mikrosaniye hızında gerçekleştirir. Gelişmiş optik sistemi aynı anda 3 farklı renkte (multiplex) floresan boyayı tarayabilir, bu sayede tek bir tüpte 3 farklı patojen için viral yükü ve genetik mutasyonları saptayabilir. Hepatit, HIV, HPV, enfeksiyon ve genetik hastalıkların tespitinde en düşük konsantrasyonları bile kaçırmamak için yüksek hassasiyetli fotoelektron çoğaltıcı tüplere sahiptir.'
    },
    specs: [
      { label: { uz: 'Optik kanallar', ru: 'Оптические каналы', tr: 'Optik Kanallar' }, value: '3 xil rangli fluoressensiya' },
      { label: { uz: 'Reaksiya hajmi', ru: 'Объем реакции', tr: 'Reaksiyon Hacmi' }, value: '10-50 mkl' },
      { label: { uz: 'Harorat aniqligi', ru: 'Точность температуры', tr: 'Sıcaklık Hassasiyeti' }, value: '±0.2°C' },
      { label: { uz: 'Termoblok moduli', ru: 'Модуль термоблока', tr: 'Termoblok Modülü' }, value: 'Peltier elementlari' },
      { label: { uz: 'Multiplexing', ru: 'Мультиплексирование', tr: 'Multiplexing' }, value: 'Bir vaqtda 3 ta patogen' },
      { label: { uz: 'Sezuvchanlik', ru: 'Чувствительность', tr: 'Hassasiyet' }, value: '1 kopiyagacha DNK/RNK' }
    ]
  },
  {
    id: 'abbott-c8000',
    name: 'Abbott Architect C8000',
    badge: 'Abbott • USA',
    badgeColor: 'bg-purple-600',
    image: abbottC8000Img,
    shortDesc: {
      uz: 'Yuqori unumdorlikdagi to\'liq avtomatlashtirilgan biokimyoviy analizator. Bir kunda minglab tahlillarni yuqori aniqlik bilan bajaradi.',
      ru: 'Высокопроизводительный полностью автоматизированный биохимический анализатор. Выполняет тысячи анализов в день с высокой точностью.',
      tr: 'Yüksek verimli tam otomatik biyokimyasal analizör. Günde binlerce testi yüksek hassasiyetle gerçekleştirir.'
    },
    category: { uz: 'Biokimyo (Yuksak darajali)', ru: 'Биохимия (Высший уровень)', tr: 'Biyokimya (Yüksek Düzey)' },
    model: 'Architect C8000',
    scientificDetails: {
      uz: 'Abbott Architect C8000 — klinik biokimyoning eng zamonaviy yechimi. Qurilma fotometriya, turbidimetriya va ion-selektiv elektrod (ISE) texnologiyalarini birlashtirib, qon kimyosining 60 dan ortiq ko\'rsatkichini bir vaqtning o\'zida tahlil qilish qobiliyatiga ega. Kuniga 8000 ta testga yetuvchi unumdorligi bilan laboratoriyaning ish yukini sezilarli darajada kamaytiradi. Reagentlarni avtomatik almashtirish tizimi uzluksiz ishlash imkonini beradi. Qurilmadagi integral kalibrlash tizimi har bir namunadan oldin aniqlikni ta\'minlaydi va xatoliklarni minimal darajaga tushiradi.',
      ru: 'Abbott Architect C8000 — самое современное решение в клинической биохимии. Устройство сочетает фотометрию, турбидиметрию и технологию ионоселективных электродов (ISE), что позволяет одновременно анализировать более 60 показателей биохимии крови. Производительность до 8000 тестов в день значительно снижает нагрузку на лабораторию. Система автоматической замены реагентов обеспечивает бесперебойную работу. Встроенная система калибровки гарантирует точность перед каждым образцом.',
      tr: 'Abbott Architect C8000, klinik biyokimyada en modern çözümdür. Cihaz fotometri, türbidimetri ve iyon seçici elektrot (ISE) teknolojilerini birleştirerek aynı anda kan kimyasının 60\'tan fazla parametresini analiz edebilir. Günlük 8000 teste kadar ulaşan verimliliğiyle laboratuvarın iş yükünü önemli ölçüde azaltır. Otomatik reaktif değiştirme sistemi kesintisiz çalışmayı mümkün kılar. Entegre kalibrasyon sistemi her numune öncesinde doğruluğu garanti eder.'
    },
    specs: [
      { label: { uz: 'Texnologiya', ru: 'Технология', tr: 'Teknoloji' }, value: 'Fotometriya + ISE + Turbidimetriya' },
      { label: { uz: 'Unumdorlik', ru: 'Производительность', tr: 'Verimlilik' }, value: '8000 test/kun' },
      { label: { uz: 'Tahlillar soni', ru: 'Количество анализов', tr: 'Analiz Sayısı' }, value: '60+ biokimyoviy ko\'rsatkich' },
      { label: { uz: 'Reagent', ru: 'Реагент', tr: 'Reaktif' }, value: 'Avtomatik almashtirish' },
      { label: { uz: 'Kalibratsiya', ru: 'Калибровка', tr: 'Kalibrasyon' }, value: 'Har bir namunadan oldin' },
      { label: { uz: 'Ishlab chiqaruvchi', ru: 'Производитель', tr: 'Üretici' }, value: 'Abbott Diagnostics (AQSH)' }
    ]
  },
  {
    id: 'coatron-x',
    name: 'Coatron X Koagulyometr',
    badge: 'Teco • Germany',
    badgeColor: 'bg-teal-600',
    image: coatronXImg,
    shortDesc: {
      uz: 'Qon ivishini to\'liq tahlil qiluvchi avtomatik koagulyometr. PT, APTT, Fibrinogen va D-Dimer testlarini tezkor bajaradi.',
      ru: 'Автоматический коагулометр для полного анализа свёртывания крови. Быстро выполняет тесты PT, APTT, Фибриноген и D-Димер.',
      tr: 'Kan pıhtılaşmasını tam analiz eden otomatik koagülometre. PT, APTT, Fibrinojen ve D-Dimer testlerini hızlıca gerçekleştirir.'
    },
    category: { uz: 'Koagulyatsiya (Ivish)', ru: 'Коагуляция (Свёртываемость)', tr: 'Koagülasyon (Pıhtılaşma)' },
    model: 'Coatron X',
    scientificDetails: {
      uz: 'Coatron X — Germaniyaning Teco Medical Instruments kompaniyasi tomonidan ishlab chiqarilgan professional koagulyometr. Qurilma qon plazmasining ivish sistemasini mexano-optik sensor texnologiyasi yordamida o\'rganadi. PT (Protrombin vaqti), APTT (Faollashtirilgan qisman tromboplastin vaqti), Fibrinogen va D-Dimer kabi muhim ko\'rsatkichlarni bir vaqtning o\'zida tahlil qila oladi. Trombozni oldini olish va qon ketishni nazorat qilishda beqiyos ahamiyatga ega. Qurilmaning yuqori aniqlik va sezgirligi tufayli klinik muhimligu yuqori bo\'lgan anomaliyalar ham katta ishonchlilik bilan aniqlanadi.',
      ru: 'Coatron X — профессиональный коагулометр производства немецкой компании Teco Medical Instruments. Прибор исследует систему свертывания плазмы крови с помощью технологии механо-оптических сенсоров. Способен одновременно анализировать важнейшие показатели: PT (протромбиновое время), APTT (АЧТВ), фибриноген и D-димер. Имеет огромное значение для профилактики тромбозов и контроля кровотечений. Благодаря высокой точности и чувствительности даже клинически значимые аномалии выявляются с высокой надежностью.',
      tr: 'Coatron X, Alman Teco Medical Instruments şirketi tarafından üretilen profesyonel bir koagülometredir. Cihaz, kan plazmasının pıhtılaşma sistemini mekanik-optik sensör teknolojisi ile inceler. PT (Protrombin süresi), APTT, Fibrinojen ve D-Dimer gibi kritik göstergeleri aynı anda analiz edebilir. Tromboz önleme ve kanama kontrolünde eşsiz bir öneme sahiptir. Yüksek doğruluk ve hassasiyeti sayesinde klinik önemi yüksek anomaliler bile büyük güvenilirlikle tespit edilir.'
    },
    specs: [
      { label: { uz: 'Sensor texnologiyasi', ru: 'Сенсорная технология', tr: 'Sensör Teknolojisi' }, value: 'Mexano-optik gibrid' },
      { label: { uz: 'Tahlil turlari', ru: 'Виды анализов', tr: 'Analiz Türleri' }, value: 'PT, APTT, FIB, D-Dimer, TT' },
      { label: { uz: 'Avtomatlashtirish', ru: 'Автоматизация', tr: 'Otomasyon' }, value: 'To\'liq avtomat' },
      { label: { uz: 'Ishlab chiqaruvchi', ru: 'Производитель', tr: 'Üretici' }, value: 'Teco Medical (Germaniya)' },
      { label: { uz: 'Harorat nazorati', ru: 'Контроль температуры', tr: 'Sıcaklık Kontrolü' }, value: '37°C stabillashtirilgan' },
      { label: { uz: 'Natija vaqti', ru: 'Время результата', tr: 'Sonuç Süresi' }, value: '3-10 daqiqa' }
    ]
  }
];

// ==========================================
// PHONE COUNTRY DIAL CODES
// ==========================================
const PHONE_COUNTRIES = [
  { code: 'UZ', name: "O'zbekiston",        dialCode: '+998', flag: '🇺🇿', length: 9,  placeholder: '90 123 45 67' },
  { code: 'RU', name: 'Rossiya',             dialCode: '+7',   flag: '🇷🇺', length: 10, placeholder: '912 345 67 89' },
  { code: 'KZ', name: "Qozog'iston",         dialCode: '+7',   flag: '🇰🇿', length: 10, placeholder: '701 234 56 78' },
  { code: 'KG', name: "Qirg'iziston",        dialCode: '+996', flag: '🇰🇬', length: 9,  placeholder: '700 123 456' },
  { code: 'TJ', name: 'Tojikiston',          dialCode: '+992', flag: '🇹🇯', length: 9,  placeholder: '917 12 3456' },
  { code: 'TM', name: 'Turkmaniston',        dialCode: '+993', flag: '🇹🇲', length: 8,  placeholder: '65 123456' },
  { code: 'TR', name: 'Turkiya',             dialCode: '+90',  flag: '🇹🇷', length: 10, placeholder: '505 123 45 67' },
  { code: 'AZ', name: 'Ozarbayjon',          dialCode: '+994', flag: '🇦🇿', length: 9,  placeholder: '50 123 45 67' },
  { code: 'GE', name: 'Gruziya',             dialCode: '+995', flag: '🇬🇪', length: 9,  placeholder: '555 12 34 56' },
  { code: 'AM', name: 'Armaniston',          dialCode: '+374', flag: '🇦🇲', length: 8,  placeholder: '77 123456' },
  { code: 'AF', name: 'Afgʻoniston',         dialCode: '+93',  flag: '🇦🇫', length: 9,  placeholder: '70 123 4567' },
  { code: 'PK', name: 'Pokiston',            dialCode: '+92',  flag: '🇵🇰', length: 10, placeholder: '301 234 5678' },
  { code: 'IN', name: 'Hindiston',           dialCode: '+91',  flag: '🇮🇳', length: 10, placeholder: '98765 43210' },
  { code: 'CN', name: 'Xitoy',               dialCode: '+86',  flag: '🇨🇳', length: 11, placeholder: '131 2345 6789' },
  { code: 'JP', name: 'Yaponiya',            dialCode: '+81',  flag: '🇯🇵', length: 10, placeholder: '90 1234 5678' },
  { code: 'KR', name: 'Janubiy Koreya',      dialCode: '+82',  flag: '🇰🇷', length: 10, placeholder: '10 1234 5678' },
  { code: 'AE', name: 'BAA',                 dialCode: '+971', flag: '🇦🇪', length: 9,  placeholder: '50 123 4567' },
  { code: 'SA', name: 'Saudiya Arabistoni',  dialCode: '+966', flag: '🇸🇦', length: 9,  placeholder: '50 123 4567' },
  { code: 'IR', name: 'Eron',                dialCode: '+98',  flag: '🇮🇷', length: 10, placeholder: '912 345 6789' },
  { code: 'IQ', name: 'Iroq',                dialCode: '+964', flag: '🇮🇶', length: 10, placeholder: '790 123 4567' },
  { code: 'IL', name: 'Isroil',              dialCode: '+972', flag: '🇮🇱', length: 9,  placeholder: '50 123 4567' },
  { code: 'JO', name: 'Iordaniya',           dialCode: '+962', flag: '🇯🇴', length: 9,  placeholder: '79 012 3456' },
  { code: 'KW', name: 'Quvayt',              dialCode: '+965', flag: '🇰🇼', length: 8,  placeholder: '5012 3456' },
  { code: 'QA', name: 'Qatar',               dialCode: '+974', flag: '🇶🇦', length: 8,  placeholder: '3312 3456' },
  { code: 'BH', name: 'Bahrayn',             dialCode: '+973', flag: '🇧🇭', length: 8,  placeholder: '3600 0000' },
  { code: 'OM', name: 'Ummon',               dialCode: '+968', flag: '🇴🇲', length: 8,  placeholder: '9212 3456' },
  { code: 'YE', name: 'Yaman',               dialCode: '+967', flag: '🇾🇪', length: 9,  placeholder: '712 345 678' },
  { code: 'LB', name: 'Livan',               dialCode: '+961', flag: '🇱🇧', length: 8,  placeholder: '71 123 456' },
  { code: 'SY', name: 'Suriya',              dialCode: '+963', flag: '🇸🇾', length: 9,  placeholder: '944 567 890' },
  { code: 'EG', name: 'Misr',                dialCode: '+20',  flag: '🇪🇬', length: 10, placeholder: '100 123 4567' },
  { code: 'MA', name: 'Marokash',            dialCode: '+212', flag: '🇲🇦', length: 9,  placeholder: '612 345 678' },
  { code: 'DZ', name: 'Jazoir',              dialCode: '+213', flag: '🇩🇿', length: 9,  placeholder: '551 234 567' },
  { code: 'TN', name: 'Tunis',               dialCode: '+216', flag: '🇹🇳', length: 8,  placeholder: '20 123 456' },
  { code: 'LY', name: 'Liviya',              dialCode: '+218', flag: '🇱🇾', length: 9,  placeholder: '912 345 678' },
  { code: 'ZA', name: 'Janubiy Afrika',      dialCode: '+27',  flag: '🇿🇦', length: 9,  placeholder: '71 123 4567' },
  { code: 'NG', name: 'Nigeriya',            dialCode: '+234', flag: '🇳🇬', length: 10, placeholder: '802 345 6789' },
  { code: 'KE', name: 'Keniya',              dialCode: '+254', flag: '🇰🇪', length: 9,  placeholder: '712 345 678' },
  { code: 'GH', name: 'Gana',               dialCode: '+233', flag: '🇬🇭', length: 9,  placeholder: '244 123 456' },
  { code: 'ET', name: 'Efiopiya',            dialCode: '+251', flag: '🇪🇹', length: 9,  placeholder: '911 234 567' },
  { code: 'US', name: 'AQSH',               dialCode: '+1',   flag: '🇺🇸', length: 10, placeholder: '212 345 6789' },
  { code: 'CA', name: 'Kanada',              dialCode: '+1',   flag: '🇨🇦', length: 10, placeholder: '416 123 4567' },
  { code: 'MX', name: 'Meksika',             dialCode: '+52',  flag: '🇲🇽', length: 10, placeholder: '55 1234 5678' },
  { code: 'BR', name: 'Braziliya',           dialCode: '+55',  flag: '🇧🇷', length: 11, placeholder: '11 9 1234 5678' },
  { code: 'AR', name: 'Argentina',           dialCode: '+54',  flag: '🇦🇷', length: 10, placeholder: '11 2345 6789' },
  { code: 'CL', name: 'Chili',              dialCode: '+56',  flag: '🇨🇱', length: 9,  placeholder: '9 1234 5678' },
  { code: 'CO', name: 'Kolumbiya',           dialCode: '+57',  flag: '🇨🇴', length: 10, placeholder: '312 345 6789' },
  { code: 'VE', name: 'Venesuela',           dialCode: '+58',  flag: '🇻🇪', length: 10, placeholder: '412 123 4567' },
  { code: 'PE', name: 'Peru',               dialCode: '+51',  flag: '🇵🇪', length: 9,  placeholder: '912 345 678' },
  { code: 'GB', name: 'Buyuk Britaniya',     dialCode: '+44',  flag: '🇬🇧', length: 10, placeholder: '7911 123456' },
  { code: 'DE', name: 'Germaniya',           dialCode: '+49',  flag: '🇩🇪', length: 11, placeholder: '151 12345678' },
  { code: 'FR', name: 'Fransiya',            dialCode: '+33',  flag: '🇫🇷', length: 9,  placeholder: '6 12 34 56 78' },
  { code: 'IT', name: 'Italiya',             dialCode: '+39',  flag: '🇮🇹', length: 10, placeholder: '312 345 6789' },
  { code: 'ES', name: 'Ispaniya',            dialCode: '+34',  flag: '🇪🇸', length: 9,  placeholder: '612 345 678' },
  { code: 'NL', name: 'Niderlandiya',        dialCode: '+31',  flag: '🇳🇱', length: 9,  placeholder: '6 12345678' },
  { code: 'BE', name: 'Belgiya',             dialCode: '+32',  flag: '🇧🇪', length: 9,  placeholder: '471 12 34 56' },
  { code: 'SE', name: 'Shvetsiya',           dialCode: '+46',  flag: '🇸🇪', length: 9,  placeholder: '70 123 45 67' },
  { code: 'NO', name: 'Norvegiya',           dialCode: '+47',  flag: '🇳🇴', length: 8,  placeholder: '406 12 345' },
  { code: 'DK', name: 'Daniya',              dialCode: '+45',  flag: '🇩🇰', length: 8,  placeholder: '20 12 34 56' },
  { code: 'FI', name: 'Finlandiya',          dialCode: '+358', flag: '🇫🇮', length: 9,  placeholder: '40 123 4567' },
  { code: 'CH', name: 'Shveytsariya',        dialCode: '+41',  flag: '🇨🇭', length: 9,  placeholder: '78 123 45 67' },
  { code: 'AT', name: 'Avstriya',            dialCode: '+43',  flag: '🇦🇹', length: 10, placeholder: '664 123456' },
  { code: 'PL', name: 'Polsha',              dialCode: '+48',  flag: '🇵🇱', length: 9,  placeholder: '512 345 678' },
  { code: 'CZ', name: 'Chexiya',             dialCode: '+420', flag: '🇨🇿', length: 9,  placeholder: '601 234 567' },
  { code: 'HU', name: 'Vengriya',            dialCode: '+36',  flag: '🇭🇺', length: 9,  placeholder: '20 123 4567' },
  { code: 'RO', name: 'Ruminiya',            dialCode: '+40',  flag: '🇷🇴', length: 9,  placeholder: '712 345 678' },
  { code: 'BG', name: 'Bolgariya',           dialCode: '+359', flag: '🇧🇬', length: 9,  placeholder: '87 123 4567' },
  { code: 'HR', name: 'Xorvatiya',           dialCode: '+385', flag: '🇭🇷', length: 9,  placeholder: '91 234 5678' },
  { code: 'RS', name: 'Serbiya',             dialCode: '+381', flag: '🇷🇸', length: 9,  placeholder: '60 1234567' },
  { code: 'SK', name: 'Slovakiya',           dialCode: '+421', flag: '🇸🇰', length: 9,  placeholder: '912 345 678' },
  { code: 'SI', name: 'Sloveniya',           dialCode: '+386', flag: '🇸🇮', length: 8,  placeholder: '31 234 567' },
  { code: 'UA', name: 'Ukraina',             dialCode: '+380', flag: '🇺🇦', length: 9,  placeholder: '50 123 45 67' },
  { code: 'BY', name: 'Belarus',             dialCode: '+375', flag: '🇧🇾', length: 9,  placeholder: '29 123 45 67' },
  { code: 'MD', name: 'Moldova',             dialCode: '+373', flag: '🇲🇩', length: 8,  placeholder: '62 012 345' },
  { code: 'LT', name: 'Litva',               dialCode: '+370', flag: '🇱🇹', length: 8,  placeholder: '61 234 567' },
  { code: 'LV', name: 'Latviya',             dialCode: '+371', flag: '🇱🇻', length: 8,  placeholder: '21 234 567' },
  { code: 'EE', name: 'Estoniya',            dialCode: '+372', flag: '🇪🇪', length: 8,  placeholder: '5123 4567' },
  { code: 'PT', name: 'Portugaliya',         dialCode: '+351', flag: '🇵🇹', length: 9,  placeholder: '912 345 678' },
  { code: 'GR', name: 'Gretsiya',            dialCode: '+30',  flag: '🇬🇷', length: 10, placeholder: '694 123 4567' },
  { code: 'AU', name: 'Avstraliya',          dialCode: '+61',  flag: '🇦🇺', length: 9,  placeholder: '412 345 678' },
  { code: 'NZ', name: 'Yangi Zelandiya',     dialCode: '+64',  flag: '🇳🇿', length: 9,  placeholder: '21 234 5678' },
  { code: 'SG', name: 'Singapur',            dialCode: '+65',  flag: '🇸🇬', length: 8,  placeholder: '8123 4567' },
  { code: 'MY', name: 'Malayziya',           dialCode: '+60',  flag: '🇲🇾', length: 9,  placeholder: '12 345 6789' },
  { code: 'TH', name: 'Tailand',             dialCode: '+66',  flag: '🇹🇭', length: 9,  placeholder: '81 234 5678' },
  { code: 'VN', name: 'Vyetnam',             dialCode: '+84',  flag: '🇻🇳', length: 9,  placeholder: '91 234 5678' },
  { code: 'ID', name: 'Indoneziya',          dialCode: '+62',  flag: '🇮🇩', length: 10, placeholder: '812 3456 789' },
  { code: 'PH', name: 'Filippin',            dialCode: '+63',  flag: '🇵🇭', length: 10, placeholder: '917 123 4567' },
  { code: 'BD', name: 'Bangladesh',          dialCode: '+880', flag: '🇧🇩', length: 10, placeholder: '1812 345678' },
  { code: 'LK', name: 'Shri-Lanka',          dialCode: '+94',  flag: '🇱🇰', length: 9,  placeholder: '71 234 5678' },
  { code: 'NP', name: 'Nepal',               dialCode: '+977', flag: '🇳🇵', length: 10, placeholder: '984 123 4567' },
  { code: 'MM', name: 'Myanma',              dialCode: '+95',  flag: '🇲🇲', length: 9,  placeholder: '9 2123 4567' },
  { code: 'KH', name: 'Kambodja',            dialCode: '+855', flag: '🇰🇭', length: 9,  placeholder: '12 345 678' },
  { code: 'MN', name: "Mo'g\'uliston",        dialCode: '+976', flag: '🇲🇳', length: 8,  placeholder: '8812 3456' },
];




// ==========================================
export const MEDICAL_FIELDS_METADATA: Record<string, { uz: string; ru: string; iconName: string }> = {
  all: { uz: 'Barcha tahlillar', ru: 'Все анализы', iconName: 'Microscope' },
  packages: { uz: 'Sogʻlomlashtirish paketlari', ru: 'Профилактические пакеты', iconName: 'Sparkles' },
  biochemistry: { uz: 'Biokimyo tahlillari', ru: 'Биохимические анализы', iconName: 'Activity' },
  hematology: { uz: 'Gematologiya', ru: 'Гематологические тесты', iconName: 'Activity' },
  hormones: { uz: 'Gormonlar va Onkomarkerlar', ru: 'Гормоны и Онкомаркеры', iconName: 'Award' },
  coagulogram: { uz: 'Koagulogramma (Ivish)', ru: 'Коагулограмма (Свертываемость)', iconName: 'Clock' },
  infections: { uz: 'Infeksiyalar skriningi', ru: 'Скрининг на инфекции', iconName: 'ShieldCheck' },
  blood_groups: { uz: 'Qon guruhi va Rezus-faktor', ru: 'Группа крови и резус-фактор', iconName: 'Heart' },
  pcr: { uz: 'Zudlik bilan PZR tahlillari', ru: 'Высокоточные ПЦР исследования', iconName: 'Cpu' },
  microbiology: { uz: 'Mikrobiologiya va Bakteriologiya', ru: 'Микробиология и Бактериология', iconName: 'Microscope' },
  allergy: { uz: 'Allergiya va Immunoglobulinlar', ru: 'Аллергологические тесты', iconName: 'Activity' },
  immunology: { uz: 'Immunologik holat', ru: 'Иммунологический статус', iconName: 'ShieldCheck' },
  genetics: { uz: 'Genetika va DNK', ru: 'Генетика и ДНК-исследования', iconName: 'Cpu' },
  urine: { uz: 'Siydik tahlillari', ru: 'Анализы мочи', iconName: 'FileText' },
  stool: { uz: 'Ahlat tahlillari (Kala)', ru: 'Анализы кала', iconName: 'FileText' },
  pregnancy: { uz: 'Homiladorlik va HCG', ru: 'Диагностика беременности', iconName: 'Heart' },
  cardiology: { uz: 'Kardiologik tahlillar (Yurak)', ru: 'Кардиологические маркеры', iconName: 'Activity' },
  diabetes: { uz: 'Diabet va Glyukoza', ru: 'Диагностика диабета', iconName: 'Activity' },
  kidney: { uz: 'Buyrak va Siydik yoʻllari', ru: 'Почечные пробы', iconName: 'FileText' },
  liver: { uz: 'Jigar faoliyati (Pechenochnie)', ru: 'Печеночные пробы', iconName: 'Activity' },
  lipid_profile: { uz: 'Lipid profili (Xolesterin)', ru: 'Липидный профиль (Холестерин)', iconName: 'Activity' },
  vitamin: { uz: 'Vitaminlar miqdori (D, B12)', ru: 'Исследования витаминов', iconName: 'Sparkles' },
  tumor_markers: { uz: 'Oʻsma markerlari (Onkomarkerlar)', ru: 'Онкомаркеры и опухоли', iconName: 'Award' }
};

export function classifyTest(test: TestItem): string[] {
  const fields: string[] = [];
  const nameUz = (test.name?.uz || '').toLowerCase();
  const nameRu = (test.name?.ru || '').toLowerCase();
  const descUz = (test.desc?.uz || '').toLowerCase();
  const descRu = (test.desc?.ru || '').toLowerCase();
  const text = `${nameUz} ${nameRu} ${descUz} ${descRu}`;

  // Direct categories matching database
  if (test.category === 'packages') fields.push('packages');
  if (test.category === 'biochemistry') fields.push('biochemistry');
  if (test.category === 'hematology') fields.push('hematology');
  if (test.category === 'hormones') fields.push('hormones');
  if (test.category === 'coagulogram') fields.push('coagulogram');
  if (test.category === 'infections') fields.push('infections');
  if (test.category === 'blood_groups') fields.push('blood_groups');

  // Keyword-based classification matching user requirement list
  if (text.includes('pcr') || text.includes('пцр') || text.includes('полимераз') || text.includes('polimeraz') || text.includes('пзр')) {
    fields.push('pcr');
  }
  if (text.includes('posev') || text.includes('посев') || text.includes('bakter') || text.includes('bacter') || text.includes('mikrobi') || text.includes('microbi') || text.includes('kultur') || text.includes('bakteriyologik')) {
    fields.push('microbiology');
  }
  if (text.includes('allerg') || text.includes('ige') || text.includes('аллерг') || text.includes('аллерген')) {
    fields.push('allergy');
  }
  if (text.includes('immun') || text.includes('иммун') || text.includes('иммуноблот')) {
    fields.push('immunology');
  }
  if (text.includes('genet') || text.includes('генети') || text.includes('dnk') || text.includes('rnk') || text.includes('dna') || text.includes('rna') || text.includes('nasl') || text.includes('гены')) {
    fields.push('genetics');
  }
  if (text.includes('moch') || text.includes('moche') || text.includes('peshob') || text.includes('nechipo') || text.includes('моч') || text.includes('сийик')) {
    fields.push('urine');
  }
  if (text.includes('kala') || text.includes('axlat') || text.includes(' feces ') || text.includes(' stool ') || text.includes('кал')) {
    fields.push('stool');
  }
  if (text.includes('pregnancy') || text.includes('homilador') || text.includes('hcg') || text.includes('xgch') || text.includes('хгч') || text.includes('estriol') || text.includes('progesteron') || text.includes('хорион')) {
    fields.push('pregnancy');
  }
  if (text.includes('kardio') || text.includes('cardio') || text.includes('yurak') || text.includes('serdce') || text.includes('troponin') || text.includes('pro-bnp') || text.includes('кардио') || text.includes('миоглобин')) {
    fields.push('cardiology');
  }
  if (text.includes('diabet') || text.includes('glyuk') || text.includes('gluc') || text.includes('saxar') || text.includes('shakar') || text.includes('insul') || text.includes('hba1c') || text.includes('диабет') || text.includes('глюкоз')) {
    fields.push('diabetes');
  }
  if (text.includes('pochk') || text.includes('kreatinin') || text.includes('mochevina') || text.includes('kidney') || text.includes('renal') || text.includes('buyrak') || text.includes('cystat') || text.includes('tsistat') || text.includes('почк') || text.includes('креатинин') || text.includes('мочевин')) {
    fields.push('kidney');
  }
  if (text.includes('pechen') || text.includes('alt') || text.includes('ast') || text.includes('bilirubin') || text.includes('jigar') || text.includes('liver') || text.includes('gepat') || text.includes('печен') || text.includes('билирубин')) {
    fields.push('liver');
  }
  if (text.includes('lipid') || text.includes('xolest') || text.includes('cholest') || text.includes('ldl') || text.includes('hdl') || text.includes('triglic') || text.includes('tg') || text.includes('липид') || text.includes('холест') || text.includes('триглицерид')) {
    fields.push('lipid_profile');
  }
  if (text.includes('vitamin') || text.includes('vit ') || text.includes('витамин') || text.includes('каротин') || text.includes('фолат')) {
    fields.push('vitamin');
  }
  if (text.includes('tumor') || text.includes('onko') || text.includes('psa') || text.includes('ca-') || text.includes('ca 1') || text.includes('ca 2') || text.includes('ca 5') || text.includes('carcino') || text.includes('cancer') || text.includes('rak') || text.includes('онко') || text.includes('пса') || text.includes('альфа-фетопротеин')) {
    fields.push('tumor_markers');
  }

  // Fallback to avoid empty
  if (fields.length === 0) {
    fields.push('biochemistry');
  }

  return fields;
}

const KaniLabLogo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <img 
      src={kaniLabLogoImg} 
      alt="KaniLab Logo" 
      className={`${className} object-contain rounded-lg`}
      referrerPolicy="no-referrer"
    />
  );
};

// ==========================================
// GALLERY DATA
// ==========================================
const GALLERY_PHOTOS = [
  {
    id: 'lab1',
    title: { uz: 'Roche cobas® 8000 tizimi', ru: 'Система Roche cobas® 8000' },
    desc: { uz: 'Toʻliq avtomatlashtirilgan bioximiya va immunoximiya liniyasi.', ru: 'Швейцарский роботизированный экспресс-анализатор.' },
    tag: 'Biochemistry'
  },
  {
    id: 'lab2',
    title: { uz: 'Sysmex XN-3100 gematologiya', ru: 'Гематологическая линия Sysmex XN-3100' },
    desc: { uz: 'Yaponiya texnologiyasi asosida qon hujayralarining 3D tahlili.', ru: 'Японская станция цифрового анализа клеток крови с ИИ-валидацией.' },
    tag: 'Hematology'
  },
  {
    id: 'lab3',
    title: { uz: 'Molekulyar PSR Boks', ru: 'Стерильный бокс ПЦР-диагностики' },
    desc: { uz: 'RNK/DNK tahlillari uchun ISO 5 toifadagi toza laminar xona.', ru: 'Абсолютная стерильность по международным стандартам чистоты ISO.' },
    tag: 'Molecular'
  }
];

// ==========================================
// TRANSLATION DICTIONARY
// ==========================================

const TRANSLATIONS = {
  uz: {
    navHome: 'Bosh sahifa',
    navAbout: 'Laboratoriya haqida',
    navAboutUs: 'Biz haqimizda',
    navAboutHistory: 'Bizning tariximiz',
    navAboutValues: 'Bizning qadriyatlarimiz',
    navAboutMission: 'Bizning maqsad va vazifalarimiz',
    navServices: 'Tahlillar',
    navTeam: 'Jamoamiz',
    deptManagement: 'Rahbariyat',
    deptLab: 'Laboratoriya va Diagnostika',
    deptFinance: 'Buxgalteriya va Moliya',
    deptService: 'Servis va Qo‘llab-quvvatlash',
    deptAdmin: 'Ma’muriy bo‘limlar',
    navFAQ: 'Savol-javoblar',
    navContact: 'Kontaktlar',
    navBranches: 'Filiallar',
    navContactMain: 'Markaz bilan aloqa',
    btnBook: 'Navbat olish',
    btnAnalyses: 'Tahlillar katalogi',
    btnContactUs: 'Biz bilan bogʻlanish',
    badgeGen: 'Xalqaro hamkorlik & sifat',
    heroHeadline: 'O‘zbekiston, Turkiya va Niderlandiya tajribasi',
    heroSub: '2019-yildan buyon xalqaro hamkorlik va ilg‘or robotlashtirilgan diagnostika tizimlari orqali salomatligingiz xizmatida.',
    statPatients: 'Muvaffaqiyatli diagnostika',
    statTests: 'Tahlillar turi',
    statAccuracy: 'Aniqlik darajasi',
    statExperience: 'Yillik tajriba',
    pcrResult: 'Tezkor PSR Tahlili',
    negative: 'MANFIY',
    confirmed: 'Tasdiqlandi 14:45',
    dnaReport: 'DNK Hisoboti',
    ready: 'Koʻrib chiqishga tayyor',
    aboutTitle: 'KANI-LAB Haqida',
    aboutSub: 'Xalqaro standartlar darajasidagi tibbiy laboratoriya',
    aboutText1: 'KANILAB - Surxondaryo viloyatidagi eng ilgʻor sinov standartlarini zamonaviy diagnostika tizimlari bilan birlashtirgan premium klinik laboratoriyadir. Bizning Termiz shahridagi bosh laboratoriyamiz jahon yetakchilari - Roche, Sysmex va Abbott kabi eng soʻnggi robotlashtirilgan analizatorlar bilan jihozlangan.',
    aboutText2: 'Biz ISO 15189 xalqaro standartlariga muvofiq ishlaymiz va Surxondaryo viloyatining barcha tumanlarida oʻz filiallarimizga egamiz hamda Termiz shahridagi yetakchi shifoxonalar bilan faol hamkorlik qilamiz. Har bir namuna mutlaqo xavfsiz, barkodlangan va ikki bosqichli shifokorlar nazorati ostida tekshiriladi.',
    tech1: 'Avtomatlashtirilgan tahlillar',
    tech2: 'Robotlashtirilgan barkod tracking',
    tech3: 'Toʻliq steril va ogʻriqsiz namuna olish',
    tech4: 'ISO 15189 xalqaro sertifikati',
    serviceTitle: 'Diagnostika Dasturlari',
    serviceSub: 'Sizning salomatligingiz uchun premium laboratoriya tahlillari toʻplami',
    searchPlaceholder: 'Tahlillarni izlash (masalan, qon, gormon, PSR...)',
    categoryAll: 'Barchasi',
    categoryPackages: 'Diagnostik paketlar',
    categoryHematology: 'Gematologiya',
    categoryBiochem: 'Biokimyo',
    categoryHormones: 'Gormonlar va onkomarkerlar',
    categoryInfections: 'Infeksion tadqiqotlar',
    categoryCoagulogram: 'Koagulogramma',
    categoryBloodGroups: 'Qon guruhi',
    categoryAllergy: 'Allergiya panellari',
    categoryPcr: 'Molekulyar Genetik (PSR)',
    categoryUrine: 'Siydik tahlillari',
    categoryBacteriology: 'Bakteriologik tadqiqotlar',
    categoryGeneralClinical: 'Umumklinik tahlillar',
    fastingRequired: 'Och qoringa topshiriladi',
    fastingNoNeeded: 'Parhez talab qilinmaydi',
    resultsIn: 'Natija muddati',
    price: 'Narxi',
    addToCart: 'Tanlash',
    selected: 'Tanlandi',
    cartTotal: 'Jami tanlangan tahlillar',
    cartEmpty: 'Hech qanday tahlil tanlanmagan. Roʻyxatdan kerakli tahlillarni tanlang.',
    btnProceedBooking: 'Shaxsiy navbatni band qilish',
    aiAssistantTitle: 'Aqlli Diagnostika Maslahatchisi',
    aiAssistantSub: 'Klinik belgilar (simptomlar) bo‘yicha tahlillarni tavsiya qilish',
    aiWelcome: 'Salom! Men KANILAB diagnostika maslahatchisiman. Oʻzingizda kuzatilayotgan asosiy belgilarni (simptomlarni) tanlang va bizning robotlashtirilgan tizimimiz sizga eng muhim tahlillar roʻyxatini shakllantirib beradi:',
    symptomFatigue: 'Doimiy charchoq va holsizlik',
    symptomAllergy: 'Mavsumiy allergiya va toshmalar',
    symptomBiohack: 'Fitnes va bioxaking (Sogʻliq monitoringi)',
    symptomCheckup: 'Yillik umumiy profilaktik koʻrik',
    aiReplyFatigue: 'Doimiy charchoq va quvvatsizlik koʻpincha Vitamin D/B12 tanqisligi, qalqonsimon bez muammolari (TSH) yoki yashirin anemiya bilan bogʻliq boʻladi. Quyidagi tahlillarni topshirishni tavsiya qilaman:',
    aiReplyAllergy: 'Mavsumiy burun bitishi, toshmalar va koʻz yoshlanishi uchun allergik reaksiyani qoʻzgʻatuvchi antigenlarni aniqlash zarur. Sizga quyidagi panel mos keladi:',
    aiReplyBiohack: 'Sizning jismoniy chidamliligingiz, gormonal balansingiz va umumiy metabolizmingizni optimallashtirish uchun quyidagi premium tahlillar majmuasi tavsiya etiladi:',
    aiReplyCheckup: 'Sogʻlom hayot kechirish va kasalliklarni erta aniqlash uchun yiliga bir marta quyidagi tahlillardan oʻtish tibbiyot dunyosida oltin standart hisoblanadi:',
    addSuggested: 'Tavsiya qilingan tahlillarni tanlash',
    processTitle: 'Tahlil Topshirish Jarayoni',
    processSub: 'Bizda har bir qadam raqamlashtirilgan va xavfsiz',
    step1Title: 'Raqamli roʻyxatdan oʻtish',
    step1Desc: 'Saytimizda yoki Telegram-bot orqali navbatingizni va tahlillarni oldindan belgilang.',
    step2Title: 'Steril va ogʻriqsiz namuna',
    step2Desc: 'Premium tibbiy kabinetimizda bir martalik vakuum tizimlar yordamida tezkor namuna olish.',
    step3Title: 'Avtomatlashtirilgan tahlil',
    step3Desc: 'Namuna robotlashtirilgan transport tizimi orqali analizatorga yuboriladi, xatolik ehtimoli 0%.',
    step4Title: 'Raqamli hisobot',
    step4Desc: 'Natijalar tayyor boʻlishi bilan SMS va Telegram orqali shifrlangan PDF hisobot yuboriladi.',
    docTitle: 'Bizning Jamoamiz',
    docSub: 'Kani-Lab professional jamoasi',
    galleryTitle: 'Bizning Ilmiy Laboratoriyamiz',
    gallerySub: 'Xalqaro ISO standartlariga mos keluvchi robotlashgan klinikamizdan fotolavhalar',
    faqTitle: 'Koʻp beriladigan savollar',
    faqSub: 'Tahlillar va KANILAB xizmatlariga doir barcha maʼlumotlar',
    contactTitle: 'Sizni Premium Markazimizda kutamiz',
    contactSub: 'Biz bilan bogʻlaning yoki Termiz shahridagi bosh laboratoriyamizga tashrif buyuring',
    contactFormTitle: 'Savollaringiz bormi? Shifokor bilan bogʻlaning',
    formName: 'Toʻliq ismingiz',
    formPhone: 'Telefon raqamingiz',
    formMsg: 'Xabar yoki klinik belgilaringiz',
    formSubmit: 'Soʻrov yuborish',
    formSuccess: 'Sizning arizangiz muvaffaqiyatli qabul qilindi. 15 daqiqa ichida tibbiy maslahatchimiz siz bilan bogʻlanadi.',
    address: 'Surxondaryo viloyati, Termiz sh., Alisher Navoiy koʻchasi, 26A-uy (Moʻljal: Eski Koʻz Kasalxonasi binosi ichida)',
    workingHours: 'Dush - Shanba: 08:00 - 17:00 | Yakshanba: Yopilgan',
    footerCopyright: '© 2026 KANILAB CLINICAL CORP. BARCHA HUQUQLAR HIMOYA QILINGAN.',
    modalTitle: 'Raqamli Navbat Band Qilish',
    modalStep1: 'Tahlillar',
    modalStep2: 'Maʼlumotlar',
    modalStep3: 'Sana va Vaqt',
    modalStep4: 'Chipta',
    selectedTestsLabel: 'Tanlangan tahlillar roʻyxati',
    noTestsSelectedModal: 'Siz hali tahlil tanlamadingiz. Quyidagi tahlillarni chiptangizga qoʻshishingiz mumkin:',
    inputName: 'Ism va Familiyangiz (Pasport boʻyicha)',
    inputEmail: 'Elektron pochta manzilingiz (PDF natijalar uchun)',
    selectBranch: 'Klinika filialini tanlang',
    branch1: 'Termiz Markaziy Laboratoriyasi (Alisher Navoiy koʻchasi)',
    branch2: 'Denov tumani filiali (Sharaf Rashidov koʻchasi)',
    branch3: 'Sherobod tumani filiali (Ipak Yoʻli koʻchasi)',
    selectDate: 'Tashrif sanasini tanlang',
    selectTime: 'Qulay vaqt oraligʻini tanlang',
    btnBack: 'Orqaga',
    btnNext: 'Keyingisi',
    btnConfirm: 'Navbatni tasdiqlash',
    bookingProcessing: 'Sizga raqamli chipta tayyorlanmoqda. Diagnostika bazasi yangilanmoqda...',
    ticketTitle: 'ELEKTRON KLINIK PASSPORT',
    ticketSub: 'KANILAB Premium Diagnostics',
    ticketID: 'Chipta raqami',
    patient: 'Bemor',
    date: 'Tashrif sanasi',
    time: 'Vaqt',
    location: 'Filial',
    preparation: 'Tahlil topshirishga tayyorgarlik',
    prepText: 'Iltimos, tahlil topshirishdan 8-12 soat oldin ovqatlanmang. Faqat toza gazsiz suv ichish mumkin. Oʻzingiz bilan shaxsingizni tasdiqlovchi hujjatni oling.',
    btnPrint: 'Chiptani saqlash / Chop etish',
    btnDone: 'Yopish',
    viewAll: 'Barcha tahlillar',
    reviewsTitle: 'Mijozlarimiz fikrlari',
    rating: 'Baho',
    reviews: [
      {
        name: 'Dilnoza Umarova',
        role: 'Bemor',
        review: 'Kani-Lab dagi xizmat juda ham aʼlo darajada! Navbatlarsiz, hamma narsa elektron va tezkor. Tahlil natijalari 4 soatda Telegram orqali keldi. Juda qulay va zamonaviy.'
      },
      {
        name: 'Sardor Rahimov',
        role: 'Doimiy mijoz',
        review: 'Klinikada tozalik va xavfsizlik yuqori darajada. Hamshiralar qoʻli juda yengil ekan, namuna olishda mutlaqo ogʻriq sezmadim. Professional jamoaga rahmat.'
      },
      {
        name: 'Malika Karimova',
        role: 'Bemor',
        review: 'Semptomlar bo‘yicha tahlil tanlash xizmatidan foydalandim. Hammasi juda oson, aniq va tushunarli boʻldi. Har bir bemorga premium yondashuv sezilib turadi.'
      }
    ],
    items: [
      {
        q: '1. Tahlil natijalarini qanday va qayerdan olsam bo‘ladi?',
        a: 'Natijalaringiz tayyor bo‘lishi bilan sizga Telegram botimiz orqali avtomatik xabar keladi. Natijalarni ushbu bot orqali yoki laboratoriyamizga tashrif buyurib, qog‘oz shaklida olishingiz mumkin.'
      },
      {
        q: '2. Tahlil topshirishdan oldin nimalarga e’tibor berish kerak?',
        a: 'Aniq natijalar uchun tahlil turiga qarab (ayniqsa, biokimyoviy tahlillar) och qoringa kelish tavsiya etiladi. Shifokorimiz sizga ro‘yxatdan o‘tish jarayonida tahlil turi bo‘yicha aniq tayyorgarlik ko‘rsatmalarini beradi.'
      },
      {
        q: '3. KANILAB ma’lumotlar maxfiyligini qanday ta’minlaydi?',
        a: 'Barcha mijozlar ma’lumotlari va tahlil natijalari shifrlangan tizimda saqlanadi. Biz xalqaro ISO 15189 standartlariga rioya qilamiz, bu esa ma’lumotlar xavfsizligi va maxfiyligini to‘liq kafolatlaydi.'
      },
      {
        q: '4. Nega sizning laboratoriyangizni tanlashim kerak?',
        a: 'Biz "College of American Pathologists" (CAP) xalqaro tashkilotining sifat nazorati dasturlarida ishtirok etamiz va dunyodagi eng ilg‘or Roche, Sysmex va Abbott laboratoriya tizimlaridan foydalanamiz. Bizning har bir namuna ikki bosqichli shifokorlar nazorati ostida tekshiriladi.'
      },
      {
        q: '5. Laboratoriyangizda qaysi turdagi tahlillarni topshirish mumkin?',
        a: 'Biz biokimyoviy, immunologik, gormonal, mikrobiologik va PCR tahlillarining keng spektrini taklif etamiz. Xizmatlarimiz haqica batafsil ma’lumotni saytimizning "Xizmatlar" (Services) bo‘limidan topishingiz mumkin.'
      },
      {
        q: '6. Tahlil natijalari tezligi qanday?',
        a: 'Biz tezkorlikka katta e’tibor qaratamiz: biokimyoviy tahlillar 2 soatgacha, gormonal va immunologik tahlillar esa 4 soatgacha muddatda tayyor bo‘ladi. Murakkabroq tahlillar (PCR yoki mikrobiologik) uchun aniq muddatlar tahlil turiga qarab 3 kundan 10 kungacha davom etishi mumkin.'
      }
    ]
  },
  ru: {
    navHome: 'Главная',
    navAbout: 'О лаборатории',
    navAboutUs: 'О нас',
    navAboutHistory: 'Наша история',
    navAboutValues: 'Наши ценности',
    navAboutMission: 'Наши цели и задачи',
    navServices: 'Анализы',
    navTeam: 'Наша команда',
    deptManagement: 'Руководство',
    deptLab: 'Лаборатория и диагностика',
    deptFinance: 'Бухгалтерия и финансы',
    deptService: 'Сервис и поддержка',
    deptAdmin: 'Административные отделы',
    navFAQ: 'Вопросы',
    navContact: 'Контакты',
    navBranches: 'Филиалы',
    navContactMain: 'Связьс центром',
    btnBook: 'Запись на прием',
    btnAnalyses: 'Каталог анализов',
    btnContactUs: 'Связаться с нами',
    badgeGen: 'Международное партнерство & качество',
    heroHeadline: 'Опыт Узбекистана, Турции и Нидерландов',
    heroSub: 'На службе вашего здоровья с 2019 года благодаря международному сотрудничеству и передовым роботизированным системам диагностики.',
    statPatients: 'Успешных диагностик',
    statTests: 'Видов тестов',
    statAccuracy: 'Точность результатов',
    statExperience: 'Лет опыта',
    pcrResult: 'Срочный ПЦР Тест',
    negative: 'ОТРИЦАТЕЛЬНЫЙ',
    confirmed: 'Подтверждено 14:45',
    dnaReport: 'ДНК Отчет',
    ready: 'Готов к просмотру',
    aboutTitle: 'О KANI-LAB',
    aboutSub: 'Медицинская лаборатория мирового уровня',
    aboutText1: 'KANILAB — инновационная клинико-диагностическая лаборатория премиум-класса в Сурхандарьинской области. Наш главный центр в городе Термезе оснащен лучшими роботизированными комплексами от Roche, Sysmex и Abbott.',
    aboutText2: 'Мы работаем по стандартам ISO 15189 и имеем филиалы во всех районах Сурхандарьинской области, а также активно сотрудничаем с больницами города Термеза. Каждая пробирка снабжается уникальным штрих-кодом, исключающим человеческий фактор на всех этапах анализа.',
    tech1: 'Автоматизированная диагностика',
    tech2: 'Роботизированный трекинг проб',
    tech3: 'Безболезненный вакуумный забор',
    tech4: 'Сертификация ISO 15189',
    serviceTitle: 'Программы Диагностики',
    serviceSub: 'Полный спектр высокоточных лабораторных исследований для вашего здоровья',
    searchPlaceholder: 'Поиск исследований (например, кровь, гормоны, ПЦР, витамин...)',
    categoryAll: 'Все анализы',
    categoryPackages: 'Диагностические пакеты',
    categoryHematology: 'Гематология',
    categoryBiochem: 'Биохимия',
    categoryHormones: 'Гормоны и онкомаркеры',
    categoryInfections: 'Инфекционные исследования',
    categoryCoagulogram: 'Коагулограмма',
    categoryBloodGroups: 'Группа крови',
    categoryAllergy: 'Аллергопанели',
    categoryPcr: 'Полимеразная цепная реакция (ПЦР)',
    categoryUrine: 'Анализ мочи',
    categoryBacteriology: 'Бактериологические исследования',
    categoryGeneralClinical: 'Общеклинические исследования',
    fastingRequired: 'Строго натощак',
    fastingNoNeeded: 'Без специальной диеты',
    resultsIn: 'Срок выполнения',
    price: 'Стоимость',
    addToCart: 'Выбрать',
    selected: 'Выбрано',
    cartTotal: 'Выбранные исследования',
    cartEmpty: 'Вы пока не выбрали ни одного анализа. Воспользуйтесь списком выше.',
    btnProceedBooking: 'Оформить цифровую запись',
    aiAssistantTitle: 'Умный помощник по симптомам',
    aiAssistantSub: 'Рекомендации по выбору анализов на основе ваших клинических симптомов',
    aiWelcome: 'Здравствуйте! Я автоматизированный консультант KANILAB. Выберите симптомы, которые вас беспокоят, и наша система мгновенно сформирует для вас оптимальную программу исследований:',
    symptomFatigue: 'Постоянная усталость и упадок сил',
    symptomAllergy: 'Сезонная аллергия и кожные высыпания',
    symptomBiohack: 'Фитнес-мониторинг и биохакинг',
    symptomCheckup: 'Ежегодный общий чек-ап организма',
    aiReplyFatigue: 'Хроническая усталость часто связана с дефицитом Витамина D и B12, дисфункцией щитовидной железы (ТТГ) или скрытой анемией. Рекомендую сдать следующий комплекс:',
    aiReplyAllergy: 'Для определения причин сезонного насморка, зуда и слезотечения важно количественно измерить специфические иммуноглобулины. Подходящий профиль:',
    aiReplyBiohack: 'Для оптимизации тренировочного процесса, оценки гормонального баланса и метаболического статуса рекомендуем следующий премиум-комплекс:',
    aiReplyCheckup: 'Базовый контроль состояния здоровья включает основные маркеры крови, метаболизма и воспалительных процессов. Это золотой стандарт профилактики:',
    addSuggested: 'Добавить рекомендованные анализы в чек',
    processTitle: 'Как мы работаем',
    processSub: 'Каждый этап полностью автоматизирован для вашей безопасности',
    step1Title: 'Цифровая регистрация',
    step1Desc: 'Забронируйте удобное время на сайте или через Telegram-бот без очередей.',
    step2Title: 'Премиальный забор крови',
    step2Desc: 'Забор биоматериала одноразовыми вакуумными системами в комфортных боксах.',
    step3Title: 'Автоматизированный анализ',
    step3Desc: 'Штрих-кодированные пробирки передаются роботам-анализаторам. Исключены любые ошибки.',
    step4Title: 'Электронный паспорт здоровья',
    step4Desc: 'Получите защищенный PDF-отчет с подробной расшифровкой на Telegram, почту или SMS.',
    docTitle: 'Научный Совет Лаборатории',
    docSub: 'Наши эксперты с европейским образованием, контролирующие точность исследований',
    galleryTitle: 'Технологическое превосходство',
    gallerySub: 'Взгляд изнутри на стерильные роботизированные лаборатории KANILAB',
    faqTitle: 'Часто задаваемые вопросы',
    faqSub: 'Всё, что вам нужно знать перед сдачей лабораторных тестов',
    contactTitle: 'Премиальный сервис ждет вас',
    contactSub: 'Свяжитесь с нами или посетите нашу центральную лабораторию в Термезе',
    contactFormTitle: 'Остались вопросы? Проконсультируйтесь с нами',
    formName: 'Ваше имя и фамилия',
    formPhone: 'Номер телефона',
    formMsg: 'Клинические жалобы или вопросы',
    formSubmit: 'Отправить запрос',
    formSuccess: 'Ваша заявка успешно отправлена! Наш медицинский координатор свяжется с вами в течение 15 минут.',
    address: 'Сурхандарьинская область, г. Термез, ул. Алишера Навои, д. 26А (Ориентир: внутри здания бывшей Глазной больницы / Eski Ko\'z Kasalxonasi)',
    workingHours: 'Пн - Сб: 08:00 - 17:00 | Вс: Закрыто',
    footerCopyright: '© 2026 KANILAB CLINICAL CORP. ВСЕ ПРАВА ЗАЩИЩЕНЫ.',
    modalTitle: 'Электронная Запись на Анализы',
    modalStep1: 'Анализы',
    modalStep2: 'Данные',
    modalStep3: 'Дата и Время',
    modalStep4: 'Билет',
    selectedTestsLabel: 'Список выбранных тестов',
    noTestsSelectedModal: 'Вы пока не выбрали анализы. Вы можете добавить подходящие ниже:',
    inputName: 'Имя и фамилия пациента (по паспорту)',
    inputEmail: 'Ваш E-mail (для отправки PDF результатов)',
    selectBranch: 'Выберите медицинский филиал',
    branch1: 'Термезская Центральная Лаборатория (ул. Алишера Навои)',
    branch2: 'Филиал в Денауском районе (ул. Шарафа Рашидова)',
    branch3: 'Филиал в Шерабадском районе (ул. Ипак Йули)',
    selectDate: 'Выберите дату визита',
    selectTime: 'Выберите удобный временной слот',
    btnBack: 'Назад',
    btnNext: 'Далее',
    btnConfirm: 'Подтвердить запись',
    bookingProcessing: 'Генерируется ваш цифровой медицинский паспорт. Пожалуйста, подождите...',
    ticketTitle: 'ЦИФРОВОЙ МЕДИЦИНСКИЙ ПАСПОРТ',
    ticketSub: 'Премиальная Диагностика KANILAB',
    ticketID: 'ID Записи',
    patient: 'Пациент',
    date: 'Дата визита',
    time: 'Время',
    location: 'Филиал',
    preparation: 'Подготовка к исследованию',
    prepText: 'Пожалуйста, не принимайте пищу за 8-12 часов до забора крови. Разрешается пить чистую негазированную воду. Возьмите с собой удостоверение личности.',
    btnPrint: 'Сохранить / Распечатать билет',
    btnDone: 'Закрыть',
    viewAll: 'Все анализы',
    reviewsTitle: 'Отзывы наших пациентов',
    rating: 'Оценка',
    reviews: [
      {
        name: 'Дильноза Умарова',
        role: 'Пациент',
        review: 'Обслуживание в Kani-Lab на высшем уровне! Всё автоматизировано, без очередей. Результаты анализов пришли в Telegram уже через 4 часа. Очень удобно и современно.'
      },
      {
        name: 'Сардор Рахимов',
        role: 'Постоянный клиент',
        review: 'Чистота и стерильность в клинике поражают. У медсестер очень легкая рука, забор крови прошел абсолютно безболезненно. Спасибо за такой профессионализм!'
      },
      {
        name: 'Малика Каримова',
        role: 'Пациент',
        review: 'Воспользовалась автоматизированным подбором анализов по симптомам. Всё предельно ясно и структурировано. Чувствуется действительно премиальный подход.'
      }
    ],
    items: [
      {
        q: '1. Как и где я могу получить результаты анализов?',
        a: 'Как только ваши результаты будут готовы, вы автоматически получите уведомление через наш Telegram-бот. Результаты можно скачать через бот либо получить в бумажном виде, посетив нашу лабораторию.'
      },
      {
        q: '2. На что обратить внимание перед сдачей анализов?',
        a: 'Для точных результатов рекомендуется приходить натощак в зависимости от вида анализа (особенно для биохимических тестов). Наш врач предоставит вам точные инструкции по подготовке при регистрации.'
      },
      {
        q: '3. Как KANILAB обеспечивает конфиденциальность данных?',
        a: 'Все данные клиентов и результаты анализов хранятся в зашифрованной системе. Мы строго соблюдаем международные стандарты ISO 15189, что гарантирует полную безопасность и конфиденциальность ваших данных.'
      },
      {
        q: '4. Почему я должен выбрать вашу лабораторию?',
        a: 'Мы участвуем в международных программах контроля качества College of American Pathologists (CAP) и используем передовые лабораторные системы Roche, Sysmex и Abbott. Каждый образец проходит двухэтапный контроль врачей-экспертов.'
      },
      {
        q: '5. Какие виды анализов можно сдать в вашей лаборатории?',
        a: 'Мы предлагаем широкий спектр биохимических, иммунологических, гормональных, микробиологических и ПЦР-исследований. Подробную информацию об услугах можно найти в разделе «Анализы» на нашем сайте.'
      },
      {
        q: '6. Какова скорость готовности результатов?',
        a: 'Мы уделяем приоритетное внимание скорости: биохимические анализы готовы в течение 2 часов, гормональные и иммунологические — до 4 часов. Для более сложных тестов (ПЦР или микробиологические) сроки могут составлять от 3 до 10 дней в зависимости от вида анализа.'
      }
    ]
  },
  tr: {
    navHome: 'Ana Sayfa',
    navAbout: 'Laboratuvar Hakkında',
    navAboutUs: 'Hakkımızda',
    navAboutHistory: 'Tarihimiz',
    navAboutValues: 'Değerlerimiz',
    navAboutMission: 'Amaç ve Misyonumuz',
    navServices: 'Analizler',
    navTeam: 'Ekibimiz',
    deptManagement: 'Yönetim',
    deptLab: 'Laboratuvar ve Teşhis',
    deptFinance: 'Muhasebe ve Finans',
    deptService: 'Hizmet ve Destek',
    deptAdmin: 'İdari Bölümler',
    navFAQ: 'Sıkça Sorulan Sorular',
    navContact: 'İletişim',
    navBranches: 'Şubeler',
    navContactMain: 'Merkezle İletişim',
    btnBook: 'Sıra Al',
    btnAnalyses: 'Analiz Kataloğu',
    btnContactUs: 'Bize Ulaşın',
    badgeGen: 'Uluslararası İşbirliği ve Kalite',
    heroHeadline: 'Özbekistan, Türkiye ve Hollanda Deneyimi',
    heroSub: "2019'dan beri uluslararası işbirliği ve gelişmiş robotik tanı sistemleri ile sağlığınızın hizmetindeyiz.",
    statPatients: 'Başarılı Tanı',
    statTests: 'Analiz Türleri',
    statAccuracy: 'Doğruluk Oranı',
    statExperience: 'Yıllık Deneyim',
    pcrResult: 'Hızlı PCR Testi',
    negative: 'NEGATİF',
    confirmed: 'Onaylandı 14:45',
    dnaReport: 'DNA Raporu',
    ready: 'İncelemeye Hazır',
    aboutTitle: 'KANI-LAB Hakkında',
    aboutSub: 'Uluslararası standartlarda tıbbi laboratuvar',
    aboutText1: "KANILAB, Surhanderya bölgesindeki en ileri test standartlarını modern tanı sistemleriyle birleştiren premium bir klinik laboratuvardır. Tirmiz'deki merkez laboratuvarımız, Roche, Sysmex ve Abbott gibi dünya liderlerinin en son robotik analizörleri ile donatılmıştır.",
    aboutText2: "Uluslararası ISO 15189 standartlarına uygun olarak çalışıyoruz. Surhanderya bölgesinin tüm ilçelerinde şubelerimiz bulunmakta olup Tirmiz'deki önde gelen hastanelerle aktif olarak işbirliği yapmaktayız. Her numune tamamen güvenlidir, barkodlanır ve iki aşamalı doktor kontrolü altında incelenir.",
    tech1: 'Otomatik analizler',
    tech2: 'Robotik barkod takibi',
    tech3: 'Tamamen steril ve ağrısız örnek alımı',
    tech4: 'ISO 15189 uluslararası sertifikası',
    serviceTitle: 'Tanı Programları',
    serviceSub: 'Sağlığınız için premium laboratuvar analizleri seti',
    searchPlaceholder: 'Analiz ara (ör. kan, hormon, PCR...)',
    categoryAll: 'Tümü',
    categoryPackages: 'Tanı paketleri',
    categoryHematology: 'Hematoloji',
    categoryBiochem: 'Biyokimya',
    categoryHormones: 'Hormonlar ve Tümör Belirteçleri',
    categoryInfections: 'Enfeksiyon araştırmaları',
    categoryCoagulogram: 'Koagülogram',
    categoryBloodGroups: 'Kan grubu',
    categoryAllergy: 'Alerji panelleri',
    categoryPcr: 'Polimeraz Zincir Reaksiyonu (PCR)',
    categoryUrine: 'İdrar analizi',
    categoryBacteriology: 'Bakteriyolojik araştırmalar',
    categoryGeneralClinical: 'Genel klinik araştırmalar',
    fastingRequired: 'Aç karnına verilir',
    fastingNoNeeded: 'Diyet gerektirmez',
    resultsIn: 'Sonuç süresi',
    price: 'Fiyatı',
    addToCart: 'Seç',
    selected: 'Seçildi',
    cartTotal: 'Toplam seçilen analiz',
    cartEmpty: 'Hiçbir analiz seçilmedi. Listeden gerekli analizleri seçin.',
    btnProceedBooking: 'Kişisel sıra al',
    aiAssistantTitle: 'Akıllı Tanı Danışmanı',
    aiAssistantSub: 'Klinik belirtilere (semptomlara) göre analiz önerme',
    aiWelcome: 'Merhaba! Ben KANILAB tanı danışmanıyım. Kendinizde gözlemlediğiniz ana belirtileri (semptomları) seçin, robotik sistemimiz size en önemli analizlerin bir listesini oluştursun:',
    symptomFatigue: 'Sürekli yorgunluk ve halsizlik',
    symptomAllergy: 'Mevsimsel alerjiler ve döküntüler',
    symptomBiohack: 'Fitness ve biohack (Sağlık izleme)',
    symptomCheckup: 'Yıllık genel önleyici muayene',
    aiReplyFatigue: 'Sürekli yorgunluk ve halsizlik genellikle D/B12 Vitamini eksikliği, tiroid bezi sorunları (TSH) veya gizli anemi ile ilişkilidir. Aşağıdaki analizleri yaptırmanızı tavsiye ederim:',
    aiReplyAllergy: 'Mevsimsel burun tıkanıklığı, döküntüler ve göz sulanması için alerjik reaksiyonu tetikleyen antijenlerin belirlenmesi gerekir. Sizin için uygun panel aşağıdadır:',
    aiReplyBiohack: 'Fiziksel dayanıklılığınızı, hormonal dengenizi ve genel metabolizmanızı optimize etmek için aşağıdaki premium analiz kompleksi tavsiye edilir:',
    aiReplyCheckup: 'Sağlıklı bir yaşam sürmek ve hastalıkları erken tespit etmek için yılda bir kez aşağıdaki analizleri yaptırmak tıp dünyasında altın standarttır:',
    addSuggested: 'Önerilen analizleri seç',
    processTitle: 'Analiz Verme Süreci',
    processSub: 'Bizde her adım dijitalleşmiş ve güvenlidir',
    step1Title: 'Dijital kayıt',
    step1Desc: 'Sitemizde veya Telegram botumuz aracılığıyla sıranızı ve analizlerinizi önceden belirleyin.',
    step2Title: 'Steril ve ağrısız örneklem',
    step2Desc: 'Premium tıbbi ofisimizde tek kullanımlık vakum sistemleri kullanılarak hızlı örnek alımı.',
    step3Title: 'Otomatik analiz',
    step3Desc: "Örnek, robotik taşıma sistemi ile analizöre gönderilir, hata olasılığı %0'dır.",
    step4Title: 'Dijital rapor',
    step4Desc: 'Sonuçlar hazır olur olmaz SMS ve Telegram aracılığıyla şifreli PDF raporu gönderilir.',
    docTitle: 'Ekibimiz',
    docSub: 'Kani-Lab Profesyonel Kadrosu',
    galleryTitle: 'Bilimsel Laboratuvarımız',
    gallerySub: 'Uluslararası ISO standartlarına uygun robotik kliniğimizden fotoğraflar',
    faqTitle: 'Sıkça Sorulan Sorular',
    faqSub: 'Analizler ve KANILAB hizmetleri hakkında tüm bilgiler',
    contactTitle: 'Sizi Premium Merkezimizde bekliyoruz',
    contactSub: "Bizimle iletişime geçin veya Tirmiz'deki ana laboratuvarımızı ziyaret edin",
    contactFormTitle: 'Sorularınız mı var? Bir doktorla iletişime geçin',
    formName: 'Tam adınız',
    formPhone: 'Telefon numaranız',
    formMsg: 'Mesajınız veya klinik belirtileriniz',
    formSubmit: 'Talep Gönder',
    formSuccess: 'Talebiniz başarıyla kabul edildi. Tıbbi danışmanımız 15 dakika içinde sizinle iletişime geçecektir.',
    address: 'Surhanderya Bölgesi, Tirmiz şehri, Alisher Navoi Caddesi, 26A (Yer imi: Eski Göz Hastanesi binası içi)',
    workingHours: 'Pzt - Cmt: 08:00 - 17:00 | Pazar: Kapalı',
    footerCopyright: '© 2026 KANILAB CLINICAL CORP. TÜM HAKLARI SAKLIDIR.',
    modalTitle: 'Dijital Sıra Rezervasyonu',
    modalStep1: 'Analizler',
    modalStep2: 'Bilgiler',
    modalStep3: 'Tarih ve Saat',
    modalStep4: 'Bilet',
    selectedTestsLabel: 'Seçilen analizlerin listesi',
    noTestsSelectedModal: 'Henüz analiz seçmediniz. Biletinize aşağıdaki analizleri ekleyebilirsiniz:',
    inputName: 'Adınız ve Soyadınız (Pasaportta olduğu gibi)',
    inputEmail: 'E-posta adresiniz (PDF sonuçları için)',
    selectBranch: 'Klinik şubesini seçin',
    branch1: 'Tirmiz Merkez Laboratuvarı (Alisher Navoi Caddesi)',
    branch2: 'Denov İlçe Şubesi (Sharof Rashidov Caddesi)',
    branch3: 'Sherobod İlçe Şubesi (Ipek Yolu Caddesi)',
    selectDate: 'Ziyaret tarihini seçin',
    selectTime: 'Uygun zaman dilimini seçin',
    btnBack: 'Orqaga',
    btnNext: 'Keyingisi',
    btnConfirm: 'Sırayı onayla',
    bookingProcessing: 'Size dijital bir bilet hazırlanıyor. Teşhis veritabanı güncelleniyor...',
    ticketTitle: 'ELEKTRONİK KLİNİK PASAPORT',
    ticketSub: 'KANILAB Premium Diagnostics',
    ticketID: 'Bilet Numarası',
    patient: 'Bemor',
    date: 'Ziyaret Tarihi',
    time: 'Saat',
    location: 'Şube',
    preparation: 'Analiz vermeye hazırlık',
    prepText: 'Lütfen analiz vermeden 8-12 saat önce yemek yemeyin. Sadece temiz gazsız su içilebilir. Lütfen kimliğinizi yanınızda bulundurun.',
    btnPrint: 'Bileti Kaydet / Yazdır',
    btnDone: 'Yopish',
    viewAll: 'Tüm analizler',
    reviewsTitle: 'Müşterilerimizin Yorumları',
    rating: 'Değerlendirme',
    reviews: [
      {
        name: 'Dilnoza Umarova',
        role: 'Bemor',
        review: 'Kani-Lab dagi xizmat juda ham aʼlo darajada! Navbatlarsiz, hamma narsa elektron va tezkor. Tahlil natijalari 4 soatda Telegram orqali keldi. Juda qulay va zamonaviy.'
      },
      {
        name: 'Sardor Rahimov',
        role: 'Doimiy mijoz',
        review: 'Klinikada tozalik va xavfsizlik yuqori darajada. Hamshiralar qoʻli juda yengil ekan, namuna olishda mutlaqo ogʻriq sezmadim. Professional jamoaga rahmat.'
      },
      {
        name: 'Malika Karimova',
        role: 'Bemor',
        review: 'Semptomlar bo‘yicha tahlil tanlash xizmatidan foydalandim. Hammasi juda oson, aniq va tushunarli boʻldi. Har bir bemorga premium yondashuv sezilib turadi.'
      }
    ],
    items: [
      {
        q: '1. Analiz sonuçlarımı nasıl ve nereden alabilirim?',
        a: 'Sonuçlarınız hazır olduğunda, Telegram botumuz aracılığıyla otomatik bir mesaj alacaksınız. Sonuçlarınızı bu bot üzerinden veya laboratuvarımızı ziyaret ederek kağıt ortamında alabilirsiniz.'
      },
      {
        q: '2. Analiz vermeden önce nelere dikkat edilmeli?',
        a: 'Doğru sonuçlar için analizin türüne bağlı olarak (özellikle biyokimyasal analizler) aç karnına gelinmesi önerilir. Doktorumuz kayıt sırasında size analizin türüne göre kesin hazırlık talimatlarını verecektir.'
      },
      {
        q: '3. KANILAB veri gizliliğini nasıl sağlar?',
        a: 'Tüm müşteri verileri ve analiz sonuçları şifrelenmiş bir sistemde saklanır. Veri güvenliğini ve gizliliğini tamamen garanti eden uluslararası ISO 15189 standartlarına uymaktayız.'
      },
      {
        q: '4. Neden laboratuvarınızı seçmeliyim?',
        a: '"College of American Pathologists" (CAP) uluslararası kuruluşunun kalite kontrol programlarına katılıyoruz ve dünyanın en gelişmiş Roche, Sysmex ve Abbott laboratuvar sistemlerini kullanıyoruz. Numunelerimizin her biri iki aşamalı bir doktor kontrolü altında incelenmektedir.'
      },
      {
        q: '5. Laboratuvarınızda ne tür analizler yapılıyor?',
        a: 'Biz biokimyoviy, immunologik, gormonal, mikrobiologik va PCR tahlillarining keng spektrini taklif etamiz. Xizmatlarimiz haqica batafsil ma’lumotni saytimizning "Xizmatlar" (Services) bo‘limidan topishingiz mumkin.'
      },
      {
        q: '6. Tahlil natijalari tezligi qanday?',
        a: 'Biz tezkorlikka katta e’tibor qaratamiz: biokimyoviy tahlillar 2 soatgacha, gormonal va immunologik tahlillar esa 4 soatgacha muddatda tayyor bo‘ladi. Murakkabroq tahlillar (PCR yoki mikrobiologik) uchun aniq muddatlar tahlil turiga qarab 3 kundan 10 kungacha davom etishi mumkin.'
      }
    ]
  },
  en: {
    navHome: 'Home',
    navAbout: 'About Lab',
    navAboutUs: 'About Us',
    navAboutHistory: 'Our History',
    navAboutValues: 'Our Values',
    navAboutMission: 'Our Mission & Goals',
    navServices: 'Tests',
    navTeam: 'Our Team',
    deptManagement: 'Management',
    deptLab: 'Laboratory & Diagnostics',
    deptFinance: 'Accounting & Finance',
    deptService: 'Service & Support',
    deptAdmin: 'Administrative Departments',
    navFAQ: 'FAQ',
    navContact: 'Contact',
    navBranches: 'Branches',
    navContactMain: 'Contact Center',
    btnBook: 'Book Appointment',
    btnAnalyses: 'Tests Catalog',
    btnContactUs: 'Contact Us',
    badgeGen: 'International Partnership & Quality',
    heroHeadline: 'Experience of Uzbekistan, Turkey & Netherlands',
    heroSub: 'Serving your health since 2019 through international collaboration and advanced robotic diagnostic systems.',
    statPatients: 'Successful Diagnostics',
    statTests: 'Types of Tests',
    statAccuracy: 'Accuracy Rate',
    statExperience: 'Years of Experience',
    pcrResult: 'Rapid PCR Test',
    negative: 'NEGATIVE',
    confirmed: 'Confirmed 14:45',
    dnaReport: 'DNA Report',
    ready: 'Ready for Review',
    aboutTitle: 'About KANI-LAB',
    aboutSub: 'Medical laboratory at international standards level',
    aboutText1: 'KANILAB is a premium clinical laboratory in the Surxondaryo region that combines the most advanced testing standards with modern diagnostic systems. Our central laboratory in Termez is equipped with the latest robotic analyzers from world leaders — Roche, Sysmex, and Abbott.',
    aboutText2: 'We operate in accordance with international ISO 15189 standards and have our own branches in all districts of the Surxondaryo region, actively cooperating with the leading hospitals in Termez. Every sample is completely secure, barcoded, and tested under two-stage physician control.',
    tech1: 'Automated analyses',
    tech2: 'Robotic barcode tracking',
    tech3: 'Fully sterile and painless sample collection',
    tech4: 'ISO 15189 international certification',
    serviceTitle: 'Diagnostic Programs',
    serviceSub: 'Premium laboratory test packages for your health',
    searchPlaceholder: 'Search tests (e.g. blood, hormone, PCR...)',
    categoryAll: 'All',
    categoryPackages: 'Diagnostic packages',
    categoryHematology: 'Hematology',
    categoryBiochem: 'Biochemistry',
    categoryHormones: 'Hormones & Tumor Markers',
    categoryInfections: 'Infectious Studies',
    categoryCoagulogram: 'Coagulogram',
    categoryBloodGroups: 'Blood Groups',
    categoryAllergy: 'Allergy Panels',
    categoryPcr: 'Molecular Genetics (PCR)',
    categoryUrine: 'Urine Tests',
    categoryBacteriology: 'Bacteriological Studies',
    categoryGeneralClinical: 'General Clinical Tests',
    fastingRequired: 'Fasting required',
    fastingNoNeeded: 'No diet required',
    resultsIn: 'Result time',
    price: 'Price',
    addToCart: 'Select',
    selected: 'Selected',
    cartTotal: 'Total selected tests',
    cartEmpty: 'No tests selected. Choose the necessary tests from the list.',
    btnProceedBooking: 'Book personal appointment',
    aiAssistantTitle: 'Smart Diagnostic Advisor',
    aiAssistantSub: 'Recommending tests based on clinical signs (symptoms)',
    aiWelcome: 'Hello! I am the KANILAB diagnostic advisor. Select the main symptoms you are experiencing, and our robotic system will create a list of the most important tests for you:',
    symptomFatigue: 'Constant fatigue and weakness',
    symptomAllergy: 'Seasonal allergies and rashes',
    symptomBiohack: 'Fitness and biohacking (Health monitoring)',
    symptomCheckup: 'Annual general preventive check-up',
    aiReplyFatigue: 'Constant fatigue and weakness are often associated with Vitamin D/B12 deficiency, thyroid problems (TSH), or hidden anemia. I recommend the following tests:',
    aiReplyAllergy: 'To identify the antigens triggering an allergic reaction for seasonal nasal congestion, rashes, and watery eyes, the following panel is suitable for you:',
    aiReplyBiohack: 'The following premium test complex is recommended to optimize your physical endurance, hormonal balance, and overall metabolism:',
    aiReplyCheckup: 'Taking the following tests once a year to maintain a healthy lifestyle and detect diseases early is the gold standard in the medical world:',
    addSuggested: 'Select recommended tests',
    processTitle: 'Test Submission Process',
    processSub: 'Every step is digitalized and secure with us',
    step1Title: 'Digital registration',
    step1Desc: 'Pre-schedule your appointment and tests on our website or via Telegram bot.',
    step2Title: 'Sterile and painless sampling',
    step2Desc: 'Quick sample collection using single-use vacuum systems in our premium medical office.',
    step3Title: 'Automated analysis',
    step3Desc: 'The sample is sent to the analyzer via robotic transport system, error probability 0%.',
    step4Title: 'Digital report',
    step4Desc: 'Once the results are ready, an encrypted PDF report is sent via SMS and Telegram.',
    docTitle: 'Our Team',
    docSub: 'Kani-Lab Professional Staff',
    galleryTitle: 'Our Scientific Laboratory',
    gallerySub: 'Photos from our robotic clinic that meets international ISO standards',
    faqTitle: 'Frequently Asked Questions',
    faqSub: 'All information about tests and KANILAB services',
    contactTitle: 'We Welcome You at Our Premium Center',
    contactSub: 'Contact us or visit our main laboratory in Termez city',
    contactFormTitle: 'Have questions? Contact a doctor',
    formName: 'Your full name',
    formPhone: 'Your phone number',
    formMsg: 'Your message or clinical symptoms',
    formSubmit: 'Send Request',
    formSuccess: 'Your application has been successfully received. Our medical advisor will contact you within 15 minutes.',
    address: 'Surxondaryo region, Termez city, Alisher Navoiy street, 26A (Landmark: Inside the Old Eye Hospital building)',
    workingHours: 'Mon - Sat: 08:00 - 17:00 | Sunday: Closed',
    footerCopyright: '\u00A9 2026 KANILAB CLINICAL CORP. ALL RIGHTS RESERVED.',
    modalTitle: 'Digital Appointment Booking',
    modalStep1: 'Tests',
    modalStep2: 'Information',
    modalStep3: 'Date & Time',
    modalStep4: 'Ticket',
    selectedTestsLabel: 'List of selected tests',
    noTestsSelectedModal: 'You have not selected any tests yet. You can add the following tests to your ticket:',
    inputName: 'Your Full Name (as in passport)',
    inputEmail: 'Your email address (for PDF results)',
    selectBranch: 'Select clinic branch',
    branch1: 'Termez Central Laboratory (Alisher Navoiy Street)',
    branch2: 'Denov District Branch (Sharof Rashidov Street)',
    branch3: 'Sherobod District Branch (Silk Road Street)',
    selectDate: 'Select visit date',
    selectTime: 'Select preferred time slot',
    btnBack: 'Back',
    btnNext: 'Next',
    btnConfirm: 'Confirm Appointment',
    bookingProcessing: 'Your digital ticket is being prepared. Diagnostic database is updating...',
    ticketTitle: 'ELECTRONIC CLINICAL PASSPORT',
    ticketSub: 'KANILAB Premium Diagnostics',
    ticketID: 'Ticket Number',
    patient: 'Patient',
    date: 'Visit Date',
    time: 'Time',
    location: 'Branch',
    preparation: 'Preparation for test submission',
    prepText: 'Please do not eat 8-12 hours before submitting the test. Only clean still water is allowed. Please bring your identity document with you.',
    btnPrint: 'Save / Print Ticket',
    btnDone: 'Close',
    viewAll: 'All tests',
    reviewsTitle: 'Our Customers\' Reviews',
    rating: 'Rating',
    reviews: [
      {
        name: 'Dilnoza Umarova',
        role: 'Patient',
        review: 'The service at Kani-Lab is excellent! No queues, everything is electronic and fast. Test results came via Telegram in 4 hours. Very convenient and modern.'
      },
      {
        name: 'Sardor Rahimov',
        role: 'Regular Customer',
        review: 'Cleanliness and safety at the clinic are at a high level. The nurses are very gentle, I felt absolutely no pain during sample collection. Thank you to the professional team.'
      },
      {
        name: 'Malika Karimova',
        role: 'Patient',
        review: 'I used the symptom-based test selection service. Everything was very easy, clear and understandable. A premium approach to each patient is clearly felt.'
      }
    ],
    items: [
      {
        q: '1. How and where can I get my test results?',
        a: 'When your results are ready, you will receive an automatic message via our Telegram bot. You can receive your results through this bot or by visiting our laboratory in paper form.'
      },
      {
        q: '2. What should I pay attention to before submitting a test?',
        a: 'For accurate results, depending on the type of test (especially biochemical tests), it is recommended to come on an empty stomach. Our doctor will give you clear preparation instructions according to the type of test during registration.'
      },
      {
        q: '3. How does KANILAB ensure data privacy?',
        a: 'All customer data and test results are stored in an encrypted system. We comply with international ISO 15189 standards, which fully guarantees data security and confidentiality.'
      },
      {
        q: '4. Why should I choose your laboratory?',
        a: 'We participate in the quality control programs of the international organization "College of American Pathologists" (CAP) and use the most advanced Roche, Sysmex and Abbott laboratory systems in the world. Every one of our samples is examined under two-stage physician control.'
      },
      {
        q: '5. What types of tests can be submitted at your laboratory?',
        a: 'We offer a wide spectrum of biochemical, immunological, hormonal, microbiological and PCR tests. You can find detailed information about our services in the "Services" section of our website.'
      },
      {
        q: '6. How fast are the test results?',
        a: 'We pay great attention to speed: biochemical tests are ready within 2 hours, and hormonal and immunological tests within 4 hours. For more complex tests (PCR or microbiological), exact timelines can range from 3 to 10 days depending on the test type.'
      }
    ]
  },
};

const getMedicalIcon = (field: string) => {
  switch (field) {
    case 'packages': return <Sparkles className="w-5 h-5 text-cyan-500" />;
    case 'biochemistry': return <Activity className="w-5 h-5 text-emerald-500" />;
    case 'hematology': return <Activity className="w-5 h-5 text-rose-500" />;
    case 'hormones': return <Award className="w-5 h-5 text-amber-500" />;
    case 'coagulogram': return <Clock className="w-5 h-5 text-indigo-500" />;
    case 'infections': return <ShieldCheck className="w-5 h-5 text-teal-500" />;
    case 'blood_groups': return <Heart className="w-5 h-5 text-pink-500" />;
    case 'pcr': return <Cpu className="w-5 h-5 text-purple-500" />;
    case 'microbiology': return <Microscope className="w-5 h-5 text-cyan-600" />;
    case 'allergy': return <Activity className="w-5 h-5 text-orange-500" />;
    case 'immunology': return <ShieldCheck className="w-5 h-5 text-blue-500" />;
    case 'genetics': return <Cpu className="w-5 h-5 text-fuchsia-500" />;
    case 'urine': return <FileText className="w-5 h-5 text-yellow-500" />;
    case 'stool': return <FileText className="w-5 h-5 text-amber-700" />;
    case 'pregnancy': return <Heart className="w-5 h-5 text-pink-600" />;
    case 'cardiology': return <Activity className="w-5 h-5 text-red-500" />;
    case 'diabetes': return <Activity className="w-5 h-5 text-teal-600" />;
    case 'kidney': return <FileText className="w-5 h-5 text-sky-500" />;
    case 'liver': return <Activity className="w-5 h-5 text-emerald-600" />;
    case 'lipid_profile': return <Activity className="w-5 h-5 text-violet-500" />;
    case 'vitamin': return <Sparkles className="w-5 h-5 text-amber-400" />;
    case 'tumor_markers': return <Award className="w-5 h-5 text-red-600" />;
    default: return <Microscope className="w-5 h-5 text-slate-500" />;
  }
};

interface TeamMember {
  id: string;
  name: string;
  position: { uz: string; ru: string; tr: string; en?: string };
  department: 'management' | 'lab' | 'finance' | 'service' | 'admin';
  experience: { uz: string; ru: string; tr: string; en?: string };
  specialties: { uz: string[]; ru: string[]; tr: string[]; en?: string[] };
  grad: { uz: string; ru: string; tr: string; en?: string };
  bio: { uz: string; ru: string; tr: string; en?: string };
  photo?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'salih',
    name: 'Salih Gelen',
    position: { uz: 'Direktor', ru: 'Директор', tr: 'Direktör' },
    department: 'management',
    experience: { uz: '15 yillik tajriba', ru: '15 лет опыта', tr: '15 Yıllık Deneyim' },
    specialties: {
      uz: ['Klinika boshqaruvi', 'Tibbiy menejment', 'Xalqaro aloqalar'],
      ru: ['Управление клиникой', 'Медицинский менеджмент', 'Международные связи'],
      tr: ['Klinik Yönetimi', 'Sağlık Yönetimi', 'Uluslararası İlişkiler']
    },
    grad: {
      uz: 'Istanbul Universiteti',
      ru: 'Стамбульский университет',
      tr: 'İstanbul Üniversitesi'
    },
    bio: {
      uz: 'Turkiya va O‘zbekiston o‘rtasidagi tibbiy hamkorlik bo‘yicha ko‘p yillik tajribaga ega yetakchi rahbar.',
      ru: 'Руководитель с многолетним опытом развития медицинского партнерства между Турцией и Узбекистаном.',
      tr: 'Türkiye ve Özbekistan arasındaki tıbbi iş birliğini geliştiren deneyimli yönetici.'
    }
  },
  {
    id: 'gayrat',
    name: 'Dr. G‘ayrat Abdullayev',
    position: { uz: 'Bosh shifokor', ru: 'Главный врач', tr: 'Başhekim' },
    department: 'management',
    experience: { uz: '18 yillik tajriba', ru: '18 лет опыта', tr: '18 Yıllık Deneyim' },
    specialties: {
      uz: ['Klinik biokimyo', 'Laboratoriya menejmenti', 'Sifat nazorati (EQAS)'],
      ru: ['Клиническая биохимия', 'Лабораторный менеджмент', 'Контроль качества (EQAS)'],
      tr: ['Klinik Biyokimya', 'Laboratuvar Yönetimi', 'Kalite Kontrol (EQAS)']
    },
    grad: {
      uz: 'Tashkent Tibbiyot Akademiyasi',
      ru: 'Ташкентская медицинская академия',
      tr: 'Taşkent Tıp Akademisi'
    },
    bio: {
      uz: 'Koʻp yillik ilmiy va amaliy tajribaga ega shifokor, xalqaro ISO 15189 standartlarini joriy etish boʻyicha yetakchi mutaxassis.',
      ru: 'Врач высшей категории с многолетним практическим опытом. Ведущий эксперт по внедрению стандартов ISO 15189.',
      tr: 'Uzun yıllara dayanan bilimsel ve pratik deneyime sahip uzman. ISO 15189 standartları uygulama lideri.'
    }
  },
  {
    id: 'ayshin',
    name: 'Dr. Ayşin Bışaroğlu',
    position: { uz: 'Tahlilchi vrach', ru: 'Врач-аналитик', tr: 'Tahlilci Hekim' },
    department: 'lab',
    experience: { uz: '12 yillik tajriba', ru: '12 лет опыта', tr: '12 Yıllık Deneyim' },
    specialties: {
      uz: ['Immunokimyo', 'Gematologik tahlillar', 'Gormonal tahlillar'],
      ru: ['Иммунохимия', 'Гематологический анализ', 'Гормональные исследования'],
      tr: ['İmmünokimya', 'Hematolojik Analizler', 'Hormon Analizleri']
    },
    grad: {
      uz: 'Ege Universiteti Tibbiyot Fakulteti',
      ru: 'Медицинский факультет Эгейского университета',
      tr: 'Ege Üniversitesi Tıp Fakültesi'
    },
    bio: {
      uz: 'Xalqaro darajadagi tibbiyot mutaxassisi, immunologik tadqiqotlar va molekulyar diagnostika boʻyicha ekspert.',
      ru: 'Высококлассный специалист международного уровня в сфере иммунологии и современной ПЦР диагностики.',
      tr: 'Uluslararası düzeyde tıp uzmanı, immünolojik araştırmalar ve moleküler teşhis uzmanı.'
    }
  },
  {
    id: 'ulugbek',
    name: 'Xurramov Ulug‘bek',
    position: { uz: 'Bosh buxgalter', ru: 'Главный бухгалтер', tr: 'Baş Muhasebeci' },
    department: 'finance',
    experience: { uz: '10 yillik tajriba', ru: '10 лет опыта', tr: '10 Yıllık Deneyim' },
    specialties: {
      uz: ['Moliya auditi', 'Soliq hisobi', 'Laboratoriya moliya boshqaruvi'],
      ru: ['Финансовый аудит', 'Налоговый учет', 'Финансовый менеджмент в медицине'],
      tr: ['Finansal Denetim', 'Vergi Muhasebesi', 'Sağlık Finans Yönetimi']
    },
    grad: {
      uz: 'Termiz Davlat Universiteti',
      ru: 'Термезский государственный университет',
      tr: 'Termez Devlet Üniversitesi'
    },
    bio: {
      uz: 'Klinikaning barcha moliyaviy va buxgalteriya jarayonlarini nazorat qiluvchi professional buxgalter.',
      ru: 'Профессиональный бухгалтер, контролирующий все финансовые потоки и налоговую отчетность клиники.',
      tr: 'Klinik finans ve muhasebe süreçlerini yöneten profesyonel muhasebeci.'
    }
  },
  {
    id: 'latofat',
    name: 'Shaymanova Latofat',
    position: { uz: 'Kassa buxgalteri', ru: 'Бухгалтер-кассир', tr: 'Kasa Muhasebecisi' },
    department: 'finance',
    experience: { uz: '6 yillik tajriba', ru: '6 лет опыта', tr: '6 Yıllık Deneyim' },
    specialties: {
      uz: ['Naqd pul operatsiyalari', 'Birlamchi hisob-kitob', 'Mijozlar to‘lovlari'],
      ru: ['Кассовые операции', 'Первичная документация', 'Работа с платежами пациентов'],
      tr: ['Kasa İşlemleri', 'Ön Muhasebe', 'Hasta Ödeme Takibi']
    },
    grad: {
      uz: 'Termiz Bank Kolleji',
      ru: 'Термезский банковский колледж',
      tr: 'Termez Banka Koleji'
    },
    bio: {
      uz: 'Birlamchi kassa to‘lovlari va mijozlar hisob-kitoblarini aniq amalga oshiruvchi mutaxassis.',
      ru: 'Ответственный специалист по приему платежей, кассовым отчетам и работе с клиентами.',
      tr: 'Kasa ödemelerini ve hasta hesaplarını titizlikle yürüten kasa sorumlusu.'
    }
  },
  {
    id: 'dilshoda',
    name: 'Shokirova Dilshoda',
    position: { uz: 'Bosh hamshira', ru: 'Главная медсестра', tr: 'Başhemşire' },
    department: 'service',
    experience: { uz: '14 yillik tajriba', ru: '14 лет опыта', tr: '14 Yıllık Deneyim' },
    specialties: {
      uz: ['Hamshiralik ishi nazorati', 'Sterilizatsiya protokollari', 'Bemorlar xavfsizligi'],
      ru: ['Управление медперсоналом', 'Стерилизационные протоколы', 'Стандарты ухода за пациентами'],
      tr: ['Hemşirelik Hizmetleri Yönetimi', 'Sterilizasyon Protokolleri', 'Hasta Güvenliği Standardı']
    },
    grad: {
      uz: 'Termiz Tibbiyot Kolleji',
      ru: 'Термезский медицинский колледж',
      tr: 'Termez Medikal Koleji'
    },
    bio: {
      uz: 'Klinikada hamshiralik ishi va sanitariya-gigiyena standartlari mukammal saqlanishini ta’minlaydigan rahbar hamshira.',
      ru: 'Организует работу среднего медперсонала, контролирует соблюдение стерильности и санитарных норм.',
      tr: 'Hemşirelik bakımı standartlarının ve sterilizasyon kurallarının eksiksiz uygulanmasını sağlayan başhemşire.'
    }
  },
  {
    id: 'farangiz',
    name: 'Alikulova Farangiz',
    position: { 
      uz: 'Marketing bo‘limi', 
      ru: 'Отдел маркетинга', 
      tr: 'Pazarlama Departmanı' 
    },
    department: 'admin',
    experience: { 
      uz: 'G‘ayratli mutaxassis', 
      ru: 'Энергичный специалист', 
      tr: 'Dinamik Uzman' 
    },
    specialties: {
      uz: ['Raqamli marketing', 'Mijozlar bilan aloqalar', 'PR va Brending'],
      ru: ['Цифровой маркетинг', 'Связи с общественностью', 'PR и Брендинг'],
      tr: ['Dijital Pazarlama', 'Müşteri İlişkileri', 'PR ve Markalaşma']
    },
    grad: {
      uz: "• Ma’lumoti: Termiz Iqtisodiyot va Servis Universiteti.\n• Ish tajribasi: 1 yil \"Nurafshon Binokor\" tashkilotida moddiy buxgalter.",
      ru: "• Образование: Термезский университет экономики и сервиса.\n• Опыт работы: 1 год бухгалтером материального учета в компании \"Нурафшон Бинокор\".",
      tr: "• Eğitim: Termez Ekonomi ve Servis Üniversitesi.\n• İş Deneyimi: \"Nurafşon Binokor\" firmasında 1 yıl maddi muhasebeci."
    },
    bio: {
      uz: "Alikulova Farangiz – Kani-Lab laboratoriyasining marketing yo‘nalishidagi g‘ayratli mutaxassisi. 2025-yildan buyon laboratoriyamiz jamoasida faoliyat yuritib, brendni ommalashtirish va mijozlarga xizmat ko‘rsatish sifatini oshirish strategiyalarini muvaffaqiyatli ishlab chiqmoqda. U avvalgi faoliyatida \"Nurafshon Binokor\" tashkilotida moddiy buxgalter sifatida ishlagan bo‘lib, moliyaviy hisob-kitoblar va resurslarni boshqarish bo‘yicha boy tajribaga ega. Farangiz o‘zining analitik yondashuvi hamda marketing strategiyalarini birlashtirgan holda Kani-Lab laboratoriyasining rivojlanishiga katta hissa qo‘shib kelmoqda.",
      ru: "Аликулова Фарангиз — энергичный специалист по маркетингу лаборатории Kani-Lab. Работает в нашей лаборатории с 2025 года, успешно разрабатывая стратегии по продвижению бренда и повышению качества обслуживания клиентов. Ранее работала материальным бухгалтером в организации \"Нурафшон Бинокор\", обладает богатым опытом финансовых расчетов и управления ресурсами. Объединяя свой аналитический подход и маркетинговые стратегии, Фарангиз вносит большой вклад в развитие лаборатории Kani-Lab.",
      tr: "Alikulova Farangiz, Kani-Lab laboratuvarının pazarlama alanında dinamik bir uzmanıdır. 2025 yılından bu yana laboratuvarımızda görev yapmakta, marka bilinirliğini artırma ve hasta hizmet kalitesini geliştirme stratejilerini başarıyla tasarlamaktadır. Önceki işinde \"Nurafşon Binokor\" şirketinde maddi muhasebeci olarak çalışmış olup finansal hesaplamalar ve kaynak yönetimi konusunda zengin deneyime sahiptir. Farangiz, analitik yaklaşımını pazarlama stratejileriyle birleştirerek Kani-Lab laboratuvarının büyümesine büyük katkı sağlamaktadır."
    },
    photo: farangizImg
  },
  {
    id: 'yusufbek',
    name: 'Davronov Yusufbek',
    position: { 
      uz: 'Omborxona boshqaruvchisi', 
      ru: 'Заведующий складом', 
      tr: 'Depo ve Lojistik Yöneticisi' 
    },
    department: 'admin',
    experience: { 
      uz: 'Tashabbuskor mutaxassis', 
      ru: 'Инициативный специалист', 
      tr: 'Girişimci Uzman' 
    },
    specialties: {
      uz: ['Logistika boshqaruvi', 'Sovuq zanjir monitoringi', 'Inventarizatsiya'],
      ru: ['Управление логистикой', 'Мониторинг холодовой цепи', 'Инвентаризация'],
      tr: ['Lojistik Yönetimi', 'Soğuk Zincir İzleme', 'Envanter Kontrolü']
    },
    grad: {
      uz: 'Mutaxassis o‘z kasbiy mahoratini amaliy ish jarayonida oshirib bormoqda.',
      ru: 'Специалист повышает квалификацию в процессе практической работы.',
      tr: 'Uzman, mesleki becerilerini pratik iş sürecinde geliştirmektedir.'
    },
    bio: {
      uz: 'Davronov Yusufbek – Kani-Lab laboratoriyasining yosh, g‘ayratli va tashabbuskor mutaxassisi. 2026-yildan buyon laboratoriyamiz jamoasi tarkibida faoliyat yuritib kelmoqda. O‘zining mas’uliyatli yondashuvi va o‘rganishga bo‘lgan yuqori intilishi bilan laboratoriya uchun zarur bo‘lgan tibbiy sarflanuvchi materiallar va reaktivlar omborini xalqaro standartlarga, xususan, "sovuq zanjir" talablariga qat’iy rioya qilgan holda boshqarib kelmoqda. Yusufbek laboratoriya logistikasini tashkil etishda samaradorlik va aniqlikni ta’minlashda muhim o‘rin tutadi.',
      ru: 'Давронов Юсуфбек — молодой, энергичный и инициативный специалист лаборатории Kani-Lab. Работает в команде лаборатории с 2026 года. Благодаря ответственному подходу и стремлению к знаниям, он управляет складом медицинских расходных материалов и реагентов в соответствии с международными стандартами и требованиями "холодовой цепи". Юсуфбек играет важную роль в обеспечении эффективности и точности логистики лаборатории.',
      tr: 'Davronov Yusufbek, Kani-Lab laboratuvarının genç, dinamik ve girişimci bir uzmanıdır. 2026 yılından bu yana laboratuvar ekibimizde görev yapmaktadır. Sorumluluk sahibi yaklaşımı ve öğrenme azmi ile tıbbi sarf malzemeleri ve reaktif deposunu uluslararası standartlara, özellikle de "soğuk zincir" gereksinimlerine tam uyum içinde yönetmektedir. Yusufbek, laboratuvar lojistiğinin verimli ve hassas bir şekilde organize edilmesinde kritik bir rol oynamaktadır.'
    },
    photo: yusufbekImg
  },
  {
    id: "eshpo-latov-sunnatullo",
    name: "Eshpo‘latov Sunnatullo",
    position: {
      uz: "Biokimyo shifokor laboranti",
      ru: "Врач-лаборант биохимии",
      tr: "Biyokimya Laborant Hekimi"
    },
    department: "lab",
    experience: {
      uz: "3 yillik tajriba",
      ru: "3 года опыта",
      tr: "3 Yıllık Deneyim",
      en: "3 years of experience"
    },
    specialties: {
      uz: ["Laboratoriya diagnostikasi", "Tahlillar sifat nazorati"],
      ru: ["Лабораторная диагностика", "Контроль качества анализов"],
      tr: ["Laboratuvar Teşhisi", "Analiz Kalite Kontrolü"]
    },
    grad: {
      uz: "• Magistratura: Dorivor oʻsimliklarni yetishtirish va qayta ishlash texnologiyasi\n• Bakalavriat: Biologiya (turlar boʻyicha), Klinik laboratoriya\n• Kollej: Davolash ishi feldsheri",
      ru: "• Магистратура: Технология выращивания и переработки лекарственных растений\n• Бакалавриат: Biologiya (po napravleniyam), Klinik laboratoriya\n• Колледж: Фельдшер лечебного дела",
      tr: "• Yüksek Lisans: Tıbbi Bitki Yetiştiriciliği ve İşleme Teknolojisi\n• Lisans: Biyoloji (Alanlara göre), Klinik Laboratuvar\n• Kolej: Tıbbi Tedavi Hemşireliği"
    },
    bio: {
      uz: "Kani-Lab laboratoriyasining yetakchi biokimyo mutaxassisi Eshpoʻlatov Sunnatullo, klinik laboratoriya diagnostikasi sohasida boy nazariy bilim va amaliy ko‘nikmalarga ega professionaldir. U o‘z faoliyatida tibbiyot kolleji va oliy ta’lim bosqichlarida olgan fundamental bilimlarini laboratoriya amaliyoti bilan samarali uyg‘unlashtirib kelmoqda. Ilmiy izlanishlari dorivor o‘simliklarni qayta ishlash texnologiyalari va klinik laboratoriya tahlillarining aniqligini oshirishga qaratilgan bo‘lib, bu o‘z navbatida mijozlarga taqdim etilayotgan xizmatlar sifatini xalqaro standartlarga moslashtirishga yordam beradi. Sunnatullo har bir tahlil jarayonida yuqori aniqlik, tezkorlik va professional mas’uliyat tamoyillariga amal qiladi.",
      ru: "Эшпулатов Суннатулло, ведущий специалист по биохимии лаборатории Kani-Lab, является профессионалом с глубокими теоретическими знаниями и практическими навыками в области клинической лабораторной диагностики. В своей работе он эффективно сочетает фундаментальные знания, полученные в медицинском колледже и вузе, с лабораторной практикой. Его научные исследования направлены на технологии переработки лекарственных растений и повышение точности клинических лабораторных анализов.",
      tr: "Kani-Lab laboratuvarının lider biyokimya uzmanı Eshpoʻlatov Sunnatullo, klinik laboratuvar teşhisi alanında zengin teorik bilgi ve pratik becerilere sahip bir profesyoneldir. Tıp koleji ve yükseköğretim aşamalarında edindiği temel bilgileri laboratuvar pratiğiyle etkili bir şekilde birleştirmektedir. Bilimsel araştırmaları, tıbbi bitki işleme teknolojileri va klinik laboratuvar analizlerinin doğruluğunu artırmaya odaklanmıştır."
    },
    photo: sunnatulloImg
  },
  {
    id: "xurramova-sitora",
    name: "Xurramova Sitora",
    position: {
      uz: "Klinik laboratoriya shifokor laboranti",
      ru: "Врач-лаборант клинической лаборатории",
      tr: "Klinik Laboratuvar Uzmanı"
    },
    department: "lab",
    experience: {
      uz: "7 yillik tajriba",
      ru: "7 лет опыта",
      tr: "7 Yıllık Deneyim"
    },
    specialties: {
      uz: ["Klinik laboratoriya diagnostikasi", "Diagnostik tahlil"],
      ru: ["Клиническая лабораторная диагностика", "Диагностический анализ"],
      tr: ["Klinik Laboratuvar Teşhisi", "Tanımlayıcı Analiz"]
    },
    grad: {
      uz: "• Malaka oshirish: Shifokorlar malakasini oshirish markazi, “Klinik laboratoriya diagnostikasi” mutaxassisligi (864 kredit).\n• Bakalavriat: Termiz davlat universiteti (2018–2022).\n• Kollej: Termiz tibbiyot kolleji (2014–2017).",
      ru: "• Повышение квалификации: Центр повышения квалификации врачей, специальность «Клиническая лабораторная диагностика» (864 кредита).\n• Бакалавриат: Термезский государственный университет (2018–2022).\n• Колледж: Термезский медицинский колледж (2014–2017).",
      tr: "• Uzmanlık Eğitimi: Hekim Geliştirme Merkezi, “Klinik Laboratuvar Teşhisi” branşı (864 kredi).\n• Lisans: Termez Devlet Üniversitesi (2018–2022).\n• Kolej: Termez Medikal Koleji (2014–2017)."
    },
    bio: {
      uz: "Kani-Lab laboratoriyasining malakali mutaxassisi Xurramova Sitora, klinik laboratoriya diagnostikasi sohasida chuqur bilim va boy tajribaga ega shifokordir. U tibbiyot kolleji va oliy ta’limda olgan fundamental bilimlarini, Shifokorlar malakasini oshirish markazidagi intensiv kurslar bilan yanada mustahkamlagan. Sitora laboratoriya tahlillarini xalqaro standartlar asosida o‘tkazish, diagnostika jarayonlarini aniq va sifatli boshqarish bo‘yicha yuqori malakaga ega. U o‘z ishida kasbiy axloq, mas’uliyat va doimiy ilmiy rivojlanishni ustuvor deb biladi.",
      ru: "Хуррамова Ситора, квалифицированный специалист лаборатории Kani-Lab, — врач с глубокими знаниями и богатым опытом в области клинической лабораторной диагностики. Она закрепила свои фундаментальные знания, полученные в медицинском колледже и вузе, интенсивными курсами в Центре повышения квалификации врачей.",
      tr: "Kani-Lab laboratuvarının deneyimli uzmanı Xurramova Sitora, klinik laboratuvar teşhisi alanında derin bilgi ve zengin deneyime sahip bir hekimdir. Tıp koleji ve yükseköğretimde aldığı temel bilgileri, Hekim Geliştirme Merkezi bünyesindeki yoğun kurslarla daha da pekiştirmiştir."
    },
    photo: sitoraImg
  },
  {
    id: "qaxxorova-shaxzoda",
    name: "Qaxxorova Shaxzoda",
    position: {
      uz: "Klinik laboratoriya shifokor laboranti",
      ru: "Врач-лаборант клинической лаборатории",
      tr: "Klinik Laboratuvar Uzmanı"
    },
    department: "lab",
    experience: {
      uz: "9 yillik tajriba",
      ru: "9 лет опыта",
      tr: "9 Yıllık Deneyim"
    },
    specialties: {
      uz: ["Klinik-biokimyoviy diagnostika", "Laboratoriya tahlillari", "Diagnostika sifat nazorati"],
      ru: ["Клинико-биохимическая диагностика", "Лабораторные анализы", "Контроль качества диагностики"],
      tr: ["Klinik ve Biyokimyasal Teşhis", "Laboratuvar Analizleri", "Teşhis Kalite Kontrolü"]
    },
    grad: {
      uz: "• Ixtisoslashuv: Toshkent davlat shifokorlar malakasini oshirish instituti, “Klinik-biokimyoviy laboratoriya diagnostikasi shifokori” mutaxassisligi (2017–2018).\n• Bakalavriat: Termiz davlat universiteti (2012–2016).",
      ru: "• Специализация: Ташкентский государственный институт усовершенствования врачей, специальность «Врач клинико-биохимической лабораторной диагностики» (2017–2018).\n• Бакалавриат: Термезский государственный университет (2012–2016).",
      tr: "• Uzmanlık: Taşkent Devlet Hekim Geliştirme Enstitüsü, “Klinik ve Biyokimyasal Laboratuvar Teşhisi Hekimi” branşı (2017–2018).\n• Lisans: Termez Devlet Üniversitesi (2012–2016)."
    },
    bio: {
      uz: "Qaxxorova Shaxzoda – Kani-Lab laboratoriyasining 9 yillik boy ish stajiga ega tajribali laboratoriya shifokori. U o‘z faoliyatida tibbiyot va laboratoriya diagnostikasi sohasidagi fundamental bilimlarini amaliyot bilan muvaffaqiyatli uyg‘unlashtirib kelmoqda. Toshkent davlat shifokorlar malakasini oshirish institutidagi ixtisoslashuvi unga klinik-biokimyoviy tahlillarni yuqori aniqlik bilan amalga oshirish imkonini beradi. Shaxzoda diagnostika jarayonlarida xalqaro standartlarga rioya qilish, tahlil natijalarini to‘g‘ri talqin qilish va laboratoriya xizmatlari sifatini ta’minlashda yuqori professionallikni namoyon etadi.",
      ru: "Каххорова Шахзода — опытный лабораторный врач с 9-летним стажем работы в лаборатории Kani-Lab. В своей деятельности она успешно сочетает фундаментальные знания в области медицины и лабораторной диагностики с практикой. Специализация в Ташкентском государственном институте усовершенствования врачей позволяет ей выполнять клинико-биохимические исследования с высокой точностью.",
      tr: "Qaxxorova Shaxzoda - Kani-Lab laboratuvarında 9 yıllık zengin iş deneyimine sahip uzman hekimdir. Tıp ve laboratuvar teşhisi alanındaki temel bilgilerini pratikle başarıyla birleştirmektedir. Taşkent Devlet Hekim Geliştirme Enstitüsü uzmanlığı, klinik ve biyokimyasal analizleri yüksek hassasiyetle yapmasını sağlamaktadır."
    },
    photo: shaxzodaImg
  },
  {
    id: "davronov-asadbek",
    name: "Davronov Asadbek",
    position: {
      uz: "Biokimyo shifokor laboranti",
      ru: "Врач-лаборант биохимии",
      tr: "Biyokimya Laborantı"
    },
    department: "lab",
    experience: {
      uz: "4 yillik tajriba",
      ru: "4 года опыта",
      tr: "4 Yıllık Deneyim"
    },
    specialties: {
      uz: ["Biokimyoviy tahlillar", "Laboratoriya diagnostikasi", "Namuna tayyorlash va sifat nazorati"],
      ru: ["Биохимические анализы", "Лабораторная диагностика", "Подготовка проб и контроль качества"],
      tr: ["Biyokimyasal Analizler", "Laboratuvar Teşhisi", "Numune Hazırlama ve Kalite Kontrolü"]
    },
    grad: {
      uz: "• Kollej: Termiz tibbiyot kolleji (2017–2020).",
      ru: "• Колледж: Термезский медицинский колледж (2017–2020).",
      tr: "• Kolej: Termez Medikal Koleji (2017–2020)."
    },
    bio: {
      uz: "Davronov Asadbek – Kani-Lab laboratoriyasining tajribali biokimyo shifokor laboranti. 2021-yildan buyon laboratoriya diagnostikasi sohasida faoliyat yuritib kelayotgan Asadbek, o‘z ishida yuqori aniqlik va tezkorlikni tamoyil sifatida belgilagan. Tibbiyot kollejida olgan fundamental bilimlarini amaliyot bilan muvaffaqiyatli boyitib, zamonaviy laboratoriya jihozlari bilan ishlashda katta tajriba to‘plagan. U tahlillarni sifatli bajarish, namunalarni to‘g‘ri qayta ishlash va diagnostika jarayonlarida xalqaro standartlarga amal qilish borasida mas’uliyatli mutaxassis hisoblanadi.",
      ru: "Давронов Асадбек — опытный врач-лаборант биохимии лаборатории Kani-Lab. Работает в сфере лабораторной диагностики с 2021 года, ставя главным приоритетом высокую точность и оперативность. Успешно обогатив фундаментальные знания практикой, он накопил большой опыт работы с современным лабораторным оборудованием.",
      tr: "Davronov Asadbek - Kani-Lab laboratuvarının deneyimli biyokimya laborant hekimidir. 2021 yılından bu yana laboratuvar teşhisi alanında faaliyet gösteren Asadbek, yüksek hassasiyet ve hızı çalışma ilkesi edinmiştir. Tıp koleji temel bilgilerini pratikle pekiştirerek modern analiz cihazlarıyla çalışma konusunda tecrübe edinmiştir."
    },
    photo: asadbekImg
  },
  {
    id: "amirqulova-zilola",
    name: "Amirqulova Zilola",
    position: {
      uz: "Immunologik tekshiruvlar shifokor laboranti",
      ru: "Врач-лаборант иммунологических исследований",
      tr: "İmmünoloji Laborantı"
    },
    department: "lab",
    experience: {
      uz: "5 yillik tajriba",
      ru: "5 лет опыта",
      tr: "5 Yıllık Deneyim"
    },
    specialties: {
      uz: ["Immunologik tekshiruvlar", "Laboratoriya diagnostikasi", "Diagnostika sifat nazorati"],
      ru: ["Иммунологические исследования", "Лабораторная диагностика", "Контроль качества диагностики"],
      tr: ["İmmünolojik Araştırmalar", "Laboratuvar Teşhisi", "Teşhis Kalite Kontrolü"]
    },
    grad: {
      uz: "• Kollej: Termiz shahridagi Tibbiyot kolleji (Laboratoriya diagnostikasi yo‘nalishi, 2020-yil).\n• Malaka oshirish: Respublika o‘rta tibbiyot va farmatsevtika xodimlari malakasini oshirish va ularni ixtisoslashtirish markazi Termiz filiali, \"Laboratoriya ishida zamonaviy tekshirish usullari\" mutaxassisligi (2026-yil).",
      ru: "• Колледж: Термезский медицинский колледж (направление лабораторной диагностики, 2020 г.).\n• Повышение квалификации: Термезский филиал Республиканского центра повышения квалификации и специализации средних медицинских и фармацевтических работников, специальность \"Современные методы исследований в лабораторном деле\" (2026 г.).",
      tr: "• Kolej: Termez Tıp Koleji (Laboratuvar Teşhisi bölümü, 2020).\n• Uzmanlık Eğitimi: Cumhuriyet Orta Dereceli Sağlık ve Eczacılık Çalışanları Mesleki Gelişim ve Uzmanlık Merkezi Termez Şubesi, \"Laboratuvar Çalışmalarında Modern Araştırma Yöntemleri\" uzmanlık eğitimi (2026)."
    },
    bio: {
      uz: "Amirqulova Zilola – 2020-yilda Surxondaryo viloyati, Termiz shahridagi Tibbiyot kollejining \"Laboratoriya diagnostikasi\" yo‘nalishini tamomlagan. Laboratoriya sohasida 5 yillik ish tajribasiga ega. 2021-yildan buyon \"Alles Sağlık Group\" MChJga qarashli Kani-Lab laboratoriyasining Termiz filialida laboratoriya mutaxassisi sifatida faoliyat yuritib kelmoqda. 2026-yilda Respublika o‘rta tibbiyot va farmatsevtika xodimlari malakasini oshirish va ularni ixtisoslashtirish markazi Termiz filialida \"Laboratoriya ishida zamonaviy tekshirish usullari\" mutaxassisligi bo‘yicha malaka oshirish kursini muvaffaqiyatli tamomlagan.",
      ru: "Амиркулова Зилола окончила Термезский медицинский колледж Сурхандарьинской области в 2020 году по направлению \"Лабораторная диагностика\". Имеет 5-летний опыт работы в сфере лабораторных исследований. С 2021 года работает лаборантом в лаборатории Kani-Lab в Термезе, принадлежащей ООО \"Alles Sağlık Group\". В 2026 году успешно окончила курс повышения квалификации в Термезском филиале Республиканского центра повышения квалификации и специализации средних медицинских и фармацевтических работников по специальности \"Современные методы исследований в лабораторном деле\".",
      tr: "Amirqulova Zilola, 2020 yılında Surhanderya ili Termez Tıp Koleji'nin \"Laboratuvar Teşhisi\" bölümünden mezun olmuştur. Laboratuvar alanında 5 yıllık iş deneyimine sahiptir. 2021 yılından bu yana \"Alles Sağlık Group\" bünyesindeki Kani-Lab laboratuvarının Termez şubesinde laboratuvar uzmanı olarak görev yapaktadır. 2026 yılında Cumhuriyet Orta Dereceli Sağlık ve Eczacılık Çalışanları Mesleki Gelişim ve Uzmanlık Merkezi Termez Şubesi\'nde \"Laboratuvar Çalışmalarında Modern Araştırma Yöntemleri\" branşında mesleki gelişim kursunu başarıyla tamamlamıştır."
    },
    photo: zilolaImg
  },
  {
    id: "xurramova-zubayda",
    name: "Xurramova Zubayda",
    position: {
      uz: "Immunologik tekshiruvlar shifokor laboranti",
      ru: "Врач-лаборант иммунологических исследований",
      tr: "İmmünoloji Laborantı"
    },
    department: "lab",
    experience: {
      uz: "5 yillik tajriba",
      ru: "5 лет опыта",
      tr: "5 Yıllık Deneyim"
    },
    specialties: {
      uz: ["Immunologik tekshiruvlar", "Laboratoriya diagnostikasi", "Diagnostika sifat nazorati"],
      ru: ["Иммунологические исследования", "Лабораторная диагностика", "Контроль качества диагностики"],
      tr: ["İmmünolojik Araştırmalar", "Laboratuvar Teşhisi", "Teşhis Kalite Kontrolü"]
    },
    grad: {
      uz: "• Kollej: Termiz shahridagi Tibbiyot kolleji (Laboratoriya diagnostikasi yo‘nalishi, 2020-yil).\n• Malaka oshirish: Respublika o‘rta tibbiyot va farmatsevtika xodimlari malakasini oshirish va ularni ixtisoslashtirish markazi Termiz filiali, \"Laboratoriya ishida zamonaviy tekshirish usullari\" mutaxassisligi (2026-yil).",
      ru: "• Колледж: Термезский медицинский колледж (направление лабораторной диагностики, 2020 г.).\n• Повышение квалификации: Термезский филиал Республиканского центра повышения квалификации и специализации средних медицинских и фармацевтических работников, специальность \"Современные методы исследований в лабораторном деле\" (2026 г.).",
      tr: "• Kolej: Termez Tıp Koleji (Laboratuvar Teşhisi bölümü, 2020).\n• Uzmanlık Eğitimi: Cumhuriyet Orta Dereceli Sağlık ve Eczacılık Çalışanları Mesleki Gelişim ve Uzmanlık Merkezi Termez Şubesi, \"Laboratuvar Çalışmalarında Modern Araştırma Yöntemleri\" uzmanlık eğitimi (2026)."
    },
    bio: {
      uz: "Xurramova Zubayda – 2020-yilda Surxondaryo viloyati, Termiz shahridagi Tibbiyot kollejining \"Laboratoriya diagnostikasi\" yo‘nalishini tamomlagan. Laboratoriya sohasida 5 yillik ish tajribasiga ega. 2021-yildan buyon \"Alles Sağlık Group\" MChJga qarashli Kani-Lab laboratoriyasining Termiz filialida laboratoriya mutaxassisi sifatida faoliyat yuritib kelmoqda. 2026-yilda Respublika o‘rta tibbiyot va farmatsevtika xodimlari malakasini oshirish va ularni ixtisoslashtirish markazi Termiz filialida \"Laboratoriya ishida zamonaviy tekshirish usullari\" mutaxassisligi bo‘yicha malaka oshirish kursini muvaffaqiyatli tamomlagan.",
      ru: "Хуррамова Зубайда окончила Термезский медицинский колледж Сурхандарьинской области в 2020 году по направлению \"Лабораторная диагностика\". Имеет 5-летний опыт работы в сфере лабораторных исследований. С 2021 года работает лаборантом в лаборатории Kani-Lab в Термезе, принадлежащей ООО \"Alles Sağlık Group\". В 2026 году успешно окончила курс повышения квалификации в Термезском филиале Республиканского центра повышения квалификации и специализации средних медицинских и фармацевтических работников по специальности \"Современные методы исследований в лабораторном деле\".",
      tr: "Xurramova Zubayda, 2020 yılında Surhanderya ili Termez Tıp Koleji'nin \"Laboratuvar Teşhisi\" bölümünden mezun olmuştur. Laboratuvar alanında 5 yıllık iş deneyimine sahiptir. 2021 yılından bu yana \"Alles Sağlık Group\" bünyesindeki Kani-Lab laboratuvarının Termez şubesinde laboratuvar uzmanı olarak görev yapmaktadır. 2026 yılında Cumhuriyet Orta Dereceli Sağlık ve Eczacılık Çalışanları Mesleki Gelişim ve Uzmanlık Merkezi Termez Şubesi\'nde \"Laboratuvar Çalışmalarında Modern Araştırma Yöntemleri\" branşında mesleki gelişim kursunu başarıyla tamamlamıştır."
    },
    photo: zubaydaImg
  },
  {
    id: "turobova-yasmina",
    name: "Turobova Yasmina",
    position: {
      uz: "Klinik diagnostika laboratoriya shifokori",
      ru: "Врач клинической лабораторной диагностики",
      tr: "Klinik Teşhis Laboratuvar Hekimi"
    },
    department: "lab",
    experience: {
      uz: "Yosh mutaxassis",
      ru: "Молодой специалист",
      tr: "Genç Uzman"
    },
    specialties: {
      uz: ["Klinik laboratoriya diagnostikasi", "Biokimyoviy tahlillar", "Diagnostika sifat nazorati"],
      ru: ["Клиническая лабораторная диагностика", "Биохимические анализы", "Контроль качества диагностики"],
      tr: ["Klinik laboratuvar teşhisi", "Biyokimyasal analizler", "Teşhis kalite kontrolü"]
    },
    grad: {
      uz: "• Oliy ta’lim: Termiz davlat universiteti, Tabiiy fanlar fakulteti (2021–2025).\n• Ixtisoslashuv: Toshkent vrachlar malakasini oshirish instituti, \"Klinik diagnostika laboratoriya\" yo‘nalishi (2025–2026).",
      ru: "• Высшее образование: Термезский государственный университет, факультет естественных наук (2021–2025 гг.).\n• Специализация: Ташкентский институт усовершенствования врачей, направление \"Клиническая лабораторная диагностика\" (2025–2026 гг.).",
      tr: "• Lisans: Termez Devlet Üniversitesi, Doğa Bilimleri Fakültesi (2021–2025).\n• Uzmanlık: Taşkent Hekim Geliştirme Enstitüsü, \"Klinik Teşhis Laboratuvarı\" bölümü (2025–2026)."
    },
    bio: {
      uz: "Turobova Yasmina – Kani-Lab laboratoriyasining yosh va istiqbolli mutaxassisi. U fundamental biologik bilimlarni chuqur klinik diagnostika ko‘nikmalari bilan uyg‘unlashtirgan holda, laboratoriya tahlillarining aniqligini ta’minlashda muhim rol o‘ynaydi. Toshkent vrachlar malakasini oshirish institutida laboratoriya diagnostikasi bo‘yicha ixtisoslashgan Yasmina, zamonaviy tahlil metodikalarini amaliyotda qo‘llash va diagnostika sifatini oshirishga yo‘naltirilgan. Uning kasbiy yondashuvi tahlil natijalarining ishonchliligi va tezkorligiga asoslangan bo‘lib, bemorlar salomatligini aniqlashda mas’uliyat bilan xizmat qiladi.",
      ru: "Туробова Ясмина — молодой и перспективный специалист лаборатории Kani-Lab. Сочетая глубокие фундаментальные биологические знания с навыками клинической диагностики, она играет важную роль в обеспечении точности лабораторных анализов. Пройдя специализацию по лабораторной диагностике в Ташкентском институте усовершенствования врачей, Ясмина ориентирована на применение современных аналитических методов и повышение качества диагностики. Её профессиональный подход основан на надежности и оперативности результатов анализов, что позволяет ответственно служить здоровью пациентов.",
      tr: "Turobova Yasmina, Kani-Lab laboratuvarının genç ve gelecek vadeden bir uzmanıdır. Temel biyolojik bilgileri derin klinik teşhis becerileriyle birleştirerek laboratuvar testlerinin doğruluğunun sağlanmasında önemli bir rol oynamaktadır. Taşkent Hekim Geliştirme Enstitüsü'nde laboratuvar teşhisi alanında uzmanlaşan Yasmina, modern analiz yöntemlerini uygulamaya ve teşhis kalitesini artırmaya odaklanmıştır. Mesleki yaklaşımı, analiz sonuçlarının güvenilirliği ve hızına dayanmakta olup hastaların sağlığını belirlemede sorumlulukla hizmet vermektedir."
    },
    photo: yasminaImg
  },
  {
    id: "xoshiyeva-sitora",
    name: "Xo'shiyeva Sitora",
    position: {
      uz: "Klinik laboratoriya diagnostikasi mutaxassisi",
      ru: "Специалист клинической лабораторной диагностики",
      tr: "Klinik Laboratuvar Tanı Uzmanı",
      en: "Clinical Laboratory Diagnostics Specialist"
    },
    department: "lab",
    experience: {
      uz: "Yosh mutaxassis",
      ru: "Молодой специалист",
      tr: "Genç Uzman",
      en: "Junior Specialist"
    },
    specialties: {
      uz: ["Klinik laboratoriya diagnostikasi", "Immunoferment tahlili (IFA)", "Polimeraz zanjirli reaksiya (PZR) diagnostikasi"],
      ru: ["Клиническая лабораторная диагностика", "Иммуноферментный анализ (ИФА)", "Диагностика полимеразной цепной реакции (ПЦР)"],
      tr: ["Klinik laboratuvar tanısı", "Enzim Bağlantılı İmmünosorbent Analizi (ELISA)", "Polimeraz Zincir Reaksiyonu (PCR) tanısı"],
      en: ["Clinical laboratory diagnostics", "Enzyme-linked immunosorbent assay (ELISA)", "Polymerase chain reaction (PCR) diagnostics"]
    },
    grad: {
      uz: "• Oliy ta'lim: Termiz davlat universiteti, Biologiya (turlar bo'yicha) yo'nalishi, bakalavr (2024-yil).\n• Ixtisoslashuv: Toshkent tibbiyot akademiyasi, \"Klinik laboratoriya diagnostikasi\" ixtisoslik kursi (2024–2025).\n• Qo'shimcha malaka: Toshkent davlat tibbiyot universiteti, \"Klinik amaliyotda immunoferment va polimeraz zanjirli reaksiya tahlili\" uzluksiz kasbiy ta'lim kursi (2026-yil).",
      ru: "• Высшее образование: Термезский государственный университет, бакалавр по направлению \"Биология\" (2024 г.).\n• Специализация: Ташкентская медицинская академия, специализационный курс \"Клиническая лабораторная диагностика\" (2024–2025 гг.).\n• Дополнительная квалификация: Ташкентский государственный медицинский университет, курс непрерывного профессионального образования \"Анализ иммуноферментный и полимеразной цепной реакции в клинической практике\" (2026 г.).",
      tr: "• Lisans: Termez Devlet Üniversitesi, Biyoloji lisans programı (2024).\n• Uzmanlık: Taşkent Tıp Akademisi, \"Klinik Laboratuvar Tanısı\" uzmanlık kursu (2024–2025).\n• Ek Yeterlilik: Taşkent Devlet Tıp Üniversitesi, \"Klinik Uygulamada İmmünoenzim ve Polimeraz Zincir Reaksiyonu Analizi\" sürekli mesleki eğitim kursu (2026).",
      en: "• Higher Education: Termez State University, Bachelor's in Biology (2024).\n• Specialization: Tashkent Medical Academy, \"Clinical Laboratory Diagnostics\" specialization course (2024–2025).\n• Additional Qualification: Tashkent State Medical University, \"Immunoenzyme and Polymerase Chain Reaction Analysis in Clinical Practice\" continuing professional education course (2026)."
    },
    bio: {
      uz: "Xo'shiyeva Sitora – tibbiy laboratoriya diagnostikasi sohasida chuqur nazariy va amaliy bilimlarga ega malakali mutaxassis. U o'zining kasbiy faoliyatida zamonaviy laboratoriya tahlillari, xususan, immunoferment va polimeraz zanjirli reaksiya (PZR) usullarini mukammal qo'llash orqali tibbiy xizmat sifatini oshirishga yo'naltirilgan. Sitora o'z ishiga mas'uliyat bilan yondashib, bemorlarga aniq va ishonchli diagnostik ma'lumotlarni taqdim etishni o'zining asosiy vazifasi deb biladi.",
      ru: "Хошиева Ситора — квалифицированный специалист с глубокими теоретическими и практическими знаниями в области медицинской лабораторной диагностики. В своей профессиональной деятельности она направлена на повышение качества медицинских услуг путём мастерского применения современных лабораторных методов — прежде всего иммуноферментного анализа и полимеразной цепной реакции (ПЦР). Ситора ответственно подходит к своей работе и считает своей главной задачей предоставление пациентам точных и достоверных диагностических данных.",
      tr: "Xo'shiyeva Sitora, tıbbi laboratuvar tanısı alanında derin teorik ve pratik bilgilere sahip nitelikli bir uzmandır. Mesleki faaliyetlerinde, başta immünoenzim ve polimeraz zincir reaksiyonu (PCR) yöntemlerini olmak üzere modern laboratuvar analizlerini mükemmel biçimde uygulayarak tıbbi hizmet kalitesini artırmaya yöneliktir. Sitora, işine sorumlulukla yaklaşmakta ve hastalara doğru ve güvenilir tanısal bilgiler sunmayı temel görevi olarak benimsemektedir.",
      en: "Xo'shiyeva Sitora is a qualified specialist with deep theoretical and practical knowledge in the field of medical laboratory diagnostics. In her professional activities, she is focused on improving the quality of medical services by masterfully applying modern laboratory analyses, particularly immunoenzyme assay (ELISA) and polymerase chain reaction (PCR) techniques. Sitora approaches her work with great responsibility, considering the provision of accurate and reliable diagnostic information to patients as her primary mission."
    },
    photo: xoshiyevaSitoraImg
  }
];

const LABORANTS = [
  {
    name: 'Fayzullayeva Nigora',
    pos: { uz: 'Mikrobiologiya laborant vrachi', ru: 'Врач-лаборант микробиологии', tr: 'Mikrobiyoloji Uzman Doktoru' },
    exp: { uz: '9 yillik tajriba', ru: '9 лет опыта', tr: '9 Yıllık Deneyim' }
  },
  {
    name: 'Saykanova Feruza',
    pos: { uz: 'Yordamchi laborant', ru: 'Помощник лаборанта', tr: 'Laboratuvar Asistanı' },
    exp: { uz: '3 yillik tajriba', ru: '3 года опыта', tr: '3 Yıllık Deneyim' }
  }
];



// ==========================================
// CORE APP COMPONENT

const BRANCHES: {
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
      en: "Qumqo'rg'on District Medical Association Branch"
    },
    address: {
      uz: 'Qumqo‘rg‘on tumani tibbiyot birlashmasi hududida',
      ru: 'На территории Кумкурганского районного медицинского объединения',
      tr: 'Kumkurgan İlçe Tıp Birleşimi alanında',
      en: "Inside the territory of Qumqo'rg'on District Medical Association"
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
      en: "Jarqo'rg'on District Medical Association Branch"
    },
    address: {
      uz: 'Jarqo‘rg‘on tumani tibbiyot birlashmasi hududida',
      ru: 'На территории Джаркурганского районного медицинского объединения',
      tr: 'Jarkurgan İlçe Tıp Birleşimi alanında',
      en: "Inside the territory of Jarqo'rg'on District Medical Association"
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
];

// Loaded dynamically from ignored .env file or Vercel Environment Variables to prevent GitHub leaks
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || "";

const NEWS_ITEMS = [
  {
    id: 'news-video-3',
    category: 'video',
    date: '2026-06-29',
    youtubeId: 's7gVpItmnj4',
    title: {
      uz: 'O\'zbekistonda yagona hisoblangan "Kani-Lab" markaziy laboratoriyasi haqida siz bilmagan ma\'lumotlar',
      ru: 'Факты о центральной лаборатории "Kani-Lab", признанной уникальной в Узбекистане',
      tr: 'Özbekistan\'da eşsiz kabul edilen "Kani-Lab" merkez laboratuvarı hakkında bilmediğiniz gerçekler',
      en: 'Facts you did not know about the "Kani-Lab" central laboratory, considered unique in Uzbekistan'
    },
    description: {
      uz: 'Kani-Lab markaziy laboratoriyasining imkoniyatlari, tahlillar jarayoni va yuqori texnologik jihozlari haqida maxsus videolavha.',
      ru: 'Специальный видеосюжет о возможностях центральной лаборатории Kani-Lab, процессе анализа и высокотехнологичном оборудовании.',
      tr: 'Kani-Lab merkez laboratuvarının imkanları, analiz süreci и yüksek teknolojik ekipmanları hakkında özel video klip.',
      en: 'A special video segment about the capabilities of the Kani-Lab central laboratory, testing processes, and high-tech equipment.'
    },
    image: ''
  },
  {
    id: 'news-video-2',
    category: 'video',
    date: '2022-06-29',
    youtubeId: 'ip-ujIjFOzo',
    title: {
      uz: 'Termiz shahridagi Perinatal markazida Kani-Lab filiali ochildi',
      ru: 'В Перинатальном центре г. Термеза открылся филиал Kani-Lab',
      tr: 'Tirmiz şehrindeki Perinatal merkezinde Kani-Lab şubesi açıldı',
      en: 'Kani-Lab branch opened in the Perinatal Center in Termez'
    },
    description: {
      uz: 'Termiz shahridagi viloyat perinatal markazida shoshilinch hamda yuqori aniqlikdagi tahlillar uchun mo‘ljallangan Kani-Lab qo‘shma laboratoriyasi faoliyat boshladi.',
      ru: 'В областном перинатальном центре города Термеза начала работу совместная лаборатория Kani-Lab, предназначенная для проведения экстренных и высокоточных анализов.',
      tr: 'Tirmiz şehrindeki vilayet perinatal merkezinde acil и yüksek hassasiyetli analizler için tasarlanmış Kani-Lab ortak laboratuvarı faaliyete başladı.',
      en: 'A joint Kani-Lab laboratory designed for emergency and high-precision analyses has started operations in the regional perinatal center in Termez.'
    },
    image: ''
  },
  {
    id: 'news-video-1',
    category: 'video',
    date: '2021-06-29',
    youtubeId: '1AVLR1p5FUs',
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
];

const GALLERY_ITEMS = [
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
];

export default function App() {
  const [lang, setLang] = useState<'uz' | 'ru' | 'tr' | 'en'>('uz');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'about-history' | 'about-values' | 'about-mission' | 'services' | 'doctors' | 'faq' | 'contact' | 'certificates' | 'branches' | 'privacy' | 'terms' | 'news' | 'gallery'>('home');
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<'all' | 'collaboration' | 'opening' | 'womens-day'>('all');
  const [newsLightboxSrc, setNewsLightboxSrc] = useState<string | null>(null);
  const [selectedTeamDept, setSelectedTeamDept] = useState<string>('management');
  const [isMobileTeamOpen, setIsMobileTeamOpen] = useState<boolean>(false);
  const [selectedTeamMemberId, setSelectedTeamMemberId] = useState<string | null>(null);
  const [hoveredMenuDept, setHoveredMenuDept] = useState<string>('management');
  const [isMobileDeptOpen, setIsMobileDeptOpen] = useState<Record<string, boolean>>({});
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState<boolean>(false);

  // Online statistics states
  const [isStatsModalOpen, setIsStatsModalOpen] = useState<boolean>(false);
  const [statsTab, setStatsTab] = useState<'overview' | 'users' | 'devices'>('overview');
  const [onlineUsers, setOnlineUsers] = useState<any[]>([]);
  const [onlineCount, setOnlineCount] = useState<number>(0);
  const [totalVisits, setTotalVisits] = useState<number>(14250);
  const [hasDbAnalyticsTable, setHasDbAnalyticsTable] = useState<boolean>(true);
  const [userLocation, setUserLocation] = useState({
    country: 'Uzbekistan',
    countryCode: 'UZ',
    region: 'Tashkent',
    city: 'Tashkent'
  });

  const sessionStartTimeRef = useRef(new Date().toISOString());
  const sessionIdRef = useRef(Math.random().toString(36).substring(2, 11));

  // Translate tab name to display names
  const getTabDisplayName = (tabId: string) => {
    const mapping: Record<string, Record<string, string>> = {
      'home': { uz: 'Bosh sahifa', ru: 'Главная', tr: 'Ana Sayfa' },
      'about': { uz: 'Biz haqimizda', ru: 'О нас', tr: 'Hakkımızda' },
      'about-history': { uz: 'Tariximiz', ru: 'История', tr: 'Tarihimiz' },
      'about-values': { uz: 'Qadriyatlar', ru: 'Ценности', tr: 'Değerlerimiz' },
      'about-mission': { uz: 'Missiyamiz', ru: 'Миссия', tr: 'Misyonumuz' },
      'services': { uz: 'Xizmatlar', ru: 'Услуги', tr: 'Hizmetler' },
      'doctors': { uz: 'Shifokorlar', ru: 'Врачи', tr: 'Doktorlar' },
      'faq': { uz: 'FAQ', ru: 'Вопросы', tr: 'SSS' },
      'contact': { uz: 'Aloqa', ru: 'Контакты', tr: 'İletişim' },
      'certificates': { uz: 'Sertifikatlar', ru: 'Сертификаты', tr: 'Sertifikalar' },
      'branches': { uz: 'Filiallar', ru: 'Филиалы', tr: 'Şubeler' },
      'privacy': { uz: 'Maxfiylik Siyosati', ru: 'Конфиденциальность', tr: 'Gizlilik' },
      'terms': { uz: 'Foydalanish shartlari', ru: 'Условия', tr: 'Şartlar' },
      'news': { uz: 'Yangiliklar', ru: 'Новости', tr: 'Haberler' },
      'gallery': { uz: 'Galereya', ru: 'Галерея', tr: 'Galeri' },
      'news-gallery': { uz: 'Yangiliklar & Fotogalereya', ru: 'Новости и Галерея', tr: 'Haberler & Galeri' }
    };
    const val = mapping[tabId];
    if (!val) return tabId;
    return val[lang] || val['uz'];
  };

  // Device & Browser Share calculator
  const deviceAndBrowserStats = useMemo(() => {
    let mobileCount = 0;
    let desktopCount = 0;
    const browserCounts: Record<string, number> = {};

    onlineUsers.forEach(u => {
      if (u.device === 'mobile') {
        mobileCount++;
      } else {
        desktopCount++;
      }
      const b = u.browser || 'Browser';
      browserCounts[b] = (browserCounts[b] || 0) + 1;
    });

    const total = Math.max(1, onlineUsers.length);
    const mobilePercentage = Math.round((mobileCount / total) * 100);
    const desktopPercentage = Math.round((desktopCount / total) * 100);

    const browsersList = Object.entries(browserCounts).map(([name, count]) => ({
      name,
      count,
      percentage: Math.round((count / total) * 100)
    })).sort((a, b) => b.count - a.count);

    return {
      mobileCount,
      desktopCount,
      mobilePercentage,
      desktopPercentage,
      browsersList
    };
  }, [onlineUsers]);

  // Flag emoji helper
  const getFlagEmoji = (countryCode: string) => {
    if (!countryCode) return '🌐';
    if (countryCode === 'UNKNOWN') return '🌐';
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    try {
      return String.fromCodePoint(...codePoints);
    } catch (e) {
      return '🌐';
    }
  };

  // Time ago helper
  const getTimeAgo = (joinedAtStr: string) => {
    if (!joinedAtStr) return 'just now';
    const joinedAt = new Date(joinedAtStr);
    const now = new Date();
    const diffMs = now.getTime() - joinedAt.getTime();
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    
    if (diffMins < 1) {
      return lang === 'uz' ? 'Hozirgina' : lang === 'ru' ? 'Только что' : 'Just now';
    }
    return lang === 'uz' ? `${diffMins} daqiqa oldin` : lang === 'ru' ? `${diffMins} мин. назад` : `${diffMins}m ago`;
  };

  // Country share calculator
  const countryStats = useMemo(() => {
    const stats: Record<string, { count: number; code: string }> = {};
    onlineUsers.forEach((u) => {
      const country = u.country || 'Uzbekistan';
      const code = u.countryCode || 'UZ';
      if (!stats[country]) {
        stats[country] = { count: 0, code };
      }
      stats[country].count += 1;
    });
    return Object.entries(stats).map(([name, val]) => ({
      name,
      code: val.code,
      count: val.count,
      percentage: Math.round((val.count / Math.max(1, onlineUsers.length)) * 100)
    })).sort((a, b) => b.count - a.count);
  }, [onlineUsers]);

  // Geolocation API fetch
  useEffect(() => {
    const fetchGeoLocation = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (res.ok) {
          const data = await res.json();
          if (data && data.country_name) {
            setUserLocation({
              country: data.country_name,
              countryCode: data.country_code || 'UZ',
              region: data.region || 'Tashkent',
              city: data.city || 'Tashkent'
            });
            return;
          }
        }
      } catch (e) {
        console.warn("ipapi.co failed, trying fallback...", e);
      }
      
      try {
        const res = await fetch('https://ipwhois.app/json/');
        if (res.ok) {
          const data = await res.json();
          if (data && data.country) {
            setUserLocation({
              country: data.country,
              countryCode: data.country_code || 'UZ',
              region: data.region || 'Tashkent',
              city: data.city || 'Tashkent'
            });
            return;
          }
        }
      } catch (err) {
        console.warn("All geolocation APIs failed, using defaults:", err);
      }
    };
    fetchGeoLocation();
  }, []);

  // Supabase Presence tracking
  useEffect(() => {
    if (!supabase) {
      setHasDbAnalyticsTable(false);
      return;
    }

    const channel = supabase.channel('kanilab-online-stats', {
      config: {
        presence: {
          key: 'user-session',
        },
      },
    });

    const deviceType = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
    const browserName = navigator.userAgent.includes('Edg') ? 'Edge' :
                        navigator.userAgent.includes('Chrome') ? 'Chrome' :
                        navigator.userAgent.includes('Firefox') ? 'Firefox' :
                        navigator.userAgent.includes('Safari') ? 'Safari' : 'Browser';

    channel
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState();
        const formattedUsers: any[] = [];
        
        Object.keys(state).forEach((key) => {
          const presences = state[key] as any[];
          presences.forEach((p) => {
            formattedUsers.push(p);
          });
        });
        
        setOnlineUsers(formattedUsers);
        setOnlineCount(formattedUsers.length);
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await channel.track({
            country: userLocation.country,
            countryCode: userLocation.countryCode,
            region: userLocation.region,
            city: userLocation.city,
            browser: browserName,
            device: deviceType,
            activeTab: activeTab,
            joinedAt: sessionStartTimeRef.current,
            sessionId: sessionIdRef.current
          });
        }
      });

    return () => {
      channel.unsubscribe();
    };
  }, [userLocation, activeTab]);

  // Visit counting logger
  useEffect(() => {
    const sessionVisitKey = 'kanilab_visit_registered';
    const hasVisitedThisSession = sessionStorage.getItem(sessionVisitKey);
    
    const registerVisit = async () => {
      let localVisits = parseInt(localStorage.getItem('kanilab_local_visits') || '14250', 10);
      if (!hasVisitedThisSession) {
        localVisits += 1;
        localStorage.setItem('kanilab_local_visits', localVisits.toString());
        sessionStorage.setItem(sessionVisitKey, 'true');
      }
      setTotalVisits(localVisits);

      if (!supabase) {
        setHasDbAnalyticsTable(false);
        return;
      }

      try {
        if (!hasVisitedThisSession) {
          const deviceType = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
          const browserName = navigator.userAgent.includes('Edg') ? 'Edge' :
                              navigator.userAgent.includes('Chrome') ? 'Chrome' :
                              navigator.userAgent.includes('Firefox') ? 'Firefox' :
                              navigator.userAgent.includes('Safari') ? 'Safari' : 'Browser';

          const { error: insertError } = await supabase
            .from('kanilab_analytics')
            .insert({
              country: userLocation.country,
              region: userLocation.region,
              city: userLocation.city,
              browser: browserName,
              device: deviceType
            });
            
          if (insertError) {
            setHasDbAnalyticsTable(false);
          }
        }

        const { count, error: countError } = await supabase
          .from('kanilab_analytics')
          .select('*', { count: 'exact', head: true });

        if (countError) {
          setHasDbAnalyticsTable(false);
        } else if (count !== null) {
          setTotalVisits(count + 14250);
          setHasDbAnalyticsTable(true);
        }
      } catch (err) {
        console.warn("Analytics DB operation failed:", err);
        setHasDbAnalyticsTable(false);
      }
    };

    if (userLocation.country) {
      registerVisit();
    }
  }, [userLocation]);

  // Qanday boriladi states
  const [routeFrom, setRouteFrom] = useState('');
  const [routeToBranchId, setRouteToBranchId] = useState('qiziriq-ttb');
  const [travelMode, setTravelMode] = useState<'driving' | 'transit' | 'walking'>('driving');

  // Synchronize hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/team/')) {
        const memberId = hash.replace('#/team/', '');
        setActiveTab('doctors');
        setSelectedTeamMemberId(memberId);
      } else if (hash === '#/team') {
        setActiveTab('doctors');
        setSelectedTeamMemberId(null);
        setSelectedTeamDept('management');
      } else {
        const tab = hash.replace('#', '');
        if (['home', 'about', 'about-history', 'about-values', 'about-mission', 'services', 'doctors', 'faq', 'contact', 'certificates', 'branches', 'privacy', 'terms', 'news', 'gallery'].includes(tab)) {
          setActiveTab(tab as any);
          setSelectedTeamMemberId(null);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial call
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update SEO Document Title dynamically when viewing profile
  useEffect(() => {
    if (activeTab === 'doctors' && selectedTeamMemberId) {
      // Find team member
      const member = TEAM_MEMBERS.find(m => m.id === selectedTeamMemberId) || 
                     LABORANTS.find(l => l.name.toLowerCase().replace(/[^a-z0-9]/g, '-') === selectedTeamMemberId);
      if (member) {
        document.title = `${member.name} - Kani-Lab`;
      }
    } else {
      document.title = 'Kani-Lab | Diagnostika Laboratoriyasi';
    }
  }, [activeTab, selectedTeamMemberId]);
  
  // Helper to fallback safely if a translation is missing (especially for Turkish)
  const getLangText = (obj: any) => {
    if (!obj) return '';
    return obj[lang] || obj['uz'] || obj['ru'] || '';
  };

  const getLangTextInline = (uz: string, ru: string, tr: string, en: string) => {
    if (lang === 'uz') return uz;
    if (lang === 'ru') return ru;
    if (lang === 'en') return en;
    return tr;
  };
  
  // Hero Typed.js State
  const typedEl = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (activeTab === 'home' && typedEl.current) {
      const typed = new Typed(typedEl.current, {
        strings: lang === 'uz' ? [
          "Xalqaro standartlar asosida aniq diagnostika.",
          "Turkiya va Niderlandiya texnologiyalari.",
          "Robotlashtirilgan laboratoriya tizimi.",
          "180+ turdagi tezkor tahlillar.",
          "Sizning salomatligingiz – bizning maqsadimiz."
        ] : lang === 'ru' ? [
          "Точная диагностика по международным стандартам.",
          "Технологии Турции и Нидерландов.",
          "Роботизированная лабораторная система.",
          "Более 180 видов экспресс-анализов.",
          "Ваше здоровье – наша цель."
        ] : lang === 'en' ? [
          "Accurate diagnostics based on international standards.",
          "Technologies from Turkey and the Netherlands.",
          "Robotic laboratory systems.",
          "180+ types of rapid analyses.",
          "Your health is our goal."
        ] : [
          "Uluslararası standartlarda doğru teşhis.",
          "Türkiye ve Hollanda teknolojileri.",
          "Robotik laboratuvar sistemi.",
          "180+ çeşit hızlı analiz.",
          "Sağlığınız – hedefimiz."
        ],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 2500,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '_',
        smartBackspace: true
      });

      return () => {
        typed.destroy();
      };
    }
  }, [activeTab, lang]);

  
  // Reviews State
  const [userReviews, setUserReviews] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem('kanilab_reviews');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', role: '', review: '', rating: 5 });
  
  // State for search and filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMedicalField, setSelectedMedicalField] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [selectedFasting, setSelectedFasting] = useState<string>('all');
  const [sortOption, setSortOption] = useState<string>('default');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [expandedAccordion, setExpandedAccordion] = useState<Record<string, boolean>>({});
  
  // Cart for selected tests
  const [cart, setCart] = useState<string[]>([]);
  
  // AI assistant states
  const [aiSymptom, setAiSymptom] = useState<string | null>(null);
  
  // Modal booking states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [isSendingTelegram, setIsSendingTelegram] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientPhoneCountry, setPatientPhoneCountry] = useState(PHONE_COUNTRIES[0]);
  const [patientEmail, setPatientEmail] = useState('');
  
  // Custom Searchable Branch Dropdown States
  const [selectedBranch, setSelectedBranch] = useState('Qiziriq tuman tibbiyot birlashmasi');
  const [isBranchDropdownOpen, setIsBranchDropdownOpen] = useState(false);
  const [branchSearchQuery, setBranchSearchQuery] = useState('');

  const [selectedDate, setSelectedDate] = useState('2026-06-27');
  const [selectedTime, setSelectedTime] = useState('08:00 - 08:30');

  const BRANCH_CATEGORIES = [
    {
      category: "Tuman Tibbiyot Birlashmalari (TTB)",
      options: [
        "Qiziriq tuman tibbiyot birlashmasi",
        "Sherobod tuman tibbiyot birlashmasi",
        "Angor tuman tibbiyot birlashmasi",
        "Uchqizil tuman tibbiyot birlashmasi",
        "Sho‘rchi tuman tibbiyot birlashmasi",
        "Qumqo‘rg‘on tuman tibbiyot birlashmasi",
        "Jarqo‘rg‘on tuman tibbiyot birlashmasi",
        "Boysun tuman tibbiyot birlashmasi"
      ]
    },
    {
      category: "Respublika va Viloyat Markazlari",
      options: [
        "Respublika ixtisoslashtirilgan onkologiya va radiologiya ilmiy-amaliy tibbiyot markazi Surxondaryo viloyat filiali",
        "Surxondaryo viloyat ko‘p tarmoqli bolalar tibbiyot markazi",
        "Respublika shoshilinch tibbiy yordam ilmiy markazi Surxondaryo filiali",
        "Respublika ixtisoslashtirilgan kardiologiya ilmiy-amaliy tibbiyot markazi Surxondaryo viloyat filiali",
        "Surxondaryo viloyati perinatal markazi",
        "Surxondaryo viloyat qon quyish markazi",
        "Surxondaryo viloyat ko'p tarmoqli tibbiyot markazi"
      ]
    }
  ];

  const [isProcessingBooking, setIsProcessingBooking] = useState(false);
  const [generatedTicketID, setGeneratedTicketID] = useState('');

  // Check Ticket State
  const [isCheckModalOpen, setIsCheckModalOpen] = useState(false);
  const [checkInputId, setCheckInputId] = useState('');
  const [foundTicket, setFoundTicket] = useState<any>(null);
  const [checkError, setCheckError] = useState('');

  // FAQ Accordion Active Index
  const [faqActive, setFaqActive] = useState<number | null>(null);
  
  // Lightbox Gallery state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isCertLightboxOpen, setIsCertLightboxOpen] = useState(false);
  const [isBuildingLightboxOpen, setIsBuildingLightboxOpen] = useState(false);

  // Floating menu state
  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Global security protections: Disable right-click, image dragging, and inspector hotkeys (F12, etc.)
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }
      e.preventDefault();
    };

    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.key === 'S' || e.key === 's'))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactFormErrors, setContactFormErrors] = useState({ name: '', phone: '' });

  // Auto slider testimonial state
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [selectedAnalyzer, setSelectedAnalyzer] = useState<typeof ANALYZERS_DATA[0] | null>(null);

  // Onboarding Tour state
  const [showTourPrompt, setShowTourPrompt] = useState(false);
  const [activeTourStep, setActiveTourStep] = useState(-1);
  const [tourRect, setTourRect] = useState<DOMRect | null>(null);

  // Tour Steps Configuration
  const tourSteps = [
    {
      targetId: "navbar-logo",
      title: {
        uz: "Kani-Lab Logotipi",
        ru: "Логотип Kani-Lab",
        tr: "Kani-Lab Logosu",
        en: "Kani-Lab Logo"
      },
      icon: "🏥",
      desc: {
        uz: "KANI-LAB klinik laboratoriyasiga xush kelibsiz! Ushbu logotipni bosish orqali istalgan sahifadan bosh sahifaga qaytishingiz mumkin.",
        ru: "Добро пожаловать в клиническую лабораторию KANI-LAB! Нажав на этот логотип, вы можете вернуться на главную страницу с любой другой.",
        tr: "KANI-LAB klinik laboratuvarına hoş geldiniz! Bu logoya tıklayarak herhangi bir sayfadan ana sayfaya geri dönebilirsiniz.",
        en: "Welcome to KANI-LAB clinical laboratory! By clicking this logo, you can return to the home page from any other page."
      }
    },
    {
      targetId: "navbar-link-home",
      title: {
        uz: "Bosh sahifa",
        ru: "Главная страница",
        tr: "Ana Sayfa",
        en: "Home Page"
      },
      icon: "🏠",
      desc: {
        uz: "Saytning asosiy sahifasiga o'tish. Bu yerda siz laboratoriyamiz haqida umumiy va eng  muhim ma'lumotlarni topasiz.",
        ru: "Переход на главную страницу. Здесь вы найдете общую и самую важную информацию о нашей лаборатории.",
        tr: "Ana sayfaya geçiş. Burada laboratuvarımız hakkında genel ve en önemli bilgileri bulabilirsiniz.",
        en: "Go to the home page. Here you will find general and most important information about our laboratory."
      }
    },
    {
      targetId: "navbar-dropdown-about",
      title: {
        uz: "Biz haqimizda",
        ru: "О нас",
        tr: "Hakkımızda",
        en: "About Us"
      },
      icon: "🔬",
      desc: {
        uz: "Laboratoriyamiz tarixi, qadriyatlari, missiyasi va litsenziyalari bilan tanishish uchun ushbu bo'limni ko'zdan kechiring.",
        ru: "Изучите этот раздел, чтобы узнать об истории, ценностях, миссии и лицензиях нашей лаборатории.",
        tr: "Laboratuvarımızın tarihçesi, değerleri, misyonu ve lisansları hakkında bilgi edinmek için bu bölümü inceleyin.",
        en: "Browse this section to learn about the history, values, mission, and licenses of our laboratory."
      }
    },
    {
      targetId: "navbar-services",
      title: {
        uz: "Tahlillar katalogi",
        ru: "Каталог анализов",
        tr: "Analiz Kataloğu",
        en: "Analyses Catalog"
      },
      icon: "🧪",
      desc: {
        uz: "Bizning barcha tahlillarimiz ro'yxati, ularning batafsil tavsiflari, topshirish qoidalari va narxlari bilan ushbu bo'limda tanishishingiz mumkin.",
        ru: "В этом разделе вы можете ознакомиться со списком всех наших анализов, их подробным описанием, правилами сдачи и ценами.",
        tr: "Bu bölümde tüm analizlerimizin listesini, detaylı açıklamalarını, verilme kurallarını ogrenip fiyatlarını inceleyebilirsiniz.",
        en: "In this section, you can review the list of all our analyses, their detailed descriptions, preparation rules, and prices."
      }
    },
    {
      targetId: "navbar-dropdown-team",
      title: {
        uz: "Mutaxassislarimiz",
        ru: "Наши специалисты",
        tr: "Uzmanlarımız",
        en: "Our Team"
      },
      icon: "👨‍⚕️",
      desc: {
        uz: "Kani-Lab ning yuqori malakali shifokorlari, laboratoriya mutaxassislari hamda tibbiy xodimlari ro'yxati va ular haqida ma'lumot.",
        ru: "Список и информация о высококвалифицированных врачах, лабораторных специалистах и медицинском персонале Kani-Lab.",
        tr: "Kani-Lab'ın yüksek nitelikli doktorları, laboratuvar uzmanları ve tıbbi personeli hakkında bilgi ve listeler.",
        en: "The list and details of Kani-Lab's highly qualified doctors, laboratory specialists, and medical staff."
      }
    },
    {
      targetId: "navbar-link-faq",
      title: {
        uz: "Ko'p beriladigan savollar",
        ru: "Часто задаваемые вопросы",
        tr: "Sıkça Sorulan Sorular",
        en: "FAQ"
      },
      icon: "❓",
      desc: {
        uz: "Tahlillar topshirish va laboratoriya xizmatlariga doir tez-tez beriladigan savollarga javoblarni shu yerdan topishingiz mumkin.",
        ru: "Здесь вы найдете ответы на часто задаваемые вопросы, касающиеся сдачи анализов и лабораторных услуг.",
        tr: "Analiz süreçleri ve laboratuvar hizmetleriyle ilgili sıkça sorulan soruların yanıtlarını buradan bulabilirsiniz.",
        en: "Here you can find answers to frequently asked questions regarding sample submission and laboratory services."
      }
    },
    {
      targetId: "navbar-link-news",
      title: {
        uz: "Yangiliklar va Blog",
        ru: "Новости и Блог",
        tr: "Haberler ve Blog",
        en: "News & Blog"
      },
      icon: "📰",
      desc: {
        uz: "Tibbiyot sohasidagi eng so'nggi yangiliklar, laboratoriya e'lonlari va salomatlikka oid foydali maqolalar bo'limi.",
        ru: "Раздел последних новостей в области медицины, объявлений лаборатории и полезных статей о здоровье.",
        tr: "Tıp alanındaki en son haberler, laboratuvar duyuruları ogrenip sağlıkla ilgili faydalı makalelerin yer aldığı bölüm.",
        en: "The section containing the latest medical news, laboratory announcements, and useful health articles."
      }
    },
    {
      targetId: "navbar-dropdown-contact",
      title: {
        uz: "Aloqa va Filiallar",
        ru: "Контакты и Филиалы",
        tr: "İletişim ve Şubeler",
        en: "Contacts & Branches"
      },
      icon: "📞",
      desc: {
        uz: "Biz bilan bog'lanish ma'lumotlari hamda barcha filiallarimizning joylashuvi, telefon raqamlari va manzillari.",
        ru: "Контактная информация для связи с нами, а также расположение, телефоны и адреса всех наших филиалов.",
        tr: "Bizimle iletişime geçebileceğiniz bilgiler и tüm şubelerinin konumları, telefon numaraları ve adresleri.",
        en: "Contact details to reach us, alongside locations, phone numbers, and addresses of all our branches."
      }
    },
    {
      targetId: "lang-switcher",
      title: {
        uz: "Tilni o'zgartirish",
        ru: "Выбор языка",
        tr: "Dil Seçimi",
        en: "Language Selection"
      },
      icon: "🌐",
      desc: {
        uz: "Saytdan o'zingizga qulay tilda foydalaning. Biz o'zbek, rus, turk va ingliz tillarini qo'llab-quvvatlaymiz.",
        ru: "Пользуйтесь сайтом на удобном для вас языке. Мы поддерживаем узбекский, русский, турецкий и английский языки.",
        tr: "Web sitemizi sizin için en uygun dilde kullanın. Özbekçe, Rusça, Türkçe ve İngilizce dillerini destekliyoruz.",
        en: "Use the website in your preferred language. We support Uzbek, Russian, Turkish, and English languages."
      }
    },
    {
      targetId: "theme-toggle",
      title: {
        uz: "Mavzuni almashtirish",
        ru: "Смена темы",
        tr: "Tema Değişimi",
        en: "Theme Toggle"
      },
      icon: "🌙",
      desc: {
        uz: "Ko'zlaringiz charchamasligi uchun qorong'u (tungi) va yorug' (kunduzgi) mavzular orasida osongina almashing.",
        ru: "Легко переключайтесь между темной (ночной) и светлой (дневной) темами, чтобы ваши глаза не уставали.",
        tr: "Gözlerinizin yorulmaması için karanlık (gece) ve aydınlık (gündüz) temalar arasında kolayca geçiş yapın.",
        en: "Easily toggle between dark (night) and light (day) themes to keep your eyes comfortable."
      }
    },
    {
      targetId: "navbar-check-receipt",
      title: {
        uz: "Chekni onlayn tekshirish",
        ru: "Онлайн проверка чека",
        tr: "Faturayı Çevrimiçi Kontrol Et",
        en: "Online Receipt Check"
      },
      icon: "🔍",
      desc: {
        uz: "Natijalaringiz tayyor bo'ldimi? Chekdagi shtrix-kod raqamini kiritib, tahlil natijalarini istalgan vaqtda yuklab oling.",
        ru: "Ваши результаты готовы? Введите номер штрих-кода с чека и скачайте результаты анализов в любое время.",
        tr: "Sonuçlarınız hazır mı? Faturadaki barkod numarasını girerek analiz sonuçlarınızı istediğiniz zaman indirin.",
        en: "Are your results ready? Enter the barcode number from your receipt and download your analysis results at any time."
      }
    },
    {
      targetId: "book-appointment-navbar",
      title: {
        uz: "Navbat band qilish",
        ru: "Запись на прием",
        tr: "Randevu Al",
        en: "Book Appointment"
      },
      icon: "📅",
      desc: {
        uz: "Laboratoriyada navbat kutmaslik uchun qulay vaqt va filialni tanlab, onlayn tarzda navbat oling.",
        ru: "Запишитесь на прием онлайн, выбрав удобное время и филиал, чтобы избежать очередей в лаборатории.",
        tr: "Laboratuvarda sıra beklememek için uygun bir saat ve şube seçerek çevrimiçi randevunuzu alın.",
        en: "Book an appointment online by choosing a convenient time and branch to avoid queues at the laboratory."
      }
    },
    {
      targetId: "footer-brand",
      title: {
        uz: "Brend va Ijtimoiy tarmoqlar",
        ru: "Бренд и Соцсети",
        tr: "Marka ve Sosyal Medya",
        en: "Brand & Socials"
      },
      icon: "✨",
      desc: {
        uz: "Biz haqimizda qisqacha ma'lumot va eng so'nggi yangiliklarimizdan xabardor bo'lish uchun rasmiy ijtimoiy tarmoqlarimizga havolalar.",
        ru: "Краткая информация о нас и ссылки на наши официальные социальные сети, чтобы оставаться в курсе последних новостей.",
        tr: "Hakkımızda kısa bir bilgi ve en son gelişmelerden haberdar olmak için resmi sosyal medya hesaplarımızın bağlantıları.",
        en: "A brief description of us and links to our official social media accounts to keep up with the latest updates."
      }
    },
    {
      targetId: "footer-info",
      title: {
        uz: "Bosh Ofis va Ish tartibi",
        ru: "Главный офис и График",
        tr: "Merkez Ofis ve Çalışma Saatleri",
        en: "Head Office & Schedule"
      },
      icon: "📍",
      desc: {
        uz: "Bizning bosh ofisimiz manzili va sizga xizmat ko'rsatadigan ish kunlari hamda ish soatlarimiz haqida ma'lumot.",
        ru: "Информация об адресе нашего главного офиса, а также рабочих днях и часах приема посетителей.",
        tr: "Merkez ofisimizin adresi ile size hizmet verdiğimiz çalışma günleri ve saatlerimiz hakkında bilgiler.",
        en: "Information about our main office address, as well as working days and visitor reception hours."
      }
    },
    {
      targetId: "footer-contact",
      title: {
        uz: "Tezkor Aloqa raqamlari",
        ru: "Номера для связи",
        tr: "Hızlı Иletişim Numaraları",
        en: "Quick Contact Numbers"
      },
      icon: "📬",
      desc: {
        uz: "Sizda savol yoki takliflar bormi? Telefon raqamlarimiz orqali qo'ng'iroq qiling, mutaxassislarimiz yordam berishga tayyor.",
        ru: "У вас есть вопросы или предложения? Позвоните по нашим номерам, наши специалисты всегда готовы помочь.",
        tr: "Sorularınız veya önerileriniz mi var? Telefon numaralarımızdan bizi arayın, uzmanlarımız yardıma hazır.",
        en: "Do you have questions or feedback? Call us at our phone numbers, our specialists are ready to assist you."
      }
    },
    {
      targetId: "footer-links",
      title: {
        uz: "Foydali havolalar",
        ru: "Полезные ссылки",
        tr: "Faydalı Bağlantılar",
        en: "Useful Links"
      },
      icon: "🔗",
      desc: {
        uz: "Maxfiylik siyosati, foydalanish shartlari, fotogalereya, sertifikatlarimiz va jonli vaqtda platforma statistikasiga o'tish.",
        ru: "Быстрый переход к политике конфиденциальности, условиям использования, фотогалерее, сертификатам и живой статистике.",
        tr: "Gizlilik politikası, kullanım koşulları, fotoğraf galerisi, sertifikalarımız ve canlı istatistiklere hızlı erişim.",
        en: "Quick access to the Privacy Policy, Terms of Use, Photo Gallery, Certificates, and Live Analytics."
      }
    },
    {
      targetId: "footer-copyright",
      title: {
        uz: "Mualliflik huquqi",
        ru: "Авторские права",
        tr: "Telif Hakkı",
        en: "Copyright Notice"
      },
      icon: "©️",
      desc: {
        uz: "Barcha huquqlar himoyalangan. Saytdan olingan ma'lumotlardan foydalanganda KANI-LAB klinik laboratoriyasiga havola ko'rsatilishi shart.",
        ru: "Все права защищены. При использовании материалов с сайта ссылка на клиническую лабораторию KANI-LAB обязательна.",
        tr: "Tüm hakları saklıdır. Sitedeki materyallerin kullanımında KANI-LAB klinik laboratuvarına atıfta bulunulması zorunludur.",
        en: "All rights reserved. When using materials from the website, a reference to KANI-LAB clinical laboratory is mandatory."
      }
    }
  ];

  // Show onboarding prompt banner to first-time visitors
  // Also supports ?tour=true URL param to force-start tour (no DevTools needed)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    // ?tour=true → immediately start tour at step 0
    if (params.get('tour') === 'true') {
      localStorage.removeItem('kanilab_tour_completed');
      setShowTourPrompt(false);
      setTimeout(() => setActiveTourStep(0), 300);
      // Clean URL without reload
      const cleanUrl = window.location.pathname;
      window.history.replaceState({}, '', cleanUrl);
      return;
    }

    // ?reset-tour → show prompt again
    if (params.get('reset-tour') !== null) {
      localStorage.removeItem('kanilab_tour_completed');
      const cleanUrl = window.location.pathname;
      window.history.replaceState({}, '', cleanUrl);
    }

    const isCompleted = localStorage.getItem('kanilab_tour_completed');
    if (!isCompleted) {
      const timer = setTimeout(() => {
        setShowTourPrompt(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Update spotlight rect when activeTourStep changes or window scroll/resize occurs
  useEffect(() => {
    if (activeTourStep < 0 || activeTourStep >= tourSteps.length) {
      setTourRect(null);
      return;
    }

    // Desktop-only elements that are hidden on mobile (<1280px)
    const desktopOnlyIds = [
      'navbar-link-home','navbar-dropdown-about','navbar-services','navbar-dropdown-team',
      'navbar-link-faq','navbar-link-news','navbar-dropdown-contact',
      'lang-switcher','navbar-check-receipt','book-appointment-navbar'
    ];

    const updateRect = () => {
      const step = tourSteps[activeTourStep];
      const isMobile = window.innerWidth < 1280;

      // On mobile, desktop-only nav elements → fall back to hamburger button
      let targetId = step.targetId;
      if (isMobile && desktopOnlyIds.includes(targetId)) {
        targetId = 'mobile-menu-toggle';
      }

      const el = document.getElementById(targetId);
      if (el) {
        const rect = el.getBoundingClientRect();
        // Element exists but is invisible (hidden via display:none etc.)
        if (rect.width === 0 && rect.height === 0) {
          // Try hamburger as last resort
          const hamburger = document.getElementById('mobile-menu-toggle');
          if (hamburger) {
            const hr = hamburger.getBoundingClientRect();
            setTourRect(hr);
          } else {
            setTourRect(null);
          }
          return;
        }
        if (targetId.startsWith('footer-')) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setTourRect(rect);
      } else {
        setTourRect(null);
      }
    };

    updateRect();
    const t1 = setTimeout(updateRect, 150);
    const t2 = setTimeout(updateRect, 450);

    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
    };
  }, [activeTourStep]);

  // Load language and dark mode from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('kanilab_lang');
    if (savedLang === 'uz' || savedLang === 'ru' || savedLang === 'tr' || savedLang === 'en') {
      setLang(savedLang as any);
    }
    const savedDark = localStorage.getItem('kanilab_dark');
    if (savedDark === 'true') {
      setDarkMode(true);
    }
  }, []);

  // Sync dark class on document element for tailwind dark:... classes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Sync state changes with localStorage
  const handleLangChange = (newLang: 'uz' | 'ru' | 'tr' | 'en') => {
    setLang(newLang as any);
    localStorage.setItem('kanilab_lang', newLang);
  };

  const handleBookingConfirm = () => {
    setIsProcessingBooking(true);
    // Simulate high-fidelity laboratory reservation process
    setTimeout(() => {
      const newId = `KL-${Math.floor(100000 + Math.random() * 900000)}`;
      setGeneratedTicketID(newId);
      setIsProcessingBooking(false);
      setBookingStep(4);

      // Save to localStorage for patient to check later
      const newTicket = {
        id: newId,
        patientName,
        patientPhone,
        selectedDate,
        selectedTime,
        selectedBranch,
        cart,
        cartTotalAmount,
        timestamp: new Date().toISOString()
      };
      try {
        const existing = JSON.parse(localStorage.getItem('kanilab_tickets') || '[]');
        existing.push(newTicket);
        localStorage.setItem('kanilab_tickets', JSON.stringify(existing));
      } catch(e) {}

      // Save to Supabase DB for cross-device verification
      try {
        if (supabase) {
          supabase.from('kanilab_tickets').insert([
            {
              id: newId,
              patient_name: patientName,
              patient_phone: patientPhone,
              selected_date: selectedDate,
              selected_time: selectedTime,
              selected_branch: selectedBranch,
              cart: cart,
              cart_total_amount: cartTotalAmount,
              timestamp: newTicket.timestamp
            }
          ]).then(({ error }) => {
            if (error) console.error("Supabase insert error:", error);
          });
        }
      } catch(err) {
        console.error("Supabase insert error:", err);
      }

    }, 1500);
  };

  const handleCheckTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    setCheckError('');
    setFoundTicket(null);
    const rawInput = checkInputId.trim();
    if (!rawInput) return;
    
    const searchId = rawInput.toUpperCase().startsWith('KL-') ? rawInput.toUpperCase() : `KL-${rawInput}`;
    
    // Check locally first
    let localMatch = null;
    try {
      const existing = JSON.parse(localStorage.getItem('kanilab_tickets') || '[]');
      localMatch = existing.find((t: any) => t.id === searchId || t.id.replace(/\D/g, '') === rawInput);
    } catch(e) {}

    // Check on Supabase database if not found locally
    let supabaseMatch = null;
    if (!localMatch && supabase) {
      try {
        const { data, error } = await supabase
          .from('kanilab_tickets')
          .select('*')
          .eq('id', searchId)
          .single();
        if (data && !error) {
          supabaseMatch = {
            id: data.id,
            patientName: data.patient_name,
            patientPhone: data.patient_phone,
            selectedDate: data.selected_date,
            selectedTime: data.selected_time,
            selectedBranch: data.selected_branch,
            cart: data.cart,
            cartTotalAmount: data.cart_total_amount,
            timestamp: data.timestamp
          };
        }
      } catch(err) {
        console.error("Supabase query error:", err);
      }
    }

    const finalMatch = localMatch || supabaseMatch;

    // Send verification query to Telegram bot
    try {
      const statusText = finalMatch
        ? `✅ TOPILDI — Chek raqami: ${searchId}\n👤 Bemor: ${finalMatch.patientName}\n📞 Telefon: ${finalMatch.patientPhone}\n📅 Sana: ${finalMatch.selectedDate} ${finalMatch.selectedTime}`
        : `❌ TOPILMADI — Tekshirilgan raqam: ${searchId}`;
      
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: '5393810155',
          text: `🔍 *CHEK TEKSHIRISH*\n━━━━━━━━━━━━\n${statusText}`,
          parse_mode: 'Markdown'
        })
      });
    } catch(e) { /* bot xatoligi UI ni to'xtatmasin */ }

    // Show result in UI
    if (finalMatch) {
      setFoundTicket(finalMatch);
    } else {
      setCheckError(lang === 'uz' ? 'Bunday raqamli chek topilmadi' : lang === 'ru' ? 'Чек с таким номером не найден' : 'Bunday raqamli chek topilmadi');
    }
  };

  const handleSendToTelegram = async () => {
    setIsSendingTelegram(true);
    try {
      const { toPng: _toPng } = await import('html-to-image');
      const { jsPDF: _jsPDF } = await import('jspdf');

      const ticketElement = document.getElementById('printable-ticket');
      if (!ticketElement) {
        console.error("Printable ticket element not found!");
        setIsSendingTelegram(false);
        return;
      }

      // Lower pixelRatio = smaller file size
      const dataUrl = await _toPng(ticketElement, { 
        pixelRatio: 1.5,
        style: { margin: '0' },
        quality: 0.8,
        cacheBust: true, // fix cache issues
        skipFonts: false // ensure fonts render
      });
      
      const img = new Image();
      img.src = dataUrl;
      await new Promise((resolve) => { img.onload = resolve; });

      // Use A5-like portrait size in mm for compact output
      const pdf = new _jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [80, 200]  // receipt width 80mm
      });

      // --- Cover page: Name + Ticket ID overlay ---
      pdf.setFillColor(0, 180, 216);
      pdf.rect(0, 0, 80, 20, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.text('KANILAB - ' + getLangTextInline('CHIPTA', 'ЧЕК', 'BİLET', 'RECEIPT'), 4, 7);
      pdf.setFontSize(8);
      pdf.text(getLangTextInline('Bemor', 'Пациент', 'Hasta', 'Patient') + `: ${patientName}`, 4, 13);
      pdf.text(getLangTextInline('Raqam', 'Номер', 'Numara', 'Number') + `: ${generatedTicketID}`, 4, 18);

      // --- Ticket image below the header ---
      const pageW = 80;
      const imgH = (img.height / img.width) * pageW;
      pdf.addImage(dataUrl, 'JPEG', 0, 22, pageW, Math.min(imgH, 175));
      
      const pdfBlob = pdf.output('blob');

      const formData = new FormData();
      formData.append('chat_id', '5393810155');
      const fileName = `KaniLab_${generatedTicketID}_${patientName.replace(/\s+/g, '_')}.pdf`;
      formData.append('document', pdfBlob, fileName);
      formData.append('caption',
        `🏥 *YANGI BEMOR*\n` +
        `━━━━━━━━━━━━━━━\n` +
        `📋 Chek: \`${generatedTicketID}\`\n` +
        `👤 Bemor: ${patientName}\n` +
        `📞 Telefon: ${patientPhone}\n` +
        `🏢 Filial: ${selectedBranch}\n` +
        `📅 Sana: ${selectedDate} — ${selectedTime}\n` +
        `🧪 Tahlillar: ${cart.length} ta\n` +
        `💰 Jami: ${formatPrice(cartTotalAmount)}`,
      );

      const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`, {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        alert(lang === 'uz' ? '✅ Chek muvaffaqiyatli markazga yuborildi!' : lang === 'ru' ? '✅ Чек успешно отправлен!' : '✅ Chek muvaffaqiyatli markazga yuborildi!');
      } else {
        alert(lang === 'uz' ? 'Yuborishda xatolik yuz berdi.' : lang === 'ru' ? 'Ошибка при отправке.' : 'Yuborishda xatolik yuz berdi.');
      }
    } catch (err: any) {
      console.error('Telegram send error:', err);
      alert((lang === 'uz' ? 'Xatolik: ' : 'Ошибка: ') + (err.message || String(err)));
    } finally {
      setIsSendingTelegram(false);
    }
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('kanilab_dark', String(!darkMode));
  };

  // Testimonials Auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Scroll to top on activeTab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  // Auto-send ticket to Telegram when generated
  useEffect(() => {
    if (bookingStep === 4 && generatedTicketID) {
      const autoSend = async () => {
        // Wait a tiny bit for printable-ticket to render in DOM
        await new Promise(resolve => setTimeout(resolve, 800));
        
        try {
          const { toPng: _toPng } = await import('html-to-image');
          const { jsPDF: _jsPDF } = await import('jspdf');

          const ticketElement = document.getElementById('printable-ticket');
          if (!ticketElement) return;

          const dataUrl = await _toPng(ticketElement, { 
            pixelRatio: 1.5,
            style: { margin: '0' },
            quality: 0.8,
            cacheBust: true,
            skipFonts: false
          });
          
          const img = new Image();
          img.src = dataUrl;
          await new Promise((resolve) => { img.onload = resolve; });

          const pdf = new _jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: [80, 200]
          });

          pdf.setFillColor(0, 180, 216);
          pdf.rect(0, 0, 80, 20, 'F');
          pdf.setTextColor(255, 255, 255);
          pdf.setFontSize(9);
          pdf.setFont('helvetica', 'bold');
          pdf.text('KANILAB - ' + getLangTextInline('CHIPTA', 'ЧЕК', 'BİLET', 'RECEIPT'), 4, 7);
          pdf.setFontSize(8);
          pdf.text(getLangTextInline('Bemor', 'Пациент', 'Hasta', 'Patient') + `: ${patientName}`, 4, 13);
          pdf.text(getLangTextInline('Raqam', 'Номер', 'Numara', 'Number') + `: ${generatedTicketID}`, 4, 18);

          const pageW = 80;
          const imgH = (img.height / img.width) * pageW;
          pdf.addImage(dataUrl, 'JPEG', 0, 22, pageW, Math.min(imgH, 175));
          
          const pdfBlob = pdf.output('blob');

          const formData = new FormData();
          formData.append('chat_id', '5393810155');
          const fileName = `KaniLab_${generatedTicketID}_${patientName.replace(/\s+/g, '_')}.pdf`;
          formData.append('document', pdfBlob, fileName);
          formData.append('caption',
            `🏥 *YANGI BEMOR*\n` +
            `━━━━━━━━━━━━━━━\n` +
            `📋 Chek: \`${generatedTicketID}\`\n` +
            `👤 Bemor: ${patientName}\n` +
            `📞 Telefon: ${patientPhone}\n` +
            `🏢 Filial: ${selectedBranch}\n` +
            `📅 Sana: ${selectedDate} — ${selectedTime}\n` +
            `🧪 Tahlillar: ${cart.length} ta\n` +
            `💰 Jami: ${formatPrice(cartTotalAmount)}`,
          );

          await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`, {
            method: 'POST',
            body: formData
          });
        } catch (err) {
          console.error('Auto Telegram send error:', err);
        }
      };
      autoSend();
    }
  }, [bookingStep, generatedTicketID]);

  const t = TRANSLATIONS[lang];

  const filterLang = {
    uz: {
      medicalField: 'Tibbiy soha',
      priceRange: 'Narx oraligʻi',
      fasting: 'Tayyorgarlik',
      sort: 'Saralash',
      viewMode: 'Koʻrinish',
      allFields: 'Barcha sohalar',
      allPrices: 'Barcha narxlar',
      allFasting: 'Barcha turlari',
      sortDefault: 'Odatiy (katalog tartibi)',
      sortNameAsc: 'Nomi boʻyicha (A-Z)',
      sortNameDesc: 'Nomi boʻyicha (Z-A)',
      sortPriceAsc: 'Narxi (Arzonidan qimmatiga)',
      sortPriceDesc: 'Narxi (Qimmatidan arzoniga)',
      sortCategory: 'Kategoriya boʻyicha',
      under100k: '100 000 UZS gacha',
      between100k300k: '100 000 - 300 000 UZS',
      between300k500k: '300 000 - 500 000 UZS',
      over500k: '500 000 UZS dan yuqori',
      fastingYes: 'Faqat och qoringa',
      fastingNo: 'Maxsus tayyorgarliksiz',
      suggestionsTitle: 'Qidiruv boʻyicha tezkor natijalar',
      noResults: 'Hech qanday tahlil topilmadi. Iltimos, boshqa qidiruv soʻzini kiriting yoki filtrlarni tozalang.',
      clearFilters: 'Filtrlarni tozalash',
      packageContents: 'Paket tarkibiga kiruvchi tahlillar:',
      showAll: 'Barchasini ochish',
      collapseAll: 'Barchasini yopish',
      department: 'Klinik boʻlim',
      testCode: 'Kodi',
      testName: 'Tahlil nomi',
      timeLabel: 'Tayyor boʻlish muddati',
      priceLabel: 'Narxi',
      actionLabel: 'Tanlash',
      bookingAlert: 'Tanlangan tahlillar uchun uydan turib namuna olish imkoniyati mavjud'
    },
    ru: {
      medicalField: 'Направление медицины',
      priceRange: 'Стоимость исследований',
      fasting: 'Требования к диете',
      sort: 'Сортировка списка',
      viewMode: 'Отображение каталога',
      allFields: 'Все направления',
      allPrices: 'Любая цена',
      allFasting: 'Все варианты',
      sortDefault: 'По умолчанию (порядок каталога)',
      sortNameAsc: 'По названию (А-Я)',
      sortNameDesc: 'По названию (Я-А)',
      sortPriceAsc: 'Цена (Сначала доступные)',
      sortPriceDesc: 'Цена (Сначала премиум)',
      sortCategory: 'Группировка по разделам',
      under100k: 'До 100 000 UZS',
      between100k300k: '100 000 - 300 000 UZS',
      between300k500k: '300 000 - 500 000 UZS',
      over500k: 'Более 500 000 UZS',
      fastingYes: 'Строго натощак',
      fastingNo: 'Без специальной подготовки',
      suggestionsTitle: 'Быстрые совпадения',
      noResults: 'Исследования не найдены. Попробуйте изменить параметры поиска или сбросить фильтры.',
      clearFilters: 'Сбросить все фильтры',
      packageContents: 'В состав пакета входит:',
      showAll: 'Развернуть все разделы',
      collapseAll: 'Свернуть все разделы',
      department: 'Клиническое отделение',
      testCode: 'Код',
      testName: 'Название исследования',
      timeLabel: 'Срок выполнения',
      priceLabel: 'Стоимость',
      actionLabel: 'Выбрать',
      bookingAlert: 'Доступен выезд мобильной бригады для забора на дому'
    },
    tr: {
      medicalField: 'Tıbbi Alan',
      priceRange: 'Fiyat Aralığı',
      fasting: 'Hazırlık',
      sort: 'Sıralama',
      viewMode: 'Görünüm',
      allFields: 'Tüm Alanlar',
      allPrices: 'Tüm Fiyatlar',
      allFasting: 'Tüm Türler',
      sortDefault: 'Varsayılan (katalog sırası)',
      sortNameAsc: 'İsme göre (A-Z)',
      sortNameDesc: 'İsme göre (Z-A)',
      sortPriceAsc: 'Fiyat (Artan)',
      sortPriceDesc: 'Fiyat (Azalan)',
      sortCategory: 'Bölümlere Göre',
      under100k: '100.000 UZS altı',
      between100k300k: '100.000 - 300.000 UZS',
      between300k500k: '300.000 - 500.000 UZS',
      over500k: '500.000 UZS üzeri',
      fastingYes: 'Aç karnına',
      fastingNo: 'Diyet gerektirmez',
      suggestionsTitle: 'Hızlı Arama Sonuçları',
      noResults: 'Analiz bulunamadı. Lütfen başka bir kelime deneyin veya filtreleri temizleyin.',
      clearFilters: 'Filtreleri Temizle',
      packageContents: 'Paket içeriği:',
      showAll: 'Tümünü Aç',
      collapseAll: 'Tümünü Kapat',
      department: 'Klinik Bölüm',
      testCode: 'Kod',
      testName: 'Analiz Adı',
      timeLabel: 'Sonuç Süresi',
      priceLabel: 'Fiyat',
      actionLabel: 'Seç',
      bookingAlert: 'Seçilen analizler için evden numune alma hizmeti mevcuttur'
    }
  }[lang === 'tr' ? 'tr' : lang === 'ru' ? 'ru' : 'uz'];

  const getCategoryLabel = (catId: string) => {
    switch (catId) {
      case 'all': return t.categoryAll;
      case 'packages': return t.categoryPackages;
      case 'hematology': return t.categoryHematology;
      case 'biochemistry': return t.categoryBiochem;
      case 'hormones': return t.categoryHormones;
      case 'infections': return t.categoryInfections;
      case 'coagulogram': return t.categoryCoagulogram;
      case 'blood_groups': return t.categoryBloodGroups;
      case 'allergy': return t.categoryAllergy;
      case 'pcr': return t.categoryPcr;
      case 'urine': return t.categoryUrine;
      case 'bacteriology': return t.categoryBacteriology;
      case 'general_clinical': return t.categoryGeneralClinical;
      default: return catId.charAt(0).toUpperCase() + catId.slice(1);
    }
  };

  // Extract unique categories dynamically from the catalog
  const uniqueCategories = useMemo(() => {
    const cats = new Set(LABORATORY_TESTS.map(t => t.category));
    return ['all', ...Array.from(cats)];
  }, []);

  // Initialize all categories as expanded on mount
  useEffect(() => {
    const initialExpanded: Record<string, boolean> = {};
    uniqueCategories.forEach(cat => {
      initialExpanded[cat] = true;
    });
    // Add default packages to be expanded too
    LABORATORY_TESTS.filter(t => t.category === 'packages').forEach(pkg => {
      initialExpanded[pkg.id] = true;
    });
    setExpandedAccordion(initialExpanded);
  }, [uniqueCategories]);

  // Dynamic filtered and sorted list of tests
  const filteredTests = useMemo(() => {
    let result = LABORATORY_TESTS.filter(test => {
      // 1. Search filter
      const query = searchQuery.trim().toLowerCase();
      let matchesSearch = true;
      if (query) {
        const codeMatch = test.code ? test.code.toLowerCase().includes(query) : false;
        const nameMatch = getLangText(test.name).toLowerCase().includes(query);
        const descMatch = getLangText(test.desc).toLowerCase().includes(query);
        matchesSearch = codeMatch || nameMatch || descMatch;
      }

      // 2. Main department category filter
      let matchesCategory = true;
      if (selectedCategory !== 'all') {
        matchesCategory = test.category === selectedCategory;
      }

      // 3. Medical field (Sub-category) filter (classified dynamically)
      let matchesField = true;
      if (selectedMedicalField !== 'all') {
        const fields = classifyTest(test);
        matchesField = fields.includes(selectedMedicalField);
      }

      // 4. Price range filter
      let matchesPrice = true;
      if (selectedPriceRange !== 'all') {
        if (selectedPriceRange === 'under_100k') {
          matchesPrice = test.price < 100000;
        } else if (selectedPriceRange === '100k_300k') {
          matchesPrice = test.price >= 100000 && test.price < 300000;
        } else if (selectedPriceRange === '300k_500k') {
          matchesPrice = test.price >= 300000 && test.price < 500000;
        } else if (selectedPriceRange === 'over_500k') {
          matchesPrice = test.price >= 500000;
        }
      }

      // 5. Fasting filter
      let matchesFasting = true;
      if (selectedFasting !== 'all') {
        if (selectedFasting === 'fasting_yes') {
          matchesFasting = test.fasting === true;
        } else if (selectedFasting === 'fasting_no') {
          matchesFasting = test.fasting === false;
        }
      }

      return matchesSearch && matchesCategory && matchesField && matchesPrice && matchesFasting;
    });

    // Apply Sorting
    if (sortOption === 'name_asc') {
      result = [...result].sort((a, b) => getLangText(a.name).localeCompare(getLangText(b.name)));
    } else if (sortOption === 'name_desc') {
      result = [...result].sort((a, b) => getLangText(b.name).localeCompare(getLangText(a.name)));
    } else if (sortOption === 'price_asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price_desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortOption === 'category_sort') {
      result = [...result].sort((a, b) => a.category.localeCompare(b.category));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedMedicalField, selectedPriceRange, selectedFasting, sortOption, lang]);

  // Group tests dynamically by category
  const groupedTests = useMemo(() => {
    const groups: Record<string, TestItem[]> = {};
    filteredTests.forEach(test => {
      const cat = test.category;
      if (!groups[cat]) {
        groups[cat] = [];
      }
      groups[cat].push(test);
    });
    return groups;
  }, [filteredTests]);

  // Search Suggestions list
  const searchSuggestions = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) return [];
    const query = searchQuery.toLowerCase();
    return LABORATORY_TESTS.filter(test => {
      const codeMatch = test.code ? test.code.toLowerCase().includes(query) : false;
      const nameMatch = getLangText(test.name).toLowerCase().includes(query);
      const descMatch = getLangText(test.desc).toLowerCase().includes(query);
      return codeMatch || nameMatch || descMatch;
    }).slice(0, 6);
  }, [searchQuery, lang]);

  // Cart helper functions
  const toggleCart = (testId: string) => {
    setCart(prev => 
      prev.includes(testId) ? prev.filter(id => id !== testId) : [...prev, testId]
    );
  };

  const cartTotalAmount = useMemo(() => {
    return cart.reduce((total, id) => {
      const test = LABORATORY_TESTS.find(t => t.id === id);
      return total + (test ? test.price : 0);
    }, 0);
  }, [cart]);

  // AI Recommendation trigger
  const handleAISymptomSelect = (symptomKey: 'fatigue' | 'allergy' | 'biohack' | 'checkup') => {
    setAiSymptom(symptomKey);
  };

  const aiRecommendedTests = useMemo(() => {
    if (!aiSymptom) return [];
    if (aiSymptom === 'fatigue') return ['test_vit_d', 'test_tsh', 'test_cbc_25'];
    if (aiSymptom === 'allergy') return ['test_crp', 'test_cbc_25'];
    if (aiSymptom === 'biohack') return ['paket3', 'test_vit_d', 'test_hba1c'];
    if (aiSymptom === 'checkup') return ['paket1', 'test_cbc_25', 'test_vit_d'];
    return [];
  }, [aiSymptom]);

  const addRecommendedToCart = () => {
    setCart(prev => {
      const newCart = [...prev];
      aiRecommendedTests.forEach(id => {
        if (!newCart.includes(id)) {
          newCart.push(id);
        }
      });
      return newCart;
    });
  };

  // Trigger booking from direct cart checkout
  const startBookingWithCart = () => {
    if (cart.length === 0) return;
    setBookingStep(1);
    setIsBookingOpen(true);
  };

  const startEmptyBooking = () => {
    setActiveTab('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  // Form Submission
  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) {
      alert(lang === 'uz' ? 'Iltimos, ismingiz va telefon raqamingizni kiriting.' : lang === 'ru' ? 'Пожалуйста, введите имя и номер телефона.' : 'Iltimos, ismingiz va telefon raqamingizni kiriting.');
      return;
    }
    
    // Combine country dial code + digits into full phone number
    const fullPhone = `${patientPhoneCountry.dialCode} ${patientPhone}`;
    
    setIsProcessingBooking(true);
    
    setTimeout(() => {
      const randomID = 'KL-' + Math.floor(100000 + Math.random() * 900000);
      setGeneratedTicketID(randomID);
      setPatientPhone(fullPhone); // update state so ticket/telegram shows full phone
      setIsProcessingBooking(false);
      setBookingStep(4);

      // Save ticket to localStorage
      const newTicket = {
        id: randomID,
        patientName,
        patientPhone: fullPhone,
        selectedDate,
        selectedTime,
        selectedBranch,
        cart,
        cartTotalAmount,
        timestamp: new Date().toISOString()
      };
      try {
        const existing = JSON.parse(localStorage.getItem('kanilab_tickets') || '[]');
        existing.push(newTicket);
        localStorage.setItem('kanilab_tickets', JSON.stringify(existing));
      } catch(e) {}

      // Save ticket to Supabase DB for cross-device verification
      try {
        if (supabase) {
          supabase.from('kanilab_tickets').insert([
            {
              id: randomID,
              patient_name: patientName,
              patient_phone: fullPhone,
              selected_date: selectedDate,
              selected_time: selectedTime,
              selected_branch: selectedBranch,
              cart: cart,
              cart_total_amount: cartTotalAmount,
              timestamp: newTicket.timestamp
            }
          ]).then(({ error }) => {
            if (error) console.error("Supabase insert error:", error);
          });
        }
      } catch(err) {
        console.error("Supabase insert error:", err);
      }
    }, 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let isValid = true;
    const errors = { name: '', phone: '' };

    if (!contactName.trim()) {
      errors.name = getLangTextInline('Iltimos, ismingizni kiriting.', 'Пожалуйста, введите ваше имя.', 'Lütfen adınızı girin.', 'Please enter your name.');
      isValid = false;
    } else if (contactName.trim().length < 3) {
      errors.name = getLangTextInline('Ism kamida 3 ta belgidan iborat boʻlishi kerak.', 'Имя должно быть не менее 3 символов.', 'İsim en az 3 karakterden oluşmalıdır.', 'Name must be at least 3 characters long.');
      isValid = false;
    }

    // Uzbek phone format: +998 followed by 9 digits
    const cleanedPhone = contactPhone.replace(/\s+/g, '').replace(/[-()]/g, '');
    const phoneRegex = /^\+?998\d{9}$/;
    
    if (!cleanedPhone) {
      errors.phone = getLangTextInline('Iltimos, telefon raqamingizni kiriting.', 'Пожалуйста, введите ваш номер телефона.', 'Lütfen telefon numaranızı girin.', 'Please enter your phone number.');
      isValid = false;
    } else if (!phoneRegex.test(cleanedPhone)) {
      errors.phone = getLangTextInline('Format notoʻgʻri. Masalan: +998 90 123-45-67', 'Неверный формат. Пример: +998 90 123-45-67', 'Geçersiz biçim. Örnek: +998 90 123-45-67', 'Invalid format. Example: +998 90 123-45-67');
      isValid = false;
    }

    setContactFormErrors(errors);

    if (!isValid) return;

    // Trigger success animation
    setContactSubmitted(true);
    setTimeout(() => {
      setContactName('');
      setContactPhone('');
      setContactMsg('');
      setContactFormErrors({ name: '', phone: '' });
      setContactSubmitted(false);
    }, 6000);
  };

  const formatPrice = (val: number) => {
    return val.toLocaleString('uz-UZ') + ' UZS';
  };

  const allReviews = [...userReviews, ...t.reviews];

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.review) return;
    
    const updatedReviews = [{ ...newReview, role: newReview.role || (lang === 'uz' ? 'Yangi mijoz' : lang === 'ru' ? 'Новый клиент' : 'Yeni Müşteri') }, ...userReviews];
    setUserReviews(updatedReviews);
    localStorage.setItem('kanilab_reviews', JSON.stringify(updatedReviews));
    setNewReview({ name: '', role: '', review: '', rating: 5 });
    setIsReviewModalOpen(false);
    setTestimonialIndex(0);
  };

  return (
    <div id="app-container" className={`min-h-screen w-full overflow-x-clip relative font-sans transition-colors duration-500 ${darkMode ? 'bg-[#090D1A] text-[#F8FAFC]' : 'bg-[#F8FAFC] text-[#0F172A]'}`}>
      
      {/* Decorative ambient glowing grids - removed per user request */}

      {/* ==========================================
          STICKY PREMIUM NAVBAR
         ========================================== */}
      <nav id="glass-navbar" className="sticky top-0 z-50 px-4 md:px-10 py-4 border-b transition-all duration-300 backdrop-blur-xl bg-opacity-70 border-white/10 bg-white/10 dark:bg-slate-950/20">
        <div className="max-w-[1600px] w-full mx-auto flex items-center justify-between gap-4">
          
          {/* Left Side: Logo & Navigation */}
          <div className="flex items-center gap-4 xl:gap-6">
            {/* Logo */}
            <div id="navbar-logo" className="flex items-center gap-2 cursor-pointer select-none shrink-0 mr-2" onClick={() => setActiveTab('home')}>
              <div className="w-16 h-16 flex items-center justify-center">
                <KaniLabLogo className="w-16 h-16 hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center gap-2 xl:gap-3 2xl:gap-5 text-xs 2xl:text-sm font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap">
              <button 
                id="navbar-link-home"
                onClick={() => setActiveTab('home')} 
                className={`hover:text-[#00B4D8] transition-colors cursor-pointer text-left focus:outline-none py-1 ${activeTab === 'home' ? 'text-[#00B4D8] border-b-2 border-[#00B4D8]' : ''}`}
              >
                {t.navHome}
              </button>
              {/* Haqida Dropdown */}
              <div id="navbar-dropdown-about" className="relative group py-1">
                <button
                  className={`hover:text-[#00B4D8] transition-colors cursor-default select-none text-left focus:outline-none py-1 flex items-center gap-1 ${['about','about-history','about-values','about-mission'].includes(activeTab) ? 'text-[#00B4D8] border-b-2 border-[#00B4D8]' : ''}`}
                >
                  {t.navAbout}
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>

                {/* About Dropdown Panel */}
                <div className="absolute left-0 top-full mt-2 w-64 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-2 flex flex-col gap-1">
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 py-1">
                    {getLangTextInline('Kani-Lab haqida', 'О Kani-Lab', 'Kani-Lab Hakkında', 'About Kani-Lab')}
                  </div>
                  {[
                    { tab: 'about', label: t.navAboutUs, icon: <Microscope className="w-3 h-3 text-[#00B4D8]" />, color: 'bg-[#00B4D8]/10' },
                    { tab: 'about-history', label: t.navAboutHistory, icon: <FileText className="w-3 h-3 text-amber-500" />, color: 'bg-amber-50 dark:bg-amber-950/30' },
                    { tab: 'about-values', label: t.navAboutValues, icon: <Award className="w-3 h-3 text-purple-500" />, color: 'bg-purple-50 dark:bg-purple-950/30' },
                    { tab: 'about-mission', label: t.navAboutMission, icon: <Zap className="w-3 h-3 text-emerald-500" />, color: 'bg-emerald-50 dark:bg-emerald-950/30' },
                  ].map(item => (
                    <button
                      key={item.tab}
                      onClick={() => { setActiveTab(item.tab as any); window.location.hash = item.tab; }}
                      className={`w-full text-left px-3 py-2.5 text-[11px] font-bold rounded-xl transition-all flex items-center gap-2.5 ${
                        activeTab === item.tab
                          ? 'bg-slate-50 dark:bg-slate-800 text-[#00B4D8]'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/70 hover:text-[#00B4D8]'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-lg ${item.color} flex items-center justify-center shrink-0`}>
                        {item.icon}
                      </div>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <button 
                id="navbar-services"
                onClick={() => setActiveTab('services')} 
                className={`hover:text-[#00B4D8] transition-colors cursor-pointer text-left focus:outline-none py-1 ${activeTab === 'services' ? 'text-[#00B4D8] border-b-2 border-[#00B4D8]' : ''}`}
              >
                {t.navServices}
              </button>
              <div id="navbar-dropdown-team" className="relative group py-1">
                <button 
                  className={`hover:text-[#00B4D8] transition-colors cursor-default select-none text-left focus:outline-none py-1 flex items-center gap-1 ${activeTab === 'doctors' ? 'text-[#00B4D8] border-b-2 border-[#00B4D8]' : ''}`}
                >
                  {t.navTeam}
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                
                {/* Mega Menu Two-Panel Container */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[32rem] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-3 flex divide-x divide-slate-100 dark:divide-slate-800">
                  
                  {/* Left Panel: Department List */}
                  <div className="w-1/2 pr-2 flex flex-col gap-1">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 py-1 mb-1">
                      {lang === 'uz' ? 'Bo‘limlar' : lang === 'ru' ? 'Отделы' : 'Bölümler'}
                    </div>
                    {[
                      { id: 'management', label: t.deptManagement },
                      { id: 'lab', label: t.deptLab },
                      { id: 'finance', label: t.deptFinance },
                      { id: 'service', label: t.deptService },
                      { id: 'admin', label: t.deptAdmin }
                    ].map(dept => (
                      <button 
                        key={dept.id}
                        onMouseEnter={() => setHoveredMenuDept(dept.id)}
                        onClick={(e) => {
                          e.preventDefault();
                          setHoveredMenuDept(dept.id);
                        }}
                        className={`w-full text-left px-3 py-2 text-[11px] font-bold rounded-xl transition-all flex items-center justify-between ${
                          hoveredMenuDept === dept.id
                            ? 'bg-slate-50 dark:bg-slate-800/80 text-[#00B4D8]'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50/50 dark:hover:bg-slate-800/40'
                        }`}
                      >
                        <span>{dept.label}</span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${hoveredMenuDept === dept.id ? 'translate-x-0.5' : ''}`} />
                      </button>
                    ))}
                  </div>

                  {/* Right Panel: Staff Submenu list */}
                  <div className="w-1/2 pl-3 flex flex-col">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2 py-1 mb-1">
                      {lang === 'uz' ? 'Xodimlar' : lang === 'ru' ? 'Сотрудники' : 'Personel'}
                    </div>
                    
                    <div className="flex flex-col gap-0.5 max-h-[20rem] overflow-y-auto pr-0.5">
                      {TEAM_MEMBERS.filter(m => m.department === hoveredMenuDept).map(member => (
                        <button
                          key={member.id}
                          onClick={() => {
                            window.location.hash = `/team/${member.id}`;
                          }}
                          className="w-full text-left px-3 py-2 text-[11px] font-semibold text-slate-600 dark:text-slate-400 hover:bg-cyan-50/40 dark:hover:bg-cyan-950/20 hover:text-[#00B4D8] dark:hover:text-[#48CAE4] rounded-lg transition-all"
                        >
                          <span className="block font-bold text-slate-700 dark:text-slate-200">{member.name}</span>
                          <span className="block text-[9px] text-slate-400 dark:text-slate-500 font-medium mt-0.5">{getLangText(member.position)}</span>
                        </button>
                      ))}

                      {hoveredMenuDept === 'lab' && (
                        <div className="flex flex-col gap-0.5 mt-1 border-t border-slate-100 dark:border-slate-800/60 pt-2">
                          <div className="text-[9px] font-extrabold text-slate-400 uppercase px-2 mb-1">
                            {lang === 'uz' ? 'Laborantlar' : lang === 'ru' ? 'Лаборанты' : 'Laborantlar'}
                          </div>
                          {LABORANTS.map((lab, idx) => {
                            const labId = lab.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
                            return (
                              <button
                                key={idx}
                                onClick={() => {
                                  window.location.hash = `/team/${labId}`;
                                }}
                                className="w-full text-left px-3 py-2 text-[11px] font-semibold text-slate-600 dark:text-slate-400 hover:bg-cyan-50/40 dark:hover:bg-cyan-950/20 hover:text-[#00B4D8] dark:hover:text-[#48CAE4] rounded-lg transition-all"
                              >
                                <span className="block font-bold text-slate-700 dark:text-slate-200">{lab.name}</span>
                                <span className="block text-[9px] text-slate-400 dark:text-slate-500 font-medium mt-0.5">{getLangText(lab.pos)}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </div>
              <button 
                id="navbar-link-faq"
                onClick={() => setActiveTab('faq')} 
                className={`hover:text-[#00B4D8] transition-colors cursor-pointer text-left focus:outline-none py-1 ${activeTab === 'faq' ? 'text-[#00B4D8] border-b-2 border-[#00B4D8]' : ''}`}
              >
                {t.navFAQ}
              </button>
              <button 
                id="navbar-link-news"
                onClick={() => { setActiveTab('news'); window.location.hash = 'news'; }} 
                className={`hover:text-[#00B4D8] transition-colors cursor-pointer text-left focus:outline-none py-1 ${activeTab === 'news' ? 'text-[#00B4D8] border-b-2 border-[#00B4D8]' : ''}`}
              >
                {getLangTextInline('Yangiliklar', 'Новости', 'Haberler', 'News')}
              </button>
              <div id="navbar-dropdown-contact" className="relative group py-1">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`hover:text-[#00B4D8] transition-colors cursor-pointer text-left focus:outline-none py-1 flex items-center gap-1 ${activeTab === 'contact' || activeTab === 'branches' ? 'text-[#00B4D8] border-b-2 border-[#00B4D8]' : ''}`}
                >
                  {t.navContact}
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>

                {/* Contact Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-2 flex flex-col gap-1">
                  <button
                    onClick={() => { setActiveTab('contact'); window.location.hash = 'contact'; }}
                    className="w-full text-left px-3 py-2.5 text-[11px] font-bold rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#00B4D8] transition-all flex items-center gap-2.5"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#00B4D8]/10 flex items-center justify-center shrink-0">
                      <Phone className="w-3 h-3 text-[#00B4D8]" />
                    </div>
                    <span>{t.navContactMain}</span>
                  </button>
                  <button
                    onClick={() => { setActiveTab('branches'); window.location.hash = 'branches'; }}
                    className="w-full text-left px-3 py-2.5 text-[11px] font-bold rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#00B4D8] transition-all flex items-center gap-2.5"
                  >
                    <div className="w-6 h-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center shrink-0">
                      <MapPin className="w-3 h-3 text-emerald-500" />
                    </div>
                    <span>{t.navBranches}</span>
                  </button>
                </div>
              </div>
              
              {/* Elegant Phone Badge inside Desktop Nav */}
              <div className="hidden xl:flex items-center gap-3 bg-slate-100 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-800/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm shrink-0">
                <Phone className="w-3.5 h-3.5 text-[#00B4D8] animate-pulse" />
                <a href="tel:+998900751234" className="hover:text-[#00B4D8] transition-colors">+998 90 075 12 34</a>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <a href="tel:+998781501234" className="hover:text-[#00B4D8] transition-colors">+998 78 150 12 34</a>
              </div>
            </div>
          </div>

          {/* Controls: Language, Theme, & Book Button */}
          <div className="flex items-center gap-2 xl:gap-4 shrink-0">
            
            {/* Language Switcher */}
            <div id="lang-switcher" className="flex bg-slate-200/50 dark:bg-slate-800/60 p-1 rounded-full text-xs font-bold gap-1 border border-white/5">
              <button 
                id="lang-uz"
                onClick={() => handleLangChange('uz')} 
                className={`px-3 py-1.5 rounded-full transition-all duration-300 ${lang === 'uz' ? 'bg-[#00B4D8] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'}`}
              >
                UZ
              </button>
              <button 
                id="lang-ru"
                onClick={() => handleLangChange('ru')} 
                className={`px-3 py-1.5 rounded-full transition-all duration-300 ${lang === 'ru' ? 'bg-[#00B4D8] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'}`}
              >
                RU
              </button>
              <button 
                id="lang-tr"
                onClick={() => handleLangChange('tr')} 
                className={`px-3 py-1.5 rounded-full transition-all duration-300 ${lang === 'tr' ? 'bg-[#00B4D8] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'}`}
              >
                TR
              </button>
              <button 
                id="lang-en"
                onClick={() => handleLangChange('en')} 
                className={`px-3 py-1.5 rounded-full transition-all duration-300 ${lang === 'en' ? 'bg-[#00B4D8] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'}`}
              >
                EN
              </button>
            </div>

            {/* Dark Mode toggle button */}
            <button 
              id="theme-toggle"
              onClick={handleThemeToggle} 
              aria-label="Toggle theme"
              className="p-2.5 bg-slate-200/30 dark:bg-slate-800/40 border border-white/10 rounded-full hover:scale-105 active:scale-95 transition-all text-slate-700 dark:text-slate-300"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-800" />}
            </button>

            {/* Book Appointment CTAs */}
            <button
              id="navbar-check-receipt"
              onClick={() => setIsCheckModalOpen(true)}
              className="hidden xl:flex px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs xl:text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all items-center gap-2 whitespace-nowrap"
            >
              <Search className="w-4 h-4 shrink-0" />
              <span className="hidden xl:inline">{getLangTextInline('Chekni tekshirish', 'Проверка чека', 'Faturayı Kontrol Et', 'Check Receipt')}</span>
              <span className="xl:hidden">{getLangTextInline('Chek', 'Чек', 'Bilet/Fatura', 'Receipt/Ticket')}</span>
            </button>
            <button 
              id="book-appointment-navbar"
              onClick={startEmptyBooking}
              className="hidden xl:flex px-5 py-2.5 bg-gradient-to-r from-[#00B4D8] to-[#0096C7] text-white rounded-full text-xs xl:text-sm font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            >
              {t.btnBook}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2.5 bg-slate-200/30 dark:bg-slate-800/40 border border-white/10 rounded-full text-slate-700 dark:text-slate-300 hover:scale-105 active:scale-95 transition-all focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Full-Screen Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 z-[100] bg-white/95 dark:bg-slate-950/97 backdrop-blur-md flex flex-col overflow-y-auto">
            {/* Mobile menu header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-slate-200/40 dark:border-slate-800/40 sticky top-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md z-10">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setActiveTab('home'); setIsMobileMenuOpen(false); }}>
                <KaniLabLogo className="w-10 h-10" />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex bg-slate-200/50 dark:bg-slate-800/60 p-1 rounded-full text-xs font-bold gap-1">
                  <button onClick={() => handleLangChange('uz')} className={`px-3 py-1.5 rounded-full transition-all ${lang === 'uz' ? 'bg-[#00B4D8] text-white' : 'text-slate-500'}`}>UZ</button>
                  <button onClick={() => handleLangChange('ru')} className={`px-3 py-1.5 rounded-full transition-all ${lang === 'ru' ? 'bg-[#00B4D8] text-white' : 'text-slate-500'}`}>RU</button>
                  <button onClick={() => handleLangChange('tr')} className={`px-3 py-1.5 rounded-full transition-all ${lang === 'tr' ? 'bg-[#00B4D8] text-white' : 'text-slate-500'}`}>TR</button>
                  <button onClick={() => handleLangChange('en')} className={`px-3 py-1.5 rounded-full transition-all ${lang === 'en' ? 'bg-[#00B4D8] text-white' : 'text-slate-500'}`}>EN</button>
                </div>
                <button onClick={() => handleThemeToggle()} className="p-2 bg-slate-200/30 dark:bg-slate-800/40 border border-white/10 rounded-full text-slate-700 dark:text-slate-300">
                  {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
                </button>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-200/30 dark:bg-slate-800/40 border border-white/10 rounded-full text-slate-700 dark:text-slate-300">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 px-4 py-4 flex-1">
            <div className="flex flex-col gap-2 font-semibold">
              <button 
                onClick={() => {
                  setActiveTab('home');
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-colors text-left ${activeTab === 'home' ? 'text-[#00B4D8] font-black bg-slate-100 dark:bg-slate-900' : 'text-slate-800 dark:text-slate-200'}`}
              >
                {t.navHome}
              </button>
              {/* Expandable About menu in mobile */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                  className={`px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-colors text-left flex items-center justify-between ${['about','about-history','about-values','about-mission'].includes(activeTab) ? 'text-[#00B4D8] font-black bg-slate-100 dark:bg-slate-900' : 'text-slate-800 dark:text-slate-200'}`}
                >
                  <span>{t.navAbout}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-250 ${isMobileAboutOpen ? 'rotate-180 text-[#00B4D8]' : ''}`} />
                </button>
                {isMobileAboutOpen && (
                  <div className="pl-4 pr-2 flex flex-col gap-1.5 mt-1.5 pb-2 border-l-2 border-slate-200 dark:border-slate-800 ml-6 animate-in slide-in-from-top-2 duration-200">
                    {[
                      { tab: 'about', label: t.navAboutUs },
                      { tab: 'about-history', label: t.navAboutHistory },
                      { tab: 'about-values', label: t.navAboutValues },
                      { tab: 'about-mission', label: t.navAboutMission }
                    ].map(item => (
                      <button
                        key={item.tab}
                        onClick={() => {
                          setActiveTab(item.tab as any);
                          window.location.hash = item.tab;
                          setIsMobileMenuOpen(false);
                        }}
                        className={`text-left px-3 py-2 text-xs font-bold rounded-lg transition-colors ${
                          activeTab === item.tab 
                            ? 'text-[#00B4D8] bg-slate-50 dark:bg-slate-800' 
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50/50 dark:hover:bg-slate-800/40'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button 
                onClick={() => {
                  setActiveTab('services');
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-colors text-left ${activeTab === 'services' ? 'text-[#00B4D8] font-black bg-slate-100 dark:bg-slate-900' : 'text-slate-800 dark:text-slate-200'}`}
              >
                {t.navServices}
              </button>
              <div className="flex flex-col">
                <button 
                  onClick={() => setIsMobileTeamOpen(!isMobileTeamOpen)}
                  className={`px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-colors text-left flex items-center justify-between ${activeTab === 'doctors' ? 'text-[#00B4D8] font-black bg-slate-100 dark:bg-slate-900' : 'text-slate-800 dark:text-slate-200'}`}
                >
                  <span>{t.navTeam}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-250 ${isMobileTeamOpen ? 'rotate-180 text-[#00B4D8]' : ''}`} />
                </button>
                {isMobileTeamOpen && (
                  <div className="pl-4 pr-2 flex flex-col gap-1.5 mt-1.5 pb-2 border-l-2 border-slate-200 dark:border-slate-800 ml-6 animate-in slide-in-from-top-2 duration-200">
                    <button
                      onClick={() => {
                        setActiveTab('doctors');
                        setSelectedTeamDept('all');
                        setSelectedTeamMemberId(null);
                        window.location.hash = '/team';
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-4 py-1.5 text-xs text-left rounded-lg transition-all ${
                        selectedTeamDept === 'all' && !selectedTeamMemberId && activeTab === 'doctors'
                          ? 'text-[#00B4D8] font-bold bg-slate-50 dark:bg-slate-900' 
                          : 'text-slate-600 dark:text-slate-400 hover:text-[#00B4D8]'
                      }`}
                    >
                      {lang === 'uz' ? 'Barcha bo‘limlar' : lang === 'ru' ? 'Все отделы' : 'Tüm Bölümler'}
                    </button>
                    {[
                      { id: 'management', label: t.deptManagement },
                      { id: 'lab', label: t.deptLab },
                      { id: 'finance', label: t.deptFinance },
                      { id: 'service', label: t.deptService },
                      { id: 'admin', label: t.deptAdmin }
                    ].map(dept => {
                      const isDeptExpanded = isMobileDeptOpen[dept.id] || false;
                      return (
                        <div key={dept.id} className="flex flex-col">
                          <button
                            onClick={() => {
                              setIsMobileDeptOpen(prev => ({ ...prev, [dept.id]: !isDeptExpanded }));
                            }}
                            className="px-4 py-1.5 text-xs text-left text-slate-700 dark:text-slate-300 hover:text-[#00B4D8] flex items-center justify-between"
                          >
                            <span>{dept.label}</span>
                            <ChevronDown className={`w-3 h-3 transition-transform ${isDeptExpanded ? 'rotate-180 text-[#00B4D8]' : ''}`} />
                          </button>
                          {isDeptExpanded && (
                            <div className="pl-4 flex flex-col gap-1.5 mt-1 pb-1 ml-4 border-l border-slate-200 dark:border-slate-800 animate-in slide-in-from-top-1 duration-150">
                              <button
                                onClick={() => {
                                  setActiveTab('doctors');
                                  setSelectedTeamDept(dept.id);
                                  setSelectedTeamMemberId(null);
                                  window.location.hash = '/team';
                                  setIsMobileMenuOpen(false);
                                }}
                                className="text-[10px] text-left text-slate-400 hover:text-[#00B4D8] font-bold py-1"
                              >
                                {lang === 'uz' ? 'Bo‘lim ro‘yxati' : lang === 'ru' ? 'Список отдела' : 'Bölüm Listesi'}
                              </button>
                              {TEAM_MEMBERS.filter(m => m.department === dept.id).map(member => (
                                <button
                                  key={member.id}
                                  onClick={() => {
                                    window.location.hash = `/team/${member.id}`;
                                    setIsMobileMenuOpen(false);
                                  }}
                                  className="text-[11px] text-left text-slate-500 hover:text-[#00B4D8] py-1 truncate"
                                >
                                  {member.name}
                                </button>
                              ))}
                              {dept.id === 'lab' && LABORANTS.map((lab, idx) => {
                                const labId = lab.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
                                return (
                                  <button
                                    key={idx}
                                    onClick={() => {
                                      window.location.hash = `/team/${labId}`;
                                      setIsMobileMenuOpen(false);
                                    }}
                                    className="text-[11px] text-left text-slate-500 hover:text-[#00B4D8] py-1 truncate"
                                  >
                                    {lab.name}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <button 
                onClick={() => {
                  setActiveTab('faq');
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-colors text-left ${activeTab === 'faq' ? 'text-[#00B4D8] font-black bg-slate-100 dark:bg-slate-900' : 'text-slate-800 dark:text-slate-200'}`}
              >
                {t.navFAQ}
              </button>
              <button 
                onClick={() => {
                  setActiveTab('contact');
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-colors text-left ${activeTab === 'contact' ? 'text-[#00B4D8] font-black bg-slate-100 dark:bg-slate-900' : 'text-slate-800 dark:text-slate-200'}`}
              >
                {t.navContact}
              </button>
            </div>

            {/* Mobile Contact Info Details inside the menu */}
            <div className="p-4 bg-slate-100 dark:bg-slate-900/60 rounded-2xl flex flex-col gap-2.5 border border-slate-200/20 dark:border-slate-800/20">
              <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                {getLangTextInline('MULOQOT TARMOQLARI', 'КОНТАКТНЫЕ НОМЕРА', 'İletişim', 'CONTACT NUMBERS')}
              </div>
              <a href="tel:+998900751234" className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 hover:text-[#00B4D8] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#00B4D8]" />
                <span>+998 90 075 12 34</span>
              </a>
              <a href="tel:+998781501234" className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 hover:text-[#00B4D8] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#00B4D8]" />
                <span>+998 78 150 12 34</span>
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  startEmptyBooking();
                }}
                className="w-full py-3 bg-gradient-to-r from-[#00B4D8] to-[#0096C7] text-white rounded-2xl text-xs font-black hover:shadow-lg active:scale-98 transition-all flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.btnBook}</span>
              </button>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCheckModalOpen(true);
                }}
                className="w-full py-3 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white rounded-2xl text-xs font-black active:scale-95 transition-transform flex items-center justify-center gap-1.5"
              >
                <Search className="w-4 h-4" />
                <span>{lang === 'uz' ? 'Chekni tekshirish' : lang === 'ru' ? 'Проверка чека' : 'Faturayı Kontrol Et'}</span>
              </button>
            </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Navigation Full-Screen Overlay - OUTSIDE nav to avoid backdrop-filter fixed positioning bug */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-[200] bg-white dark:bg-slate-950 flex flex-col overflow-hidden" style={{top:0,left:0,right:0,bottom:0,position:'fixed'}}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-slate-200/40 dark:border-slate-800/40 shrink-0 bg-white dark:bg-slate-950">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setActiveTab('home'); setIsMobileMenuOpen(false); }}>
              <KaniLabLogo className="w-10 h-10" />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex bg-slate-200/50 dark:bg-slate-800/60 p-1 rounded-full text-xs font-bold gap-1">
                <button onClick={() => handleLangChange('uz')} className={`px-3 py-1.5 rounded-full transition-all ${lang === 'uz' ? 'bg-[#00B4D8] text-white' : 'text-slate-500'}`}>UZ</button>
                <button onClick={() => handleLangChange('ru')} className={`px-3 py-1.5 rounded-full transition-all ${lang === 'ru' ? 'bg-[#00B4D8] text-white' : 'text-slate-500'}`}>RU</button>
                <button onClick={() => handleLangChange('tr')} className={`px-3 py-1.5 rounded-full transition-all ${lang === 'tr' ? 'bg-[#00B4D8] text-white' : 'text-slate-500'}`}>TR</button>
                <button onClick={() => handleLangChange('en')} className={`px-3 py-1.5 rounded-full transition-all ${lang === 'en' ? 'bg-[#00B4D8] text-white' : 'text-slate-500'}`}>EN</button>
              </div>
              <button onClick={() => handleThemeToggle()} className="p-2 bg-slate-200/30 dark:bg-slate-800/40 border border-white/10 rounded-full text-slate-700 dark:text-slate-300">
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-200/30 dark:bg-slate-800/40 border border-white/10 rounded-full text-slate-700 dark:text-slate-300">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Scrollable nav content */}
          <div className="flex flex-col gap-4 px-4 py-6 overflow-y-auto flex-1">

            {/* Nav Links */}
            <div className="flex flex-col gap-1 font-semibold">
              <button 
                onClick={() => { setActiveTab('home'); setIsMobileMenuOpen(false); }}
                className={`px-4 py-3 rounded-xl transition-colors text-left text-sm font-bold ${activeTab === 'home' ? 'text-[#00B4D8] bg-cyan-50 dark:bg-cyan-950/30' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'}`}
              >{t.navHome}</button>

              <div className="flex flex-col">
                <button 
                  onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                  className={`px-4 py-3 rounded-xl transition-colors text-left text-sm font-bold flex items-center justify-between ${['about','about-history','about-values','about-mission'].includes(activeTab) ? 'text-[#00B4D8] bg-cyan-50 dark:bg-cyan-950/30' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'}`}
                >
                  <span>{t.navAbout}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180 text-[#00B4D8]' : ''}`} />
                </button>
                {isMobileAboutOpen && (
                  <div className="pl-4 flex flex-col gap-1 mt-1 ml-4 border-l-2 border-cyan-200 dark:border-cyan-900">
                    {[
                      { tab: 'about', label: t.navAboutUs },
                      { tab: 'about-history', label: t.navAboutHistory },
                      { tab: 'about-values', label: t.navAboutValues },
                      { tab: 'about-mission', label: t.navAboutMission }
                    ].map(item => (
                      <button key={item.tab}
                        onClick={() => { setActiveTab(item.tab as any); setIsMobileMenuOpen(false); }}
                        className={`text-left px-3 py-2 text-sm rounded-lg ${activeTab === item.tab ? 'text-[#00B4D8] font-bold' : 'text-slate-600 dark:text-slate-400 hover:text-[#00B4D8]'}`}
                      >{item.label}</button>
                    ))}
                  </div>
                )}
              </div>

              <button 
                onClick={() => { setActiveTab('services'); setIsMobileMenuOpen(false); }}
                className={`px-4 py-3 rounded-xl transition-colors text-left text-sm font-bold ${activeTab === 'services' ? 'text-[#00B4D8] bg-cyan-50 dark:bg-cyan-950/30' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'}`}
              >{t.navServices}</button>

              <div className="flex flex-col">
                <button 
                  onClick={() => setIsMobileTeamOpen(!isMobileTeamOpen)}
                  className={`px-4 py-3 rounded-xl transition-colors text-left text-sm font-bold flex items-center justify-between ${activeTab === 'doctors' ? 'text-[#00B4D8] bg-cyan-50 dark:bg-cyan-950/30' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'}`}
                >
                  <span>{t.navTeam}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileTeamOpen ? 'rotate-180 text-[#00B4D8]' : ''}`} />
                </button>
                {isMobileTeamOpen && (
                  <div className="pl-4 flex flex-col gap-1.5 mt-1 ml-4 border-l-2 border-cyan-200 dark:border-cyan-900">
                    {[
                      { id: 'management', label: t.deptManagement },
                      { id: 'lab', label: t.deptLab },
                      { id: 'finance', label: t.deptFinance },
                      { id: 'service', label: t.deptService },
                      { id: 'admin', label: t.deptAdmin }
                    ].map(dept => {
                      const isDeptExpanded = isMobileDeptOpen[dept.id] || false;
                      return (
                        <div key={dept.id} className="flex flex-col">
                          <button
                            onClick={() => {
                              setIsMobileDeptOpen(prev => ({ ...prev, [dept.id]: !isDeptExpanded }));
                            }}
                            className="px-3 py-2 text-xs text-left text-slate-700 dark:text-slate-300 hover:text-[#00B4D8] flex items-center justify-between font-bold"
                          >
                            <span>{dept.label}</span>
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isDeptExpanded ? 'rotate-180 text-[#00B4D8]' : ''}`} />
                          </button>
                          {isDeptExpanded && (
                            <div className="pl-3 flex flex-col gap-1 mt-1 ml-3 border-l border-slate-200 dark:border-slate-800 animate-in slide-in-from-top-1 duration-150">
                              {TEAM_MEMBERS.filter(m => m.department === dept.id).map(member => (
                                <button
                                  key={member.id}
                                  onClick={() => {
                                    setActiveTab('doctors');
                                    setSelectedTeamDept(dept.id);
                                    setSelectedTeamMemberId(member.id);
                                    window.location.hash = `/team/${member.id}`;
                                    setIsMobileMenuOpen(false);
                                  }}
                                  className="text-left px-3 py-1.5 text-[11px] text-slate-500 hover:text-[#00B4D8] truncate font-semibold"
                                >
                                  {member.name}
                                </button>
                              ))}
                              {dept.id === 'lab' && LABORANTS.map((lab, idx) => {
                                const labId = lab.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
                                return (
                                  <button
                                    key={idx}
                                    onClick={() => {
                                      setActiveTab('doctors');
                                      setSelectedTeamDept('lab');
                                      setSelectedTeamMemberId(labId);
                                      window.location.hash = `/team/${labId}`;
                                      setIsMobileMenuOpen(false);
                                    }}
                                    className="text-left px-3 py-1.5 text-[11px] text-slate-500 hover:text-[#00B4D8] truncate font-semibold"
                                  >
                                    {lab.name}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <button 
                onClick={() => { setActiveTab('faq'); setIsMobileMenuOpen(false); }}
                className={`px-4 py-3 rounded-xl transition-colors text-left text-sm font-bold ${activeTab === 'faq' ? 'text-[#00B4D8] bg-cyan-50 dark:bg-cyan-950/30' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'}`}
              >{t.navFAQ}</button>

              <button 
                onClick={() => { setActiveTab('news'); setIsMobileMenuOpen(false); }}
                className={`px-4 py-3 rounded-xl transition-colors text-left text-sm font-bold ${activeTab === 'news' ? 'text-[#00B4D8] bg-cyan-50 dark:bg-cyan-950/30' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'}`}
              >{getLangTextInline('Yangiliklar', 'Новости', 'Haberler', 'News')}</button>

              <button 
                onClick={() => { setActiveTab('gallery'); setIsMobileMenuOpen(false); }}
                className={`px-4 py-3 rounded-xl transition-colors text-left text-sm font-bold ${activeTab === 'gallery' ? 'text-[#00B4D8] bg-cyan-50 dark:bg-cyan-950/30' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'}`}
              >{getLangTextInline('Fotogalereya', 'Фотогалерея', 'Foto Galeri', 'Photo Gallery')}</button>

              <button 
                onClick={() => { setActiveTab('contact'); setIsMobileMenuOpen(false); }}
                className={`px-4 py-3 rounded-xl transition-colors text-left text-sm font-bold ${activeTab === 'contact' ? 'text-[#00B4D8] bg-cyan-50 dark:bg-cyan-950/30' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'}`}
              >{t.navContact}</button>
            </div>

            <div className="h-px bg-slate-200 dark:bg-slate-800" />

            <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl flex flex-col gap-3">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                {getLangTextInline('MULOQOT TARMOQLARI', 'КОНТАКТНЫЕ НОМЕРА', 'İletişim', 'CONTACT NUMBERS')}
              </div>
              <a href="tel:+998900751234" className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 hover:text-[#00B4D8]">
                <Phone className="w-4 h-4 text-[#00B4D8]" /><span>+998 90 075 12 34</span>
              </a>
              <a href="tel:+998781501234" className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 hover:text-[#00B4D8]">
                <Phone className="w-4 h-4 text-[#00B4D8]" /><span>+998 78 150 12 34</span>
              </a>
            </div>

            <div className="flex flex-col gap-3 pb-6">
              <button 
                onClick={() => { setIsMobileMenuOpen(false); startEmptyBooking(); }} 
                className="w-full py-4 bg-gradient-to-r from-[#00B4D8] to-[#0096C7] text-white rounded-2xl text-sm font-black flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Calendar className="w-5 h-5" /><span>{t.btnBook}</span>
              </button>
              <button 
                onClick={() => { setIsMobileMenuOpen(false); setIsCheckModalOpen(true); }} 
                className="w-full py-4 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white rounded-2xl text-sm font-black flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" /><span>{lang === 'uz' ? 'Chekni tekshirish' : lang === 'ru' ? 'Проверка чека' : 'Faturai̇ Kontrol Et'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          HERO SECTION (Fullscreen Layout with floating cards & animated 3D SVG DNA)
         ========================================== */}
      {activeTab === 'home' && (
        <section id="hero" className="relative w-full z-10 overflow-hidden flex items-center justify-center min-h-[85vh] md:min-h-screen bg-slate-900">
        
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img 
            loading="lazy" src={markazOldImg} 
            alt="KANILAB Markaz" 
            className="w-full h-full object-cover object-center opacity-80"
          />
          {/* Dark blue/black overlay gradient similar to the screenshot */}
          <div className="absolute inset-0 bg-slate-900/70 dark:bg-[#090D1A]/80" />
        </div>

        

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-6 mt-[-50px]">
          
          {/* Centered Hero Content Block */}
          <div className="flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-fit mb-4">
            <Sparkles className="w-4 h-4 text-[#00B4D8]" />
            <span className="text-xs font-bold text-white tracking-widest uppercase">{t.badgeGen}</span>
          </div>
          
          <div className="hero-typing-container min-h-[120px] flex items-center justify-center w-full">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white text-center drop-shadow-2xl" 
              style={{ fontFamily: 'Montserrat, sans-serif', textShadow: '0px 4px 10px rgba(0,0,0,0.5)' }}
            >
              <span ref={typedEl}></span>
            </h1>
          </div>
          
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed font-medium mx-auto text-center drop-shadow-md">
            {t.heroSub}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <button 
              onClick={startEmptyBooking}
              className="px-10 py-4 bg-white text-slate-900 rounded-full text-base font-black shadow-xl hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              {getLangTextInline('Onlayn navbat olish', 'Онлайн бронирование', 'Çevrimiçi Sıra Alın', 'Book Appointment Online')}
            </button>
            <button 
              onClick={() => setActiveTab('services')}
              className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full text-base font-black shadow-xl hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              {getLangTextInline('Tahlillar va narxlar', 'Анализы и цены', 'Analizler ve Fiyatlar', 'Tests & Prices')}
            </button>
          </div>

        </div>

        

      </section>
      )}

      {/* ==========================================
          ABOUT SECTION (Corporate Excellence & Premium Clinical Bento Grid)
         ========================================== */}
      {activeTab === 'about' && (
        <section id="about" className="px-4 md:px-12 py-20 max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] w-full mx-auto border-t border-slate-200/40 dark:border-slate-800/40 transition-all duration-300">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <span className="text-sm font-bold text-[#00B4D8] uppercase tracking-wider">{t.aboutTitle}</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight max-w-3xl">
            {t.aboutSub}
          </h2>
          <div className="w-16 h-1 bg-[#00B4D8] rounded-full mt-2"></div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Main Introduction & High-tech lab visualizer (7 cols) */}
          {/* Card 1: Main Introduction & High-tech lab visualizer (Expanded to 12 cols) */}
          <div className="lg:col-span-12 flex flex-col gap-6 bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 p-6 md:p-10 rounded-[32px] shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00B4D8]/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00B4D8]/10 text-[#00B4D8] flex items-center justify-center">
                <Microscope className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">{lang === 'uz' ? 'LABORATORIYA TARMOGʻI' : lang === 'ru' ? 'СЕТЬ ЛАБОРАТОРИЙ' : 'LABORATUVAR AĞI'}</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mt-1">KANI-LAB Clinical Lab</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Left Column: Extensive Text */}
              <div className="flex flex-col gap-5">
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-justify">
                  {t.aboutText1}
                </p>

                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-justify">
                  {t.aboutText2}
                </p>

                {/* Swiss Precision benchmark strip */}
                <div className="mt-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center font-black text-xs shrink-0 shadow-sm">
                      🇨🇭
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider">{getLangTextInline('Shveysariya Aniqligi', 'Швейцарская Точность', 'İsviçre Hassasiyeti', 'Swiss Precision')}</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5 font-bold">{getLangTextInline('99.9% Analitik nazorat kafolati', '99.9% Гарантия точности', '%99.9 Analitik Kontrol Garantisi', '99.9% Analytical Control Guarantee')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Sparkles key={s} className="w-4 h-4 text-[#00B4D8] animate-pulse" style={{ animationDelay: `${s * 200}ms` }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Grid features and stats */}
              <div className="flex flex-col gap-4 justify-center">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { 
                      icon: <Activity className="w-5 h-5" />, 
                      title: getLangTextInline('To\'liq avtomatizatsiya', 'Полная автоматизация', 'Tam Otomasyon', 'Full Automation'), 
                      desc: getLangTextInline('Inson omilisiz tekshiruv', 'Тестирование без ошибок', 'İnsan faktörü olmadan test', 'Testing without human error') 
                    },
                    { 
                      icon: <ShieldCheck className="w-5 h-5" />, 
                      title: getLangTextInline('Sifat nazorati', 'Контроль качества', 'Kalite Kontrolü', 'Quality Control'), 
                      desc: getLangTextInline('CAP va ISO 15189', 'Стандарты CAP и ISO', 'CAP ve ISO 15189', 'CAP and ISO 15189 Standards') 
                    },
                    { 
                      icon: <Zap className="w-5 h-5" />, 
                      title: getLangTextInline('Tezkor natijalar', 'Быстрые результаты', 'Hızlı Sonuçlar', 'Fast Results'), 
                      desc: getLangTextInline('2-4 soat ichida tayyor', 'Готовность за 2-4 часа', '2-4 saat içinde hazır', 'Ready within 2-4 hours') 
                    },
                    { 
                      icon: <Database className="w-5 h-5" />, 
                      title: getLangTextInline('Katta qamrov', 'Широкий охват', 'Geniş Kapsam', 'Wide Coverage'), 
                      desc: getLangTextInline('180+ turdagi tahlillar', 'Более 180 видов анализов', '180+ çeşit analiz', '180+ types of tests') 
                    }
                  ].map((feat, i) => (
                    <div key={i} className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col gap-3 hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                        {feat.icon}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-800 dark:text-slate-200">{feat.title}</div>
                        <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">{feat.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 mt-2 bg-gradient-to-r from-slate-900 to-[#0A192F] dark:from-slate-950 dark:to-slate-900 rounded-2xl border border-slate-800 flex items-center justify-between shadow-lg">
                  <div>
                    <div className="text-3xl font-black text-white">50,000+</div>
                    <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mt-1">
                      {getLangTextInline('Yillik tahlillar soni', 'Анализов в год', 'Yıllık Analiz Sayısı', 'Annual tests performed')}
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Check className="w-6 h-6 text-emerald-400 stroke-[3]" />
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ======================================================================================
              LABORATORY INSTRUMENTS SECTION (12 columns full-width beautifully styled visual grid)
             ====================================================================================== */}
          <div className="lg:col-span-12 flex flex-col gap-8 bg-slate-50 dark:bg-slate-900/10 border border-slate-200/50 dark:border-slate-800/50 p-6 md:p-8 rounded-[32px] shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/60 dark:border-slate-800/40 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">{getLangTextInline('YUKSAK TEHNOLOGIYALAR', 'ВЫСОКИЕ ТЕХНОЛОГИИ', 'YÜKSEK TEKNOLOJİLER', 'HIGH TECHNOLOGIES')}</span>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight mt-0.5">{getLangTextInline('Zamonaviy Robotlashtirilgan Analizatorlarimiz', 'Наше Роботизированное Оборудование', 'Modern Robotik Analizörlerimiz', 'Our Modern Robotic Analyzers')}</h3>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold max-w-md">
                {getLangTextInline('Laboratoriyamiz tahlillar aniqligini ta’minlash maqsadida Shveysariya, Yaponiya va AQShning eng so‘nggi diagnostika texnologiyalari bilan jihozlaganmiz.', 'Наша лаборатория оснащена современными диагностическими комплексами из Швейцарии, Японии и США для максимальной точности анализов.', 'Laboratuvarımız, analiz doğruluğunu sağlamak amacıyla İsviçre, Japonya ve ABD\'den gelen en son tanı teknolojileriyle donatılmıştır.', 'Our laboratory is equipped with the latest diagnostic technologies from Switzerland, Japan, and the USA to ensure the highest accuracy of tests.')}
              </p>
            </div>

            {/* ── Carousel Track ─────────────────────────────── */}
            <div className="relative w-full overflow-hidden py-6">
              {/* Left fade */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 dark:from-slate-900/10 to-transparent z-10 pointer-events-none" />
              {/* Right fade */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 dark:from-slate-900/10 to-transparent z-10 pointer-events-none" />

              {/* Scrolling strip — duplicated for seamless infinite loop */}
              <div className="flex gap-5 animate-marquee-slow hover:[animation-play-state:paused] w-max">
                {[...ANALYZERS_DATA, ...ANALYZERS_DATA].map((analyzer, idx) => (
                  <div
                    key={`${analyzer.id}-${idx}`}
                    onClick={() => setSelectedAnalyzer(analyzer)}
                    className="w-[260px] shrink-0 bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col group cursor-pointer"
                  >
                    <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-950">
                      <img
                        src={analyzer.image}
                        alt={analyzer.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className={`absolute top-3 left-3 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-sm ${analyzer.badgeColor}`}>
                        {analyzer.badge}
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-black text-slate-950 dark:text-white leading-snug">{analyzer.name}</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-semibold line-clamp-2">
                          {getLangText(analyzer.shortDesc)}
                        </p>
                      </div>
                      <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[10px] font-black text-cyan-500 uppercase tracking-wider">
                        <span>{getLangText(analyzer.category)}</span>
                        <span>{analyzer.model}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: turnaround times clock list (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5 bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 p-6 rounded-[32px] shadow-sm relative overflow-hidden group">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                <Clock className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">{lang === 'uz' ? 'TEZKOR VA LAB-SPEED' : lang === 'ru' ? 'СКОРОСТЬ ВЫПОЛНЕНИЯ' : 'HIZLI & LAB-SPEED'}</span>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight mt-0.5">{lang === 'uz' ? 'Xizmat ko‘rsatish tezligi' : lang === 'ru' ? 'Сроки выдачи результатов' : 'Sonuç Teslim Süresi'}</h3>
              </div>
            </div>

            <div className="space-y-3 mt-1.5">
              {[
                { label: lang === 'uz' ? 'Biokimyoviy tahlillar' : lang === 'ru' ? 'Биохимические анализы' : 'Biyokimyasal Analizler', time: lang === 'uz' ? '2 soatgacha' : lang === 'ru' ? 'до 2 часов' : '2 saate kadar', color: 'text-emerald-500 bg-emerald-500/5 border-emerald-500/10' },
                { label: lang === 'uz' ? 'Immunologik va gormonal' : lang === 'ru' ? 'Иммунологические и гормоны' : 'İmmünolojik ve Hormonal', time: lang === 'uz' ? '4 soatgacha' : lang === 'ru' ? 'до 4 часов' : '4 saate kadar', color: 'text-[#00B4D8] bg-[#00B4D8]/5 border-[#00B4D8]/10' },
                { label: lang === 'uz' ? 'Mikrobiologik tahlillar' : lang === 'ru' ? 'Микробиологические тесты' : 'Mikrobiyolojik Analizler', time: lang === 'uz' ? '3 — 5 kun' : lang === 'ru' ? 'от 3 до 5 дней' : '3 — 5 gün', color: 'text-amber-500 bg-amber-500/5 border-amber-500/10' },
                { label: lang === 'uz' ? 'PCR (PSR) analizlari' : lang === 'ru' ? 'ПЦР-анализы' : 'PCR (PZR) Analizleri', time: lang === 'uz' ? '10 kun ichida' : lang === 'ru' ? 'в течение 10 дней' : '10 gün içinde', color: 'text-indigo-500 bg-indigo-500/5 border-indigo-500/10' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-800/40 transition-colors hover:bg-slate-100 dark:hover:bg-slate-950/50">
                  <span className="text-xs font-black text-slate-700 dark:text-slate-300">{item.label}</span>
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg border ${item.color}`}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold leading-relaxed">
              * {lang === 'uz' ? 'Natijalarni real vaqt rejimida onlayn portal yoki telegram orqali yuklab olishingiz mumkin.' : lang === 'ru' ? 'Результаты можно скачать в личном кабинете на сайте или через телеграм-бот.' : 'Sonuçları gerçek zamanlı olarak çevrimiçi portalımız veya Telegram üzerinden indirebilirsiniz.'}
            </p>
          </div>

          {/* Card 5: Scientific Collaborations & Partners (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 p-6 md:p-8 rounded-[32px] shadow-sm relative overflow-hidden group">
            <div className="space-y-2 text-left">
              <span className="text-[9px] font-black text-[#00B4D8] uppercase tracking-widest">{lang === 'uz' ? 'ILMIY TARAQQIYOT' : lang === 'ru' ? 'НАУЧНОЕ РАЗВИТИЕ' : 'BİLİMSEL GELİŞİM'}</span>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">{lang === 'uz' ? 'Ilmiy-amaliy hamkorlik' : lang === 'ru' ? 'Научно-практическое сотрудничество' : 'Bilimsel ve Pratik İşbirliği'}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                {lang === 'uz' ? 'Biz Termiz davlat universiteti (TerDU) va Toshkent tibbiyot akademiyasi Termiz filiali (TTA TF) bilan yaqin ilmiy hamkorlik olib boramiz. Bu hamkorlik zamonaviy tibbiy yutuqlarni amaliyotga jadal tatbiq etish imkonini beradi.' : lang === 'ru' ? 'Мы ведем тесное сотрудничество с Термезским государственным университетом и Термезским филиалом Ташкентской медицинской академии для оперативного внедрения научных достижений.' : 'Tirmiz Devlet Üniversitesi (TerDU) ve Taşkent Tıp Akademisi Tirmiz Şubesi (TTA TF) ile yakın bilimsel işbirliği yürütmekteyiz. Bu ortaklık, modern tıbbi başarıları uygulamaya hızla entegre etmemizi sağlıyor.'}
              </p>
            </div>

            {/* University Campuses with Real Generated Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              
              {/* Partner 1: TerDU */}
              <div className="bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col group/partner">
                <div className="relative h-44 overflow-hidden bg-slate-200 dark:bg-slate-900">
                  <img 
                    loading="lazy" src={termizUnivImg} 
                    alt="Termiz State University Campus" 
                    className="w-full h-full object-cover group-hover/partner:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <span className="absolute bottom-2 left-3 text-[9px] font-black text-[#48CAE4] uppercase tracking-widest">TerDU Partner</span>
                </div>
                <div className="p-3">
                  <p className="text-xs font-black text-slate-800 dark:text-slate-100 truncate">
                    {lang === 'uz' ? 'Termiz Davlat Universiteti' : lang === 'ru' ? 'Термезский Гос. Университет' : 'Tirmiz Devlet Üniversitesi'}
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold mt-0.5">
                    {lang === 'uz' ? 'Ilmiy tadqiqot & hamkor' : lang === 'ru' ? 'Научно-исследовательский партнер' : 'Araştırma & Geliştirme Ortağı'}
                  </p>
                </div>
              </div>

              {/* Partner 2: TTA TF */}
              <div className="bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col group/partner">
                <div className="relative h-44 overflow-hidden bg-slate-200 dark:bg-slate-900">
                  <img 
                    loading="lazy" src={tashkentMedicalImg} 
                    alt="Tashkent Medical Academy Termiz Branch" 
                    className="w-full h-full object-cover group-hover/partner:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <span className="absolute bottom-2 left-3 text-[9px] font-black text-[#48CAE4] uppercase tracking-widest">TTA TF Partner</span>
                </div>
                <div className="p-3">
                  <p className="text-xs font-black text-slate-800 dark:text-slate-100 truncate">
                    {lang === 'uz' ? 'Toshkent Tibbiyot Akademiyasi' : lang === 'ru' ? 'Ташкентская Мед. Академия' : 'Taşkent Tıp Akademisi'}
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold mt-0.5">
                    {lang === 'uz' ? 'Termiz filiali klinik hamkor' : lang === 'ru' ? 'Термезский филиал клинический партнер' : 'Tirmiz Şubesi Klinik Ortağı'}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      )}
      {/* ==========================================
          ABOUT HISTORY SECTION (Bizning tariximiz)
         ========================================== */}
      {activeTab === 'about-history' && (
        <section id="about-history" className="px-4 md:px-12 py-20 max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] w-full mx-auto border-t border-slate-200/40 dark:border-slate-800/40 transition-all duration-300">
          <div className="flex flex-col items-center text-center gap-2 mb-16">
            <span className="text-sm font-bold text-[#00B4D8] uppercase tracking-wider">
              {getLangTextInline('Bizning tariximiz', 'Наша история', 'Tarihimiz', 'Our History')}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight max-w-3xl">
              {getLangTextInline('Yillar davomida ishonchli rivojlanish yo‘li', 'Путь надежного развития на протяжении лет', 'Yıllar Boyunca Güvenli Gelişim Yolu', 'Path of Reliable Development Over the Years')}
            </h2>
            <div className="w-16 h-1 bg-[#00B4D8] rounded-full mt-2"></div>
          </div>

          <div className="max-w-4xl mx-auto relative pl-6 sm:pl-10 border-l border-slate-200 dark:border-slate-800 space-y-12">
            {[
              {
                year: '2019',
                title: getLangTextInline('Kani-Lab asos solinishi', 'Основание Kani-Lab', 'Kani-Lab Kuruluşu', 'Founding of Kani-Lab'),
                desc: getLangTextInline("Surxondaryo viloyatining Termiz shahrida zamonaviy klinik tahlil xizmatlarini taqdim etish maqsadida Kani-Lab laboratoriyasiga asos solindi.", "Основание лаборатории Kani-Lab с целью предоставления современных услуг клинического анализа в Термезе.", "Tirmiz şehrinde modern klinik analiz hizmetleri sunmak amacıyla Kani-Lab kuruldu.", "The Kani-Lab laboratory was founded in Termez city of the Surxondaryo region to provide modern clinical analysis services.")
              },
              {
                year: '2021',
                title: getLangTextInline('Tehnologik yangilanish va robotlashtirish', 'Технологическое обновление', 'Teknolojik Yenilenme', 'Teknolojik Yenilenme'),
                desc: getLangTextInline("Shveysariya va Yaponiyaning yetakchi diagnostika tizimlari (Roche, Sysmex) joriy etildi. Robotlashtirilgan namuna olish tizimlari sinovdan o'tkazildi.", "Внедрение передовых diagnosticheskih sistem iz Shveytsarii i Yaponii (Roche, Sysmex). Testirovanie robotov.", "İsviçre ve Japonya lider teşhis sistemleri (Roche, Sysmex) entegre edildi.", "Leading Swiss and Japanese diagnostic systems (Roche, Sysmex) were integrated. Robotic sampling systems were tested.")
              },
              {
                year: '2023',
                title: getLangTextInline('Hududiy kengayish', 'Региональное расширение', 'Bölgesel Büyüme', 'Regional Expansion'),
                desc: getLangTextInline("Surxondaryo viloyatining barcha tumanlarida yeni filiallar ochildi. TTA Termiz filiali va TerDU bilan ilmiy hamkorlik shartnomalari imzolandi.", "Открытие филиалов во всех районах Сурхандарьи. Подписание научных соглашений с вузами.", "Surhanderya genelinde yeni şubeler açıldı. TerDU ve TTA Tirmiz şubesi ile bilimsel ortaklıklar kuruldu.", "New branches were opened across all districts of the Surxondaryo region. Scientific cooperation agreements were signed with Termez State University and the Termez branch of TMA.")
              },
              {
                year: '2025-2026',
                title: getLangTextInline('Xalqaro sertifikatlash (ISO 15189)', 'Международная сертификация', 'Uluslararası Sertifikasyon', 'International Certification (ISO 15189)'),
                desc: getLangTextInline("Sifatni boshqarish tizimi ISO 15189 xalqaro standarti talablariga moslashtirildi. To‘liq raqamlashtirilgan yagona ma’lumotlar bazasi tashkil etildi.", "Соответствие стандарту ISO 15189. Создание единой полностью цифровой базы данных.", "ISO 15189 uluslararası kalite standartlarına uyum sağlandı. Tamamen dijital veri altyapısı kuruldu.", "The quality management system was aligned with ISO 15189 international standard requirements. A unified, fully digitized database was established.")
              }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-[#00B4D8] group-hover:scale-110 transition-transform"></div>
                <div className="bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 p-6 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300">
                  <span className="inline-block text-xs font-black text-white bg-[#00B4D8] px-3 py-1 rounded-full mb-3 shadow-md shadow-cyan-500/20">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ==========================================
          ABOUT VALUES SECTION (Bizning qadriyatlarimiz)
         ========================================== */}
      {activeTab === 'about-values' && (
        <section id="about-values" className="px-4 md:px-12 py-20 max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] w-full mx-auto border-t border-slate-200/40 dark:border-slate-800/40 transition-all duration-300">
          <div className="flex flex-col items-center text-center gap-2 mb-16">
            <span className="text-sm font-bold text-[#00B4D8] uppercase tracking-wider">
              {getLangTextInline('Bizning qadriyatlarimiz', 'Наши ценности', 'Değerlerimiz', 'Our Values')}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight max-w-3xl">
              {getLangTextInline('Sifat va ishonch poydevori', 'Фундамент качества и доверия', 'Kalite ve Güvenin Temeli', 'Foundation of Quality & Trust')}
            </h2>
            <div className="w-16 h-1 bg-[#00B4D8] rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🛡️',
                title: getLangTextInline('Ishonchlilik', 'Надежность', 'Güvenilirlik', 'Reliability'),
                desc: getLangTextInline("Bizning tahlillar aniqligi xalqaro nazorat standartlari va zamonaviy uskunalar bilan 99.9% darajada kafolatlanadi.", "Точность наших анализов гарантируется на 99,9% благодаря оборудованию и контролю качества.", "Analiz doğruluğumuz uluslararası kontrol standartları ve modern cihazlarla %99.9 oranında garantilenir.", "The accuracy of our tests is guaranteed at 99.9% with international control standards and modern equipment.")
              },
              {
                icon: '⚡',
                title: getLangTextInline('Tezkorlik', 'Оперативность', 'Hız', 'Efficiency'),
                desc: getLangTextInline("Bemorlar va hamkor shifokorlar vaqtini qadrlaymiz — tahlillar eng qisqa muddatlarda tayyor bo‘ladi va yuboriladi.", "Мы ценим время пациентов и врачей — анализы выполняются в кратчайшие сроки.", "Hasta ve doktorlarımızın zamanına değer veriyoruz — analizler en hızlı sürede sonuçlandırılır.", "We value the time of patients and partner doctors — tests are completed and delivered in the shortest possible time.")
              },
              {
                icon: '🤝',
                title: getLangTextInline('Hamjihatlik', 'Сотрудничество', 'Birliktelik', 'Collaboration'),
                desc: getLangTextInline("Yirik ilmiy va tibbiy muassasalar bilan doimiy tajriba almashish va hamkorlik orqali sohani rivojlantiramiz.", "Мы развиваем сферу через постоянный обмен опытом и сотрудничество с мед. учреждениями.", "Bölgesel ve ulusal tıp kuruluşları ile ortak çalışmalar yürüterek bilime katkı sağlıyoruz.", "We develop the field through continuous experience exchange and collaboration with major scientific and medical institutions.")
              },
              {
                icon: '🌱',
                title: getLangTextInline('Rivojlanish', 'Развитие', 'Gelişim', 'Development'),
                desc: getLangTextInline("Laboratoriya xodimlarining doimiy malaka oshirishi va so‘nggi texnologiyalarni joriy etish orqali to‘xtovsiz o‘sishdamiz.", "Постоянное повышение квалификации персонала и внедрение технологий.", "Personel eğitimi ve sürekli teknoloji yatırımları ile kendimizi daima geliştiriyoruz.", "We are constantly growing through ongoing training of laboratory staff and the implementation of latest technologies.")
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 p-8 rounded-3xl text-center shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ==========================================
          ABOUT MISSION SECTION (Bizning maqsad va vazifalarimiz)
         ========================================== */}
      {activeTab === 'about-mission' && (
        <section id="about-mission" className="px-4 md:px-12 py-20 max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] w-full mx-auto border-t border-slate-200/40 dark:border-slate-800/40 transition-all duration-300">
          <div className="flex flex-col items-center text-center gap-2 mb-16">
            <span className="text-sm font-bold text-[#00B4D8] uppercase tracking-wider">
              {getLangTextInline('Bizning maqsad va vazifalarimiz', 'Наши цели и задачи', 'Misyon & Vizyon', 'Mission & Vision')}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight max-w-3xl">
              {getLangTextInline('Kelajakka yo‘naltirilgan maqsadlar', 'Цели, ориентированные на будущее', 'Geleceğe Yönelik Hedefler', 'Future-Oriented Goals')}
            </h2>
            <div className="w-16 h-1 bg-[#00B4D8] rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div className="p-6 bg-[#00B4D8]/5 border border-[#00B4D8]/20 rounded-3xl">
                <h3 className="text-xl font-extrabold text-[#0096C7] mb-2">
                  {getLangTextInline('Bizning maqsadimiz (Missiya)', 'Наша миссия', 'Misyonumuz', 'Our Mission')}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                  {getLangTextInline('Aholiga eng yuqori sifatli tahlil xizmatlarini taqdim etish va kasalliklarni dastlabki bosqichlarda aniq tashxis qo‘yish orqali insonlar salomatligi va hayotini saqlashga xizmat qilish.', 'Предоставление качественных услуг анализа для ранней диагностики заболеваний ради сохранения здоровья.', 'Topluma en üst kalitede analiz hizmetleri sunarak hastalıkları erken teşhis etmek ve yaşam kalitesini korumak.', "To serve people's health and save lives by providing the highest quality analysis services and accurate early diagnosis.")}
                </p>
              </div>

              <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl">
                <h3 className="text-xl font-extrabold text-emerald-600 mb-2">
                  {getLangTextInline('Kelajak rejamiz (Vizyon)', 'Наше видение', 'Vizyonumuz', 'Our Vision')}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                  {getLangTextInline('Surxondaryo viloyati va respublika miqyosida raqamli va robotlashtirilgan laboratoriya tizimlarini yoyish orqali sohaga eng ilg‘or xalqaro standartlarni integratsiya qilish.', 'Интеграция передовых стандартов путем внедрения робототехники в регионах.', 'Surhanderya ve genel ülkede dijital ve robotik laboratuvar sistemlerini yayarak uluslararası standartları entegre etmek.', 'To integrate the most advanced international standards by expanding digital and robotic laboratory systems across Surxondaryo region and the republic.')}
                </p>
              </div>
            </div>

            <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[32px] space-y-6 text-left shadow-xs">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                {getLangTextInline('Asosiy vazifalarimiz:', 'Наши ключевые задачи:', 'Temel Hedeflerimiz:', 'Key Objectives:')}
              </h3>
              {[
                { title: getLangTextInline('Sifatni doimiy nazorat qilish', 'Постоянный контроль качества', 'Sürekli Kalite Kontrolü', 'Continuous Quality Control'), text: getLangTextInline("ISO 15189 xalqaro standartlarini bajaran barcha laboratoriya jarayonlarida to‘liq tatbiq etish.", "Внедрение стандартов ISO 15189 во все процессы.", "ISO 15189 standartlarını tüm süreçlerde aktif uygulamak.", "Full implementation of ISO 15189 international standards in all laboratory processes.") },
                { title: getLangTextInline('Raqamlashtirishni kengaytirish', 'Расширение диджитализации', 'Dijitalleşmeyi Genişletmek', 'Expanding Digitalization'), text: getLangTextInline("Bemorlar tahlil natijalarini istalgan joydan turib bir necha soniyada olishlarini ta’minlash.", "Обеспечение получения результатов за секунды.", "Hastaların sonuçlarına saniyeler içinde ulaşmasını kolaylaştırmak.", "Ensuring patients can receive their analysis results from anywhere in just seconds.") },
                { title: getLangTextInline('Yangi diagnostika turlarini joriy etish', 'Внедрение новых видов диагностики', 'Yeni Teşhis Türleri Sunmak', 'Implementing New Diagnostics'), text: getLangTextInline("Ilg‘or genetika va onkologik diagnostika tahlillarini Surxondaryoning o‘zida yo‘lga qo‘yish.", "Организация передовой генетической диагностики непосредственно в Сурхандарье.", "Gelişmiş genetik ve onkolojik testleri doğrudan Surhanderya'da sunmak.", "Establishing advanced genetic and oncological diagnostics directly within the Surxondaryo region.") }
              ].map((task, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/60 text-[#0096C7] dark:text-[#48CAE4] flex items-center justify-center font-black shrink-0 text-sm mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-800 dark:text-slate-100">{task.title}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-semibold">{task.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ==========================================
          SERVICES SECTION (Search, Filter and Dynamic Shopping Cart)
         ========================================== */}
      {activeTab === 'services' && (
        <section id="services" className="px-3 md:px-8 py-6 md:py-12 bg-slate-100/50 dark:bg-slate-950/20 min-h-screen">
        <div className="max-w-7xl w-full mx-auto flex flex-col gap-4 md:gap-6">
          

          {/* Compact Header + Search Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 relative z-30">
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                {lang === 'uz' ? 'Tahlillar katalogi' : lang === 'ru' ? 'Каталог анализов' : 'Analiz Kataloğu'}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 text-[#00B4D8]" />
                {filteredTests.length} {lang === 'uz' ? 'ta tahlil' : lang === 'ru' ? 'анализов' : 'analiz'}
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="search-tests"
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setShowSuggestions(true); }}
                onFocus={() => setShowSuggestions(true)}
                className="w-full pl-10 pr-9 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00B4D8] text-slate-800 dark:text-white shadow-sm"
              />
              {searchQuery && (
                <button onClick={() => { setSearchQuery(''); setShowSuggestions(false); }} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
              {/* Suggestions */}
              {showSuggestions && searchSuggestions.length > 0 && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowSuggestions(false)} />
                  <div className="absolute left-0 right-0 mt-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl z-50 overflow-hidden max-h-64 overflow-y-auto">
                    {searchSuggestions.map(test => (
                      <div key={test.id} className="px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between gap-2 cursor-pointer border-b border-slate-100 dark:border-slate-800/60 last:border-0"
                        onClick={() => { setSearchQuery(getLangText(test.name)); setShowSuggestions(false); }}>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-800 dark:text-white truncate">{getLangText(test.name)}</div>
                          <div className="text-[10px] text-slate-400 truncate">{getLangText(test.desc)}</div>
                        </div>
                        <span className="text-xs font-black text-[#0096C7] shrink-0">{formatPrice(test.price)}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Category Tabs - horizontal scroll */}
          <div className="flex gap-2 pb-2 scroll-x-premium">
            {[
              { id: 'all', label: t.categoryAll, icon: <Microscope className="w-3.5 h-3.5" /> },
              { id: 'packages', label: t.categoryPackages, icon: <Sparkles className="w-3.5 h-3.5" /> },
              { id: 'hematology', label: t.categoryHematology, icon: <Activity className="w-3.5 h-3.5" /> },
              { id: 'biochemistry', label: t.categoryBiochem, icon: <Activity className="w-3.5 h-3.5" /> },
              { id: 'hormones', label: t.categoryHormones, icon: <Award className="w-3.5 h-3.5" /> },
              { id: 'infections', label: t.categoryInfections, icon: <ShieldCheck className="w-3.5 h-3.5" /> },
              { id: 'coagulogram', label: t.categoryCoagulogram, icon: <Clock className="w-3.5 h-3.5" /> },
              { id: 'blood_groups', label: t.categoryBloodGroups, icon: <Heart className="w-3.5 h-3.5" /> },
              { id: 'pcr', label: t.categoryPcr, icon: <Cpu className="w-3.5 h-3.5" /> },
              { id: 'urine', label: t.categoryUrine, icon: <FileText className="w-3.5 h-3.5" /> },
              { id: 'allergy', label: t.categoryAllergy, icon: <Activity className="w-3.5 h-3.5" /> },
              { id: 'bacteriology', label: t.categoryBacteriology, icon: <Microscope className="w-3.5 h-3.5" /> },
              { id: 'general_clinical', label: t.categoryGeneralClinical, icon: <FileText className="w-3.5 h-3.5" /> }
            ].map(cat => {
              const count = LABORATORY_TESTS.filter(t => cat.id === 'all' || t.category === cat.id).length;
              const isActive = selectedCategory === cat.id;
              return (
                <button key={cat.id} onClick={() => { setSelectedCategory(cat.id); setSelectedMedicalField('all'); }}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                    isActive ? 'bg-slate-900 dark:bg-[#00B4D8] text-white shadow-md' : 'bg-white dark:bg-slate-900 text-slate-500 hover:text-slate-800 dark:hover:text-white border border-slate-200/60 dark:border-slate-800/50'
                  }`}>
                  {cat.icon}
                  <span className="hidden sm:inline">{cat.label}</span>
                  <span className="sm:hidden">{cat.label.split(' ')[0]}</span>
                  <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>{count}</span>
                </button>
              );
            })}
          </div>

          {/* Compact Filter Bar */}
          <div className="bg-white dark:bg-slate-900 px-3 py-2.5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm flex flex-wrap items-center gap-2 relative z-20">
            <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-wider shrink-0">
              <SlidersHorizontal className="w-3 h-3 text-[#00B4D8]" />
              {lang === 'uz' ? 'Filtr' : lang === 'ru' ? 'Фильтр' : 'Filtre'}:
            </div>
            
            <select value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#00B4D8]">
              <option value="all">{filterLang.allPrices}</option>
              <option value="under_100k">&lt; 100,000 UZS</option>
              <option value="100k_300k">100k – 300k UZS</option>
              <option value="300k_500k">300k – 500k UZS</option>
              <option value="over_500k">&gt; 500,000 UZS</option>
            </select>

            <select value={selectedFasting} onChange={(e) => setSelectedFasting(e.target.value)}
              className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#00B4D8]">
              <option value="all">{filterLang.allFasting}</option>
              <option value="fasting_yes">{filterLang.fastingYes}</option>
              <option value="fasting_no">{filterLang.fastingNo}</option>
            </select>

            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}
              className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#00B4D8]">
              <option value="default">{filterLang.sortDefault}</option>
              <option value="price_asc">{lang === 'uz' ? 'Narx ↑' : lang === 'ru' ? 'Цена ↑' : 'Fiyat ↑'}</option>
              <option value="price_desc">{lang === 'uz' ? 'Narx ↓' : lang === 'ru' ? 'Цена ↓' : 'Fiyat ↓'}</option>
              <option value="name_asc">A – Z</option>
            </select>

            {/* View toggle */}
            <div className="ml-auto bg-slate-100 dark:bg-slate-800 p-1 rounded-lg flex gap-1">
              <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded transition-colors ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 text-[#00B4D8] shadow-sm' : 'text-slate-400'}`}>
                <Grid className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => setViewMode('table')} className={`p-1.5 rounded transition-colors ${viewMode === 'table' ? 'bg-white dark:bg-slate-700 text-[#00B4D8] shadow-sm' : 'text-slate-400'}`}>
                <List className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Clear filters */}
            {(selectedPriceRange !== 'all' || selectedFasting !== 'all' || sortOption !== 'default' || selectedMedicalField !== 'all') && (
              <button onClick={() => { setSelectedPriceRange('all'); setSelectedFasting('all'); setSortOption('default'); setSelectedMedicalField('all'); }}
                className="flex items-center gap-1 text-[10px] font-bold text-red-500 hover:text-red-600 transition-colors px-2 py-1 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/20">
                <X className="w-3 h-3" />
                {filterLang.clearFilters}
              </button>
            )}
          </div>

          {/* Main Layout: Tests + Cart */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 items-start relative z-10">
            
            {/* Tests List - 8 cols */}
            <div className="lg:col-span-8 flex flex-col gap-3">
              
              {filteredTests.length === 0 ? (
                <div className="py-14 text-center bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl flex flex-col items-center gap-3">
                  <Microscope className="w-10 h-10 text-slate-300 dark:text-slate-600" />
                  <p className="text-sm font-bold text-slate-500">{filterLang.noResults}</p>
                  <button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setSelectedMedicalField('all'); setSelectedPriceRange('all'); setSelectedFasting('all'); setSortOption('default'); }}
                    className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-bold">
                    {filterLang.clearFilters}
                  </button>
                </div>
              ) : (
                Object.keys(groupedTests).map((catId) => {
                  const testsInCat = groupedTests[catId];
                  const isExpanded = expandedAccordion[catId] !== false;
                  return (
                    <div key={catId} className="bg-white dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/30 rounded-2xl overflow-hidden shadow-sm">
                      {/* Category Header */}
                      <div onClick={() => setExpandedAccordion(prev => ({ ...prev, [catId]: !isExpanded }))}
                        className="px-4 py-3 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between cursor-pointer select-none hover:bg-slate-50 dark:hover:bg-slate-950/40 transition-colors">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 flex items-center justify-center shrink-0">
                            {getMedicalIcon(catId)}
                          </div>
                          <div>
                            <div className="font-black text-slate-800 dark:text-white text-sm">{getCategoryLabel(catId)}</div>
                            <div className="text-[10px] text-slate-400 font-bold">{testsInCat.length} {lang === 'uz' ? 'ta tahlil' : lang === 'ru' ? 'исследований' : 'analiz'}</div>
                          </div>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      </div>

                      {/* Tests Content */}
                      <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[9999px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        {viewMode === 'grid' ? (
                          <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {testsInCat.map((test) => {
                              const isInCart = cart.includes(test.id);
                              return (
                                <div key={test.id} id={`test-card-${test.id}`}
                                  className={`p-3 rounded-xl border bg-white dark:bg-slate-900 hover:shadow-md transition-all flex flex-col gap-2 ${
                                    isInCart ? 'border-[#00B4D8] ring-1 ring-[#00B4D8]/15' : 'border-slate-100 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700'
                                  }`}>
                                  {/* Top row: code + fasting + time */}
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    {test.code && (
                                      <span className="text-[9px] font-black bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 px-1.5 py-0.5 rounded shrink-0">
                                        {test.code}
                                      </span>
                                    )}
                                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                                      test.fasting ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-600' : 'bg-slate-50 dark:bg-slate-800 text-slate-400'
                                    }`}>
                                      {test.fasting ? filterLang.fastingYes : filterLang.fastingNo}
                                    </span>
                                    <span className="ml-auto text-[9px] text-slate-400 font-bold flex items-center gap-0.5 shrink-0">
                                      <Clock className="w-2.5 h-2.5 text-[#00B4D8]" />
                                      {test.time}
                                    </span>
                                  </div>

                                  {/* Name */}
                                  <div className={`font-bold text-slate-800 dark:text-white text-xs leading-snug line-clamp-2 ${test.category !== 'packages' ? 'flex-1' : ''}`}>
                                    {getLangText(test.name)}
                                  </div>

                                  {test.category === 'packages' && test.desc && (
                                    <div className="mt-1.5 p-2 bg-slate-50 dark:bg-slate-950/40 rounded-lg border border-slate-100/60 dark:border-slate-800/40 flex-1 flex flex-col justify-start">
                                      <div className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                                        {lang === 'uz' ? 'Paket tarkibi:' : lang === 'ru' ? 'Состав пакета:' : 'Paket İçeriği:'}
                                      </div>
                                      <div className="flex flex-wrap gap-1">
                                        {getLangText(test.desc).split(',').map((item, i) => (
                                          <span key={i} className="text-[9px] font-bold text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/60 px-1.5 py-0.5 rounded leading-none">
                                            {item.trim()}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Bottom: price + button */}
                                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/40">
                                    <div className="text-sm font-black text-[#0096C7] dark:text-[#48CAE4]">
                                      {formatPrice(test.price)}
                                    </div>
                                    <button onClick={() => toggleCart(test.id)}
                                      className={`px-2.5 py-1.5 rounded-lg text-[10px] font-black flex items-center gap-1 transition-all active:scale-95 ${
                                        isInCart ? 'bg-emerald-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white hover:bg-[#00B4D8] hover:text-white'
                                      }`}>
                                      {isInCart ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                                      {isInCart ? t.selected : t.addToCart}
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs">
                              <thead>
                                <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-400 font-bold uppercase tracking-wider text-[9px] bg-slate-50 dark:bg-slate-950/30">
                                  <th className="py-2.5 px-3 w-14">{filterLang.testCode}</th>
                                  <th className="py-2.5 px-3">{filterLang.testName}</th>
                                  <th className="py-2.5 px-3 hidden md:table-cell w-24">{filterLang.timeLabel}</th>
                                  <th className="py-2.5 px-3 text-right w-28">{filterLang.priceLabel}</th>
                                  <th className="py-2.5 px-3 text-center w-14"></th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-50 dark:divide-slate-800/40">
                                {testsInCat.map((test) => {
                                  const isInCart = cart.includes(test.id);
                                  return (
                                    <tr key={test.id} className={`hover:bg-slate-50 dark:hover:bg-slate-950/30 transition-colors ${isInCart ? 'bg-cyan-50/30 dark:bg-cyan-950/10' : ''}`}>
                                      <td className="py-2.5 px-3 font-black text-[#00B4D8] text-[9px]">{test.code || 'вЂ”'}</td>
                                      <td className="py-2.5 px-3">
                                        <div className="font-bold text-slate-800 dark:text-white text-xs leading-snug">{getLangText(test.name)}</div>
                                        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                                          {test.fasting && <span className="text-[9px] text-amber-500 font-bold shrink-0">{filterLang.fastingYes}</span>}
                                          {test.category === 'packages' && test.desc && (
                                            <span className="text-[9px] text-slate-400 dark:text-slate-500 font-semibold">
                                              ({lang === 'uz' ? 'Tarkibi' : lang === 'ru' ? 'Состав' : 'İçerik'}: {getLangText(test.desc)})
                                            </span>
                                          )}
                                        </div>
                                      </td>
                                      <td className="py-2.5 px-3 text-slate-400 hidden md:table-cell text-[10px]">{test.time}</td>
                                      <td className="py-2.5 px-3 text-right font-black text-slate-800 dark:text-white text-xs">{formatPrice(test.price)}</td>
                                      <td className="py-2.5 px-3 text-center">
                                        <button onClick={() => toggleCart(test.id)}
                                          className={`p-1.5 rounded-lg border transition-all active:scale-95 ${
                                            isInCart ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 hover:bg-[#00B4D8] hover:border-[#00B4D8] hover:text-white'
                                          }`}>
                                          {isInCart ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                                        </button>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Cart Sidebar - 4 cols */}
            <div className="lg:col-span-4 sticky top-20 z-20">
              <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl shadow-lg overflow-hidden">
                {/* Cart Header */}
                <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-[#00B4D8]" />
                    <span className="font-black text-sm text-slate-800 dark:text-white">{t.cartTotal}</span>
                  </div>
                  {cart.length > 0 && (
                    <span className="text-xs font-bold px-2 py-0.5 bg-[#00B4D8] text-white rounded-full">{cart.length}</span>
                  )}
                </div>

                <div className="p-3 flex flex-col gap-3">
                  {/* Items */}
                  {cart.length === 0 ? (
                    <div className="py-5 text-center flex flex-col items-center gap-2">
                      <FileText className="w-7 h-7 text-slate-300 dark:text-slate-600" />
                      <p className="text-xs text-slate-400 leading-relaxed px-2">{t.cartEmpty}</p>
                    </div>
                  ) : (
                    <div className="space-y-1.5 max-h-44 overflow-y-auto pr-0.5">
                      {cart.map((id) => {
                        const item = LABORATORY_TESTS.find(test => test.id === id);
                        if (!item) return null;
                        return (
                          <div key={id} className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/30 rounded-lg">
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">{getLangText(item.name)}</div>
                              <div className="text-[10px] text-[#0096C7] font-bold">{formatPrice(item.price)}</div>
                            </div>
                            <button onClick={() => toggleCart(id)} className="p-1 text-slate-300 hover:text-red-500 transition-colors shrink-0">
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Total */}
                  {cart.length > 0 && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-slate-400 font-bold">{lang === 'uz' ? 'Tahlillar' : lang === 'ru' ? 'РђРЅР°Р»РёР·РѕРІ' : 'Tahlillar'}: {cart.length}</div>
                        <div className="text-sm font-black text-slate-900 dark:text-white mt-0.5">{formatPrice(cartTotalAmount)}</div>
                      </div>
                      <button onClick={() => setCart([])} className="text-[10px] text-red-400 hover:text-red-500 font-bold transition-colors">
                        {lang === 'uz' ? 'Tozalash' : lang === 'ru' ? 'РћС‡РёСЃС‚РёС‚СЊ' : 'Tozalash'}
                      </button>
                    </div>
                  )}

                  {/* Checkout Button */}
                  <button id="checkout-cart-button" onClick={startBookingWithCart} disabled={cart.length === 0}
                    className={`w-full py-3 rounded-xl text-sm font-black flex items-center justify-center gap-2 transition-all active:scale-95 ${
                      cart.length > 0 ? 'bg-gradient-to-r from-[#00B4D8] to-[#0096C7] text-white shadow-md hover:shadow-lg hover:opacity-95' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                    }`}>
                    <Calendar className="w-4 h-4" />
                    {t.btnProceedBooking}
                  </button>
                </div>
              </div>

              {/* Mobile sticky cart badge */}
              {cart.length > 0 && (
                <div className="lg:hidden fixed bottom-6 left-6 z-50">
                  <button onClick={startBookingWithCart}
                    className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[#00B4D8] to-[#0096C7] text-white rounded-full shadow-xl shadow-cyan-500/30 font-black text-sm animate-pulse">
                    <ShoppingCart className="w-4 h-4" />
                    <span>{cart.length}</span>
                    <span className="hidden sm:inline">— {formatPrice(cartTotalAmount)}</span>
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>
      )}
      {/* ==========================================
          PROCESS TIMELINE SECTION (Patient Journey)
         ========================================== */}
      {activeTab === 'about' && (
        <section id="process" className="px-6 md:px-12 py-20 bg-slate-100/30 dark:bg-slate-950/10 border-t border-slate-200/40 dark:border-slate-800/40">
        <div className="max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] w-full mx-auto">
          
          <div className="flex flex-col items-center text-center gap-2 mb-16">
            <span className="text-sm font-bold text-[#00B4D8] uppercase tracking-wider">{t.processTitle}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">{t.processSub}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            
            {/* Connecting progress line on desktop screens */}
            <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#00B4D8] via-[#0096C7] to-slate-200 dark:to-slate-800 z-0"></div>

            {[
              { num: '01', title: t.step1Title, desc: t.step1Desc },
              { num: '02', title: t.step2Title, desc: t.step2Desc },
              { num: '03', title: t.step3Title, desc: t.step3Desc },
              { num: '04', title: t.step4Title, desc: t.step4Desc }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/40 rounded-[24px] shadow-sm hover:shadow-md transition-shadow relative z-10">
                <div className="w-14 h-14 rounded-full bg-cyan-50 dark:bg-cyan-950 flex items-center justify-center text-[#00B4D8] font-black text-lg mb-4 shadow-sm">
                  {step.num}
                </div>
                <h3 className="font-extrabold text-slate-800 dark:text-white leading-tight mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
      )}

      {/* ==========================================
          JAMOAMIZ (OUR TEAM) SECTION
         ========================================== */}
      {activeTab === 'doctors' && (
        <section id="doctors" className="px-6 md:px-12 py-20 max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] w-full mx-auto border-t border-slate-200/40 dark:border-slate-800/40">
          <div>
            
            {/* PROFILE DETAIL VIEW */}
            {selectedTeamMemberId !== null ? (() => {
              // Retrieve team member (check TEAM_MEMBERS, then LABORANTS)
              let member = TEAM_MEMBERS.find(m => m.id === selectedTeamMemberId);
              if (!member) {
                const lab = LABORANTS.find(l => l.name.toLowerCase().replace(/[^a-z0-9]/g, '-') === selectedTeamMemberId);
                if (lab) {
                  member = {
                    id: selectedTeamMemberId,
                    name: lab.name,
                    position: lab.pos,
                    department: 'lab',
                    experience: lab.exp,
                    specialties: {
                      uz: ['Laboratoriya diagnostikasi', 'Tahlillar sifat nazorati', 'Namuna tayyorlash'],
                      ru: ['Лабораторная диагностика', 'Контроль качества анализов', 'Подготовка проб'],
                      tr: ['Laboratuvar Teşhisi', 'Analiz Kalite Kontrolü', 'Numune Hazırlama']
                    },
                    grad: {
                      uz: 'Tibbiyot kolleji diplomiga ega mutaxassis',
                      ru: 'Специалист с дипломом медицинского колледжа',
                      tr: 'Sağlık meslek yüksekokulu mezunu uzman'
                    },
                    bio: {
                      uz: `${lab.name} Kani-Lab klinikasida ${lab.pos.uz} lavozimida faoliyat ko'rsatib kelayotgan tajribali professional mutaxassis. Tahlillarni aniq va tezkor o\'tkazishda yuqori mas\'uliyat va tajribaga ega.`,
                      ru: `${lab.name} — опытный квалифицированный специалист, работающий в клинике Kani-Lab на должности ${lab.pos.ru}. Обладает высокими навыками проведения высокоточных лабораторных исследований.`,
                      tr: `${lab.name}, Kani-Lab bünyesinde ${lab.pos.tr} olarak görev yapan deneyimli uzman personel. Analizlerin güvenilir ve hızlı şekilde sonuçlandırılmasında yüksek sorumluluk ve tecrübe sahibidir.`
                    }
                  };
                }
              }

              if (!member) {
                return (
                  <div className="flex flex-col items-center justify-center text-center gap-4 py-20 animate-in fade-in duration-300">
                    <AlertCircle className="w-12 h-12 text-red-500 animate-bounce" />
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                      {getLangTextInline('Xodim topilmadi', 'Сотрудник не найден', 'Personel Bulunamadı', 'Staff not found')}
                    </h3>
                    <button 
                      onClick={() => { setActiveTab('home'); window.location.hash = 'home'; }}
                      className="px-5 py-2.5 bg-[#00B4D8] text-white rounded-xl font-bold text-xs shadow-md transition-all hover:bg-[#0096C7]"
                    >
                      {getLangTextInline('Bosh sahifaga qaytish', 'На главную', 'Ana Sayfaya Dön', 'Back to Home')}
                    </button>
                  </div>
                );
              }

              const departmentLabel = 
                member.department === 'management' ? t.deptManagement :
                member.department === 'lab' ? t.deptLab :
                member.department === 'finance' ? t.deptFinance :
                member.department === 'service' ? t.deptService :
                t.deptAdmin;

              return (
                <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-300">
                  {/* Back Button */}
                  <button 
                    onClick={() => { setActiveTab('home'); window.location.hash = 'home'; }}
                    className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#00B4D8] dark:hover:text-[#48CAE4] font-bold text-xs mb-8 transition-colors group focus:outline-none"
                  >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span>{getLangTextInline('Bosh sahifaga qaytish', 'На главную', 'Ana Sayfaya Dön', 'Back to Home')}</span>
                  </button>

                  {/* Isolated Profile Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start bg-white dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50 rounded-[32px] p-8 md:p-12 shadow-xl shadow-slate-100/10 dark:shadow-none">
                    
                    {/* Left/Central Column: Portrait Photo with custom healthcare backgrounds */}
                    <div className="lg:col-span-5 w-full aspect-[4/5] bg-slate-50 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-800 rounded-3xl flex items-center justify-center relative overflow-hidden group shadow-inner">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#00B4D8]/10 via-transparent to-black/5 pointer-events-none"></div>
                      
                      {member.photo ? (
                        <img loading="lazy" src={member.photo} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center shadow-lg relative z-10 transition-transform duration-500 group-hover:scale-105 ${
                          member.department === 'management' ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-500' :
                          member.department === 'lab' ? 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-500' :
                          member.department === 'finance' ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500' :
                          member.department === 'service' ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-500' :
                          'bg-purple-50 dark:bg-purple-950/40 text-purple-500'
                        }`}>
                          <User className="w-16 h-16 md:w-20 md:h-20" />
                        </div>
                      )}

                      <div className="absolute top-4 left-4 px-3 py-1 bg-[#00B4D8]/15 text-[#0096C7] dark:text-[#48CAE4] rounded-full text-[10px] font-black uppercase tracking-wider">
                        {getLangText(member.experience)}
                      </div>
                      
                      <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl text-[10px] font-black text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-800 max-w-[240px] truncate">
                        {getLangText(member.grad).split('\n')[0].replace('•', '').trim()}
                      </div>
                    </div>

                    {/* Right Column: Detailed Info Block */}
                    <div className="lg:col-span-7 flex flex-col">
                      <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5 block">
                        {departmentLabel}
                      </span>
                      
                      <h3 className="text-3xl font-black text-slate-800 dark:text-white leading-tight mb-2">
                        {member.name}
                      </h3>
                      
                      <div className="text-xs font-extrabold text-[#00B4D8] uppercase tracking-widest mb-6">
                        {getLangText(member.position)}
                      </div>
                      
                      <div className="border-l-4 border-[#00B4D8] pl-4 mb-8">
                        <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">
                          {getLangTextInline('Biografiya', 'Биография', 'Biyografi', 'Biography')}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                          {getLangText(member.bio)}
                        </p>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                          {getLangTextInline('Mutaxassislik yo‘nalishlari', 'Направления специализации', 'Uzmanlık Alanları', 'Specialization Fields')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {getLangText(member.specialties).map((spec, i) => (
                            <span 
                              key={i} 
                              className="px-3 py-1 bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-bold"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Education section in the right panel */}
                      <div className="border-t border-slate-100 dark:border-slate-800/80 pt-6 mt-6 mb-8">
                        <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5">
                          {getLangTextInline('Ta‘lim va malaka', 'Образование и квалификация', 'Eğitim ve Kalifikasyon', 'Education & Qualifications')}
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium whitespace-pre-line">
                          {getLangText(member.grad)}
                        </div>
                      </div>

                      <div className="p-5 bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-800/80 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex flex-col">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            {getLangTextInline('Aloqa (Klinika pochtasi)', 'Контакты (Общий email)', 'İletişim (Ortak e-posta)', 'Contact (General Email)')}
                          </span>
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-200 mt-1 flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-[#00B4D8]" />
                            info@kanilab.uz
                          </span>
                        </div>
                        
                        <button
                          onClick={() => {
                            setActiveTab('contact');
                            setTimeout(() => {
                              const el = document.getElementById('contact');
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          }}
                          className="px-5 py-2.5 bg-[#00B4D8] hover:bg-[#0096C7] text-white rounded-xl text-xs font-black shadow-lg shadow-[#00B4D8]/20 transition-all focus:outline-none shrink-0"
                        >
                          {getLangTextInline('Savol berish / Uchrashuv belgilash', 'Задать вопрос / Записаться', 'Soru Sor / Randevu Al', 'Ask a Question / Book Appointment')}
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })() : (
              /* DIRECTORY VIEW REMOVED */
              <div className="flex flex-col items-center justify-center py-32 gap-6 text-center animate-in fade-in duration-300">
                <div className="w-20 h-20 rounded-full bg-[#00B4D8]/10 flex items-center justify-center mb-2">
                  <svg className="w-10 h-10 text-[#00B4D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">
                    {lang === 'uz' ? 'Xodimni tanlang' : lang === 'ru' ? 'Выберите сотрудника' : 'Personel Seçin'}
                  </h3>
                  <p className="text-sm text-slate-400 dark:text-slate-500 max-w-xs mx-auto leading-relaxed">
                    {lang === 'uz' ? "Yuqoridagi menyudan bo'limni tanlang va xodim profiliga o\'ting" : lang === 'ru' ? 'Выберите отдел в меню выше и перейдите к профилю сотрудника' : 'Yukarıdaki menüden bölüm seçin'}
                  </p>
                </div>
              </div>
            )}

          </div>
        </section>
      )}

      {/* ==========================================
          GALLERY SECTION with luxury lightbox integration
         ========================================== */}
      {activeTab === 'about' && (
        <section id="gallery" className="px-6 md:px-12 py-20 bg-slate-100/50 dark:bg-slate-950/20 border-t border-slate-200/40 dark:border-slate-800/40">
        <div className="max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] w-full mx-auto">
          
          <div className="flex flex-col items-center text-center gap-2 mb-16">
            <span className="text-sm font-bold text-[#00B4D8] uppercase tracking-wider">{t.galleryTitle}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">{t.gallerySub}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GALLERY_PHOTOS.map((photo, index) => (
              <div 
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative h-72 rounded-[24px] overflow-hidden border border-slate-200 dark:border-slate-800 cursor-pointer shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 bg-gradient-to-tr from-slate-950 to-slate-800 flex flex-col justify-end p-6"
              >
                {/* Dynamic SVG medical workspace illustrations inside gallery */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  {index === 0 && <Microscope className="w-32 h-32 text-white" />}
                  {index === 1 && <Activity className="w-32 h-32 text-white" />}
                  {index === 2 && <Cpu className="w-32 h-32 text-white" />}
                </div>

                <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 border border-white/10 text-[9px] font-black text-[#48CAE4] rounded-full uppercase tracking-widest">
                  {photo.tag}
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg font-extrabold text-white leading-tight">{getLangText(photo.title)}</h3>
                  <p className="text-xs text-slate-400 mt-1 truncate">{getLangText(photo.desc)}</p>
                  
                  <div className="flex items-center gap-1 text-xs text-[#00B4D8] font-bold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{lang === 'uz' ? 'Tekshirish' : lang === 'ru' ? 'Детали' : 'Tekshirish'}</span>
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      )}

      {/* ==========================================
          GALLERY LIGHTBOX MODAL
         ========================================== */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-6" onClick={() => setLightboxIndex(null)}>
          <div className="max-w-2xl w-full bg-slate-900 border border-white/10 rounded-[32px] p-6 relative flex flex-col gap-6" onClick={e => e.stopPropagation()}>
            <button onClick={() => setLightboxIndex(null)} className="absolute top-4 right-4 p-2 bg-white/5 border border-white/5 hover:bg-white/10 text-white rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Visual Area */}
            <div className="aspect-video bg-slate-950 rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#00b4d812_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="text-center p-8 flex flex-col items-center">
                <Microscope className="w-16 h-16 text-[#00B4D8] mb-4 animate-pulse" />
                <div className="px-4 py-1 bg-cyan-950 border border-cyan-800/40 text-[10px] font-black text-[#48CAE4] rounded-full uppercase tracking-widest mb-2">
                  ISO 15189 Certified Hardware
                </div>
                <div className="text-slate-400 text-xs">Roche Diagnostics Switzerland • Abbott Scientific • Sysmex Japan</div>
              </div>
            </div>

            {/* Lightbox text */}
            <div>
              <h3 className="text-xl font-extrabold text-white">{getLangText(GALLERY_PHOTOS[lightboxIndex].title)}</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">{getLangText(GALLERY_PHOTOS[lightboxIndex].desc)}</p>
              <div className="flex gap-4 mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                <span>Calibration: Daily Auto</span>
                <span>•</span>
                <span>Standard: WHO International</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          CERTIFICATE LIGHTBOX MODAL
         ========================================== */}
      {isCertLightboxOpen && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300" onClick={() => setIsCertLightboxOpen(false)}>
          <div className="max-w-3xl w-full bg-slate-900/90 border border-white/10 rounded-[32px] p-4 relative flex flex-col gap-4" onClick={e => e.stopPropagation()}>
            <button onClick={() => setIsCertLightboxOpen(false)} className="absolute top-4 right-4 p-2 bg-white/5 border border-white/5 hover:bg-white/10 text-white rounded-full transition-colors z-10">
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Image Viewer */}
            <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-slate-950 max-h-[80vh] flex items-center justify-center">
              <img 
                src={sertifikatImg} 
                alt="Quality Certificate CAP and ISO 15189" 
                className="w-full max-h-[70vh] object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="px-2 pb-2">
              <h3 className="text-lg font-black text-white">
                {lang === 'uz' ? 'Xalqaro CAP va ISO 15189 Sertifikati' : lang === 'ru' ? 'Международный сертификат CAP и ISO 15189' : 'Xalqaro CAP va ISO 15189 Sertifikati'}
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {lang === 'uz' ? 'Ushbu sertifikat KANILAB laboratoriyasining tashqi sifat nazorati hamda xalqaro standartlarga to‘liq mosligini tasdiqlaydi.' : lang === 'ru' ? 'Этот сертификат подтверждает полное соответствие лаборатории KANILAB международным стандартам контроля качества.' : 'Ushbu sertifikat KANILAB laboratoriyasining tashqi sifat nazorati hamda xalqaro standartlarga to‘liq mosligini tasdiqlaydi.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          BUILDING IMAGE LIGHTBOX MODAL
          ========================================== */}
      {isBuildingLightboxOpen && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300" onClick={() => setIsBuildingLightboxOpen(false)}>
          <div className="max-w-4xl w-full bg-slate-900/90 border border-white/10 rounded-[32px] p-4 relative flex flex-col gap-4" onClick={e => e.stopPropagation()}>
            <button onClick={() => setIsBuildingLightboxOpen(false)} className="absolute top-4 right-4 p-2 bg-white/5 border border-white/5 hover:bg-white/10 text-white rounded-full transition-colors z-10">
              <X className="w-5 h-5" />
            </button>

            {/* Building Image Viewer */}
            <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-slate-950 max-h-[80vh] flex items-center justify-center">
              <img 
                src={markazOldImg} 
                alt="KANILAB Bosh Markazi" 
                className="w-full max-h-[70vh] object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="px-2 pb-2">
              <h3 className="text-lg font-black text-white">
                {lang === 'uz' ? 'KANILAB Bosh Laboratoriyasi' : lang === 'ru' ? 'Главный корпус KANILAB' : 'KANILAB Merkez Laboratuvarı'}
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {getLangTextInline('Landmark: Sobiq Ko‘z kasalxonasi binosi ichida (Eski Ko‘z Kasalxonasi).', 'Ориентир: Внутри здания бывшей Глазной больницы (Старая Глазная Больница).', 'Landmark: Eski Göz Hastanesi binası içinde.', 'Landmark: Inside the former Eye Hospital building (Old Eye Hospital).')}
                <br />
                {lang === 'uz' ? 'Termiz shahridagi eng ilg‘or va zamonaviy tahlillar markazining bosh binosi.' : lang === 'ru' ? 'Главный корпус самого современного и передового диагностического центра в Термезе.' : 'Tirmiz şehrindeki en gelişmiş ve modern analiz merkezinin ana binası.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TESTIMONIALS SLIDER SECTION
         ========================================== */}
      {activeTab === 'home' && (
        <section id="testimonials" className="px-6 md:px-12 py-20 max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] w-full mx-auto border-t border-slate-200/40 dark:border-slate-800/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-sm font-bold text-[#00B4D8] uppercase tracking-wider">{t.reviewsTitle}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {getLangTextInline('Bemorlarimiz biz haqimizda nima deydi?', 'Что говорят пациенты о KANILAB', 'Hastalarımız hakkımızda ne diyor?', 'What do our patients say about us?')}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-medium">
              {getLangTextInline('Biz diagnostika jarayonlarida o‘z salomatligini bizga ishonib topshirgan bemorlarning fikrlarini to‘playmiz va har doim natijalarimiz uchun javob beramiz.', 'Мы собираем отзывы пациентов, которые доверяют нам свою диагностику. Мы гарантируем точность результатов.', 'Teşhis süreçlerinde sağlığını bize emanet eden hastalarımızın görüşlerini topluyor ve sonuçlarımızın her zaman arkasında duruyoruz.', 'We collect feedback from patients who trust us with their diagnostics, and we always stand behind our results.')}
            </p>
            
            <button 
              onClick={() => setIsReviewModalOpen(true)}
              className="mt-4 w-max px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-200 text-white dark:text-slate-900 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95 flex items-center gap-2"
            >
              <Star className="w-4 h-4" />
              {getLangTextInline('Fikr qoldirish', 'Оставить отзыв', 'Yorum Bırak', 'Leave a Review')}
            </button>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-[32px] shadow-xl relative overflow-hidden min-h-[220px] flex flex-col justify-between">
              
              {/* Testimonial Active Block */}
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(allReviews[testimonialIndex]?.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>

                <p className="text-base font-medium text-slate-700 dark:text-slate-200 italic leading-relaxed">
                  "{allReviews[testimonialIndex]?.review}"
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/40 pt-4 mt-6">
                <div>
                  <div className="font-extrabold text-slate-900 dark:text-white">{allReviews[testimonialIndex]?.name}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{allReviews[testimonialIndex]?.role}</div>
                </div>
                
                {/* Dots navigations */}
                <div className="flex gap-2 flex-wrap max-w-[150px] justify-end">
                  {allReviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setTestimonialIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${testimonialIndex === idx ? 'w-6 bg-[#00B4D8]' : 'w-2 bg-slate-200 dark:bg-slate-800'}`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ==========================================
            REVIEW MODAL
           ========================================== */}
        {isReviewModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
              onClick={() => setIsReviewModalOpen(false)}
            ></div>
            
            <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl shadow-2xl relative z-10 p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
              <button 
                onClick={() => setIsReviewModalOpen(false)}
                className="absolute top-4 right-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-full p-2 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                {getLangTextInline('Fikr qoldirish', 'Оставить отзыв', 'Yorum Bırak', 'Leave a Review')}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                {getLangTextInline('Xizmatlarimiz haqida o\'z fikringizni yozib qoldiring.', 'Оставьте свой отзыв о наших услугах.', 'Hizmetlerimiz hakkındaki görüşlerinizi yazın.', 'Share your thoughts about our services.')}
              </p>

              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    {getLangTextInline('Ism va familiya', 'Имя и фамилия', 'İsim ve Soyisim', 'First and Last Name')}
                  </label>
                  <input 
                    type="text" 
                    required
                    value={newReview.name}
                    onChange={e => setNewReview({...newReview, name: e.target.value})}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder={getLangTextInline('Ismingizni kiriting', 'Введите ваше имя', 'Adınızı girin', 'Enter your name')}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    {getLangTextInline('Mijoz turi', 'Тип клиента', 'Müşteri Türü', 'Client Type')}
                  </label>
                  <select
                    value={newReview.role}
                    onChange={e => setNewReview({...newReview, role: e.target.value})}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none"
                  >
                    <option value="">{getLangTextInline('Tanlang...', 'Выберите...', 'Seçiniz...', 'Select...')}</option>
                    <option value={getLangTextInline('Bemor', 'Пациент', 'Hasta', 'Patient')}>{getLangTextInline('Bemor', 'Пациент', 'Hasta', 'Patient')}</option>
                    <option value={getLangTextInline('Shifokor', 'Врач', 'Doktor', 'Doctor')}>{getLangTextInline('Shifokor', 'Врач', 'Doktor', 'Doctor')}</option>
                    <option value={getLangTextInline('Hamkor', 'Партнер', 'İş Ortağı', 'Partner')}>{getLangTextInline('Hamkor', 'Партнер', 'İş Ortağı', 'Partner')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    {lang === 'uz' ? 'Baho bering' : lang === 'ru' ? 'Оцените' : 'Değerlendirin'}
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className={`w-8 h-8 cursor-pointer transition-all hover:scale-110 ${newReview.rating >= star ? 'text-amber-400 fill-amber-400' : 'text-slate-200 dark:text-slate-700'}`}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    {getLangTextInline('Fikringiz', 'Ваш отзыв', 'Görüşünüz', 'Your Review')}
                  </label>
                  <textarea 
                    required
                    rows={4}
                    value={newReview.review}
                    onChange={e => setNewReview({...newReview, review: e.target.value})}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                    placeholder={getLangTextInline('Taassurotlaringiz bilan o\'rtoqlashing...', 'Поделитесь своими впечатлениями...', 'İzlenimlerinizi paylaşın...', 'Share your impressions...')}
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-bold shadow-lg shadow-cyan-500/20 active:scale-98 transition-all"
                  >
                    {getLangTextInline('Yuborish', 'Отправить', 'Gönder', 'Submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
      )}

      {/* ==========================================
          FAQ ACCORDION SECTION
         ========================================== */}
      {activeTab === 'faq' && (
        <section id="faq" className="px-6 md:px-12 py-20 bg-slate-100/30 dark:bg-slate-950/10 border-t border-slate-200/40 dark:border-slate-800/40">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-sm font-bold text-[#00B4D8] uppercase tracking-wider">{t.faqTitle}</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">{t.faqSub}</h2>
          </div>

          <div className="flex flex-col gap-4">
            {t.items.map((item, index) => {
              const isOpen = faqActive === index;
              return (
                <div 
                  key={index} 
                  className="bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 rounded-[20px] overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => setFaqActive(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-extrabold text-slate-800 dark:text-white text-sm md:text-base">{item.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#00B4D8]' : ''}`} />
                  </button>

                  <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-56 opacity-100 border-t border-slate-100 dark:border-slate-800/20' : 'max-h-0 opacity-0'}`}>
                    <p className="p-6 text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50/50 dark:bg-slate-950/20">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
      )}

      {/* ==========================================
          YANGILIKLAR SECTION
         ========================================== */}
      {activeTab === 'news' && (() => {
        const sortedNews = [...NEWS_ITEMS].sort((a, b) => b.date.localeCompare(a.date));
        return (
          <section id="news" className="px-4 md:px-12 py-16 bg-slate-50 dark:bg-slate-950/20 min-h-screen">
            <div className="max-w-7xl w-full mx-auto animate-in fade-in duration-300">
              {/* Header */}
              <div className="flex flex-col items-center text-center gap-2 mb-12">
                <span className="text-sm font-bold text-[#00B4D8] uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  {getLangTextInline('YANGILIKLAR', 'НОВОСТИ', 'HABERLER', 'NEWS')}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                  {getLangTextInline('Kani-Lab yangiliklari va videolari', 'Новости и видео Kani-Lab', 'Kani-Lab Haberleri ve Videoları', 'Kani-Lab News & Videos')}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mt-1">
                  {getLangTextInline(
                    'Laboratoriyamizdagi eng so‘nggi yangiliklar, yutuqlarimiz va rasmiy videolavhalar',
                    'Последние новости, достижения и официальные видеорепортажи о нашей работе',
                    'Laboratuvarımızdan en son haberler, başarılarımız ve resmi videolarımız',
                    'Latest news, achievements, and official videos from our laboratory'
                  )}
                </p>
              </div>

              {/* Featured Main Video */}
              <div className="max-w-4xl mx-auto w-full mb-12 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 rounded-3xl overflow-hidden shadow-md">
                <div className="aspect-video w-full bg-black relative">
                  <iframe 
                    className="w-full h-full border-none"
                    src="https://www.youtube.com/embed/IrN0aMwhuhE?autoplay=1&mute=1&loop=1&playlist=IrN0aMwhuhE"
                    title={getLangTextInline('KANI-LAB: Sog\'ligingiz ishonchli qo\'llarda!', 'KANI-LAB: Ваше здоровье в надежных руках!', 'KANI-LAB: Sağlığınız güvenli ellerde!', 'KANI-LAB: Your health is in safe hands!')}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 bg-slate-50/50 dark:bg-slate-950/20 border-t border-slate-200/30 dark:border-slate-800/30 text-center">
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
                    {getLangTextInline('KANI-LAB: Sog\'ligingiz ishonchli qo\'llarda!', 'KANI-LAB: Ваше здоровье в надежных руках!', 'KANI-LAB: Sağlığınız güvenli ellerde!', 'KANI-LAB: Your health is in safe hands!')}
                  </h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                    {getLangTextInline(
                      'Kani-Lab diagnostika laboratoriyasining rasmiy video-taqdimoti',
                      'Официальная видеопрезентация диагностической лаборатории Kani-Lab',
                      'Kani-Lab teşhis laboratuvarının resmi video tanıtımı',
                      'Official video presentation of Kani-Lab diagnostic laboratory'
                    )}
                  </p>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedNews.map(item => {
                  const isPlaying = playingVideoId === item.id;
                  const imageSrc = item.youtubeId ? "https://img.youtube.com/vi/" + item.youtubeId + "/hqdefault.jpg" : item.image;
                  return (
                    <div 
                      key={item.id} 
                      className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                      onClick={() => {
                        if (item.youtubeId) {
                          setPlayingVideoId(isPlaying ? null : item.id);
                        } else {
                          setSelectedNewsId(item.id);
                        }
                      }}
                    >
                      <div className="aspect-video w-full relative overflow-hidden bg-black shrink-0">
                        {isPlaying ? (
                          <div className="w-full h-full">
                            <iframe 
                              className="w-full h-full border-none"
                              src={"https://www.youtube.com/embed/" + item.youtubeId + "?autoplay=1"}
                              title={getLangText(item.title)}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); setPlayingVideoId(null); }}
                              className="absolute top-3 right-3 p-1.5 bg-slate-950/70 hover:bg-slate-950 text-white rounded-full transition-colors z-10"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <>
                            <img 
                              loading="lazy"
                              src={imageSrc} 
                              alt={getLangText(item.title)} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {item.youtubeId && (
                              <div className="absolute inset-0 bg-slate-950/20 flex items-center justify-center group-hover:bg-slate-950/40 transition-all duration-300">
                                <div className="w-14 h-14 bg-white/90 dark:bg-slate-900/90 text-[#00B4D8] rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300 border border-cyan-400/20">
                                  <svg className="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </div>
                            )}
                            <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500 text-white text-[10px] font-black uppercase tracking-wider rounded-full">
                              {item.category === 'video' ? getLangTextInline('Video', 'Видео', 'Video', 'Video') : item.category === 'news' ? getLangTextInline('Yangilik', 'Новость', 'Haber', 'News') : getLangTextInline('Yutuq', 'Достижение', 'Başarı', 'Achievement')}
                            </div>
                          </>
                        )}
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="text-[10px] text-slate-400 font-bold mb-2 flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.date}
                          </div>
                          <h3 className="text-base font-extrabold text-slate-900 dark:text-white line-clamp-2 leading-snug mb-3">
                            {getLangText(item.title)}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 mb-6">
                            {getLangText(item.description)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (item.youtubeId) {
                              setPlayingVideoId(isPlaying ? null : item.id);
                            } else {
                              setSelectedNewsId(item.id);
                            }
                          }}
                          className={`w-full py-3 text-xs font-black rounded-xl transition-colors flex items-center justify-center gap-1.5 ${
                            isPlaying
                              ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20'
                              : 'bg-slate-50 dark:bg-slate-800/50 hover:bg-[#00B4D8]/10 text-[#0096C7] dark:text-[#48CAE4] hover:text-[#0087A3]'
                          }`}
                        >
                          {item.youtubeId ? (
                            isPlaying ? (
                              <>
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                </span>
                                {getLangTextInline('Hozir ijro etilmoqda', 'Сейчас воспроизводится', 'Şimdi oynatılıyor', 'Now Playing')}
                              </>
                            ) : (
                              <>
                                {getLangTextInline('Videoni tomosha qilish', 'Смотреть видео', 'Videoyu İzle', 'Watch Video')}
                                <ChevronRight className="w-4 h-4" />
                              </>
                            )
                          ) : (
                            <>
                              {getLangTextInline('Batafsil o‘qish', 'Читать далее', 'Detaylı Oku', 'Read More')}
                              <ChevronRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })()}

      {/* ==========================================
          FOTOGALERIYA SECTION
         ========================================== */}
      {activeTab === 'gallery' && (() => {
        const filteredGallery = GALLERY_ITEMS.filter(item => {
          if (selectedGalleryCategory === 'all') return true;
          return item.category === selectedGalleryCategory;
        });
        return (
          <section id="gallery" className="px-4 md:px-12 py-16 bg-slate-50 dark:bg-slate-950/20 min-h-screen">
            <div className="max-w-7xl w-full mx-auto animate-in fade-in duration-300">
              {/* Header */}
              <div className="flex flex-col items-center text-center gap-2 mb-10">
                <span className="text-sm font-bold text-[#00B4D8] uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  {getLangTextInline('FOTOGALEREYA', 'ФОТОГАЛЕРЕЯ', 'FOTO GALERİ', 'PHOTO GALLERY')}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                  {getLangTextInline('Kani-Lab fotogalereyasi', 'Фотогалерея Kani-Lab', 'Kani-Lab Fotoğraf Galerisi', 'Kani-Lab Photo Gallery')}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mt-1">
                  {getLangTextInline(
                    'Laboratoriyamiz faoliyati, ilmiy-akademik hamkorliklarimiz va tantanali tadbirlarimizdan yorqin lahzalar',
                    'Яркие моменты нашей работы, научно-практического сотрудничества и праздничных мероприятий',
                    'Faaliyetlerimiz, bilimsel-akademik işbirliklerimiz ve törensel etkinliklerimizden kareler',
                    'Vibrant moments from our laboratory activities, scientific-academic collaborations, and ceremonial events'
                  )}
                </p>
              </div>

              {/* Category Filter Switcher Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
                <button
                  type="button"
                  onClick={() => setSelectedGalleryCategory('all')}
                  className={`px-5 py-2.5 rounded-2xl text-xs font-black transition-all duration-300 ${
                    selectedGalleryCategory === 'all'
                      ? 'bg-[#00B4D8] text-white shadow-md shadow-cyan-500/20 scale-[1.02]'
                      : 'bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {getLangTextInline('Barchasi', 'Все', 'Hepsi', 'All')}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedGalleryCategory('collaboration')}
                  className={`px-5 py-2.5 rounded-2xl text-xs font-black transition-all duration-300 ${
                    selectedGalleryCategory === 'collaboration'
                      ? 'bg-[#00B4D8] text-white shadow-md shadow-cyan-500/20 scale-[1.02]'
                      : 'bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {getLangTextInline('Ilmiy hamkorlik (TerDU)', 'Научное сотрудничество (ТерГУ)', 'Bilimsel İşbirliği (TerDU)', 'Scientific Collaboration (TerSU)')}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedGalleryCategory('opening')}
                  className={`px-5 py-2.5 rounded-2xl text-xs font-black transition-all duration-300 ${
                    selectedGalleryCategory === 'opening'
                      ? 'bg-[#00B4D8] text-white shadow-md shadow-cyan-500/20 scale-[1.02]'
                      : 'bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {getLangTextInline('Qon olish shahobchasi (2022)', 'Пункт забора крови (2022)', 'Kan Alma Birimi (2022)', 'Blood Draw Station (2022)')}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedGalleryCategory('womens-day')}
                  className={`px-5 py-2.5 rounded-2xl text-xs font-black transition-all duration-300 ${
                    selectedGalleryCategory === 'womens-day'
                      ? 'bg-[#00B4D8] text-white shadow-md shadow-cyan-500/20 scale-[1.02]'
                      : 'bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {getLangTextInline('8-mart bayrami', 'Праздник 8 марта', '8 Mart Bayramı', "International Women's Day")}
                </button>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredGallery.map(item => (
                  <div 
                    key={item.id} 
                    className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                    onClick={() => setNewsLightboxSrc(item.image)}
                  >
                    <div className="h-72 overflow-hidden relative">
                      <img 
                        loading="lazy"
                        src={item.image} 
                        alt={getLangText(item.title)} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <Search className="w-5 h-5" />
                        </div>
                      </div>
                      {/* Caption */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent flex flex-col justify-end pt-20">
                        <span className="text-[9px] text-cyan-400 font-black uppercase tracking-widest block mb-1.5">
                          {item.category === 'collaboration' 
                            ? getLangTextInline('TerDU hamkorligi', 'Сотрудничество с ТерГУ', 'TerDU işbirliği', 'TerSU Collaboration') : getLangTextInline('Qon olish shahobchasi', 'Пункт забора крови', 'Kan Alma Birimi', 'Blood Draw Station')}
                        </span>
                        <h4 className="text-sm font-black text-white leading-tight">
                          {getLangText(item.title)}
                        </h4>
                        <p className="text-[11px] text-slate-300/90 mt-1 line-clamp-2 leading-relaxed font-semibold">
                          {getLangText(item.description)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* News Details Modal */}
      {selectedNewsId && (() => {
        const item = NEWS_ITEMS.find(n => n.id === selectedNewsId);
        if (!item) return null;
        return (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-slate-200/40 dark:border-slate-800/80 max-h-[90vh] flex flex-col">
              <div className="h-80 md:h-[360px] relative shrink-0 bg-black">
                {item.youtubeId ? (
                  <iframe 
                    className="w-full h-full border-none"
                    src={"https://www.youtube.com/embed/" + item.youtubeId + "?autoplay=1"}
                    title={getLangText(item.title)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img 
                    src={item.image} 
                    alt={getLangText(item.title)} 
                    className="w-full h-full object-cover"
                  />
                )}
                <button
                  type="button"
                  onClick={() => setSelectedNewsId(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-slate-900/60 hover:bg-slate-900/90 text-white rounded-full transition-colors backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 md:p-8 overflow-y-auto flex-1">
                <div className="text-[10px] text-slate-400 font-bold mb-3 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-tight mb-4">
                  {getLangText(item.title)}
                </h3>
                <div className="h-px bg-slate-100 dark:bg-slate-800/80 mb-5" />
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line font-medium">
                  {getLangText(item.description)}
                </p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-950/20 border-t border-slate-100 dark:border-slate-800/40 flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedNewsId(null)}
                  className="px-6 py-2.5 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white rounded-xl text-xs font-black hover:bg-slate-300/80 dark:hover:bg-slate-700 transition-colors"
                >
                  {getLangTextInline('Yopish', 'Закрыть', 'Kapat', 'Close')}
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Gallery Lightbox */}
      {newsLightboxSrc && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setNewsLightboxSrc(null)}
        >
          <button 
            type="button" 
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
            onClick={() => setNewsLightboxSrc(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={newsLightboxSrc} 
            alt="Lightbox image" 
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200" 
          />
        </div>
      )}

      {/* ==========================================
          BRANCHES SECTION
         ========================================== */}
      {activeTab === 'branches' && (
        <section id="branches" className="px-4 md:px-12 py-16 bg-slate-50 dark:bg-slate-950/20 min-h-screen">
          <div className="max-w-7xl w-full mx-auto">

            {/* Header */}
            <div className="flex flex-col items-center text-center gap-2 mb-14">
              <span className="text-sm font-bold text-[#00B4D8] uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {getLangTextInline('KANI-LAB TARMOG‘I', 'СЕТЬ KANI-LAB', 'KANİ-LAB AĞI', 'KANI-LAB NETWORK')}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                {getLangTextInline('Bizning filiallar', 'Наши филиалы', 'Şubelerimiz', 'Our Branches')}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mt-1">
                {getLangTextInline(
                  `Termiz shahrida va Surxondaryo viloyatida ${BRANCHES.length} ta filial orqali xizmat ko'rsatamiz`,
                  `Оказываем услуги через ${BRANCHES.length} филиалов в г. Термез и Сурхандарьинской области`,
                  `Termiz ve Surhanderya bölgesinde ${BRANCHES.length} şube ile hizmet veriyoruz`,
                  `We provide services through ${BRANCHES.length} branches in Termez city and Surxondaryo region`
                )}
              </p>
            </div>

            {/* Branches Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BRANCHES.map((branch, idx) => (
                <div
                  key={branch.id}
                  className="group flex flex-col bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Accent strip */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00B4D8] to-[#0096C7] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Branch Number badge */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#00B4D8]/10 text-[#0096C7] font-black text-sm shrink-0">
                      {idx + 1}
                    </span>
                    <span className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-wider rounded-full border border-emerald-100 dark:border-emerald-900/50">
                      {getLangTextInline('FAOL', 'АКТИВЕН', 'AKTİF', 'ACTIVE')}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-sm font-extrabold text-slate-800 dark:text-white leading-snug mb-4 group-hover:text-[#00B4D8] transition-colors">
                    {branch.name[lang] || branch.name.uz}
                  </h3>

                  {/* Info rows */}
                  <div className="flex flex-col gap-2.5 flex-1">
                    {/* Address */}
                    <div className="flex items-start gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#00B4D8]" />
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                        {branch.address[lang] || branch.address.uz}
                      </span>
                    </div>

                    {/* Hours */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                        <Clock className="w-3 h-3 text-amber-500" />
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {branch.hours[lang] || branch.hours.uz}
                      </span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                        <Phone className="w-3 h-3 text-emerald-500" />
                      </div>
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-xs font-bold text-[#0096C7] hover:text-[#00B4D8] transition-colors"
                      >
                        {branch.phone.replace('+998', '+998 ').replace(/(.{7})(.{3})(.{2})(.{2})$/, '$1 $2 $3 $4')}
                      </a>
                    </div>
                  </div>

                  {/* Maps Button */}
                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 w-full py-2.5 rounded-xl bg-[#00B4D8]/8 hover:bg-[#00B4D8] border border-[#00B4D8]/20 hover:border-[#00B4D8] text-[#0096C7] hover:text-white text-xs font-black flex items-center justify-center gap-2 transition-all duration-200 group/btn"
                  >
                    <MapPin className="w-3.5 h-3.5 group-hover/btn:animate-bounce" />
                    {getLangTextInline('Xaritada ko‘rish', 'Показать на карте', 'Haritada Göster', 'View on Map')}
                  </a>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-14 p-8 bg-gradient-to-r from-[#00B4D8]/8 to-[#0096C7]/5 border border-[#00B4D8]/15 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h4 className="text-xl font-extrabold text-slate-800 dark:text-white mb-1">
                  {getLangTextInline('Qaysi filial sizga yaqin?', 'Какая ветка ближе к вам?', 'Hangi şube size daha yakın?', 'Which branch is closer to you?')}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {getLangTextInline('Uydan namuna olish xizmati ham mavjud', 'Также доступна услуга взятия анализов на дому', 'Evde örnek alma hizmeti de mevcuttur', 'Home sample collection service is also available')}
                </p>
              </div>
              <button
                onClick={() => { setActiveTab('contact'); window.location.hash = 'contact'; }}
                className="px-7 py-3 bg-gradient-to-r from-[#00B4D8] to-[#0096C7] text-white font-black text-sm rounded-2xl shadow-lg shadow-[#00B4D8]/25 hover:opacity-90 transition-all shrink-0"
              >
                {getLangTextInline('Bog\'lanish', 'Связаться', 'İletişim', 'Contact')}
              </button>
            </div>

          </div>
        </section>
      )}

            {/* ==========================================
          CONTACT SECTION (Map and Form)
         ========================================== */}
      {activeTab === 'contact' && (
        <section id="contact" className="px-6 md:px-12 py-20 max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] w-full mx-auto border-t border-slate-200/40 dark:border-slate-800/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Interactive vector map */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#00B4D8] uppercase tracking-wider">{t.contactTitle}</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">{t.contactSub}</h2>
            </div>

            {/* Address cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-100/50 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-2xl">
                <MapPin className="w-5 h-5 text-[#00B4D8] mt-1 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Flagman Center</div>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">{t.address}</p>
                  <p className="text-xs text-slate-400 mt-1.5 font-semibold">
                    {getLangTextInline('Landmark: Sobiq Ko‘z kasalxonasi binosi ichida (Eski Ko‘z Kasalxonasi).', 'Ориентир: Внутри здания бывшей Глазной больницы (Старая Глазная Больница).', 'Landmark: Eski Göz Hastanesi binası içinde.', 'Landmark: Inside the former Eye Hospital building (Old Eye Hospital).')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-100/50 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-2xl">
                <Phone className="w-5 h-5 text-[#00B4D8] mt-1 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Call Center & Support</div>
                  <div className="flex flex-col gap-2 mt-2">
                    <a href="tel:+998900751234" className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-[#00B4D8] transition-colors flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>+998 90 075 12 34</span>
                      <span className="text-[9px] px-1.5 py-0.5 bg-cyan-100 dark:bg-cyan-950 text-cyan-500 rounded font-black">Mobile</span>
                    </a>
                    <a href="tel:+998781501234" className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-[#00B4D8] transition-colors flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                      <span>+998 78 150 12 34</span>
                      <span className="text-[9px] px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-950 text-indigo-500 rounded font-black">Landline</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-100/50 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 rounded-2xl">
                <Clock className="w-5 h-5 text-[#00B4D8] mt-1 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Working Hours</div>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">{t.workingHours}</p>
                </div>
              </div>
            </div>

          </div>


          {/* Luxury Contact Inquiries Form */}
          <div className="lg:col-span-6">
            <div className="p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-[32px] shadow-xl flex flex-col gap-6">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{t.contactFormTitle}</h3>
              
              {contactSubmitted ? (
                <div className="p-8 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/20 rounded-[28px] flex flex-col items-center text-center gap-4 relative overflow-hidden shadow-inner">
                  {/* Elegant Success Checkmark Animation and particle rings */}
                  <div className="relative">
                    <span className="absolute -inset-4 rounded-full bg-emerald-500/10 animate-ping"></span>
                    <span className="absolute -inset-8 rounded-full bg-emerald-500/5 animate-pulse"></span>
                    <div className="w-16 h-16 rounded-full bg-emerald-500 dark:bg-emerald-600 flex items-center justify-center text-white shadow-xl relative z-10 border-4 border-white dark:border-slate-900">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                  </div>
                  <div className="space-y-1.5 relative z-10">
                    <h4 className="text-lg font-black text-slate-800 dark:text-white">
                      {getLangTextInline('Ariza qabul qilindi!', 'Заявка принята!', 'Başvuru kabul edildi!', 'Application received!')}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-emerald-400 font-semibold leading-relaxed max-w-sm">
                      {t.formSuccess}
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.formName}</label>
                    <input 
                      id="contact-name"
                      type="text" 
                      placeholder="e.g. Akbarov Nodir"
                      value={contactName}
                      onChange={(e) => {
                        setContactName(e.target.value);
                        if (contactFormErrors.name) setContactFormErrors(p => ({ ...p, name: '' }));
                      }}
                      className={`px-4 py-3 bg-slate-50 dark:bg-slate-950 border rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00B4D8] text-slate-800 dark:text-white transition-all ${contactFormErrors.name ? 'border-red-500 ring-2 ring-red-500/15' : 'border-slate-200 dark:border-slate-800'}`}
                    />
                    {contactFormErrors.name && (
                      <span className="text-[10px] text-red-500 font-extrabold flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {contactFormErrors.name}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.formPhone}</label>
                    <input 
                      id="contact-phone"
                      type="text" 
                      placeholder="+998 90 123-45-67"
                      value={contactPhone}
                      onChange={(e) => {
                        setContactPhone(e.target.value);
                        if (contactFormErrors.phone) setContactFormErrors(p => ({ ...p, phone: '' }));
                      }}
                      className={`px-4 py-3 bg-slate-50 dark:bg-slate-950 border rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00B4D8] text-slate-800 dark:text-white transition-all ${contactFormErrors.phone ? 'border-red-500 ring-2 ring-red-500/15' : 'border-slate-200 dark:border-slate-800'}`}
                    />
                    {contactFormErrors.phone && (
                      <span className="text-[10px] text-red-500 font-extrabold flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {contactFormErrors.phone}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.formMsg}</label>
                    <textarea 
                      id="contact-message"
                      rows={3}
                      placeholder="..."
                      value={contactMsg}
                      onChange={(e) => setContactMsg(e.target.value)}
                      className="px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00B4D8] text-slate-800 dark:text-white"
                    />
                  </div>

                  <button 
                    id="submit-contact-form"
                    type="submit" 
                    className="w-full py-4 bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] rounded-2xl text-sm font-extrabold shadow-md hover:scale-101 active:scale-99 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {t.formSubmit}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
        {/* ==========================================
            "QANDAY BORILADI?" (ROUTE PLANNER) MODULE
           ========================================== */}
        <div className="mt-16 bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 rounded-[32px] p-6 md:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Form: Route details */}
            <div className="lg:w-5/12 flex flex-col gap-6 justify-between text-left">
              <div>
                <span className="text-[10px] font-black text-[#00B4D8] uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  {getLangTextInline('Marshrut rejalashtiruvchi', 'Планировщик маршрута', 'Rota Planlayıcı', 'Route Planner')}
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                  {getLangTextInline('Qanday boriladi?', 'Как добраться?', 'Nasıl Gidilir?', 'How to get there?')}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {getLangTextInline(
                    "Hozirgi turgan joyingizdan istalgan filialimizgacha bo'lgan eng qulay va tezkor yo'nalishni aniqlang.",
                    "Определите наиболее удобный и быстрый маршрут от вашего текущего местоположения до любого из наших филиалов.",
                    "Bulunduğunuz konumdan herhangi bir şubemize giden en kolay ve hızlı rotayı belirleyin.",
                    "Find the most convenient and fastest route from your current location to any of our branches."
                  )}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {/* Qayerdan Input */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    {getLangTextInline('Qayerdan?', 'Откуда?', 'Nereden?', 'From where?')}
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      value={routeFrom}
                      onChange={(e) => setRouteFrom(e.target.value)}
                      placeholder={getLangTextInline('Hozirgi manzilingiz yoki shahar', 'Ваше текущее местоположение или город', 'Mevcut konumunuz veya şehir', 'Your current location or city')}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#00B4D8] text-slate-800 dark:text-white"
                    />
                  </div>
                </div>

                {/* Qayerga Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    {getLangTextInline('Qayerga?', 'Куда?', 'Nereye?', 'Where to?')}
                  </label>
                  <div className="relative">
                    <select
                      value={routeToBranchId}
                      onChange={(e) => setRouteToBranchId(e.target.value)}
                      className="w-full pl-4 pr-10 py-2.5 bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#00B4D8] text-slate-800 dark:text-white appearance-none cursor-pointer"
                    >
                      {BRANCHES.map((b) => (
                        <option key={b.id} value={b.id} className="bg-white dark:bg-slate-950 text-slate-800 dark:text-white">
                          {b.name[lang] || b.name.uz}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Qanaqasiga (Travel Mode) Radio buttons */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    {getLangTextInline('Qanaqasiga?', 'Как?', 'Nasıl?', 'How?')}
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { mode: 'driving', label: getLangTextInline('Avtomobil', 'Автомобиль', 'Araç', 'Car'), icon: '🚗' },
                      { mode: 'transit', label: getLangTextInline('Transport', 'Транспорт', 'Toplu Taşıma', 'Transit'), icon: '🚌' },
                      { mode: 'walking', label: getLangTextInline('Piyoda', 'Пешком', 'Yürüyerek', 'Walking'), icon: '🚶' }
                    ].map((tMode) => (
                      <label
                        key={tMode.mode}
                        className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center cursor-pointer transition-all duration-200 ${
                          travelMode === tMode.mode
                            ? 'border-[#00B4D8] bg-[#00B4D8]/5 text-[#0096C7] font-black'
                            : 'border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/40 text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        <input
                          type="radio"
                          name="travelMode"
                          value={tMode.mode}
                          checked={travelMode === tMode.mode}
                          onChange={() => setTravelMode(tMode.mode as any)}
                          className="sr-only"
                        />
                        <span className="text-base mb-1">{tMode.icon}</span>
                        <span className="text-[10px] font-bold leading-tight">{tMode.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <button
                onClick={() => {
                  const selectedBranch = BRANCHES.find(b => b.id === routeToBranchId) || BRANCHES[0];
                  const destination = encodeURIComponent(selectedBranch.name.uz + ', Termiz');
                  const origin = routeFrom ? encodeURIComponent(routeFrom) : 'My+Location';
                  let googleMapsTravelMode = 'driving';
                  if (travelMode === 'transit') googleMapsTravelMode = 'transit';
                  if (travelMode === 'walking') googleMapsTravelMode = 'walking';
                  
                  const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=${googleMapsTravelMode}`;
                  window.open(directionsUrl, '_blank');
                }}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#00B4D8] to-[#0096C7] text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-[#00B4D8]/20 hover:opacity-90 transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>{getLangTextInline("O'rganing", 'Исследовать', 'Rotayı Keşfedin', 'Explore Route')}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Map Preview placeholder wrapper */}
            <div className="lg:w-7/12 aspect-video lg:aspect-auto min-h-[300px] rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60 relative group/map">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  (BRANCHES.find(b => b.id === routeToBranchId) || BRANCHES[0]).name.uz + ', Termiz'
                )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0 grayscale dark:invert-[0.9] dark:hue-rotate-180 opacity-90 group-hover/map:grayscale-0 transition-all duration-300"
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                <span>{getLangTextInline('Jonli xarita', 'Живая карта', 'Canlı Harita', 'Live Map')}</span>
              </div>
            </div>

          </div>
        </div>
      </section>
      )}
      {/* ==========================================
          CERTIFICATES SECTION (IN-PAGE)
         ========================================== */}
      {activeTab === 'certificates' && (
        <section className="pt-24 pb-20 px-6 md:px-12 bg-slate-50 dark:bg-[#090D1A]">
          <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
            
            {/* Header */}
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                {getLangTextInline('Bizning Sertifikatlar', 'Наши сертификаты', 'Sertifikalarımız', 'Our Certificates')}
              </h2>
              <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto font-medium">
                {lang === 'uz' ? 'Xalqaro sifat kafolati va litsenziyalar' : lang === 'ru' ? 'Международная гарантия качества и лицензии' : 'Uluslararası kalite güvencesi ve lisanslar'}
              </p>
            </div>

            {/* List without cards */}
            <div className="flex flex-col gap-24">
              {[
                  {
                    id: 1,
                    title: getLangTextInline("CAP Sertifikati (2020)", "CAP Сертификат (2020)", "CAP Sertifikası (2020)", "CAP Certificate (2020)"),
                    year: '2020',
                    desc: getLangTextInline(
                      "Ushbu sertifikat Kani-Med laboratoriyasi 2020-yilda College of American Pathologists (CAP) tomonidan o'tkazilgan tashqi sifat nazorati (External Quality Assurance) tekshiruvlarida muvaffaqiyatli qatnashganligini tasdiqlaydi. Tadqiqotlar shuni ko\'rsatadiki, CAP sertifikatiga ega laboratoriyalar boshqalarga qaraganda ancha aniq natijalar beradi. Bu bizning bemorlar salomatligiga bo\'lgan o\'ta mas\'uliyatimizni belgilaydi. Biz faqat xalqaro standartlarga mos uskunalar va reaktivlardan foydalanamiz.",
                      "Этот сертификат подтверждает успешное участие лаборатории Kani-Med во внешнем контроле качества (CAP) в 2020 году. Исследования показывают, что сертифицированные лаборатории дают более точные результаты.",
                      "Bu sertifika, Kani-Med laboratuvarının 2020 yılında College of American Pathologists (CAP) tarafından yürütülen dış kalite kontrol testlerine başarıyla katıldığını teyit eder.",
                      "This certificate confirms the successful participation of Kani-Med laboratory in External Quality Assurance checks conducted by the College of American Pathologists (CAP) in 2020. Studies show that CAP-certified laboratories provide significantly more accurate results, defining our ultimate responsibility toward patient health. We use only equipment and reagents meeting international standards."
                    ),
                    img: cert1Img
                  },
                  {
                    id: 2,
                    title: getLangTextInline("CAP Sertifikati (2021)", "CAP Сертификат (2021)", "CAP Sertifikası (2021)", "CAP Certificate (2021)"),
                    year: '2021',
                    desc: getLangTextInline(
                      "2021-yilgi mavsumda tahlillarimiz sifati xalqaro standartlarga to'liq javob berishi tasdiqlandi. Laboratoriyamiz doimiy ravishda yuqori sifat nazoratini saqlab kelmoqda va har bir bemor uchun aniq natijalar kafolatlanadi. Biz yana bir bor diagnostika sifati bo\'yicha etakchi ekanligimizni isbotladik. CAP sifat kafolati nafaqat bizning uskuna va xodimlarimizni, balki butun diagnostika jarayonimizni qat\'iy tekshiruvdan o\'tkazdi. Bu ishonchli tashxis va to\'g\'ri davolanishning asosi hisoblanadi.",
                      "В сезоне 2021 года подтверждено полное соответствие качества анализов международным стандартам. Наша лаборатория постоянно поддерживает высокий уровень контроля качества.",
                      "2021 sezonunda analizlerimizin kalitesinin uluslararası standartlara tam uyumlu olduğu onaylanmıştır. Laboratuvarımız sürekli olarak yüksek kalite kontrolü sağlamaktadır.",
                      "In the 2021 season, the quality of our analyses was confirmed to fully meet international standards. Our laboratory consistently maintains high quality control, and accurate results are guaranteed for each patient. We proved once again that we are leaders in diagnostic quality. CAP quality assurance strictly inspected not only our equipment and staff but also our entire diagnostic workflow, laying the foundation for reliable diagnosis and correct treatment."
                    ),
                    img: cert2Img
                  },
                  {
                    id: 3,
                    title: getLangTextInline("CAP Sertifikati (2022)", "CAP Сертификат (2022)", "CAP Sertifikası (2022)", "CAP Certificate (2022)"),
                    year: '2022',
                    desc: getLangTextInline(
                      "Ushbu xujjat 2022-yilda texnik va tibbiy mutaxassislarimizning malakasi xalqaro darajada ekanligini hamda laboratoriya jihozlarimiznining benuqson ishlashini kafolatlaydi. Ketma-ket yillar davomida CAP xalqaro miqyosida o'tkaziladigan malaka tekshiruvlarida 100% ijobiy ko\'rsatkichlarga erishib kelmoqdamiz. Bemorlarimiz tahlil natijalarini to\'g\'ridan-to\'g\'ri chet eldagi shifoxonalarga ham yuborishlari mumkin, chunki bizning sertifikat butun dunyoda tan olinadi.",
                      "Этот документ гарантирует международную квалификацию наших специалистов и безупречную работу оборудования в 2022 году. Наши результаты признаются по всему миру.",
                      "Bu belge, 2022 yılında teknik ve tıbbi uzmanlarımızın uluslararası düzeydeki yetkinliğini ve laboratuvar ekipmanlarımızın kusursuz çalışmasını garanti eder.",
                      "This document guarantees that the qualifications of our technical and medical specialists are of an international standard and that our laboratory equipment functions flawlessly. Year after year, we achieve a 100% positive rate in CAP international proficiency testing. Our patients can also send their test results directly to overseas hospitals, as our certification is recognized worldwide."
                    ),
                    img: cert3Img
                  }
              ].map((cert, index) => (
                <div key={cert.id} className={`flex flex-col ${index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'} items-center gap-10 xl:gap-24`}>
                  {/* Image (No Cards) */}
                  <div className="w-full xl:w-[50%] shrink-0 flex items-center justify-center">
                    <img src={cert.img} alt={cert.title} className="w-full max-w-2xl h-auto object-contain transform hover:scale-105 transition-transform duration-700" />
                  </div>
                  
                  {/* Text */}
                  <div className="w-full xl:w-[50%] flex flex-col justify-center text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00B4D8]/10 text-[#00B4D8] text-sm font-bold uppercase tracking-widest w-fit mb-5">
                      <Award className="w-5 h-5" />
                      {cert.year} {getLangTextInline('Yil', 'Год', 'Yıl', 'Year')}
                    </div>
                    <h4 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                      {cert.title}
                    </h4>
                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* ==========================================
          PRIVACY POLICY SECTION
         ========================================== */}
      {activeTab === 'privacy' && (
        <section className="pt-24 pb-20 px-6 md:px-12 bg-slate-50 dark:bg-[#090D1A] min-h-screen">
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-[32px] p-8 md:p-12 shadow-xl text-left">
            <div className="flex items-center gap-3.5 mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#00B4D8]/10 flex items-center justify-center text-[#00B4D8] text-2xl">
                🛡️
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-none">
                  {getLangTextInline('MAXFIYLIK SIYOSATI', 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ', 'GİZLİLİK POLİTİKASI', 'PRIVACY POLICY')}
                </h1>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2">
                  {getLangTextInline('Kani-Lab laboratoriyasi ma’lumotlar maxfiyligi siyosati', 'Политика конфиденциальности данных лаборатории Kani-Lab', 'Kani-Lab Laboratuvarı Veri Gizliliği Politikası', 'Data Privacy Policy of Kani-Lab Laboratory')}
                </p>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 font-semibold mb-6 text-sm leading-relaxed border-b border-slate-100 dark:border-slate-800 pb-6">
              {getLangTextInline(
                'KANI-LAB Klinik Laboratoriyasining rasmiy veb-saytiga xush kelibsiz. Foydalanuvchilarning shaxsiy ma\'lumotlari xavfsizligini muhim deb biladi. Ushbu Maxfiylik siyosati veb-saytimizdan foydalanish davomida qanday ma\'lumotlar yig\'ilishi, ulardan qanday foydalanilishi va qanday himoya qilinishi haqida ma\'lumot beradi.',
                'Добро пожаловать на официальный сайт Клинической Лаборатории KANI-LAB. Настоящая Политика конфиденциальности определяет, какая информация собирается при использовании сайта, как она используется и защищается.',
                'KANI-LAB Klinik Laboratuvarı\'nın resmi web sitesine hoş geldiniz. Bu Gizlilik Politikası, web sitemizin kullanımı sırasında hangi verilerin toplandığını, nasıl kullanıldığını ve nasıl korunduğunu açıklamaktadır.',
                'Welcome to the official website of KANI-LAB Clinical Laboratory. This Privacy Policy details what information is collected during the use of our website, how it is used, and how it is protected.'
              )}
            </p>

            <div className="space-y-8 text-slate-600 dark:text-slate-300 font-medium leading-[1.65] text-sm md:text-base">
              {[
                {
                  title: getLangTextInline('1. Yig\'iladigan ma\'lumotlar', '1. Собираемая информация', '1. Toplanan Bilgiler', '1. Collected Information'),
                  desc: getLangTextInline(
                    'Veb-saytimiz orqali quyidagi ma\'lumotlar yig\'ilishi mumkin:\n\n• Ism va familiya\n• Telefon raqami\n• Elektron pochta manzili (agar taqdim etilsa)\n• Murojaat yoki xabar mazmuni\n• Qurilma turi, brauzer va IP manzil kabi texnik ma\'lumotlar\n• Cookie fayllari orqali yig\'iladigan statistik ma\'lumotlar',
                    'Через наш сайт может собираться следующая информация:\n\n• Имя и фамилия\n• Номер телефона\n• Адрес электронной почты (если предоставлен)\n• Содержание обращения или сообщения\n• Технические данные, такие как тип устройства, браузер и IP-адрес\n• Статистические данные, собираемые с помощью файлов cookie',
                    'Web sitemiz üzerinden aşağıdaki bilgiler toplanabilir:\n\n• Ad ve soyadı\n• Telefon numarası\n• E-posta adresi (sağlanmışsa)\n• Talep veya mesaj içeriği\n• Cihaz türü, tarayıcı ve IP adresi gibi teknik veriler\n• Çerezler (cookie) aracılığıyla toplanan istatistiksel veriler',
                    'The following information may be collected through our website:\n\n• First name and last name\n• Phone number\n• Email address (if provided)\n• Content of the inquiry or message\n• Technical data such as device type, browser, and IP address\n• Statistical data collected through cookies'
                  )
                },
                {
                  title: getLangTextInline('2. Ma\'lumotlardan foydalanish', '2. Использование информации', '2. Bilgilerin Kullanımı', '2. Use of Information'),
                  desc: getLangTextInline(
                    'Yig\'ilgan ma\'lumotlardan quyidagi maqsadlarda foydalaniladi:\n\n• Foydalanuvchi murojaatlariga javob berish\n• Laboratoriya xizmatlari haqida ma\'lumot taqdim etish\n• Sayt faoliyatini yaxshilash va foydalanuvchi tajribasini rivojlantirish\n• Texnik nosozliklarni aniqlash va bartaraf etish\n• Amaldagi qonunchilik talablariga rioya qilish',
                    'Собранная информация используется в следующих целях:\n\n• Ответы на запросы пользователей\n• Предоставление информации о лабораторных услугах\n• Улучшение работы сайта и развитие пользовательского опыта\n• Выявление и устранение технических неисправностей\n• Соблюдение требований применимого законодательства',
                    'Toplanan bilgiler aşağıdaki amaçlarla kullanılır:\n\n• Kullanıcı taleplerine yanıt vermek\n• Laboratuvar hizmetleri hakkında bilgi sunmak\n• Site performansını artırmak ve kullanıcı deneyimini geliştirmek\n• Teknik arızaları tespit etmek ve gidermek\n• Yürürlükteki yasal gerekliliklere uymak',
                    'The collected information is used for the following purposes:\n\n• Responding to user inquiries\n• Providing information about laboratory services\n• Improving website operation and developing user experience\n• Identifying and resolving technical issues\n• Complying with applicable legal requirements'
                  )
                },
                {
                  title: getLangTextInline('3. Shaxsiy ma\'lumotlarni himoya qilish', '3. Защита персональных данных', '3. Kişisel Verilerin Korunması', '3. Protection of Personal Data'),
                  desc: getLangTextInline(
                    'KANI-LAB foydalanuvchilarning shaxsiy ma\'lumotlarini ruxsatsiz kirish, o\'zgartirish, oshkor qilish yoki yo\'qotilishdan himoya qilish uchun zamonaviy texnik va tashkiliy xavfsizlik choralarini qo\'llaydi.',
                    'KANI-LAB применяет современные технические и организационные меры безопасности для защиты персональных данных пользователей от несанкционированного доступа, изменения, разглашения или потери.',
                    'KANI-LAB, kullanıcıların kişisel verilerini yetkisiz erişim, değiştirme, ifşa etme veya kaybolmaya karşı korumak amacıyla modern teknik ve idari güvenlik önlemleri uygulamaktadır.',
                    'KANI-LAB applies modern technical and organizational security measures to protect users\' personal data from unauthorized access, modification, disclosure, or loss.'
                  )
                },
                {
                  title: getLangTextInline('4. Uchinchi shaxslar bilan ma\'lumot almashish', '4. Передача данных третьим лицам', '4. Üçüncü Şahıslarla Veri Paylaşımı', '4. Sharing Data with Third Parties'),
                  desc: getLangTextInline(
                    'KANI-LAB foydalanuvchilarning shaxsiy ma\'lumotlarini uchinchi shaxslarga sotmaydi va ulardan tijorat maqsadlarida foydalanmaydi. Ma\'lumotlar faqat qonunchilik talab qilgan hollarda yoki foydalanuvchining roziligi bilan taqdim etilishi mumkin.',
                    'KANI-LAB не продает личные данные пользователей третьим лицам и не использует их в коммерческих целях. Информация может быть предоставлена только в случаях, предусмотренных законодательством, или с согласия пользователя.',
                    'KANI-LAB, kullanıcıların kişisel verilerini üçüncü şahıslara satmaz ve ticari amaçlarla kullanmaz. Bilgiler yalnızca yasal gereklilik durumlarında veya kullanıcının rızasıyla paylaşılabilir.',
                    'KANI-LAB does not sell users\' personal data to third parties and does not use it for commercial purposes. Data may only be shared if required by law or with the user\'s consent.'
                  )
                },
                {
                  title: getLangTextInline('5. Cookie fayllari', '5. Файлы cookie', '5. Çerezler (Cookies)', '5. Cookies'),
                  desc: getLangTextInline(
                    'Veb-sayt foydalanuvchi tajribasini yaxshilash, sayt faoliyatini tahlil qilish va xizmatlar sifatini oshirish maqsadida cookie texnologiyalaridan foydalanishi mumkin. Foydalanuvchi brauzer sozlamalari orqali cookie fayllarini boshqarishi yoki o\'chirib qo\'yishi mumkin.',
                    'Веб-сайт может использовать технологии cookie для улучшения пользовательского опыта, анализа работы сайта и повышения качества услуг. Пользователь может управлять файлами cookie или отключить их в настройках браузера.',
                    'Web sitesi, kullanıcı deneyimini iyileştirmek, site performansını analiz etmek ve hizmet kalitesini artırmak amacıyla çerez teknolojilerini kullanabilir. Kullanıcı tarayıcı ayarlarından çerezleri yönetebilir veya devre dışı bırakabilir.',
                    'The website may use cookie technologies to improve user experience, analyze site performance, and enhance service quality. Users can manage or disable cookies through their browser settings.'
                  )
                },
                {
                  title: getLangTextInline('6. Tashqi havolalar', '6. Внешние ссылки', '6. Harici Bağlantılar', '6. External Links'),
                  desc: getLangTextInline(
                    'Saytda Telegram, Instagram yoki boshqa tashqi resurslarga havolalar bo\'lishi mumkin. Ushbu platformalarning maxfiylik siyosati va ma\'lumotlarni qayta ishlash tartibi KANI-LAB nazoratidan tashqarida.',
                    'Сайт может содержать ссылки на Telegram, Instagram или другие внешние ресурсы. Политика конфиденциальности и порядок обработки данных этих платформ находятся вне контроля KANI-LAB.',
                    'Sitede Telegram, Instagram veya diğer harici kaynaklara bağlantılar yer alabilir. Bu platformların gizlilik politikaları ve veri işleme prosedürleri KANI-LAB\'ın kontrolü dışındadır.',
                    'The site may contain links to Telegram, Instagram, or other external resources. The privacy policies and data processing procedures of these platforms are beyond the control of KANI-LAB.'
                  )
                },
                {
                  title: getLangTextInline('7. Foydalanuvchi huquqlari', '7. Права пользователя', '7. Kullanıcı Hakları', '7. User Rights'),
                  desc: getLangTextInline(
                    'Foydalanuvchilar o\'z shaxsiy ma\'lumotlariga oid ma\'lumot olish, ularni yangilash, tuzatish yoki amaldagi qonunchilikka muvofiq o\'chirishni so\'rash huquqiga ega.',
                    'Пользователи имеют право получать информацию о своих персональных данных, обновлять, исправлять или запрашивать их удаление в соответствии с применимым законодательством.',
                    'Kullanıcılar, kişisel verileri hakkında bilgi alma, bunları güncelleme, düzeltme veya yürürlükteki mevzuata uygun olarak silinmesini talep etme hakkına sahiptir.',
                    'Users have the right to request information about their personal data, update it, correct it, or request its deletion in accordance with applicable legislation.'
                  )
                },
                {
                  title: getLangTextInline('8. Maxfiylik siyosatiga o\'zgartirishlar', '8. Изменения в политике конфиденциальности', '8. Gizlilik Politikasındaki Değişiklikler', '8. Changes to Privacy Policy'),
                  desc: getLangTextInline(
                    'KANI-LAB ushbu Maxfiylik siyosatini istalgan vaqtda yangilash huquqini o\'zida saqlab qoladi. Yangilangan tahrir veb-saytda e\'lon qilingan kundan boshlab kuchga kiradi.',
                    'KANI-LAB оставляет за собой право обновлять настоящую Политику конфиденциальности в любое время. Обновленная версия вступает в силу со дня ее публикации на сайте.',
                    'KANI-LAB, bu Gizlilik Politikasını istediği zaman güncelleme hakkını saklı tutar. Güncellenmiş sürüm, web sitesinde yayınlandığı tarihten itibaren geçerli olur.',
                    'KANI-LAB reserves the right to update this Privacy Policy at any time. The updated version takes effect from the day it is published on the website.'
                  )
                },
                {
                  title: getLangTextInline('9. Bog\'lanish', '9. Контакты', '9. İletişim', '9. Contact'),
                  desc: getLangTextInline(
                    'Maxfiylik siyosati bo\'yicha savollar yoki murojaatlar uchun biz bilan bog\'lanishingiz mumkin:\n\nKANI-LAB Klinik Laboratoriyasi\n\nManzil: Termiz shahri, Alisher Navoiy ko\'chasi 26A\n\nTelefon: +998 90 075 12 34 • +998 78 150 12 34\n\nIsh vaqti: Dushanba – Shanba, 08:00 – 17:00',
                    'Для вопросов или обращений по поводу политики конфиденциальности вы можете связаться с нами:\n\nКлиническая Лаборатория KANI-LAB\n\nАдрес: г. Термез, улица Алишера Навои, 26А\n\nТелефон: +998 90 075 12 34 • +998 78 150 12 34\n\nВремя работы: Понедельник – Суббота, 08:00 – 17:00',
                    'Gizlilik politikası ile ilgili soru veya talepleriniz için bizimle iletişime geçebilirsiniz:\n\nKANI-LAB Klinik Laboratuvarı\n\nAdres: Termiz şehri, Alisher Navoiy caddesi 26A\n\nTelefon: +998 90 075 12 34 • +998 78 150 12 34\n\nÇalışma saatleri: Pazartesi – Cumartesi, 08:00 – 17:00',
                    'For questions or inquiries regarding the privacy policy, you can contact us:\n\nKANI-LAB Clinical Laboratory\n\nAddress: Termez city, Alisher Navoiy street 26A\n\nPhone: +998 90 075 12 34 • +998 78 150 12 34\n\nOperating hours: Monday – Saturday, 08:00 – 17:00'
                  )
                }
              ].map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-lg font-black text-slate-800 dark:text-white flex items-center gap-2">
                    {section.title}
                  </h3>
                  <p className="pl-6 text-slate-500 dark:text-slate-400 font-semibold leading-relaxed whitespace-pre-line">
                    {section.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-400 dark:text-slate-500 text-center leading-relaxed">
              {getLangTextInline(
                'KANI-LAB rasmiy veb-saytidan foydalanishni davom ettirish orqali siz ushbu Maxfiylik siyosati bilan tanishganingizni va unda bayon etilgan shartlarga rozilik bildirganingizni tasdiqlaysiz.',
                'Продолжая использовать официальный сайт KANI-LAB, вы подтверждаете, что ознакомились с настоящей Политикой конфиденциальности и согласны с ее условиями.',
                'KANI-LAB resmi web sitesini kullanmaya devam ederek, bu Gizlilik Politikasını okuduğunuzu ve burada belirtilen koşulları kabul ettiğinizi onaylamış olursunuz.',
                'By continuing to use the official KANI-LAB website, you confirm that you have read and understood this Privacy Policy and agree to the terms set forth herein.'
              )}
            </p>
          </div>
        </section>
      )}

      {/* ==========================================
          TERMS OF USE SECTION
         ========================================== */}
      {activeTab === 'terms' && (
        <section className="pt-24 pb-20 px-6 md:px-12 bg-slate-50 dark:bg-[#090D1A] min-h-screen">
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-[32px] p-8 md:p-12 shadow-xl text-left">
            <div className="flex items-center gap-3.5 mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 text-2xl">
                ⚖️
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-none">
                  {getLangTextInline('FOYDALANISH SHARTLARI', 'УСЛОВИЯ ИСПОЛЬЗОВАНИЯ', 'KULLANIM KOŞULLARI', 'TERMS OF USE')}
                </h1>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2">
                  {getLangTextInline('Kani-Lab veb-platformasidan foydalanish bo‘yicha shartlar va qoidalar', 'Правила и условия использования веб-платформы Kani-Lab', 'Kani-Lab Web Platformunun Kullanım Şartları ve Koşulları', 'Terms and Conditions for Using the Kani-Lab Web Platform')}
                </p>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 font-semibold mb-6 text-sm leading-relaxed border-b border-slate-100 dark:border-slate-800 pb-6">
              {getLangTextInline(
                'KANI-LAB Klinik Laboratoriyasining rasmiy veb-saytiga xush kelibsiz. Ushbu saytdan foydalanish orqali siz quyida keltirilgan foydalanish shartlariga rozilik bildirgan hisoblanasiz. Mazkur shartlar foydalanuvchilar va KANI-LAB o\'rtasidagi o\'zaro munosabatlarni tartibga solish maqsadida ishlab chiqilgan.',
                'Добро пожаловать на официальный сайт Клинической Лаборатории KANI-LAB. Используя этот сайт, вы соглашаетесь с условиями использования, приведенными ниже. Эти условия разработаны для регулирования взаимоотношений между пользователями и KANI-LAB.',
                'KANI-LAB Klinik Laboratuvarı\'nın resmi web sitesine hoş geldiniz. Bu siteyi kullanarak, aşağıda belirtilen kullanım koşullarını kabul etmiş olursunuz. Bu koşullar, kullanıcılar ile KANI-LAB arasındaki ilişkileri düzenlemek amacıyla geliştirilmiştir.',
                'Welcome to the official website of KANI-LAB Clinical Laboratory. By using this site, you agree to the terms of use set forth below. These terms are designed to regulate the relationship between users and KANI-LAB.'
              )}
            </p>

            <div className="space-y-8 text-slate-600 dark:text-slate-300 font-medium leading-[1.65] text-sm md:text-base">
              {[
                {
                  title: getLangTextInline('1. Saytdan foydalanish', '1. Использование сайта', '1. Sitenin Kullanımı', '1. Using the Site'),
                  desc: getLangTextInline(
                    'KANI-LAB rasmiy veb-sayti laboratoriya xizmatlari, tahlillar, narxlar, ish vaqti, filiallar hamda bog\'lanish ma\'lumotlari haqida foydalanuvchilarga qulay va ishonchli axborot taqdim etish uchun yaratilgan. Saytdan faqat qonuniy maqsadlarda foydalanish mumkin.',
                    'Официальный веб-сайт KANI-LAB создан для предоставления пользователям удобной и достоверной информации о лабораторных услугах, анализах, ценах, времени работы, филиалах и контактных данных. Сайт может быть использован только в законных целях.',
                    'KANI-LAB resmi web sitesi, kullanıcılara laboratuvar hizmetleri, testler, fiyatlar, çalışma saatleri, şubeler ve iletişim bilgileri hakkında kolay ve güvenilir bilgi sağlamak amacıyla oluşturulmuştur. Site yalnızca yasal amaçlar için kullanılabilir.',
                    'The official KANI-LAB website is designed to provide users with convenient and reliable information about laboratory services, tests, prices, operating hours, branches, and contact information. The site may only be used for lawful purposes.'
                  )
                },
                {
                  title: getLangTextInline('2. Ma\'lumotlarning aniqligi', '2. Точность информации', '2. Bilgilerin Doğruluğu', '2. Accuracy of Information'),
                  desc: getLangTextInline(
                    'Saytda e\'lon qilingan barcha ma\'lumotlarni dolzarb va ishonchli saqlashga harakat qilamiz. Biroq xizmatlar, narxlar, ish vaqti yoki boshqa ma\'lumotlar zaruratga ko\'ra o\'zgarishi mumkin. Eng so\'nggi ma\'lumotlarni olish uchun laboratoriyamiz bilan bog\'lanishingiz tavsiya etiladi.',
                    'Мы стараемся поддерживать всю информацию на сайте актуальной и достоверной. Однако услуги, цены, время работы или другая информация могут меняться по мере необходимости. Рекомендуется связаться с нашей лабораторией для получения актуальных данных.',
                    'Sitede yayınlanan tüm bilgileri güncel ve güvenilir tutmaya çalışıyoruz. Ancak hizmetler, fiyatlar, çalışma saatleri veya diğer bilgiler gerektiğinde değişebilir. En güncel bilgileri almak için laboratuvarımızla iletişime geçmeniz önerilir.',
                    'We strive to keep all information published on the site up-to-date and reliable. However, services, prices, working hours, or other information may change as needed. It is recommended to contact our laboratory for the latest information.'
                  )
                },
                {
                  title: getLangTextInline('3. Tibbiy ma\'lumotlar', '3. Медицинская информация', '3. Tıbbi Bilgiler', '3. Medical Information'),
                  desc: getLangTextInline(
                    'Saytda joylashtirilgan ma\'lumotlar faqat umumiy axborot berish maqsadida taqdim etiladi va shifokor konsultatsiyasi, tashxis yoki davolash o\'rnini bosmaydi. Laboratoriya natijalari faqat malakali tibbiyot mutaxassisi tomonidan baholanishi lozim.',
                    'Информация на сайте предоставлена исключительно в ознакомительных целях и не заменяет консультацию врача, диагностику или лечение. Результаты лабораторных исследований должны оцениваться только квалифицированным медицинским специалистом.',
                    'Sitede yer alan bilgiler yalnızca genel bilgilendirme amaçlıdır ve doktor konsültasyonu, teşhis veya tedavinin yerini almaz. Laboratuvar sonuçları yalnızca kalifiye bir tıp uzmanı tarafından değerlendirilmelidir.',
                    'The information posted on the site is provided for general informational purposes only and does not replace doctor consultation, diagnosis, or treatment. Laboratory results should only be evaluated by a qualified medical professional.'
                  )
                },
                {
                  title: getLangTextInline('4. Intellektual mulk', '4. Интеллектуальная собственность', '4. Fikri Mülkiyet', '4. Intellectual Property'),
                  desc: getLangTextInline(
                    'Ushbu saytda joylashgan logotiplar, dizayn elementlari, matnlar, rasmlar, grafikalar, videolar va boshqa materiallar KANI-LAB yoki tegishli huquq egalarining mulki hisoblanadi. Ularni yozma ruxsatsiz nusxalash, tarqatish, o\'zgartirish yoki tijorat maqsadida foydalanish taqiqlanadi.',
                    'Логотипы, элементы дизайна, тексты, изображения, графика, видео и другие материалы на этом сайте являются собственностью KANI-LAB или соответствующих правообладателей. Их копирование, распространение, изменение или использование в коммерческих целях без письменного разрешения запрещено.',
                    'Bu sitede yer alan logolar, tasarım öğeleri, metinler, resimler, grafikler, videolar ve diğer materyaller KANI-LAB\'ın veya ilgili hak sahiplerinin mülkiyetindedir. Yazılı izin olmaksızın bunların kopyalanması, dağıtılması, değiştirilmesi veya ticari amaçlarla kullanılması yasaktır.',
                    'The logos, design elements, texts, images, graphics, videos, and other materials on this site are the property of KANI-LAB or their respective owners. Copying, distributing, modifying, or using them for commercial purposes without written permission is prohibited.'
                  )
                },
                {
                  title: getLangTextInline('5. Foydalanuvchi majburiyatlari', '5. Обязанности пользователя', '5. Kullanıcı Yükümlülükleri', '5. User Obligations'),
                  desc: getLangTextInline(
                    'Foydalanuvchi sayt orqali noto\'g\'ri yoki yolg\'on ma\'lumot yubormasligi, boshqa foydalanuvchilarning huquqlarini buzmasligi hamda saytning normal ishlashiga xalaqit beruvchi harakatlarni amalga oshirmasligi shart.',
                    'Пользователь обязуется не отправлять через сайт недостоверную или ложную информацию, не нарушать права других пользователей и не совершать действий, препятствующих нормальной работе сайта.',
                    'Kullanıcı, site aracılığıyla yanlış veya yanıltıcı bilgi göndermemeyi, diğer kullanıcıların haklarını ihlal etmemeyi ve sitenin normal çalışmasını engelleyecek eylemlerde bulunmamayı taahhüt eder.',
                    'The user must not send incorrect or false information through the site, must not violate the rights of other users, and must not perform actions that interfere with the normal operation of the site.'
                  )
                },
                {
                  title: getLangTextInline('6. Maxfiylik va shaxsiy ma\'lumotlar', '6. Конфиденциальность и персональные данные', '6. Gizlilik ve Kişisel Veriler', '6. Privacy & Personal Data'),
                  desc: getLangTextInline(
                    'Sayt orqali yuborilgan shaxsiy ma\'lumotlar amaldagi qonunchilik talablariga muvofiq qayta ishlanadi va himoya qilinadi. Foydalanuvchilarning shaxsiy ma\'lumotlari ularning roziligisiz uchinchi shaxslarga taqdim etilmaydi, qonunchilikda nazarda tutilgan holatlar bundan mustasno.',
                    'Персональные данные, отправленные через сайт, обрабатываются и защищаются в соответствии с применимым законодательством. Личные данные пользователей не передаются третьим лицам без их согласия, за исключением случаев, предусмотренных законом.',
                    'Site üzerinden gönderilen kişisel veriler, yürürlükteki mevzuat hükümlerine uygun olarak işlenmekte ve korunmaktadır. Kullanıcıların kişisel verileri, yasaların gerektirdiği durumlar hariç, rızaları olmaksızın üçüncü şahıslara verilmez.',
                    'Personal data submitted through the site is processed and protected in accordance with applicable legal requirements. Users\' personal data will not be shared with third parties without their consent, except as provided by law.'
                  )
                },
                {
                  title: getLangTextInline('7. Uchinchi tomon resurslari', '7. Сторонние ресурсы', '7. Üçüncü Taraf Kaynakları', '7. Third-Party Resources'),
                  desc: getLangTextInline(
                    'Saytda Telegram, Instagram yoki boshqa tashqi platformalarga havolalar mavjud bo\'lishi mumkin. Ushbu resurslarning mazmuni, xizmatlari yoki maxfiylik siyosati uchun KANI-LAB javobgar emas.',
                    'Сайт может содержать ссылки на Telegram, Instagram или другие внешние платформы. KANI-LAB не несет ответственности за содержание, услуги или политику конфиденциальности этих ресурсов.',
                    'Sitede Telegram, Instagram veya diğer harici platformlara bağlantılar bulunabilir. KANI-LAB, bu kaynakların içeriğinden, hizmetlerinden veya gizlilik politikalarından sorumlu değildir.',
                    'The site may contain links to Telegram, Instagram, or other external platforms. KANI-LAB is not responsible for the content, services, or privacy policies of these resources.'
                  )
                },
                {
                  title: getLangTextInline('8. Javobgarlikni cheklash', '8. Ограничение ответственности', '8. Sorumluluk Sınırlaması', '8. Limitation of Liability'),
                  desc: getLangTextInline(
                    'KANI-LAB saytning uzluksiz va xavfsiz inshonchli ishlashini ta\'minlashga intiladi. Biroq internet tarmog\'idagi uzilishlar, texnik nosozliklar yoki boshqa nazoratdan tashqari holatlar tufayli yuzaga keladigan noqulayliklar uchun javobgarlikni o\'z zimmasiga olmaydi.',
                    'KANI-LAB стремится обеспечить бесперебойную и безопасную работу сайта. Однако лаборатория не несет ответственности за неудобства, вызванные сбоями в сети Интернет, техническими неполадками или другими обстоятельствами вне нашего контроля.',
                    'KANI-LAB, sitenin kesintisiz ve güvenli çalışmasını sağlamak için çaba gösterir. Ancak, internet ağındaki kesintiler, teknik arızalar veya kontrolü dışındaki diğer durumlardan kaynaklanan olumsuzluklar için sorumluluk kabul etmez.',
                    'KANI-LAB strives to ensure the continuous and secure operation of the site. However, it does not assume liability for inconveniences caused by internet outages, technical failures, or other circumstances beyond our control.'
                  )
                },
                {
                  title: getLangTextInline('9. Shartlarga o\'zgartirish kiritish', '9. Изменение условий', '9. Şartlarda Değişiklik Yapılması', '9. Changes to Terms'),
                  desc: getLangTextInline(
                    'KANI-LAB ushbu foydalanish shartlarini istalgan vaqtda yangilash yoki o\'zgartirish huquqiga ega. Yangilangan tahrir saytga joylashtirilgan paytdan boshlab kuchga kiradi. Foydalanuvchilarga shartlarni vaqti-vaqti bilan ko\'rib chiqish tavsiya etiladi.',
                    'KANI-LAB оставляет за собой право обновлять или изменять настоящие условия использования в любое время. Обновленная версия вступает в силу с момента ее публикации на сайте. Пользователям рекомендуется периодически просматривать условия.',
                    'KANI-LAB, bu kullanım koşullarını istediği zaman güncelleme veya değiştirme hakkına sahiptir. Güncellenmiş sürüm, sitede yayınlandığı andan itibaren yürürlüğe girer. Kullanıcıların şartları periyodik olarak gözden geçirmeleri önerilir.',
                    'KANI-LAB reserves the right to update or change these terms of use at any time. The updated version takes effect from the moment it is posted on the site. Users are advised to review the terms periodically.'
                  )
                },
                {
                  title: getLangTextInline('10. Bog\'lanish', '10. Контакты', '10. İletişim', '10. Contact'),
                  desc: getLangTextInline(
                    'Agar ushbu foydalanish shartlari bo\'yicha savollaringiz bo\'lsa, biz bilan quyidagi aloqa vositalari orqali bog\'lanishingiz mumkin:\n\nKANI-LAB Klinik Laboratoriyasi\n\nManzil: Termiz shahri, Alisher Navoiy ko\'chasi 26A\n\nTelefon: +998 90 075 12 34 • +998 78 150 12 34\n\nIsh vaqti: Dushanba – Shanba, 08:00 – 17:00',
                    'Если у вас есть вопросы по настоящим условиям использования, вы можете связаться с нами по следующим контактам:\n\nКлиническая Лаборатория KANI-LAB\n\nАдрес: г. Термез, улица Алишера Навои, 26А\n\nТелефон: +998 90 075 12 34 • +998 78 150 12 34\n\nВремя работы: Понедельник – Суббота, 08:00 – 17:00',
                    'Bu kullanım koşulları hakkında sorularınız varsa, bizimle aşağıdaki iletişim kanalları aracılığıyla iletişime geçebilirsiniz:\n\nKANI-LAB Klinik Laboratuvarı\n\nAdres: Termiz şehri, Alisher Navoiy caddesi 26A\n\nTelefon: +998 90 075 12 34 • +998 78 150 12 34\n\nÇalışma saatleri: Pazartesi – Cumartesi, 08:00 – 17:00',
                    'If you have any questions regarding these terms of use, you can contact us using the following contact details:\n\nKANI-LAB Clinical Laboratory\n\nAddress: Termez city, Alisher Navoiy street 26A\n\nPhone: +998 90 075 12 34 • +998 78 150 12 34\n\nOperating hours: Monday – Saturday, 08:00 – 17:00'
                  )
                }
              ].map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-lg font-black text-slate-800 dark:text-white flex items-center gap-2">
                    {section.title}
                  </h3>
                  <p className="pl-6 text-slate-500 dark:text-slate-400 font-semibold leading-relaxed whitespace-pre-line">
                    {section.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-400 dark:text-slate-500 text-center leading-relaxed">
              {getLangTextInline(
                'KANI-LAB rasmiy veb-saytidan foydalanishni davom ettirish orqali siz mazkur Foydalanish shartlarini o\'qiganingizni, tushunganingizni va ularga rozilik bildirganingizni tasdiqlaysiz.',
                'Продолжая использовать официальный сайт KANI-LAB, вы подтверждаете, что прочитали, поняли и согласны с настоящими Условиями использования.',
                'KANI-LAB resmi web sitesini kullanmaya devam ederek, bu Kullanım Koşullarını okuduğunuzu, anladığınızı ve kabul ettiğinizi onaylamış olursunuz.',
                'By continuing to use the official KANI-LAB website, you confirm that you have read, understood, and agree to these Terms of Use.'
              )}
            </p>
          </div>
        </section>
      )}

      {/* ==========================================
          FOOTER SECTION
         ========================================== */}
      <footer className="px-6 md:px-12 py-16 bg-white dark:bg-[#060810] border-t border-slate-200/60 dark:border-slate-900/60 transition-all">
        <div className="max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-slate-100 dark:border-slate-900 pb-12">
          
          {/* Column 1: Brand & Socials */}
          <div id="footer-brand" className="flex flex-col gap-5 text-left">
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-all" onClick={() => setActiveTab('home')}>
              <KaniLabLogo className="w-9 h-9" />
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tighter text-slate-900 dark:text-white leading-none">KANILAB</span>
                <span className="text-[8px] font-bold tracking-widest text-[#00B4D8] uppercase leading-none mt-1">Clinical Lab</span>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 dark:text-slate-400 leading-relaxed font-semibold max-w-sm">
              {getLangTextInline('KANI-LAB - eng ilg‘or robotlashtirilgan analizatorlar va yuqori darajadagi tibbiy ekspertlar jamoasi bilan Surxondaryodagi birinchi raqamli premium klinik laboratoriya tarmog‘i.', 'KANILAB – сеть клинических лабораторий премиум-класса с передовым оборудованием в Сурхандарье.', 'KANILAB, gelişmiş robotik analizörleri ve üst düzey uzman ekibiyle birinci sınıf klinik laboratuvardır.', 'KANILAB is the number one premium clinical laboratory network in Surxondaryo with advanced robotic analyzers and a high-level team of medical experts.')}
            </p>

            {/* Premium Glassmorphic Social Media Icons */}
            <div className="flex items-center gap-3.5 mt-2">
              {[
                { 
                  name: 'Telegram', 
                  url: 'https://t.me/KANILABUZ', 
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.968 3.717a1.2 1.2 0 0 0-1.303-.192l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.578.192l-8.533 7.701-.33 4.955a1 1 0 0 0 .974-.485l2.337-2.27 4.861 3.592c.896.494 1.54.239 1.763-.83l3.189-15.025c.162-.654-.08-1.168-.518-1.365z"/>
                    </svg>
                  )
                },
                { 
                  name: 'Instagram', 
                  url: 'https://www.instagram.com/kanilab.laboratory', 
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  )
                },
                { 
                  name: 'Facebook', 
                  url: 'https://www.facebook.com/kanilabuzb', 
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.101 23.6h4.8V11.2h3.2l.4-3.6h-3.6V5.3c0-1 .3-1.7 1.7-1.7h1.9V.4C17.101.3 15.601.2 14.001.2c-3.3 0-5.6 2-5.6 5.8v2.6H5.301v3.6h3.1v11.4z"/>
                    </svg>
                  )
                },
                { 
                  name: 'YouTube', 
                  url: 'http://www.youtube.com/@Kani-Lab_Offical', 
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )
                }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target={social.url !== '#' ? '_blank' : undefined} 
                  referrerPolicy={social.url !== '#' ? 'no-referrer' : undefined}
                  title={social.name}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-[#00B4D8] hover:text-white dark:hover:bg-[#00B4D8] dark:hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Head Office & Working Hours */}
          <div id="footer-info" className="flex flex-col gap-4 text-left">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">{getLangTextInline('Bosh Ofis & Ish Tartibi', 'Главный офис и Часы работы', 'Merkez Ofis ve Çalışma Düzeni', 'Head Office & Working Hours')}</h4>
            
            <div className="space-y-3.5 text-xs text-slate-600 dark:text-slate-400 font-semibold">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-800 dark:text-slate-200 font-extrabold">{getLangTextInline('Termiz Shahri', 'Город Термез', 'Tirmiz Şehri', 'Termez City')}</p>
                  <p className="mt-1 leading-relaxed text-[11px]">{t.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-800 dark:text-slate-200 font-extrabold">{getLangTextInline('Ish Vaqti', 'Часы приема', 'Çalışma Saatleri', 'Working Hours')}</p>
                  <p className="mt-1 text-[11px]">{t.workingHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Contact & Rapid Links */}
          <div id="footer-contact" className="flex flex-col gap-4 text-left">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">{getLangTextInline('Tezkor Bogʻlanish', 'Быстрая Связь', 'Hızlı İletişim', 'Quick Contact')}</h4>
            
            <div className="space-y-3">
              <a href="tel:+998900751234" className="flex items-center gap-3 text-xs font-extrabold text-slate-700 dark:text-slate-300 hover:text-[#00B4D8] transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center group-hover:bg-[#00B4D8] group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase font-black tracking-wider leading-none mb-1">Mobile Concierge</span>
                  <span className="text-xs font-black text-slate-800 dark:text-slate-200 group-hover:text-[#00B4D8] transition-colors">+998 90 075 12 34</span>
                </div>
              </a>

              <a href="tel:+998781501234" className="flex items-center gap-3 text-xs font-extrabold text-slate-700 dark:text-slate-300 hover:text-[#00B4D8] transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center group-hover:bg-[#00B4D8] group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase font-black tracking-wider leading-none mb-1">Landline Support</span>
                  <span className="text-xs font-black text-slate-800 dark:text-slate-200 group-hover:text-[#00B4D8] transition-colors">+998 78 150 12 34</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-[11px] font-bold text-slate-400 tracking-wider uppercase">
          <div id="footer-links" className="flex flex-wrap gap-6 justify-center">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); setActiveTab('privacy'); window.location.hash = 'privacy'; window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#00B4D8] transition-colors">{getLangTextInline('Maxfiylik Siyosati', 'Конфиденциальность', 'Gizlilik Politikası', 'Privacy Policy')}</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); setActiveTab('terms'); window.location.hash = 'terms'; window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#00B4D8] transition-colors">{getLangTextInline('Foydalanish shartlari', 'Условия', 'Kullanım Koşulları', 'Terms of Use')}</a>
            <a href="#gallery" onClick={(e) => { e.preventDefault(); setActiveTab('gallery'); window.location.hash = 'gallery'; window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#00B4D8] transition-colors">{getLangTextInline('Fotogalereya', 'Фотогалерея', 'Foto Galeri', 'Photo Gallery')}</a>
            <button onClick={(e) => { e.preventDefault(); setActiveTab('certificates'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-[#00B4D8] transition-colors font-bold uppercase tracking-wider text-[11px]">{getLangTextInline('Sertifikatlarimiz', 'Сертификаты', 'Sertifikalarımız', 'Our Certificates')}</button>
            <button 
              onClick={() => setIsStatsModalOpen(true)} 
              className="text-emerald-500 hover:text-emerald-400 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5 cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {getLangTextInline('Online Statistika', 'Онлайн Статистика', 'Online Stats', 'Online Stats')}
            </button>
          </div>

          <div id="footer-copyright" className="text-slate-400 text-center font-extrabold">
            {t.footerCopyright}
          </div>
        </div>
      </footer>

      {/* ==========================================
          MULTISTEP BOOKING WIZARD MODAL
         ========================================== */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto" onClick={() => setIsBookingOpen(false)}>
          
          <div 
            className={`bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-[32px] w-full max-w-2xl overflow-hidden shadow-2xl relative flex flex-col transition-all duration-300 ${
              bookingStep === 4 ? 'h-[92vh] max-h-[92vh]' : 'max-h-[90vh]'
            }`} 
            onClick={e => e.stopPropagation()}
          >
            
            {/* Close Button */}
            <button 
              id="close-booking-modal"
              onClick={() => setIsBookingOpen(false)} 
              className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors"
              aria-label="Close booking modal"
            >
              <X className="w-5 h-5 text-slate-700 dark:text-white" />
            </button>

            {/* Modal Header */}
            <div className="p-6 bg-slate-100/50 dark:bg-slate-950/40 border-b border-slate-200/40 dark:border-slate-800/40 shrink-0">
              <h3 className="text-xl font-black text-slate-800 dark:text-white">{t.modalTitle}</h3>
              
              {/* Stepper Wizard Progress Indicators */}
              <div className="flex items-center justify-between gap-1 mt-4">
                {[
                  { step: 1, label: t.modalStep1 },
                  { step: 2, label: t.modalStep2 },
                  { step: 3, label: t.modalStep3 },
                  { step: 4, label: t.modalStep4 }
                ].map(s => (
                  <div key={s.step} className="flex-1 flex flex-col gap-1">
                    <div className={`h-1.5 rounded-full transition-colors duration-300 ${bookingStep >= s.step ? 'bg-[#00B4D8]' : 'bg-slate-200 dark:bg-slate-800'}`}></div>
                    <span className={`text-[9px] font-black uppercase tracking-wide truncate ${bookingStep === s.step ? 'text-[#00B4D8]' : 'text-slate-400'}`}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Wizard form wrapper */}
            <div className="overflow-y-auto flex-1">
            <form onSubmit={handleConfirmBooking} className="p-6 flex flex-col min-h-full">
              
              {/* STEP 1: TEST BREAKDOWN AND MANIPULATIONS */}
              {bookingStep === 1 && (
                <div className="space-y-4">
                  <span className="text-xs font-black text-slate-400 dark:text-slate-400 uppercase tracking-widest">{t.selectedTestsLabel}</span>
                  
                  {cart.length === 0 ? (
                    <div className="py-6 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl text-center flex flex-col items-center gap-2">
                      <FileText className="w-8 h-8 text-slate-300" />
                      <p className="text-xs text-slate-400">{t.noTestsSelectedModal}</p>
                      
                      {/* Show immediate list to append */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full px-4 mt-2">
                        {LABORATORY_TESTS.slice(0, 4).map(item => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => toggleCart(item.id)}
                            className="text-left p-3 bg-slate-50 dark:bg-slate-950 hover:bg-cyan-500/5 border border-slate-100 dark:border-slate-800 rounded-xl text-xs font-bold truncate flex justify-between items-center"
                          >
                            <span>{getLangText(item.name)}</span>
                            <span className="text-[10px] text-cyan-500 shrink-0">+{formatPrice(item.price)}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                      {cart.map(id => {
                        const test = LABORATORY_TESTS.find(t => t.id === id);
                        if (!test) return null;
                        return (
                          <div key={id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/40 rounded-xl">
                            <div className="flex items-center gap-2 max-w-[80%]">
                              <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0" />
                              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 truncate">{getLangText(test.name)}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-xs font-black text-slate-900 dark:text-white">{formatPrice(test.price)}</span>
                              <button 
                                type="button" 
                                onClick={() => toggleCart(id)} 
                                className="text-slate-400 hover:text-red-500"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}




                  {/* Pricing Overview */}
                  <div className="p-4 bg-slate-100/60 dark:bg-slate-950 rounded-2xl flex items-center justify-between text-sm">
                    <span className="font-extrabold text-slate-700 dark:text-slate-300">{getLangTextInline('Jami summa', 'Итоговая сумма', 'Toplam Tutar', 'Total Amount')}:</span>
                    <span className="text-xl font-black text-[#0096C7] dark:text-[#48CAE4]">{formatPrice(cartTotalAmount)}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end gap-3 mt-6">
                    <button 
                      id="next-step-1"
                      type="button" 
                      onClick={() => setBookingStep(2)} 
                      disabled={cart.length === 0}
                      className="px-6 py-3 bg-gradient-to-r from-[#00B4D8] to-[#0096C7] text-white text-xs font-black rounded-xl hover:scale-102 active:scale-98 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {t.btnNext}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: PATIENT INFORMATION */}
              {bookingStep === 2 && (
                <div className="space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.inputName}</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                      <input 
                        id="booking-patient-name"
                        type="text" 
                        required
                        placeholder="e.g. Alimov Sherzod"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00B4D8] text-slate-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.formPhone}</label>
                    <div className="flex items-center bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#00B4D8] transition-all">
                      
                      {/* Country Flag + Dial Code Dropdown */}
                      <div className="relative flex items-center gap-1.5 px-3 py-3 bg-slate-100 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 cursor-pointer shrink-0 select-none">
                        <select
                          value={patientPhoneCountry.code}
                          onChange={(e) => {
                            const selected = PHONE_COUNTRIES.find(c => c.code === e.target.value) || PHONE_COUNTRIES[0];
                            setPatientPhoneCountry(selected);
                            setPatientPhone('');
                          }}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                        >
                          {PHONE_COUNTRIES.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.flag} {c.dialCode} — {c.name}
                            </option>
                          ))}
                        </select>
                        <span className="text-base leading-none">{patientPhoneCountry.flag}</span>
                        <span className="text-xs font-black text-slate-700 dark:text-slate-200">{patientPhoneCountry.dialCode}</span>
                        <ChevronDown className="w-3 h-3 text-slate-400" />
                      </div>

                      {/* Number Input */}
                      <input
                        id="booking-patient-phone"
                        type="tel"
                        required
                        placeholder={patientPhoneCountry.placeholder}
                        value={patientPhone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          if (val.length <= patientPhoneCountry.length) setPatientPhone(val);
                        }}
                        className="flex-1 pl-3 pr-4 py-3 bg-transparent text-sm font-medium focus:outline-none text-slate-800 dark:text-white"
                      />

                      {/* Length indicator */}
                      <span className="pr-3 text-[10px] font-bold text-slate-300 dark:text-slate-600 shrink-0">
                        {patientPhone.length}/{patientPhoneCountry.length}
                      </span>
                    </div>
                  </div>


                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.inputEmail}</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                      <input 
                        id="booking-patient-email"
                        type="email" 
                        placeholder="patient@kanilab.uz"
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00B4D8] text-slate-800 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Custom Searchable Categorized Dropdown for Branches */}
                  <div className="flex flex-col gap-1.5 relative">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.selectBranch}</label>
                    
                    {/* Dropdown Trigger Button */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsBranchDropdownOpen(!isBranchDropdownOpen)}
                        className="w-full pl-11 pr-10 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-semibold text-left focus:outline-none focus:ring-2 focus:ring-[#00B4D8] text-slate-800 dark:text-white flex items-center justify-between shadow-sm cursor-pointer"
                      >
                        <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                        <span className="truncate">{selectedBranch || getLangTextInline('Muassasani tanlang...', 'Выберите учреждение...', 'Kurum seçiniz...', 'Select branch...')}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isBranchDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {/* Dropdown Menu */}
                    {isBranchDropdownOpen && (
                      <>
                        {/* Overlay to close on click outside */}
                        <div 
                          className="fixed inset-0 z-40 cursor-default" 
                          onClick={() => {
                            setIsBranchDropdownOpen(false);
                            setBranchSearchQuery('');
                          }}
                        />
                        
                        <div className="absolute bottom-[calc(100%+4px)] left-0 right-0 z-50 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-150 flex flex-col max-h-64">
                          {/* Search Input Box */}
                          <div className="p-2 border-b border-slate-100 dark:border-slate-800/60 sticky top-0 bg-white dark:bg-slate-900 z-10">
                            <div className="relative flex items-center bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg">
                              <Search className="absolute left-2.5 w-4 h-4 text-slate-400" />
                              <input
                                type="text"
                                value={branchSearchQuery}
                                onChange={(e) => setBranchSearchQuery(e.target.value)}
                                placeholder={getLangTextInline('Qidirish...', 'Поиск...', 'Ara...', 'Search...')}
                                className="w-full pl-9 pr-3 py-2 bg-transparent text-xs font-semibold focus:outline-none text-slate-800 dark:text-white"
                                autoFocus
                              />
                              {branchSearchQuery && (
                                <button 
                                  type="button"
                                  onClick={() => setBranchSearchQuery('')}
                                  className="absolute right-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-bold"
                                >
                                  {getLangTextInline('Tozalash', 'Очистить', 'Temizle', 'Clear')}
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Options List */}
                          <div className="overflow-y-auto flex-1 py-1 max-h-56 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
                            {(() => {
                              const filtered = BRANCH_CATEGORIES.map(cat => ({
                                ...cat,
                                options: cat.options.filter(opt => 
                                  opt.toLowerCase().includes(branchSearchQuery.toLowerCase())
                                )
                              })).filter(cat => cat.options.length > 0);

                              if (filtered.length === 0) {
                                return (
                                  <div className="p-4 text-center text-xs text-slate-400 font-medium">
                                    {getLangTextInline('Hech narsa topilmadi', 'Ничего ne topilmadi', 'Sonuç bulunamadı', 'No results found')}
                                  </div>
                                );
                              }

                              return filtered.map((cat, catIdx) => (
                                <div key={catIdx} className="mb-2 last:mb-0">
                                  <div className="px-3.5 py-1 text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-50/50 dark:bg-slate-950/20 border-y border-slate-100/30 dark:border-slate-800/10">
                                    {cat.category}
                                  </div>
                                  <div className="px-1 mt-1 space-y-0.5">
                                    {cat.options.map((opt, optIdx) => (
                                      <button
                                        key={optIdx}
                                        type="button"
                                        onClick={() => {
                                          setSelectedBranch(opt);
                                          setIsBranchDropdownOpen(false);
                                          setBranchSearchQuery('');
                                        }}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-between ${
                                          selectedBranch === opt 
                                            ? 'bg-[#00B4D8]/10 text-[#0096C7] dark:text-[#48CAE4]' 
                                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                                        }`}
                                      >
                                        <span className="truncate">{opt}</span>
                                        {selectedBranch === opt && <Check className="w-3.5 h-3.5 shrink-0 text-[#0096C7] dark:text-[#48CAE4] ml-2" />}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              ));
                            })()}
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex justify-between gap-3 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/40">
                    <button 
                      type="button" 
                      onClick={() => setBookingStep(1)} 
                      className="px-5 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white text-xs font-black rounded-xl"
                    >
                      {t.btnBack}
                    </button>
                    <button 
                      id="next-step-2"
                      type="button" 
                      onClick={() => setBookingStep(3)} 
                      disabled={!patientName || !patientPhone}
                      className="px-6 py-3 bg-gradient-to-r from-[#00B4D8] to-[#0096C7] text-white text-xs font-black rounded-xl hover:scale-102 transition-all disabled:opacity-50"
                    >
                      {t.btnNext}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: SCHEDULER */}
              {bookingStep === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.selectDate}</label>
                      <input 
                        id="booking-date"
                        type="date" 
                        required
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#00B4D8] text-slate-800 dark:text-white"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.selectTime}</label>
                      <select
                        id="booking-time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#00B4D8] text-slate-800 dark:text-white"
                      >
                        <option value="08:00 - 08:30">08:00 - 08:30</option>
                        <option value="08:30 - 09:00">08:30 - 09:00</option>
                        <option value="09:00 - 09:30">09:00 - 09:30</option>
                        <option value="09:30 - 10:00">09:30 - 10:00</option>
                        <option value="10:00 - 10:30">10:00 - 10:30</option>
                        <option value="10:30 - 11:00">10:30 - 11:00</option>
                        <option value="11:00 - 11:30">11:00 - 11:30</option>
                        <option value="11:30 - 12:00">11:30 - 12:00</option>
                        <option value="12:00 - 12:30">12:00 - 12:30</option>
                        <option value="12:30 - 13:00">12:30 - 13:00</option>
                        <option value="13:00 - 13:30">13:00 - 13:30</option>
                        <option value="13:30 - 14:00">13:30 - 14:00</option>
                        <option value="14:00 - 14:30">14:00 - 14:30</option>
                        <option value="14:30 - 15:00">14:30 - 15:00</option>
                        <option value="15:00 - 15:30">15:00 - 15:30</option>
                        <option value="15:30 - 16:00">15:30 - 16:00</option>
                        <option value="16:00 - 16:30">16:00 - 16:30</option>
                        <option value="16:30 - 17:00">16:30 - 17:00</option>
                      </select>
                    </div>
                  </div>

                  {/* Preparation instructions */}
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200/40 rounded-2xl flex gap-3">
                    <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-black text-amber-800 dark:text-amber-300 uppercase tracking-wider">{t.preparation}</div>
                      <p className="text-[11px] text-amber-700 dark:text-amber-400 mt-1 leading-normal">{t.prepText}</p>
                    </div>
                  </div>

                  {/* Dynamic loader if submitting */}
                  {isProcessingBooking ? (
                    <div className="py-6 flex flex-col items-center gap-3">
                      <RefreshCw className="w-8 h-8 text-[#00B4D8] animate-spin" />
                      <p className="text-xs text-[#00B4D8] font-bold">{t.bookingProcessing}</p>
                    </div>
                  ) : (
                    <div className="flex justify-between gap-3 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/40">
                      <button 
                        type="button" 
                        onClick={() => setBookingStep(2)} 
                        className="px-5 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white text-xs font-black rounded-xl"
                      >
                        {t.btnBack}
                      </button>
                      <button 
                        id="confirm-booking-form"
                        type="submit" 
                        className="px-6 py-3 bg-gradient-to-r from-[#00B4D8] to-[#0096C7] text-white text-xs font-black rounded-xl hover:scale-102 transition-all flex items-center gap-1.5"
                      >
                        <Check className="w-4 h-4" />
                        {t.btnConfirm}
                      </button>
                    </div>
                  )}
                </div>
              )}
              {/* STEP 4: Additional info and actions */}
              {bookingStep === 4 && (
                <div className="space-y-4">
                  {/* Thermal Paper Receipt Design */}
                  <div className="flex justify-center bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <div id="printable-ticket" style={{
                      width: '300px',
                      background: '#ffffff',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                      fontFamily: "'Courier New', Courier, monospace",
                      color: '#1e293b'
                    }}>

                      {/* === HEADER GRADIENT === */}
                      <div style={{
                        backgroundColor: '#0096C7',
                        background: 'linear-gradient(135deg, #0096C7 0%, #00B4D8 60%, #48CAE4 100%)',
                        padding: '20px 16px 16px',
                        textAlign: 'center',
                        position: 'relative'
                      }}>
                        {/* Logo */}
                        <div style={{ 
                          background: 'white', 
                          width: '56px\', height: \'56px', 
                          borderRadius: '50%', 
                          margin: '0 auto 8px', 
                          display: 'flex\', alignItems: \'center\', justifyContent: \'center',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                        }}>
                          <img src={kaniLabLogoImg} alt="KaniLab" crossOrigin="anonymous" style={{
                            width: 36, height: 36, objectFit: 'contain',
                            display: 'block'
                          }} />
                        </div>
                        <div style={{ color: '#fff', fontSize: '18px', fontWeight: 900, letterSpacing: '4px' }}>KANILAB</div>
                        <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '9px', fontWeight: 700, letterSpacing: '2px', marginTop: '3px' }}>
                          {getLangTextInline('PREMIUM DIAGNOSTIKA MARKAZI', 'ЦЕНТР ПРЕМИУМ ДИАГНОСТИКИ', 'PREMIUM TANI MERKEZİ', 'PREMIUM DIAGNOSTICS CENTER')}
                        </div>
                        {/* Decorative bottom wave */}
                        <div style={{
                          position: 'absolute\', bottom: -1, left: 0, right: 0, height: \'12px',
                          background: '#fff\', borderRadius: \'50% 50% 0 0 / 100% 100% 0 0'
                        }} />
                      </div>

                      {/* === PATIENT BANNER === */}
                      <div style={{ padding: '14px 16px 8px', borderBottom: '1px dashed #cbd5e1' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <div style={{ fontSize: '8px', color: '#94a3b8', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                              {getLangTextInline('Bemor', 'Пациент', 'Hasta', 'Patient')}
                            </div>
                            <div style={{ fontSize: '13px', fontWeight: 900, color: '#0f172a', marginTop: '2px' }}>{patientName}</div>
                            <div style={{ fontSize: '10px', color: '#64748b', marginTop: '1px' }}>{patientPhone}</div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '8px', color: '#94a3b8', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                              {getLangTextInline('Chek', 'Чек', 'Bilet/Fatura', 'Receipt/Ticket')}
                            </div>
                            <div style={{ fontSize: '12px', fontWeight: 900, color: '#0096C7', marginTop: '2px', letterSpacing: '1px' }}>{generatedTicketID}</div>
                          </div>
                        </div>
                      </div>

                      {/* === DETAILS ROWS === */}
                      <div style={{ padding: '8px 16px', borderBottom: '1px dashed #cbd5e1' }}>
                        {[
                          { label: getLangTextInline('Sana', 'Дата', 'Tarih', 'Date'), value: selectedDate },
                          { label: getLangTextInline('Vaqt', 'Время', 'Saat', 'Time'), value: selectedTime },
                          { label: getLangTextInline('Filial', 'Филиал', 'Şube', 'Branch'), value: selectedBranch === 'branch1' ? getLangTextInline('Markaziy (Alisher Navoiy)', 'Центральный (Алишер Навои)', 'Merkez (Alisher Navoiy)', 'Central (Alisher Navoiy)') : selectedBranch === 'branch2' ? getLangTextInline('Sharqiy (Olmazor)', 'Восточный (Алмазар)', 'Doğu (Olmazor)', 'Eastern (Olmazor)') : selectedBranch === 'branch3' ? getLangTextInline('Janubiy (Termiz)', 'Южный (Термез)', 'Güney (Termez)', 'Southern (Termez)') : selectedBranch },
                        ].map((row, i) => (
                          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontSize: '11px' }}>
                            <span style={{ color: '#94a3b8', fontWeight: 600 }}>{row.label}</span>
                            <span style={{ fontWeight: 800, color: '#334155' }}>{row.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* === SERVICES LIST === */}
                      <div style={{ padding: '10px 16px', borderBottom: '1px dashed #cbd5e1' }}>
                        <div style={{ fontSize: '8px', fontWeight: 900, color: '#94a3b8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>
                          {getLangTextInline('Xizmatlar', 'Услуги', 'Hizmetler', 'Services')} - {cart.length} {getLangTextInline('ta', ' шт.', ' adet', ' items')}
                        </div>
                        {cart.map((id, index) => {
                          const test = LABORATORY_TESTS.find(item => item.id === id);
                          if (!test) return null;
                          return (
                            <div key={id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '5px', fontSize: '10px' }}>
                              <span style={{ color: '#475569', lineHeight: 1.3 }}>
                                <span style={{ color: '#cbd5e1', marginRight: '4px' }}>{index + 1}.</span>{getLangText(test.name)}
                              </span>
                              <span style={{ fontWeight: 900, color: '#0f172a', whiteSpace: 'nowrap' }}>{formatPrice(test.price)}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* === TOTAL === */}
                      <div style={{ padding: '10px 16px 8px', borderBottom: '1px dashed #cbd5e1' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '11px', fontWeight: 900, color: '#1e293b', letterSpacing: '1px' }}>
                            {getLangTextInline('JAMI SUMMA', 'ИТОГОВАЯ СУММА', 'TOPLAM TUTAR', 'TOTAL AMOUNT')}
                          </span>
                          <span style={{ fontSize: '16px', fontWeight: 900, color: '#0096C7' }}>{formatPrice(cartTotalAmount)}</span>
                        </div>
                      </div>

                      {/* === BARCODE === */}
                      <div style={{ padding: '12px 16px', textAlign: 'center' }}>
                        <div style={{ display: 'flex', gap: '2px', height: '40px', justifyContent: 'center', alignItems: 'center', marginBottom: '6px' }}>
                          {[2,1,3,1,2,4,1,3,2,1,4,2,1,3,1,2,3,1,2,4,1,2].map((w, i) => (
                            <div key={i} style={{ width: `${w * 2}px`, height: i % 3 === 0 ? '40px' : '32px', background: '#0f172a', borderRadius: '1px', flexShrink: 0 }} />
                          ))}
                        </div>
                        <div style={{ fontSize: '9px', letterSpacing: '3px', color: '#64748b', fontWeight: 700 }}>{generatedTicketID}</div>
                      </div>

                      {/* === FOOTER === */}
                      <div style={{ background: '#f8fafc', padding: '10px 16px', textAlign: 'center', borderTop: '1px solid #e2e8f0' }}>
                        <div style={{ fontSize: '9px', color: '#94a3b8', fontWeight: 600, lineHeight: 1.5 }}>
                          📞 +998 78 150 12 34 | kanilab.uz
                        </div>
                        <div style={{ fontSize: '8px', color: '#cbd5e1', marginTop: '4px', fontWeight: 600, letterSpacing: '1px' }}>
                          {getLangTextInline("Sog'lig\'ingiz – bizning maqsadimiz", 'Ваше здоровье – наша цель', 'Sağlığınız – hedefimiz', 'Your health is our goal')}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* preparation guidelines */}
                  <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200/40 rounded-2xl flex gap-3">
                    <FileText className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider">{t.preparation}</div>
                      <p className="text-[11px] text-slate-400 leading-normal mt-1">{t.prepText}</p>
                    </div>
                  </div>

                  {/* Prominent Help Desk / Support phone numbers */}
                  <div className="p-4 bg-[#00B4D8]/5 border border-[#00B4D8]/15 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#00B4D8] animate-pulse" />
                      <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{getLangTextInline('Yordam va qo‘llab-quvvatlash', 'Помощь и поддержка', 'Yardım ve Destek', 'Help & Support')}</div>
                        <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-0.5">
                          {getLangTextInline('Muammo yuzaga kelsa, biz bilan bog‘laning', 'Если возникнут проблемы, свяжитесь с нами', 'Bir sorun oluşursa bizimle iletişime geçin', 'If a problem arises, please contact us')}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 text-xs font-black text-[#0096C7] dark:text-[#48CAE4]">
                      <a href="tel:+998900751234" className="hover:underline">+998 90 075 12 34</a>
                      <span className="text-slate-300">|</span>
                      <a href="tel:+998781501234" className="hover:underline">+998 78 150 12 34</a>
                    </div>
                  </div>

                  {/* Save PDF and close actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={async () => {
                        try {
                          const { toPng: _toPng } = await import('html-to-image');
                          const { jsPDF: _jsPDF } = await import('jspdf');
                          const ticketEl = document.getElementById('printable-ticket');
                          if (!ticketEl) return;
                          const dataUrl = await _toPng(ticketEl, { pixelRatio: 2, cacheBust: true });
                          const img = new Image(); img.src = dataUrl;
                          await new Promise(r => { img.onload = r; });
                          const pdf = new _jsPDF({ orientation: 'portrait', unit: 'mm', format: [80, 200] });
                          pdf.setFillColor(0, 180, 216);
                          pdf.rect(0, 0, 80, 20, 'F');
                          pdf.setTextColor(255, 255, 255);
                          pdf.setFontSize(9); pdf.setFont('helvetica', 'bold');
                          pdf.text('KANILAB - ' + getLangTextInline('CHIPTA', 'ЧЕК', 'BİLET', 'RECEIPT'), 4, 7);
                          pdf.setFontSize(8);
                          pdf.text(getLangTextInline('Bemor', 'Пациент', 'Hasta', 'Patient') + `: ${patientName}`, 4, 13);
                          pdf.text(getLangTextInline('Raqam', 'Номер', 'Numara', 'Number') + `: ${generatedTicketID}`, 4, 18);
                          const pageW = 80;
                          const imgH = (img.height / img.width) * pageW;
                          pdf.addImage(dataUrl, 'JPEG', 0, 22, pageW, Math.min(imgH, 175));
                          pdf.save(`KaniLab_${generatedTicketID}_${patientName.replace(/\s+/g, '_')}.pdf`);
                        } catch(e) { console.error(e); }
                      }}
                      className="flex-1 py-3.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 hover:bg-slate-200 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      {getLangTextInline('PDF saqlab olish', 'Сохранить PDF', 'PDF Olarak İndir', 'Save PDF')}
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setIsBookingOpen(false);
                        setCart([]);
                      }}
                      className="flex-1 py-3.5 bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] rounded-xl text-xs font-black hover:scale-101 transition-all"
                    >
                      {t.btnDone}
                    </button>
                  </div>

                </div>
              )}


            </form>
            </div>

          </div>

        </div>
      )}

      {/* ==========================================
          FLOATING ULTRA-PREMIUM CONCIERGE SUITE
         ========================================== */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 font-sans">
        
        {/* Expanded Concierge Menu Card */}
        {isFloatingMenuOpen && (
          <div className="w-72 bg-white/80 dark:bg-slate-950/85 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/80 rounded-3xl p-5 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-5 duration-300">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-900 pb-2.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00B4D8] animate-pulse" />
                <span className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">KANI-LAB Chat & Call</span>
              </div>
              <button 
                id="close-floating-suite"
                onClick={() => setIsFloatingMenuOpen(false)}
                className="p-1 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick action buttons list */}
            <div className="flex flex-col gap-2">
              
              {/* Call Mobile */}
              <a 
                href="tel:+998900751234"
                className="flex items-center gap-3 p-2.5 bg-slate-50 dark:bg-slate-900 hover:bg-[#00B4D8]/10 dark:hover:bg-[#00B4D8]/10 rounded-2xl border border-slate-100 dark:border-slate-800 transition-colors text-left group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#00B4D8]/10 text-[#00B4D8] flex items-center justify-center shrink-0 group-hover:bg-[#00B4D8] group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Mobile Concierge</div>
                  <div className="text-xs font-black text-slate-800 dark:text-slate-200 group-hover:text-[#00B4D8] transition-colors">+998 90 075 12 34</div>
                </div>
              </a>

              {/* Call Landline */}
              <a 
                href="tel:+998781501234"
                className="flex items-center gap-3 p-2.5 bg-slate-50 dark:bg-slate-900 hover:bg-[#00B4D8]/10 dark:hover:bg-[#00B4D8]/10 rounded-2xl border border-slate-100 dark:border-slate-800 transition-colors text-left group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#00B4D8]/10 text-[#00B4D8] flex items-center justify-center shrink-0 group-hover:bg-[#00B4D8] group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Landline Office</div>
                  <div className="text-xs font-black text-slate-800 dark:text-slate-200 group-hover:text-[#00B4D8] transition-colors">+998 78 150 12 34</div>
                </div>
              </a>

              {/* Telegram */}
              <a 
                href="https://t.me/Kani_lab_uz" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="flex items-center gap-3 p-2.5 bg-[#0088cc]/5 hover:bg-[#0088cc]/15 rounded-2xl border border-[#0088cc]/10 transition-colors text-left group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#0088cc] text-white flex items-center justify-center shrink-0 shadow-sm shadow-[#0088cc]/20">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M21.968 3.717a1.2 1.2 0 0 0-1.303-.192l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.578.192l-8.533 7.701-.33 4.955a1 1 0 0 0 .974-.485l2.337-2.27 4.861 3.592c.896.494 1.54.239 1.763-.83l3.189-15.025c.162-.654-.08-1.168-.518-1.365z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] font-black text-[#0088cc] uppercase tracking-widest leading-none mb-1">Telegram — Xabar yuborish</div>
                  <div className="text-xs font-black text-slate-800 dark:text-slate-200 group-hover:text-[#0088cc] transition-colors">@Kani_lab_uz</div>
                </div>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/kanilab.laboratory" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="flex items-center gap-3 p-2.5 bg-[#E1306C]/5 hover:bg-[#E1306C]/15 rounded-2xl border border-[#E1306C]/10 transition-colors text-left group"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center shrink-0 shadow-sm shadow-[#E1306C]/20">
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] font-black text-[#E1306C] uppercase tracking-widest leading-none mb-1">Instagram Feed</div>
                  <div className="text-xs font-black text-slate-800 dark:text-slate-200 group-hover:text-[#E1306C] transition-colors">@kanilab.laboratory</div>
                </div>
              </a>

              {/* Sticky booking action */}
              <button 
                id="floating-book-now"
                onClick={() => {
                  setIsFloatingMenuOpen(false);
                  startEmptyBooking();
                }}
                className="w-full mt-1.5 py-3 bg-gradient-to-r from-[#00B4D8] to-[#0096C7] text-white rounded-2xl text-xs font-black hover:shadow-lg hover:shadow-cyan-500/20 active:scale-98 transition-all flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                <span>{getLangTextInline('Hozir band qilish', 'Забронировать сейчас', 'Şimdi Rezervasyon Yap', 'Book Now')}</span>
              </button>

            </div>
          </div>
        )}

        {/* Pulsing Launcher Button */}
        <button 
          id="toggle-floating-concierge"
          onClick={() => setIsFloatingMenuOpen(!isFloatingMenuOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl relative transition-all duration-300 ${isFloatingMenuOpen ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 rotate-90 scale-95' : 'bg-gradient-to-r from-[#00B4D8] to-[#0096C7] hover:scale-110 active:scale-95'}`}
          aria-label="Toggle concierge concierge"
        >
          {isFloatingMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <span className="absolute inset-0 rounded-full bg-cyan-500/30 animate-ping"></span>
              <Phone className="w-5 h-5 relative z-10" />
            </>
          )}
        </button>

      </div>

      {/* ==========================================
          ANALYZER DETAILS MODAL
         ========================================== */}
      {selectedAnalyzer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" 
            onClick={() => setSelectedAnalyzer(null)}
          ></div>
          
          <div className="bg-white dark:bg-slate-900 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative z-10 flex flex-col md:flex-row overflow-hidden border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedAnalyzer(null)}
              className="absolute top-4 right-4 z-20 bg-slate-900/50 hover:bg-slate-900/80 text-white rounded-full p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image Section */}
            <div className="md:w-5/12 relative bg-slate-100 dark:bg-slate-950 flex-shrink-0">
              <img 
                src={selectedAnalyzer.image} 
                alt={selectedAnalyzer.name} 
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                <div className={`inline-flex self-start text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-sm mb-3 ${selectedAnalyzer.badgeColor}`}>
                  {selectedAnalyzer.badge}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  {selectedAnalyzer.name}
                </h3>
                <p className="text-slate-300 font-medium mt-2">
                  {getLangText(selectedAnalyzer.category)}
                </p>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="p-6 md:p-8 flex-1 flex flex-col overflow-y-auto">
              
              <div className="mb-6">
                <h4 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  {getLangTextInline('Qisqacha tavsif', 'Краткое описание', 'Kısa Açıklama', 'Brief Description')}
                </h4>
                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {getLangText(selectedAnalyzer.shortDesc)}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Microscope className="w-4 h-4" />
                  {getLangTextInline('Ilmiy va texnik ma\'lumotlar', 'Научно-технические данные', 'Bilimsel ve Teknik Veriler', 'Scientific & Technical Data')}
                </h4>
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-800">
                  <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed text-justify mb-5">
                    {getLangText(selectedAnalyzer.scientificDetails)}
                  </p>
                  
                  {/* Specs Grid */}
                  {selectedAnalyzer.specs && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                      {selectedAnalyzer.specs.map((spec, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-900 rounded-xl p-3 shadow-sm border border-slate-100 dark:border-slate-800">
                          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                            {getLangText(spec.label)}
                          </span>
                          <span className="block text-sm font-bold text-slate-800 dark:text-slate-200">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* DIGITAL RECEIPT CHECK MODAL */}
      {isCheckModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setIsCheckModalOpen(false)}></div>
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl shadow-2xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-[#00B4D8]" />
                {getLangTextInline('Chekni tekshirish', 'Проверка чека', 'Faturayı Kontrol Et', 'Check Ticket')}
              </h2>
              <button 
                onClick={() => setIsCheckModalOpen(false)}
                className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleCheckTicket} className="flex gap-2 mb-6">
                <div className="flex-1 flex items-center bg-slate-50 dark:bg-slate-950 border border-slate-200/40 dark:border-slate-800/40 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#00B4D8]">
                  <span className="pl-4 pr-1 text-sm font-bold text-slate-400 select-none">KL-</span>
                  <input
                    type="text"
                    value={checkInputId}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, ''); // faqat raqamlarni qoldirish
                      setCheckInputId(val);
                    }}
                    placeholder="XXXXXX"
                    maxLength={6}
                    className="w-full pr-4 py-3 bg-transparent text-sm font-semibold focus:outline-none text-slate-800 dark:text-white"
                  />
                </div>
                <button type="submit" className="px-6 py-3 bg-[#00B4D8] hover:bg-[#0096C7] text-white font-bold rounded-xl transition-colors">
                  {getLangTextInline('Izlash', 'Поиск', 'Arama', 'Search')}
                </button>
              </form>

              {checkError && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl text-sm font-semibold flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  {checkError}
                </div>
              )}

              {foundTicket && (
                <div className="p-5 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30 rounded-2xl">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-bold">{getLangTextInline('Chipta topildi', 'Чек найден', 'Bilet bulundu', 'Ticket Found')}</span>
                  </div>
                  <div className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300">

                    {/* Asosiy ma'lumotlar */}
                    <div className="flex justify-between border-b border-emerald-100 dark:border-emerald-800/30 pb-2">
                      <span className="text-slate-500">{getLangTextInline('Chipta', 'Чек', 'Bilet', 'Ticket')}:</span>
                      <strong className="text-slate-900 dark:text-white">{foundTicket.id}</strong>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 dark:border-emerald-800/30 pb-2">
                      <span className="text-slate-500">{getLangTextInline('Bemor', 'Пациент', 'Hasta', 'Patient')}:</span>
                      <strong className="text-slate-900 dark:text-white">{foundTicket.patientName}</strong>
                    </div>
                    <div className="flex justify-between border-b border-emerald-100 dark:border-emerald-800/30 pb-2">
                      <span className="text-slate-500">{getLangTextInline('Sana', 'Дата', 'Tarih', 'Date')}:</span>
                      <strong className="text-slate-900 dark:text-white">{foundTicket.selectedDate} {foundTicket.selectedTime}</strong>
                    </div>
                    {foundTicket.selectedBranch && (
                      <div className="flex justify-between border-b border-emerald-100 dark:border-emerald-800/30 pb-2">
                        <span className="text-slate-500">{getLangTextInline('Filial', 'Филиал', 'Şube', 'Branch')}:</span>
                        <span className="text-right text-xs font-semibold text-slate-700 dark:text-slate-300">
                          {getLangTextInline(
                            foundTicket.selectedBranch === 'branch1' ? 'Markaziy (Alisher Navoiy)' : foundTicket.selectedBranch === 'branch2' ? 'Sharqiy (Olmazor)' : foundTicket.selectedBranch === 'branch3' ? 'Janubiy (Termiz)' : foundTicket.selectedBranch,
                            foundTicket.selectedBranch === 'branch1' ? 'Центральный (Алишер Навои)' : foundTicket.selectedBranch === 'branch2' ? 'Восточный (Алмазар)' : foundTicket.selectedBranch === 'branch3' ? 'Южный (Термез)' : foundTicket.selectedBranch,
                            foundTicket.selectedBranch === 'branch1' ? 'Merkez (Alisher Navoiy)' : foundTicket.selectedBranch === 'branch2' ? 'Doğu (Olmazor)' : foundTicket.selectedBranch === 'branch3' ? 'Güney (Termez)' : foundTicket.selectedBranch,
                            foundTicket.selectedBranch === 'branch1' ? 'Central (Alisher Navoiy)' : foundTicket.selectedBranch === 'branch2' ? 'Eastern (Olmazor)' : foundTicket.selectedBranch === 'branch3' ? 'Southern (Termez)' : foundTicket.selectedBranch
                          )}
                        </span>
                      </div>
                    )}

                    {/* Tahlillar ro'yxati */}
                    {foundTicket.cart && foundTicket.cart.length > 0 && (
                      <div className="border-b border-emerald-100 dark:border-emerald-800/30 pb-2">
                        <div className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">
                          {getLangTextInline('Tahlillar', 'Анализы', 'Analizler', 'Tests')} ({foundTicket.cart.length})
                        </div>
                        <div className="space-y-1.5 max-h-40 overflow-y-auto">
                          {foundTicket.cart.map((id: string, idx: number) => {
                            const test = LABORATORY_TESTS.find(t => t.id === id);
                            if (!test) return null;
                            return (
                              <div key={id} className="flex justify-between items-start gap-2 text-xs">
                                <span className="text-slate-600 dark:text-slate-400 leading-tight">
                                  <span className="text-slate-400 mr-1">{idx + 1}.</span>{getLangText(test.name)}
                                </span>
                                <span className="font-bold text-slate-800 dark:text-slate-200 shrink-0">{formatPrice(test.price)}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Jami */}
                    <div className="flex justify-between border-b border-emerald-100 dark:border-emerald-800/30 pb-2">
                      <span className="text-slate-500 font-bold">{getLangTextInline('Jami summa', 'Итого', 'Toplam Tutar', 'Total Amount')}:</span>
                      <strong className="text-[#00B4D8] text-base">{formatPrice(foundTicket.cartTotalAmount)}</strong>
                    </div>

                    {/* Holat */}
                    <div className="flex justify-between pt-1">
                      <span className="text-slate-500">{getLangTextInline('Holati', 'Статус', 'Durum', 'Status')}:</span>
                      <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-800/50 text-emerald-700 dark:text-emerald-300 rounded text-xs font-bold uppercase">
                        {getLangTextInline('Tasdiqlangan', 'Подтвержден', 'Onaylandı', 'Confirmed')}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
{/* ==========================================
          REAL-TIME STATISTICS MODAL
         ========================================== */}
      {isStatsModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto" onClick={() => setIsStatsModalOpen(false)}>
          <div 
            className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-[32px] w-full max-w-3xl overflow-hidden shadow-2xl relative flex flex-col transition-all duration-300 max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsStatsModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-700/80 transition-all cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-4 border-b border-slate-100 dark:border-slate-850 shrink-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <Activity className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight">
                      {getLangTextInline('KaniLab Live Platforma Statistikasi', 'Статистика живой платформы KaniLab', 'KaniLab Canlı Platform Analitiği', 'KaniLab Live Platform Analytics')}
                    </h3>
                    <span className="px-2 py-0.5 bg-red-500 text-white text-[9px] font-black tracking-widest uppercase rounded flex items-center gap-1 shrink-0">
                      <span className="w-1 h-1 bg-white rounded-full animate-ping"></span>
                      LIVE
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-400 mt-1">
                    {getLangTextInline('Real vaqt rejimida tashrif buyuruvchilar faolligi va geolokatsiyasi', 'Активность посетителей и геолокация в реальном времени', 'Gerçek zamanlı ziyaretçi etkinliği ve coğrafi konum analitiği', 'Real-time visitor activity and geolocation analytics')}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-1 border-b border-slate-100 dark:border-slate-850/60 px-8 py-2 shrink-0 bg-slate-50/50 dark:bg-slate-900/30">
              {[
                { id: 'overview', label: getLangTextInline('Umumiy ko\'rinish', 'Обзор', 'Genel Bakış', 'Overview') },
                { id: 'users', label: getLangTextInline('Jonli Oqim', 'Живой поток', 'Canlı Akış', 'Live Feed') + ` (${onlineCount})` },
                { id: 'devices', label: getLangTextInline('Qurilmalar', 'Устройства', 'Cihazlar', 'Devices') }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setStatsTab(tab.id as any)}
                  className={`px-4 py-2.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
                    statsTab === tab.id
                      ? 'bg-[#00B4D8]/10 text-[#0096C7] dark:text-[#48CAE4]'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-850 dark:hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Modal Content */}
            <div className="p-8 pt-6 overflow-y-auto space-y-6 flex-1">
              
              {statsTab === 'overview' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Active Users */}
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 dark:from-emerald-500/15 dark:to-teal-500/5 border border-emerald-500/10 dark:border-emerald-500/20 flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                          {getLangTextInline('Hozir Online', 'Активно сейчас', 'Şimdi Aktif', 'Active Now')}
                        </span>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-1">
                          {onlineCount}
                        </h4>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                          {getLangTextInline('faol sessiyalar', 'активных сессий', 'aktif oturum', 'active sessions')}
                        </p>
                      </div>
                    </div>

                    {/* Total Visits */}
                    <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/80 flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                          {getLangTextInline('Jami Tashriflar', 'Всего посещений', 'Toplam Ziyaret', 'Total Visits')}
                        </span>
                        <Database className="w-4 h-4 text-slate-400" />
                      </div>
                      <div>
                        <h4 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-1">
                          {totalVisits.toLocaleString()}
                        </h4>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                          {getLangTextInline('kirishlar soni', 'всего просмотров', 'toplam sayfa yükleme', 'total page loads')}
                        </p>
                      </div>
                    </div>

                    {/* Active Countries */}
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-[#00B4D8]/10 to-[#0096C7]/5 dark:from-[#00B4D8]/15 dark:to-transparent border border-[#00B4D8]/10 dark:border-[#00B4D8]/20 flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-black text-[#0096C7] dark:text-[#48CAE4] tracking-wider uppercase">
                          {getLangTextInline('Faol Davlatlar', 'Активные страны', 'Aktif Ülkeler', 'Active Countries')}
                        </span>
                        <Globe className="w-4 h-4 text-[#00B4D8]" />
                      </div>
                      <div>
                        <h4 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-1">
                          {countryStats.length}
                        </h4>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                          {getLangTextInline('geografik hududlar', 'гео-регионы', 'coğrafi bölgeler', 'geo-regions')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Countries Distribution */}
                  <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60">
                    <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-cyan-500" />
                      {getLangTextInline('Foydalanuvchilarning davlatlar bo\'yicha taqsimoti', 'Распределение пользователей по странам', 'Ülkelere Göre Kullanıcı Dağılımı', 'User Distribution by Country')}
                    </h4>

                    {countryStats.length === 0 ? (
                      <div className="text-center py-8 text-xs font-bold text-slate-400">
                        {getLangTextInline('Ma\'lumotlar yuklanmoqda...', 'Загрузка данных...', 'Veriler yükleniyor...', 'Loading analytics...')}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {countryStats.map((stat) => (
                          <div key={stat.name} className="p-3 bg-slate-50 dark:bg-slate-950/30 rounded-xl border border-slate-100/50 dark:border-slate-800/40 space-y-1.5">
                            <div className="flex justify-between text-xs font-bold">
                              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                                <span className="text-base leading-none">{getFlagEmoji(stat.code)}</span>
                                {stat.name}
                              </span>
                              <span className="text-slate-900 dark:text-white">{stat.percentage}% ({stat.count} online)</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-150 dark:bg-slate-850 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"
                                style={{ width: `${stat.percentage}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {statsTab === 'users' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400 px-1">
                    <span className="uppercase tracking-wider">
                      {getLangTextInline('Faol Sessiyalar ro\'yxati', 'Список активных сессий', 'Aktif Oturum Listesi', 'List of Active Sessions')}
                    </span>
                    <span>
                      {onlineCount} {getLangTextInline('foydalanuvchi faol', 'активных пользователей', 'aktif kullanıcı', 'users active')}
                    </span>
                  </div>

                  <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1 scrollbar-thin">
                    {onlineUsers.length === 0 ? (
                      <div className="text-center py-16 text-xs font-bold text-slate-400 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
                        {getLangTextInline('Hozircha faol foydalanuvchilar yo\'q', 'Нет активных сессий', 'Aktif oturum yok', 'No active sessions')}
                      </div>
                    ) : (
                      onlineUsers.map((user, idx) => (
                        <div key={user.sessionId || idx} className="p-4 bg-slate-50 dark:bg-slate-950/30 rounded-2xl border border-slate-100/50 dark:border-slate-800/40 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs hover:border-cyan-500/20 dark:hover:border-cyan-500/20 transition-all">
                          <div className="flex items-center gap-3 overflow-hidden">
                            <span className="text-2xl shrink-0 leading-none" title={user.countryCode}>
                              {getFlagEmoji(user.countryCode)}
                            </span>
                            <div className="overflow-hidden">
                              <div className="font-extrabold text-slate-800 dark:text-slate-100 text-sm">
                                {user.city}, {user.region}
                              </div>
                              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-2 mt-1">
                                <span>{user.browser || 'Browser'}</span>
                                <span className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
                                <span className="flex items-center gap-1">
                                  {user.device === 'mobile' ? (
                                    <Smartphone className="w-3 h-3 text-slate-400" />
                                  ) : (
                                    <Monitor className="w-3 h-3 text-slate-400" />
                                  )}
                                  {user.device || 'desktop'}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
                            {user.activeTab && (
                              <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/10 rounded-lg text-[10px] font-black uppercase tracking-wider">
                                {getLangTextInline('Ko\'rmoqda: ', 'Просматривает: ', 'Görüntülüyor: ', 'Viewing: ')}
                                {getTabDisplayName(user.activeTab)}
                              </span>
                            )}
                            <div className="text-right">
                              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold block">
                                {getTimeAgo(user.joinedAt)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {statsTab === 'devices' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Device breakdown */}
                    <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60">
                      <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Monitor className="w-4 h-4 text-purple-500" />
                        {getLangTextInline('Qurilmalar turi', 'Типы устройств', 'Cihaz Türleri', 'Device Types')}
                      </h4>

                      <div className="space-y-6">
                        <div className="flex justify-between items-center text-xs font-bold text-slate-700 dark:text-slate-300">
                          <span className="flex items-center gap-1.5">
                            <Monitor className="w-4 h-4" />
                            Desktop
                          </span>
                          <span>{deviceAndBrowserStats.desktopPercentage}% ({deviceAndBrowserStats.desktopCount} online)</span>
                        </div>

                        <div className="flex justify-between items-center text-xs font-bold text-slate-700 dark:text-slate-300">
                          <span className="flex items-center gap-1.5">
                            <Smartphone className="w-4 h-4" />
                            Mobile
                          </span>
                          <span>{deviceAndBrowserStats.mobilePercentage}% ({deviceAndBrowserStats.mobileCount} online)</span>
                        </div>

                        {/* Custom visual progress split bar */}
                        <div className="space-y-2">
                          <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
                            <div 
                              className="h-full bg-cyan-500 transition-all"
                              style={{ width: `${deviceAndBrowserStats.desktopPercentage}%` }}
                              title={`Desktop: ${deviceAndBrowserStats.desktopPercentage}%`}
                            />
                            <div 
                              className="h-full bg-emerald-500 transition-all"
                              style={{ width: `${deviceAndBrowserStats.mobilePercentage}%` }}
                              title={`Mobile: ${deviceAndBrowserStats.mobilePercentage}%`}
                            />
                          </div>
                          <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-500"></span>Desktop</span>
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Mobile</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Browsers list */}
                    <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60">
                      <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-amber-500" />
                        {getLangTextInline('Brauzerlar ulushi', 'Доля браузеров', 'Tarayıcı Payı', 'Browser Share')}
                      </h4>

                      {deviceAndBrowserStats.browsersList.length === 0 ? (
                        <div className="text-center py-8 text-xs font-bold text-slate-400">
                          {getLangTextInline('Yuklanmoqda...', 'Загрузка...', 'Yükleniyor...', 'Loading...')}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {deviceAndBrowserStats.browsersList.map((stat) => (
                            <div key={stat.name} className="space-y-1">
                              <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                                <span>{stat.name}</span>
                                <span>{stat.percentage}% ({stat.count})</span>
                              </div>
                              <div className="h-2 w-full bg-slate-100 dark:bg-slate-850 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                                  style={{ width: `${stat.percentage}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

            </div>
            
            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 dark:bg-slate-950/20 border-t border-slate-100 dark:border-slate-800/40 flex justify-end shrink-0">
              <button
                type="button"
                onClick={() => setIsStatsModalOpen(false)}
                className="px-6 py-2.5 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white rounded-xl text-xs font-black hover:bg-slate-300/80 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                {getLangTextInline('Yopish', 'Закрыть', 'Kapat', 'Close')}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ==========================================
          ONBOARDING TOUR FOR FIRST-TIME VISITORS
         ========================================== */}
      {showTourPrompt && activeTourStep === -1 && (
        <div className="fixed bottom-6 right-6 z-[9999] max-w-sm w-full mx-4 sm:mx-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/85 dark:border-slate-800/85 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 animate-slide-up">
          <div className="flex items-center gap-3">
            <span className="text-3xl">✨</span>
            <div>
              <h4 className="text-sm font-black text-slate-800 dark:text-white leading-none">
                {getLangTextInline("Kani-Lab bilan tanishuv", "Знакомство с Kani-Lab", "Kani-Lab ile Tanışın", "Get to know Kani-Lab")}
              </h4>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mt-1">
                {getLangTextInline("Tezkor yo'riqnoma", "Быстрый тур", "Hızlı Tur", "Quick Tour")}
              </p>
            </div>
          </div>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 leading-relaxed">
            {getLangTextInline(
              "Saytimizga ilk bor tashrif buyurganingiz munosabati bilan, asosiy bo'limlarimiz bilan tanishib chiqishni xohlaysizmi?",
              "Поскольку вы зашли на наш сайт впервые, не хотите ли вы ознакомиться с его основными разделами?",
              "Sitemizi ilk kez ziyaret ettiğiniz için, ana bölümlerimizi hızlıca tanımak ister misiniz?",
              "Since you are visiting our site for the first time, would you like to take a quick tour of its main sections?"
            )}
          </p>
          <div className="flex gap-2.5 mt-2">
            <button
              onClick={() => {
                setShowTourPrompt(false);
                localStorage.setItem("kanilab_tour_completed", "true");
              }}
              className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl text-xs font-bold transition-all text-center cursor-pointer"
            >
              {getLangTextInline("Yo'q, rahmat", "Нет, спасибо", "Hayır, teşekkürler", "No, thanks")}
            </button>
            <button
              onClick={() => {
                setShowTourPrompt(false);
                setActiveTourStep(0);
              }}
              className="flex-1 py-2 bg-gradient-to-r from-[#00B4D8] to-[#0096C7] hover:scale-105 active:scale-95 text-white rounded-xl text-xs font-bold transition-all text-center cursor-pointer shadow-lg shadow-cyan-500/20"
            >
              {getLangTextInline("Tanishish", "Начать тур", "Tura Başla", "Start Tour")}
            </button>
          </div>
        </div>
      )}

      {activeTourStep >= 0 && activeTourStep < tourSteps.length && (
        <>
          {/* ── Click-away layer (transparent, just catches clicks) ── */}
          <div
            className="fixed inset-0 z-[9997] cursor-pointer"
            onClick={() => {
              setActiveTourStep(-1);
              localStorage.setItem('kanilab_tour_completed', 'true');
            }}
          />

          {/* ── Spotlight: boxShadow creates dark surround, element visible through hole ── */}
          {tourRect && (
            <div
              style={{
                position: 'fixed',
                top:    tourRect.top    - 10,
                left:   tourRect.left   - 10,
                width:  tourRect.width  + 20,
                height: tourRect.height + 20,
                borderRadius: '14px',
                /* glow breathing animation (defined in index.css) */
                animation: 'tour-glow 2.5s ease-in-out infinite',
                pointerEvents: 'none',
                zIndex: 9998,
                transition: 'top 0.5s cubic-bezier(0.34,1.56,0.64,1), left 0.5s cubic-bezier(0.34,1.56,0.64,1), width 0.5s cubic-bezier(0.34,1.56,0.64,1), height 0.5s cubic-bezier(0.34,1.56,0.64,1)',
              }}
            >
              {/* Corner brackets — top-left */}
              <span style={{position:'absolute',top:-4,left:-4,width:14,height:14,borderTop:'3px solid #00B4D8',borderLeft:'3px solid #00B4D8',borderRadius:'3px 0 0 0',animation:'tour-corner 1.8s ease-in-out infinite'}} />
              {/* top-right */}
              <span style={{position:'absolute',top:-4,right:-4,width:14,height:14,borderTop:'3px solid #00B4D8',borderRight:'3px solid #00B4D8',borderRadius:'0 3px 0 0',animation:'tour-corner 1.8s ease-in-out infinite 0.45s'}} />
              {/* bottom-left */}
              <span style={{position:'absolute',bottom:-4,left:-4,width:14,height:14,borderBottom:'3px solid #00B4D8',borderLeft:'3px solid #00B4D8',borderRadius:'0 0 0 3px',animation:'tour-corner 1.8s ease-in-out infinite 0.9s'}} />
              {/* bottom-right */}
              <span style={{position:'absolute',bottom:-4,right:-4,width:14,height:14,borderBottom:'3px solid #00B4D8',borderRight:'3px solid #00B4D8',borderRadius:'0 0 3px 0',animation:'tour-corner 1.8s ease-in-out infinite 1.35s'}} />
            </div>
          )}

          {/* ── Premium Tour Card ── */}
          {(() => {
            const pad = 12;
            const viewW = window.innerWidth;
            const viewH = window.innerHeight;
            const isMobile = viewW < 640;
            /* Responsive card width */
            const cardW = Math.min(320, viewW - pad * 2);
            const cardH = isMobile ? 240 : 260;
            let top: number, left: number;
            if (tourRect) {
              /* On mobile: always show card at BOTTOM of screen so it doesn't overlap element */
              if (isMobile) {
                top = viewH - cardH - pad - 8; // near bottom
                left = pad;
              } else {
                /* position card below the spotlight; flip above if insufficient space */
                const spaceBelow = viewH - (tourRect.bottom + 18);
                top = spaceBelow >= cardH
                  ? tourRect.bottom + 18
                  : Math.max(pad, tourRect.top - cardH - 18);
                /* center card on element, clamp within viewport */
                left = Math.max(pad, Math.min(viewW - cardW - pad, tourRect.left + tourRect.width / 2 - cardW / 2));
              }
            } else {
              /* Fallback: bottom of viewport on mobile, center otherwise */
              if (isMobile) {
                top = viewH - cardH - pad - 8;
                left = pad;
              } else {
                top = viewH / 2 - cardH / 2;
                left = viewW / 2 - cardW / 2;
              }
            }
            const progress = ((activeTourStep + 1) / tourSteps.length) * 100;

            return (
              <div
                key={activeTourStep}
                style={{
                  position: 'fixed',
                  top,
                  left,
                  width: cardW,
                  zIndex: 9999,
                  animation: 'tour-card-in 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards',
                  transition: 'top 0.5s cubic-bezier(0.34,1.56,0.64,1), left 0.5s cubic-bezier(0.34,1.56,0.64,1)',
                }}
              >
                {/* Gradient header */}
                <div
                  style={{
                    background: 'linear-gradient(135deg,#00C6E0 0%,#0096C7 50%,#0077B6 100%)',
                    borderRadius: '24px 24px 0 0',
                    padding: isMobile ? '14px 16px 12px' : '18px 20px 16px',
                  }}
                >
                  {/* Top row */}
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom: isMobile ? 6 : 10}}>
                    <div style={{display:'flex',alignItems:'center',gap:8}}>
                      <span style={{fontSize: isMobile ? 16 : 18}}>{tourSteps[activeTourStep].icon ?? '✨'}</span>
                      <span style={{color:'rgba(255,255,255,0.75)',fontSize:9,fontWeight:900,textTransform:'uppercase',letterSpacing:'0.12em'}}>
                        {getLangTextInline('Tanishuv','Тур','Tanışma','Tour')}
                        &nbsp;·&nbsp;{activeTourStep + 1}/{tourSteps.length}
                      </span>
                    </div>
                    <button
                      onClick={() => { setActiveTourStep(-1); localStorage.setItem('kanilab_tour_completed','true'); }}
                      style={{color:'rgba(255,255,255,0.5)',background:'rgba(255,255,255,0.12)',border:'none',borderRadius:999,width: isMobile ? 28 : 22,height: isMobile ? 28 : 22,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',fontSize: isMobile ? 13 : 11,fontWeight:900,transition:'all .2s',flexShrink:0}}
                    >✕</button>
                  </div>
                  {/* Title */}
                  <h4 style={{color:'#fff',fontWeight:900,fontSize:15,lineHeight:1.25,margin:0}}>
                    {tourSteps[activeTourStep].title[lang] || tourSteps[activeTourStep].title['uz']}
                  </h4>
                  {/* Progress bar */}
                  <div style={{marginTop:12,height:3,background:'rgba(255,255,255,0.2)',borderRadius:99}}>
                    <div style={{height:'100%',borderRadius:99,background:'rgba(255,255,255,0.9)',width:`${progress}%`,transition:'width 0.4s ease'}} />
                  </div>
                </div>

                {/* Card body */}
                <div
                  style={{
                    background: 'var(--tour-bg, white)',
                    borderRadius: '0 0 24px 24px',
                    padding: isMobile ? '12px 16px 14px' : '16px 20px 18px',
                    boxShadow: '0 30px 60px -10px rgba(0,0,0,0.35)',
                  }}
                  className="dark:[--tour-bg:#0f172a]"
                >
                  {/* Description */}
                  <p style={{fontSize: isMobile ? 12 : 12.5, lineHeight:1.55,margin:0}} className="text-slate-500 dark:text-slate-400 font-semibold">
                    {tourSteps[activeTourStep].desc[lang] || tourSteps[activeTourStep].desc['uz']}
                  </p>

                  {/* Dot navigation — only on desktop (too many dots for mobile) */}
                  {!isMobile && (
                  <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:5,marginTop:14}}>
                    {tourSteps.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTourStep(idx)}
                        style={{
                          height:5,
                          width: idx === activeTourStep ? 22 : 5,
                          borderRadius:99,
                          border:'none',
                          cursor:'pointer',
                          background: idx === activeTourStep ? '#00B4D8' : '#cbd5e1',
                          transition:'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                          padding:0,
                        }}
                      />
                    ))}
                  </div>
                  )}

                  {/* Navigation row */}
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop: isMobile ? 10 : 14}}>
                    <button
                      onClick={() => { setActiveTourStep(-1); localStorage.setItem('kanilab_tour_completed','true'); }}
                      style={{fontSize:11,fontWeight:700,background:'none',border:'none',cursor:'pointer',transition:'color .2s',padding:0}}
                      className="text-slate-400 hover:text-red-400"
                    >
                      {getLangTextInline('Yopish','Закрыть','Kapat','Close')}
                    </button>

                    <div style={{display:'flex',gap:8}}>
                      {activeTourStep > 0 && (
                        <button
                          onClick={() => setActiveTourStep(prev => prev - 1)}
                          style={{
                            padding: isMobile ? '9px 16px' : '7px 14px',
                            borderRadius:12,fontSize: isMobile ? 12 : 11,fontWeight:800,
                            border:'none',cursor:'pointer',transition:'all .2s',
                          }}
                          className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                        >
                          ← {getLangTextInline('Ortga','Назад','Geri','Back')}
                        </button>
                      )}
                      <button
                        onClick={() => {
                          if (activeTourStep === tourSteps.length - 1) {
                            setActiveTourStep(-1);
                            localStorage.setItem('kanilab_tour_completed', 'true');
                          } else {
                            setActiveTourStep(prev => prev + 1);
                          }
                        }}
                        style={{
                          padding: isMobile ? '9px 20px' : '7px 18px',
                          borderRadius:12, fontSize: isMobile ? 12 : 11, fontWeight:800,
                          border:'none',cursor:'pointer',
                          background:'linear-gradient(135deg,#00B4D8,#0096C7)',
                          color:'#fff',
                          boxShadow:'0 4px 14px rgba(0,180,216,0.35)',
                          transition:'all .2s',
                        }}
                        onMouseEnter={e=>{e.currentTarget.style.transform='scale(1.05)';e.currentTarget.style.boxShadow='0 6px 20px rgba(0,180,216,0.5)'}}
                        onMouseLeave={e=>{e.currentTarget.style.transform='scale(1)';e.currentTarget.style.boxShadow='0 4px 14px rgba(0,180,216,0.35)'}}
                      >
                        {activeTourStep === tourSteps.length - 1
                          ? `✓ ${getLangTextInline('Tugadi','Готово','Tamam','Done')}`
                          : `${getLangTextInline('Keyingi','Далее','İleri','Next')} →`}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </>
      )}

    </div>
  );
}
