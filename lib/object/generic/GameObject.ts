import { IGameObject } from './interface/IGameObject';
import { Vec2 } from '../../data/Vec2';
import { GameObjectType } from './GameObjectType';

export abstract class GameObject implements IGameObject {
  static Type: GameObjectType;

  position: Vec2;
  velocity: Vec2;

  height?: number;
  width?: number;
  radius?: number;

  color: string;

  type: number;

  private visible: boolean;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    type: number,
    color: string = 'white',
  ) {
    this.position = new Vec2(x, y);
    this.width = width;
    this.height = height;
    this.type = type;

    this.velocity = new Vec2(0.0, 0.0);

    this.visible = true;
    this.color = color;
  }
}
