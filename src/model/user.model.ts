import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class UserModel {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  idUsuario: number;

  @ApiProperty()
  @IsOptional()
  nombre: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  edad: number;

  @ApiProperty()
  @IsOptional()
  telefono: string;
}
