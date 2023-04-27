import { Inject, Injectable } from '@nestjs/common';
import { ProjectSection } from '@prisma/client';
import { ProjectSectionRepository } from './repositories/projectSection.repository';
import { CreateProjectSectionDTO } from './dtos/CreateProjectSection.dto';
import { UpdateProjectSectionDTO } from './dtos/UpdateProjectSection.dto';

@Injectable()
export class ProjectSectionService {
  constructor(
    @Inject('ProjectSectionRepository')
    private readonly projectSectionRepository: ProjectSectionRepository,
  ) {}

  async create(data: CreateProjectSectionDTO): Promise<ProjectSection> {
    const projectExists = await this.projectSectionRepository.findByTitle(
      data.title,
    );

    if (projectExists) {
      throw new Error('This Project Service already exists.');
    }

    return await this.projectSectionRepository.create(data);
  }

  async list(): Promise<ProjectSection[]> {
    return await this.projectSectionRepository.findAll();
  }

  async update(
    id: string,
    data: UpdateProjectSectionDTO,
  ): Promise<ProjectSection> {
    const projectSectionExists = await this.projectSectionRepository.findById(
      id,
    );

    if (!projectSectionExists) {
      throw new Error('This Project Service does not exists.');
    }
    return this.projectSectionRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return this.projectSectionRepository.delete(id);
  }
}
