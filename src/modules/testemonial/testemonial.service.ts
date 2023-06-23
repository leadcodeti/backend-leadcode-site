import { Inject, Injectable } from '@nestjs/common';
import { TestemonialRepository } from './repositories/testemonial.repository';
import { Testemonial } from '@prisma/client';
import { CreateTestemonialDTO } from './dtos/CreateTestemonial.dto';
import { UpdateTestemonialDTO } from './dtos/UpdateTestemonial.dto';
import { ListTestemonialsDTO } from './dtos/ListTestemonials.dto';

@Injectable()
export class TestemonialService {
  constructor(
    @Inject('TestemonialRepository')
    private readonly testemonialRepository: TestemonialRepository,
  ) {}

  async create(data: CreateTestemonialDTO): Promise<Testemonial> {
    const testemonialExists = await this.testemonialRepository.findByClientName(
      data.client_name,
    );

    if (testemonialExists) {
      throw new Error('This Testemonial already exists.');
    }

    const testemonial = await this.testemonialRepository.create(data);

    return testemonial;
  }

  async list(): Promise<ListTestemonialsDTO[]> {
    return await this.testemonialRepository.findAll();
  }

  async update(id: string, data: UpdateTestemonialDTO): Promise<Testemonial> {
    return await this.testemonialRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return await this.testemonialRepository.delete(id);
  }
}
