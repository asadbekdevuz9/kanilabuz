content = open('src/App.tsx', encoding='utf-8').read()
idx = content.find('Laboratuvarımızdan en son')
if idx != -1:
    line_no = content[:idx].count('\n') + 1
    print(f"News section description is at line {line_no}")
    print(content[idx-100:idx+400].encode('ascii','replace').decode())
