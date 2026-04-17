import xml.etree.ElementTree as ET

tree = ET.parse('feed.xml')
root = tree.getroot()

for item in root.findall('.//item'):
    if 'd06cbe6d-6059-4511-be22-92fc81bde175' in ET.tostring(item, encoding='unicode'):
        desc = item.find('description').text
        print("RAW DESC:", desc[:800])
        break
