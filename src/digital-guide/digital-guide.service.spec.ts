import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Experiencia } from './schemas/experiencia.schema';
import { CreateExperienciaDto } from './dto/create-experiencia.dto';
import { UpdateExperienciaDto } from './dto/update-experiencia.dto';

@Injectable()
export class DigitalGuideService {
  constructor(@InjectModel(Experiencia.name) private experienciaModel: Model<Experiencia>) {}

  async create(createExperienciaDto: CreateExperienciaDto): Promise<Experiencia> {
    const createdExperiencia = new this.experienciaModel(createExperienciaDto);
    return createdExperiencia.save();
  }

  async findAll(): Promise<Experiencia[]> {
    return this.experienciaModel.find().exec();
  }

  async findOne(id: string): Promise<Experiencia> {
    return this.experienciaModel.findById(id).exec();
  }

  async update(id: string, updateExperienciaDto: UpdateExperienciaDto): Promise<Experiencia> {
    return this.experienciaModel.findByIdAndUpdate(id, updateExperienciaDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Experiencia> {
    return this.experienciaModel.findByIdAndDelete(id).exec();
  }
}
