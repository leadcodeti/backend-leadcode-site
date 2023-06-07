import { Inject, Injectable } from '@nestjs/common';
import { FileService } from 'src/utils/file';
import { ProjectCardImageRepository } from './repositories/projectCardImage.repository';
import { ProjectCardImage } from '@prisma/client';
import { CreateProjectCardImageDTO } from './dtos/CreateProjectCardImage.dto';
import { ProjectCardRepository } from '../projectCard/repositories/projectCard.repository';
import { profileEnd } from 'console';

@Injectable()
export class ProjectCardImageService {
  constructor(
    @Inject('ProjectCardImageRepository')
    private readonly projectCardImageRepository: ProjectCardImageRepository,
    private readonly projectCardRepository: ProjectCardRepository,
    private readonly fileService: FileService,
  ) {}

  async create(data: CreateProjectCardImageDTO): Promise<ProjectCardImage> {
    const projectCard = await this.projectCardRepository.findById(
      data.projectCardId,
    );

    if (!projectCard) {
      throw new Error('This card me does not exist.');
    }

    const projectCardImage = await this.projectCardImageRepository.findById(
      data.projectCardId,
    );

    if (projectCardImage) {
      await this.fileService.deleteFile(
        `./tmp/projectCardImages/${projectCardImage.key}`,
      );
      await this.projectCardImageRepository.delete(data.key);
    }

    data.url = `${process.env.PROJECT_CARD_IMAGE_URL}/${data.key}`;

    const cardToUpdateImage = {
      id: data.projectCardId,
      image: projectCard.image,
      name: projectCard.name,
      slug: projectCard.slug,
      summary_description: projectCard.summaryDescription,
      description: projectCard.description,
      production_url: projectCard.productionUrl,
      behance_url: projectCard.behanceUrl,
      is_selected: projectCard.isSelected,
    };

    await this.projectCardRepository.update(
      data.projectCardId,
      cardToUpdateImage,
    );

    return await this.projectCardImageRepository.create(data);
  }

  async list() {
    return await this.projectCardImageRepository.findAll();
  }

  async delete(key: string, project_card_id: string): Promise<void> {
    const projectCardImageExists =
      await this.projectCardImageRepository.findById(key);
    const projectCard = await this.projectCardRepository.findById(
      project_card_id,
    );

    if (!projectCard) {
      throw new Error('This card does not exist.');
    }

    if (!projectCardImageExists) {
      throw new Error('This image does not exist.');
    }

    await this.fileService.deleteFile(`./tmp/heros/${key}`);

    const cardToUpdateImage = {
      id: projectCard.id,
      image: projectCard.image,
      name: projectCard.name,
      slug: projectCard.slug,
      summary_description: projectCard.summaryDescription,
      description: projectCard.description,
      production_url: projectCard.productionUrl,
      behance_url: projectCard.behanceUrl,
      is_selected: projectCard.isSelected,
    };

    await this.projectCardRepository.update(project_card_id, cardToUpdateImage);

    return await this.projectCardImageRepository.delete(key);
  }
}
