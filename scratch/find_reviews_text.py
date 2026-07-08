import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

content = open('src/App.tsx', encoding='utf-8').read()
import re
matches = [m.start() for m in re.finditer(r'hakk.+m.+zda\s+ne', content, re.IGNORECASE)]
for idx in matches:
    print(f"Found match at index {idx}:")
    print(content[max(0, idx-200):idx+300].encode('ascii','replace').decode())
    print("-" * 50)
