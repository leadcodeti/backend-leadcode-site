import { Injectable } from '@nestjs/common';
import { TopFooterLinkRepository } from '../topFooterLink.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateTopFooterLinkDTO } from '../../dtos/CreateTopFooterLink.dto';
import { TopFooterLink } from '@prisma/client';
import { UpdateTopFooterLinkDTO } from '../../dtos/UpdateTopFooterLink.dto';

@Injectable()
export class PrismaTopFooterLinkRepository implements TopFooterLinkRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    icon,
    name,
    is_selected,
    top_footer_id,
  }: CreateTopFooterLinkDTO): Promise<TopFooterLink> {
    const createTopFooterLink = await this.prismaService.topFooterLink.create({
      data: {
        icon,
        name,
        isSelected: is_selected,
        topFooterId: top_footer_id,
        createdAt: new Date(),
      },
    });
    return createTopFooterLink;
  }

  async findAll(): Promise<TopFooterLink[]> {
    return await this.prismaService.topFooterLink.findMany();
  }

  async update(
    id: string,
    data: UpdateTopFooterLinkDTO,
  ): Promise<TopFooterLink> {
    return await this.prismaService.topFooterLink.update({
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
    await this.prismaService.topFooterLink.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<TopFooterLink> {
    const topFooterLinkExists =
      await this.prismaService.topFooterLink.findFirst({
        where: {
          id,
        },
      });

    return topFooterLinkExists;
  }

  async findByLinkName(name: string): Promise<TopFooterLink> {
    const topFooterLinkExists =
      await this.prismaService.topFooterLink.findFirst({
        where: {
          name,
        },
      });

    return topFooterLinkExists;
  }
}
