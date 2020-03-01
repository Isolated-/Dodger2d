import { GameText } from '../object/GameText';
import { Renderer } from './generic/Renderer';

export class GameTextRenderer extends Renderer<GameText> {
  constructor(protected ctx: CanvasRenderingContext2D) {
    super(ctx);
  }

  render(object: GameText, context?: CanvasRenderingContext2D) {
    const ctx = context || this.ctx;

    if (!ctx) return; // in future throw error

    ctx.font = object.getFont();
    ctx.fillStyle = object.getColor();

    ctx.textAlign = <CanvasTextAlign>object.getTextAlign();

    const { x, y } = object.getPosition();
    ctx.fillText(object.getText(), x, y);
  }
}
