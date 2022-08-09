import { Car } from '../../../dist/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CAR_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'corolla',
  },
  {
    id: uuid(),
    brand: 'Ferrari',
    model: 'toreto',
  },
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'rayomc',
  },
];
