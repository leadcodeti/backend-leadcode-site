import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ServiceSection } from '@prisma/client';
import { ServiceSectionService } from './serviceSection.service';
import { UpdateServiceSectionDTO } from './dtos/UpdateServiceSection.dto';
import { CreateServiceSectionDTO } from './dtos/CreateServiceSection.dto';

@Controller('/service_sections')
export class ServiceSectionController {
  constructor(private readonly serviceSectionService: ServiceSectionService) {}

  @Post()
  async create(@Body() data: CreateServiceSectionDTO): Promise<ServiceSection> {
    return this.serviceSectionService.create(data);
  }

  @Get()
  async list(): Promise<ServiceSection[]> {
    return this.serviceSectionService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateServiceSectionDTO,
  ): Promise<ServiceSection> {
    return this.serviceSectionService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.serviceSectionService.delete(id);
  }
}
