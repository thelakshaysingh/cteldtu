import os
import glob
import re

def resolve_file(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()
    except Exception as e:
        print(f"Could not read {filepath}: {e}")
        return

    # Regular expression to match standard git conflict markers
    # We want to keep the "theirs" part (between ======= and >>>>>>> ...)
    # <<<<<<< HEAD ... ======= ... >>>>>>> ...
    
    # We need to be careful with newlines
    pattern = re.compile(r'<<<<<<<.*?\n(.*?)=======\n(.*?)\n>>>>>>>.*?\n', re.DOTALL)
    
    new_content = content
    # Replace the whole block with group(2) which is the "theirs" part
    # Wait, the user selected "Accept incoming changes (lakshay)".
    # The markers are <<<<<<< HEAD, =======, >>>>>>> lakshay
    # So group(2) is the incoming change.
    new_content, count = pattern.subn(r'\2\n', new_content)
    
    if count > 0:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Resolved {count} conflicts in {filepath}")

# Find all files with conflict markers
result = os.popen("git grep -l '<<<<<<< HEAD'").read().splitlines()

for file in result:
    if os.path.isfile(file):
        resolve_file(file)

