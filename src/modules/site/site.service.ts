import { Inject, Injectable } from '@nestjs/common';
import { SiteRepository } from './repositories/site.repository';
import { CreateSiteDTO } from './dtos/CreateSite.dto';
import { Site } from '@prisma/client';
import { UpdateSiteDTO } from './dtos/UpdateSite.dto';

@Injectable()
export class SiteService {
  constructor(
    @Inject('SiteRepository')
    private readonly siteRepository: SiteRepository,
  ) {}

  async create(data: CreateSiteDTO): Promise<Site> {
    const site = await this.siteRepository.create(data);
    console.log('aqui');

    return site;
  }

  async list(): Promise<Site[]> {
    return await this.siteRepository.findAll();
  }

  async update(id: string, data: UpdateSiteDTO): Promise<Site> {
    const siteExists = await this.siteRepository.findById(data.id);

    if (!siteExists) {
      throw new Error('This Site does not exists.');
    }

    return await this.siteRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return await this.siteRepository.delete(id);
  }
}
