import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProjectCardRepository } from '../projectCard.repository';
import { ProjectCard } from '@prisma/client';
import { CreateProjectCardDTO } from '../../dtos/CreateProjectCard.dto';
import { UpdateProjectCardDTO } from '../../dtos/UpdateProjectCard.dto';
import { ListProjectCardsDTO } from '../../dtos/ListProjectCards.dto';

@Injectable()
export class PrismaProjectCardRepository implements ProjectCardRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    name,
    slug,
    summary_description,
    description,
    production_url,
    behance_url,
    category,
    is_selected,
    project_section_id,
  }: CreateProjectCardDTO): Promise<ProjectCard> {
    return await this.prismaService.projectCard.create({
      data: {
        name,
        slug,
        summaryDescription: summary_description,
        description,
        productionUrl: production_url,
        behanceUrl: behance_url,
        category,
        isSelected: is_selected,
        projectSectionId: project_section_id,
        createdAt: new Date(),
      },
    });
  }

  async findAll(): Promise<ProjectCard[]> {
    return await this.prismaService.projectCard.findMany();
  }

  async listProjectCardsFullData(): Promise<ListProjectCardsDTO[]> {
    const fullData = await this.prismaService.projectCard.findMany({
      include: {
        ProjectCardImage: true,
        functionality: true,
        appliedTechnology: true,
      },
    });

    const projectCards: ListProjectCardsDTO[] = fullData.map((data) => {
      const images = data.ProjectCardImage.map((image) => image.url);
      return {
        id: data.id,
        images: images,
        name: data.name,
        slug: data.slug,
        summary_description: data.summaryDescription,
        description: data.description,
        production_url: data.productionUrl,
        behance_url: data.behanceUrl,
        category: data.category,
        applied_technologies: data.appliedTechnology.map((tech) => tech.name),
        functionalities: data.functionality.map((func) => func.name),
        is_selected: data.isSelected,
        project_section_id: data.projectSectionId,
      };
    });

    return projectCards;
  }

  async update(id: string, data: UpdateProjectCardDTO): Promise<ProjectCard> {
    return await this.prismaService.projectCard.update({
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description,
        productionUrl: data.production_url,
        behanceUrl: data.behance_url,
        category: data.category,
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
