import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(), // el uuid te proporrciona un id unico y el id pasaria a ser un string $_yarn add uuid $_yarn add -D @types/uuid
      brand: 'Ferrari',
      model: 2018,
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 2018,
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 2018,
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id "${id}"not found`);
    return car;
    // cuado se tiene un if con una sola linea se puede quitar las llaves y si la condicion se cumple envia el msj i no se cumple retorna el car
  }
  create(createCarDto: CreateCarDto) {
    // tambien se puede usar desestructuracion {brand,model} tmb se puede hacer :
    // brand: createCarDto.brand,
    // model: createCarDto.model,
    const car: Car = {
      id: uuid(),
      ...createCarDto, // el operador expre se esparse su propiedad en este objeto
    };
    this.cars.push(car);
    return car;
  }
}
