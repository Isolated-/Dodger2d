import {
  GameObject,
  GameObjectCollisionDetector,
  GameObjectType,
} from '../../../lib';
import { Detector } from '../../../lib/logic/generic/Detector';

class TestObject extends GameObject {
  constructor(x, y) {
    super(x, y, 10, 10, GameObjectType.Block);
  }
}

describe('GameObjectCollisionDetector unit test', () => {
  test('should be an instance of Detector', () => {
    const detector = new GameObjectCollisionDetector();
    expect(detector).toBeInstanceOf(Detector);
  });

  describe('#.detect(object, object1)', () => {
    let detector;

    beforeEach(() => {
      detector = new GameObjectCollisionDetector();
    });

    test('should detect collision between objects', () => {
      const object = new TestObject(10, 10);
      const object1 = new TestObject(19, 19);

      expect(detector.detect(object, object1)).toBeTruthy();
    });

    test('should not detect collision', () => {
      const object = new TestObject(10, 10);
      const object1 = new TestObject(21, 21);

      expect(detector.detect(object, object1)).toBeFalsy();
    });
  });
});
