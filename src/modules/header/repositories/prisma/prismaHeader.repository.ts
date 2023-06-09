import { Header } from '@prisma/client';
import { HeaderRepository } from '../header.repository';
import { CreateHeaderDTO } from '../../dtos/CreateHeader.dto';
import { UpdateHeaderDTO } from '../../dtos/UpdateHeader.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaHeaderRepository implements HeaderRepository {
  constructor(private prismaService: PrismaService) {}

  async create({ logo, button_text }: CreateHeaderDTO): Promise<Header> {
    const createdHeader = await this.prismaService.header.create({
      data: {
        logo,
        buttonText: button_text,
        createdAt: new Date(),
      },
    });

    return createdHeader;
  }

  async findAll(): Promise<Header[]> {
    return await this.prismaService.header.findMany();
  }

  async update(id: string, data: UpdateHeaderDTO): Promise<Header> {
    return await this.prismaService.header.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.header.delete({
      where: {
        id,
      },
    });
  }

  async findByLogo(logo: string): Promise<Header> {
    const headerExists = await this.prismaService.header.findFirst({
      where: {
        logo,
      },
    });

    return headerExists;
  }

  async findById(id: string): Promise<Header> {
    const headerExists = await this.prismaService.header.findUnique({
      where: {
        id,
      },
    });

    return headerExists;
  }
}
