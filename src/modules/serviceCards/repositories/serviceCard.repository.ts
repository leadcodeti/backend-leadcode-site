import { ServiceCard } from '@prisma/client';
import { CreateServiceCardDTO } from '../dtos/CreateServiceCard.dto';
import { UpdateServiceCardDTO } from '../dtos/UpdateServiceCard.dto';

export interface ServiceCardRepository {
  create(data: CreateServiceCardDTO): Promise<ServiceCard>;
  findAll(): Promise<ServiceCard[]>;
  update(id: string, data: UpdateServiceCardDTO): Promise<ServiceCard>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<ServiceCard>;
  findByTitle(title: string): Promise<ServiceCard>;
}
