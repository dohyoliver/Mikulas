import { PartialType } from '@nestjs/mapped-types';
import { CreateGyerekekDto } from './create-gyerekek.dto';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';


export class UpdateGyerekekDto extends PartialType(CreateGyerekekDto) {
  @IsString()
  @IsNotEmpty()
  nev: string

  @IsString()
  @IsNotEmpty()
  cim: string

  @IsBoolean()
  @IsNotEmpty()
  jovolte:boolean
}
