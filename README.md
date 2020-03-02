# Dodger Game

A super basic 2d game written in pure JavaScript.

## Todo

- Encapsulate logic for reuse across games
- Implement different sizing in rows so player is forced to move around
- Implement more challenges for player, for example increase game speed over time till rediculous.
- Touch support (mobile)
- Implement shooting, when circle hits block it removes it, add yellow collectables - bullets

- Array support for Renderers/Updaters
- Research design patterns

## Refactor

- Remove all ctx references, replace with util function
- Add browserify, update init.js to reflect Dodger2d namespace
- Restructure files into directories
- Improve GameObject code (reduce the amount of type checking, move this to Player/Collectable/Block)
- A lot of code is tightly coupled together

## Implementation

The Library includes a lot of cleaned up code that's designed to be reused not only in this game, but extended into different games later on. Although not complete, this code will eventually be automatically tested.
