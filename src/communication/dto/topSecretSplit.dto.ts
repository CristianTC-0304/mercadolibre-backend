import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, IsArray, ArrayNotEmpty } from 'class-validator';

export class TopSecretSplitDTO {
  @ApiProperty({ type: Number })
  @IsNumber()
  @IsNotEmpty({ message: 'La distancia debe ser numerica' })
  distance: number;

  @ApiProperty({ type: [String] })
  @IsArray()
  @ArrayNotEmpty({ message: 'Está no es la structura correcta del mensaje' })
  message: string[];
}
