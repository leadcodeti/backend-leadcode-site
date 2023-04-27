import { Inject, Injectable } from '@nestjs/common';
import { TechCarousel } from '@prisma/client';
import { TechCarouselRepository } from './repositories/techCarousel.repository';
import { CreateTechCarouselDTO } from './dtos/CreateTechCarousel.dto';
import { UpdateTechCarouselDTO } from './dtos/UpdateTechCarousel.dto';

@Injectable()
export class TechCarouselService {
  constructor(
    @Inject('TechCarouselRepository')
    private readonly techCarouselRepository: TechCarouselRepository,
  ) {}

  async create(data: CreateTechCarouselDTO): Promise<TechCarousel> {
    const techCarouselExists = await this.techCarouselRepository.findByName(
      data.name,
    );

    if (techCarouselExists) {
      throw new Error('This Tech Carousel already exists.');
    }

    const techCarousel = await this.techCarouselRepository.create(data);

    return techCarousel;
  }

  async list(): Promise<TechCarousel[]> {
    return await this.techCarouselRepository.findAll();
  }

  async update(id: string, data: UpdateTechCarouselDTO): Promise<TechCarousel> {
    return await this.techCarouselRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return await this.techCarouselRepository.delete(id);
  }
}
