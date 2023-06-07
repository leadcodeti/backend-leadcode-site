import { AppliedTechnology } from '@prisma/client';
import { CreateAppliedTechnologyDTO } from '../dtos/CreateAppliedTechnology.dto';
import { UpdateAppliedTechnologyDTO } from '../dtos/UpdateAppliedTechnology.dto';

export interface AppliedTechnologyRepository {
  create(data: CreateAppliedTechnologyDTO): Promise<AppliedTechnology>;
  findAll(): Promise<AppliedTechnology[]>;
  update(
    id: string,
    data: UpdateAppliedTechnologyDTO,
  ): Promise<AppliedTechnology>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<AppliedTechnology>;
  findByName(title: string): Promise<AppliedTechnology>;
}
