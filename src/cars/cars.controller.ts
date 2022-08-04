import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

//los controladores escuchan la peticiones y dan una respuesta
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get() //para peticiones get directamente slash de este  url
  getAllCars() {
    return this.carsService.findAll();
  }
  @Get(':id') // si queremos algunos parametros del url sin que se repita (:id/:status)si se quiere leer el estado
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    // se agrega una nueva instancia y se agrega que tipo de version es el uuid ej: new pipesuuid({version:"4"})
    //para obtener el parametro por el id se usa eñ @param("id")

    return this.carsService.findOneById(id);
  }
  @Post() // peticion para crear data y recibimos el body con e decorador body
  createCar(@Body() createCardDto: CreateCarDto) {
    return createCardDto;
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    // cuando son mas de uno de define de esta manera el paht recibe el id y el body
    return body;
  }
  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}

// Pipes:transformar la data recibida en requests, para asegurar un tipo, valor o instancia de un objeto.
//exception filters: maneja los errores de codigo en mensajes de repuesta http
