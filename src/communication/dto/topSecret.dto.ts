import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsArray,
  IsNotEmpty,
  IsNumber,
  ArrayNotEmpty,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class TopSecretDTO {
  @ApiProperty({ type: () => [ContentSateliteDTO] })
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(3)
  @ArrayMaxSize(3)
  @ValidateNested({ each: true })
  @Type(() => ContentSateliteDTO)
  satelites: ContentSateliteDTO[];
}

export class ContentSateliteDTO {
  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty({
    message: 'El nombre del satelite no puede ser un numero o estar vacio',
  })
  name: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  @IsNotEmpty({ message: 'La distancia debe ser numerica' })
  distance: number;

  @ApiProperty({ type: [String] })
  @IsArray()
  @ArrayNotEmpty({ message: 'Está no es la structura correcta del mensaje' })
  message: string[];
}
