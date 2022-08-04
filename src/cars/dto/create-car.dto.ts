import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: `the brand most be a cool string` })
  readonly brand: string;
  @IsString()
  readonly model: string;
}
//los dto cuando se crea la instancia no cambian su propiedades y accidentalmente no quiero reasignar la propiedad del dto por eso se utiliza readonly
//los dto sirve para mover la data dentro de la base de dato
// se proporciona metadata y se lo agrega atraves de decoradores
