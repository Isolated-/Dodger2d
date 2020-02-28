const GameObject = require('./generic/object');

class Block extends GameObject {
  static Color = ['#8e44ad', '#c0392b'];

  constructor(x, y, w, h, color) {
    super(x, y, w, h, GameObject.Type.Block, color);
  }
}
module.exports = Block;
