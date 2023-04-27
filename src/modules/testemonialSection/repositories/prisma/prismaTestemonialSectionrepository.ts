import { Injectable } from '@nestjs/common';
import { TestemonialSection } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { TestemonialSectionRepository } from '../testemonialSection.repository';
import { CreateTestemonialSectionDTO } from '../../dtos/CreateTestemonialSection.dto';
import { UpdateTestemonialSectionDTO } from '../../dtos/UpdateTestemonialSection.dto';

@Injectable()
export class PrismaTestemonialSectionRepository
  implements TestemonialSectionRepository
{
  constructor(private prismaService: PrismaService) {}

  async create({
    title,
  }: CreateTestemonialSectionDTO): Promise<TestemonialSection> {
    return await this.prismaService.testemonialSection.create({
      data: {
        title,
        createdAt: new Date(),
      },
    });
  }

  async findAll(): Promise<TestemonialSection[]> {
    return await this.prismaService.testemonialSection.findMany();
  }

  async update(
    id: string,
    data: UpdateTestemonialSectionDTO,
  ): Promise<TestemonialSection> {
    return await this.prismaService.testemonialSection.update({
      data: {
        title: data.title,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.testemonialSection.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<TestemonialSection> {
    const testemonialSectionExists =
      await this.prismaService.testemonialSection.findUnique({
        where: {
          id,
        },
      });

    return testemonialSectionExists;
  }
}
