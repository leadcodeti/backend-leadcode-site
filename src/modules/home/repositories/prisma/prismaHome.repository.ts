import { Home } from '@prisma/client';
import { HomeRepository } from '../home.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateHomeDTO } from '../../dtos/UpdateHome.dto';
import { CreateHomeDTO } from '../../dtos/CreateHome.dto';

@Injectable()
export class PrismaHomeRepository implements HomeRepository {
  constructor(private prismaService: PrismaService) {}
  async create({
    headline,
    subheadline,
    cta_button_text,
    header_id,
  }: CreateHomeDTO): Promise<Home> {
    const createHome = await this.prismaService.home.create({
      data: {
        headline,
        subheadline,
        ctaButtonText: cta_button_text,
        headerId: header_id,
        createdAt: new Date(),
      },
    });

    return createHome;
  }

  async findAll(): Promise<Home[]> {
    return await this.prismaService.home.findMany();
  }

  async update(id: string, data: UpdateHomeDTO): Promise<Home> {
    return await this.prismaService.home.update({
      data: {
        headline: data.headline,
        subheadline: data.subheadline,
        ctaButtonText: data.cta_button_text,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.home.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<Home> {
    const homeExists = await this.prismaService.home.findUnique({
      where: {
        id,
      },
    });

    return homeExists;
  }

  async findByHeadline(headline: string): Promise<Home> {
    const homeExists = await this.prismaService.home.findFirst({
      where: {
        headline,
      },
    });

    return homeExists;
  }
}
