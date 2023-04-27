import { Inject, Injectable } from '@nestjs/common';
import { CreateBottomFooterDTO } from './dtos/CreateBottomFooter.dto';
import { BottomFooter } from '@prisma/client';
import { UpdateBottomFooterDTO } from './dtos/UpdateBottomFooter.dto';
import { BottomFooterRepository } from './repositories/bottomFooter.repository';

@Injectable()
export class BottomFooterService {
  constructor(
    @Inject('BottomFooterRepository')
    private readonly bottomFooterRepository: BottomFooterRepository,
  ) {}

  async create(data: CreateBottomFooterDTO): Promise<BottomFooter> {
    const bottomFooterExists = await this.bottomFooterRepository.findByLogo(
      data.logo,
    );

    if (bottomFooterExists) {
      throw new Error('This Bottom Footer already exists.');
    }

    const bottomFooter = await this.bottomFooterRepository.create(data);

    return bottomFooter;
  }

  async list(): Promise<BottomFooter[]> {
    return await this.bottomFooterRepository.findAll();
  }

  async update(id: string, data: UpdateBottomFooterDTO): Promise<BottomFooter> {
    const topFooterLinkExists = await this.bottomFooterRepository.findById(
      data.id,
    );

    if (!topFooterLinkExists) {
      throw new Error('This Bottom Footer does not exists.');
    }

    return await this.bottomFooterRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return await this.bottomFooterRepository.delete(id);
  }
}
