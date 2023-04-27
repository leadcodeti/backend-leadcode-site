import { Inject, Injectable } from '@nestjs/common';
import { TopFooterLinkRepository } from './repositories/topFooterLink.repository';
import { TopFooterLink } from '@prisma/client';
import { CreateTopFooterLinkDTO } from './dtos/CreateTopFooterLink.dto';
import { UpdateTopFooterLinkDTO } from './dtos/UpdateTopFooterLink.dto';

@Injectable()
export class TopFooterLinkService {
  constructor(
    @Inject('TopFooterLinkRepository')
    private readonly topFooterLinkRepository: TopFooterLinkRepository,
  ) {}

  async create(data: CreateTopFooterLinkDTO): Promise<TopFooterLink> {
    const topFooterLinkExists =
      await this.topFooterLinkRepository.findByLinkName(data.name);

    if (topFooterLinkExists) {
      throw new Error('This Top Footer Link already exists.');
    }

    const topFooterLink = await this.topFooterLinkRepository.create(data);

    return topFooterLink;
  }

  async list(): Promise<TopFooterLink[]> {
    return await this.topFooterLinkRepository.findAll();
  }

  async update(
    id: string,
    data: UpdateTopFooterLinkDTO,
  ): Promise<TopFooterLink> {
    const topFooterLinkExists = await this.topFooterLinkRepository.findById(
      data.id,
    );

    if (!topFooterLinkExists) {
      throw new Error('This Top Footer Link does not exists.');
    }

    return await this.topFooterLinkRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return await this.topFooterLinkRepository.delete(id);
  }
}
