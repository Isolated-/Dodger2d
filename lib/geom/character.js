const GameObject = require('./generic/object');
const Vec2 = require('../data/vec2');

class Character extends GameObject {
  static Size = 30;
  static Color = ['#3498db', '#f1c40f', '#c0392b'];
  static MaxHealth = 10;

  constructor(x, y) {
    super(
      x,
      y,
      Character.Size,
      Character.Size,
      GameObject.Type.Character,
      Character.Color[0],
    );

    this._health = 3;
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
