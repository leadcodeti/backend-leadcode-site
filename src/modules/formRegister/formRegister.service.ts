import { Inject, Injectable } from '@nestjs/common';
import { FormRegisterRepository } from './repositories/formRegister.repository';
import { CreateFormRegisterDTO } from './dtos/CreateFormRegister.dto';
import { FormRegister } from '@prisma/client';
import { UpdateFormRegisterDTO } from './dtos/UpdateFormRegister.dto';

@Injectable()
export class FormRegisterService {
  constructor(
    @Inject('FormRegisterRepository')
    private readonly formRegisterRepository: FormRegisterRepository,
  ) {}

  async create(data: CreateFormRegisterDTO): Promise<FormRegister> {
    return await this.formRegisterRepository.create(data);
  }

  async list(): Promise<FormRegister[]> {
    return await this.formRegisterRepository.findAll();
  }

  async update(id: string, data: UpdateFormRegisterDTO): Promise<FormRegister> {
    const formRegisterExistss = await this.formRegisterRepository.findById(id);

    if (!formRegisterExistss) {
      throw new Error('This Form Section does not exists.');
    }
    return this.formRegisterRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return this.formRegisterRepository.delete(id);
  }
}
