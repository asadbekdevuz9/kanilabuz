import re
import subprocess

subprocess.run(["git", "checkout", "src/App.tsx"])

with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Helper function for sub
def sub_pat(pattern, replacement, text):
    return pattern.sub(lambda m: replacement, text)

# Steps 1 to 5
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
brand_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'KANI-LAB.*?tarmog.*?i\.\'.*?\}', re.DOTALL)
content = sub_pat(brand_pattern, "brand", content)

print("MAXFIYLIK count after Step 6:", content.count("MAXFIYLIK SIYOSATI"))

# Step 7
onlayn_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Onlayn navbat olish\'.*?\}', re.DOTALL)
content = sub_pat(onlayn_pattern, "onlayn", content)
tahlillar_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Tahlillar va narxlar\'.*?\}', re.DOTALL)
content = sub_pat(tahlillar_pattern, "tahlillar", content)

# Step 8
about_dd_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Kani-Lab haqida\'.*?\}', re.DOTALL)
content = sub_pat(about_dd_pattern, "about_dd", content)
news_links_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Yangiliklar\'.*?\}', re.DOTALL)
content = sub_pat(news_links_pattern, "news_link", content)
muloqot_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'MULOQOT TARMOQLARI\'.*?\}', re.DOTALL)
content = sub_pat(muloqot_pattern, "muloqot", content)

# Step 9
hist_title_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bizning tariximiz\'.*?\}', re.DOTALL)
content = sub_pat(hist_title_pattern, "hist_title", content)
hist_sub_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Yillar davomida ishonchli rivojlanish.*?\}', re.DOTALL)
content = sub_pat(hist_sub_pattern, "hist_sub", content)
timeline_pattern = re.compile(r'year:\s*\'2019\',.*?year:\s*\'2025-2026\',.*?desc:\s*lang\s*===\s*\'uz\'\s*\?.*?\n\s*\}', re.DOTALL)
content = sub_pat(timeline_pattern, "timeline_replacement", content)

# Step 10
val_title_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bizning qadriyatlarimiz\'.*?\}', re.DOTALL)
content = sub_pat(val_title_pattern, "val_title", content)
val_sub_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Sifat va ishonch poydevori\'.*?\}', re.DOTALL)
content = sub_pat(val_sub_pattern, "val_sub", content)
values_pattern = re.compile(r'icon:\s*\'🛡️\',.*?icon:\s*\'🌱\',.*?desc:\s*lang\s*===\s*\'uz\'\s*\?.*?\n\s*\}', re.DOTALL)
content = sub_pat(values_pattern, "values_replacement", content)

# Step 11
mission_title_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bizning maqsad va vazifalarimiz\'.*?\}', re.DOTALL)
content = sub_pat(mission_title_pattern, "mission_title", content)
mission_sub_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Kelajakka yo.*?naltirilgan maqsadlar\'.*?\}', re.DOTALL)
content = sub_pat(mission_sub_pattern, "mission_sub", content)
mission_detail_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Bizning maqsadimiz \(Missiya\)\'.*?\}\s*<\/h3>.*?\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Kelajak rejamiz \(Vizyon\)\'.*?\}\s*<\/h3>.*?<\/div>\s*<\/div>', re.DOTALL)
content = sub_pat(mission_detail_pattern, "mission_detail", content)

tasks_header_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Asosiy vazifalarimiz:\'.*?\}', re.DOTALL)
content = sub_pat(tasks_header_pattern, "tasks_header", content)

print("MAXFIYLIK count before tasks array:", content.count("MAXFIYLIK SIYOSATI"))

# Replace the tasks array using index range boundaries
idx_tasks = content.find("Sifatni doimiy nazorat qilish")
if idx_tasks != -1:
    idx_bracket = content.rfind('{[', 0, idx_tasks)
    idx_end = content.find('.map((task, idx)', idx_tasks)
    if idx_bracket != -1 and idx_end != -1:
        content = content[:idx_bracket] + "TASKS_ARRAY" + content[idx_end:]

print("MAXFIYLIK count after tasks array:", content.count("MAXFIYLIK SIYOSATI"))
