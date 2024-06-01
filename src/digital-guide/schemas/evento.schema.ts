import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventoDocument = Evento & Document;

@Schema()
export class Evento {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  tipo: string;

  @Prop({ required: true })
  puntuacion: number;

  @Prop({ required: true })
  imagen: string;

  @Prop({ required: true })
  estado: string;
}

export const EventoSchema = SchemaFactory.createForClass(Evento);
