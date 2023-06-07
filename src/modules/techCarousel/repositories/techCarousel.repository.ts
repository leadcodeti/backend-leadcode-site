import { TechCarousel } from '@prisma/client';
import { CreateTechCarouselDTO } from '../dtos/CreateTechCarousel.dto';
import { UpdateTechCarouselDTO } from '../dtos/UpdateTechCarousel.dto';

export interface TechCarouselRepository {
  create(data: CreateTechCarouselDTO): Promise<TechCarousel>;
  findAll(): Promise<TechCarousel[]>;
  update(id: string, data: UpdateTechCarouselDTO): Promise<TechCarousel>;
  delete(name: string): Promise<void>;
  findById(id: string): Promise<TechCarousel>;
  findByName(name: string): Promise<TechCarousel>;
}
