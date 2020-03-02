class Block extends Dodger.GameObject {
  static HEIGHT = 30;
  static WIDTH = 60;

  static MIN_HEIGHT = 20;
  static MAX_HEIGHT = 40;
  static MIN_WIDTH = 30;
  static MAX_WIDTH = 50;

  static COLOR = ['#8e44ad', '#c0392b'];

  constructor(x, y, width, height, damage) {
    const color = damage === 1 ? Block.COLOR[0] : Block.COLOR[1];

    super(x, y, width, height, Dodger.GameObjectType.Block, color);

    this.velocity.y += 4;

    this.damage = damage || 1;
  }
}
