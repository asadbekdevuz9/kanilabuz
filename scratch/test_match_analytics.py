with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

import re
pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ma.*?lumotlar yuklanmoqda\.\.\.\'.*?\}', re.DOTALL)
m = pattern.search(content)
if m:
    print("Match found!")
    print("Start:", m.start(), "End:", m.end())
    print("Length of match:", m.end() - m.start())
    print("Match text (safe):")
    print(m.group(0)[:300].encode('ascii', 'ignore').decode('ascii'))
    print("...")
    print(m.group(0)[-300:].encode('ascii', 'ignore').decode('ascii'))
else:
    print("Match not found!")
