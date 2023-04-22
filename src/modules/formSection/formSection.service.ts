import { Inject, Injectable } from '@nestjs/common';
import { FormSectionRepository } from './repositories/formSection.repository';
import { CreateFormSectionDTO } from './dtos/CreateFormSection.dto';
import { FormSection } from '@prisma/client';
import { UpdateFormSectionDTO } from './dtos/UpdateFormSection.dto';

@Injectable()
export class FormSectionService {
  constructor(
    @Inject('FormSectionRepository')
    private readonly formSectionRepository: FormSectionRepository,
  ) {}

  async create(data: CreateFormSectionDTO): Promise<FormSection> {
    const formSectionExists = await this.formSectionRepository.findByTitle(
      data.title,
    );

    if (formSectionExists) {
      throw new Error('This Form Section already exists.');
    }

    return await this.formSectionRepository.create(data);
  }

  async list(): Promise<FormSection[]> {
    return await this.formSectionRepository.findAll();
  }

  async update(id: string, data: UpdateFormSectionDTO): Promise<FormSection> {
    const formSectionExists = await this.formSectionRepository.findById(id);

    if (!formSectionExists) {
      throw new Error('This Form Section does not exists.');
    }
    return this.formSectionRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return this.formSectionRepository.delete(id);
  }
}
