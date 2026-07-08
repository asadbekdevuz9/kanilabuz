with open("src/App.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

for i in range(5840, 5950):
    if i < len(lines):
        safe_line = lines[i].strip()[:100].encode('ascii', 'ignore').decode('ascii')
        print(f"Line {i+1}: {safe_line}")
