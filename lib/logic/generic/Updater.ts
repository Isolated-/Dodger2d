import { IUpdater } from './IUpdater';
import { Vec2 } from '../../data/Vec2';

export class Updater<T> implements IUpdater<T> {
  update(object: T, delta: number): void {
    throw new Error('Method not implemented.');
  }
  movement?(from: Vec2, to: Vec2): void {
    throw new Error('Method not implemented.');
  }
}
