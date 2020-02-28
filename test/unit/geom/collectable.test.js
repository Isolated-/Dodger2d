const Collectable = require('../../../lib/geom/collectable');
const GameObject = require('../../../lib/geom/generic/object');

describe('Collectable unit test', () => {
  test('should be instance of GameObject', () => {
    const collectable = new Collectable(
      10,
      10,
      Collectable.CollectionType.Health,
      10,
    );
    expect(collectable).toBeInstanceOf(GameObject);
  });

  describe('#.getType()', () => {
    test('should return 1 (Collectable.CollectionType.Health)', () => {
      const collectable = new Collectable(
        10,
        10,
        Collectable.CollectionType.Health,
        10,
      );

      expect(collectable.getType()).toBe(Collectable.CollectionType.Health);
    });
  });

  describe('#.setType(type)', () => {
    test('should set the type to Collectable.CollectionType.Score (0)', () => {
      const collectable = new Collectable(
        10,
        10,
        Collectable.CollectionType.Health,
        10,
      );

      expect(collectable.getType()).toBe(Collectable.CollectionType.Health);
      collectable.setType(Collectable.CollectionType.Score);
      expect(collectable.getType()).toBe(Collectable.CollectionType.Score);
    });
  });

  describe('#.getReward()', () => {
    test('should return 10', () => {
      const collectable = new Collectable(
        10,
        10,
        Collectable.CollectionType.Health,
        10,
      );

      expect(collectable.getReward()).toBe(10);
    });
  });

  describe('#.setReward(reward)', () => {
    const collectable = new Collectable(
      10,
      10,
      Collectable.CollectionType.Health,
      10,
    );

    expect(collectable.getReward()).toBe(10);
    collectable.setReward(20);
    expect(collectable.getReward()).toBe(20);
  });
});

// TODO: test invalid types, missing values, etc
