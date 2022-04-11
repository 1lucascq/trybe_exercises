// ./FuturisticCar.ts
import { ICar } from './interfaces';

export default class Car implements ICar {
  drive(): void { console.log('Flying a futuristic car'); }
}