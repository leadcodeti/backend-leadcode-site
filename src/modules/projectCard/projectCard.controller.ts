import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProjectCardService } from './projectCard.service';
import { ProjectCard } from '@prisma/client';
import { CreateProjectCardDTO } from './dtos/CreateProjectCard.dto';
import { UpdateProjectCardDTO } from './dtos/UpdateProjectCard.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ProjectCardEntity } from './entities/projectCard.entity';

@ApiTags('Seção de projetos')
@Controller('/project_cards')
export class ProjectCardController {
  constructor(private readonly projectCardService: ProjectCardService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: ProjectCardEntity,
  })
  @Post()
  async create(@Body() data: CreateProjectCardDTO): Promise<ProjectCard> {
    return this.projectCardService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: ProjectCardEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<ProjectCard[]> {
    return this.projectCardService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: ProjectCardEntity,
  })
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateProjectCardDTO,
  ): Promise<ProjectCard> {
    return this.projectCardService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.projectCardService.delete(id);
  }
}
