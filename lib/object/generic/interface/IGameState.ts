export interface IGameState {
  set(key: string, value: string | number | boolean | any): void;
  get(key: string): string | number | boolean | any;
}
