import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExperienciaDto } from './dto/create-experiencia.dto';
import { UpdateExperienciaDto } from './dto/update-experiencia.dto';
import { Experiencia, ExperienciaDocument } from './schemas/experiencia.schema';
import { Actividad, ActividadDocument } from './schemas/actividad.schema';
import { Destino, DestinoDocument } from './schemas/destino.schema';
import { Evento, EventoDocument } from './schemas/evento.schema';
import { Festividad, FestividadDocument } from './schemas/festividad.schema';

@Injectable()
export class DigitalGuideService {
  constructor(
    @InjectModel(Experiencia.name) private experienciaModel: Model<ExperienciaDocument>,
    @InjectModel(Actividad.name) private actividadModel: Model<ActividadDocument>,
    @InjectModel(Destino.name) private destinoModel: Model<DestinoDocument>,
    @InjectModel(Evento.name) private eventoModel: Model<EventoDocument>,
    @InjectModel(Festividad.name) private festividadModel: Model<FestividadDocument>,
  ) {}

  async create(createExperienciaDtos: CreateExperienciaDto[]): Promise<Experiencia[]> {
    const experiencias = [];
    for (const createExperienciaDto of createExperienciaDtos) {
      const actividad = new this.actividadModel(createExperienciaDto.actividad);
      const savedActividad = await actividad.save();
  
      const destino = new this.destinoModel(createExperienciaDto.destino);
      const savedDestino = await destino.save();
  
      const evento = new this.eventoModel(createExperienciaDto.evento);
      const savedEvento = await evento.save();
  
      const festividad = new this.festividadModel(createExperienciaDto.festividad);
      const savedFestividad = await festividad.save();
  
      const createdExperiencia = new this.experienciaModel({
        ...createExperienciaDto,
        actividad: savedActividad._id,
        destino: savedDestino._id,
        evento: savedEvento._id,
        festividad: savedFestividad._id,
      });
  
      const savedExperiencia = await createdExperiencia.save();
      experiencias.push(savedExperiencia);
    }
    return experiencias;
  }

  async findOne(id: string): Promise<Experiencia> {
    return this.experienciaModel.findById(id).populate('actividad destino evento festividad').exec();
  }

  async update(id: string, updateExperienciaDto: UpdateExperienciaDto): Promise<Experiencia> {
    const experiencia = await this.experienciaModel.findById(id).exec();

    if (updateExperienciaDto.actividad) {
      await this.actividadModel.findByIdAndUpdate(experiencia.actividad, updateExperienciaDto.actividad).exec();
    }
    if (updateExperienciaDto.destino) {
      await this.destinoModel.findByIdAndUpdate(experiencia.destino, updateExperienciaDto.destino).exec();
    }
    if (updateExperienciaDto.evento) {
      await this.eventoModel.findByIdAndUpdate(experiencia.evento, updateExperienciaDto.evento).exec();
    }
    if (updateExperienciaDto.festividad) {
      await this.festividadModel.findByIdAndUpdate(experiencia.festividad, updateExperienciaDto.festividad).exec();
    }

    return this.experienciaModel.findByIdAndUpdate(id, updateExperienciaDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Experiencia> {
    const experiencia = await this.experienciaModel.findById(id).exec();
    if (!experiencia) {
      throw new Error('Experiencia not found');
    }

    await this.actividadModel.findByIdAndDelete(experiencia.actividad).exec();
    await this.destinoModel.findByIdAndDelete(experiencia.destino).exec();
    await this.eventoModel.findByIdAndDelete(experiencia.evento).exec();
    await this.festividadModel.findByIdAndDelete(experiencia.festividad).exec();

    return this.experienciaModel.findByIdAndDelete(id).exec();
  }

  async findAll(query: any): Promise<{ data: Experiencia[], total: number }> {
    const { page = 1, limit = 10, ...filters } = query;

    const offset = (page - 1) * limit;

    const filterCriteria = {};
    for (const key in filters) {
      if (filters[key]) {
        filterCriteria[key] = { $regex: filters[key], $options: 'i' }; // Filtrado con regex para búsqueda parcial
      }
    }

    const [data, total] = await Promise.all([
      this.experienciaModel
        .find(filterCriteria)
        .skip(offset)
        .limit(Number(limit))
        .populate('actividad destino evento festividad')  
        .exec(),
      this.experienciaModel.countDocuments(filterCriteria).exec(),
    ]);

    return { data, total };
  }
}
