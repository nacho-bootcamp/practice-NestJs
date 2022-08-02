import { Injectable } from '@nestjs/common';

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
    return car;
  }
}
