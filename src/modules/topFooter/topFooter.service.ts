import { Inject, Injectable } from '@nestjs/common';
import { TopFooterRepository } from './repositories/topFooter.repository';
import { CreateTopFooterDTO } from './dtos/CreateTopFooter.dto';
import { UpdateTopFooterDTO } from './dtos/UpdateTopFooter.dto';
import { TopFooter } from '@prisma/client';

@Injectable()
export class TopFooterService {
  constructor(
    @Inject('TopFooterRepository')
    private readonly topFooterRepository: TopFooterRepository,
  ) {}

  async create(data: CreateTopFooterDTO): Promise<TopFooter> {
    const topFooterExists = await this.topFooterRepository.findByLogo(
      data.logo,
    );

    if (topFooterExists) {
      throw new Error('This Testemonial already exists.');
    }

    const topFooter = await this.topFooterRepository.create(data);

    return topFooter;
  }

  async list(): Promise<TopFooter[]> {
    return await this.topFooterRepository.findAll();
  }

  async update(id: string, data: UpdateTopFooterDTO): Promise<TopFooter> {
    return await this.topFooterRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return await this.topFooterRepository.delete(id);
  }
}
