import subprocess

# Re-run apply_all_translations_v2.py to get the modified state
subprocess.run(["python", "scratch/apply_all_translations_v2.py"])

with open("src/App.tsx", "r", encoding="utf-8") as f:
    modified_lines = f.readlines()

# Revert App.tsx to get clean state
subprocess.run(["git", "checkout", "src/App.tsx"])

with open("src/App.tsx", "r", encoding="utf-8") as f:
    clean_lines = f.readlines()

print(f"Clean lines: {len(clean_lines)}, Modified lines: {len(modified_lines)}")

# Find the first mismatching line
mismatch_found = False
for i in range(min(len(clean_lines), len(modified_lines))):
    if clean_lines[i] != modified_lines[i]:
        print(f"Divergence starts at line {i+1}:")
        print("CLEAN:", repr(clean_lines[i].strip()))
        print("MODIFIED:", repr(modified_lines[i].strip()))
        mismatch_found = True
        break

if not mismatch_found:
    print("No mismatch found in the overlapping range.")
