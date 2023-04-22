import { TechCarousel } from '@prisma/client';
import { CreateTechCarouselDTO } from '../../dtos/CreateTechCarousel.dto';
import { TechCarouselRepository } from '../techCarousel.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaTechCarouselRepository implements TechCarouselRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    icon,
    name,
    isSelected,
    homeId,
  }: CreateTechCarouselDTO): Promise<TechCarousel> {
    const createTechCarousel = this.prismaService.techCarousel.create({
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
    const techCarouselExists = this.prismaService.techCarousel.findFirst({
      where: {
        name,
      },
    });

    return techCarouselExists;
  }
}
