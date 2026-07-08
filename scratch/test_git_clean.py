import subprocess
import re

subprocess.run(["git", "checkout", "src/App.tsx"])

with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

print("File length:", len(content))
print("MAXFIYLIK SIYOSATI count:", content.count("MAXFIYLIK SIYOSATI"))

h_priv_title = re.compile(r'\{\s*lang\s*===\s*\'uz\'\s*\?\s*\'MAXFIYLIK SIYOSATI\'.*?\}', re.DOTALL)
print("Regex match count:", len(h_priv_title.findall(content)))
