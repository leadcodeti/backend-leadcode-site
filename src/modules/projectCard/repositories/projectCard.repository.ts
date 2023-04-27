import { ProjectCard } from '@prisma/client';
import { CreateProjectCardDTO } from '../dtos/CreateProjectCard.dto';
import { UpdateProjectCardDTO } from '../dtos/UpdateProjectCard.dto';

export interface ProjectCardRepository {
  create(data: CreateProjectCardDTO): Promise<ProjectCard>;
  findAll(): Promise<ProjectCard[]>;
  update(id: string, data: UpdateProjectCardDTO): Promise<ProjectCard>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<ProjectCard>;
  findByName(title: string): Promise<ProjectCard>;
}
