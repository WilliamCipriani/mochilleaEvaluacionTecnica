import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Actividad } from './actividad.schema';
import { Destino } from './destino.schema';
import { Evento } from './evento.schema';
import { Festividad } from './festividad.schema';

export type ExperienciaDocument = Experiencia & Document;

@Schema()
export class Experiencia {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  categoria: string;

  @Prop({ required: true })
  estado: string;

  @Prop({ type: Types.ObjectId, ref: 'Actividad' })
  actividad: Actividad;

  @Prop({ type: Types.ObjectId, ref: 'Destino' })
  destino: Destino;

  @Prop({ type: Types.ObjectId, ref: 'Evento' })
  evento: Evento;

  @Prop({ type: Types.ObjectId, ref: 'Festividad' })
  festividad: Festividad;
}

export const ExperienciaSchema = SchemaFactory.createForClass(Experiencia);
