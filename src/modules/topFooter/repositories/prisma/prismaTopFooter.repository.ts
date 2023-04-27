import { Injectable } from '@nestjs/common';
import { TopFooterRepository } from '../topFooter.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateTopFooterDTO } from '../../dtos/CreateTopFooter.dto';
import { TopFooter } from '@prisma/client';
import { UpdateTopFooterDTO } from '../../dtos/UpdateTopFooter.dto';

@Injectable()
export class PrismaTopFooterRepository implements TopFooterRepository {
  constructor(private prismaService: PrismaService) {}

  async create({ logo }: CreateTopFooterDTO): Promise<TopFooter> {
    const createTopFooter = await this.prismaService.topFooter.create({
      data: {
        logo,
        createdAt: new Date(),
      },
    });
    return createTopFooter;
  }

  async findAll(): Promise<TopFooter[]> {
    return await this.prismaService.topFooter.findMany();
  }

  async update(id: string, data: UpdateTopFooterDTO): Promise<TopFooter> {
    return await this.prismaService.topFooter.update({
      data: {
        logo: data.logo,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.topFooter.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<TopFooter> {
    const topFooterExists = await this.prismaService.topFooter.findUnique({
      where: {
        id,
      },
    });

    return topFooterExists;
  }

  async findByLogo(logo: string): Promise<TopFooter> {
    const topFooterExists = await this.prismaService.topFooter.findFirst({
      where: {
        logo: logo,
      },
    });

    return topFooterExists;
  }
}
