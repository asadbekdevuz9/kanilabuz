import re
import sys

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
modified = 0

pattern = re.compile(r'^(\s+\w+:\s*)\'(.*)\'(\s*,?\s*)$')

for i, line in enumerate(lines):
    match = pattern.match(line)
    if match:
        prefix, value, suffix = match.groups()
        has_unescaped = False
        chars = list(value)
        for idx, char in enumerate(chars):
            if char == "'":
                bs_count = 0
                temp_idx = idx - 1
                while temp_idx >= 0 and chars[temp_idx] == '\\':
                    bs_count += 1
                    temp_idx -= 1
                if bs_count % 2 == 0:
                    has_unescaped = True
                    break
        
        if has_unescaped:
            escaped_chars = []
            for idx, char in enumerate(chars):
                if char == "'":
                    bs_count = 0
                    temp_idx = idx - 1
                    while temp_idx >= 0 and chars[temp_idx] == '\\':
                        bs_count += 1
                        temp_idx -= 1
                    if bs_count % 2 == 0:
                        escaped_chars.append("\\'")
                    else:
                        escaped_chars.append(char)
                else:
                    escaped_chars.append(char)
            escaped_val = "".join(escaped_chars)
            new_line = f"{prefix}'{escaped_val}'{suffix}"
            lines[i] = new_line
            modified += 1

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print(f"Total lines fixed: {modified}")
