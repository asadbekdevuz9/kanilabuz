import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

content = open('src/App.tsx', encoding='utf-8').read()
# Let's search for "Biyografiya" or "Biyografi" (case insensitive)
import re
matches = [m.start() for m in re.finditer(r'biyograf', content, re.IGNORECASE)]
for idx in matches:
    print(f"Found at index {idx}:")
    print(content[max(0, idx-100):idx+200].encode('ascii','replace').decode())
    print("-" * 50)
