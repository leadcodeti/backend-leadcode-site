import { Inject, Injectable } from '@nestjs/common';
import { AppliedTechnologyRepository } from './repositories/appliedTechnology.repository';
import { AppliedTechnology } from '@prisma/client';
import { CreateAppliedTechnologyDTO } from './dtos/CreateAppliedTechnology.dto';
import { UpdateAppliedTechnologyDTO } from './dtos/UpdateAppliedTechnology.dto';

@Injectable()
export class AppliedTechnologyService {
  constructor(
    @Inject('AppliedTechnologyRepository')
    private readonly appliedTechnologyRepository: AppliedTechnologyRepository,
  ) {}

  async create(data: CreateAppliedTechnologyDTO): Promise<AppliedTechnology> {
    return await this.appliedTechnologyRepository.create(data);
  }

  async list(): Promise<AppliedTechnology[]> {
    return await this.appliedTechnologyRepository.findAll();
  }

  async update(
    id: string,
    data: UpdateAppliedTechnologyDTO,
  ): Promise<AppliedTechnology> {
    const technologyExists = await this.appliedTechnologyRepository.findById(
      id,
    );

    if (!technologyExists) {
      throw new Error('This Technology does not exists.');
    }
    return this.appliedTechnologyRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    const technologyExists = await this.appliedTechnologyRepository.findById(
      id,
    );

    if (!technologyExists) {
      throw new Error('This Technology does not exists.');
    }

    return this.appliedTechnologyRepository.delete(id);
  }
}
