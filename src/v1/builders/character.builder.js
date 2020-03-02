class CharacterBuilder {
  constructor() {
    this.direction = random(0, 2);
  }

  setPosition(x, y) {
    this.position = new Dodger.Vec2(x, y);
    return this;
  }

  setDirection(direction) {
    this.direction = direction;
    return this;
  }

  build() {
    return new Character(this.position.x, this.position.y, this.direction);
  }
}
