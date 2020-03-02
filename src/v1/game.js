class Game {
  constructor(canvas) {
    this.canvas = canvas;

    this.keyboard = new Keyboard();
    this.mouse = new Mouse();

    this.rows = [Row.create()];

    this.start();
  }

  start() {
    const canvas = this.canvas;

    const posX = canvas.width / 2 - Character.Size / 2;
    const posY = canvas.height - Character.Size * 1.5;

    this.character = new CharacterBuilder().setPosition(posX, posY).build();
    this.state = new Dodger.GameStateBuilder()
      .setCharacter(this.character)
      .build();
  }

  clear() {
    this.character = undefined;
    this.rows = [];
  }
}
