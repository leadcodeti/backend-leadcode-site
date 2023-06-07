import { Inject, Injectable } from '@nestjs/common';
import { HeaderLink } from '@prisma/client';
import { CreateHeaderLinkDTO } from './dtos/CreateHeaderLink.dto';
import { HeaderLinkRepository } from './repositories/headerLink.repository';
import { UpdateHeaderLinkDTO } from './dtos/UpdateHeaderLink.dto';

@Injectable()
export class HeaderLinkService {
  constructor(
    @Inject('HeaderLinkRepository')
    private headerLinkRepository: HeaderLinkRepository,
  ) {}

  async create(data: CreateHeaderLinkDTO): Promise<HeaderLink> {
    const headerLinkExists = await this.headerLinkRepository.findByName(
      data.name,
    );

    if (headerLinkExists) {
      throw new Error('This link already exists.');
    }

    const headerLink = await this.headerLinkRepository.create(data);

    return headerLink;
  }

  async list() {
    return await this.headerLinkRepository.findAll();
  }

  async update(id: string, data: UpdateHeaderLinkDTO) {
    const headerLinkExists = await this.headerLinkRepository.findById(id);

    if (!headerLinkExists) {
      throw new Error('This link does not exist.');
    }

    return await this.headerLinkRepository.update(id, data);
  }

  async delete(id: string) {
    const headerLinkExists = await this.headerLinkRepository.findById(id);

    if (!headerLinkExists) {
      throw new Error('This link does not exist.');
    }

    return this.headerLinkRepository.delete(id);
  }
}
