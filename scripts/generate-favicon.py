#!/usr/bin/env python3
"""
OLUK Favicon Generator
Spiral/Girdap konsepti - Deep Teal zemin, Warm Gold spiral
"""

from PIL import Image, ImageDraw
import math

# OLUK Brand Colors
DEEP_TEAL = (13, 79, 79)      # #0D4F4F
WARM_GOLD = (201, 169, 98)     # #C9A962

def draw_spiral_favicon(size):
    """OLUK spiral favicon çiz"""
    # Create image with deep teal background
    img = Image.new('RGB', (size, size), DEEP_TEAL)
    draw = ImageDraw.Draw(img)
    
    # Calculate parameters
    center_x = size / 2
    center_y = size / 2
    max_radius = size * 0.35
    turns = 2.5
    line_width = max(1, size // 16)
    
    # Draw spiral
    points = []
    steps = 100
    for i in range(steps):
        angle = (i / steps) * turns * 2 * math.pi
        radius = (angle / (turns * 2 * math.pi)) * max_radius
        x = center_x + math.cos(angle) * radius
        y = center_y + math.sin(angle) * radius
        points.append((x, y))
    
    # Draw the spiral line
    for i in range(len(points) - 1):
        draw.line([points[i], points[i + 1]], fill=WARM_GOLD, width=line_width)
    
    # Draw center dot
    dot_radius = max(2, size // 20)
    draw.ellipse(
        [center_x - dot_radius, center_y - dot_radius, 
         center_x + dot_radius, center_y + dot_radius],
        fill=WARM_GOLD
    )
    
    return img

# Generate all favicon sizes
sizes = {
    'favicon-16x16.png': 16,
    'favicon-32x32.png': 32,
    'favicon-48x48.png': 48,
    'apple-touch-icon.png': 180,
    'android-chrome-192x192.png': 192,
    'android-chrome-512x512.png': 512,
}

print("🎨 OLUK Favicon Generator başlatılıyor...")
print(f"   Renk Paleti: Deep Teal {DEEP_TEAL} + Warm Gold {WARM_GOLD}")
print()

for filename, size in sizes.items():
    img = draw_spiral_favicon(size)
    filepath = f'public/{filename}'
    img.save(filepath, 'PNG')
    print(f"✅ {filepath} ({size}x{size}) oluşturuldu")

# Generate multi-resolution favicon.ico
print("\n🔄 favicon.ico oluşturuluyor...")
icon_sizes = [(16, 16), (32, 32), (48, 48)]
icons = [draw_spiral_favicon(size) for size, _ in icon_sizes]
icons[0].save(
    'public/favicon.ico',
    format='ICO',
    sizes=icon_sizes
)
print("✅ public/favicon.ico (16x16, 32x32, 48x48) oluşturuldu")

print("\n🎉 Tüm favicon dosyaları başarıyla oluşturuldu!")
print("\n📋 Oluşturulan Dosyalar:")
print("   • favicon.ico (multi-resolution)")
print("   • favicon-16x16.png")
print("   • favicon-32x32.png")  
print("   • favicon-48x48.png")
print("   • apple-touch-icon.png (180x180)")
print("   • android-chrome-192x192.png")
print("   • android-chrome-512x512.png")
print("\n🚀 Sonraki adım: layout.tsx'e favicon link'lerini ekle")
