import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open(r'c:\Users\Администратор\Downloads\kanilab\src\App.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find Tahlillar nav button (navbar-services target)
for i, line in enumerate(lines, 1):
    if 'navServices' in line or 'navAnalysis' in line or 'navTests' in line or 'navPrices' in line:
        if 3900 < i < 5000:
            print(f'Line {i}: {repr(line.rstrip()[:120])}')
