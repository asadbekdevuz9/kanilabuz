import re
import subprocess

subprocess.run(["git", "checkout", "src/App.tsx"])
with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

brand_pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'KANI-LAB\s*-\s*eng\s*ilg.*?or.*?tarmog.*?i\.\'.*?\}', re.DOTALL)

res, count = brand_pattern.subn("REPLACED", content)
print(f"Match count: {count}, MAXFIYLIK count after sub: {res.count('MAXFIYLIK SIYOSATI')}")
