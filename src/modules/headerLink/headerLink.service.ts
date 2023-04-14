import { Injectable } from '@nestjs/common';
import { CreateHeaderLinkDTO } from './CreateHeaderLink.dto';
import { PrismaService } from 'src/database/prisma.service';
import { HeaderLink } from '@prisma/client';

@Injectable()
export class HeaderLinkService {
  constructor(private prismaClient: PrismaService) {}

  async create(data: CreateHeaderLinkDTO): Promise<HeaderLink> {
    const headerLinkExists = await this.prismaClient.headerLink.findFirst({
      where: {
        name: data.name,
      },
    });

    if (headerLinkExists) {
      throw new Error('This link already exists.');
    }

    data.createdAt = new Date();
    const headerLink = await this.prismaClient.headerLink.create({
      data,
    });

    return headerLink;
  }
}
