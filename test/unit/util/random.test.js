const Random = require('../../../lib/util/random');

describe('Random unit test', () => {
  test('should have Random.number, Random.float', () => {
    expect(Random).toHaveProperty('number');
    expect(Random.number).toBeInstanceOf(Function);

    expect(Random).toHaveProperty('float');
    expect(Random.float).toBeInstanceOf(Function);
  });

  test('should return a random number', () => {
    const min = 1;
    const max = 10;

    const random = Random.number(min, max);
    expect(random).toBeGreaterThanOrEqual(min);
    expect(random).toBeLessThanOrEqual(max);
  });

  test('should return a random float', () => {
    const min = 0.1;
    const max = 0.5;

    const random = Random.float(min, max);

    expect(random).toBeGreaterThanOrEqual(min);
    expect(random).toBeLessThanOrEqual(max);
  });
});
