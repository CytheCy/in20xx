#!/bin/bash
cd "$(dirname "$0")"
echo "Starting local server for In 20xx website..."
echo "Open your browser to: http://localhost:8000"
echo "Press Ctrl+C to stop."
xdg-open http://localhost:8000/index.html &
python3 -m http.server 8000
