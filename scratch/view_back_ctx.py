import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

content = open('src/App.tsx', encoding='utf-8').read()

def show_context(idx, label):
    # Find line number
    line_no = content[:idx].count('\n') + 1
    print(f"=== {label} (approx line {line_no}) ===")
    print(content[idx-100:idx+400])

show_context(324171, "NotFound Back Button")
show_context(325161, "Profile Back Button")
