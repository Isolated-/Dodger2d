import { Renderer } from './generic/Renderer';
import { GameObject } from '../object/generic/GameObject';

export class GameObjectRenderer extends Renderer<GameObject> {
  constructor(ctx: CanvasRenderingContext2D) {
    super(ctx);
  }

  /**
   *  Renders a GameObject (must be rectangle shape (fillRect))
   *  @param {GameObject} object
   */
  render(object: GameObject, context?: CanvasRenderingContext2D) {
    const ctx = context || this.ctx;

    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = object.color;

    ctx.fillRect(
      object.position.x,
      object.position.y,
      object.width,
      object.height,
    );
    // NOTE: in future we'll want support for circles/arcs
    ctx.restore();
  }
}
