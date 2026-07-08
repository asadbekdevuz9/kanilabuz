import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

content = open('src/App.tsx', encoding='utf-8').read()
lines = content.split('\n')
for i, line in enumerate(lines):
    if 'Abdusalimovna' in line:
        print(f"Line {i+1}: {line}")
