content = open('src/App.tsx', encoding='utf-8').read()
idx = content.find('const NEWS_ITEMS = [')
if idx != -1:
    line_no = content[:idx].count('\n') + 1
    print(f"NEWS_ITEMS starts at line {line_no}")
    print(content[idx:idx+1500].encode('ascii','replace').decode())
