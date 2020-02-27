class State {
  static SCORE = 0;

  static SPEED = 4;

  constructor() {
    const canvas = CANVAS;
    this.ctx = canvas.getContext('2d');

    const posX = canvas.width / 2 - Player.SIZE / 2;
    const posY = canvas.height - Player.SIZE * 1.5;

    this.player = new Player(posX, posY);

    this.gameOver = false;

    this.updates = 0;

    this.objects = [Row.create()];

    this.rows = [Row.create()];
  }

  increaseGameSpeed() {
    State.SPEED += 0.005;
  }

  update(delta) {
    this.updates++;

    if (this.updates >= 50) {
      this.updates = 0;
      this.rows.push(new Row());
    }

    this.rows.forEach(row => {
      const collisionWith = row.collision(this.player);

      if (collisionWith !== false) {
        // false = 0, confuses index !== false works
        const object = row.objects[collisionWith];

        if (object.type === GameObject.Type.Block && object.visable) {
          this.player.healthLoss();
          object.visable = false;

          if (this.player.health <= 0) {
            this.gameOver = true;
          }
        }

        if (object.type === GameObject.Type.Collectable && !object.collected) {
          object.collected = true;
          if (object.cType === Collectable.CollectableType.Score) {
            State.SCORE += object.reward;
          } else {
            this.player.healthGain(object.reward);
          }
          object.visable = false;
        }
      }

      row.update(delta);
    });

    this.player.update(delta);
    this.player.movement(delta);
  }

  render() {
    this.player.render(this.ctx);
    this.rows.forEach(row => row.render(this.ctx));
  }
}
