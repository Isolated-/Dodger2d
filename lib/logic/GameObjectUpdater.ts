import { GameObject } from '../object/generic/GameObject';
import { Updater } from './generic/Updater';

export class GameObjectUpdater extends Updater<GameObject> {
  update(object: GameObject, delta: number) {
    object.position.x += object.velocity.x;
    object.position.y += object.velocity.y;
  }
}
