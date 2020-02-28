const Row = require('../scene/row');
const Block = require('../geom/block');
const GameObject = require('../geom/generic/object');
const Character = require('../geom/character');
const Collectable = require('../geom/collectable');
const canvas = require('../scene/canvas');
const Random = require('../util/random');

/**
 *  @class RowBuilder
 *
 *  a helper class for building Rows
 */
class RowBuilder {
  /**
   *
   */
  static build(canvasWidth) {
    const width = canvasWidth;
    const numObjects = Random.number(1, 2);
    const threshold = numObjects > 1 ? Character.Size : Character.Size * 1.4;

    const spawnY = -60; // all objects spawn at -60

    const objectWidth = width / numObjects - threshold;

    let spawnX = 0,
      objects = [];

    for (let i = 0; i < numObjects; i++) {
      if (i > 0 && i < numObjects) {
        spawnX = width - objectWidth;
      }

      objects.push(new Block(spawnX, spawnY, objectWidth, 30, Block.Color[0]));
    }

    const chance = Random.number(0, 1000);

    if (chance % 2 === 0) {
      spawnX =
        numObjects === 1
          ? spawnX + objectWidth + Collectable.Size
          : spawnX - objectWidth / 2;

      const collectable = new Collectable(
        spawnX,
        spawnY + Collectable.Size / 2,
        chance % 3 === 0
          ? Collectable.CollectionType.Score
          : Collectable.CollectionType.Health,
      );

      objects.push(collectable);
    }

    return new Row(objects);
  }
}
module.exports = RowBuilder;
