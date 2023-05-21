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
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FormSectionEntity } from './entities/formSection.entity';

@ApiTags('Seção de formulário')
@Controller('/form_sections')
export class FormSectionController {
  constructor(private readonly formSectionService: FormSectionService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: FormSectionEntity,
  })
  @Post()
  async create(@Body() data: CreateFormSectionDTO): Promise<FormSection> {
    return this.formSectionService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: FormSectionEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<FormSection[]> {
    return this.formSectionService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: FormSectionEntity,
  })
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateFormSectionDTO,
  ): Promise<FormSection> {
    return this.formSectionService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.formSectionService.delete(id);
  }
}
