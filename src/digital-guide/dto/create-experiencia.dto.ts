import { IsString, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ActividadDto } from './actividad.dto';
import { DestinoDto } from './destino.dto';
import { EventoDto } from './evento.dto';
import { FestividadDto } from './festividad.dto';

export class CreateExperienciaDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @ValidateNested()
  @Type(() => ActividadDto)
  actividad: ActividadDto;

  @ValidateNested()
  @Type(() => DestinoDto)
  destino: DestinoDto;

  @ValidateNested()
  @Type(() => EventoDto)
  evento: EventoDto;

  @ValidateNested()
  @Type(() => FestividadDto)
  festividad: FestividadDto;
}
