import { TechCarouselImage } from '@prisma/client';
import { CreateTechCarouselImageDTO } from '../dtos/CreateTechCarouselImage.dto';
import { UpdateTechCarouselImageDTO } from '../dtos/UpdateTechCarouselImage.dto';

export interface TechCarouselImageRepository {
  create(data: CreateTechCarouselImageDTO): Promise<TechCarouselImage>;
  findAll(): Promise<TechCarouselImage[]>;
  update(
    key: string,
    data: UpdateTechCarouselImageDTO,
  ): Promise<TechCarouselImage>;
  delete(key: string): Promise<void>;
  findById(key: string): Promise<TechCarouselImage>;
}
