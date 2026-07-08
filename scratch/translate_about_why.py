# Python script to translate "Why Choose Us" block in App.tsx
import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace block 1: Swiss precision heading
target_1 = "{lang === 'uz' ? 'Shveysariya Aniqligi' : lang === 'ru' ? 'Швейцарская Точность' : 'İsviçre Hassasiyeti'}"
repl_1 = "{getLangTextInline('Shveysariya Aniqligi', 'Швейцарская Точность', 'İsviçre Hassasiyeti', 'Swiss Precision')}"
content = content.replace(target_1, repl_1)

# Replace block 2: Swiss precision subtitle
target_2 = "{lang === 'uz' ? '99.9% Analitik nazorat kafolati' : lang === 'ru' ? '99.9% Гарантия точности' : '%99.9 Analitik Kontrol Garantisi'}"
repl_2 = "{getLangTextInline('99.9% Analitik nazorat kafolati', '99.9% Гарантия точности', '%99.9 Analitik Kontrol Garantisi', '99.9% Analytical Control Guarantee')}"
content = content.replace(target_2, repl_2)

# Let's replace the 4 features in App.tsx:
content = content.replace(
    "title: lang === 'uz' ? 'To\\'liq avtomatizatsiya' : lang === 'ru' ? 'Полная автоматизация' : 'Tam Otomasyon',",
    "title: getLangTextInline('To\\'liq avtomatizatsiya', 'Полная автоматизация', 'Tam Otomasyon', 'Full Automation'),"
)
content = content.replace(
    "desc: lang === 'uz' ? 'Inson omilisiz tekshiruv' : lang === 'ru' ? 'Тестирование без ошибок' : 'İnsan faktörü olmadan test'",
    "desc: getLangTextInline('Inson omilisiz tekshiruv', 'Тестирование без ошибок', 'İnsan faktörü olmadan test', 'Testing without human error')"
)

content = content.replace(
    "title: lang === 'uz' ? 'Sifat nazorati' : lang === 'ru' ? 'Контроль качества' : 'Kalite Kontrolü',",
    "title: getLangTextInline('Sifat nazorati', 'Контроль качества', 'Kalite Kontrolü', 'Quality Control'),"
)
content = content.replace(
    "desc: lang === 'uz' ? 'CAP va ISO 15189' : lang === 'ru' ? 'Стандарты CAP и ISO' : 'CAP ve ISO 15189'",
    "desc: getLangTextInline('CAP va ISO 15189', 'Стандарты CAP и ISO', 'CAP ve ISO 15189', 'CAP and ISO 15189 Standards')"
)

content = content.replace(
    "title: lang === 'uz' ? 'Tezkor natijalar' : lang === 'ru' ? 'Быстрые результаты' : 'Hızlı Sonuçlar',",
    "title: getLangTextInline('Tezkor natijalar', 'Быстрые результаты', 'Hızlı Sonuçlar', 'Fast Results'),"
)
content = content.replace(
    "desc: lang === 'uz' ? '2-4 soat ichida tayyor' : lang === 'ru' ? 'Готовность за 2-4 часа' : '2-4 saat içinde hazır'",
    "desc: getLangTextInline('2-4 soat ichida tayyor', 'Готовность за 2-4 часа', '2-4 saat içinde hazır', 'Ready within 2-4 hours')"
)

content = content.replace(
    "title: lang === 'uz' ? 'Katta qamrov' : lang === 'ru' ? 'Широкий охват' : 'Geniş Kapsam',",
    "title: getLangTextInline('Katta qamrov', 'Широкий охват', 'Geniş Kapsam', 'Wide Coverage'),"
)
content = content.replace(
    "desc: lang === 'uz' ? '180+ turdagi tahlillar' : lang === 'ru' ? 'Более 180 видов анализов' : '180+ çeşit analiz'",
    "desc: getLangTextInline('180+ turdagi tahlillar', 'Более 180 видов анализов', '180+ çeşit analiz', '180+ types of tests')"
)

content = content.replace(
    "{lang === 'uz' ? 'Yillik tahlillar soni' : lang === 'ru' ? 'Анализов в год' : 'Yıllık Analiz Sayısı'}",
    "{getLangTextInline('Yillik tahlillar soni', 'Анализов в год', 'Yıllık Analiz Sayısı', 'Annual tests performed')}"
)

# High technology section titles:
content = content.replace(
    "{lang === 'uz' ? 'YUKSAK TEHNOLOGIYALAR' : lang === 'ru' ? 'ВЫСОКИЕ ТЕХНОЛОГИИ' : 'YÜKSEK TEKNOLOJİLER'}",
    "{getLangTextInline('YUKSAK TEHNOLOGIYALAR', 'ВЫСОКИЕ ТЕХНОЛОГИИ', 'YÜKSEK TEKNOLOJİLER', 'HIGH TECHNOLOGIES')}"
)
content = content.replace(
    "{lang === 'uz' ? 'Zamonaviy Robotlashtirilgan Analizatorlarimiz' : lang === 'ru' ? 'Наше Роботизированное Оборудование' : 'Modern Robotik Analizörlerimiz'}",
    "{getLangTextInline('Zamonaviy Robotlashtirilgan Analizatorlarimiz', 'Наше Роботизированное Оборудование', 'Modern Robotik Analizörlerimiz', 'Our Modern Robotic Analyzers')}"
)
content = content.replace(
    "{lang === 'uz' ? 'Laboratoriyamiz tahlillar aniqligini ta’minlash maqsadida Shveysariya, Yaponiya va AQShning eng so‘nggi diagnostika texnologiyalari bilan jihozlaganmiz.' : lang === 'ru' ? 'Наша лаборатория оснащена современными диагностическими комплексами из Швейцарии, Японии и США для максимальной точности анализов.' : 'Laboratuvarımız, analiz doğruluğunu sağlamak amacıyla İsviçre, Japonya ve ABD\\'den gelen en son tanı teknolojileriyle donatılmıştır.'}",
    "{getLangTextInline('Laboratoriyamiz tahlillar aniqligini ta’minlash maqsadida Shveysariya, Yaponiya va AQShning eng so‘nggi diagnostika texnologiyalari bilan jihozlaganmiz.', 'Наша лаборатория оснащена современными диагностическими комплексами из Швейцарии, Японии и США для максимальной точности анализов.', 'Laboratuvarımız, analiz doğruluğunu sağlamak amacıyla İsviçre, Japonya ve ABD\\'den gelen en son tanı teknolojileriyle donatılmıştır.', 'Our laboratory is equipped with the latest diagnostic technologies from Switzerland, Japan, and the USA to ensure the highest accuracy of tests.')}"
)

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Why Choose Us section updated!")
