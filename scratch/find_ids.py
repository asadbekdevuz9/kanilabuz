import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open(r'c:\Users\Администратор\Downloads\kanilab\src\App.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find relevant sections
keywords = ['lang-switcher', 'navbar-services', 'Tahlillar', 'chekni', 'Chekni', 'receipt', 'theme-toggle', 'dark mode', 'DarkMode', 'Chek']
for i, line in enumerate(lines, 1):
    for kw in keywords:
        if kw in line and 3900 < i < 5000:
            print(f'Line {i}: {line.rstrip()[:140]}')
            break
