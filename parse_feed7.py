import xml.etree.ElementTree as ET

tree = ET.parse('feed.xml')
root = tree.getroot()

for item in root.findall('.//item'):
    if 'f9c3e821-1e2b-46a1-83e9-c42cb3f3a6b8' in ET.tostring(item, encoding='unicode'):
        desc = item.find('description').text
        print("RAW DESC:", desc[:800])
        break
