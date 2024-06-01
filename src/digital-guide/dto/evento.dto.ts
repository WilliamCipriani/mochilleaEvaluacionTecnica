import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class EventoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsNumber()
  @IsNotEmpty()
  puntuacion: number;

  @IsString()
  @IsNotEmpty()
  imagen: string;

  @IsString()
  @IsNotEmpty()
  estado: string;
}
