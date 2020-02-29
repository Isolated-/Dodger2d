import { IDetector } from './interface/IDetector';

export abstract class Detector<T> implements IDetector<T> {
  detect(object: T, ...params: any) {
    throw new Error('method not implemented');
  }
}
