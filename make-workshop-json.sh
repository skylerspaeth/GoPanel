#!/bin/bash -e

# this script generates a JSON file with a list of all the CS:GO workshop maps in
# your local steam library which (should) contain every map you're subscribed to

# you can omit API key from curl, but may hit rate limit sooner
STEAM_API_KEY=$(jq -r .steam_api_key config.json)

JSON_FILE="workshop-maps.json"

# allow user to cancel if workshop map JSON already exists
if [[ -f "$JSON_FILE" ]]; then
 read -p "$JSON_FILE already exists. Overwrite it? [Y/n]: " OW; OW="${OW:Y}"
 [[ "${OW^^}" == "N" ]] && exit 0
fi

read -p "Path to steam library [$HOME/.steam]: " SL_PATH; SL_PATH="${SL_PATH:=$HOME/.steam}"

echo
echo "Fetching info for all workshop maps in library..."
echo "This may take some time if you're subscribed to lots of maps."
echo

for STEAM_FILE_ID in $(ls -1 $SL_PATH/steam/steamapps/workshop/content/730/ | xargs); do
  curl -Ss --location 'https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode "key=$STEAM_API_KEY" \
    --data-urlencode "itemcount=1" \
    --data-urlencode "publishedfileids%5B0%5D=$STEAM_FILE_ID" | \
  jq -r '.response.publishedfiledetails[0] | {title, preview_url}'
done | jq --slurp . > workshop-maps.json

echo "Success! Output saved to '$JSON_FILE'."
