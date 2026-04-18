from PIL import Image

img = Image.open('podcast_cover.png').convert('RGB')
w, h = img.size

# Find bounding box of teal-ish pixels
min_x, min_y = w, h
max_x, max_y = 0, 0

for y in range(h):
    for x in range(w):
        r, g, b = img.getpixel((x, y))
        # Teal is roughly r<100, g>150, b>150
        if r < 100 and g > 150 and b > 150:
            if x < min_x: min_x = x
            if x > max_x: max_x = x
            if y < min_y: min_y = y
            if y > max_y: max_y = y

print(f"Teal bounding box: {min_x}, {min_y}, {max_x}, {max_y}")

if min_x < max_x and min_y < max_y:
    crop = img.crop((min_x, min_y, max_x, max_y))
    cw, ch = crop.size
    
    # Pad to square
    size = max(cw, ch) + 40
    new_img = Image.new('RGB', (size, size), (6, 10, 12))
    new_img.paste(crop, ((size - cw) // 2, (size - ch) // 2))
    
    new_img.save('favicon.png')
    
    # Save as ICO
    icon_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
    new_img.save('favicon.ico', format='ICO', sizes=icon_sizes)
    print("Favicon generated successfully.")
else:
    print("Could not find teal pixels.")
