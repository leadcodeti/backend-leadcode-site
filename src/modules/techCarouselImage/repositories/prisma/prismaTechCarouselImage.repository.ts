import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TechCarouselImageRepository } from '../techCarouselImage.repository';
import { CreateTechCarouselImageDTO } from '../../dtos/CreateTechCarouselImage.dto';
import { TechCarouselImage } from '@prisma/client';
import { UpdateTechCarouselImageDTO } from '../../dtos/UpdateTechCarouselImage.dto';

@Injectable()
export class PrismaTechCarouselImageRepository
  implements TechCarouselImageRepository
{
  constructor(private prismaService: PrismaService) {}
  async create({
    key,
    name,
    url,
    techCarouselId,
    size,
  }: CreateTechCarouselImageDTO): Promise<TechCarouselImage> {
    const createTechCarouselImage =
      await this.prismaService.techCarouselImage.create({
        data: {
          techCarouselId,
          key,
          name,
          url,
          size,
          createdAt: new Date(),
        },
      });

    return createTechCarouselImage;
  }

  async findAll(): Promise<TechCarouselImage[]> {
    return await this.prismaService.techCarouselImage.findMany();
  }

  async update(
    key: string,
    data: UpdateTechCarouselImageDTO,
  ): Promise<TechCarouselImage> {
    return await this.prismaService.techCarouselImage.update({
      data: {
        key: data.key,
        name: data.name,
        url: data.url,
        size: data.size,
      },
      where: {
        key,
      },
    });
  }

  async delete(key: string): Promise<void> {
    await this.prismaService.techCarouselImage.delete({
      where: {
        key,
      },
    });
  }

  async findById(key: string): Promise<TechCarouselImage> {
    const techCarouselImageExists =
      await this.prismaService.techCarouselImage.findUnique({
        where: {
          key,
        },
      });

    return techCarouselImageExists;
  }
}
