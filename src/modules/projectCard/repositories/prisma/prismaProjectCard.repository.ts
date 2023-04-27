import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProjectCardRepository } from '../projectCard.repository';
import { ProjectCard } from '@prisma/client';
import { CreateProjectCardDTO } from '../../dtos/CreateProjectCard.dto';
import { UpdateProjectCardDTO } from '../../dtos/UpdateProjectCard.dto';

@Injectable()
export class PrismaProjectCardRepository implements ProjectCardRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    image,
    name,
    description,
    is_selected,
    project_section_id,
  }: CreateProjectCardDTO): Promise<ProjectCard> {
    return await this.prismaService.projectCard.create({
      data: {
        image,
        name,
        description,
        isSelected: is_selected,
        projectSectionId: project_section_id,
        createdAt: new Date(),
      },
    });
  }

  async findAll(): Promise<ProjectCard[]> {
    return await this.prismaService.projectCard.findMany();
  }

  async update(id: string, data: UpdateProjectCardDTO): Promise<ProjectCard> {
    return await this.prismaService.projectCard.update({
      data: {
        image: data.image,
        name: data.name,
        description: data.description,
        isSelected: data.is_selected,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.projectCard.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<ProjectCard> {
    const projectCardExists = await this.prismaService.projectCard.findUnique({
      where: {
        id,
      },
    });

    return projectCardExists;
  }

  async findByName(name: string): Promise<ProjectCard> {
    const projectCardExists = await this.prismaService.projectCard.findFirst({
      where: {
        name,
      },
    });

    return projectCardExists;
  }
}
