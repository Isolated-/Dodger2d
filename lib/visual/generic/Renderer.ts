import { IRenderer } from './interface/IRenderer';

export abstract class Renderer<T> implements IRenderer<T> {
  constructor(protected ctx?: CanvasRenderingContext2D) {}

  render(object: T, ctx?: CanvasRenderingContext2D) {
    if (!ctx && !this.ctx) return; // in future throw error
  }
}
