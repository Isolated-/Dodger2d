import {
  GameObject,
  GameObjectBoundaryDetector,
  GameObjectType,
} from '../../../lib/';
import { Detector } from '../../../lib/logic/generic/Detector';

class TestObject extends GameObject {
  constructor(x, y) {
    super(x, y, 50, 50, GameObjectType.Block);
  }
}

describe('GameObjectBoundaryDetector unit test', () => {
  test('should be an instance of Detector', () => {
    const detector = new GameObjectBoundaryDetector();
    expect(detector).toBeInstanceOf(Detector);
  });

  describe('.detect(object, canvasWidth, canvasHeight)', () => {
    const canvas = { width: 400, height: 400 };

    let detector;

    beforeEach(() => {
      detector = new GameObjectBoundaryDetector();
    });

    test('should have return value 4 (OnScreen)', () => {
      const object = new TestObject(10, 10);
      expect(detector.detect(object, canvas.width, canvas.height)).toBe(4);
    });

    test('should have return value 0 (OffScreenLeft)', () => {
      const object = new TestObject(-10, 10);
      expect(detector.detect(object, canvas.width, canvas.height)).toBe(0);
    });

    test('should have return value 1 (OffScreenRight)', () => {
      const object = new TestObject(canvas.width + 1, 10);
      expect(detector.detect(object, canvas.width, canvas.height)).toBe(1);
    });

    test('should have return value 2 (OffScreenTop)', () => {
      const object = new TestObject(10, -10);
      expect(detector.detect(object, canvas.width, canvas.height)).toBe(2);
    });

    test('should have return value 3 (OffScreenBottom)', () => {
      const object = new TestObject(10, canvas.height + 1);
      expect(detector.detect(object, canvas.width, canvas.height)).toBe(3);
    });

    test('should have return value 5 (OnScreenEdgeLeft)', () => {
      const object = new TestObject(0, 10);
      expect(detector.detect(object, canvas.width, canvas.height)).toBe(5);
    });

    test('should have return value 6 (OnScreenEdgeRight)', () => {
      const object = new TestObject(canvas.width, 10);
      expect(detector.detect(object, canvas.width, canvas.height)).toBe(6);
    });

    test('should have return value 7 (OnScreenEdgeTop)', () => {
      const object = new TestObject(10, 0);
      expect(detector.detect(object, canvas.width, canvas.height)).toBe(7);
    });

    test('should have return value 8 (OnScreenEdgeBottom)', () => {
      const object = new TestObject(10, canvas.height);
      expect(detector.detect(object, canvas.width, canvas.height)).toBe(8);
    });
  });
});
