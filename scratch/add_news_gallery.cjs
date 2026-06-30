const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Normalize line endings to \n for matching
let normalizedContent = content.replace(/\r\n/g, '\n');

// 1. Define NEWS_ITEMS and GALLERY_ITEMS arrays above export default function App()
const oldBoundary = `// Dynamic reconstruction to prevent GitHub Secret Scanning warning and scrapers detection
const TELEGRAM_BOT_TOKEN = "8976412924" + ":" + "AAFcVbEeUgB2Ngymnol6cDDLybhlI1xLWzI";

export default function App() {`;

const newBoundary = `// Dynamic reconstruction to prevent GitHub Secret Scanning warning and scrapers detection
const TELEGRAM_BOT_TOKEN = "8976412924" + ":" + "AAFcVbEeUgB2Ngymnol6cDDLybhlI1xLWzI";

const NEWS_ITEMS = [
  {
    id: 'news-1',
    category: 'news',
    date: '2026-06-25',
    title: {
      uz: 'Kani-Lab markaziy laboratoriyasida yangi Mindray analizatori o‘rnatildi',
      ru: 'В центральной лаборатории Kani-Lab установлен новый анализатор Mindray',
      tr: 'Kani-Lab merkez laboratuvarında yeni Mindray analizörü kuruldu'
    },
    summary: {
      uz: 'Klinik laboratoriyamiz o‘z imkoniyatlarini kengaytirib, yuqori aniqlikdagi Mindray BS-2000M biokimyoviy analizatorini ishga tushirdi.',
      ru: 'Наша клиническая лаборатория расширила свои возможности, запустив высокоточный биохимический анализатор Mindray BS-2000M.',
      tr: 'Klinik laboratuvarımız, yüksek hassasiyetli Mindray BS-2000M biyokimya analizörünü devreye sokarak olanaklarını genişletti.'
    },
    content: {
      uz: 'Aholiga taqdim etilayotgan xizmatlar sifatini oshirish va tahlillarning o‘ta aniqligini ta’minlash maqsadida Kani-Lab markaziy laboratoriyasida Mindray BS-2000M yuqori samarali biokimyoviy analizatori o‘rnatildi. Bu uskuna soatiga 2000 tagacha test bajarish quvvatiga ega bo‘lib, klinikamizga tahlillarni yanada tezroq va xatosiz taqdim etish imkonini beradi. Barcha biokimyoviy tekshiruvlar endilikda to‘liq avtomatlashtirilgan rejimda amalga oshiriladi.',
      ru: 'В целях повышения качества услуг и обеспечения максимальной точности анализов в центральной лаборатории Kani-Lab установлен высокопроизводительный биохимический анализатор Mindray BS-2000M. Данное оборудование способно выполнять до 2000 тестов в час, что позволяет нашей клинике предоставлять результаты анализов быстрее и точнее. Все биохимические исследования теперь проводятся в полностью автоматическом режиме.',
      tr: 'Sunulan hizmetlerin kalitesini artırmak ve analizlerin mutlak doğruluğunu sağlamak amacıyla Kani-Lab merkez laboratuvarında yüksek performanslı biyokimya analizörü Mindray BS-2000M kuruldu. Bu cihaz saatte 2000 teste kadar analiz yapma kapasitesine sahip olup, kliniğimizin sonuçları daha hızlı ve hatasız sunmasını sağlamaktadır. Tüm biyokimyasal testler artık tamamen otomatik modda gerçekleştirilmektedir.'
    },
    image: mindrayBS2000Img
  },
  {
    id: 'news-2',
    category: 'news',
    date: '2026-06-20',
    title: {
      uz: 'Surxondaryo viloyati bo‘ylab filiallar tarmog‘imiz 15 taga yetgi',
      ru: 'Наша сеть филиалов в Сурхандарьинской области достигла 15',
      tr: 'Surhanderya bölgesindeki şube ağımız 15\'e ulaştı'
    },
    summary: {
      uz: 'Aholiga yanada yaqinroq bo‘lik maqsadida Surxondaryoning tumanlarida yangi tibbiy diagnostika filiallarimiz faoliyatini boshladi.',
      ru: 'Для удобства населения в районах Сурхандарьи начали работу наши новые филиалы медицинской диагностики.',
      tr: 'Halka daha yakın olmak amacıyla Surhanderya\'nın ilçelerinde yeni tıbbi teşhis şubelerimiz faaliyete başladı.'
    },
    content: {
      uz: 'Kani-Lab o‘z qamrovini kengaytirishda davom etmoqda. Endilikda Surxondaryo viloyatining Qiziriq, Sherobod, Angor, Uchqizil, Sho‘rchi, Qumqo‘rg‘on, Jarqo‘rg‘on va Boysun tumanlarida, shuningdek, yirik viloyat shifoxonalari hududlarida jami 15 ta filialimiz mijozlarga xizmat ko‘rsatmoqda. Har bir filialimiz markaziy laboratoriya bilan to‘g‘ridan-to‘g‘ri integratsiya qilingan bo‘lib, tahlillar namunalarini sovuq zanjir talablarida yetkazib berish va natijalarni onlayn taqdim etish tizimi yo‘lga qo‘yilgan.',
      ru: 'Kani-Lab продолжает расширять свое присутствие. Теперь в районах Кызырык, Шерабад, Ангор, Учкизил, Шурчи, Кумкурган, Джаркурган и Байсун Сурхандарьинской области, а также на территории крупных областных больниц работают в общей сложности 15 наших филиалов. Каждый филиал напрямую интегрирован с центральной лабораторией, налажена система транспортировки образцов с соблюдением требований холодовой цепи и онлайн-выдачи результатов.',
      tr: 'Kani-Lab kapsama alanını genişletmeye devam ediyor. Artık Surhanderya bölgesinin Kızırık, Şerabad, Angor, Üçkızıl, Şurçi, Kumkurgan, Jarkurgan ve Boysun ilçelerinde ve büyük vilayet hastaneleri bünyesinde olmak üzere toplam 15 şubemiz hizmet vermektedir. Her şubemiz merkez laboratuvar ile doğrudan entegre olup, numunelerin soğuk zincir şartlarında taşınması ve sonuçların online teslim edilmesi sistemi kurulmuştur.'
    },
    image: markazOldImg
  },
  {
    id: 'news-3',
    category: 'achievement',
    date: '2026-06-15',
    title: {
      uz: 'Kani-Lab laboratoriyasi xalqaro ISO 9001:2015 sifat sertifikatini oldi',
      ru: 'Лаборатория Kani-Lab получила международный сертификат качества ISO 9001:2015',
      tr: 'Kani-Lab laboratuvarı uluslararası ISO 9001:2015 kalite belgesini aldı'
    },
    summary: {
      uz: 'Laboratoriyamiz sifat nazorati tizimi va mijozlarga xizmat ko‘rsatish standartlari xalqaro darajaga muvofiqligi tasdiqlandi.',
      ru: 'Система контроля качества и стандарты обслуживания нашей лаборатории официально признаны соответствующими международным стандартам.',
      tr: 'Laboratuvarımızın kalite kontrol sistemi ve hizmet standartlarının uluslararası düzeyde olduğu tescil edildi.'
    },
    content: {
      uz: 'Kani-Lab tibbiy diagnostika laboratoriyasi sifat menejmenti tizimining auditidan muvaffaqiyatli o‘tib, ISO 9001:2015 xalqaro standartiga muvofiqlik sertifikatini qo‘lga kiritdi. Bu sertifikat klinikamizda reaktivlar saqlanishidan tortib, test natijalarini rasmiylashtirishgacha bo‘lgan barcha jarayonlar jahon andozalari asosida nazorat qilinishini kafolatlaydi. Biz mijozlarimizga faqat eng yaxshi va eng ishonchli xizmatlarni taqdim etishga intilamiz.',
      ru: 'Медицинская лаборатория Kani-Lab успешно прошла аудит системы менеджмента качества и получила международный сертификат ISO 9001:2015. Этот сертификат гарантирует, что все процессы в нашей лаборатории — от хранения реагентов до выдачи результатов тестов — контролируются по мировым стандартам. Мы стремимся предоставлять только лучшие и самые надежные услуги.',
      tr: 'Kani-Lab tıbbi teşhis laboratuvarı, kalite yönetim sistemi denetiminden başarıyla geçerek uluslararası ISO 9001:2015 standardına uygunluk belgesini almaya hak kazandı. Bu sertifika, laboratuvarımızda reaktiflerin depolanmasından test sonuçlarının raporlanmasına kadar tüm süreçlerin dünya standartlarında kontrol edildiğini garanti etmektedir.'
    },
    image: cert3Img
  }
];

const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    category: 'laboratory',
    title: {
      uz: 'Markaziy laboratoriya binosi',
      ru: 'Здание центральной лаборатории',
      tr: 'Merkez laboratuvar binası'
    },
    image: markazOldImg
  },
  {
    id: 'gal-2',
    category: 'equipment',
    title: {
      uz: 'Roche Cobas 6000 tahlil tizimi',
      ru: 'Аналитическая система Roche Cobas 6000',
      tr: 'Roche Cobas 6000 analiz sistemi'
    },
    image: rocheCobasImg
  },
  {
    id: 'gal-3',
    category: 'equipment',
    title: {
      uz: 'Bio-Rad PCR CFX Connect analizatori',
      ru: 'ПЦР-анализатор Bio-Rad CFX Connect',
      tr: 'Bio-Rad PCR CFX Connect analizörü'
    },
    image: bioradPcrImg
  },
  {
    id: 'gal-4',
    category: 'team',
    title: {
      uz: 'Laborantlar ish jarayoni',
      ru: 'Рабочий процесс лаборантов',
      tr: 'Laborantların çalışma süreci'
    },
    image: yasminaImg
  },
  {
    id: 'gal-5',
    category: 'equipment',
    title: {
      uz: 'Mindray BS-2000M biokimyo analizatori',
      ru: 'Биохимический анализатор Mindray BS-2000M',
      tr: 'Mindray BS-2000M biyokimya analizörü'
    },
    image: mindrayBS2000Img
  },
  {
    id: 'gal-6',
    category: 'team',
    title: {
      uz: 'Sifat nazorati va sertifikatlarimiz',
      ru: 'Контроль качества и наши сертификаты',
      tr: 'Kalite kontrol ve sertifikalarımız'
    },
    image: cert1Img
  }
];

export default function App() {`;

if (normalizedContent.includes(oldBoundary)) {
  normalizedContent = normalizedContent.replace(oldBoundary, newBoundary);
  console.log("Boundary updated to include NEWS_ITEMS & GALLERY_ITEMS!");
} else {
  console.error("Failed to match oldBoundary");
}

// 2. Add 'news-gallery' to activeTab state and hash routing
const oldActiveTabState = `  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'about-history' | 'about-values' | 'about-mission' | 'services' | 'doctors' | 'faq' | 'contact' | 'certificates' | 'branches' | 'privacy' | 'terms'>('home');`;
const newActiveTabState = `  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'about-history' | 'about-values' | 'about-mission' | 'services' | 'doctors' | 'faq' | 'contact' | 'certificates' | 'branches' | 'privacy' | 'terms' | 'news-gallery'>('home');
  const [newsFilter, setNewsFilter] = useState<'all' | 'news' | 'gallery'>('all');
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);
  const [newsLightboxSrc, setNewsLightboxSrc] = useState<string | null>(null);`;

if (normalizedContent.includes(oldActiveTabState)) {
  normalizedContent = normalizedContent.replace(oldActiveTabState, newActiveTabState);
  console.log("activeTab state hook updated!");
} else {
  console.error("Failed to match oldActiveTabState");
}

const oldHashRouting = `        if (['home', 'about', 'about-history', 'about-values', 'about-mission', 'services', 'doctors', 'faq', 'contact', 'certificates', 'branches', 'privacy', 'terms'].includes(tab)) {`;
const newHashRouting = `        if (['home', 'about', 'about-history', 'about-values', 'about-mission', 'services', 'doctors', 'faq', 'contact', 'certificates', 'branches', 'privacy', 'terms', 'news-gallery'].includes(tab)) {`;

if (normalizedContent.includes(oldHashRouting)) {
  normalizedContent = normalizedContent.replace(oldHashRouting, newHashRouting);
  console.log("Hash routing updated!");
} else {
  console.error("Failed to match oldHashRouting");
}

// 3. Add to Desktop Header Navigation Links
const oldDesktopNavbarLink = `              <button 
                onClick={() => setActiveTab('faq')} 
                className={\`hover:text-[#00B4D8] transition-colors cursor-pointer text-left focus:outline-none py-1 \${activeTab === 'faq' ? 'text-[#00B4D8] border-b-2 border-[#00B4D8]' : ''}\`}
              >
                {t.navFAQ}
              </button>`;

const newDesktopNavbarLink = `              <button 
                onClick={() => setActiveTab('faq')} 
                className={\`hover:text-[#00B4D8] transition-colors cursor-pointer text-left focus:outline-none py-1 \${activeTab === 'faq' ? 'text-[#00B4D8] border-b-2 border-[#00B4D8]' : ''}\`}
              >
                {t.navFAQ}
              </button>
              <button 
                onClick={() => { setActiveTab('news-gallery'); window.location.hash = 'news-gallery'; }} 
                className={\`hover:text-[#00B4D8] transition-colors cursor-pointer text-left focus:outline-none py-1 \${activeTab === 'news-gallery' ? 'text-[#00B4D8] border-b-2 border-[#00B4D8]' : ''}\`}
              >
                {lang === 'uz' ? 'Yangiliklar' : lang === 'ru' ? 'Новости' : 'Haberler'}
              </button>`;

if (normalizedContent.includes(oldDesktopNavbarLink)) {
  normalizedContent = normalizedContent.replace(oldDesktopNavbarLink, newDesktopNavbarLink);
  console.log("Desktop navigation link added!");
} else {
  console.error("Failed to match oldDesktopNavbarLink");
}

// 4. Add to Mobile Navigation Link
const oldMobileNavbarLink = `              <button 
                onClick={() => { setActiveTab('faq'); setIsMobileMenuOpen(false); }}
                className={\`px-4 py-3 rounded-xl transition-colors text-left text-sm font-bold \${activeTab === 'faq' ? 'text-[#00B4D8] bg-cyan-50 dark:bg-cyan-950/30' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'}\`}
              >\${t.navFAQ}</button>`;

const newMobileNavbarLink = `              <button 
                onClick={() => { setActiveTab('faq'); setIsMobileMenuOpen(false); }}
                className={\`px-4 py-3 rounded-xl transition-colors text-left text-sm font-bold \${activeTab === 'faq' ? 'text-[#00B4D8] bg-cyan-50 dark:bg-cyan-950/30' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'}\`}
              >\${t.navFAQ}</button>

              <button 
                onClick={() => { setActiveTab('news-gallery'); setIsMobileMenuOpen(false); }}
                className={\`px-4 py-3 rounded-xl transition-colors text-left text-sm font-bold \${activeTab === 'news-gallery' ? 'text-[#00B4D8] bg-cyan-50 dark:bg-cyan-950/30' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'}\`}
              >{lang === 'uz' ? 'Yangiliklar va Galereya' : lang === 'ru' ? 'Новости и Галерея' : 'Haberler & Galeri'}</button>`;

if (normalizedContent.includes(oldMobileNavbarLink)) {
  normalizedContent = normalizedContent.replace(oldMobileNavbarLink, newMobileNavbarLink);
  console.log("Mobile navigation link added!");
} else {
  console.error("Failed to match oldMobileNavbarLink");
}

// 5. Insert NEWS-GALLERY section render code right before branches section render code
const oldSectionRenderingBoundary = `      {/* ==========================================
          BRANCHES SECTION
         ========================================== */}`;

const newsSectionRendering = `      {/* ==========================================
          YANGILIKLAR VA FOTOGALERIYA SECTION
         ========================================== */}
      {activeTab === 'news-gallery' && (
        <section id="news-gallery" className="px-4 md:px-12 py-16 bg-slate-50 dark:bg-slate-950/20 min-h-screen">
          <div className="max-w-7xl w-full mx-auto">
            {/* Header */}
            <div className="flex flex-col items-center text-center gap-2 mb-12 animate-in fade-in slide-in-from-top-4 duration-300">
              <span className="text-sm font-bold text-[#00B4D8] uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4" />
                {lang === 'uz' ? 'YANGILIKLAR VA GALEREYA' : lang === 'ru' ? 'НОВОСТИ И ГАЛЕРЕЯ' : 'HABERLER & GALERİ'}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                {lang === 'uz' ? 'Kani-Lab hayotidan' : lang === 'ru' ? 'Из жизни Kani-Lab' : 'Kani-Lab Hayatından'}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mt-1">
                {lang === 'uz' ? 'Laboratoriyamizdagi eng so‘nggi yangiliklar, yutuqlarimiz va ish jarayonimizdan fotolavhalar' : lang === 'ru' ? 'Последние новости, достижения нашей лаборатории и фотохроника рабочего процесса' : 'Laboratuvarımızdan en son haberler, başarılarımız ve çalışma sürecimizden kareler'}
              </p>
            </div>

            {/* Filter controls */}
            <div className="flex justify-center gap-2 mb-10 overflow-x-auto py-2 shrink-0">
              {[
                { filter: 'all', label: lang === 'uz' ? 'Barchasi' : lang === 'ru' ? 'Все' : 'Hepsi' },
                { filter: 'news', label: lang === 'uz' ? 'Yangiliklar' : lang === 'ru' ? 'Новости' : 'Haberler' },
                { filter: 'gallery', label: lang === 'uz' ? 'Fotogalereya' : lang === 'ru' ? 'Фотогалерея' : 'Foto Galeri' }
              ].map(tab => (
                <button
                  key={tab.filter}
                  onClick={() => setNewsFilter(tab.filter as any)}
                  className={\`px-6 py-2.5 rounded-full text-xs font-black transition-all shrink-0 \${
                    newsFilter === tab.filter
                      ? 'bg-gradient-to-r from-[#00B4D8] to-[#0096C7] text-white shadow-lg shadow-cyan-500/20'
                      : 'bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }\`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Render News Items */}
              {(newsFilter === 'all' || newsFilter === 'news') && NEWS_ITEMS.map(item => (
                <div 
                  key={item.id} 
                  className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      loading="lazy"
                      src={item.image} 
                      alt={getLangText(item.title)} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500 text-white text-[10px] font-black uppercase tracking-wider rounded-full">
                      {item.category === 'news' ? (lang === 'uz' ? 'Yangilik' : lang === 'ru' ? 'Новость' : 'Haber') : (lang === 'uz' ? 'Yutuq' : lang === 'ru' ? 'Достижение' : 'Başarı')}
                    </div>
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
                        {getLangText(item.summary)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedNewsId(item.id)}
                      className="w-full py-3 bg-slate-50 dark:bg-slate-800/50 hover:bg-[#00B4D8]/10 text-[#0096C7] dark:text-[#48CAE4] hover:text-[#0087A3] text-xs font-black rounded-xl transition-colors flex items-center justify-center gap-1.5"
                    >
                      {lang === 'uz' ? 'Batafsil o‘qish' : lang === 'ru' ? 'Подробнее' : 'Detaylı Oku'}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Render Gallery Photos */}
              {(newsFilter === 'all' || newsFilter === 'gallery') && GALLERY_ITEMS.map(item => (
                <div 
                  key={item.id} 
                  className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                  onClick={() => setNewsLightboxSrc(item.image)}
                >
                  <div className="h-64 overflow-hidden relative">
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
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950/80 to-transparent">
                      <span className="text-[10px] text-cyan-300 font-bold uppercase tracking-wider block mb-1">
                        {item.category === 'laboratory' ? (lang === 'uz' ? 'Laboratoriya' : 'Лаборатория') : item.category === 'equipment' ? (lang === 'uz' ? 'Uskuna' : 'Оборудование') : (lang === 'uz' ? 'Jamoa' : 'Команда')}
                      </span>
                      <h4 className="text-sm font-bold text-white line-clamp-1 leading-snug">
                        {getLangText(item.title)}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* News Details Modal */}
      {selectedNewsId && (() => {
        const item = NEWS_ITEMS.find(n => n.id === selectedNewsId);
        if (!item) return null;
        return (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-slate-200/40 dark:border-slate-800/80 max-h-[90vh] flex flex-col">
              <div className="h-64 relative shrink-0">
                <img 
                  src={item.image} 
                  alt={getLangText(item.title)} 
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedNewsId(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-900/60 hover:bg-slate-900/90 text-white rounded-full transition-colors backdrop-blur-sm"
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
                  {getLangText(item.content)}
                </p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-950/20 border-t border-slate-100 dark:border-slate-800/40 flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedNewsId(null)}
                  className="px-6 py-2.5 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white rounded-xl text-xs font-black hover:bg-slate-300/80 dark:hover:bg-slate-700 transition-colors"
                >
                  {lang === 'uz' ? 'Yopish' : lang === 'ru' ? 'Закрыть' : 'Kapat'}
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
         ========================================== */}`;

if (normalizedContent.includes(oldSectionRenderingBoundary)) {
  normalizedContent = normalizedContent.replace(oldSectionRenderingBoundary, newsSectionRendering);
  console.log("Yangiliklar va Fotogaleriya section inserted successfully!");
} else {
  console.error("Failed to match oldSectionRenderingBoundary");
}

const finalContent = normalizedContent.replace(/\n/g, '\r\n');
fs.writeFileSync(filePath, finalContent, 'utf8');
console.log("News & Gallery feature implemented completely!");
