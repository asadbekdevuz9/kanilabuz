import re

filepath = "src/App.tsx"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Helper for pattern substitution using lambda
def sub_pat(pattern, replacement, text, label=""):
    res, count = pattern.subn(lambda m: replacement, text)
    print(f"Applied replacement [{label}] count: {count}")
    return res

# --- 1. Helper function definition ---
helper_str = """  const getLangText = (obj: any) => {
    if (!obj) return '';
    return obj[lang] || obj['uz'] || obj['ru'] || '';
  };"""

helper_replacement = """  const getLangText = (obj: any) => {
    if (!obj) return '';
    return obj[lang] || obj['uz'] || obj['ru'] || '';
  };

  const getLangTextInline = (uz: string, ru: string, tr: string, en: string) => {
    if (lang === 'uz') return uz;
    if (lang === 'ru') return ru;
    if (lang === 'en') return en;
    return tr;
  };"""

if helper_str in content and "getLangTextInline" not in content:
    content = content.replace(helper_str, helper_replacement)
    print("1. Helper getLangTextInline defined successfully.")
else:
    print("1. Helper getLangTextInline already defined or skip.")

# --- 2. Typed.js Hero strings ---
typed_pattern = re.compile(r'strings:\s*lang\s*===\s*\'uz\'\s*\?.*?\]\s*,\s*\n\s*typeSpeed:', re.DOTALL)
typed_replacement = """strings: lang === 'uz' ? [
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
        typeSpeed:"""

content = sub_pat(typed_pattern, typed_replacement, content, "Typed.js")

# --- 3. Form Validation errors ---
val_pattern = re.compile(r'if\s*\(!contactName\.trim\(\)\)\s*\{.*?setContactFormErrors\(errors\);', re.DOTALL)
val_replacement = """if (!contactName.trim()) {
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

    setContactFormErrors(errors);"""

content = sub_pat(val_pattern, val_replacement, content, "Form validations")

# --- 4. Check Receipt Modal ---
idx1 = content.find('{/* DIGITAL RECEIPT CHECK MODAL */}')
idx2 = content.find('REAL-TIME STATISTICS MODAL')
if idx1 != -1 and idx2 != -1:
    idx2_start = content.rfind('{/*', 0, idx2)
    receipt_replacement = """{/* DIGITAL RECEIPT CHECK MODAL */}
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
      
"""
    content = content[:idx1] + receipt_replacement + content[idx2_start:]
    print("4. Check receipt modal replaced successfully.")

# --- 5. Custom branch dropdown ---
idx_dd_start = content.find('Custom Searchable Categorized Dropdown for Branches')
if idx_dd_start != -1:
    idx_dd_end = content.find('{cat.category}', idx_dd_start) + len('{cat.category}')
    dd_replacement = """Custom Searchable Categorized Dropdown for Branches */}
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
                                    {getLangTextInline('Hech narsa topilmadi', 'Ничего не найдено', 'Sonuç bulunamadı', 'No results found')}
                                  </div>
                                );
                              }

                              return filtered.map((cat, catIdx) => (
                                <div key={catIdx} className="mb-2 last:mb-0">
                                  <div className="px-3.5 py-1 text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-50/50 dark:bg-slate-950/20 border-y border-slate-100/30 dark:border-slate-800/10">
                                    {cat.category}"""
    content = content[:idx_dd_start] + dd_replacement + content[idx_dd_end:]
    print("5. Custom branch dropdown replaced successfully.")

# --- 6. Footer columns & bottom legal links ---
# Column 2 header:
col2_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bosh Ofis & Ish Tartibi\'.*?\}', re.DOTALL)
content = sub_pat(col2_pattern, "{getLangTextInline('Bosh Ofis & Ish Tartibi', 'Главный офис и Часы работы', 'Merkez Ofis ve Çalışma Düzeni', 'Head Office & Working Hours')}", content, "Bosh Ofis header")

# Termiz Shahri:
tcity_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Termiz Shahri\'.*?\}', re.DOTALL)
content = sub_pat(tcity_pattern, "{getLangTextInline('Termiz Shahri', 'Город Термез', 'Tirmiz Şehri', 'Termez City')}", content, "Termiz Shahri")

# Ish Vaqti:
worktime_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ish Vaqti\'.*?\}', re.DOTALL)
content = sub_pat(worktime_pattern, "{getLangTextInline('Ish Vaqti', 'Часы приема', 'Çalışma Saatleri', 'Working Hours')}", content, "Ish Vaqti")

# Column 3 header (Tezkor Bog'lanish):
col3_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Tezkor Bog.*?\}', re.DOTALL)
content = sub_pat(col3_pattern, "{getLangTextInline('Tezkor Bogʻlanish', 'Быстрая Связь', 'Hızlı İletişim', 'Quick Contact')}", content, "Column 3 header")

# Bottom legal links:
privacy_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Maxfiylik Siyosati\'.*?\}', re.DOTALL)
content = sub_pat(privacy_pattern, "{getLangTextInline('Maxfiylik Siyosati', 'Конфиденциальность', 'Gizlilik Politikası', 'Privacy Policy')}", content, "Privacy Policy bottom link")

terms_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Foydalanish shartlari\'.*?\}', re.DOTALL)
content = sub_pat(terms_pattern, "{getLangTextInline('Foydalanish shartlari', 'Условия', 'Kullanım Koşulları', 'Terms of Use')}", content, "Terms of Use bottom link")

gallery_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Fotogalereya\'.*?\}', re.DOTALL)
content = sub_pat(gallery_pattern, "{getLangTextInline('Fotogalereya', 'Фотогалерея', 'Foto Galeri', 'Photo Gallery')}", content, "Photo Gallery bottom link")

certs_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Sertifikatlarimiz\'.*?\}', re.DOTALL)
content = sub_pat(certs_pattern, "{getLangTextInline('Sertifikatlarimiz', 'Сертификаты', 'Sertifikalarımız', 'Our Certificates')}", content, "Our Certificates bottom link")

# Live Stats launcher bottom text label
livestats_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Online Statistika\'.*?\}', re.DOTALL)
content = sub_pat(livestats_pattern, "{getLangTextInline('Online Statistika', 'Онлайн Статистика', 'Online Stats', 'Online Stats')}", content, "Live Stats bottom text label")

# Brand text description in Column 1
brand_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'KANI-LAB.*?tarmog.*?i\.\'.*?\}', re.DOTALL)
content = sub_pat(brand_pattern, "{getLangTextInline('KANI-LAB - eng ilg‘or robotlashtirilgan analizatorlar va yuqori darajadagi tibbiy ekspertlar jamoasi bilan Surxondaryodagi birinchi raqamli premium klinik laboratoriya tarmog‘i.', 'KANILAB – сеть клинических лабораторий премиум-класса с передовым оборудованием в Сурхандарье.', 'KANILAB, gelişmiş robotik analizörleri ve üst düzey uzman ekibiyle birinci sınıf klinik laboratuvardır.', 'KANILAB is the number one premium clinical laboratory network in Surxondaryo with advanced robotic analyzers and a high-level team of medical experts.')}", content, "Brand description in footer")

# --- 7. Hero Section CTAs ---
onlayn_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Onlayn navbat olish\'.*?\}', re.DOTALL)
content = sub_pat(onlayn_pattern, "{getLangTextInline('Onlayn navbat olish', 'Онлайн бронирование', 'Çevrimiçi Sıra Alın', 'Book Appointment Online')}", content, "Hero Onlayn navbat")

tahlillar_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Tahlillar va narxlar\'.*?\}', re.DOTALL)
content = sub_pat(tahlillar_pattern, "{getLangTextInline('Tahlillar va narxlar', 'Анализы и цены', 'Analizler ve Fiyatlar', 'Tests & Prices')}", content, "Hero Tahlillar va narxlar")

# --- 8. Header / Mobile Menu Elements ---
# Kani-Lab haqida header dropdown title
about_dd_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Kani-Lab haqida\'.*?\}', re.DOTALL)
content = sub_pat(about_dd_pattern, "{getLangTextInline('Kani-Lab haqida', 'О Kani-Lab', 'Kani-Lab Hakkında', 'About Kani-Lab')}", content, "Kani-Lab haqida")

# Yangiliklar links
news_links_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Yangiliklar\'.*?\}', re.DOTALL)
content = sub_pat(news_links_pattern, "{getLangTextInline('Yangiliklar', 'Новости', 'Haberler', 'News')}", content, "Yangiliklar link")

# MULOQOT TARMOQLARI mobile menu title
muloqot_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'MULOQOT TARMOQLARI\'.*?\}', re.DOTALL)
content = sub_pat(muloqot_pattern, "{getLangTextInline('MULOQOT TARMOQLARI', 'КОНТАКТНЫЕ НОМЕРА', 'İletişim', 'CONTACT NUMBERS')}", content, "MULOQOT TARMOQLARI")

# --- 9. About History Section ---
# Title
hist_title_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bizning tariximiz\'.*?\}', re.DOTALL)
content = sub_pat(hist_title_pattern, "{getLangTextInline('Bizning tariximiz', 'Наша история', 'Tarihimiz', 'Our History')}", content, "History title")

# Subtitle
hist_sub_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Yillar davomida ishonchli rivojlanish.*?\}', re.DOTALL)
content = sub_pat(hist_sub_pattern, "{getLangTextInline('Yillar davomida ishonchli rivojlanish yo‘li', 'Путь надежного развития на протяжении лет', 'Yıllar Boyunca Güvenli Gelişim Yolu', 'Path of Reliable Development Over the Years')}", content, "History subtitle")

# Timeline steps
timeline_pattern = re.compile(r'year:\s*\'2019\',.*?year:\s*\'2025-2026\',.*?desc:\s*lang\s*===\s*\'uz\'\s*\?.*?\n\s*\}', re.DOTALL)
timeline_replacement = """year: '2019',
                title: getLangTextInline('Kani-Lab asos solinishi', 'Основание Kani-Lab', 'Kani-Lab Kuruluşu', 'Founding of Kani-Lab'),
                desc: getLangTextInline("Surxondaryo viloyatining Termiz shahrida zamonaviy klinik tahlil xizmatlarini taqdim etish maqsadida Kani-Lab laboratoriyasiga asos solindi.", "Основание лаборатории Kani-Lab с целью предоставления современных услуг клинического анализа в Термезе.", "Tirmiz şehrinde modern klinik analiz hizmetleri sunmak amacıyla Kani-Lab kuruldu.", "The Kani-Lab laboratory was founded in Termez city of the Surxondaryo region to provide modern clinical analysis services.")
              },
              {
                year: '2021',
                title: getLangTextInline('Tehnologik yangilanish va robotlashtirish', 'Технологическое обновление', 'Teknolojik Yenilenme', 'Technological Renewal & Automation'),
                desc: getLangTextInline("Shveysariya va Yaponiyaning yetakchi diagnostika tizimlari (Roche, Sysmex) joriy etildi. Robotlashtirilgan namuna olish tizimlari sinovdan o'tkazildi.", "Внедрение передовых диагностических систем из Швейцарии и Японии (Roche, Sysmex). Тестирование роботов.", "İsviçre ve Japonya lider teşhis sistemleri (Roche, Sysmex) entegre edildi.", "Leading Swiss and Japanese diagnostic systems (Roche, Sysmex) were integrated. Robotic sampling systems were tested.")
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
              }"""

content = sub_pat(timeline_pattern, timeline_replacement, content, "Timeline steps array")

# --- 10. About Values Section ---
# Title
val_title_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bizning qadriyatlarimiz\'.*?\}', re.DOTALL)
content = sub_pat(val_title_pattern, "{getLangTextInline('Bizning qadriyatlarimiz', 'Наши ценности', 'Değerlerimiz', 'Our Values')}", content, "Values title")

# Subtitle
val_sub_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Sifat va ishonch poydevori\'.*?\}', re.DOTALL)
content = sub_pat(val_sub_pattern, "{getLangTextInline('Sifat va ishonch poydevori', 'Фундамент качества и доверия', 'Kalite ve Güvenin Temeli', 'Foundation of Quality & Trust')}", content, "Values subtitle")

# Values Cards Array
values_pattern = re.compile(r'icon:\s*\'🛡️\',.*?icon:\s*\'🌱\',.*?desc:\s*lang\s*===\s*\'uz\'\s*\?.*?\n\s*\}', re.DOTALL)
values_replacement = """icon: '🛡️',
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
              }"""

content = sub_pat(values_pattern, values_replacement, content, "Values cards array")

# --- 11. About Mission Section ---
# Title
mission_title_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bizning maqsad va vazifalarimiz\'.*?\}', re.DOTALL)
content = sub_pat(mission_title_pattern, "{getLangTextInline('Bizning maqsad va vazifalarimiz', 'Наши цели и задачи', 'Misyon & Vizyon', 'Mission & Vision')}", content, "Mission title")

# Subtitle
mission_sub_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Kelajakka yo.*?naltirilgan maqsadlar\'.*?\}', re.DOTALL)
content = sub_pat(mission_sub_pattern, "{getLangTextInline('Kelajakka yo‘naltirilgan maqsadlar', 'Цели, ориентированные на будущее', 'Geleceğe Yönelik Hedefler', 'Future-Oriented Goals')}", content, "Mission subtitle")

# Mission details
mission_detail_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bizning maqsadimiz \(Missiya\)\'.*?\}\s*<\/h3>.*?\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Kelajak rejamiz \(Vizyon\)\'.*?\}\s*<\/h3>.*?<\/div>\s*<\/div>', re.DOTALL)
mission_detail_replacement = """{getLangTextInline('Bizning maqsadimiz (Missiya)', 'Наша миссия', 'Misyonumuz', 'Our Mission')}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                  {getLangTextInline('Aholiga eng yuqori sifatli tahlil xizmatlarini taqdim etish va kasalliklarni dastlabki bosqichzada aniq tashxis qo‘yish orqali insonlar salomatligi va hayotini saqlashga xizmat qilish.', 'Предоставление качественных услуг анализа для ранней диагностики заболеваний ради сохранения здоровья.', 'Topluma en üst kalitede analiz hizmetleri sunarak hastalıkları erken teşhis etmek ve yaşam kalitesini korumak.', "To serve people's health and save lives by providing the highest quality analysis services and accurate early diagnosis.")}
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
            </div>"""

content = sub_pat(mission_detail_pattern, mission_detail_replacement, content, "Mission detail")

# Tasks block
tasks_header_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Asosiy vazifalarimiz:\'.*?\}', re.DOTALL)
content = sub_pat(tasks_header_pattern, "{getLangTextInline('Asosiy vazifalarimiz:', 'Наши ключевые задачи:', 'Temel Hedeflerimiz:', 'Key Objectives:')}", content, "Tasks header")

# Replace the tasks array using index range boundaries
idx_tasks = content.find("Sifatni doimiy nazorat qilish")
if idx_tasks != -1:
    idx_bracket = content.rfind('{[', 0, idx_tasks)
    idx_end = content.find('.map((task, idx)', idx_tasks)
    if idx_bracket != -1 and idx_end != -1:
        tasks_replacement = """{[
                { title: getLangTextInline('Sifatni doimiy nazorat qilish', 'Постоянный контроль качества', 'Sürekli Kalite Kontrolü', 'Continuous Quality Control'), text: getLangTextInline("ISO 15189 xalqaro standartlarini barcha laboratoriya jarayonlarida to‘liq tatbiq etish.", "Внедрение стандартов ISO 15189 во все процессы.", "ISO 15189 standartlarını tüm süreçlerde aktif uygulamak.", "Full implementation of ISO 15189 international standards in all laboratory processes.") },
                { title: getLangTextInline('Raqamlashtirishni kengaytirish', 'Расширение диджитализации', 'Dijitalleşmeyi Genişletmek', 'Expanding Digitalization'), text: getLangTextInline("Bemorlar tahlil natijalarini istalgan joydan turib bir necha soniyada olishlarini ta’minlash.", "Обеспечение получения результатов за секунды.", "Hastaların sonuçlarına saniyeler içinde ulaşmasını kolaylaştırmak.", "Ensuring patients can receive their analysis results from anywhere in just seconds.") },
                { title: getLangTextInline('Yangi diagnostika turlarini joriy etish', 'Внедрение новых видов диагностики', 'Yeni Teşhis Türleri Sunmak', 'Implementing New Diagnostics'), text: getLangTextInline("Ilg‘or genetika va onkologik diagnostika tahlillarini Surxondaryoning o‘zida yo‘lga qo‘yish.", "Организация передовой генетической диагностики непосредственно в Сурхандарье.", "Gelişmiş genetik ve onkolojik testleri doğrudan Surhanderya'da sunmak.", "Establishing advanced genetic and oncological diagnostics directly within the Surxondaryo region.") }
              ]"""
        content = content[:idx_bracket] + tasks_replacement + content[idx_end:]
        print("Tasks array replaced successfully.")

# --- 12. Privacy Policy Headers ---
h_priv_title = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'MAXFIYLIK SIYOSATI\'.*?\}', re.DOTALL)
content = sub_pat(h_priv_title, "{getLangTextInline('MAXFIYLIK SIYOSATI', 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ', 'GİZLİLİK POLİTİKASI', 'PRIVACY POLICY')}", content, "Privacy Title")

h_priv_sub = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Kani-Lab laboratoriyasi ma.*?lumotlar maxfiyligi siyosati\'.*?\}', re.DOTALL)
content = sub_pat(h_priv_sub, "{getLangTextInline('Kani-Lab laboratoriyasi ma’lumotlar maxfiyligi siyosati', 'Политика конфиденциальности данных лаборатории Kani-Lab', 'Kani-Lab Laboratuvarı Veri Gizliliği Politikası', 'Data Privacy Policy of Kani-Lab Laboratory')}", content, "Privacy Subtitle")

# --- 13. Privacy Policy Array ---
idx_priv = content.find("activeTab === 'privacy'")
if idx_priv != -1:
    idx_list = content.find('{[', idx_priv)
    idx_end = content.find('.map((section, idx) => (', idx_priv)
    if idx_list != -1 and idx_end != -1:
        priv_replacement = """{[
                {
                  title: getLangTextInline('Kirish va qamrov', 'Введение и сфера применения', 'Giriş ve Kapsam', 'Introduction & Scope'),
                  desc: getLangTextInline(
                    'Ushbu Maxfiylik siyosati Kani-Lab tomonidan mijozlarning shaxsiy va tibbiy ma\'lumotlarini qanday yig‘ish, qayta ishlash, saqlash va himoya qilish tartiblarini belgilaydi.',
                    'Настоящая Политика конфиденциальности определяет процедуры сбора, обработки, хранения и защиты личных и медицинских данных клиентов в Kani-Lab.',
                    'Bu Gizlilik Politikası, Kani-Lab tarafından müşterilerin kişisel ve tıbbi verilerinin toplanması, işlenmesi, saklanması ve korunması prosedürlerini belirler.',
                    'This Privacy Policy defines the procedures for collecting, processing, storing, and protecting personal and medical data of customers by Kani-Lab.'
                  )
                },
                {
                  title: getLangTextInline('Ma’lumotlarni yig‘ish', 'Сбор данных', 'Veri Toplama', 'Data Collection'),
                  desc: getLangTextInline(
                    'Biz faqat xizmak ko‘rsatish uchun zarur bo‘lgan ma\'lumotlarni, jumladan ism-sharif, aloqa raqamlari, elektron pochta manzili hamda tahlil natijalarini to‘g‘ri shakllantirish uchun zarur bo‘lgan tibbiy anamnez ma\'lumotlarini to‘playmiz.',
                    'Мы собираем только информацию, необходимую для оказания услуг, включая имя, контактные номера, адрес электронной почты и медицинский анамнез для правильного формирования результатов.',
                    'Ad-soyad, iletişim numaraları, e-posta adresi ve analiz sonuçlarının doğru şekilde oluşturulması için gerekli olan tıbbi geçmiş bilgileri dahil olmak üzere yalnızca hizmet sunumu için gerekli bilgileri topluyoruz.',
                    'We collect only the information necessary for providing services, including full name, contact numbers, email address, and medical history required for the correct generation of test results.'
                  )
                },
                {
                  title: getLangTextInline('Tibbiy sir va konfidensiallik', 'Медицинская тайна и конфиденциальность', 'Tıbbi Sır ve Gizlilik', 'Medical Secrecy & Confidentiality'),
                  desc: getLangTextInline(
                    'Bemorning barcha tahlil natijalari va ular bilan bog‘liq tibbiy ma\'lumotlar qat\'iy "Tibbiy sir" maqomiga ega. Ushbu ma\'lumotlar uchinchi shaxslarga, davlat organlariga yoki boshqa muassasalarga faqat qonunchilikda belgilangan hollar bundan mustasno, hech qanday holatda oshkor etilmaydi.',
                    'Все результаты анализов пациента и связанные с ними медицинские данные имеют статус строгой "Медицинской тайны". Эта информация ни при каких обстоятельствах не разглашается третьим лицам или государственным органам, за исключением случаев, предусмотренных законом.',
                    'Hastanın tüm analiz sonuçları ve bunlarla ilgili tıbbi verileri katı bir şekilde "Tıbbi Sır" statüsündedir. Bu bilgiler, yasal zorunluluklar hariç, hiçbir koşulda üçüncü şahıslara veya devlet kurumlarına açıklanmaz.',
                    'All patient test results and related medical data have the status of strict "Medical Secrecy". This information will not be disclosed to third parties, government agencies, or other institutions under any circumstances, except as required by law.'
                  )
                },
                {
                  title: getLangTextInline('Ma\'lumotlar xavfsizligi', 'Безопасность данных', 'Veri Güvenliği', 'Data Security'),
                  desc: getLangTextInline(
                    'Kani-Lab mijozlarning shaxsiy ma\'lumotlarini ruxsatsiz kirish, o‘zgartirish, yo‘q qilish yoki oshkor etishdan himoya qilish uchun ilg‘or shifrlash texnologiyalari va xavfsiz server infratuzilmasidan foydalanadi.',
                    'Kani-Lab использует передовые технологии шифрования и безопасную инфраструктуру серверов для защиты личных данных клиентов от несанкционированного доступа, изменения, уничтожения или разглашения.',
                    'Kani-Lab, müşterilerin kişisel verilerini yetkisiz erişim, değiştirme, imha veya ifşa edilmekten korumak için gelişmiş şifreleme teknolojileri ve güvenli sunucu altyapısı kullanır.',
                    'Kani-Lab uses advanced encryption technologies and secure server infrastructure to protect customers\' personal data from unauthorized access, modification, destruction, or disclosure.'
                  )
                },
                {
                  title: getLangTextInline('Mijoz huquqlari', 'Права клиентов', 'Müşteri Hakları', 'Customer Rights'),
                  desc: getLangTextInline(
                    'Har bir mijoz o‘zining shaxsiy ma\'lumotlaridan foydalanish shartlari bilan tanishish, ma\'lumotlarga o‘zgartirish kiritish yoki ularni o‘chirishni so‘rash huquqiga ega.',
                    'Каждый клиент имеет право ознакомиться с условиями использования своих личных данных, запросить внесение изменений или их удаление.',
                    'Her müşteri, kişisel verilerinin kullanım koşullarını inceleme, verilerde değişiklik yapılmasını veya silinmesini talep etme hakkına sahiptir.',
                    'Each customer has the right to review the terms of use of their personal data, request modifications, or ask for its deletion.'
                  )
                }
              ]"""
        content = content[:idx_list] + priv_replacement + content[idx_end:]
        print("13. Privacy policy list array replaced successfully.")

# --- 14. Terms of Use Headers ---
h_terms_title = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'FOYDALANISH SHARTLARI\'.*?\}', re.DOTALL)
content = sub_pat(h_terms_title, "{getLangTextInline('FOYDALANISH SHARTLARI', 'УСЛОВИЯ ИСПОЛЬЗОВАНИЯ', 'KULLANIM KOŞULLARI', 'TERMS OF USE')}", content, "Terms Title")

h_terms_sub = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Kani-Lab veb-platformasidan foydalanish bo.*?yicha shartlar va qoidalar\'.*?\}', re.DOTALL)
content = sub_pat(h_terms_sub, "{getLangTextInline('Kani-Lab veb-platformasidan foydalanish bo‘yicha shartlar va qoidalar', 'Правила и условия использования веб-платформы Kani-Lab', 'Kani-Lab Web Platformunun Kullanım Şartları ve Koşulları', 'Terms and Conditions for Using the Kani-Lab Web Platform')}", content, "Terms Subtitle")

# --- 15. Terms of Use Array ---
idx_terms = content.find("activeTab === 'terms'")
if idx_terms != -1:
    idx_list = content.find('{[', idx_terms)
    idx_end = content.find('.map((section, idx) => (', idx_terms)
    if idx_list != -1 and idx_end != -1:
        terms_replacement = """{[
                {
                  title: getLangTextInline('Kelishuv shartlari', 'Соглашение об условиях', 'Anlaşma Şartları', 'Terms of Agreement'),
                  desc: getLangTextInline(
                    'Ushbu veb-saytga kirish va undan foydalanish orqali siz quyidagi shartlar va qoidalarga so‘zsiz rozi bo‘lasiz. Agar siz ushbu shartlarga rozi bo‘lmasangiz, saytdan foydalanishni to‘xtatishingiz kerak.',
                    'Получая доступ к этому веб-сайту и используя его, вы безоговорочно соглашаетесь со следующими условиями. Если вы не согласны с ними, вам следует прекратить использование сайта.',
                    'Bu web sitesine erişerek ve kullanarak, aşağıdaki şart ve koşulları kayıtsız şartsız kabul etmiş olursunuz. Bu şartları kabul etmiyorsanız, siteyi kullanmayı bırakmalısınız.',
                    'By accessing and using this website, you unconditionally agree to the following terms and conditions. If you do not agree to these terms, you must stop using the website.'
                  )
                },
                {
                  title: getLangTextInline('Axborot xarakteri', 'Информационный характер', 'Bilgilendirme Amaçlı İçerik', 'Informational Nature'),
                  desc: getLangTextInline(
                    'Veb-saytda taqdim etilgan tibbiy ma\'lumotlar, maqolalar va tahlil tushuntirishlari faqat ma\'lumot berish maqsadida joylashtirilgan. Ular professional tibbiy tashxis qo‘yish, davolash rejalarini belgilash yoki shifokor maslahatining o‘rnini bosmaydi. Har qanday tibbiy qaror qabul qilishdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi.',
                    'Медицинская информация, статьи и пояснения к анализам, представленные на сайте, носят исключительно ознакомительный характер. Они не заменяют профессиональную медицинскую диагностику, лечение или консультацию врача.',
                    'Sitede sunulan tıbbi bilgiler, makaleler ve analiz açıklamaları yalnızca bilgilendirme amaçlıdır. Profesyonel tıbbi teşhis, tedavi veya doktor tavsiyesinin yerini alamaz. Herhangi bir tıbbi karar vermeden önce bir uzmana danışmanız önerilir.',
                    'The medical information, articles, and analysis explanations provided on the website are for informational purposes only. They do not replace professional medical diagnosis, treatment plans, or doctor consultations. It is recommended to consult a specialist before making any medical decisions.'
                  )
                },
                {
                  title: getLangTextInline('Xizmatlar va buyurtmalar', 'Услуги и заказы', 'Hizmetler ve Siparişler', 'Services & Orders'),
                  desc: getLangTextInline(
                    'Laboratoriya xizmatlariga onlayn buyurtma berish jarayonida taqdim etilgan ma\'lumotlarning to‘g‘riligi uchun foydalanuvchi shaxsan javobgardir. Noto‘gri ma\'lumotlar kiritilishi natijasida yuzaga kelishi mumkin bo‘lgan xatolar uchun Kani-Lab mas\'uliyatni o‘z zimmasiga olmaydi.',
                    'Пользователь несет личную ответственность за достоверность информации, предоставленной в процессе онлайн-заказа лабораторных услуг. Kani-Lab не несет ответственности за ошибки, возникшие из-за неверных данных.',
                    'Laboratuvar hizmetlerine çevrimiçi sipariş verilmesi sürecinde sağlanan bilgilerin doğruluğundan kullanıcı şahsen sorumludur. Yanlış bilgi girişi sonucu doğabilecek hatalardan Kani-Lab sorumlu tutulamaz.',
                    'The user is personally responsible for the accuracy of the information provided during the online ordering of laboratory services. Kani-Lab does not assume responsibility for errors resulting from incorrect data entry.'
                  )
                },
                {
                  title: getLangTextInline('Intellektual mulk', 'Интеллектуальная собственность', 'Fikri Mülkiyet', 'Intellectual Property'),
                  desc: getLangTextInline(
                    'Ushbu saytdagi barcha kontent, jumladan, brend logotiplari, dizayn elementlari, grafik tasvirlar, dasturiy kodlar va matnlar Kani-Lab kompaniyasining mulki hisoblanadi. Ulardan mualliflik ruxsatisiz nusxa ko‘chirish, tarqatish yoki tijorat maqsadlarida foydalanish qat\'iyan taqiqlanadi.',
                    'Весь контент на этом сайте, включая логотипы брендов, элементы дизайна, графику, программный код и тексты, является собственностью Kani-Lab. Копирование, распространение или использование в коммерческих целях строго запрещено.',
                    'Sitedeki tüm içerikler Kani-Lab\'ın mülkiyetindedir. Telif izni olmaksızın kopyalanması, dağıtılması veya ticari amaçlarla kullanılması kesinlikle yasaktır.',
                    'All content on this site, including brand logos, design elements, graphics, source code, and text, is the property of Kani-Lab. Copying, distributing, or using them for commercial purposes without written copyright permission is strictly prohibited.'
                  )
                },
                {
                  title: getLangTextInline('Javobgarlikni cheklash', 'Ограничение ответственности', 'Sorumluluk Sınırlaması', 'Limitation of Liability'),
                  desc: getLangTextInline(
                    'Kani-Lab veb-saytning uzluksiz ishlashini ta\'minlashga harakat qiladi, biroq texnik nosozliklar, uchinchi tomon xizmatlari yoki internet tarmog‘idagi uzilishlar tufayli yuzaga kelgan vaqtinchalek uzilishlar uchun javobgar emas.',
                    'Kani-Lab старается обеспечить бесперебойную работу сайта, но не несет ответственности за временные сбои из-за технических проблем, сторонних сервисов или сбоев сети Интернет.',
                    'Kani-Lab, web sitesinin kesintisiz çalışmasını sağlamaya çalışır, ancak teknik arızalar veya internet kesintilerinden kaynaklanan geçici aksaklıklardan sorumlu değildir.',
                    'Kani-Lab endeavors to ensure the continuous operation of the website, but is not liable for temporary interruptions caused by technical malfunctions, third-party services, or Internet connectivity issues.'
                  )
                }
              ]"""
        content = content[:idx_list] + terms_replacement + content[idx_end:]
        print("15. Terms of use list array replaced successfully.")

# --- 16. Booking Confirmation Preview ---
# Center name
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'PREMIUM DIAGNOSTIKA MARKAZI\'.*?\}', re.DOTALL),
    "{getLangTextInline('PREMIUM DIAGNOSTIKA MARKAZI', 'ЦЕНТР ПРЕМИУМ ДИАГНОСТИКИ', 'PREMIUM TANI MERKEZİ', 'PREMIUM DIAGNOSTICS CENTER')}",
    content, "PREMIUM DIAGNOSTIKA"
)

# Patient
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bemor\'.*?\}', re.DOTALL),
    "{getLangTextInline('Bemor', 'Пациент', 'Hasta', 'Patient')}",
    content, "Bemor"
)

# Receipt/Ticket
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Chek\'.*?\}', re.DOTALL),
    "{getLangTextInline('Chek', 'Чек', 'Bilet/Fatura', 'Receipt/Ticket')}",
    content, "Chek"
)

# Total text (JAMI SUMMA)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'JAMI SUMMA\'.*?\}', re.DOTALL),
    "{getLangTextInline('JAMI SUMMA', 'ИТОГОВАЯ СУММА', 'TOPLAM TUTAR', 'TOTAL AMOUNT')}",
    content, "JAMI SUMMA"
)

# Services list title
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Xizmatlar\'.*?\}\s*\?\s*"\s*\{\s*cart\.length\s*\}\s*\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'ta\'.*?\}', re.DOTALL),
    "{getLangTextInline('Xizmatlar', 'Услуги', 'Hizmetler', 'Services')} - {cart.length}{getLangTextInline('ta', ' шт.', ' adet', ' items')}",
    content, "Services details count title"
)

# Date/Time/Branch Labels
content = sub_pat(
    re.compile(r'\{\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*\'Sana\'.*?\}', re.DOTALL),
    "{ label: getLangTextInline('Sana', 'Дата', 'Tarih', 'Date'), value: selectedDate }",
    content, "Sana Label"
)
content = sub_pat(
    re.compile(r'\{\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*\'Vaqt\'.*?\}', re.DOTALL),
    "{ label: getLangTextInline('Vaqt', 'Время', 'Saat', 'Time'), value: selectedTime }",
    content, "Vaqt Label"
)
content = sub_pat(
    re.compile(r'\{\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*\'Filial\'.*?\}', re.DOTALL),
    "{ label: getLangTextInline('Filial', 'Филиал', 'Şube', 'Branch'), value: selectedBranch === 'branch1' ? getLangTextInline('Markaziy (Alisher Navoiy)', 'Центральный (Алишер Навои)', 'Merkez (Alisher Navoiy)', 'Central (Alisher Navoiy)') : selectedBranch === 'branch2' ? getLangTextInline('Sharqiy (Olmazor)', 'Восточный (Алмазар)', 'Doğu (Olmazor)', 'Eastern (Olmazor)') : selectedBranch === 'branch3' ? getLangTextInline('Janubiy (Termiz)', 'Южный (Термез)', 'Güney (Termez)', 'Southern (Termez)') : selectedBranch }",
    content, "Filial Label"
)

# Sog'lig'ingiz
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*["\']Sog.*?lig.*?ingiz.*?maqsadimiz["\'].*?\}', re.DOTALL),
    "{getLangTextInline(\"Sog'lig'ingiz – bizning maqsadimiz\", 'Ваше здоровье – наша цель', 'Sağlığınız – hedefimiz', 'Your health is our goal')}",
    content, "Sog'lig'ingiz tagline"
)

# Help desk / support
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Yordam va qo.*?llab-quvvatlash\'.*?\}', re.DOTALL),
    "{getLangTextInline('Yordam va qo‘llab-quvvatlash', 'Помощь и поддержка', 'Yardım ve Destek', 'Help & Support')}",
    content, "Help & Support"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Muammo yuzaga kelsa, biz bilan bog.*?laning\'.*?\}', re.DOTALL),
    "{getLangTextInline('Muammo yuzaga kelsa, biz bilan bog‘laning', 'Если возникнут проблемы, свяжитесь с нами', 'Bir sorun oluşursa bizimle iletişime geçin', 'If a problem arises, please contact us')}",
    content, "Muammo contact text"
)

# PDF Button
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'PDF saqlab olish\'.*?\}', re.DOTALL),
    "{getLangTextInline('PDF saqlab olish', 'Сохранить PDF', 'PDF Olarak İndir', 'Save PDF')}",
    content, "PDF button"
)

# PDF generation text
content = sub_pat(
    re.compile(r'pdf\.text\(\s*\'KANILAB.*?CHIPTA\'\s*,\s*4\s*,\s*7\s*\);', re.DOTALL),
    "pdf.text('KANILAB - ' + getLangTextInline('CHIPTA', 'ЧЕК', 'BİLET', 'RECEIPT'), 4, 7);",
    content, "pdf print title"
)
content = sub_pat(
    re.compile(r'pdf\.text\(\s*`Bemor:\s*\${patientName}`\s*,\s*4\s*,\s*13\s*\);', re.DOTALL),
    "pdf.text(getLangTextInline('Bemor', 'Пациент', 'Hasta', 'Patient') + `: ${patientName}`, 4, 13);",
    content, "pdf patient"
)
content = sub_pat(
    re.compile(r'pdf\.text\(\s*`Raqam:\s*\${generatedTicketID}`\s*,\s*4\s*,\s*18\s*\);', re.DOTALL),
    "pdf.text(getLangTextInline('Raqam', 'Номер', 'Numara', 'Number') + `: ${generatedTicketID}`, 4, 18);",
    content, "pdf ticket no"
)

# Booking launch menu sticky button
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Hozir band qilish\'.*?\}', re.DOTALL),
    "{getLangTextInline('Hozir band qilish', 'Забронировать сейчас', 'Şimdi Rezervasyon Yap', 'Book Now')}",
    content, "Hozir band qilish button"
)

# --- 17. Analyzer Popup ---
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*selectedAnalyzer\.category\.uz\s*:\s*selectedAnalyzer\.category\.ru\s*\}', re.DOTALL),
    "{getLangText(selectedAnalyzer.category)}",
    content, "analyzer category"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*selectedAnalyzer\.shortDesc\.uz\s*:\s*selectedAnalyzer\.shortDesc\.ru\s*\}', re.DOTALL),
    "{getLangText(selectedAnalyzer.shortDesc)}",
    content, "analyzer shortDesc"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qisqacha tavsif\'.*?\}', re.DOTALL),
    "{getLangTextInline('Qisqacha tavsif', 'Краткое описание', 'Kısa Açıklama', 'Brief Description')}",
    content, "Qisqacha tavsif"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ilmiy va texnik ma.*?lutlar\'.*?\}', re.DOTALL),
    "{getLangTextInline('Ilmiy va texnik ma\\\'lumotlar', 'Научно-технические данные', 'Bilimsel ve Teknik Veriler', 'Scientific & Technical Data')}",
    content, "Ilmiy va texnik"
)

# --- 18. Real-time Live Analytics dashboard ---
# Title subtitle
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'KaniLab Live Platforma Statistikasi\'.*?\}', re.DOTALL),
    "{getLangTextInline('KaniLab Live Platforma Statistikasi', 'Статистика живой платформы KaniLab', 'KaniLab Canlı Platform Analitiği', 'KaniLab Live Platform Analytics')}",
    content, "dashboard title"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Real vaqt rejimida tashrif buyuruvchilar faolligi va geolokatsiyasi\'.*?\}', re.DOTALL),
    "{getLangTextInline('Real vaqt rejimida tashrif buyuruvchilar faolligi va geolokatsiyasi', 'Активность посетителей и геолокация в реальном времени', 'Gerçek zamanlı ziyaretçi etkinliği ve coğrafi konum analitiği', 'Real-time visitor activity and geolocation analytics')}",
    content, "dashboard subtitle"
)

# Tabs labels
content = sub_pat(
    re.compile(r'\{\s*id\s*:\s*\'overview\'\s*,\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*\'Umumiy ko.*?rinish\'.*?\}', re.DOTALL),
    "{ id: 'overview', label: getLangTextInline('Umumiy ko\\'rinish', 'Обзор', 'Genel Bakış', 'Overview') }",
    content, "overview tab"
)
content = sub_pat(
    re.compile(r'\{\s*id\s*:\s*\'users\'\s*,\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*`Jonli Oqim.*?`.*?\}', re.DOTALL),
    "{ id: 'users', label: getLangTextInline('Jonli Oqim', 'Живой поток', 'Canlı Akış', 'Live Feed') + ` (${onlineCount})` }",
    content, "users tab"
)
content = sub_pat(
    re.compile(r'\{\s*id\s*:\s*\'devices\'\s*,\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qurilmalar\'.*?\}', re.DOTALL),
    "{ id: 'devices', label: getLangTextInline('Qurilmalar', 'Устройства', 'Cihazlar', 'Devices') }",
    content, "devices tab"
)

# Metric card Active Now
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Hozir Online\'.*?\}', re.DOTALL),
    "{getLangTextInline('Hozir Online', 'Активно сейчас', 'Şimdi Aktif', 'Active Now')}",
    content, "Hozir Online"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'faol sessiyalar\'.*?\}', re.DOTALL),
    "{getLangTextInline('faol sessiyalar', 'активных сессий', 'aktif oturum', 'active sessions')}",
    content, "faol sessiyalar"
)

# Metric card Total Visits
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Jami Tashriflar\'.*?\}', re.DOTALL),
    "{getLangTextInline('Jami Tashriflar', 'Всего посещений', 'Toplam Ziyaret', 'Total Visits')}",
    content, "Jami Tashriflar"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'kirishlar soni\'.*?\}', re.DOTALL),
    "{getLangTextInline('kirishlar soni', 'всего просмотров', 'toplam sayfa yükleme', 'total page loads')}",
    content, "kirishlar soni"
)

# Metric card Active Countries
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Faol Davlatlar\'.*?\}', re.DOTALL),
    "{getLangTextInline('Faol Davlatlar', 'Активные страны', 'Aktif Ülkeler', 'Active Countries')}",
    content, "Faol Davlatlar"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'geografik hududlar\'.*?\}', re.DOTALL),
    "{getLangTextInline('geografik hududlar', 'гео-регионы', 'coğrafi bölgeler', 'geo-regions')}",
    content, "geografik hududlar"
)

# Distribution card user breakdown
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Foydalanuvchilarning davlatlar bo.*?yicha taqsimoti\'.*?\}', re.DOTALL),
    "{getLangTextInline('Foydalanuvchilarning davlatlar bo\\'yicha taqsimoti', 'Распределение пользователей по странам', 'Ülkelere Göre Kullanıcı Dağılımı', 'User Distribution by Country')}",
    content, "User Distribution by Country"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ma.*?lumotlar yuklanmoqda\.\.\.\'.*?\}', re.DOTALL),
    "{getLangTextInline('Ma\\'lumotlar yuklanmoqda...', 'Загрузка данных...', 'Veriler yükleniyor...', 'Loading analytics...')}",
    content, "Loading analytics"
)

# Active sessions tab content
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Faol Sessiyalar ro.*?yxati\'.*?\}', re.DOTALL),
    "{getLangTextInline('Faol Sessiyalar ro\\'yxati', 'Список активных сессий', 'Aktif Oturum Listesi', 'List of Active Sessions')}",
    content, "Active Sessions Title"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'foydalanuvchi faol\'.*?\}', re.DOTALL),
    "{getLangTextInline('foydalanuvchi faol', 'активных пользователей', 'aktif kullanıcı', 'users active')}",
    content, "users active count"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Hozircha faol foydalanuvchilar yo.*?q\'.*?\}', re.DOTALL),
    "{getLangTextInline('Hozircha faol foydalanuvchilar yo\\'q', 'Нет активных сессий', 'Aktif oturum yok', 'No active sessions')}",
    content, "No active sessions"
)

# Viewing tab
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ko.*?rmoqda:\s*\'.*?\}', re.DOTALL),
    "{getLangTextInline('Ko\\'rmoqda: ', 'Просматривает: ', 'Görüntülüyor: ', 'Viewing: ')}",
    content, "Viewing label"
)

# Device Types
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qurilmalar turi\'.*?\}', re.DOTALL),
    "{getLangTextInline('Qurilmalar turi', 'Типы устройств', 'Cihaz Türleri', 'Device Types')}",
    content, "Device Types"
)

# Browser Share
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Brauzerlar ulushi\'.*?\}', re.DOTALL),
    "{getLangTextInline('Brauzerlar ulushi', 'Доля браузеров', 'Tarayıcı Payı', 'Browser Share')}",
    content, "Browser Share"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Yuklanmoqda\.\.\.\'.*?\}', re.DOTALL),
    "{getLangTextInline('Yuklanmoqda...', 'Загрузка...', 'Yükleniyor...', 'Loading...')}",
    content, "Loading browsers"
)

# Modal close button
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Yopish\'.*?\}', re.DOTALL),
    "{getLangTextInline('Yopish', 'Закрыть', 'Kapat', 'Close')}",
    content, "Yopish stats button"
)

# --- 19. Review & Feedback Form ---
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Fikr qoldirish\'.*?\}', re.DOTALL),
    "{getLangTextInline('Fikr qoldirish', 'Оставить отзыв', 'Yorum Bırak', 'Leave a Review')}",
    content, "Fikr qoldirish"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Xizmatlarimiz haqida o\\\'z fikringizni yozib qoldiring\.\'.*?\}', re.DOTALL),
    "{getLangTextInline('Xizmatlarimiz haqida o\\\'z fikringizni yozib qoldiring.', 'Оставьте свой отзыв о наших услугах.', 'Hizmetlerimiz hakkındaki görüşlerinizi yazın.', 'Share your thoughts about our services.')}",
    content, "Fikr description"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ism va familiya\'.*?\}', re.DOTALL),
    "{getLangTextInline('Ism va familiya', 'Имя и фамилия', 'İsim ve Soyisim', 'First and Last Name')}",
    content, "Ism va familiya"
)
content = sub_pat(
    re.compile(r'placeholder=\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ismingizni kiriting\'.*?\}', re.DOTALL),
    "placeholder={getLangTextInline('Ismingizni kiriting', 'Введите ваше имя', 'Adınızı girin', 'Enter your name')}",
    content, "Ismingizni kiriting placeholder"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Mijoz turi\'.*?\}', re.DOTALL),
    "{getLangTextInline('Mijoz turi', 'Тип клиента', 'Müşteri Türü', 'Client Type')}",
    content, "Mijoz turi"
)
content = sub_pat(
    re.compile(r'<\s*option\s*value\s*=\s*""\s*>\s*\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Tanlang\.\.\.\'.*?\}\s*<\s*/\s*option\s*>', re.DOTALL),
    "<option value=\"\">{getLangTextInline('Tanlang...', 'Выберите...', 'Seçiniz...', 'Select...')}</option>",
    content, "Tanlang option"
)
content = sub_pat(
    re.compile(r'<\s*option\s*value\s*=\s*\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bemor\'.*?\}\s*>\s*\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bemor\'.*?\}\s*<\s*/\s*option\s*>', re.DOTALL),
    "<option value={getLangTextInline('Bemor', 'Пациент', 'Hasta', 'Patient')}>{getLangTextInline('Bemor', 'Пациент', 'Hasta', 'Patient')}</option>",
    content, "Bemor option"
)
content = sub_pat(
    re.compile(r'<\s*option\s*value\s*=\s*\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Shifokor\'.*?\}\s*>\s*\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Shifokor\'.*?\}\s*<\s*/\s*option\s*>', re.DOTALL),
    "<option value={getLangTextInline('Shifokor', 'Врач', 'Doktor', 'Doctor')}>{getLangTextInline('Shifokor', 'Врач', 'Doktor', 'Doctor')}</option>",
    content, "Shifokor option"
)
content = sub_pat(
    re.compile(r'<\s*option\s*value\s*=\s*\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Hamkor\'.*?\}\s*>\s*\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Hamkor\'.*?\}\s*<\s*/\s*option\s*>', re.DOTALL),
    "<option value={getLangTextInline('Hamkor', 'Партнер', 'İş Ortağı', 'Partner')}>{getLangTextInline('Hamkor', 'Партнер', 'İş Ortağı', 'Partner')}</option>",
    content, "Hamkor option"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Fikringiz\'.*?\}', re.DOTALL),
    "{getLangTextInline('Fikringiz', 'Ваш отзыв', 'Görüşünüz', 'Your Review')}",
    content, "Fikringiz"
)
content = sub_pat(
    re.compile(r'placeholder=\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Taassurotlaringiz bilan o\\\'rtoqlashing\.\.\.\'.*?\}', re.DOTALL),
    "placeholder={getLangTextInline('Taassurotlaringiz bilan o\\\'rtoqlashing...', 'Поделитесь своими впечатлениями...', 'İzlenimlerinizi paylaşın...', 'Share your impressions...')}",
    content, "Taassurotlar placeholder"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Yuborish\'.*?\}', re.DOTALL),
    "{getLangTextInline('Yuborish', 'Отправить', 'Gönder', 'Submit')}",
    content, "Yuborish review button"
)

# --- 20. News (Yangiliklar) Section ---
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'YANGILIKLAR\'.*?\}', re.DOTALL),
    "{getLangTextInline('YANGILIKLAR', 'НОВОСТИ', 'HABERLER', 'NEWS')}",
    content, "YANGILIKLAR title"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Kani-Lab yangiliklari va videolari\'.*?\}', re.DOTALL),
    "{getLangTextInline('Kani-Lab yangiliklari va videolari', 'Новости и видео Kani-Lab', 'Kani-Lab Haberleri ve Videoları', 'Kani-Lab News & Videos')}",
    content, "Kani-Lab yangiliklari sub"
)
content = sub_pat(
    re.compile(r'\{\s*item\.category\s*===\s*\'video\'.*?\}', re.DOTALL),
    "{item.category === 'video' ? getLangTextInline('Video', 'Видео', 'Video', 'Video') : item.category === 'news' ? getLangTextInline('Yangilik', 'Новость', 'Haber', 'News') : getLangTextInline('Yutuq', 'Достижение', 'Başarı', 'Achievement')}",
    content, "News categories badge"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Hozir ijro etilmoqda\'.*?\}', re.DOTALL),
    "{getLangTextInline('Hozir ijro etilmoqda', 'Сейчас воспроизводится', 'Şimdi oynatılıyor', 'Now Playing')}",
    content, "Hozir ijro"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Videoni tomosha qilish\'.*?\}', re.DOTALL),
    "{getLangTextInline('Videoni tomosha qilish', 'Смотреть видео', 'Videoyu İzle', 'Watch Video')}",
    content, "Videoni tomosha"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Batafsil o.*?qish\'.*?\}', re.DOTALL),
    "{getLangTextInline('Batafsil o‘qish', 'Читать далее', 'Detaylı Oku', 'Read More')}",
    content, "Batafsil o'qish"
)

# --- 21. Photo Gallery Section ---
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'FOTOGALEREYA\'.*?\}', re.DOTALL),
    "{getLangTextInline('FOTOGALEREYA', 'ФОТОГАЛЕРЕЯ', 'FOTO GALERİ', 'PHOTO GALLERY')}",
    content, "FOTOGALEREYA title"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Kani-Lab fotogalereyasi\'.*?\}', re.DOTALL),
    "{getLangTextInline('Kani-Lab fotogalereyasi', 'Фотогалерея Kani-Lab', 'Kani-Lab Fotoğraf Galerisi', 'Kani-Lab Photo Gallery')}",
    content, "Kani-Lab fotogalereyasi sub"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Barchasi\'.*?\}', re.DOTALL),
    "{getLangTextInline('Barchasi', 'Все', 'Hepsi', 'All')}",
    content, "Barchasi filter"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ilmiy hamkorlik \(TerDU\)\'.*?\}', re.DOTALL),
    "{getLangTextInline('Ilmiy hamkorlik (TerDU)', 'Научное сотрудничество (ТерГУ)', 'Bilimsel İşbirliği (TerDU)', 'Scientific Collaboration (TerSU)')}",
    content, "Ilmiy hamkorlik filter"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qon olish shahobchasi \(2022\)\'.*?\}', re.DOTALL),
    "{getLangTextInline('Qon olish shahobchasi (2022)', 'Пункт забора крови (2022)', 'Kan Alma Birimi (2022)', 'Blood Draw Station (2022)')}",
    content, "Qon olish filter"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'8-mart bayrami\'.*?\}', re.DOTALL),
    "{getLangTextInline('8-mart bayrami', 'Праздник 8 марта', '8 Mart Bayramı', 'International Women\'s Day')}",
    content, "8-mart filter"
)
content = sub_pat(
    re.compile(r'\?\s*\(\s*lang\s*===\s*\'uz\'\s*\?\s*\'TerDU hamkorligi\'.*?\)\s*:\s*\(\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qon olish shahobchasi\'.*?\)', re.DOTALL),
    "? getLangTextInline('TerDU hamkorligi', 'Сотрудничество с ТерГУ', 'TerDU işbirliği', 'TerSU Collaboration') : getLangTextInline('Qon olish shahobchasi', 'Пункт забора крови', 'Kan Alma Birimi', 'Blood Draw Station')",
    content, "Gallery hover titles"
)

# --- 22. Branches Section ---
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'KANI-LAB TARMOG.*?I\'.*?\}', re.DOTALL),
    "{getLangTextInline('KANI-LAB TARMOG‘I', 'СЕТЬ KANI-LAB', 'KANİ-LAB AĞI', 'KANI-LAB NETWORK')}",
    content, "KANI-LAB TARMOG'I"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bizning filiallar\'.*?\}', re.DOTALL),
    "{getLangTextInline('Bizning filiallar', 'Наши филиалы', 'Şubelerimiz', 'Our Branches')}",
    content, "Bizning filiallar title"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'FAOL\'.*?\}', re.DOTALL),
    "{getLangTextInline('FAOL', 'АКТИВЕН', 'AKTİF', 'ACTIVE')}",
    content, "FAOL badge"
)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Xaritada ko.*?rish\'.*?\}', re.DOTALL),
    "{getLangTextInline('Xaritada ko‘rish', 'Показать на карте', 'Haritada Göster', 'View on Map')}",
    content, "Xaritada ko'rish"
)

# --- 23. Pricing Jami Summa in Cart ---
content = sub_pat(
    re.compile(r'<span className="font-extrabold text-slate-700 dark:text-slate-300">\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Jami summa\'.*?\}', re.DOTALL),
    "<span className=\"font-extrabold text-slate-700 dark:text-slate-300\">{getLangTextInline('Jami summa', 'Итоговая сумма', 'Toplam Tutar', 'Total Amount')}",
    content, "Pricing Total Summa"
)


# --- 24. Certificates Section Title & Cert year ---
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bizning Sertifikatlar\'.*?\}', re.DOTALL),
    "{getLangTextInline('Bizning Sertifikatlar', 'Наши сертификаты', 'Sertifikalarımız', 'Our Certificates')}",
    content, "Certificates Section Title"
)
content = sub_pat(
    re.compile(r'\{\s*cert\.year\s*\}\s*\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Yil\'.*?\}', re.DOTALL),
    "{cert.year} {getLangTextInline('Yil', 'Год', 'Yıl', 'Year')}",
    content, "Cert year label"
)

# --- 25. Branch Section Texts ---
# Qaysi filial
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qaysi filial sizga yaqin\?\'.*?\}', re.DOTALL),
    "{getLangTextInline('Qaysi filial sizga yaqin?', 'Какая ветка ближе к вам?', 'Hangi şube size daha yakın?', 'Which branch is closer to you?')}",
    content, "Which branch"
)
# Uydan namuna olish
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Uydan namuna olish xizmati ham mavjud\'.*?\}', re.DOTALL),
    "{getLangTextInline('Uydan namuna olish xizmati ham mavjud', 'Также доступна услуга взятия анализов на дому', 'Evde örnek alma hizmeti de mevcuttur', 'Home sample collection service is also available')}",
    content, "Home sample"
)
# Bog'lanish
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bog\\\'lanish\'.*?\}', re.DOTALL),
    "{getLangTextInline('Bog\\\'lanish', 'Связаться', 'İletişim', 'Contact')}",
    content, "Contact button"
)
# Landmark
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Landmark:\s*Sobiq Ko.*?z kasalxonasi.*?\'.*?\}', re.DOTALL),
    "{getLangTextInline('Landmark: Sobiq Ko‘z kasalxonasi binosi ichida (Eski Ko‘z Kasalxonasi).', 'Ориентир: Внутри здания бывшей Глазной больницы (Старая Глазная Больница).', 'Landmark: Eski Göz Hastanesi binası içinde.', 'Landmark: Inside the former Eye Hospital building (Old Eye Hospital).')}",
    content, "Landmark text"
)
# Ariza qabul qilindi
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ariza qabul qilindi!\'.*?\}', re.DOTALL),
    "{getLangTextInline('Ariza qabul qilindi!', 'Заявка принята!', 'Başvuru kabul edildi!', 'Application received!')}",
    content, "Ariza qabul qilindi"
)

# --- 26. Route Planner ---
# Marshrut rejalashtiruvchi
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Marshrut rejalashtiruvchi\'.*?\}', re.DOTALL),
    "{getLangTextInline('Marshrut rejalashtiruvchi', 'Планировщик маршрута', 'Rota Planlayıcı', 'Route Planner')}",
    content, "Route planner"
)
# Qanday boriladi
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qanday boriladi\?\'.*?\}', re.DOTALL),
    "{getLangTextInline('Qanday boriladi?', 'Как добраться?', 'Nasıl Gidilir?', 'How to get there?')}",
    content, "How to get there"
)
# Hozirgi manzilingiz placeholder
content = sub_pat(
    re.compile(r'placeholder=\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Hozirgi manzilingiz yoki shahar\'.*?\}', re.DOTALL),
    "placeholder={getLangTextInline('Hozirgi manzilingiz yoki shahar', 'Ваше текущее местоположение или город', 'Mevcut konumunuz veya şehir', 'Your current location or city')}",
    content, "Placeholder"
)
# Qayerga
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qayerga\?\'.*?\}', re.DOTALL),
    "{getLangTextInline('Qayerga?', 'Куда?', 'Nereye?', 'Where to?')}",
    content, "Where to"
)
# Qanaqasiga
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qanaqasiga\?\'.*?\}', re.DOTALL),
    "{getLangTextInline('Qanaqasiga?', 'Как?', 'Nasıl?', 'How?')}",
    content, "How"
)
# Modes driving, transit, walking
content = sub_pat(
    re.compile(r'\{\s*mode\s*:\s*\'driving\'\s*,\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*\'Avtomobil\'.*?\}', re.DOTALL),
    "{ mode: 'driving', label: getLangTextInline('Avtomobil', 'Автомобиль', 'Araç', 'Car'), icon: '🚗' }",
    content, "Driving mode"
)
content = sub_pat(
    re.compile(r'\{\s*mode\s*:\s*\'transit\'\s*,\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*\'Transport\'.*?\}', re.DOTALL),
    "{ mode: 'transit', label: getLangTextInline('Transport', 'Транспорт', 'Toplu Taşıma', 'Transit'), icon: '🚌' }",
    content, "Transit mode"
)
content = sub_pat(
    re.compile(r'\{\s*mode\s*:\s*\'walking\'\s*,\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*\'Piyoda\'.*?\}', re.DOTALL),
    "{ mode: 'walking', label: getLangTextInline('Piyoda', 'Пешком', 'Yürüyerek', 'Walking'), icon: '🚶' }",
    content, "Walking mode"
)
# Discover route (O'rganing)
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*"O\'rganing".*?\}', re.DOTALL),
    "{getLangTextInline(\"O'rganing\", 'Исследовать', 'Rotayı Keşfedin', 'Explore Route')}",
    content, "Discover route"
)
# Jonli xarita
content = sub_pat(
    re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Jonli xarita\'.*?\}', re.DOTALL),
    "{getLangTextInline('Jonli xarita', 'Живая карта', 'Canlı Harita', 'Live Map')}",
    content, "Live map"
)


# --- 27. Certificates List Array ---
idx_cert = content.find('CAP Sertifikati (2020)')
if idx_cert != -1:
    idx_bracket = content.rfind('[', 0, idx_cert)
    idx_end = content.find('.map((cert, index) => (', idx_cert)
    if idx_bracket != -1 and idx_end != -1:
        certs_replacement = """[
                  {
                    id: 1,
                    title: getLangTextInline('CAP Sertifikati (2020)', 'CAP Сертификат (2020)', 'CAP Sertifikası (2020)', 'CAP Certificate (2020)'),
                    year: '2020',
                    desc: getLangTextInline(
                      'Ushbu sertifikat Kani-Med laboratoriyasi 2020-yilda College of American Pathologists (CAP) tomonidan o\\'tkazilgan tashqi sifat nazorati (External Quality Assurance) tekshiruvlarida muvaffaqiyatli qatnashganligini tasdiqlaydi. Tadqiqotlar shuni ko\\'rsatadiki, CAP sertifikatiga ega laboratoriyalar boshqalarga qaraganda ancha aniq natijalar beradi. Bu bizning bemorlar salomatligiga bo\\'lgan o\\'ta mas\\'uliyatimizni belgilaydi. Biz faqat xalqaro standartlarga mos uskunalar va reaktivlardan foydalanamiz.',
                      'Этот сертификат подтверждает успешное участие лаборатории Kani-Med во внешнем контроле качества (CAP) в 2020 году. Исследования показывают, что сертифицированные лаборатории дают более точные результаты.',
                      'Bu sertifika, Kani-Med laboratuvarının 2020 yılında College of American Pathologists (CAP) tarafından yürütülen dış kalite kontrol testlerine başarıyla katıldığını teyit eder.',
                      'This certificate confirms the successful participation of Kani-Med laboratory in External Quality Assurance checks conducted by the College of American Pathologists (CAP) in 2020. Studies show that CAP-certified laboratories provide significantly more accurate results, defining our ultimate responsibility toward patient health. We use only equipment and reagents meeting international standards.'
                    ),
                    img: cert1Img
                  },
                  {
                    id: 2,
                    title: getLangTextInline('CAP Sertifikati (2021)', 'CAP Сертификат (2021)', 'CAP Sertifikası (2021)', 'CAP Certificate (2021)'),
                    year: '2021',
                    desc: getLangTextInline(
                      '2021-yilgi mavsumda tahlillarimiz sifati xalqaro standartlarga to\\'liq javob berishi tasdiqlandi. Laboratoriyamiz doimiy ravishda yuqori sifat nazoratini saqlab kelmoqda va har bir bemor uchun aniq natijalar kafolatlanadi. Biz yana bir bor diagnostika sifati bo\\'yicha etakchi ekanligimizni isbotladik. CAP sifat kafolati nafaqat bizning uskuna va xodimlarimizni, balki butun diagnostika jarayonimizni qat\\'iy tekshiruvdan o\\'tkazdi. Bu ishonchli tashxis va to\\'g\\'ri davolanishning asosi hisoblanadi.',
                      'В сезоне 2021 года подтверждено полное соответствие качества анализов международным стандартам. Наша лаборатория постоянно поддерживает высокий уровень контроля качества.',
                      '2021 sezonunda analizlerimizin kalitesinin uluslararası standartlara tam uyumlu olduğu onaylanmıştır. Laboratuvarımız sürekli olarak yüksek kalite kontrolü sağlamaktadır.',
                      'In the 2021 season, the quality of our analyses was confirmed to fully meet international standards. Our laboratory consistently maintains high quality control, and accurate results are guaranteed for each patient. We proved once again that we are leaders in diagnostic quality. CAP quality assurance strictly inspected not only our equipment and staff but also our entire diagnostic workflow, laying the foundation for reliable diagnosis and correct treatment.'
                    ),
                    img: cert2Img
                  },
                  {
                    id: 3,
                    title: getLangTextInline('CAP Sertifikati (2022)', 'CAP Сертификат (2022)', 'CAP Sertifikası (2022)', 'CAP Certificate (2022)'),
                    year: '2022',
                    desc: getLangTextInline(
                      'Ushbu xujjat 2022-yilda texnik va tibbiy mutaxassislarimizning malakasi xalqaro darajada ekanligini hamda laboratoriya jihozlarimizning benuqson ishlashini kafolatlaydi. Ketma-ket yillar davomida CAP xalqaro miqyosida o\\'tkaziladigan malaka tekshiruvlarida 100% ijobiy ko\\'rsatkichlarga erishib kelmoqdamiz. Bemorlarimiz tahlil natijalarini to\\'g\'ridan-to\\'g\'ri chet eldagi shifoxonalarga ham yuborishlari mumkin, chunki bizning sertifikat butun dunyoda tan olinadi.',
                      'Этот документ гарантирует международную квалификацию наших специалистов и безупречную работу оборудования в 2022 году. Наши результаты признаются по всему миру.',
                      'Bu belge, 2022 yılında teknik ve tıbbi uzmanlarımızın uluslararası düzeydeki yetkinliğini ve laboratuvar ekipmanlarımızın kusursuz çalışmasını garanti eder.',
                      'This document guarantees that the qualifications of our technical and medical specialists are of an international standard and that our laboratory equipment functions flawlessly. Year after year, we achieve a 100% positive rate in CAP international proficiency testing. Our patients can also send their test results directly to overseas hospitals, as our certification is recognized worldwide.'
                    ),
                    img: cert3Img
                  }
              ]"""
        content = content[:idx_bracket] + certs_replacement + content[idx_end:]
        print("27. Certificates array replaced successfully.")


with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)
