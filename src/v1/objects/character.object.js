class Character extends Dodger.GameObject {
  static Size = 30;
  static Colors = ['#3498db', '#f1c40f', '#c0392b'];
  /**
   *  @param {number[]} MaxHealth [below 50, above 50]
   */
  static MaxHealth = [10, 20];

  /**
   *  Creates a new Character GameObject
   *  @param {number} x
   *  @param {number} y
   *  @param {boolean} direction the direction to pull the player in (false = left, true = right) (defaults to random value)
   */
  constructor(x, y, direction) {
    super(
      x,
      y,
      Character.Size,
      Character.Size,
      Dodger.GameObjectType.Character,
      Character.Colors[0],
    );

    this.direction = direction || random(0, 2);
    this.health = 3; // TODO: random this?

    this.velocity.x = direction ? 4 : -4;
  }

  isDead() {
    return this.health <= 0;
  }

  getHealth() {
    return this.health;
  }

  addHealth(amount) {
    const maxHealth =
      State.SCORE >= 50 ? Character.MaxHealth[1] : Character.MaxHealth[0];

    if (this.health + amount > maxHealth) {
      this.health = maxHealth;
      this._setPlayerColor();
      return;
    }

    this.health += amount;
    this._setPlayerColor();
  }

  subHealth(amount) {
    this.health -= amount;
    this._setPlayerColor();
  }

  /**
   *  Sets a player color based on health value
   *  @internal
   */
  _setPlayerColor() {
    if (this.health >= Character.Colors.length) {
      this.color = Character.Colors[0];
      return;
    }

    this.color = Character.Colors[Character.Colors.length - this.health];
  }
}
