import { GameState } from './GameState';
import { GameObject } from './generic/GameObject';

export class Game {
  private _character: GameObject;
  private _state: GameState;

  constructor(private canvas: HTMLCanvasElement) {}

  getCharacter(): GameObject {
    return this._character;
  }

  getState(): GameState {
    return this._state;
  }

  setCharacter(character: GameObject) {
    this._character = character;
    return this;
  }

  start(): void {
    if (!this._character) {
      throw new Error('the game cannot start without a Character');
    }

    this._state = new GameState();
  }

  restart(): void {
    this._character = undefined;
    this._state = undefined;
  }
}
