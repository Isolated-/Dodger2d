/**
 *  A row is created every X seconds
 *  includes: 2 blocks, 1 collectable (chance of spawning)
 */
class Row {
  static PER_ROW = 3;

  static CollectableSpawnRate = 0.33;
  static HardScoreThreshold = 50;

  constructor() {
    this.objects = [];

    this.row = true;

    this.delete = false;
    this.collectableSpawnRate = Row.CollectableSpawnRate;
    this.scoreThreshold = Row.HardScoreThreshold;
    this.maxCollectableSpawnRate = 0.5; // 50%

    this.spawn();
  }

  /**
   *  Spawn the objects for the Row
   */
  spawn() {
    const threshold = Player.SIZE * randomEx(1.0, 1.5);
    const blockWidth = CANVAS.width / 2 - threshold;
    const blockHeight = Block.HEIGHT;

    let damage = random(1, 2);

    // don't spawn red blocks until score >= 50
    if (State.SCORE <= Row.HardScoreThreshold) {
      damage = 1;
    }

    this.objects.push(
      new Block(0, -60, blockWidth, blockHeight, damage),
      new Block(
        CANVAS.width - blockWidth,
        -60,
        blockWidth,
        blockHeight,
        damage,
      ),
    );

    const chance = Math.random();

    if (
      State.SCORE >= this.scoreThreshold &&
      this.collectableSpawnRate < this.maxCollectableSpawnRate
    ) {
      this.collectableSpawnRate += 0.001;
    }

    if (chance < this.collectableSpawnRate) {
      // 33% chance of spawn
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
