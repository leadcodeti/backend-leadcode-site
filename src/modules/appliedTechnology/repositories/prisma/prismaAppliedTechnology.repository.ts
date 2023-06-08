import { PrismaService } from 'src/database/prisma.service';
import { AppliedTechnologyRepository } from '../appliedTechnology.repository';
import { CreateAppliedTechnologyDTO } from '../../dtos/CreateAppliedTechnology.dto';
import { AppliedTechnology } from '@prisma/client';
import { UpdateAppliedTechnologyDTO } from '../../dtos/UpdateAppliedTechnology.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaAppliedTechnologyRepository
  implements AppliedTechnologyRepository
{
  constructor(private prismaService: PrismaService) {}

  async create({
    name,
    project_card_id,
  }: CreateAppliedTechnologyDTO): Promise<AppliedTechnology> {
    return await this.prismaService.appliedTechnology.create({
      data: {
        projectCardId: project_card_id,
        name,
        createdAt: new Date(),
      },
    });
  }

  async findAll(): Promise<AppliedTechnology[]> {
    return await this.prismaService.appliedTechnology.findMany();
  }

  async update(
    id: string,
    data: UpdateAppliedTechnologyDTO,
  ): Promise<AppliedTechnology> {
    return await this.prismaService.appliedTechnology.update({
      data: {
        name: data.name,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.appliedTechnology.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<AppliedTechnology> {
    const appliedTechnologyExists =
      await this.prismaService.appliedTechnology.findUnique({
        where: {
          id,
        },
      });

    return appliedTechnologyExists;
  }

  async findByName(name: string): Promise<AppliedTechnology> {
    const appliedTechnologyExists =
      await this.prismaService.appliedTechnology.findFirst({
        where: {
          name,
        },
      });

    return appliedTechnologyExists;
  }
}
