import { Inject, Injectable } from '@nestjs/common';
import { TestemonialSection } from '@prisma/client';
import { CreateTestemonialSectionDTO } from './dtos/CreateTestemonialSection.dto';
import { TestemonialSectionRepository } from './repositories/testemonialSection.repository';
import { UpdateTestemonialSectionDTO } from './dtos/UpdateTestemonialSection.dto';

@Injectable()
export class TestemonialSectionService {
  constructor(
    @Inject('TestemonialSectionRepository')
    private readonly testemonialSectionRepository: TestemonialSectionRepository,
  ) {}

  async create(data: CreateTestemonialSectionDTO): Promise<TestemonialSection> {
    return await this.testemonialSectionRepository.create(data);
  }

  async list(): Promise<TestemonialSection[]> {
    return await this.testemonialSectionRepository.findAll();
  }

  async update(
    id: string,
    data: UpdateTestemonialSectionDTO,
  ): Promise<TestemonialSection> {
    const testemonialSectionExists =
      await this.testemonialSectionRepository.findById(id);

    if (!testemonialSectionExists) {
      throw new Error('This Testemonial Section does not exists.');
    }
    return this.testemonialSectionRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return this.testemonialSectionRepository.delete(id);
  }
}
