import { TechCarousel } from '@prisma/client';
import { CreateTechCarouselDTO } from '../../dtos/CreateTechCarousel.dto';
import { TechCarouselRepository } from '../techCarousel.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateTechCarouselDTO } from '../../dtos/UpdateTechCarousel.dto';

@Injectable()
export class PrismaTechCarouselRepository implements TechCarouselRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    name,
    is_selected,
    home_id,
  }: CreateTechCarouselDTO): Promise<TechCarousel> {
    const createTechCarousel = await this.prismaService.techCarousel.create({
      data: {
        name,
        homeId: home_id,
        isSelected: is_selected,
        createdAt: new Date(),
      },
    });
    return createTechCarousel;
  }

  async findAll(): Promise<TechCarousel[]> {
    return await this.prismaService.techCarousel.findMany();
  }

  async update(id: string, data: UpdateTechCarouselDTO): Promise<TechCarousel> {
    return await this.prismaService.techCarousel.update({
      data: {
        name: data.name,
        isSelected: data.is_selected,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.techCarousel.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<TechCarousel> {
    const techCarouselExists = await this.prismaService.techCarousel.findFirst({
      where: {
        id,
      },
    });

    return techCarouselExists;
  }

  async findByName(name: string): Promise<TechCarousel> {
    const techCarouselExists = await this.prismaService.techCarousel.findFirst({
      where: {
        name,
      },
    });

    return techCarouselExists;
  }
}
