import { Vec2 } from '../../data/Vec2';

export interface IUpdater<T> {
  update(object: T, delta: number): void;
  movement?(from: Vec2, to: Vec2): void;
}
