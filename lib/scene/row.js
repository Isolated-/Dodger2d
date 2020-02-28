/**
 *  @class Row
 *  acts as a container for objects, placed on a row (same X)
 *  handles updating it's internal objects + marking for deletion
 *  when objects are offscreen, or invisible.
 */
class Row {
  constructor(objects) {
    this._objects = objects || [];
  }

  /**
   *  returns true if safe to delete (0 objects)
   *  @return {boolean}
   */
  isDeletable() {
    return this._objects === 0;
  }

  /**
   *  called multiple times per second
   *  the function is responsible for calculating new positions
   *  flagging for deletion, and updating child objects.
   *  @param {number} delta
   */
  update(delta) {
    // filter the array, keeping only visible objects
    this._objects = this._objects.filter(object => object.isVisible());

    // break out and wait for deletion
    if (this._objects.length === 0) return;

    // loop and update
    this._objects.forEach(object => object.update(delta));
  }

  render(ctx) {
    if (this._objects.length === 0) return;

    // loop and render
    this._objects.forEach(object => object.render(ctx));
  }
}
module.exports = Row;
