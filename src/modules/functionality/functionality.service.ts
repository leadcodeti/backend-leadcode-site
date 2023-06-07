import { Inject, Injectable } from '@nestjs/common';
import { FunctionalityRepository } from './repositories/funcionality.repository';
import { CreateFunctionalityDTO } from './dtos/CreateFunctionality.dto';
import { Functionality } from '@prisma/client';
import { UpdateFunctionalityDTO } from './dtos/UpdateFunctionality.dto';

@Injectable()
export class FunctionalityService {
  constructor(
    @Inject('FunctionalityRepository')
    private readonly functionalityRepository: FunctionalityRepository,
  ) {}

  async create(data: CreateFunctionalityDTO): Promise<Functionality> {
    const functionalityExists = await this.functionalityRepository.findByName(
      data.name,
    );

    if (functionalityExists) {
      throw new Error('This Technology already exists.');
    }

    return await this.functionalityRepository.create(data);
  }

  async list(): Promise<Functionality[]> {
    return await this.functionalityRepository.findAll();
  }

  async update(
    id: string,
    data: UpdateFunctionalityDTO,
  ): Promise<Functionality> {
    const functionalityExists = await this.functionalityRepository.findById(id);

    if (!functionalityExists) {
      throw new Error('This Technology does not exists.');
    }
    return this.functionalityRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return this.functionalityRepository.delete(id);
  }
}
