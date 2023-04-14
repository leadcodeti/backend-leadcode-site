import { Injectable } from '@nestjs/common';
import { CreateHeaderDTO } from './CreateHeader.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Header } from '@prisma/client';
import { UpdateHeaderDTO } from './UpdateHeader.dto';

@Injectable()
export class HeaderService {
  constructor(private readonly prismaClient: PrismaService) {}

  async create(data: CreateHeaderDTO): Promise<Header> {
    const headerExists = await this.prismaClient.header.findFirst({
      where: {
        logo: data.logo,
      },
    });

    if (headerExists) {
      throw new Error('This header already exists.');
    }

    data.createdAt = new Date();
    const createdHeader = await this.prismaClient.header.create({
      data,
    });

    return createdHeader;
  }

  async list() {
    return await this.prismaClient.header.findMany();
  }

  async update(id: string, data: UpdateHeaderDTO) {
    const headerExists = await this.prismaClient.header.findUnique({
      where: {
        id,
      },
    });

    if (!headerExists) {
      throw new Error('This header does not exist.');
    }

    return await this.prismaClient.header.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const headerExists = await this.prismaClient.header.findUnique({
      where: {
        id,
      },
    });

    if (!headerExists) {
      throw new Error('This header does not exist.');
    }

    return await this.prismaClient.header.delete({
      where: {
        id,
      },
    });
  }
}
