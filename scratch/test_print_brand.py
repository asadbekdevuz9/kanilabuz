with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

idx = 405882
idx_end = content.find('}', idx) + 1
snippet = content[idx:idx_end]
print(snippet.encode('ascii', 'backslashreplace').decode('ascii'))
