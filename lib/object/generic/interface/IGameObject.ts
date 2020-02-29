import { Vec2 } from '../../../data/Vec2';

export interface IGameObject {
  position: Vec2;
  velocity: Vec2;

  height?: number;
  width?: number;
  radius?: number; // circle support (for bullets eventually)

  color: string;
}
