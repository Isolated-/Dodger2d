const Vec2 = require('../../data/vec2');

/**
 *  @class GameText
 *  Provides a reusable component for creating GameText
 */
class GameText {
  constructor(string, x, y, font = '20px sans-serif', color = 'black') {
    this.string = string;
    this.position = new Vec2(x, y);
    this.font = font;
    this.color = color;
  }
}
module.exports = GameText;
