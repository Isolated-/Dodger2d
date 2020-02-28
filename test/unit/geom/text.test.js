const Vec2 = require('../../../lib/data/vec2');
const GameText = require('../../../lib/geom/generic/text');

describe('GameText unit test', () => {
  test('should create a new instance', () => {
    const text = new GameText('Hello World', 10, 10);

    expect(text.position).toBeInstanceOf(Vec2);
    expect(text.position.x).toBe(10);
    expect(text.position.y).toBe(10);

    expect(text.string).toBe('Hello World');
    expect(text.font).toBe('20px sans-serif');
    expect(text.color).toBe('black');
  });
});
