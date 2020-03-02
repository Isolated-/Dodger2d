import { GameState } from '../object/GameState';
import { GameCharacter } from '../object/GameCharacter';

export class GameStateBuilder {
  private _character: GameCharacter;
  private _score: number;
  private _highScore: number;
  private _state: string;

  setCharacter(character: GameCharacter) {
    this._character = character;
    return this;
  }

  setScore(score: number) {
    this._score = score;
    return this;
  }

  setHighScore(score: number) {
    this._highScore = score;
    return this;
  }

  setState(state: string) {
    this._state = state;
    return this;
  }

  build(): GameState {
    const state = new GameState();

    state.set('score', this._score || 0);
    state.set('highScore', this._highScore || 0);
    state.set('character', this._character);
    state.set('state', this._state || 0);

    return state;
  }
}
