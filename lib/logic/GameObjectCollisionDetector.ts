import { GameObject } from '../object/generic/GameObject';
import { Detector } from './generic/Detector';

export class GameObjectCollisionDetector extends Detector<GameObject> {
  detect(object: GameObject, objects: GameObject[]): boolean {
    const object1 = objects[0];

    if (object1 && object1 instanceof GameObject) {
      return this.rectangle(object, object1);
    }

    return false;
  }

  private rectangle(object: GameObject, object1: GameObject): boolean {
    return (
      object.position.x < object1.position.x + object1.width &&
      object.position.x + object.width > object1.position.x &&
      object.position.y < object1.position.y + object1.height &&
      object.position.y + object.height > object1.position.y
    );
  }
}
