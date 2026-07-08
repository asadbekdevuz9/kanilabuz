content = open('src/App.tsx', encoding='utf-8').read()
idx = content.find('Termiz ve Surhanderya')
if idx != -1:
    line_no = content[:idx].count('\n') + 1
    print(f"Branches description is at line {line_no}")
