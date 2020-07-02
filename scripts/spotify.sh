#!/bin/bash

SPOTIFY_ON="$(ps -ax | awk '/[S]potify/{print $1}')"

getArtist() {
  echo `osascript -e 'tell application "Spotify" to artist of current track as string'`;
}

getTrack() {
  echo `osascript -e 'tell application "Spotify" to name of current track as string'`;
}

if [ -n "$SPOTIFY_ON" ]
then
  echo -e "$(getArtist) - $(getTrack)"
fi
