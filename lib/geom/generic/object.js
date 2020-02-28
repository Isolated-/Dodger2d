const Vec2 = require('../../data/vec2');

/**
 *  @class GameObject
 *  Provides a reusable GameObject component
 *  Handles update/render, which can be overriden
 */
class GameObject {
  static Type = { Block: 0, Character: 1, Collectable: 2 };

  constructor(x, y, w, h, type = GameObject.Type.Block, color = 'white') {
    this.position = new Vec2(x, y);

    this.w = w;
    this.h = h;
    this.type = type;
    this.color = color;
  }
}
module.exports = GameObject;
