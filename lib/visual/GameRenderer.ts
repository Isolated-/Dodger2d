import { Renderer } from './generic/Renderer';
import { Game } from '../object/Game';

export abstract class GameRenderer extends Renderer<Game> {
  private _ctx: CanvasRenderingContext2D;

  constructor(ctx?: CanvasRenderingContext2D) {
    super(ctx);
    this._ctx = ctx;
  }

  render(game: Game, ctx?: CanvasRenderingContext2D) {}
}
