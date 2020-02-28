const GameObject = require('./generic/object');
const TextBuilder = require('../builder/text.builder');
const Mouse = require('../input/mouse');

/**
 *  @class Character
 *
 *  Note: the Character is bound to stay on the canvas between 0 and canvas.width
 *  The Character is always pulled in a direction (Direction)
 *  The character is fixed to left/right movement only
 */
class Character extends GameObject {
  static Size = 30;
  static Color = ['#3498db', '#f1c40f', '#c0392b'];
  static MaxHealth = 10;

  // could be represented by Boolean
  // want to support addition directions in future (up/down)
  static Direction = { Left: 0, Right: 1 };

  constructor(x, y, direction) {
    super(
      x,
      y,
      Character.Size,
      Character.Size,
      GameObject.Type.Character,
      Character.Color[0],
    );

    this._health = 3;
    this.vX = 0.8;
    this.direction = direction || Character.Direction.Right;
  }

  boundaries() {
    if (this.position.x > canvas.width - this.w) {
      this.position.x = canvas.width - this.w;
    }

    if (this.position.x < 0) {
      this.position.x = 0;
    }
  }

  /**
   *  updates player movement (controls + gravity pull)
   */
  movement() {
    if (Mouse.isDown(Mouse.LEFT)) {
      this.position.x =
        this.direction === Character.Direction.Right
          ? this.position.x - this.vX
          : this.position.x + this.vX;
    }

    if (Mouse.noKeys()) {
      this.position.x =
        this.direction === Character.Direction.Right
          ? this.position.x + this.vX
          : this.position.x - this.vX;
    }
  }

  displayHealth(ctx) {
    TextBuilder.build(
      ctx,
      this._health,
      this.position.x + this.w / 2,
      this.position.y + this.h / 2,
      '12px sans-serif',
    );
  }

  update(delta) {
    this.boundaries();
    this.movement();
  }

  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.w, this.h);

    this.displayHealth(ctx);
  }

  /**
   *  (Internal)
   *  Sets a player color based on health amount
   */
  setColor(color) {
    if (this._health > Character.Color.length) {
      this.color = color || Character.Color[0];
      return;
    }

    this.color =
      color || Character.Color[Character.Color.length - this._health];
  }

  /**
   *  Returns the Character's health
   *  @return {number}
   */
  getHealth() {
    return this._health;
  }

  /**
   *  Increase the Character health by a given amount
   *  Note: this function will increase current health by amount
   *  not set health to amount
   *  @param {number} amount
   */
  increaseHealth(amount) {
    if (this._health + amount > Character.MaxHealth) {
      this._health = Character.MaxHealth;
      return;
    }

    this._health += amount;
  }

  /**
   *  Decrease the Character health by a given amount
   *  Note: this function will remove amount from current health,
   *  not set health to amount
   *  @param {number} amount
   */
  decreaseHealth(amount) {
    this._health -= amount;
  }

  /**
   *  Checks if a player is dead by checking health is 0
   *  @return {Boolean}
   */
  isDead() {
    return this._health === 0;
  }
}
module.exports = Character;
