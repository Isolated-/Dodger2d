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
