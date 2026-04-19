#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

docker compose up -d

CONTAINER="$(docker compose ps -q wordpress)"
if [ -z "$CONTAINER" ]; then
  echo "wordpress container not found" >&2
  exit 1
fi

echo "Waiting for WordPress to populate wp-content..."
until docker exec "$CONTAINER" test -d /var/www/html/wp-content/themes/twentytwentyfive 2>/dev/null \
   || docker exec "$CONTAINER" test -d /var/www/html/wp-content/plugins/akismet 2>/dev/null; do
  sleep 1
done

THEMES=(twentytwentyfive twentytwentyfour twentytwentythree)
PLUGINS=(akismet hello.php)

for theme in "${THEMES[@]}"; do
  rm -rf "src/themes/$theme"
done

for plugin in "${PLUGINS[@]}"; do
  rm -rf "src/plugins/$plugin"
done

echo "Removed default themes: ${THEMES[*]}"
echo "Removed default plugins: ${PLUGINS[*]}"