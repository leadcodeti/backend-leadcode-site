import { Injectable } from '@nestjs/common';
import { Testemonial } from '@prisma/client';
import { TestemonialRepository } from '../testemonial.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateTestemonialDTO } from '../../dtos/CreateTestemonial.dto';
import { UpdateTestemonialDTO } from '../../dtos/UpdateTestemonial.dto';

@Injectable()
export class PrismaTestemoniallRepository implements TestemonialRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    content,
    client_avatar,
    client_name,
    job_position,
    is_selected,
    testemonial_section_id,
  }: CreateTestemonialDTO): Promise<Testemonial> {
    const createTestemonial = await this.prismaService.testemonial.create({
      data: {
        content,
        clientAvatar: client_avatar,
        clientName: client_name,
        jobPosition: job_position,
        isSelected: is_selected,
        testemonialSectionId: testemonial_section_id,
        createdAt: new Date(),
      },
    });
    return createTestemonial;
  }

  async findAll(): Promise<Testemonial[]> {
    return await this.prismaService.testemonial.findMany();
  }

  async update(id: string, data: UpdateTestemonialDTO): Promise<Testemonial> {
    return await this.prismaService.testemonial.update({
      data: {
        content: data.content,
        clientAvatar: data.client_avatar,
        clientName: data.client_name,
        jobPosition: data.job_position,
        isSelected: data.is_selected,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.testemonial.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<Testemonial> {
    const testemonialExists = await this.prismaService.testemonial.findUnique({
      where: {
        id,
      },
    });

    return testemonialExists;
  }

  async findByClientName(client_name: string): Promise<Testemonial> {
    const testemonialExists = await this.prismaService.testemonial.findFirst({
      where: {
        clientName: client_name,
      },
    });

    return testemonialExists;
  }
}
