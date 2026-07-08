import re

with open(r'c:\Users\Администратор\Downloads\kanilab\src\App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

target_ids = re.findall(r'targetId:\s*"([^"]+)"', content)
html_ids = re.findall(r'id="([^"]+)"', content)

print('All targetIds in tourSteps:')
for tid in target_ids:
    print(' -', tid)

print()
print('Missing IDs (in tourSteps but NOT found as id="..." in HTML):')
missing = []
for tid in target_ids:
    if tid not in html_ids:
        print(' MISSING:', tid)
        missing.append(tid)

if not missing:
    print(' None! All IDs are present.')
