with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

import re
for m in re.finditer(r"activeTab\s*===\s*['\"]certificates['\"]", content):
    idx = m.start()
    print("idx:", idx, "context:", repr(content[max(0, idx-40):idx+80].encode('ascii', 'ignore').decode('ascii')))
