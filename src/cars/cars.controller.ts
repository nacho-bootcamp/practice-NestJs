import { Controller, Get, Param } from '@nestjs/common';
//los controladores escuchan la peticiones y dan una respuesta
@Controller('cars')
export class CarsController {
  private cars = ['Ferrari', 'Toyota', 'Jeep'];
  @Get()
  getAllCars() {
    return this.cars;
  }
  @Get(':id')
  getCarById(@Param('id') id) {
    //para obtener el parametro por el id se usa eñ @param("id")
    console.log({ id });
    return this.cars[id];
  }
}
