export interface IDetector<T> {
  detect(object: T, ...params: any): void | boolean | number;
}
