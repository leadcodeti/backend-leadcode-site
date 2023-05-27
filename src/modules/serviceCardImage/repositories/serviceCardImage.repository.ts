import { ServiceCardImage } from '@prisma/client';
import { CreateServiceCardImageDTO } from '../dtos/CreateServiceCardImage.dto';
import { UpdateServiceCardImageDTO } from '../dtos/UpdateServiceCardImage.dto';

export interface ServiceCardImageRepository {
  create(data: CreateServiceCardImageDTO): Promise<ServiceCardImage>;
  findAll(): Promise<ServiceCardImage[]>;
  update(
    key: string,
    data: UpdateServiceCardImageDTO,
  ): Promise<ServiceCardImage>;
  delete(key: string): Promise<void>;
  findById(key: string): Promise<ServiceCardImage>;
}
