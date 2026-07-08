import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
modified = 0

for i, line in enumerate(lines):
    # Check if this line defines an 'en' property like: en: '...'
    match = re.match(r'^(\s+en:\s*)\'(.*)\'(\s*,?\s*)$', line)
    if match:
        prefix, value, suffix = match.groups()
        # If there is a single quote inside the value that is not escaped
        if "'" in value and "\\'" not in value:
            # We can escape it, or wrap the whole string in double quotes and make sure inner double quotes are escaped if any
            escaped_val = value.replace("'", "\\'")
            new_line = f"{prefix}'{escaped_val}'{suffix}"
            lines[i] = new_line
            modified += 1
            print(f"Fixed line {i+1}: {line.strip()} -> {new_line.strip()}")

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print(f"Total lines fixed: {modified}")
