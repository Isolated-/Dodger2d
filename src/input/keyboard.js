class Keyboard {
  static LEFT = 37;
  static RIGHT = 39;
  static UP = 38;
  static DOWN = 40;
  static SPACE = 32;

  static keysDown = [];

  constructor() {
    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp);

    this.listenFor = [
      Keyboard.LEFT,
      Keyboard.RIGHT,
      Keyboard.UP,
      Keyboard.DOWN,
      Keyboard.SPACE,
    ];
  }

  onKeyDown(e) {
    if (this.listenFor.includes(e.keyCode)) {
      Keyboard.keysDown[e.keyCode] = true;
    }
  }

  onKeyUp(e) {
    if (Keyboard.keysDown[e.keyCode]) {
      Keyboard.keysDown[e.keyCode] = false;
    }
  }

  static isDown(keyCode) {
    return Keyboard.keysDown[keyCode];
  }

  static noKeys() {
    return Keyboard.keysDown.filter(key => key === true).length === 0;
  }
}
