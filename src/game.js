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

    const centerOfScreenX = canvas.width / 2;
    const centerOfScreenY = canvas.height / 2;

    ctx.textAlign = 'center';

    if (State.CurrentState === State.GameOver) {
      if (State.SCORE >= State.HIGH_SCORE) {
        ctx.font = '20px sans-serif';
        ctx.fillStyle = GameColor.Green;
        ctx.fillText(
          GameString.NewHighScore,
          centerOfScreenX,
          centerOfScreenY / 2,
        );

        State.HIGH_SCORE = State.SCORE;
      }

      ctx.font = '18px sans-serif';
      ctx.fillStyle = GameColor.Red;
      ctx.fillText(GameString.GameOver, centerOfScreenX, centerOfScreenY);
      ctx.fillText(
        GameString.GameOverInstructions,
        centerOfScreenX,
        centerOfScreenY + 20,
      );
    }

    if (State.CurrentState === State.Paused) {
      ctx.font = '20px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = GameColor.White;
      ctx.fillText(GameString.Paused, centerOfScreenX, centerOfScreenY - 80);
      ctx.fillText(
        GameString.PausedInstructions,
        centerOfScreenX,
        centerOfScreenY - 50,
      );
    }

    if (this.state && State.CurrentState !== State.GameOver) {
      this.state.render();
    }

    ctx.font = '26px sans-serif';
    ctx.fillStyle = GameColor.White;
    ctx.fillText(State.SCORE, centerOfScreenX, 40);
  }
}
