const GameObject = require('../../../lib/geom/generic/object');
const Block = require('../../../lib/geom/block');

describe('Block unit test', () => {
  test('should be instance of GameObject', () => {
    const block = new Block(10, 10, 100, 50);
    expect(block).toBeInstanceOf(GameObject);
  });
});
