class State {
  static SCORE = 0;

  constructor() {
    this.blocks = [];

    const canvas = CANVAS;
    this.ctx = canvas.getContext('2d');

    const posX = canvas.width / 2 - 20 / 2;
    const posY = canvas.height - 20 * 1.5;

    this.player = new Player(posX, posY);

    this.gameOver = false;

    this.updates = 0;
  }

  spawnBlock() {
    this.blocks.push(Block.create());
  }

  update(delta) {
    if (this.updates % 50 === 0) {
      this.spawnBlock();
    }

    let blocks = this.blocks;

    this.updates++;
    blocks.forEach((block, id) => {
      if (Collision.rectangle(this.player, block) && block.visible) {
        this.gameOver = true;
        Game.STOPPED = true;
      }

      block.update(delta);
    });

    this.player.update(delta);
  }

  render() {
    this.player.render(this.ctx);
    this.blocks.forEach(block => block.render(this.ctx));
  }
}
