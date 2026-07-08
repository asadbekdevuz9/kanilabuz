content = open('src/App.tsx', encoding='utf-8').read()
import re
matches = [m.start() for m in re.finditer(r'<select', content)]
for idx in matches:
    line_no = content[:idx].count('\n') + 1
    print(f"Select element at line {line_no}:")
    print(content[idx:idx+400].encode('ascii','replace').decode())
    print("-" * 50)
