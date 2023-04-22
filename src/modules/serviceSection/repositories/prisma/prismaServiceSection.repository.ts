import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ServiceSection } from '@prisma/client';
import { UpdateServiceSectionDTO } from '../../dtos/UpdateServiceSection.dto';
import { ServiceSectionRepository } from '../serviceSection.repository';
import { CreateServiceSectionDTO } from '../../dtos/CreateServiceSection.dto';

@Injectable()
export class PrismaServiceSectionRepository
  implements ServiceSectionRepository
{
  constructor(private prismaService: PrismaService) {}

  async create({
    title,
    description,
  }: CreateServiceSectionDTO): Promise<ServiceSection> {
    return await this.prismaService.serviceSection.create({
      data: {
        title,
        description,
        createdAt: new Date(),
      },
    });
  }

  async findAll(): Promise<ServiceSection[]> {
    return await this.prismaService.serviceSection.findMany();
  }

  async update(
    id: string,
    data: UpdateServiceSectionDTO,
  ): Promise<ServiceSection> {
    return await this.prismaService.serviceSection.update({
      data: {
        title: data.title,
        description: data.description,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.serviceSection.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<ServiceSection> {
    const serviceSectionExists =
      await this.prismaService.serviceSection.findUnique({
        where: {
          id,
        },
      });

    return serviceSectionExists;
  }
}
