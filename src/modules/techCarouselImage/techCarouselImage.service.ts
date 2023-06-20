import { Inject, Injectable } from '@nestjs/common';
import { FileService } from 'src/utils/file';
import { TechCarouselImageRepository } from './repositories/techCarouselImage.repository';
import { CreateTechCarouselImageDTO } from './dtos/CreateTechCarouselImage.dto';
import { TechCarouselImage } from '@prisma/client';
import { UpdateTechCarouselImageDTO } from './dtos/UpdateTechCarouselImage.dto';

@Injectable()
export class TechCarouselImageService {
  constructor(
    @Inject('TechCarouselImageRepository')
    private readonly techCarouselImageRepository: TechCarouselImageRepository,
    private readonly fileService: FileService,
  ) {}

  async create(data: CreateTechCarouselImageDTO): Promise<TechCarouselImage> {
    const techCarouselImage = await this.techCarouselImageRepository.findById(
      data.techCarouselId,
    );

    if (techCarouselImage) {
      await this.fileService.deleteFile(
        `${process.env.TMP_BASE}/techCarouselImages/${techCarouselImage.key}`,
      );
      await this.techCarouselImageRepository.delete(data.techCarouselId);
    }

    data.url = `${process.env.TECH_CAROUSEL_IMAGE_URL}/${data.key}`;
    return await this.techCarouselImageRepository.create(data);
  }

  async list() {
    return await this.techCarouselImageRepository.findAll();
  }

  async update(
    id: string,
    data: UpdateTechCarouselImageDTO,
  ): Promise<TechCarouselImage> {
    const heroExists = await this.techCarouselImageRepository.findById(id);

    if (!heroExists) {
      throw new Error('This image does not exists.');
    }

    return await this.techCarouselImageRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    const heroExists = await this.techCarouselImageRepository.findById(id);

    if (!heroExists) {
      throw new Error('This image does not exists.');
    }
    return await this.techCarouselImageRepository.delete(id);
  }
}
