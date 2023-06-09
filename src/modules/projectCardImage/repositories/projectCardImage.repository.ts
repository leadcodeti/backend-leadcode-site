import { ProjectCardImage } from '@prisma/client';
import { CreateProjectCardImageDTO } from '../dtos/CreateProjectCardImage.dto';

export interface ProjectCardImageRepository {
  create(data: CreateProjectCardImageDTO): Promise<ProjectCardImage>;
  findAll(): Promise<ProjectCardImage[]>;
  delete(key: string): Promise<void>;
  findByKey(key: string): Promise<ProjectCardImage>;
}
