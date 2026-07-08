import sys, io, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open(r'c:\Users\Администратор\Downloads\kanilab\src\App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all targetIds in order
ids = re.findall(r'targetId:\s*"([^"]+)"', content)
print("Tour step order:")
for i, tid in enumerate(ids):
    print(f"  {i+1}. {tid}")
