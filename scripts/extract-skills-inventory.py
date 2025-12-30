#!/usr/bin/env python3
"""
Extract comprehensive skill inventory from _SKILLS directory.
Creates JSON output with all 130 skills and their relationships.
"""

import os
import json
import re
from pathlib import Path
from typing import Dict, List, Optional

def extract_kimlik_section(content: str) -> Dict:
    """Extract KİMLİK section from skill markdown"""
    kimlik_match = re.search(r'## KİMLİK\n(.*?)(?=\n## [A-Z]|\n---|\Z)', content, re.DOTALL)
    
    if not kimlik_match:
        return {}
    
    kimlik_text = kimlik_match.group(1)
    result = {}
    
    # Extract fields
    patterns = {
        'kod': r'\*\*Kod:\*\*\s*([^\n]+)',
        'rol': r'\*\*Rol:\*\*\s*([^\n]+)',
        'departman': r'\*\*Departman:\*\*\s*([^\n]+)',
        'bagli': r'\*\*Bağlı[ılık]*:\*\*\s*([^\n]+)',
        'seviye': r'\*\*Seviye:\*\*\s*([^\n]+)'
    }
    
    for key, pattern in patterns.items():
        match = re.search(pattern, kimlik_text, re.IGNORECASE)
        if match:
            result[key] = match.group(1).strip()
    
    return result

def parse_bagli_relationships(bagli_str: str) -> List[str]:
    """Parse Bağlı field into list of skill codes"""
    if not bagli_str:
        return []
    
    # Clean up and split by comma
    relationships = []
    for item in bagli_str.split(','):
        item = item.strip()
        # Extract code pattern (e.g., "00-Beyin", "05-PROJE-MÜDÜRÜ")
        code_match = re.match(r'(\d+[a-zA-Z0-9\-\s]*)', item)
        if code_match:
            relationships.append(code_match.group(1).strip())
    
    return relationships

def scan_skills_directory() -> List[Dict]:
    """Scan _SKILLS directory and extract all skill information"""
    skills = []
    skills_dir = Path('/workspaces/oluk-portal/_SKILLS')
    
    # Find all skill markdown files
    skill_files = sorted(
        skills_dir.rglob('[0-9][0-9]*-*.md'),
        key=lambda p: (int(p.stem.split('-')[0]) if p.stem[0].isdigit() else 999)
    )
    
    for file_path in skill_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract KİMLİK
            kimlik = extract_kimlik_section(content)
            
            # Extract title from filename or first heading
            title_match = re.search(r'^# (.+?)$', content, re.MULTILINE)
            title = title_match.group(1) if title_match else file_path.stem
            
            # Get department from directory structure
            departman = file_path.parent.name if file_path.parent.name != '_SKILLS' else 'ROOT'
            
            # Parse relationships
            bagli_list = parse_bagli_relationships(kimlik.get('bagli', ''))
            
            skill = {
                'kod': kimlik.get('kod', file_path.stem),
                'sayı': int(file_path.stem.split('-')[0]) if file_path.stem[0].isdigit() else None,
                'başlık': title,
                'rol': kimlik.get('rol', ''),
                'departman': kimlik.get('departman', departman),
                'bağlı': bagli_list,
                'seviye': kimlik.get('seviye', ''),
                'dosya': str(file_path.relative_to('/workspaces/oluk-portal'))
            }
            
            skills.append(skill)
        
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
            continue
    
    return skills

def create_system_map(skills: List[Dict]) -> Dict:
    """Create comprehensive system map"""
    
    # Group by department
    departments = {}
    for skill in skills:
        dept = skill['departman']
        if dept not in departments:
            departments[dept] = []
        departments[dept].append(skill)
    
    # Build relationship graph
    relationships = {
        'hub_skills': [],
        'coordinators': [],
        'departments': {},
        'dependencies': {}
    }
    
    # Identify hub skills (00, 05, 30, 130)
    for skill in skills:
        if skill['sayı'] in [0, 5, 30, 130]:
            relationships['hub_skills'].append(skill['kod'])
        
        if skill['sayı'] in [5, 30, 130]:
            relationships['coordinators'].append(skill['kod'])
    
    # Build dependency graph
    for skill in skills:
        relationships['dependencies'][skill['kod']] = skill['bağlı']
    
    # Department map
    for dept, dept_skills in departments.items():
        relationships['departments'][dept] = {
            'count': len(dept_skills),
            'skills': [s['kod'] for s in dept_skills],
            'breakdown': [f"{s['sayı']}-{s['kod'].split('-', 1)[1] if '-' in s['kod'] else s['kod']}" for s in dept_skills]
        }
    
    return relationships

def main():
    print("🔍 Extracting OLUK Skill Inventory...")
    
    skills = scan_skills_directory()
    system_map = create_system_map(skills)
    
    # Create output
    output = {
        'metadata': {
            'total_skills': len(skills),
            'timestamp': __import__('datetime').datetime.now().isoformat(),
            'version': '1.0'
        },
        'skills': skills,
        'system_map': system_map,
        'departments_summary': {
            dept: {
                'count': info['count'],
                'skills': info['skills']
            }
            for dept, info in system_map['departments'].items()
        }
    }
    
    # Write JSON
    output_path = Path('/workspaces/oluk-portal/_BRAIN/SISTEM_ENVANTERI.json')
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    
    print(f"✅ Inventory created: {output_path}")
    print(f"   Total skills: {output['metadata']['total_skills']}")
    print(f"   Departments: {len(output['system_map']['departments'])}")
    print(f"   Hub skills: {len(output['system_map']['hub_skills'])}")
    print(f"   Coordinators: {len(output['system_map']['coordinators'])}")
    
    # Print department breakdown
    print("\n📊 Department Breakdown:")
    for dept in sorted(output['system_map']['departments'].keys()):
        info = output['system_map']['departments'][dept]
        print(f"   {dept}: {info['count']} skills")

if __name__ == '__main__':
    main()
