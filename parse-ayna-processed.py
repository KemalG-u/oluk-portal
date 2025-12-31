#!/usr/bin/env python3
"""
Convert AYNA_ALL_PROCESSED_COMPLETE.md (pipeline output) into TypeScript ayna-data.ts format
"""

import re
import json
from pathlib import Path

input_file = Path('/workspaces/oluk-portal/upload/AYNA_ALL_PROCESSED_COMPLETE.md')
output_file = Path('/workspaces/oluk-portal/src/lib/ayna-data-processed.ts')

# Read processed content
content = input_file.read_text(encoding='utf-8')

# Split by file markers
file_pattern = r'# 🟢 YAYINA HAZIR - v2\.1\.0\s+\*\*Yayın Tarihi\*\*:[^\n]+\n\s+\*\*Dosya\*\*: ([A-Za-z0-9_]+\.md)'
files = re.split(file_pattern, content)

print(f"Found {len(files)} segments")

# Extract content for each file
data = {}
for i in range(1, len(files), 2):
    if i+1 < len(files):
        filename = files[i].strip()
        section_content = files[i+1].strip()
        data[filename] = section_content
        print(f"✓ {filename}: {len(section_content)} chars")

# Organize by lesson/session
lessons = {}  # AYNA_DERS_X_Y -> content
sessions = {}  # AYNA_SEANS_X_Y -> content

for fname, fcontent in data.items():
    if 'DERS' in fname:
        lessons[fname] = fcontent
    elif 'SEANS' in fname:
        sessions[fname] = fcontent

print(f"\nExtracted: {len(lessons)} lessons, {len(sessions)} sessions")
print(f"\nLessons: {sorted(lessons.keys())}")
print(f"\nSessions: {sorted(sessions.keys())}")

# Show sample (first 500 chars of first lesson)
if lessons:
    first_lesson_key = sorted(lessons.keys())[0]
    print(f"\n=== Sample: {first_lesson_key} (first 500 chars) ===")
    print(lessons[first_lesson_key][:500])
    print("...")

print(f"\n✅ Parsing complete. Ready to integrate into ayna-data.ts")
print(f"   Lessons: {sorted(lessons.keys())}")
print(f"   Sessions: {sorted(sessions.keys())}")
