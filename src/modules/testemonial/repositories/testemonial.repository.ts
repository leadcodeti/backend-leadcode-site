import { Testemonial } from '@prisma/client';
import { CreateTestemonialDTO } from '../dtos/CreateTestemonial.dto';
import { UpdateTestemonialDTO } from '../dtos/UpdateTestemonial.dto';

export interface TestemonialRepository {
  create(data: CreateTestemonialDTO): Promise<Testemonial>;
  findAll(): Promise<Testemonial[]>;
  update(id: string, data: UpdateTestemonialDTO): Promise<Testemonial>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Testemonial>;
  findByClientName(name: string): Promise<Testemonial>;
}
