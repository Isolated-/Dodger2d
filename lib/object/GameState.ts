import { IGameState } from './generic/interface/IGameState';
import { IGameStateData } from './generic/interface/IGameStateData';

/**
 *  @class GameState
 *  Essentially a key/value store
 */
export class GameState implements IGameState {
  private _state: IGameStateData;

  constructor() {
    this._state = {};
  }

  /**
   *  adds/overwrites object in GameState
   *  @param {string} key
   *  @param {number | string | boolean | any} value
   */
  set(key: string, value: number | string | boolean | any) {
    this._state[key] = value;
  }

  /**
   *  get a key from GameState, or undefined
   *  @param {string} key
   *  @return {number | string | boolean | any}
   */
  get(key: string): number | string | boolean | any {
    return this._state[key];
  }
}
