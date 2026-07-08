import re
content = open('src/App.tsx', encoding='utf-8').read()
matches = [m.start() for m in re.finditer(r"handleLangChange\('tr'\)", content)]
for idx in matches:
    line_no = content[:idx].count('\n') + 1
    print(f"Desktop lang change at line {line_no}")
    print(content[idx-150:idx+250].replace('\n', ' ').encode('ascii','replace').decode())
    print("-" * 50)
