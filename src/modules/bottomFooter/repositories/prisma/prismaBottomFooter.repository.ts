import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateBottomFooterDTO } from '../../dtos/CreateBottomFooter.dto';
import { BottomFooter } from '@prisma/client';
import { UpdateBottomFooterDTO } from '../../dtos/UpdateBottomFooter.dto';
import { BottomFooterRepository } from '../bottomFooter.repository';

@Injectable()
export class PrismaBottomFooterRepository implements BottomFooterRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    logo,
    privacy_policy,
    year_logo_text,
  }: CreateBottomFooterDTO): Promise<BottomFooter> {
    const createBottomFooter = await this.prismaService.bottomFooter.create({
      data: {
        logo,
        privacyPolicy: privacy_policy,
        yarnLogoText: year_logo_text,
        createdAt: new Date(),
      },
    });
    return createBottomFooter;
  }

  async findAll(): Promise<BottomFooter[]> {
    return await this.prismaService.bottomFooter.findMany();
  }

  async update(id: string, data: UpdateBottomFooterDTO): Promise<BottomFooter> {
    return await this.prismaService.bottomFooter.update({
      data: {
        logo: data.logo,
        privacyPolicy: data.privacy_policy,
        yarnLogoText: data.year_logo_text,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.bottomFooter.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<BottomFooter> {
    const topFooterLinkExists = await this.prismaService.bottomFooter.findFirst(
      {
        where: {
          id,
        },
      },
    );

    return topFooterLinkExists;
  }

  async findByLogo(logo: string): Promise<BottomFooter> {
    const topFooterLinkExists = await this.prismaService.bottomFooter.findFirst(
      {
        where: {
          logo,
        },
      },
    );

    return topFooterLinkExists;
  }
}
