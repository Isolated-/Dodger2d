class Vec2 {
  constructor(x, y) {
    if (x === undefined || y === undefined) {
      throw new Error(`${!x ? 'x' : 'y'} cannot be undefined`);
    }

    this.x = x;
    this.y = y;
  }

  add(x, y) {
    return new Vec2(this.x + x, this.y + y);
  }

  sub(x, y) {
    return new Vec2(this.x - x, this.y - y);
  }
}
module.exports = Vec2;
