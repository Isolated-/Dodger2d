class State {
  static SCORE = 0;
  static HIGH_SCORE = 0;

  static SPEED = 4;

  static Paused = 0;
  static Running = 1;
  static Stopped = 2;
  static GameOver = 3;

  static CurrentState = State.Stopped;

  constructor() {
    const canvas = CANVAS;
    this.ctx = canvas.getContext('2d');

    const posX = canvas.width / 2 - Player.SIZE / 2;
    const posY = canvas.height - Player.SIZE * 1.5;
    this.player = new Player(posX, posY);

    this.gameOver = false;
    this.updates = 0;
    this.rows = [Row.create()];
  }

  increaseGameSpeed() {
    State.SPEED += 0.005;
  }

  update(delta) {
    if (State.CurrentState !== State.Running) return;

    this.updates++;

    if (this.updates >= 50) {
      this.updates = 0;
      this.rows.push(new Row());
    }

    /**
     *  Garbage Collection
     *  this creates a new array, removing any rows that are due to be deleted
     *  this hopefully keeps the array to around 3/4 rows
     *  as we depend on forEach this will avoid the array getting bigger than needed
     *  meaning that the loop won't slow down as the array gets larger
     */
    this.rows = this.rows.filter(row => !row.delete);

    // TODO: clean this up, what a mess
    this.rows.forEach(row => {
      const collisionWith = row.collision(this.player);

      if (collisionWith !== false) {
        // false = 0, confuses index !== false works
        const object = row.objects[collisionWith];

        if (object.type === GameObject.Type.Block && object.visable) {
          this.player.healthLoss(object.damage);
          object.visable = false;

          if (this.player.health <= 0) {
            State.CurrentState = State.GameOver;
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
