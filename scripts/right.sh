#!/bin/bash

TIME=$(date +'%I:%M%p')
BATTERY_LEVEL="$(pmset -g batt | grep -o '[0-9]*%')"

getPowerSource() {
  if pmset -g batt | grep AC &> /dev/null; then
    echo "charging"
  else
    echo "battery"
  fi
}

SPOTIFY_ON="$(ps -ax | awk '/[S]potify/{print $1}')"

getArtist() {
  echo `osascript -e 'tell application "Spotify" to artist of current track as string'`;
}

getTrack() {
  echo `osascript -e 'tell application "Spotify" to name of current track as string'`;
}

JSON_FMT='{"time": "%s", "batteryLevel":"%s", "powerSource": "%s", "currentlyPlaying":"%s"}\n'

if [ -n "$SPOTIFY_ON" ]
then
  printf "$JSON_FMT" "$TIME" "$BATTERY_LEVEL" "$(getPowerSource)" "$(getArtist) - $(getTrack)"
else
  printf "$JSON_FMT" "$TIME" "$BATTERY_LEVEL" "$(getPowerSource)" ""
fi
