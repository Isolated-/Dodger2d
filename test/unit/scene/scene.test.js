const GameScene = require('../../../lib/scene/scene');
const GameObject = require('../../../lib/geom/generic/object');

describe('GameScene unit test', () => {
  describe('#.add(object)', () => {
    test('should add a single object', () => {
      const scene = new GameScene();
      const object = new GameObject(10, 10, 50, 50);

      expect(scene.count()).toBe(0);
      scene.add(object);
      expect(scene.count()).toBe(1);
    });
  });

  describe('#.remove(object)', () => {
    test('should return false (no objects)', () => {
      const scene = new GameScene();
      const object = new GameObject(10, 10, 50, 50);

      expect(scene.remove(object)).toBe(false);
    });

    test('should return false (no character to remove)', () => {
      const scene = new GameScene();
      const object = new GameObject(10, 10, 50, 50, GameObject.Type.Character);

      expect(scene.remove(object)).toBe(false);
    });

    test('should return a new array', () => {
      const scene = new GameScene();
      const objects = [
        new GameObject(10, 10, 50, 50),
        new GameObject(5, 5, 50, 50),
      ];

      scene.add(objects[0]);
      scene.add(objects[1]);

      expect(scene.remove(objects[1])).toEqual([objects[0]]);
    });
  });
});
