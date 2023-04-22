import { FormRegister } from '@prisma/client';
import { CreateFormRegisterDTO } from '../dtos/CreateFormRegister.dto';
import { UpdateFormRegisterDTO } from '../dtos/UpdateFormRegister.dto';

export interface FormRegisterRepository {
  create(data: CreateFormRegisterDTO): Promise<FormRegister>;
  findAll(): Promise<FormRegister[]>;
  update(id: string, data: UpdateFormRegisterDTO): Promise<FormRegister>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<FormRegister>;
}
