const Vec2 = require('../../data/vec2');
const canvas = require('../../scene/canvas');

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

  isVisible() {
    return this.position.y < canvas.height - this.h;
  }

  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.w, this.h);
  }
}
module.exports = GameObject;
