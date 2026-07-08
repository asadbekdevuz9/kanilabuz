with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

import re
for m in re.finditer("tarmog", content):
    idx = m.start()
    idx_start = content.rfind('{', 0, idx)
    idx_end = content.find('}', idx) + 1
    snippet = content[idx_start:idx_end]
    print("idx:", idx, "snippet preview:", repr(snippet[:100].encode('ascii', 'ignore').decode('ascii')))
