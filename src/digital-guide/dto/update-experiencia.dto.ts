import { IsString, IsNotEmpty, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ActividadDto } from './actividad.dto';
import { DestinoDto } from './destino.dto';
import { EventoDto } from './evento.dto';
import { FestividadDto } from './festividad.dto';

export class UpdateExperienciaDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  categoria?: string;

  @IsString()
  @IsOptional()
  estado?: string;

  @ValidateNested()
  @Type(() => ActividadDto)
  @IsOptional()
  actividad?: ActividadDto;

  @ValidateNested()
  @Type(() => DestinoDto)
  @IsOptional()
  destino?: DestinoDto;

  @ValidateNested()
  @Type(() => EventoDto)
  @IsOptional()
  evento?: EventoDto;

  @ValidateNested()
  @Type(() => FestividadDto)
  @IsOptional()
  festividad?: FestividadDto;
}
