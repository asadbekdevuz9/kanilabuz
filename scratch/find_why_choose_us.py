content = open('src/App.tsx', encoding='utf-8').read()
import re
# Let's search for "To'liq avtomatizatsiya" or "Shveysariya Aniqligi"
idx = content.find('Shveysariya Aniqligi')
if idx != -1:
    line_no = content[:idx].count('\n') + 1
    print(f"Why choose us is at line {line_no}")
    print(content[idx-100:idx+600].encode('ascii','replace').decode())
