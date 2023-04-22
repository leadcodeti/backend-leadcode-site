import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ServiceCard } from '@prisma/client';
import { ServiceCardRepository } from '../serviceCard.repository';
import { CreateServiceCardDTO } from '../../dtos/CreateServiceCard.dto';
import { UpdateServiceCardDTO } from '../../dtos/UpdateServiceCard.dto';

@Injectable()
export class PrismaServiceCardRepository implements ServiceCardRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    image,
    title,
    content,
    is_selected,
    service_section_id,
  }: CreateServiceCardDTO): Promise<ServiceCard> {
    return await this.prismaService.serviceCard.create({
      data: {
        image,
        title,
        content,
        isSelected: is_selected,
        serviceSectionId: service_section_id,
        createdAt: new Date(),
      },
    });
  }

  async findAll(): Promise<ServiceCard[]> {
    return await this.prismaService.serviceCard.findMany();
  }

  async update(id: string, data: UpdateServiceCardDTO): Promise<ServiceCard> {
    return await this.prismaService.serviceCard.update({
      data: {
        image: data.image,
        title: data.title,
        content: data.content,
        isSelected: data.is_selected,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.serviceCard.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<ServiceCard> {
    const serviceCardExists = await this.prismaService.serviceCard.findUnique({
      where: {
        id,
      },
    });

    return serviceCardExists;
  }

  async findByTitle(title: string): Promise<ServiceCard> {
    const serviceCardExists = await this.prismaService.serviceCard.findFirst({
      where: {
        title,
      },
    });

    return serviceCardExists;
  }
}
