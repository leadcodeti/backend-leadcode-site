import { ProjectSection } from '@prisma/client';
import { CreateProjectSectionDTO } from '../dtos/CreateProjectSection.dto';
import { UpdateProjectSectionDTO } from '../dtos/UpdateProjectSection.dto';

export interface ProjectSectionRepository {
  create(data: CreateProjectSectionDTO): Promise<ProjectSection>;
  findAll(): Promise<ProjectSection[]>;
  update(id: string, data: UpdateProjectSectionDTO): Promise<ProjectSection>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<ProjectSection>;
  findByTitle(title: string): Promise<ProjectSection>;
}
