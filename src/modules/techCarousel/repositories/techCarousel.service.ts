import { Inject, Injectable } from '@nestjs/common';
import { TechCarouselRepository } from './techCarousel.repository';
import { CreateTechCarouselDTO } from '../dtos/CreateTechCarousel.dto';
import { TechCarousel } from '@prisma/client';

@Injectable()
export class TechCarouselService {
  constructor(
    @Inject('TechCarouselRepository')
    private techCarouselRepository: TechCarouselRepository,
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
}
