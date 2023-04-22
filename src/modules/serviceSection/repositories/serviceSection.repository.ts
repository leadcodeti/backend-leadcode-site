import { ServiceSection } from '@prisma/client';
import { CreateServiceSectionDTO } from '../dtos/CreateServiceSection.dto';
import { UpdateServiceSectionDTO } from '../dtos/UpdateServiceSection.dto';

export interface ServiceSectionRepository {
  create(data: CreateServiceSectionDTO): Promise<ServiceSection>;
  findAll(): Promise<ServiceSection[]>;
  update(id: string, data: UpdateServiceSectionDTO): Promise<ServiceSection>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<ServiceSection>;
}
