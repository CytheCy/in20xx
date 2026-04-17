import xml.etree.ElementTree as ET

tree = ET.parse('feed.xml')
root = tree.getroot()
ns = {'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'}

for item in root.findall('.//item'):
    if '9393e4bd-4af9-4a8b-8d85-03cd6414098b' in ET.tostring(item, encoding='unicode'):
        print("TITLE:", item.find('title').text)
        ep = item.find('itunes:episode', ns)
        print("EP:", ep.text if ep is not None else 'N/A')
        desc = item.find('description').text
        print("RAW DESC:", desc[:800] if desc else 'N/A')
        duration = item.find('itunes:duration', ns)
        print("DURATION:", duration.text if duration is not None else 'N/A')
        pubdate = item.find('pubDate')
        print("PUBDATE:", pubdate.text if pubdate is not None else 'N/A')
        break
