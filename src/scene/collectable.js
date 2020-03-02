/**
 *  @class Collectable
 *  Collectables are objects that are rendered on screen
 *  That when collided with, increase game score by an amount.
 */
class Collectable extends Dodger.GameObject {
  static SIZE = 15;
  static COLOR = ['#402459', '#2ecc71'];

  static CollectableType = { Score: 0, Health: 1 };

  constructor(x, y, reward, type = Collectable.CollectableType.Score) {
    super(
      x,
      y,
      Collectable.SIZE,
      Collectable.SIZE,
      Dodger.GameObjectType.Collectable,
      Collectable.COLOR[type],
    );

    this.reward = reward;

    this.collected = false;

    this.velocity.y = 4;
    this.cType = type;
  }

  /**
   *  Factory function that creates a new instance of Collectable
   *
   *  Removes the need for parameters as will randomise.
   *
   *  @param {number} x
   *  @param {number} y
   *  @param {Collectable.CollectableType} type
   *  @param {number} reward
   *
   *  @return {Collectable}
   */
  static create(x, y, type, reward) {
    const pX = x || random(0, CANVAS.width);
    const pY = y || 0 - Collectable.SIZE * 2;

    const randomReward = reward || random(1, 5);
    const randomType = type || random(0, 2);

    return new Collectable(pX, pY, randomReward, randomType);
  }
}
