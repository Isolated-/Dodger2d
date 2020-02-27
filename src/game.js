class Game {
  static STOPPED = false;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.keyboard = new Keyboard();
    this.mouse = new Mouse();

    this.start();
  }

  start() {
    this.state = new State(canvas);
  }

  clear() {
    this.state = undefined;
    State.SCORE = 0;
  }

  update(delta) {
    if (Mouse.isDown(Mouse.LEFT) && State.CurrentState === State.Paused) {
      State.CurrentState = State.Running;
      return;
    }

    if (State.CurrentState === State.Stopped) {
      State.CurrentState = State.Paused;
      this.start();
      return;
    }

    if (
      State.CurrentState === State.GameOver &&
      Keyboard.isDown(Keyboard.SPACE)
    ) {
      State.CurrentState = State.Stopped;
      this.clear();
      return;
    }

    if (State.CurrentState === State.Running && this.state) {
      this.state.update(delta);
    }
  }

  render() {
    const ctx = this.ctx;
    ctx.textAlign = 'center';

    if (State.CurrentState === State.GameOver) {
      ctx.fillStyle = 'red';
      ctx.font = '20px sans-serif';
      ctx.fillText('GAME OVER', this.canvas.width / 2, this.canvas.height / 2);
      ctx.fillText(
        'PRESS SPACE TO RESTART',
        this.canvas.width / 2,
        this.canvas.height / 2 + 20,
      );
      return;
    }

    ctx.fillStyle = '#ecf0f1';

    if (State.CurrentState === State.Paused) {
      ctx.font = '16px sans-serif';
      ctx.fillText('PAUSED', this.canvas.width / 2, this.canvas.height / 2);
    }
    ctx.font = '25px sans-serif';
    ctx.fillText(`${State.SCORE}`, canvas.width / 2, 40);

    if (this.state) {
      this.state.render();
    }
  }
}
