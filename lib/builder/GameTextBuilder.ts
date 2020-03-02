import { Vec2 } from '../data/Vec2';
import { GameText } from '../object/GameText';

export class GameTextBuilder {
  private _text: string;
  private _position: Vec2;
  private _color: string;
  private _fontSize: number;
  private _font: string;
  private _textAlign: CanvasTextAlign;

  constructor(text: string) {
    this._text = text;

    // defaults
    this._position = new Vec2(0, 0);
    this._fontSize = 10;
    this._font = 'sans-serif';
    this._textAlign = 'center';
  }

  setPosition(x: number, y: number) {
    this._position = new Vec2(x, y);
    return this;
  }

  setColor(color: string) {
    this._color = color;
    return this;
  }

  setFontSize(size: number) {
    this._fontSize = size;
    return this;
  }

  setFont(font: string) {
    this._font = font;
    return this;
  }

  setTextAlign(align: CanvasTextAlign) {
    this._textAlign = align;
    return this;
  }

  build() {
    return new GameText(
      this._text,
      this._position.x,
      this._position.y,
      this._color,
      this._fontSize,
      this._font,
      this._textAlign,
    );
  }
}
