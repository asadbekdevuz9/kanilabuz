import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

content = open('src/App.tsx', encoding='utf-8').read()
idx = content.find('const BRANCHES:')
if idx != -1:
    print(content[idx:idx+4500].encode('ascii','replace').decode())
