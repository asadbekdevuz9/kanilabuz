with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all unescaped Qumqo'rg'on in en properties using double quotes for value
content = content.replace("en: 'Qumqo'rg'on District Medical Association Branch'", 'en: "Qumqo\'rg\'on District Medical Association Branch"')
content = content.replace("en: 'Inside the territory of Qumqo'rg'on District Medical Association'", 'en: "Inside the territory of Qumqo\'rg\'on District Medical Association"')

# Replace all unescaped Jarqo'rg'on in en properties using double quotes for value
content = content.replace("en: 'Jarqo'rg'on District Medical Association Branch'", 'en: "Jarqo\'rg\'on District Medical Association Branch"')
content = content.replace("en: 'Inside the territory of Jarqo'rg'on District Medical Association'", 'en: "Inside the territory of Jarqo\'rg\'on District Medical Association"')

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Quotes fixed successfully!")
