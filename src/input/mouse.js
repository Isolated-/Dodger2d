class Mouse {
  static LEFT = 0;
  static RIGHT = 2;
  static MIDDLE = 1;

  static buttonsPressed = [];

  constructor() {
    window.addEventListener('mousedown', this.onMouseDown.bind(this));
    window.addEventListener('mouseup', this.onMouseUp);
    this.listenFor = [Mouse.LEFT];
  }

  onMouseDown(e) {
    if (this.listenFor.includes(e.button)) {
      console.log('added');
      Mouse.buttonsPressed[e.button] = true;
    }
  }

  onMouseUp(e) {
    if (Mouse.buttonsPressed[e.button]) {
      Mouse.buttonsPressed[e.button] = false;
    }
  }

  static isDown(button) {
    return Mouse.buttonsPressed[button] ? true : false;
  }
}
