import { PrismaClient, TechCarousel } from '@prisma/client';
import { CreateTechCarouselDTO } from '../../dtos/CreateTechCarousel.dto';
import { TechCarouselRepository } from '../techCarousel.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaTechCarouselRepository implements TechCarouselRepository {
  constructor(private prismaClient: PrismaClient) {}

  async create({
    icon,
    name,
    isSelected,
    homeId,
  }: CreateTechCarouselDTO): Promise<TechCarousel> {
    const createTechCarousel = this.prismaClient.techCarousel.create({
      data: {
        icon,
        name,
        isSelected,
        homeId,
        createdAt: new Date(),
      },
    });
    return createTechCarousel;
  }

  async findByName(name: string): Promise<TechCarousel> {
    const techCarouselExists = this.prismaClient.techCarousel.findFirst({
      where: {
        name,
      },
    });

    return techCarouselExists;
  }
}
