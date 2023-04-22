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
    icon,
    name,
    is_selected,
    home_id,
  }: CreateTechCarouselDTO): Promise<TechCarousel> {
    const createTechCarousel = this.prismaService.techCarousel.create({
      data: {
        icon,
        name,
        isSelected: is_selected,
        homeId: home_id,
        createdAt: new Date(),
      },
    });
    return createTechCarousel;
  }

  async findAll(): Promise<TechCarousel[]> {
    return this.prismaService.techCarousel.findMany();
  }

  async update(id: string, data: UpdateTechCarouselDTO): Promise<TechCarousel> {
    return await this.prismaService.techCarousel.update({
      data: {
        icon: data.icon,
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
  async findById(id: string): Promise<void> {
    throw new Error('Method not implemented.');
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
