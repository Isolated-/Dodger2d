class State {
  static SCORE = 0;

  constructor() {
    const canvas = CANVAS;
    this.ctx = canvas.getContext('2d');

    const posX = canvas.width / 2 - Player.SIZE / 2;
    const posY = canvas.height - Player.SIZE * 1.5;

    this.player = new Player(posX, posY);

    this.gameOver = false;

    this.updates = 0;

    this.objects = [Collectable.create()];
  }

  update(delta) {
    this.updates++;

    this.objects.forEach(object => {
      // check collision
      if (Collision.rectangle(this.player, object) && object.visable) {
        if (object.type === GameObject.Type.Collectable && !object.collected) {
          object.collected = true;
          State.SCORE += object.score;
          object.visable = false;
        }

        if (object.type === GameObject.Type.Block) {
          this.gameOver = true;
          this.player.visable = false;
        }
      }

      // call each objects update function
      object.update(delta);
    });

    // TODO: set this.objects to mapped array removing non-visable components

    this.player.update(delta);
    this.player.movement(delta);
  }

  render() {
    this.player.render(this.ctx);
    this.objects.forEach(object => object.render(this.ctx));
  }
}
