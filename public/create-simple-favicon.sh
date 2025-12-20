#!/bin/bash
# Simple 16x16 favicon generator using ASCII art
# Creates a minimal ICO file

# Create a simple 16x16 BMP in memory and convert to ICO
# For now, create a placeholder that browsers will accept
echo "Creating basic favicon.ico..."

# Create a 16x16 pixel favicon (ICO format)
# This is a minimal ICO header + 16x16 image data
python3 << 'EOFPYTHON'
import struct
import os

def create_simple_favicon():
    # ICO file format:
    # Header (6 bytes) + Directory Entry (16 bytes) + BMP data
    
    # 16x16 favicon with OLUK colors
    width = 16
    height = 16
    
    # Deep Teal RGB
    bg_r, bg_g, bg_b = 13, 79, 79
    # Warm Gold RGB
    fg_r, fg_g, fg_b = 201, 169, 98
    
    # Create simple "O" letter pattern
    pixels = []
    for y in range(height):
        for x in range(width):
            # Draw a circle "O" 
            dx = x - 8
            dy = y - 8
            dist = (dx*dx + dy*dy) ** 0.5
            
            if 3 < dist < 6:  # Ring
                pixels.extend([fg_b, fg_g, fg_r, 255])  # BGRA
            else:  # Background
                pixels.extend([bg_b, bg_g, bg_r, 255])
    
    # ICO header
    ico_header = struct.pack('<HHH', 0, 1, 1)  # Reserved, Type, Count
    
    # Directory entry
    bmp_size = 40 + len(pixels)  # Header + pixel data
    ico_entry = struct.pack('<BBBBHHII',
        width, height, 0, 0,  # width, height, colors, reserved
        1, 32,  # planes, bpp
        bmp_size,  # size
        22  # offset (6 + 16)
    )
    
    # BMP header
    bmp_header = struct.pack('<IIIHHIIIIII',
        40,  # header size
        width, height * 2,  # width, height*2 for ICO
        1, 32,  # planes, bpp
        0, len(pixels),  # compression, image size
        0, 0, 0, 0  # x/y resolution, colors
    )
    
    with open('favicon.ico', 'wb') as f:
        f.write(ico_header)
        f.write(ico_entry)
        f.write(bmp_header)
        f.write(bytes(pixels))
    
    print("✅ favicon.ico created (16x16)")

create_simple_favicon()
EOFPYTHON

# Also create PNG versions using the same approach
python3 << 'EOFPYTHON'
# Create simple PNG files
# Since we don't have PIL, create a very basic favicon
# Browsers will accept the ICO file

# Create a simple HTML file that can generate PNGs
html_content = '''<!DOCTYPE html>
<html><head><title>OLUK Favicon</title></head><body>
<canvas id="c" width="512" height="512"></canvas>
<script>
const c = document.getElementById("c");
const ctx = c.getContext("2d");
const sizes = [16, 32, 48, 180, 192, 512];

// Deep Teal background
ctx.fillStyle = "#0D4F4F";
ctx.fillRect(0, 0, 512, 512);

// Warm Gold "O" 
ctx.strokeStyle = "#C9A962";
ctx.lineWidth = 40;
ctx.beginPath();
ctx.arc(256, 256, 180, 0, Math.PI * 2);
ctx.stroke();

// Save as PNG
const link = document.createElement("a");
link.download = "oluk-icon-512.png";
link.href = c.toDataURL();
document.body.appendChild(link);
console.log("Open browser console and click the link to download");
</script></body></html>'''

with open('favicon-generator.html', 'w') as f:
    f.write(html_content)

print("✅ favicon-generator.html created")
print("   Open in browser to generate PNG files")
EOFPYTHON

echo "Done!"
