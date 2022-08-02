import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Ferrari',
      model: 2018,
    },
    {
      id: 2,
      brand: 'Honda',
      model: 2018,
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 2018,
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id "${id}"not found`);
    return car;
  }
}
// cuado se tiene un if con una sola linea se puede quitar las llaves y si la condicion se cumple envia el msj i no se cumple retorna el car
