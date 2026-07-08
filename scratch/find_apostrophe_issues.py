import sys
import io
import re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

print("Length:", len(content))

# Find all single-quoted JS strings that contain an unescaped ASCII apostrophe
# Strategy: look for the pattern 'text where text contains an unescaped ' followed by a letter
# This is a simple regex that looks for: ' word chars ' word chars '
# which would be: opening quote, content, mid-word apostrophe, more content, closing quote

# We need to find cases like: 'word'word' where the middle ' is an apostrophe
# Pattern: a ' that is:
# - preceded by an alpha char
# - followed by an alpha char  
# - and is preceded by a non-backslash char

issues = []
i = 0
n = len(content)

while i < n:
    ch = content[i]
    code = ord(ch)
    
    # Standard ASCII single quote (U+0027)
    if code == 39:
        # Is this an apostrophe inside a string?
        before = content[i-1] if i > 0 else ''
        after = content[i+1] if i < n-1 else ''
        before_before = content[i-2] if i > 1 else ''
        
        # Check if it's preceded by alpha char and followed by alpha char
        # and the preceding char is not a backslash
        if (before.isalpha() and after.isalpha() and before_before != '\\'):
            # This might be an apostrophe! Record it.
            line_start = content.rfind('\n', 0, i) + 1
            line_end = content.find('\n', i)
            line_no = content[:i].count('\n') + 1
            line_text = content[line_start:line_end]
            issues.append((line_no, i, i - line_start, line_text))
    
    i += 1

print(f"Found {len(issues)} potential apostrophe issues:")
for lineno, abs_pos, col, line_text in issues[:50]:
    print(f"\nLine {lineno}, col {col}:")
    print(f"  {line_text[:200]}")

print(f"\nTotal: {len(issues)}")
