import re

with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Let's test different parts of the regex
pats = [
    r"Ilmiy va texnik",
    r"\'Ilmiy va texnik",
    r"\'Ilmiy va texnik ma.*?lutlar\'",
    r"\'Ilmiy va texnik ma.*?lumotlar\'",
    r"lang\s*===\s*\'uz\'\s*\?\s*\'Ilmiy va texnik",
    r"\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ilmiy va texnik"
]

for p in pats:
    pattern = re.compile(p)
    matches = pattern.findall(content)
    print(f"Pattern `{p}` match count: {len(matches)}")
