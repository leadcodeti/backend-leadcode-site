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
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ServiceSectionEntity } from './entities/serviceSection.entity';

@ApiTags('Seção de serviços')
@Controller('/service_sections')
export class ServiceSectionController {
  constructor(private readonly serviceSectionService: ServiceSectionService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: ServiceSectionEntity,
  })
  @Post()
  async create(@Body() data: CreateServiceSectionDTO): Promise<ServiceSection> {
    return this.serviceSectionService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: ServiceSectionEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<ServiceSection[]> {
    return this.serviceSectionService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: ServiceSectionEntity,
  })
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateServiceSectionDTO,
  ): Promise<ServiceSection> {
    return this.serviceSectionService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.serviceSectionService.delete(id);
  }
}
