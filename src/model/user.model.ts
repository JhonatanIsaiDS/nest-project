import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class UserModel {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  age: number;
}
