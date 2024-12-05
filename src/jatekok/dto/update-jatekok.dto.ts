import { PartialType } from '@nestjs/mapped-types';
import { CreateJatekokDto } from './create-jatekok.dto';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdateJatekokDto extends PartialType(CreateJatekokDto) {
  @IsString()
  @IsNotEmpty()
  megnevezes: string

  @IsString()
  @IsNotEmpty()
  anyag: string

  @IsInt()
  @IsNotEmpty()
  suly: number
}
