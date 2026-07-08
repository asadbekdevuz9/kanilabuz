import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Fix all specific known issues by replacing the exact problematic strings
fixes = [
    # Line 6395: English "customers'" - apostrophe in English possessive
    (
        "'Kani-Lab uses advanced encryption technologies and secure server infrastructure to protect customers' personal data from unauthorized access, modification, destruction, or disclosure.'",
        "'Kani-Lab uses advanced encryption technologies and secure server infrastructure to protect customers\\' personal data from unauthorized access, modification, destruction, or disclosure.'"
    ),
    # Also fix line 6395 alternative in Terms section if present
    # (same string might appear elsewhere)
]

count = 0
for old, new in fixes:
    if old in content:
        content = content.replace(old, new)
        count += 1
        print(f"Fixed: {old[:80]}...")
    else:
        print(f"NOT FOUND: {old[:80]}...")

print(f"\nTotal fixes applied: {count}")

with open("src/App.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Written back.")
