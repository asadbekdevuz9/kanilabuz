import subprocess
import difflib

# Re-run apply_all_translations_v2.py to get the modified state
subprocess.run(["python", "scratch/apply_all_translations_v2.py"])

with open("src/App.tsx", "r", encoding="utf-8") as f:
    modified_content = f.read()

# Revert App.tsx to get clean state
subprocess.run(["git", "checkout", "src/App.tsx"])

with open("src/App.tsx", "r", encoding="utf-8") as f:
    clean_content = f.read()

# Generate unified diff
diff = list(difflib.unified_diff(
    clean_content.splitlines(),
    modified_content.splitlines(),
    fromfile='clean',
    tofile='modified',
    n=3
))

print("Diff length:", len(diff))

# Let's search the diff for large deletion blocks (e.g. lines starting with '-' that are consecutive)
deletions = []
consec_del = []
for line in diff:
    if line.startswith('-') and not line.startswith('---'):
        consec_del.append(line)
    else:
        if len(consec_del) > 20: # Large block of deletions
            deletions.append(list(consec_del))
        consec_del = []
if len(consec_del) > 20:
    deletions.append(list(consec_del))

print("Number of large deletion blocks (>20 lines):", len(deletions))
for idx, block in enumerate(deletions):
    print(f"\n--- BLOCK {idx+1} (Size: {len(block)}) ---")
    # Print first 5 and last 5 lines of the block safely
    for l in block[:5]:
        print("DEL:", l[:100].encode('ascii', 'ignore').decode('ascii'))
    print("...")
    for l in block[-5:]:
        print("DEL:", l[:100].encode('ascii', 'ignore').decode('ascii'))
