import { Injectable } from '@nestjs/common';
import { FormSectionRepository } from '../formSection.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateFormSectionDTO } from '../../dtos/CreateFormSection.dto';
import { FormSection } from '@prisma/client';
import { UpdateFormSectionDTO } from '../../dtos/UpdateFormSection.dto';

@Injectable()
export class PrismaFormSectionRepository implements FormSectionRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    title,
    description,
  }: CreateFormSectionDTO): Promise<FormSection> {
    return await this.prismaService.formSection.create({
      data: {
        title,
        description,
        createdAt: new Date(),
      },
    });
  }

  async findAll(): Promise<FormSection[]> {
    return await this.prismaService.formSection.findMany();
  }

  async update(id: string, data: UpdateFormSectionDTO): Promise<FormSection> {
    return await this.prismaService.formSection.update({
      data: {
        title: data.title,
        description: data.description,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.formSection.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<FormSection> {
    const formSectionExists = await this.prismaService.formSection.findUnique({
      where: {
        id,
      },
    });

    return formSectionExists;
  }
  async findByTitle(title: string): Promise<FormSection> {
    const formSectionExists = await this.prismaService.formSection.findFirst({
      where: {
        title,
      },
    });

    return formSectionExists;
  }
}
