import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';
//los controladores escuchan la peticiones y dan una respuesta
@Controller('cars')
export class CarsController {
  constructor(private readonly CarsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.CarsService.findAll;
  }
  @Get(':id')
  getCarById(@Param('id') id: string) {
    //para obtener el parametro por el id se usa eñ @param("id")
    console.log({ id });
    return this.CarsService.findOneById(Number(id));
  }
}
