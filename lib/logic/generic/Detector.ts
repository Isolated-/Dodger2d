import { IDetector } from './interface/IDetector';

export abstract class Detector<T> implements IDetector<T> {
  collision(object: T, object2: T) {}
}
