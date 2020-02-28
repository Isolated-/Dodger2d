const Vec2 = require('../data/vec2');

/**
 *  @class Row
 *  acts as a container for objects, placed on a row (same X)
 *  handles updating it's internal objects + marking for deletion
 *  when objects are offscreen, or invisible.
 */
class Row {
  constructor(x, y) {
    this.position = new Vec2(x, y);

    this._objects = [];
  }

  /**
   *  called multiple times per second
   *  the function is responsible for calculating new positions
   *  flagging for deletion, and updating child objects.
   *  @param {*} delta
   */
  update(delta) {}

  render(ctx) {}
}
module.exports = Row;
