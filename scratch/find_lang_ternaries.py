import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

content = open('src/App.tsx', encoding='utf-8').read()
# Let's search for ternaries like: lang === 'uz' ? ... : lang === 'ru' ? ... : ...
import re
# Find all occurrences of "lang === 'uz'"
matches = [m.start() for m in re.finditer(r"lang\s*===\s*'uz'", content)]
print(f"Found {len(matches)} occurrences of 'lang === uz'. Listing some:")

for idx in sorted(list(set(matches)))[:30]:
    line_no = content[:idx].count('\n') + 1
    print(f"Line {line_no}:")
    print(content[idx:idx+150].replace('\n', ' ').encode('ascii','replace').decode())
    print("-" * 50)
