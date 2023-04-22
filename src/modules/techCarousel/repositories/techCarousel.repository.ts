import { TechCarousel } from '@prisma/client';
import { CreateTechCarouselDTO } from '../dtos/CreateTechCarousel.dto';

export interface TechCarouselRepository {
  create(data: CreateTechCarouselDTO): Promise<TechCarousel>;
  findByName(name: string): Promise<TechCarousel>;
}
