import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProjectCardImageRepository } from '../projectCardImage.repository';
import { CreateProjectCardImageDTO } from '../../dtos/CreateProjectCardImage.dto';
import { ProjectCardImage } from '@prisma/client';
import { UpdateProjectCardImageDTO } from '../../dtos/UpdateProjectCardImage.dto';

@Injectable()
export class PrismaProjectCardImageRepository
  implements ProjectCardImageRepository
{
  constructor(private prismaService: PrismaService) {}
  async create({
    key,
    name,
    url,
    projectCardId,
    size,
  }: CreateProjectCardImageDTO): Promise<ProjectCardImage> {
    const createHero = await this.prismaService.projectCardImage.create({
      data: {
        projectCardId,
        key,
        name,
        url,
        size,
        createdAt: new Date(),
      },
    });

    return createHero;
  }

  async findAll(): Promise<ProjectCardImage[]> {
    return await this.prismaService.projectCardImage.findMany();
  }

  async update(
    key: string,
    data: UpdateProjectCardImageDTO,
  ): Promise<ProjectCardImage> {
    return await this.prismaService.projectCardImage.update({
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
    await this.prismaService.projectCardImage.delete({
      where: {
        key,
      },
    });
  }

  async findById(key: string): Promise<ProjectCardImage> {
    const heroExists = await this.prismaService.projectCardImage.findUnique({
      where: {
        key,
      },
    });

    return heroExists;
  }
}
