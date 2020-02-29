export interface IDetector<T> {
  collision(object: T, object2: T): void;
}
