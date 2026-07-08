import re
import subprocess

subprocess.run(["git", "checkout", "src/App.tsx"])

with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Helper function for sub
def sub_pat(pattern, replacement, text):
    return pattern.sub(lambda m: replacement, text)

# Steps 1 to 15
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
if helper_str in content:
    content = content.replace(helper_str, helper_replacement)

typed_pattern = re.compile(r'strings:\s*lang\s*===\s*\'uz\'\s*\?.*?\]\s*,\s*\n\s*typeSpeed:', re.DOTALL)
content = sub_pat(typed_pattern, "strings: [],\n        typeSpeed:", content)

val_pattern = re.compile(r'if\s*\(!contactName\.trim\(\)\)\s*\{.*?setContactFormErrors\(errors\);', re.DOTALL)
content = sub_pat(val_pattern, "setContactFormErrors(errors);", content)

idx1 = content.find('{/* DIGITAL RECEIPT CHECK MODAL */}')
idx2 = content.find('REAL-TIME STATISTICS MODAL')
if idx1 != -1 and idx2 != -1:
    idx2_start = content.rfind('{/*', 0, idx2)
    content = content[:idx1] + "RECEIPT_MODAL" + content[idx2_start:]

idx_dd_start = content.find('Custom Searchable Categorized Dropdown for Branches')
if idx_dd_start != -1:
    idx_dd_end = content.find('{cat.category}', idx_dd_start) + len('{cat.category}')
    content = content[:idx_dd_start] + "DROPDOWN" + content[idx_dd_end:]

# Step 6
col2_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bosh Ofis & Ish Tartibi\'.*?\}', re.DOTALL)
content = sub_pat(col2_pattern, "col2", content)
tcity_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Termiz Shahri\'.*?\}', re.DOTALL)
content = sub_pat(tcity_pattern, "tcity", content)
worktime_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ish Vaqti\'.*?\}', re.DOTALL)
content = sub_pat(worktime_pattern, "worktime", content)
col3_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Tezkor Bog.*?\}', re.DOTALL)
content = sub_pat(col3_pattern, "col3", content)
privacy_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Maxfiylik Siyosati\'.*?\}', re.DOTALL)
content = sub_pat(privacy_pattern, "priv_link", content)
terms_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Foydalanish shartlari\'.*?\}', re.DOTALL)
content = sub_pat(terms_pattern, "terms_link", content)
gallery_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Fotogalereya\'.*?\}', re.DOTALL)
content = sub_pat(gallery_pattern, "gallery_link", content)
certs_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Sertifikatlarimiz\'.*?\}', re.DOTALL)
content = sub_pat(certs_pattern, "certs_link", content)
livestats_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Online Statistika\'.*?\}', re.DOTALL)
content = sub_pat(livestats_pattern, "livestats", content)
brand_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'KANI-LAB\s*-\s*eng\s*ilg.*?or.*?tarmog.*?i\.\'.*?\}', re.DOTALL)
content = sub_pat(brand_pattern, "brand", content)

onlayn_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Onlayn navbat olish\'.*?\}', re.DOTALL)
content = sub_pat(onlayn_pattern, "onlayn", content)
tahlillar_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Tahlillar va narxlar\'.*?\}', re.DOTALL)
content = sub_pat(tahlillar_pattern, "tahlillar", content)

about_dd_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Kani-Lab haqida\'.*?\}', re.DOTALL)
content = sub_pat(about_dd_pattern, "about_dd", content)
news_links_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Yangiliklar\'.*?\}', re.DOTALL)
content = sub_pat(news_links_pattern, "news_link", content)
muloqot_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'MULOQOT TARMOQLARI\'.*?\}', re.DOTALL)
content = sub_pat(muloqot_pattern, "muloqot", content)

hist_title_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bizning tariximiz\'.*?\}', re.DOTALL)
content = sub_pat(hist_title_pattern, "hist_title", content)
hist_sub_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Yillar davomida ishonchli rivojlanish.*?\}', re.DOTALL)
content = sub_pat(hist_sub_pattern, "hist_sub", content)
timeline_pattern = re.compile(r'year:\s*\'2019\',.*?year:\s*\'2025-2026\',.*?desc:\s*lang\s*===\s*\'uz\'\s*\?.*?\n\s*\}', re.DOTALL)
content = sub_pat(timeline_pattern, "timeline_replacement", content)

val_title_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bizning qadriyatlarimiz\'.*?\}', re.DOTALL)
content = sub_pat(val_title_pattern, "val_title", content)
val_sub_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Sifat va ishonch poydevori\'.*?\}', re.DOTALL)
content = sub_pat(val_sub_pattern, "val_sub", content)
values_pattern = re.compile(r'icon:\s*\'🛡️\',.*?icon:\s*\'🌱\',.*?desc:\s*lang\s*===\s*\'uz\'\s*\?.*?\n\s*\}', re.DOTALL)
content = sub_pat(values_pattern, "values_replacement", content)

mission_title_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bizning maqsad va vazifalarimiz\'.*?\}', re.DOTALL)
content = sub_pat(mission_title_pattern, "mission_title", content)
mission_sub_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Kelajakka yo.*?naltirilgan maqsadlar\'.*?\}', re.DOTALL)
content = sub_pat(mission_sub_pattern, "mission_sub", content)
mission_detail_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bizning maqsadimiz \(Missiya\)\'.*?\}\s*<\/h3>.*?\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Kelajak rejamiz \(Vizyon\)\'.*?\}\s*<\/h3>.*?<\/div>\s*<\/div>', re.DOTALL)
content = sub_pat(mission_detail_pattern, "mission_detail", content)

tasks_header_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Asosiy vazifalarimiz:\'.*?\}', re.DOTALL)
content = sub_pat(tasks_header_pattern, "tasks_header", content)

idx_tasks = content.find("Sifatni doimiy nazorat qilish")
if idx_tasks != -1:
    idx_bracket = content.rfind('{[', 0, idx_tasks)
    idx_end = content.find('.map((task, idx)', idx_tasks)
    if idx_bracket != -1 and idx_end != -1:
        content = content[:idx_bracket] + "TASKS_ARRAY" + content[idx_end:]

h_priv_title = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'MAXFIYLIK SIYOSATI\'.*?\}', re.DOTALL)
content = sub_pat(h_priv_title, "priv_title", content)

h_priv_sub = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Kani-Lab laboratoriyasi ma.*?lumotlar maxfiyligi siyosati\'.*?\}', re.DOTALL)
content = sub_pat(h_priv_sub, "priv_sub", content)

idx_priv = content.find("activeTab === 'privacy' && (")
if idx_priv != -1:
    idx_list = content.find('{[', idx_priv)
    idx_end = content.find('.map((section, idx) => (', idx_priv)
    if idx_list != -1 and idx_end != -1:
        content = content[:idx_list] + "PRIV_ARRAY" + content[idx_end:]

h_terms_title = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'FOYDALANISH SHARTLARI\'.*?\}', re.DOTALL)
content = sub_pat(h_terms_title, "terms_title", content)

h_terms_sub = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Kani-Lab veb-platformasidan foydalanish bo.*?yicha shartlar va qoidalar\'.*?\}', re.DOTALL)
content = sub_pat(h_terms_sub, "terms_sub", content)

idx_terms = content.find("activeTab === 'terms' && (")
if idx_terms != -1:
    idx_list = content.find('{[', idx_terms)
    idx_end = content.find('.map((section, idx) => (', idx_terms)
    if idx_list != -1 and idx_end != -1:
        content = content[:idx_list] + "TERMS_ARRAY" + content[idx_end:]

# Tracing steps 16 to 27
print("Start trace length:", len(content), "CAP index:", content.find('CAP Sertifikati (2020)'))

# Step 16
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'PREMIUM DIAGNOSTIKA MARKAZI\'.*?\}', re.DOTALL), "premium", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bemor\'.*?\}', re.DOTALL), "patient", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Chek\'.*?\}', re.DOTALL), "ticket", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'JAMI SUMMA\'.*?\}', re.DOTALL), "total", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Xizmatlar\'.*?\}.*?\{\s*cart\.length\s*\}.*?\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'ta\'.*?\}', re.DOTALL), "services_cnt", content)
content = sub_pat(re.compile(r'\{\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*\'Sana\'.*?\}', re.DOTALL), "date_lbl", content)
content = sub_pat(re.compile(r'\{\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*\'Vaqt\'.*?\}', re.DOTALL), "time_lbl", content)
content = sub_pat(re.compile(r'\{\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*\'Filial\'.*?\}', re.DOTALL), "branch_lbl", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*["\']Sog.*?lig.*?ingiz.*?maqsadimiz["\'].*?\}', re.DOTALL), "sog", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Yordam va qo.*?llab-quvvatlash\'.*?\}', re.DOTALL), "help", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Muammo yuzaga kelsa, biz bilan bog.*?laning\'.*?\}', re.DOTALL), "muammo", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'PDF saqlab olish\'.*?\}', re.DOTALL), "pdf", content)
content = sub_pat(re.compile(r'pdf\.text\(\s*\'KANILAB.*?CHIPTA\'\s*,\s*4\s*,\s*7\s*\);', re.DOTALL), "pdf_title", content)
content = sub_pat(re.compile(r'pdf\.text\(\s*`Bemor:\s*\${patientName}`\s*,\s*4\s*,\s*13\s*\);', re.DOTALL), "pdf_pat", content)
content = sub_pat(re.compile(r'pdf\.text\(\s*`Raqam:\s*\${generatedTicketID}`\s*,\s*4\s*,\s*18\s*\);', re.DOTALL), "pdf_ticket", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Hozir band qilish\'.*?\}', re.DOTALL), "now_book", content)
print("After Step 16 length:", len(content), "CAP index:", content.find('CAP Sertifikati (2020)'))

# Step 17
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*selectedAnalyzer\.category\.uz\s*:\s*selectedAnalyzer\.category\.ru\s*\}', re.DOTALL), "cat", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*selectedAnalyzer\.shortDesc\.uz\s*:\s*selectedAnalyzer\.shortDesc\.ru\s*\}', re.DOTALL), "short", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qisqacha tavsif\'.*?\}', re.DOTALL), "brief", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ilmiy va texnik ma.*?lutlar\'.*?\}', re.DOTALL), "scientific", content)
print("After Step 17 length:", len(content), "CAP index:", content.find('CAP Sertifikati (2020)'))

# Step 18
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'KaniLab Live Platforma Statistikasi\'.*?\}', re.DOTALL), "live_stats", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Real vaqt rejimida tashrif buyuruvchilar faolligi va geolokatsiyasi\'.*?\}', re.DOTALL), "live_sub", content)
content = sub_pat(re.compile(r'\{\s*id\s*:\s*\'overview\'\s*,\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*\'Umumiy ko.*?rinish\'.*?\}', re.DOTALL), "overview", content)
content = sub_pat(re.compile(r'\{\s*id\s*:\s*\'users\'\s*,\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*`Jonli Oqim.*?`.*?\}', re.DOTALL), "users", content)
content = sub_pat(re.compile(r'\{\s*id\s*:\s*\'devices\'\s*,\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qurilmalar\'.*?\}', re.DOTALL), "devices", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Hozir Online\'.*?\}', re.DOTALL), "online", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'faol sessiyalar\'.*?\}', re.DOTALL), "active", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Jami Tashriflar\'.*?\}', re.DOTALL), "total_visits", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'kirishlar soni\'.*?\}', re.DOTALL), "loads", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Faol Davlatlar\'.*?\}', re.DOTALL), "countries", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'geografik hududlar\'.*?\}', re.DOTALL), "regions", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Foydalanuvchilarning davlatlar bo.*?yicha taqsimoti\'.*?\}', re.DOTALL), "dist", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ma.*?lumotlar yuklanmoqda\.\.\.\'.*?\}', re.DOTALL), "loading", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Faol Sessiyalar ro.*?yxati\'.*?\}', re.DOTALL), "sessions_title", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'foydalanuvchi faol\'.*?\}', re.DOTALL), "active_cnt", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Hozircha faol foydalanuvchilar yo.*?q\'.*?\}', re.DOTALL), "no_active", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ko.*?rmoqda:\s*\'.*?\}', re.DOTALL), "viewing", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qurilmalar turi\'.*?\}', re.DOTALL), "device_types", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Brauzerlar ulushi\'.*?\}', re.DOTALL), "browser_share", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Yuklanmoqda\.\.\.\'.*?\}', re.DOTALL), "loading_browsers", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Yopish\'.*?\}', re.DOTALL), "close", content)
print("After Step 18 length:", len(content), "CAP index:", content.find('CAP Sertifikati (2020)'))

# Step 19
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Fikr qoldirish\'.*?\}', re.DOTALL), "review", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Xizmatlarimiz haqida o\\\'z fikringizni yozib qoldiring\.\'.*?\}', re.DOTALL), "review_desc", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ism va familiya\'.*?\}', re.DOTALL), "name_lbl", content)
content = sub_pat(re.compile(r'placeholder=\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ismingizni kiriting\'.*?\}', re.DOTALL), "name_ph", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Mijoz turi\'.*?\}', re.DOTALL), "client_lbl", content)
content = sub_pat(re.compile(r'<\s*option\s*value\s*=\s*""\s*>\s*\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Tanlang\.\.\.\'.*?\}\s*<\s*/\s*option\s*>', re.DOTALL), "select_opt", content)
content = sub_pat(re.compile(r'<\s*option\s*value\s*=\s*\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bemor\'.*?\}\s*>\s*\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bemor\'.*?\}\s*<\s*/\s*option\s*>', re.DOTALL), "pat_opt", content)
content = sub_pat(re.compile(r'<\s*option\s*value\s*=\s*\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Shifokor\'.*?\}\s*>\s*\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Shifokor\'.*?\}\s*<\s*/\s*option\s*>', re.DOTALL), "doc_opt", content)
content = sub_pat(re.compile(r'<\s*option\s*value\s*=\s*\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Hamkor\'.*?\}\s*>\s*\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Hamkor\'.*?\}\s*<\s*/\s*option\s*>', re.DOTALL), "partner_opt", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Fikringiz\'.*?\}', re.DOTALL), "review_text", content)
content = sub_pat(re.compile(r'placeholder=\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Taassurotlaringiz bilan o\\\'rtoqlashing\.\.\.\'.*?\}', re.DOTALL), "review_ph", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Yuborish\'.*?\}', re.DOTALL), "submit", content)
print("After Step 19 length:", len(content), "CAP index:", content.find('CAP Sertifikati (2020)'))

# Step 20
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'YANGILIKLAR\'.*?\}', re.DOTALL), "news_title", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Kani-Lab yangiliklari va videolari\'.*?\}', re.DOTALL), "news_sub", content)
content = sub_pat(re.compile(r'\{\s*item\.category\s*===\s*\'video\'.*?\}', re.DOTALL), "news_badge", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Hozir ijro etilmoqda\'.*?\}', re.DOTALL), "now_playing", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Videoni tomosha qilish\'.*?\}', re.DOTALL), "watch_video", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Batafsil o.*?qish\'.*?\}', re.DOTALL), "read_more", content)
print("After Step 20 length:", len(content), "CAP index:", content.find('CAP Sertifikati (2020)'))

# Step 21
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'FOTOGALEREYA\'.*?\}', re.DOTALL), "gallery_title", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Kani-Lab fotogalereyasi\'.*?\}', re.DOTALL), "gallery_sub", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Barchasi\'.*?\}', re.DOTALL), "all_filter", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ilmiy hamkorlik \(TerDU\)\'.*?\}', re.DOTALL), "science_filter", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qon olish shahobchasi \(2022\)\'.*?\}', re.DOTALL), "draw_filter", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'8-mart bayrami\'.*?\}', re.DOTALL), "womens_filter", content)
content = sub_pat(re.compile(r'\?\s*\(\s*lang\s*===\s*\'uz\'\s*\?\s*\'TerDU hamkorligi\'.*?\)\s*:\s*\(\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qon olish shahobchasi\'.*?\)', re.DOTALL), "gallery_hover", content)
print("After Step 21 length:", len(content), "CAP index:", content.find('CAP Sertifikati (2020)'))

# Step 22
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'KANI-LAB TARMOG.*?I\'.*?\}', re.DOTALL), "network", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bizning filiallar\'.*?\}', re.DOTALL), "branches_title", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'FAOL\'.*?\}', re.DOTALL), "active_badge", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Xaritada ko.*?rish\'.*?\}', re.DOTALL), "map_btn", content)
print("After Step 22 length:", len(content), "CAP index:", content.find('CAP Sertifikati (2020)'))

# Step 23
content = sub_pat(re.compile(r'<span className="font-extrabold text-slate-700 dark:text-slate-300">\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Jami summa\'.*?\}', re.DOTALL), "total_summa", content)
print("After Step 23 length:", len(content), "CAP index:", content.find('CAP Sertifikati (2020)'))

# Step 24
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bizning Sertifikatlar\'.*?\}', re.DOTALL), "certs_title", content)
content = sub_pat(re.compile(r'\{\s*cert\.year\s*\}\s*\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Yil\'.*?\}', re.DOTALL), "year_lbl", content)
print("After Step 24 length:", len(content), "CAP index:", content.find('CAP Sertifikati (2020)'))

# Step 25
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qaysi filial sizga yaqin\?\'.*?\}', re.DOTALL), "which_branch", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Uydan namuna olish xizmati ham mavjud\'.*?\}', re.DOTALL), "home_sample", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bog\\\'lanish\'.*?\}', re.DOTALL), "contact_btn", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Landmark:\s*Sobiq Ko.*?z kasalxonasi.*?\'.*?\}', re.DOTALL), "landmark", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ariza qabul qilindi!\'.*?\}', re.DOTALL), "app_received", content)
print("After Step 25 length:", len(content), "CAP index:", content.find('CAP Sertifikati (2020)'))

# Step 26
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Marshrut rejalashtiruvchi\'.*?\}', re.DOTALL), "route_planner", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qanday boriladi\?\'.*?\}', re.DOTALL), "how_get", content)
content = sub_pat(re.compile(r'placeholder=\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Hozirgi manzilingiz yoki shahar\'.*?\}', re.DOTALL), "ph", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qayerga\?\'.*?\}', re.DOTALL), "where", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qanaqasiga\?\'.*?\}', re.DOTALL), "how", content)
content = sub_pat(re.compile(r'\{\s*mode\s*:\s*\'driving\'\s*,\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*\'Avtomobil\'.*?\}', re.DOTALL), "driving", content)
content = sub_pat(re.compile(r'\{\s*mode\s*:\s*\'transit\'\s*,\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*\'Transport\'.*?\}', re.DOTALL), "transit", content)
content = sub_pat(re.compile(r'\{\s*mode\s*:\s*\'walking\'\s*,\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*\'Piyoda\'.*?\}', re.DOTALL), "walking", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*"O\'rganing".*?\}', re.DOTALL), "explore", content)
content = sub_pat(re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Jonli xarita\'.*?\}', re.DOTALL), "live_map", content)
print("After Step 26 length:", len(content), "CAP index:", content.find('CAP Sertifikati (2020)'))

# Step 27
idx_cert = content.find('CAP Sertifikati (2020)')
if idx_cert != -1:
    idx_bracket = content.rfind('[', 0, idx_cert)
    idx_end = content.find('.map((cert, index) => (', idx_cert)
    print("Step 27: idx_cert:", idx_cert, "idx_bracket:", idx_bracket, "idx_end:", idx_end)
    if idx_bracket != -1 and idx_end != -1:
        content = content[:idx_bracket] + "CERTS_ARRAY" + content[idx_end:]
print("After Step 27 length:", len(content), "CAP index:", content.find('CAP Sertifikati (2020)'))
