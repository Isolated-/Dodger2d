const GameObject = require('./generic/object');

class Block extends GameObject {
  constructor(x, y, w, h) {
    super(x, y, w, h);
  }
}
module.exports = Block;
