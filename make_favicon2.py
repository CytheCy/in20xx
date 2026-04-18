from PIL import Image, ImageDraw, ImageFont

img = Image.new('RGBA', (512, 512), color=(17, 24, 32, 255))
d = ImageDraw.Draw(img)

try:
    font = ImageFont.truetype("orbitron.woff", 220)
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
    
    # Save as ICO
    icon_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
    img.save("favicon.ico", sizes=icon_sizes)
    print("Success")
except Exception as e:
    print(f"Error: {e}")
