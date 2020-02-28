const Collision = require('../../../lib/collision/collision');
const GameObject = require('../../../lib/geom/generic/object');

describe('Collision unit test', () => {
  describe('#.rectangle(rect1, rect2)', () => {
    test('should detect collision', () => {
      let x,
        y,
        w = 50,
        h = 50;

      x = 20;
      y = 20;

      const object1 = new GameObject(x, y, w, h);

      x = object1.position.x + w - 1; // pixel perfect (down to 1 pixel)
      y = object1.position.y + h - 1;

      const object2 = new GameObject(x, y, w, h);

      expect(Collision.rectangle(object1, object2)).toBe(true);
    });

    test('should not detect collision', () => {
      let x,
        y,
        w = 50,
        h = 50;

      x = 20;
      y = 20;

      const object1 = new GameObject(x, y, w, h);

      x = object1.position.x + w;
      y = object1.position.y + h;

      const object2 = new GameObject(x, y, w, h);

      expect(Collision.rectangle(object1, object2)).toBe(false);
    });
  });
});
