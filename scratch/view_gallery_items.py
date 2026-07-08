import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

content = open('src/App.tsx', encoding='utf-8').read()
idx = content.find('const GALLERY_ITEMS = [')
if idx != -1:
    line_no = content[:idx].count('\n') + 1
    print(f"GALLERY_ITEMS starts at line {line_no}")
    print(content[idx:idx+5000].encode('ascii','replace').decode())
