import { Inject, Injectable } from '@nestjs/common';
import { ServiceCard } from '@prisma/client';
import { ServiceCardRepository } from './repositories/serviceCard.repository';
import { UpdateServiceCardDTO } from './dtos/UpdateServiceCard.dto';
import { CreateServiceCardDTO } from './dtos/CreateServiceCard.dto';

@Injectable()
export class ServiceCardService {
  constructor(
    @Inject('ServiceCardRepository')
    private readonly serviceCardRepository: ServiceCardRepository,
  ) {}

  async create(data: CreateServiceCardDTO): Promise<ServiceCard> {
    const serviceCardExists = await this.serviceCardRepository.findByTitle(
      data.title,
    );

    if (serviceCardExists) {
      throw new Error('This Service Card already exists.');
    }

    return await this.serviceCardRepository.create(data);
  }

  async list(): Promise<ServiceCard[]> {
    return await this.serviceCardRepository.findAll();
  }

  async update(id: string, data: UpdateServiceCardDTO): Promise<ServiceCard> {
    const formRegisterExistss = await this.serviceCardRepository.findById(id);

    if (!formRegisterExistss) {
      throw new Error('This Service Card does not exists.');
    }
    return this.serviceCardRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return this.serviceCardRepository.delete(id);
  }
}
