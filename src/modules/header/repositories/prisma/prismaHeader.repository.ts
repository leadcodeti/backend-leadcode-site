import { Header, PrismaClient } from '@prisma/client';
import { HeaderRepository } from '../header.repository';
import { CreateHeaderDTO } from '../../dtos/CreateHeader.dto';
import { UpdateHeaderDTO } from '../../dtos/UpdateHeader.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaHeaderRepository implements HeaderRepository {
  constructor(private prismaClient: PrismaService) {}

  async create({ logo, buttonText }: CreateHeaderDTO): Promise<Header> {
    const createdHeader = await this.prismaClient.header.create({
      data: {
        logo,
        buttonText,
        createdAt: new Date(),
      },
    });

    return createdHeader;
  }

  async findAll(): Promise<Header[]> {
    return await this.prismaClient.header.findMany();
  }

  async update(id: string, data: UpdateHeaderDTO): Promise<Header> {
    return await this.prismaClient.header.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaClient.header.delete({
      where: {
        id,
      },
    });
  }

  async findByLogo(logo: string): Promise<Header> {
    const headerExists = await this.prismaClient.header.findFirst({
      where: {
        logo,
      },
    });

    return headerExists;
  }

  async findById(id: string): Promise<Header> {
    const headerExists = await this.prismaClient.header.findUnique({
      where: {
        id,
      },
    });

    return headerExists;
  }
}
