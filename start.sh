#!/bin/bash
cd "$(dirname "$0")"
if command -v hugo >/dev/null 2>&1; then
  hugo --quiet
elif command -v podman >/dev/null 2>&1; then
  echo "Hugo is not installed; building the Read section with Podman..."
  podman run --rm -v "$PWD:/src:Z" -w /src docker.io/hugomods/hugo:exts-0.150.0 hugo --quiet
else
  echo "Hugo is required to generate the Read section."
  exit 1
fi
echo "Starting local server for In 20xx website..."
echo "Open your browser to: http://localhost:8000"
echo "Press Ctrl+C to stop."
xdg-open http://localhost:8000/index.html &
python3 -m http.server 8000
