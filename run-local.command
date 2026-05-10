#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

PORT="${PORT:-4173}"
URL="http://127.0.0.1:${PORT}/"

if command -v open >/dev/null 2>&1; then
  (sleep 1 && open "$URL") &
fi

echo "Portfolio Lab is running at ${URL}"
echo "Press Ctrl+C to stop."
python3 -m http.server "$PORT"
