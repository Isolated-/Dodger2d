/**
 *  A row is created every X seconds
 *  includes: 2 blocks, 1 collectable (chance of spawning)
 */
class Row {
  static PER_ROW = 3;

  constructor() {
    this.objects = [];

    this.row = true;

    this.spawn();

    this.delete = false;
  }

  /**
   *  Spawn the objects for the Row
   */
  spawn() {
    let threshold = Player.SIZE * randomEx(1.0, 1.5);

    let blockWidth = CANVAS.width / 2 - threshold;
    let blockHeight = Block.HEIGHT;

    this.objects.push(
      new Block(0, -60, blockWidth, blockHeight),
      new Block(CANVAS.width - blockWidth, -60, blockWidth, blockHeight),
    );

    let chance = random(0, 1000);

    if (chance % 5 === 0) {
      this.objects.push(Collectable.create(CANVAS.width / 2 - 10, -50));
    }
  }

  collision(entity) {
    let hasCollision = false;

    this.objects.forEach((object, id) => {
      if (Collision.rectangle(entity, object)) {
        hasCollision = id;
        return;
      }
    });

    return hasCollision;
  }

  update(delta) {
    if (this.delete) return;

    let count = 0;
    // simply loop over all objects in row (usually 2/3)
    this.objects.forEach(object => {
      // if the object is no longer visible, update count
      if (!object.visable) {
        count++;
        return; // jump out of loop if no longer visible (reduce calls)
      }

      object.update(delta);
    });

    // if all objects are invisible
    if (count >= this.objects.length) {
      // mark for deletion within GameState
      this.delete = true;

      // empty object array
      this.objects = [];
    }
  }

  render(ctx) {
    if (this.delete) return;
    this.objects.forEach(object => object.render(ctx));
  }

  static create() {
    return new Row();
  }
}
