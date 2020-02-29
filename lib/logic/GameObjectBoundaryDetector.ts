import { Detector } from './generic/Detector';
import { GameObject } from '../object/generic/GameObject';

export class GameObjectBoundaryDetector extends Detector<GameObject> {
  static Type = {
    OffScreenLeft: 0,
    OffScreenRight: 1,
    OffScreenTop: 2,
    OffScreenBottom: 3,
    OnScreen: 4,
    OnScreenEdgeLeft: 5,
    OnScreenEdgeRight: 6,
    OnScreenEdgeTop: 7,
    OnScreenEdgeBottom: 8,
  };

  detect(
    object: GameObject,
    canvasWidth: number,
    canvasHeight: number,
  ): number {
    const x = object.position.x,
      y = object.position.y;

    const minWidth = 0;
    const minHeight = 0;
    const maxHeight = canvasHeight - object.height;
    const maxWidth = canvasWidth - object.width;

    if (x < minWidth || x > canvasWidth) {
      return x < minWidth
        ? GameObjectBoundaryDetector.Type.OffScreenLeft
        : GameObjectBoundaryDetector.Type.OffScreenRight;
    }

    if (y < minHeight || y > canvasHeight) {
      return y < minHeight
        ? GameObjectBoundaryDetector.Type.OffScreenTop
        : GameObjectBoundaryDetector.Type.OffScreenBottom;
    }

    if (x === 0 || x > maxWidth) {
      return x === 0
        ? GameObjectBoundaryDetector.Type.OnScreenEdgeLeft
        : GameObjectBoundaryDetector.Type.OnScreenEdgeRight;
    }

    if (y === 0 || y > maxHeight) {
      return y === 0
        ? GameObjectBoundaryDetector.Type.OnScreenEdgeTop
        : GameObjectBoundaryDetector.Type.OnScreenEdgeBottom;
    }

    return GameObjectBoundaryDetector.Type.OnScreen;
  }
}
