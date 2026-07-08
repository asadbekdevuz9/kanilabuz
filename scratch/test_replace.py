import subprocess

subprocess.run(["git", "checkout", "src/App.tsx"])
with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

target = "{lang === 'uz' ? 'KANI-LAB - eng ilgor robotlashtirilgan analizatorlar va yuqori darajadagi tibbiy ekspertlar jamoasi bilan Surxondaryodagi birinchi raqamli premium klinik laboratoriya tarmog\\'i.' : lang === 'ru' ? 'KANI-LAB  сеть клинических лабораторий премиум-класса с передовым оборудованием в Сурхандарье.' : 'KANILAB, gelismis robotik analizrleri ve st dzey uzman ekibiyle birinci\\' sinif klinik laboratuvardir.'}"

# Let's print the count of target
print("Count of target (exact match):", content.count("tarmog\\'i."))

# Let's try to find it by substring
idx = content.find("KANI-LAB - eng ilgor robotlashtirilgan")
if idx != -1:
    idx_start = content.rfind("{", 0, idx)
    idx_end = content.find("}", idx) + 1
    snippet = content[idx_start:idx_end]
    print("Found snippet:")
    print(repr(snippet.encode('ascii', 'ignore').decode('ascii')))
    
    # Try replacing the snippet
    new_snippet = "{getLangTextInline('KANI-LAB - eng ilgor robotlashtirilgan analizatorlar va yuqori darajadagi tibbiy ekspertlar jamoasi bilan Surxondaryodagi birinchi raqamli premium klinik laboratoriya tarmog\\'i.', 'KANILAB -  tibbiy ekspertlar jamoasi bilan Surxondaryodagi birinchi raqamli premium klinik laboratoriya tarmog\\'i.', 'KANILAB, gelismis robotik analizrleri ve st dzey uzman ekibiyle birinci sinif klinik laboratuvardir.', 'KANILAB is the number one premium clinical laboratory network in Surxondaryo with advanced robotic analyzers and a high-level team of medical experts.')}"
    content = content.replace(snippet, new_snippet)
    print("Replaced successfully! MAXFIYLIK count:", content.count("MAXFIYLIK SIYOSATI"))
else:
    print("Substring not found!")
