content = open('src/App.tsx', encoding='utf-8').read()
idx = content.find('const getLangText =')
if idx != -1:
    print(content[idx:idx+300].encode('ascii','replace').decode())
