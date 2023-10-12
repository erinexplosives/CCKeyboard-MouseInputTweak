#!/bin/bash

version="$(jq -r <cckeyboard-mouseinputmod.json .version)";
filename="CCKeyboard-MouseInputMod-$version.ccmod";

[ -f "$filename" ] && rm "$filename"
zip -r "$filename" cckeyboard-mouseinputmod.json package.json plugin.js