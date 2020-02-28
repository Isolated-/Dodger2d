/**
 *  @class Collision
 *  Used to detect collisions between shapes
 *  For now, only rectangles are supported
 *  since they are the only object in game
 */
class Collision {
  static rectangle(rect1, rect2) {
    return (
      rect1.position.x < rect2.position.x + rect2.w &&
      rect1.position.x + rect1.w > rect2.position.x &&
      rect1.position.y < rect2.position.y + rect2.h &&
      rect1.position.y + rect1.h > rect2.position.y
    );
  }
}
module.exports = Collision;
