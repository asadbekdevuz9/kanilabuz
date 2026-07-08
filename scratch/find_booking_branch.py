content = open('src/App.tsx', encoding='utf-8').read()
# Let's search for "Qon olish" or "punki" or "punkti" or "Select branch" or "Filialni tanlang" inside the booking form
idx = content.find('Filialni tanlang')
if idx == -1:
    idx = content.find('booking')
if idx != -1:
    print(content[idx:idx+1500].encode('ascii','replace').decode())
