import { FormSection } from '@prisma/client';
import { CreateFormSectionDTO } from '../dtos/CreateFormSection.dto';
import { UpdateFormSectionDTO } from '../dtos/UpdateFormSection.dto';

export interface FormSectionRepository {
  create(data: CreateFormSectionDTO): Promise<FormSection>;
  findAll(): Promise<FormSection[]>;
  update(id: string, data: UpdateFormSectionDTO): Promise<FormSection>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<FormSection>;
  findByTitle(title: string): Promise<FormSection>;
}
