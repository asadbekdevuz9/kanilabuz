import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

content = open('src/App.tsx', encoding='utf-8').read()
# Let's search around index 329448
start_idx = max(0, 329448 - 3000)
end_idx = min(len(content), 329448 + 3000)
print(content[start_idx:end_idx].encode('ascii','replace').decode())
