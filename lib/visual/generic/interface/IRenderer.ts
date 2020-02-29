export interface IRenderer<T> {
  render(object: T, ctx?: CanvasRenderingContext2D): void;
}
