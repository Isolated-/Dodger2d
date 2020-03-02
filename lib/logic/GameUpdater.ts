import { Updater } from './generic/Updater';
import { Game } from '../object/Game';

export abstract class GameUpdater extends Updater<Game> {
  constructor() {
    super();
  }

  update(game: Game, delta: number) {}
}
