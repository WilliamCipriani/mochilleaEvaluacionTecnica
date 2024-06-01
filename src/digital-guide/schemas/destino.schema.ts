import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DestinoDocument = Destino & Document;

@Schema()
export class Destino {
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

export const DestinoSchema = SchemaFactory.createForClass(Destino);
