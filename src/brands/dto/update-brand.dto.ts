// import { PartialType } from '@nestjs/mapped-types'; // ayuda a extendeer un dto basado a otro dto
// import { CreateBrandDto } from './create-brand.dto';

import { IsString, MinLength } from 'class-validator';

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
// el partialType provoca que se extienda los dto de la clase y hae que  sean opcionales
export class UpdateBrandDto {
  @IsString()
  @MinLength(1)
  name: string;
}
