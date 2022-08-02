import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
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
  getCarById(@Param('id', ParseIntPipe) id: number) {
    //para obtener el parametro por el id se usa eñ @param("id")
    console.log({ id });
    return this.CarsService.findOneById(id);
  }
}
// Pipes:transformar la data recibida en requests, para asegurar un tipo, valor o instancia de un objeto.
//exception filters: maneja los errores de codigo en mensajes de repuesta http
