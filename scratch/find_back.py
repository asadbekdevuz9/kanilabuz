import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

content = open('src/App.tsx', encoding='utf-8').read()
# Let's search around index 329448 minus 15000 to find the beginning of the profile section
start_idx = max(0, 329448 - 15000)
end_idx = min(len(content), 329448)
import re
# Look for back buttons, "Ana Sayfaya" or click handlers that set tab to 'home' or similar
matches = [m.start() for m in re.finditer(r'onClick.*set.*home', content[start_idx:end_idx], re.IGNORECASE)]
for idx in matches:
    abs_idx = start_idx + idx
    print(f"Found match at {abs_idx}:")
    print(content[abs_idx-100:abs_idx+300].encode('ascii','replace').decode())
    print("-" * 50)
