content = open('src/App.tsx', encoding='utf-8').read()
idx = content.find('sortedNews.map')
if idx != -1:
    print(content[idx:idx+1500].encode('ascii','replace').decode())
