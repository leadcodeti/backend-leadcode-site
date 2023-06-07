import { Functionality } from '@prisma/client';
import { CreateFunctionalityDTO } from '../dtos/CreateFunctionality.dto';
import { UpdateFuncionalityDTO } from '../dtos/UpdateFunctionality.dto';

export interface FunctionalityRepository {
  create(data: CreateFunctionalityDTO): Promise<Functionality>;
  findAll(): Promise<Functionality[]>;
  update(id: string, data: UpdateFuncionalityDTO): Promise<Functionality>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Functionality>;
  findByName(title: string): Promise<Functionality>;
}
