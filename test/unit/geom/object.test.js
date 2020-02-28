const Vec2 = require('../../../lib/data/vec2');
const GameObject = require('../../../lib/geom/generic/object');

describe('GameObject unit test', () => {
  test('should create a GameObject', () => {
    const type = 0;
    const object = new GameObject(10, 10, 50, 50, type);

    expect(object.position).toBeInstanceOf(Vec2);
    expect(object.position.x).toBe(10);
    expect(object.position.y).toBe(10);
    expect(object.w).toBe(50);
    expect(object.h).toBe(50);
    expect(object.type).toBe(0);
  });
});
