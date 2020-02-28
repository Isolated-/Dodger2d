const GameObject = require('../geom/generic/object');
const GameState = require('./state');

const RowBuilder = require('../builder/row.builder');
const canvas = require('./canvas');

/**
 *  @class GameScene
 *  the GameScene acts as a manager for all the objects on screen.
 */
class GameScene {
  constructor() {
    this._character = undefined;
    this._rows = [];
    this._state = new GameState();

    this._spawnDelay = 2500;
    this._lastSpawn = -1;
  }

  createRow(width) {
    this._rows.push(RowBuilder.build(width));
  }

  update(delta, timestamp) {
    if (this._lastSpawn === -1) {
      console.log('called');
      this.createRow(canvas.width);
      this._lastSpawn = timestamp;
    }

    if (timestamp - this._lastSpawn >= this._spawnDelay) {
      this.createRow(canvas.width);
      this._lastSpawn = timestamp;
    }

    if (this._character) {
      this._character.update(delta);
    }

    this._rows = this._rows.filter(row => !row.isDeletable());
    if (this._rows.length === 0) return;
    this._rows.forEach(row => row.update(delta));
  }

  render(ctx) {
    if (this._character) {
      this._character.render(ctx);
    }

    if (this._rows.length === 0) return;
    this._rows.forEach(row => row.render(ctx));
  }

  /**
   *  add a character to the GameScene
   */
  add(character) {
    this._character = character;
  }
}
module.exports = GameScene;
