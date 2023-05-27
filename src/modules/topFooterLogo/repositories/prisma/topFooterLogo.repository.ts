import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TopFooterLogoRepository } from '../topFooterLogo.repository';
import { CreateTopFooterLogoDTO } from '../../dtos/CreateTopFooterLogo.dto';
import { TopFooterLogo } from '@prisma/client';
import { UpdateTopFooterLogoDTO } from '../../dtos/UpdateTopFooterLogo.dto';

@Injectable()
export class PrismaTopFooterLogoRepository implements TopFooterLogoRepository {
  constructor(private prismaService: PrismaService) {}
  async create({
    key,
    name,
    url,
    topFooterId,
    size,
  }: CreateTopFooterLogoDTO): Promise<TopFooterLogo> {
    const createTopFooterLogo = await this.prismaService.topFooterLogo.create({
      data: {
        topFooterId,
        key,
        name,
        url,
        size,
        createdAt: new Date(),
      },
    });

    return createTopFooterLogo;
  }

  async findAll(): Promise<TopFooterLogo[]> {
    return await this.prismaService.topFooterLogo.findMany();
  }

  async update(
    key: string,
    data: UpdateTopFooterLogoDTO,
  ): Promise<TopFooterLogo> {
    return await this.prismaService.topFooterLogo.update({
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
    await this.prismaService.topFooterLogo.delete({
      where: {
        key,
      },
    });
  }

  async findById(key: string): Promise<TopFooterLogo> {
    const topFooterLogoExists =
      await this.prismaService.topFooterLogo.findUnique({
        where: {
          key,
        },
      });

    return topFooterLogoExists;
  }
}
