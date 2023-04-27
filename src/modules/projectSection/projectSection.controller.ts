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

@Controller('/project_sections')
export class ProjectSectionController {
  constructor(private readonly projectSectionService: ProjectSectionService) {}

  @Post()
  async create(@Body() data: CreateProjectSectionDTO): Promise<ProjectSection> {
    return this.projectSectionService.create(data);
  }

  @Get()
  async list(): Promise<ProjectSection[]> {
    return this.projectSectionService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateProjectSectionDTO,
  ): Promise<ProjectSection> {
    return this.projectSectionService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.projectSectionService.delete(id);
  }
}
