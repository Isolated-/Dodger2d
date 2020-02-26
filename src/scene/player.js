class Player {
  constructor(x, y) {
    this.color = 'blue';
    this.x = x;
    this.y = y;
    this.size = 20;

    this.speedX = 0.8;
    this.speedY = 0.8;
  }

  update(delta) {
    if (Keyboard.isDown(Keyboard.LEFT)) {
      this.x -= this.speedX * delta;
    }

    if (Keyboard.isDown(Keyboard.RIGHT)) {
      this.x += this.speedX * delta;
    }

    if (Keyboard.isDown(Keyboard.DOWN)) {
      this.y += this.speedY * delta;
    }

    if (Keyboard.isDown(Keyboard.UP)) {
      this.y -= this.speedY * delta;
    }

    if (this.x > CANVAS.width - this.size) {
      this.x = CANVAS.width - this.size;
    }

    const maxHeight = Math.floor(CANVAS.height - CANVAS.height / 3);

    if (this.y < maxHeight) {
      this.y = maxHeight;
    }

    if (this.y > CANVAS.height - this.size) {
      this.y = CANVAS.height - this.size;
    }

    if (this.x < 0) {
      this.x = 0;
    }

    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
  }

  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}
