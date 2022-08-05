import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional() // en el caso de que sean opcionales se pone el signo de preguntas ej:id?
  readonly id: string;
  @IsOptional()
  @IsString({ message: `the brand most be a cool string` })
  readonly brand: string;
  @IsString()
  @IsOptional()
  readonly model: string;
}
//los dto cuando se crea la instancia no cambian su propiedades y accidentalmente no quiero reasignar la propiedad del dto por eso se utiliza readonly
//los dto sirve para mover la data dentro de la base de dato
// se proporciona metadata y se lo agrega atraves de decoradores
