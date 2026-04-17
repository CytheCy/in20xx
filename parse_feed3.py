import xml.etree.ElementTree as ET

tree = ET.parse('feed.xml')
root = tree.getroot()

for item in root.findall('.//item'):
    if 'dca81734-9e97-4692-9b8d-bc62dda7c2a4' in ET.tostring(item, encoding='unicode'):
        desc = item.find('description').text
        print("RAW DESC:", desc[:800])
        break
