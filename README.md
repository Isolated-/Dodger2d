# Dodger Game

A super basic 2d game written in pure JavaScript.

## Todo

- Encapsulate logic for reuse across games
- Implement different sizing in rows so player is forced to move around
- Implement more challenges for player, for example increase game speed over time till rediculous.
- Touch support (mobile)
- Implement shooting, when circle hits block it removes it, add yellow collectables - bullets

## Refactor

- Remove all ctx references, replace with util function
- Add browserify, update init.js to reflect Dodger2d namespace
- Restructure files into directories
- Improve GameObject code (reduce the amount of type checking, move this to Player/Collectable/Block)
- Add autobuild to Netify

## Implementation Notes

### GameObjects

Everything on screen (except text) is a GameObject, these can be 1 of three types: Block, Collectable, Character. Essentially these are just Rectangles when rendered.

GameObjects will require a GameObjectRenderer in order to render them on screen, however this may be added in later versions.
