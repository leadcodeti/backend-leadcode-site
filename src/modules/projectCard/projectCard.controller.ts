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

@Controller('/project_cards')
export class ProjectCardController {
  constructor(private readonly projectCardService: ProjectCardService) {}

  @Post()
  async create(@Body() data: CreateProjectCardDTO): Promise<ProjectCard> {
    return this.projectCardService.create(data);
  }

  @Get()
  async list(): Promise<ProjectCard[]> {
    return this.projectCardService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateProjectCardDTO,
  ): Promise<ProjectCard> {
    return this.projectCardService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.projectCardService.delete(id);
  }
}
