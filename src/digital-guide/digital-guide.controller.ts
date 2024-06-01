import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { DigitalGuideService } from './digital-guide.service';
import { CreateExperienciaDto } from './dto/create-experiencia.dto';
import { UpdateExperienciaDto } from './dto/update-experiencia.dto';
import { ParseObjectIdPipe } from '../common/pipes/parse-object-id.pipe';

@Controller('digital-guide')
export class DigitalGuideController {
  constructor(private readonly digitalGuideService: DigitalGuideService) {}

  @Post('content')
  create(@Body() createExperienciaDto: CreateExperienciaDto) {
    return this.digitalGuideService.create(createExperienciaDto);
  }

  @Get('content/:id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.digitalGuideService.findOne(id);
  }

  @Put('content/:id')
  update(@Param('id', ParseObjectIdPipe) id: string, @Body() updateExperienciaDto: UpdateExperienciaDto) {
    return this.digitalGuideService.update(id, updateExperienciaDto);
  }

  @Delete('content/:id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.digitalGuideService.delete(id);
  }

  @Get('digital-guides')
  findAll(@Query() query: any) {
    return this.digitalGuideService.findAll(query);
  }
}
