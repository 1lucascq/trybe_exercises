// ./interfaces.ts
export interface ICar {
  drive(): void;
}

export interface IAirplane {
  fly(): void;
}

export interface IFuturisticCar {
  drive(): void;
  fly(): void;
}

export interface IFuturisticCarSecondOption extends ICar, IAirplane { }