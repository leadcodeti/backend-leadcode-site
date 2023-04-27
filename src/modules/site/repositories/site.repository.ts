import { Site } from '@prisma/client';
import { CreateSiteDTO } from '../dtos/CreateSite.dto';
import { UpdateSiteDTO } from '../dtos/UpdateSite.dto';

export interface SiteRepository {
  create(data: CreateSiteDTO): Promise<Site>;
  findAll(): Promise<Site[]>;
  update(id: string, data: UpdateSiteDTO): Promise<Site>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Site>;
}
