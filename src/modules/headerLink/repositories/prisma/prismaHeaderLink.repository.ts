import { HeaderLink } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { HeaderLinkRepository } from '../headerLink.repository';
import { CreateHeaderLinkDTO } from '../../dtos/CreateHeaderLink.dto';
import { UpdateHeaderLinkDTO } from '../../dtos/UpdateHeaderLink.dto';

@Injectable()
export class PrismaHeaderLinkRepository implements HeaderLinkRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    name,
    link,
    isSelected,
    headerId,
  }: CreateHeaderLinkDTO): Promise<HeaderLink> {
    const createdHeaderLink = await this.prismaService.headerLink.create({
      data: {
        name,
        link,
        isSelected,
        headerId,
        createdAt: new Date(),
      },
    });

    return createdHeaderLink;
  }

  async findAll(): Promise<HeaderLink[]> {
    return await this.prismaService.headerLink.findMany();
  }

  async update(id: string, data: UpdateHeaderLinkDTO): Promise<HeaderLink> {
    return await this.prismaService.headerLink.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.headerLink.delete({
      where: {
        id,
      },
    });
  }

  async findByName(name: string): Promise<HeaderLink> {
    const headerLinkExists = await this.prismaService.headerLink.findFirst({
      where: {
        name,
      },
    });

    return headerLinkExists;
  }

  async findById(id: string): Promise<HeaderLink> {
    const headerLinkExists = await this.prismaService.headerLink.findUnique({
      where: {
        id,
      },
    });

    return headerLinkExists;
  }
}
