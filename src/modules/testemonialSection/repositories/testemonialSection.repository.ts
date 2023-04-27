import { TestemonialSection } from '@prisma/client';
import { CreateTestemonialSectionDTO } from '../dtos/CreateTestemonialSection.dto';
import { UpdateTestemonialSectionDTO } from '../dtos/UpdateTestemonialSection.dto';

export interface TestemonialSectionRepository {
  create(data: CreateTestemonialSectionDTO): Promise<TestemonialSection>;
  findAll(): Promise<TestemonialSection[]>;
  update(
    id: string,
    data: UpdateTestemonialSectionDTO,
  ): Promise<TestemonialSection>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<TestemonialSection>;
}
