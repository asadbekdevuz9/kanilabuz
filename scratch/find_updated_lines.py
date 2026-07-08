content = open('src/App.tsx', encoding='utf-8').read()
idx = content.find('Bemorlarimiz biz haqimizda')
if idx != -1:
    line_no = content[:idx].count('\n') + 1
    print(f"Bemorlarimiz is at line {line_no}")
idx2 = content.find('faoliyati, ilmiy-akademik hamkorliklarimiz')
if idx2 != -1:
    line_no = content[:idx2].count('\n') + 1
    print(f"Gallery description is at line {line_no}")
idx3 = content.find('Termiz shahri va Surxondaryo viloyati bo‘ylab')
if idx3 != -1:
    line_no = content[:idx3].count('\n') + 1
    print(f"Branches description is at line {line_no}")
