class GameObject {
  static Type = { Player: 0, Block: 1, Collectable: 2 };

  constructor(x, y, w, h, type = 'block', color = 'white') {
    this.x = x;
    this.y = y;
    this.w = Math.floor(w);
    this.h = Math.floor(h);
    this.type = type;
    this.color = color;

    this.visable = true;

    this.speedX = 0.0;
    this.speedY = 0.0;

    this.health = 0;
  }

  update(delta) {
    if (!this.visable) return;

    const maxHeight = CANVAS.height;
    const maxWidth = CANVAS.width - this.w;

    if (this.type !== GameObject.Type.Player) {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.y > maxHeight) {
        this.visable = false;

        if (this.type === GameObject.Type.Block) {
          State.SCORE++;
        }
      }
    }

    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
  }

  render(ctx) {
    if (!this.visable) return;

    // maybe use ctx.save() ctx.restore()
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);

    // render health if type === player
    if (this.type === GameObject.Type.Player) {
      ctx.font = '15px sans-serif';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${this.health}`, this.x + 15, this.y + 15);
    }
  }
}
