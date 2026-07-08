import re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

icons = {
    'navbar-logo':            '🏥',
    'navbar-link-home':       '🏠',
    'navbar-dropdown-about':  '🔬',
    'navbar-services':        '🧪',
    'navbar-dropdown-team':   '👨‍⚕️',
    'navbar-link-faq':        '❓',
    'navbar-link-news':       '📰',
    'navbar-dropdown-contact':'📞',
    'lang-switcher':          '🌐',
    'theme-toggle':           '🌙',
    'navbar-check-receipt':   '🔍',
    'book-appointment-navbar':'📅',
    'footer-brand':           '✨',
    'footer-info':            '📍',
    'footer-contact':         '📬',
    'footer-links':           '🔗',
    'footer-copyright':       '©️',
}

with open(r'c:\Users\Администратор\Downloads\kanilab\src\App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# For each targetId, insert icon field before desc field if not already present
for tid, icon in icons.items():
    # Pattern: targetId: "xxx", then eventually desc: {
    # We'll insert icon after the closing } of title block, before desc:
    # Find each occurrence of this targetId in tourSteps
    pattern = r'(targetId:\s*"' + re.escape(tid) + r'".*?)(      desc:\s*\{)'
    replacement = r'\g<1>      icon: "' + icon + r'",\n\g<2>'
    new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    if new_content != content:
        content = new_content
        print(f"Added icon {icon} for {tid}")
    else:
        print(f"SKIP (already has icon or pattern not found): {tid}")

with open(r'c:\Users\Администратор\Downloads\kanilab\src\App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done!")
