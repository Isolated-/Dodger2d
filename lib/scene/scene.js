const GameObject = require('../geom/generic/object');

/**
 *  @class GameScene
 *  the GameScene acts as a manager for all the objects on screen.
 */
class GameScene {
  constructor() {
    this._character = undefined;
    this._objects = [];
  }

  update(delta) {}

  render(ctx) {
    if (this._character) {
      this._character.render(ctx);
    }
  }

  /**
   *  add an object to the scene
   *  if object.type === character, the object updates this._character
   *  otherwise the object is added to the scene array
   *  @param {GameObject} object
   */
  add(object) {
    if (object.type === GameObject.Type.Character) {
      this._character = object;
      return;
    }

    this._objects.push(object);
  }

  /**
   *  return the amount of objects in scene
   *  @return {number}
   */
  count() {
    return this._objects.length;
  }

  /**
   *  removes an object from the GameScene
   *  and returns the new array
   *  @param {GameObject} object
   *  @return {Boolean | GameObject[]} false if no object removed, or the reduced array
   */
  remove(object) {
    if (object.type === GameObject.Type.Character && !this.character) {
      return false;
    }

    if (this._objects.length <= 0) return false;

    const array = this._objects.filter(obj => obj !== object);

    return array.length !== 0 ? array : false;
  }
}
module.exports = GameScene;
