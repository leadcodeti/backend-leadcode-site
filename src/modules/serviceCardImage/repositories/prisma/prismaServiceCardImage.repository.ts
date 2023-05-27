import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ServiceCardImageRepository } from '../serviceCardImage.repository';
import { ServiceCardImage } from '@prisma/client';
import { CreateServiceCardImageDTO } from '../../dtos/CreateServiceCardImage.dto';
import { UpdateServiceCardImageDTO } from '../../dtos/UpdateServiceCardImage.dto';

@Injectable()
export class PrismaServiceCardImageRepository
  implements ServiceCardImageRepository
{
  constructor(private prismaService: PrismaService) {}
  async create({
    key,
    name,
    url,
    serviceCardId,
    size,
  }: CreateServiceCardImageDTO): Promise<ServiceCardImage> {
    const createServiceCardImage =
      await this.prismaService.serviceCardImage.create({
        data: {
          serviceCardId,
          key,
          name,
          url,
          size,
          createdAt: new Date(),
        },
      });

    return createServiceCardImage;
  }

  async findAll(): Promise<ServiceCardImage[]> {
    return await this.prismaService.serviceCardImage.findMany();
  }

  async update(
    key: string,
    data: UpdateServiceCardImageDTO,
  ): Promise<ServiceCardImage> {
    return await this.prismaService.serviceCardImage.update({
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
    await this.prismaService.serviceCardImage.delete({
      where: {
        key,
      },
    });
  }

  async findById(key: string): Promise<ServiceCardImage> {
    const serviceCardImageExists =
      await this.prismaService.serviceCardImage.findUnique({
        where: {
          key,
        },
      });

    return serviceCardImageExists;
  }
}
