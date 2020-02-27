class Player extends GameObject {
  static SIZE = 30;
  static COLOR = ['#3498db', '#f1c40f', '#c0392b'];
  static MAX_HEALTH = 10;

  constructor(x, y) {
    super(
      x,
      y,
      Player.SIZE,
      Player.SIZE,
      GameObject.Type.Player,
      Player.COLOR[0],
    );

    this.speedY = State.SPEED;
    this.speedX = State.SPEED;
    this.health = 3;
  }

  healthLoss() {
    this.health--;

    this._setPlayerColor();
  }

  healthGain(amount) {
    if (this.health + amount > Player.MAX_HEALTH) return;

    this.health += amount;

    this._setPlayerColor();
  }

  _setPlayerColor() {
    if (this.health >= Player.COLOR.length) {
      this.color = Player.COLOR[0];
      return;
    }

    this.color = Player.COLOR[Player.COLOR.length - this.health];
  }

  movement(delta) {
    if (Keyboard.isDown(Keyboard.SPACE) || Mouse.isDown(Mouse.LEFT)) {
      this.x -= this.speedX;
    }

    const maxHeight = CANVAS.height - this.h;
    const maxWidth = CANVAS.width - this.w;

    if (this.y > maxHeight) {
      this.y = maxHeight;
    }

    if (this.x > maxWidth) {
      this.x = maxWidth;
    }

    if (this.x < 0) {
      this.x = 0;
    }

    if (this.y < 0) {
      this.y = 0;
    }

    if (Keyboard.noKeys() && Mouse.noKeys()) {
      this.x += this.speedX;
    }
  }
}
