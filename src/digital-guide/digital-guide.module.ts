import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DigitalGuideController } from './digital-guide.controller';
import { DigitalGuideService } from './digital-guide.service';
import { Experiencia, ExperienciaSchema } from './schemas/experiencia.schema';
import { Actividad, ActividadSchema } from './schemas/actividad.schema';
import { Destino, DestinoSchema } from './schemas/destino.schema';
import { Evento, EventoSchema } from './schemas/evento.schema';
import { Festividad, FestividadSchema } from './schemas/festividad.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: Experiencia.name, schema: ExperienciaSchema },
      { name: Actividad.name, schema: ActividadSchema },
      { name: Destino.name, schema: DestinoSchema },
      { name: Evento.name, schema: EventoSchema },
      { name: Festividad.name, schema: FestividadSchema },
    ]),
  ],
  controllers: [DigitalGuideController],
  providers: [DigitalGuideService]
})
export class DigitalGuideModule {}
