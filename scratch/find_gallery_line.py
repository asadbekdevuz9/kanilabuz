import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

content = open('src/App.tsx', encoding='utf-8').read()
idx = content.find('Faaliyetlerimiz')
if idx != -1:
    line_no = content[:idx].count('\n') + 1
    print(f"Gallery Section is at approx line {line_no}")
