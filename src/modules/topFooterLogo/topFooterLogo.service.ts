import { Inject, Injectable } from '@nestjs/common';
import { FileService } from 'src/utils/file';
import { TopFooterLogoRepository } from './repositories/topFooterLogo.repository';
import { CreateTopFooterLogoDTO } from './dtos/CreateTopFooterLogo.dto';
import { TopFooterLogo } from '@prisma/client';
import { UpdateTopFooterLogoDTO } from './dtos/UpdateTopFooterLogo.dto';

@Injectable()
export class TopFooterLogoService {
  constructor(
    @Inject('TopFooterLogoRepository')
    private readonly topFooterLogoRepository: TopFooterLogoRepository,
    private readonly fileService: FileService,
  ) {}

  async create(data: CreateTopFooterLogoDTO): Promise<TopFooterLogo> {
    const topFooterLogo = await this.topFooterLogoRepository.findById(
      data.topFooterId,
    );

    if (topFooterLogo) {
      await this.fileService.deleteFile(`./tmp/heros/${topFooterLogo.key}`);
      await this.topFooterLogoRepository.delete(data.topFooterId);
    }

    data.url = `${process.env.TOP_FOOTER_LOGO_URL}/${data.key}`;
    return await this.topFooterLogoRepository.create(data);
  }

  async list() {
    return await this.topFooterLogoRepository.findAll();
  }

  async update(
    id: string,
    data: UpdateTopFooterLogoDTO,
  ): Promise<TopFooterLogo> {
    const topFooterLogoExists = await this.topFooterLogoRepository.findById(id);

    if (!topFooterLogoExists) {
      throw new Error('This logo does not exists.');
    }

    return await this.topFooterLogoRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    const topFooterLogoExists = await this.topFooterLogoRepository.findById(id);

    if (!topFooterLogoExists) {
      throw new Error('This logo does not exists.');
    }
    return await this.topFooterLogoRepository.delete(id);
  }
}
