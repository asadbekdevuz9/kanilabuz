import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

content = open('src/App.tsx', encoding='utf-8').read()
# Let's search for "Seminar va nazariy" or similar array
import re
matches = [m.start() for m in re.finditer(r'Seminar\s+va\s+nazariy', content)]
for idx in matches:
    print(f"Found match at index {idx}:")
    print(content[max(0, idx-100):idx+400].encode('ascii','replace').decode())
    print("-" * 50)
