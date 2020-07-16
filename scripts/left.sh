#!/bin/bash

SPACES_PRIMARY=$(/usr/local/bin/yabai -m query --spaces --display 1)
LENGTH=${#SPACES_PRIMARY}

if [[ $LENGTH -gt 1 ]]
then
    echo $SPACES_PRIMARY
else
    sleep 1
    SPACES_PRIMARY_2=$(/usr/local/bin/yabai -m query --spaces --display 1)
    echo $SPACES_PRIMARY_2
fi
