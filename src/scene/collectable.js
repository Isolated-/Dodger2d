/**
 *  @class Collectable
 *  Collectables are objects that are rendered on screen
 *  That when collided with, increase game score by an amount.
 */
class Collectable extends GameObject {
  static SIZE = 15;
  static COLOR = 'purple';

  constructor(x, y, score) {
    super(
      x,
      y,
      Collectable.SIZE,
      Collectable.SIZE,
      GameObject.Type.Collectable,
      Collectable.COLOR,
    );

    this.x = x;
    this.y = y;
    this.score = score;

    this.collected = false;

    this.speedY = State.SPEED; // TODO: move to constant variable

    this.type = GameObject.Type.Collectable;
  }

  /**
   *  Factory function that creates a new instance of Collectable
   *
   *  Removes the need for parameters as will randomise.
   *
   *  @param {number} score
   *  @param {number} x
   *  @param {number} y
   *
   *  @return {Collectable}
   */
  static create(score, x, y) {
    const pX = x || random(0, CANVAS.width);
    const pY = y || 0 - Collectable.SIZE * 2;

    const randomScore = score || random(1, 10);

    return new Collectable(pX, pY, randomScore);
  }
}
