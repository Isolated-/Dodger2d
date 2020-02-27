/**
 *  @class Collectable
 *  Collectables are objects that are rendered on screen
 *  That when collided with, increase game score by an amount.
 */
class Collectable extends GameObject {
  static SIZE = 15;
  static COLOR = ['purple', 'green'];

  static CollectableType = { Score: 0, Health: 1 };

  constructor(x, y, reward, type = Collectable.CollectableType.Score) {
    console.log(type);
    super(
      x,
      y,
      Collectable.SIZE,
      Collectable.SIZE,
      GameObject.Type.Collectable,
      Collectable.COLOR[type],
    );

    this.x = x;
    this.y = y;
    this.reward = reward;

    this.collected = false;

    this.speedY = State.SPEED;
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

    console.log(randomType);

    return new Collectable(pX, pY, randomReward, randomType);
  }
}
