class Game {
  static STOPPED = false;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.state = new State(canvas);
    this.keyboard = new Keyboard();
    this.mouse = new Mouse();
  }

  update(delta) {
    if (this.state.gameOver) {
      Game.STOPPED = true;
    }

    this.state.update(delta);
  }

  render() {
    const ctx = this.ctx;

    if (this.state.gameOver) {
      ctx.fillStyle = 'red';
      ctx.fillText('GAME OVER', this.canvas.width / 2, this.canvas.height / 2);
      ctx.fillText(
        'Press F5 to restart',
        this.canvas.width / 2,
        this.canvas.height / 2 + 20,
      );
      return;
    }

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = '#eeeeee';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.state.render();
  }
}
