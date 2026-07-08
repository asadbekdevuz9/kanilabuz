import re
import subprocess

subprocess.run(["git", "checkout", "src/App.tsx"])
with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Without re.DOTALL
pattern = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'Ma\\\'lumotlar yuklanmoqda\.\.\.\'.*?\}')

res, count = pattern.subn("REPLACED", content)
print(f"Match count (no DOTALL): {count}")
print("CAP index after sub:", res.find('CAP Sertifikati (2020)'))
