import { IGameText } from './generic/interface/IGameText';
import { Vec2 } from '../data/Vec2';

export class GameText implements IGameText {
  private _text: string;
  private _position: Vec2;
  private _color: string;

  private _font: string;
  private _fontSize: number;

  private _textAlign: string;

  constructor(
    text: string,
    x: number,
    y: number,
    color?: string,
    fontSize?: number,
    font?: string,
    textAlign?: string,
  ) {
    this._text = text;
    this._position = new Vec2(x, y);
    this._color = color || 'black';
    this._font = font || 'sans-serif';
    this._fontSize = fontSize || 18;
    this._textAlign = textAlign || 'center';
  }

  getText(): string {
    return this._text;
  }

  getPosition(): Vec2 {
    return this._position;
  }

  getColor(): string {
    return this._color;
  }

  getFont(): string {
    return `${this._fontSize}px ${this._font}`;
  }

  getFontSize(): number {
    return this._fontSize;
  }

  getTextAlign(): string {
    return this._textAlign;
  }
}
