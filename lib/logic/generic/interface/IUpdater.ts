import { Vec2 } from '../../../data/Vec2';

export interface IUpdater<T> {
  update(object: T, delta: number): void;
  movement?(object: T, to: Vec2): void;
}
