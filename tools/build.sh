#!/bin/sh
# Rebuild the site from the repo root:  sh tools/build.sh
# Needs Node (npm install once) and Python 3.
set -e
cd "$(dirname "$0")/.."
python3 tools/build_data.py
npx esbuild src/main.js --bundle --minify --format=esm --target=es2022 --outfile=museum.js --log-level=warning
