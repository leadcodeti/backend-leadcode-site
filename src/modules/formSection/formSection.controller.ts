import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FormSectionService } from './formSection.service';
import { CreateFormSectionDTO } from './dtos/CreateFormSection.dto';
import { FormSection } from '@prisma/client';
import { UpdateFormSectionDTO } from './dtos/UpdateFormSection.dto';

@Controller('/form_sections')
export class FormSectionController {
  constructor(private readonly formSectionService: FormSectionService) {}

  @Post()
  async create(@Body() data: CreateFormSectionDTO): Promise<FormSection> {
    return this.formSectionService.create(data);
  }

  @Get()
  async list(): Promise<FormSection[]> {
    return this.formSectionService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateFormSectionDTO,
  ): Promise<FormSection> {
    return this.formSectionService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.formSectionService.delete(id);
  }
}
