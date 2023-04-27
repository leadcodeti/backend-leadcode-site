import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProjectSectionRepository } from '../projectSection.repository';
import { CreateProjectSectionDTO } from '../../dtos/CreateProjectSection.dto';
import { ProjectSection } from '@prisma/client';
import { UpdateProjectSectionDTO } from '../../dtos/UpdateProjectSection.dto';

@Injectable()
export class PrismaProjectSectionRepository
  implements ProjectSectionRepository
{
  constructor(private prismaService: PrismaService) {}

  async create({
    title,
    description,
    more_button_text,
  }: CreateProjectSectionDTO): Promise<ProjectSection> {
    return await this.prismaService.projectSection.create({
      data: {
        title,
        description,
        moreButtonText: more_button_text,
        createdAt: new Date(),
      },
    });
  }

  async findAll(): Promise<ProjectSection[]> {
    return await this.prismaService.projectSection.findMany();
  }

  async update(
    id: string,
    data: UpdateProjectSectionDTO,
  ): Promise<ProjectSection> {
    return await this.prismaService.projectSection.update({
      data: {
        title: data.title,
        description: data.description,
        moreButtonText: data.more_button_text,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.projectSection.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<ProjectSection> {
    const projectSectionExists =
      await this.prismaService.projectSection.findUnique({
        where: {
          id,
        },
      });

    return projectSectionExists;
  }

  async findByTitle(title: string): Promise<ProjectSection> {
    const projectSectionExists =
      await this.prismaService.projectSection.findFirst({
        where: {
          title,
        },
      });

    return projectSectionExists;
  }
}
