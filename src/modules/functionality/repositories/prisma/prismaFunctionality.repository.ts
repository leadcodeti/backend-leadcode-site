import { PrismaService } from 'src/database/prisma.service';
import { FunctionalityRepository } from '../funcionality.repository';
import { CreateFunctionalityDTO } from '../../dtos/CreateFunctionality.dto';
import { Functionality } from '@prisma/client';
import { UpdateFunctionalityDTO } from '../../dtos/UpdateFunctionality.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaFunctionalityRepository implements FunctionalityRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    name,
    project_card_id,
  }: CreateFunctionalityDTO): Promise<Functionality> {
    return await this.prismaService.functionality.create({
      data: {
        projectCardId: project_card_id,
        name,
        createdAt: new Date(),
      },
    });
  }

  async findAll(): Promise<Functionality[]> {
    return await this.prismaService.functionality.findMany();
  }

  async update(
    id: string,
    data: UpdateFunctionalityDTO,
  ): Promise<Functionality> {
    return await this.prismaService.functionality.update({
      data: {
        name: data.name,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.functionality.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<Functionality> {
    const appliedTechnologyExists =
      await this.prismaService.functionality.findUnique({
        where: {
          id,
        },
      });

    return appliedTechnologyExists;
  }

  async findByName(name: string): Promise<Functionality> {
    const appliedTechnologyExists =
      await this.prismaService.functionality.findFirst({
        where: {
          name,
        },
      });

    return appliedTechnologyExists;
  }
}
