import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProjectSection } from '@prisma/client';
import { ProjectSectionService } from './projectSection.service';
import { CreateProjectSectionDTO } from './dtos/CreateProjectSection.dto';
import { UpdateProjectSectionDTO } from './dtos/UpdateProjectSection.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ProjectSectionEntity } from './entities/projectSection.entity';

@ApiTags('Seção de projetos')
@Controller('/project_sections')
export class ProjectSectionController {
  constructor(private readonly projectSectionService: ProjectSectionService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: ProjectSectionEntity,
  })
  @Post()
  async create(@Body() data: CreateProjectSectionDTO): Promise<ProjectSection> {
    return this.projectSectionService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: ProjectSectionEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<ProjectSection[]> {
    return this.projectSectionService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: ProjectSectionEntity,
  })
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateProjectSectionDTO,
  ): Promise<ProjectSection> {
    return this.projectSectionService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.projectSectionService.delete(id);
  }
}
