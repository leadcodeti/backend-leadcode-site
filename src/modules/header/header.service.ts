import { Inject, Injectable } from '@nestjs/common';
import { Header } from '@prisma/client';
import { HeaderRepository } from './repositories/header.repository';
import { CreateHeaderDTO } from './dtos/CreateHeader.dto';
import { UpdateHeaderDTO } from './dtos/UpdateHeader.dto';

@Injectable()
export class HeaderService {
  constructor(
    @Inject('HeaderRepository')
    private readonly headerRepository: HeaderRepository,
  ) {}

  async create(data: CreateHeaderDTO): Promise<Header> {
    const headerExists = await this.headerRepository.findByLogo(data.logo);

    if (headerExists) {
      throw new Error('This header already exists.');
    }

    return this.headerRepository.create(data);
  }

  async list() {
    return await this.headerRepository.findAll();
  }

  async update(id: string, data: UpdateHeaderDTO) {
    const headerExists = await this.headerRepository.findById(id);

    if (!headerExists) {
      throw new Error('This header does not exist.');
    }

    return await this.headerRepository.update(id, data);
  }

  async delete(id: string) {
    const headerExists = await this.headerRepository.findById(id);

    if (!headerExists) {
      throw new Error('This header does not exist.');
    }

    return this.headerRepository.delete(id);
  }
}
