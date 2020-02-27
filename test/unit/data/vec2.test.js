const Vec2 = require('../../../lib/data/vec2');

describe('Vec2 unit test', () => {
  test('should throw error (x undefined)', () => {
    const error = () => new Vec2(undefined, 10);
    expect(error).toThrow('x cannot be undefined');
  });

  test('should throw error (y undefined)', () => {
    const error = () => new Vec2(10, undefined);
    expect(error).toThrow('y cannot be undefined');
  });

  test('should throw error (x, y undefined)', () => {
    const error = () => new Vec2(undefined, undefined);
    expect(error).toThrow();
  });

  describe('#.add(x, y)', () => {
    test('should add x, y to current Vec2, returning a new instance', () => {
      const original = new Vec2(10, 10);
      const next = new Vec2(15, 15);
      const added = original.add(next.x, next.y);

      expect(added).toBeInstanceOf(Vec2);
      expect(added).not.toBe(original);
      expect(added).not.toBe(next);

      // check calculation is correct
      expect(added.x).toBe(25);
      expect(added.y).toBe(25);

      // check no side effects on original/next
      expect(original.x).toBe(10);
      expect(original.y).toBe(10);

      expect(next.x).toBe(15);
      expect(next.y).toBe(15);
    });

    test('should throw error (x/y undefined)', () => {
      const vec1 = new Vec2(10, 10);
      const vec2 = new Vec2(20, 20);

      let error = () => vec1.add(undefined, vec2.y);
      expect(error).toThrow();

      error = () => vec1.add(vec2.x, undefined);
      expect(error).toThrow();
    });
  });

  describe('#.sub(x, y)', () => {
    test('should substract x,y from original Vec2, returning a new Vec2', () => {
      const original = new Vec2(10, 10);
      const next = new Vec2(20, 20);
      const substracted = original.sub(next.x, next.y);

      expect(substracted).toBeInstanceOf(Vec2);
      expect(substracted).not.toBe(original);
      expect(substracted).not.toBe(next);

      // check calculation
      expect(substracted.x).toBe(-10);
      expect(substracted.y).toBe(-10);

      // check original and next
      expect(original.x).toBe(10);
      expect(original.y).toBe(10);

      expect(next.x).toBe(20);
      expect(next.y).toBe(20);
    });

    test('should throw error (x/y undefined)', () => {
      const vec1 = new Vec2(1, 1);
      const vec2 = new Vec2(10, 10);

      let error = () => vec1.sub(undefined, 10);
      expect(error).toThrow();

      error = () => vec1.sub(10, undefined);
      expect(error).toThrow();
    });
  });
});
