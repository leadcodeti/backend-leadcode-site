import { Inject, Injectable } from '@nestjs/common';
import { ProjectCardRepository } from './repositories/projectCard.repository';
import { CreateProjectCardDTO } from './dtos/CreateProjectCard.dto';
import { ProjectCard } from '@prisma/client';
import { UpdateProjectCardDTO } from './dtos/UpdateProjectCard.dto';
import { ListProjectCardsDTO } from './dtos/ListProjectCards.dto';

@Injectable()
export class ProjectCardService {
  constructor(
    @Inject('ProjectCardRepository')
    private readonly projectCardRepository: ProjectCardRepository,
  ) {}

  async create(data: CreateProjectCardDTO): Promise<ProjectCard> {
    const projectExists = await this.projectCardRepository.findByName(
      data.name,
    );

    if (projectExists) {
      throw new Error('This Project Card already exists.');
    }

    return await this.projectCardRepository.create(data);
  }

  async list(): Promise<ProjectCard[]> {
    return await this.projectCardRepository.findAll();
  }

  async listFullData(): Promise<ListProjectCardsDTO[]> {
    return await this.projectCardRepository.listProjectCardsFullData();
  }

  async update(id: string, data: UpdateProjectCardDTO): Promise<ProjectCard> {
    const projectSectionExists = await this.projectCardRepository.findById(id);

    if (!projectSectionExists) {
      throw new Error('This Project Card does not exists.');
    }
    return this.projectCardRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return this.projectCardRepository.delete(id);
  }
}
