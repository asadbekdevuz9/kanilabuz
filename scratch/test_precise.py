with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

idx_priv = content.find("activeTab === 'privacy' && (")
idx_list_priv = content.find('{[', idx_priv)
idx_end_priv = content.find('.map((section, idx) => (', idx_priv)

print("Privacy tab check:")
print("idx_priv:", idx_priv)
print("idx_list_priv:", idx_list_priv)
print("idx_end_priv:", idx_end_priv)
print("Snippet at list:", repr(content[idx_list_priv:idx_list_priv+100].encode('ascii', 'ignore').decode('ascii')))

idx_terms = content.find("activeTab === 'terms' && (")
idx_list_terms = content.find('{[', idx_terms)
idx_end_terms = content.find('.map((section, idx) => (', idx_terms)

print("\nTerms tab check:")
print("idx_terms:", idx_terms)
print("idx_list_terms:", idx_list_terms)
print("idx_end_terms:", idx_end_terms)
print("Snippet at list:", repr(content[idx_list_terms:idx_list_terms+100].encode('ascii', 'ignore').decode('ascii')))
