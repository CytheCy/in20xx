import sys
from PIL import Image

def get_ansi_color_code(r, g, b):
    if r == g == b:
        if r < 8:
            return 16
        if r > 248:
            return 231
        return round(((r - 8) / 247) * 24) + 232
    return 16 + (36 * round(r / 255 * 5)) + (6 * round(g / 255 * 5)) + round(b / 255 * 5)

def get_color_escape(r, g, b, background=False):
    return f'\033[{"48" if background else "38"};5;{get_ansi_color_code(r, g, b)}m'

img = Image.open('podcast_cover.png')
img = img.convert('RGB')
img = img.resize((40, 20)) # small preview

for y in range(img.height):
    line = ""
    for x in range(img.width):
        r, g, b = img.getpixel((x, y))
        line += get_color_escape(r, g, b, True) + "  "
    print(line + '\033[0m')
