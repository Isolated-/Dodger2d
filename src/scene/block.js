class Block extends GameObject {
  static HEIGHT = 30;
  static WIDTH = 60;

  static MIN_HEIGHT = 20;
  static MAX_HEIGHT = 40;
  static MIN_WIDTH = 30;
  static MAX_WIDTH = 50;

  static COLOR = ['#8e44ad', '#c0392b'];

  constructor(x, y, width, height, damage) {
    const color = damage === 1 ? Block.COLOR[0] : Block.COLOR[1];

    super(x, y, width, height, GameObject.Type.Block, color);

    this.speedY = State.SPEED;

    this.damage = damage || 1;
  }

  // factory method for creating blocks
  static create() {
    const canvas = CANVAS;

    const width = random(Block.MIN_WIDTH, Block.MAX_WIDTH);
    const height = random(Block.MIN_HEIGHT, Block.MAX_HEIGHT);

    const x = random(0, canvas.width - width);
    const y = Math.floor(0 - height * 2);

    const damage = random(0, 3);

    return new Block(x, y, width, height, damage);
  }
}
