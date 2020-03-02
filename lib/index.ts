/**
 *  Exports all the dependencies ready for use as a library/module
 */

export { Vec2 } from './data/Vec2';

/**
 *  GameObject
 */
export { IGameObject } from './object/generic/interface/IGameObject';
export { GameObject } from './object/generic/GameObject';
export { GameObjectType } from './object/generic/GameObjectType';
export { GameObjectRenderer } from './visual/GameObjectRenderer';
export { GameObjectUpdater } from './logic/GameObjectUpdater';
export { GameObjectCollisionDetector } from './logic/GameObjectCollisionDetector';
export { GameObjectBoundaryDetector } from './logic/GameObjectBoundaryDetector';

/**
 *  GameText
 */
export { IGameText } from './object/generic/interface/IGameText';
export { GameText } from './object/GameText';
export { GameTextRenderer } from './visual/GameTextRenderer';
export { GameTextBuilder } from './builder/GameTextBuilder';

/**
 *  GameState
 */
export { IGameState } from './object/generic/interface/IGameState';
export { IGameStateData } from './object/generic/interface/IGameStateData';
export { GameState } from './object/GameState';
export { GameStateBuilder } from './builder/GameStateBuilder';

/**
 *  Game
 */
export { IGame } from './object/generic/interface/IGame';
export { Game } from './object/Game';
export { GameUpdater } from './logic/GameUpdater';
export { GameRenderer } from './visual/GameRenderer';

/**
 *  Generic
 */
export { Updater } from './logic/generic/Updater';
export { Detector } from './logic/generic/Detector';
