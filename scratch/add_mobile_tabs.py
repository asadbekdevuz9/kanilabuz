import re

# mobileTab mapping
mobile_tabs = {
    'navbar-logo':             'home',
    'navbar-link-home':        'home',
    'navbar-dropdown-about':   'about',
    'navbar-services':         'services',
    'navbar-dropdown-team':    'doctors',
    'navbar-link-faq':         'faq',
    'navbar-link-news':        'news',
    'navbar-dropdown-contact': 'contact',
}

with open(r'c:\Users\Администратор\Downloads\kanilab\src\App.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find lines with "icon:" after each targetId and insert mobileTab after icon line
result = []
i = 0
current_target = None
while i < len(lines):
    line = lines[i]
    # Check if this is a targetId line
    m = re.search(r'targetId:\s*"([^"]+)"', line)
    if m:
        current_target = m.group(1)
    
    # Check if this is icon line and current_target needs mobileTab
    if current_target and current_target in mobile_tabs:
        if re.search(r'^\s+icon:\s*"', line):
            result.append(line)
            # Insert mobileTab after icon
            indent = '      '
            tab_val = mobile_tabs[current_target]
            result.append(f'{indent}mobileTab: "{tab_val}",\n')
            print(f"Inserted mobileTab={tab_val} after icon for {current_target}")
            current_target = None  # reset so we don't double-insert
            i += 1
            continue
    
    result.append(line)
    i += 1

with open(r'c:\Users\Администратор\Downloads\kanilab\src\App.tsx', 'w', encoding='utf-8') as f:
    f.writelines(result)

print("Done!")
