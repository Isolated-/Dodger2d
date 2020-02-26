class Block {
  static HEIGHT = 30;
  static WIDTH = 60;

  static MIN_HEIGHT = 20;
  static MAX_HEIGHT = 40;
  static MIN_WIDTH = 30;
  static MAX_WIDTH = 50;

  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;

    this.height = height;
    this.width = width;

    this.speed = 0.2;
    this.visible = true;
  }

  // factory method for creating blocks
  static create() {
    const canvas = CANVAS;

    const width = random(Block.MIN_WIDTH, Block.MAX_WIDTH);
    const height = random(Block.MIN_HEIGHT, Block.MAX_HEIGHT);

    const x = random(0, canvas.width - width);
    const y = Math.floor(0 - height * 2);

    return new Block(x, y, width, height);
  }

  update(delta) {
    if (!this.visible) return;

    this.y += this.speed * delta;

    if (this.belowScreen()) {
      State.SCORE++;
      this.visible = false;
    }
  }

  belowScreen() {
    return this.y > CANVAS.height + this.height;
  }

  render(ctx) {
    if (!this.visible) return;

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
