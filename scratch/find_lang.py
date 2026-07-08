import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open("src/App.tsx", encoding="utf-8") as f:
    lines = f.readlines()

# Find the translations 't' object
for i, line in enumerate(lines):
    if 'const t = ' in line or 'navHome' in line or ('en:' in line and 'nav' in line.lower()):
        print(f"Line {i+1}: {line.rstrip()[:200].encode('utf-8','replace').decode('ascii','replace')}")
