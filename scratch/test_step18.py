import re
import subprocess

subprocess.run(["git", "checkout", "src/App.tsx"])
with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

patterns = [
    ("dashboard title", re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'KaniLab Live Platforma Statistikasi\'.*?\}', re.DOTALL)),
    ("dashboard subtitle", re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Real vaqt rejimida tashrif buyuruvchilar faolligi va geolokatsiyasi\'.*?\}', re.DOTALL)),
    ("overview tab", re.compile(r'\{\s*id\s*:\s*\'overview\'\s*,\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*\'Umumiy ko.*?rinish\'.*?\}', re.DOTALL)),
    ("users tab", re.compile(r'\{\s*id\s*:\s*\'users\'\s*,\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*`Jonli Oqim.*?`.*?\}', re.DOTALL)),
    ("devices tab", re.compile(r'\{\s*id\s*:\s*\'devices\'\s*,\s*label\s*:\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qurilmalar\'.*?\}', re.DOTALL)),
    ("Hozir Online", re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Hozir Online\'.*?\}', re.DOTALL)),
    ("faol sessiyalar", re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'faol sessiyalar\'.*?\}', re.DOTALL)),
    ("Jami Tashriflar", re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Jami Tashriflar\'.*?\}', re.DOTALL)),
    ("kirishlar soni", re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'kirishlar soni\'.*?\}', re.DOTALL)),
    ("Faol Davlatlar", re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Faol Davlatlar\'.*?\}', re.DOTALL)),
    ("geografik hududlar", re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'geografik hududlar\'.*?\}', re.DOTALL)),
    ("User Distribution by Country", re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Foydalanuvchilarning davlatlar bo.*?yicha taqsimoti\'.*?\}', re.DOTALL)),
    ("Loading analytics", re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ma.*?lumotlar yuklanmoqda\.\.\.\'.*?\}', re.DOTALL)),
    ("Active Sessions Title", re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Faol Sessiyalar ro.*?yxati\'.*?\}', re.DOTALL)),
    ("users active count", re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'foydalanuvchi faol\'.*?\}', re.DOTALL)),
    ("No active sessions", re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Hozircha faol foydalanuvchilar yo.*?q\'.*?\}', re.DOTALL)),
    ("Viewing label", re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ko.*?rmoqda:\s*\'.*?\}', re.DOTALL)),
    ("Device Types", re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Qurilmalar turi\'.*?\}', re.DOTALL)),
    ("Browser Share", re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Brauzerlar ulushi\'.*?\}', re.DOTALL)),
    ("Loading browsers", re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Yuklanmoqda\.\.\.\'.*?\}', re.DOTALL)),
    ("Yopish stats button", re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Yopish\'.*?\}', re.DOTALL)),
]

for name, pattern in patterns:
    res, count = pattern.subn("REPLACED", content)
    print(f"{name} match count: {count}, CAP index after sub: {res.find('CAP Sertifikati (2020)')}")
