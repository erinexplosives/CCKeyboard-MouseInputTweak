# CrossCode Keyboard & Mouse Input Tweak

This mod is dependant on dmitmel's [CrossCode Tweak Pack](https://github.com/dmitmel/crosscode-tweak-pack), 
specifically for defining/binding Mouse Inputs 4 and 5, adjusting their default value from Mouse 1.

# Install Instructions

1)	Install [CCLoader](https://github.com/CCDirectLink/CCLoader) into your CrossCode directory.
2)	Install [CrossCode Tweak Pack]([https://github.com/CCDirectLink/CCLoader](https://github.com/dmitmel/crosscode-tweak-pack)) into `assets/mods`.
3)	Install [Input-api](https://github.com/CCDirectLink/input-api) into `assets/mods`.
3)	Download the release, place CCKeyboard-MouseInputMod-1.0.0.ccmod into `assets/mods`.

# What This Mod Does

-   Binds 'Melee' to Mouse 5
-   Binds 'Special' to Mouse 4
-   Binds 'Guard' to Mouse 2 (right click)
-   Adjusts the "menuBack" function in class sc.Control to allow for the 'Guard' input to go backwards in menus. 
    This essentially only removes dashing from Mouse 2, without altering other game functionality of standard Mouse 2

It is recommended to bind 'Dash' to your space bar, and disable the "Melee Mouse Input" option in the Interface tab.

# Alter Binding Instructions

1) Download source zip
2) Alter bindings under poststart() in plugin.js
3) Run `bash ./build.sh` to bundle the mod.
