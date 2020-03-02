# Dodger2d - CHANGELOG

\*Version: **0.1.0-alpha.1\***

# Version [0.1.0.alpha.1]

This version focuses on refactoring the existing codebase into a more robust library that can be reused in future.

### Improvement

- Objects are now spawned with a specific rate, this rate is increased overtime until it reaches 50%.
- GameObjects (Character/Block/Collectables) now updated to use Detector/Updater/Renderer pattern
- Game/GameState has been improved, using Updater/Renderer pattern
- Score is now increased each time a row reaches the bottom, instead of per object reaching bottom

### Added

- Reusable components encapsulated into TypeScript library. The abstractions should help enforce single responsibility on classes/objects.
  - Detector - Responsible for logic focusing on detection (collision/boundaries/etc)
  - Updater - Responsible for updating an object (movement/etc)
  - Renderer - Responible for rending an object onto screen
- GameText added, with Renderer

# Version [0.1.0.alpha.0] - 2020-02-28

### Added

- GameObjects - reusable components that build up Player, Collectable, Blocks and any other on-screen objects.
- Collision - Blocks and Collectables have collision, each having an effect on a player.
- State - Game can switch between different states, deciding what to render on screen
- Text UI - basic (super basic) text ui has been implemented (this needs improvement)
- Player movement - the player is dragged in a random direction, left mouse (soon touch) will drag in opposite direction
- Game loop (inner, outer, object loops)
- Keyboard/Mouse input
- Various util classes/functions
- More
