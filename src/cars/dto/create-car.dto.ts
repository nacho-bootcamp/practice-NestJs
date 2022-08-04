export class CreateCarDto {
  readonly brand: string;
  readonly model: string;
}
//los dto cuando se crea la instancia no cambian su propiedades y accidentalmente no quiero reasignar la propiedad del dto por eso se utiliza readonly
//los dto sirve para mover la data dentro de la base de dato
