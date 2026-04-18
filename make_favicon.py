import urllib.request
import zipfile
import os
from PIL import Image, ImageDraw, ImageFont

# Download Orbitron font
url = "https://fonts.google.com/download?family=Orbitron"
urllib.request.urlretrieve(url, "Orbitron.zip")

with zipfile.ZipFile("Orbitron.zip", 'r') as zip_ref:
    zip_ref.extractall("orbitron_font")

font_path = "orbitron_font/static/Orbitron-Black.ttf"

# Generate 512x512 image
img = Image.new('RGBA', (512, 512), color=(6, 10, 12, 255))
d = ImageDraw.Draw(img)

try:
    font = ImageFont.truetype(font_path, 200)
    # Get bounding box
    bbox = d.textbbox((0, 0), "20xx", font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    
    # Draw text
    x = (512 - text_w) / 2 - bbox[0]
    y = (512 - text_h) / 2 - bbox[1]
    d.text((x, y), "20xx", font=font, fill=(46, 207, 191, 255))
    
    # Save as PNG
    img.save("favicon.png")
    
    # Resize and save as ICO
    icon_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
    img.save("favicon.ico", sizes=icon_sizes)
    print("Success")
except Exception as e:
    print(f"Error: {e}")
