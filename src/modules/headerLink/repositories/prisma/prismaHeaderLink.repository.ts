import { HeaderLink } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { HeaderLinkRepository } from '../headerLink.repository';
import { CreateHeaderLinkDTO } from '../../dtos/CreateHeaderLink.dto';
import { UpdateHeaderLinkDTO } from '../../dtos/UpdateHeaderLink.dto';

@Injectable()
export class PrismaHeaderLinkRepository implements HeaderLinkRepository {
  constructor(private prismaClient: PrismaService) {}

  async create({
    name,
    link,
    isSelected,
    headerId,
  }: CreateHeaderLinkDTO): Promise<HeaderLink> {
    const createdHeaderLink = await this.prismaClient.headerLink.create({
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
    return await this.prismaClient.headerLink.findMany();
  }

  async update(id: string, data: UpdateHeaderLinkDTO): Promise<HeaderLink> {
    return await this.prismaClient.headerLink.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaClient.headerLink.delete({
      where: {
        id,
      },
    });
  }

  async findByName(name: string): Promise<HeaderLink> {
    const headerExists = await this.prismaClient.headerLink.findFirst({
      where: {
        name,
      },
    });

    return headerExists;
  }

  async findById(id: string): Promise<HeaderLink> {
    const headerExists = await this.prismaClient.headerLink.findUnique({
      where: {
        id,
      },
    });

    return headerExists;
  }
}
