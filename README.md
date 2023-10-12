# Erin's K&M Input Mod

This mod is dependant on dmitmel's CrossCode Tweak Pack (https://github.com/dmitmel/crosscode-tweak-pack), 
specifically for defining/binding mouse inputs 4 and 5, adjusting their default value from mouse 1.

# Install Instructions

1)	Install [CCLoader](https://github.com/CCDirectLink/CCLoader) into your CrossCode directory (`assets/mods`).
2)	Install [CrossCode Tweak Pack](https://github.com/CCDirectLink/CCLoader) into your mod directory.
3)	Install [Input-api](https://github.com/CCDirectLink/input-api) into your mod directory.
3)	Download a release, place CCKeyboard-MouseInputMod-1.0.0.ccmod into your mod directory.

# What This Mod Does

-   Binds 'Melee' to Mouse 5
-   Binds 'Special' to Mouse 4
-   Binds 'Guard' to Mouse 2 (right click)
-   Adjusts the "menuBack" function in class sc.Control to allow for the 'Guard' input to go backwards in menus. 
    This essentially only removes dashing from Mouse 2, without altering other game functionality of standard Mouse 2

It is recommended to bind 'Dash' to your space bar, and disable the "Melee Mouse Input" option in the Interface tab.

# Build Instructions

1) Download source zip
2) Alter bindings under poststart() in plugin.js
3) Run `bash ./build.sh` to build the mod.
