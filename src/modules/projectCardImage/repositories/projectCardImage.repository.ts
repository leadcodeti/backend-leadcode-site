import { ProjectCardImage } from '@prisma/client';
import { CreateProjectCardImageDTO } from '../dtos/CreateProjectCardImage.dto';
import { UpdateProjectCardImageDTO } from '../dtos/UpdateProjectCardImage.dto';

export interface ProjectCardImageRepository {
  create(data: CreateProjectCardImageDTO): Promise<ProjectCardImage>;
  findAll(): Promise<ProjectCardImage[]>;
  update(
    key: string,
    data: UpdateProjectCardImageDTO,
  ): Promise<ProjectCardImage>;
  delete(key: string): Promise<void>;
  findById(key: string): Promise<ProjectCardImage>;
}
