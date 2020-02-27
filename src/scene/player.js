class Player extends GameObject {
  static SIZE = 30;
  static COLOR = ['DeepSkyBlue', 'yellow', 'red'];
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

    this.speedY = 0.8;
    this.speedX = 0.8;
    this.health = 3;
  }

  healthLoss() {
    this.health--;
    if (this.health <= 3) {
      this.color = Player.COLOR[Player.COLOR.length - this.health];
    }
  }

  healthGain(amount) {
    if (this.health + amount > Player.MAX_HEALTH) return;

    this.health += amount;

    if (this.health >= 3) {
      this.color = Player.COLOR[0];
    } else {
      this.color = Player.COLOR[Player.COLOR.length - this.health];
    }
  }

  movement(delta) {
    if (Keyboard.isDown(Keyboard.DOWN)) {
      this.y += this.speedY * delta;
    }

    if (Keyboard.isDown(Keyboard.UP)) {
      this.y -= this.speedY * delta;
    }

    if (Keyboard.isDown(Keyboard.LEFT)) {
      this.x -= this.speedX * delta;
    }

    if (Keyboard.isDown(Keyboard.RIGHT)) {
      this.x += this.speedX * delta;
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
  }
}
