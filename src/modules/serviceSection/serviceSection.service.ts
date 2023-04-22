import { Inject, Injectable } from '@nestjs/common';
import { ServiceSection } from '@prisma/client';
import { ServiceSectionRepository } from './repositories/serviceSection.repository';
import { UpdateServiceSectionDTO } from './dtos/UpdateServiceSection.dto';
import { CreateServiceSectionDTO } from './dtos/CreateServiceSection.dto';

@Injectable()
export class ServiceSectionService {
  constructor(
    @Inject('ServiceSectionRepository')
    private readonly serviceSectionRepository: ServiceSectionRepository,
  ) {}

  async create(data: CreateServiceSectionDTO): Promise<ServiceSection> {
    return await this.serviceSectionRepository.create(data);
  }

  async list(): Promise<ServiceSection[]> {
    return await this.serviceSectionRepository.findAll();
  }

  async update(
    id: string,
    data: UpdateServiceSectionDTO,
  ): Promise<ServiceSection> {
    const formRegisterExistss = await this.serviceSectionRepository.findById(
      id,
    );

    if (!formRegisterExistss) {
      throw new Error('This Service Section does not exists.');
    }
    return this.serviceSectionRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return this.serviceSectionRepository.delete(id);
  }
}
