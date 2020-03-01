import { Vec2 } from '../../../data/Vec2';

export interface IGameText {
  getText(): string;
  getPosition(): Vec2;
  getFont(): string;
  getFontSize(): number;
  getColor(): string;
  getTextAlign(): string;
  // TODO: setters
}
