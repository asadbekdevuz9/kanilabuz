import sys
import io
import re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

print("Original length:", len(content))

# Uzbek words that commonly have apostrophes
# Pattern: in a single-quoted string context, replace word'word with word\'word
# The tricky part is knowing we're inside a single-quoted string vs JSX or double-quoted string

# Strategy: use a state machine to track where we are
# States: NORMAL, IN_SINGLE_QUOTE, IN_DOUBLE_QUOTE, IN_TEMPLATE, IN_JSX_STRING

def fix_js_apostrophes(content):
    result = []
    i = 0
    n = len(content)
    
    # Track if we're inside a JSX element (where strings use " for attributes)
    # We'll track < and > to know if we're in JSX
    
    # Simple approach: parse character by character tracking string state
    state = 'CODE'  # CODE, SINGLE_STR, DOUBLE_STR, TEMPLATE, LINE_COMMENT, BLOCK_COMMENT
    
    while i < n:
        ch = content[i]
        
        if state == 'CODE':
            if i < n-1 and ch == '/' and content[i+1] == '/':
                state = 'LINE_COMMENT'
                result.append(ch)
                i += 1
            elif i < n-1 and ch == '/' and content[i+1] == '*':
                state = 'BLOCK_COMMENT'
                result.append(ch)
                i += 1
            elif ch == '"':
                state = 'DOUBLE_STR'
                result.append(ch)
                i += 1
            elif ch == '`':
                state = 'TEMPLATE'
                result.append(ch)
                i += 1
            elif ch == "'":
                state = 'SINGLE_STR'
                result.append(ch)
                i += 1
            else:
                result.append(ch)
                i += 1
        
        elif state == 'LINE_COMMENT':
            if ch == '\n':
                state = 'CODE'
            result.append(ch)
            i += 1
        
        elif state == 'BLOCK_COMMENT':
            if i < n-1 and ch == '*' and content[i+1] == '/':
                result.append(ch)
                result.append(content[i+1])
                i += 2
                state = 'CODE'
            else:
                result.append(ch)
                i += 1
        
        elif state == 'DOUBLE_STR':
            if ch == '\\':
                # Escaped char - pass through
                result.append(ch)
                if i+1 < n:
                    result.append(content[i+1])
                    i += 2
                else:
                    i += 1
            elif ch == '"':
                state = 'CODE'
                result.append(ch)
                i += 1
            elif ch == '\n':
                # Unterminated string, fall back to CODE
                state = 'CODE'
                result.append(ch)
                i += 1
            else:
                result.append(ch)
                i += 1
        
        elif state == 'TEMPLATE':
            if ch == '\\':
                result.append(ch)
                if i+1 < n:
                    result.append(content[i+1])
                    i += 2
                else:
                    i += 1
            elif ch == '`':
                state = 'CODE'
                result.append(ch)
                i += 1
            else:
                result.append(ch)
                i += 1
        
        elif state == 'SINGLE_STR':
            if ch == '\\':
                # Escaped char - pass through
                result.append(ch)
                if i+1 < n:
                    result.append(content[i+1])
                    i += 2
                else:
                    i += 1
            elif ch == "'":
                # Is this the end of the string, or an apostrophe?
                before = content[i-1] if i > 0 else ''
                after = content[i+1] if i < n-1 else ''
                
                if before.isalpha() and after.isalpha():
                    # This is an apostrophe inside the string - escape it
                    result.append("\\'")
                    i += 1
                    # Stay in SINGLE_STR state
                else:
                    # End of string
                    result.append(ch)
                    i += 1
                    state = 'CODE'
            elif ch == '\n':
                # Newline in single-quoted string - this should not happen in proper JS
                # but JSX might have it in some edge cases
                # End the string tracking
                state = 'CODE'
                result.append(ch)
                i += 1
            else:
                result.append(ch)
                i += 1
    
    return ''.join(result)

fixed = fix_js_apostrophes(content)
print("Fixed length:", len(fixed))

# Check specific lines that had issues
lines_orig = content.split('\n')
lines_fixed = fixed.split('\n')

print("\nChecking known problem lines:")
for lineno in [6354, 6364, 6371, 6372, 6373, 6390, 6439, 6440]:
    if lineno < len(lines_orig):
        print(f"\nLine {lineno+1} (original): {lines_orig[lineno][:150]}")
    if lineno < len(lines_fixed):
        print(f"Line {lineno+1} (fixed):    {lines_fixed[lineno][:150]}")

# Count changes
escaped_orig = content.count("\\'")
escaped_fixed = fixed.count("\\'")
print(f"\nEscaped apostrophes: {escaped_orig} -> {escaped_fixed} (added: {escaped_fixed - escaped_orig})")

with open("src/App.tsx", "w", encoding="utf-8") as f:
    f.write(fixed)

print("Written back to src/App.tsx")
