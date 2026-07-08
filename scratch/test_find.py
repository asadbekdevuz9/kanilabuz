with open("src/App.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if "activetab" in line.lower():
        safe_line = line.strip()[:100].encode('ascii', 'ignore').decode('ascii')
        print(f"Line {i+1}: {safe_line}")
