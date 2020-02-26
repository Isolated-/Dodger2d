class Collision {
  static rectangle(rect1, rect2) {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.size > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.size > rect2.y
    );
  }
}
