class Player extends GameObject {
  static SIZE = 30;
  static COLOR = 'DeepSkyBlue';

  constructor(x, y) {
    super(x, y, Player.SIZE, Player.SIZE, GameObject.Type.Player, Player.COLOR);

    this.speedY = 0.8;
    this.speedX = 0.8;
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
  }
}
