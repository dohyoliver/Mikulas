import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateGyerekekDto {
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
