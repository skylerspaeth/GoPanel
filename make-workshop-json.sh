#!/bin/bash

echo "Your maps are:"
for STEAM_FILE_ID in $(ls -1 ~/.steam/steam/steamapps/workshop/content/730/ | xargs); do
  curl -Ss --location 'https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/' \
  --header 'Content-Type: application/x-www-form-urlencoded' --data-urlencode 'itemcount=1' \
  --data-urlencode "publishedfileids%5B0%5D=$STEAM_FILE_ID" | jq -r '.response.publishedfiledetails[0].title'
done
