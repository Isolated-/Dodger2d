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
}
