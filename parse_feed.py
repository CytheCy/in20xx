import xml.etree.ElementTree as ET

tree = ET.parse('feed.xml')
root = tree.getroot()

for item in root.findall('.//item'):
    if 'd7bf1ba4-fd82-4830-a073-14a4c5383bf0' in ET.tostring(item, encoding='unicode'):
        desc = item.find('description').text
        print("RAW DESC:", desc[:800])
        print("LINK:", item.find('link').text)
        break
